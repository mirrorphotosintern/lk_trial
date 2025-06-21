/**
 * @description
 * This file defines the Drizzle ORM schema for the 'quiz_results' table in the KannadaKali app.
 * It stores detailed results of rapid fire quizzes for parental review.
 *
 * Key features:
 * - Quiz Tracking: Stores results of each quiz attempt including score, date, and type.
 * - Parent Monitoring: Designed for parents to review their child's progress.
 *
 * @dependencies
 * - drizzle-orm/pg-core: Provides PostgreSQL schema definition utilities.
 *
 * @notes
 * - Links to Clerk userId for proper authentication.
 * - Timestamps track when quizzes were taken.
 * - Designed to be queried efficiently for the parental dashboard.
 */

import {
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid
} from "drizzle-orm/pg-core"

// Define quiz type enum
export const quizTypeEnum = pgEnum("quiz_type", ["rapid_fire", "standard"])

// Define the quiz results table
export const quizResultsTable = pgTable("quiz_results", {
  id: uuid("id").defaultRandom().primaryKey(), // Unique identifier for each result
  userId: text("user_id").notNull(), // Links to Clerk user ID
  quizType: quizTypeEnum("quiz_type").notNull(), // Type of quiz (rapid fire or standard)
  score: integer("score").notNull(), // Number of correct answers
  totalQuestions: integer("total_questions").notNull(), // Total number of questions
  timeSpent: integer("time_spent"), // Time spent in seconds (optional)
  categories: text("categories").array(), // Categories of words included in the quiz
  createdAt: timestamp("created_at").defaultNow().notNull(), // When the quiz was taken
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()) // Auto-update on changes
})

// Type definitions for inserting and selecting quiz results
export type InsertQuizResult = typeof quizResultsTable.$inferInsert
export type SelectQuizResult = typeof quizResultsTable.$inferSelect
