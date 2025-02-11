import { nonAuthAxios } from '@/lib/axios';
import { ApiResponse, DetailedResponse } from 'api-types';

export class AuthService {
    public static async login() {}

    public static async logout() {}

    public static async register() {}

    public static async refreshToken(): Promise<DetailedResponse.RefreshToken | undefined> {
        try {
            const res = await nonAuthAxios.post<ApiResponse<DetailedResponse.RefreshToken>>(
                '/auth/refresh-token',
                {},
            );
            return res.data.payload.value;
        } catch (error) {
            console.error('Refresh token call API :', error);
            throw new Error(String(error));
        }
    }
}
