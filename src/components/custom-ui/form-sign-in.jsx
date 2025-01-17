"use client";

import Link from "next/link";
import { Input } from "../ui/input";
import { useId, useState } from "react";
import { InputPassword } from "@/components/custom-ui/input-password";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { LuArrowRight } from "react-icons/lu";

export function FormSignIn() {
    const [showPassword, setShowPassword] = useState(false);

    const checkboxId = useId();

    return (
        <form className="flex flex-col space-y-8">
            <div>
                <h5 className="mb-4 text-[32px] leading-10">Sign in</h5>
                <p className="inline">Don't have account</p>&nbsp;
                <Link href="/sign-up" className="text-primary font-semibold">
                    Create account
                </Link>
            </div>
            <div className="space-y-5">
                <Input
                    name="email"
                    placeholder="Email address"
                    type="text"
                    className="h-12 rounded-sm focus-visible:border-primary"
                />
                <InputPassword
                    name="password"
                    placeholder="Password"
                    type="text"
                    hide={showPassword}
                    setHide={setShowPassword}
                    className="h-12 rounded-sm "
                />
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[10px] text-gray-500">
                        <Checkbox id={checkboxId} className="size-5" />{" "}
                        <label htmlFor={checkboxId} className="select-none cursor-pointer">
                            Remember me
                        </label>
                    </div>
                    <Link href="/forgot-password" className="text-primary hover:underline">
                        Forget password
                    </Link>
                </div>
            </div>
            <Button className="h-14 rounded-sm text-base">
                Sign in <LuArrowRight />
            </Button>
        </form>
    );
}
