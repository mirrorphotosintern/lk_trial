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

// Create matchers for protected and public routes
const isProtectedRoute = createRouteMatcher([
  "/parental(.*)",
  "/play/quiz(.*)",
  "/play/game(.*)",
  "/api/(.*)"
])

const isPublicRoute = createRouteMatcher([
  "/",
  "/learn",
  "/learn/cards",
  "/learn/(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhook",
  "/api/webhooks(.*)",
  "/api/trpc(.*)"
])

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth()

  // Allow public routes
  if (isPublicRoute(req)) {
    return NextResponse.next()
  }

  // Handle protected routes
  if (!userId && isProtectedRoute(req)) {
    return redirectToSignIn({ returnBackUrl: req.url })
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
}
