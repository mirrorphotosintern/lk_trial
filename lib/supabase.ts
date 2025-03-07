/**
 * @description
 * This file configures and exports a Supabase client for server-side use in the KannadaKali app.
 * It provides a secure way to interact with Supabase Storage and other services.
 *
 * Key features:
 * - Server-Side Client: Ensures sensitive keys are not exposed to the frontend.
 * - Configuration: Uses environment variables for flexibility and security.
 *
 * @dependencies
 * - @supabase/supabase-js: Provides the Supabase client library.
 *
 * @notes
 * - Requires SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local.
 * - The service role key is used for server-side operations with full permissions.
 * - No auth configuration is included as Clerk handles authentication separately.
 */

import { createClient } from "@supabase/supabase-js"

// Validate environment variables
const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("Missing Supabase environment variables: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set")
}

// Initialize and export the Supabase client
export const supabaseClient = createClient(supabaseUrl, supabaseServiceRoleKey)