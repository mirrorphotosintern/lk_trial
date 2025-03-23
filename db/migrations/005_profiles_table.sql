-- Create a dedicated profiles table for user information
CREATE TABLE IF NOT EXISTS profiles (
  user_id TEXT PRIMARY KEY,
  display_name TEXT NOT NULL,
  profile_image_url TEXT,
  email TEXT,
  last_sign_in TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read profiles (useful for leaderboards)
CREATE POLICY "Profiles are viewable by everyone" ON profiles
    FOR SELECT
    USING (true);

-- Allow users to update their own profiles
CREATE POLICY "Users can update their own profiles" ON profiles
    FOR UPDATE
    USING (auth.uid()::text = user_id);

-- Only the owner and service role can insert/delete
CREATE POLICY "Users can only insert their own profiles" ON profiles
    FOR INSERT
    WITH CHECK (auth.uid()::text = user_id);

CREATE POLICY "Users can only delete their own profiles" ON profiles
    FOR DELETE
    USING (auth.uid()::text = user_id);

-- Enable realtime for the profiles table
ALTER PUBLICATION supabase_realtime ADD TABLE profiles;

-- Trigger function to keep updated_at current
CREATE OR REPLACE FUNCTION update_profiles_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_timestamp
BEFORE UPDATE ON profiles
FOR EACH ROW
EXECUTE FUNCTION update_profiles_updated_at();

-- Create a function to update or insert profile data from Clerk
CREATE OR REPLACE FUNCTION sync_clerk_profile(
  p_user_id TEXT,
  p_display_name TEXT,
  p_profile_image_url TEXT,
  p_email TEXT DEFAULT NULL
)
RETURNS VOID AS $$
BEGIN
  -- Insert or update the profile
  INSERT INTO profiles (
    user_id, 
    display_name, 
    profile_image_url, 
    email,
    last_sign_in
  ) 
  VALUES (
    p_user_id, 
    p_display_name, 
    p_profile_image_url, 
    p_email,
    NOW()
  )
  ON CONFLICT (user_id) 
  DO UPDATE SET 
    display_name = p_display_name,
    profile_image_url = p_profile_image_url,
    email = COALESCE(p_email, profiles.email),
    last_sign_in = NOW(),
    updated_at = NOW();
END;
$$ LANGUAGE plpgsql;

-- Create function that can process a full Clerk user JSON
CREATE OR REPLACE FUNCTION sync_clerk_profile_from_json(user_data JSONB)
RETURNS VOID AS $$
DECLARE
    v_user_id TEXT;
    v_display_name TEXT;
    v_profile_image_url TEXT;
    v_email TEXT;
    v_first_name TEXT;
    v_last_name TEXT;
BEGIN
    -- Extract user_id (required)
    v_user_id := user_data->>'id';
    IF v_user_id IS NULL THEN
        RAISE EXCEPTION 'User ID is required';
    END IF;
    
    -- Extract first and last name
    v_first_name := user_data->>'first_name';
    v_last_name := user_data->>'last_name';
    
    -- Get email from first email address
    IF user_data->'email_addresses' IS NOT NULL AND jsonb_array_length(user_data->'email_addresses') > 0 THEN
        v_email := user_data->'email_addresses'->0->>'email_address';
    END IF;
    
    -- Create display name from parts
    IF v_first_name IS NOT NULL AND v_last_name IS NOT NULL AND v_last_name != '' THEN
        v_display_name := v_first_name || ' ' || v_last_name;
    ELSIF v_first_name IS NOT NULL AND v_first_name != '' THEN
        v_display_name := v_first_name;
    ELSIF v_email IS NOT NULL THEN
        -- Extract username part of email
        v_display_name := split_part(v_email, '@', 1);
    ELSE
        v_display_name := 'User ' || substring(v_user_id, 1, 6);
    END IF;
    
    -- Get profile image URL (prefer profile_image_url first)
    v_profile_image_url := user_data->>'profile_image_url';
    IF v_profile_image_url IS NULL THEN
        v_profile_image_url := user_data->>'image_url';
    END IF;
    
    -- Call the sync function with extracted data
    PERFORM sync_clerk_profile(
        v_user_id,
        v_display_name,
        v_profile_image_url,
        v_email
    );
END;
$$ LANGUAGE plpgsql;

-- Create function to also update leaderboard with profile data
CREATE OR REPLACE FUNCTION sync_leaderboard_profiles()
RETURNS TRIGGER AS $$
BEGIN
    -- Update any matching leaderboard entries with the profile data
    UPDATE leaderboard
    SET
        display_name = NEW.display_name,
        profile_image_url = NEW.profile_image_url
    WHERE
        user_id = NEW.user_id;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to keep leaderboard profiles in sync with profiles table
CREATE TRIGGER sync_profiles_to_leaderboard
AFTER INSERT OR UPDATE ON profiles
FOR EACH ROW
EXECUTE FUNCTION sync_leaderboard_profiles();

-- Example usage - uncomment to test with sample data:
/*
SELECT sync_clerk_profile_from_json('{
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