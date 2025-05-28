import { NextResponse } from "next/server"
import { addCreditsAction } from "@/actions/db/credits-actions"

export async function POST(req: Request) {
  try {
    const { userId, amount } = await req.json()
    if (!userId || !amount) {
      return new NextResponse("Missing userId or amount", { status: 400 })
    }
    await addCreditsAction(userId, amount)
    return new NextResponse("OK")
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
