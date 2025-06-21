/**
 * @description
 * This file defines the Drizzle ORM schema for the 'word_stats' table in the KannadaKali app.
 * It tracks user performance with individual words, including attempts and success rates.
 *
 * Key features:
 * - Word Performance Tracking: Stores metrics for each word a user interacts with.
 * - Parental Dashboard: Provides data for parents to monitor child's vocabulary progress.
 *
 * @dependencies
 * - drizzle-orm/pg-core: Provides PostgreSQL schema definition utilities.
 *
 * @notes
 * - Links to Clerk userId for proper authentication.
 * - Timestamps track when statistics were last updated.
 * - Designed to be queried efficiently for the parental dashboard.
 */

import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"

// Define the word statistics table
export const wordStatsTable = pgTable("word_stats", {
  id: uuid("id").defaultRandom().primaryKey(), // Unique identifier for each word statistic entry
  userId: text("user_id").notNull(), // Links to Clerk user ID
  word: text("word").notNull(), // The English word being tracked
  kanglish: text("kanglish").notNull(), // The Kanglish transliteration
  kannada: text("kannada"), // The Kannada word (optional)
  icon: text("icon"), // URL to the word's icon (optional)
  category: text("category"), // Category of the word (optional)

  // Performance statistics
  totalAttempts: integer("total_attempts").default(0).notNull(), // Number of times the word was attempted
  correctCount: integer("correct_count").default(0).notNull(), // Number of times the word was answered correctly

  // Timestamps
  createdAt: timestamp("created_at").defaultNow().notNull(), // Creation timestamp
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()) // Auto-update on changes
})

// Export types for use in actions
export type InsertWordStat = typeof wordStatsTable.$inferInsert
export type SelectWordStat = typeof wordStatsTable.$inferSelect
