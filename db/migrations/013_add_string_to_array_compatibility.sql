-- 013_add_string_to_array_compatibility.sql
-- This migration adds compatibility functions to handle string-to-array conversion

-- ======================
-- CREATE COMPATIBILITY FUNCTIONS
-- ======================

-- Function to safely get user profiles with automatic string-to-array conversion
CREATE OR REPLACE FUNCTION get_user_profiles_compat(
  p_user_ids TEXT
)
RETURNS TABLE (
  id UUID,
  user_id TEXT,
  display_name TEXT,
  profile_image_url TEXT,
  email TEXT,
  last_sign_in TIMESTAMPTZ,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
) AS $$
BEGIN
  -- Cast string to array with a single element
  RETURN QUERY SELECT * FROM get_user_profiles(ARRAY[p_user_ids]);
END;
$$ LANGUAGE plpgsql;

-- Create direct SQL approach for getting multiple user profiles
CREATE OR REPLACE FUNCTION get_profiles_by_ids(
  user_ids TEXT
)
RETURNS SETOF profiles AS $$
BEGIN
  -- Just use a direct query that handles single string or array
  RETURN QUERY
  SELECT *
  FROM profiles
  WHERE
    -- Handle both cases:
    -- 1. Direct string match (single user ID)
    -- 2. Array match (if user_ids happens to be a valid array string)
    user_id = user_ids
    OR
    (
      user_ids LIKE '{%}' AND
      user_id = ANY(string_to_array(trim(BOTH '{}' FROM user_ids), ','))
    );
END;
$$ LANGUAGE plpgsql;

-- ======================
-- IDENTIFY SCHEMA INCOMPATIBILITY
-- ======================

-- Create a trace function that can be useful for debugging parameter type issues
CREATE OR REPLACE FUNCTION trace_parameter_type(
  param ANYELEMENT
)
RETURNS TEXT AS $$
BEGIN
  RETURN pg_typeof(param)::TEXT;
END;
$$ LANGUAGE plpgsql;

-- ======================
-- USER PROFILES FUNCTIONS WITH SAFER IMPLEMENTATION
-- ======================

-- Drop the existing profiles function if it exists (this might be the problematic one)
DROP FUNCTION IF EXISTS get_profile_by_user_id(text);
DROP FUNCTION IF EXISTS get_user_profiles(text);

-- Create a safer version that doesn't use array expectations
CREATE OR REPLACE FUNCTION get_profile_by_user_id(
  p_user_id TEXT
)
RETURNS SETOF profiles AS $$
BEGIN
  RETURN QUERY
  SELECT * FROM profiles WHERE user_id = p_user_id;
END;
$$ LANGUAGE plpgsql;

-- Replace function with the most defensive implementation possible
CREATE OR REPLACE FUNCTION get_profiles_robust(
  param TEXT
)
RETURNS SETOF profiles AS $$
DECLARE
  is_array BOOLEAN;
BEGIN
  -- Try to determine if parameter looks like an array
  BEGIN
    is_array := (param LIKE '{%}');
  EXCEPTION WHEN OTHERS THEN
    is_array := FALSE;
  END;
  
  -- Handle based on what we think the parameter is
  IF is_array THEN
    -- Looks like an array, try to parse it
    BEGIN
      RETURN QUERY 
      SELECT * FROM profiles 
      WHERE user_id = ANY(string_to_array(trim(BOTH '{}' FROM param), ','));
    EXCEPTION WHEN OTHERS THEN
      -- Fallback to exact match if parsing fails
      RETURN QUERY SELECT * FROM profiles WHERE user_id = param;
    END;
  ELSE
    -- Just do direct match for single ID
    RETURN QUERY SELECT * FROM profiles WHERE user_id = param;
  END IF;
END;
$$ LANGUAGE plpgsql; 