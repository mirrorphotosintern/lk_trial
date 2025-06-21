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

    // Try to get current user ID from auth, but allow unauthenticated
    let currentUserId: string | undefined = undefined
    try {
      const session = await auth()
      currentUserId = session?.userId ?? undefined
    } catch {}

    // Force category to NULL to fetch all leaderboard data
    const safeCategory = null
    const topLeadersQuery = sql`
      SELECT * FROM get_homepage_leaderboard(${safeCategory}, NULL)
    `
    const topLeaders = await db.execute(topLeadersQuery)
    console.log('DEBUG: Raw leaderboard data:', topLeaders)
    if (!topLeaders || topLeaders.length === 0) {
      console.warn('DEBUG: No leaderboard data returned from Supabase. Check SQL function and table contents.')
    }

    // Format leaderboard entries
    const leaders: LeaderboardEntry[] = topLeaders.map(leader => {
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
        isCurrentUser: currentUserId ? leader.user_id === currentUserId : false
      };
    });

    // Only fetch current user rank if authenticated and not in top 5
    let formattedCurrentUserRank: LeaderboardEntry | undefined = undefined
    if (currentUserId && !topLeaders.some(l => l.user_id === currentUserId)) {
      const userPositionQuery = sql`
        SELECT * FROM get_user_leaderboard_position(${currentUserId}, ${safeCategory})
      `
      const userPosition = await db.execute(userPositionQuery)
      if (userPosition.length > 0) {
        const pos = userPosition[0]
        const displayName = pos.display_name as string || `User ${(pos.user_id as string).substring(0, 6)}`;
        formattedCurrentUserRank = {
          userId: pos.user_id as string,
          displayName,
          profileImageUrl: pos.profile_image_url as string | null,
          totalAttempts: Number(pos.total_attempts || 0),
          correctAnswers: Number(pos.correct_answers || 0),
          accuracyPercentage: Number(pos.accuracy_percentage || 0),
          quizzesCompleted: Number(pos.quizzes_completed || 0),
          rank: Number(pos.rank || 0),
          isCurrentUser: true
        }
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
    // Allow public access, do not require auth
    const query = sql`SELECT * FROM get_leaderboard_categories()`
    const result = await db.execute(query)
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