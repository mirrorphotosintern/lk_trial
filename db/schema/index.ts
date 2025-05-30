/**
 * @description
 * This file serves as the central export point for all database schemas in the KannadaKali app.
 * It aggregates schema definitions for easy import across the application.
 *
 * Key features:
 * - Schema Aggregation: Exports all table schemas in one place.
 * - Consistency: Follows project rules for schema organization.
 *
 * @dependencies
 * - ./profiles-schema.ts: Exports the profiles table schema.
 * - ./progress-schema.ts: Exports the progress table schema.
 * - ./quiz-results-schema.ts: Exports the quiz results table schema.
 * - ./word-stats-schema.ts: Exports the word statistics table schema.
 *
 * @notes
 * - Additional schemas can be added here as the app grows.
 */

export * from "./profiles-schema"
export * from "./progress-schema"
export * from "./quiz-results-schema"
export * from "./word-stats-schema"
export * from "./leaderboard-schema"
export * from "./badges-schema"
export * from "./credits-schema"
