-- 014_enhanced_leaderboard_function.sql
-- Enhanced functions for leaderboard display with profile information

-- ======================
-- ENHANCED LEADERBOARD FUNCTION
-- ======================

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

-- Function to get available categories for the leaderboard filters
CREATE OR REPLACE FUNCTION get_leaderboard_categories()
RETURNS TABLE (
  category TEXT
) AS $$
BEGIN
  RETURN QUERY
  SELECT DISTINCT unnest(categories) as category
  FROM leaderboard
  WHERE categories IS NOT NULL AND array_length(categories, 1) > 0
  ORDER BY category;
END;
$$ LANGUAGE plpgsql;

-- Function to recalculate a user's leaderboard entry
CREATE OR REPLACE FUNCTION update_user_leaderboard(
  p_user_id TEXT
)
RETURNS VOID AS $$
DECLARE
  user_display_name TEXT;
  user_profile_image TEXT;
BEGIN
  -- Get user profile information
  SELECT display_name, profile_image_url INTO user_display_name, user_profile_image
  FROM profiles
  WHERE user_id = p_user_id;
  
  -- Delete existing leaderboard entry
  DELETE FROM leaderboard WHERE user_id = p_user_id;
  
  -- Recalculate from quiz results
  INSERT INTO leaderboard (
    user_id,
    total_attempts,
    correct_answers,
    accuracy_percentage,
    quizzes_completed,
    categories,
    display_name,
    profile_image_url,
    last_updated
  )
  SELECT 
    p_user_id,
    SUM(total_answers) as total_attempts,
    SUM(correct_answers) as correct_answers,
    CASE 
      WHEN SUM(total_answers) > 0 THEN (SUM(correct_answers)::DECIMAL / SUM(total_answers)) * 100
      ELSE 0
    END as accuracy_percentage,
    COUNT(*) as quizzes_completed,
    ARRAY_AGG(DISTINCT category) FILTER (WHERE category IS NOT NULL AND category != '') as categories,
    user_display_name,
    user_profile_image,
    NOW()
  FROM quiz_results
  WHERE user_id = p_user_id
  GROUP BY user_id;
END;
$$ LANGUAGE plpgsql; 