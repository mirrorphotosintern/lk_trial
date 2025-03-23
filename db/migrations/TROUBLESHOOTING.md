# Troubleshooting Guide

This guide addresses common issues encountered with the KannadaKali app's database and authentication integration.

## "Tenant or user not found" Error

This error typically occurs when there's a mismatch between the authenticated user and the database user ID.

### Possible Causes and Solutions:

1. **Clerk-Supabase JWT Integration Issues**
   - **Symptom**: User is authenticated in Clerk but database operations fail
   - **Solution**: 
     - Verify the JWT template in Clerk is correctly set up with `aud`, `sub`, and `role` claims
     - Ensure the JWT signing key matches your Supabase JWT secret
     - Confirm `NEXT_PUBLIC_CLERK_SUPABASE_USAGE=true` is set in your environment

2. **Database RLS Policies**
   - **Symptom**: Authentication works but specific operations fail
   - **Solution**:
     - Check RLS policies are properly implemented with the correct type casting
     - Verify that policies exist for all CRUD operations you're attempting
     - Test policies directly in the Supabase SQL editor

3. **Missing User Profile**
   - **Symptom**: New users get this error on their first login
   - **Solution**:
     - Verify the user trigger is properly creating profiles on signup
     - Manually check if user records exist in the profiles table
     - You may need to manually create a profile record for existing users

## Function Return Type Errors

If you encounter an error like `cannot change return type of existing function`:

### Error Message: 
```
ERROR: 42P13: cannot change return type of existing function
HINT: Use DROP FUNCTION auth.uid() first.
```

### Possible Causes and Solutions:

1. **Existing Auth Function with Different Return Type**
   - **Symptom**: Error when trying to create/replace auth.uid() function
   - **Solution**:
     - Our migration is trying to create auth.uid() with TEXT return type, but an existing function has a different return type
     - The updated migration now includes `DROP FUNCTION IF EXISTS auth.uid();` before creating the function
     - If you're still seeing this error, manually run: `DROP FUNCTION auth.uid();` in SQL Editor before running the migration

2. **Other Function Conflicts**
   - **Symptom**: Similar errors with other functions
   - **Solution**:
     - First identify the function's full signature: `SELECT proname, pronargs, proargtypes FROM pg_proc WHERE proname = 'function_name';`
     - Drop the function with the exact signature: `DROP FUNCTION function_name(arg_types);` 
     - Then run the migration again

## Type Mismatch Errors

If you see errors like `operator does not exist: uuid = text`, you have a type mismatch in your queries or RLS policies.

### Possible Causes and Solutions:

1. **SQL Type Casting Issues**
   - **Symptom**: Error mentions type comparisons like `uuid = text`
   - **Solution**:
     - Ensure all RLS policies use explicit type casting with `::text`
     - Check any custom SQL queries for proper type handling
     - Verify table columns have consistent data types

2. **Drizzle ORM Type Handling**
   - **Symptom**: Database operations fail from server actions
   - **Solution**:
     - Ensure all `userId` fields in schema are defined as `text("user_id")`
     - Check that Clerk user IDs are properly handled as text in your application code
     - Update any custom queries to handle IDs consistently

## Realtime Updates Not Working

If realtime updates aren't working properly:

1. **Supabase Realtime Configuration**
   - **Symptom**: Data changes don't reflect in real-time on the client
   - **Solution**:
     - Verify tables are added to the supabase_realtime publication
     - Check RLS policies allow the required operations
     - Ensure your Supabase client is configured for realtime

2. **Client Subscription Issues**
   - **Symptom**: No realtime events received
   - **Solution**:
     - Ensure you're properly subscribed to the correct channels
     - Check for any console errors related to subscription
     - Verify authentication token is being passed correctly

## Database Connection Issues

If you're having trouble connecting to the database:

1. **Connection String Format**
   - **Symptom**: "Connection refused" or similar errors
   - **Solution**:
     - Verify your DATABASE_URL format is correct
     - Check for any special characters that need escaping
     - Test the connection string with a simple database client

2. **Supabase Access Restrictions**
   - **Symptom**: Connection works locally but not in production
   - **Solution**:
     - Check IP allow lists in Supabase settings
     - Verify your deployment environment has the correct environment variables
     - Consider using connection pooling for production deployments

## Data Migration Issues

If you encounter issues applying the migration:

1. **SQL Syntax Errors**
   - **Symptom**: Specific error messages about SQL syntax
   - **Solution**:
     - Check line numbers mentioned in error messages
     - Verify SQL compatibility with PostgreSQL version
     - Test problematic statements individually

2. **Existing Objects**
   - **Symptom**: "Already exists" errors
   - **Solution**:
     - Use `IF NOT EXISTS` clauses (already included in migration)
     - For testing, you might need to drop objects first
     - Consider using a transaction to ensure atomic operations

## Advanced Troubleshooting

For more complex issues:

1. **Logging Database Operations**
   - Add console logs in your server actions to track what's happening
   - Check Supabase logs in dashboard for errors
   - Consider enabling more verbose PostgreSQL logging temporarily

2. **Testing with Known Good States**
   - Create a test user with known good data
   - Verify operations work with this test user
   - Compare settings between working and non-working environments

3. **Database Analysis Queries**

   Run these queries in the Supabase SQL Editor to diagnose issues:

   ```sql
   -- Check if auth functions exist and return expected types
   SELECT proname, prorettype::regtype 
   FROM pg_proc 
   WHERE pronamespace = 'auth'::regnamespace 
   AND proname IN ('jwt', 'uid');

   -- Test auth.uid() function
   SELECT auth.uid() AS current_user_id;

   -- List all RLS policies to verify they exist
   SELECT schemaname, tablename, policyname, permissive, roles, cmd 
   FROM pg_policies 
   WHERE schemaname = 'public' 
   ORDER BY tablename, policyname;

   -- Check for user records
   SELECT * FROM profiles LIMIT 10;
   ```

Remember that many issues stem from mismatches between what your code expects and what the database provides. Careful examination of types, permissions, and data flows will resolve most problems. 