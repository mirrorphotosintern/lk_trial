-- 015_fix_leaderboard_functions.sql
-- Drop and recreate leaderboard functions with correct return types

-- First drop the existing functions
DROP FUNCTION IF EXISTS get_homepage_leaderboard(text, integer);
DROP FUNCTION IF EXISTS get_user_leaderboard_position(text, text);

-- Then recreate the functions with the correct return types
-- Function to get comprehensive leaderboard data for homepage display
CREATE OR REPLACE FUNCTION get_homepage_leaderboard(
  p_category TEXT DEFAULT NULL,
  p_limit INTEGER DEFAULT 5
)
RETURNS TABLE (
  rank BIGINT,
  user_id TEXT,
  display_name TEXT,
  profile_image_url TEXT,
  accuracy_percentage DECIMAL(5,2),
  total_attempts INTEGER,
  correct_answers INTEGER,
  quizzes_completed INTEGER
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    RANK() OVER (ORDER BY l.accuracy_percentage DESC) as rank,
    l.user_id,
    COALESCE(p.display_name, l.display_name, 'Unknown User') as display_name,
    COALESCE(p.profile_image_url, l.profile_image_url) as profile_image_url,
    l.accuracy_percentage,
    l.total_attempts,
    l.correct_answers,
    l.quizzes_completed
  FROM leaderboard l
  LEFT JOIN profiles p ON l.user_id = p.user_id
  WHERE 
    p_category IS NULL 
    OR p_category = ''
    OR p_category = ANY(l.categories)
  ORDER BY l.accuracy_percentage DESC
  LIMIT p_limit;
END;
$$ LANGUAGE plpgsql;

-- Function to get a specific user's rank and stats on the leaderboard
CREATE OR REPLACE FUNCTION get_user_leaderboard_position(
  p_user_id TEXT,
  p_category TEXT DEFAULT NULL
)
RETURNS TABLE (
  rank BIGINT,
  user_id TEXT,
  display_name TEXT,
  profile_image_url TEXT,
  accuracy_percentage DECIMAL(5,2),
  total_attempts INTEGER,
  correct_answers INTEGER,
  quizzes_completed INTEGER
) AS $$
BEGIN
  RETURN QUERY
  WITH ranked_users AS (
    SELECT
      RANK() OVER (ORDER BY l.accuracy_percentage DESC) as rank,
      l.user_id,
      COALESCE(p.display_name, l.display_name, 'Unknown User') as display_name,
      COALESCE(p.profile_image_url, l.profile_image_url) as profile_image_url,
      l.accuracy_percentage,
      l.total_attempts,
      l.correct_answers,
      l.quizzes_completed
    FROM leaderboard l
    LEFT JOIN profiles p ON l.user_id = p.user_id
    WHERE 
      p_category IS NULL 
      OR p_category = ''
      OR p_category = ANY(l.categories)
  )
  SELECT * FROM ranked_users
  WHERE user_id = p_user_id;
END;
$$ LANGUAGE plpgsql; 