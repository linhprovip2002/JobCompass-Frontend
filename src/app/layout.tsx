import type { Metadata } from 'next';
import './globals.css';
import { inter } from '@/components/font';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const metadata: Metadata = {
    title: 'JobCompass',
    description: 'Navigate your career, find your future',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning lang="en">
            <body className={`${inter.className} antialiased`}>
                <ToastContainer />
                {children}
            </body>
        </html>
    );
}
