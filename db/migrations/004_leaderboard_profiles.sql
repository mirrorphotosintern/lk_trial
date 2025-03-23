-- Add user profile information columns to leaderboard table
ALTER TABLE leaderboard 
ADD COLUMN IF NOT EXISTS display_name TEXT,
ADD COLUMN IF NOT EXISTS profile_image_url TEXT;

-- Create a function to fetch and update user profile information
CREATE OR REPLACE FUNCTION update_user_profiles()
RETURNS TRIGGER AS $$
BEGIN
    -- Update display_name and profile_image_url for users
    -- This is a placeholder function that will initially populate with generated values
    -- In a real implementation, you would query Clerk API or another source
    
    -- Set defaults if NULL
    IF NEW.display_name IS NULL THEN
        NEW.display_name := 'User ' || substring(NEW.user_id, 1, 6);
    END IF;
    
    IF NEW.profile_image_url IS NULL THEN
        NEW.profile_image_url := 'https://api.dicebear.com/7.x/initials/svg?seed=' || NEW.user_id;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update profile info before insert or update
DROP TRIGGER IF EXISTS before_leaderboard_upsert ON leaderboard;
CREATE TRIGGER before_leaderboard_upsert
BEFORE INSERT OR UPDATE ON leaderboard
FOR EACH ROW
EXECUTE FUNCTION update_user_profiles();

-- Update existing leaderboard entries with profile information
UPDATE leaderboard
SET 
    display_name = 'User ' || substring(user_id, 1, 6),
    profile_image_url = 'https://api.dicebear.com/7.x/initials/svg?seed=' || user_id
WHERE 
    display_name IS NULL OR profile_image_url IS NULL;

-- Create function to update profiles from Clerk (to be called via API or cron job)
CREATE OR REPLACE FUNCTION admin_update_user_profiles_from_api(user_data JSONB)
RETURNS VOID AS $$
DECLARE
    user_id TEXT;
    display_name TEXT;
    profile_url TEXT;
    first_name TEXT;
    last_name TEXT;
    email TEXT;
BEGIN
    -- Extract user_id (required)
    user_id := user_data->>'id';
    
    -- Extract first and last name
    first_name := user_data->>'first_name';
    last_name := user_data->>'last_name';
    
    -- Try to get email from first email address
    IF user_data->'email_addresses' IS NOT NULL AND jsonb_array_length(user_data->'email_addresses') > 0 THEN
        email := user_data->'email_addresses'->0->>'email_address';
    END IF;
    
    -- Determine display name with fallbacks
    IF first_name IS NOT NULL AND last_name IS NOT NULL AND last_name != '' THEN
        display_name := first_name || ' ' || last_name;
    ELSIF first_name IS NOT NULL AND first_name != '' THEN
        display_name := first_name;
    ELSIF email IS NOT NULL THEN
        -- Extract username part of email
        display_name := split_part(email, '@', 1);
    ELSE
        display_name := 'User ' || substring(user_id, 1, 6);
    END IF;
    
    -- Get profile image URL (prefer profile_image_url first)
    profile_url := user_data->>'profile_image_url';
    IF profile_url IS NULL THEN
        profile_url := user_data->>'image_url';
    END IF;
    
    -- Fallback to generated avatar if no image URL
    IF profile_url IS NULL THEN
        profile_url := 'https://api.dicebear.com/7.x/initials/svg?seed=' || user_id;
    END IF;
    
    -- Update the leaderboard entry if user exists
    IF user_id IS NOT NULL THEN
        UPDATE leaderboard
        SET 
            display_name = display_name,
            profile_image_url = profile_url
        WHERE 
            user_id = user_id;
            
        -- If no row was updated (user might not have taken any quizzes yet),
        -- create a placeholder entry
        IF NOT FOUND THEN
            -- Don't insert a placeholder - wait until they take a quiz
            NULL;
        END IF;
    END IF;
END;
$$ LANGUAGE plpgsql;

-- Example of using the function with the provided Clerk user JSON:
-- Uncomment and customize this if you want to run it immediately
/*
SELECT admin_update_user_profiles_from_api('{
  "id": "user_2uhmRlknXSVD8ihv2PXN0X9YEEp",
  "object": "user",
  "username": null,
  "first_name": "Anthahkarana",
  "last_name": null,
  "image_url": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ydWhtUnFqVDBNc3FFMGg2NkpqSGp0VDRDTXYifQ",
  "profile_image_url": "https://images.clerk.dev/oauth_google/img_2uhmRqjT0MsqE0h66JjHjtT4CMv",
  "email_addresses": [
    {
      "email_address": "forcloud787@gmail.com"
    }
  ]
}'::jsonb);
*/ 