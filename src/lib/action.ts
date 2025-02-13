import { BaseAxios } from './axios';
import * as services from '@/services/auth.service';
import { DetailedRequest } from 'api-types';
import { toast } from 'react-toastify';
import { errorKeyMessage } from './errors';
import { signUpSchema, verifyEmailScheme, verifySignInScheme } from './zod-schemas';

export const signInSubmit = async (currentState: DetailedRequest.SignInRequest, formData: FormData) => {
    const username = formData.get('username')?.toString() ?? '';
    const password = formData.get('password')?.toString() ?? '';
    const data = { username, password };
    const axios = new BaseAxios('auth');
    const validate = verifySignInScheme.safeParse(data);

    currentState.username = username;
    currentState.password = password;

    console.log(validate.success);

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
            errors: {},
            success: true,
        };
    } catch (err: any) {
        if (err.props.title) {
            const errorMessage = errorKeyMessage[err.props.title as keyof typeof errorKeyMessage];
            toast.error(errorMessage);
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

    currentState.full_name = formValue.full_name;
    currentState.username = formValue.username;
    currentState.email = formValue.email;
    currentState.password = formValue.password;
    currentState.confirmPassword = formValue.confirmPassword;

    const validation = signUpSchema.safeParse(formValue);
    console.log(validation);

    if (!validation.success) {
        return {
            ...currentState,
            errors: validation.error.flatten().fieldErrors,
            success: false,
        };
    }
    try {
        const temp = await services.AuthService.register(formValue);
        if (temp.code >= 200 && temp.code <= 299) {
            return {
                ...currentState,
                errors: {},
                success: true,
            };
        }
    } catch (error: any) {
        if (error.props.title) {
            const errorMessage = errorKeyMessage[error.props.title as keyof typeof errorKeyMessage] || 'Oops!';
            toast.error(errorMessage);
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
                errors: {},
                ...currentState,
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
