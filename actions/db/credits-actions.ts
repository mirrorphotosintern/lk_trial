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

// Check and deduct credits for quiz access
export async function checkAndDeductQuizCreditsAction(userId: string): Promise<ActionState<number>> {
  const QUIZ_COST = 50 // Quiz costs 50 credits
  
  try {
    // Start a transaction to ensure atomic operation
    const result = await db.transaction(async (tx) => {
      const [user] = await tx.select().from(creditsTable).where(eq(creditsTable.userId, userId)).limit(1)

      if (!user) {
        // Initialize credits if user doesn't exist
        await tx.insert(creditsTable).values({
          userId,
          credits: 100 // Default initial credits
        })
        return { hasCredits: false, remainingCredits: 100 }
      }

      if (user.credits < QUIZ_COST) {
        return { hasCredits: false, remainingCredits: user.credits }
      }

      // Deduct credits
      const [updated] = await tx.update(creditsTable)
        .set({
          credits: sql`${creditsTable.credits} - ${QUIZ_COST}`,
          updatedAt: new Date()
        })
        .where(eq(creditsTable.userId, userId))
        .returning()

      return { hasCredits: true, remainingCredits: updated.credits }
    })

    if (!result.hasCredits) {
      return { 
        isSuccess: false, 
        message: `Insufficient credits. You need ${QUIZ_COST} credits to play the quiz. You have ${result.remainingCredits} credits.`
      }
    }

    return { 
      isSuccess: true, 
      message: `${QUIZ_COST} credits deducted. You have ${result.remainingCredits} credits remaining.`,
      data: result.remainingCredits
    }
  } catch (error) {
    console.error("Error checking/deducting quiz credits:", error)
    return { isSuccess: false, message: "Failed to process credits" }
  }
}