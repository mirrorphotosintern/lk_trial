"use server"

import { db } from "@/db/db"
import { leaderboardTable } from "@/db/schema"
import { ActionState } from "@/types"
import { auth } from "@clerk/nextjs/server"
import { sql } from "drizzle-orm"

// Interface for leaderboard entries with user profile data
export interface LeaderboardEntry {
  userId: string
  displayName: string
  profileImageUrl: string | null
  totalAttempts: number
  correctAnswers: number
  accuracyPercentage: number
  quizzesCompleted: number
  rank: number
  isCurrentUser: boolean
}

/**
 * Get the leaderboard ordered by accuracy percentage
 * @param category Optional category to filter by
 * @returns Top 5 users and the current user's position
 */
export async function getLeaderboardAction(
  category?: string
): Promise<ActionState<{
  leaders: LeaderboardEntry[]
  currentUserRank?: LeaderboardEntry
}>> {
  try {
    console.log("Getting leaderboard", { category })
    
    // Get current user ID from auth
    const session = await auth()
    const currentUserId = session?.userId
    
    if (!currentUserId) {
      return {
        isSuccess: false,
        message: "User not authenticated"
      }
    }
    
    // Get top 5 users using our new database function
    const topLeadersQuery = sql`
      SELECT * FROM get_homepage_leaderboard(${category || null}, 5)
    `
    
    const topLeaders = await db.execute(topLeadersQuery)
    
    // Check if current user is in top 5
    const currentUserInTop5 = topLeaders.some(
      leader => leader.user_id === currentUserId
    )
    
    // Get current user position if not in top 5
    let currentUserPosition
    
    if (!currentUserInTop5) {
      const userPositionQuery = sql`
        SELECT * FROM get_user_leaderboard_position(${currentUserId}, ${category || null})
      `
      const userPosition = await db.execute(userPositionQuery)
      
      if (userPosition.length > 0) {
        currentUserPosition = userPosition[0]
      }
    }
    
    // Format leaderboard entries
    const leaders: LeaderboardEntry[] = topLeaders.map(leader => {
      // Ensure we have valid display name
      const displayName = leader.display_name as string || `User ${(leader.user_id as string).substring(0, 6)}`;
      
      return {
        userId: leader.user_id as string,
        displayName,
        profileImageUrl: leader.profile_image_url as string | null,
        totalAttempts: Number(leader.total_attempts || 0),
        correctAnswers: Number(leader.correct_answers || 0),
        accuracyPercentage: Number(leader.accuracy_percentage || 0),
        quizzesCompleted: Number(leader.quizzes_completed || 0),
        rank: Number(leader.rank || 0),
        isCurrentUser: leader.user_id === currentUserId
      };
    });
    
    // Format current user rank if not in top 5
    let formattedCurrentUserRank: LeaderboardEntry | undefined
    
    if (currentUserPosition) {
      // Ensure we have valid display name
      const displayName = currentUserPosition.display_name as string || 
        `User ${(currentUserPosition.user_id as string).substring(0, 6)}`;
      
      formattedCurrentUserRank = {
        userId: currentUserPosition.user_id as string,
        displayName,
        profileImageUrl: currentUserPosition.profile_image_url as string | null,
        totalAttempts: Number(currentUserPosition.total_attempts || 0),
        correctAnswers: Number(currentUserPosition.correct_answers || 0),
        accuracyPercentage: Number(currentUserPosition.accuracy_percentage || 0),
        quizzesCompleted: Number(currentUserPosition.quizzes_completed || 0),
        rank: Number(currentUserPosition.rank || 0),
        isCurrentUser: true
      }
    }
    
    return {
      isSuccess: true,
      message: "Leaderboard retrieved successfully",
      data: {
        leaders,
        currentUserRank: formattedCurrentUserRank
      }
    }
  } catch (error) {
    console.error("Error retrieving leaderboard:", error)
    return {
      isSuccess: false,
      message: "Failed to retrieve leaderboard"
    }
  }
}

/**
 * Get all categories from leaderboard entries
 */
export async function getLeaderboardCategoriesAction(): Promise<ActionState<string[]>> {
  try {
    // Get authenticated user
    const session = await auth()
    if (!session?.userId) {
      return {
        isSuccess: false,
        message: "User not authenticated"
      }
    }
    
    // Query all categories using our new function
    const query = sql`SELECT * FROM get_leaderboard_categories()`
    
    const result = await db.execute(query)
    
    // Extract categories from result
    const categories = result.map(row => row.category as string)
    
    return {
      isSuccess: true,
      message: "Categories retrieved successfully",
      data: categories
    }
  } catch (error) {
    console.error("Error retrieving leaderboard categories:", error)
    return {
      isSuccess: false,
      message: "Failed to retrieve leaderboard categories"
    }
  }
}

/**
 * Update a user's leaderboard entry
 */
export async function updateUserLeaderboardAction(
  userId: string
): Promise<ActionState<void>> {
  try {
    const session = await auth()
    // Only allow users to update their own leaderboard or admins
    if (!session || !session.userId || (session.userId !== userId && !session.sessionClaims?.admin)) {
      return {
        isSuccess: false,
        message: "Unauthorized"
      }
    }
    
    // Update user leaderboard using our new function
    const query = sql`SELECT update_user_leaderboard(${userId})`
    await db.execute(query)
    
    return {
      isSuccess: true,
      message: "User leaderboard updated successfully",
      data: undefined
    }
  } catch (error) {
    console.error("Error updating user leaderboard:", error)
    return {
      isSuccess: false,
      message: "Failed to update user leaderboard"
    }
  }
} 