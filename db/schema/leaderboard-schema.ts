/**
 * @description
 * This file defines the Drizzle ORM schema for the 'leaderboard' table in the KannadaKali app.
 * It stores aggregated user statistics for the leaderboard display.
 *
 * Key features:
 * - Performance Tracking: Stores pre-calculated metrics for efficient leaderboard display.
 * - Category-Based: Allows filtering leaderboard by word categories.
 * - Auto-Updated: Designed to be updated automatically when quiz results are submitted.
 *
 * @dependencies
 * - drizzle-orm/pg-core: Provides PostgreSQL schema definition utilities.
 *
 * @notes
 * - Links to Clerk userId for proper authentication.
 * - Updated automatically by triggers when quiz results are added/updated.
 */

import {
  index,
  pgTable,
  text,
  real,
  integer,
  timestamp,
  uuid
} from "drizzle-orm/pg-core"

// Define the leaderboard table
export const leaderboardTable = pgTable(
  "leaderboard",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: text("user_id").notNull().unique(), // Links to Clerk user ID
    totalAttempts: integer("total_attempts").notNull().default(0), // Total questions attempted
    correctAnswers: integer("correct_answers").notNull().default(0), // Total correct answers
    accuracyPercentage: real("accuracy_percentage").notNull().default(0), // Pre-calculated accuracy
    quizzesCompleted: integer("quizzes_completed").notNull().default(0), // Number of quizzes completed
    categories: text("categories").array().notNull().default([]), // Categories user has participated in
    displayName: text("display_name"),
    profileImageUrl: text("profile_image_url"),
    lastUpdated: timestamp("last_updated").notNull().defaultNow() // When the stats were last updated
    // No need for createdAt since we'll update this record as quizzes are completed
  },
  table => {
    return {
      accuracyIdx: index("leaderboard_accuracy_idx").on(
        table.accuracyPercentage
      )
    }
  }
)

export type InsertLeaderboard = typeof leaderboardTable.$inferInsert
export type SelectLeaderboard = typeof leaderboardTable.$inferSelect
