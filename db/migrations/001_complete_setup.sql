-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enable pgcrypto for password hashing
CREATE EXTENSION IF NOT EXISTS pgcrypto;

----------------------------------------------
-- CLERK & SUPABASE INTEGRATION
----------------------------------------------

-- Create or replace the function to handle JWT claims from Clerk
CREATE OR REPLACE FUNCTION auth.jwt() RETURNS jsonb AS $$
BEGIN
  RETURN (
    SELECT COALESCE(
      nullif(current_setting('request.jwt.claim', true), ''),
      '{}'
    )::jsonb
  );
END;
$$ LANGUAGE plpgsql STABLE;

-- Drop the existing auth.uid() function to avoid return type conflicts
DROP FUNCTION IF EXISTS auth.uid();

-- Create function to get the current user's ID from Clerk JWT
-- Always returns a text type
CREATE OR REPLACE FUNCTION auth.uid() RETURNS text AS $$
BEGIN
  RETURN (auth.jwt() ->> 'sub')::text;
END;
$$ LANGUAGE plpgsql STABLE;

----------------------------------------------
-- TABLES
----------------------------------------------

-- Create the quiz type enum
CREATE TYPE quiz_type AS ENUM ('rapid_fire', 'standard');

-- Create the membership enum
CREATE TYPE membership AS ENUM ('free', 'pro');

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  user_id TEXT PRIMARY KEY NOT NULL,
  membership membership NOT NULL DEFAULT 'free',
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create quiz_results table
CREATE TABLE IF NOT EXISTS quiz_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT NOT NULL,
  quiz_type quiz_type NOT NULL,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  time_spent INTEGER,
  categories TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create progress table
CREATE TABLE IF NOT EXISTS progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT NOT NULL,
  stars INTEGER NOT NULL DEFAULT 0,
  words_learned INTEGER NOT NULL DEFAULT 0,
  quizzes_played INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create word_stats table
CREATE TABLE IF NOT EXISTS word_stats (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT NOT NULL,
  word TEXT NOT NULL,
  kanglish TEXT NOT NULL,
  kannada TEXT,
  icon TEXT,
  category TEXT,
  total_attempts INTEGER NOT NULL DEFAULT 0,
  correct_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

----------------------------------------------
-- ENABLE REALTIME
----------------------------------------------

-- Enable real-time features for the tables (MOVED AFTER table creation)
ALTER PUBLICATION supabase_realtime ADD TABLE quiz_results;
ALTER PUBLICATION supabase_realtime ADD TABLE progress;
ALTER PUBLICATION supabase_realtime ADD TABLE word_stats;
ALTER PUBLICATION supabase_realtime ADD TABLE profiles;

----------------------------------------------
-- ROW LEVEL SECURITY
----------------------------------------------

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE word_stats ENABLE ROW LEVEL SECURITY;

-- Profiles table policies
CREATE POLICY "Users can view their own profile"
ON profiles FOR SELECT 
TO authenticated
USING (auth.uid()::text = user_id OR auth.uid() IS NULL);

CREATE POLICY "Users can insert their own profile"
ON profiles FOR INSERT
TO authenticated
WITH CHECK (auth.uid()::text = user_id);

CREATE POLICY "Users can update their own profile"
ON profiles FOR UPDATE
TO authenticated
USING (auth.uid()::text = user_id)
WITH CHECK (auth.uid()::text = user_id);

CREATE POLICY "Users can delete their own profile"
ON profiles FOR DELETE
TO authenticated
USING (auth.uid()::text = user_id);

-- Quiz results table policies
CREATE POLICY "Users can view their own quiz results"
ON quiz_results FOR SELECT 
TO authenticated
USING (auth.uid()::text = user_id OR auth.uid() IS NULL);

CREATE POLICY "Users can insert their own quiz results"
ON quiz_results FOR INSERT
TO authenticated
WITH CHECK (auth.uid()::text = user_id);

CREATE POLICY "Users can update their own quiz results"
ON quiz_results FOR UPDATE
TO authenticated
USING (auth.uid()::text = user_id)
WITH CHECK (auth.uid()::text = user_id);

CREATE POLICY "Users can delete their own quiz results"
ON quiz_results FOR DELETE
TO authenticated
USING (auth.uid()::text = user_id);

-- Progress table policies
CREATE POLICY "Users can view their own progress"
ON progress FOR SELECT 
TO authenticated
USING (auth.uid()::text = user_id OR auth.uid() IS NULL);

CREATE POLICY "Users can insert their own progress"
ON progress FOR INSERT
TO authenticated
WITH CHECK (auth.uid()::text = user_id);

CREATE POLICY "Users can update their own progress"
ON progress FOR UPDATE
TO authenticated
USING (auth.uid()::text = user_id)
WITH CHECK (auth.uid()::text = user_id);

CREATE POLICY "Users can delete their own progress"
ON progress FOR DELETE
TO authenticated
USING (auth.uid()::text = user_id);

-- Word stats table policies
CREATE POLICY "Users can view their own word stats"
ON word_stats FOR SELECT 
TO authenticated
USING (auth.uid()::text = user_id OR auth.uid() IS NULL);

CREATE POLICY "Users can insert their own word stats"
ON word_stats FOR INSERT
TO authenticated
WITH CHECK (auth.uid()::text = user_id);

CREATE POLICY "Users can update their own word stats"
ON word_stats FOR UPDATE
TO authenticated
USING (auth.uid()::text = user_id)
WITH CHECK (auth.uid()::text = user_id);

CREATE POLICY "Users can delete their own word stats"
ON word_stats FOR DELETE
TO authenticated
USING (auth.uid()::text = user_id);

----------------------------------------------
-- AUTO USER MANAGEMENT
----------------------------------------------

-- Create a function to handle new user sign-ups
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Insert a new profile for the user
  INSERT INTO public.profiles (user_id)
  VALUES (new.id);
  
  -- Insert initial progress for the user
  INSERT INTO public.progress (user_id)
  VALUES (new.id);
  
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Check if the trigger already exists first
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_trigger
    WHERE tgname = 'on_auth_user_created'
  ) THEN
    -- Create a trigger to handle new users
    CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();
  END IF;
END
$$; 