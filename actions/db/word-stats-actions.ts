/**
 * @description
 * This file contains server actions for managing word statistics in the KannadaKali app.
 * It provides functionality to track and retrieve word-level performance data for the parental dashboard.
 *
 * Key features:
 * - Get Word Statistics: Retrieves statistics for individual words.
 * - Mock Data Generation: Temporarily creates realistic data for demonstration.
 *
 * @dependencies
 * - @clerk/nextjs/server: Provides authentication utilities.
 * - @/actions/csv-actions: For loading the CSV data.
 * - @/types: Imports ActionState for consistent error handling.
 */

"use server"

import { auth } from "@clerk/nextjs/server"
import { readFile } from "fs/promises"
import path from "path"
import { ActionState } from "@/types"
import { parseCsv } from "@/lib/csv-parser"
import { db } from "@/db/db"
import { InsertWordStat, SelectWordStat, wordStatsTable } from "@/db/schema/word-stats-schema"
import { eq, and, desc } from "drizzle-orm"

export interface WordStatistics {
  icon: string | null
  english: string
  kannada: string | null
  kanglish: string
  correctCount: number
  totalAttempts: number
  category: string | null
}

/**
 * Records a word attempt in the database.
 * Increments totalAttempts and optionally correctCount if the answer was correct.
 * Creates a new record if the word doesn't exist for the user.
 * 
 * @param word The English word
 * @param kanglish The Kanglish transliteration
 * @param kannada The Kannada word (optional)
 * @param icon The icon URL (optional)
 * @param category The word category (optional)
 * @param correct Whether the answer was correct
 * @returns Promise resolving to an ActionState containing the updated word stat
 */
export async function recordWordAttemptAction(
  word: string,
  kanglish: string,
  kannada: string | null,
  icon: string | null,
  category: string | null,
  correct: boolean
): Promise<ActionState<SelectWordStat>> {
  try {
    // Check authentication
    const { userId } = await auth()
    if (!userId) {
      return {
        isSuccess: false,
        message: "Unauthorized: Please sign in to record word attempts"
      }
    }

    // Check if there's an existing record for this word and user
    const existingStats = await db
      .select()
      .from(wordStatsTable)
      .where(
        and(
          eq(wordStatsTable.userId, userId),
          eq(wordStatsTable.word, word)
        )
      )
    
    // If the word exists, update its statistics
    if (existingStats.length > 0) {
      const existingStat = existingStats[0]
      
      const [updatedStat] = await db
        .update(wordStatsTable)
        .set({
          totalAttempts: existingStat.totalAttempts + 1,
          correctCount: existingStat.correctCount + (correct ? 1 : 0),
          updatedAt: new Date()
        })
        .where(eq(wordStatsTable.id, existingStat.id))
        .returning()
      
      return {
        isSuccess: true,
        message: "Word attempt recorded successfully",
        data: updatedStat
      }
    }
    
    // If the word doesn't exist, create a new record
    const newWordStat: InsertWordStat = {
      userId,
      word,
      kanglish,
      kannada,
      icon,
      category,
      totalAttempts: 1,
      correctCount: correct ? 1 : 0
    }
    
    const [createdStat] = await db
      .insert(wordStatsTable)
      .values(newWordStat)
      .returning()
    
    return {
      isSuccess: true,
      message: "New word statistic created successfully",
      data: createdStat
    }
  } catch (error) {
    console.error("Error recording word attempt:", error)
    return {
      isSuccess: false,
      message: `Failed to record word attempt: ${error instanceof Error ? error.message : "Unknown error"}`
    }
  }
}

/**
 * Gets word statistics for the parental dashboard
 * Fetches real data from the database, or falls back to mock data if no records exist
 * 
 * @param limit The maximum number of words to return
 * @returns An array of word statistics
 */
export async function getWordStatsAction(
  limit = 12
): Promise<ActionState<WordStatistics[]>> {
  try {
    // Check authentication
    const { userId } = await auth()
    if (!userId) {
      return {
        isSuccess: false,
        message: "Unauthorized: Please sign in to view word statistics"
      }
    }

    try {
      // Try to fetch word stats from the database
      const dbWordStats = await db
        .select()
        .from(wordStatsTable)
        .where(eq(wordStatsTable.userId, userId))
        .orderBy(desc(wordStatsTable.updatedAt))
        .limit(limit)
      
      // If we have database records, return them
      if (dbWordStats.length > 0) {
        const formattedStats: WordStatistics[] = dbWordStats.map(stat => ({
          icon: stat.icon || null,
          english: stat.word,
          kannada: stat.kannada || null,
          kanglish: stat.kanglish,
          correctCount: stat.correctCount,
          totalAttempts: stat.totalAttempts,
          category: stat.category || null
        }))
        
        return {
          isSuccess: true,
          message: "Word statistics retrieved successfully from database",
          data: formattedStats
        }
      }
    } catch (error) {
      // If there's an error with the database query (e.g., table doesn't exist yet),
      // log it but continue to use mock data as fallback
      console.error("Error querying word stats table:", error)
      console.log("Falling back to mock data")
    }
    
    // Fall back to mock data if no database records exist
    // This allows the UI to display something even if the table hasn't been created yet
    // Read the CSV data
    const csvPath = path.join(process.cwd(), "/public/data/kannada-kali-updated.csv")
    const csvData = await readFile(csvPath, "utf-8")
    
    // Parse the CSV data
    const words = parseCsv(csvData)
    
    // Generate mock statistics data
    const wordStats: WordStatistics[] = words
      .filter(word => word.english && word.kanglish) // Only include words with English and Kanglish translations
      .slice(0, limit) // Limit the number of words
      .map(word => {
        // Generate random statistics for demonstration
        const totalAttempts = Math.floor(Math.random() * 10) + 1
        const correctCount = Math.floor(Math.random() * (totalAttempts + 1))
        
        return {
          icon: word.icon || null,
          english: word.english || "",
          kannada: word.kannada || null,
          kanglish: word.kanglish || "",
          correctCount,
          totalAttempts,
          category: word.category || null
        }
      })
    
    return {
      isSuccess: true,
      message: "Mock word statistics generated successfully",
      data: wordStats
    }
  } catch (error) {
    console.error("Error getting word statistics:", error)
    return {
      isSuccess: false,
      message: `Failed to get word statistics: ${error instanceof Error ? error.message : "Unknown error"}`
    }
  }
} 