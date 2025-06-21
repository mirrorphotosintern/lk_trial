/**
 * @description
 * This file defines the Drizzle ORM schema for the 'badges' table in the KannadaKali app.
 * It tracks badges earned by users based on their learning achievements.
 *
 * Key features:
 * - Badge Tracking: Stores earned badges and their current levels for each user.
 * - Progress Tracking: Monitors progress toward next badge level.
 * - Referenced Data: Badge details (names, images, requirements) are stored in CSV.
 *
 * @dependencies
 * - drizzle-orm/pg-core: Provides PostgreSQL schema definition utilities.
 *
 * @notes
 * - Links to Clerk userId for proper authentication.
 * - Badge definitions are stored in public/data/badges-logic.csv.
 * - Progress value interpretation depends on the specific badge logic.
 */

import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
import { profilesTable } from "./profiles-schema"

// Define the badges table
export const badgesTable = pgTable("badges", {
  id: uuid("id").defaultRandom().primaryKey(), // Unique identifier for each badge record
  userId: text("user_id")
    .notNull()
    .references(() => profilesTable.userId, { onDelete: "cascade" }), // Links to profiles table user_id
  badgeId: text("badge_id").notNull(), // Badge identifier matching badges-logic.csv
  currentLevel: integer("current_level").default(1).notNull(), // Current badge level (1-5)
  progress: integer("progress").default(0).notNull(), // Progress toward next level
  earnedAt: timestamp("earned_at", { withTimezone: true })
    .defaultNow()
    .notNull(), // When badge was first earned
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()) // Auto-update on changes
})

// Export types for use in actions
export type InsertBadge = typeof badgesTable.$inferInsert
export type SelectBadge = typeof badgesTable.$inferSelect
