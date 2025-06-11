/**
 * @description
 * This file defines the schema for the 'survey_responses' table in the KannadaKali app.
 * It stores survey responses collected during user onboarding.
 *
 * Key features:
 * - Onboarding Survey: Captures user preferences and goals for personalized experience
 * - Learning Profile: Stores learner demographics and background
 * - Preferences: Records preferred learning styles and commitment level
 * - Referral Tracking: Tracks how users discovered the app
 *
 * @dependencies
 * - drizzle-orm/pg-core: Provides PostgreSQL schema definition utilities.
 */

import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid
} from "drizzle-orm/pg-core"

// Define enums for survey options
export const goalEnum = pgEnum("goal", [
  "daily_conversation",
  "heritage_language",
  "school_curriculum",
  "workplace_need",
  "travel",
  "other"
])

export const timeHorizonEnum = pgEnum("time_horizon", [
  "less_than_1_month",
  "1_to_3_months",
  "3_to_6_months",
  "6_months_plus"
])

export const roleEnum = pgEnum("role", [
  "myself",
  "my_son",
  "my_daughter",
  "classroom_group"
])

export const ageBandEnum = pgEnum("age_band", [
  "4_to_6",
  "7_to_9",
  "10_to_12",
  "13_to_17",
  "18_to_34",
  "35_to_54",
  "55_plus"
])

export const readingLevelEnum = pgEnum("reading_level", [
  "none",
  "few_vowels",
  "most_vowels_consonants",
  "comfortable_reader"
])

export const exposureEnum = pgEnum("exposure", [
  "daily",
  "weekly",
  "rarely",
  "never"
])

export const sessionLengthEnum = pgEnum("session_length", [
  "5_min",
  "10_min",
  "15_min",
  "20_min_plus"
])

export const calendarOptInEnum = pgEnum("calendar_opt_in", [
  "yes_send_invite",
  "no_thanks"
])

export const referralSourceEnum = pgEnum("referral_source", [
  "friend_family",
  "instagram",
  "youtube",
  "school",
  "other"
])

export const earlyTesterEnum = pgEnum("early_tester", [
  "yes_please",
  "maybe_later"
])

export const surveyResponsesTable = pgTable("survey_responses", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),

  // A. Motivation & Goals
  goal: goalEnum("goal"),
  goalOther: text("goal_other"), // For "other" option
  timeHorizon: timeHorizonEnum("time_horizon"),

  // B. Learner Profile
  role: roleEnum("role"),
  ageBand: ageBandEnum("age_band"),
  motherTongue: text("mother_tongue"), // Dropdown selection

  // C. Prior Knowledge
  readingLevel: readingLevelEnum("reading_level"),
  exposure: exposureEnum("exposure"),

  // D. Learning Preferences
  formatQuickQuizzes: boolean("format_quick_quizzes").default(false),
  formatStoryMode: boolean("format_story_mode").default(false),
  formatTraceLetter: boolean("format_trace_letter").default(false),
  formatSpeakingPractice: boolean("format_speaking_practice").default(false),
  formatLeaderboard: boolean("format_leaderboard").default(false),
  sessionLength: sessionLengthEnum("session_length"),

  // E. Commitment & Reminders
  calendarOptIn: calendarOptInEnum("calendar_opt_in"),
  calendarEmail: text("calendar_email"), // For calendar invite
  calendarTimeOfDay: text("calendar_time_of_day"), // Preferred time
  notificationMobilePush: boolean("notification_mobile_push").default(false),
  notificationEmailDigest: boolean("notification_email_digest").default(false),
  notificationWhatsapp: boolean("notification_whatsapp").default(false),
  notificationNone: boolean("notification_none").default(false),

  // H. Community & Feedback
  referralSource: referralSourceEnum("referral_source"),
  referralOther: text("referral_other"), // For "other" referral
  earlyTester: earlyTesterEnum("early_tester"),

  // Survey completion tracking
  step1Completed: boolean("step1_completed").default(false),
  step2Completed: boolean("step2_completed").default(false),
  step3Completed: boolean("step3_completed").default(false),
  isCompleted: boolean("is_completed").default(false),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
})

export type InsertSurveyResponse = typeof surveyResponsesTable.$inferInsert
export type SelectSurveyResponse = typeof surveyResponsesTable.$inferSelect
