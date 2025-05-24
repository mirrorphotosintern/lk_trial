/**
 * @description
 * Utility functions for handling badges in the KannadaKali app.
 * Includes functions for parsing badge data from CSV and managing user badge progress.
 *
 * Key features:
 * - Type Definitions: Provides types for badge data structures.
 * - Calculation Helpers: Functions to determine badge eligibility and progress.
 */

import { cache } from "react"

/**
 * Represents a badge definition from the CSV file
 */
export interface BadgeDefinition {
  // Badge identifiers
  badgeId: string
  kannadaName: string
  englishName: string
  imageUrl: string
  displayText: string

  // Badge rules
  tableLogic: string
  hasLevels: boolean

  // Level requirements (if applicable)
  levelRequirements: {
    level1: string
    level2: string
    level3: string
    level4: string
    level5: string
  }
}

/**
 * Converts a string to a valid badge ID (kebab-case)
 */
export function getBadgeId(englishName: string): string {
  return englishName.toLowerCase().replace(/\s+/g, "-")
}

/**
 * Gets a specific badge definition by ID
 */
export function getBadgeDefinition(
  badgeId: string,
  badges: BadgeDefinition[]
): BadgeDefinition | undefined {
  return badges.find(badge => badge.badgeId === badgeId)
}

/**
 * Gets the requirement for a specific badge level
 */
export function getLevelRequirement(
  badge: BadgeDefinition,
  level: number
): string {
  if (!badge.hasLevels) return ""

  switch (level) {
    case 1:
      return badge.levelRequirements.level1
    case 2:
      return badge.levelRequirements.level2
    case 3:
      return badge.levelRequirements.level3
    case 4:
      return badge.levelRequirements.level4
    case 5:
      return badge.levelRequirements.level5
    default:
      return ""
  }
}

/**
 * Returns user-friendly text describing the current progress toward a badge
 */
export function formatBadgeProgress(
  badge: BadgeDefinition,
  currentLevel: number,
  progress: number
): string {
  if (!badge.hasLevels) {
    return "Badge earned!"
  }

  const nextLevel = currentLevel + 1
  if (nextLevel > 5) {
    return "Maximum level achieved!"
  }

  const requirement = getLevelRequirement(badge, nextLevel)
  const match = requirement.match(/(\d+)/)

  if (match) {
    const target = parseInt(match[1])
    const remaining = target - progress

    // Extract the type of achievement from the badge logic
    let achievementType = ""

    switch (badge.badgeId) {
      case "akshara-arasu":
        achievementType = "words"
        break
      case "arjuna-drushti":
        achievementType = "quizzes"
        break
      case "kireetaadhipathi":
        achievementType = "perfect quizzes"
        break
      case "shabda-shoora":
        achievementType = "high accuracy words"
        break
      case "trivikrama":
        achievementType = "correct answers"
        break
      default:
        achievementType = "items"
    }

    return `${remaining} more ${achievementType} to level ${nextLevel}`
  }

  return `Complete ${requirement} to reach level ${nextLevel}`
}
