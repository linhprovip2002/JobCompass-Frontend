declare module 'api-types' {
    interface ApiResponse<T> {
        payload: {
            code: number;
            message_code;
            value?: T;
        };
        timestamp: number;
    }

    interface UserType {
        createdAt: string;
        updatedAt: string;
        isActive: boolean;
        accountId: string;
        email: string;
        status: string;
        roles: string[];
    }

    namespace DetailedResponse {
        interface RefreshToken {
            tokenType: string;
            accessToken: string;
            accessTokenExpires: number;
        }
        interface SignIn extends RefreshToken {
            user: UserType;
        }
    }
}
