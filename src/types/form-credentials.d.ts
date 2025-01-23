declare module 'form-credentials' {
    interface SignInCredentials {
        email: string;
        password: string;
    }

    interface SignUpCredentials {
        roleId: string | number;
        fullName: string;
        username: string;
        email: string;
        password: string;
        confirmPassword: string;
    }
}
