"use server"

/**
 * @description
 * This file provides server actions for interacting with badges in the KannadaKali app.
 * It implements CRUD operations for user badges and badge progress tracking.
 *
 * Key features:
 * - Badge Management: Create, read, update, and delete badge records.
 * - User Progress: Track badge progress and level advancement.
 * - CSV Integration: Works with badge definitions in badges-logic.csv.
 *
 * @dependencies
 * - drizzle-orm: Provides database query capabilities.
 * - @/db/db: Database connection.
 * - @/db/schema: Badge and profile schema definitions.
 * - @/types: ActionState type for consistent action responses.
 */

import { db } from "@/db/db"
import { badgesTable, InsertBadge, SelectBadge } from "@/db/schema"
import { ActionState } from "@/types"
import { and, eq } from "drizzle-orm"

/**
 * Creates a new badge record for a user
 */
export async function createBadgeAction(
  badge: InsertBadge
): Promise<ActionState<SelectBadge | undefined>> {
  try {
    // Check if the badge already exists for this user
    const existingBadge = await db.query.badges.findFirst({
      where: and(
        eq(badgesTable.userId, badge.userId),
        eq(badgesTable.badgeId, badge.badgeId)
      )
    })

    if (existingBadge) {
      return {
        isSuccess: false,
        message: "Badge already exists for this user"
      }
    }

    // Create the new badge
    const [newBadge] = await db.insert(badgesTable).values(badge).returning()

    return {
      isSuccess: true,
      message: "Badge created successfully",
      data: newBadge
    }
  } catch (error) {
    console.error("Error creating badge:", error)
    return { isSuccess: false, message: "Failed to create badge" }
  }
}

/**
 * Gets all badges for a specific user
 */
export async function getUserBadgesAction(
  userId: string
): Promise<ActionState<SelectBadge[]>> {
  try {
    const badges = await db.query.badges.findMany({
      where: eq(badgesTable.userId, userId),
      orderBy: badgesTable.earnedAt
    })

    return {
      isSuccess: true,
      message: "Badges retrieved successfully",
      data: badges
    }
  } catch (error) {
    console.error("Error getting user badges:", error)
    return { isSuccess: false, message: "Failed to get user badges" }
  }
}

/**
 * Gets a specific badge for a user
 */
export async function getUserBadgeAction(
  userId: string,
  badgeId: string
): Promise<ActionState<SelectBadge | undefined>> {
  try {
    const badge = await db.query.badges.findFirst({
      where: and(
        eq(badgesTable.userId, userId),
        eq(badgesTable.badgeId, badgeId)
      )
    })

    return {
      isSuccess: true,
      message: badge ? "Badge retrieved successfully" : "Badge not found",
      data: badge || undefined
    }
  } catch (error) {
    console.error("Error getting user badge:", error)
    return { isSuccess: false, message: "Failed to get user badge" }
  }
}

/**
 * Updates an existing badge for a user
 */
export async function updateBadgeAction(
  userId: string,
  badgeId: string,
  data: Partial<InsertBadge>
): Promise<ActionState<SelectBadge | undefined>> {
  try {
    // Make sure we don't update the userId or badgeId
    const { userId: _, badgeId: __, ...updateData } = data

    const [updatedBadge] = await db
      .update(badgesTable)
      .set({
        ...updateData,
        updatedAt: new Date()
      })
      .where(
        and(
          eq(badgesTable.userId, userId),
          eq(badgesTable.badgeId, badgeId)
        )
      )
      .returning()

    if (!updatedBadge) {
      return {
        isSuccess: false,
        message: "Badge not found"
      }
    }

    return {
      isSuccess: true,
      message: "Badge updated successfully",
      data: updatedBadge
    }
  } catch (error) {
    console.error("Error updating badge:", error)
    return { isSuccess: false, message: "Failed to update badge" }
  }
}

/**
 * Updates or creates a badge for a user (upsert operation)
 */
export async function upsertBadgeAction(
  badge: InsertBadge
): Promise<ActionState<SelectBadge | undefined>> {
  try {
    // Check if the badge exists
    const existingBadge = await db.query.badges.findFirst({
      where: and(
        eq(badgesTable.userId, badge.userId),
        eq(badgesTable.badgeId, badge.badgeId)
      )
    })

    if (existingBadge) {
      // Update existing badge
      return updateBadgeAction(
        badge.userId,
        badge.badgeId,
        badge
      )
    } else {
      // Create new badge
      return createBadgeAction(badge)
    }
  } catch (error) {
    console.error("Error upserting badge:", error)
    return { isSuccess: false, message: "Failed to upsert badge" }
  }
}

/**
 * Deletes a badge for a user
 */
export async function deleteBadgeAction(
  userId: string,
  badgeId: string
): Promise<ActionState<void>> {
  try {
    await db
      .delete(badgesTable)
      .where(
        and(
          eq(badgesTable.userId, userId),
          eq(badgesTable.badgeId, badgeId)
        )
      )

    return {
      isSuccess: true,
      message: "Badge deleted successfully",
      data: undefined
    }
  } catch (error) {
    console.error("Error deleting badge:", error)
    return { isSuccess: false, message: "Failed to delete badge" }
  }
} 