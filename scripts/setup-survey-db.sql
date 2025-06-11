-- SQL script to create survey tables and enums
-- Run this in your Supabase SQL editor or PostgreSQL database
-- This script will drop existing survey tables/types and recreate them

-- Drop existing survey table and trigger first
DROP TRIGGER IF EXISTS update_survey_responses_updated_at ON survey_responses;
DROP TABLE IF EXISTS survey_responses;

-- Drop existing survey-specific types
DROP TYPE IF EXISTS early_tester;
DROP TYPE IF EXISTS referral_source;
DROP TYPE IF EXISTS calendar_opt_in;
DROP TYPE IF EXISTS session_length;
DROP TYPE IF EXISTS exposure;
DROP TYPE IF EXISTS reading_level;
DROP TYPE IF EXISTS age_band;
DROP TYPE IF EXISTS role;
DROP TYPE IF EXISTS time_horizon;
DROP TYPE IF EXISTS goal;

-- Create enums
CREATE TYPE goal AS ENUM (
  'daily_conversation',
  'heritage_language', 
  'school_curriculum',
  'workplace_need',
  'travel',
  'other'
);

CREATE TYPE time_horizon AS ENUM (
  'less_than_1_month',
  '1_to_3_months', 
  '3_to_6_months',
  '6_months_plus'
);

CREATE TYPE role AS ENUM (
  'myself',
  'my_son',
  'my_daughter',
  'classroom_group'
);

CREATE TYPE age_band AS ENUM (
  '4_to_6',
  '7_to_9',
  '10_to_12',
  '13_to_17',
  '18_to_34', 
  '35_to_54',
  '55_plus'
);

CREATE TYPE reading_level AS ENUM (
  'none',
  'few_vowels',
  'most_vowels_consonants',
  'comfortable_reader'
);

CREATE TYPE exposure AS ENUM (
  'daily',
  'weekly', 
  'rarely',
  'never'
);

CREATE TYPE session_length AS ENUM (
  '5_min',
  '10_min',
  '15_min', 
  '20_min_plus'
);

CREATE TYPE calendar_opt_in AS ENUM (
  'yes_send_invite',
  'no_thanks'
);

CREATE TYPE referral_source AS ENUM (
  'friend_family',
  'instagram',
  'youtube',
  'school', 
  'other'
);

CREATE TYPE early_tester AS ENUM (
  'yes_please',
  'maybe_later'
);

-- Create the survey_responses table
CREATE TABLE survey_responses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,

  -- A. Motivation & Goals
  goal goal,
  goal_other TEXT,
  time_horizon time_horizon,

  -- B. Learner Profile  
  role role,
  age_band age_band,
  mother_tongue TEXT,

  -- C. Prior Knowledge
  reading_level reading_level,
  exposure exposure,

  -- D. Learning Preferences
  format_quick_quizzes BOOLEAN DEFAULT FALSE,
  format_story_mode BOOLEAN DEFAULT FALSE,
  format_trace_letter BOOLEAN DEFAULT FALSE,
  format_speaking_practice BOOLEAN DEFAULT FALSE,
  format_leaderboard BOOLEAN DEFAULT FALSE,
  session_length session_length,

  -- E. Commitment & Reminders
  calendar_opt_in calendar_opt_in,
  calendar_email TEXT,
  calendar_time_of_day TEXT,
  notification_mobile_push BOOLEAN DEFAULT FALSE,
  notification_email_digest BOOLEAN DEFAULT FALSE,
  notification_whatsapp BOOLEAN DEFAULT FALSE,
  notification_none BOOLEAN DEFAULT FALSE,

  -- H. Community & Feedback
  referral_source referral_source,
  referral_other TEXT,
  early_tester early_tester,

  -- Survey completion tracking
  step1_completed BOOLEAN DEFAULT FALSE,
  step2_completed BOOLEAN DEFAULT FALSE,
  step3_completed BOOLEAN DEFAULT FALSE,
  is_completed BOOLEAN DEFAULT FALSE,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Create index on user_id for faster lookups
CREATE INDEX idx_survey_responses_user_id ON survey_responses(user_id);

-- Create the update function if it doesn't exist (it's shared with other tables)
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for survey responses table
CREATE TRIGGER update_survey_responses_updated_at 
  BEFORE UPDATE ON survey_responses 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column(); 