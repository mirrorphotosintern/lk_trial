"use server"

import { promises as fs } from "fs"
import path from "path"
import { BadgeDefinition } from "@/lib/utils/badge-utils"
import { cache } from "react"

/**
 * Server action to load badge definitions from the CSV file
 * Uses React cache to prevent unnecessary file reads
 */
export const getBadgeDefinitionsAction = cache(async (): Promise<BadgeDefinition[]> => {
  try {
    // Read the CSV file
    const csvPath = path.join(process.cwd(), "public", "data", "badges-logic.csv")
    const fileContent = await fs.readFile(csvPath, "utf-8")
    
    // Parse the CSV content
    const lines = fileContent.split("\n").filter(line => line.trim().length > 0)
    const headers = lines[0].split(",")
    
    // Create badge definitions from CSV rows
    return lines.slice(1).map(line => {
      const values = line.split(",")
      const badgeData: Record<string, string> = {}
      
      // Map CSV values to object properties
      headers.forEach((header, index) => {
        badgeData[header] = values[index] || ""
      })
      
      // Convert to strongly typed BadgeDefinition
      return {
        badgeId: badgeData["badge-english"].toLowerCase().replace(/\s+/g, "-"),
        kannadaName: badgeData["badge-kannada"],
        englishName: badgeData["badge-english"],
        imageUrl: badgeData["badge-image"],
        displayText: badgeData["badge-display"],
        tableLogic: badgeData["badge-table-logic"],
        hasLevels: badgeData["levels"] === "yes",
        levelRequirements: {
          level1: badgeData["level-1-logic"],
          level2: badgeData["level-2-logic"],
          level3: badgeData["level-3-logic"],
          level4: badgeData["level-4-logic"],
          level5: badgeData["level-5-logic"]
        }
      }
    })
  } catch (error) {
    console.error("Error loading badge definitions:", error)
    return []
  }
}) 