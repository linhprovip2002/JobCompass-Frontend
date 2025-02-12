import { BaseAxios } from '@/lib/axios';
import { ApiResponse, DetailedResponse } from 'api-types';

const axios = new BaseAxios('auth')

export class AuthService {
    public static async login() {}

    public static async logout() {}

    public static async register() {}

    public static async refreshToken(): Promise<DetailedResponse.RefreshToken | undefined> {
        try {
            console.log('Run refresh api')
            const res = await axios.post<ApiResponse<DetailedResponse.RefreshToken>>('/refresh-token', {});
            return res.payload.value;
        } catch (error) {
            console.error('Refresh token call API :', error);
            throw new Error(String(error));
        }
    }
}
