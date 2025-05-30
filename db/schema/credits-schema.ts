/**
 * @description
 * This file defines the Drizzle ORM schema for the 'credits' table in the LearnKannada app.
 * It stores user credit information for premium features and purchases.
 *
 * Key features:
 * - Credit Tracking: Stores user credit balance
 * - User Association: Links to Clerk userId for proper authentication
 * - Auto-Updated: Timestamps track when credits were last modified
 *
 * @dependencies
 * - drizzle-orm/pg-core: Provides PostgreSQL schema definition utilities
 */

import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core"

export const creditsTable = pgTable("credits", {
  userId: text("user_id").primaryKey(), // Links to Clerk user ID
  credits: integer("credits").notNull().default(0), // Current credit balance
  createdAt: timestamp("created_at").defaultNow().notNull(), // When the record was created
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()) // Auto-update on changes
})

export type InsertCredit = typeof creditsTable.$inferInsert
export type SelectCredit = typeof creditsTable.$inferSelect
