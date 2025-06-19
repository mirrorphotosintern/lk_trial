import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

// Routes to protect
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
  "/api/trpc(.*)",
  "/api/stripe/webhooks" // ✅ include explicitly in public list
])

export default clerkMiddleware(async (auth, req) => {
  const pathname = req.nextUrl.pathname;

  // ✅ Early exit for Stripe Webhook – MUST BE BEFORE auth()
  if (pathname === "/api/stripe/webhooks") {
    return NextResponse.next();
  }

  const { userId, redirectToSignIn } = await auth();

  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  if (!userId && isProtectedRoute(req)) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  return NextResponse.next();
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
