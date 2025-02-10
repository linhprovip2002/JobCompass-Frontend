'use client';
import { ButtonHome } from '@/components/custom-ui/button-home';
import { FormEmailVerify } from '@/components/custom-ui/form-email-verify';
import React from 'react';
import { ToastContainer } from 'react-toastify';

export default function EmailVerify() {
    return (
        <div>
            <div>
                <ToastContainer position="top-right" autoClose={3000} />
                <FormEmailVerify />
            </div>
            ;
        </div>
    );
}
