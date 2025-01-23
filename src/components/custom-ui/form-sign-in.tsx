'use client';

import Link from 'next/link';
import { Input } from '../ui/input';
import { useActionState, useId, useState } from 'react';
import { InputPassword } from '@/components/custom-ui/input-password';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { LuArrowRight } from 'react-icons/lu';
import { signInSubmit } from '@/lib/action';
import { ButtonOptionsSignIn } from '@/components/custom-ui/button-options-sign-in';

export function FormSignIn() {
    const [showPassword, setShowPassword] = useState(false);

    const [state, onSubmit, isPending] = useActionState(signInSubmit, {
        email: '',
        password: '',
    });

    const checkboxId = useId();

    return (
        <form className="sign-in-form flex flex-col space-y-8" action={onSubmit}>
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
                    hide={!showPassword}
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
            <Button
                type="submit"
                className="group h-14 rounded-sm text-base [&_svg]:size-6 font-semibold"
                isPending={isPending}
            >
                Sign in <LuArrowRight className="group-hover:translate-x-2 transition-all" />
            </Button>
            <div className="space-y-4">
                <p className="text-center text-sm text-gray-500">or</p>
                <ButtonOptionsSignIn />
            </div>
        </form>
    );
}
