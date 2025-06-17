import { NextResponse } from "next/server"
import { addCreditsAction } from "@/actions/db/credits-actions"

export async function addCreditsAction(userId: string, amount: number) {
  const { data: existing, error: fetchError } = await supabase
    .from("credits")
    .select("amount")
    .eq("user_id", userId)
    .single()

  if (fetchError && fetchError.code !== "PGRST116") { // PGRST116 = no rows
    console.error("Fetch error:", fetchError)
    return { isSuccess: false, message: fetchError.message }
  }

  if (!existing) {
    const { error: insertError } = await supabase
      .from("credits")
      .insert({ user_id: userId, amount })

    if (insertError) {
      console.error("Insert error:", insertError)
      return { isSuccess: false, message: insertError.message }
    }

    return { isSuccess: true, data: { amount } }
  }

  const newAmount = existing.amount + amount

  const { data, error } = await supabase
    .from("credits")
    .update({ amount: newAmount })
    .eq("user_id", userId)
    .select()

  if (error) {
    console.error("Supabase update error", error)
    return { isSuccess: false, message: error.message }
  }

  return { isSuccess: true, data }
}

