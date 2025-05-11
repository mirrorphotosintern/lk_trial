"use server"

import { auth } from "@clerk/nextjs/server"
import { db } from "@/db/db"
import { wordStatsTable } from "@/db/schema"
import { quizResultsTable } from "@/db/schema"
import { InsertBadge, SelectBadge } from "@/db/schema"
import { BadgeDefinition } from "@/lib/utils/badge-utils"
import { count, eq, and, gt, gte, lte, sql, desc } from "drizzle-orm"
import { getBadgeDefinitionsAction } from "./badges-actions"
import { getUserBadgesAction, upsertBadgeAction } from "./db/badges-actions"
import { ActionState } from "@/types"

/**
 * Evaluates all badges for a user and updates any that have been earned or progressed
 * This should be called after any activity that might affect badge status
 */
export async function evaluateUserBadgesAction(): Promise<ActionState<SelectBadge[]>> {
  try {
    // Get the current user
    const { userId } = await auth()
    if (!userId) {
      return { 
        isSuccess: false, 
        message: "No authenticated user found" 
      }
    }

    // Get all badge definitions
    const badgeDefinitions = await getBadgeDefinitionsAction()
    
    // Get existing user badges
    const existingBadgesResult = await getUserBadgesAction(userId)
    const existingBadges = existingBadgesResult.isSuccess ? existingBadgesResult.data : []
    
    // Map existing badges for easy lookup
    const userBadgesMap = new Map(
      existingBadges.map(badge => [badge.badgeId, badge])
    )
    
    // Process each badge definition
    const results: SelectBadge[] = []
    
    for (const definition of badgeDefinitions) {
      const evaluationResult = await evaluateSingleBadge(userId, definition, userBadgesMap.get(definition.badgeId))
      
      if (evaluationResult.isSuccess && evaluationResult.data) {
        results.push(evaluationResult.data)
      }
    }
    
    return {
      isSuccess: true,
      message: `Badge evaluation completed successfully. ${results.length} badges updated.`,
      data: results
    }
  } catch (error) {
    console.error("Error evaluating badges:", error)
    return {
      isSuccess: false,
      message: "Failed to evaluate badges"
    }
  }
}

/**
 * Evaluates a single badge for a user and updates if necessary
 */
async function evaluateSingleBadge(
  userId: string, 
  definition: BadgeDefinition,
  existingBadge?: SelectBadge
): Promise<ActionState<SelectBadge | undefined>> {
  try {
    // Calculate badge eligibility and progress based on badge type
    let isEligible = false
    let progress = 0
    let currentLevel = existingBadge?.currentLevel || 0
    let shouldUpdateLevel = false
    let newLevel = currentLevel
    
    // Different logic for each badge type
    switch (definition.badgeId) {
      case "akshara-arasu": {
        // "Correctly answered a single word five times"
        const result = await db
          .select({ 
            count: count()
          })
          .from(wordStatsTable)
          .where(
            and(
              eq(wordStatsTable.userId, userId),
              gte(wordStatsTable.correctCount, 5)
            )
          )
        
        const wordCount = result[0]?.count || 0
        
        // Check which level the user qualifies for
        if (wordCount >= 30) newLevel = 5
        else if (wordCount >= 20) newLevel = 4
        else if (wordCount >= 15) newLevel = 3
        else if (wordCount >= 10) newLevel = 2
        else if (wordCount >= 7) newLevel = 1
        else newLevel = 0
        
        isEligible = newLevel > 0
        progress = wordCount
        shouldUpdateLevel = newLevel !== currentLevel
        break
      }
        
      case "arjuna-drushti": {
        // "Finished a quiz with an average time of less than 3 seconds per word"
        const quizResults = await db
          .select()
          .from(quizResultsTable)
          .where(
            and(
              eq(quizResultsTable.userId, userId),
              sql`${quizResultsTable.timeSpent} / ${quizResultsTable.totalQuestions} < 3`
            )
          )
        
        const fastQuizCount = quizResults.length
        
        // Check which level the user qualifies for
        if (fastQuizCount >= 100) newLevel = 5
        else if (fastQuizCount >= 50) newLevel = 4
        else if (fastQuizCount >= 20) newLevel = 3
        else if (fastQuizCount >= 10) newLevel = 2
        else if (fastQuizCount >= 5) newLevel = 1
        else newLevel = 0
        
        isEligible = newLevel > 0
        progress = fastQuizCount
        shouldUpdateLevel = newLevel !== currentLevel
        break
      }
        
      case "kireetaadhipathi": {
        // "Finished a quiz with all correct answers"
        const perfectQuizzes = await db
          .select()
          .from(quizResultsTable)
          .where(
            and(
              eq(quizResultsTable.userId, userId),
              sql`${quizResultsTable.score} = ${quizResultsTable.totalQuestions}`
            )
          )
        
        const perfectQuizCount = perfectQuizzes.length
        
        // Check which level the user qualifies for
        if (perfectQuizCount >= 100) newLevel = 5
        else if (perfectQuizCount >= 50) newLevel = 4
        else if (perfectQuizCount >= 20) newLevel = 3
        else if (perfectQuizCount >= 10) newLevel = 2
        else if (perfectQuizCount >= 5) newLevel = 1
        else newLevel = 0
        
        isEligible = newLevel > 0
        progress = perfectQuizCount
        shouldUpdateLevel = newLevel !== currentLevel
        break
      }
        
      case "shabda-shoora": {
        // "Achieved an accuracy of over 90% for five words (minimum five attempts)"
        const highAccuracyWords = await db
          .select({ count: count() })
          .from(wordStatsTable)
          .where(
            and(
              eq(wordStatsTable.userId, userId),
              gte(wordStatsTable.totalAttempts, 5),
              sql`(${wordStatsTable.correctCount}::float / ${wordStatsTable.totalAttempts}::float) >= 0.9`
            )
          )
        
        const highAccuracyWordCount = highAccuracyWords[0]?.count || 0
        
        // Check which level the user qualifies for
        if (highAccuracyWordCount >= 100) newLevel = 5
        else if (highAccuracyWordCount >= 75) newLevel = 4
        else if (highAccuracyWordCount >= 50) newLevel = 3
        else if (highAccuracyWordCount >= 25) newLevel = 2
        else if (highAccuracyWordCount >= 10) newLevel = 1
        else newLevel = 0
        
        isEligible = newLevel > 0
        progress = highAccuracyWordCount
        shouldUpdateLevel = newLevel !== currentLevel
        break
      }
        
      case "trivikrama": {
        // "Correctly answered overall 25 words"
        const totalCorrectAnswers = await db
          .select({
            total: sql<number>`sum(${wordStatsTable.correctCount})`
          })
          .from(wordStatsTable)
          .where(eq(wordStatsTable.userId, userId))
        
        const correctAnswersCount = totalCorrectAnswers[0]?.total || 0
        
        // Check which level the user qualifies for
        if (correctAnswersCount >= 300) newLevel = 5
        else if (correctAnswersCount >= 200) newLevel = 4
        else if (correctAnswersCount >= 150) newLevel = 3
        else if (correctAnswersCount >= 100) newLevel = 2
        else if (correctAnswersCount >= 50) newLevel = 1
        else newLevel = 0
        
        isEligible = newLevel > 0
        progress = correctAnswersCount
        shouldUpdateLevel = newLevel !== currentLevel
        break
      }
        
      case "yashasvi-yodha": {
        // "Answered all the words correctly at least once"
        // This is a special badge - just check if user has at least one correct answer for each word
        // This doesn't have levels according to CSV
        
        // First, get the total number of words in the system
        const wordCount = await getUniqueWordCount()
        
        // Then get the number of unique words the user has answered correctly
        const userAnsweredWords = await db
          .select({ count: count() })
          .from(wordStatsTable)
          .where(
            and(
              eq(wordStatsTable.userId, userId),
              gte(wordStatsTable.correctCount, 1)
            )
          )
        
        const answeredWordCount = userAnsweredWords[0]?.count || 0
        
        // If user has answered all words, they get the badge
        isEligible = answeredWordCount >= wordCount && wordCount > 0
        progress = answeredWordCount
        newLevel = isEligible ? 1 : 0
        shouldUpdateLevel = newLevel !== currentLevel
        break
      }
        
      default:
        // Unknown badge type
        return {
          isSuccess: false,
          message: `Unknown badge type: ${definition.badgeId}`
        }
    }
    
    // If the user is eligible for the badge but doesn't have it yet, or if their level has changed
    if ((isEligible && !existingBadge) || shouldUpdateLevel) {
      // Create or update the badge
      const badgeData: InsertBadge = {
        userId,
        badgeId: definition.badgeId,
        currentLevel: newLevel,
        progress,
        ...(existingBadge ? {} : { earnedAt: new Date() })
      }
      
      const result = await upsertBadgeAction(badgeData)
      
      return result
    }
    
    // If we just need to update progress
    if (existingBadge && progress !== existingBadge.progress) {
      const badgeData: InsertBadge = {
        userId,
        badgeId: definition.badgeId,
        currentLevel: currentLevel,
        progress
      }
      
      const result = await upsertBadgeAction(badgeData)
      
      return result
    }
    
    return {
      isSuccess: true,
      message: "No badge update needed",
      data: existingBadge
    }
  } catch (error) {
    console.error(`Error evaluating badge ${definition.badgeId}:`, error)
    return {
      isSuccess: false,
      message: `Failed to evaluate badge ${definition.badgeId}`
    }
  }
}

/**
 * Get total count of unique words in the system
 */
async function getUniqueWordCount(): Promise<number> {
  try {
    const result = await db
      .select({ 
        count: sql<number>`count(distinct ${wordStatsTable.word})` 
      })
      .from(wordStatsTable)
    
    return result[0]?.count || 0
  } catch (error) {
    console.error("Error getting unique word count:", error)
    return 0
  }
} 