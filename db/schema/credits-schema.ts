import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core"

export const creditsTable = pgTable("credits", {
  userId: text("user_id").primaryKey(),
  credits: integer("credits").notNull().default(100),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
})

export type InsertCredit = typeof creditsTable.$inferInsert
export type SelectCredit = typeof creditsTable.$inferSelect
