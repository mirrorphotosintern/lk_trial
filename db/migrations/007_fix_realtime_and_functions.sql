-- 007_fix_realtime_and_functions.sql
-- This migration ensures the supabase_realtime publication exists and fixes any issues with functions

-- ======================
-- REALTIME PUBLICATION
-- ======================

-- Create the supabase_realtime publication if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication WHERE pubname = 'supabase_realtime'
  ) THEN
    CREATE PUBLICATION supabase_realtime;
  END IF;
END
$$;

-- Recreate the publication additions to make sure they're added properly
-- This is safe to run multiple times
ALTER PUBLICATION supabase_realtime ADD TABLE profiles;
ALTER PUBLICATION supabase_realtime ADD TABLE progress;
ALTER PUBLICATION supabase_realtime ADD TABLE quiz_results;
ALTER PUBLICATION supabase_realtime ADD TABLE word_stats;
ALTER PUBLICATION supabase_realtime ADD TABLE leaderboard;

-- ======================
-- FIX FUNCTION ISSUES
-- ======================

-- Recreate the sync_clerk_profile function with proper handling for NULL values
CREATE OR REPLACE FUNCTION sync_clerk_profile(
  user_id TEXT,
  display_name TEXT,
  profile_image_url TEXT,
  email TEXT
) RETURNS UUID AS $$
DECLARE
  profile_id UUID;
BEGIN
  -- Try to find existing profile
  SELECT id INTO profile_id FROM profiles WHERE user_id = user_id::TEXT;
  
  IF profile_id IS NULL THEN
    -- Create new profile if not exists
    INSERT INTO profiles (
      id,
      user_id,
      display_name,
      profile_image_url,
      email,
      last_sign_in,
      created_at,
      updated_at
    ) VALUES (
      gen_random_uuid(),
      user_id,
      COALESCE(display_name, 'Unknown User'),
      profile_image_url,
      email,
      NOW(),
      NOW(),
      NOW()
    )
    RETURNING id INTO profile_id;
    
    -- Create initial progress record
    INSERT INTO progress (user_id, stars, words_learned, quizzes_played)
    VALUES (user_id, 0, 0, 0);
  ELSE
    -- Update existing profile
    UPDATE profiles
    SET
      display_name = COALESCE(display_name, profiles.display_name),
      profile_image_url = COALESCE(profile_image_url, profiles.profile_image_url),
      email = COALESCE(email, profiles.email),
      last_sign_in = NOW(),
      updated_at = NOW()
    WHERE profiles.user_id = user_id::TEXT;
  END IF;
  
  -- Return the profile ID
  RETURN profile_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Ensure that all policies work correctly with explicit casts
DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;
CREATE POLICY "Users can view their own profile"
ON profiles FOR SELECT
USING (auth.uid()::TEXT = user_id);

DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;
CREATE POLICY "Users can update their own profile"
ON profiles FOR UPDATE
USING (auth.uid()::TEXT = user_id);

-- Make sure the leaderboard can be updated by the system
DROP POLICY IF EXISTS "System can update leaderboard entries" ON leaderboard;
CREATE POLICY "System can update leaderboard entries"
ON leaderboard FOR UPDATE
TO authenticated
USING (true);

-- ======================
-- ADD MISSING COLUMNS
-- ======================

-- Check and add missing columns to quiz_results if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'quiz_results' AND column_name = 'total_answers'
  ) THEN
    ALTER TABLE quiz_results ADD COLUMN total_answers INTEGER NOT NULL DEFAULT 0;
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'quiz_results' AND column_name = 'correct_answers'
  ) THEN
    ALTER TABLE quiz_results ADD COLUMN correct_answers INTEGER NOT NULL DEFAULT 0;
  END IF;
END
$$;

-- ======================
-- EXTRA RLS POLICIES
-- ======================

-- Add policy to allow users to view all profiles
DROP POLICY IF EXISTS "Users can view all profiles" ON profiles;
CREATE POLICY "Users can view all profiles"
ON profiles FOR SELECT
TO authenticated
USING (true);

-- Add policy to allow users to view the leaderboard
DROP POLICY IF EXISTS "Anyone can view profiles on leaderboard" ON profiles;
CREATE POLICY "Anyone can view profiles on leaderboard"
ON profiles FOR SELECT
TO authenticated
USING (true);

-- ======================
-- FIX PARAMETER NAMING
-- ======================

-- Fix sync_clerk_profile function to avoid parameter name conflicts
CREATE OR REPLACE FUNCTION sync_clerk_profile(
  p_user_id TEXT,
  p_display_name TEXT,
  p_profile_image_url TEXT,
  p_email TEXT
) RETURNS UUID AS $$
DECLARE
  profile_id UUID;
BEGIN
  -- Try to find existing profile
  SELECT id INTO profile_id FROM profiles WHERE user_id = p_user_id;
  
  IF profile_id IS NULL THEN
    -- Create new profile if not exists
    INSERT INTO profiles (
      id,
      user_id,
      display_name,
      profile_image_url,
      email,
      last_sign_in,
      created_at,
      updated_at
    ) VALUES (
      gen_random_uuid(),
      p_user_id,
      COALESCE(p_display_name, 'Unknown User'),
      p_profile_image_url,
      p_email,
      NOW(),
      NOW(),
      NOW()
    )
    RETURNING id INTO profile_id;
    
    -- Create initial progress record
    INSERT INTO progress (user_id, stars, words_learned, quizzes_played)
    VALUES (p_user_id, 0, 0, 0);
  ELSE
    -- Update existing profile
    UPDATE profiles
    SET
      display_name = COALESCE(p_display_name, profiles.display_name),
      profile_image_url = COALESCE(p_profile_image_url, profiles.profile_image_url),
      email = COALESCE(p_email, profiles.email),
      last_sign_in = NOW(),
      updated_at = NOW()
    WHERE profiles.user_id = p_user_id;
  END IF;
  
  -- Return the profile ID
  RETURN profile_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER; 