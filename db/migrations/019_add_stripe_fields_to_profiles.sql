-- 019_add_stripe_fields_to_profiles.sql
-- Add Stripe-related fields to the profiles table

-- Create membership type if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'membership') THEN
        CREATE TYPE membership AS ENUM ('free', 'pro');
    END IF;
END$$;

-- Add Stripe-related fields to the profiles table
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT,
ADD COLUMN IF NOT EXISTS stripe_subscription_id TEXT,
ADD COLUMN IF NOT EXISTS membership membership NOT NULL DEFAULT 'free';

-- Create index on stripe_customer_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_profiles_stripe_customer_id ON profiles (stripe_customer_id)
WHERE stripe_customer_id IS NOT NULL;

-- First drop the existing function
DROP FUNCTION IF EXISTS sync_clerk_profile(text, text, text, text);

-- Update the function that syncs Clerk profiles to include these fields
CREATE OR REPLACE FUNCTION sync_clerk_profile(
  p_user_id TEXT,
  p_display_name TEXT,
  p_profile_image_url TEXT,
  p_email TEXT
)
RETURNS VOID AS $$
BEGIN
  INSERT INTO profiles (
    user_id,
    display_name,
    profile_image_url,
    email,
    last_sign_in,
    created_at,
    updated_at
  )
  VALUES (
    p_user_id,
    p_display_name,
    p_profile_image_url,
    p_email,
    NOW(),
    NOW(),
    NOW()
  )
  ON CONFLICT (user_id) 
  DO UPDATE SET
    display_name = p_display_name,
    profile_image_url = COALESCE(p_profile_image_url, profiles.profile_image_url),
    email = COALESCE(p_email, profiles.email),
    last_sign_in = NOW(),
    updated_at = NOW();
END;
$$ LANGUAGE plpgsql; 