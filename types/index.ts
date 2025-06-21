/**
 * @description
 * This file serves as the central export point for all TypeScript types in the KannadaKali app.
 * It aggregates type definitions for easy import across the application.
 *
 * Key features:
 * - Type Aggregation: Exports all app-specific types in one place.
 * - Consistency: Follows project rules for type organization.
 *
 * @dependencies
 * - ./server-action-types.ts: Exports the ActionState type.
 * - ./kannada-types.ts: Exports the KannadaEntry interface.
 * - ./progress-types.ts: Exports the Progress interface.
 * - ./survey-types.ts: Exports survey-related types and interfaces.
 *
 * @notes
 * - Additional types can be added here as the app grows.
 */

export * from "./server-action-types"
export * from "./kannada-types"
export * from "./progress-types"
export * from "./survey-types"
