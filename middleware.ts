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

import { clerkMiddleware } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

// Define protected routes using a matcher
const isProtectedRoute = (req: Request) => {
  const { pathname } = new URL(req.url)
  return (
    pathname.startsWith("/parental") ||
    pathname.startsWith("/play/quiz") ||
    pathname.startsWith("/play/game") ||
    pathname.startsWith("/api/")
  )
}

// Define public routes
const isPublicRoute = (req: Request) => {
  const { pathname } = new URL(req.url)
  return (
    pathname === "/" ||
    pathname === "/learn" ||
    pathname.startsWith("/learn/") ||
    pathname === "/learn/cards" ||
    pathname.startsWith("/learn/cards/") ||
    pathname.startsWith("/sign-in") ||
    pathname.startsWith("/sign-up")
  )
}

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
