import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const cookie = req.cookies.get('login')?.value;
    let isLoggedIn = false;

    try {
        isLoggedIn = cookie ? JSON.parse(cookie) : false;
    } catch {
        isLoggedIn = false;
    }

    if (isLoggedIn) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next();
}
export const config = {
    matcher: ['/sign-in', '/sign-up', '/forget-password', '/reset-password', '/email-verify'],
};
