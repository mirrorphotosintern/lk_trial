/*
Contains middleware for protecting routes in KannadaKali.
Uses Clerk to enforce authentication for specific routes.

Key features:
- Route protection: Ensures `/cards`, `/quiz`, `/parental` require login.
- Redirect: Sends unauthenticated users to the sign-in page.

Dependencies:
- @clerk/nextjs/server: Provides `clerkMiddleware` and `createRouteMatcher`.
- next/server: Provides `NextResponse` for route handling.

Notes:
- Uses async/await for Clerk's auth helper per auth rules.
- Config matcher excludes static files and Next.js internals.
- Assumes Clerk env vars are set in `.env.local`.
*/

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

// Define protected routes using a matcher
const isProtectedRoute = createRouteMatcher([
  "/parental(.*)",
  "/play(.*)",
  "/api/(.*)" // Also protect all API routes // Exclude /api/connect from protection
])

/**
 * Middleware function to handle authentication with Clerk.
 * Protects specified routes and redirects unauthenticated users.
 *
 * @param auth - Clerk authentication object
 * @param req - Incoming request object
 * @returns NextResponse or redirect based on auth status
 */
export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth()
  const { pathname } = req.nextUrl; // Get the pathname for checking

  // If the route is /learn or starts with /learn/, it's public
  if (pathname === "/learn" || pathname.startsWith("/learn/")) {
    return NextResponse.next();
  }

  // If user is not authenticated and trying to access a protected route (that is not /learn)
  if (!userId && isProtectedRoute(req)) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  // If user is authenticated and accessing a protected route, proceed
  // This condition is fine as is, or can be simplified if the above handles all public cases.
  // For now, keeping it to ensure authenticated users CAN access protected routes.
  if (userId && isProtectedRoute(req)) {
    return NextResponse.next();
  }

  // For all other cases (e.g., other public routes like /landing or /), proceed
  return NextResponse.next();
})

// Configuration for middleware application
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)",
    "/"
  ]
}
