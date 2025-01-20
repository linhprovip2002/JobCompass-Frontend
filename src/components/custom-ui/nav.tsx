'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigatePages = [
    {
        href: '/',
        label: 'Home',
    },
    {
        href: '/find-jobs',
        label: 'Find Job',
    },
    {
        href: '/employers',
        label: 'Employers',
    },
    {
        href: '/candidates',
        label: 'Candidates',
    },
    {
        href: '/pricing-plans',
        label: 'Pricing Plans',
    },
    {
        href: '/customer-supports',
        label: 'Customer Supports',
    },
];

export function Nav() {
    const pathname = usePathname();

    return (
        <nav className="flex items-center space-x-6">
            {navigatePages.map((page, index) => (
                <Link
                    key={index}
                    href={page.href}
                    className={clsx(
                        pathname === page.href
                            ? 'text-primary font-medium border-b-primary'
                            : 'text-soft-mist-foreground font-normal border-b-transparent',
                        'transition-all duration-200 py-3 border-b-2 text-sm'
                    )}
                >
                    {page.label}
                </Link>
            ))}
        </nav>
    );
}
