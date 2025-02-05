import Link from 'next/link';
import React from 'react';
import { FormForgetPassword } from '@/components/custom-ui/form-forget-password';

export default function Page() {
    return (
        <div className="space-y-8">
            <div>
                <h5 className="mb-4 text-[32px] leading-10 font-medium">Forget password</h5>
                <div className="space-y-2">
                    <div>
                        <p className="inline text-gray-600">Go back to</p>&nbsp;
                        <Link href="/sign-in" className="text-primary font-medium">
                            Log in
                        </Link>
                    </div>
                    <div>
                        <p className="inline text-gray-600">Don&#39;t have account?</p>&nbsp;
                        <Link href="/sign-up" className="text-primary font-medium">
                            Create account
                        </Link>
                    </div>
                </div>
            </div>
            <FormForgetPassword />
        </div>
    );
}
