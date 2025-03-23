-- 012_fix_array_parameter_handling.sql
-- This migration fixes issues with array parameter handling in user profile functions

-- ======================
-- CREATE SAFE USER PROFILE FUNCTIONS
-- ======================

-- Function to safely get a single user profile with proper type handling
CREATE OR REPLACE FUNCTION get_user_profile(
  p_user_id TEXT
)
RETURNS TABLE (
  id UUID,
  user_id TEXT,
  display_name TEXT,
  profile_image_url TEXT,
  email TEXT,
  last_sign_in TIMESTAMPTZ,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    p.id,
    p.user_id,
    p.display_name,
    p.profile_image_url,
    p.email,
    p.last_sign_in,
    p.created_at,
    p.updated_at
  FROM profiles p
  WHERE p.user_id = p_user_id;
END;
$$ LANGUAGE plpgsql;

-- Function to safely get multiple user profiles with proper array handling
CREATE OR REPLACE FUNCTION get_user_profiles(
  p_user_ids TEXT[]
)
RETURNS TABLE (
  id UUID,
  user_id TEXT,
  display_name TEXT,
  profile_image_url TEXT,
  email TEXT,
  last_sign_in TIMESTAMPTZ,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
) AS $$
BEGIN
  -- Return empty result if empty array
  IF p_user_ids IS NULL OR array_length(p_user_ids, 1) IS NULL THEN
    RETURN;
  END IF;

  RETURN QUERY
  SELECT 
    p.id,
    p.user_id,
    p.display_name,
    p.profile_image_url,
    p.email,
    p.last_sign_in,
    p.created_at,
    p.updated_at
  FROM profiles p
  WHERE p.user_id = ANY(p_user_ids);
END;
$$ LANGUAGE plpgsql;

-- Function to convert single user ID to array format (helper function)
CREATE OR REPLACE FUNCTION user_id_to_array(
  p_user_id TEXT
)
RETURNS TEXT[] AS $$
BEGIN
  RETURN ARRAY[p_user_id];
END;
$$ LANGUAGE plpgsql;

-- ======================
-- UPDATE EXISTING HELPER FUNCTIONS 
-- ======================

-- Create a function to get top users for the leaderboard (replaces get_top_users_by_category)
CREATE OR REPLACE FUNCTION get_leaderboard(
  p_category TEXT DEFAULT NULL,
  p_limit INTEGER DEFAULT 5
)
RETURNS TABLE (
  user_id TEXT,
  display_name TEXT,
  profile_image_url TEXT,
  accuracy_percentage DECIMAL,
  total_attempts INTEGER,
  quizzes_completed INTEGER,
  rank BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    l.user_id,
    l.display_name,
    l.profile_image_url,
    l.accuracy_percentage,
    l.total_attempts,
    l.quizzes_completed,
    RANK() OVER (ORDER BY l.accuracy_percentage DESC) as rank
  FROM leaderboard l
  WHERE 
    p_category IS NULL 
    OR p_category = ''
    OR p_category = ANY(l.categories)
  ORDER BY l.accuracy_percentage DESC
  LIMIT p_limit;
END;
$$ LANGUAGE plpgsql;

-- Function to get user rank on the leaderboard
CREATE OR REPLACE FUNCTION get_user_leaderboard_rank(
  p_user_id TEXT,
  p_category TEXT DEFAULT NULL
)
RETURNS INTEGER AS $$
DECLARE
  user_rank INTEGER;
BEGIN
  -- Check if user exists in leaderboard
  IF NOT EXISTS (SELECT 1 FROM leaderboard WHERE user_id = p_user_id) THEN
    RETURN NULL;
  END IF;
  
  -- Get user's rank
  SELECT rank INTO user_rank
  FROM (
    SELECT 
      user_id, 
      RANK() OVER (ORDER BY accuracy_percentage DESC) as rank
    FROM leaderboard
    WHERE 
      p_category IS NULL 
      OR p_category = ''
      OR p_category = ANY(categories)
  ) ranks
  WHERE user_id = p_user_id;
  
  RETURN user_rank;
END;
$$ LANGUAGE plpgsql; 