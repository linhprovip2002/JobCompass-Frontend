'use client';
import { FormEmailVerify } from '@/components/custom-ui/form-email-verify';
import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

export default function EmailVerify() {
    return (
        <div>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <ToastContainer position="top-right" autoClose={3000} />
                    <FormEmailVerify />
                </Suspense>
            </div>
            ;
        </div>
    );
}
