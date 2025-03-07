/**
 * @description
 * This file configures the Drizzle ORM database instance for the KannadaKali app.
 * It establishes a connection to the Supabase PostgreSQL database and defines the schema.
 *
 * Key features:
 * - Database Connection: Connects to Supabase using DATABASE_URL.
 * - Schema Integration: Includes all app schemas for ORM operations.
 *
 * @dependencies
 * - dotenv: Loads environment variables from .env.local.
 * - drizzle-orm/postgres-js: Provides Drizzle ORM for PostgreSQL.
 * - postgres: PostgreSQL client for Supabase.
 * - @/db/schema: Imports all schema definitions.
 *
 * @notes
 * - Assumes DATABASE_URL is set in .env.local.
 * - Additional tables can be added to the schema object as needed.
 */

import { profilesTable, progressTable, quizResultsTable, wordStatsTable } from "@/db/schema"
import { config } from "dotenv"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

// Load environment variables from .env.local
config({ path: ".env.local" })

// Define the schema object with all tables
const schema = {
  profiles: profilesTable,
  progress: progressTable,
  quizResults: quizResultsTable,
  wordStats: wordStatsTable
}

// Create the PostgreSQL client and Drizzle ORM instance
const client = postgres(process.env.DATABASE_URL!)
export const db = drizzle(client, { schema })