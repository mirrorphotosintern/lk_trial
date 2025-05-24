/**
 * @description
 * This file defines the Drizzle ORM schema for the 'progress' table in the KannadaKali app.
 * It tracks user progress, including stars earned, words learned, and quizzes played.
 *
 * Key features:
 * - Progress Tracking: Stores metrics for user engagement and learning progress.
 * - Future-Proofing: Designed to integrate with Clerk user IDs later.
 *
 * @dependencies
 * - drizzle-orm/pg-core: Provides PostgreSQL schema definition utilities.
 *
 * @notes
 * - `userId` is nullable now (local storage phase) but will become notNull() with Clerk integration.
 * - All fields have defaults to ensure valid initial states.
 * - Timestamps auto-update using Drizzle’s `$onUpdate` for consistency.
 */

import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"

// Define the progress table
export const progressTable = pgTable("progress", {
  id: uuid("id").defaultRandom().primaryKey(), // Unique identifier for each progress entry
  userId: text("user_id"), // Nullable for now; will link to Clerk user ID later
  stars: integer("stars").default(0).notNull(), // Number of stars earned
  wordsLearned: integer("words_learned").default(0).notNull(), // Number of words learned
  quizzesPlayed: integer("quizzes_played").default(0).notNull(), // Number of quizzes completed
  createdAt: timestamp("created_at").defaultNow().notNull(), // Creation timestamp
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()) // Auto-update on changes
})

// Type definitions for inserting and selecting progress records
export type InsertProgress = typeof progressTable.$inferInsert
export type SelectProgress = typeof progressTable.$inferSelect
