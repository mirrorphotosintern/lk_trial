/**
 * @description
 * This file defines the schema for the 'profiles' table in the KannadaKali app.
 * It stores user profile information from Clerk authentication.
 *
 * Key features:
 * - User Profiles: Stores name, image URL, and email for users.
 * - Auth Integration: Links to Clerk user ID for authenticated access.
 * - Last Sign-in Tracking: Monitors when users last accessed the app.
 * - Stripe Integration: Stores Stripe customer ID and subscription information.
 *
 * @dependencies
 * - drizzle-orm/pg-core: Provides PostgreSQL schema definition utilities.
 */

import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core"

// Define membership types
export const membershipEnum = pgEnum("membership", ["free", "pro"])

export const profilesTable = pgTable("profiles", {
  userId: text("user_id").primaryKey().notNull(), // Links to Clerk user ID
  displayName: text("display_name").notNull(), // User's display name
  profileImageUrl: text("profile_image_url"), // URL to user's profile image
  email: text("email"), // User's email address
  // Stripe related fields
  stripeCustomerId: text("stripe_customer_id"), // Stripe customer ID
  stripeSubscriptionId: text("stripe_subscription_id"), // Stripe subscription ID
  membership: membershipEnum("membership").default("free").notNull(), // User's membership status
  lastSignIn: timestamp("last_sign_in", { withTimezone: true })
    .defaultNow()
    .notNull(), // Last sign-in timestamp
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(), // When profile was created
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull() // When profile was last updated
})

export type InsertProfile = typeof profilesTable.$inferInsert
export type SelectProfile = typeof profilesTable.$inferSelect
