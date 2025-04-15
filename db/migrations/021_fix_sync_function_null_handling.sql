-- 021_fix_sync_function_null_handling.sql
-- Fix the sync_clerk_profile function to better handle null parameters

-- Drop the existing function
DROP FUNCTION IF EXISTS sync_clerk_profile(text, text, text, text);

-- Create the updated function with better null handling
CREATE OR REPLACE FUNCTION sync_clerk_profile(
  p_user_id TEXT,
  p_display_name TEXT,
  p_profile_image_url TEXT,
  p_email TEXT
)
RETURNS VOID AS $$
BEGIN
  -- Validate required parameters
  IF p_user_id IS NULL OR p_user_id = '' THEN
    RAISE EXCEPTION 'user_id is required';
  END IF;
  
  IF p_display_name IS NULL OR p_display_name = '' THEN
    RAISE EXCEPTION 'display_name is required';
  END IF;
  
  -- Handle null values safely
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
    NULLIF(p_profile_image_url, ''), -- Convert empty string to NULL
    NULLIF(p_email, ''), -- Convert empty string to NULL
    NOW(),
    NOW(),
    NOW()
  )
  ON CONFLICT (user_id) 
  DO UPDATE SET
    display_name = p_display_name,
    profile_image_url = CASE 
                          WHEN NULLIF(p_profile_image_url, '') IS NULL THEN profiles.profile_image_url 
                          ELSE NULLIF(p_profile_image_url, '')
                        END,
    email = CASE 
              WHEN NULLIF(p_email, '') IS NULL THEN profiles.email 
              ELSE NULLIF(p_email, '')
            END,
    last_sign_in = NOW(),
    updated_at = NOW();
    
  -- For debugging, can be removed in production
  RAISE NOTICE 'Profile synced for user %', p_user_id;
END;
$$ LANGUAGE plpgsql; 