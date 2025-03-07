/**
 * @description
 * This file defines the TypeScript interface for a single entry in the KannadaKali CSV dataset.
 * It represents a row of data used for content display and quiz games.
 *
 * Key features:
 * - Type Safety: Provides a strongly-typed structure for CSV data parsing and usage.
 * - Completeness: Includes all fields from the CSV as per the project specification.
 *
 * @dependencies
 * - None: This is a standalone type definition.
 *
 * @notes
 * - All fields are optional (nullable) to handle incomplete CSV rows gracefully.
 * - Fields like `icon`, `waudio`, `ksentence`, `esentence`, `kesentence`, `image`, and `saudio` are nullable per the spec.
 * - This interface will be used in server actions (e.g., `loadCsvAction`) and client components (e.g., `card-display.tsx`).
 */

export interface KannadaEntry {
    kannada?: string // The Kannada word (e.g., "ನಮಸ್ಕಾರ")
    english?: string // English translation (e.g., "Hello")
    category?: string // Category of the word (e.g., "Greetings")
    icon?: string | null // URL/path to the word’s icon image
    waudio?: string | null // URL/path to the word’s pronunciation audio
    kanglish?: string // Kanglish transliteration (e.g., "Namaskara")
    ksentence?: string | null // Example sentence in Kannada (e.g., "ನೀವು ಹೇಗಿದ್ದೀರಿ?")
    esentence?: string | null // English translation of the sentence (e.g., "How are you?")
    kesentence?: string | null // Kanglish transliteration of the sentence (e.g., "Neevu hegiddiri?")
    image?: string | null // URL/path to the sentence’s supporting image
    saudio?: string | null // URL/path to the sentence’s pronunciation audio
  }