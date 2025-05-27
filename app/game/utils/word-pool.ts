// Word pool utility for Padhagala Raaja
// Contains a collection of Kannada words for the game

const KANNADA_WORDS = [
  // Common everyday words
  "ನಮಸ್ಕಾರ", // Namaskara - Hello
  "ಧನ್ಯವಾದ", // Dhanyavaada - Thank you
  "ಸ್ವಾಗತ", // Swagata - Welcome
  "ವಿದಾಯ", // Vidaaya - Goodbye
  "ಹೌದು", // Haudu - Yes
  "ಇಲ್ಲ", // Illa - No
  "ನೀರು", // Neeru - Water
  "ಅನ್ನ", // Anna - Rice/Food
  "ಮನೆ", // Mane - House
  "ಶಾಲೆ", // Shaale - School
  
  // Colors
  "ಕೆಂಪು", // Kempu - Red
  "ಹಸಿರು", // Hasiru - Green
  "ನೀಲಿ", // Neeli - Blue
  "ಹಳದಿ", // Haladi - Yellow
  "ಬಿಳಿ", // Bili - White
  "ಕಪ್ಪು", // Kappu - Black
  
  // Numbers
  "ಒಂದು", // Ondu - One
  "ಎರಡು", // Eradu - Two
  "ಮೂರು", // Mooru - Three
  "ನಾಲ್ಕು", // Naalku - Four
  "ಐದು", // Aidu - Five
  
  // Family
  "ಅಪ್ಪ", // Appa - Father
  "ಅಮ್ಮ", // Amma - Mother
  "ಅಣ್ಣ", // Anna - Elder brother
  "ತಂಗಿ", // Tangi - Younger sister
  "ಅಜ್ಜ", // Ajja - Grandfather
  "ಅಜ್ಜಿ", // Ajji - Grandmother
  
  // Nature
  "ಸೂರ್ಯ", // Soorya - Sun
  "ಚಂದ್ರ", // Chandra - Moon
  "ನಕ್ಷತ್ರ", // Nakshatra - Star
  "ಮರ", // Mara - Tree
  "ಹೂವು", // Hoovu - Flower
  "ಮಳೆ", // Male - Rain
  
  // Animals
  "ನಾಯಿ", // Naayi - Dog
  "ಬೆಕ್ಕು", // Bekku - Cat
  "ಹಸು", // Hasu - Cow
  "ಕುದುರೆ", // Kudure - Horse
  "ಹಕ್ಕಿ", // Hakki - Bird
  
  // Body parts
  "ಕೈ", // Kai - Hand
  "ಕಾಲು", // Kaalu - Leg
  "ತಲೆ", // Tale - Head
  "ಕಣ್ಣು", // Kannu - Eye
  "ಮೂಗು", // Moogu - Nose
  
  // Daily items
  "ಪುಸ್ತಕ", // Pustaka - Book
  "ಪೆನ್", // Pen - Pen
  "ಕುರ್ಚಿ", // Kurchi - Chair
  "ಮೇಜು", // Meju - Table
  "ಬಾಗಿಲು", // Baagilu - Door
  
  // Emotions
  "ಸಂತೋಷ", // Santosha - Happiness
  "ದುಃಖ", // Dukha - Sadness
  "ಪ್ರೀತಿ", // Preeti - Love
  "ಭಯ", // Bhaya - Fear
  "ಕೋಪ", // Kopa - Anger
];

/**
 * Get a random selection of Kannada words
 * @param count Number of words to return
 * @returns Array of randomly selected Kannada words
 */
export function getRandomCatchPhraseWords(count: number): string[] {
  // Create a copy of the array to avoid modifying the original
  const shuffled = [...KANNADA_WORDS];
  
  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  // Return the requested number of words
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Get all available words
 * @returns Array of all Kannada words
 */
export function getAllWords(): string[] {
  return [...KANNADA_WORDS];
}

/**
 * Get the total number of available words
 * @returns Number of words in the pool
 */
export function getWordCount(): number {
  return KANNADA_WORDS.length;
} 