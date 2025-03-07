"use server"

/**
 * @description
 * This file provides a server action to seed the word_stats table with sample data.
 * It's used for testing and development purposes.
 * 
 * Key features:
 * - Sample Data: Creates realistic word statistics data for testing.
 * - Authentication: Requires user authentication to run.
 * - CSV Integration: Uses real vocabulary from the CSV file.
 * 
 * @dependencies
 * - @clerk/nextjs/server: For authentication.
 * - fs/promises: For file system operations.
 * - path: For path handling.
 * - @/db/db: For database access.
 * - @/db/schema/word-stats-schema: For the word stats table schema.
 * - @/lib/csv-parser: For parsing CSV data.
 * - @/types: For ActionState type.
 */

import { auth } from "@clerk/nextjs/server"
import { readFile } from "fs/promises"
import path from "path"
import { db } from "@/db/db"
import { InsertWordStat, wordStatsTable } from "@/db/schema/word-stats-schema"
import { parseCsv } from "@/lib/csv-parser"
import { ActionState } from "@/types"
import { eq, and } from "drizzle-orm"

/**
 * Seeds the word_stats table with sample data based on the CSV file.
 * Creates realistic statistics for testing purposes.
 * 
 * @returns Promise resolving to an ActionState containing the number of seeded records
 */
export async function seedWordStatsAction(): Promise<ActionState<number>> {
  try {
    // Check authentication
    const { userId } = await auth()
    if (!userId) {
      return {
        isSuccess: false,
        message: "Unauthorized: Please sign in to seed word statistics"
      }
    }
    
    // Read and parse the CSV data
    const csvPath = path.join(process.cwd(), "/public/data/kannada-kali.csv")
    const csvData = await readFile(csvPath, "utf-8")
    const words = parseCsv(csvData)
    
    // Take a sample of words (limit to 20 for seed data)
    const sampleWords = words
      .filter(word => word.english && word.kanglish)
      .slice(0, 20)
    
    // First, check if we already have stats for these words for this user
    // to avoid duplicates
    const existingStats = await db
      .select({ word: wordStatsTable.word })
      .from(wordStatsTable)
      .where(eq(wordStatsTable.userId, userId))
      
    const existingWords = new Set(existingStats.map(stat => stat.word))
    
    // Prepare word statistics for insertion
    const wordStats: InsertWordStat[] = sampleWords
      .filter(word => word.english && !existingWords.has(word.english))
      .map(word => {
        // Generate realistic statistics
        const totalAttempts = Math.floor(Math.random() * 15) + 5 // 5-20 attempts
        const successRate = Math.random() * 0.6 + 0.3 // 30-90% success rate
        const correctCount = Math.floor(totalAttempts * successRate)
        
        return {
          userId,
          word: word.english || "",
          kanglish: word.kanglish || "",
          kannada: word.kannada || null,
          icon: word.icon || null,
          category: word.category || null,
          totalAttempts,
          correctCount
        }
      })
    
    // Only proceed if we have new words to insert
    if (wordStats.length === 0) {
      return {
        isSuccess: true,
        message: "No new words to seed. Word statistics already exist.",
        data: 0
      }
    }
    
    // Insert the word statistics
    const result = await db.insert(wordStatsTable).values(wordStats)
    
    return {
      isSuccess: true,
      message: `Successfully seeded ${wordStats.length} word statistics`,
      data: wordStats.length
    }
  } catch (error) {
    console.error("Error seeding word statistics:", error)
    return {
      isSuccess: false,
      message: `Failed to seed word statistics: ${error instanceof Error ? error.message : "Unknown error"}`
    }
  }
} 