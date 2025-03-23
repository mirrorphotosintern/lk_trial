# Database Migrations

This directory contains SQL migrations for the KannadaKali app's Supabase database. These migrations handle table creation, schema updates, and security policies.

## Migration Files

- `001_complete_setup.sql`: Creates all database tables, RLS policies, and integrates Clerk authentication with Supabase.

## How to Apply Migrations

To apply the migrations to your Supabase database:

1. Log in to your Supabase project dashboard
2. Go to the SQL Editor
3. Click on "New Query"
4. Copy the contents of `001_complete_setup.sql`
5. Paste it into the SQL Editor
6. Execute the query

## What This Migration Sets Up

This single migration file provides a complete setup for your database:

### 1. Extensions
- Enables `uuid-ossp` and `pgcrypto` extensions required for UUID generation and cryptography

### 2. Clerk Authentication Integration
- Creates JWT handling functions
- Sets up proper user ID extraction from Clerk tokens
- Ensures all user IDs are properly typed as TEXT

### 3. Database Tables
- `profiles`: Stores user profile information
- `quiz_results`: Records quiz attempt performance
- `progress`: Tracks overall user progress statistics
- `word_stats`: Stores performance data for individual vocabulary words

### 4. Row Level Security
- Sets up RLS on all tables
- Creates policies for all CRUD operations (SELECT, INSERT, UPDATE, DELETE)
- Ensures users can only access their own data
- Uses proper type casting to avoid type mismatch errors

### 5. User Management
- Sets up automatic profile creation for new users
- Creates initial progress records for new users

## Troubleshooting

If you encounter any issues when running the migration:

### "Tenant or user not found" error
This typically indicates that the Clerk-Supabase integration isn't working correctly:

1. Check your Supabase and Clerk environment variables
2. Verify that your JWT secret is correctly set in Supabase
3. Make sure your Clerk publishable key and secret key are correctly set
4. Ensure you've properly configured JWTs in Clerk settings

### Type mismatch errors
The migration file uses explicit type casting with `::text` on all `auth.uid()` comparisons to avoid type mismatch issues.

### Table or type already exists
If you get errors about a table or type already existing, you may need to drop those objects first or use the `IF NOT EXISTS` clause (which is already included in the migration).

## Custom Configuration

If you need to modify the migration for your specific needs:

- **Adding Tables**: Add new CREATE TABLE statements following the existing patterns
- **Modifying RLS**: Follow the pattern of the existing policies
- **Custom Functions**: Add them at the end of the file

## Additional Notes

- This migration assumes Supabase Auth is properly configured with Clerk
- The migration enables realtime functionality for all tables
- Row Level Security is enabled and properly configured for all tables
- Automatic user onboarding is implemented via triggers 