"use server"

import { db } from "@/db/db"
import { InsertQuizResult, quizResultsTable } from "@/db/schema"
import { ActionState } from "@/types"
import { auth } from "@clerk/nextjs/server"

/**
 * Seeds test quiz results data for the current user
 * This is only for testing the leaderboard functionality
 */
export async function seedTestQuizResultsAction(): Promise<ActionState<void>> {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return {
        isSuccess: false,
        message: "You must be logged in to seed test data"
      };
    }
    
    console.log("Creating test quiz results for user:", userId);
    
    // Create some test quiz results
    const testResults: InsertQuizResult[] = [
      {
        userId,
        quizType: "rapid_fire",
        score: 8,
        totalQuestions: 10,
        timeSpent: 60,
        categories: ["animals", "colors"]
      },
      {
        userId,
        quizType: "standard",
        score: 9,
        totalQuestions: 10,
        timeSpent: 120,
        categories: ["numbers", "food"]
      },
      {
        userId,
        quizType: "rapid_fire",
        score: 7,
        totalQuestions: 10,
        timeSpent: 55,
        categories: ["family", "verbs"]
      }
    ];
    
    // Insert the test data
    await db.insert(quizResultsTable).values(testResults);
    
    return {
      isSuccess: true,
      message: "Test quiz results data seeded successfully",
      data: undefined
    };
  } catch (error) {
    console.error("Error seeding test quiz results:", error);
    return {
      isSuccess: false,
      message: "Failed to seed test quiz results data"
    };
  }
} 