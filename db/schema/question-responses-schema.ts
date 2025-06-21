/**
 * @description
 * This file defines the schema for the 'question_responses' table in the KannadaKali app.
 * It stores individual question-answer pairs from the survey for detailed analytics.
 *
 * Key features:
 * - Individual Question Tracking: Each question gets its own row
 * - Answer History: Complete audit trail of all responses
 * - Flexible Storage: Can handle any question type and answer format
 * - User Linkage: Links to both user and main survey response
 *
 * @dependencies
 * - drizzle-orm/pg-core: Provides PostgreSQL schema definition utilities.
 */

import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
  jsonb
} from "drizzle-orm/pg-core"

export const questionResponsesTable = pgTable("question_responses", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  surveyResponseId: uuid("survey_response_id"), // Links to main survey_responses table

  // Question identification
  stepNumber: integer("step_number").notNull(), // 1, 2, or 3
  questionId: text("question_id").notNull(), // e.g., "primary_goal", "time_horizon"
  questionText: text("question_text").notNull(), // The actual question asked

  // Response data
  answerValue: text("answer_value"), // The selected/entered value
  answerText: text("answer_text"), // Human-readable answer text
  answerData: jsonb("answer_data"), // Full answer object for complex responses

  // Metadata
  responseOrder: integer("response_order"), // Order within the step
  isRequired: boolean("is_required").default(true),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
})

export type InsertQuestionResponse = typeof questionResponsesTable.$inferInsert
export type SelectQuestionResponse = typeof questionResponsesTable.$inferSelect
