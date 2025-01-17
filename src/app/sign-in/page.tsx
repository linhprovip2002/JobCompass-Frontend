import Image from "next/image";
import React from "react";
import headerLogo from "@/assets/svgs/header-logo.svg";
import { FormSignIn } from "@/components/custom-ui/form-sign-in";

export default function SignIn() {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">
                <div className="logo">
                    <Image
                        loading="eager"
                        src={headerLogo}
                        height={100}
                        width={400}
                        alt="JobCompass"
                        className="scale-[0.4]"
                    />
                </div>
                <div className="grid grid-cols-2">
                    <div className="sign-in-form col-span-1">
                        <FormSignIn />
                    </div>
                    <div className="more-info col-span-1"></div>
                </div>
            </div>
        </div>
    );
}
