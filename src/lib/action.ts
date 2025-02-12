import { BaseAxios } from './axios';
import { z } from 'zod';
import * as services from '@/services/auth.service';
import { DetailedRequest } from 'api-types';

const signUpSchema = z
    .object({
        full_name: z.string().min(1, 'Full name is required'),
        username: z.string().min(1, 'Username is required'),
        email: z.string().min(1, 'Email is required').email('Invalid email'),
        password: z.string().min(8, 'Password must be at least 8 characters'),
        confirmPassword: z.string().min(8, 'Confirm Password is required'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    });

const verifyEmailScheme = z.object({
    code: z.string().min(6, 'Code is required'),
});

const verifySignInScheme = z.object({
    username: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z.string().min(1, 'Password is required'),
});
export const signInSubmit = async (currentState: DetailedRequest.SignInRequest, formData: FormData) => {
    const username = formData.get('username')?.toString() ?? '';
    const password = formData.get('password')?.toString() ?? '';
    const data = { username, password };
    const axios = new BaseAxios('auth');
    const validate = verifySignInScheme.safeParse(data);
    console.log(validate);
    if (!validate.success) {
        return {
            ...currentState,
            errors: {
                ...validate.error.flatten().fieldErrors,
            },
            success: false,
        };
    }
    try {
        const res = await services.AuthService.login(data);
        if (res.value)
            axios.storeTokenInfo(res.value?.accessToken, res.value?.tokenType, res.value?.accessTokenExpires);
        return {
            ...currentState,
            success: true,
            errors: {},
        };
    } catch (err: any) {
        if (err.props.title === 'NOT_FOUND_USER_EXCEPTION') {
            return {
                ...currentState,
                errors: {
                    username: ['User Name Not Found'],
                },
                success: false,
            };
        } else if (err.props.title === 'INVALID_CREDENTIALS') {
            return {
                ...currentState,
                errors: {
                    password: ['Invalid Password'],
                },
                success: false,
            };
        }
    }
    return {
        ...currentState,
        errors: {},
        success: false,
    };
};

export const signUpSubmit = async (currentState: DetailedRequest.SignUpRequest, formData: FormData) => {
    const formValue = {
        full_name: formData.get('full_name')?.toString() || '',
        username: formData.get('username')?.toString() || '',
        email: formData.get('email')?.toString() || '',
        password: formData.get('password')?.toString() || '',
        confirmPassword: formData.get('confirmPassword')?.toString() || '',
    };
    const validation = signUpSchema.safeParse(formValue);

    if (!validation.success) {
        return {
            ...currentState,
            errors: validation.error.flatten().fieldErrors,
            success: false,
            email: formValue.email,
        };
    }
    try {
        const temp = await services.AuthService.register(formValue);
        if (temp.code >= 200 && temp.code <= 299) {
            return {
                ...currentState,
                errors: {},
                success: true,
                email: formValue.email,
            };
        }
    } catch (error: any) {
        console.log(error.props.title);
        if (error.props.title === 'AUTH_REGISTER_EMAIL_EXISTS') {
            return {
                ...currentState,
                errors: {
                    email: ['This email is already registered.'],
                },
                success: false,
            };
        }
    }
    return { ...currentState, errors: {}, success: false };
};

export const forgetPasswordSubmit = (currentState: DetailedRequest.ForgetPasswordRequest, formData: FormData) => {
    const email = formData.get('email');

    console.log({ email });

    //     handle call api
    //     ...

    return currentState;
};

export const verifyEmail = async (currentState: DetailedRequest.VerifyEmailRequest, formData: FormData) => {
    console.log('1', currentState);
    const email = currentState.email;
    const code = formData.get('code')?.toString() || '';
    const formValue = { email, code };
    const validation = verifyEmailScheme.safeParse(formValue);
    if (!validation.success) {
        return {
            ...currentState,
            errors: validation.error.flatten().fieldErrors,
            success: false,
        };
    }
    try {
        const temp = await services.AuthService.verifyEmail(formValue);
        if (temp.code >= 200 && temp.code <= 299) {
            return {
                ...currentState,
                errors: {},
                success: true,
            };
        }
    } catch (error: any) {
        console.log(error.props.title);
        if (error.props.title === 'AUTH_VERIFY_CODE_INVALID') {
            return {
                ...currentState,
                errors: {
                    code: ['Verify Code Invalid.'],
                },
                success: false,
            };
        }
    }
    return { ...currentState, errors: {}, success: false };
};
