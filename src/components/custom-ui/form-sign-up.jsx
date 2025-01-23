'use client';

import Link from 'next/link';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { roles } from '../../lib/data/roles.data';
import { Input } from '../ui/input';
import { InputPassword } from './input-password';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { LuArrowRight } from 'react-icons/lu';
import { ButtonOptionsSignIn } from './button-options-sign-in';
import React, { useActionState, useId, useState } from 'react';
import { signUpSubmit } from '@/lib/action';

export function FormSignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const checkboxId = useId();

    const [state, onSubmit, isPending] = useActionState(signUpSubmit, {
        roleId: '',
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    });

    return (
        <form className="sign-up-form flex flex-col space-y-8" action={onSubmit}>
            <div className="flex items-center justify-between">
                <div>
                    <h5 className="mb-4 text-[32px] leading-10 font-medium">Create account</h5>
                    <p className="inline text-gray-600">Already have account?</p>&nbsp;
                    <Link href="/sign-in" className="text-primary font-medium">
                        Log in
                    </Link>
                </div>
                <Select name="roleId">
                    <SelectTrigger className="h-12 rounded-sm focus-visible:border-primary focus-visible:ring-primary text-base max-w-36">
                        <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                        {roles.map((role) => (
                            <SelectItem className="h-12 rounded-sm text-base" key={role.roleId} value={role.roleId}>
                                {role.roleName}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-5">
                <div className="flex items-center gap-5">
                    <Input
                        name="fullName"
                        placeholder="Full name"
                        type="text"
                        className="h-12 rounded-sm focus-visible:border-primary focus-visible:ring-primary"
                    />
                    <Input
                        name="username"
                        placeholder="Username"
                        type="text"
                        className="h-12 rounded-sm focus-visible:border-primary focus-visible:ring-primary"
                    />
                </div>
                <Input
                    name="email"
                    placeholder="Email address"
                    type="text"
                    className="h-12 rounded-sm focus-visible:border-primary focus-visible:ring-primary"
                />
                <InputPassword
                    name="password"
                    placeholder="Password"
                    type="text"
                    hide={!showPassword}
                    setHide={setShowPassword}
                    className="h-12 rounded-sm border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary focus-visible:ring-primary"
                />
                <InputPassword
                    name="confirmPassword"
                    placeholder="Confirm password"
                    type="text"
                    hide={!showConfirmPassword}
                    setHide={setShowConfirmPassword}
                    className="h-12 rounded-sm border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary focus-visible:ring-primary"
                />
            </div>
            <div className="flex items-center">
                <div className="flex items-center gap-[10px] text-gray-500">
                    <Checkbox name="remember" id={checkboxId} className="size-5 border-primary-200 shadow-none" />
                    <label htmlFor={checkboxId} className="select-none cursor-pointer text-sm">
                        I&#39;ve read and agree with your
                    </label>
                </div>
                &nbsp;
                <Link href="/terms-and-services" className="text-primary text-sm hover:underline font-medium">
                    Terms of Services
                </Link>
            </div>
            <Button type="submit" className="group h-14 rounded-sm text-base [&_svg]:size-6 font-semibold" isPending={isPending}>
                Create account <LuArrowRight className="group-hover:translate-x-2 transition-all" />
            </Button>
            <div className="space-y-4">
                <p className="text-center text-sm text-gray-500">or</p>
                <ButtonOptionsSignIn />
            </div>
        </form>
    );
}
