import { z } from 'zod';

const signUpSchema = z
    .object({
        full_name: z.string().min(1, 'Full name is required'),
        username: z
            .string()
            .min(4, 'Username must be at least 4 characters')
            .max(20, 'Username must be at most 20 characters.'),
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

export { signUpSchema, verifySignInScheme, verifyEmailScheme };
