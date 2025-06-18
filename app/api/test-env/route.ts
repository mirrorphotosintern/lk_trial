import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "NOT SET",
    HAS_STRIPE_KEY: !!process.env.STRIPE_SECRET_KEY,
    NODE_ENV: process.env.NODE_ENV
  })
} 