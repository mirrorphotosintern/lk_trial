/**
 * @description
 * This file contains server actions for handling icon downloads in the KannadaKali app.
 * It provides functionality to fetch icons from URLs in the CSV file and save them locally.
 *
 * Key features:
 * - Icon Download: Downloads icons from external URLs to the local public/icons directory
 * - Authentication: Ensures only authenticated users can trigger the download
 * - File Operations: Handles file writing and directory creation
 *
 * @dependencies
 * - @clerk/nextjs/server: Provides authentication utilities
 * - fs/promises: Node.js API for asynchronous file operations
 * - path: Node.js API for path manipulation
 * - @/lib/csv-parser: Custom utility to parse CSV data
 * - @/types: Imports ActionState and KannadaEntry for type safety
 */

"use server"

import { auth } from "@clerk/nextjs/server"
import { readFile, writeFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"
import { parseCsv } from "@/lib/csv-parser"
import { ActionState, KannadaEntry } from "@/types"

/**
 * Downloads icons from the CSV file URLs and saves them to the public/icons directory.
 * @returns A promise resolving to an ActionState containing the number of icons downloaded.
 */
export async function downloadIconsAction(): Promise<ActionState<number>> {
  // Check authentication
  const { userId } = await auth()
  if (!userId) {
    return {
      isSuccess: false,
      message: "Unauthorized: Please sign in to download icons"
    }
  }

  try {
    // Read the CSV file from the public directory
    const csvPath = process.cwd() + "/public/data/kannada-kali.csv"
    const csvData = await readFile(csvPath, "utf-8")

    // Parse the CSV data into an array of KannadaEntry objects
    const parsedData = parseCsv(csvData)

    // Create the icons directory if it doesn't exist
    const iconsDir = path.join(process.cwd(), "public", "icons")
    if (!existsSync(iconsDir)) {
      await mkdir(iconsDir, { recursive: true })
    }

    // Keep track of icons downloaded
    let downloadedCount = 0

    // Process each entry in the CSV data
    for (const entry of parsedData) {
      if (entry.english && entry.icon) {
        try {
          // Fetch the icon from the URL
          const response = await fetch(entry.icon)
          if (!response.ok) {
            console.error(`Failed to fetch icon for ${entry.english}: ${response.statusText}`)
            continue
          }

          // Convert the icon to a buffer
          const buffer = await response.arrayBuffer()

          // Determine the file extension (default to .png if not present)
          const urlPath = new URL(entry.icon).pathname
          const extension = path.extname(urlPath) || ".png"
          
          // Create a safe filename from the English word
          const safeName = entry.english.toLowerCase().replace(/[^a-z0-9]/g, "-")
          
          // Create the full file path
          const filePath = path.join(iconsDir, `${safeName}${extension}`)
          
          // Save the icon to the file system
          await writeFile(filePath, Buffer.from(buffer))
          
          downloadedCount++
        } catch (error) {
          console.error(`Error downloading icon for ${entry.english}:`, error)
        }
      }
    }

    return {
      isSuccess: true,
      message: `Successfully downloaded ${downloadedCount} icons`,
      data: downloadedCount
    }
  } catch (error) {
    console.error("Error downloading icons:", error)
    return {
      isSuccess: false,
      message: `Failed to download icons: ${error instanceof Error ? error.message : "Unknown error"}`
    }
  }
}

/**
 * Maps words to their local icon paths based on English word names.
 * This helps transform data for the parental dashboard to use local icons.
 * @param words - Array of word objects containing English words
 * @returns The same array with icon paths pointing to local files
 */
export async function mapWordsToLocalIconsAction<T extends { english?: string, icon?: string | null }>(
  words: T[]
): Promise<ActionState<T[]>> {
  try {
    return {
      isSuccess: true,
      message: "Successfully mapped words to local icons",
      data: words.map(word => {
        if (word.english) {
          const safeName = word.english.toLowerCase().replace(/[^a-z0-9]/g, "-")
          return {
            ...word,
            icon: `/icons/${safeName}.png`
          }
        }
        return word
      })
    }
  } catch (error) {
    console.error("Error mapping words to local icons:", error)
    return {
      isSuccess: false,
      message: `Failed to map words to local icons: ${error instanceof Error ? error.message : "Unknown error"}`
    }
  }
} 