"use server"

import { db } from "@/db/db"
import { creditsTable } from "@/db/schema/credits-schema"
import { ActionState } from "@/types"
import { eq, sql } from "drizzle-orm"

// Initialize credits for new user
export async function initializeCreditsAction(
  userId: string,
  initialCredits: number = 1
): Promise<ActionState<undefined>> {
  try {
    await db.insert(creditsTable).values({
      userId,
      credits: initialCredits
    })
    return {
      isSuccess: true,
      message: "Credits initialized successfully",
      data: undefined
    }
  } catch (error) {
    console.error("Error initializing credits:", error)
    return { isSuccess: false, message: "Failed to initialize credits" }
  }
}

// Get user credits
export async function getUserCreditsAction(
  userId: string
): Promise<ActionState<number>> {
  try {
    const result = await db
      .select()
      .from(creditsTable)
      .where(eq(creditsTable.userId, userId))
      .limit(1)

    if (!result.length) {
      // Initialize credits if user doesn't have any
      await initializeCreditsAction(userId, 1)
      // Fetch again to ensure the row is there
      const newResult = await db
        .select()
        .from(creditsTable)
        .where(eq(creditsTable.userId, userId))
        .limit(1)
      return {
        isSuccess: true,
        message: "Credits initialized and retrieved",
        data: newResult.length ? newResult[0].credits : 1
      }
    }

    return {
      isSuccess: true,
      message: "Credits retrieved successfully",
      data: result[0].credits
    }
  } catch (error) {
    console.error("Error getting credits:", error)
    return { isSuccess: false, message: "Failed to get credits" }
  }
}

// Add credits (e.g., when user learns 2 cards)
export async function addCreditsAction(
  userId: string,
  amount: number
): Promise<ActionState<number>> {
  try {
    // Ensure the user has a credits row
    const existing = await db
      .select()
      .from(creditsTable)
      .where(eq(creditsTable.userId, userId))
      .limit(1)
    if (!existing.length) {
      await db.insert(creditsTable).values({ userId, credits: 0 })
    }
    const [updated] = await db
      .update(creditsTable)
      .set({
        credits: sql`${creditsTable.credits} + ${amount}`,
        updatedAt: new Date()
      })
      .where(eq(creditsTable.userId, userId))
      .returning()

    return {
      isSuccess: true,
      message: "Credits added successfully",
      data: updated.credits
    }
  } catch (error) {
    console.error("Error adding credits:", error)
    return { isSuccess: false, message: "Failed to add credits" }
  }
}

// Deduct credits (e.g., when user takes a quiz)
export async function deductCreditsAction(
  userId: string,
  amount: number
): Promise<ActionState<number>> {
  try {
    const userCredits = await db
      .select()
      .from(creditsTable)
      .where(eq(creditsTable.userId, userId))
      .limit(1)

    if (!userCredits.length || userCredits[0].credits < amount) {
      return {
        isSuccess: false,
        message: "Insufficient credits",
        data: undefined
      }
    }

    const [updated] = await db
      .update(creditsTable)
      .set({
        credits: sql`${creditsTable.credits} - ${amount}`,
        updatedAt: new Date()
      })
      .where(eq(creditsTable.userId, userId))
      .returning()

    return {
      isSuccess: true,
      message: "Credits deducted successfully",
      data: updated.credits
    }
  } catch (error) {
    console.error("Error deducting credits:", error)
    return { isSuccess: false, message: "Failed to deduct credits" }
  }
} 