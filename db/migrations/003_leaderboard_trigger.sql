-- Setup leaderboard table
CREATE TABLE IF NOT EXISTS leaderboard (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  total_attempts INTEGER NOT NULL DEFAULT 0,
  correct_answers INTEGER NOT NULL DEFAULT 0,
  accuracy_percentage NUMERIC(5,2) NOT NULL DEFAULT 0,
  quizzes_completed INTEGER NOT NULL DEFAULT 0,
  categories TEXT[] NOT NULL DEFAULT '{}',
  last_updated TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Create index for efficient sorting
CREATE INDEX IF NOT EXISTS leaderboard_accuracy_idx ON leaderboard (accuracy_percentage);

-- Enable RLS
ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;

-- Set up RLS policies
CREATE POLICY "Public leaderboard access" ON leaderboard
    FOR SELECT
    USING (true);

CREATE POLICY "Users can only update their own leaderboard entry" ON leaderboard
    FOR ALL
    USING (auth.uid()::text = user_id);

-- Function to update leaderboard when quiz results are added or updated
CREATE OR REPLACE FUNCTION update_leaderboard_from_quiz()
RETURNS TRIGGER AS $$
DECLARE
    user_categories TEXT[];
    quiz_category TEXT;
BEGIN
    -- Get existing categories for this user or empty array
    SELECT categories INTO user_categories FROM leaderboard WHERE user_id = NEW.user_id;
    IF NOT FOUND THEN
        user_categories := '{}';
    END IF;
    
    -- Add categories from the new quiz result if they don't exist
    IF NEW.categories IS NOT NULL THEN
        FOREACH quiz_category IN ARRAY NEW.categories
        LOOP
            IF NOT (quiz_category = ANY(user_categories)) THEN
                user_categories := array_append(user_categories, quiz_category);
            END IF;
        END LOOP;
    END IF;

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
    SELECT 
        NEW.user_id,
        SUM(total_questions),
        SUM(score),
        CASE 
            WHEN SUM(total_questions) > 0 THEN 
                (SUM(score) * 100.0 / SUM(total_questions))
            ELSE 0 
        END,
        COUNT(*),
        user_categories,
        NOW()
    FROM quiz_results
    WHERE user_id = NEW.user_id
    GROUP BY user_id
    ON CONFLICT (user_id) 
    DO UPDATE SET
        total_attempts = EXCLUDED.total_attempts,
        correct_answers = EXCLUDED.correct_answers,
        accuracy_percentage = EXCLUDED.accuracy_percentage,
        quizzes_completed = EXCLUDED.quizzes_completed,
        categories = user_categories,
        last_updated = NOW();
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for quiz_results table
DROP TRIGGER IF EXISTS update_leaderboard_trigger ON quiz_results;
CREATE TRIGGER update_leaderboard_trigger
AFTER INSERT OR UPDATE ON quiz_results
FOR EACH ROW
EXECUTE FUNCTION update_leaderboard_from_quiz();

-- Enable realtime for the leaderboard table (only if not already added)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime'
    AND tablename = 'leaderboard'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE leaderboard;
  END IF;
END $$;

-- Initialize leaderboard data from existing quiz results
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
    SUM(total_questions),
    SUM(score),
    CASE 
        WHEN SUM(total_questions) > 0 THEN 
            (SUM(score) * 100.0 / SUM(total_questions))
        ELSE 0 
    END,
    COUNT(*),
    ARRAY(
        SELECT DISTINCT unnest(categories)
        FROM quiz_results qr
        WHERE qr.user_id = quiz_results.user_id
        AND categories IS NOT NULL
    )
FROM quiz_results
GROUP BY user_id
ON CONFLICT (user_id) 
DO UPDATE SET
    total_attempts = EXCLUDED.total_attempts,
    correct_answers = EXCLUDED.correct_answers,
    accuracy_percentage = EXCLUDED.accuracy_percentage,
    quizzes_completed = EXCLUDED.quizzes_completed,
    categories = EXCLUDED.categories,
    last_updated = NOW(); 