-- 018_update_profile_trigger.sql
-- Update the profile creation trigger to include additional fields

-- Drop the existing function
DROP FUNCTION IF EXISTS ensure_profile_exists() CASCADE;

-- Create an updated function with more fields
CREATE OR REPLACE FUNCTION ensure_profile_exists()
RETURNS TRIGGER AS $$
BEGIN
  -- Check if profile exists
  IF NOT EXISTS (SELECT 1 FROM profiles WHERE user_id = NEW.user_id) THEN
    -- Insert a placeholder profile with all required fields
    INSERT INTO profiles (
      user_id, 
      display_name, 
      profile_image_url,
      email,
      created_at, 
      updated_at
    )
    VALUES (
      NEW.user_id, 
      'User ' || substring(NEW.user_id, 1, 6),
      NULL, -- profile_image_url initially null
      NULL, -- email initially null
      NOW(),
      NOW()
    )
    ON CONFLICT (user_id) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Recreate triggers on tables
CREATE TRIGGER ensure_profile_before_word_stats
BEFORE INSERT OR UPDATE ON word_stats
FOR EACH ROW
EXECUTE FUNCTION ensure_profile_exists();

CREATE TRIGGER ensure_profile_before_quiz_results
BEFORE INSERT OR UPDATE ON quiz_results
FOR EACH ROW
EXECUTE FUNCTION ensure_profile_exists();

CREATE TRIGGER ensure_profile_before_progress
BEFORE INSERT OR UPDATE ON progress
FOR EACH ROW
EXECUTE FUNCTION ensure_profile_exists();

CREATE TRIGGER ensure_profile_before_leaderboard
BEFORE INSERT OR UPDATE ON leaderboard
FOR EACH ROW
EXECUTE FUNCTION ensure_profile_exists();

-- Update existing placeholder profiles with correct schema
UPDATE profiles
SET 
  profile_image_url = CASE 
    WHEN profile_image_url IS NULL THEN NULL
    ELSE profile_image_url
  END,
  email = CASE 
    WHEN email IS NULL THEN NULL
    ELSE email
  END
WHERE 
  display_name LIKE 'User %' AND
  (profile_image_url IS NULL OR email IS NULL); 