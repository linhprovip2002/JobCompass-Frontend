import { ApiResponse } from 'api-types';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

class MyAxios {
    private instance: AxiosInstance;
    private accessToken: string;
    private authenticationScheme: string;

    constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL,
            headers: { 'Content-Type': 'application/json' },
        });
        this.accessToken = '';
        this.authenticationScheme = '';

        this._initializeInterceptors();
    }

    private _initializeInterceptors() {
        // this.instance.interceptors.request.use(
        //     (config: InternalAxiosRequestConfig) => {
        //         if (this.accessToken) {
        //             config.headers.Authorization = `${this.authenticationScheme} ${this.accessToken}`;
        //         }
        //         return config;
        //     },
        //     (error) => Promise.reject(error)
        // );

        this.instance.interceptors.response.use(
            (response: AxiosResponse) => {
                this.handleErrorRequest(response.data as ApiResponse); // if error, throw for catching error
                return response;
            },
            (error) => {
                if (error.response?.status === 401) {
                    console.error('Unauthorized! Redirect to login.');
                }
                return Promise.reject(error);
            }
        );
    }

    private setAccessToken(accessToken: string) {
        this.accessToken = accessToken;
    }

    public setAuthenticationScheme(type: string) {
        this.authenticationScheme = type;
    }

    public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.get<T>(url, config).then((res) => res.data);
    }

    public post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.post<T>(url, data, config).then((res) => res.data);
    }

    public put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.put<T>(url, data, config).then((res) => res.data);
    }

    public patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.patch<T>(url, data, config).then((res) => res.data);
    }

    public delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.delete<T>(url, config).then((res) => res.data);
    }

    private handleErrorRequest(response: ApiResponse) {
        const codeStatus = response.payload.code;
        if (codeStatus >= 400) {
            throw new Error(response.payload.message_code);
        }
    }
}

const myAxios = new MyAxios(process.env.NEXT_PUBLIC_APP_SERVER_URL || '');

export { myAxios };
