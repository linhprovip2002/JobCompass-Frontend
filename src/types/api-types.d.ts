declare module 'api-types' {
    interface ApiResponse {
        payload: {
            code: number;
            message_code;
            value?: T;
        };
        timestamp: number;
    }
}
