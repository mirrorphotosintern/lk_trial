-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Function to sync user profile from Clerk
CREATE OR REPLACE FUNCTION sync_clerk_profile(
  p_user_id TEXT,
  p_display_name TEXT,
  p_profile_image_url TEXT,
  p_email TEXT
) RETURNS VOID AS $$
BEGIN
  -- Insert or update the profile
  INSERT INTO profiles (
    user_id,
    display_name,
    profile_image_url,
    email,
    last_sign_in
  ) VALUES (
    p_user_id,
    p_display_name,
    p_profile_image_url,
    p_email,
    NOW()
  )
  ON CONFLICT (user_id) 
  DO UPDATE SET
    display_name = p_display_name,
    profile_image_url = p_profile_image_url,
    email = p_email,
    last_sign_in = NOW(),
    updated_at = NOW();
END;
$$ LANGUAGE plpgsql;

-- Create trigger to update the updated_at column
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add trigger to profiles table if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'set_timestamp_profiles'
  ) THEN
    CREATE TRIGGER set_timestamp_profiles
    BEFORE UPDATE ON profiles
    FOR EACH ROW
    EXECUTE FUNCTION trigger_set_timestamp();
  END IF;
END
$$;

-- Enable realtime for profiles table
BEGIN;
  -- Drop the publication if it exists
  DROP PUBLICATION IF EXISTS supabase_realtime;
  
  -- Create a new publication for all tables
  CREATE PUBLICATION supabase_realtime FOR TABLE 
    profiles, 
    quiz_results, 
    progress,
    leaderboard;
COMMIT;

-- Update the RLS policies for profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;
DROP POLICY IF EXISTS "Profiles are readable by authenticated users" ON profiles;

-- Create new policies
CREATE POLICY "Users can view their own profile" 
ON profiles FOR SELECT 
USING (auth.uid()::text = user_id);

CREATE POLICY "Users can update their own profile" 
ON profiles FOR UPDATE 
USING (auth.uid()::text = user_id);

CREATE POLICY "Profiles are readable by authenticated users" 
ON profiles FOR SELECT 
USING (auth.role() = 'authenticated');

-- Grant permissions
GRANT SELECT, INSERT, UPDATE ON profiles TO authenticated;
GRANT SELECT ON profiles TO anon; 