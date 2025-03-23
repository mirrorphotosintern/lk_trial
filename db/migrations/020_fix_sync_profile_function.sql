-- 020_fix_sync_profile_function.sql
-- Fix sync_clerk_profile function by properly dropping and recreating

-- First drop the existing function
DROP FUNCTION IF EXISTS sync_clerk_profile(text, text, text, text);

-- Recreate the function
CREATE OR REPLACE FUNCTION sync_clerk_profile(
  p_user_id TEXT,
  p_display_name TEXT,
  p_profile_image_url TEXT,
  p_email TEXT
)
RETURNS VOID AS $$
BEGIN
  INSERT INTO profiles (
    user_id,
    display_name,
    profile_image_url,
    email,
    last_sign_in,
    created_at,
    updated_at
  )
  VALUES (
    p_user_id,
    p_display_name,
    p_profile_image_url,
    p_email,
    NOW(),
    NOW(),
    NOW()
  )
  ON CONFLICT (user_id) 
  DO UPDATE SET
    display_name = p_display_name,
    profile_image_url = COALESCE(p_profile_image_url, profiles.profile_image_url),
    email = COALESCE(p_email, profiles.email),
    last_sign_in = NOW(),
    updated_at = NOW();
END;
$$ LANGUAGE plpgsql; 