# Padhagala Raaja Game Integration

This directory contains the integrated Padhagala Raaja (ಪದಗಳ ರಾಜ) word learning game.

## Overview

Padhagala Raaja is a Kannada-inspired word learning game where players describe words to an AI, which tries to guess them. The game features:

- 60-second timed rounds
- Real-time voice interaction with AI
- Beautiful cultural styling with Kannada elements
- Multiple AI personalities to choose from
- Score tracking and best score persistence

## Setup Requirements

### Environment Variables

Add the following to your `.env.local` file:

```bash
# Game Configuration
NEXT_PUBLIC_API_BASE_URL="/api/game"  # Or external API URL if using separate backend
PIPECAT_CLOUD_API_KEY="your-pipecat-api-key"
AGENT_NAME="word-wrangler"
```

### Dependencies

The game requires these additional packages (already added to package.json):

- `@pipecat-ai/client-js` - Core Pipecat client
- `@pipecat-ai/client-react` - React hooks for Pipecat
- `@pipecat-ai/daily-transport` - Daily.co transport layer
- `@tabler/icons-react` - Icon library
- `js-confetti` - Confetti animations

### Backend Requirements

The game requires a Pipecat Cloud account and agent setup:

1. Sign up at [Pipecat Cloud](https://pipecat.daily.co)
2. Create a new agent named "word-wrangler"
3. Configure the agent with word guessing capabilities
4. Copy your API key to the environment variables

## Current Implementation Status

### ✅ Completed
- Navigation integration with main app
- Game page structure and routing
- Custom styling and animations
- Configuration context for AI personality
- API route for game connections
- Basic game UI components

### 🚧 Simplified/Stubbed
- `WordWrangler` component - Currently a simplified demo version
- Game mechanics - Requires full AI integration
- Real-time voice features - Needs Pipecat backend

### ❌ Not Implemented Yet
- Full game hooks (useGameState, useGameTimer, etc.)
- Word detection and scoring logic
- Voice interaction features
- Leaderboard integration

## File Structure

```
app/game/
├── README.md                    # This file
├── layout.tsx                   # Game layout with custom styling
├── page.tsx                     # Main game page
├── game.css                     # Game-specific styles
├── _components/
│   ├── card.tsx                # Card UI components
│   ├── configuration-context.tsx # AI personality settings
│   ├── game-constants.ts       # Game configuration and text
│   ├── rtvi-provider.tsx       # Real-time voice provider
│   ├── start-button.tsx        # Game start button
│   ├── word-wrangler.tsx       # Main game component (simplified)
│   └── hooks/
│       └── use-connection-state.ts # Connection management hook
└── api/
    └── game/
        └── connect/
            └── route.ts        # API endpoint for game connections
```

## Development Notes

1. The game uses a separate styling system from the main app to preserve its unique visual identity
2. All game-specific styles are prefixed with `game-` to avoid conflicts
3. The game container provides its own background and decorative elements
4. TypeScript errors for Pipecat packages are expected until they are installed

## Future Enhancements

1. **Full Game Implementation**: Complete the WordWrangler component with all game mechanics
2. **Leaderboard Integration**: Connect game scores to the main app's leaderboard
3. **Progress Tracking**: Award badges based on game performance
4. **Offline Mode**: Add practice mode without AI connection
5. **Multiple Languages**: Extend beyond Kannada to other languages 