# Environment Variable Setup Guide

For the Clerk-Supabase integration to work correctly, you need to set up specific environment variables in your `.env.local` file. This guide will help you configure these variables properly.

## Required Environment Variables

Add these variables to your `.env.local` file:

```
# Supabase
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-ID].supabase.co:5432/postgres"
NEXT_PUBLIC_SUPABASE_URL="https://[YOUR-PROJECT-ID].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="[YOUR-ANON-KEY]"

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."

# Clerk-Supabase Integration
SUPABASE_JWT_SECRET="[YOUR-JWT-SECRET]"
NEXT_PUBLIC_CLERK_SUPABASE_USAGE=true
```

## Where to Find These Values

### Supabase Values

1. **DATABASE_URL**:
   - Go to your Supabase project dashboard
   - Navigate to Settings > Database
   - Find the "Connection String" section and copy the URI
   - Replace `[YOUR-PASSWORD]` with your database password

2. **NEXT_PUBLIC_SUPABASE_URL**:
   - Go to Settings > API
   - Copy the "URL" value

3. **NEXT_PUBLIC_SUPABASE_ANON_KEY**:
   - Go to Settings > API
   - Copy the "anon public" key from "Project API keys"

4. **SUPABASE_JWT_SECRET**:
   - Go to Settings > API
   - Scroll to "JWT Settings"
   - Copy the "JWT Secret" value
   - This should be the same secret you add to your Clerk JWT template

### Clerk Values

1. **NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY**:
   - Go to your Clerk dashboard
   - Navigate to API Keys
   - Copy the "Publishable Key"

2. **CLERK_SECRET_KEY**:
   - Go to your Clerk dashboard
   - Navigate to API Keys
   - Copy the "Secret Key"

## Clerk Setup for Supabase Integration

To ensure Clerk generates the correct JWTs for Supabase:

1. Go to your Clerk dashboard
2. Navigate to JWT Templates
3. Create a new template or edit the default one
4. Add the following claims:

```json
{
  "aud": "authenticated",
  "sub": "{{user.id}}",
  "role": "authenticated",
  "user_id": "{{user.id}}"
}
```

5. Set the "Signing Algorithm" to "HS256"
6. Add your Supabase JWT Secret in the "Signing Key" field
7. Save the template

## Verifying the Integration

After setting up your environment variables and applying the database migration:

1. Restart your Next.js development server
2. Sign in with a Clerk account
3. Try to perform an action that uses database access
4. Check your browser console for any errors

If you still see "Tenant or user not found" errors:

1. Verify that all environment variables are correct
2. Ensure the Clerk JWT template is correctly configured
3. Check that the migration was applied successfully
4. Make sure you're properly signed in with Clerk before accessing protected resources

## Additional Configuration

For complete integration, ensure:

1. The JWT Template in Clerk has the right algorithm and signing key
2. Your Supabase project has the correct JWT settings
3. The database migration has been applied successfully
4. Your user is logged in before trying to access protected resources 