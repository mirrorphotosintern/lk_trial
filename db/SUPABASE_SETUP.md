# Supabase Setup Guide for KannadaKali App

This guide provides step-by-step instructions for setting up a Supabase database for the KannadaKali application with Clerk authentication integration.

## Prerequisites

- A Supabase account
- A Clerk account
- Access to the KannadaKali repository

## 1. Create a Supabase Project

1. Log in to your [Supabase Dashboard](https://app.supabase.io)
2. Click "New Project"
3. Enter a name for your project (e.g., "KannadaKali")
4. Choose a database password (save this securely)
5. Select a region close to your users
6. Click "Create new project"

## 2. Get Supabase Connection Details

Once your project is created, navigate to:

1. Project Settings > API
2. Copy the following values:
   - **Project URL**: Your Supabase project URL
   - **anon/public key**: Your public API key
   - **JWT Secret**: Found under Project Settings > API > JWT Settings

## 3. Set Up Clerk Authentication

1. Log in to your [Clerk Dashboard](https://dashboard.clerk.dev)
2. Create a new application or use an existing one
3. Go to API Keys
4. Copy both the **Publishable Key** and **Secret Key**

## 4. Configure Clerk-Supabase Integration

1. In your Clerk Dashboard, go to JWT Templates
2. Create a new template for Supabase
3. Configure it with the following settings:
   - **Template Name**: `supabase`
   - **Signing Algorithm**: `HS256`
   - **Signing Key**: Paste your Supabase JWT Secret here
   - **Claims**:
     ```json
     {
       "sub": "{{user.id}}",
       "role": "authenticated",
       "aud": "authenticated"
     }
     ```
4. Save the template

## 5. Apply Database Migrations

1. Go to your Supabase project's SQL Editor
2. Create a new query
3. Copy the contents of `db/migrations/001_quiz_tables.sql`
4. Run the query
5. Create another new query
6. Copy the contents of `db/migrations/002_clerk_supabase_integration.sql`
7. Run the query

## 6. Configure Environment Variables

Add these variables to your `.env.local` file:

```
# Supabase
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres
NEXT_PUBLIC_SUPABASE_URL=https://[YOUR-PROJECT-REF].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[YOUR-ANON-KEY]

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=[YOUR-CLERK-PUBLISHABLE-KEY]
CLERK_SECRET_KEY=[YOUR-CLERK-SECRET-KEY]

# Clerk-Supabase Integration
SUPABASE_JWT_SECRET=[YOUR-SUPABASE-JWT-SECRET]
NEXT_PUBLIC_CLERK_SUPABASE_USAGE=true
```

Replace all placeholders (text in brackets) with your actual values.

## 7. Configure Supabase Authentication

1. In your Supabase dashboard, go to Authentication > Settings
2. Under "JWT Templates" make sure the expiry time is set to match Clerk's JWT expiry (default is 1 hour)

## 8. Verify Setup

To verify that your setup is correct:

1. Restart your Next.js development server
2. Sign in with Clerk
3. Try performing a quiz and check if the results are saved
4. Check your Supabase Tables Editor to verify data is being stored correctly

## Troubleshooting

### "Tenant or user not found" Error

If you encounter this error:

1. Verify that your environment variables are correctly set
2. Check that your JWT template in Clerk matches the Supabase requirements
3. Ensure that the database migrations were applied successfully
4. Try signing out and signing back in to refresh the token

### Database Connection Issues

If you have trouble connecting to the database:

1. Double-check your DATABASE_URL
2. Ensure your IP is allowed in Supabase's IP access settings
3. Verify your database password is correct

### RLS Policy Errors

If you get permission errors despite being authenticated:

1. Check the RLS policies in Supabase
2. Verify that auth.uid() matches the user_id in your tables
3. You can temporarily disable RLS for testing with:
   ```sql
   ALTER TABLE public.quiz_results DISABLE ROW LEVEL SECURITY;
   ```
   (Remember to enable it again for production)

## Advanced Configuration

### Custom Claims

If you need additional claims in your JWT for custom RLS policies:

1. Update your Clerk JWT template to include these claims
2. Update your RLS policies to use the new claims

### Database Indexes

For better performance, consider adding indexes to frequently queried columns:

```sql
CREATE INDEX idx_quiz_results_user_id ON public.quiz_results(user_id);
CREATE INDEX idx_progress_user_id ON public.progress(user_id);
CREATE INDEX idx_word_stats_user_id ON public.word_stats(user_id);
```

### Realtime Subscriptions

If you're using Supabase Realtime features, ensure that the relevant tables are enabled for realtime:

1. Go to Database > Replication
2. Enable realtime for your tables
3. Make sure your migration (002_clerk_supabase_integration.sql) has set up the publication correctly 