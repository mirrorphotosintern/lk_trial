import { pgTable, uuid, integer, timestamp, text } from "drizzle-orm/pg-core"

export const creditsTable = pgTable("user_credits", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  credits: integer("credits").notNull().default(1),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
})

export type InsertCredits = typeof creditsTable.$inferInsert
export type SelectCredits = typeof creditsTable.$inferSelect
