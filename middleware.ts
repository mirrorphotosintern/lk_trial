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
  "/cards(.*)",
  "/quiz(.*)",
  "/parental(.*)",
  "/api/(.*)" // Also protect all API routes
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

  // If user is not authenticated and trying to access a protected route
  if (!userId && isProtectedRoute(req)) {
    // Redirect to sign-in page with return URL
    return redirectToSignIn({ returnBackUrl: req.url })
  }

  // If user is authenticated and accessing a protected route, proceed
  if (userId && isProtectedRoute(req)) {
    return NextResponse.next()
  }

  // For all other cases (e.g., public routes like /landing), proceed
  return NextResponse.next()
})

// Configuration for middleware application
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)",
    "/"
  ]
}