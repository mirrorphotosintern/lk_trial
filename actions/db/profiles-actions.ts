/*
Contains server actions related to profiles in the DB.
*/

"use server"

import { db } from "@/db/db"
import { profilesTable, InsertProfile, SelectProfile } from "@/db/schema"
import { ActionState } from "@/types"
import { auth, currentUser } from "@clerk/nextjs/server"
import { eq, sql } from "drizzle-orm"

export async function createProfileAction(
  data: InsertProfile
): Promise<ActionState<SelectProfile>> {
  try {
    const [newProfile] = await db.insert(profilesTable).values(data).returning()
    return {
      isSuccess: true,
      message: "Profile created successfully",
      data: newProfile
    }
  } catch (error) {
    console.error("Error creating profile:", error)
    return { isSuccess: false, message: "Failed to create profile" }
  }
}

export async function getProfileByUserIdAction(
  userId: string
): Promise<ActionState<SelectProfile>> {
  try {
    const profile = await db.query.profiles.findFirst({
      where: eq(profilesTable.userId, userId)
    })
    if (!profile) {
      return { isSuccess: false, message: "Profile not found" }
    }

    return {
      isSuccess: true,
      message: "Profile retrieved successfully",
      data: profile
    }
  } catch (error) {
    console.error("Error getting profile by user id", error)
    return { isSuccess: false, message: "Failed to get profile" }
  }
}

export async function updateProfileAction(
  userId: string,
  data: Partial<InsertProfile>
): Promise<ActionState<SelectProfile>> {
  try {
    const [updatedProfile] = await db
      .update(profilesTable)
      .set(data)
      .where(eq(profilesTable.userId, userId))
      .returning()

    if (!updatedProfile) {
      return { isSuccess: false, message: "Profile not found to update" }
    }

    return {
      isSuccess: true,
      message: "Profile updated successfully",
      data: updatedProfile
    }
  } catch (error) {
    console.error("Error updating profile:", error)
    return { isSuccess: false, message: "Failed to update profile" }
  }
}

export async function deleteProfileAction(
  userId: string
): Promise<ActionState<void>> {
  try {
    await db.delete(profilesTable).where(eq(profilesTable.userId, userId))
    return {
      isSuccess: true,
      message: "Profile deleted successfully",
      data: undefined
    }
  } catch (error) {
    console.error("Error deleting profile:", error)
    return { isSuccess: false, message: "Failed to delete profile" }
  }
}

/**
 * Syncs the current user's profile from Clerk to the profiles table
 */
export async function syncUserProfileAction(): Promise<ActionState<SelectProfile>> {
  try {
    // Get authenticated user
    const session = await auth()
    if (!session?.userId) {
      return {
        isSuccess: false,
        message: "Unauthorized"
      }
    }

    // Get current user details from Clerk
    const user = await currentUser()
    if (!user) {
      return {
        isSuccess: false,
        message: "User not found"
      }
    }

    // Extract user details
    const userId = user.id
    
    // Create display name from user data
    let displayName: string
    if (user.firstName && user.lastName) {
      displayName = `${user.firstName} ${user.lastName}`.trim()
    } else if (user.firstName) {
      displayName = user.firstName
    } else if (user.emailAddresses && user.emailAddresses.length > 0) {
      displayName = user.emailAddresses[0].emailAddress.split('@')[0]
    } else {
      displayName = `User ${userId.substring(0, 6)}`
    }
    
    // Get profile image URL and email
    const profileImageUrl = user.imageUrl
    const email = user.emailAddresses.length > 0 ? user.emailAddresses[0].emailAddress : null

    // Call the database function to sync profile
    await db.execute(sql`
      SELECT sync_clerk_profile(
        ${userId},
        ${displayName},
        ${profileImageUrl},
        ${email}
      )
    `)

    // Get the updated profile
    const [profile] = await db.select().from(profilesTable).where(eq(profilesTable.userId, userId))

    return {
      isSuccess: true,
      message: "Profile synced successfully",
      data: profile
    }
  } catch (error) {
    console.error("Error syncing user profile:", error)
    return {
      isSuccess: false,
      message: "Failed to sync user profile"
    }
  }
}

/**
 * Syncs user profile with provided data (for webhook use)
 */
export async function syncUserProfileWithDataAction(data: {
  userId: string;
  displayName: string;
  profileImageUrl?: string;
  email?: string;
}): Promise<ActionState<SelectProfile>> {
  try {
    const { userId, displayName, profileImageUrl, email } = data;
    
    // Call the database function to sync profile
    await db.execute(sql`
      SELECT sync_clerk_profile(
        ${userId},
        ${displayName},
        ${profileImageUrl || null},
        ${email || null}
      )
    `);

    // Get the updated profile
    const [profile] = await db.select().from(profilesTable).where(eq(profilesTable.userId, userId));

    if (!profile) {
      return {
        isSuccess: false,
        message: "Failed to retrieve synced profile"
      };
    }

    return {
      isSuccess: true,
      message: "Profile synced successfully with provided data",
      data: profile
    };
  } catch (error) {
    console.error("Error syncing user profile with data:", error);
    return {
      isSuccess: false,
      message: "Failed to sync user profile with data"
    };
  }
}

/**
 * Get a user's profile by user ID
 * @param userId The user ID to get the profile for
 */
export async function getUserProfileAction(userId: string): Promise<ActionState<SelectProfile>> {
  try {
    const [profile] = await db.select().from(profilesTable).where(eq(profilesTable.userId, userId))
    
    if (!profile) {
      return {
        isSuccess: false,
        message: "Profile not found"
      }
    }
    
    return {
      isSuccess: true,
      message: "Profile retrieved successfully",
      data: profile
    }
  } catch (error) {
    console.error("Error retrieving user profile:", error)
    return {
      isSuccess: false,
      message: "Failed to retrieve user profile"
    }
  }
}

/**
 * Get multiple user profiles by user IDs
 * @param userIds Array of user IDs to get profiles for
 */
export async function getUserProfilesAction(userIds: string[]): Promise<ActionState<SelectProfile[]>> {
  try {
    if (!userIds.length) {
      return {
        isSuccess: true,
        message: "No user IDs provided",
        data: []
      }
    }
    
    const profiles = await db
      .select()
      .from(profilesTable)
      .where(sql`${profilesTable.userId} = ANY(${userIds})`)
    
    return {
      isSuccess: true,
      message: "Profiles retrieved successfully",
      data: profiles
    }
  } catch (error) {
    console.error("Error retrieving user profiles:", error)
    return {
      isSuccess: false,
      message: "Failed to retrieve user profiles"
    }
  }
}

/**
 * Update a profile by Stripe customer ID
 * Used for updating subscription status when webhook events are received
 */
export async function updateProfileByStripeCustomerIdAction(
  stripeCustomerId: string,
  data: Partial<InsertProfile>
): Promise<ActionState<SelectProfile>> {
  try {
    // Find the profile with the given Stripe customer ID
    const profile = await db.query.profiles.findFirst({
      where: eq(profilesTable.stripeCustomerId, stripeCustomerId)
    })
    
    if (!profile) {
      return { 
        isSuccess: false, 
        message: "Profile with the provided Stripe customer ID not found" 
      }
    }
    
    // Update the profile
    const [updatedProfile] = await db
      .update(profilesTable)
      .set(data)
      .where(eq(profilesTable.stripeCustomerId, stripeCustomerId))
      .returning()
    
    return {
      isSuccess: true,
      message: "Profile updated successfully via Stripe customer ID",
      data: updatedProfile
    }
  } catch (error) {
    console.error("Error updating profile by Stripe customer ID:", error)
    return { 
      isSuccess: false, 
      message: "Failed to update profile by Stripe customer ID" 
    }
  }
}
