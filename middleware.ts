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
  "/api/stripe/webhooks",
  "/api/stripe-prices", // ✅ Allow public access to pricing data
  "/api/clerk-webhook",
  "/api/debug-env",
  "/api/admin/payments"
])

export default clerkMiddleware(async (auth, req) => {
  const pathname = req.nextUrl.pathname;
  
  console.log(`🔍 Middleware processing: ${pathname}`)

  // ✅ Early exit for ALL webhook endpoints and debug – MUST BE BEFORE auth()
  if (pathname === "/api/stripe/webhooks" || pathname === "/api/clerk-webhook" || pathname === "/api/debug-env" || pathname === "/api/admin/payments") {
    console.log(`✅ Allowing webhook/debug/admin: ${pathname}`)
    return NextResponse.next();
  }

  const { userId, redirectToSignIn } = await auth();

  if (isPublicRoute(req)) {
    console.log(`✅ Public route allowed: ${pathname}`)
    return NextResponse.next();
  }

  if (!userId && isProtectedRoute(req)) {
    console.log(`❌ Protected route blocked: ${pathname}, no userId`)
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  console.log(`✅ Authenticated access: ${pathname}, userId: ${userId}`)
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
