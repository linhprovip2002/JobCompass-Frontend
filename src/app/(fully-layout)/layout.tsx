import { FooterSection } from '@/components/custom-ui/footer-section';
import { HeaderSection } from '@/components/custom-ui/header-section';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <React.Fragment>
            <HeaderSection />
            <main>{children}</main>
            <FooterSection />
        </React.Fragment>
    );
}
