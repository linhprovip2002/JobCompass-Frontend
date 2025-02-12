import { ForgetPasswordCredentials, SignInCredentials, SignUpCredentials } from 'form-credentials';
import { ApiResponse, DetailedResponse } from 'api-types';
import { BaseAxios } from './axios';

export const signInSubmit = async (currentState: SignInCredentials, formData: FormData) => {
    // conduct validate & submit...

    const email = formData.get('email')?.toString() ?? '';
    const password = formData.get('password')?.toString() ?? '';

    const axios = new BaseAxios('auth')

    const res = await axios.post<ApiResponse<DetailedResponse.SignIn>>('/login', {username: email, password})
    if (res.payload.value)
        axios.storeTokenInfo(res.payload.value?.accessToken, res.payload.value?.tokenType, res.payload.value?.accessTokenExpires)

    return currentState;
};

export const signUpSubmit = async (currentState: SignUpCredentials, formData: FormData) => {
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
