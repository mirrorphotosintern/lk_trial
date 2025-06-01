import { NextResponse } from "next/server"
import { addCreditsAction } from "@/actions/db/credits-actions"

export async function POST(req: Request) {
  try {
    const { userId, amount } = await req.json()
    if (!userId || !amount) {
      return new NextResponse("Missing userId or amount", { status: 400 })
    }

    const result = await addCreditsAction(userId, amount)

    if (!result.isSuccess) {
      return new NextResponse(result.message, { status: 500 })
    }

    return NextResponse.json({ success: true, credits: result.data })
  } catch (error) {
    console.error("Increment credits API error", error)
    return new NextResponse("Server error", { status: 500 })
  }
}
