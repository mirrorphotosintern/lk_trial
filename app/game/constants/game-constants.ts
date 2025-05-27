// Game configuration constants for Padhagala Raaja
// Contains all game settings, states, and cultural text content for the Kannada-inspired word learning experience

// Game configuration
export const GAME_CONFIG = {
  MAX_SKIPS: 3,
  GAME_DURATION: 60, // seconds
  WORD_POOL_SIZE: 30,
  ANIMATION_DURATION: 1000, // ms
  TIMER_INTERVAL: 1000, // ms
  LOW_TIME_WARNING: 10, // seconds
};

// Game states
export const GAME_STATES = {
  IDLE: "idle",
  CONNECTING: "connecting",
  WAITING_FOR_INTRO: "waitingForIntro",
  ACTIVE: "active",
  FINISHED: "finished",
} as const;

export type GameState = (typeof GAME_STATES)[keyof typeof GAME_STATES];

// Cultural text used in the Padhagala Raaja experience
export const GAME_TEXT = {
  time: "ಸಮಯ Time",
  score: "ಅಂಕ Score", 
  gameOver: "ಆಟ ಮುಗಿದಿತು! Game Over!",
  finalScore: "ಅಂತಿಮ ಅಂಕ Final Score",
  correct: "ಸರಿ ಮಾಡಿ Mark Correct",
  skip: "ಬಿಟ್ಟು ಹೋಗಿ Skip →",
  noSkips: "No Skips Left",
  skipsRemaining: (num: number) => `Skip (${num} left)`,
  startingGame: `How many words can you master in ${GAME_CONFIG.GAME_DURATION} seconds, Padhagala Raaja?`,
  waitingForIntro: "ತಯಾರಾಗುತ್ತಿದೆ Getting ready...",
  clickToStart: "Press ಪ್ರಾರಂಭ Start Game to begin your word mastery journey",
  describeWord: "ಈ ಪದವನ್ನು ವಿವರಿಸಿ Describe this word:",
  introTitle: "ಪದಗಳ ರಾಜನಾಗಿ! Become the Master of Words in 60 seconds!",
  introGuide1: "🏆 Earn points each time AI correctly guesses your word description",
  introGuide2: "⚠️ Don't say the word directly, or you'll lose precious points",
  introGuide3: "⏭️ Skip words you don't know to keep the momentum going",
  aiPersonality: "AI ಸ್ವಭಾವ Personality",
  finalScoreMessage: "Your best ಅತ್ಯುತ್ತಮ score:",
};

// Pattern for detecting guesses in transcripts
export const TRANSCRIPT_PATTERNS = {
  // Match both "Is it "word"?" and "Is it a/an word?" patterns
  GUESS_PATTERN:
    /is it [""]?([^""?]+)[""]?(?:\?)?|is it (?:a|an) ([^?]+)(?:\?)?/i,
};

// Connection states
export const CONNECTION_STATES = {
  ACTIVE: ["connected", "ready"],
  CONNECTING: ["connecting", "initializing", "initialized", "authenticating"],
  DISCONNECTING: ["disconnecting"],
};

// Button text with cultural touch
export const BUTTON_TEXT = {
  START: "ಪ್ರಾರಂಭ Start Game",
  END: "ಅಂತ್ಯ End Game", 
  CONNECTING: "ಸಂಪರ್ಕಿಸುತ್ತಿದೆ Connecting...",
  STARTING: "ಪ್ರಾರಂಭಿಸುತ್ತಿದೆ Starting...",
  RESTART: "ಮತ್ತೆ ಆಡಿ Play Again",
};
