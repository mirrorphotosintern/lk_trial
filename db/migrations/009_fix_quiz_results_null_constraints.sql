-- 009_fix_quiz_results_null_constraints.sql
-- This migration fixes the NULL constraint issues in the quiz_results table

-- ======================
-- FIX EXISTING NULL VALUES
-- ======================

-- Update existing rows with NULL values in total_answers to use total_questions
UPDATE quiz_results
SET 
  total_answers = total_questions,
  correct_answers = score
WHERE total_answers IS NULL;

-- ======================
-- ADD TRIGGER TO PREVENT NULL VALUES
-- ======================

-- Create a function to set default values for NULL columns
CREATE OR REPLACE FUNCTION set_quiz_result_defaults()
RETURNS TRIGGER AS $$
BEGIN
  -- If total_answers is NULL, use total_questions
  IF NEW.total_answers IS NULL THEN
    NEW.total_answers := NEW.total_questions;
  END IF;
  
  -- If correct_answers is NULL, use score
  IF NEW.correct_answers IS NULL THEN
    NEW.correct_answers := NEW.score;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to run before insert or update
DROP TRIGGER IF EXISTS set_quiz_defaults_trigger ON quiz_results;
CREATE TRIGGER set_quiz_defaults_trigger
BEFORE INSERT OR UPDATE ON quiz_results
FOR EACH ROW
EXECUTE FUNCTION set_quiz_result_defaults();

-- ======================
-- ADD FUNCTION TO SAFELY SAVE QUIZ RESULTS
-- ======================

-- Create a function to safely save quiz results with defaults
CREATE OR REPLACE FUNCTION save_quiz_result(
  p_user_id TEXT,
  p_quiz_type TEXT,
  p_score INTEGER,
  p_total_questions INTEGER,
  p_time_spent INTEGER DEFAULT NULL,
  p_category TEXT DEFAULT NULL
)
RETURNS UUID AS $$
DECLARE
  quiz_id UUID;
BEGIN
  INSERT INTO quiz_results (
    id,
    user_id,
    quiz_type,
    score,
    total_questions,
    total_answers,
    correct_answers,
    time_spent,
    category
  ) VALUES (
    gen_random_uuid(),
    p_user_id,
    p_quiz_type::quiz_type,
    p_score,
    p_total_questions,
    p_total_questions,  -- Use total_questions as total_answers
    p_score,            -- Use score as correct_answers
    p_time_spent,
    p_category
  )
  RETURNING id INTO quiz_id;
  
  RETURN quiz_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER; 