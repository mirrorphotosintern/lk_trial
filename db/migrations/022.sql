-- Create badges table for tracking user achievement badges
CREATE TABLE IF NOT EXISTS badges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL REFERENCES profiles(user_id) ON DELETE CASCADE,
  badge_id TEXT NOT NULL,
  current_level INTEGER NOT NULL DEFAULT 1,
  progress INTEGER NOT NULL DEFAULT 0,
  earned_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  
  -- Create a unique constraint to ensure a user can only have one record per badge
  CONSTRAINT badges_user_badge_unique UNIQUE(user_id, badge_id)
);

-- Create an index on user_id for efficient queries by user
CREATE INDEX badges_user_id_idx ON badges(user_id);

-- Add a comment to the table
COMMENT ON TABLE badges IS 'Stores user achievement badges earned through app activities'; 