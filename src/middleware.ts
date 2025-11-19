import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Check if the path starts with /panel
    if (path.startsWith('/panel')) {
        // Check if the admin_session cookie exists
        const adminSession = request.cookies.get('admin_session');

        if (!adminSession) {
            // Redirect to the login page if not authenticated
            return NextResponse.redirect(new URL('/admin', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/panel/:path*',
};
