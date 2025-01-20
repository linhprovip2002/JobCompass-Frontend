'use client';

import Link from 'next/link';
import { Input } from '../ui/input';
import { useActionState, useId, useState } from 'react';
import { InputPassword } from '@/components/custom-ui/input-password';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { LuArrowRight } from 'react-icons/lu';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa6';
import { signInSubmit } from '@/lib/action';

export function FormSignIn() {
    const [showPassword, setShowPassword] = useState(false);

    const [state, formAction] = useActionState(signInSubmit, {
        email: '',
        password: '',
    });

    const checkboxId = useId();

    return (
        <form className="sign-in-form flex flex-col space-y-8" action={formAction}>
            <div>
                <h5 className="mb-4 text-[32px] leading-10 font-medium">Sign in</h5>
                <p className="inline text-gray-600">Don't have account</p>&nbsp;
                <Link href="/sign-up" className="text-primary font-medium">
                    Create account
                </Link>
            </div>
            <div className="space-y-5">
                <Input
                    defaultValue={state.email}
                    name="email"
                    placeholder="Email address"
                    type="text"
                    className="h-12 rounded-sm focus-visible:border-primary focus-visible:ring-primary"
                />
                <InputPassword
                    defaultValue={state.password}
                    name="password"
                    placeholder="Password"
                    type="text"
                    hide={showPassword}
                    setHide={setShowPassword}
                    className="h-12 rounded-sm border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary focus-visible:ring-primary"
                />
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[10px] text-gray-500">
                        <Checkbox name="remember" id={checkboxId} className="size-5 border-primary-200 shadow-none" />
                        <label htmlFor={checkboxId} className="select-none cursor-pointer text-sm">
                            Remember me
                        </label>
                    </div>
                    <Link href="/forgot-password" className="text-primary text-sm hover:underline font-medium">
                        Forget password
                    </Link>
                </div>
            </div>
            <Button type="submit" className="group h-14 rounded-sm text-base [&_svg]:size-6 font-semibold">
                Sign in <LuArrowRight className="group-hover:translate-x-2 transition-all" />
            </Button>
            <div className="space-y-4">
                <p className="text-center text-sm text-gray-500">or</p>
                <div className="flex items-center flex-wrap justify-between gap-x-5 gap-y-2">
                    <Button className="flex-1 h-11 rounded-sm [&_svg]:size-5" variant="outline" type="button">
                        <FaFacebookF className="text-primary" /> Sign in with Facebook
                    </Button>
                    <Button className="flex-1 h-11 rounded-sm [&_svg]:size-5" variant="outline" type="button">
                        <FcGoogle /> Sign in with Google
                    </Button>
                </div>
            </div>
        </form>
    );
}
