import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

// Create matchers for protected and public routes
const isProtectedRoute = createRouteMatcher([
  "/parental(.*)",
  "/play/quiz(.*)",
  "/play/game(.*)",
  "/survey(.*)",
  "/credits(.*)",
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
  const pathname = req.nextUrl.pathname

  // ✅ Bypass Clerk for Stripe Webhooks
  if (pathname === "/api/stripe/webhooks") {
    return NextResponse.next()
  }

  const { userId, redirectToSignIn } = await auth()

  if (isPublicRoute(req)) {
    return NextResponse.next()
  }

  if (!userId && isProtectedRoute(req)) {
    return redirectToSignIn({ returnBackUrl: req.url })
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    "/parental",
    "/parental/:path*",
    "/play/quiz",
    "/play/quiz/:path*",
    "/play/game",
    "/play/game/:path*",
    "/survey",
    "/survey/:path*",
    "/credits",
    "/credits/:path*",
    "/api/:path*",
    "/trpc/:path*"
  ]
}
