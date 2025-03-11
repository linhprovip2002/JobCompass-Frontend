import { AuthAxios } from '@/lib/axios';
import { ApiResponse } from '@/types';
import axios, { AxiosError } from 'axios';
import Error from 'next/error';

const authAxios = new AuthAxios('upload');

export class UploadService {
    public static uploadFile = async (file: File) => {
        try {
            // Step 1: Get the presigned URL from the backend
            const res = await authAxios.get<ApiResponse<{ url: string; key: string }>>('/presigned-url', {
                params: { filename: file.name, 'content-type': file.type },
            });

            if (!res.payload.value?.url) {
                return { success: false };
            }

            const { url, key } = res.payload.value;

            // Step 2: Upload the file to S3
            await axios.put(url, file, {
                headers: { 'Content-Type': file.type },
                withCredentials: false,
            });
            const fileUrl = `${process.env.NEXT_PUBLIC_APP_AWS_S3_STORAGE_URL}/${key}`;

            return { success: true, key, fileUrl };
        } catch (err) {
            console.error('Upload failed:', err);
            if (err instanceof AxiosError) {
                throw new Error({
                    statusCode: Number(err.status || err.response?.status),
                    title: err.response?.data.message,
                });
            }
            throw err;
        }
    };
}
