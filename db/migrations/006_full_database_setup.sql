-- 006_full_database_setup.sql
-- Complete database setup for KannadaKali

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ====================
-- ENUM TYPES
-- ====================

-- Quiz type enum
DO $$ BEGIN
    CREATE TYPE quiz_type AS ENUM ('rapid_fire', 'standard');
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

-- ====================
-- TABLE DEFINITIONS
-- ====================

-- 1. Profiles Table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT UNIQUE NOT NULL,
  display_name TEXT,
  profile_image_url TEXT,
  email TEXT,
  last_sign_in TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 2. Progress Table
CREATE TABLE IF NOT EXISTS progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT REFERENCES profiles(user_id) ON DELETE CASCADE,
  stars INTEGER DEFAULT 0 NOT NULL,
  words_learned INTEGER DEFAULT 0 NOT NULL,
  quizzes_played INTEGER DEFAULT 0 NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 3. Quiz Results Table
CREATE TABLE IF NOT EXISTS quiz_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL REFERENCES profiles(user_id) ON DELETE CASCADE,
  quiz_type quiz_type NOT NULL,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  total_answers INTEGER NOT NULL,
  correct_answers INTEGER NOT NULL,
  time_spent INTEGER,
  category TEXT,
  categories TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 4. Word Stats Table
CREATE TABLE IF NOT EXISTS word_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL REFERENCES profiles(user_id) ON DELETE CASCADE,
  word TEXT NOT NULL,
  kanglish TEXT NOT NULL,
  kannada TEXT,
  icon TEXT,
  category TEXT,
  total_attempts INTEGER DEFAULT 0 NOT NULL,
  correct_count INTEGER DEFAULT 0 NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 5. Leaderboard Table
CREATE TABLE IF NOT EXISTS leaderboard (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT UNIQUE NOT NULL REFERENCES profiles(user_id) ON DELETE CASCADE,
  total_attempts INTEGER DEFAULT 0 NOT NULL,
  correct_answers INTEGER DEFAULT 0 NOT NULL,
  accuracy_percentage DECIMAL(5,2) DEFAULT 0 NOT NULL,
  quizzes_completed INTEGER DEFAULT 0 NOT NULL,
  categories TEXT[] DEFAULT '{}' NOT NULL,
  display_name TEXT,
  profile_image_url TEXT,
  last_updated TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ====================
-- INDEXES
-- ====================

-- Profiles indexes
CREATE INDEX IF NOT EXISTS idx_profiles_user_id ON profiles(user_id);

-- Progress indexes
CREATE INDEX IF NOT EXISTS idx_progress_user_id ON progress(user_id);
CREATE INDEX IF NOT EXISTS idx_progress_stars ON progress(stars DESC);

-- Quiz results indexes
CREATE INDEX IF NOT EXISTS idx_quiz_results_user_id ON quiz_results(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_created_at ON quiz_results(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quiz_results_category ON quiz_results(category);

-- Word stats indexes
CREATE INDEX IF NOT EXISTS idx_word_stats_user_id ON word_stats(user_id);
CREATE INDEX IF NOT EXISTS idx_word_stats_word ON word_stats(word);
CREATE INDEX IF NOT EXISTS idx_word_stats_category ON word_stats(category);

-- Leaderboard indexes
CREATE INDEX IF NOT EXISTS idx_leaderboard_accuracy ON leaderboard(accuracy_percentage DESC);

-- ====================
-- FUNCTIONS
-- ====================

-- 1. Profile sync function
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
  SELECT id INTO profile_id FROM profiles WHERE user_id = $1::TEXT;
  
  IF profile_id IS NULL THEN
    -- Create new profile if not exists
    INSERT INTO profiles (
      id,
      user_id,
      display_name,
      profile_image_url,
      email,
      last_sign_in,
      created_at,
      updated_at
    ) VALUES (
      gen_random_uuid(),
      user_id,
      display_name,
      profile_image_url,
      email,
      NOW(),
      NOW(),
      NOW()
    )
    RETURNING id INTO profile_id;
    
    -- Create initial progress record
    INSERT INTO progress (user_id, stars, words_learned, quizzes_played)
    VALUES (user_id, 0, 0, 0);
  ELSE
    -- Update existing profile
    UPDATE profiles
    SET
      display_name = COALESCE($2, display_name),
      profile_image_url = COALESCE($3, profile_image_url),
      email = COALESCE($4, email),
      last_sign_in = NOW(),
      updated_at = NOW()
    WHERE user_id = $1;
  END IF;
  
  -- Return the profile ID
  RETURN profile_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 2. Update leaderboard from quiz function
CREATE OR REPLACE FUNCTION update_leaderboard_from_quiz()
RETURNS TRIGGER AS $$
DECLARE
  user_categories TEXT[];
  accuracy DECIMAL(5,2);
  user_display_name TEXT;
  user_profile_image TEXT;
BEGIN
  -- Calculate accuracy percentage
  IF NEW.total_answers > 0 THEN
    accuracy := (NEW.correct_answers::DECIMAL / NEW.total_answers) * 100;
  ELSE
    accuracy := 0;
  END IF;
  
  -- Get user profile information
  SELECT display_name, profile_image_url INTO user_display_name, user_profile_image
  FROM profiles
  WHERE user_id = NEW.user_id::TEXT;
  
  -- Get categories for this user from the current quiz
  IF NEW.category IS NOT NULL AND NEW.category != '' THEN
    -- Get existing categories for this user
    SELECT categories INTO user_categories 
    FROM leaderboard 
    WHERE user_id = NEW.user_id::TEXT;
    
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
    display_name,
    profile_image_url,
    last_updated
  )
  VALUES (
    NEW.user_id::TEXT,
    NEW.total_answers,
    NEW.correct_answers,
    accuracy,
    1,
    COALESCE(user_categories, '{}'),
    user_display_name,
    user_profile_image,
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
    display_name = COALESCE(user_display_name, leaderboard.display_name),
    profile_image_url = COALESCE(user_profile_image, leaderboard.profile_image_url),
    last_updated = NOW();
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 3. Function to update word stats
CREATE OR REPLACE FUNCTION update_word_stats()
RETURNS TRIGGER AS $$
BEGIN
  -- Update progress table - increment words learned if this is a new word for the user
  IF NOT EXISTS (
    SELECT 1 FROM word_stats 
    WHERE user_id = NEW.user_id::TEXT AND word = NEW.word
  ) THEN
    UPDATE progress
    SET words_learned = words_learned + 1
    WHERE user_id = NEW.user_id::TEXT;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 4. Function to update progress when quizzes are completed
CREATE OR REPLACE FUNCTION update_progress_from_quiz()
RETURNS TRIGGER AS $$
BEGIN
  -- Update progress table - increment quizzes played and add stars
  UPDATE progress
  SET 
    quizzes_played = quizzes_played + 1,
    stars = stars + CASE 
      WHEN NEW.score::DECIMAL / NEW.total_questions >= 0.8 THEN 3
      WHEN NEW.score::DECIMAL / NEW.total_questions >= 0.6 THEN 2
      WHEN NEW.score::DECIMAL / NEW.total_questions >= 0.4 THEN 1
      ELSE 0
    END
  WHERE user_id = NEW.user_id::TEXT;
  
  -- Create progress record if it doesn't exist
  IF NOT FOUND THEN
    INSERT INTO progress (
      user_id, 
      quizzes_played, 
      stars
    ) VALUES (
      NEW.user_id::TEXT, 
      1, 
      CASE 
        WHEN NEW.score::DECIMAL / NEW.total_questions >= 0.8 THEN 3
        WHEN NEW.score::DECIMAL / NEW.total_questions >= 0.6 THEN 2
        WHEN NEW.score::DECIMAL / NEW.total_questions >= 0.4 THEN 1
        ELSE 0
      END
    );
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ====================
-- TRIGGERS
-- ====================

-- 1. Update leaderboard when quiz results are added
DROP TRIGGER IF EXISTS update_leaderboard_trigger ON quiz_results;
CREATE TRIGGER update_leaderboard_trigger
AFTER INSERT OR UPDATE ON quiz_results
FOR EACH ROW
EXECUTE FUNCTION update_leaderboard_from_quiz();

-- 2. Update word stats
DROP TRIGGER IF EXISTS update_word_stats_trigger ON word_stats;
CREATE TRIGGER update_word_stats_trigger
AFTER INSERT ON word_stats
FOR EACH ROW
EXECUTE FUNCTION update_word_stats();

-- 3. Update progress from quiz results
DROP TRIGGER IF EXISTS update_progress_trigger ON quiz_results;
CREATE TRIGGER update_progress_trigger
AFTER INSERT ON quiz_results
FOR EACH ROW
EXECUTE FUNCTION update_progress_from_quiz();

-- ====================
-- REALTIME SETUP
-- ====================

-- Enable realtime for all relevant tables
ALTER PUBLICATION supabase_realtime ADD TABLE profiles;
ALTER PUBLICATION supabase_realtime ADD TABLE progress;
ALTER PUBLICATION supabase_realtime ADD TABLE quiz_results;
ALTER PUBLICATION supabase_realtime ADD TABLE word_stats;
ALTER PUBLICATION supabase_realtime ADD TABLE leaderboard;

-- ====================
-- ROW LEVEL SECURITY
-- ====================

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE word_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;

-- Profiles RLS policies
CREATE POLICY "Users can view their own profile"
ON profiles FOR SELECT
USING (auth.uid()::TEXT = user_id);

CREATE POLICY "Users can update their own profile"
ON profiles FOR UPDATE
USING (auth.uid()::TEXT = user_id);

CREATE POLICY "System can create profiles"
ON profiles FOR INSERT
TO authenticated
WITH CHECK (true);

-- Progress RLS policies
CREATE POLICY "Users can view their own progress"
ON progress FOR SELECT
USING (auth.uid()::TEXT = user_id);

CREATE POLICY "Users can update their own progress"
ON progress FOR UPDATE
USING (auth.uid()::TEXT = user_id);

CREATE POLICY "System can insert progress"
ON progress FOR INSERT
TO authenticated
WITH CHECK (true);

-- Quiz results RLS policies
CREATE POLICY "Users can view their own quiz results"
ON quiz_results FOR SELECT
USING (auth.uid()::TEXT = user_id);

CREATE POLICY "Users can insert their own quiz results"
ON quiz_results FOR INSERT
TO authenticated
WITH CHECK (auth.uid()::TEXT = user_id);

-- Word stats RLS policies
CREATE POLICY "Users can view their own word stats"
ON word_stats FOR SELECT
USING (auth.uid()::TEXT = user_id);

CREATE POLICY "Users can update their own word stats"
ON word_stats FOR UPDATE
USING (auth.uid()::TEXT = user_id);

CREATE POLICY "Users can insert their own word stats"
ON word_stats FOR INSERT
TO authenticated
WITH CHECK (auth.uid()::TEXT = user_id);

-- Leaderboard RLS policies
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

-- ====================
-- INITIAL DATA IMPORT
-- ====================

-- Initialize leaderboard data from existing quiz_results if any
INSERT INTO leaderboard (
  user_id,
  total_attempts,
  correct_answers,
  accuracy_percentage,
  quizzes_completed,
  categories,
  display_name,
  profile_image_url
)
SELECT 
  qr.user_id::TEXT,
  SUM(qr.total_answers) as total_attempts,
  SUM(qr.correct_answers) as correct_answers,
  CASE 
    WHEN SUM(qr.total_answers) > 0 THEN (SUM(qr.correct_answers)::DECIMAL / SUM(qr.total_answers)) * 100
    ELSE 0
  END as accuracy_percentage,
  COUNT(*) as quizzes_completed,
  ARRAY_AGG(DISTINCT qr.category) FILTER (WHERE qr.category IS NOT NULL AND qr.category != '') as categories,
  p.display_name,
  p.profile_image_url
FROM quiz_results qr
JOIN profiles p ON qr.user_id::TEXT = p.user_id::TEXT
GROUP BY qr.user_id, p.display_name, p.profile_image_url
ON CONFLICT (user_id) DO NOTHING; 