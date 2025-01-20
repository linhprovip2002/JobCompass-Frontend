import { SignInCredentials } from 'form-credentials';

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
