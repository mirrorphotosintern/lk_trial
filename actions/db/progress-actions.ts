/**
 * @description
 * This file contains server actions for managing user progress in the KannadaKali app.
 * It interacts with the Supabase database using Drizzle ORM to save and retrieve progress data.
 *
 * Key features:
 * - Save Progress: Increments stars, words learned, and quizzes played for a user.
 * - Get Progress: Retrieves the current progress for a user.
 *
 * @dependencies
 * - Drizzle ORM: For database operations with Supabase.
 * - Clerk: For user authentication.
 * - Supabase: Backend database provider.
 *
 * @notes
 * - Assumes a single progress record per user; creates one if none exists.
 * - Progress metrics are cumulative (incremented, not set directly).
 * - Error handling logs issues and returns meaningful messages.
 */

"use server"

import { auth } from "@clerk/nextjs/server"

import { db } from "@/db/db"
import { progressTable, InsertProgress, SelectProgress } from "@/db/schema/progress-schema"
import { ActionState } from "@/types"
import { eq } from "drizzle-orm"

/**
 * Saves or updates user progress in the database.
 *
 * @param increments - Object containing the amounts to increment each progress metric.
 * @returns Promise<ActionState<SelectProgress>> - The updated progress record or an error state.
 */
export async function saveProgressAction(increments: {
  stars: number
  wordsLearned: number
  quizzesPlayed: number
}): Promise<ActionState<SelectProgress>> {
  const { userId } = await auth()

  // Validate authentication
  if (!userId) {
    return { isSuccess: false, message: "Unauthorized: No user ID found" }
  }

  try {
    // Check if progress exists for the user
    const existingProgress = await db
      .select()
      .from(progressTable)
      .where(eq(progressTable.userId, userId))
      .limit(1)

    let updatedProgress: SelectProgress

    if (existingProgress.length > 0) {
      // Update existing progress by incrementing values
      const [result] = await db
        .update(progressTable)
        .set({
          stars: existingProgress[0].stars + increments.stars,
          wordsLearned: existingProgress[0].wordsLearned + increments.wordsLearned,
          quizzesPlayed: existingProgress[0].quizzesPlayed + increments.quizzesPlayed,
          updatedAt: new Date()
        })
        .where(eq(progressTable.userId, userId))
        .returning()
      updatedProgress = result
    } else {
      // Create new progress record
      const newProgress: InsertProgress = {
        userId,
        stars: increments.stars,
        wordsLearned: increments.wordsLearned,
        quizzesPlayed: increments.quizzesPlayed,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      const [result] = await db.insert(progressTable).values(newProgress).returning()
      updatedProgress = result
    }

    return {
      isSuccess: true,
      message: "Progress saved successfully",
      data: updatedProgress
    }
  } catch (error) {
    console.error("Error saving progress:", error)
    return { isSuccess: false, message: "Failed to save progress" }
  }
}

/**
 * Retrieves the current progress for a user from the database.
 *
 * @returns Promise<ActionState<SelectProgress | null>> - The user's progress or null if none exists.
 */
export async function getProgressAction(): Promise<ActionState<SelectProgress | null>> {
  try {
    const { userId } = await auth()
    
    // Validate authentication
    if (!userId) {
      return { isSuccess: false, message: "Unauthorized: No user ID found" }
    }
    
    const progress = await db
      .select()
      .from(progressTable)
      .where(eq(progressTable.userId, userId))
      .limit(1)

    if (progress.length === 0) {
      return {
        isSuccess: true,
        message: "No progress found for user",
        data: null
      }
    }

    return {
      isSuccess: true,
      message: "Progress retrieved successfully",
      data: progress[0]
    }
  } catch (error) {
    console.error("Error retrieving progress:", error)
    return { isSuccess: false, message: "Failed to retrieve progress" }
  }
}