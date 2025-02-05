import {  ForgetPasswordCredentials, SignInCredentials, SignUpCredentials } from 'form-credentials';

export const signInSubmit = (currentState: SignInCredentials, formData: FormData) => {
    // conduct validate & submit...

    const email = formData.get('email')?.toString() ?? '';
    const password = formData.get('password')?.toString() ?? '';

    console.log({
        email,
        password,
    });

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
