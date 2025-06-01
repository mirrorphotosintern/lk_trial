import { NextResponse } from "next/server"
import { deductCreditsAction } from "@/actions/db/credits-actions"

export async function POST(req: Request) {
  try {
    const { userId, amount } = await req.json()
    if (!userId || !amount) {
      return new NextResponse("Missing userId or amount", { status: 400 })
    }
    const result = await deductCreditsAction(userId, amount)
    if (!result.isSuccess) {
      return new NextResponse(result.message, { status: 403 })
    }
    return new NextResponse("OK")
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
