/**
 * @description
 * This file serves as the central export point for all database schemas in the KannadaKali app.
 * It aggregates schema definitions for easy import across the application.
 *
 * Key features:
 * - Schema Aggregation: Exports all database tables and types in one place.
 * - Consistency: Follows project rules for schema organization.
 *
 * @dependencies
 * - ./profiles-schema.ts: User profile schema
 * - ./progress-schema.ts: Learning progress schema
 * - ./leaderboard-schema.ts: Leaderboard schema
 * - ./badges-schema.ts: Badges and achievements schema
 * - ./payments-schema.ts: Payment-related schema
 * - ./quiz-results-schema.ts: Quiz result schema
 * - ./word-stats-schema.ts: Word statistics schema
 * - ./credits-schema.ts: User credits schema
 * - ./survey-schema.ts: Survey responses schema
 *
 * @notes
 * - Additional schemas can be added here as the app grows.
 */

export * from "./profiles-schema"
export * from "./progress-schema"
export * from "./leaderboard-schema"
export * from "./badges-schema"
export * from "./payments-schema"
export * from "./quiz-results-schema"
export * from "./word-stats-schema"
export * from "./credits-schema"
export * from "./survey-schema"
