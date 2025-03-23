-- 006_profile_leaderboard_setup.sql
-- Migration to set up profiles and leaderboard functionality

-- Step 1: Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL UNIQUE,
  display_name TEXT,
  profile_image_url TEXT,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Step 2: Create leaderboard table
CREATE TABLE IF NOT EXISTS leaderboard (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL UNIQUE REFERENCES profiles(user_id) ON DELETE CASCADE,
  total_attempts INTEGER NOT NULL DEFAULT 0,
  correct_answers INTEGER NOT NULL DEFAULT 0,
  accuracy_percentage DECIMAL(5,2) NOT NULL DEFAULT 0,
  quizzes_completed INTEGER NOT NULL DEFAULT 0,
  categories TEXT[] NOT NULL DEFAULT '{}',
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Step 3: Create index on accuracy_percentage for fast leaderboard queries
CREATE INDEX IF NOT EXISTS idx_leaderboard_accuracy ON leaderboard(accuracy_percentage);

-- Step 4: Create profile sync function
CREATE OR REPLACE FUNCTION sync_clerk_profile(
  user_id TEXT,
  display_name TEXT,
  profile_image_url TEXT,
  email TEXT
) RETURNS UUID AS $$
DECLARE
  profile_id UUID;
BEGIN
  -- Try to find existing profile
  SELECT id INTO profile_id FROM profiles WHERE user_id = $1;
  
  IF profile_id IS NULL THEN
    -- Create new profile if not exists
    INSERT INTO profiles (
      id,
      user_id,
      display_name,
      profile_image_url,
      email,
      created_at,
      updated_at
    ) VALUES (
      gen_random_uuid(),
      user_id,
      display_name,
      profile_image_url,
      email,
      NOW(),
      NOW()
    )
    RETURNING id INTO profile_id;
  ELSE
    -- Update existing profile
    UPDATE profiles
    SET
      display_name = COALESCE($2, display_name),
      profile_image_url = COALESCE($3, profile_image_url),
      email = COALESCE($4, email),
      updated_at = NOW()
    WHERE user_id = $1;
  END IF;
  
  -- Return the profile ID
  RETURN profile_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Step 5: Create function to update leaderboard from quiz results
CREATE OR REPLACE FUNCTION update_leaderboard_from_quiz()
RETURNS TRIGGER AS $$
DECLARE
  user_categories TEXT[];
  accuracy DECIMAL(5,2);
BEGIN
  -- Calculate accuracy percentage
  IF NEW.total_answers > 0 THEN
    accuracy := (NEW.correct_answers::DECIMAL / NEW.total_answers) * 100;
  ELSE
    accuracy := 0;
  END IF;
  
  -- Get categories for this user from the current quiz
  IF NEW.category IS NOT NULL AND NEW.category != '' THEN
    -- Get existing categories for this user
    SELECT categories INTO user_categories 
    FROM leaderboard 
    WHERE user_id = NEW.user_id;
    
    -- If no existing record, initialize empty array
    IF user_categories IS NULL THEN
      user_categories := '{}';
    END IF;
    
    -- Add new category if not already in the array
    IF NOT (NEW.category = ANY(user_categories)) THEN
      user_categories := array_append(user_categories, NEW.category);
    END IF;
  END IF;
  
  -- Insert or update leaderboard entry
  INSERT INTO leaderboard (
    user_id,
    total_attempts,
    correct_answers,
    accuracy_percentage,
    quizzes_completed,
    categories,
    last_updated
  )
  VALUES (
    NEW.user_id,
    NEW.total_answers,
    NEW.correct_answers,
    accuracy,
    1,
    COALESCE(user_categories, '{}'),
    NOW()
  )
  ON CONFLICT (user_id) 
  DO UPDATE SET
    total_attempts = leaderboard.total_attempts + NEW.total_answers,
    correct_answers = leaderboard.correct_answers + NEW.correct_answers,
    accuracy_percentage = (
      (leaderboard.correct_answers + NEW.correct_answers)::DECIMAL / 
      (leaderboard.total_attempts + NEW.total_answers)
    ) * 100,
    quizzes_completed = leaderboard.quizzes_completed + 1,
    categories = CASE
      WHEN NEW.category IS NULL OR NEW.category = '' THEN leaderboard.categories
      WHEN NEW.category = ANY(leaderboard.categories) THEN leaderboard.categories
      ELSE array_append(leaderboard.categories, NEW.category)
    END,
    last_updated = NOW();
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Step 6: Create trigger on quiz_results table
DROP TRIGGER IF EXISTS update_leaderboard_trigger ON quiz_results;
CREATE TRIGGER update_leaderboard_trigger
AFTER INSERT OR UPDATE ON quiz_results
FOR EACH ROW
EXECUTE FUNCTION update_leaderboard_from_quiz();

-- Step 7: Enable real-time for profiles and leaderboard
ALTER PUBLICATION supabase_realtime ADD TABLE profiles, leaderboard;

-- Step 8: Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;

-- Step 9: Create RLS policies for profiles
CREATE POLICY "Users can view their own profile"
ON profiles FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
ON profiles FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "System can create profiles"
ON profiles FOR INSERT
TO authenticated
WITH CHECK (true);

-- Step 10: Create RLS policies for leaderboard
CREATE POLICY "Anyone can view leaderboard"
ON leaderboard FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "System can update leaderboard"
ON leaderboard FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "System can update leaderboard entries"
ON leaderboard FOR UPDATE
TO authenticated
USING (true);

-- Step 11: Initialize leaderboard data from existing quiz_results
-- Only run this if this is a first-time setup with existing quiz data
INSERT INTO leaderboard (
  user_id,
  total_attempts,
  correct_answers,
  accuracy_percentage,
  quizzes_completed,
  categories
)
SELECT 
  user_id,
  SUM(total_answers) as total_attempts,
  SUM(correct_answers) as correct_answers,
  CASE 
    WHEN SUM(total_answers) > 0 THEN (SUM(correct_answers)::DECIMAL / SUM(total_answers)) * 100
    ELSE 0
  END as accuracy_percentage,
  COUNT(*) as quizzes_completed,
  ARRAY_AGG(DISTINCT category) FILTER (WHERE category IS NOT NULL AND category != '') as categories
FROM quiz_results
GROUP BY user_id
ON CONFLICT (user_id) DO NOTHING; 