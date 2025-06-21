-- 016_fix_ambiguous_column.sql
-- Fix ambiguous column reference in the leaderboard function

-- Drop the function with the ambiguous column reference
DROP FUNCTION IF EXISTS get_user_leaderboard_position(text, text);

-- Recreate the function with properly qualified column references
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
  WHERE ranked_users.user_id = p_user_id;  -- Fully qualify the column reference
END;
$$ LANGUAGE plpgsql; 