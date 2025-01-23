'use client';

import { LuArrowRight } from 'react-icons/lu';
import React, { useActionState } from 'react';
import { resetPasswordSubmit } from '@/lib/action';
import { ButtonOptionsSignIn } from '@/components/custom-ui/button-options-sign-in';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function FormResetPassword() {
    const [state, onSubmit, isPending] = useActionState(resetPasswordSubmit, { email: '' });

    return (
        <form className="sign-up-form flex flex-col gap-y-8" action={onSubmit} autoComplete="forget-password">
            <div>
                <Input
                    defaultValue={state.email}
                    name="email"
                    placeholder="Email address"
                    type="text"
                    className="h-12 rounded-sm focus-visible:border-primary focus-visible:ring-primary"
                />
            </div>
            <Button
                type="submit"
                className="group h-14 rounded-sm text-base [&_svg]:size-6 font-semibold"
                isPending={isPending}
            >
                Reset Password <LuArrowRight className="group-hover:translate-x-2 transition-all" />
            </Button>
            <div className="space-y-4">
                <p className="text-center text-sm text-gray-500">or</p>
                <ButtonOptionsSignIn />
            </div>
        </form>
    );
}
