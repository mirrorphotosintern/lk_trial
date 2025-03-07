/**
 * @description
 * This file contains server actions for managing quiz results in the KannadaKali app.
 * It interacts with the Supabase database using Drizzle ORM to save and retrieve quiz results data.
 *
 * Key features:
 * - Save Quiz Results: Stores detailed quiz results including score and categories.
 * - Get Quiz Results: Retrieves quiz results for a user with optional filtering.
 *
 * @dependencies
 * - Drizzle ORM: For database operations with Supabase.
 * - Clerk: For user authentication.
 * - Supabase: Backend database provider.
 *
 * @notes
 * - Results are stored per quiz attempt to track progress over time.
 * - Parental dashboard can display detailed performance metrics using this data.
 * - Error handling logs issues and returns meaningful messages.
 */

"use server"

import { auth } from "@clerk/nextjs/server"
import { and, desc, eq } from "drizzle-orm"

import { db } from "@/db/db"
import { quizResultsTable, InsertQuizResult, SelectQuizResult } from "@/db/schema/quiz-results-schema"
import { ActionState } from "@/types"

/**
 * Saves quiz results to the database.
 *
 * @param result - Object containing quiz result data.
 * @returns Promise<ActionState<SelectQuizResult>> - The created quiz result record or an error state.
 */
export async function saveQuizResultAction(result: {
  quizType: "rapid_fire" | "standard"
  score: number
  totalQuestions: number
  timeSpent?: number
  categories?: string[]
}): Promise<ActionState<SelectQuizResult>> {
  const { userId } = await auth()

  // Validate authentication
  if (!userId) {
    return { isSuccess: false, message: "Unauthorized: No user ID found" }
  }

  try {
    // Create new quiz result record
    const newQuizResult: InsertQuizResult = {
      userId,
      quizType: result.quizType,
      score: result.score,
      totalQuestions: result.totalQuestions,
      timeSpent: result.timeSpent,
      categories: result.categories,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const [savedResult] = await db.insert(quizResultsTable).values(newQuizResult).returning()

    return {
      isSuccess: true,
      message: "Quiz result saved successfully",
      data: savedResult
    }
  } catch (error) {
    console.error("Error saving quiz result:", error)
    return { isSuccess: false, message: "Failed to save quiz result" }
  }
}

/**
 * Retrieves quiz results for a user from the database.
 *
 * @param limit - Optional limit on number of results (default 10).
 * @param quizType - Optional filter by quiz type.
 * @returns Promise<ActionState<SelectQuizResult[]>> - The user's quiz results or an empty array.
 */
export async function getQuizResultsAction(
  limit = 10,
  quizType?: "rapid_fire" | "standard"
): Promise<ActionState<SelectQuizResult[]>> {
  try {
    const { userId } = await auth()
    
    // Validate authentication
    if (!userId) {
      return { isSuccess: false, message: "Unauthorized: No user ID found" }
    }
    
    let results: SelectQuizResult[]
    
    // Handle different query cases
    if (quizType) {
      // If quiz type is specified, filter by both user ID and quiz type
      results = await db
        .select()
        .from(quizResultsTable)
        .where(
          and(
            eq(quizResultsTable.userId, userId),
            eq(quizResultsTable.quizType, quizType)
          )
        )
        .orderBy(desc(quizResultsTable.createdAt))
        .limit(limit)
    } else {
      // If only filtering by user ID
      results = await db
        .select()
        .from(quizResultsTable)
        .where(eq(quizResultsTable.userId, userId))
        .orderBy(desc(quizResultsTable.createdAt))
        .limit(limit)
    }

    return {
      isSuccess: true,
      message: "Quiz results retrieved successfully",
      data: results
    }
  } catch (error) {
    console.error("Error retrieving quiz results:", error)
    return { isSuccess: false, message: "Failed to retrieve quiz results" }
  }
}

/**
 * Gets quiz result statistics for a user.
 *
 * @returns Promise<ActionState<{
 *   totalQuizzes: number,
 *   averageScore: number,
 *   bestScore: number,
 *   recentResults: SelectQuizResult[]
 * }>> - The user's quiz statistics.
 */
export async function getQuizStatsAction(): Promise<ActionState<{
  totalQuizzes: number,
  averageScore: number,
  bestScore: number,
  recentResults: SelectQuizResult[]
}>> {
  try {
    const { userId } = await auth()
    
    // Validate authentication
    if (!userId) {
      return { isSuccess: false, message: "Unauthorized: No user ID found" }
    }
    
    const results = await db
      .select()
      .from(quizResultsTable)
      .where(eq(quizResultsTable.userId, userId))
      .orderBy(desc(quizResultsTable.createdAt))

    if (results.length === 0) {
      return {
        isSuccess: true,
        message: "No quiz results found",
        data: {
          totalQuizzes: 0,
          averageScore: 0,
          bestScore: 0,
          recentResults: []
        }
      }
    }

    // Calculate statistics
    const totalQuizzes = results.length
    const totalScorePercentage = results.reduce((sum, result) => 
      sum + (result.score / result.totalQuestions * 100), 0)
    const averageScore = Math.round(totalScorePercentage / totalQuizzes)
    
    const bestScorePercentage = Math.max(
      ...results.map(result => result.score / result.totalQuestions * 100)
    )
    const bestScore = Math.round(bestScorePercentage)

    // Get 5 most recent results
    const recentResults = results.slice(0, 5)

    return {
      isSuccess: true,
      message: "Quiz statistics retrieved successfully",
      data: {
        totalQuizzes,
        averageScore,
        bestScore,
        recentResults
      }
    }
  } catch (error) {
    console.error("Error retrieving quiz statistics:", error)
    return { isSuccess: false, message: "Failed to retrieve quiz statistics" }
  }
} 