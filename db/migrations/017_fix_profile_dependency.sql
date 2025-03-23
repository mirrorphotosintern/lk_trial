-- 017_fix_profile_dependency.sql
-- Fix foreign key constraints and add trigger to auto-create profiles

-- Create function to ensure profile exists before stats insertion
CREATE OR REPLACE FUNCTION ensure_profile_exists()
RETURNS TRIGGER AS $$
BEGIN
  -- Check if profile exists
  IF NOT EXISTS (SELECT 1 FROM profiles WHERE user_id = NEW.user_id) THEN
    -- Insert a placeholder profile
    INSERT INTO profiles (user_id, display_name, created_at, updated_at)
    VALUES (
      NEW.user_id, 
      'User ' || substring(NEW.user_id, 1, 6),
      NOW(),
      NOW()
    )
    ON CONFLICT (user_id) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger on word_stats
DROP TRIGGER IF EXISTS ensure_profile_before_word_stats ON word_stats;
CREATE TRIGGER ensure_profile_before_word_stats
BEFORE INSERT OR UPDATE ON word_stats
FOR EACH ROW
EXECUTE FUNCTION ensure_profile_exists();

-- Create trigger on quiz_results
DROP TRIGGER IF EXISTS ensure_profile_before_quiz_results ON quiz_results;
CREATE TRIGGER ensure_profile_before_quiz_results
BEFORE INSERT OR UPDATE ON quiz_results
FOR EACH ROW
EXECUTE FUNCTION ensure_profile_exists();

-- Create trigger on progress
DROP TRIGGER IF EXISTS ensure_profile_before_progress ON progress;
CREATE TRIGGER ensure_profile_before_progress
BEFORE INSERT OR UPDATE ON progress
FOR EACH ROW
EXECUTE FUNCTION ensure_profile_exists();

-- Create trigger on leaderboard
DROP TRIGGER IF EXISTS ensure_profile_before_leaderboard ON leaderboard;
CREATE TRIGGER ensure_profile_before_leaderboard
BEFORE INSERT OR UPDATE ON leaderboard
FOR EACH ROW
EXECUTE FUNCTION ensure_profile_exists();

-- Sync existing records that might be missing profiles
INSERT INTO profiles (user_id, display_name, created_at, updated_at)
SELECT DISTINCT user_id, 'User ' || substring(user_id, 1, 6), NOW(), NOW()
FROM (
  SELECT user_id FROM word_stats
  UNION 
  SELECT user_id FROM quiz_results
  UNION
  SELECT user_id FROM progress
  UNION
  SELECT user_id FROM leaderboard
) AS all_users
WHERE user_id NOT IN (SELECT user_id FROM profiles)
ON CONFLICT (user_id) DO NOTHING; 