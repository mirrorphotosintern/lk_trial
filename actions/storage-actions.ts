/**
 * @description
 * This file contains server actions for interacting with Supabase Storage in the KannadaKali app.
 * It provides functionality to fetch signed URLs for audio and image assets securely.
 *
 * Key features:
 * - Authentication: Ensures only authenticated users can access assets using Clerk.
 * - Asset Fetching: Retrieves signed URLs from Supabase Storage for temporary access.
 *
 * @dependencies
 * - @clerk/nextjs/server: Provides authentication utilities.
 * - @/lib/supabase: Custom Supabase client for storage operations.
 * - @/types: Imports ActionState for consistent return types.
 *
 * @notes
 * - Signed URLs are set to expire after 1 hour (3600 seconds) for security.
 * - Uses environment variable for bucket name per storage rules (no hardcoding).
 * - Errors are logged and returned in the ActionState format for consistent handling.
 */

"use server"

import { auth } from "@clerk/nextjs/server"
import { supabaseClient } from "@/lib/supabase"
import { ActionState } from "@/types"

/**
 * Fetches a signed URL for an asset from Supabase Storage.
 * @param bucket - The name of the storage bucket (e.g., "kannada-assets").
 * @param path - The path to the asset within the bucket (e.g., "audio/hello.mp3").
 * @returns A promise resolving to an ActionState containing the signed URL or an error.
 */
export async function fetchAssetStorage(bucket: string, path: string): Promise<ActionState<{ url: string }>> {
  // Check authentication
  const { userId } = await auth()
  if (!userId) {
    return {
      isSuccess: false,
      message: "Unauthorized: Please sign in to access assets"
    }
  }

  // Validate inputs
  if (!bucket || !path) {
    return {
      isSuccess: false,
      message: "Invalid input: Bucket and path are required"
    }
  }

  try {
    // Fetch signed URL from Supabase Storage
    const { data, error } = await supabaseClient.storage
      .from(bucket)
      .createSignedUrl(path, 3600) // URL expires in 1 hour

    if (error) throw error

    if (!data?.signedUrl) {
      throw new Error("Failed to generate signed URL")
    }

    return {
      isSuccess: true,
      message: "Asset URL fetched successfully",
      data: { url: data.signedUrl }
    }
  } catch (error) {
    console.error("Error fetching asset from Supabase Storage:", error)
    return {
      isSuccess: false,
      message: `Failed to fetch asset: ${error instanceof Error ? error.message : "Unknown error"}`
    }
  }
}