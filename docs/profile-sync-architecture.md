# Profile Sync Architecture

This document explains how user profiles are synchronized between Clerk (authentication) and Supabase (database) in our application.

## Overview

Our application uses two mechanisms to ensure user profiles are always synced:

1. **Client-side Sync**: Triggered when users are actively using the application
2. **Webhook Sync**: Triggered when user events happen in Clerk (like sign-up or profile update)

This dual approach ensures that user profiles are always up-to-date, even if one of the mechanisms fails.

## Data Flow

```
┌─────────────┐           ┌─────────────┐          ┌─────────────┐
│             │           │             │          │             │
│    Clerk    │───────────▶  Webhooks   │──────────▶  Database   │
│  Auth & User│           │  API Route  │          │  (Supabase) │
│  Profiles   │◀──────────│             │◀─────────│             │
└─────────────┘           └─────────────┘          └─────────────┘
       ▲                                                  ▲
       │                                                  │
       │                                                  │
       │                                                  │
       │                                                  │
       ▼                                                  ▼
┌─────────────┐                                    ┌─────────────┐
│             │                                    │             │
│  ProfileSync│                                    │  Database   │
│  Component  │────────────────────────────────────▶  Functions  │
│             │                                    │             │
└─────────────┘                                    └─────────────┘
```

## Components

### 1. ProfileSync Component

Located at `components/profile-sync.tsx`, this client-side component:

- Loads automatically when a user is signed in
- Calls the `syncUserProfileAction` server action
- Runs once per session to update user data
- Provides a fallback for users who may not trigger the webhook

### 2. Clerk Webhook Handler

Located at `app/api/clerk-webhook/route.ts`, this server-side API route:

- Receives events from Clerk when users are created or updated
- Verifies the webhook signature using the Clerk webhook secret
- Processes user profile data from the event
- Calls the `syncUserProfileWithDataAction` server action

### 3. Profile Actions

Located at `actions/db/profiles-actions.ts`, these server actions:

- `syncUserProfileAction`: Gets the current user from the session and syncs their profile
- `syncUserProfileWithDataAction`: Takes explicit user data and syncs it to the database
- Both actions use the database function `sync_clerk_profile` to handle the actual sync

### 4. Database Function

Located in the migration file, the `sync_clerk_profile` function:

- Takes user details (ID, name, image, email)
- Creates a profile if it doesn't exist
- Updates the profile if it already exists
- Returns the profile ID

## Sync Triggers

| Trigger | Component | When It Happens |
|---------|-----------|----------------|
| Sign Up | Webhook | When a user creates an account |
| Sign In | ProfileSync Component | When a user signs in and uses the app |
| Profile Update in Clerk | Webhook | When a user updates their profile in Clerk |
| Admin Updates User | Webhook | When an admin updates a user in Clerk dashboard |

## Error Handling

1. **Webhook Failures**:
   - All errors are logged to the console
   - The webhook returns appropriate HTTP status codes
   - If the webhook fails, the client-side sync acts as a fallback

2. **Client-Side Sync Failures**:
   - Errors are caught and logged
   - The sync is attempted once per session
   - If it fails, the webhook sync ensures data is eventually consistent

## Security

1. **Webhook Verification**:
   - Each webhook request is verified using the Clerk webhook secret
   - Invalid signatures are rejected with a 400 error

2. **Server Actions**:
   - `syncUserProfileAction` verifies the user is authenticated
   - Both actions use prepared statements to prevent SQL injection

## Testing

To test the sync mechanisms:

1. **Client-Side Sync**:
   - Sign in to the application
   - Check the console for "Syncing user profile from client"
   - Verify the profile exists in the database

2. **Webhook Sync**:
   - Create a new user in Clerk or update an existing user
   - Check the application logs for webhook events
   - Verify the profile exists or is updated in the database

## Troubleshooting

Common issues and solutions:

1. **Profile not syncing**:
   - Check that `CLERK_WEBHOOK_SECRET` is set correctly
   - Verify webhook endpoint is configured in Clerk dashboard
   - Check for errors in the application logs

2. **Missing user data**:
   - Ensure the user has the necessary fields in Clerk (name, email, image)
   - Check that the database function is working correctly
   - Verify the profiles table structure matches the expected schema 