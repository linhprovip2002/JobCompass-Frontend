import React from 'react';
import { FormSignIn } from '@/components/custom-ui/form-sign-in';
import Link from 'next/link';

export default function SignIn() {
    return (
        <div className="h-full flex flex-col justify-center gap-8">
            <div>
                <h5 className="mb-4 text-[32px] leading-10 font-medium">Sign in</h5>
                <p className="inline text-gray-600">Don&#39;t have account</p>&nbsp;
                <Link href="/sign-up" className="text-primary font-medium">
                    Create account
                </Link>
            </div>
            <FormSignIn />
        </div>
    );
}
