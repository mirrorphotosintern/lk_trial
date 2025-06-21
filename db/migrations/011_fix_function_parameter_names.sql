-- 011_fix_function_parameter_names.sql
-- This migration fixes the issue with changing parameter names in functions

-- ======================
-- DROP AND RECREATE SYNC_CLERK_PROFILE
-- ======================

-- Drop the function first
DROP FUNCTION IF EXISTS sync_clerk_profile(text, text, text, text);

-- Recreate with properly named parameters
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

-- ======================
-- UPDATE ADMIN_SYNC_PROFILE TO USE THE NEW FUNCTION
-- ======================

-- Drop the existing function if it exists
DROP FUNCTION IF EXISTS admin_sync_profile(text, text, text, text);

-- Recreate it with the new parameter names
CREATE OR REPLACE FUNCTION admin_sync_profile(
  p_user_id TEXT,
  p_display_name TEXT,
  p_profile_image_url TEXT,
  p_email TEXT
)
RETURNS UUID AS $$
BEGIN
  RETURN sync_clerk_profile(p_user_id, p_display_name, p_profile_image_url, p_email);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER; 