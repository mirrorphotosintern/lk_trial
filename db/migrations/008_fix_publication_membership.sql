-- 008_fix_publication_membership.sql
-- This migration safely adds tables to the supabase_realtime publication only if they're not already members

-- ======================
-- SAFELY ADD TABLES TO PUBLICATION
-- ======================

-- Add each table to the publication only if it's not already a member
DO $$
DECLARE
  table_name text;
  table_names text[] := ARRAY['profiles', 'progress', 'quiz_results', 'word_stats', 'leaderboard'];
BEGIN
  FOREACH table_name IN ARRAY table_names
  LOOP
    -- Check if the table is already in the publication
    IF NOT EXISTS (
      SELECT 1 
      FROM pg_publication_tables 
      WHERE pubname = 'supabase_realtime' 
      AND schemaname = 'public' 
      AND tablename = table_name
    ) THEN
      -- If not, add it to the publication
      EXECUTE format('ALTER PUBLICATION supabase_realtime ADD TABLE %I', table_name);
      RAISE NOTICE 'Added table % to publication supabase_realtime', table_name;
    ELSE
      RAISE NOTICE 'Table % is already a member of publication supabase_realtime', table_name;
    END IF;
  END LOOP;
END
$$;

-- ======================
-- ADD FUNCTIONS FOR LEADERBOARD
-- ======================

-- Create or replace function to recalculate leaderboard
CREATE OR REPLACE FUNCTION recalculate_leaderboard()
RETURNS void AS $$
BEGIN
  -- Clear existing leaderboard data
  TRUNCATE TABLE leaderboard;
  
  -- Recalculate from quiz_results
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
    qr.user_id,
    SUM(qr.total_answers) as total_attempts,
    SUM(qr.correct_answers) as correct_answers,
    CASE 
      WHEN SUM(qr.total_answers) > 0 THEN (SUM(qr.correct_answers)::DECIMAL / SUM(qr.total_answers)) * 100
      ELSE 0
    END as accuracy_percentage,
    COUNT(*) as quizzes_completed,
    ARRAY_AGG(DISTINCT qr.category) FILTER (WHERE qr.category IS NOT NULL AND qr.category != '') as categories,
    p.display_name,
    p.profile_image_url,
    NOW()
  FROM quiz_results qr
  JOIN profiles p ON qr.user_id = p.user_id
  GROUP BY qr.user_id, p.display_name, p.profile_image_url;
  
  RAISE NOTICE 'Leaderboard recalculated successfully';
END;
$$ LANGUAGE plpgsql;

-- Create function to get top users for a category
CREATE OR REPLACE FUNCTION get_top_users_by_category(
  p_category TEXT,
  p_limit INTEGER DEFAULT 5
)
RETURNS TABLE (
  user_id TEXT,
  display_name TEXT,
  profile_image_url TEXT,
  accuracy_percentage DECIMAL,
  total_attempts INTEGER,
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

-- ======================
-- ADDITIONAL RLS POLICIES
-- ======================

-- Add policy to allow users to view all leaderboard entries
DROP POLICY IF EXISTS "Users can view all leaderboard entries" ON leaderboard;
CREATE POLICY "Users can view all leaderboard entries"
ON leaderboard FOR SELECT
TO authenticated
USING (true);

-- ======================
-- ADD ADMIN FUNCTIONS
-- ======================

-- Create function to manually sync a profile
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