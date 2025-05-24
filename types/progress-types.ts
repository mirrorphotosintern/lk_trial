/**
 * @description
 * This file defines the TypeScript interface for progress data in the KannadaKali app.
 * It represents a user's learning progress, aligned with the `progress` table schema.
 *
 * Key features:
 * - Type Consistency: Extends Drizzle ORM's inferred types for database alignment.
 * - Progress Tracking: Includes fields for tracking stars, words learned, and quizzes played.
 *
 * @dependencies
 * - @/db/schema: Imports `InsertProgress` and `SelectProgress` from the progress schema.
 *
 * @notes
 * - Uses SelectProgress as the base type since it contains all required fields.
 * - `userId` is optional now (nullable in schema) but will become required with Clerk integration.
 * - Timestamps are included as per schema requirements.
 */

import { InsertProgress, SelectProgress } from "@/db/schema/progress-schema"

// Use SelectProgress as the base type since it contains all required fields
export type Progress = SelectProgress
