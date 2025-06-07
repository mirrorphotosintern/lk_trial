import {
  pgTable,
  text,
  integer,
  timestamp,
  decimal,
  pgEnum
} from "drizzle-orm/pg-core"

export const paymentStatusEnum = pgEnum("payment_status", [
  "pending",
  "completed",
  "failed",
  "refunded"
])

export const paymentsTable = pgTable("payments", {
  id: text("id").primaryKey(), // Use Stripe session ID as primary key
  userId: text("user_id").notNull(),
  stripeSessionId: text("stripe_session_id").notNull(),
  stripePaymentIntentId: text("stripe_payment_intent_id"),
  stripeCustomerId: text("stripe_customer_id"),

  // Payment details
  credits: integer("credits").notNull(),
  amountPaid: decimal("amount_paid", { precision: 10, scale: 2 }).notNull(), // Amount in dollars
  currency: text("currency").notNull().default("usd"),

  // Status and metadata
  status: paymentStatusEnum("status").notNull().default("pending"),
  metadata: text("metadata"), // JSON string for additional data

  // Timestamps
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
})

export type InsertPayment = typeof paymentsTable.$inferInsert
export type SelectPayment = typeof paymentsTable.$inferSelect
