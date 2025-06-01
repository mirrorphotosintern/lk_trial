"use server"

import { db } from "@/db/db"
import { creditsTable } from "@/db/schema/credits-schema"
import { ActionState } from "@/types"
import { eq, sql } from "drizzle-orm"

// Initialize credits (called on first sign-in)
export async function initializeCreditsAction(
  userId: string,
  initialCredits: number = 100
): Promise<ActionState<undefined>> {
  try {
    await db.insert(creditsTable).values({
      userId,
      credits: initialCredits
    })
    return { isSuccess: true, message: "Credits initialized", data: undefined }
  } catch (error) {
    console.error("Error initializing credits:", error)
    return { isSuccess: false, message: "Failed to initialize credits" }
  }
}

// Get user credits
export async function getUserCreditsAction(userId: string): Promise<ActionState<number>> {
  try {
    const result = await db.select().from(creditsTable).where(eq(creditsTable.userId, userId)).limit(1)

    if (!result.length) {
      await initializeCreditsAction(userId)
      return { isSuccess: true, message: "Credits initialized", data: 100 }
    }

    return {
      isSuccess: true,
      message: "Credits retrieved",
      data: result[0].credits
    }
  } catch (error) {
    console.error("Error fetching credits:", error)
    return { isSuccess: false, message: "Failed to fetch credits" }
  }
}

// Add credits
export async function addCreditsAction(userId: string, amount: number): Promise<ActionState<number>> {
  try {
    const [updated] = await db.update(creditsTable)
      .set({
        credits: sql`${creditsTable.credits} + ${amount}`,
        updatedAt: new Date()
      })
      .where(eq(creditsTable.userId, userId))
      .returning()

    return { isSuccess: true, message: "Credits added", data: updated.credits }
  } catch (error) {
    console.error("Error adding credits:", error)
    return { isSuccess: false, message: "Failed to add credits" }
  }
}

// Deduct credits
export async function deductCreditsAction(userId: string, amount: number): Promise<ActionState<number>> {
  try {
    const [user] = await db.select().from(creditsTable).where(eq(creditsTable.userId, userId)).limit(1)

    if (!user || user.credits < amount) {
      return { isSuccess: false, message: "Insufficient credits", data: undefined }
    }

    const [updated] = await db.update(creditsTable)
      .set({
        credits: sql`${creditsTable.credits} - ${amount}`,
        updatedAt: new Date()
      })
      .where(eq(creditsTable.userId, userId))
      .returning()

    return { isSuccess: true, message: "Credits deducted", data: updated.credits }
  } catch (error) {
    console.error("Error deducting credits:", error)
    return { isSuccess: false, message: "Failed to deduct credits" }
  }
}