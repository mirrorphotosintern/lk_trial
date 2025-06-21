/*
Contains types for survey data and form handling.
*/

// Survey step data interfaces
export interface SurveyStep1Data {
  goal:
    | "daily_conversation"
    | "heritage_language"
    | "school_curriculum"
    | "workplace_need"
    | "travel"
    | "other"
  goalOther?: string
  timeHorizon:
    | "less_than_1_month"
    | "1_to_3_months"
    | "3_to_6_months"
    | "6_months_plus"
  role: "myself" | "my_son" | "my_daughter" | "classroom_group"
  ageBand:
    | "4_to_6"
    | "7_to_9"
    | "10_to_12"
    | "13_to_17"
    | "18_to_34"
    | "35_to_54"
    | "55_plus"
}

export interface SurveyStep2Data {
  motherTongue: string
  readingLevel:
    | "none"
    | "few_vowels"
    | "most_vowels_consonants"
    | "comfortable_reader"
  exposure: "daily" | "weekly" | "rarely" | "never"
  formatQuickQuizzes: boolean
  formatStoryMode: boolean
  formatTraceLetter: boolean
  formatSpeakingPractice: boolean
  formatLeaderboard: boolean
  sessionLength: "5_min" | "10_min" | "15_min" | "20_min_plus"
}

export interface SurveyStep3Data {
  calendarOptIn: "yes_send_invite" | "no_thanks"
  calendarEmail?: string
  calendarTimeOfDay?: string
  notificationMobilePush: boolean
  notificationEmailDigest: boolean
  notificationWhatsapp: boolean
  notificationNone: boolean
  referralSource: "friend_family" | "instagram" | "youtube" | "school" | "other"
  referralOther?: string
  earlyTester: "yes_please" | "maybe_later"
}

// Combined survey data
export interface SurveyFormData
  extends SurveyStep1Data,
    SurveyStep2Data,
    SurveyStep3Data {}

// Survey step tracking
export interface SurveyProgress {
  currentStep: 1 | 2 | 3
  step1Completed: boolean
  step2Completed: boolean
  step3Completed: boolean
  isCompleted: boolean
}

// Common language options for mother tongue dropdown
export const COMMON_LANGUAGES = [
  { value: "english", label: "English" },
  { value: "hindi", label: "Hindi" },
  { value: "telugu", label: "Telugu" },
  { value: "tamil", label: "Tamil" },
  { value: "malayalam", label: "Malayalam" },
  { value: "marathi", label: "Marathi" },
  { value: "gujarati", label: "Gujarati" },
  { value: "bengali", label: "Bengali" },
  { value: "punjabi", label: "Punjabi" },
  { value: "urdu", label: "Urdu" },
  { value: "oriya", label: "Oriya" },
  { value: "assamese", label: "Assamese" },
  { value: "konkani", label: "Konkani" },
  { value: "tulu", label: "Tulu" },
  { value: "kodava", label: "Kodava" },
  { value: "other", label: "Other" }
] as const

// Time of day options for calendar reminders
export const TIME_OF_DAY_OPTIONS = [
  { value: "morning", label: "Morning (8-10 AM)" },
  { value: "afternoon", label: "Afternoon (2-4 PM)" },
  { value: "evening", label: "Evening (6-8 PM)" },
  { value: "night", label: "Night (8-10 PM)" }
] as const
