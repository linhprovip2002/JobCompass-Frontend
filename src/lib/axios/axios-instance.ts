import { AuthService } from '@/services/auth.service';
import { ApiResponse } from 'api-types';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

function handleErrorRequest(response: ApiResponse<any>) {
    if (response.payload?.code >= 400) {
        throw new Error(response.payload.message_code);
    }
}

export function storeTokenInfo(accessToken: string, accessType: string, expires: number) {
    localStorage.setItem('access_token', JSON.stringify(accessToken));
    localStorage.setItem('access_type', JSON.stringify(accessType));
    localStorage.setItem('access_expires', JSON.stringify(Date.now() + expires));
}

function getStoredTokenInfo() {
    return {
        isLogged: localStorage.getItem('logged') === 'true',
        accessToken: localStorage.getItem('access_token') || '',
        accessType: localStorage.getItem('access_type') || 'Bearer',
        tokenExpires: parseInt(localStorage.getItem('access_expires') || '0', 10),
    };
}

const authAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_SERVER_URL,
    timeout: 10000,
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
});

authAxios.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        const { isLogged, accessToken, accessType, tokenExpires } = getStoredTokenInfo();

        
        if (isLogged && tokenExpires && tokenExpires < Date.now()) {
            const res = await AuthService.refreshToken();
            console.log(res)
            if (res) {
                console.log('first')
                storeTokenInfo(res.accessToken, res.tokenType, res.accessTokenExpires);
                config.headers['Authorization'] = `${res.tokenType} ${res.accessToken}`;
                return config;
            }
        }
        
        if (accessToken && accessType) {
            config.headers['Authorization'] = `${accessType} ${accessToken}`;
        }
        return config;
    },
    (error) => {
        console.log('Error here', error)
        return Promise.reject(error)
    }
);

authAxios.interceptors.response.use(
    (response: AxiosResponse) => {
        handleErrorRequest(response.data);
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            console.error('Unauthorized! Redirecting to login...');
        }
        return Promise.reject(error);
    }
);

const nonAuthAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_SERVER_URL,
    timeout: 10000,
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
})

export { authAxios, nonAuthAxios };
