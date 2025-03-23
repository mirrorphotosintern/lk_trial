-- 010_fix_word_stats_foreign_key.sql
-- This migration provides a solution for the foreign key constraint issue in word_stats

-- ======================
-- FUNCTION TO ENSURE PROFILE EXISTS
-- ======================

-- Create a function to ensure a profile exists before recording word stats
CREATE OR REPLACE FUNCTION ensure_profile_exists(
  p_user_id TEXT
)
RETURNS VOID AS $$
BEGIN
  -- Check if profile exists
  IF NOT EXISTS (SELECT 1 FROM profiles WHERE user_id = p_user_id) THEN
    -- Create default profile if it doesn't exist
    INSERT INTO profiles (
      id,
      user_id,
      display_name,
      created_at,
      updated_at,
      last_sign_in
    ) VALUES (
      gen_random_uuid(),
      p_user_id,
      'User ' || substring(p_user_id, 1, 6),
      NOW(),
      NOW(),
      NOW()
    );
    
    -- Create initial progress record
    INSERT INTO progress (user_id, stars, words_learned, quizzes_played)
    VALUES (p_user_id, 0, 0, 0);
    
    RAISE NOTICE 'Created default profile for user %', p_user_id;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ======================
-- FUNCTION TO SAFELY RECORD WORD STATS
-- ======================

-- Create a function to safely record word stats that ensures a profile exists
CREATE OR REPLACE FUNCTION save_word_stat(
  p_user_id TEXT,
  p_word TEXT,
  p_kanglish TEXT,
  p_kannada TEXT DEFAULT NULL,
  p_icon TEXT DEFAULT NULL,
  p_category TEXT DEFAULT NULL,
  p_is_correct BOOLEAN DEFAULT TRUE
)
RETURNS UUID AS $$
DECLARE
  stat_id UUID;
BEGIN
  -- Ensure profile exists before recording word stat
  PERFORM ensure_profile_exists(p_user_id);
  
  -- Check if word stat already exists for this user and word
  SELECT id INTO stat_id
  FROM word_stats
  WHERE user_id = p_user_id AND word = p_word;
  
  IF stat_id IS NULL THEN
    -- Insert new word stat if it doesn't exist
    INSERT INTO word_stats (
      id,
      user_id,
      word,
      kanglish,
      kannada,
      icon,
      category,
      total_attempts,
      correct_count
    ) VALUES (
      gen_random_uuid(),
      p_user_id,
      p_word,
      p_kanglish,
      p_kannada,
      p_icon,
      p_category,
      1,
      CASE WHEN p_is_correct THEN 1 ELSE 0 END
    )
    RETURNING id INTO stat_id;
  ELSE
    -- Update existing word stat
    UPDATE word_stats
    SET
      total_attempts = total_attempts + 1,
      correct_count = correct_count + CASE WHEN p_is_correct THEN 1 ELSE 0 END,
      kannada = COALESCE(p_kannada, kannada),
      icon = COALESCE(p_icon, icon),
      category = COALESCE(p_category, category),
      updated_at = NOW()
    WHERE id = stat_id;
  END IF;
  
  RETURN stat_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ======================
-- CLEAN UP ANY ORPHANED RECORDS
-- ======================

-- Delete any word_stats that reference non-existent profiles
DELETE FROM word_stats
WHERE user_id NOT IN (SELECT user_id FROM profiles);

-- ======================
-- FIX CLERK PROFILE SYNC FUNCTION
-- ======================

-- Update the sync_clerk_profile function to be more robust
CREATE OR REPLACE FUNCTION sync_clerk_profile(
  p_user_id TEXT,
  p_display_name TEXT,
  p_profile_image_url TEXT,
  p_email TEXT
) RETURNS UUID AS $$
DECLARE
  profile_id UUID;
BEGIN
  -- Ensure user_id is not null
  IF p_user_id IS NULL THEN
    RAISE EXCEPTION 'User ID cannot be null';
  END IF;

  -- Try to find existing profile
  SELECT id INTO profile_id FROM profiles WHERE user_id = p_user_id;
  
  IF profile_id IS NULL THEN
    -- Create new profile if it doesn't exist
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
      COALESCE(p_display_name, 'User ' || substring(p_user_id, 1, 6)),
      p_profile_image_url,
      p_email,
      NOW(),
      NOW(),
      NOW()
    )
    RETURNING id INTO profile_id;
    
    -- Create initial progress record if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM progress WHERE user_id = p_user_id) THEN
      INSERT INTO progress (user_id, stars, words_learned, quizzes_played)
      VALUES (p_user_id, 0, 0, 0);
    END IF;
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