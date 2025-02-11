import { ForgetPasswordCredentials, SignInCredentials, SignUpCredentials } from 'form-credentials';
import { storeTokenInfo } from './axios';
import { ApiResponse, DetailedResponse } from 'api-types';

export const signInSubmit = async (currentState: SignInCredentials, formData: FormData) => {
    // conduct validate & submit...

    const email = formData.get('email')?.toString() ?? '';
    const password = formData.get('password')?.toString() ?? '';

    return currentState;
};

export const signUpSubmit = (currentState: SignUpCredentials, formData: FormData) => {
    const roleId = formData.get('roleId');
    const fullName = formData.get('fullName');
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    console.log({
        roleId,
        fullName,
        username,
        email,
        password,
        confirmPassword,
    });

    //     handle call api
    //     ...

    return currentState;
};

export const forgetPasswordSubmit = (currentState: ForgetPasswordCredentials, formData: FormData) => {
    const email = formData.get('email');

    console.log({ email });

    //     handle call api
    //     ...

    return currentState;
};
