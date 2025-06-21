-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create leaderboard table for storing aggregated user quiz performance statistics
CREATE TABLE IF NOT EXISTS "leaderboard" (
  "user_id" TEXT PRIMARY KEY,
  "total_attempts" INTEGER NOT NULL DEFAULT 0,
  "correct_answers" INTEGER NOT NULL DEFAULT 0,
  "accuracy_percentage" NUMERIC(5,2) NOT NULL DEFAULT 0,
  "quizzes_completed" INTEGER NOT NULL DEFAULT 0,
  "categories" TEXT[] DEFAULT '{}',
  "last_updated" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index on accuracy_percentage for sorting efficiency
CREATE INDEX IF NOT EXISTS "leaderboard_accuracy_index" ON "leaderboard" ("accuracy_percentage");

-- Enable row-level security
ALTER TABLE "leaderboard" ENABLE ROW LEVEL SECURITY;

-- RLS policies for leaderboard
CREATE POLICY "Users can view leaderboard entries" 
  ON "leaderboard" FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Users can update only their own leaderboard entries" 
  ON "leaderboard" FOR UPDATE 
  USING (auth.uid()::text = user_id);

CREATE POLICY "Users can delete only their own leaderboard entries" 
  ON "leaderboard" FOR DELETE 
  USING (auth.uid()::text = user_id);

CREATE POLICY "Users can insert only their own leaderboard entries" 
  ON "leaderboard" FOR INSERT 
  WITH CHECK (auth.uid()::text = user_id);

-- Function to update leaderboard based on quiz results
CREATE OR REPLACE FUNCTION update_leaderboard_from_quiz()
RETURNS TRIGGER AS $$
DECLARE
  v_user_categories TEXT[];
  v_quiz_categories TEXT[];
  v_update_categories TEXT[];
BEGIN
  -- Get the current categories for the user from leaderboard (if they exist)
  SELECT categories INTO v_user_categories
  FROM leaderboard
  WHERE user_id = NEW.user_id;
  
  -- If no existing categories found, initialize as empty array
  IF v_user_categories IS NULL THEN
    v_user_categories := '{}';
  END IF;
  
  -- Get the categories from the new quiz (handle null case)
  v_quiz_categories := COALESCE(NEW.categories, '{}');
  
  -- Merge unique categories
  SELECT ARRAY(
    SELECT DISTINCT unnest(v_user_categories || v_quiz_categories)
  ) INTO v_update_categories;
  
  -- Insert or update the leaderboard entry
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
    NEW.total_questions,
    NEW.score,
    CASE WHEN NEW.total_questions > 0 THEN
      (NEW.score::NUMERIC / NEW.total_questions) * 100
    ELSE 0 END,
    1,
    v_update_categories,
    CURRENT_TIMESTAMP
  )
  ON CONFLICT (user_id) DO UPDATE SET
    total_attempts = leaderboard.total_attempts + NEW.total_questions,
    correct_answers = leaderboard.correct_answers + NEW.score,
    accuracy_percentage = CASE WHEN (leaderboard.total_attempts + NEW.total_questions) > 0 THEN
      ((leaderboard.correct_answers + NEW.score)::NUMERIC / (leaderboard.total_attempts + NEW.total_questions)) * 100
    ELSE 0 END,
    quizzes_completed = leaderboard.quizzes_completed + 1,
    categories = v_update_categories,
    last_updated = CURRENT_TIMESTAMP;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create the trigger on quiz_results table
DROP TRIGGER IF EXISTS update_leaderboard_trigger ON quiz_results;

CREATE TRIGGER update_leaderboard_trigger
AFTER INSERT OR UPDATE ON quiz_results
FOR EACH ROW
EXECUTE FUNCTION update_leaderboard_from_quiz();

-- Enable realtime for leaderboard 
BEGIN;
  -- Drop the publication if it exists
  DROP PUBLICATION IF EXISTS supabase_realtime;
  
  -- Create a new publication with all necessary tables
  CREATE PUBLICATION supabase_realtime FOR TABLE 
    quiz_results, 
    progress, 
    leaderboard;
COMMIT;

-- Initialize leaderboard from existing quiz results
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
  SUM(total_questions) as total_attempts,
  SUM(score) as correct_answers,
  CASE WHEN SUM(total_questions) > 0 THEN
    (SUM(score)::NUMERIC / SUM(total_questions)) * 100
  ELSE 0 END as accuracy_percentage,
  COUNT(*) as quizzes_completed,
  ARRAY(
    SELECT DISTINCT unnest(categories) 
    FROM quiz_results qr 
    WHERE qr.user_id = user_id AND categories IS NOT NULL
  ) as categories
FROM 
  quiz_results
GROUP BY 
  user_id
ON CONFLICT (user_id) DO NOTHING; 