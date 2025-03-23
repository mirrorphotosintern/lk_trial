# KannadaKali Database Setup Guide

This repository contains the database setup for the KannadaKali app, which uses Supabase with Clerk authentication.

## Database Setup Instructions

Follow these steps to set up your database correctly:

1. **Run the Migration**:
   - Go to Supabase SQL Editor
   - Create a new query
   - Copy the contents of `db/migrations/001_quiz_tables.sql`
   - Run the query to set up all tables, functions, and policies
   - Apply the Clerk integration with `db/migrations/002_clerk_supabase_integration.sql`
   - Apply the profiles setup with `db/migrations/003_profiles_sync.sql`

2. **Verify Database Setup**:
   After running the migration, run these verification queries to ensure everything is set up correctly:

   ```sql
   -- Verify tables exist
   SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'quiz_results') AS quiz_results_exists,
       EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'progress') AS progress_exists,
       EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'word_stats') AS word_stats_exists,
       EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'profiles') AS profiles_exists,
       EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'leaderboard') AS leaderboard_exists;

   -- Verify RLS policies
   SELECT tablename, policyname FROM pg_policies 
   WHERE schemaname = 'public' 
   ORDER BY tablename, policyname;

   -- Verify auth functions
   SELECT proname, prorettype::regtype 
   FROM pg_proc 
   WHERE pronamespace = 'auth'::regnamespace 
   AND proname IN ('jwt', 'uid');
   ```

3. **Configure Environment Variables**:
   - Update your `.env.local` file with the correct values
   - See `db/migrations/ENV_SETUP_GUIDE.md` for detailed instructions

4. **Set Up Clerk Webhook**:
   - Go to the Clerk Dashboard > Webhooks
   - Create a new webhook endpoint with your application URL:
     `https://your-domain.com/api/clerk-webhook`
   - Select the following events:
     - `user.created`
     - `user.updated`
   - Copy the signing secret and add it to your environment variables:
     `CLERK_WEBHOOK_SECRET=whsec_your_signing_secret`
   - This webhook ensures user profiles are immediately synced to Supabase when created or updated in Clerk

## User Profile Synchronization

This application automatically synchronizes user profiles between Clerk (authentication provider) and your Supabase database through two mechanisms:

1. **Client-side sync**: When users sign in to the application, the `ProfileSync` component automatically syncs their profile data.
2. **Webhook sync**: When users sign up or update their profile in Clerk, a webhook event triggers profile synchronization.

### Setting Up Profile Sync

To ensure proper profile synchronization:

1. Make sure you have the `profiles` table migration applied in your Supabase database
2. Set up the Clerk webhook as described in the [Set Up Clerk Webhook](#set-up-clerk-webhook) section
3. Ensure the `ProfileSync` component is included in your layout for client-side sync

For a detailed explanation of how profile synchronization works, see [Profile Sync Architecture](./docs/profile-sync-architecture.md).

## Documentation

The following documentation is available to help with setup and troubleshooting:

- `db/migrations/README.md` - Overview of migration files
- `db/migrations/ENV_SETUP_GUIDE.md` - How to set up environment variables
- `db/migrations/TROUBLESHOOTING.md` - Solutions for common issues

## Database Schema

The database includes the following tables:

1. **profiles** - User profile information
   - `user_id` (TEXT, PK) - Clerk user ID
   - `display_name` (TEXT) - User's display name
   - `profile_image_url` (TEXT) - URL to user's profile image
   - `email` (TEXT) - User's email address
   - `last_sign_in` (TIMESTAMP) - Last sign-in timestamp

2. **quiz_results** - Results from quizzes
   - `id` (UUID, PK) - Unique identifier
   - `user_id` (TEXT) - Clerk user ID
   - `quiz_type` (ENUM: 'rapid_fire', 'standard') - Type of quiz
   - `score` (INTEGER) - Number of correct answers
   - `total_questions` (INTEGER) - Total quiz questions
   - `time_spent` (INTEGER) - Optional time spent on quiz
   - `categories` (TEXT[]) - Optional array of categories

3. **progress** - Overall user progress
   - `id` (UUID, PK) - Unique identifier
   - `user_id` (TEXT) - Clerk user ID
   - `stars` (INTEGER) - Stars earned
   - `words_learned` (INTEGER) - Words learned count
   - `quizzes_played` (INTEGER) - Quizzes completed count

4. **word_stats** - Per-word performance statistics
   - `id` (UUID, PK) - Unique identifier
   - `user_id` (TEXT) - Clerk user ID
   - `word` (TEXT) - English word
   - `kanglish` (TEXT) - Kanglish transliteration
   - `kannada` (TEXT) - Optional Kannada script
   - `icon` (TEXT) - Optional icon URL
   - `category` (TEXT) - Optional word category
   - `total_attempts` (INTEGER) - Times attempted
   - `correct_count` (INTEGER) - Times answered correctly

5. **leaderboard** - Aggregated user quiz statistics for leaderboard
   - `user_id` (TEXT, PK) - Clerk user ID
   - `total_attempts` (INTEGER) - Total quiz answers attempted
   - `correct_answers` (INTEGER) - Total correct quiz answers
   - `accuracy_percentage` (NUMERIC) - Percentage of correct answers
   - `quizzes_completed` (INTEGER) - Number of quizzes completed
   - `categories` (TEXT[]) - Array of categories attempted
   - `last_updated` (TIMESTAMP) - When stats were last updated

## Row Level Security

All tables have RLS policies that:
- Allow users to view only their own data
- Allow users to create data only with their own user_id
- Allow users to update/delete only their own data
- Profiles table has additional policy to allow authenticated users to view all profiles

## Leaderboard System

The application includes a dynamic leaderboard system that automatically tracks user performance across quizzes.

### Key Features

- Real-time accuracy percentage tracking
- Category-based filtering
- Automatic updates when users complete quizzes
- Display of user rank position
- User profile integration with display names and avatars

### How it Works

1. **Automatic Updates**: The leaderboard is updated automatically via database triggers whenever a user submits quiz results.
2. **Profile Syncing**: User profiles are synced from Clerk to the database when users sign in.
3. **Top Performers**: The top 5 users by accuracy percentage are displayed on the leaderboard.
4. **User Position**: If a user isn't in the top 5, their position is shown at the bottom of the leaderboard.
5. **Category Filtering**: Users can filter the leaderboard by word category.

### Technical Implementation

#### Database Triggers

The system uses PostgreSQL triggers to maintain the leaderboard:

1. When a quiz result is submitted, the `update_leaderboard_from_quiz()` function is called
2. This function:
   - Calculates the user's new statistics
   - Updates their entry in the leaderboard table
   - Records the categories they've attempted

#### Profile Synchronization

User profiles are automatically synchronized with Clerk through multiple mechanisms:

1. **Client-Side Sync**: A `ProfileSync` component runs when users sign in to the app
2. **Webhook Sync**: Clerk webhooks notify Supabase when users are created or updated
3. **Manual Sync**: The `/api/sync-profiles` endpoint allows forced synchronization

All of these methods use the `sync_clerk_profile()` SQL function to ensure consistent profile data.

#### Performance Optimization

The leaderboard is optimized for performance:

1. Aggregated statistics are stored in a dedicated table
2. An index on `accuracy_percentage` enables efficient sorting
3. Categories are stored as an array for efficient filtering
4. Real-time updates are enabled through Supabase's realtime feature

## Troubleshooting Common Issues

### "Tenant or user not found" Error
This indicates an issue with Clerk-Supabase integration. See the detailed troubleshooting steps in `db/migrations/TROUBLESHOOTING.md`.

### Database Type Mismatch Errors
If you see errors about UUID vs TEXT comparison, ensure you're using the latest migration which properly handles type casting with `auth.uid()::text`.

### Profile Sync Issues
If user profiles aren't appearing in the leaderboard:
1. Check browser console for sync errors
2. Verify that the Clerk webhook is properly configured
3. Try manually syncing via the API endpoint `/api/sync-profiles`
4. Check Supabase logs for any SQL errors in the sync functions

## Additional Resources

For more detailed information:
- See the Clerk documentation on JWT Templates
- See the Supabase documentation on Row Level Security
- Check the Drizzle ORM documentation for query syntax
