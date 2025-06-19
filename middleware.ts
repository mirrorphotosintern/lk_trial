import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

// Define which routes need auth
const isProtectedRoute = createRouteMatcher([
  "/parental(.*)",
  "/play/quiz(.*)",
  "/play/game(.*)",
  "/survey(.*)",
  "/credits(.*)"
])

// Define which routes don’t
const isPublicRoute = createRouteMatcher([
  "/",
  "/learn",
  "/learn/cards",
  "/learn/(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhook",
  "/api/webhooks(.*)",
  "/api/trpc(.*)",
  "/api/stripe/webhooks" // ✅ Explicitly allow Stripe Webhook
])

export default clerkMiddleware(async (auth, req) => {
  const pathname = req.nextUrl.pathname

  // ✅ Allow Stripe Webhook before any auth
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

// ✅ Don't match webhook route at all in middleware
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
    // ✅ REMOVE /api/:path* — too broad, causes Clerk to guard webhooks
    "/api/webhook",
    "/api/webhooks/:path*",
    "/api/trpc/:path*"
  ]
}
