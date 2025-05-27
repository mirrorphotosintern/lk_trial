The content has been processed where comments have been removed, line numbers have been added.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Code comments have been removed from supported file types
- Line numbers have been added to the beginning of each line
- Files are sorted by Git change count (files with more changes are at the bottom)

## Additional Info

# Directory Structure
```
.env.example
.eslintrc.json
.gitignore
.husky/pre-commit
actions/auth/sync-clerk-user.ts
actions/badge-evaluation-actions.ts
actions/badges-actions.ts
actions/csv-actions.ts
actions/db/badges-actions.ts
actions/db/leaderboard-actions.ts
actions/db/profiles-actions.ts
actions/db/progress-actions.ts
actions/db/quiz-results-actions.ts
actions/db/seed-test-data.ts
actions/db/seed-word-stats-action.ts
actions/db/word-stats-actions.ts
actions/icon-actions.ts
actions/storage-actions.ts
actions/stripe-actions.ts
app/_components/leaderboard-container.tsx
app/(auth)/layout.tsx
app/(auth)/login/[[...login]]/page.tsx
app/(auth)/signup/[[...signup]]/page.tsx
app/(dashboard)/_components/leaderboard-container.tsx
app/admin/_components/admin-icons.tsx
app/admin/page.tsx
app/admin/profiles/page.tsx
app/api/clerk-webhook/route.ts
app/api/connect/route.ts
app/api/icons/route.ts
app/api/stripe/webhooks/route.ts
app/api/sync-profiles/route.ts
app/badges/_components/badge-detail.tsx
app/badges/_components/badge-grid.tsx
app/badges/_components/badge-item.tsx
app/badges/_components/badge-sync.tsx
app/badges/layout.tsx
app/badges/page.tsx
app/cards/_components/card-client-wrapper.tsx
app/cards/_components/card-grid.tsx
app/cards/_components/cards-fetcher.tsx
app/cards/page.tsx
app/game/_components/card.tsx
app/game/_components/Game/game-content.tsx
app/game/_components/Game/game-word.tsx
app/game/_components/Game/ScoreRow/index.tsx
app/game/_components/Game/ScoreRow/ScoreRow.module.css
app/game/_components/Game/timer.tsx
app/game/_components/Game/word-wrangler.module.css
app/game/_components/Game/word-wrangler.tsx
app/game/_components/StartButton/index.tsx
app/game/constants/game-constants.ts
app/game/contexts/configuration.tsx
app/game/data/word-wrangler-words.ts
app/game/game.css
app/game/hooks/use-connection-state.ts
app/game/hooks/use-game-state.ts
app/game/hooks/use-game-timer.ts
app/game/hooks/use-visual-feedback.ts
app/game/hooks/use-word-detection.ts
app/game/layout.tsx
app/game/page.tsx
app/game/providers/RTVIProvider.tsx
app/game/README.md
app/game/styles/HomeStyles.ts
app/game/types/personality.ts
app/game/utils/format-time.ts
app/game/utils/timer-utils.ts
app/game/utils/word-detection.ts
app/game/utils/word-pool.ts
app/globals.css
app/landing/hero.tsx
app/landing/page.tsx
app/layout.tsx
app/learn/[letterId]/_components/letter-trace-wrapper.tsx
app/learn/[letterId]/page.tsx
app/learn/layout.tsx
app/learn/page.tsx
app/page.tsx
app/parental/_components/parental-dashboard.tsx
app/parental/_components/seed-button.tsx
app/parental/page.tsx
app/quiz/_components/quiz-fetcher.tsx
app/quiz/_components/quiz-setup.tsx
app/quiz/page.tsx
components.json
components/landing/footer.tsx
components/landing/header.tsx
components/landing/hero.tsx
components/landing/leaderboard.tsx
components/leaderboard.tsx
components/learn/letter-trace.tsx
components/magicui/animated-gradient-text.tsx
components/magicui/hero-video-dialog.tsx
components/profile-sync.tsx
components/ui/accordion.tsx
components/ui/alert-dialog.tsx
components/ui/alert.tsx
components/ui/aspect-ratio.tsx
components/ui/avatar.tsx
components/ui/badge.tsx
components/ui/breadcrumb.tsx
components/ui/button.tsx
components/ui/calendar.tsx
components/ui/card-display.tsx
components/ui/card.tsx
components/ui/carousel.tsx
components/ui/category-filter.tsx
components/ui/chart.tsx
components/ui/checkbox.tsx
components/ui/collapsible.tsx
components/ui/command.tsx
components/ui/context-menu.tsx
components/ui/dialog.tsx
components/ui/drawer.tsx
components/ui/dropdown-menu.tsx
components/ui/form.tsx
components/ui/header-with-motion.tsx
components/ui/hover-card.tsx
components/ui/input-otp.tsx
components/ui/input.tsx
components/ui/label.tsx
components/ui/leaderboard-section.tsx
components/ui/letter-select.tsx
components/ui/menubar.tsx
components/ui/navigation-menu.tsx
components/ui/pagination.tsx
components/ui/popover.tsx
components/ui/progress.tsx
components/ui/quiz-component.tsx
components/ui/radio-group.tsx
components/ui/resizable.tsx
components/ui/scroll-area.tsx
components/ui/select.tsx
components/ui/separator.tsx
components/ui/sheet.tsx
components/ui/sidebar.tsx
components/ui/skeleton.tsx
components/ui/slider.tsx
components/ui/sonner.tsx
components/ui/switch.tsx
components/ui/table.tsx
components/ui/tabs.tsx
components/ui/textarea.tsx
components/ui/theme-toggle.tsx
components/ui/toast.tsx
components/ui/toaster.tsx
components/ui/toggle-group.tsx
components/ui/toggle.tsx
components/ui/tooltip.tsx
components/ui/use-toast.ts
components/utilities/providers.tsx
components/utilities/tailwind-indicator.tsx
components/utilities/theme-switcher.tsx
db/db.ts
db/migrations/001_complete_setup.sql
db/migrations/002_leaderboard_setup.sql
db/migrations/003_leaderboard_trigger.sql
db/migrations/003_profiles_sync.sql
db/migrations/004_leaderboard_profiles.sql
db/migrations/005_profiles_table.sql
db/migrations/006_full_database_setup.sql
db/migrations/006_profile_leaderboard_setup.sql
db/migrations/007_fix_realtime_and_functions.sql
db/migrations/008_fix_publication_membership.sql
db/migrations/009_fix_quiz_results_null_constraints.sql
db/migrations/010_fix_word_stats_foreign_key.sql
db/migrations/011_fix_function_parameter_names.sql
db/migrations/012_fix_array_parameter_handling.sql
db/migrations/013_add_string_to_array_compatibility.sql
db/migrations/014_enhanced_leaderboard_function.sql
db/migrations/015_fix_leaderboard_functions.sql
db/migrations/016_fix_ambiguous_column.sql
db/migrations/017_fix_profile_dependency.sql
db/migrations/018_update_profile_trigger.sql
db/migrations/019_add_stripe_fields_to_profiles.sql
db/migrations/020_fix_sync_profile_function.sql
db/migrations/021_fix_sync_function_null_handling.sql
db/migrations/022.sql
db/migrations/ENV_SETUP_GUIDE.md
db/migrations/README.md
db/migrations/TROUBLESHOOTING.md
db/schema/badges-schema.ts
db/schema/index.ts
db/schema/leaderboard-schema.ts
db/schema/profiles-schema.ts
db/schema/progress-schema.ts
db/schema/quiz-results-schema.ts
db/schema/word-stats-schema.ts
db/SUPABASE_SETUP.md
docs/clerk-webhook-setup.md
docs/profile-sync-architecture.md
drizzle.config.ts
lib/csv-parser.ts
lib/hooks/use-copy-to-clipboard.tsx
lib/hooks/use-mobile.tsx
lib/hooks/use-toast.ts
lib/letters.ts
lib/stripe.ts
lib/supabase.ts
lib/utils.ts
lib/utils/badge-utils.ts
LICENSE
middleware.ts
next.config.mjs
package.json
postcss.config.mjs
prettier.config.cjs
public/data/badges-logic.csv
public/data/kannada-kali-updated-redacted.csv
public/data/kannada-kali-updated.csv
public/letters_paths/01_ಅ.svg
public/letters_paths/02_ಆ.svg
public/letters_paths/03_ಇ.svg
public/letters_paths/04_ಈ.svg
public/letters_paths/05_ಉ.svg
public/letters_paths/06_ಊ_OLD.svg
public/letters_paths/06_ಊ.svg
public/letters_paths/07_ಋ.svg
public/letters_paths/08_ಎ.svg
public/letters_paths/09_ಏ.svg
public/letters_paths/10_ಐ.svg
public/letters_paths/11_ಒ.svg
public/letters_paths/12_ಓ.svg
public/letters_paths/13_ಔ.svg
public/letters_paths/14_ಅಂ.svg
public/letters_paths/15_ಅಃ.svg
public/letters_paths/16_ಕ.svg
public/letters_paths/17_ಖ.svg
public/letters_paths/18_ಗ.svg
public/letters_paths/19_ಘ.svg
public/letters_paths/20_ಙ.svg
public/letters_paths/21_ಚ.svg
public/letters_paths/22_ಛ.svg
public/letters_paths/23_ಜ.svg
public/letters_paths/24_ಝ.svg
public/letters_paths/25_ಞ.svg
public/letters_paths/26_ಟ.svg
public/letters_paths/27_ಠ.svg
public/letters_paths/28_ಡ.svg
public/letters_paths/29_ಢ.svg
public/letters_paths/30_ಣ.svg
public/letters_paths/31_ತ.svg
public/letters_paths/32_ಥ.svg
public/letters_paths/33_ದ.svg
public/letters_paths/34_ಧ.svg
public/letters_paths/35_ನ.svg
public/letters_paths/36_ಪ.svg
public/letters_paths/37_ಫ.svg
public/letters_paths/38_ಬ.svg
public/letters_paths/39_ಭ.svg
public/letters_paths/40_ಮ.svg
public/letters_paths/41_ಯ.svg
public/letters_paths/42_ರ.svg
public/letters_paths/43_ಲ.svg
public/letters_paths/44_ವ.svg
public/letters_paths/45_ಶ.svg
public/letters_paths/46_ಷ.svg
public/letters_paths/47_ಸ.svg
public/letters_paths/48_ಹ.svg
public/letters_paths/49_ಳ.svg
public/letters_paths/50_ಕ್ಷ.svg
public/letters/01_ಅ.svg
public/letters/02_ಆ.svg
public/letters/03_ಇ.svg
public/letters/04_ಈ.svg
public/letters/05_ಉ.svg
public/letters/06_ಊ_OLD.svg
public/letters/06_ಊ.svg
public/letters/07_ಋ.svg
public/letters/08_ಎ.svg
public/letters/09_ಏ.svg
public/letters/10_ಐ.svg
public/letters/11_ಒ.svg
public/letters/12_ಓ.svg
public/letters/13_ಔ.svg
public/letters/14_ಅಂ.svg
public/letters/15_ಅಃ.svg
public/letters/16_ಕ.svg
public/letters/17_ಖ.svg
public/letters/18_ಗ.svg
public/letters/19_ಘ.svg
public/letters/20_ಙ.svg
public/letters/21_ಚ.svg
public/letters/22_ಛ.svg
public/letters/23_ಜ.svg
public/letters/24_ಝ.svg
public/letters/25_ಞ.svg
public/letters/26_ಟ.svg
public/letters/27_ಠ.svg
public/letters/28_ಡ.svg
public/letters/29_ಢ.svg
public/letters/30_ಣ.svg
public/letters/31_ತ.svg
public/letters/32_ಥ.svg
public/letters/33_ದ.svg
public/letters/34_ಧ.svg
public/letters/35_ನ.svg
public/letters/36_ಪ.svg
public/letters/37_ಫ.svg
public/letters/38_ಬ.svg
public/letters/39_ಭ.svg
public/letters/40_ಮ.svg
public/letters/41_ಯ.svg
public/letters/42_ರ.svg
public/letters/43_ಲ.svg
public/letters/44_ವ.svg
public/letters/45_ಶ.svg
public/letters/46_ಷ.svg
public/letters/47_ಸ.svg
public/letters/48_ಹ.svg
public/letters/49_ಳ.svg
public/letters/50_ಕ್ಷ.svg
public/sounds/correct.mp3
public/sounds/finish.mp3
public/sounds/incorrect.mp3
public/sounds/tick.mp3
README.md
scripts/pathify-all.js
tailwind.config.ts
tsconfig.json
types/index.ts
types/kannada-types.ts
types/progress-types.ts
types/server-action-types.ts
```

# Files

## File: .env.example
````
 1: # DB
 2: DATABASE_URL=
 3: 
 4: # Supabase
 5: NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-url.supabase.co
 6: SUPABASE_URL=
 7: SUPABASE_SERVICE_ROLE_KEY=
 8: SUPABASE_BUCKET_RECEIPTS=
 9: 
10: # Auth
11: NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
12: CLERK_SECRET_KEY=
13: CLERK_WEBHOOK_SECRET=whsec_Ww5K8qLJz3V7v7OPbQRmretbZcH5vyBe
14: NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
15: NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
16: 
17: # Payments
18: STRIPE_SECRET_KEY=
19: STRIPE_WEBHOOK_SECRET=
20: NEXT_PUBLIC_STRIPE_PAYMENT_LINK_YEARLY=
21: NEXT_PUBLIC_STRIPE_PAYMENT_LINK_MONTHLY=
22: 
23: # AI
24: OPENAI_API_KEY=
````

## File: .eslintrc.json
````json
 1: /*
 2: Contains the ESLint configuration for the app.
 3: */
 4: 
 5: {
 6:   "$schema": "https://json.schemastore.org/eslintrc",
 7:   "root": true,
 8:   "extends": [
 9:     "next/core-web-vitals",
10:     "prettier",
11:     "plugin:tailwindcss/recommended"
12:   ],
13:   "plugins": ["tailwindcss"],
14:   "rules": {
15:     "@next/next/no-img-element": "off",
16:     "jsx-a11y/alt-text": "off",
17:     "react-hooks/exhaustive-deps": "off",
18:     "tailwindcss/enforces-negative-arbitrary-values": "off",
19:     "tailwindcss/no-contradicting-classname": "off",
20:     "tailwindcss/no-custom-classname": "off",
21:     "tailwindcss/no-unnecessary-arbitrary-value": "off",
22:     "react/no-unescaped-entities": "off"
23:   },
24:   "settings": {
25:     "tailwindcss": { "callees": ["cn", "cva"], "config": "tailwind.config.js" }
26:   },
27:   "overrides": [
28:     { "files": ["*.ts", "*.tsx"], "parser": "@typescript-eslint/parser" }
29:   ]
30: }
````

## File: .gitignore
````
 1: # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
 2: 
 3: # dependencies
 4: /node_modules
 5: /.pnp
 6: .pnp.js
 7: .yarn/install-state.gz
 8: 
 9: # testing
10: /coverage
11: 
12: # next.js
13: /.next/
14: /out/
15: 
16: # production
17: /build
18: 
19: # misc
20: .DS_Store
21: *.pem
22: 
23: # debug
24: npm-debug.log*
25: yarn-debug.log*
26: yarn-error.log*
27: 
28: # local env files
29: .env*.local
30: 
31: # vercel
32: .vercel
33: 
34: # typescript
35: *.tsbuildinfo
36: next-env.d.ts
37: 
38: # clerk configuration (can include secrets)
39: /.clerk/
40: 
41: # IDE and editor files
42: .idea/
43: .vscode/
44: *.swp
45: *.swo
46: .cursor/
47: .cursorrules
48: 
49: # Repomix files
50: repomix.config.json
51: repomix-output.txt
52: custom-output.md
53: .repo_ignore
54: 
55: # Terminal and system files
56: terminal
57: Thumbs.db
````

## File: .husky/pre-commit
````
1: #!/usr/bin/env sh
2: 
3: . "$(dirname -- "$0")/_/husky.sh"
4: 
5: npm run lint:fix && npm run format:write && git add .
````

## File: actions/auth/sync-clerk-user.ts
````typescript
 1: "use server"
 2: 
 3: import { auth, currentUser } from "@clerk/nextjs/server"
 4: import { syncUserProfileWithDataAction } from "@/actions/db/profiles-actions"
 5: import { ActionState } from "@/types"
 6: 
 7: 
 8: 
 9: 
10: 
11: export async function syncCurrentUserProfileAction(): Promise<ActionState<void>> {
12:   try {
13: 
14:     const session = await auth()
15:     if (!session.userId) {
16:       return {
17:         isSuccess: false,
18:         message: "Unauthorized"
19:       }
20:     }
21: 
22: 
23:     const user = await currentUser()
24:     if (!user) {
25:       return {
26:         isSuccess: false,
27:         message: "User not found"
28:       }
29:     }
30: 
31: 
32:     const userId = user.id
33: 
34: 
35:     let displayName: string
36:     if (user.firstName && user.lastName) {
37:       displayName = `${user.firstName} ${user.lastName}`.trim()
38:     } else if (user.firstName) {
39:       displayName = user.firstName
40:     } else if (user.emailAddresses && user.emailAddresses.length > 0) {
41:       displayName = user.emailAddresses[0].emailAddress.split('@')[0]
42:     } else {
43:       displayName = `User ${userId.substring(0, 6)}`
44:     }
45: 
46: 
47:     const profileImageUrl = user.imageUrl
48:     const email = user.emailAddresses.length > 0 ? user.emailAddresses[0].emailAddress : undefined
49: 
50: 
51:     const result = await syncUserProfileWithDataAction({
52:       userId,
53:       displayName,
54:       profileImageUrl: profileImageUrl || `https://api.dicebear.com/7.x/initials/svg?seed=${userId}`,
55:       email
56:     })
57: 
58:     return {
59:       isSuccess: result.isSuccess,
60:       message: result.message,
61:       data: undefined
62:     }
63: 
64:   } catch (error) {
65:     console.error("Error syncing user profile:", error)
66:     return {
67:       isSuccess: false,
68:       message: "Failed to sync user profile"
69:     }
70:   }
71: }
````

## File: actions/badge-evaluation-actions.ts
````typescript
  1: "use server"
  2: 
  3: import { auth } from "@clerk/nextjs/server"
  4: import { db } from "@/db/db"
  5: import { wordStatsTable } from "@/db/schema"
  6: import { quizResultsTable } from "@/db/schema"
  7: import { InsertBadge, SelectBadge } from "@/db/schema"
  8: import { BadgeDefinition } from "@/lib/utils/badge-utils"
  9: import { count, eq, and, gt, gte, lte, sql, desc } from "drizzle-orm"
 10: import { getBadgeDefinitionsAction } from "./badges-actions"
 11: import { getUserBadgesAction, upsertBadgeAction } from "./db/badges-actions"
 12: import { ActionState } from "@/types"
 13: 
 14: 
 15: 
 16: 
 17: 
 18: export async function evaluateUserBadgesAction(): Promise<ActionState<SelectBadge[]>> {
 19:   try {
 20: 
 21:     const { userId } = await auth()
 22:     if (!userId) {
 23:       return {
 24:         isSuccess: false,
 25:         message: "No authenticated user found"
 26:       }
 27:     }
 28: 
 29: 
 30:     const badgeDefinitions = await getBadgeDefinitionsAction()
 31: 
 32: 
 33:     const existingBadgesResult = await getUserBadgesAction(userId)
 34:     const existingBadges = existingBadgesResult.isSuccess ? existingBadgesResult.data : []
 35: 
 36: 
 37:     const userBadgesMap = new Map(
 38:       existingBadges.map(badge => [badge.badgeId, badge])
 39:     )
 40: 
 41: 
 42:     const results: SelectBadge[] = []
 43: 
 44:     for (const definition of badgeDefinitions) {
 45:       const evaluationResult = await evaluateSingleBadge(userId, definition, userBadgesMap.get(definition.badgeId))
 46: 
 47:       if (evaluationResult.isSuccess && evaluationResult.data) {
 48:         results.push(evaluationResult.data)
 49:       }
 50:     }
 51: 
 52:     return {
 53:       isSuccess: true,
 54:       message: `Badge evaluation completed successfully. ${results.length} badges updated.`,
 55:       data: results
 56:     }
 57:   } catch (error) {
 58:     console.error("Error evaluating badges:", error)
 59:     return {
 60:       isSuccess: false,
 61:       message: "Failed to evaluate badges"
 62:     }
 63:   }
 64: }
 65: 
 66: 
 67: 
 68: 
 69: async function evaluateSingleBadge(
 70:   userId: string,
 71:   definition: BadgeDefinition,
 72:   existingBadge?: SelectBadge
 73: ): Promise<ActionState<SelectBadge | undefined>> {
 74:   try {
 75: 
 76:     let isEligible = false
 77:     let progress = 0
 78:     let currentLevel = existingBadge?.currentLevel || 0
 79:     let shouldUpdateLevel = false
 80:     let newLevel = currentLevel
 81: 
 82: 
 83:     switch (definition.badgeId) {
 84:       case "akshara-arasu": {
 85: 
 86:         const result = await db
 87:           .select({
 88:             count: count()
 89:           })
 90:           .from(wordStatsTable)
 91:           .where(
 92:             and(
 93:               eq(wordStatsTable.userId, userId),
 94:               gte(wordStatsTable.correctCount, 5)
 95:             )
 96:           )
 97: 
 98:         const wordCount = result[0]?.count || 0
 99: 
100: 
101:         if (wordCount >= 30) newLevel = 5
102:         else if (wordCount >= 20) newLevel = 4
103:         else if (wordCount >= 15) newLevel = 3
104:         else if (wordCount >= 10) newLevel = 2
105:         else if (wordCount >= 7) newLevel = 1
106:         else newLevel = 0
107: 
108:         isEligible = newLevel > 0
109:         progress = wordCount
110:         shouldUpdateLevel = newLevel !== currentLevel
111:         break
112:       }
113: 
114:       case "arjuna-drushti": {
115: 
116:         const quizResults = await db
117:           .select()
118:           .from(quizResultsTable)
119:           .where(
120:             and(
121:               eq(quizResultsTable.userId, userId),
122:               sql`${quizResultsTable.timeSpent} / ${quizResultsTable.totalQuestions} < 3`
123:             )
124:           )
125: 
126:         const fastQuizCount = quizResults.length
127: 
128: 
129:         if (fastQuizCount >= 100) newLevel = 5
130:         else if (fastQuizCount >= 50) newLevel = 4
131:         else if (fastQuizCount >= 20) newLevel = 3
132:         else if (fastQuizCount >= 10) newLevel = 2
133:         else if (fastQuizCount >= 5) newLevel = 1
134:         else newLevel = 0
135: 
136:         isEligible = newLevel > 0
137:         progress = fastQuizCount
138:         shouldUpdateLevel = newLevel !== currentLevel
139:         break
140:       }
141: 
142:       case "kireetaadhipathi": {
143: 
144:         const perfectQuizzes = await db
145:           .select()
146:           .from(quizResultsTable)
147:           .where(
148:             and(
149:               eq(quizResultsTable.userId, userId),
150:               sql`${quizResultsTable.score} = ${quizResultsTable.totalQuestions}`
151:             )
152:           )
153: 
154:         const perfectQuizCount = perfectQuizzes.length
155: 
156:         // Check which level the user qualifies for
157:         if (perfectQuizCount >= 100) newLevel = 5
158:         else if (perfectQuizCount >= 50) newLevel = 4
159:         else if (perfectQuizCount >= 20) newLevel = 3
160:         else if (perfectQuizCount >= 10) newLevel = 2
161:         else if (perfectQuizCount >= 5) newLevel = 1
162:         else newLevel = 0
163: 
164:         isEligible = newLevel > 0
165:         progress = perfectQuizCount
166:         shouldUpdateLevel = newLevel !== currentLevel
167:         break
168:       }
169: 
170:       case "shabda-shoora": {
171:         // "Achieved an accuracy of over 90% for five words (minimum five attempts)"
172:         const highAccuracyWords = await db
173:           .select({ count: count() })
174:           .from(wordStatsTable)
175:           .where(
176:             and(
177:               eq(wordStatsTable.userId, userId),
178:               gte(wordStatsTable.totalAttempts, 5),
179:               sql`(${wordStatsTable.correctCount}::float / ${wordStatsTable.totalAttempts}::float) >= 0.9`
180:             )
181:           )
182: 
183:         const highAccuracyWordCount = highAccuracyWords[0]?.count || 0
184: 
185: 
186:         if (highAccuracyWordCount >= 100) newLevel = 5
187:         else if (highAccuracyWordCount >= 75) newLevel = 4
188:         else if (highAccuracyWordCount >= 50) newLevel = 3
189:         else if (highAccuracyWordCount >= 25) newLevel = 2
190:         else if (highAccuracyWordCount >= 10) newLevel = 1
191:         else newLevel = 0
192: 
193:         isEligible = newLevel > 0
194:         progress = highAccuracyWordCount
195:         shouldUpdateLevel = newLevel !== currentLevel
196:         break
197:       }
198: 
199:       case "trivikrama": {
200: 
201:         const totalCorrectAnswers = await db
202:           .select({
203:             total: sql<number>`sum(${wordStatsTable.correctCount})`
204:           })
205:           .from(wordStatsTable)
206:           .where(eq(wordStatsTable.userId, userId))
207: 
208:         const correctAnswersCount = totalCorrectAnswers[0]?.total || 0
209: 
210: 
211:         if (correctAnswersCount >= 300) newLevel = 5
212:         else if (correctAnswersCount >= 200) newLevel = 4
213:         else if (correctAnswersCount >= 150) newLevel = 3
214:         else if (correctAnswersCount >= 100) newLevel = 2
215:         else if (correctAnswersCount >= 50) newLevel = 1
216:         else newLevel = 0
217: 
218:         isEligible = newLevel > 0
219:         progress = correctAnswersCount
220:         shouldUpdateLevel = newLevel !== currentLevel
221:         break
222:       }
223: 
224:       case "yashasvi-yodha": {
225: 
226: 
227: 
228: 
229: 
230:         const wordCount = await getUniqueWordCount()
231: 
232: 
233:         const userAnsweredWords = await db
234:           .select({ count: count() })
235:           .from(wordStatsTable)
236:           .where(
237:             and(
238:               eq(wordStatsTable.userId, userId),
239:               gte(wordStatsTable.correctCount, 1)
240:             )
241:           )
242: 
243:         const answeredWordCount = userAnsweredWords[0]?.count || 0
244: 
245: 
246:         isEligible = answeredWordCount >= wordCount && wordCount > 0
247:         progress = answeredWordCount
248:         newLevel = isEligible ? 1 : 0
249:         shouldUpdateLevel = newLevel !== currentLevel
250:         break
251:       }
252: 
253:       default:
254: 
255:         return {
256:           isSuccess: false,
257:           message: `Unknown badge type: ${definition.badgeId}`
258:         }
259:     }
260: 
261: 
262:     if ((isEligible && !existingBadge) || shouldUpdateLevel) {
263: 
264:       const badgeData: InsertBadge = {
265:         userId,
266:         badgeId: definition.badgeId,
267:         currentLevel: newLevel,
268:         progress,
269:         ...(existingBadge ? {} : { earnedAt: new Date() })
270:       }
271: 
272:       const result = await upsertBadgeAction(badgeData)
273: 
274:       return result
275:     }
276: 
277: 
278:     if (existingBadge && progress !== existingBadge.progress) {
279:       const badgeData: InsertBadge = {
280:         userId,
281:         badgeId: definition.badgeId,
282:         currentLevel: currentLevel,
283:         progress
284:       }
285: 
286:       const result = await upsertBadgeAction(badgeData)
287: 
288:       return result
289:     }
290: 
291:     return {
292:       isSuccess: true,
293:       message: "No badge update needed",
294:       data: existingBadge
295:     }
296:   } catch (error) {
297:     console.error(`Error evaluating badge ${definition.badgeId}:`, error)
298:     return {
299:       isSuccess: false,
300:       message: `Failed to evaluate badge ${definition.badgeId}`
301:     }
302:   }
303: }
304: 
305: 
306: 
307: 
308: async function getUniqueWordCount(): Promise<number> {
309:   try {
310:     const result = await db
311:       .select({
312:         count: sql<number>`count(distinct ${wordStatsTable.word})`
313:       })
314:       .from(wordStatsTable)
315: 
316:     return result[0]?.count || 0
317:   } catch (error) {
318:     console.error("Error getting unique word count:", error)
319:     return 0
320:   }
321: }
````

## File: actions/badges-actions.ts
````typescript
 1: "use server"
 2: 
 3: import { promises as fs } from "fs"
 4: import path from "path"
 5: import { BadgeDefinition } from "@/lib/utils/badge-utils"
 6: import { cache } from "react"
 7: 
 8: 
 9: 
10: 
11: 
12: export const getBadgeDefinitionsAction = cache(async (): Promise<BadgeDefinition[]> => {
13:   try {
14: 
15:     const csvPath = path.join(process.cwd(), "public", "data", "badges-logic.csv")
16:     const fileContent = await fs.readFile(csvPath, "utf-8")
17: 
18: 
19:     const lines = fileContent.split("\n").filter(line => line.trim().length > 0)
20:     const headers = lines[0].split(",")
21: 
22: 
23:     return lines.slice(1).map(line => {
24:       const values = line.split(",")
25:       const badgeData: Record<string, string> = {}
26: 
27: 
28:       headers.forEach((header, index) => {
29:         badgeData[header] = values[index] || ""
30:       })
31: 
32:       // Convert to strongly typed BadgeDefinition
33:       return {
34:         badgeId: badgeData["badge-english"].toLowerCase().replace(/\s+/g, "-"),
35:         kannadaName: badgeData["badge-kannada"],
36:         englishName: badgeData["badge-english"],
37:         imageUrl: badgeData["badge-image"],
38:         displayText: badgeData["badge-display"],
39:         tableLogic: badgeData["badge-table-logic"],
40:         hasLevels: badgeData["levels"] === "yes",
41:         levelRequirements: {
42:           level1: badgeData["level-1-logic"],
43:           level2: badgeData["level-2-logic"],
44:           level3: badgeData["level-3-logic"],
45:           level4: badgeData["level-4-logic"],
46:           level5: badgeData["level-5-logic"]
47:         }
48:       }
49:     })
50:   } catch (error) {
51:     console.error("Error loading badge definitions:", error)
52:     return []
53:   }
54: })
````

## File: actions/csv-actions.ts
````typescript
 1: "use server"
 2: 
 3: import { auth } from "@clerk/nextjs/server"
 4: import { readFile } from "fs/promises"
 5: import { parseCsv } from "@/lib/csv-parser"
 6: import { ActionState, KannadaEntry } from "@/types"
 7: 
 8: 
 9: 
10: 
11: 
12: export async function loadCsvAction(): Promise<ActionState<KannadaEntry[]>> {
13: 
14:   const { userId } = await auth()
15:   if (!userId) {
16:     return {
17:       isSuccess: false,
18:       message: "Unauthorized: Please sign in to access the data"
19:     }
20:   }
21: 
22:   try {
23: 
24:     const csvPath = process.cwd() + "/public/data/kannada-kali-updated.csv"
25:     console.log(`Loading CSV from: ${csvPath}`);
26:     const csvData = await readFile(csvPath, "utf-8")
27: 
28: 
29:     const parsedData = parseCsv(csvData)
30: 
31: 
32:     console.log(`CSV loaded successfully with ${parsedData.length} entries`);
33:     const entriesWithKanglish = parsedData.filter(e => e.kanglish && e.kanglish.trim() !== "").length;
34:     const entriesWithIcons = parsedData.filter(e => e.icon).length;
35:     console.log(`Entries with Kanglish: ${entriesWithKanglish}`);
36:     console.log(`Entries with icons: ${entriesWithIcons}`);
37:     console.log(`Entries with both: ${parsedData.filter(e => e.icon && e.kanglish && e.kanglish.trim() !== "").length}`);
38: 
39:     // Log sample entries
40:     if (parsedData.length > 0) {
41:       console.log("Sample entry:");
42:       console.log(JSON.stringify(parsedData[0], null, 2));
43:     }
44: 
45:     return {
46:       isSuccess: true,
47:       message: "CSV data loaded successfully",
48:       data: parsedData
49:     }
50:   } catch (error) {
51:     console.error("Error loading CSV:", error)
52:     return {
53:       isSuccess: false,
54:       message: `Failed to load CSV: ${error instanceof Error ? error.message : "Unknown error"}`
55:     }
56:   }
57: }
````

## File: actions/db/badges-actions.ts
````typescript
  1: "use server"
  2: 
  3: 
  4: 
  5: 
  6: 
  7: 
  8: 
  9: 
 10: 
 11: 
 12: 
 13: 
 14: 
 15: 
 16: 
 17: 
 18: 
 19: 
 20: import { db } from "@/db/db"
 21: import { badgesTable, InsertBadge, SelectBadge } from "@/db/schema"
 22: import { ActionState } from "@/types"
 23: import { and, eq } from "drizzle-orm"
 24: 
 25: 
 26: 
 27: 
 28: export async function createBadgeAction(
 29:   badge: InsertBadge
 30: ): Promise<ActionState<SelectBadge | undefined>> {
 31:   try {
 32: 
 33:     const existingBadge = await db.query.badges.findFirst({
 34:       where: and(
 35:         eq(badgesTable.userId, badge.userId),
 36:         eq(badgesTable.badgeId, badge.badgeId)
 37:       )
 38:     })
 39: 
 40:     if (existingBadge) {
 41:       return {
 42:         isSuccess: false,
 43:         message: "Badge already exists for this user"
 44:       }
 45:     }
 46: 
 47: 
 48:     const [newBadge] = await db.insert(badgesTable).values(badge).returning()
 49: 
 50:     return {
 51:       isSuccess: true,
 52:       message: "Badge created successfully",
 53:       data: newBadge
 54:     }
 55:   } catch (error) {
 56:     console.error("Error creating badge:", error)
 57:     return { isSuccess: false, message: "Failed to create badge" }
 58:   }
 59: }
 60: 
 61: 
 62: 
 63: 
 64: export async function getUserBadgesAction(
 65:   userId: string
 66: ): Promise<ActionState<SelectBadge[]>> {
 67:   try {
 68:     const badges = await db.query.badges.findMany({
 69:       where: eq(badgesTable.userId, userId),
 70:       orderBy: badgesTable.earnedAt
 71:     })
 72: 
 73:     return {
 74:       isSuccess: true,
 75:       message: "Badges retrieved successfully",
 76:       data: badges
 77:     }
 78:   } catch (error) {
 79:     console.error("Error getting user badges:", error)
 80:     return { isSuccess: false, message: "Failed to get user badges" }
 81:   }
 82: }
 83: 
 84: 
 85: 
 86: 
 87: export async function getUserBadgeAction(
 88:   userId: string,
 89:   badgeId: string
 90: ): Promise<ActionState<SelectBadge | undefined>> {
 91:   try {
 92:     const badge = await db.query.badges.findFirst({
 93:       where: and(
 94:         eq(badgesTable.userId, userId),
 95:         eq(badgesTable.badgeId, badgeId)
 96:       )
 97:     })
 98: 
 99:     return {
100:       isSuccess: true,
101:       message: badge ? "Badge retrieved successfully" : "Badge not found",
102:       data: badge || undefined
103:     }
104:   } catch (error) {
105:     console.error("Error getting user badge:", error)
106:     return { isSuccess: false, message: "Failed to get user badge" }
107:   }
108: }
109: 
110: 
111: 
112: 
113: export async function updateBadgeAction(
114:   userId: string,
115:   badgeId: string,
116:   data: Partial<InsertBadge>
117: ): Promise<ActionState<SelectBadge | undefined>> {
118:   try {
119: 
120:     const { userId: _, badgeId: __, ...updateData } = data
121: 
122:     const [updatedBadge] = await db
123:       .update(badgesTable)
124:       .set({
125:         ...updateData,
126:         updatedAt: new Date()
127:       })
128:       .where(
129:         and(
130:           eq(badgesTable.userId, userId),
131:           eq(badgesTable.badgeId, badgeId)
132:         )
133:       )
134:       .returning()
135: 
136:     if (!updatedBadge) {
137:       return {
138:         isSuccess: false,
139:         message: "Badge not found"
140:       }
141:     }
142: 
143:     return {
144:       isSuccess: true,
145:       message: "Badge updated successfully",
146:       data: updatedBadge
147:     }
148:   } catch (error) {
149:     console.error("Error updating badge:", error)
150:     return { isSuccess: false, message: "Failed to update badge" }
151:   }
152: }
153: 
154: 
155: 
156: 
157: export async function upsertBadgeAction(
158:   badge: InsertBadge
159: ): Promise<ActionState<SelectBadge | undefined>> {
160:   try {
161: 
162:     const existingBadge = await db.query.badges.findFirst({
163:       where: and(
164:         eq(badgesTable.userId, badge.userId),
165:         eq(badgesTable.badgeId, badge.badgeId)
166:       )
167:     })
168: 
169:     if (existingBadge) {
170: 
171:       return updateBadgeAction(
172:         badge.userId,
173:         badge.badgeId,
174:         badge
175:       )
176:     } else {
177: 
178:       return createBadgeAction(badge)
179:     }
180:   } catch (error) {
181:     console.error("Error upserting badge:", error)
182:     return { isSuccess: false, message: "Failed to upsert badge" }
183:   }
184: }
185: 
186: 
187: 
188: 
189: export async function deleteBadgeAction(
190:   userId: string,
191:   badgeId: string
192: ): Promise<ActionState<void>> {
193:   try {
194:     await db
195:       .delete(badgesTable)
196:       .where(
197:         and(
198:           eq(badgesTable.userId, userId),
199:           eq(badgesTable.badgeId, badgeId)
200:         )
201:       )
202: 
203:     return {
204:       isSuccess: true,
205:       message: "Badge deleted successfully",
206:       data: undefined
207:     }
208:   } catch (error) {
209:     console.error("Error deleting badge:", error)
210:     return { isSuccess: false, message: "Failed to delete badge" }
211:   }
212: }
````

## File: actions/db/leaderboard-actions.ts
````typescript
  1: "use server"
  2: 
  3: import { db } from "@/db/db"
  4: import { leaderboardTable } from "@/db/schema"
  5: import { ActionState } from "@/types"
  6: import { auth } from "@clerk/nextjs/server"
  7: import { sql } from "drizzle-orm"
  8: 
  9: 
 10: export interface LeaderboardEntry {
 11:   userId: string
 12:   displayName: string
 13:   profileImageUrl: string | null
 14:   totalAttempts: number
 15:   correctAnswers: number
 16:   accuracyPercentage: number
 17:   quizzesCompleted: number
 18:   rank: number
 19:   isCurrentUser: boolean
 20: }
 21: 
 22: 
 23: 
 24: 
 25: 
 26: 
 27: export async function getLeaderboardAction(
 28:   category?: string
 29: ): Promise<ActionState<{
 30:   leaders: LeaderboardEntry[]
 31:   currentUserRank?: LeaderboardEntry
 32: }>> {
 33:   try {
 34:     console.log("Getting leaderboard", { category })
 35: 
 36: 
 37:     let currentUserId: string | undefined = undefined
 38:     try {
 39:       const session = await auth()
 40:       currentUserId = session?.userId ?? undefined
 41:     } catch {}
 42: 
 43: 
 44:     const safeCategory = null
 45:     const topLeadersQuery = sql`
 46:       SELECT * FROM get_homepage_leaderboard(${safeCategory}, NULL)
 47:     `
 48:     const topLeaders = await db.execute(topLeadersQuery)
 49:     console.log('DEBUG: Raw leaderboard data:', topLeaders)
 50:     if (!topLeaders || topLeaders.length === 0) {
 51:       console.warn('DEBUG: No leaderboard data returned from Supabase. Check SQL function and table contents.')
 52:     }
 53: 
 54:     // Format leaderboard entries
 55:     const leaders: LeaderboardEntry[] = topLeaders.map(leader => {
 56:       const displayName = leader.display_name as string || `User ${(leader.user_id as string).substring(0, 6)}`;
 57:       return {
 58:         userId: leader.user_id as string,
 59:         displayName,
 60:         profileImageUrl: leader.profile_image_url as string | null,
 61:         totalAttempts: Number(leader.total_attempts || 0),
 62:         correctAnswers: Number(leader.correct_answers || 0),
 63:         accuracyPercentage: Number(leader.accuracy_percentage || 0),
 64:         quizzesCompleted: Number(leader.quizzes_completed || 0),
 65:         rank: Number(leader.rank || 0),
 66:         isCurrentUser: currentUserId ? leader.user_id === currentUserId : false
 67:       };
 68:     });
 69: 
 70:     // Only fetch current user rank if authenticated and not in top 5
 71:     let formattedCurrentUserRank: LeaderboardEntry | undefined = undefined
 72:     if (currentUserId && !topLeaders.some(l => l.user_id === currentUserId)) {
 73:       const userPositionQuery = sql`
 74:         SELECT * FROM get_user_leaderboard_position(${currentUserId}, ${safeCategory})
 75:       `
 76:       const userPosition = await db.execute(userPositionQuery)
 77:       if (userPosition.length > 0) {
 78:         const pos = userPosition[0]
 79:         const displayName = pos.display_name as string || `User ${(pos.user_id as string).substring(0, 6)}`;
 80:         formattedCurrentUserRank = {
 81:           userId: pos.user_id as string,
 82:           displayName,
 83:           profileImageUrl: pos.profile_image_url as string | null,
 84:           totalAttempts: Number(pos.total_attempts || 0),
 85:           correctAnswers: Number(pos.correct_answers || 0),
 86:           accuracyPercentage: Number(pos.accuracy_percentage || 0),
 87:           quizzesCompleted: Number(pos.quizzes_completed || 0),
 88:           rank: Number(pos.rank || 0),
 89:           isCurrentUser: true
 90:         }
 91:       }
 92:     }
 93: 
 94:     return {
 95:       isSuccess: true,
 96:       message: "Leaderboard retrieved successfully",
 97:       data: {
 98:         leaders,
 99:         currentUserRank: formattedCurrentUserRank
100:       }
101:     }
102:   } catch (error) {
103:     console.error("Error retrieving leaderboard:", error)
104:     return {
105:       isSuccess: false,
106:       message: "Failed to retrieve leaderboard"
107:     }
108:   }
109: }
110: 
111: /**
112:  * Get all categories from leaderboard entries
113:  */
114: export async function getLeaderboardCategoriesAction(): Promise<ActionState<string[]>> {
115:   try {
116:     // Allow public access, do not require auth
117:     const query = sql`SELECT * FROM get_leaderboard_categories()`
118:     const result = await db.execute(query)
119:     const categories = result.map(row => row.category as string)
120:     return {
121:       isSuccess: true,
122:       message: "Categories retrieved successfully",
123:       data: categories
124:     }
125:   } catch (error) {
126:     console.error("Error retrieving leaderboard categories:", error)
127:     return {
128:       isSuccess: false,
129:       message: "Failed to retrieve leaderboard categories"
130:     }
131:   }
132: }
133: 
134: /**
135:  * Update a user's leaderboard entry
136:  */
137: export async function updateUserLeaderboardAction(
138:   userId: string
139: ): Promise<ActionState<void>> {
140:   try {
141:     const session = await auth()
142:     // Only allow users to update their own leaderboard or admins
143:     if (!session || !session.userId || (session.userId !== userId && !session.sessionClaims?.admin)) {
144:       return {
145:         isSuccess: false,
146:         message: "Unauthorized"
147:       }
148:     }
149: 
150:     // Update user leaderboard using our new function
151:     const query = sql`SELECT update_user_leaderboard(${userId})`
152:     await db.execute(query)
153: 
154:     return {
155:       isSuccess: true,
156:       message: "User leaderboard updated successfully",
157:       data: undefined
158:     }
159:   } catch (error) {
160:     console.error("Error updating user leaderboard:", error)
161:     return {
162:       isSuccess: false,
163:       message: "Failed to update user leaderboard"
164:     }
165:   }
166: }
````

## File: actions/db/profiles-actions.ts
````typescript
  1: "use server"
  2: 
  3: import { db } from "@/db/db"
  4: import { profilesTable, InsertProfile, SelectProfile } from "@/db/schema"
  5: import { ActionState } from "@/types"
  6: import { auth, currentUser } from "@clerk/nextjs/server"
  7: import { eq, sql } from "drizzle-orm"
  8: 
  9: export async function createProfileAction(
 10:   data: InsertProfile
 11: ): Promise<ActionState<SelectProfile>> {
 12:   try {
 13:     const [newProfile] = await db.insert(profilesTable).values(data).returning()
 14:     return {
 15:       isSuccess: true,
 16:       message: "Profile created successfully",
 17:       data: newProfile
 18:     }
 19:   } catch (error) {
 20:     console.error("Error creating profile:", error)
 21:     return { isSuccess: false, message: "Failed to create profile" }
 22:   }
 23: }
 24: 
 25: export async function getProfileByUserIdAction(
 26:   userId: string
 27: ): Promise<ActionState<SelectProfile>> {
 28:   try {
 29:     const profile = await db.query.profiles.findFirst({
 30:       where: eq(profilesTable.userId, userId)
 31:     })
 32:     if (!profile) {
 33:       return { isSuccess: false, message: "Profile not found" }
 34:     }
 35: 
 36:     return {
 37:       isSuccess: true,
 38:       message: "Profile retrieved successfully",
 39:       data: profile
 40:     }
 41:   } catch (error) {
 42:     console.error("Error getting profile by user id", error)
 43:     return { isSuccess: false, message: "Failed to get profile" }
 44:   }
 45: }
 46: 
 47: export async function updateProfileAction(
 48:   userId: string,
 49:   data: Partial<InsertProfile>
 50: ): Promise<ActionState<SelectProfile>> {
 51:   try {
 52:     const [updatedProfile] = await db
 53:       .update(profilesTable)
 54:       .set(data)
 55:       .where(eq(profilesTable.userId, userId))
 56:       .returning()
 57: 
 58:     if (!updatedProfile) {
 59:       return { isSuccess: false, message: "Profile not found to update" }
 60:     }
 61: 
 62:     return {
 63:       isSuccess: true,
 64:       message: "Profile updated successfully",
 65:       data: updatedProfile
 66:     }
 67:   } catch (error) {
 68:     console.error("Error updating profile:", error)
 69:     return { isSuccess: false, message: "Failed to update profile" }
 70:   }
 71: }
 72: 
 73: export async function deleteProfileAction(
 74:   userId: string
 75: ): Promise<ActionState<void>> {
 76:   try {
 77:     await db.delete(profilesTable).where(eq(profilesTable.userId, userId))
 78:     return {
 79:       isSuccess: true,
 80:       message: "Profile deleted successfully",
 81:       data: undefined
 82:     }
 83:   } catch (error) {
 84:     console.error("Error deleting profile:", error)
 85:     return { isSuccess: false, message: "Failed to delete profile" }
 86:   }
 87: }
 88: 
 89: 
 90: 
 91: 
 92: export async function syncUserProfileAction(): Promise<ActionState<SelectProfile>> {
 93:   try {
 94: 
 95:     const session = await auth()
 96:     console.log("Auth session:", session?.userId ? "exists" : "missing")
 97: 
 98:     if (!session?.userId) {
 99:       return {
100:         isSuccess: false,
101:         message: "Unauthorized"
102:       }
103:     }
104: 
105: 
106:     const user = await currentUser()
107:     console.log("Current user:", user ? "found" : "not found")
108: 
109:     if (!user) {
110:       return {
111:         isSuccess: false,
112:         message: "User not found"
113:       }
114:     }
115: 
116: 
117:     const userId = user.id
118: 
119: 
120:     let displayName: string
121:     if (user.firstName && user.lastName) {
122:       displayName = `${user.firstName} ${user.lastName}`.trim()
123:     } else if (user.firstName) {
124:       displayName = user.firstName
125:     } else if (user.emailAddresses && user.emailAddresses.length > 0) {
126:       displayName = user.emailAddresses[0].emailAddress.split('@')[0]
127:     } else {
128:       displayName = `User ${userId.substring(0, 6)}`
129:     }
130: 
131: 
132:     const profileImageUrl = user.imageUrl
133:     const email = user.emailAddresses.length > 0 ? user.emailAddresses[0].emailAddress : ""
134: 
135:     console.log("Profile sync data:", { userId, displayName, hasImage: !!profileImageUrl, hasEmail: !!email })
136: 
137:     // Call the database function to sync profile
138:     await db.execute(sql`
139:       SELECT sync_clerk_profile(
140:         ${userId},
141:         ${displayName},
142:         ${profileImageUrl || ""},
143:         ${email || ""}
144:       )
145:     `)
146: 
147:     // Get the updated profile
148:     const [profile] = await db.select().from(profilesTable).where(eq(profilesTable.userId, userId))
149: 
150:     console.log("Profile synced successfully:", profile ? "profile retrieved" : "profile missing")
151: 
152:     return {
153:       isSuccess: true,
154:       message: "Profile synced successfully",
155:       data: profile
156:     }
157:   } catch (error) {
158:     console.error("Error syncing user profile:", error instanceof Error ? error.message : String(error))
159:     if (error instanceof Error && error.stack) {
160:       console.error("Stack trace:", error.stack)
161:     }
162: 
163:     return {
164:       isSuccess: false,
165:       message: error instanceof Error ? error.message : "Failed to sync user profile"
166:     }
167:   }
168: }
169: 
170: 
171: 
172: 
173: export async function syncUserProfileWithDataAction(data: {
174:   userId: string;
175:   displayName: string;
176:   profileImageUrl?: string;
177:   email?: string;
178: }): Promise<ActionState<SelectProfile>> {
179:   try {
180:     const { userId, displayName, profileImageUrl, email } = data;
181: 
182: 
183:     await db.execute(sql`
184:       SELECT sync_clerk_profile(
185:         ${userId},
186:         ${displayName},
187:         ${profileImageUrl || null},
188:         ${email || null}
189:       )
190:     `);
191: 
192:     // Get the updated profile
193:     const [profile] = await db.select().from(profilesTable).where(eq(profilesTable.userId, userId));
194: 
195:     if (!profile) {
196:       return {
197:         isSuccess: false,
198:         message: "Failed to retrieve synced profile"
199:       };
200:     }
201: 
202:     return {
203:       isSuccess: true,
204:       message: "Profile synced successfully with provided data",
205:       data: profile
206:     };
207:   } catch (error) {
208:     console.error("Error syncing user profile with data:", error);
209:     return {
210:       isSuccess: false,
211:       message: "Failed to sync user profile with data"
212:     };
213:   }
214: }
215: 
216: /**
217:  * Get a user's profile by user ID
218:  * @param userId The user ID to get the profile for
219:  */
220: export async function getUserProfileAction(userId: string): Promise<ActionState<SelectProfile>> {
221:   try {
222:     const [profile] = await db.select().from(profilesTable).where(eq(profilesTable.userId, userId))
223: 
224:     if (!profile) {
225:       return {
226:         isSuccess: false,
227:         message: "Profile not found"
228:       }
229:     }
230: 
231:     return {
232:       isSuccess: true,
233:       message: "Profile retrieved successfully",
234:       data: profile
235:     }
236:   } catch (error) {
237:     console.error("Error retrieving user profile:", error)
238:     return {
239:       isSuccess: false,
240:       message: "Failed to retrieve user profile"
241:     }
242:   }
243: }
244: 
245: /**
246:  * Get multiple user profiles by user IDs
247:  * @param userIds Array of user IDs to get profiles for
248:  */
249: export async function getUserProfilesAction(userIds: string[]): Promise<ActionState<SelectProfile[]>> {
250:   try {
251:     if (!userIds.length) {
252:       return {
253:         isSuccess: true,
254:         message: "No user IDs provided",
255:         data: []
256:       }
257:     }
258: 
259:     const profiles = await db
260:       .select()
261:       .from(profilesTable)
262:       .where(sql`${profilesTable.userId} = ANY(${userIds})`)
263: 
264:     return {
265:       isSuccess: true,
266:       message: "Profiles retrieved successfully",
267:       data: profiles
268:     }
269:   } catch (error) {
270:     console.error("Error retrieving user profiles:", error)
271:     return {
272:       isSuccess: false,
273:       message: "Failed to retrieve user profiles"
274:     }
275:   }
276: }
277: 
278: 
279: 
280: 
281: 
282: export async function updateProfileByStripeCustomerIdAction(
283:   stripeCustomerId: string,
284:   data: Partial<InsertProfile>
285: ): Promise<ActionState<SelectProfile>> {
286:   try {
287: 
288:     const profile = await db.query.profiles.findFirst({
289:       where: eq(profilesTable.stripeCustomerId, stripeCustomerId)
290:     })
291: 
292:     if (!profile) {
293:       return {
294:         isSuccess: false,
295:         message: "Profile with the provided Stripe customer ID not found"
296:       }
297:     }
298: 
299: 
300:     const [updatedProfile] = await db
301:       .update(profilesTable)
302:       .set(data)
303:       .where(eq(profilesTable.stripeCustomerId, stripeCustomerId))
304:       .returning()
305: 
306:     return {
307:       isSuccess: true,
308:       message: "Profile updated successfully via Stripe customer ID",
309:       data: updatedProfile
310:     }
311:   } catch (error) {
312:     console.error("Error updating profile by Stripe customer ID:", error)
313:     return {
314:       isSuccess: false,
315:       message: "Failed to update profile by Stripe customer ID"
316:     }
317:   }
318: }
````

## File: actions/db/progress-actions.ts
````typescript
  1: "use server"
  2: 
  3: import { auth } from "@clerk/nextjs/server"
  4: 
  5: import { db } from "@/db/db"
  6: import { progressTable, InsertProgress, SelectProgress } from "@/db/schema/progress-schema"
  7: import { ActionState } from "@/types"
  8: import { eq } from "drizzle-orm"
  9: 
 10: 
 11: 
 12: 
 13: 
 14: 
 15: 
 16: export async function saveProgressAction(increments: {
 17:   stars: number
 18:   wordsLearned: number
 19:   quizzesPlayed: number
 20: }): Promise<ActionState<SelectProgress>> {
 21:   const { userId } = await auth()
 22: 
 23: 
 24:   if (!userId) {
 25:     return { isSuccess: false, message: "Unauthorized: No user ID found" }
 26:   }
 27: 
 28:   try {
 29: 
 30:     const existingProgress = await db
 31:       .select()
 32:       .from(progressTable)
 33:       .where(eq(progressTable.userId, userId))
 34:       .limit(1)
 35: 
 36:     let updatedProgress: SelectProgress
 37: 
 38:     if (existingProgress.length > 0) {
 39: 
 40:       const [result] = await db
 41:         .update(progressTable)
 42:         .set({
 43:           stars: existingProgress[0].stars + increments.stars,
 44:           wordsLearned: existingProgress[0].wordsLearned + increments.wordsLearned,
 45:           quizzesPlayed: existingProgress[0].quizzesPlayed + increments.quizzesPlayed,
 46:           updatedAt: new Date()
 47:         })
 48:         .where(eq(progressTable.userId, userId))
 49:         .returning()
 50:       updatedProgress = result
 51:     } else {
 52: 
 53:       const newProgress: InsertProgress = {
 54:         userId,
 55:         stars: increments.stars,
 56:         wordsLearned: increments.wordsLearned,
 57:         quizzesPlayed: increments.quizzesPlayed,
 58:         createdAt: new Date(),
 59:         updatedAt: new Date()
 60:       }
 61:       const [result] = await db.insert(progressTable).values(newProgress).returning()
 62:       updatedProgress = result
 63:     }
 64: 
 65:     return {
 66:       isSuccess: true,
 67:       message: "Progress saved successfully",
 68:       data: updatedProgress
 69:     }
 70:   } catch (error) {
 71:     console.error("Error saving progress:", error)
 72:     return { isSuccess: false, message: "Failed to save progress" }
 73:   }
 74: }
 75: 
 76: 
 77: 
 78: 
 79: 
 80: 
 81: export async function getProgressAction(): Promise<ActionState<SelectProgress | null>> {
 82:   try {
 83:     const { userId } = await auth()
 84: 
 85: 
 86:     if (!userId) {
 87:       return { isSuccess: false, message: "Unauthorized: No user ID found" }
 88:     }
 89: 
 90:     const progress = await db
 91:       .select()
 92:       .from(progressTable)
 93:       .where(eq(progressTable.userId, userId))
 94:       .limit(1)
 95: 
 96:     if (progress.length === 0) {
 97:       return {
 98:         isSuccess: true,
 99:         message: "No progress found for user",
100:         data: null
101:       }
102:     }
103: 
104:     return {
105:       isSuccess: true,
106:       message: "Progress retrieved successfully",
107:       data: progress[0]
108:     }
109:   } catch (error) {
110:     console.error("Error retrieving progress:", error)
111:     return { isSuccess: false, message: "Failed to retrieve progress" }
112:   }
113: }
114: 
115: 
116: 
117: 
118: 
119: 
120: 
121: 
122: export async function updateModuleProgressAction(
123:   module: string,
124:   score: number
125: ): Promise<ActionState<SelectProgress>> {
126: 
127:   let stars = 0;
128:   if (score >= 80) stars = 3;
129:   else if (score >= 60) stars = 2;
130:   else if (score >= 40) stars = 1;
131: 
132: 
133:   const increments = {
134:     stars,
135:     wordsLearned: module === "flashcards" ? 1 : 0,
136:     quizzesPlayed: module === "quiz" ? 1 : 0
137:   };
138: 
139: 
140:   return saveProgressAction(increments);
141: }
````

## File: actions/db/quiz-results-actions.ts
````typescript
  1: "use server"
  2: 
  3: import { auth } from "@clerk/nextjs/server"
  4: import { and, desc, eq } from "drizzle-orm"
  5: 
  6: import { db } from "@/db/db"
  7: import { quizResultsTable, InsertQuizResult, SelectQuizResult } from "@/db/schema/quiz-results-schema"
  8: import { ActionState } from "@/types"
  9: import { evaluateUserBadgesAction } from "@/actions/badge-evaluation-actions"
 10: 
 11: 
 12: 
 13: 
 14: 
 15: 
 16: 
 17: export async function saveQuizResultAction(result: {
 18:   quizType: "rapid_fire" | "standard"
 19:   score: number
 20:   totalQuestions: number
 21:   timeSpent?: number
 22:   categories?: string[]
 23: }): Promise<ActionState<SelectQuizResult>> {
 24:   const { userId } = await auth()
 25: 
 26: 
 27:   if (!userId) {
 28:     return { isSuccess: false, message: "Unauthorized: No user ID found" }
 29:   }
 30: 
 31:   try {
 32: 
 33:     const newQuizResult: InsertQuizResult = {
 34:       userId,
 35:       quizType: result.quizType,
 36:       score: result.score,
 37:       totalQuestions: result.totalQuestions,
 38:       timeSpent: result.timeSpent,
 39:       categories: result.categories,
 40:       createdAt: new Date(),
 41:       updatedAt: new Date()
 42:     }
 43: 
 44:     const [savedResult] = await db.insert(quizResultsTable).values(newQuizResult).returning()
 45: 
 46: 
 47: 
 48:     evaluateUserBadgesAction().catch(error => {
 49:       console.error("Error evaluating badges after quiz:", error)
 50:     })
 51: 
 52: 
 53:     await import("@/actions/db/leaderboard-actions").then(m => m.updateUserLeaderboardAction(userId))
 54: 
 55:     return {
 56:       isSuccess: true,
 57:       message: "Quiz result saved successfully",
 58:       data: savedResult
 59:     }
 60:   } catch (error) {
 61:     console.error("Error saving quiz result:", error)
 62:     return { isSuccess: false, message: "Failed to save quiz result" }
 63:   }
 64: }
 65: 
 66: 
 67: 
 68: 
 69: 
 70: 
 71: 
 72: 
 73: export async function getQuizResultsAction(
 74:   limit = 10,
 75:   quizType?: "rapid_fire" | "standard"
 76: ): Promise<ActionState<SelectQuizResult[]>> {
 77:   try {
 78:     const { userId } = await auth()
 79: 
 80: 
 81:     if (!userId) {
 82:       return { isSuccess: false, message: "Unauthorized: No user ID found" }
 83:     }
 84: 
 85:     let results: SelectQuizResult[]
 86: 
 87: 
 88:     if (quizType) {
 89: 
 90:       results = await db
 91:         .select()
 92:         .from(quizResultsTable)
 93:         .where(
 94:           and(
 95:             eq(quizResultsTable.userId, userId),
 96:             eq(quizResultsTable.quizType, quizType)
 97:           )
 98:         )
 99:         .orderBy(desc(quizResultsTable.createdAt))
100:         .limit(limit)
101:     } else {
102: 
103:       results = await db
104:         .select()
105:         .from(quizResultsTable)
106:         .where(eq(quizResultsTable.userId, userId))
107:         .orderBy(desc(quizResultsTable.createdAt))
108:         .limit(limit)
109:     }
110: 
111:     return {
112:       isSuccess: true,
113:       message: "Quiz results retrieved successfully",
114:       data: results
115:     }
116:   } catch (error) {
117:     console.error("Error retrieving quiz results:", error)
118:     return { isSuccess: false, message: "Failed to retrieve quiz results" }
119:   }
120: }
121: 
122: 
123: 
124: 
125: 
126: 
127: 
128: 
129: 
130: 
131: 
132: export async function getQuizStatsAction(): Promise<ActionState<{
133:   totalQuizzes: number,
134:   averageScore: number,
135:   bestScore: number,
136:   recentResults: SelectQuizResult[]
137: }>> {
138:   try {
139:     const { userId } = await auth()
140: 
141: 
142:     if (!userId) {
143:       return { isSuccess: false, message: "Unauthorized: No user ID found" }
144:     }
145: 
146:     const results = await db
147:       .select()
148:       .from(quizResultsTable)
149:       .where(eq(quizResultsTable.userId, userId))
150:       .orderBy(desc(quizResultsTable.createdAt))
151: 
152:     if (results.length === 0) {
153:       return {
154:         isSuccess: true,
155:         message: "No quiz results found",
156:         data: {
157:           totalQuizzes: 0,
158:           averageScore: 0,
159:           bestScore: 0,
160:           recentResults: []
161:         }
162:       }
163:     }
164: 
165: 
166:     const totalQuizzes = results.length
167:     const totalScorePercentage = results.reduce((sum, result) =>
168:       sum + (result.score / result.totalQuestions * 100), 0)
169:     const averageScore = Math.round(totalScorePercentage / totalQuizzes)
170: 
171:     const bestScorePercentage = Math.max(
172:       ...results.map(result => result.score / result.totalQuestions * 100)
173:     )
174:     const bestScore = Math.round(bestScorePercentage)
175: 
176: 
177:     const recentResults = results.slice(0, 5)
178: 
179:     return {
180:       isSuccess: true,
181:       message: "Quiz statistics retrieved successfully",
182:       data: {
183:         totalQuizzes,
184:         averageScore,
185:         bestScore,
186:         recentResults
187:       }
188:     }
189:   } catch (error) {
190:     console.error("Error retrieving quiz statistics:", error)
191:     return { isSuccess: false, message: "Failed to retrieve quiz statistics" }
192:   }
193: }
````

## File: actions/db/seed-test-data.ts
````typescript
 1: "use server"
 2: 
 3: import { db } from "@/db/db"
 4: import { InsertQuizResult, quizResultsTable } from "@/db/schema"
 5: import { ActionState } from "@/types"
 6: import { auth } from "@clerk/nextjs/server"
 7: 
 8: 
 9: 
10: 
11: 
12: export async function seedTestQuizResultsAction(): Promise<ActionState<void>> {
13:   try {
14:     const { userId } = await auth();
15: 
16:     if (!userId) {
17:       return {
18:         isSuccess: false,
19:         message: "You must be logged in to seed test data"
20:       };
21:     }
22: 
23:     console.log("Creating test quiz results for user:", userId);
24: 
25: 
26:     const testResults: InsertQuizResult[] = [
27:       {
28:         userId,
29:         quizType: "rapid_fire",
30:         score: 8,
31:         totalQuestions: 10,
32:         timeSpent: 60,
33:         categories: ["animals", "colors"]
34:       },
35:       {
36:         userId,
37:         quizType: "standard",
38:         score: 9,
39:         totalQuestions: 10,
40:         timeSpent: 120,
41:         categories: ["numbers", "food"]
42:       },
43:       {
44:         userId,
45:         quizType: "rapid_fire",
46:         score: 7,
47:         totalQuestions: 10,
48:         timeSpent: 55,
49:         categories: ["family", "verbs"]
50:       }
51:     ];
52: 
53: 
54:     await db.insert(quizResultsTable).values(testResults);
55: 
56:     return {
57:       isSuccess: true,
58:       message: "Test quiz results data seeded successfully",
59:       data: undefined
60:     };
61:   } catch (error) {
62:     console.error("Error seeding test quiz results:", error);
63:     return {
64:       isSuccess: false,
65:       message: "Failed to seed test quiz results data"
66:     };
67:   }
68: }
````

## File: actions/db/seed-word-stats-action.ts
````typescript
  1: "use server"
  2: 
  3: 
  4: 
  5: 
  6: 
  7: 
  8: 
  9: 
 10: 
 11: 
 12: 
 13: 
 14: 
 15: 
 16: 
 17: 
 18: 
 19: 
 20: 
 21: 
 22: 
 23: import { auth } from "@clerk/nextjs/server"
 24: import { readFile } from "fs/promises"
 25: import path from "path"
 26: import { db } from "@/db/db"
 27: import { InsertWordStat, wordStatsTable } from "@/db/schema/word-stats-schema"
 28: import { parseCsv } from "@/lib/csv-parser"
 29: import { ActionState } from "@/types"
 30: import { eq, and } from "drizzle-orm"
 31: 
 32: 
 33: 
 34: 
 35: 
 36: 
 37: 
 38: export async function seedWordStatsAction(): Promise<ActionState<number>> {
 39:   try {
 40: 
 41:     const { userId } = await auth()
 42:     if (!userId) {
 43:       return {
 44:         isSuccess: false,
 45:         message: "Unauthorized: Please sign in to seed word statistics"
 46:       }
 47:     }
 48: 
 49: 
 50:     const csvPath = path.join(process.cwd(), "/public/data/kannada-kali.csv")
 51:     const csvData = await readFile(csvPath, "utf-8")
 52:     const words = parseCsv(csvData)
 53: 
 54: 
 55:     const sampleWords = words
 56:       .filter(word => word.english && word.kanglish)
 57:       .slice(0, 20)
 58: 
 59: 
 60: 
 61:     const existingStats = await db
 62:       .select({ word: wordStatsTable.word })
 63:       .from(wordStatsTable)
 64:       .where(eq(wordStatsTable.userId, userId))
 65: 
 66:     const existingWords = new Set(existingStats.map(stat => stat.word))
 67: 
 68: 
 69:     const wordStats: InsertWordStat[] = sampleWords
 70:       .filter(word => word.english && !existingWords.has(word.english))
 71:       .map(word => {
 72: 
 73:         const totalAttempts = Math.floor(Math.random() * 15) + 5
 74:         const successRate = Math.random() * 0.6 + 0.3
 75:         const correctCount = Math.floor(totalAttempts * successRate)
 76: 
 77:         return {
 78:           userId,
 79:           word: word.english || "",
 80:           kanglish: word.kanglish || "",
 81:           kannada: word.kannada || null,
 82:           icon: word.icon || null,
 83:           category: word.category || null,
 84:           totalAttempts,
 85:           correctCount
 86:         }
 87:       })
 88: 
 89:     // Only proceed if we have new words to insert
 90:     if (wordStats.length === 0) {
 91:       return {
 92:         isSuccess: true,
 93:         message: "No new words to seed. Word statistics already exist.",
 94:         data: 0
 95:       }
 96:     }
 97: 
 98:     // Insert the word statistics
 99:     const result = await db.insert(wordStatsTable).values(wordStats)
100: 
101:     return {
102:       isSuccess: true,
103:       message: `Successfully seeded ${wordStats.length} word statistics`,
104:       data: wordStats.length
105:     }
106:   } catch (error) {
107:     console.error("Error seeding word statistics:", error)
108:     return {
109:       isSuccess: false,
110:       message: `Failed to seed word statistics: ${error instanceof Error ? error.message : "Unknown error"}`
111:     }
112:   }
113: }
````

## File: actions/db/word-stats-actions.ts
````typescript
  1: "use server"
  2: 
  3: import { auth } from "@clerk/nextjs/server"
  4: import { readFile } from "fs/promises"
  5: import path from "path"
  6: import { ActionState } from "@/types"
  7: import { parseCsv } from "@/lib/csv-parser"
  8: import { db } from "@/db/db"
  9: import { InsertWordStat, SelectWordStat, wordStatsTable } from "@/db/schema/word-stats-schema"
 10: import { eq, and, desc } from "drizzle-orm"
 11: import { evaluateUserBadgesAction } from "@/actions/badge-evaluation-actions"
 12: 
 13: export interface WordStatistics {
 14:   icon: string | null
 15:   english: string
 16:   kannada: string | null
 17:   kanglish: string
 18:   correctCount: number
 19:   totalAttempts: number
 20:   category: string | null
 21: }
 22: 
 23: 
 24: 
 25: 
 26: 
 27: 
 28: 
 29: 
 30: 
 31: 
 32: 
 33: 
 34: 
 35: 
 36: export async function recordWordAttemptAction(
 37:   word: string,
 38:   kanglish: string,
 39:   kannada: string | null,
 40:   icon: string | null,
 41:   category: string | null,
 42:   correct: boolean
 43: ): Promise<ActionState<SelectWordStat>> {
 44:   try {
 45: 
 46:     const { userId } = await auth()
 47:     if (!userId) {
 48:       return {
 49:         isSuccess: false,
 50:         message: "Unauthorized: Please sign in to record word attempts"
 51:       }
 52:     }
 53: 
 54: 
 55:     const existingStats = await db
 56:       .select()
 57:       .from(wordStatsTable)
 58:       .where(
 59:         and(
 60:           eq(wordStatsTable.userId, userId),
 61:           eq(wordStatsTable.word, word)
 62:         )
 63:       )
 64: 
 65:     let updatedStat: SelectWordStat;
 66: 
 67: 
 68:     if (existingStats.length > 0) {
 69:       const existingStat = existingStats[0]
 70: 
 71:       const [result] = await db
 72:         .update(wordStatsTable)
 73:         .set({
 74:           totalAttempts: existingStat.totalAttempts + 1,
 75:           correctCount: existingStat.correctCount + (correct ? 1 : 0),
 76:           updatedAt: new Date()
 77:         })
 78:         .where(eq(wordStatsTable.id, existingStat.id))
 79:         .returning()
 80: 
 81:       updatedStat = result;
 82:     } else {
 83: 
 84:       const newWordStat: InsertWordStat = {
 85:         userId,
 86:         word,
 87:         kanglish,
 88:         kannada,
 89:         icon,
 90:         category,
 91:         totalAttempts: 1,
 92:         correctCount: correct ? 1 : 0
 93:       }
 94: 
 95:       const [result] = await db
 96:         .insert(wordStatsTable)
 97:         .values(newWordStat)
 98:         .returning()
 99: 
100:       updatedStat = result;
101:     }
102: 
103: 
104: 
105:     evaluateUserBadgesAction().catch(error => {
106:       console.error("Error evaluating badges after word attempt:", error)
107:     })
108: 
109:     return {
110:       isSuccess: true,
111:       message: existingStats.length > 0
112:         ? "Word attempt recorded successfully"
113:         : "New word statistic created successfully",
114:       data: updatedStat
115:     }
116:   } catch (error) {
117:     console.error("Error recording word attempt:", error)
118:     return {
119:       isSuccess: false,
120:       message: `Failed to record word attempt: ${error instanceof Error ? error.message : "Unknown error"}`
121:     }
122:   }
123: }
124: 
125: 
126: 
127: 
128: 
129: 
130: 
131: 
132: export async function getWordStatsAction(
133:   limit = 12
134: ): Promise<ActionState<WordStatistics[]>> {
135:   try {
136: 
137:     const { userId } = await auth()
138:     if (!userId) {
139:       return {
140:         isSuccess: false,
141:         message: "Unauthorized: Please sign in to view word statistics"
142:       }
143:     }
144: 
145:     try {
146: 
147:       const dbWordStats = await db
148:         .select()
149:         .from(wordStatsTable)
150:         .where(eq(wordStatsTable.userId, userId))
151:         .orderBy(desc(wordStatsTable.updatedAt))
152:         .limit(limit)
153: 
154: 
155:       if (dbWordStats.length > 0) {
156:         const formattedStats: WordStatistics[] = dbWordStats.map(stat => ({
157:           icon: stat.icon || null,
158:           english: stat.word,
159:           kannada: stat.kannada || null,
160:           kanglish: stat.kanglish,
161:           correctCount: stat.correctCount,
162:           totalAttempts: stat.totalAttempts,
163:           category: stat.category || null
164:         }))
165: 
166:         return {
167:           isSuccess: true,
168:           message: "Word statistics retrieved successfully from database",
169:           data: formattedStats
170:         }
171:       }
172:     } catch (error) {
173: 
174: 
175:       console.error("Error querying word stats table:", error)
176:       console.log("Falling back to mock data")
177:     }
178: 
179: 
180: 
181: 
182:     const csvPath = path.join(process.cwd(), "/public/data/kannada-kali-updated.csv")
183:     const csvData = await readFile(csvPath, "utf-8")
184: 
185: 
186:     const words = parseCsv(csvData)
187: 
188: 
189:     const wordStats: WordStatistics[] = words
190:       .filter(word => word.english && word.kanglish)
191:       .slice(0, limit)
192:       .map(word => {
193: 
194:         const totalAttempts = Math.floor(Math.random() * 10) + 1
195:         const correctCount = Math.floor(Math.random() * (totalAttempts + 1))
196: 
197:         return {
198:           icon: word.icon || null,
199:           english: word.english || "",
200:           kannada: word.kannada || null,
201:           kanglish: word.kanglish || "",
202:           correctCount,
203:           totalAttempts,
204:           category: word.category || null
205:         }
206:       })
207: 
208:     return {
209:       isSuccess: true,
210:       message: "Mock word statistics generated successfully",
211:       data: wordStats
212:     }
213:   } catch (error) {
214:     console.error("Error getting word statistics:", error)
215:     return {
216:       isSuccess: false,
217:       message: `Failed to get word statistics: ${error instanceof Error ? error.message : "Unknown error"}`
218:     }
219:   }
220: }
````

## File: actions/icon-actions.ts
````typescript
  1: "use server"
  2: 
  3: import { auth } from "@clerk/nextjs/server"
  4: import { readFile, writeFile, mkdir } from "fs/promises"
  5: import { existsSync } from "fs"
  6: import path from "path"
  7: import { parseCsv } from "@/lib/csv-parser"
  8: import { ActionState, KannadaEntry } from "@/types"
  9: 
 10: 
 11: 
 12: 
 13: 
 14: export async function downloadIconsAction(): Promise<ActionState<number>> {
 15: 
 16:   const { userId } = await auth()
 17:   if (!userId) {
 18:     return {
 19:       isSuccess: false,
 20:       message: "Unauthorized: Please sign in to download icons"
 21:     }
 22:   }
 23: 
 24:   try {
 25: 
 26:     const csvPath = process.cwd() + "/public/data/kannada-kali.csv"
 27:     const csvData = await readFile(csvPath, "utf-8")
 28: 
 29: 
 30:     const parsedData = parseCsv(csvData)
 31: 
 32: 
 33:     const iconsDir = path.join(process.cwd(), "public", "icons")
 34:     if (!existsSync(iconsDir)) {
 35:       await mkdir(iconsDir, { recursive: true })
 36:     }
 37: 
 38: 
 39:     let downloadedCount = 0
 40: 
 41: 
 42:     for (const entry of parsedData) {
 43:       if (entry.english && entry.icon) {
 44:         try {
 45: 
 46:           const response = await fetch(entry.icon)
 47:           if (!response.ok) {
 48:             console.error(`Failed to fetch icon for ${entry.english}: ${response.statusText}`)
 49:             continue
 50:           }
 51: 
 52: 
 53:           const buffer = await response.arrayBuffer()
 54: 
 55: 
 56:           const urlPath = new URL(entry.icon).pathname
 57:           const extension = path.extname(urlPath) || ".png"
 58: 
 59: 
 60:           const safeName = entry.english.toLowerCase().replace(/[^a-z0-9]/g, "-")
 61: 
 62: 
 63:           const filePath = path.join(iconsDir, `${safeName}${extension}`)
 64: 
 65: 
 66:           await writeFile(filePath, Buffer.from(buffer))
 67: 
 68:           downloadedCount++
 69:         } catch (error) {
 70:           console.error(`Error downloading icon for ${entry.english}:`, error)
 71:         }
 72:       }
 73:     }
 74: 
 75:     return {
 76:       isSuccess: true,
 77:       message: `Successfully downloaded ${downloadedCount} icons`,
 78:       data: downloadedCount
 79:     }
 80:   } catch (error) {
 81:     console.error("Error downloading icons:", error)
 82:     return {
 83:       isSuccess: false,
 84:       message: `Failed to download icons: ${error instanceof Error ? error.message : "Unknown error"}`
 85:     }
 86:   }
 87: }
 88: 
 89: 
 90: 
 91: 
 92: 
 93: 
 94: 
 95: export async function mapWordsToLocalIconsAction<T extends { english?: string, icon?: string | null }>(
 96:   words: T[]
 97: ): Promise<ActionState<T[]>> {
 98:   try {
 99:     return {
100:       isSuccess: true,
101:       message: "Successfully mapped words to local icons",
102:       data: words.map(word => {
103:         if (word.english) {
104:           const safeName = word.english.toLowerCase().replace(/[^a-z0-9]/g, "-")
105:           return {
106:             ...word,
107:             icon: `/icons/${safeName}.png`
108:           }
109:         }
110:         return word
111:       })
112:     }
113:   } catch (error) {
114:     console.error("Error mapping words to local icons:", error)
115:     return {
116:       isSuccess: false,
117:       message: `Failed to map words to local icons: ${error instanceof Error ? error.message : "Unknown error"}`
118:     }
119:   }
120: }
````

## File: actions/storage-actions.ts
````typescript
 1: "use server"
 2: 
 3: import { auth } from "@clerk/nextjs/server"
 4: import { supabaseClient } from "@/lib/supabase"
 5: import { ActionState } from "@/types"
 6: 
 7: 
 8: 
 9: 
10: 
11: 
12: 
13: export async function fetchAssetStorage(bucket: string, path: string): Promise<ActionState<{ url: string }>> {
14: 
15:   const { userId } = await auth()
16:   if (!userId) {
17:     return {
18:       isSuccess: false,
19:       message: "Unauthorized: Please sign in to access assets"
20:     }
21:   }
22: 
23: 
24:   if (!bucket || !path) {
25:     return {
26:       isSuccess: false,
27:       message: "Invalid input: Bucket and path are required"
28:     }
29:   }
30: 
31:   try {
32: 
33:     const { data, error } = await supabaseClient.storage
34:       .from(bucket)
35:       .createSignedUrl(path, 3600)
36: 
37:     if (error) throw error
38: 
39:     if (!data?.signedUrl) {
40:       throw new Error("Failed to generate signed URL")
41:     }
42: 
43:     return {
44:       isSuccess: true,
45:       message: "Asset URL fetched successfully",
46:       data: { url: data.signedUrl }
47:     }
48:   } catch (error) {
49:     console.error("Error fetching asset from Supabase Storage:", error)
50:     return {
51:       isSuccess: false,
52:       message: `Failed to fetch asset: ${error instanceof Error ? error.message : "Unknown error"}`
53:     }
54:   }
55: }
````

## File: actions/stripe-actions.ts
````typescript
  1: import {
  2:   updateProfileAction,
  3:   updateProfileByStripeCustomerIdAction
  4: } from "@/actions/db/profiles-actions"
  5: import { SelectProfile } from "@/db/schema"
  6: import { getStripe } from "@/lib/stripe"
  7: import Stripe from "stripe"
  8: 
  9: type MembershipStatus = SelectProfile["membership"]
 10: 
 11: const getMembershipStatus = (
 12:   status: Stripe.Subscription.Status,
 13:   membership: MembershipStatus
 14: ): MembershipStatus => {
 15:   switch (status) {
 16:     case "active":
 17:     case "trialing":
 18:       return membership
 19:     case "canceled":
 20:     case "incomplete":
 21:     case "incomplete_expired":
 22:     case "past_due":
 23:     case "paused":
 24:     case "unpaid":
 25:       return "free"
 26:     default:
 27:       return "free"
 28:   }
 29: }
 30: 
 31: const getSubscription = async (subscriptionId: string) => {
 32:   return getStripe().subscriptions.retrieve(subscriptionId, {
 33:     expand: ["default_payment_method"]
 34:   })
 35: }
 36: 
 37: export const updateStripeCustomer = async (
 38:   userId: string,
 39:   subscriptionId: string,
 40:   customerId: string
 41: ) => {
 42:   try {
 43:     if (!userId || !subscriptionId || !customerId) {
 44:       throw new Error("Missing required parameters for updateStripeCustomer")
 45:     }
 46: 
 47:     const subscription = await getSubscription(subscriptionId)
 48: 
 49:     const result = await updateProfileAction(userId, {
 50:       stripeCustomerId: customerId,
 51:       stripeSubscriptionId: subscription.id
 52:     })
 53: 
 54:     if (!result.isSuccess) {
 55:       throw new Error("Failed to update customer profile")
 56:     }
 57: 
 58:     return result.data
 59:   } catch (error) {
 60:     console.error("Error in updateStripeCustomer:", error)
 61:     throw error instanceof Error
 62:       ? error
 63:       : new Error("Failed to update Stripe customer")
 64:   }
 65: }
 66: 
 67: export const manageSubscriptionStatusChange = async (
 68:   subscriptionId: string,
 69:   customerId: string,
 70:   productId: string
 71: ): Promise<MembershipStatus> => {
 72:   try {
 73:     if (!subscriptionId || !customerId || !productId) {
 74:       throw new Error(
 75:         "Missing required parameters for manageSubscriptionStatusChange"
 76:       )
 77:     }
 78: 
 79:     const subscription = await getSubscription(subscriptionId)
 80:     const product = await getStripe().products.retrieve(productId)
 81:     const membership = product.metadata.membership as MembershipStatus
 82: 
 83:     if (!["free", "pro"].includes(membership)) {
 84:       throw new Error(
 85:         `Invalid membership type in product metadata: ${membership}`
 86:       )
 87:     }
 88: 
 89:     const membershipStatus = getMembershipStatus(
 90:       subscription.status,
 91:       membership
 92:     )
 93: 
 94:     const updateResult = await updateProfileByStripeCustomerIdAction(
 95:       customerId,
 96:       { stripeSubscriptionId: subscription.id, membership: membershipStatus }
 97:     )
 98: 
 99:     if (!updateResult.isSuccess) {
100:       throw new Error("Failed to update subscription status")
101:     }
102: 
103:     return membershipStatus
104:   } catch (error) {
105:     console.error("Error in manageSubscriptionStatusChange:", error)
106:     throw error instanceof Error
107:       ? error
108:       : new Error("Failed to update subscription status")
109:   }
110: }
````

## File: app/_components/leaderboard-container.tsx
````typescript
1: "use server"
2: 
3: import { LeaderboardSection } from "@/components/ui/leaderboard-section"
4: import { auth } from "@clerk/nextjs/server"
5: 
6: export default async function LeaderboardContainer() {
7:   return <LeaderboardSection />
8: }
````

## File: app/(auth)/layout.tsx
````typescript
 1: "use server"
 2: 
 3: interface AuthLayoutProps {
 4:   children: React.ReactNode
 5: }
 6: 
 7: export default async function AuthLayout({ children }: AuthLayoutProps) {
 8:   return (
 9:     <div className="flex h-screen items-center justify-center">{children}</div>
10:   )
11: }
````

## File: app/(auth)/login/[[...login]]/page.tsx
````typescript
 1: "use server"
 2: 
 3: import { SignIn } from "@clerk/nextjs"
 4: 
 5: export default async function LoginPage() {
 6:   return (
 7:     <div className="bg-background flex min-h-screen items-center justify-center">
 8:       <SignIn
 9:         routing="path"
10:         path="/login"
11:         signUpUrl="/signup"
12:         appearance={{
13:           elements: {
14:             formButtonPrimary: "bg-accent text-white hover:bg-accent/90",
15:             card: "shadow-sm rounded-lg"
16:           }
17:         }}
18:       />
19:     </div>
20:   )
21: }
````

## File: app/(auth)/signup/[[...signup]]/page.tsx
````typescript
 1: "use server"
 2: 
 3: import { SignUp } from "@clerk/nextjs"
 4: 
 5: export default async function SignUpPage() {
 6:   return (
 7:     <div className="bg-background flex min-h-screen items-center justify-center">
 8:       <SignUp
 9:         routing="path"
10:         path="/signup"
11:         signInUrl="/login"
12:         appearance={{
13:           elements: {
14:             formButtonPrimary: "bg-accent text-white hover:bg-accent/90",
15:             card: "shadow-sm rounded-lg"
16:           }
17:         }}
18:       />
19:     </div>
20:   )
21: }
````

## File: app/(dashboard)/_components/leaderboard-container.tsx
````typescript
 1: "use server"
 2: 
 3: import {
 4:   getLeaderboardAction,
 5:   getLeaderboardCategoriesAction
 6: } from "@/actions/db/leaderboard-actions"
 7: import Leaderboard from "@/components/leaderboard"
 8: import { auth } from "@clerk/nextjs/server"
 9: 
10: async function fetchLeaderboardData(category?: string) {
11:   const { isSuccess, data } = await getLeaderboardAction(category)
12: 
13:   if (!isSuccess || !data) {
14:     return { leaders: [], currentUserRank: undefined }
15:   }
16: 
17:   return {
18:     leaders: data.leaders,
19:     currentUserRank: data.currentUserRank
20:   }
21: }
22: 
23: async function fetchCategories() {
24:   const { isSuccess, data } = await getLeaderboardCategoriesAction()
25: 
26:   if (!isSuccess || !data) {
27:     return []
28:   }
29: 
30:   return data
31: }
32: 
33: export default async function LeaderboardContainer() {
34: 
35:   const session = await auth()
36:   if (!session?.userId) return null
37: 
38: 
39:   const [leaderboardData, categories] = await Promise.all([
40:     fetchLeaderboardData(),
41:     fetchCategories()
42:   ])
43: 
44: 
45:   async function handleCategoryChange(category: string | null) {
46:     "use server"
47:     return await fetchLeaderboardData(category || undefined)
48:   }
49: 
50:   return (
51:     <Leaderboard
52:       initialLeaders={leaderboardData.leaders}
53:       initialUserRank={leaderboardData.currentUserRank}
54:       categories={categories}
55:       onCategoryChange={handleCategoryChange}
56:     />
57:   )
58: }
````

## File: app/admin/_components/admin-icons.tsx
````typescript
  1: "use client"
  2: 
  3: import { useState } from "react"
  4: import { Button } from "@/components/ui/button"
  5: import {
  6:   Card,
  7:   CardContent,
  8:   CardDescription,
  9:   CardFooter,
 10:   CardHeader,
 11:   CardTitle
 12: } from "@/components/ui/card"
 13: import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
 14: import { AlertCircle, Download, CheckCircle2 } from "lucide-react"
 15: 
 16: export function AdminIcons() {
 17:   const [isLoading, setIsLoading] = useState(false)
 18:   const [result, setResult] = useState<{
 19:     success: boolean
 20:     message: string
 21:     count?: number
 22:   } | null>(null)
 23: 
 24:   const handleDownloadIcons = async () => {
 25:     try {
 26:       setIsLoading(true)
 27:       setResult(null)
 28: 
 29:       const response = await fetch("/api/icons", {
 30:         method: "GET",
 31:         headers: {
 32:           "Content-Type": "application/json"
 33:         }
 34:       })
 35: 
 36:       const data = await response.json()
 37: 
 38:       if (!response.ok) {
 39:         throw new Error(data.error || "Failed to download icons")
 40:       }
 41: 
 42:       setResult({
 43:         success: true,
 44:         message: data.message,
 45:         count: data.count
 46:       })
 47:     } catch (error) {
 48:       console.error("Error downloading icons:", error)
 49:       setResult({
 50:         success: false,
 51:         message:
 52:           error instanceof Error
 53:             ? error.message
 54:             : "Unknown error downloading icons"
 55:       })
 56:     } finally {
 57:       setIsLoading(false)
 58:     }
 59:   }
 60: 
 61:   return (
 62:     <Card>
 63:       <CardHeader>
 64:         <CardTitle>Icon Management</CardTitle>
 65:         <CardDescription>
 66:           Download icons from the CSV file to the public/icons directory
 67:         </CardDescription>
 68:       </CardHeader>
 69:       <CardContent>
 70:         <p className="text-muted-foreground mb-4 text-sm">
 71:           The CSV file contains URLs to icons for each word. This tool will
 72:           download all the icons and save them to the public/icons directory,
 73:           making them available for use in the application.
 74:         </p>
 75: 
 76:         {result && (
 77:           <Alert
 78:             variant={result.success ? "default" : "destructive"}
 79:             className="my-4"
 80:           >
 81:             {result.success ? (
 82:               <CheckCircle2 className="size-4" />
 83:             ) : (
 84:               <AlertCircle className="size-4" />
 85:             )}
 86:             <AlertTitle>{result.success ? "Success" : "Error"}</AlertTitle>
 87:             <AlertDescription>
 88:               {result.message}
 89:               {result.success && result.count !== undefined && (
 90:                 <span className="mt-1 block">
 91:                   Downloaded {result.count} icons
 92:                 </span>
 93:               )}
 94:             </AlertDescription>
 95:           </Alert>
 96:         )}
 97:       </CardContent>
 98:       <CardFooter>
 99:         <Button onClick={handleDownloadIcons} disabled={isLoading}>
100:           <Download className="mr-2 size-4" />
101:           {isLoading ? "Downloading..." : "Download Icons"}
102:         </Button>
103:       </CardFooter>
104:     </Card>
105:   )
106: }
````

## File: app/admin/page.tsx
````typescript
 1: "use server"
 2: 
 3: import { auth } from "@clerk/nextjs/server"
 4: import { redirect } from "next/navigation"
 5: import { AdminIcons } from "./_components/admin-icons"
 6: 
 7: export default async function AdminPage() {
 8: 
 9:   const { userId } = await auth()
10: 
11:   if (!userId) {
12:     return redirect("/sign-in")
13:   }
14: 
15: 
16: 
17: 
18: 
19:   return (
20:     <div className="container py-8">
21:       <h1 className="mb-8 text-3xl font-bold">Admin Dashboard</h1>
22: 
23:       <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
24:         <AdminIcons />
25: 
26:         {}
27:       </div>
28:     </div>
29:   )
30: }
````

## File: app/admin/profiles/page.tsx
````typescript
 1: "use server"
 2: 
 3: import { Suspense } from "react"
 4: import { db } from "@/db/db"
 5: import { profilesTable } from "@/db/schema"
 6: import { auth } from "@clerk/nextjs/server"
 7: import { desc } from "drizzle-orm"
 8: 
 9: export default async function ProfilesAdminPage() {
10:   return (
11:     <div className="container mx-auto py-8">
12:       <h1 className="mb-6 text-3xl font-bold">Profile Sync Status</h1>
13: 
14:       <div className="bg-card rounded-lg p-6 shadow-sm">
15:         <Suspense fallback={<div>Loading profiles...</div>}>
16:           <ProfilesList />
17:         </Suspense>
18:       </div>
19:     </div>
20:   )
21: }
22: 
23: async function ProfilesList() {
24: 
25:   const { userId } = await auth()
26:   if (!userId) {
27:     return (
28:       <div className="text-destructive">
29:         You must be signed in to view this page
30:       </div>
31:     )
32:   }
33: 
34: 
35:   const profiles = await db
36:     .select()
37:     .from(profilesTable)
38:     .orderBy(desc(profilesTable.updatedAt))
39:     .limit(50)
40: 
41:   if (profiles.length === 0) {
42:     return <div>No profiles have been synced yet.</div>
43:   }
44: 
45:   return (
46:     <>
47:       <div className="text-muted-foreground mb-4 text-sm">
48:         Showing the most recent {profiles.length} synced profiles
49:       </div>
50: 
51:       <div className="overflow-x-auto">
52:         <table className="w-full border-collapse">
53:           <thead>
54:             <tr className="bg-muted/50">
55:               <th className="p-2 text-left">User ID</th>
56:               <th className="p-2 text-left">Display Name</th>
57:               <th className="p-2 text-left">Email</th>
58:               <th className="p-2 text-left">Last Updated</th>
59:             </tr>
60:           </thead>
61:           <tbody>
62:             {profiles.map(profile => (
63:               <tr
64:                 key={profile.userId}
65:                 className="border-border hover:bg-muted/20 border-b"
66:               >
67:                 <td className="p-2 font-mono text-xs">{profile.userId}</td>
68:                 <td className="p-2">
69:                   <div className="flex items-center">
70:                     {profile.profileImageUrl && (
71:                       <img
72:                         src={profile.profileImageUrl}
73:                         alt={profile.displayName || "User"}
74:                         className="mr-2 size-8 rounded-full"
75:                       />
76:                     )}
77:                     {profile.displayName || "Unknown User"}
78:                   </div>
79:                 </td>
80:                 <td className="p-2">{profile.email || "No email"}</td>
81:                 <td className="text-muted-foreground p-2 text-sm">
82:                   {new Date(profile.updatedAt).toLocaleString()}
83:                 </td>
84:               </tr>
85:             ))}
86:           </tbody>
87:         </table>
88:       </div>
89:     </>
90:   )
91: }
````

## File: app/api/clerk-webhook/route.ts
````typescript
  1: import { syncUserProfileWithDataAction } from "@/actions/db/profiles-actions"
  2: import { Webhook } from "svix"
  3: import { WebhookEvent } from "@clerk/nextjs/server"
  4: import { NextResponse } from "next/server"
  5: import { headers } from "next/headers"
  6: 
  7: export async function POST(req: Request) {
  8:   try {
  9: 
 10:     const headersList = await headers()
 11: 
 12: 
 13:     const svix_id = headersList.get("svix-id")
 14:     const svix_timestamp = headersList.get("svix-timestamp")
 15:     const svix_signature = headersList.get("svix-signature")
 16: 
 17: 
 18:     if (!svix_id || !svix_timestamp || !svix_signature) {
 19:       return new Response("Error: Missing svix headers", {
 20:         status: 400
 21:       })
 22:     }
 23: 
 24: 
 25:     const payload = await req.json()
 26:     const body = JSON.stringify(payload)
 27: 
 28: 
 29:     const webhookSecret = process.env.CLERK_WEBHOOK_SECRET
 30: 
 31: 
 32:     if (!webhookSecret) {
 33:       console.error("Error: No webhook secret found")
 34:       return new Response("Error: No webhook secret found", {
 35:         status: 500
 36:       })
 37:     }
 38: 
 39: 
 40:     const webhook = new Webhook(webhookSecret)
 41: 
 42:     let event: WebhookEvent
 43: 
 44:     try {
 45: 
 46:       event = webhook.verify(body, {
 47:         "svix-id": svix_id,
 48:         "svix-timestamp": svix_timestamp,
 49:         "svix-signature": svix_signature
 50:       }) as WebhookEvent
 51:     } catch (error) {
 52:       console.error("Error verifying webhook:", error)
 53:       return new Response("Error verifying webhook", {
 54:         status: 400
 55:       })
 56:     }
 57: 
 58: 
 59:     const { id } = event.data
 60:     const eventType = event.type
 61: 
 62:     console.log(`Webhook received: ${eventType} for user: ${id}`)
 63: 
 64: 
 65:     if (eventType === "user.created" || eventType === "user.updated") {
 66:       const {
 67:         id: userId,
 68:         first_name,
 69:         last_name,
 70:         image_url,
 71:         email_addresses
 72:       } = event.data
 73: 
 74:       const primaryEmail = email_addresses?.[0]?.email_address
 75:       let fullName = ""
 76: 
 77:       if (first_name && last_name) {
 78:         fullName = `${first_name} ${last_name}`
 79:       } else if (first_name) {
 80:         fullName = first_name as string
 81:       } else if (last_name) {
 82:         fullName = last_name as string
 83:       }
 84: 
 85:       // Sync the user profile
 86:       console.log(`Syncing profile for ${userId} (${fullName})`)
 87: 
 88:       if (userId) {
 89:         const result = await syncUserProfileWithDataAction({
 90:           userId: userId as string,
 91:           displayName: fullName || `User ${(userId as string).substring(0, 6)}`,
 92:           email: primaryEmail,
 93:           profileImageUrl: (image_url as string) || undefined
 94:         })
 95: 
 96:         if (result.isSuccess) {
 97:           console.log(`Successfully synced profile for user ${userId}`)
 98:         } else {
 99:           console.error(
100:             `Failed to sync profile for user ${userId}: ${result.message}`
101:           )
102:         }
103:       }
104:     }
105: 
106:     return NextResponse.json({ success: true })
107:   } catch (error) {
108:     console.error("Error handling webhook:", error)
109:     return new Response("Error handling webhook", {
110:       status: 500
111:     })
112:   }
113: }
````

## File: app/api/connect/route.ts
````typescript
 1: import { NextRequest, NextResponse } from "next/server";
 2: 
 3: export async function POST(request: NextRequest) {
 4:     if (request.method !== "POST") {
 5:       return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
 6:     }
 7: 
 8:     try {
 9:         const { personality } = await request.json();
10: 
11: 
12:         const agentPersonality = personality || 'witty';
13: 
14:         console.log("Request body:", request.body);
15:         console.log("Using personality:", agentPersonality);
16: 
17: 
18: 
19:     console.log("Environment check:", {
20:         hasApiKey: !!process.env.PIPECAT_CLOUD_API_KEY,
21:         apiKeyLength: process.env.PIPECAT_CLOUD_API_KEY?.length,
22:         agentName: process.env.AGENT_NAME,
23:       });
24: 
25:     const response = await fetch(
26:         `https://api.pipecat.daily.co/v1/public/${process.env.AGENT_NAME}/start`,
27:         {
28:           method: "POST",
29:           headers: {
30:             Authorization: `Bearer ${process.env.PIPECAT_CLOUD_API_KEY}`,
31:             "Content-Type": "application/json",
32:           },
33:           body: JSON.stringify({
34:             createDailyRoom: true,
35:             body: {
36:               personality: agentPersonality,
37:             },
38:           }),
39:         }
40:       );
41: 
42: 
43:       console.log("Pipecat API response status:", response.status);
44: 
45:       const data = await response.json();
46:       console.log("Response from Pipecat API:", JSON.stringify(data, null, 2));
47: 
48: 
49:       if (!response.ok) {
50:         console.error("Pipecat API error:", data);
51:         return NextResponse.json({
52:           error: "Pipecat API error",
53:           details: data
54:         }, { status: response.status });
55:       }
56: 
57: 
58:       if (!data.dailyRoom || !data.dailyToken) {
59:         console.error("Missing required fields in Pipecat response:", data);
60:         return NextResponse.json({
61:           error: "Invalid response from Pipecat API",
62:           received: data
63:         }, { status: 500 });
64:       }
65: 
66: 
67:     return NextResponse.json({
68:         room_url: data.dailyRoom,
69:         token: data.dailyToken,
70:       });
71:     } catch (error) {
72:       console.error("Error starting agent:", error);
73:       return NextResponse.json({
74:         error: "Failed to start agent",
75:         details: error instanceof Error ? error.message : String(error)
76:       }, { status: 500 });
77:     }
78:   }
````

## File: app/api/icons/route.ts
````typescript
 1: import { NextResponse } from "next/server"
 2: import { auth } from "@clerk/nextjs/server"
 3: import { downloadIconsAction } from "@/actions/icon-actions"
 4: 
 5: 
 6: 
 7: 
 8: 
 9: 
10: export async function GET() {
11:   const { userId } = await auth()
12: 
13:   if (!userId) {
14:     return NextResponse.json(
15:       { error: "Unauthorized: Please sign in to download icons" },
16:       { status: 401 }
17:     )
18:   }
19: 
20:   try {
21:     const result = await downloadIconsAction()
22: 
23:     if (!result.isSuccess) {
24:       return NextResponse.json({ error: result.message }, { status: 500 })
25:     }
26: 
27:     return NextResponse.json({
28:       message: result.message,
29:       count: result.data
30:     })
31:   } catch (error) {
32:     console.error("Error in icon download API:", error)
33:     return NextResponse.json(
34:       { error: "Internal server error downloading icons" },
35:       { status: 500 }
36:     )
37:   }
38: }
````

## File: app/api/stripe/webhooks/route.ts
````typescript
 1: import {
 2:   manageSubscriptionStatusChange,
 3:   updateStripeCustomer
 4: } from "@/actions/stripe-actions"
 5: import { getStripe } from "@/lib/stripe"
 6: import { headers } from "next/headers"
 7: import Stripe from "stripe"
 8: 
 9: const relevantEvents = new Set([
10:   "checkout.session.completed",
11:   "customer.subscription.updated",
12:   "customer.subscription.deleted"
13: ])
14: 
15: export async function POST(req: Request) {
16:   const body = await req.text()
17:   const sig = (await headers()).get("Stripe-Signature") as string
18:   const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
19:   let event: Stripe.Event
20: 
21:   try {
22:     if (!sig || !webhookSecret) {
23:       throw new Error("Webhook secret or signature missing")
24:     }
25: 
26:     const stripe = getStripe()
27:     event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
28:   } catch (err: any) {
29:     console.error(`Webhook Error: ${err.message}`)
30:     return new Response(`Webhook Error: ${err.message}`, { status: 400 })
31:   }
32: 
33:   if (relevantEvents.has(event.type)) {
34:     try {
35:       switch (event.type) {
36:         case "customer.subscription.updated":
37:         case "customer.subscription.deleted":
38:           await handleSubscriptionChange(event)
39:           break
40: 
41:         case "checkout.session.completed":
42:           await handleCheckoutSession(event)
43:           break
44: 
45:         default:
46:           throw new Error("Unhandled relevant event!")
47:       }
48:     } catch (error) {
49:       console.error("Webhook handler failed:", error)
50:       return new Response(
51:         "Webhook handler failed. View your nextjs function logs.",
52:         { status: 400 }
53:       )
54:     }
55:   }
56: 
57:   return new Response(JSON.stringify({ received: true }))
58: }
59: 
60: async function handleSubscriptionChange(event: Stripe.Event) {
61:   const subscription = event.data.object as Stripe.Subscription
62:   const productId = subscription.items.data[0].price.product as string
63:   await manageSubscriptionStatusChange(
64:     subscription.id,
65:     subscription.customer as string,
66:     productId
67:   )
68: }
69: 
70: async function handleCheckoutSession(event: Stripe.Event) {
71:   const checkoutSession = event.data.object as Stripe.Checkout.Session
72:   if (checkoutSession.mode === "subscription") {
73:     const subscriptionId = checkoutSession.subscription as string
74:     await updateStripeCustomer(
75:       checkoutSession.client_reference_id as string,
76:       subscriptionId,
77:       checkoutSession.customer as string
78:     )
79: 
80:     const subscription = await getStripe().subscriptions.retrieve(
81:       subscriptionId,
82:       {
83:         expand: ["default_payment_method"]
84:       }
85:     )
86: 
87:     const productId = subscription.items.data[0].price.product as string
88:     await manageSubscriptionStatusChange(
89:       subscription.id,
90:       subscription.customer as string,
91:       productId
92:     )
93:   }
94: }
````

## File: app/api/sync-profiles/route.ts
````typescript
 1: "use server"
 2: 
 3: import { auth } from "@clerk/nextjs/server"
 4: import { NextRequest, NextResponse } from "next/server"
 5: import { syncUserProfileAction } from "@/actions/db/profiles-actions"
 6: 
 7: 
 8: 
 9: 
10: 
11: export async function POST(req: NextRequest) {
12:   try {
13: 
14:     const session = await auth()
15:     if (!session?.userId) {
16:       return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
17:     }
18: 
19: 
20:     const result = await syncUserProfileAction()
21: 
22:     if (!result.isSuccess) {
23:       return NextResponse.json({ error: result.message }, { status: 500 })
24:     }
25: 
26:     return NextResponse.json({
27:       success: true,
28:       message: "Profile synced successfully",
29:       profile: result.data
30:     })
31:   } catch (error) {
32:     console.error("Profile sync error:", error)
33:     return NextResponse.json(
34:       { error: "Failed to sync profiles" },
35:       { status: 500 }
36:     )
37:   }
38: }
````

## File: app/badges/_components/badge-detail.tsx
````typescript
 1: "use client"
 2: 
 3: import {
 4:   Dialog,
 5:   DialogContent,
 6:   DialogDescription,
 7:   DialogHeader,
 8:   DialogTitle
 9: } from "@/components/ui/dialog"
10: import {
11:   BadgeDefinition,
12:   formatBadgeProgress,
13:   getLevelRequirement
14: } from "@/lib/utils/badge-utils"
15: import { SelectBadge } from "@/db/schema"
16: import Image from "next/image"
17: 
18: interface BadgeDetailProps {
19:   open: boolean
20:   onOpenChange: (open: boolean) => void
21:   definition: BadgeDefinition
22:   userBadge?: SelectBadge
23: }
24: 
25: 
26: 
27: 
28: export default function BadgeDetail({
29:   open,
30:   onOpenChange,
31:   definition,
32:   userBadge
33: }: BadgeDetailProps) {
34:   const isEarned = !!userBadge
35:   const currentLevel = userBadge?.currentLevel || 0
36:   const progress = userBadge?.progress || 0
37:   const maxLevel = definition.hasLevels ? 5 : 1
38: 
39:   return (
40:     <Dialog open={open} onOpenChange={onOpenChange}>
41:       <DialogContent className="flex flex-col items-center text-center sm:max-w-md">
42:         <DialogHeader className="w-full">
43:           <DialogTitle className="flex flex-col items-center gap-2 text-center">
44:             <div className="relative size-24">
45:               <Image
46:                 src={definition.imageUrl}
47:                 alt={definition.englishName}
48:                 fill
49:                 className={`object-contain transition-opacity duration-300 ${!isEarned ? "opacity-20" : "opacity-100"}`}
50:               />
51:             </div>
52:             <span>{definition.kannadaName}</span>
53:           </DialogTitle>
54:           <DialogDescription className="text-center">
55:             {definition.englishName} - {definition.displayText}
56:           </DialogDescription>
57:         </DialogHeader>
58: 
59:         <div className="flex w-full flex-col items-center space-y-4">
60:           <div className="text-center font-medium">
61:             {isEarned
62:               ? `Earned on ${new Date(userBadge.earnedAt).toLocaleDateString()}`
63:               : "Not yet earned"}
64:           </div>
65: 
66:           {}
67:           {isEarned && (
68:             <div className="space-y-2 text-center">
69:               <h4 className="text-sm font-medium">Progress</h4>
70:               <div className="text-sm">
71:                 <div className="mb-1 font-medium text-emerald-700">
72:                   Level {currentLevel} out of {maxLevel}
73:                 </div>
74: 
75:                 {definition.hasLevels && currentLevel < maxLevel && (
76:                   <div className="text-blue-600">
77:                     {formatBadgeProgress(definition, currentLevel, progress)}
78:                   </div>
79:                 )}
80: 
81:                 {(currentLevel >= maxLevel || !definition.hasLevels) && (
82:                   <div className="text-emerald-700">
83:                     Maximum level achieved!
84:                   </div>
85:                 )}
86:               </div>
87:             </div>
88:           )}
89: 
90:           <div className="w-full space-y-2 text-center">
91:             <h4 className="text-sm font-medium">How to earn</h4>
92:             <p className="text-sm text-gray-600">{definition.tableLogic}</p>
93:           </div>
94:         </div>
95:       </DialogContent>
96:     </Dialog>
97:   )
98: }
````

## File: app/badges/_components/badge-grid.tsx
````typescript
 1: "use client"
 2: 
 3: import { BadgeDefinition } from "@/lib/utils/badge-utils"
 4: import { SelectBadge } from "@/db/schema"
 5: import BadgeItem from "./badge-item"
 6: import BadgeSync from "./badge-sync"
 7: 
 8: interface BadgeGridProps {
 9:   badgeDefinitions: BadgeDefinition[]
10:   userBadges: SelectBadge[]
11: }
12: 
13: 
14: 
15: 
16: export default function BadgeGrid({
17:   badgeDefinitions,
18:   userBadges
19: }: BadgeGridProps) {
20: 
21:   const userBadgeMap = new Map(userBadges.map(badge => [badge.badgeId, badge]))
22: 
23:   return (
24:     <>
25:       {}
26:       <BadgeSync userBadges={userBadges} />
27: 
28:       <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
29:         {badgeDefinitions.map(badgeDefinition => {
30: 
31:           const userBadge = userBadgeMap.get(badgeDefinition.badgeId)
32: 
33:           return (
34:             <BadgeItem
35:               key={badgeDefinition.badgeId}
36:               definition={badgeDefinition}
37:               userBadge={userBadge}
38:             />
39:           )
40:         })}
41:       </div>
42:     </>
43:   )
44: }
````

## File: app/badges/_components/badge-item.tsx
````typescript
 1: "use client"
 2: 
 3: import Image from "next/image"
 4: import { useState } from "react"
 5: import { BadgeDefinition, formatBadgeProgress } from "@/lib/utils/badge-utils"
 6: import { SelectBadge } from "@/db/schema"
 7: import { cn } from "@/lib/utils"
 8: import BadgeDetail from "./badge-detail"
 9: 
10: interface BadgeItemProps {
11:   definition: BadgeDefinition
12:   userBadge?: SelectBadge
13: }
14: 
15: 
16: 
17: 
18: export default function BadgeItem({ definition, userBadge }: BadgeItemProps) {
19:   const [detailOpen, setDetailOpen] = useState(false)
20:   const isEarned = !!userBadge
21:   const currentLevel = userBadge?.currentLevel || 0
22:   const progress = userBadge?.progress || 0
23:   const maxLevel = definition.hasLevels ? 5 : 1
24: 
25:   return (
26:     <>
27:       <div
28:         className="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-md transition-all hover:shadow-lg"
29:         onClick={() => setDetailOpen(true)}
30:       >
31:         <div className="relative mb-4 size-24">
32:           <Image
33:             src={definition.imageUrl}
34:             alt={definition.englishName}
35:             fill
36:             className={cn(
37:               "object-contain transition-opacity duration-300",
38:               isEarned ? "opacity-100" : "opacity-20"
39:             )}
40:           />
41:         </div>
42: 
43:         <h3 className="mb-1 text-center text-lg font-medium">
44:           {definition.kannadaName}
45:         </h3>
46: 
47:         {isEarned && (
48:           <p className="mb-2 text-center text-sm text-gray-600">
49:             {definition.englishName}
50:           </p>
51:         )}
52: 
53:         <div className="mt-auto">
54:           {isEarned ? (
55:             <div className="text-center text-xs font-medium text-emerald-700">
56:               Level {currentLevel} out of {maxLevel}
57:             </div>
58:           ) : (
59:             <div className="text-center text-xs text-gray-500">
60:               Not yet earned
61:             </div>
62:           )}
63:         </div>
64:       </div>
65: 
66:       <BadgeDetail
67:         open={detailOpen}
68:         onOpenChange={setDetailOpen}
69:         definition={definition}
70:         userBadge={userBadge}
71:       />
72:     </>
73:   )
74: }
````

## File: app/badges/_components/badge-sync.tsx
````typescript
 1: "use client"
 2: 
 3: import { useEffect } from "react"
 4: import { useRouter } from "next/navigation"
 5: import { SelectBadge } from "@/db/schema"
 6: 
 7: interface BadgeSyncProps {
 8:   userBadges: SelectBadge[]
 9:   checkInterval?: number
10: }
11: 
12: 
13: 
14: 
15: export default function BadgeSync({
16:   userBadges,
17:   checkInterval = 5000
18: }: BadgeSyncProps) {
19:   const router = useRouter()
20: 
21: 
22:   useEffect(() => {
23:     const interval = setInterval(() => {
24:       router.refresh()
25:     }, checkInterval)
26: 
27:     return () => clearInterval(interval)
28:   }, [router, checkInterval])
29: 
30: 
31:   return null
32: }
````

## File: app/badges/layout.tsx
````typescript
 1: "use server"
 2: 
 3: interface BadgesLayoutProps {
 4:   children: React.ReactNode
 5: }
 6: 
 7: 
 8: 
 9: 
10: export default async function BadgesLayout({ children }: BadgesLayoutProps) {
11:   return <div className="min-h-[calc(100vh-16rem)] w-full">{children}</div>
12: }
````

## File: app/badges/page.tsx
````typescript
 1: "use server"
 2: 
 3: import { auth } from "@clerk/nextjs/server"
 4: import { getUserBadgesAction } from "@/actions/db/badges-actions"
 5: import { getBadgeDefinitionsAction } from "@/actions/badges-actions"
 6: import { evaluateUserBadgesAction } from "@/actions/badge-evaluation-actions"
 7: import BadgeGrid from "./_components/badge-grid"
 8: import { SelectBadge } from "@/db/schema"
 9: import Link from "next/link"
10: import { Users } from "lucide-react"
11: 
12: 
13: 
14: 
15: export default async function BadgesPage() {
16: 
17:   const { userId } = await auth()
18: 
19: 
20: 
21:   if (userId) {
22:     evaluateUserBadgesAction().catch(error => {
23:       console.error("Error evaluating badges on page load:", error)
24:     })
25:   }
26: 
27: 
28:   let userBadges: SelectBadge[] = []
29:   if (userId) {
30:     const result = await getUserBadgesAction(userId)
31:     if (result.isSuccess) {
32:       userBadges = result.data
33:     }
34:   }
35: 
36: 
37:   const badgeDefinitions = await getBadgeDefinitionsAction()
38: 
39:   return (
40:     <div className="container mx-auto py-8">
41:       <h1 className="mb-8 text-center text-3xl font-bold">Your Achievements</h1>
42: 
43:       <div className="mx-auto max-w-4xl">
44:         <p className="mb-8 text-center text-gray-600">
45:           Earn badges by completing challenges and improving your Kannada
46:           skills!
47:         </p>
48: 
49:         <BadgeGrid
50:           badgeDefinitions={badgeDefinitions}
51:           userBadges={userBadges}
52:         />
53: 
54:         <div className="mt-10 flex justify-center">
55:           <Link
56:             href="/parental"
57:             className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 rounded-md px-4 py-2 transition-colors"
58:           >
59:             <Users className="size-5" />
60:             Parental Dashboard
61:           </Link>
62:         </div>
63:       </div>
64:     </div>
65:   )
66: }
````

## File: app/cards/_components/card-client-wrapper.tsx
````typescript
 1: "use client"
 2: 
 3: 
 4: 
 5: 
 6: 
 7: 
 8: 
 9: 
10: 
11: 
12: 
13: 
14: 
15: 
16: import { CardDisplay } from "@/components/ui/card-display"
17: import { KannadaEntry } from "@/types"
18: 
19: interface CardClientWrapperProps {
20:   entry: KannadaEntry
21: }
22: 
23: export function CardClientWrapper({ entry }: CardClientWrapperProps) {
24:   return <CardDisplay entry={entry} />
25: }
````

## File: app/cards/_components/card-grid.tsx
````typescript
  1: "use client"
  2: 
  3: 
  4: 
  5: 
  6: 
  7: 
  8: 
  9: 
 10: 
 11: 
 12: 
 13: 
 14: 
 15: 
 16: 
 17: 
 18: 
 19: 
 20: 
 21: import { useEffect, useState } from "react"
 22: import { loadCsvAction } from "@/actions/csv-actions"
 23: import { CardDisplay } from "@/components/ui/card-display"
 24: import { CategoryFilter } from "@/components/ui/category-filter"
 25: import { KannadaEntry } from "@/types"
 26: 
 27: export function CardGrid() {
 28:   const [entries, setEntries] = useState<KannadaEntry[]>([])
 29:   const [categories, setCategories] = useState<string[]>([])
 30:   const [activeCategory, setActiveCategory] = useState<string | null>(null)
 31:   const [error, setError] = useState<string | null>(null)
 32:   const [isLoading, setIsLoading] = useState(true)
 33: 
 34: 
 35:   useEffect(() => {
 36:     const fetchData = async () => {
 37:       try {
 38:         const result = await loadCsvAction()
 39:         setIsLoading(false)
 40: 
 41:         if (!result.isSuccess || !result.data) {
 42:           setError(result.message)
 43:           return
 44:         }
 45: 
 46:         setEntries(result.data)
 47: 
 48: 
 49:         const uniqueCategories = Array.from(
 50:           new Set(result.data.map(entry => entry.category).filter(Boolean))
 51:         ) as string[]
 52: 
 53:         setCategories(uniqueCategories)
 54:       } catch (err) {
 55:         setIsLoading(false)
 56:         setError("Failed to load cards data")
 57:         console.error(err)
 58:       }
 59:     }
 60: 
 61:     fetchData()
 62:   }, [])
 63: 
 64: 
 65:   const filteredEntries = activeCategory
 66:     ? entries.filter(entry => entry.category === activeCategory)
 67:     : entries
 68: 
 69: 
 70:   const handleCategorySelect = (category: string | null) => {
 71:     setActiveCategory(category)
 72:   }
 73: 
 74: 
 75:   if (isLoading) {
 76:     return <div className="text-center">Loading cards...</div>
 77:   }
 78: 
 79: 
 80:   if (error) {
 81:     return <div className="text-destructive text-center">{error}</div>
 82:   }
 83: 
 84: 
 85:   if (entries.length === 0) {
 86:     return (
 87:       <div className="text-muted-foreground text-center">
 88:         No cards available to display.
 89:       </div>
 90:     )
 91:   }
 92: 
 93:   return (
 94:     <div>
 95:       {}
 96:       <CategoryFilter
 97:         categories={categories}
 98:         activeCategory={activeCategory}
 99:         onCategorySelect={handleCategorySelect}
100:       />
101: 
102:       {}
103:       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
104:         {filteredEntries.map((entry, index) => (
105:           <CardDisplay key={index} entry={entry} />
106:         ))}
107:       </div>
108:     </div>
109:   )
110: }
````

## File: app/cards/_components/cards-fetcher.tsx
````typescript
 1: "use server"
 2: 
 3: 
 4: 
 5: 
 6: 
 7: 
 8: 
 9: 
10: 
11: 
12: 
13: 
14: 
15: 
16: 
17: 
18: 
19: 
20: 
21: 
22: 
23: 
24: import { loadCsvAction } from "@/actions/csv-actions"
25: import { KannadaEntry } from "@/types"
26: import { CardClientWrapper } from "./card-client-wrapper"
27: 
28: export async function CardsFetcher() {
29: 
30:   const result = await loadCsvAction()
31: 
32: 
33:   if (!result.isSuccess || !result.data) {
34:     return (
35:       <div className="text-destructive text-center">
36:         Failed to load cards: {result.message}
37:       </div>
38:     )
39:   }
40: 
41:   const entries: KannadaEntry[] = result.data
42: 
43: 
44:   if (entries.length === 0) {
45:     return (
46:       <div className="text-muted-foreground text-center">
47:         No cards available to display.
48:       </div>
49:     )
50:   }
51: 
52:   return (
53:     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
54:       {entries.map((entry, index) => (
55:         <CardClientWrapper key={index} entry={entry} />
56:       ))}
57:     </div>
58:   )
59: }
````

## File: app/cards/page.tsx
````typescript
 1: "use server"
 2: 
 3: 
 4: 
 5: 
 6: 
 7: 
 8: 
 9: 
10: 
11: 
12: 
13: 
14: 
15: 
16: 
17: 
18: 
19: 
20: 
21: 
22: 
23: 
24: import { auth } from "@clerk/nextjs/server"
25: import { Suspense } from "react"
26: import { CardGrid } from "@/app/cards/_components/card-grid"
27: 
28: export default async function CardsPage() {
29: 
30:   const { userId } = await auth()
31:   if (!userId) {
32:     throw new Error(
33:       "Unauthorized access: Please sign in to view the Cards page."
34:     )
35:   }
36: 
37:   return (
38:     <div className="container mx-auto px-4 py-8">
39:       <h1 className="text-foreground mb-6 text-3xl font-semibold">
40:         Kannada Cards
41:       </h1>
42: 
43:       {}
44:       <Suspense
45:         fallback={
46:           <div className="text-muted-foreground text-center">
47:             Loading cards...
48:           </div>
49:         }
50:       >
51:         <CardGrid />
52:       </Suspense>
53:     </div>
54:   )
55: }
````

## File: app/game/_components/card.tsx
````typescript
 1: export function Card({
 2:   children,
 3:   className,
 4: }: {
 5:   children: React.ReactNode;
 6:   className?: string;
 7: }) {
 8:   return (
 9:     <div
10:       className={`bg-white rounded-3xl relative card-border text-black ${className}`}
11:     >
12:       {children}
13:     </div>
14:   );
15: }
16: 
17: export function CardInner({
18:   children,
19:   className = ""
20: }: {
21:   children: React.ReactNode;
22:   className?: string;
23: }) {
24:   return (
25:     <div className={`p-6 lg:p-10 relative z-10 ${className}`}>
26:       {children}
27:     </div>
28:   );
29: }
````

## File: app/game/_components/Game/game-content.tsx
````typescript
  1: "use client"
  2: 
  3: import { GAME_STATES, GAME_TEXT, GameState } from "../../constants/game-constants";
  4: import { IconArrowForwardUp, IconClockPause } from "@tabler/icons-react";
  5: import React from "react";
  6: import { GameWord } from "./game-word";
  7: import { Timer } from "./timer";
  8: 
  9: interface GameContentProps {
 10:   gameState: GameState;
 11:   currentWord: string;
 12:   showAutoDetected: boolean;
 13:   timeLeft: number;
 14:   showIncorrect: boolean;
 15:   score: number;
 16:   skipsRemaining: number;
 17: 
 18:   onSkip: () => void;
 19: }
 20: 
 21: export const GameContent: React.FC<GameContentProps> = ({
 22:   gameState,
 23:   currentWord,
 24:   showAutoDetected,
 25:   showIncorrect,
 26:   timeLeft,
 27:   score,
 28:   skipsRemaining,
 29: 
 30:   onSkip,
 31: }) => {
 32: 
 33:   if (gameState === GAME_STATES.IDLE || gameState === GAME_STATES.CONNECTING) {
 34:     return (
 35:       <div className="flex flex-col items-center justify-center p-8 text-center cultural-card rounded-2xl min-h-[200px]">
 36:         <div className="text-2xl mb-4 floating-element">🎯</div>
 37:         <p className="text-lg font-semibold cultural-decoration leading-relaxed">
 38:           {GAME_TEXT.startingGame}
 39:         </p>
 40:       </div>
 41:     );
 42:   }
 43: 
 44: 
 45:   if (gameState === GAME_STATES.WAITING_FOR_INTRO) {
 46:     return (
 47:       <div className="animate-pulse flex flex-1 flex-col gap-4 items-center justify-center cultural-card rounded-2xl p-8">
 48:         <div className="size-20 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-lg glow-effect">
 49:           <IconClockPause size={42} />
 50:         </div>
 51:         <span className="text-xl font-bold cultural-decoration text-center">
 52:           {GAME_TEXT.waitingForIntro}
 53:         </span>
 54:         <div className="flex gap-1 mt-2">
 55:           <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
 56:           <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
 57:           <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
 58:         </div>
 59:       </div>
 60:     );
 61:   }
 62: 
 63: 
 64:   if (gameState === GAME_STATES.FINISHED) {
 65:     return (
 66:       <div className="flex flex-col items-center justify-center p-8 text-center cultural-card rounded-2xl min-h-[300px]">
 67:         <div className="text-4xl mb-4 floating-element">🏆</div>
 68:         <h2 className="text-2xl font-bold kannada-title mb-4">{GAME_TEXT.gameOver}</h2>
 69:         <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl shadow-lg">
 70:           <p className="text-lg">
 71:             {GAME_TEXT.finalScore}: <strong className="text-2xl">{score}</strong>
 72:           </p>
 73:         </div>
 74:         <p className="mt-4 text-slate-600 font-medium">{GAME_TEXT.clickToStart}</p>
 75:       </div>
 76:     );
 77:   }
 78: 
 79: 
 80:   return (
 81:     <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
 82:       <GameWord
 83:         word={currentWord}
 84:         showAutoDetected={showAutoDetected}
 85:         showIncorrect={showIncorrect}
 86:       />
 87:       <div className="flex flex-col lg:flex-row gap-3 w-full">
 88:         <Timer timeLeft={timeLeft} gameState={gameState} />
 89:         <button
 90:           className={`button ${skipsRemaining <= 0 ? 'ghost' : 'outline'} group transition-all duration-300 hover:scale-105`}
 91:           onClick={onSkip}
 92:           disabled={skipsRemaining <= 0}
 93:         >
 94:           <IconArrowForwardUp size={24} className={`${skipsRemaining > 0 ? 'text-current' : 'opacity-50'} group-hover:rotate-12 transition-transform duration-300`} />
 95:           <span className="font-bold">
 96:             {skipsRemaining > 0
 97:               ? GAME_TEXT.skipsRemaining(skipsRemaining)
 98:               : GAME_TEXT.noSkips}
 99:           </span>
100:         </button>
101:       </div>
102:     </div>
103:   );
104: };
````

## File: app/game/_components/Game/game-word.tsx
````typescript
 1: "use client"
 2: 
 3: import { GAME_TEXT } from "../../constants/game-constants";
 4: import React from "react";
 5: import styles from "./word-wrangler.module.css";
 6: 
 7: interface GameWordProps {
 8:   word: string;
 9:   showAutoDetected: boolean;
10:   showIncorrect: boolean;
11: }
12: 
13: export const GameWord: React.FC<GameWordProps> = ({
14:   word,
15:   showAutoDetected,
16:   showIncorrect,
17: }) => {
18:   return (
19:     <div className="relative">
20:       <div
21:         className={`
22:           cultural-card rounded-3xl p-8 lg:p-12 text-center min-h-[200px] flex flex-col items-center justify-center transition-all duration-500 relative overflow-hidden
23:           ${showAutoDetected ? styles.correctWordDetected : ''}
24:           ${showIncorrect ? styles.incorrectWordDetected : ''}
25:         `}
26:       >
27:         {}
28:         <div className="absolute top-4 left-4 text-2xl opacity-20 floating-element">📝</div>
29:         <div className="absolute top-4 right-4 text-2xl opacity-20 floating-element" style={{animationDelay: '1s'}}>✨</div>
30:         <div className="absolute bottom-4 left-4 text-2xl opacity-20 floating-element" style={{animationDelay: '2s'}}>🎯</div>
31:         <div className="absolute bottom-4 right-4 text-2xl opacity-20 floating-element" style={{animationDelay: '1.5s'}}>💭</div>
32: 
33:         <div className="relative z-10">
34:           <p className="text-lg lg:text-xl font-semibold cultural-decoration mb-4 leading-relaxed">
35:             {GAME_TEXT.describeWord}
36:           </p>
37:           <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
38:             <span className="text-3xl lg:text-5xl font-black tracking-wide">
39:               {word}
40:             </span>
41:           </div>
42:         </div>
43: 
44:         {showAutoDetected && <CorrectOverlay />}
45:         {showIncorrect && <IncorrectOverlay />}
46:       </div>
47:     </div>
48:   );
49: };
50: 
51: const CorrectOverlay: React.FC = () => (
52:   <div className={styles.autoDetectedOverlay}>
53:     <div className={styles.checkmarkContainer}>
54:       <svg
55:         className={styles.checkmarkSvg}
56:         xmlns="http://www.w3.org/2000/svg"
57:         viewBox="0 0 52 52"
58:       >
59:         <circle
60:           className={styles.checkmarkCircle}
61:           cx="26"
62:           cy="26"
63:           r="25"
64:           fill="none"
65:         />
66:         <path
67:           className={styles.checkmarkCheck}
68:           fill="none"
69:           d="M14.1 27.2l7.1 7.2 16.7-16.8"
70:         />
71:       </svg>
72:     </div>
73:   </div>
74: );
75: 
76: const IncorrectOverlay: React.FC = () => (
77:   <div className={styles.incorrectOverlay}>
78:     <div className={styles.xmarkContainer}>
79:       <svg
80:         className={styles.xmarkSvg}
81:         xmlns="http://www.w3.org/2000/svg"
82:         viewBox="0 0 52 52"
83:       >
84:         <circle
85:           className={styles.xmarkCircle}
86:           cx="26"
87:           cy="26"
88:           r="25"
89:           fill="none"
90:         />
91:         <path
92:           className={styles.xmarkX}
93:           fill="none"
94:           d="M16 16 L36 36 M36 16 L16 36"
95:         />
96:       </svg>
97:     </div>
98:   </div>
99: );
````

## File: app/game/_components/Game/ScoreRow/index.tsx
````typescript
 1: import { IconLaurelWreathFilled, IconStarFilled, IconTrophy } from "@tabler/icons-react";
 2: 
 3: interface ScoreRowProps {
 4:   score: number;
 5:   bestScore: number;
 6: }
 7: 
 8: export function ScoreRow({ score, bestScore = 0 }: ScoreRowProps) {
 9:   const isNewRecord = score > bestScore;
10: 
11:   return (
12:     <div className="flex flex-col w-full lg:w-auto justify-between gap-4 lg:gap-6">
13:       {}
14:       <div className={`
15:         flex flex-1 w-full lg:w-auto flex-row items-center gap-4 lg:gap-5
16:         cultural-card rounded-2xl lg:rounded-3xl px-5 py-4 lg:px-7 lg:py-5
17:         transition-all duration-300 hover:scale-105 shadow-lg
18:         ${isNewRecord ? 'animate-pulse bg-gradient-to-r from-amber-50 to-orange-50 border-amber-400' : ''}
19:       `}>
20:         <div className="relative">
21:           <IconStarFilled
22:             size={42}
23:             className="text-orange-500 size-10 lg:size-12 drop-shadow-lg"
24:           />
25:           {isNewRecord && (
26:             <div className="absolute -top-1 -right-1 animate-bounce">
27:               <div className="w-3 h-3 bg-red-500 rounded-full"></div>
28:             </div>
29:           )}
30:         </div>
31:         <div className="flex flex-col gap-1">
32:           <span className="text-xs lg:text-sm text-slate-600 font-bold tracking-wider">
33:             ಪ್ರಸ್ತುತ ಅಂಕ Current Score
34:           </span>
35:           <span className={`
36:             text-2xl lg:text-3xl font-black leading-none
37:             ${isNewRecord ? 'cultural-decoration' : 'text-slate-800'}
38:           `}>
39:             {score}
40:           </span>
41:           {isNewRecord && (
42:             <span className="text-xs text-orange-600 font-bold animate-pulse">
43:               🎉 New Record!
44:             </span>
45:           )}
46:         </div>
47:       </div>
48: 
49:       {}
50:       <div className="flex items-center justify-center">
51:         <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
52:         <div className="px-3 text-orange-400">
53:           <IconTrophy size={20} className="opacity-60" />
54:         </div>
55:         <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
56:       </div>
57: 
58:       {}
59:       <div className="flex flex-row items-center gap-4 lg:gap-5 cultural-card rounded-2xl lg:rounded-3xl px-5 py-4 lg:px-7 lg:py-5 transition-all duration-300 hover:scale-105 shadow-lg">
60:         <IconLaurelWreathFilled
61:           size={42}
62:           className="text-amber-500 size-10 lg:size-12 drop-shadow-lg"
63:         />
64:         <div className="flex flex-col gap-1">
65:           <span className="text-xs lg:text-sm text-slate-600 font-bold tracking-wider">
66:             ಅತ್ಯುತ್ತಮ ಅಂಕ Best Score
67:           </span>
68:           <span className="text-2xl lg:text-3xl font-black leading-none text-slate-800">
69:             {bestScore}
70:           </span>
71:         </div>
72:       </div>
73:     </div>
74:   );
75: }
76: 
77: export default ScoreRow;
````

## File: app/game/_components/Game/ScoreRow/ScoreRow.module.css
````css
 1: .divider {
 2:   width: 100%;
 3:   height: 2px;
 4:   background: linear-gradient(
 5:     90deg,
 6:     transparent 0%,
 7:     rgba(255, 255, 255, 0.15) 30%,
 8:     rgba(255, 255, 255, 0.15) 70%,
 9:     transparent 100%
10:   );
11: }
````

## File: app/game/_components/Game/timer.tsx
````typescript
 1: "use client"
 2: 
 3: import { GAME_CONFIG, GAME_STATES } from "../../constants/game-constants";
 4: import { IconClock } from "@tabler/icons-react";
 5: import { formatTime } from "../../utils/format-time";
 6: 
 7: 
 8: interface TimerProps {
 9:   timeLeft: number;
10:   gameState: string;
11: }
12: 
13: export function Timer({ timeLeft, gameState }: TimerProps) {
14:   const lowTimer =
15:     gameState === GAME_STATES.ACTIVE &&
16:     timeLeft <= GAME_CONFIG.LOW_TIME_WARNING;
17: 
18:   const progressPercentage = (timeLeft / GAME_CONFIG.GAME_DURATION) * 100;
19:   const isUrgent = progressPercentage <= 20;
20:   const isWarning = progressPercentage <= 50;
21: 
22:   return (
23:     <div className={`
24:       flex-1 flex flex-col gap-2 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-white border-2 transition-all duration-300 shadow-sm
25:       ${isUrgent ? 'border-red-400 bg-gradient-to-r from-red-50 to-pink-50 animate-pulse' :
26:         isWarning ? 'border-amber-400 bg-gradient-to-r from-amber-50 to-orange-50' :
27:         'border-emerald-400 bg-gradient-to-r from-emerald-50 to-green-50'}
28:     `}>
29:       <div className="flex items-center gap-3">
30:         <div className={`
31:           p-2 rounded-full transition-all duration-300
32:           ${isUrgent ? 'bg-red-500 text-white animate-bounce' :
33:             isWarning ? 'bg-amber-500 text-white' :
34:             'bg-emerald-500 text-white'}
35:         `}>
36:           <IconClock size={20} />
37:         </div>
38:         <span className={`
39:           text-xl font-bold transition-all duration-300
40:           ${isUrgent ? 'text-red-600' :
41:             isWarning ? 'text-amber-600' :
42:             'text-emerald-600'}
43:         `}>
44:           {formatTime(timeLeft)}
45:         </span>
46:         {lowTimer && (
47:           <div className="text-xs font-semibold bg-red-100 text-red-600 px-2 py-1 rounded-full animate-bounce">
48:             ⚠️ HURRY!
49:           </div>
50:         )}
51:       </div>
52: 
53:       <div className={`
54:         h-3 bg-slate-200 rounded-full overflow-hidden relative shadow-inner
55:         ${lowTimer ? 'animate-pulse' : ''}
56:       `}>
57:         <div
58:           className={`
59:             h-full transition-all duration-1000 ease-out relative
60:             ${isUrgent ? 'bg-gradient-to-r from-red-500 to-red-600' :
61:               isWarning ? 'bg-gradient-to-r from-amber-500 to-orange-500' :
62:               'bg-gradient-to-r from-emerald-500 to-green-500'}
63:           `}
64:           style={{ width: `${progressPercentage}%` }}
65:         >
66:           <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
67:         </div>
68:       </div>
69:     </div>
70:   );
71: }
````

## File: app/game/_components/Game/word-wrangler.module.css
````css
  1: .gameContainer {
  2:   position: relative;
  3:   z-index: 1;
  4:   padding: 4px;
  5:   width: 100%;
  6:   border-radius: 28px;
  7:   margin-top: 50px;
  8:   min-height: 300px;
  9:   box-shadow: 0px 66px 26px rgba(0, 0, 0, 0.01),
 10:     0px 37px 22px rgba(0, 0, 0, 0.05), 0px 16px 16px rgba(0, 0, 0, 0.09),
 11:     0px 4px 9px rgba(0, 0, 0, 0.1);
 12: }
 13: 
 14: @media (min-width: 1024px) {
 15:   .gameContainer {
 16:     width: auto;
 17:     flex: none;
 18:     min-width: 626px;
 19:     height: 260px;
 20:     margin-top: 0;
 21:   }
 22: }
 23: 
 24: .gameContainer:before {
 25:   content: "";
 26:   position: absolute;
 27:   inset: -4px -4px -8px -4px;
 28:   border-radius: 28px;
 29:   background: linear-gradient(
 30:     to bottom,
 31:     rgba(0, 0, 0, 1) 0%,
 32:     rgba(0, 0, 0, 0.15) 100%
 33:   );
 34:   z-index: -1;
 35: }
 36: 
 37: .gameContainer:after {
 38:   content: "";
 39:   box-sizing: border-box;
 40:   position: absolute;
 41:   inset: 0;
 42:   border-radius: var(--border-radius-card);
 43:   border: var(--border-width-card) solid transparent;
 44:   background-image: linear-gradient(#001146, #0655cc),
 45:     linear-gradient(
 46:       180deg,
 47:       var(--theme-gradient-start) 0%,
 48:       var(--theme-gradient-end) 100%
 49:     );
 50:   background-origin: border-box;
 51:   background-clip: padding-box, border-box;
 52: }
 53: 
 54: .gameContent {
 55:   position: relative;
 56:   z-index: 1;
 57:   background: transparent;
 58:   border-radius: 20px;
 59:   width: 100%;
 60:   height: 100%;
 61:   min-height: 292px;
 62:   display: flex;
 63:   overflow: hidden;
 64:   border: 6px solid rgba(0, 0, 0, 0.25);
 65: }
 66: 
 67: .gameContent:after {
 68:   content: "";
 69:   position: absolute;
 70:   inset: 0;
 71:   background: radial-gradient(
 72:     70% 40% at 50% 40%,
 73:     #2da6ee 0%,
 74:     rgba(45, 166, 238, 0) 100%
 75:   );
 76:   opacity: 0.76;
 77:   z-index: -1;
 78: }
 79: 
 80: .gameArea {
 81:   display: flex;
 82:   flex-direction: column;
 83:   align-items: center;
 84:   flex: 1;
 85:   padding: 12px;
 86:   position: relative;
 87:   z-index: 2;
 88: }
 89: 
 90: .timer {
 91:   height: var(--button-height);
 92:   border-radius: 9999px;
 93:   width: 100%;
 94:   flex-direction: row;
 95:   gap: 12px;
 96:   display: flex;
 97:   align-items: center;
 98:   justify-content: center;
 99:   background-color: rgba(0, 0, 0, 0.2);
100:   padding: 12px;
101: 
102:   @media (min-width: 1024px) {
103:     flex: 1;
104:   }
105: 
106:   .timerBadge {
107:     display: flex;
108:     flex-direction: row;
109:     align-items: center;
110:     gap: 6px;
111:     background-color: black;
112:     border-radius: 9999px;
113:     color: white;
114:     height: 100%;
115:     padding: 0 12px;
116:     font-weight: 800;
117:   }
118: 
119:   .timerBar {
120:     height: 100%;
121:     width: 100%;
122:     border-radius: 9999px;
123:     overflow: hidden;
124:     background-color: var(--color-emerald-100);
125:   }
126: 
127:   .timerBarFill {
128:     height: 100%;
129:     width: 100%;
130:     background-color: var(--color-emerald-400);
131:     transition: width 0.3s ease;
132:   }
133: 
134:   &.lowTime {
135:     color: #e74c3c;
136:     animation: pulse 1s infinite;
137: 
138:     .timerBar {
139:       background-color: var(--color-orange-100);
140:     }
141: 
142:     .timerBarFill {
143:       background-color: var(--color-orange-400);
144:     }
145:   }
146: }
147: 
148: .scoreDisplay {
149:   font-size: 1.25rem;
150:   font-weight: 500;
151:   color: #0071e3;
152: }
153: 
154: .currentWord {
155:   display: flex;
156:   flex: 1;
157:   flex-direction: column;
158:   align-items: center;
159:   justify-content: center;
160:   text-align: center;
161:   width: 100%;
162:   margin-top: 50px;
163:   .helpText {
164:     font-size: 1rem;
165:     font-weight: 700;
166:     color: rgba(255, 255, 255, 0.5);
167:   }
168: 
169:   .word {
170:     font-size: 2rem;
171:     font-weight: 800;
172:     letter-spacing: 0.05em;
173:     line-height: 2;
174:     color: #ffffff;
175:     text-shadow: 0px 4px 0px rgba(0, 0, 0, 0.45);
176:   }
177: 
178:   @media (min-width: 1024px) {
179:     margin-top: 0;
180:     .word {
181:       font-size: 3rem;
182:       text-shadow: 0px 6px 0px rgba(0, 0, 0, 0.45);
183:     }
184:   }
185: }
186: 
187: .gameButton {
188:   padding: 0.85rem 0;
189:   font-size: 1.1rem;
190:   font-weight: 500;
191:   border: none;
192:   border-radius: 8px;
193:   cursor: pointer;
194:   transition: all 0.2s ease;
195: }
196: 
197: /* Primary button (Skip) */
198: .skipButton {
199:   flex: 2; /* Takes more space */
200:   background-color: #e74c3c;
201:   color: white;
202: }
203: 
204: .skipButton:hover {
205:   background-color: #c0392b;
206:   transform: translateY(-2px);
207: }
208: 
209: /* Secondary button (Correct) - more subdued */
210: .correctButton {
211:   flex: 1; /* Takes less space */
212:   background-color: #f5f5f7; /* Light gray background */
213:   color: #333; /* Dark text */
214:   border: 1px solid #ddd; /* Subtle border */
215: }
216: 
217: .correctButton:hover {
218:   background-color: #e8e8ed;
219:   transform: translateY(-1px);
220: }
221: 
222: .gameReadyArea {
223:   display: flex;
224:   flex-direction: column;
225:   align-items: center;
226: }
227: 
228: .gameResults {
229:   margin-bottom: 1rem;
230:   padding: 0.75rem;
231:   background-color: #f8f9fa;
232:   border-radius: 8px;
233:   width: 100%;
234:   text-align: center;
235: }
236: 
237: .gameResults h2 {
238:   margin: 0 0 0.5rem 0;
239:   color: #333;
240:   font-size: 1.3rem;
241: }
242: 
243: .statusNote {
244:   margin: 0.5rem 0;
245:   padding: 0.6rem 1rem;
246:   background-color: #f8f9fa;
247:   border-left: 3px solid #0071e3;
248:   font-size: 0.95rem;
249:   color: #333;
250:   width: 100%;
251:   text-align: center;
252:   border-radius: 4px;
253: }
254: 
255: .compactInstructions {
256:   margin: 0.75rem 0;
257:   width: 100%;
258:   max-width: 400px;
259:   background-color: #f8f9fa;
260:   border-radius: 8px;
261:   padding: 0.75rem 1rem;
262: }
263: 
264: .compactInstructions h3 {
265:   margin: 0 0 0.5rem 0;
266:   color: #333;
267:   font-size: 1.1rem;
268:   text-align: center;
269: }
270: 
271: .compactInstructions ul {
272:   margin: 0;
273:   padding-left: 1.5rem;
274:   line-height: 1.4;
275: }
276: 
277: .compactInstructions li {
278:   margin-bottom: 0.4rem;
279:   font-size: 0.9rem;
280: }
281: 
282: .loadingDots {
283:   display: inline-block;
284:   animation: dotPulse 1.5s infinite linear;
285: }
286: 
287: @keyframes dotPulse {
288:   0% {
289:     opacity: 0.2;
290:   }
291:   20% {
292:     opacity: 1;
293:   }
294:   100% {
295:     opacity: 0.2;
296:   }
297: }
298: 
299: @keyframes pulse {
300:   0% {
301:     opacity: 0.8;
302:   }
303:   50% {
304:     opacity: 1;
305:   }
306:   100% {
307:     opacity: 0.8;
308:   }
309: }
310: 
311: /* Animation styles */
312: .correctWordDetected {
313:   animation: correctPulse 1.5s ease-in-out;
314:   position: relative;
315: }
316: 
317: .autoDetectedOverlay {
318:   position: absolute;
319:   top: 0;
320:   left: 0;
321:   right: 0;
322:   bottom: 0;
323:   display: flex;
324:   justify-content: center;
325:   align-items: center;
326:   background-color: rgba(46, 204, 113, 0.6);
327:   border-radius: 8px;
328:   animation: fadeIn 0.3s ease-in-out;
329:   z-index: 10;
330: }
331: 
332: .checkmarkContainer {
333:   width: 80px;
334:   height: 80px;
335:   animation: scaleUp 0.4s ease-out;
336: }
337: 
338: .checkmarkSvg {
339:   width: 100%;
340:   height: 100%;
341:   border-radius: 50%;
342:   display: block;
343:   stroke-width: 4;
344:   stroke: #fff;
345:   stroke-miterlimit: 10;
346:   box-shadow: 0 0 0 rgba(46, 204, 113, 0.7);
347:   animation: fillCheck 0.3s ease-in-out 0.3s forwards,
348:     scale 0.2s ease-in-out 0.7s both;
349: }
350: 
351: .checkmarkCircle {
352:   stroke-dasharray: 166;
353:   stroke-dashoffset: 166;
354:   stroke-width: 4;
355:   stroke-miterlimit: 10;
356:   stroke: #fff;
357:   fill: transparent;
358:   animation: strokeCheck 0.5s cubic-bezier(0.65, 0, 0.45, 1) forwards;
359: }
360: 
361: .checkmarkCheck {
362:   transform-origin: 50% 50%;
363:   stroke-dasharray: 48;
364:   stroke-dashoffset: 48;
365:   animation: strokeCheck 0.25s cubic-bezier(0.65, 0, 0.45, 1) 0.6s forwards;
366: }
367: 
368: @keyframes strokeCheck {
369:   100% {
370:     stroke-dashoffset: 0;
371:   }
372: }
373: 
374: @keyframes fillCheck {
375:   100% {
376:     box-shadow: inset 0 0 0 50px transparent;
377:   }
378: }
379: 
380: @keyframes correctPulse {
381:   0% {
382:     box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.7);
383:   }
384:   50% {
385:     box-shadow: 0 0 0 15px rgba(46, 204, 113, 0);
386:   }
387:   100% {
388:     box-shadow: 0 0 0 0 rgba(46, 204, 113, 0);
389:   }
390: }
391: 
392: @keyframes fadeIn {
393:   from {
394:     opacity: 0;
395:   }
396:   to {
397:     opacity: 1;
398:   }
399: }
400: 
401: @keyframes scaleUp {
402:   from {
403:     transform: scale(0.5);
404:     opacity: 0;
405:   }
406:   to {
407:     transform: scale(1);
408:     opacity: 1;
409:   }
410: }
411: 
412: .incorrectWordDetected {
413:   animation: incorrectPulse 1.5s ease-in-out,
414:     shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
415:   position: relative;
416: }
417: 
418: .incorrectOverlay {
419:   position: absolute;
420:   top: 0;
421:   left: 0;
422:   right: 0;
423:   bottom: 0;
424:   display: flex;
425:   justify-content: center;
426:   align-items: center;
427:   background-color: rgba(255, 59, 48, 0.6); /* Red with transparency */
428:   border-radius: 8px;
429:   animation: fadeIn 0.3s ease-in-out;
430:   z-index: 10;
431: }
432: 
433: .xmarkContainer {
434:   width: 80px;
435:   height: 80px;
436:   animation: scaleUp 0.4s ease-out;
437: }
438: 
439: .xmarkSvg {
440:   width: 100%;
441:   height: 100%;
442:   border-radius: 50%;
443:   display: block;
444:   stroke-width: 4;
445:   stroke: #fff;
446:   stroke-miterlimit: 10;
447:   box-shadow: 0 0 0 rgba(255, 59, 48, 0.7);
448:   animation: fillX 0.3s ease-in-out 0.3s forwards,
449:     scale 0.2s ease-in-out 0.7s both;
450: }
451: 
452: .xmarkCircle {
453:   stroke-dasharray: 166;
454:   stroke-dashoffset: 166;
455:   stroke-width: 4;
456:   stroke-miterlimit: 10;
457:   stroke: #fff;
458:   fill: transparent;
459:   animation: strokeX 0.5s cubic-bezier(0.65, 0, 0.45, 1) forwards;
460: }
461: 
462: .xmarkX {
463:   transform-origin: 50% 50%;
464:   stroke-dasharray: 48;
465:   stroke-dashoffset: 48;
466:   animation: strokeX 0.25s cubic-bezier(0.65, 0, 0.45, 1) 0.6s forwards;
467: }
468: 
469: @keyframes strokeX {
470:   100% {
471:     stroke-dashoffset: 0;
472:   }
473: }
474: 
475: @keyframes fillX {
476:   100% {
477:     box-shadow: inset 0 0 0 50px transparent;
478:   }
479: }
480: 
481: @keyframes incorrectPulse {
482:   0% {
483:     box-shadow: 0 0 0 0 rgba(255, 59, 48, 0.7);
484:   }
485:   50% {
486:     box-shadow: 0 0 0 15px rgba(255, 59, 48, 0);
487:   }
488:   100% {
489:     box-shadow: 0 0 0 0 rgba(255, 59, 48, 0);
490:   }
491: }
492: 
493: @keyframes scale {
494:   0%,
495:   100% {
496:     transform: none;
497:   }
498:   50% {
499:     transform: scale3d(1.1, 1.1, 1);
500:   }
501: }
502: 
503: @keyframes shake {
504:   10%,
505:   90% {
506:     transform: translate3d(-1px, 0, 0);
507:   }
508:   20%,
509:   80% {
510:     transform: translate3d(2px, 0, 0);
511:   }
512:   30%,
513:   50%,
514:   70% {
515:     transform: translate3d(-3px, 0, 0);
516:   }
517:   40%,
518:   60% {
519:     transform: translate3d(3px, 0, 0);
520:   }
521: }
522: 
523: /* Game loading UI styles */
524: .gameLoadingContainer {
525:   display: flex;
526:   justify-content: center;
527:   align-items: center;
528:   height: 250px; /* Fixed height to prevent layout shifts */
529:   width: 100%;
530: }
531: 
532: .gameLoadingContent {
533:   display: flex;
534:   flex-direction: column;
535:   align-items: center;
536:   justify-content: center;
537:   gap: 1.5rem;
538:   text-align: center;
539: }
540: 
541: .gameLoadingIcon {
542:   position: relative;
543:   width: 60px;
544:   height: 60px;
545:   display: flex;
546:   justify-content: center;
547:   align-items: center;
548: }
549: 
550: .pulseDot {
551:   width: 16px;
552:   height: 16px;
553:   background-color: #0071e3;
554:   border-radius: 50%;
555:   position: relative;
556: }
557: 
558: .pulseDot:before {
559:   content: "";
560:   position: absolute;
561:   width: 100%;
562:   height: 100%;
563:   border-radius: 50%;
564:   background-color: #0071e3;
565:   opacity: 0.7;
566:   animation: pulse-wave 1.5s linear infinite;
567: }
568: 
569: .gameLoadingTitle {
570:   font-size: 1.5rem;
571:   font-weight: 500;
572:   color: #0071e3;
573:   margin: 0;
574: }
575: 
576: @keyframes pulse-wave {
577:   0% {
578:     transform: scale(1);
579:     opacity: 0.7;
580:   }
581:   50% {
582:     transform: scale(2.5);
583:     opacity: 0;
584:   }
585:   100% {
586:     transform: scale(1);
587:     opacity: 0;
588:   }
589: }
````

## File: app/game/_components/Game/word-wrangler.tsx
````typescript
  1: "use client"
  2: 
  3: import { GAME_STATES, GAME_TEXT } from "../../constants/game-constants";
  4: import { useConnectionState } from "../../hooks/use-connection-state";
  5: import { useGameState } from "../../hooks/use-game-state";
  6: import { useGameTimer } from "../../hooks/use-game-timer";
  7: import { useVisualFeedback } from "../../hooks/use-visual-feedback";
  8: import { useWordDetection } from "../../hooks/use-word-detection";
  9: import { RTVIEvent } from "@pipecat-ai/client-js";
 10: import { useRTVIClientEvent } from "@pipecat-ai/client-react";
 11: import { IconCircleDashedCheck, IconDoorExit } from "@tabler/icons-react";
 12: import { useCallback, useEffect, useRef } from "react";
 13: import { GameContent } from "./game-content";
 14: import { ScoreRow } from "./ScoreRow";
 15: import JSConfetti from "js-confetti";
 16: import Image from "next/image";
 17: 
 18: export const WordWrangler: React.FC<{
 19:   onGameEnded: (score: number, bestScore: number) => void;
 20: }> = ({ onGameEnded }) => {
 21:   const botIntroCompletedRef = useRef(false);
 22:   const currentScoreRef = useRef(0);
 23:   const gameState = useGameState();
 24:   const visualFeedback = useVisualFeedback();
 25:   const { isConnected, client } = useConnectionState();
 26: 
 27: 
 28:   useEffect(() => {
 29:     currentScoreRef.current = gameState.score;
 30:   }, [gameState.score]);
 31: 
 32: 
 33:   const endGame = useCallback(async () => {
 34:     const scoreAtCallTime = currentScoreRef.current;
 35: 
 36: 
 37:     if (gameState.gameState === GAME_STATES.FINISHED) {
 38:       console.log("endGame prevented - game already finished");
 39:       return;
 40:     }
 41: 
 42: 
 43:     const finalScore = scoreAtCallTime;
 44:     const currentBestScore = gameState.bestScore;
 45: 
 46: 
 47:     gameState.finishGame();
 48:     visualFeedback.resetVisuals();
 49: 
 50: 
 51:     if (currentBestScore < finalScore) {
 52:       gameState.setBestScore(finalScore);
 53:     }
 54: 
 55: 
 56:     if (client && isConnected) {
 57:       try {
 58:         await client.disconnectBot();
 59:         await client.disconnect();
 60:       } catch (error) {
 61:         console.error("Error disconnecting bot:", error);
 62:       }
 63:     }
 64: 
 65: 
 66:     onGameEnded(finalScore, Math.max(finalScore, currentBestScore));
 67:   }, [gameState, visualFeedback, client, isConnected, onGameEnded]);
 68: 
 69:   const gameTimer = useGameTimer(endGame);
 70: 
 71:   const wordDetection = useWordDetection({
 72:     gameState: gameState.gameState,
 73:     currentWord: gameState.currentWord,
 74:     onCorrectGuess: handleCorrectGuess,
 75:     onIncorrectGuess: handleIncorrectGuess,
 76:   });
 77: 
 78: 
 79:   useEffect(() => {
 80:     gameState.initializeGame();
 81: 
 82:   }, []);
 83: 
 84: 
 85:   useEffect(() => {
 86:     if (isConnected) {
 87:       if (!botIntroCompletedRef.current) {
 88: 
 89:         gameState.setGameState(GAME_STATES.WAITING_FOR_INTRO);
 90:       }
 91:     } else {
 92: 
 93:       if (gameState.gameState === GAME_STATES.ACTIVE) {
 94: 
 95:         endGame();
 96:       } else if (gameState.gameState !== GAME_STATES.FINISHED) {
 97: 
 98:         gameState.setGameState(GAME_STATES.IDLE);
 99:       }
100: 
101: 
102:       botIntroCompletedRef.current = false;
103:     }
104: 
105:   }, [isConnected, gameState.gameState, endGame]);
106: 
107: 
108:   useRTVIClientEvent(RTVIEvent.BotStoppedSpeaking, () => {
109:     if (
110:       gameState.gameState === GAME_STATES.WAITING_FOR_INTRO &&
111:       !botIntroCompletedRef.current
112:     ) {
113: 
114:       botIntroCompletedRef.current = true;
115:       startGame();
116:     }
117:   });
118: 
119: 
120:   function handleCorrectGuess() {
121:     visualFeedback.showCorrect(() => {
122:       gameState.incrementScore();
123:       gameState.moveToNextWord();
124:       wordDetection.resetLastProcessedMessage();
125:     });
126:     const jsConfetti = new JSConfetti();
127:     jsConfetti.addConfetti({
128:       emojis: ["🎉", "⭐", "💯", "🏆", "✨"],
129:       confettiNumber: 50,
130:     });
131:   }
132: 
133: 
134:   function handleIncorrectGuess() {
135:     visualFeedback.showIncorrectAnimation();
136:   }
137: 
138: 
139:   function startGame() {
140: 
141:     gameState.initializeGame();
142:     wordDetection.resetLastProcessedMessage();
143: 
144: 
145:     gameTimer.startTimer();
146:   }
147: 
148: 
149:   function handleManualCorrect() {
150:     if (gameState.gameState !== GAME_STATES.ACTIVE) return;
151: 
152:     gameState.incrementScore();
153: 
154:     const jsConfetti = new JSConfetti();
155:     jsConfetti.addConfetti({
156:       emojis: ["🎯", "⭐", "💫"],
157:       confettiNumber: 30,
158:     });
159: 
160:     gameState.moveToNextWord();
161:     wordDetection.resetLastProcessedMessage();
162:   }
163: 
164: 
165:   function handleSkip() {
166:     if (gameState.gameState !== GAME_STATES.ACTIVE) return;
167: 
168: 
169:     if (gameState.useSkip()) {
170:       gameState.moveToNextWord();
171:       wordDetection.resetLastProcessedMessage();
172:     }
173:   }
174: 
175: 
176:   useEffect(() => {
177:     return () => {
178:       gameTimer.stopTimer();
179:       visualFeedback.cleanup();
180:     };
181: 
182:   }, []);
183: 
184:   return (
185:     <div className="min-h-[100dvh] flex flex-col relative overflow-hidden">
186:       {}
187:       <div className="absolute top-10 left-8 text-3xl opacity-10 floating-element">📚</div>
188:       <div className="absolute top-40 right-12 text-4xl opacity-15 floating-element" style={{animationDelay: '1s'}}>🎯</div>
189:       <div className="absolute bottom-32 left-10 text-3xl opacity-10 floating-element" style={{animationDelay: '2s'}}>✨</div>
190:       <div className="absolute bottom-10 right-8 text-4xl opacity-15 floating-element" style={{animationDelay: '1.5s'}}>💭</div>
191: 
192:       <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
193:         <div className="flex flex-1 flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center w-full max-w-7xl">
194:           <div className="relative flex-1 w-full max-w-4xl">
195:             <Image
196:               src="/game/logo.png"
197:               alt="Padhagala Raaja"
198:               width={120}
199:               height={120}
200:               className="logo size-[100px] lg:size-[120px] absolute top-[-40px] lg:top-[-50px] left-[50%] -translate-x-1/2 lg:left-auto lg:-translate-x-0 lg:right-[-30px] z-10 floating-element"
201:               priority
202:             />
203:             <div className="cultural-card rounded-3xl p-6 lg:p-8 mt-8 lg:mt-0">
204:               <GameContent
205:                 gameState={gameState.gameState}
206:                 timeLeft={gameTimer.timeLeft}
207:                 currentWord={gameState.currentWord}
208:                 showAutoDetected={visualFeedback.showAutoDetected}
209:                 showIncorrect={visualFeedback.showIncorrect}
210:                 score={gameState.score}
211:                 skipsRemaining={gameState.skipsRemaining}
212:                 onSkip={handleSkip}
213:               />
214:             </div>
215:           </div>
216:           <div className="w-full lg:w-auto lg:min-w-[280px]">
217:             <ScoreRow score={gameState.score} bestScore={gameState.bestScore} />
218:           </div>
219:         </div>
220: 
221:         <footer className="flex flex-col lg:flex-row gap-3 lg:gap-4 py-6 w-full items-center justify-center max-w-2xl">
222:           <button
223:             className="button outline w-full lg:w-auto group transition-all duration-300 hover:scale-105"
224:             onClick={handleManualCorrect}
225:             disabled={gameState.gameState !== GAME_STATES.ACTIVE}
226:           >
227:             <IconCircleDashedCheck size={24} className="group-hover:rotate-12 transition-transform duration-300" />
228:             <span className="font-bold">{GAME_TEXT.correct}</span>
229:           </button>
230:           <button
231:             className="button ghost w-full lg:w-auto group transition-all duration-300 hover:scale-105"
232:             onClick={endGame}
233:             disabled={
234:               gameState.gameState == GAME_STATES.CONNECTING ||
235:               gameState.gameState == GAME_STATES.WAITING_FOR_INTRO
236:             }
237:           >
238:             <IconDoorExit size={24} className="group-hover:rotate-12 transition-transform duration-300" />
239:             <span className="font-bold">ಅಂತ್ಯ End Game</span>
240:           </button>
241:         </footer>
242:       </div>
243:     </div>
244:   );
245: };
````

## File: app/game/_components/StartButton/index.tsx
````typescript
 1: "use client"
 2: 
 3: import { BUTTON_TEXT } from "../../constants/game-constants";
 4: import { useConnectionState } from "../../hooks/use-connection-state";
 5: import { IconArrowRight, IconSparkles } from "@tabler/icons-react";
 6: 
 7: interface StartGameButtonProps {
 8:   onGameStarted?: () => void;
 9:   onGameEnded?: () => void;
10:   isGameEnded?: boolean;
11: }
12: 
13: export function StartGameButton({
14:   onGameStarted,
15:   onGameEnded,
16:   isGameEnded,
17: }: StartGameButtonProps) {
18:   const { isConnecting, isDisconnecting, toggleConnection } =
19:     useConnectionState(onGameStarted, onGameEnded);
20: 
21: 
22:   const showSpinner = isConnecting;
23:   const btnText = isGameEnded ? BUTTON_TEXT.RESTART : BUTTON_TEXT.START;
24: 
25:   return (
26:     <div className="flex justify-center">
27:       <button
28:         className="styled-button group hover:shadow-2xl transition-all duration-300 hover:scale-105"
29:         onClick={toggleConnection}
30:         disabled={isConnecting || isDisconnecting}
31:       >
32:         <>
33:           <span className="styled-button-text group-hover:animate-pulse">
34:             {isConnecting ? BUTTON_TEXT.CONNECTING : btnText}
35:           </span>
36:           <span className="styled-button-icon group-hover:rotate-12 transition-transform duration-300">
37:             {showSpinner ? (
38:               <span className="spinner"></span>
39:             ) : isGameEnded ? (
40:               <IconSparkles size={18} strokeWidth={3} className="text-white" />
41:             ) : (
42:               <IconArrowRight size={18} strokeWidth={3} className="text-white" />
43:             )}
44:           </span>
45:         </>
46:       </button>
47:     </div>
48:   );
49: }
````

## File: app/game/constants/game-constants.ts
````typescript
 1: export const GAME_CONFIG = {
 2:   MAX_SKIPS: 3,
 3:   GAME_DURATION: 60,
 4:   WORD_POOL_SIZE: 30,
 5:   ANIMATION_DURATION: 1000,
 6:   TIMER_INTERVAL: 1000,
 7:   LOW_TIME_WARNING: 10,
 8: };
 9: 
10: 
11: export const GAME_STATES = {
12:   IDLE: "idle",
13:   CONNECTING: "connecting",
14:   WAITING_FOR_INTRO: "waitingForIntro",
15:   ACTIVE: "active",
16:   FINISHED: "finished",
17: } as const;
18: 
19: export type GameState = (typeof GAME_STATES)[keyof typeof GAME_STATES];
20: 
21: 
22: export const GAME_TEXT = {
23:   time: "ಸಮಯ Time",
24:   score: "ಅಂಕ Score",
25:   gameOver: "ಆಟ ಮುಗಿದಿತು! Game Over!",
26:   finalScore: "ಅಂತಿಮ ಅಂಕ Final Score",
27:   correct: "ಸರಿ ಮಾಡಿ Mark Correct",
28:   skip: "ಬಿಟ್ಟು ಹೋಗಿ Skip →",
29:   noSkips: "No Skips Left",
30:   skipsRemaining: (num: number) => `Skip (${num} left)`,
31:   startingGame: `How many words can you master in ${GAME_CONFIG.GAME_DURATION} seconds, Padhagala Raaja?`,
32:   waitingForIntro: "ತಯಾರಾಗುತ್ತಿದೆ Getting ready...",
33:   clickToStart: "Press ಪ್ರಾರಂಭ Start Game to begin your word mastery journey",
34:   describeWord: "ಈ ಪದವನ್ನು ವಿವರಿಸಿ Describe this word:",
35:   introTitle: "ಪದಗಳ ರಾಜನಾಗಿ! Become the Master of Words in 60 seconds!",
36:   introGuide1: "🏆 Earn points each time AI correctly guesses your word description",
37:   introGuide2: "⚠️ Don't say the word directly, or you'll lose precious points",
38:   introGuide3: "⏭️ Skip words you don't know to keep the momentum going",
39:   aiPersonality: "AI ಸ್ವಭಾವ Personality",
40:   finalScoreMessage: "Your best ಅತ್ಯುತ್ತಮ score:",
41: };
42: 
43: 
44: export const TRANSCRIPT_PATTERNS = {
45: 
46:   GUESS_PATTERN:
47:     /is it [""]?([^""?]+)[""]?(?:\?)?|is it (?:a|an) ([^?]+)(?:\?)?/i,
48: };
49: 
50: // Connection states
51: export const CONNECTION_STATES = {
52:   ACTIVE: ["connected", "ready"],
53:   CONNECTING: ["connecting", "initializing", "initialized", "authenticating"],
54:   DISCONNECTING: ["disconnecting"],
55: };
56: 
57: 
58: export const BUTTON_TEXT = {
59:   START: "ಪ್ರಾರಂಭ Start Game",
60:   END: "ಅಂತ್ಯ End Game",
61:   CONNECTING: "ಸಂಪರ್ಕಿಸುತ್ತಿದೆ Connecting...",
62:   STARTING: "ಪ್ರಾರಂಭಿಸುತ್ತಿದೆ Starting...",
63:   RESTART: "ಮತ್ತೆ ಆಡಿ Play Again",
64: };
````

## File: app/game/contexts/configuration.tsx
````typescript
 1: "use client"
 2: 
 3: import React, { createContext, useContext, useState, ReactNode } from 'react';
 4: import { PersonalityType, DEFAULT_PERSONALITY } from '../types/personality';
 5: 
 6: interface ConfigurationContextProps {
 7:   personality: PersonalityType;
 8:   setPersonality: (personality: PersonalityType) => void;
 9: }
10: 
11: const ConfigurationContext = createContext<
12:   ConfigurationContextProps | undefined
13: >(undefined);
14: 
15: interface ConfigurationProviderProps {
16:   children: ReactNode;
17: }
18: 
19: export function ConfigurationProvider({
20:   children,
21: }: ConfigurationProviderProps) {
22:   const [personality, setPersonality] =
23:     useState<PersonalityType>(DEFAULT_PERSONALITY);
24: 
25:   const value = {
26:     personality,
27:     setPersonality,
28:   };
29: 
30:   return (
31:     <ConfigurationContext.Provider value={value}>
32:       {children}
33:     </ConfigurationContext.Provider>
34:   );
35: }
36: 
37: export function useConfigurationSettings() {
38:   const context = useContext(ConfigurationContext);
39:   if (context === undefined) {
40:     throw new Error(
41:       'useConfigurationSettings must be used within a ConfigurationProvider'
42:     );
43:   }
44:   return context;
45: }
````

## File: app/game/data/word-wrangler-words.ts
````typescript
 1: export const ALL_CATCH_PHRASE_WORDS: string[] = [
 2: 
 3:     'ಕರಡಿ', 'ಪಕ್ಷಿ', 'ಚಿಟ್ಟೆ', 'ಬೆಕ್ಕು', 'ಕೋಳಿ', 'ಹಸು', 'ಮೊಸಳೆ', 'ಜಿಂಕೆ', 'ನಾಯಿ', 'ಬಾತುಕೋಳಿ',
 4:     'ಆನೆ', 'ನರಿ', 'ಕಪ್ಪೆ', 'ಮೇಕೆ', 'ನೀರಾನೆ', 'ಕುದುರೆ', 'ಕತ್ತೆ', 'ಚಿರತೆ', 'ಸಿಂಹ', 'ಕೋತಿ',
 5:     'ಹಂದಿ', 'ನಾಯಿಮರಿ', 'ಮೊಲ', 'ಘೇಂಡಾಮೃಗ', 'ಹುಂಜ', 'ತಿಮಿಂಗಿಲ', 'ಕುರಿ', 'ಹುಲಿ', 'ಆಮೆ', 'ಕಾಗೆ',
 6:     'ನವಿಲು', 'ಎಮ್ಮೆ', 'ಒಂಟೆ', 'ಹಲ್ಲಿ', 'ಗಿಣಿ', 'ಗುಬ್ಬಚ್ಚಿ', 'ಅಳಿಲು', 'ಜೇನುನೋಣ', 'ಇರುವೆ', 'ಹಾವು',
 7:     'ಇಲಿ', 'ಗೂಬೆ', 'ಪಾರಿವಾಳ', 'ಏಡಿ', 'ತೋಳ', 'ಬಾವುಲಿ', 'ಹುಲಿಮರಿ', 'ಕರು', 'ಬೆಕ್ಕಿನ ಮರಿ', 'ಕೋಳಿಮರಿ',
 8: 
 9: 
10:     'ವಿಮಾನ', 'ಹಡಗು', 'ದೋಣಿ', 'ಚೆಂಡು', 'ಕನ್ನಡಕ', 'ಮೇಣದಬತ್ತಿ', 'ಬಟ್ಟೆ', 'ಹೂವು', 'ಚಮಚ', 'ಬೀಗ',
11:     'ಕತ್ತರಿ', 'ಕಪ್ಪೆಚಿಪ್ಪು', 'ಮರ', 'ಮನೆ', 'ಕಿಟಕಿ', 'ಬಾಗಿಲು', 'ಪುಸ್ತಕ', 'ಕುರ್ಚಿ', 'ಮೇಜು', 'ಗಡಿಯಾರ',
12:     'ಲೋಟ', 'ತಟ್ಟೆ', 'ಚೊಂಬು',
13: 
14: 
15:     'ಕೆಂಪು', 'ಹಸಿರು', 'ಹಳದಿ', 'ನೀಲಿ', 'ಕಂದು', 'ಕಪ್ಪು', 'ಬಿಳಿ', 'ಬೂದು', 'ನಸುಗೆಂಪು', 'ನೆರಳೆ',
16: 
17: 
18:     'ಬಾಳೆಹಣ್ಣು', 'ಸೇಬು', 'ಕಿತ್ತಳೆ ಹಣ್ಣು', 'ಜೋಳ', 'ಮೊಟ್ಟೆ', 'ಬದನೇಕಾಯಿ', 'ದ್ರಾಕ್ಷಿ', 'ಹಾಲು', 'ಮೊಸರು', 'ಬೆಣ್ಣೆ',
19:     'ಅಣಬೆ', 'ಅನ್ನ', 'ಸಪೋಟ', 'ಸೀಬೆಹಣ್ಣು', 'ಕಲ್ಲಂಗಡಿ', 'ಅನಾನಸ್', 'ಗೋಡಂಬಿ', 'ಬಾದಾಮಿ', 'ಹಿಟ್ಟು', 'ಪಾಲಕ್',
20:     'ಸೌತೆಕಾಯಿ', 'ಗಜ್ಜರಿ', 'ಮಾವಿನ ಹಣ್ಣು', 'ತೆಂಗಿನಕಾಯಿ', 'ಎಣ್ಣೆ', 'ಕಡ್ಲೆಕಾಯಿ', 'ನೀರು', 'ಸಿಹಿ', 'ಖಾರ', 'ಹುಳಿ',
21:     'ಈರುಳ್ಳಿ', 'ಆಲೂಗಡ್ಡೆ', 'ಬೆಂಡೆಕಾಯಿ', 'ಹಾಗಲಕಾಯಿ', 'ಹೀರೆಕಾಯಿ', 'ಪಡವಲಕಾಯಿ', 'ನುಗ್ಗೆಕಾಯಿ', 'ಕುಂಬಳಕಾಯಿ',
22:     'ಹಲಸಿನಹಣ್ಣು', 'ನೇರಳೆ ಹಣ್ಣು', 'ಚಿಕ್ಕೂ', 'ಸೀತಾಫಲ', 'ಪಪಾಯ', 'ಅರಿಶಿನ', 'ಶುಂಠಿ', 'ಬೆಳ್ಳುಳ್ಳಿ', 'ಬೆಲ್ಲ',
23: 
24: 
25:     'ವೃತ್ತ', 'ಚೌಕ', 'ನಕ್ಷತ್ರ', 'ಚಂದ್ರಾಕಾರ', 'ತ್ರಿಭುಜ',
26: 
27: 
28:     'ಸೋಮವಾರ', 'ಮಂಗಳವಾರ', 'ಬುಧವಾರ', 'ಗುರುವಾರ', 'ಶುಕ್ರವಾರ', 'ಶನಿವಾರ', 'ರವಿವಾರ',
29: 
30: 
31:     'ಒಂದು', 'ಎರಡು', 'ಮೂರು', 'ನಾಲ್ಕು', 'ಐದು', 'ಆರು', 'ಎಳು', 'ಎಂಟು', 'ಒಂಬತ್ತು', 'ಹತ್ತು',
32:     'ಐವತ್ತು', 'ನೂರು', 'ಐನೂರು', 'ಸಾವಿರ', 'ಲಕ್ಷ', 'ಕೋಟಿ', 'ಹದಿಮೂರು', 'ಹನ್ನೊಂದು', 'ಹನ್ನೆರಡು', 'ಇಪ್ಪತ್ತು',
33:     'ಮೂವತ್ತು', 'ನಲವತ್ತು', 'ಅರವತ್ತು', 'ಎಪ್ಪತ್ತು', 'ಎಂಬತ್ತು', 'ತೊಂಬತ್ತು', 'ಹತ್ತು ಸಾವಿರ', 'ಹದಿನಾಲ್ಕು',
34:     'ಹದಿನೈದು', 'ಹದಿನಾರು', 'ಹದಿನೇಳು', 'ಹದಿನೆಂಟು', 'ಹತ್ತೊಂಬತ್ತು',
35: 
36: 
37:     'ಈಜು', 'ನಗು', 'ಹಾಡು', 'ಕೊಡು', 'ತಿನ್ನು', 'ಕುಳಿತುಕೊ', 'ಓದು', 'ಬರೆ', 'ನಡೆ', 'ನೋಡು',
38:     'ಕೇಳು', 'ಮಾತನಾಡು', 'ಆಡು', 'ಹಾರು', 'ತಬ್ಬಿಕೊ', 'ಓಡು', 'ಕುಡಿ', 'ಅಳು', 'ಮುಚ್ಚು', 'ತಳ್ಳು',
39:     'ಎಳೆ', 'ಜಿಗಿ', 'ಹತ್ತು', 'ತೊಳೆ', 'ಗುಡಿಸು', 'ಅಡುಗೆ ಮಾಡು', 'ಮಲಗು', 'ಎದ್ದೇಳು', 'ಕರೆ ಮಾಡು', 'ಕುಣಿದಾಡು',
40:     'ತೆರೆ', 'ನಗು', 'ಕತ್ತರಿಸು', 'ಎಸೆಯುವುದು', 'ಹಿಡಿ', 'ಸುರಿ',
41: 
42: 
43:     'ಹುಡುಗ', 'ಹುಡುಗಿ', 'ಪುರಷ', 'ಮಹಿಳೆ', 'ಅಜ್ಜ', 'ಅಜ್ಜಿ', 'ಅಪ್ಪ', 'ಅಮ್ಮ', 'ಸಹೋದರ', 'ಸಹೋದರಿ',
44:     'ಅತ್ತೆ', 'ಮಾವ', 'ಶಿಶು', 'ಮಗು', 'ಗೆಳತಿ',
45: 
46: 
47:     'ಶೀಘ್ರವಾಗಿ', 'ನಿಧಾನವಾಗಿ', 'ಸುಲಭವಾಗಿ', 'ಕಠಿಣವಾಗಿ', 'ಚೆನ್ನಾಗಿ', 'ತಪ್ಪದೆ', 'ಖಂಡಿತ', 'ಸುತ್ತಲೂ', 'ಅಲ್ಲಿ', 'ಇಲ್ಲಿ',
48:     'ಯಾವಾಗಲೂ',
49: 
50: 
51:     'ಬೆರಳು', 'ಹೃದಯ', 'ಮಂಡಿ', 'ತಲೆ', 'ಕೈ', 'ಕಾಲು', 'ಮೂಗು', 'ಕಿವಿ', 'ಕಣ್ಣು', 'ಬಾಯಿ',
52:     'ಕತ್ತು', 'ಹೊಟ್ಟೆ', 'ಬೆನ್ನು',
53: 
54: 
55:     'ಪರ್ವತ', 'ನದಿ', 'ಸರೋವರ', 'ಕಲ್ಲು', 'ಎಲೆ', 'ಬೇರು', 'ಆಕಾಶ', 'ಮೋಡ', 'ನಕ್ಷತ್ರ', 'ಸೂರ್ಯ',
56:     'ಗದ್ದೆ', 'ತೋಟ', 'ಕಾಡು', 'ಮರುಭೂಮಿ', 'ಕಡಲತೀರ', 'ಮರಳು', 'ಮಣ್ಣು', 'ಹುಲ್ಲು', 'ಜಲಪಾತ', 'ಸೂರ್ಯೋದಯ',
57: 
58: 
59:     'ಮಳೆ', 'ಗಾಳಿ', 'ಮಿಂಚು', 'ಸಿಡಿಲು', 'ಕಾಮನಬಿಲ್ಲು', 'ಹಿಮ', 'ಚಳಿ', 'ಬಿಸಿಲು', 'ಮಂಜು', 'ಬಿರುಗಾಳಿ',
60: 
61: 
62:     'ಸಂತೋಷ', 'ಬೇಸರ', 'ಕೋಪ', 'ಭಯ', 'ಆಶ್ಚರ್ಯ', 'ನಾಚಿಕೆ', 'ಉತ್ಸಾಹ', 'ಮಂಪರು', 'ಹೆಮ್ಮೆ',
63: 
64: 
65:     'ಹಬ್ಬ', 'ಗುಡಿ', 'ದೀಪ', 'ರಂಗೋಲಿ', 'ಹೂಮಾಲೆ', 'ಅಗರಬತ್ತಿ', 'ದೇವರು', 'ದೇವತೆ', 'ಪ್ರಾರ್ಥನೆ', 'ಕಾಣಿಕೆ',
66: 
67: 
68:     'ಶಾಲೆ', 'ತರಗತಿ', 'ಕಪ್ಪು ಹಲಗೆ', 'ಬಳಪ', 'ಶಿಕ್ಷಕಿ', 'ವಿದ್ಯಾರ್ಥಿನಿ', 'ಮನೆಗೆಲಸ', 'ಪರೀಕ್ಷೆ', 'ಗಂಟೆ', 'ಬೆಂಚು'
69: ];
70: 
71: 
72: export const getRandomCatchPhraseWords = (count: number = 30): string[] => {
73: 
74:     const wordList = [...ALL_CATCH_PHRASE_WORDS];
75: 
76: 
77:     for (let i = wordList.length - 1; i > 0; i--) {
78:         const j = Math.floor(Math.random() * (i + 1));
79:         [wordList[i], wordList[j]] = [wordList[j], wordList[i]];
80:     }
81: 
82:     return wordList.slice(0, Math.min(count, wordList.length));
83: };
````

## File: app/game/game.css
````css
  1: @tailwind base;
  2: @tailwind components;
  3: @tailwind utilities;
  4: 
  5: :root {
  6:   --border-radius-card: 20px;
  7:   --border-width-card: 3px;
  8:   --theme-gradient-start: #ff6b35;
  9:   --theme-gradient-end: #f7931e;
 10:   --secondary-gradient-start: #4f46e5;
 11:   --secondary-gradient-end: #7c3aed;
 12:   --accent-color: #059669;
 13:   --accent-light: #ecfdf5;
 14:   --kannada-gold: #fbbf24;
 15:   --kannada-orange: #f97316;
 16:   --kannada-red: #dc2626;
 17:   --cultural-pattern: #fed7aa;
 18:   --button-height-sm: 52px;
 19:   --button-height: 58px;
 20:   --animate-bounce-in: zoom-bounce 0.75s ease-out forwards;
 21:   --animate-slide-up: slide-up 0.6s ease-out forwards;
 22:   --animate-fade-in: fade-in 0.8s ease-out forwards;
 23: }
 24: 
 25: 
 26: @keyframes float {
 27:   0%, 100% { transform: translateY(0px); }
 28:   50% { transform: translateY(-10px); }
 29: }
 30: 
 31: @keyframes slide-up {
 32:   0% {
 33:     transform: translateY(30px);
 34:     opacity: 0;
 35:   }
 36:   100% {
 37:     transform: translateY(0);
 38:     opacity: 1;
 39:   }
 40: }
 41: 
 42: @keyframes fade-in {
 43:   0% { opacity: 0; }
 44:   100% { opacity: 1; }
 45: }
 46: 
 47: @keyframes pulse-glow {
 48:   0%, 100% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.3); }
 49:   50% { box-shadow: 0 0 30px rgba(251, 191, 36, 0.6); }
 50: }
 51: 
 52: html,
 53: body {
 54:   max-width: 100vw;
 55:   overflow-x: hidden;
 56:   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
 57:     Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
 58: }
 59: 
 60: body {
 61:   height: 100dvh;
 62:   font-synthesis: none;
 63:   text-rendering: optimizeLegibility;
 64:   -webkit-font-smoothing: antialiased;
 65:   -moz-osx-font-smoothing: grayscale;
 66:   background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 25%, #fdba74 50%, #fb923c 75%, #f97316 100%);
 67:   position: relative;
 68: }
 69: 
 70: 
 71: body::before {
 72:   content: "";
 73:   position: fixed;
 74:   top: 0;
 75:   left: 0;
 76:   right: 0;
 77:   bottom: 0;
 78:   background-image:
 79:     radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
 80:     radial-gradient(circle at 80% 80%, rgba(249, 115, 22, 0.1) 0%, transparent 50%),
 81:     radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.05) 0%, transparent 50%);
 82:   pointer-events: none;
 83:   z-index: -1;
 84: }
 85: 
 86: main {
 87:   font-family: var(--font-sans);
 88:   padding: 0 16px;
 89:   position: relative;
 90: }
 91: 
 92: a {
 93:   color: inherit;
 94:   text-decoration: none;
 95: }
 96: 
 97: button:disabled {
 98:   opacity: 0.6;
 99:   cursor: not-allowed;
100: }
101: 
102: button:not(:disabled):hover {
103:   opacity: 0.9;
104:   transform: translateY(-2px);
105:   transition: all 0.2s ease;
106: }
107: 
108: button:not(:disabled):active {
109:   transform: translateY(1px);
110: }
111: 
112: .card-border {
113:   position: relative;
114:   z-index: 1;
115:   backdrop-filter: blur(10px);
116:   box-shadow:
117:     0 20px 40px rgba(0, 0, 0, 0.1),
118:     0 8px 16px rgba(0, 0, 0, 0.1),
119:     inset 0 1px 0 rgba(255, 255, 255, 0.7);
120: }
121: 
122: .card-border:before {
123:   content: "";
124:   position: absolute;
125:   inset: -3px -3px -6px -3px;
126:   border-radius: 23px;
127:   background: linear-gradient(
128:     145deg,
129:     rgba(251, 191, 36, 0.4) 0%,
130:     rgba(249, 115, 22, 0.4) 50%,
131:     rgba(220, 38, 38, 0.4) 100%
132:   );
133:   z-index: -1;
134:   filter: blur(8px);
135: }
136: 
137: .card-border:after {
138:   content: "";
139:   box-sizing: border-box;
140:   position: absolute;
141:   inset: 0;
142:   background: rgba(255, 255, 255, 0.95);
143:   border-radius: var(--border-radius-card);
144:   border: var(--border-width-card) solid transparent;
145:   background-image:
146:     linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)),
147:     linear-gradient(
148:       135deg,
149:       var(--theme-gradient-start) 0%,
150:       var(--theme-gradient-end) 50%,
151:       var(--kannada-gold) 100%
152:     );
153:   background-origin: border-box;
154:   background-clip: padding-box, border-box;
155:   z-index: -1;
156:   pointer-events: none;
157: }
158: 
159: /* Kannada-inspired decorative elements */
160: .cultural-decoration {
161:   background: linear-gradient(
162:     45deg,
163:     var(--kannada-gold),
164:     var(--kannada-orange),
165:     var(--kannada-red)
166:   );
167:   -webkit-background-clip: text;
168:   -webkit-text-fill-color: transparent;
169:   background-clip: text;
170: }
171: 
172: .floating-element {
173:   animation: float 3s ease-in-out infinite;
174: }
175: 
176: select {
177:   appearance: none;
178:   -webkit-appearance: none;
179:   -moz-appearance: none;
180:   padding: 0 40px 0 16px;
181:   background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNV80MSkiPjxwYXRoIGQ9Ik04IDlMMTIgNUwxNiA5IiBzdHJva2U9IiNGOTczMTYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTE2IDE1TDEyIDE5TDggMTUiIHN0cm9rZT0iI0Y5NzMxNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJjbGlwMF81XzQxIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+");
182:   background-repeat: no-repeat;
183:   background-position: right 12px center;
184:   background-size: 24px;
185:   border: 2px solid var(--kannada-orange);
186:   color: #334155;
187:   border-radius: 12px;
188:   background-color: rgba(255, 255, 255, 0.9);
189:   transition: all 0.2s ease;
190: }
191: 
192: select:focus {
193:   outline: none;
194:   border-color: var(--kannada-gold);
195:   box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.2);
196: }
197: 
198: select::-ms-expand {
199:   display: none;
200: }
201: 
202: .styled-button {
203:   display: flex;
204:   flex-direction: row;
205:   align-items: center;
206:   justify-content: center;
207:   cursor: pointer;
208:   gap: 12px;
209:   border-radius: 16px;
210:   position: relative;
211:   color: #ffffff;
212:   text-align: center;
213:   height: 56px;
214:   padding: 0 32px;
215:   background: linear-gradient(
216:       to bottom,
217:       transparent 0%,
218:       transparent 88%,
219:       rgba(255, 255, 255, 0.2) 88%,
220:       rgba(255, 255, 255, 0.2) 100%
221:     ),
222:     linear-gradient(135deg, var(--theme-gradient-start) 0%, var(--theme-gradient-end) 50%, var(--kannada-gold) 100%);
223:   border-width: 2px 2px 5px 2px;
224:   border-style: solid;
225:   border-color: #dc2626;
226:   overflow: hidden;
227:   box-shadow:
228:     0px 6px 12px rgba(220, 38, 38, 0.3),
229:     0px 2px 4px rgba(0, 0, 0, 0.1);
230:   transition: all 0.3s ease;
231: }
232: 
233: .styled-button:hover {
234:   transform: translateY(-2px);
235:   box-shadow:
236:     0px 8px 16px rgba(220, 38, 38, 0.4),
237:     0px 4px 8px rgba(0, 0, 0, 0.15);
238: }
239: 
240: .styled-button:before {
241:   content: "";
242:   position: absolute;
243:   inset: 0;
244:   pointer-events: none;
245:   border-radius: 12px;
246:   border: 4px solid transparent;
247:   background-image: linear-gradient(
248:     135deg,
249:     var(--theme-gradient-start) 0%,
250:     var(--theme-gradient-end) 50%,
251:     var(--kannada-gold) 100%
252:   );
253:   background-origin: border-box;
254:   background-clip: border-box;
255:   -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
256:   -webkit-mask-composite: xor;
257:   mask-composite: exclude;
258:   z-index: 1;
259: }
260: 
261: .styled-button:after {
262:   content: "";
263:   position: absolute;
264:   inset: 2px;
265:   border-radius: 12px;
266:   border: 2px solid rgba(220, 38, 38, 0.6);
267:   z-index: 2;
268: }
269: 
270: .styled-button-text {
271:   color: white;
272:   font-size: 14px;
273:   font-weight: 800;
274:   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
275:   text-transform: uppercase;
276:   letter-spacing: 1px;
277:   z-index: 2;
278:   position: relative;
279: }
280: 
281: .styled-button:active {
282:   transform: translateY(4px);
283:   box-shadow:
284:     0 2px 4px rgba(220, 38, 38, 0.3),
285:     inset 0 -2px 12px rgba(0, 0, 0, 0.2),
286:     inset 0 2px 12px rgba(255, 255, 255, 0.4);
287: }
288: 
289: .styled-button-icon {
290:   position: relative;
291:   box-sizing: border-box;
292:   display: flex;
293:   flex-direction: row;
294:   justify-content: center;
295:   align-items: center;
296:   flex-grow: 0;
297:   padding: 0px;
298:   width: 30px;
299:   height: 30px;
300:   background: rgba(251, 191, 36, 0.3);
301:   border-radius: 999px;
302:   z-index: 1;
303: }
304: 
305: .styled-button-icon:after {
306:   pointer-events: none;
307:   content: "";
308:   position: absolute;
309:   inset: 0px;
310:   background: rgba(249, 115, 22, 0.5);
311:   border-radius: 999px;
312:   border: 2px solid var(--kannada-gold);
313:   z-index: -1;
314: }
315: 
316: @media (min-width: 1024px) {
317:   .styled-button {
318:     height: 60px;
319:   }
320:   .styled-button-text {
321:     font-size: 16px;
322:   }
323: }
324: 
325: .spinner {
326:   width: 16px;
327:   height: 16px;
328:   border: 2px solid rgba(255, 255, 255, 0.3);
329:   border-top: 2px solid #ffffff;
330:   border-radius: 50%;
331:   animation: spin 1s linear infinite;
332: }
333: 
334: @keyframes spin {
335:   0% {
336:     transform: rotate(0deg);
337:   }
338:   100% {
339:     transform: rotate(360deg);
340:   }
341: }
342: 
343: .button {
344:   appearance: none;
345:   display: flex;
346:   flex-direction: row;
347:   align-items: center;
348:   justify-content: center;
349:   gap: 8px;
350:   cursor: pointer;
351:   background: linear-gradient(135deg, var(--accent-color) 0%, #047857 100%);
352:   color: #ffffff;
353:   font-weight: 800;
354:   padding: 0 16px;
355:   height: var(--button-height-sm);
356:   border-radius: 12px;
357:   font-size: 14px;
358:   border: 2px solid transparent;
359:   box-shadow:
360:     0 4px 8px rgba(5, 150, 105, 0.3),
361:     0 2px 4px rgba(0, 0, 0, 0.1);
362:   transition: all 0.2s ease;
363:   text-transform: uppercase;
364:   letter-spacing: 0.5px;
365: 
366:   &.outline {
367:     background: rgba(255, 255, 255, 0.9);
368:     color: var(--kannada-orange);
369:     border: 2px solid var(--kannada-orange);
370:     backdrop-filter: blur(10px);
371:     transition: all 0.2s ease;
372:   }
373: 
374:   &.outline:hover {
375:     background: var(--kannada-orange);
376:     color: white;
377:     transform: translateY(-2px);
378:     box-shadow:
379:       0 6px 12px rgba(249, 115, 22, 0.4),
380:       0 2px 4px rgba(0, 0, 0, 0.1);
381:   }
382: 
383:   &.ghost {
384:     background: rgba(255, 255, 255, 0.9);
385:     color: #334155;
386:     height: var(--button-height-sm);
387:     border: 1px solid rgba(249, 115, 22, 0.3);
388:     backdrop-filter: blur(10px);
389:   }
390: 
391:   &.ghost:hover {
392:     background: rgba(255, 255, 255, 1);
393:     border-color: var(--kannada-orange);
394:     transform: translateY(-1px);
395:   }
396: }
397: 
398: .button:hover {
399:   transform: translateY(-2px);
400:   box-shadow:
401:     0 6px 12px rgba(5, 150, 105, 0.4),
402:     0 2px 4px rgba(0, 0, 0, 0.15);
403: }
404: 
405: @media (min-width: 1024px) {
406:   .button {
407:     padding: 0 24px;
408:     gap: 12px;
409:     height: var(--button-height);
410:     font-size: 16px;
411:   }
412: }
413: 
414: 
415: @keyframes zoom-bounce {
416:   0% {
417:     transform: scale(0.25) rotate(-10deg);
418:     animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
419:   }
420:   50% {
421:     transform: scale(1.1) rotate(5deg);
422:     animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
423:   }
424:   75% {
425:     transform: scale(0.95) rotate(-2deg);
426:     animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
427:   }
428:   100% {
429:     transform: scale(1) rotate(0deg);
430:   }
431: }
432: 
433: 
434: .kannada-title {
435:   background: linear-gradient(
436:     45deg,
437:     var(--kannada-gold),
438:     var(--kannada-orange),
439:     var(--kannada-red)
440:   );
441:   -webkit-background-clip: text;
442:   -webkit-text-fill-color: transparent;
443:   background-clip: text;
444:   font-weight: 900;
445:   text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
446: }
447: 
448: .cultural-card {
449:   background: rgba(255, 255, 255, 0.95);
450:   backdrop-filter: blur(15px);
451:   border: 2px solid rgba(251, 191, 36, 0.3);
452:   box-shadow:
453:     0 20px 40px rgba(0, 0, 0, 0.1),
454:     0 8px 16px rgba(251, 191, 36, 0.2),
455:     inset 0 1px 0 rgba(255, 255, 255, 0.8);
456: }
457: 
458: .glow-effect {
459:   animation: pulse-glow 2s ease-in-out infinite;
460: }
461: 
462: .slide-up-animation {
463:   animation: var(--animate-slide-up);
464: }
465: 
466: .fade-in-animation {
467:   animation: var(--animate-fade-in);
468: }
````

## File: app/game/hooks/use-connection-state.ts
````typescript
 1: import { useEffect, useCallback } from 'react';
 2: import {
 3:   useRTVIClient,
 4:   useRTVIClientTransportState,
 5: } from '@pipecat-ai/client-react';
 6: import { CONNECTION_STATES } from '../constants/game-constants';
 7: 
 8: export function useConnectionState(
 9:   onConnected?: () => void,
10:   onDisconnected?: () => void
11: ) {
12:   const client = useRTVIClient();
13:   const transportState = useRTVIClientTransportState();
14: 
15:   const isConnected = CONNECTION_STATES.ACTIVE.includes(transportState);
16:   const isConnecting = CONNECTION_STATES.CONNECTING.includes(transportState);
17:   const isDisconnecting =
18:     CONNECTION_STATES.DISCONNECTING.includes(transportState);
19: 
20: 
21:   useEffect(() => {
22:     if (isConnected && onConnected) {
23:       onConnected();
24:     }
25:     if (!isConnected && !isConnecting && onDisconnected) {
26:       onDisconnected();
27:     }
28:   }, [isConnected, isConnecting, onConnected, onDisconnected]);
29: 
30: 
31:   const toggleConnection = useCallback(async () => {
32:     if (!client) return;
33: 
34:     try {
35:       if (isConnected) {
36:         await client.disconnect();
37:       } else {
38:         await client.connect();
39:       }
40:     } catch (error) {
41:       console.error('Connection error:', error);
42:     }
43:   }, [client, isConnected]);
44: 
45:   return {
46:     isConnected,
47:     isConnecting,
48:     isDisconnecting,
49:     toggleConnection,
50:     transportState,
51:     client,
52:   };
53: }
````

## File: app/game/hooks/use-game-state.ts
````typescript
 1: import { GAME_CONFIG, GAME_STATES, GameState } from "../constants/game-constants";
 2: import { getRandomCatchPhraseWords } from "../data/word-wrangler-words";
 3: import { useCallback, useState } from "react";
 4: 
 5: export function useGameState() {
 6: 
 7:   const [gameState, setGameState] = useState<GameState>(GAME_STATES.IDLE);
 8:   const [timeLeft, setTimeLeft] = useState(GAME_CONFIG.GAME_DURATION);
 9:   const [score, setScore] = useState(0);
10:   const [words, setWords] = useState<string[]>([]);
11:   const [currentWordIndex, setCurrentWordIndex] = useState(0);
12:   const [skipsRemaining, setSkipsRemaining] = useState(GAME_CONFIG.MAX_SKIPS);
13:   const [bestScore, _setBestScore] = useState(0);
14: 
15: 
16:   const initializeGame = useCallback(() => {
17:     const freshWords = getRandomCatchPhraseWords(GAME_CONFIG.WORD_POOL_SIZE);
18:     setWords(freshWords);
19:     setGameState(GAME_STATES.ACTIVE);
20:     setTimeLeft(GAME_CONFIG.GAME_DURATION);
21:     setScore(0);
22:     setCurrentWordIndex(0);
23:     setSkipsRemaining(GAME_CONFIG.MAX_SKIPS);
24: 
25: 
26:     const storedScore = localStorage.getItem("bestScore");
27:     if (storedScore) {
28:       _setBestScore(Number(storedScore) || 0);
29:     }
30:     return freshWords;
31:   }, []);
32: 
33: 
34:   const finishGame = useCallback(() => {
35:     setGameState(GAME_STATES.FINISHED);
36:   }, []);
37: 
38: 
39:   const incrementScore = useCallback(() => {
40:     setScore((prev) => prev + 1);
41:   }, []);
42: 
43: 
44:   const setBestScore = useCallback((newBestScore: number) => {
45:     _setBestScore(newBestScore);
46:     localStorage.setItem("bestScore", newBestScore.toString());
47:   }, []);
48: 
49: 
50:   const moveToNextWord = useCallback(() => {
51:     setCurrentWordIndex((prev) => {
52:       if (prev >= words.length - 1) {
53: 
54:         setWords(getRandomCatchPhraseWords(GAME_CONFIG.WORD_POOL_SIZE));
55:         return 0;
56:       }
57:       return prev + 1;
58:     });
59:   }, [words]);
60: 
61: 
62:   const useSkip = useCallback(() => {
63:     if (skipsRemaining <= 0) return false;
64:     setSkipsRemaining((prev) => prev - 1);
65:     return true;
66:   }, [skipsRemaining]);
67: 
68: 
69:   const decrementTimer = useCallback(() => {
70:     return setTimeLeft((prev) => {
71:       if (prev <= 1) {
72:         return 0;
73:       }
74:       return prev - 1;
75:     });
76:   }, []);
77: 
78:   return {
79: 
80:     gameState,
81:     setGameState,
82:     timeLeft,
83:     score,
84:     bestScore,
85:     words,
86:     currentWord: words[currentWordIndex] || "",
87:     skipsRemaining,
88: 
89: 
90:     initializeGame,
91:     finishGame,
92:     incrementScore,
93:     setBestScore,
94:     moveToNextWord,
95:     useSkip,
96:     decrementTimer,
97:   };
98: }
````

## File: app/game/hooks/use-game-timer.ts
````typescript
 1: import { GAME_CONFIG } from "../constants/game-constants";
 2: import { clearTimer } from "../utils/timer-utils";
 3: import { useCallback, useEffect, useRef, useState } from "react";
 4: 
 5: export function useGameTimer(onTimeUp: () => void) {
 6:   const [timeLeft, setTimeLeft] = useState(GAME_CONFIG.GAME_DURATION);
 7:   const timerRef = useRef<NodeJS.Timeout | null>(null);
 8:   const hasCalledTimeUpRef = useRef(false);
 9: 
10: 
11:   const startTimer = useCallback(() => {
12: 
13:     setTimeLeft(GAME_CONFIG.GAME_DURATION);
14:     hasCalledTimeUpRef.current = false;
15: 
16: 
17:     timerRef.current = clearTimer(timerRef.current);
18: 
19: 
20:     timerRef.current = setInterval(() => {
21:       setTimeLeft((prev) => {
22:         if (prev <= 1 && !hasCalledTimeUpRef.current) {
23: 
24:           timerRef.current = clearTimer(timerRef.current);
25:           hasCalledTimeUpRef.current = true;
26:           onTimeUp();
27:           return 0;
28:         }
29:         return prev - 1;
30:       });
31:     }, GAME_CONFIG.TIMER_INTERVAL);
32:   }, [onTimeUp]);
33: 
34: 
35:   const stopTimer = useCallback(() => {
36:     timerRef.current = clearTimer(timerRef.current);
37:     hasCalledTimeUpRef.current = false;
38:   }, []);
39: 
40: 
41:   const resetTimer = useCallback(() => {
42:     setTimeLeft(GAME_CONFIG.GAME_DURATION);
43:     hasCalledTimeUpRef.current = false;
44:   }, []);
45: 
46: 
47:   useEffect(() => {
48:     return () => {
49:       timerRef.current = clearTimer(timerRef.current);
50:     };
51:   }, []);
52: 
53:   return {
54:     timeLeft,
55:     startTimer,
56:     stopTimer,
57:     resetTimer,
58:   };
59: }
````

## File: app/game/hooks/use-visual-feedback.ts
````typescript
 1: "use client"
 2: 
 3: import { useState, useRef, useCallback } from "react"
 4: import { GAME_CONFIG } from "../constants/game-constants"
 5: import { clearTimer } from '../utils/timer-utils';
 6: 
 7: 
 8: 
 9: export function useVisualFeedback() {
10: 
11:   const [showAutoDetected, setShowAutoDetected] = useState(false);
12:   const [showIncorrect, setShowIncorrect] = useState(false);
13:   const autoDetectTimerRef = useRef<NodeJS.Timeout | null>(null);
14: 
15: 
16:   const resetVisuals = useCallback(() => {
17:     setShowAutoDetected(false);
18:     setShowIncorrect(false);
19:     autoDetectTimerRef.current = clearTimer(autoDetectTimerRef.current);
20:   }, []);
21: 
22: 
23:   const showCorrect = useCallback((onComplete?: () => void) => {
24: 
25:     autoDetectTimerRef.current = clearTimer(autoDetectTimerRef.current);
26: 
27: 
28:     setShowAutoDetected(true);
29:     setShowIncorrect(false);
30: 
31: 
32:     autoDetectTimerRef.current = setTimeout(() => {
33:       setShowAutoDetected(false);
34:       if (onComplete) onComplete();
35:     }, GAME_CONFIG.ANIMATION_DURATION);
36:   }, []);
37: 
38: 
39:   const showIncorrectAnimation = useCallback(() => {
40: 
41:     autoDetectTimerRef.current = clearTimer(autoDetectTimerRef.current);
42: 
43: 
44:     setShowIncorrect(true);
45:     setShowAutoDetected(false);
46: 
47: 
48:     autoDetectTimerRef.current = setTimeout(() => {
49:       setShowIncorrect(false);
50:     }, GAME_CONFIG.ANIMATION_DURATION);
51:   }, []);
52: 
53: 
54:   const cleanup = useCallback(() => {
55:     autoDetectTimerRef.current = clearTimer(autoDetectTimerRef.current);
56:   }, []);
57: 
58:   return {
59:     showAutoDetected,
60:     showIncorrect,
61:     resetVisuals,
62:     showCorrect,
63:     showIncorrectAnimation,
64:     cleanup,
65:   };
66: }
````

## File: app/game/hooks/use-word-detection.ts
````typescript
 1: import { useRef } from 'react';
 2: import { useRTVIClientEvent } from '@pipecat-ai/client-react';
 3: import { RTVIEvent } from '@pipecat-ai/client-js';
 4: import { detectWordGuess } from '../utils/word-detection';
 5: import { GAME_STATES, GameState } from '../constants/game-constants';
 6: 
 7: interface UseWordDetectionProps {
 8:   gameState: GameState;
 9:   currentWord: string;
10:   onCorrectGuess: () => void;
11:   onIncorrectGuess: () => void;
12: }
13: 
14: export function useWordDetection({
15:   gameState,
16:   currentWord,
17:   onCorrectGuess,
18:   onIncorrectGuess,
19: }: UseWordDetectionProps) {
20:   const lastProcessedMessageRef = useRef('');
21: 
22:   // Reset the last processed message
23:   const resetLastProcessedMessage = () => {
24:     lastProcessedMessageRef.current = '';
25:   };
26: 
27: 
28:   useRTVIClientEvent(RTVIEvent.BotTranscript, (data) => {
29:     if (gameState !== GAME_STATES.ACTIVE) {
30:       return;
31:     }
32: 
33:     if (!currentWord) {
34:       return;
35:     }
36: 
37:     if (!data.text) {
38:       return;
39:     }
40: 
41: 
42:     if (data.text === lastProcessedMessageRef.current) {
43:       return;
44:     }
45: 
46:     lastProcessedMessageRef.current = data.text;
47: 
48: 
49:     const result = detectWordGuess(data.text, currentWord);
50: 
51:     if (result.isCorrect) {
52:       onCorrectGuess();
53:     } else if (result.isExplicitGuess) {
54:       onIncorrectGuess();
55:     } else {
56:     }
57:   });
58: 
59:   return {
60:     resetLastProcessedMessage,
61:   };
62: }
````

## File: app/game/layout.tsx
````typescript
 1: "use server"
 2: 
 3: import "./game.css"
 4: 
 5: export default async function GameLayout({
 6:   children
 7: }: {
 8:   children: React.ReactNode
 9: }) {
10:   return (
11:     <div className="game-container relative min-h-[calc(100vh-4rem)] w-full">
12:       {children}
13:     </div>
14:   )
15: }
````

## File: app/game/page.tsx
````typescript
  1: "use client"
  2: 
  3: import { Card, CardInner } from "./_components/card";
  4: import { WordWrangler } from "./_components/Game/word-wrangler";
  5: import { StartGameButton } from "./_components/StartButton";
  6: import { GAME_TEXT } from "./constants/game-constants";
  7: import { PERSONALITY_PRESETS, PersonalityType } from "./types/personality";
  8: import { useConfigurationSettings, ConfigurationProvider } from "./contexts/configuration";
  9: import { RTVIProvider } from "./providers/RTVIProvider";
 10: import { RTVIClientAudio } from "@pipecat-ai/client-react";
 11: import {
 12:   IconArrowForwardUp,
 13:   IconCheck,
 14:   IconCode,
 15:   IconX,
 16:   IconTrophy,
 17:   IconTarget,
 18:   IconClock,
 19:   IconSparkles,
 20: } from "@tabler/icons-react";
 21: import JSConfetti from "js-confetti";
 22: import Image from "next/image";
 23: import Link from "next/link";
 24: import { useEffect, useState } from "react";
 25: 
 26: function GameContent() {
 27:   const [hasStarted, setHasStarted] = useState(false);
 28:   const [gameEnded, setGameEnded] = useState(false);
 29:   const [score, setScore] = useState(0);
 30:   const [bestScore, setBestScore] = useState(0);
 31:   const config = useConfigurationSettings();
 32: 
 33:   useEffect(() => {
 34:     if (gameEnded) {
 35:       const confetti = new JSConfetti();
 36:       confetti.addConfetti({
 37:         emojis: ["🏆", "⭐", "🎉", "💫", "🌟", "👑", "💯", "🎊"],
 38:         confettiNumber: 150,
 39:       });
 40:     }
 41:   }, [gameEnded]);
 42: 
 43:   if (gameEnded) {
 44:     return (
 45:       <div className="flex flex-col justify-between lg:justify-center items-center min-h-[100dvh] py-6 relative overflow-hidden">
 46:         {}
 47:         <div className="absolute top-10 left-10 text-6xl opacity-20 floating-element">🏆</div>
 48:         <div className="absolute top-32 right-16 text-4xl opacity-15 floating-element" style={{animationDelay: '1s'}}>✨</div>
 49:         <div className="absolute bottom-32 left-16 text-5xl opacity-10 floating-element" style={{animationDelay: '2s'}}>🌟</div>
 50: 
 51:         <div className="flex flex-1 w-full">
 52:           <Card className="cultural-card w-full lg:max-w-2xl mx-auto mt-[50px] lg:mt-[120px] self-center text-center pt-[62px] slide-up-animation">
 53:             <div className="flex items-center justify-center w-[162px] h-[162px] rounded-full absolute z-20 -top-[81px] left-1/2 -translate-x-1/2 animate-bounce-in glow-effect">
 54:               <Image src="/game/star.png" alt="Celebration Star" width={162} height={162} priority />
 55:             </div>
 56:             <CardInner>
 57:               <div className="fade-in-animation">
 58:                 <h2 className="text-xl lg:text-2xl font-extrabold mb-2 kannada-title">
 59:                   ಅಭಿನಂದನೆಗಳು! Congratulations!
 60:                 </h2>
 61:                 <p className="text-lg text-slate-600 mb-4">You are truly a Padhagala Raaja!</p>
 62:               </div>
 63: 
 64:               <div className="my-6 slide-up-animation" style={{animationDelay: '0.3s'}}>
 65:                 <h3 className="text-lg font-bold text-slate-700 mb-2">{GAME_TEXT.finalScore}</h3>
 66:                 <div className="relative">
 67:                   <p className="text-5xl lg:text-6xl font-extrabold cultural-decoration bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl px-6 py-6 my-4 shadow-xl">
 68:                     {score}
 69:                   </p>
 70:                   <div className="absolute -top-2 -right-2 text-2xl">🎯</div>
 71:                 </div>
 72:               </div>
 73: 
 74:               <div className="slide-up-animation" style={{animationDelay: '0.6s'}}>
 75:                 <p className="font-medium text-slate-600 mb-2">
 76:                   {GAME_TEXT.finalScoreMessage}
 77:                 </p>
 78:                 <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full border-2 border-amber-200">
 79:                   <IconTrophy size={20} className="text-amber-600" />
 80:                   <span className="text-xl font-extrabold text-amber-700">{bestScore}</span>
 81:                 </div>
 82:               </div>
 83: 
 84:               <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-300 to-transparent my-8" />
 85: 
 86:               <div className="flex items-center justify-center slide-up-animation" style={{animationDelay: '0.9s'}}>
 87:                 <Link
 88:                   href="https://github.com/daily-co/word-wrangler-gemini-live"
 89:                   className="game-button ghost w-full lg:w-auto"
 90:                   target="_blank"
 91:                   rel="noopener noreferrer"
 92:                 >
 93:                   <IconCode size={24} />
 94:                   View Source Code
 95:                 </Link>
 96:               </div>
 97:             </CardInner>
 98:           </Card>
 99:         </div>
100: 
101:         <footer className="flex flex-col justify-center w-full py-6 lg:py-12">
102:           <StartGameButton
103:             isGameEnded={true}
104:             onGameStarted={() => {
105:               setGameEnded(false);
106:               setScore(0);
107:               setHasStarted(true);
108:             }}
109:           />
110:         </footer>
111:       </div>
112:     );
113:   }
114: 
115:   if (!hasStarted) {
116:     return (
117:       <div className="flex flex-col justify-between items-center min-h-[100dvh] py-6 overflow-hidden relative">
118:         {}
119:         <div className="absolute top-20 left-8 text-4xl opacity-15 floating-element">🎯</div>
120:         <div className="absolute top-40 right-12 text-3xl opacity-20 floating-element" style={{animationDelay: '1.5s'}}>📚</div>
121:         <div className="absolute bottom-40 left-12 text-3xl opacity-10 floating-element" style={{animationDelay: '3s'}}>✨</div>
122:         <div className="absolute bottom-60 right-8 text-4xl opacity-15 floating-element" style={{animationDelay: '2s'}}>🏆</div>
123: 
124:         <div className="flex flex-1">
125:           <Card className="cultural-card lg:min-w-2xl mx-auto mt-[50px] lg:mt-[120px] self-center slide-up-animation">
126:             <Image
127:               src="/game/logo.png"
128:               alt="Padhagala Raaja Logo"
129:               width={278}
130:               height={278}
131:               className="logo w-[150px] lg:w-[278px] h-auto absolute top-[-75px] lg:top-[-139px] left-[50%] -translate-x-1/2 z-10 animate-bounce-in glow-effect"
132:               priority
133:             />
134: 
135:             <CardInner>
136:               <div className="flex flex-col gap-6 lg:gap-8 text-center mt-[50px] lg:mt-[100px]">
137:                 {}
138:                 <div className="fade-in-animation">
139:                   <h1 className="text-2xl lg:text-3xl font-black mb-3 kannada-title">
140:                     ಪದಗಳ ರಾಜ
141:                   </h1>
142:                   <h2 className="text-xl lg:text-2xl font-bold text-slate-700 mb-2">
143:                     Padhagala Raaja
144:                   </h2>
145:                   <p className="text-lg font-semibold cultural-decoration">
146:                     {GAME_TEXT.introTitle}
147:                   </p>
148:                 </div>
149: 
150:                 {}
151:                 <div className="flex flex-col gap-4 lg:gap-5 slide-up-animation" style={{animationDelay: '0.3s'}}>
152:                   <div className="flex flex-row gap-4 relative group hover:scale-[1.02] transition-all duration-300">
153:                     <div className="absolute -top-3 -left-3 border-3 border-white lg:static size-12 lg:size-14 bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
154:                       <IconCheck size={24} />
155:                     </div>
156:                     <div className="flex-1 flex h-[60px] lg:h-auto bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl text-slate-600 leading-5 px-6 lg:px-8 items-center justify-center font-semibold text-pretty text-sm lg:text-base border-2 border-emerald-200 shadow-sm">
157:                       {GAME_TEXT.introGuide1}
158:                     </div>
159:                   </div>
160: 
161:                   <div className="flex flex-row gap-4 relative group hover:scale-[1.02] transition-all duration-300">
162:                     <div className="absolute -top-3 -left-3 border-3 border-white lg:static size-12 lg:size-14 bg-gradient-to-br from-red-100 to-pink-200 text-red-600 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
163:                       <IconX size={24} />
164:                     </div>
165:                     <div className="flex-1 flex h-[60px] lg:h-auto bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl text-slate-600 leading-5 px-6 lg:px-8 items-center justify-center font-semibold text-pretty text-sm lg:text-base border-2 border-red-200 shadow-sm">
166:                       {GAME_TEXT.introGuide2}
167:                     </div>
168:                   </div>
169: 
170:                   <div className="flex flex-row gap-4 relative group hover:scale-[1.02] transition-all duration-300">
171:                     <div className="absolute -top-3 -left-3 border-3 border-white lg:static size-12 lg:size-14 bg-gradient-to-br from-amber-100 to-orange-200 text-amber-700 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
172:                       <IconArrowForwardUp size={24} />
173:                     </div>
174:                     <div className="flex-1 flex h-[60px] lg:h-auto bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl text-slate-600 leading-5 px-6 lg:px-8 items-center justify-center font-semibold text-pretty text-sm lg:text-base border-2 border-amber-200 shadow-sm">
175:                       {GAME_TEXT.introGuide3}
176:                     </div>
177:                   </div>
178:                 </div>
179: 
180:                 {}
181:                 <div className="flex justify-center gap-6 lg:gap-8 my-4 slide-up-animation" style={{animationDelay: '0.6s'}}>
182:                   <div className="flex flex-col items-center">
183:                     <IconClock size={28} className="text-orange-500 mb-1" />
184:                     <span className="text-sm font-bold text-slate-600">60 seconds</span>
185:                   </div>
186:                   <div className="flex flex-col items-center">
187:                     <IconTarget size={28} className="text-blue-500 mb-1" />
188:                     <span className="text-sm font-bold text-slate-600">Unlimited words</span>
189:                   </div>
190:                   <div className="flex flex-col items-center">
191:                     <IconSparkles size={28} className="text-purple-500 mb-1" />
192:                     <span className="text-sm font-bold text-slate-600">AI powered</span>
193:                   </div>
194:                 </div>
195:               </div>
196: 
197:               <div className="flex-1 bg-gradient-to-r from-transparent via-orange-200 to-transparent h-[1px] my-6 lg:my-8" />
198: 
199:               <div className="slide-up-animation" style={{animationDelay: '0.9s'}}>
200:                 <label className="font-bold flex flex-col gap-3 flex-1">
201:                   <span className="text-lg cultural-decoration">{GAME_TEXT.aiPersonality}</span>
202:                   <select
203:                     className="game-select rounded-xl h-12 font-normal text-base shadow-sm"
204:                     value={config.personality}
205:                     onChange={(e) =>
206:                       config.setPersonality(e.target.value as PersonalityType)
207:                     }
208:                   >
209:                     {Object.entries(PERSONALITY_PRESETS).map(
210:                       ([value, label]) => (
211:                         <option key={value} value={value}>
212:                           {label}
213:                         </option>
214:                       )
215:                     )}
216:                   </select>
217:                 </label>
218:               </div>
219:             </CardInner>
220:           </Card>
221:         </div>
222: 
223:         <footer className="flex flex-col justify-center w-full py-6 lg:py-12 slide-up-animation" style={{animationDelay: '1.2s'}}>
224:           <StartGameButton onGameStarted={() => setHasStarted(true)} />
225:         </footer>
226:       </div>
227:     );
228:   }
229: 
230:   return (
231:     <WordWrangler
232:       onGameEnded={(score, bestScore = 0) => {
233:         setScore(score);
234:         setBestScore(bestScore);
235:         setGameEnded(true);
236:       }}
237:     />
238:   );
239: }
240: 
241: export default function GamePage() {
242:   return (
243:     <ConfigurationProvider>
244:       <RTVIProvider>
245:         <RTVIClientAudio />
246:         <GameContent />
247:       </RTVIProvider>
248:     </ConfigurationProvider>
249:   );
250: }
````

## File: app/game/providers/RTVIProvider.tsx
````typescript
 1: "use client";
 2: 
 3: import { RTVIClient } from "@pipecat-ai/client-js";
 4: import { DailyTransport } from "@pipecat-ai/daily-transport";
 5: import { RTVIClientProvider } from "@pipecat-ai/client-react";
 6: import { PropsWithChildren, useEffect, useState, useRef } from "react";
 7: import { useConfigurationSettings } from "../contexts/configuration";
 8: 
 9: 
10: 
11: 
12: 
13: const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "/api";
14: 
15: console.log("Using API base URL:", API_BASE_URL);
16: 
17: export function RTVIProvider({ children }: PropsWithChildren) {
18:   const [client, setClient] = useState<RTVIClient | null>(null);
19:   const config = useConfigurationSettings();
20:   const clientCreated = useRef(false);
21: 
22:   useEffect(() => {
23: 
24:     if (clientCreated.current) return;
25: 
26:     const transport = new DailyTransport();
27: 
28:     const rtviClient = new RTVIClient({
29:       transport,
30:       params: {
31:         baseUrl: API_BASE_URL,
32:         endpoints: {
33:           connect: "/connect",
34:         },
35:         requestData: {
36:           personality: config.personality,
37:         },
38:       },
39:       enableMic: true,
40:       enableCam: false,
41:     });
42: 
43:     setClient(rtviClient);
44:     clientCreated.current = true;
45: 
46: 
47:     return () => {
48:       if (rtviClient) {
49:         rtviClient.disconnect().catch((err) => {
50:           console.error("Error disconnecting client:", err);
51:         });
52:       }
53:       clientCreated.current = false;
54:     };
55:   }, [config.personality]);
56: 
57: 
58:   useEffect(() => {
59:     if (!client) return;
60: 
61: 
62:     client.params.requestData = {
63:       personality: config.personality,
64:     };
65:   }, [client, config.personality]);
66: 
67:   if (!client) {
68:     return null;
69:   }
70: 
71:   return <RTVIClientProvider client={client}>{children}</RTVIClientProvider>;
72: }
````

## File: app/game/README.md
````markdown
  1: # Padhagala Raaja Game Integration
  2: 
  3: This directory contains the integrated Padhagala Raaja (ಪದಗಳ ರಾಜ) word learning game.
  4: 
  5: ## Overview
  6: 
  7: Padhagala Raaja is a Kannada-inspired word learning game where players describe words to an AI, which tries to guess them. The game features:
  8: 
  9: - 60-second timed rounds
 10: - Real-time voice interaction with AI
 11: - Beautiful cultural styling with Kannada elements
 12: - Multiple AI personalities to choose from
 13: - Score tracking and best score persistence
 14: 
 15: ## Setup Requirements
 16: 
 17: ### Environment Variables
 18: 
 19: Add the following to your `.env.local` file:
 20: 
 21: ```bash
 22: # Game Configuration
 23: NEXT_PUBLIC_API_BASE_URL="/api/game"  # Or external API URL if using separate backend
 24: PIPECAT_CLOUD_API_KEY="your-pipecat-api-key"
 25: AGENT_NAME="word-wrangler"
 26: ```
 27: 
 28: ### Dependencies
 29: 
 30: The game requires these additional packages (already added to package.json):
 31: 
 32: - `@pipecat-ai/client-js` - Core Pipecat client
 33: - `@pipecat-ai/client-react` - React hooks for Pipecat
 34: - `@pipecat-ai/daily-transport` - Daily.co transport layer
 35: - `@tabler/icons-react` - Icon library
 36: - `js-confetti` - Confetti animations
 37: 
 38: ### Backend Requirements
 39: 
 40: The game requires a Pipecat Cloud account and agent setup:
 41: 
 42: 1. Sign up at [Pipecat Cloud](https://pipecat.daily.co)
 43: 2. Create a new agent named "word-wrangler"
 44: 3. Configure the agent with word guessing capabilities
 45: 4. Copy your API key to the environment variables
 46: 
 47: ## Current Implementation Status
 48: 
 49: ### ✅ Completed
 50: - Navigation integration with main app
 51: - Game page structure and routing
 52: - Custom styling and animations
 53: - Configuration context for AI personality
 54: - API route for game connections
 55: - Basic game UI components
 56: 
 57: ### 🚧 Simplified/Stubbed
 58: - `WordWrangler` component - Currently a simplified demo version
 59: - Game mechanics - Requires full AI integration
 60: - Real-time voice features - Needs Pipecat backend
 61: 
 62: ### ❌ Not Implemented Yet
 63: - Full game hooks (useGameState, useGameTimer, etc.)
 64: - Word detection and scoring logic
 65: - Voice interaction features
 66: - Leaderboard integration
 67: 
 68: ## File Structure
 69: 
 70: ```
 71: app/game/
 72: ├── README.md                    # This file
 73: ├── layout.tsx                   # Game layout with custom styling
 74: ├── page.tsx                     # Main game page
 75: ├── game.css                     # Game-specific styles
 76: ├── _components/
 77: │   ├── card.tsx                # Card UI components
 78: │   ├── configuration-context.tsx # AI personality settings
 79: │   ├── game-constants.ts       # Game configuration and text
 80: │   ├── rtvi-provider.tsx       # Real-time voice provider
 81: │   ├── start-button.tsx        # Game start button
 82: │   ├── word-wrangler.tsx       # Main game component (simplified)
 83: │   └── hooks/
 84: │       └── use-connection-state.ts # Connection management hook
 85: └── api/
 86:     └── game/
 87:         └── connect/
 88:             └── route.ts        # API endpoint for game connections
 89: ```
 90: 
 91: ## Development Notes
 92: 
 93: 1. The game uses a separate styling system from the main app to preserve its unique visual identity
 94: 2. All game-specific styles are prefixed with `game-` to avoid conflicts
 95: 3. The game container provides its own background and decorative elements
 96: 4. TypeScript errors for Pipecat packages are expected until they are installed
 97: 
 98: ## Future Enhancements
 99: 
100: 1. **Full Game Implementation**: Complete the WordWrangler component with all game mechanics
101: 2. **Leaderboard Integration**: Connect game scores to the main app's leaderboard
102: 3. **Progress Tracking**: Award badges based on game performance
103: 4. **Offline Mode**: Add practice mode without AI connection
104: 5. **Multiple Languages**: Extend beyond Kannada to other languages
````

## File: app/game/styles/HomeStyles.ts
````typescript
 1: export const styles = {
 2:   main: {
 3:     display: "flex",
 4:     flexDirection: "column" as const,
 5:     justifyContent: "flex-start",
 6:     alignItems: "center",
 7:     minHeight: "100vh",
 8:     padding: "2rem 0",
 9:   },
10:   container: {
11:     width: "100%",
12:     maxWidth: "800px",
13:     padding: "0 1rem",
14:   },
15:   title: {
16:     fontSize: "2rem",
17:     textAlign: "center" as const,
18:     marginBottom: "2rem",
19:     color: "#333",
20:   },
21:   gameContainer: {
22:     marginBottom: "2rem",
23:   },
24:   controlsContainer: {
25:     display: "flex",
26:     flexDirection: "column" as const,
27:     gap: "1rem",
28:     marginBottom: "2rem",
29:   },
30:   settings: {
31:     backgroundColor: "white",
32:     padding: "1rem",
33:     borderRadius: "8px",
34:     boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
35:   },
36:   label: {
37:     display: "flex",
38:     flexDirection: "column" as const,
39:     gap: "0.5rem",
40:     fontSize: "0.9rem",
41:     color: "#555",
42:   },
43:   select: {
44:     padding: "0.5rem",
45:     border: "1px solid #ddd",
46:     borderRadius: "4px",
47:     fontSize: "1rem",
48:   },
49:   instructions: {
50:     backgroundColor: "white",
51:     padding: "1.5rem",
52:     borderRadius: "8px",
53:     boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
54:   },
55:   instructionsTitle: {
56:     fontSize: "1.4rem",
57:     marginBottom: "1rem",
58:     color: "#333",
59:   },
60:   instructionsList: {
61:     paddingLeft: "1.5rem",
62:     lineHeight: 1.6,
63:   },
64: };
````

## File: app/game/types/personality.ts
````typescript
 1: export type PersonalityType =
 2:   | 'friendly'
 3:   | 'professional'
 4:   | 'enthusiastic'
 5:   | 'thoughtful'
 6:   | 'witty';
 7: 
 8: 
 9: export const PERSONALITY_PRESETS: Record<PersonalityType, string> = {
10:   friendly: 'Friendly',
11:   professional: 'Professional',
12:   enthusiastic: 'Enthusiastic',
13:   thoughtful: 'Thoughtful',
14:   witty: 'Witty',
15: };
16: 
17: 
18: export const DEFAULT_PERSONALITY: PersonalityType = 'witty';
````

## File: app/game/utils/format-time.ts
````typescript
1: export function formatTime(seconds: number): string {
2:   const mins = Math.floor(seconds / 60);
3:   const secs = seconds % 60;
4:   return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
5: }
````

## File: app/game/utils/timer-utils.ts
````typescript
 1: export function clearTimer(timer: NodeJS.Timeout | null): null {
 2:   if (timer) {
 3:     clearTimeout(timer);
 4:   }
 5:   return null;
 6: }
 7: 
 8: 
 9: 
10: 
11: 
12: export function createCountdownTimer(
13:   durationSeconds: number,
14:   onTick: (secondsLeft: number) => void,
15:   onComplete: () => void
16: ): () => void {
17:   let secondsLeft = durationSeconds;
18: 
19:   const timer = setInterval(() => {
20:     secondsLeft--;
21:     onTick(secondsLeft);
22: 
23:     if (secondsLeft <= 0) {
24:       clearInterval(timer);
25:       onComplete();
26:     }
27:   }, 1000);
28: 
29:   return () => {
30:     clearInterval(timer);
31:   };
32: }
````

## File: app/game/utils/word-detection.ts
````typescript
 1: import { TRANSCRIPT_PATTERNS } from '../constants/game-constants';
 2: 
 3: 
 4: 
 5: 
 6: export function detectWordGuess(transcript: string, targetWord: string) {
 7:   const currentWordLower = targetWord.toLowerCase().trim();
 8: 
 9: 
10:   const guessPattern = TRANSCRIPT_PATTERNS.GUESS_PATTERN;
11:   const guessMatch = transcript.match(guessPattern);
12: 
13:   if (guessMatch) {
14: 
15:     let guessedWord = (guessMatch[1] || guessMatch[2] || '')
16:       .toLowerCase()
17:       .trim();
18: 
19:     // Remove articles ("a", "an", "the") from the beginning of the guessed word
20:     guessedWord = guessedWord.replace(/^(a|an|the)\s+/i, '');
21: 
22:     return {
23:       isCorrect: guessedWord === currentWordLower,
24:       isExplicitGuess: true,
25:       guessedWord,
26:     };
27:   }
28: 
29: 
30:   const containsWord = transcript.toLowerCase().includes(currentWordLower);
31: 
32:   return {
33:     isCorrect: containsWord,
34:     isExplicitGuess: false,
35:     guessedWord: containsWord ? targetWord : null,
36:   };
37: }
````

## File: app/game/utils/word-pool.ts
````typescript
  1: const KANNADA_WORDS = [
  2: 
  3:   "ನಮಸ್ಕಾರ",
  4:   "ಧನ್ಯವಾದ",
  5:   "ಸ್ವಾಗತ",
  6:   "ವಿದಾಯ",
  7:   "ಹೌದು",
  8:   "ಇಲ್ಲ",
  9:   "ನೀರು",
 10:   "ಅನ್ನ",
 11:   "ಮನೆ",
 12:   "ಶಾಲೆ",
 13: 
 14: 
 15:   "ಕೆಂಪು",
 16:   "ಹಸಿರು",
 17:   "ನೀಲಿ",
 18:   "ಹಳದಿ",
 19:   "ಬಿಳಿ",
 20:   "ಕಪ್ಪು",
 21: 
 22: 
 23:   "ಒಂದು",
 24:   "ಎರಡು",
 25:   "ಮೂರು",
 26:   "ನಾಲ್ಕು",
 27:   "ಐದು",
 28: 
 29: 
 30:   "ಅಪ್ಪ",
 31:   "ಅಮ್ಮ",
 32:   "ಅಣ್ಣ",
 33:   "ತಂಗಿ",
 34:   "ಅಜ್ಜ",
 35:   "ಅಜ್ಜಿ",
 36: 
 37: 
 38:   "ಸೂರ್ಯ",
 39:   "ಚಂದ್ರ",
 40:   "ನಕ್ಷತ್ರ",
 41:   "ಮರ",
 42:   "ಹೂವು",
 43:   "ಮಳೆ",
 44: 
 45: 
 46:   "ನಾಯಿ",
 47:   "ಬೆಕ್ಕು",
 48:   "ಹಸು",
 49:   "ಕುದುರೆ",
 50:   "ಹಕ್ಕಿ",
 51: 
 52: 
 53:   "ಕೈ",
 54:   "ಕಾಲು",
 55:   "ತಲೆ",
 56:   "ಕಣ್ಣು",
 57:   "ಮೂಗು",
 58: 
 59: 
 60:   "ಪುಸ್ತಕ",
 61:   "ಪೆನ್",
 62:   "ಕುರ್ಚಿ",
 63:   "ಮೇಜು",
 64:   "ಬಾಗಿಲು",
 65: 
 66: 
 67:   "ಸಂತೋಷ",
 68:   "ದುಃಖ",
 69:   "ಪ್ರೀತಿ",
 70:   "ಭಯ",
 71:   "ಕೋಪ",
 72: ];
 73: 
 74: 
 75: 
 76: 
 77: 
 78: 
 79: export function getRandomCatchPhraseWords(count: number): string[] {
 80: 
 81:   const shuffled = [...KANNADA_WORDS];
 82: 
 83: 
 84:   for (let i = shuffled.length - 1; i > 0; i--) {
 85:     const j = Math.floor(Math.random() * (i + 1));
 86:     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
 87:   }
 88: 
 89: 
 90:   return shuffled.slice(0, Math.min(count, shuffled.length));
 91: }
 92: 
 93: 
 94: 
 95: 
 96: 
 97: export function getAllWords(): string[] {
 98:   return [...KANNADA_WORDS];
 99: }
100: 
101: 
102: 
103: 
104: 
105: export function getWordCount(): number {
106:   return KANNADA_WORDS.length;
107: }
````

## File: app/globals.css
````css
 1: @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
 2: 
 3: @tailwind base;
 4: @tailwind components;
 5: @tailwind utilities;
 6: 
 7: 
 8: @layer base {
 9:   :root {
10:     --background: 0 0% 100%;
11:     --foreground: 0 0% 20%;
12:     --card: 0 0% 100%;
13:     --card-foreground: 0 0% 20%;
14:     --popover: 0 0% 100%;
15:     --popover-foreground: 0 0% 20%;
16:     --primary: 6 76% 64%;
17:     --primary-foreground: 0 0% 100%;
18:     --secondary: 0 0% 96%;
19:     --secondary-foreground: 0 0% 20%;
20:     --muted: 0 0% 96%;
21:     --muted-foreground: 0 0% 45%;
22:     --accent: 6 76% 64%;
23:     --accent-foreground: 0 0% 100%;
24:     --destructive: 0 84% 60%;
25:     --destructive-foreground: 0 0% 100%;
26:     --border: 0 0% 90%;
27:     --input: 0 0% 90%;
28:     --ring: 0 0% 20%;
29:     --radius: 0.5rem;
30:   }
31: 
32:   .dark {
33:     --background: 0 0% 10%;
34:     --foreground: 0 0% 88%;
35:     --card: 0 0% 10%;
36:     --card-foreground: 0 0% 88%;
37:     --popover: 0 0% 10%;
38:     --popover-foreground: 0 0% 88%;
39:     --primary: 6 76% 64%;
40:     --primary-foreground: 0 0% 100%;
41:     --secondary: 0 0% 20%;
42:     --secondary-foreground: 0 0% 88%;
43:     --muted: 0 0% 20%;
44:     --muted-foreground: 0 0% 60%;
45:     --accent: 6 76% 64%;
46:     --accent-foreground: 0 0% 100%;
47:     --destructive: 0 84% 60%;
48:     --destructive-foreground: 0 0% 100%;
49:     --border: 0 0% 20%;
50:     --input: 0 0% 20%;
51:     --ring: 0 0% 88%;
52:   }
53: 
54:   html {
55:     @apply scroll-smooth;
56:   }
57: 
58:   body {
59:     @apply font-poppins antialiased;
60:   }
61: 
62: 
63:   [lang="kn"] {
64:     font-family: "Noto Sans Kannada", sans-serif;
65:   }
66: }
67: 
68: @layer base {
69:   * {
70:     @apply border-border;
71:   }
72:   body {
73:     @apply bg-background text-foreground;
74:   }
75: }
76: 
77: .font-montserrat {
78:   font-family: 'Montserrat', sans-serif;
79: }
````

## File: app/landing/hero.tsx
````typescript
 1: "use client"
 2: 
 3: 
 4: 
 5: 
 6: 
 7: 
 8: 
 9: 
10: 
11: 
12: 
13: 
14: 
15: 
16: 
17: 
18: 
19: 
20: 
21: 
22: 
23: 
24: 
25: import { SignInButton } from "@clerk/nextjs"
26: import { motion } from "framer-motion"
27: import { ArrowRight } from "lucide-react"
28: 
29: export function Hero() {
30: 
31:   const bounceVariants = {
32:     initial: { y: 0 },
33:     animate: {
34:       y: [-10, 0, -10],
35:       transition: {
36:         duration: 1.5,
37:         repeat: Infinity,
38:         ease: "easeInOut"
39:       }
40:     }
41:   }
42: 
43:   return (
44:     <div className="flex flex-col items-center text-center">
45:       {}
46:       <motion.div
47:         variants={bounceVariants}
48:         initial="initial"
49:         animate="animate"
50:         className="mb-6"
51:       >
52:         <img
53:           src="/logo.png"
54:           alt="LearnKannada Logo"
55:           width={240}
56:           height={240}
57:           className="size-60"
58:           onError={e => {
59:             console.error("Logo failed to load")
60:             e.currentTarget.style.display = "none"
61:           }}
62:         />
63:       </motion.div>
64: 
65:       {}
66:       <h1 className="text-foreground mb-4 text-4xl font-semibold md:text-5xl">
67:         Learn to speak and understand Kannada!
68:       </h1>
69:       <p className="text-muted-foreground mb-8 max-w-md text-lg">
70:         Play games, learn words, and enjoy Kannada with LearnKannada!
71:       </p>
72: 
73:       {}
74:       <SignInButton mode="modal">
75:         <button className="bg-accent text-accent-foreground hover:bg-accent/90 flex items-center rounded-md px-6 py-3 text-lg font-medium transition-colors">
76:           Start Learning
77:           <ArrowRight className="ml-2 size-5" />
78:         </button>
79:       </SignInButton>
80:     </div>
81:   )
82: }
````

## File: app/landing/page.tsx
````typescript
 1: "use server"
 2: 
 3: 
 4: 
 5: 
 6: 
 7: 
 8: 
 9: import { redirect } from "next/navigation"
10: 
11: export default async function LandingPage() {
12:   redirect("/")
13: }
````

## File: app/layout.tsx
````typescript
  1: "use server"
  2: 
  3: import "./globals.css"
  4: import { Poppins, Noto_Sans_Kannada } from "next/font/google"
  5: 
  6: const poppins = Poppins({
  7:   subsets: ["latin"],
  8:   weight: ["400", "600"],
  9:   variable: "--font-poppins"
 10: })
 11: 
 12: const notoSansKannada = Noto_Sans_Kannada({
 13:   subsets: ["kannada"],
 14:   weight: ["400", "600"],
 15:   variable: "--font-noto-sans-kannada"
 16: })
 17: 
 18: 
 19: 
 20: 
 21: 
 22: 
 23: 
 24: 
 25: 
 26: 
 27: 
 28: 
 29: 
 30: 
 31: 
 32: 
 33: 
 34: 
 35: 
 36: 
 37: 
 38: 
 39: 
 40: 
 41: 
 42: 
 43: import {
 44:   ClerkProvider,
 45:   UserButton,
 46:   SignInButton,
 47:   SignedIn,
 48:   SignedOut
 49: } from "@clerk/nextjs"
 50: import { ThemeProvider } from "@/components/utilities/providers"
 51: import { ThemeToggle } from "@/components/ui/theme-toggle"
 52: import { Home, Book, Gamepad2, Users, Award, Trophy } from "lucide-react"
 53: import Link from "next/link"
 54: import { Suspense } from "react"
 55: import { ProfileSync } from "@/components/profile-sync"
 56: import { LetterSelect } from "@/components/ui/letter-select"
 57: 
 58: export default async function RootLayout({
 59:   children
 60: }: {
 61:   children: React.ReactNode
 62: }) {
 63:   return (
 64:     <ClerkProvider>
 65:       <html
 66:         lang="en"
 67:         suppressHydrationWarning
 68:         className={`${poppins.variable} ${notoSansKannada.variable}`}
 69:       >
 70:         <head>
 71:           <meta charSet="UTF-8" />
 72:           <meta
 73:             name="viewport"
 74:             content="width=device-width, initial-scale=1.0"
 75:           />
 76:           <title>LearnKannada - Learn Kannada using AI</title>
 77:         </head>
 78:         <body className="bg-background font-poppins text-foreground min-h-screen antialiased">
 79:           <ThemeProvider
 80:             attribute="class"
 81:             defaultTheme="system"
 82:             enableSystem
 83:             disableTransitionOnChange
 84:           >
 85:             {}
 86:             <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
 87:               <div className="container flex h-16 items-center justify-between px-4">
 88:                 {}
 89:                 <Link href="/" className="flex items-center space-x-2">
 90:                   <img
 91:                     src="/logo.png"
 92:                     alt="LearnKannada Logo"
 93:                     width={40}
 94:                     height={40}
 95:                     className="size-10"
 96:                   />
 97:                   <span className="text-xl font-semibold">LearnKannada</span>
 98:                 </Link>
 99: 
100:                 {}
101:                 <nav className="hidden space-x-4 md:flex">
102:                   <Link
103:                     href="/"
104:                     className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium"
105:                   >
106:                     <Home className="mr-2 size-4" />
107:                     Home
108:                   </Link>
109:                   <LetterSelect />
110:                   <Link
111:                     href="/cards"
112:                     className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium"
113:                   >
114:                     <Book className="mr-2 size-4" />
115:                     Cards
116:                   </Link>
117:                   <Link
118:                     href="/quiz"
119:                     className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium"
120:                   >
121:                     <Gamepad2 className="mr-2 size-4" />
122:                     Quiz
123:                   </Link>
124:                   <Link
125:                     href="/game"
126:                     className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium"
127:                   >
128:                     <Trophy className="mr-2 size-4" />
129:                     Game
130:                   </Link>
131:                   <Link
132:                     href="/badges"
133:                     className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium"
134:                   >
135:                     <Award className="mr-2 size-4" />
136:                     Badges
137:                   </Link>
138:                 </nav>
139: 
140:                 {}
141:                 <div className="flex items-center space-x-4">
142:                   <ThemeToggle />
143:                   <div className="flex items-center">
144:                     <SignedIn>
145:                       <UserButton afterSignOutUrl="/" />
146:                     </SignedIn>
147:                   </div>
148:                 </div>
149:               </div>
150: 
151:               {}
152:               <nav className="border-border bg-background flex flex-col space-y-2 border-t p-4 md:hidden">
153:                 <Link
154:                   href="/"
155:                   className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium"
156:                 >
157:                   <Home className="mr-2 size-4" />
158:                   Home
159:                 </Link>
160:                 <div className="hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2">
161:                   <LetterSelect />
162:                 </div>
163:                 <Link
164:                   href="/cards"
165:                   className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium"
166:                 >
167:                   <Book className="mr-2 size-4" />
168:                   Cards
169:                 </Link>
170:                 <Link
171:                   href="/quiz"
172:                   className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium"
173:                 >
174:                   <Gamepad2 className="mr-2 size-4" />
175:                   Quiz
176:                 </Link>
177:                 <Link
178:                   href="/game"
179:                   className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium"
180:                 >
181:                   <Trophy className="mr-2 size-4" />
182:                   Game
183:                 </Link>
184:                 <Link
185:                   href="/badges"
186:                   className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium"
187:                 >
188:                   <Award className="mr-2 size-4" />
189:                   Badges
190:                 </Link>
191:               </nav>
192:             </header>
193: 
194:             {}
195:             <main className="flex-1">
196:               <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
197:             </main>
198: 
199:             {}
200:             <SignedIn>
201:               <ProfileSync />
202:             </SignedIn>
203: 
204:             {}
205:             <footer className="border-border bg-background border-t py-4">
206:               <div className="text-muted-foreground container text-center text-sm">
207:                 &copy; 2025{" "}
208:                 <Link
209:                   href="https://mirrorphotos.io"
210:                   className="hover:text-foreground transition"
211:                 >
212:                   MirrorPhotos
213:                 </Link>
214:                 . All rights reserved.
215:               </div>
216:             </footer>
217:           </ThemeProvider>
218:         </body>
219:       </html>
220:     </ClerkProvider>
221:   )
222: }
````

## File: app/learn/[letterId]/_components/letter-trace-wrapper.tsx
````typescript
  1: "use client"
  2: 
  3: import { useState, useEffect } from "react"
  4: import { useRouter } from "next/navigation"
  5: import LetterTrace from "@/components/learn/letter-trace"
  6: import { AlertCircle } from "lucide-react"
  7: 
  8: 
  9: const validLetterIds = [
 10:   "01_ಅ",
 11:   "02_ಆ",
 12:   "03_ಇ",
 13:   "04_ಈ",
 14:   "05_ಉ",
 15:   "06_ಊ",
 16:   "07_ಋ",
 17:   "08_ಎ",
 18:   "09_ಏ",
 19:   "10_ಐ",
 20:   "11_ಒ",
 21:   "12_ಓ",
 22:   "13_ಔ",
 23:   "14_ಅಂ",
 24:   "15_ಅಃ",
 25:   "16_ಕ",
 26:   "17_ಖ",
 27:   "18_ಗ",
 28:   "19_ಘ",
 29:   "20_ಙ",
 30:   "21_ಚ",
 31:   "22_ಛ",
 32:   "23_ಜ",
 33:   "24_ಝ",
 34:   "25_ಞ",
 35:   "26_ಟ",
 36:   "27_ಠ",
 37:   "28_ಡ",
 38:   "29_ಢ",
 39:   "30_ಣ",
 40:   "31_ತ",
 41:   "32_ಥ",
 42:   "33_ದ",
 43:   "34_ಧ",
 44:   "35_ನ",
 45:   "36_ಪ",
 46:   "37_ಫ",
 47:   "38_ಬ",
 48:   "39_ಭ",
 49:   "40_ಮ",
 50:   "41_ಯ",
 51:   "42_ರ",
 52:   "43_ಲ",
 53:   "44_ವ",
 54:   "45_ಶ",
 55:   "46_ಷ",
 56:   "47_ಸ",
 57:   "48_ಹ",
 58:   "49_ಳ"
 59: ]
 60: 
 61: interface LetterTraceWrapperProps {
 62:   letterId: string
 63: }
 64: 
 65: export default function LetterTraceWrapper({
 66:   letterId
 67: }: LetterTraceWrapperProps) {
 68:   const router = useRouter()
 69:   const [error, setError] = useState<string | null>(null)
 70:   const [isLoading, setIsLoading] = useState(true)
 71: 
 72:   const handleError = () => {
 73:     setError("Failed to load the letter. Please try again.")
 74:     setIsLoading(false)
 75:   }
 76: 
 77:   const handleLoad = () => {
 78:     setIsLoading(false)
 79:   }
 80: 
 81:   const handleComplete = () => {
 82: 
 83:     const currentIndex = validLetterIds.indexOf(letterId)
 84:     if (currentIndex === -1) return
 85: 
 86: 
 87:     if (currentIndex < validLetterIds.length - 1) {
 88:       const nextLetterId = validLetterIds[currentIndex + 1]
 89:       router.push(`/learn/${nextLetterId}`)
 90:     } else {
 91: 
 92:       router.push("/learn")
 93:     }
 94:   }
 95: 
 96:   if (error) {
 97:     return (
 98:       <div className="border-destructive/50 bg-destructive/10 text-destructive flex flex-col items-center justify-center gap-2 rounded-lg border p-4">
 99:         <AlertCircle className="size-6" />
100:         <p>{error}</p>
101:       </div>
102:     )
103:   }
104: 
105:   return (
106:     <div className="mx-auto w-full max-w-[512px]">
107:       {isLoading && (
108:         <div className="flex items-center justify-center p-8">
109:           <div className="text-muted-foreground">Loading letter...</div>
110:         </div>
111:       )}
112:       <div className={isLoading ? "hidden" : ""}>
113:         <LetterTrace
114:           src={`/letters/${letterId}.svg`}
115:           onDone={handleComplete}
116:           onError={handleError}
117:           onLoad={handleLoad}
118:           strokeWidth={60}
119:           tolerance={28}
120:         />
121:       </div>
122:     </div>
123:   )
124: }
````

## File: app/learn/[letterId]/page.tsx
````typescript
 1: "use server"
 2: 
 3: import { Suspense } from "react"
 4: import { notFound } from "next/navigation"
 5: import LetterTraceWrapper from "./_components/letter-trace-wrapper"
 6: 
 7: interface PageProps {
 8:   params: Promise<{ letterId: string }>
 9: }
10: 
11: 
12: const validLetterIds = [
13:   "01_ಅ",
14:   "02_ಆ",
15:   "03_ಇ",
16:   "04_ಈ",
17:   "05_ಉ",
18:   "06_ಊ",
19:   "07_ಋ",
20:   "08_ಎ",
21:   "09_ಏ",
22:   "10_ಐ",
23:   "11_ಒ",
24:   "12_ಓ",
25:   "13_ಔ",
26:   "14_ಅಂ",
27:   "15_ಅಃ",
28:   "16_ಕ",
29:   "17_ಖ",
30:   "18_ಗ",
31:   "19_ಘ",
32:   "20_ಙ",
33:   "21_ಚ",
34:   "22_ಛ",
35:   "23_ಜ",
36:   "24_ಝ",
37:   "25_ಞ",
38:   "26_ಟ",
39:   "27_ಠ",
40:   "28_ಡ",
41:   "29_ಢ",
42:   "30_ಣ",
43:   "31_ತ",
44:   "32_ಥ",
45:   "33_ದ",
46:   "34_ಧ",
47:   "35_ನ",
48:   "36_ಪ",
49:   "37_ಫ",
50:   "38_ಬ",
51:   "39_ಭ",
52:   "40_ಮ",
53:   "41_ಯ",
54:   "42_ರ",
55:   "43_ಲ",
56:   "44_ವ",
57:   "45_ಶ",
58:   "46_ಷ",
59:   "47_ಸ",
60:   "48_ಹ",
61:   "49_ಳ"
62: ]
63: 
64: export default async function LearnLetterPage({ params }: PageProps) {
65:   const { letterId } = await params
66:   const decodedLetterId = decodeURIComponent(letterId)
67: 
68: 
69:   if (!validLetterIds.includes(decodedLetterId)) {
70:     notFound()
71:   }
72: 
73:   return (
74:     <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4">
75:       <div className="w-full max-w-2xl text-center">
76:         <Suspense fallback={<div>Loading letter...</div>}>
77:           <LetterTraceWrapper letterId={decodedLetterId} />
78:         </Suspense>
79:       </div>
80:     </div>
81:   )
82: }
````

## File: app/learn/layout.tsx
````typescript
 1: "use server"
 2: 
 3: export default async function LearnLayout({
 4:   children
 5: }: {
 6:   children: React.ReactNode
 7: }) {
 8:   return (
 9:     <main className="flex min-h-screen flex-col items-center gap-8 py-8">
10:       {children}
11:     </main>
12:   )
13: }
````

## File: app/learn/page.tsx
````typescript
 1: "use server"
 2: 
 3: import Link from "next/link"
 4: 
 5: 
 6: const letters = [
 7:   { id: "01_ಅ", label: "ಅ" },
 8:   { id: "02_ಆ", label: "ಆ" },
 9:   { id: "03_ಇ", label: "ಇ" },
10:   { id: "04_ಈ", label: "ಈ" },
11:   { id: "05_ಉ", label: "ಉ" },
12:   { id: "06_ಊ", label: "ಊ" },
13:   { id: "07_ಋ", label: "ಋ" },
14:   { id: "08_ಎ", label: "ಎ" },
15:   { id: "09_ಏ", label: "ಏ" },
16:   { id: "10_ಐ", label: "ಐ" },
17:   { id: "11_ಒ", label: "ಒ" },
18:   { id: "12_ಓ", label: "ಓ" },
19:   { id: "13_ಔ", label: "ಔ" },
20:   { id: "14_ಅಂ", label: "ಅಂ" },
21:   { id: "15_ಅಃ", label: "ಅಃ" },
22:   { id: "16_ಕ", label: "ಕ" },
23:   { id: "17_ಖ", label: "ಖ" },
24:   { id: "18_ಗ", label: "ಗ" },
25:   { id: "19_ಘ", label: "ಘ" },
26:   { id: "20_ಙ", label: "ಙ" },
27:   { id: "21_ಚ", label: "ಚ" },
28:   { id: "22_ಛ", label: "ಛ" },
29:   { id: "23_ಜ", label: "ಜ" },
30:   { id: "24_ಝ", label: "ಝ" },
31:   { id: "25_ಞ", label: "ಞ" },
32:   { id: "26_ಟ", label: "ಟ" },
33:   { id: "27_ಠ", label: "ಠ" },
34:   { id: "28_ಡ", label: "ಡ" },
35:   { id: "29_ಢ", label: "ಢ" },
36:   { id: "30_ಣ", label: "ಣ" },
37:   { id: "31_ತ", label: "ತ" },
38:   { id: "32_ಥ", label: "ಥ" },
39:   { id: "33_ದ", label: "ದ" },
40:   { id: "34_ಧ", label: "ಧ" },
41:   { id: "35_ನ", label: "ನ" },
42:   { id: "36_ಪ", label: "ಪ" },
43:   { id: "37_ಫ", label: "ಫ" },
44:   { id: "38_ಬ", label: "ಬ" },
45:   { id: "39_ಭ", label: "ಭ" },
46:   { id: "40_ಮ", label: "ಮ" },
47:   { id: "41_ಯ", label: "ಯ" },
48:   { id: "42_ರ", label: "ರ" },
49:   { id: "43_ಲ", label: "ಲ" },
50:   { id: "44_ವ", label: "ವ" },
51:   { id: "45_ಶ", label: "ಶ" },
52:   { id: "46_ಷ", label: "ಷ" },
53:   { id: "47_ಸ", label: "ಸ" },
54:   { id: "48_ಹ", label: "ಹ" },
55:   { id: "49_ಳ", label: "ಳ" }
56: ]
57: 
58: export default async function LearnPage() {
59: 
60: 
61:   return (
62:     <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center p-4">
63:       <h1 className="mb-8 text-4xl font-bold">Learn Kannada Letters</h1>
64:       <div className="grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
65:         {letters.map(letter => (
66:           <Link
67:             key={letter.id}
68:             href={`/learn/${letter.id}`}
69:             className="hover:bg-accent hover:text-accent-foreground bg-card flex aspect-square items-center justify-center rounded-lg border p-4 text-4xl font-bold transition-colors"
70:             lang="kn"
71:           >
72:             {letter.label}
73:           </Link>
74:         ))}
75:       </div>
76:     </div>
77:   )
78: }
````

## File: app/page.tsx
````typescript
 1: "use server"
 2: 
 3: 
 4: 
 5: 
 6: 
 7: 
 8: 
 9: 
10: 
11: 
12: 
13: 
14: 
15: 
16: 
17: 
18: 
19: 
20: 
21: 
22: import { HeroSection } from "@/components/landing/hero"
23: import { SignedIn } from "@clerk/nextjs"
24: import LeaderboardContainer from "./_components/leaderboard-container"
25: 
26: export default async function HomePage() {
27:   return (
28:     <div className="flex min-h-screen flex-col items-center">
29:       <HeroSection />
30: 
31:       <div className="my-8 w-full max-w-screen-xl px-4">
32:         <LeaderboardContainer />
33:       </div>
34:     </div>
35:   )
36: }
````

## File: app/parental/_components/parental-dashboard.tsx
````typescript
  1: "use client"
  2: 
  3: import { useState, useEffect } from "react"
  4: import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
  5: import { SelectQuizResult } from "@/db/schema/quiz-results-schema"
  6: import { cn } from "@/lib/utils"
  7: import {
  8:   WordStatistics,
  9:   getWordStatsAction
 10: } from "@/actions/db/word-stats-actions"
 11: import Image from "next/image"
 12: 
 13: interface ParentalDashboardProps {
 14:   stats: {
 15:     totalQuizzes: number
 16:     averageScore: number
 17:     bestScore: number
 18:     recentResults: SelectQuizResult[]
 19:   } | null
 20: }
 21: 
 22: export default function ParentalDashboard({ stats }: ParentalDashboardProps) {
 23:   const [wordStats, setWordStats] = useState<WordStatistics[]>([])
 24:   const [isLoading, setIsLoading] = useState(true)
 25:   const [error, setError] = useState<string | null>(null)
 26: 
 27: 
 28:   useEffect(() => {
 29:     async function loadWordStats() {
 30:       try {
 31:         setIsLoading(true)
 32: 
 33:         const result = await getWordStatsAction(12)
 34: 
 35:         if (!result.isSuccess) {
 36:           throw new Error(result.message)
 37:         }
 38: 
 39:         setWordStats(result.data)
 40:       } catch (err) {
 41:         console.error("Error loading word statistics:", err)
 42:         setError(
 43:           err instanceof Error
 44:             ? err.message
 45:             : "Unknown error loading word statistics"
 46:         )
 47:       } finally {
 48:         setIsLoading(false)
 49:       }
 50:     }
 51: 
 52:     loadWordStats()
 53:   }, [])
 54: 
 55: 
 56:   if (!stats) {
 57:     return (
 58:       <div className="text-muted-foreground flex h-full flex-col items-center justify-center">
 59:         <p className="text-lg">No quiz results yet!</p>
 60:         <p className="text-sm">
 61:           Your child hasn't taken any quizzes yet, or there was an issue with
 62:           the database connection.
 63:         </p>
 64:         <p className="mt-4 text-sm">
 65:           Please make sure the database is properly set up and try again.
 66:         </p>
 67:       </div>
 68:     )
 69:   }
 70: 
 71:   const { totalQuizzes, recentResults } = stats
 72: 
 73: 
 74:   const totalQuestionsAttempted = recentResults.reduce(
 75:     (sum, result) => sum + result.totalQuestions,
 76:     0
 77:   )
 78: 
 79:   const totalCorrectAnswers = recentResults.reduce(
 80:     (sum, result) => sum + result.score,
 81:     0
 82:   )
 83: 
 84:   return (
 85:     <div className="space-y-8">
 86:       <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
 87:         {}
 88:         <Card>
 89:           <CardHeader className="pb-2">
 90:             <CardTitle className="text-lg font-medium">Total Quizzes</CardTitle>
 91:           </CardHeader>
 92:           <CardContent>
 93:             <div className="text-3xl font-bold">{totalQuizzes}</div>
 94:           </CardContent>
 95:         </Card>
 96: 
 97:         {}
 98:         <Card>
 99:           <CardHeader className="pb-2">
100:             <CardTitle className="text-lg font-medium">
101:               Total Questions
102:             </CardTitle>
103:           </CardHeader>
104:           <CardContent>
105:             <div className="text-3xl font-bold">{totalQuestionsAttempted}</div>
106:           </CardContent>
107:         </Card>
108: 
109:         {}
110:         <Card>
111:           <CardHeader className="pb-2">
112:             <CardTitle className="text-lg font-medium">Total Correct</CardTitle>
113:           </CardHeader>
114:           <CardContent>
115:             <div className="text-3xl font-bold">{totalCorrectAnswers}</div>
116:           </CardContent>
117:         </Card>
118:       </div>
119: 
120:       {}
121:       <div>
122:         <h2 className="mb-4 text-xl font-bold">Word Performance</h2>
123:         {isLoading ? (
124:           <div className="text-muted-foreground py-6 text-center">
125:             Loading word statistics...
126:           </div>
127:         ) : error ? (
128:           <div className="py-6 text-center text-red-600">Error: {error}</div>
129:         ) : wordStats.length === 0 ? (
130:           <div className="text-muted-foreground py-6 text-center">
131:             No word statistics available yet.
132:           </div>
133:         ) : (
134:           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
135:             {wordStats.map((word, idx) => (
136:               <Card key={idx} className="overflow-hidden">
137:                 <div className="flex items-center p-4">
138:                   <div className="bg-muted mr-4 flex size-12 items-center justify-center overflow-hidden rounded-md">
139:                     {word.icon ? (
140:                       <div className="relative size-full">
141:                         {}
142:                         <img
143:                           src={word.icon}
144:                           alt={word.english}
145:                           className="size-full object-contain"
146:                           onError={e => {
147: 
148:                             e.currentTarget.style.display = "none"
149:                             e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center">
150:                                 <span class="text-xs text-muted-foreground">${word.english[0]?.toUpperCase() || "?"}</span>
151:                               </div>`
152:                           }}
153:                         />
154:                       </div>
155:                     ) : (
156:                       <div className="flex size-full items-center justify-center">
157:                         <span className="text-muted-foreground text-xs">
158:                           {word.english[0]?.toUpperCase() || "?"}
159:                         </span>
160:                       </div>
161:                     )}
162:                   </div>
163:                   <div>
164:                     <h3 className="text-lg font-semibold">{word.kanglish}</h3>
165:                     <p className="text-muted-foreground mb-1 text-xs">
166:                       {word.english}
167:                     </p>
168:                     <p
169:                       className={cn(
170:                         "text-sm",
171:                         word.correctCount / word.totalAttempts > 0.7
172:                           ? "text-green-600"
173:                           : word.correctCount / word.totalAttempts > 0.4
174:                             ? "text-amber-600"
175:                             : "text-red-600"
176:                       )}
177:                     >
178:                       {word.correctCount}/{word.totalAttempts} correct
179:                     </p>
180:                   </div>
181:                 </div>
182:               </Card>
183:             ))}
184:           </div>
185:         )}
186:       </div>
187:     </div>
188:   )
189: }
````

## File: app/parental/_components/seed-button.tsx
````typescript
 1: "use client"
 2: 
 3: import { useState } from "react"
 4: import { Button } from "@/components/ui/button"
 5: import { Loader2, CloudLightning } from "lucide-react"
 6: import { seedWordStatsAction } from "@/actions/db/seed-word-stats-action"
 7: import { toast } from "sonner"
 8: 
 9: 
10: 
11: 
12: 
13: export function SeedButton() {
14:   const [isLoading, setIsLoading] = useState(false)
15: 
16:   const handleSeedData = async () => {
17:     try {
18:       setIsLoading(true)
19:       const result = await seedWordStatsAction()
20: 
21:       if (result.isSuccess) {
22:         toast.success(result.message)
23:       } else {
24:         toast.error(result.message)
25:       }
26:     } catch (error) {
27:       console.error("Error seeding data:", error)
28:       toast.error("Failed to seed word statistics data")
29:     } finally {
30:       setIsLoading(false)
31:     }
32:   }
33: 
34:   return (
35:     <Button
36:       onClick={handleSeedData}
37:       disabled={isLoading}
38:       variant="outline"
39:       size="sm"
40:       className="text-xs"
41:     >
42:       {isLoading ? (
43:         <>
44:           <Loader2 className="mr-2 size-3 animate-spin" />
45:           Seeding...
46:         </>
47:       ) : (
48:         <>
49:           <CloudLightning className="mr-2 size-3" />
50:           Seed Word Stats
51:         </>
52:       )}
53:     </Button>
54:   )
55: }
````

## File: app/parental/page.tsx
````typescript
 1: "use server"
 2: 
 3: import { auth } from "@clerk/nextjs/server"
 4: import { redirect } from "next/navigation"
 5: import { Suspense } from "react"
 6: import { getQuizStatsAction } from "@/actions/db/quiz-results-actions"
 7: import ParentalDashboard from "./_components/parental-dashboard"
 8: import { SeedButton } from "./_components/seed-button"
 9: 
10: 
11: function DashboardSkeleton() {
12:   return (
13:     <div className="flex h-[300px] items-center justify-center">
14:       <div className="text-muted-foreground text-center">
15:         Loading dashboard...
16:       </div>
17:     </div>
18:   )
19: }
20: 
21: 
22: export default async function ParentalPage() {
23: 
24:   const { userId } = await auth()
25:   if (!userId) {
26:     return redirect("/sign-in?returnBackUrl=/parental")
27:   }
28: 
29:   return (
30:     <div className="bg-background font-montserrat min-h-screen">
31:       {}
32:       <header className="flex items-center justify-between p-4">
33:         <div>
34:           <h1 className="text-foreground text-2xl font-bold">
35:             Parental Dashboard
36:           </h1>
37:           <p className="text-muted-foreground">
38:             See how your child is learning Kannada!
39:           </p>
40:         </div>
41: 
42:         {}
43:         <div className="hidden md:block">
44:           <SeedButton />
45:         </div>
46:       </header>
47: 
48:       {}
49:       <main className="container mx-auto p-4">
50:         <Suspense fallback={<DashboardSkeleton />}>
51:           <DashboardFetcher />
52:         </Suspense>
53:       </main>
54:     </div>
55:   )
56: }
57: 
58: 
59: async function DashboardFetcher() {
60:   const statsResult = await getQuizStatsAction()
61:   return (
62:     <ParentalDashboard
63:       stats={statsResult.isSuccess ? statsResult.data : null}
64:     />
65:   )
66: }
````

## File: app/quiz/_components/quiz-fetcher.tsx
````typescript
 1: "use server"
 2: 
 3: import { auth } from "@clerk/nextjs/server"
 4: import { redirect } from "next/navigation"
 5: 
 6: import { loadCsvAction } from "@/actions/csv-actions"
 7: import QuizComponent from "@/components/ui/quiz-component"
 8: 
 9: export default async function QuizFetcher() {
10: 
11:   const { userId } = await auth()
12:   if (!userId) {
13:     redirect("/sign-in?redirect_url=/quiz")
14:     return null
15:   }
16: 
17: 
18:   const csvResult = await loadCsvAction()
19:   if (!csvResult.isSuccess || !csvResult.data) {
20:     return (
21:       <div className="text-center text-red-500">Failed to load quiz data.</div>
22:     )
23:   }
24: 
25: 
26:   return <QuizComponent entries={csvResult.data} />
27: }
````

## File: app/quiz/_components/quiz-setup.tsx
````typescript
  1: "use client"
  2: 
  3: 
  4: 
  5: 
  6: 
  7: 
  8: 
  9: 
 10: 
 11: 
 12: 
 13: 
 14: 
 15: 
 16: 
 17: 
 18: 
 19: import { Button } from "@/components/ui/button"
 20: import {
 21:   Card,
 22:   CardContent,
 23:   CardDescription,
 24:   CardHeader,
 25:   CardTitle
 26: } from "@/components/ui/card"
 27: import {
 28:   Form,
 29:   FormControl,
 30:   FormDescription,
 31:   FormField,
 32:   FormItem,
 33:   FormLabel,
 34:   FormMessage
 35: } from "@/components/ui/form"
 36: import {
 37:   Select,
 38:   SelectContent,
 39:   SelectItem,
 40:   SelectTrigger,
 41:   SelectValue
 42: } from "@/components/ui/select"
 43: import { Checkbox } from "@/components/ui/checkbox"
 44: import { zodResolver } from "@hookform/resolvers/zod"
 45: import { useForm } from "react-hook-form"
 46: import { z } from "zod"
 47: import { useState, useEffect } from "react"
 48: import { KannadaEntry } from "@/types"
 49: 
 50: 
 51: const PREDEFINED_CATEGORIES = [
 52:   { id: "Animals", label: "Animals" },
 53:   { id: "Colors", label: "Colors" },
 54:   { id: "Numbers", label: "Numbers" },
 55:   { id: "Food", label: "Food" },
 56:   { id: "Items", label: "Items" },
 57:   { id: "Days", label: "Days of the Week" },
 58:   { id: "Shapes", label: "Shapes" },
 59:   { id: "Verbs", label: "Verbs (Actions)" },
 60:   { id: "People", label: "People" },
 61:   { id: "Adverbs", label: "Adverbs" }
 62: ]
 63: 
 64: 
 65: const formSchema = z.object({
 66:   numQuestions: z.string().min(1, {
 67:     message: "Please select the number of questions"
 68:   }),
 69:   categories: z.array(z.string()).min(1, {
 70:     message: "Please select at least one category"
 71:   })
 72: })
 73: 
 74: type FormValues = z.infer<typeof formSchema>
 75: 
 76: interface QuizSetupProps {
 77:   entries: KannadaEntry[]
 78:   onStartQuiz: (numQuestions: number, categories: string[]) => void
 79: }
 80: 
 81: export default function QuizSetup({ entries, onStartQuiz }: QuizSetupProps) {
 82: 
 83:   const [availableCategories, setAvailableCategories] = useState<
 84:     { id: string; label: string }[]
 85:   >(PREDEFINED_CATEGORIES)
 86: 
 87: 
 88:   useEffect(() => {
 89:     if (entries && entries.length > 0) {
 90: 
 91:       const uniqueCategories = new Set<string>()
 92: 
 93:       entries.forEach(entry => {
 94:         if (entry.category && entry.category.trim() !== "") {
 95:           uniqueCategories.add(entry.category)
 96:         }
 97:       })
 98: 
 99:       // Map to category objects
100:       const categoriesFromData = Array.from(uniqueCategories).map(category => ({
101:         id: category,
102:         label: category.charAt(0).toUpperCase() + category.slice(1) // Capitalize first letter
103:       }))
104: 
105:       if (categoriesFromData.length > 0) {
106:         // Use categories from data if available
107:         setAvailableCategories(categoriesFromData)
108: 
109:         // Update form default values with first three categories or all if less than three
110:         const defaultCategories = categoriesFromData
111:           .slice(0, Math.min(3, categoriesFromData.length))
112:           .map(c => c.id)
113:         form.setValue("categories", defaultCategories)
114:       }
115:     }
116:   }, [entries])
117: 
118: 
119:   const form = useForm<FormValues>({
120:     resolver: zodResolver(formSchema),
121:     defaultValues: {
122:       numQuestions: "10",
123:       categories: ["Animals", "Colors", "Numbers"]
124:     }
125:   })
126: 
127: 
128:   function onSubmit(values: FormValues) {
129:     onStartQuiz(parseInt(values.numQuestions, 10), values.categories)
130:   }
131: 
132:   return (
133:     <Card className="mx-auto w-full max-w-md">
134:       <CardHeader>
135:         <CardTitle>Configure Your Quiz</CardTitle>
136:         <CardDescription>
137:           Select how many questions and which categories you want to include
138:         </CardDescription>
139:       </CardHeader>
140:       <CardContent>
141:         <Form {...form}>
142:           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
143:             <FormField
144:               control={form.control}
145:               name="numQuestions"
146:               render={({ field }) => (
147:                 <FormItem>
148:                   <FormLabel>Number of Questions</FormLabel>
149:                   <Select
150:                     onValueChange={field.onChange}
151:                     defaultValue={field.value}
152:                   >
153:                     <FormControl>
154:                       <SelectTrigger>
155:                         <SelectValue placeholder="Select number of questions" />
156:                       </SelectTrigger>
157:                     </FormControl>
158:                     <SelectContent>
159:                       <SelectItem value="5">5 Questions</SelectItem>
160:                       <SelectItem value="10">10 Questions</SelectItem>
161:                       <SelectItem value="15">15 Questions</SelectItem>
162:                       <SelectItem value="20">20 Questions</SelectItem>
163:                     </SelectContent>
164:                   </Select>
165:                   <FormDescription>
166:                     Choose how many questions you want in your quiz
167:                   </FormDescription>
168:                   <FormMessage />
169:                 </FormItem>
170:               )}
171:             />
172: 
173:             <FormField
174:               control={form.control}
175:               name="categories"
176:               render={() => (
177:                 <FormItem>
178:                   <div className="mb-4">
179:                     <FormLabel className="text-base">Categories</FormLabel>
180:                     <FormDescription>
181:                       Select which categories to include in the quiz
182:                     </FormDescription>
183:                   </div>
184:                   {availableCategories.map(category => (
185:                     <FormField
186:                       key={category.id}
187:                       control={form.control}
188:                       name="categories"
189:                       render={({ field }) => {
190:                         return (
191:                           <FormItem
192:                             key={category.id}
193:                             className="flex flex-row items-start space-x-3 space-y-0"
194:                           >
195:                             <FormControl>
196:                               <Checkbox
197:                                 checked={field.value?.includes(category.id)}
198:                                 onCheckedChange={checked => {
199:                                   return checked
200:                                     ? field.onChange([
201:                                         ...field.value,
202:                                         category.id
203:                                       ])
204:                                     : field.onChange(
205:                                         field.value?.filter(
206:                                           value => value !== category.id
207:                                         )
208:                                       )
209:                                 }}
210:                               />
211:                             </FormControl>
212:                             <FormLabel className="font-normal">
213:                               {category.label}
214:                             </FormLabel>
215:                           </FormItem>
216:                         )
217:                       }}
218:                     />
219:                   ))}
220:                   <FormMessage />
221:                 </FormItem>
222:               )}
223:             />
224: 
225:             <Button type="submit" className="w-full">
226:               Start Quiz
227:             </Button>
228:           </form>
229:         </Form>
230:       </CardContent>
231:     </Card>
232:   )
233: }
````

## File: app/quiz/page.tsx
````typescript
 1: "use server"
 2: 
 3: import { auth } from "@clerk/nextjs/server"
 4: import { redirect } from "next/navigation"
 5: import { Suspense } from "react"
 6: import QuizFetcher from "./_components/quiz-fetcher"
 7: 
 8: 
 9: function QuizSkeleton() {
10:   return (
11:     <div className="flex h-screen items-center justify-center">
12:       <div className="text-muted-foreground text-center">Loading quiz...</div>
13:     </div>
14:   )
15: }
16: 
17: 
18: export default async function QuizPage() {
19: 
20:   const { userId } = await auth()
21:   if (!userId) {
22:     redirect("/sign-in?redirect_url=/quiz")
23:     return null
24:   }
25: 
26:   return (
27:     <div className="bg-background min-h-screen">
28:       {}
29:       <header className="p-4">
30:         <h1 className="text-foreground font-montserrat text-2xl font-bold">
31:           Kannada Quiz
32:         </h1>
33:         <p className="text-muted-foreground font-montserrat">
34:           Match the Kanglish words to the correct Kannada icon
35:         </p>
36:       </header>
37: 
38:       {}
39:       <main className="container mx-auto p-4">
40:         <Suspense fallback={<QuizSkeleton />}>
41:           <QuizFetcher />
42:         </Suspense>
43:       </main>
44:     </div>
45:   )
46: }
````

## File: components.json
````json
 1: {
 2:   "$schema": "https://ui.shadcn.com/schema.json",
 3:   "style": "default",
 4:   "rsc": true,
 5:   "tsx": true,
 6:   "tailwind": {
 7:     "config": "tailwind.config.ts",
 8:     "css": "app/globals.css",
 9:     "baseColor": "neutral",
10:     "cssVariables": true,
11:     "prefix": ""
12:   },
13:   "aliases": {
14:     "components": "@/components",
15:     "utils": "@/lib/utils",
16:     "ui": "@/components/ui",
17:     "lib": "@/lib",
18:     "hooks": "@/lib/hooks"
19:   }
20: }
````

## File: components/landing/footer.tsx
````typescript
  1: "use client"
  2: 
  3: import { Github, Twitter } from "lucide-react"
  4: import Link from "next/link"
  5: 
  6: export function Footer() {
  7:   return (
  8:     <footer className="border-t">
  9:       <div className="container mx-auto max-w-7xl px-4 py-12 md:px-6">
 10:         <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
 11:           <div className="space-y-4">
 12:             <h3 className="text-lg font-bold">Company</h3>
 13:             <div className="flex flex-col gap-2">
 14:               <Link
 15:                 href="/about"
 16:                 className="text-muted-foreground hover:text-foreground transition"
 17:               >
 18:                 About
 19:               </Link>
 20:               <Link
 21:                 href="/blog"
 22:                 className="text-muted-foreground hover:text-foreground transition"
 23:               >
 24:                 Blog
 25:               </Link>
 26:               <Link
 27:                 href="/careers"
 28:                 className="text-muted-foreground hover:text-foreground transition"
 29:               >
 30:                 Careers
 31:               </Link>
 32:             </div>
 33:           </div>
 34: 
 35:           <div className="space-y-4">
 36:             <h3 className="text-lg font-bold">Product</h3>
 37:             <div className="flex flex-col gap-2">
 38:               <Link
 39:                 href="/features"
 40:                 className="text-muted-foreground hover:text-foreground transition"
 41:               >
 42:                 Features
 43:               </Link>
 44:               <Link
 45:                 href="/pricing"
 46:                 className="text-muted-foreground hover:text-foreground transition"
 47:               >
 48:                 Pricing
 49:               </Link>
 50:               <Link
 51:                 href="/docs"
 52:                 className="text-muted-foreground hover:text-foreground transition"
 53:               >
 54:                 Documentation
 55:               </Link>
 56:             </div>
 57:           </div>
 58: 
 59:           <div className="space-y-4">
 60:             <h3 className="text-lg font-bold">Resources</h3>
 61:             <div className="flex flex-col gap-2">
 62:               <Link
 63:                 href="/support"
 64:                 className="text-muted-foreground hover:text-foreground transition"
 65:               >
 66:                 Support
 67:               </Link>
 68:               <Link
 69:                 href="/terms"
 70:                 className="text-muted-foreground hover:text-foreground transition"
 71:               >
 72:                 Terms
 73:               </Link>
 74:               <Link
 75:                 href="/privacy"
 76:                 className="text-muted-foreground hover:text-foreground transition"
 77:               >
 78:                 Privacy
 79:               </Link>
 80:             </div>
 81:           </div>
 82: 
 83:           <div className="space-y-4">
 84:             <h3 className="text-lg font-bold">Social</h3>
 85:             <div className="flex gap-4">
 86:               <Link
 87:                 href="https://github.com"
 88:                 target="_blank"
 89:                 rel="noopener noreferrer"
 90:               >
 91:                 <Github className="text-muted-foreground hover:text-foreground size-6 transition" />
 92:               </Link>
 93:               <Link
 94:                 href="https://twitter.com"
 95:                 target="_blank"
 96:                 rel="noopener noreferrer"
 97:               >
 98:                 <Twitter className="text-muted-foreground hover:text-foreground size-6 transition" />
 99:               </Link>
100:             </div>
101:           </div>
102:         </div>
103: 
104:         <div className="text-muted-foreground mt-12 pt-8 text-center">
105:           <p>
106:             &copy; {new Date().getFullYear()} Your Company. All rights reserved.
107:           </p>
108:         </div>
109:       </div>
110:     </footer>
111:   )
112: }
````

## File: components/landing/header.tsx
````typescript
  1: "use client"
  2: 
  3: import { Button } from "@/components/ui/button"
  4: import {
  5:   SignedIn,
  6:   SignedOut,
  7:   SignInButton,
  8:   SignUpButton,
  9:   UserButton
 10: } from "@clerk/nextjs"
 11: import { motion } from "framer-motion"
 12: import { Menu, X } from "lucide-react"
 13: import Link from "next/link"
 14: import Image from "next/image"
 15: import { useEffect, useState } from "react"
 16: 
 17: const navLinks = [
 18:   { href: "/learn/01_ಅ", label: "Learn" },
 19:   { href: "/about", label: "About" },
 20:   { href: "/features", label: "Features" },
 21:   { href: "/pricing", label: "Pricing" },
 22:   { href: "/contact", label: "Contact" }
 23: ]
 24: 
 25: const signedInLinks = [{ href: "/dashboard", label: "Dashboard" }]
 26: 
 27: export default function Header() {
 28:   const [isMenuOpen, setIsMenuOpen] = useState(false)
 29:   const [isScrolled, setIsScrolled] = useState(false)
 30: 
 31:   const toggleMenu = () => {
 32:     setIsMenuOpen(!isMenuOpen)
 33:   }
 34: 
 35:   useEffect(() => {
 36:     const handleScroll = () => {
 37:       setIsScrolled(window.scrollY > 0)
 38:     }
 39: 
 40:     window.addEventListener("scroll", handleScroll)
 41:     return () => window.removeEventListener("scroll", handleScroll)
 42:   }, [])
 43: 
 44:   return (
 45:     <motion.header
 46:       initial={{ y: -20, opacity: 0 }}
 47:       animate={{ y: 0, opacity: 1 }}
 48:       className={`sticky top-0 z-50 transition-colors ${
 49:         isScrolled
 50:           ? "bg-background/80 shadow-sm backdrop-blur-sm"
 51:           : "bg-background"
 52:       }`}
 53:     >
 54:       <div className="container mx-auto flex max-w-7xl items-center justify-between p-4">
 55:         <motion.div
 56:           className="flex items-center space-x-2 hover:cursor-pointer hover:opacity-80"
 57:           whileHover={{ scale: 1.05 }}
 58:           whileTap={{ scale: 0.95 }}
 59:         >
 60:           <Link href="/" className="flex items-center space-x-2">
 61:             <div className="relative size-8">
 62:               <Image
 63:                 src="/kannadakali.png"
 64:                 alt="LearnKannada Logo"
 65:                 fill
 66:                 className="object-contain"
 67:               />
 68:             </div>
 69:             <span className="text-xl font-bold">LearnKannada</span>
 70:           </Link>
 71:         </motion.div>
 72: 
 73:         <nav className="absolute left-1/2 hidden -translate-x-1/2 space-x-2 md:flex">
 74:           {navLinks.map(link => (
 75:             <motion.div
 76:               key={link.href}
 77:               whileHover={{ scale: 1.05 }}
 78:               whileTap={{ scale: 0.95 }}
 79:             >
 80:               <Link
 81:                 href={link.href}
 82:                 className="text-muted-foreground hover:text-foreground rounded-full px-3 py-1 transition"
 83:               >
 84:                 {link.label}
 85:               </Link>
 86:             </motion.div>
 87:           ))}
 88: 
 89:           <SignedIn>
 90:             {signedInLinks.map(link => (
 91:               <motion.div
 92:                 key={link.href}
 93:                 whileHover={{ scale: 1.05 }}
 94:                 whileTap={{ scale: 0.95 }}
 95:               >
 96:                 <Link
 97:                   href={link.href}
 98:                   className="text-muted-foreground hover:text-foreground rounded-full px-3 py-1 transition"
 99:                 >
100:                   {link.label}
101:                 </Link>
102:               </motion.div>
103:             ))}
104:           </SignedIn>
105:         </nav>
106: 
107:         <div className="flex items-center space-x-4">
108:           <SignedOut>
109:             <SignInButton>
110:               <motion.div
111:                 whileHover={{ scale: 1.05 }}
112:                 whileTap={{ scale: 0.95 }}
113:               >
114:                 <Button variant="ghost">Sign In</Button>
115:               </motion.div>
116:             </SignInButton>
117: 
118:             <SignUpButton>
119:               <motion.div
120:                 whileHover={{ scale: 1.05 }}
121:                 whileTap={{ scale: 0.95 }}
122:               >
123:                 <Button>Get Started</Button>
124:               </motion.div>
125:             </SignUpButton>
126:           </SignedOut>
127: 
128:           <SignedIn>
129:             <UserButton />
130:           </SignedIn>
131: 
132:           <motion.div
133:             className="md:hidden"
134:             whileHover={{ scale: 1.05 }}
135:             whileTap={{ scale: 0.95 }}
136:           >
137:             <Button
138:               variant="ghost"
139:               size="icon"
140:               onClick={toggleMenu}
141:               aria-label="Toggle menu"
142:             >
143:               {isMenuOpen ? (
144:                 <X className="size-6" />
145:               ) : (
146:                 <Menu className="size-6" />
147:               )}
148:             </Button>
149:           </motion.div>
150:         </div>
151:       </div>
152: 
153:       {isMenuOpen && (
154:         <motion.nav
155:           initial={{ opacity: 0, y: -10 }}
156:           animate={{ opacity: 1, y: 0 }}
157:           exit={{ opacity: 0, y: -10 }}
158:           className="bg-primary-foreground text-primary p-4 md:hidden"
159:         >
160:           <ul className="space-y-2">
161:             <li>
162:               <Link
163:                 href="/"
164:                 className="block hover:underline"
165:                 onClick={toggleMenu}
166:               >
167:                 Home
168:               </Link>
169:             </li>
170:             {navLinks.map(link => (
171:               <li key={link.href}>
172:                 <Link
173:                   href={link.href}
174:                   className="block hover:underline"
175:                   onClick={toggleMenu}
176:                 >
177:                   {link.label}
178:                 </Link>
179:               </li>
180:             ))}
181:             <SignedIn>
182:               {signedInLinks.map(link => (
183:                 <li key={link.href}>
184:                   <Link
185:                     href={link.href}
186:                     className="block hover:underline"
187:                     onClick={toggleMenu}
188:                   >
189:                     {link.label}
190:                   </Link>
191:                 </li>
192:               ))}
193:             </SignedIn>
194:           </ul>
195:         </motion.nav>
196:       )}
197:     </motion.header>
198:   )
199: }
````

## File: components/landing/hero.tsx
````typescript
 1: "use client"
 2: 
 3: import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"
 4: import { Button } from "@/components/ui/button"
 5: import { cn } from "@/lib/utils"
 6: import { motion } from "framer-motion"
 7: import { ChevronRight } from "lucide-react"
 8: import Link from "next/link"
 9: import Image from "next/image"
10: 
11: export const HeroSection = () => {
12:   return (
13:     <div className="flex flex-col items-center justify-center px-8 pt-32 text-center">
14:       {}
15:       <motion.div
16:         initial={{ opacity: 0, y: -20 }}
17:         animate={{ opacity: 1, y: 0 }}
18:         transition={{ duration: 0.6, ease: "easeOut" }}
19:         className="flex items-center justify-center"
20:       >
21:         <span
22:           className={cn(
23:             "animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:200%_100%] bg-clip-text text-sm font-medium text-transparent"
24:           )}
25:         >
26:           Learn Kannada using AI
27:         </span>
28:       </motion.div>
29: 
30:       {}
31:       <motion.div
32:         initial={{ opacity: 0, y: 20 }}
33:         animate={{ opacity: 1, y: 0 }}
34:         transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
35:         className="mt-8 flex max-w-2xl flex-col items-center justify-center gap-6"
36:       >
37:         <motion.div
38:           initial={{ scale: 0.95, opacity: 0 }}
39:           animate={{ scale: 1, opacity: 1 }}
40:           transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
41:           className="text-balance text-6xl font-bold"
42:         >
43:           Learn Kannada
44:         </motion.div>
45: 
46:         <motion.div
47:           initial={{ opacity: 0 }}
48:           animate={{ opacity: 1 }}
49:           transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
50:           className="max-w-xl text-balance text-xl"
51:         >
52:           LearnKannada combines bite-sized quizzes with AI based Kannada
53:           speaking and listening games.
54:         </motion.div>
55: 
56:         {}
57:         <motion.div
58:           initial={{ opacity: 0, y: 10 }}
59:           animate={{ opacity: 1, y: 0 }}
60:           transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
61:         >
62:           <SignedOut>
63:             <SignInButton>
64:               <Button className="bg-accent hover:bg-accent/90 text-lg">
65:                 ಶುರುಮಾಡಿ (Start) <ChevronRight className="ml-2 size-5" />
66:               </Button>
67:             </SignInButton>
68:           </SignedOut>
69: 
70:           <SignedIn>
71:             <Link href="/cards">
72:               <Button className="bg-accent hover:bg-accent/90 text-lg">
73:                 ಶುರುಮಾಡಿ (Start) <ChevronRight className="ml-2 size-5" />
74:               </Button>
75:             </Link>
76:           </SignedIn>
77:         </motion.div>
78:       </motion.div>
79: 
80:       {}
81:       <motion.div
82:         initial={{ opacity: 0, y: 30 }}
83:         animate={{ opacity: 1, y: 0 }}
84:         transition={{ duration: 1, delay: 1, ease: "easeOut" }}
85:         className="mt-20 flex w-full max-w-screen-lg items-center justify-center"
86:       >
87:         <div className="relative size-[240px]">
88:           <Image
89:             src="/kannadakali.png"
90:             alt="LearnKannada Logo"
91:             fill
92:             className="object-contain"
93:             priority
94:           />
95:         </div>
96:       </motion.div>
97:     </div>
98:   )
99: }
````

## File: components/landing/leaderboard.tsx
````typescript
  1: "use client"
  2: 
  3: import { useEffect, useState } from "react"
  4: import {
  5:   getLeaderboardAction,
  6:   getLeaderboardCategoriesAction,
  7:   LeaderboardEntry
  8: } from "@/actions/db/leaderboard-actions"
  9: import {
 10:   Card,
 11:   CardContent,
 12:   CardDescription,
 13:   CardHeader,
 14:   CardTitle
 15: } from "@/components/ui/card"
 16: import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
 17: import {
 18:   Select,
 19:   SelectContent,
 20:   SelectItem,
 21:   SelectTrigger,
 22:   SelectValue
 23: } from "@/components/ui/select"
 24: import { Medal, MedalIcon, TrophyIcon } from "lucide-react"
 25: import { Skeleton } from "@/components/ui/skeleton"
 26: import { motion } from "framer-motion"
 27: 
 28: export function LeaderboardComponent() {
 29:   const [isLoading, setIsLoading] = useState(true)
 30:   const [leaderboardData, setLeaderboardData] = useState<{
 31:     topUsers: LeaderboardEntry[]
 32:     currentUserRank: LeaderboardEntry | null
 33:   }>({ topUsers: [], currentUserRank: null })
 34:   const [categories, setCategories] = useState<string[]>([])
 35:   const [selectedCategory, setSelectedCategory] = useState<string>("all")
 36: 
 37:   useEffect(() => {
 38:     const fetchCategories = async () => {
 39:       const result = await getLeaderboardCategoriesAction()
 40:       if (result.isSuccess) {
 41:         setCategories(result.data)
 42:       }
 43:     }
 44: 
 45:     fetchCategories()
 46:   }, [])
 47: 
 48:   useEffect(() => {
 49:     const fetchLeaderboardData = async () => {
 50:       setIsLoading(true)
 51:       const result = await getLeaderboardAction(
 52:         selectedCategory === "all" ? undefined : selectedCategory
 53:       )
 54:       if (result.isSuccess) {
 55:         setLeaderboardData({
 56:           topUsers: result.data.leaders,
 57:           currentUserRank: result.data.currentUserRank || null
 58:         })
 59:       }
 60:       setIsLoading(false)
 61:     }
 62: 
 63:     fetchLeaderboardData()
 64:   }, [selectedCategory])
 65: 
 66: 
 67:   const container = {
 68:     hidden: { opacity: 0 },
 69:     show: {
 70:       opacity: 1,
 71:       transition: {
 72:         staggerChildren: 0.1
 73:       }
 74:     }
 75:   }
 76: 
 77:   const item = {
 78:     hidden: { opacity: 0, y: 20 },
 79:     show: { opacity: 1, y: 0 }
 80:   }
 81: 
 82:   const getMedalIcon = (rank: number) => {
 83:     switch (rank) {
 84:       case 1:
 85:         return <TrophyIcon className="size-5 text-yellow-500" />
 86:       case 2:
 87:         return <Medal className="size-5 text-gray-400" />
 88:       case 3:
 89:         return <MedalIcon className="size-5 text-amber-600" />
 90:       default:
 91:         return (
 92:           <span className="flex size-5 items-center justify-center font-semibold">
 93:             {rank}
 94:           </span>
 95:         )
 96:     }
 97:   }
 98: 
 99:   return (
100:     <Card className="w-full max-w-md shadow-lg">
101:       <CardHeader>
102:         <div className="flex items-center justify-between">
103:           <div>
104:             <CardTitle className="text-2xl font-bold">Leaderboard</CardTitle>
105:             <CardDescription>Top quiz performers by accuracy</CardDescription>
106:           </div>
107:           {categories.length > 0 && (
108:             <Select
109:               value={selectedCategory}
110:               onValueChange={setSelectedCategory}
111:             >
112:               <SelectTrigger className="w-[140px]">
113:                 <SelectValue placeholder="All Categories" />
114:               </SelectTrigger>
115:               <SelectContent>
116:                 <SelectItem value="all">All Categories</SelectItem>
117:                 {categories.map(category => (
118:                   <SelectItem key={category} value={category}>
119:                     {category}
120:                   </SelectItem>
121:                 ))}
122:               </SelectContent>
123:             </Select>
124:           )}
125:         </div>
126:       </CardHeader>
127:       <CardContent>
128:         {isLoading ? (
129:           <div className="space-y-3">
130:             {Array(5)
131:               .fill(0)
132:               .map((_, i) => (
133:                 <div key={i} className="flex items-center gap-2">
134:                   <Skeleton className="size-8 rounded-full" />
135:                   <div className="flex-1">
136:                     <Skeleton className="h-4 w-3/4" />
137:                     <Skeleton className="mt-1 h-3 w-1/2" />
138:                   </div>
139:                 </div>
140:               ))}
141:           </div>
142:         ) : (
143:           <motion.div
144:             variants={container}
145:             initial="hidden"
146:             animate="show"
147:             className="space-y-3"
148:           >
149:             {leaderboardData.topUsers.length > 0 ? (
150:               <>
151:                 {leaderboardData.topUsers.map(user => (
152:                   <motion.div
153:                     key={user.userId}
154:                     variants={item}
155:                     className="hover:bg-muted flex items-center gap-2 rounded-lg p-2 transition-colors"
156:                   >
157:                     <div className="flex size-8 items-center justify-center">
158:                       {getMedalIcon(user.rank)}
159:                     </div>
160:                     <Avatar className="size-10 border">
161:                       <AvatarImage src={user.profileImageUrl || ""} />
162:                       <AvatarFallback>
163:                         {user.displayName.substring(0, 2).toUpperCase()}
164:                       </AvatarFallback>
165:                     </Avatar>
166:                     <div className="flex-1">
167:                       <div className="font-medium">{user.displayName}</div>
168:                       <div className="text-muted-foreground text-xs">
169:                         Accuracy: {user.accuracyPercentage.toFixed(1)}% •{" "}
170:                         {user.quizzesCompleted} quizzes
171:                       </div>
172:                     </div>
173:                   </motion.div>
174:                 ))}
175: 
176:                 {leaderboardData.currentUserRank && (
177:                   <>
178:                     <div className="relative py-2">
179:                       <div className="absolute inset-0 flex items-center">
180:                         <span className="w-full border-t" />
181:                       </div>
182:                       <div className="relative flex justify-center">
183:                         <span className="bg-card text-muted-foreground px-2 text-xs">
184:                           ⋯
185:                         </span>
186:                       </div>
187:                     </div>
188: 
189:                     <motion.div
190:                       variants={item}
191:                       className="bg-accent/10 flex items-center gap-2 rounded-lg p-2"
192:                     >
193:                       <div className="flex size-8 items-center justify-center">
194:                         <span className="font-semibold">
195:                           {leaderboardData.currentUserRank.rank}
196:                         </span>
197:                       </div>
198:                       <Avatar className="size-10 border">
199:                         <AvatarImage
200:                           src={
201:                             leaderboardData.currentUserRank.profileImageUrl ||
202:                             ""
203:                           }
204:                         />
205:                         <AvatarFallback>
206:                           {leaderboardData.currentUserRank.displayName
207:                             .substring(0, 2)
208:                             .toUpperCase()}
209:                         </AvatarFallback>
210:                       </Avatar>
211:                       <div className="flex-1">
212:                         <div className="font-medium">
213:                           {leaderboardData.currentUserRank.displayName} (You)
214:                         </div>
215:                         <div className="text-muted-foreground text-xs">
216:                           Accuracy:{" "}
217:                           {leaderboardData.currentUserRank.accuracyPercentage.toFixed(
218:                             1
219:                           )}
220:                           % •{leaderboardData.currentUserRank.quizzesCompleted}{" "}
221:                           quizzes
222:                         </div>
223:                       </div>
224:                     </motion.div>
225:                   </>
226:                 )}
227:               </>
228:             ) : (
229:               <div className="text-muted-foreground py-8 text-center">
230:                 No data available. Take quizzes to appear on the leaderboard!
231:               </div>
232:             )}
233:           </motion.div>
234:         )}
235:       </CardContent>
236:     </Card>
237:   )
238: }
````

## File: components/leaderboard.tsx
````typescript
  1: "use client"
  2: 
  3: import { LeaderboardEntry } from "@/actions/db/leaderboard-actions"
  4: import { Badge } from "@/components/ui/badge"
  5: import { Button } from "@/components/ui/button"
  6: import {
  7:   Select,
  8:   SelectContent,
  9:   SelectItem,
 10:   SelectTrigger,
 11:   SelectValue
 12: } from "@/components/ui/select"
 13: import { Skeleton } from "@/components/ui/skeleton"
 14: import { cn } from "@/lib/utils"
 15: import { Trophy } from "lucide-react"
 16: import { useState } from "react"
 17: 
 18: interface LeaderboardProps {
 19:   initialLeaders: LeaderboardEntry[]
 20:   initialUserRank?: LeaderboardEntry
 21:   categories: string[]
 22:   onCategoryChange: (category: string | null) => Promise<{
 23:     leaders: LeaderboardEntry[]
 24:     currentUserRank?: LeaderboardEntry
 25:   }>
 26: }
 27: 
 28: export default function Leaderboard({
 29:   initialLeaders,
 30:   initialUserRank,
 31:   categories,
 32:   onCategoryChange
 33: }: LeaderboardProps) {
 34:   const [leaders, setLeaders] = useState<LeaderboardEntry[]>(initialLeaders)
 35:   const [currentUserRank, setCurrentUserRank] = useState<
 36:     LeaderboardEntry | undefined
 37:   >(initialUserRank)
 38:   const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
 39:   const [loading, setLoading] = useState(false)
 40: 
 41:   async function handleCategoryChange(category: string) {
 42:     setLoading(true)
 43:     try {
 44:       const newCategory = category === "all" ? null : category
 45:       const result = await onCategoryChange(newCategory)
 46:       setLeaders(result.leaders)
 47:       setCurrentUserRank(result.currentUserRank)
 48:       setSelectedCategory(newCategory)
 49:     } catch (error) {
 50:       console.error("Error changing category:", error)
 51:     } finally {
 52:       setLoading(false)
 53:     }
 54:   }
 55: 
 56: 
 57:   const formatAccuracy = (accuracy: number) => {
 58:     return `${accuracy.toFixed(1)}%`
 59:   }
 60: 
 61:   return (
 62:     <div className="rounded-lg bg-white p-5 shadow dark:bg-slate-950">
 63:       <div className="mb-4 flex items-center justify-between">
 64:         <h2 className="flex items-center gap-2 text-xl font-bold">
 65:           <Trophy className="text-yellow-500" size={20} />
 66:           Leaderboard
 67:         </h2>
 68:         <Select
 69:           disabled={loading}
 70:           onValueChange={handleCategoryChange}
 71:           defaultValue="all"
 72:         >
 73:           <SelectTrigger className="w-[150px]">
 74:             <SelectValue placeholder="Category" />
 75:           </SelectTrigger>
 76:           <SelectContent>
 77:             <SelectItem value="all">All Categories</SelectItem>
 78:             {categories.map(category => (
 79:               <SelectItem key={category} value={category}>
 80:                 {category}
 81:               </SelectItem>
 82:             ))}
 83:           </SelectContent>
 84:         </Select>
 85:       </div>
 86: 
 87:       {loading ? (
 88:         <div className="space-y-3">
 89:           {[1, 2, 3, 4, 5].map(i => (
 90:             <div key={i} className="flex items-center p-2">
 91:               <Skeleton className="size-8 rounded-full" />
 92:               <Skeleton className="ml-4 h-4 w-40" />
 93:               <Skeleton className="ml-auto h-4 w-20" />
 94:             </div>
 95:           ))}
 96:         </div>
 97:       ) : (
 98:         <div className="space-y-1">
 99:           {leaders.map(user => (
100:             <LeaderboardRow key={user.userId} user={user} />
101:           ))}
102: 
103:           {currentUserRank && (
104:             <>
105:               <div className="relative my-2 py-2">
106:                 <div className="absolute inset-0 flex items-center">
107:                   <span className="w-full border-t" />
108:                 </div>
109:                 <div className="relative flex justify-center">
110:                   <span className="text-muted-foreground bg-white px-2 text-xs dark:bg-slate-950">
111:                     • • •
112:                   </span>
113:                 </div>
114:               </div>
115: 
116:               <LeaderboardRow user={currentUserRank} highlighted />
117:             </>
118:           )}
119: 
120:           {leaders.length === 0 && (
121:             <div className="text-muted-foreground py-4 text-center">
122:               No data available yet. Complete some quizzes to appear on the
123:               leaderboard!
124:             </div>
125:           )}
126:         </div>
127:       )}
128:     </div>
129:   )
130: }
131: 
132: interface LeaderboardRowProps {
133:   user: LeaderboardEntry
134:   highlighted?: boolean
135: }
136: 
137: function LeaderboardRow({ user, highlighted = false }: LeaderboardRowProps) {
138: 
139:   const getMedal = (rank: number) => {
140:     if (rank === 1) return "🥇"
141:     if (rank === 2) return "🥈"
142:     if (rank === 3) return "🥉"
143:     return rank
144:   }
145: 
146:   return (
147:     <div
148:       className={cn(
149:         "flex items-center rounded-md p-2",
150:         highlighted
151:           ? "border border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950/20"
152:           : "hover:bg-slate-50 dark:hover:bg-slate-900"
153:       )}
154:     >
155:       <div className="flex w-8 items-center justify-center font-bold">
156:         {getMedal(user.rank)}
157:       </div>
158: 
159:       <div className="flex min-w-0 flex-1 items-center">
160:         <div className="mr-3 size-8 shrink-0 overflow-hidden rounded-full bg-slate-300">
161:           {user.profileImageUrl ? (
162:             <img
163:               src={user.profileImageUrl}
164:               alt={user.displayName}
165:               className="size-full object-cover"
166:             />
167:           ) : (
168:             <div className="flex size-full items-center justify-center text-xs font-medium text-slate-600">
169:               {user.displayName.substring(0, 2).toUpperCase()}
170:             </div>
171:           )}
172:         </div>
173:         <div className="truncate font-medium">
174:           {user.displayName}
175:           {user.isCurrentUser && (
176:             <Badge variant="outline" className="ml-2 text-xs">
177:               You
178:             </Badge>
179:           )}
180:         </div>
181:       </div>
182: 
183:       <div className="text-right">
184:         <div className="font-semibold">
185:           {user.accuracyPercentage.toFixed(1)}%
186:         </div>
187:         <div className="text-muted-foreground text-xs">
188:           {user.correctAnswers} / {user.totalAttempts} correct
189:         </div>
190:       </div>
191:     </div>
192:   )
193: }
````

## File: components/learn/letter-trace.tsx
````typescript
  1: "use client"
  2: import { useEffect, useRef, useState } from "react"
  3: import confetti from "canvas-confetti"
  4: 
  5: interface LetterTraceProps {
  6:   src: string
  7:   onDone?: () => void
  8:   onError?: () => void
  9:   onLoad?: () => void
 10:   strokeWidth?: number
 11:   tolerance?: number
 12: }
 13: 
 14: export default function LetterTrace({
 15:   src,
 16:   onDone,
 17:   onError,
 18:   onLoad,
 19:   strokeWidth = 2,
 20:   tolerance = 10
 21: }: LetterTraceProps) {
 22:   const svgRef = useRef<SVGSVGElement>(null)
 23:   const canvasRef = useRef<HTMLCanvasElement>(null)
 24:   const containerRef = useRef<HTMLDivElement>(null)
 25:   const [svgContent, setSvgContent] = useState<string>()
 26:   const [isDrawing, setIsDrawing] = useState(false)
 27:   const [coverage, setCoverage] = useState(0)
 28:   const [isComplete, setIsComplete] = useState(false)
 29:   const letterCanvasRef = useRef<HTMLCanvasElement>(null)
 30: 
 31: 
 32:   useEffect(() => {
 33:     console.log("[LetterTrace] Fetching SVG from:", src)
 34: 
 35:     fetch(src)
 36:       .then(r => {
 37:         if (!r.ok)
 38:           throw new Error(`Failed to load SVG: ${r.status} ${r.statusText}`)
 39:         return r.text()
 40:       })
 41:       .then(text => {
 42:         if (!text.includes("<svg")) {
 43:           throw new Error("Invalid SVG format: not an SVG file")
 44:         }
 45: 
 46: 
 47:         setSvgContent(text)
 48: 
 49: 
 50:         const setupCanvas = (canvas: HTMLCanvasElement | null) => {
 51:           if (canvas && containerRef.current) {
 52:             const containerWidth = containerRef.current.clientWidth
 53:             canvas.width = 512
 54:             canvas.height = 512
 55:             canvas.style.width = `${containerWidth}px`
 56:             canvas.style.height = `${containerWidth}px`
 57:           }
 58:         }
 59: 
 60:         setupCanvas(canvasRef.current)
 61:         setupCanvas(letterCanvasRef.current)
 62: 
 63: 
 64:         const ctx = canvasRef.current?.getContext("2d")
 65:         if (ctx) {
 66:           ctx.strokeStyle = "#3b82f6"
 67:           ctx.lineWidth = strokeWidth
 68:           ctx.lineCap = "round"
 69:           ctx.lineJoin = "round"
 70:         }
 71: 
 72: 
 73:         const letterCtx = letterCanvasRef.current?.getContext("2d")
 74:         if (letterCtx) {
 75: 
 76:           letterCtx.clearRect(0, 0, 512, 512)
 77: 
 78: 
 79:           const img = new Image()
 80:           const svgBlob = new Blob([text], { type: "image/svg+xml" })
 81:           const url = URL.createObjectURL(svgBlob)
 82: 
 83:           img.onload = () => {
 84:             letterCtx.drawImage(img, 0, 0, 512, 512)
 85:             URL.revokeObjectURL(url)
 86:           }
 87:           img.src = url
 88:         }
 89: 
 90:         onLoad?.()
 91:       })
 92:       .catch(error => {
 93:         console.error("[LetterTrace] Error loading SVG:", error)
 94:         onError?.()
 95:       })
 96:   }, [src, onError, onLoad, strokeWidth])
 97: 
 98: 
 99:   const checkCoverage = () => {
100:     const canvas = canvasRef.current
101:     const letterCanvas = letterCanvasRef.current
102:     if (!canvas || !letterCanvas) return
103: 
104:     const ctx = canvas.getContext("2d")
105:     const letterCtx = letterCanvas.getContext("2d")
106:     if (!ctx || !letterCtx) return
107: 
108: 
109:     const drawingData = ctx.getImageData(0, 0, 512, 512)
110:     const letterData = letterCtx.getImageData(0, 0, 512, 512)
111: 
112:     let totalLetterPixels = 0
113:     let coveredPixels = 0
114: 
115: 
116:     for (let i = 0; i < drawingData.data.length; i += 4) {
117: 
118:       const isLetterPixel =
119:         letterData.data[i] < 50 &&
120:         letterData.data[i + 1] < 50 &&
121:         letterData.data[i + 2] < 50
122: 
123:       if (isLetterPixel) {
124:         totalLetterPixels++
125: 
126:         if (drawingData.data[i + 3] > 0) {
127: 
128:           coveredPixels++
129:         }
130:       }
131:     }
132: 
133:     const newCoverage =
134:       totalLetterPixels > 0 ? (coveredPixels / totalLetterPixels) * 100 : 0
135: 
136:     setCoverage(newCoverage)
137: 
138: 
139:     if (newCoverage >= 95 && !isComplete) {
140:       setIsComplete(true)
141: 
142:       confetti({
143:         particleCount: 100,
144:         spread: 70,
145:         origin: { y: 0.6 }
146:       })
147: 
148:       onDone?.()
149:     }
150:   }
151: 
152: 
153:   const startDrawing = (e: React.PointerEvent) => {
154:     if (isComplete) return
155: 
156:     e.preventDefault()
157:     setIsDrawing(true)
158:     const canvas = canvasRef.current
159:     const ctx = canvas?.getContext("2d")
160:     if (!canvas || !ctx) return
161: 
162:     const rect = canvas.getBoundingClientRect()
163:     const scale = canvas.width / rect.width
164:     const x = (e.clientX - rect.left) * scale
165:     const y = (e.clientY - rect.top) * scale
166: 
167:     ctx.beginPath()
168:     ctx.moveTo(x, y)
169:   }
170: 
171:   const draw = (e: React.PointerEvent) => {
172:     if (!isDrawing || isComplete) return
173: 
174:     e.preventDefault()
175:     const canvas = canvasRef.current
176:     const ctx = canvas?.getContext("2d")
177:     if (!canvas || !ctx) return
178: 
179:     const rect = canvas.getBoundingClientRect()
180:     const scale = canvas.width / rect.width
181:     const x = (e.clientX - rect.left) * scale
182:     const y = (e.clientY - rect.top) * scale
183: 
184:     ctx.lineTo(x, y)
185:     ctx.stroke()
186: 
187: 
188:     if (Math.random() < 0.1) {
189:       checkCoverage()
190:     }
191:   }
192: 
193:   const stopDrawing = () => {
194:     if (!isDrawing) return
195:     setIsDrawing(false)
196:     checkCoverage()
197:   }
198: 
199:   if (!svgContent) {
200:     return (
201:       <div className="flex items-center justify-center p-8">
202:         <div className="text-muted-foreground">Loading letter...</div>
203:       </div>
204:     )
205:   }
206: 
207:   return (
208:     <div ref={containerRef} className="mx-auto w-full max-w-[512px]">
209:       <div
210:         className="relative w-full touch-none"
211:         style={{ paddingBottom: "100%" }}
212:       >
213:         {}
214:         <canvas
215:           ref={letterCanvasRef}
216:           className="absolute inset-0 size-full"
217:           style={{ display: "none" }}
218:         />
219: 
220:         {}
221:         <svg
222:           ref={svgRef}
223:           viewBox="0 0 512 512"
224:           className="absolute inset-0 size-full"
225:           style={{ zIndex: 1 }}
226:           dangerouslySetInnerHTML={{ __html: svgContent }}
227:         />
228: 
229:         {}
230:         <canvas
231:           ref={canvasRef}
232:           className="absolute inset-0 size-full touch-none"
233:           style={{ zIndex: 2 }}
234:           onPointerDown={startDrawing}
235:           onPointerMove={draw}
236:           onPointerUp={stopDrawing}
237:           onPointerLeave={stopDrawing}
238:           onTouchStart={e => e.preventDefault()}
239:           onTouchMove={e => e.preventDefault()}
240:         />
241:       </div>
242: 
243:       {}
244:       <div className="text-muted-foreground mt-4 text-center text-sm">
245:         {isComplete ? (
246:           <span className="text-green-600">
247:             Great job! Moving to next letter...
248:           </span>
249:         ) : (
250:           <span>Coverage: {Math.round(coverage)}%</span>
251:         )}
252:       </div>
253:     </div>
254:   )
255: }
````

## File: components/magicui/animated-gradient-text.tsx
````typescript
 1: import { ReactNode } from "react"
 2: 
 3: import { cn } from "@/lib/utils"
 4: 
 5: export default function AnimatedGradientText({
 6:   children,
 7:   className
 8: }: {
 9:   children: ReactNode
10:   className?: string
11: }) {
12:   return (
13:     <div
14:       className={cn(
15:         "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40",
16:         className
17:       )}
18:     >
19:       <div
20:         className={`animate-gradient absolute inset-0 block size-full bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] [border-radius:inherit] ![mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
21:       />
22: 
23:       {children}
24:     </div>
25:   )
26: }
````

## File: components/magicui/hero-video-dialog.tsx
````typescript
  1: "use client"
  2: 
  3: import { AnimatePresence, motion } from "framer-motion"
  4: import { Play, XIcon } from "lucide-react"
  5: import { useState } from "react"
  6: 
  7: import { cn } from "@/lib/utils"
  8: 
  9: type AnimationStyle =
 10:   | "from-bottom"
 11:   | "from-center"
 12:   | "from-top"
 13:   | "from-left"
 14:   | "from-right"
 15:   | "fade"
 16:   | "top-in-bottom-out"
 17:   | "left-in-right-out"
 18: 
 19: interface HeroVideoProps {
 20:   animationStyle?: AnimationStyle
 21:   videoSrc: string
 22:   thumbnailSrc: string
 23:   thumbnailAlt?: string
 24:   className?: string
 25: }
 26: 
 27: const animationVariants = {
 28:   "from-bottom": {
 29:     initial: { y: "100%", opacity: 0 },
 30:     animate: { y: 0, opacity: 1 },
 31:     exit: { y: "100%", opacity: 0 }
 32:   },
 33:   "from-center": {
 34:     initial: { scale: 0.5, opacity: 0 },
 35:     animate: { scale: 1, opacity: 1 },
 36:     exit: { scale: 0.5, opacity: 0 }
 37:   },
 38:   "from-top": {
 39:     initial: { y: "-100%", opacity: 0 },
 40:     animate: { y: 0, opacity: 1 },
 41:     exit: { y: "-100%", opacity: 0 }
 42:   },
 43:   "from-left": {
 44:     initial: { x: "-100%", opacity: 0 },
 45:     animate: { x: 0, opacity: 1 },
 46:     exit: { x: "-100%", opacity: 0 }
 47:   },
 48:   "from-right": {
 49:     initial: { x: "100%", opacity: 0 },
 50:     animate: { x: 0, opacity: 1 },
 51:     exit: { x: "100%", opacity: 0 }
 52:   },
 53:   fade: {
 54:     initial: { opacity: 0 },
 55:     animate: { opacity: 1 },
 56:     exit: { opacity: 0 }
 57:   },
 58:   "top-in-bottom-out": {
 59:     initial: { y: "-100%", opacity: 0 },
 60:     animate: { y: 0, opacity: 1 },
 61:     exit: { y: "100%", opacity: 0 }
 62:   },
 63:   "left-in-right-out": {
 64:     initial: { x: "-100%", opacity: 0 },
 65:     animate: { x: 0, opacity: 1 },
 66:     exit: { x: "100%", opacity: 0 }
 67:   }
 68: }
 69: 
 70: export default function HeroVideoDialog({
 71:   animationStyle = "from-center",
 72:   videoSrc,
 73:   thumbnailSrc,
 74:   thumbnailAlt = "Video thumbnail",
 75:   className
 76: }: HeroVideoProps) {
 77:   const [isVideoOpen, setIsVideoOpen] = useState(false)
 78:   const selectedAnimation = animationVariants[animationStyle]
 79: 
 80:   return (
 81:     <div className={cn("relative", className)}>
 82:       <div
 83:         className="group relative cursor-pointer"
 84:         onClick={() => setIsVideoOpen(true)}
 85:       >
 86:         <img
 87:           src={thumbnailSrc}
 88:           alt={thumbnailAlt}
 89:           width={1920}
 90:           height={1080}
 91:           className="w-full rounded-md border shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.8]"
 92:         />
 93:         <div className="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
 94:           <div className="bg-primary/10 flex size-28 items-center justify-center rounded-full backdrop-blur-md">
 95:             <div
 96:               className={`from-primary/30 to-primary relative flex size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-b shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]`}
 97:             >
 98:               <Play
 99:                 className="size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
100:                 style={{
101:                   filter:
102:                     "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))"
103:                 }}
104:               />
105:             </div>
106:           </div>
107:         </div>
108:       </div>
109:       <AnimatePresence>
110:         {isVideoOpen && (
111:           <motion.div
112:             initial={{ opacity: 0 }}
113:             animate={{ opacity: 1 }}
114:             onClick={() => setIsVideoOpen(false)}
115:             exit={{ opacity: 0 }}
116:             className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
117:           >
118:             <motion.div
119:               {...selectedAnimation}
120:               transition={{ type: "spring", damping: 30, stiffness: 300 }}
121:               className="relative mx-4 aspect-video w-full max-w-4xl md:mx-0"
122:             >
123:               <motion.button className="absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md dark:bg-neutral-100/50 dark:text-black">
124:                 <XIcon className="size-5" />
125:               </motion.button>
126:               <div className="relative isolate z-[1] size-full overflow-hidden rounded-2xl border-2 border-white">
127:                 <iframe
128:                   src={videoSrc}
129:                   className="size-full rounded-2xl"
130:                   allowFullScreen
131:                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
132:                 ></iframe>
133:               </div>
134:             </motion.div>
135:           </motion.div>
136:         )}
137:       </AnimatePresence>
138:     </div>
139:   )
140: }
````

## File: components/profile-sync.tsx
````typescript
 1: "use client"
 2: 
 3: import { useUser } from "@clerk/nextjs"
 4: import { useEffect, useState } from "react"
 5: import { syncUserProfileAction } from "@/actions/db/profiles-actions"
 6: 
 7: 
 8: const DEBUG_SYNC = false
 9: 
10: export function ProfileSync() {
11:   const { isSignedIn, isLoaded, user } = useUser()
12:   const [hasSynced, setHasSynced] = useState(false)
13: 
14:   useEffect(() => {
15: 
16:     if (process.env.NODE_ENV === "development" && !DEBUG_SYNC) {
17:       if (!hasSynced) {
18:         console.log("[ProfileSync] Disabled in development mode")
19:         setHasSynced(true)
20:       }
21:       return
22:     }
23: 
24:     async function syncProfile() {
25:       if (isSignedIn && !hasSynced && user) {
26:         try {
27:           const result = await syncUserProfileAction()
28: 
29:           if (result.isSuccess) {
30:             setHasSynced(true)
31:             if (DEBUG_SYNC) {
32:               console.log("[ProfileSync] Success:", result.message)
33:             }
34:           } else {
35:             console.warn("[ProfileSync] Warning:", result.message)
36:           }
37:         } catch (error) {
38:           console.error(
39:             "[ProfileSync] Error:",
40:             error instanceof Error ? error.message : String(error)
41:           )
42:         }
43:       }
44:     }
45: 
46:     if (isLoaded) {
47:       syncProfile()
48:     }
49:   }, [isSignedIn, isLoaded, hasSynced, user])
50: 
51: 
52:   return null
53: }
````

## File: components/ui/accordion.tsx
````typescript
 1: "use client"
 2: 
 3: import * as React from "react"
 4: import * as AccordionPrimitive from "@radix-ui/react-accordion"
 5: import { ChevronDown } from "lucide-react"
 6: 
 7: import { cn } from "@/lib/utils"
 8: 
 9: const Accordion = AccordionPrimitive.Root
10: 
11: const AccordionItem = React.forwardRef<
12:   React.ElementRef<typeof AccordionPrimitive.Item>,
13:   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
14: >(({ className, ...props }, ref) => (
15:   <AccordionPrimitive.Item
16:     ref={ref}
17:     className={cn("border-b", className)}
18:     {...props}
19:   />
20: ))
21: AccordionItem.displayName = "AccordionItem"
22: 
23: const AccordionTrigger = React.forwardRef<
24:   React.ElementRef<typeof AccordionPrimitive.Trigger>,
25:   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
26: >(({ className, children, ...props }, ref) => (
27:   <AccordionPrimitive.Header className="flex">
28:     <AccordionPrimitive.Trigger
29:       ref={ref}
30:       className={cn(
31:         "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
32:         className
33:       )}
34:       {...props}
35:     >
36:       {children}
37:       <ChevronDown className="size-4 shrink-0 transition-transform duration-200" />
38:     </AccordionPrimitive.Trigger>
39:   </AccordionPrimitive.Header>
40: ))
41: AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName
42: 
43: const AccordionContent = React.forwardRef<
44:   React.ElementRef<typeof AccordionPrimitive.Content>,
45:   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
46: >(({ className, children, ...props }, ref) => (
47:   <AccordionPrimitive.Content
48:     ref={ref}
49:     className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all"
50:     {...props}
51:   >
52:     <div className={cn("pb-4 pt-0", className)}>{children}</div>
53:   </AccordionPrimitive.Content>
54: ))
55: 
56: AccordionContent.displayName = AccordionPrimitive.Content.displayName
57: 
58: export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
````

## File: components/ui/alert-dialog.tsx
````typescript
  1: "use client"
  2: 
  3: import * as React from "react"
  4: import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
  5: 
  6: import { cn } from "@/lib/utils"
  7: import { buttonVariants } from "@/components/ui/button"
  8: 
  9: const AlertDialog = AlertDialogPrimitive.Root
 10: 
 11: const AlertDialogTrigger = AlertDialogPrimitive.Trigger
 12: 
 13: const AlertDialogPortal = AlertDialogPrimitive.Portal
 14: 
 15: const AlertDialogOverlay = React.forwardRef<
 16:   React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
 17:   React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
 18: >(({ className, ...props }, ref) => (
 19:   <AlertDialogPrimitive.Overlay
 20:     className={cn(
 21:       "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  fixed inset-0 z-50 bg-black/80",
 22:       className
 23:     )}
 24:     {...props}
 25:     ref={ref}
 26:   />
 27: ))
 28: AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName
 29: 
 30: const AlertDialogContent = React.forwardRef<
 31:   React.ElementRef<typeof AlertDialogPrimitive.Content>,
 32:   React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
 33: >(({ className, ...props }, ref) => (
 34:   <AlertDialogPortal>
 35:     <AlertDialogOverlay />
 36:     <AlertDialogPrimitive.Content
 37:       ref={ref}
 38:       className={cn(
 39:         "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg",
 40:         className
 41:       )}
 42:       {...props}
 43:     />
 44:   </AlertDialogPortal>
 45: ))
 46: AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName
 47: 
 48: const AlertDialogHeader = ({
 49:   className,
 50:   ...props
 51: }: React.HTMLAttributes<HTMLDivElement>) => (
 52:   <div
 53:     className={cn(
 54:       "flex flex-col space-y-2 text-center sm:text-left",
 55:       className
 56:     )}
 57:     {...props}
 58:   />
 59: )
 60: AlertDialogHeader.displayName = "AlertDialogHeader"
 61: 
 62: const AlertDialogFooter = ({
 63:   className,
 64:   ...props
 65: }: React.HTMLAttributes<HTMLDivElement>) => (
 66:   <div
 67:     className={cn(
 68:       "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
 69:       className
 70:     )}
 71:     {...props}
 72:   />
 73: )
 74: AlertDialogFooter.displayName = "AlertDialogFooter"
 75: 
 76: const AlertDialogTitle = React.forwardRef<
 77:   React.ElementRef<typeof AlertDialogPrimitive.Title>,
 78:   React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
 79: >(({ className, ...props }, ref) => (
 80:   <AlertDialogPrimitive.Title
 81:     ref={ref}
 82:     className={cn("text-lg font-semibold", className)}
 83:     {...props}
 84:   />
 85: ))
 86: AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName
 87: 
 88: const AlertDialogDescription = React.forwardRef<
 89:   React.ElementRef<typeof AlertDialogPrimitive.Description>,
 90:   React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
 91: >(({ className, ...props }, ref) => (
 92:   <AlertDialogPrimitive.Description
 93:     ref={ref}
 94:     className={cn("text-muted-foreground text-sm", className)}
 95:     {...props}
 96:   />
 97: ))
 98: AlertDialogDescription.displayName =
 99:   AlertDialogPrimitive.Description.displayName
100: 
101: const AlertDialogAction = React.forwardRef<
102:   React.ElementRef<typeof AlertDialogPrimitive.Action>,
103:   React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
104: >(({ className, ...props }, ref) => (
105:   <AlertDialogPrimitive.Action
106:     ref={ref}
107:     className={cn(buttonVariants(), className)}
108:     {...props}
109:   />
110: ))
111: AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName
112: 
113: const AlertDialogCancel = React.forwardRef<
114:   React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
115:   React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
116: >(({ className, ...props }, ref) => (
117:   <AlertDialogPrimitive.Cancel
118:     ref={ref}
119:     className={cn(
120:       buttonVariants({ variant: "outline" }),
121:       "mt-2 sm:mt-0",
122:       className
123:     )}
124:     {...props}
125:   />
126: ))
127: AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName
128: 
129: export {
130:   AlertDialog,
131:   AlertDialogPortal,
132:   AlertDialogOverlay,
133:   AlertDialogTrigger,
134:   AlertDialogContent,
135:   AlertDialogHeader,
136:   AlertDialogFooter,
137:   AlertDialogTitle,
138:   AlertDialogDescription,
139:   AlertDialogAction,
140:   AlertDialogCancel
141: }
````

## File: components/ui/alert.tsx
````typescript
 1: import * as React from "react"
 2: import { cva, type VariantProps } from "class-variance-authority"
 3: 
 4: import { cn } from "@/lib/utils"
 5: 
 6: const alertVariants = cva(
 7:   "[&>svg]:text-foreground relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg~*]:pl-7",
 8:   {
 9:     variants: {
10:       variant: {
11:         default: "bg-background text-foreground",
12:         destructive:
13:           "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
14:       }
15:     },
16:     defaultVariants: {
17:       variant: "default"
18:     }
19:   }
20: )
21: 
22: const Alert = React.forwardRef<
23:   HTMLDivElement,
24:   React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
25: >(({ className, variant, ...props }, ref) => (
26:   <div
27:     ref={ref}
28:     role="alert"
29:     className={cn(alertVariants({ variant }), className)}
30:     {...props}
31:   />
32: ))
33: Alert.displayName = "Alert"
34: 
35: const AlertTitle = React.forwardRef<
36:   HTMLParagraphElement,
37:   React.HTMLAttributes<HTMLHeadingElement>
38: >(({ className, ...props }, ref) => (
39:   <h5
40:     ref={ref}
41:     className={cn("mb-1 font-medium leading-none tracking-tight", className)}
42:     {...props}
43:   />
44: ))
45: AlertTitle.displayName = "AlertTitle"
46: 
47: const AlertDescription = React.forwardRef<
48:   HTMLParagraphElement,
49:   React.HTMLAttributes<HTMLParagraphElement>
50: >(({ className, ...props }, ref) => (
51:   <div
52:     ref={ref}
53:     className={cn("text-sm [&_p]:leading-relaxed", className)}
54:     {...props}
55:   />
56: ))
57: AlertDescription.displayName = "AlertDescription"
58: 
59: export { Alert, AlertTitle, AlertDescription }
````

## File: components/ui/aspect-ratio.tsx
````typescript
1: "use client"
2: 
3: import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
4: 
5: const AspectRatio = AspectRatioPrimitive.Root
6: 
7: export { AspectRatio }
````

## File: components/ui/avatar.tsx
````typescript
 1: "use client"
 2: 
 3: import * as React from "react"
 4: import * as AvatarPrimitive from "@radix-ui/react-avatar"
 5: 
 6: import { cn } from "@/lib/utils"
 7: 
 8: const Avatar = React.forwardRef<
 9:   React.ElementRef<typeof AvatarPrimitive.Root>,
10:   React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
11: >(({ className, ...props }, ref) => (
12:   <AvatarPrimitive.Root
13:     ref={ref}
14:     className={cn(
15:       "relative flex size-10 shrink-0 overflow-hidden rounded-full",
16:       className
17:     )}
18:     {...props}
19:   />
20: ))
21: Avatar.displayName = AvatarPrimitive.Root.displayName
22: 
23: const AvatarImage = React.forwardRef<
24:   React.ElementRef<typeof AvatarPrimitive.Image>,
25:   React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
26: >(({ className, ...props }, ref) => (
27:   <AvatarPrimitive.Image
28:     ref={ref}
29:     className={cn("aspect-square size-full", className)}
30:     {...props}
31:   />
32: ))
33: AvatarImage.displayName = AvatarPrimitive.Image.displayName
34: 
35: const AvatarFallback = React.forwardRef<
36:   React.ElementRef<typeof AvatarPrimitive.Fallback>,
37:   React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
38: >(({ className, ...props }, ref) => (
39:   <AvatarPrimitive.Fallback
40:     ref={ref}
41:     className={cn(
42:       "bg-muted flex size-full items-center justify-center rounded-full",
43:       className
44:     )}
45:     {...props}
46:   />
47: ))
48: AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName
49: 
50: export { Avatar, AvatarImage, AvatarFallback }
````

## File: components/ui/badge.tsx
````typescript
 1: import * as React from "react"
 2: import { cva, type VariantProps } from "class-variance-authority"
 3: 
 4: import { cn } from "@/lib/utils"
 5: 
 6: const badgeVariants = cva(
 7:   "focus:ring-ring inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
 8:   {
 9:     variants: {
10:       variant: {
11:         default:
12:           "bg-primary text-primary-foreground hover:bg-primary/80 border-transparent",
13:         secondary:
14:           "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent",
15:         destructive:
16:           "bg-destructive text-destructive-foreground hover:bg-destructive/80 border-transparent",
17:         outline: "text-foreground"
18:       }
19:     },
20:     defaultVariants: {
21:       variant: "default"
22:     }
23:   }
24: )
25: 
26: export interface BadgeProps
27:   extends React.HTMLAttributes<HTMLDivElement>,
28:     VariantProps<typeof badgeVariants> {}
29: 
30: function Badge({ className, variant, ...props }: BadgeProps) {
31:   return (
32:     <div className={cn(badgeVariants({ variant }), className)} {...props} />
33:   )
34: }
35: 
36: export { Badge, badgeVariants }
````

## File: components/ui/breadcrumb.tsx
````typescript
  1: import * as React from "react"
  2: import { Slot } from "@radix-ui/react-slot"
  3: import { ChevronRight, MoreHorizontal } from "lucide-react"
  4: 
  5: import { cn } from "@/lib/utils"
  6: 
  7: const Breadcrumb = React.forwardRef<
  8:   HTMLElement,
  9:   React.ComponentPropsWithoutRef<"nav"> & {
 10:     separator?: React.ReactNode
 11:   }
 12: >(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
 13: Breadcrumb.displayName = "Breadcrumb"
 14: 
 15: const BreadcrumbList = React.forwardRef<
 16:   HTMLOListElement,
 17:   React.ComponentPropsWithoutRef<"ol">
 18: >(({ className, ...props }, ref) => (
 19:   <ol
 20:     ref={ref}
 21:     className={cn(
 22:       "text-muted-foreground flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5",
 23:       className
 24:     )}
 25:     {...props}
 26:   />
 27: ))
 28: BreadcrumbList.displayName = "BreadcrumbList"
 29: 
 30: const BreadcrumbItem = React.forwardRef<
 31:   HTMLLIElement,
 32:   React.ComponentPropsWithoutRef<"li">
 33: >(({ className, ...props }, ref) => (
 34:   <li
 35:     ref={ref}
 36:     className={cn("inline-flex items-center gap-1.5", className)}
 37:     {...props}
 38:   />
 39: ))
 40: BreadcrumbItem.displayName = "BreadcrumbItem"
 41: 
 42: const BreadcrumbLink = React.forwardRef<
 43:   HTMLAnchorElement,
 44:   React.ComponentPropsWithoutRef<"a"> & {
 45:     asChild?: boolean
 46:   }
 47: >(({ asChild, className, ...props }, ref) => {
 48:   const Comp = asChild ? Slot : "a"
 49: 
 50:   return (
 51:     <Comp
 52:       ref={ref}
 53:       className={cn("hover:text-foreground transition-colors", className)}
 54:       {...props}
 55:     />
 56:   )
 57: })
 58: BreadcrumbLink.displayName = "BreadcrumbLink"
 59: 
 60: const BreadcrumbPage = React.forwardRef<
 61:   HTMLSpanElement,
 62:   React.ComponentPropsWithoutRef<"span">
 63: >(({ className, ...props }, ref) => (
 64:   <span
 65:     ref={ref}
 66:     role="link"
 67:     aria-disabled="true"
 68:     aria-current="page"
 69:     className={cn("text-foreground font-normal", className)}
 70:     {...props}
 71:   />
 72: ))
 73: BreadcrumbPage.displayName = "BreadcrumbPage"
 74: 
 75: const BreadcrumbSeparator = ({
 76:   children,
 77:   className,
 78:   ...props
 79: }: React.ComponentProps<"li">) => (
 80:   <li
 81:     role="presentation"
 82:     aria-hidden="true"
 83:     className={cn("[&>svg]:size-3.5", className)}
 84:     {...props}
 85:   >
 86:     {children ?? <ChevronRight />}
 87:   </li>
 88: )
 89: BreadcrumbSeparator.displayName = "BreadcrumbSeparator"
 90: 
 91: const BreadcrumbEllipsis = ({
 92:   className,
 93:   ...props
 94: }: React.ComponentProps<"span">) => (
 95:   <span
 96:     role="presentation"
 97:     aria-hidden="true"
 98:     className={cn("flex size-9 items-center justify-center", className)}
 99:     {...props}
100:   >
101:     <MoreHorizontal className="size-4" />
102:     <span className="sr-only">More</span>
103:   </span>
104: )
105: BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"
106: 
107: export {
108:   Breadcrumb,
109:   BreadcrumbList,
110:   BreadcrumbItem,
111:   BreadcrumbLink,
112:   BreadcrumbPage,
113:   BreadcrumbSeparator,
114:   BreadcrumbEllipsis
115: }
````

## File: components/ui/button.tsx
````typescript
 1: import * as React from "react"
 2: import { Slot } from "@radix-ui/react-slot"
 3: import { cva, type VariantProps } from "class-variance-authority"
 4: 
 5: import { cn } from "@/lib/utils"
 6: 
 7: const buttonVariants = cva(
 8:   "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
 9:   {
10:     variants: {
11:       variant: {
12:         default: "bg-primary text-primary-foreground hover:bg-primary/90",
13:         destructive:
14:           "bg-destructive text-destructive-foreground hover:bg-destructive/90",
15:         outline:
16:           "border-input bg-background hover:bg-accent hover:text-accent-foreground border",
17:         secondary:
18:           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
19:         ghost: "hover:bg-accent hover:text-accent-foreground",
20:         link: "text-primary underline-offset-4 hover:underline"
21:       },
22:       size: {
23:         default: "h-10 px-4 py-2",
24:         sm: "h-9 rounded-md px-3",
25:         lg: "h-11 rounded-md px-8",
26:         icon: "size-10"
27:       }
28:     },
29:     defaultVariants: {
30:       variant: "default",
31:       size: "default"
32:     }
33:   }
34: )
35: 
36: export interface ButtonProps
37:   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
38:     VariantProps<typeof buttonVariants> {
39:   asChild?: boolean
40: }
41: 
42: const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
43:   ({ className, variant, size, asChild = false, ...props }, ref) => {
44:     const Comp = asChild ? Slot : "button"
45:     return (
46:       <Comp
47:         className={cn(buttonVariants({ variant, size, className }))}
48:         ref={ref}
49:         {...props}
50:       />
51:     )
52:   }
53: )
54: Button.displayName = "Button"
55: 
56: export { Button, buttonVariants }
````

## File: components/ui/calendar.tsx
````typescript
 1: "use client"
 2: 
 3: import * as React from "react"
 4: import { ChevronLeft, ChevronRight } from "lucide-react"
 5: import { DayPicker } from "react-day-picker"
 6: 
 7: import { cn } from "@/lib/utils"
 8: import { buttonVariants } from "@/components/ui/button"
 9: 
10: export type CalendarProps = React.ComponentProps<typeof DayPicker>
11: 
12: function Calendar({
13:   className,
14:   classNames,
15:   showOutsideDays = true,
16:   ...props
17: }: CalendarProps) {
18:   return (
19:     <DayPicker
20:       showOutsideDays={showOutsideDays}
21:       className={cn("p-3", className)}
22:       classNames={{
23:         months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
24:         month: "space-y-4",
25:         caption: "flex justify-center pt-1 relative items-center",
26:         caption_label: "text-sm font-medium",
27:         nav: "space-x-1 flex items-center",
28:         nav_button: cn(
29:           buttonVariants({ variant: "outline" }),
30:           "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
31:         ),
32:         nav_button_previous: "absolute left-1",
33:         nav_button_next: "absolute right-1",
34:         table: "w-full border-collapse space-y-1",
35:         head_row: "flex",
36:         head_cell:
37:           "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
38:         row: "flex w-full mt-2",
39:         cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
40:         day: cn(
41:           buttonVariants({ variant: "ghost" }),
42:           "size-9 p-0 font-normal aria-selected:opacity-100"
43:         ),
44:         day_range_end: "day-range-end",
45:         day_selected:
46:           "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
47:         day_today: "bg-accent text-accent-foreground",
48:         day_outside:
49:           "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
50:         day_disabled: "text-muted-foreground opacity-50",
51:         day_range_middle:
52:           "aria-selected:bg-accent aria-selected:text-accent-foreground",
53:         day_hidden: "invisible",
54:         ...classNames
55:       }}
56:       components={{
57:         IconLeft: ({ className, ...props }) => (
58:           <ChevronLeft className={cn("size-4", className)} {...props} />
59:         ),
60:         IconRight: ({ className, ...props }) => (
61:           <ChevronRight className={cn("size-4", className)} {...props} />
62:         )
63:       }}
64:       {...props}
65:     />
66:   )
67: }
68: Calendar.displayName = "Calendar"
69: 
70: export { Calendar }
````

## File: components/ui/card-display.tsx
````typescript
  1: "use client"
  2: 
  3: 
  4: 
  5: 
  6: 
  7: 
  8: 
  9: 
 10: 
 11: 
 12: 
 13: 
 14: 
 15: 
 16: 
 17: 
 18: 
 19: 
 20: import { KannadaEntry } from "@/types"
 21: import Image from "next/image"
 22: import { Volume2 } from "lucide-react"
 23: import { useState } from "react"
 24: 
 25: interface CardDisplayProps {
 26:   entry: KannadaEntry
 27:   onClick?: () => void
 28: }
 29: 
 30: export function CardDisplay({ entry, onClick }: CardDisplayProps) {
 31:   const [isPlaying, setIsPlaying] = useState(false)
 32: 
 33: 
 34:   const {
 35:     kannada = "N/A",
 36:     english = "N/A",
 37:     kanglish = "N/A",
 38:     icon = null,
 39:     waudio = null
 40:   } = entry
 41: 
 42: 
 43:   const playAudio = (e: React.MouseEvent) => {
 44:     e.stopPropagation()
 45: 
 46:     if (!waudio) return
 47: 
 48:     const audio = new Audio(waudio)
 49: 
 50:     setIsPlaying(true)
 51: 
 52:     audio.onended = () => {
 53:       setIsPlaying(false)
 54:     }
 55: 
 56:     audio.play().catch(error => {
 57:       console.error("Error playing audio:", error)
 58:       setIsPlaying(false)
 59:     })
 60:   }
 61: 
 62:   const handleCardClick = () => {
 63:     if (onClick) {
 64:       onClick()
 65:     }
 66:   }
 67: 
 68:   return (
 69:     <div
 70:       className={`bg-card hover:bg-background w-full rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg ${onClick ? "cursor-pointer" : ""}`}
 71:       onClick={handleCardClick}
 72:     >
 73:       {}
 74:       <div className="mb-6 mt-2 flex justify-center">
 75:         {icon ? (
 76:           <Image
 77:             src={icon}
 78:             alt={`${english} icon`}
 79:             width={80}
 80:             height={80}
 81:             className="size-20 object-contain"
 82:           />
 83:         ) : (
 84:           <div className="bg-muted flex size-20 items-center justify-center rounded-md">
 85:             <span className="text-muted-foreground">No Icon</span>
 86:           </div>
 87:         )}
 88:       </div>
 89: 
 90:       {}
 91:       <div className="mb-4 text-center">
 92:         <h2 className="text-foreground text-2xl font-semibold" lang="kn">
 93:           {kannada}
 94:         </h2>
 95:       </div>
 96: 
 97:       {}
 98:       <div className="flex items-end justify-between">
 99:         <div>
100:           <p className="text-foreground text-base">{english}</p>
101:           <p className="text-muted-foreground text-sm italic">{kanglish}</p>
102:         </div>
103: 
104:         {}
105:         {waudio && (
106:           <button
107:             className={`rounded-full p-2 ${isPlaying ? "bg-primary/20" : "bg-accent/50 hover:bg-accent"}`}
108:             onClick={playAudio}
109:             aria-label="Play word pronunciation"
110:           >
111:             <Volume2 className="text-foreground size-5" />
112:           </button>
113:         )}
114:       </div>
115:     </div>
116:   )
117: }
````

## File: components/ui/card.tsx
````typescript
 1: import * as React from "react"
 2: 
 3: import { cn } from "@/lib/utils"
 4: 
 5: const Card = React.forwardRef<
 6:   HTMLDivElement,
 7:   React.HTMLAttributes<HTMLDivElement>
 8: >(({ className, ...props }, ref) => (
 9:   <div
10:     ref={ref}
11:     className={cn(
12:       "bg-card text-card-foreground rounded-lg border shadow-sm",
13:       className
14:     )}
15:     {...props}
16:   />
17: ))
18: Card.displayName = "Card"
19: 
20: const CardHeader = React.forwardRef<
21:   HTMLDivElement,
22:   React.HTMLAttributes<HTMLDivElement>
23: >(({ className, ...props }, ref) => (
24:   <div
25:     ref={ref}
26:     className={cn("flex flex-col space-y-1.5 p-6", className)}
27:     {...props}
28:   />
29: ))
30: CardHeader.displayName = "CardHeader"
31: 
32: const CardTitle = React.forwardRef<
33:   HTMLDivElement,
34:   React.HTMLAttributes<HTMLDivElement>
35: >(({ className, ...props }, ref) => (
36:   <div
37:     ref={ref}
38:     className={cn(
39:       "text-2xl font-semibold leading-none tracking-tight",
40:       className
41:     )}
42:     {...props}
43:   />
44: ))
45: CardTitle.displayName = "CardTitle"
46: 
47: const CardDescription = React.forwardRef<
48:   HTMLDivElement,
49:   React.HTMLAttributes<HTMLDivElement>
50: >(({ className, ...props }, ref) => (
51:   <div
52:     ref={ref}
53:     className={cn("text-muted-foreground text-sm", className)}
54:     {...props}
55:   />
56: ))
57: CardDescription.displayName = "CardDescription"
58: 
59: const CardContent = React.forwardRef<
60:   HTMLDivElement,
61:   React.HTMLAttributes<HTMLDivElement>
62: >(({ className, ...props }, ref) => (
63:   <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
64: ))
65: CardContent.displayName = "CardContent"
66: 
67: const CardFooter = React.forwardRef<
68:   HTMLDivElement,
69:   React.HTMLAttributes<HTMLDivElement>
70: >(({ className, ...props }, ref) => (
71:   <div
72:     ref={ref}
73:     className={cn("flex items-center p-6 pt-0", className)}
74:     {...props}
75:   />
76: ))
77: CardFooter.displayName = "CardFooter"
78: 
79: export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
````

## File: components/ui/carousel.tsx
````typescript
  1: "use client"
  2: 
  3: import * as React from "react"
  4: import useEmblaCarousel, {
  5:   type UseEmblaCarouselType
  6: } from "embla-carousel-react"
  7: import { ArrowLeft, ArrowRight } from "lucide-react"
  8: 
  9: import { cn } from "@/lib/utils"
 10: import { Button } from "@/components/ui/button"
 11: 
 12: type CarouselApi = UseEmblaCarouselType[1]
 13: type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
 14: type CarouselOptions = UseCarouselParameters[0]
 15: type CarouselPlugin = UseCarouselParameters[1]
 16: 
 17: type CarouselProps = {
 18:   opts?: CarouselOptions
 19:   plugins?: CarouselPlugin
 20:   orientation?: "horizontal" | "vertical"
 21:   setApi?: (api: CarouselApi) => void
 22: }
 23: 
 24: type CarouselContextProps = {
 25:   carouselRef: ReturnType<typeof useEmblaCarousel>[0]
 26:   api: ReturnType<typeof useEmblaCarousel>[1]
 27:   scrollPrev: () => void
 28:   scrollNext: () => void
 29:   canScrollPrev: boolean
 30:   canScrollNext: boolean
 31: } & CarouselProps
 32: 
 33: const CarouselContext = React.createContext<CarouselContextProps | null>(null)
 34: 
 35: function useCarousel() {
 36:   const context = React.useContext(CarouselContext)
 37: 
 38:   if (!context) {
 39:     throw new Error("useCarousel must be used within a <Carousel />")
 40:   }
 41: 
 42:   return context
 43: }
 44: 
 45: const Carousel = React.forwardRef<
 46:   HTMLDivElement,
 47:   React.HTMLAttributes<HTMLDivElement> & CarouselProps
 48: >(
 49:   (
 50:     {
 51:       orientation = "horizontal",
 52:       opts,
 53:       setApi,
 54:       plugins,
 55:       className,
 56:       children,
 57:       ...props
 58:     },
 59:     ref
 60:   ) => {
 61:     const [carouselRef, api] = useEmblaCarousel(
 62:       {
 63:         ...opts,
 64:         axis: orientation === "horizontal" ? "x" : "y"
 65:       },
 66:       plugins
 67:     )
 68:     const [canScrollPrev, setCanScrollPrev] = React.useState(false)
 69:     const [canScrollNext, setCanScrollNext] = React.useState(false)
 70: 
 71:     const onSelect = React.useCallback((api: CarouselApi) => {
 72:       if (!api) {
 73:         return
 74:       }
 75: 
 76:       setCanScrollPrev(api.canScrollPrev())
 77:       setCanScrollNext(api.canScrollNext())
 78:     }, [])
 79: 
 80:     const scrollPrev = React.useCallback(() => {
 81:       api?.scrollPrev()
 82:     }, [api])
 83: 
 84:     const scrollNext = React.useCallback(() => {
 85:       api?.scrollNext()
 86:     }, [api])
 87: 
 88:     const handleKeyDown = React.useCallback(
 89:       (event: React.KeyboardEvent<HTMLDivElement>) => {
 90:         if (event.key === "ArrowLeft") {
 91:           event.preventDefault()
 92:           scrollPrev()
 93:         } else if (event.key === "ArrowRight") {
 94:           event.preventDefault()
 95:           scrollNext()
 96:         }
 97:       },
 98:       [scrollPrev, scrollNext]
 99:     )
100: 
101:     React.useEffect(() => {
102:       if (!api || !setApi) {
103:         return
104:       }
105: 
106:       setApi(api)
107:     }, [api, setApi])
108: 
109:     React.useEffect(() => {
110:       if (!api) {
111:         return
112:       }
113: 
114:       onSelect(api)
115:       api.on("reInit", onSelect)
116:       api.on("select", onSelect)
117: 
118:       return () => {
119:         api?.off("select", onSelect)
120:       }
121:     }, [api, onSelect])
122: 
123:     return (
124:       <CarouselContext.Provider
125:         value={{
126:           carouselRef,
127:           api: api,
128:           opts,
129:           orientation:
130:             orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
131:           scrollPrev,
132:           scrollNext,
133:           canScrollPrev,
134:           canScrollNext
135:         }}
136:       >
137:         <div
138:           ref={ref}
139:           onKeyDownCapture={handleKeyDown}
140:           className={cn("relative", className)}
141:           role="region"
142:           aria-roledescription="carousel"
143:           {...props}
144:         >
145:           {children}
146:         </div>
147:       </CarouselContext.Provider>
148:     )
149:   }
150: )
151: Carousel.displayName = "Carousel"
152: 
153: const CarouselContent = React.forwardRef<
154:   HTMLDivElement,
155:   React.HTMLAttributes<HTMLDivElement>
156: >(({ className, ...props }, ref) => {
157:   const { carouselRef, orientation } = useCarousel()
158: 
159:   return (
160:     <div ref={carouselRef} className="overflow-hidden">
161:       <div
162:         ref={ref}
163:         className={cn(
164:           "flex",
165:           orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
166:           className
167:         )}
168:         {...props}
169:       />
170:     </div>
171:   )
172: })
173: CarouselContent.displayName = "CarouselContent"
174: 
175: const CarouselItem = React.forwardRef<
176:   HTMLDivElement,
177:   React.HTMLAttributes<HTMLDivElement>
178: >(({ className, ...props }, ref) => {
179:   const { orientation } = useCarousel()
180: 
181:   return (
182:     <div
183:       ref={ref}
184:       role="group"
185:       aria-roledescription="slide"
186:       className={cn(
187:         "min-w-0 shrink-0 grow-0 basis-full",
188:         orientation === "horizontal" ? "pl-4" : "pt-4",
189:         className
190:       )}
191:       {...props}
192:     />
193:   )
194: })
195: CarouselItem.displayName = "CarouselItem"
196: 
197: const CarouselPrevious = React.forwardRef<
198:   HTMLButtonElement,
199:   React.ComponentProps<typeof Button>
200: >(({ className, variant = "outline", size = "icon", ...props }, ref) => {
201:   const { orientation, scrollPrev, canScrollPrev } = useCarousel()
202: 
203:   return (
204:     <Button
205:       ref={ref}
206:       variant={variant}
207:       size={size}
208:       className={cn(
209:         "absolute  size-8 rounded-full",
210:         orientation === "horizontal"
211:           ? "-left-12 top-1/2 -translate-y-1/2"
212:           : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
213:         className
214:       )}
215:       disabled={!canScrollPrev}
216:       onClick={scrollPrev}
217:       {...props}
218:     >
219:       <ArrowLeft className="size-4" />
220:       <span className="sr-only">Previous slide</span>
221:     </Button>
222:   )
223: })
224: CarouselPrevious.displayName = "CarouselPrevious"
225: 
226: const CarouselNext = React.forwardRef<
227:   HTMLButtonElement,
228:   React.ComponentProps<typeof Button>
229: >(({ className, variant = "outline", size = "icon", ...props }, ref) => {
230:   const { orientation, scrollNext, canScrollNext } = useCarousel()
231: 
232:   return (
233:     <Button
234:       ref={ref}
235:       variant={variant}
236:       size={size}
237:       className={cn(
238:         "absolute size-8 rounded-full",
239:         orientation === "horizontal"
240:           ? "-right-12 top-1/2 -translate-y-1/2"
241:           : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
242:         className
243:       )}
244:       disabled={!canScrollNext}
245:       onClick={scrollNext}
246:       {...props}
247:     >
248:       <ArrowRight className="size-4" />
249:       <span className="sr-only">Next slide</span>
250:     </Button>
251:   )
252: })
253: CarouselNext.displayName = "CarouselNext"
254: 
255: export {
256:   type CarouselApi,
257:   Carousel,
258:   CarouselContent,
259:   CarouselItem,
260:   CarouselPrevious,
261:   CarouselNext
262: }
````

## File: components/ui/category-filter.tsx
````typescript
 1: "use client"
 2: 
 3: 
 4: 
 5: 
 6: 
 7: 
 8: 
 9: 
10: 
11: 
12: 
13: 
14: 
15: 
16: 
17: interface CategoryFilterProps {
18:   categories: string[]
19:   activeCategory: string | null
20:   onCategorySelect: (category: string | null) => void
21: }
22: 
23: export function CategoryFilter({
24:   categories,
25:   activeCategory,
26:   onCategorySelect
27: }: CategoryFilterProps) {
28:   return (
29:     <div className="mb-6 flex flex-wrap gap-2">
30:       <button
31:         className={`rounded-full px-4 py-2 text-sm font-medium transition-colors
32:           ${
33:             activeCategory === null
34:               ? "bg-primary text-primary-foreground"
35:               : "bg-accent/50 hover:bg-accent text-accent-foreground"
36:           }`}
37:         onClick={() => onCategorySelect(null)}
38:       >
39:         All
40:       </button>
41: 
42:       {categories.map(category => (
43:         <button
44:           key={category}
45:           className={`rounded-full px-4 py-2 text-sm font-medium transition-colors
46:             ${
47:               activeCategory === category
48:                 ? "bg-primary text-primary-foreground"
49:                 : "bg-accent/50 hover:bg-accent text-accent-foreground"
50:             }`}
51:           onClick={() => onCategorySelect(category)}
52:         >
53:           {category}
54:         </button>
55:       ))}
56:     </div>
57:   )
58: }
````

## File: components/ui/chart.tsx
````typescript
  1: "use client"
  2: 
  3: import * as React from "react"
  4: import * as RechartsPrimitive from "recharts"
  5: 
  6: import { cn } from "@/lib/utils"
  7: 
  8: 
  9: const THEMES = { light: "", dark: ".dark" } as const
 10: 
 11: export type ChartConfig = {
 12:   [k in string]: {
 13:     label?: React.ReactNode
 14:     icon?: React.ComponentType
 15:   } & (
 16:     | { color?: string; theme?: never }
 17:     | { color?: never; theme: Record<keyof typeof THEMES, string> }
 18:   )
 19: }
 20: 
 21: type ChartContextProps = {
 22:   config: ChartConfig
 23: }
 24: 
 25: const ChartContext = React.createContext<ChartContextProps | null>(null)
 26: 
 27: function useChart() {
 28:   const context = React.useContext(ChartContext)
 29: 
 30:   if (!context) {
 31:     throw new Error("useChart must be used within a <ChartContainer />")
 32:   }
 33: 
 34:   return context
 35: }
 36: 
 37: const ChartContainer = React.forwardRef<
 38:   HTMLDivElement,
 39:   React.ComponentProps<"div"> & {
 40:     config: ChartConfig
 41:     children: React.ComponentProps<
 42:       typeof RechartsPrimitive.ResponsiveContainer
 43:     >["children"]
 44:   }
 45: >(({ id, className, children, config, ...props }, ref) => {
 46:   const uniqueId = React.useId()
 47:   const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`
 48: 
 49:   return (
 50:     <ChartContext.Provider value={{ config }}>
 51:       <div
 52:         data-chart={chartId}
 53:         ref={ref}
 54:         className={cn(
 55:           "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
 56:           className
 57:         )}
 58:         {...props}
 59:       >
 60:         <ChartStyle id={chartId} config={config} />
 61:         <RechartsPrimitive.ResponsiveContainer>
 62:           {children}
 63:         </RechartsPrimitive.ResponsiveContainer>
 64:       </div>
 65:     </ChartContext.Provider>
 66:   )
 67: })
 68: ChartContainer.displayName = "Chart"
 69: 
 70: const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
 71:   const colorConfig = Object.entries(config).filter(
 72:     ([, config]) => config.theme || config.color
 73:   )
 74: 
 75:   if (!colorConfig.length) {
 76:     return null
 77:   }
 78: 
 79:   return (
 80:     <style
 81:       dangerouslySetInnerHTML={{
 82:         __html: Object.entries(THEMES)
 83:           .map(
 84:             ([theme, prefix]) => `
 85: ${prefix} [data-chart=${id}] {
 86: ${colorConfig
 87:   .map(([key, itemConfig]) => {
 88:     const color =
 89:       itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
 90:       itemConfig.color
 91:     return color ? `  --color-${key}: ${color};` : null
 92:   })
 93:   .join("\n")}
 94: }
 95: `
 96:           )
 97:           .join("\n")
 98:       }}
 99:     />
100:   )
101: }
102: 
103: const ChartTooltip = RechartsPrimitive.Tooltip
104: 
105: const ChartTooltipContent = React.forwardRef<
106:   HTMLDivElement,
107:   React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
108:     React.ComponentProps<"div"> & {
109:       hideLabel?: boolean
110:       hideIndicator?: boolean
111:       indicator?: "line" | "dot" | "dashed"
112:       nameKey?: string
113:       labelKey?: string
114:     }
115: >(
116:   (
117:     {
118:       active,
119:       payload,
120:       className,
121:       indicator = "dot",
122:       hideLabel = false,
123:       hideIndicator = false,
124:       label,
125:       labelFormatter,
126:       labelClassName,
127:       formatter,
128:       color,
129:       nameKey,
130:       labelKey
131:     },
132:     ref
133:   ) => {
134:     const { config } = useChart()
135: 
136:     const tooltipLabel = React.useMemo(() => {
137:       if (hideLabel || !payload?.length) {
138:         return null
139:       }
140: 
141:       const [item] = payload
142:       const key = `${labelKey || item.dataKey || item.name || "value"}`
143:       const itemConfig = getPayloadConfigFromPayload(config, item, key)
144:       const value =
145:         !labelKey && typeof label === "string"
146:           ? config[label as keyof typeof config]?.label || label
147:           : itemConfig?.label
148: 
149:       if (labelFormatter) {
150:         return (
151:           <div className={cn("font-medium", labelClassName)}>
152:             {labelFormatter(value, payload)}
153:           </div>
154:         )
155:       }
156: 
157:       if (!value) {
158:         return null
159:       }
160: 
161:       return <div className={cn("font-medium", labelClassName)}>{value}</div>
162:     }, [
163:       label,
164:       labelFormatter,
165:       payload,
166:       hideLabel,
167:       labelClassName,
168:       config,
169:       labelKey
170:     ])
171: 
172:     if (!active || !payload?.length) {
173:       return null
174:     }
175: 
176:     const nestLabel = payload.length === 1 && indicator !== "dot"
177: 
178:     return (
179:       <div
180:         ref={ref}
181:         className={cn(
182:           "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
183:           className
184:         )}
185:       >
186:         {!nestLabel ? tooltipLabel : null}
187:         <div className="grid gap-1.5">
188:           {payload.map((item, index) => {
189:             const key = `${nameKey || item.name || item.dataKey || "value"}`
190:             const itemConfig = getPayloadConfigFromPayload(config, item, key)
191:             const indicatorColor = color || item.payload.fill || item.color
192: 
193:             return (
194:               <div
195:                 key={item.dataKey}
196:                 className={cn(
197:                   "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:size-2.5",
198:                   indicator === "dot" && "items-center"
199:                 )}
200:               >
201:                 {formatter && item?.value !== undefined && item.name ? (
202:                   formatter(item.value, item.name, item, index, item.payload)
203:                 ) : (
204:                   <>
205:                     {itemConfig?.icon ? (
206:                       <itemConfig.icon />
207:                     ) : (
208:                       !hideIndicator && (
209:                         <div
210:                           className={cn(
211:                             "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
212:                             {
213:                               "h-2.5 w-2.5": indicator === "dot",
214:                               "w-1": indicator === "line",
215:                               "w-0 border-[1.5px] border-dashed bg-transparent":
216:                                 indicator === "dashed",
217:                               "my-0.5": nestLabel && indicator === "dashed"
218:                             }
219:                           )}
220:                           style={
221:                             {
222:                               "--color-bg": indicatorColor,
223:                               "--color-border": indicatorColor
224:                             } as React.CSSProperties
225:                           }
226:                         />
227:                       )
228:                     )}
229:                     <div
230:                       className={cn(
231:                         "flex flex-1 justify-between leading-none",
232:                         nestLabel ? "items-end" : "items-center"
233:                       )}
234:                     >
235:                       <div className="grid gap-1.5">
236:                         {nestLabel ? tooltipLabel : null}
237:                         <span className="text-muted-foreground">
238:                           {itemConfig?.label || item.name}
239:                         </span>
240:                       </div>
241:                       {item.value && (
242:                         <span className="text-foreground font-mono font-medium tabular-nums">
243:                           {item.value.toLocaleString()}
244:                         </span>
245:                       )}
246:                     </div>
247:                   </>
248:                 )}
249:               </div>
250:             )
251:           })}
252:         </div>
253:       </div>
254:     )
255:   }
256: )
257: ChartTooltipContent.displayName = "ChartTooltip"
258: 
259: const ChartLegend = RechartsPrimitive.Legend
260: 
261: const ChartLegendContent = React.forwardRef<
262:   HTMLDivElement,
263:   React.ComponentProps<"div"> &
264:     Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
265:       hideIcon?: boolean
266:       nameKey?: string
267:     }
268: >(
269:   (
270:     { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
271:     ref
272:   ) => {
273:     const { config } = useChart()
274: 
275:     if (!payload?.length) {
276:       return null
277:     }
278: 
279:     return (
280:       <div
281:         ref={ref}
282:         className={cn(
283:           "flex items-center justify-center gap-4",
284:           verticalAlign === "top" ? "pb-3" : "pt-3",
285:           className
286:         )}
287:       >
288:         {payload.map(item => {
289:           const key = `${nameKey || item.dataKey || "value"}`
290:           const itemConfig = getPayloadConfigFromPayload(config, item, key)
291: 
292:           return (
293:             <div
294:               key={item.value}
295:               className={cn(
296:                 "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:size-3"
297:               )}
298:             >
299:               {itemConfig?.icon && !hideIcon ? (
300:                 <itemConfig.icon />
301:               ) : (
302:                 <div
303:                   className="size-2 shrink-0 rounded-[2px]"
304:                   style={{
305:                     backgroundColor: item.color
306:                   }}
307:                 />
308:               )}
309:               {itemConfig?.label}
310:             </div>
311:           )
312:         })}
313:       </div>
314:     )
315:   }
316: )
317: ChartLegendContent.displayName = "ChartLegend"
318: 
319: 
320: function getPayloadConfigFromPayload(
321:   config: ChartConfig,
322:   payload: unknown,
323:   key: string
324: ) {
325:   if (typeof payload !== "object" || payload === null) {
326:     return undefined
327:   }
328: 
329:   const payloadPayload =
330:     "payload" in payload &&
331:     typeof payload.payload === "object" &&
332:     payload.payload !== null
333:       ? payload.payload
334:       : undefined
335: 
336:   let configLabelKey: string = key
337: 
338:   if (
339:     key in payload &&
340:     typeof payload[key as keyof typeof payload] === "string"
341:   ) {
342:     configLabelKey = payload[key as keyof typeof payload] as string
343:   } else if (
344:     payloadPayload &&
345:     key in payloadPayload &&
346:     typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
347:   ) {
348:     configLabelKey = payloadPayload[
349:       key as keyof typeof payloadPayload
350:     ] as string
351:   }
352: 
353:   return configLabelKey in config
354:     ? config[configLabelKey]
355:     : config[key as keyof typeof config]
356: }
357: 
358: export {
359:   ChartContainer,
360:   ChartTooltip,
361:   ChartTooltipContent,
362:   ChartLegend,
363:   ChartLegendContent,
364:   ChartStyle
365: }
````

## File: components/ui/checkbox.tsx
````typescript
 1: "use client"
 2: 
 3: import * as React from "react"
 4: import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
 5: import { Check } from "lucide-react"
 6: 
 7: import { cn } from "@/lib/utils"
 8: 
 9: const Checkbox = React.forwardRef<
10:   React.ElementRef<typeof CheckboxPrimitive.Root>,
11:   React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
12: >(({ className, ...props }, ref) => (
13:   <CheckboxPrimitive.Root
14:     ref={ref}
15:     className={cn(
16:       "border-primary ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground peer size-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
17:       className
18:     )}
19:     {...props}
20:   >
21:     <CheckboxPrimitive.Indicator
22:       className={cn("flex items-center justify-center text-current")}
23:     >
24:       <Check className="size-4" />
25:     </CheckboxPrimitive.Indicator>
26:   </CheckboxPrimitive.Root>
27: ))
28: Checkbox.displayName = CheckboxPrimitive.Root.displayName
29: 
30: export { Checkbox }
````

## File: components/ui/collapsible.tsx
````typescript
 1: "use client"
 2: 
 3: import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
 4: 
 5: const Collapsible = CollapsiblePrimitive.Root
 6: 
 7: const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger
 8: 
 9: const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent
10: 
11: export { Collapsible, CollapsibleTrigger, CollapsibleContent }
````

## File: components/ui/command.tsx
````typescript
  1: "use client"
  2: 
  3: import * as React from "react"
  4: import { type DialogProps } from "@radix-ui/react-dialog"
  5: import { Command as CommandPrimitive } from "cmdk"
  6: import { Search } from "lucide-react"
  7: 
  8: import { cn } from "@/lib/utils"
  9: import { Dialog, DialogContent } from "@/components/ui/dialog"
 10: 
 11: const Command = React.forwardRef<
 12:   React.ElementRef<typeof CommandPrimitive>,
 13:   React.ComponentPropsWithoutRef<typeof CommandPrimitive>
 14: >(({ className, ...props }, ref) => (
 15:   <CommandPrimitive
 16:     ref={ref}
 17:     className={cn(
 18:       "bg-popover text-popover-foreground flex size-full flex-col overflow-hidden rounded-md",
 19:       className
 20:     )}
 21:     {...props}
 22:   />
 23: ))
 24: Command.displayName = CommandPrimitive.displayName
 25: 
 26: const CommandDialog = ({ children, ...props }: DialogProps) => {
 27:   return (
 28:     <Dialog {...props}>
 29:       <DialogContent className="overflow-hidden p-0 shadow-lg">
 30:         <Command className="[&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:size-5">
 31:           {children}
 32:         </Command>
 33:       </DialogContent>
 34:     </Dialog>
 35:   )
 36: }
 37: 
 38: const CommandInput = React.forwardRef<
 39:   React.ElementRef<typeof CommandPrimitive.Input>,
 40:   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
 41: >(({ className, ...props }, ref) => (
 42:   <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
 43:     <Search className="mr-2 size-4 shrink-0 opacity-50" />
 44:     <CommandPrimitive.Input
 45:       ref={ref}
 46:       className={cn(
 47:         "placeholder:text-muted-foreground flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
 48:         className
 49:       )}
 50:       {...props}
 51:     />
 52:   </div>
 53: ))
 54: 
 55: CommandInput.displayName = CommandPrimitive.Input.displayName
 56: 
 57: const CommandList = React.forwardRef<
 58:   React.ElementRef<typeof CommandPrimitive.List>,
 59:   React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
 60: >(({ className, ...props }, ref) => (
 61:   <CommandPrimitive.List
 62:     ref={ref}
 63:     className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
 64:     {...props}
 65:   />
 66: ))
 67: 
 68: CommandList.displayName = CommandPrimitive.List.displayName
 69: 
 70: const CommandEmpty = React.forwardRef<
 71:   React.ElementRef<typeof CommandPrimitive.Empty>,
 72:   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
 73: >((props, ref) => (
 74:   <CommandPrimitive.Empty
 75:     ref={ref}
 76:     className="py-6 text-center text-sm"
 77:     {...props}
 78:   />
 79: ))
 80: 
 81: CommandEmpty.displayName = CommandPrimitive.Empty.displayName
 82: 
 83: const CommandGroup = React.forwardRef<
 84:   React.ElementRef<typeof CommandPrimitive.Group>,
 85:   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
 86: >(({ className, ...props }, ref) => (
 87:   <CommandPrimitive.Group
 88:     ref={ref}
 89:     className={cn(
 90:       "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
 91:       className
 92:     )}
 93:     {...props}
 94:   />
 95: ))
 96: 
 97: CommandGroup.displayName = CommandPrimitive.Group.displayName
 98: 
 99: const CommandSeparator = React.forwardRef<
100:   React.ElementRef<typeof CommandPrimitive.Separator>,
101:   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
102: >(({ className, ...props }, ref) => (
103:   <CommandPrimitive.Separator
104:     ref={ref}
105:     className={cn("bg-border -mx-1 h-px", className)}
106:     {...props}
107:   />
108: ))
109: CommandSeparator.displayName = CommandPrimitive.Separator.displayName
110: 
111: const CommandItem = React.forwardRef<
112:   React.ElementRef<typeof CommandPrimitive.Item>,
113:   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
114: >(({ className, ...props }, ref) => (
115:   <CommandPrimitive.Item
116:     ref={ref}
117:     className={cn(
118:       "data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
119:       className
120:     )}
121:     {...props}
122:   />
123: ))
124: 
125: CommandItem.displayName = CommandPrimitive.Item.displayName
126: 
127: const CommandShortcut = ({
128:   className,
129:   ...props
130: }: React.HTMLAttributes<HTMLSpanElement>) => {
131:   return (
132:     <span
133:       className={cn(
134:         "text-muted-foreground ml-auto text-xs tracking-widest",
135:         className
136:       )}
137:       {...props}
138:     />
139:   )
140: }
141: CommandShortcut.displayName = "CommandShortcut"
142: 
143: export {
144:   Command,
145:   CommandDialog,
146:   CommandInput,
147:   CommandList,
148:   CommandEmpty,
149:   CommandGroup,
150:   CommandItem,
151:   CommandShortcut,
152:   CommandSeparator
153: }
````

## File: components/ui/context-menu.tsx
````typescript
  1: "use client"
  2: 
  3: import * as React from "react"
  4: import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
  5: import { Check, ChevronRight, Circle } from "lucide-react"
  6: 
  7: import { cn } from "@/lib/utils"
  8: 
  9: const ContextMenu = ContextMenuPrimitive.Root
 10: 
 11: const ContextMenuTrigger = ContextMenuPrimitive.Trigger
 12: 
 13: const ContextMenuGroup = ContextMenuPrimitive.Group
 14: 
 15: const ContextMenuPortal = ContextMenuPrimitive.Portal
 16: 
 17: const ContextMenuSub = ContextMenuPrimitive.Sub
 18: 
 19: const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup
 20: 
 21: const ContextMenuSubTrigger = React.forwardRef<
 22:   React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
 23:   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
 24:     inset?: boolean
 25:   }
 26: >(({ className, inset, children, ...props }, ref) => (
 27:   <ContextMenuPrimitive.SubTrigger
 28:     ref={ref}
 29:     className={cn(
 30:       "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
 31:       inset && "pl-8",
 32:       className
 33:     )}
 34:     {...props}
 35:   >
 36:     {children}
 37:     <ChevronRight className="ml-auto size-4" />
 38:   </ContextMenuPrimitive.SubTrigger>
 39: ))
 40: ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName
 41: 
 42: const ContextMenuSubContent = React.forwardRef<
 43:   React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
 44:   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
 45: >(({ className, ...props }, ref) => (
 46:   <ContextMenuPrimitive.SubContent
 47:     ref={ref}
 48:     className={cn(
 49:       "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",
 50:       className
 51:     )}
 52:     {...props}
 53:   />
 54: ))
 55: ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName
 56: 
 57: const ContextMenuContent = React.forwardRef<
 58:   React.ElementRef<typeof ContextMenuPrimitive.Content>,
 59:   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
 60: >(({ className, ...props }, ref) => (
 61:   <ContextMenuPrimitive.Portal>
 62:     <ContextMenuPrimitive.Content
 63:       ref={ref}
 64:       className={cn(
 65:         "bg-popover text-popover-foreground animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",
 66:         className
 67:       )}
 68:       {...props}
 69:     />
 70:   </ContextMenuPrimitive.Portal>
 71: ))
 72: ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName
 73: 
 74: const ContextMenuItem = React.forwardRef<
 75:   React.ElementRef<typeof ContextMenuPrimitive.Item>,
 76:   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
 77:     inset?: boolean
 78:   }
 79: >(({ className, inset, ...props }, ref) => (
 80:   <ContextMenuPrimitive.Item
 81:     ref={ref}
 82:     className={cn(
 83:       "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
 84:       inset && "pl-8",
 85:       className
 86:     )}
 87:     {...props}
 88:   />
 89: ))
 90: ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName
 91: 
 92: const ContextMenuCheckboxItem = React.forwardRef<
 93:   React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
 94:   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
 95: >(({ className, children, checked, ...props }, ref) => (
 96:   <ContextMenuPrimitive.CheckboxItem
 97:     ref={ref}
 98:     className={cn(
 99:       "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
100:       className
101:     )}
102:     checked={checked}
103:     {...props}
104:   >
105:     <span className="absolute left-2 flex size-3.5 items-center justify-center">
106:       <ContextMenuPrimitive.ItemIndicator>
107:         <Check className="size-4" />
108:       </ContextMenuPrimitive.ItemIndicator>
109:     </span>
110:     {children}
111:   </ContextMenuPrimitive.CheckboxItem>
112: ))
113: ContextMenuCheckboxItem.displayName =
114:   ContextMenuPrimitive.CheckboxItem.displayName
115: 
116: const ContextMenuRadioItem = React.forwardRef<
117:   React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
118:   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
119: >(({ className, children, ...props }, ref) => (
120:   <ContextMenuPrimitive.RadioItem
121:     ref={ref}
122:     className={cn(
123:       "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
124:       className
125:     )}
126:     {...props}
127:   >
128:     <span className="absolute left-2 flex size-3.5 items-center justify-center">
129:       <ContextMenuPrimitive.ItemIndicator>
130:         <Circle className="size-2 fill-current" />
131:       </ContextMenuPrimitive.ItemIndicator>
132:     </span>
133:     {children}
134:   </ContextMenuPrimitive.RadioItem>
135: ))
136: ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName
137: 
138: const ContextMenuLabel = React.forwardRef<
139:   React.ElementRef<typeof ContextMenuPrimitive.Label>,
140:   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
141:     inset?: boolean
142:   }
143: >(({ className, inset, ...props }, ref) => (
144:   <ContextMenuPrimitive.Label
145:     ref={ref}
146:     className={cn(
147:       "text-foreground px-2 py-1.5 text-sm font-semibold",
148:       inset && "pl-8",
149:       className
150:     )}
151:     {...props}
152:   />
153: ))
154: ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName
155: 
156: const ContextMenuSeparator = React.forwardRef<
157:   React.ElementRef<typeof ContextMenuPrimitive.Separator>,
158:   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
159: >(({ className, ...props }, ref) => (
160:   <ContextMenuPrimitive.Separator
161:     ref={ref}
162:     className={cn("bg-border -mx-1 my-1 h-px", className)}
163:     {...props}
164:   />
165: ))
166: ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName
167: 
168: const ContextMenuShortcut = ({
169:   className,
170:   ...props
171: }: React.HTMLAttributes<HTMLSpanElement>) => {
172:   return (
173:     <span
174:       className={cn(
175:         "text-muted-foreground ml-auto text-xs tracking-widest",
176:         className
177:       )}
178:       {...props}
179:     />
180:   )
181: }
182: ContextMenuShortcut.displayName = "ContextMenuShortcut"
183: 
184: export {
185:   ContextMenu,
186:   ContextMenuTrigger,
187:   ContextMenuContent,
188:   ContextMenuItem,
189:   ContextMenuCheckboxItem,
190:   ContextMenuRadioItem,
191:   ContextMenuLabel,
192:   ContextMenuSeparator,
193:   ContextMenuShortcut,
194:   ContextMenuGroup,
195:   ContextMenuPortal,
196:   ContextMenuSub,
197:   ContextMenuSubContent,
198:   ContextMenuSubTrigger,
199:   ContextMenuRadioGroup
200: }
````

## File: components/ui/dialog.tsx
````typescript
  1: "use client"
  2: 
  3: import * as React from "react"
  4: import * as DialogPrimitive from "@radix-ui/react-dialog"
  5: import { X } from "lucide-react"
  6: 
  7: import { cn } from "@/lib/utils"
  8: 
  9: const Dialog = DialogPrimitive.Root
 10: 
 11: const DialogTrigger = DialogPrimitive.Trigger
 12: 
 13: const DialogPortal = DialogPrimitive.Portal
 14: 
 15: const DialogClose = DialogPrimitive.Close
 16: 
 17: const DialogOverlay = React.forwardRef<
 18:   React.ElementRef<typeof DialogPrimitive.Overlay>,
 19:   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
 20: >(({ className, ...props }, ref) => (
 21:   <DialogPrimitive.Overlay
 22:     ref={ref}
 23:     className={cn(
 24:       "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  fixed inset-0 z-50 bg-black/80",
 25:       className
 26:     )}
 27:     {...props}
 28:   />
 29: ))
 30: DialogOverlay.displayName = DialogPrimitive.Overlay.displayName
 31: 
 32: const DialogContent = React.forwardRef<
 33:   React.ElementRef<typeof DialogPrimitive.Content>,
 34:   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
 35: >(({ className, children, ...props }, ref) => (
 36:   <DialogPortal>
 37:     <DialogOverlay />
 38:     <DialogPrimitive.Content
 39:       ref={ref}
 40:       className={cn(
 41:         "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg",
 42:         className
 43:       )}
 44:       {...props}
 45:     >
 46:       {children}
 47:       <DialogPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
 48:         <X className="size-4" />
 49:         <span className="sr-only">Close</span>
 50:       </DialogPrimitive.Close>
 51:     </DialogPrimitive.Content>
 52:   </DialogPortal>
 53: ))
 54: DialogContent.displayName = DialogPrimitive.Content.displayName
 55: 
 56: const DialogHeader = ({
 57:   className,
 58:   ...props
 59: }: React.HTMLAttributes<HTMLDivElement>) => (
 60:   <div
 61:     className={cn(
 62:       "flex flex-col space-y-1.5 text-center sm:text-left",
 63:       className
 64:     )}
 65:     {...props}
 66:   />
 67: )
 68: DialogHeader.displayName = "DialogHeader"
 69: 
 70: const DialogFooter = ({
 71:   className,
 72:   ...props
 73: }: React.HTMLAttributes<HTMLDivElement>) => (
 74:   <div
 75:     className={cn(
 76:       "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
 77:       className
 78:     )}
 79:     {...props}
 80:   />
 81: )
 82: DialogFooter.displayName = "DialogFooter"
 83: 
 84: const DialogTitle = React.forwardRef<
 85:   React.ElementRef<typeof DialogPrimitive.Title>,
 86:   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
 87: >(({ className, ...props }, ref) => (
 88:   <DialogPrimitive.Title
 89:     ref={ref}
 90:     className={cn(
 91:       "text-lg font-semibold leading-none tracking-tight",
 92:       className
 93:     )}
 94:     {...props}
 95:   />
 96: ))
 97: DialogTitle.displayName = DialogPrimitive.Title.displayName
 98: 
 99: const DialogDescription = React.forwardRef<
100:   React.ElementRef<typeof DialogPrimitive.Description>,
101:   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
102: >(({ className, ...props }, ref) => (
103:   <DialogPrimitive.Description
104:     ref={ref}
105:     className={cn("text-muted-foreground text-sm", className)}
106:     {...props}
107:   />
108: ))
109: DialogDescription.displayName = DialogPrimitive.Description.displayName
110: 
111: export {
112:   Dialog,
113:   DialogPortal,
114:   DialogOverlay,
115:   DialogClose,
116:   DialogTrigger,
117:   DialogContent,
118:   DialogHeader,
119:   DialogFooter,
120:   DialogTitle,
121:   DialogDescription
122: }
````

## File: components/ui/drawer.tsx
````typescript
  1: "use client"
  2: 
  3: import * as React from "react"
  4: import { Drawer as DrawerPrimitive } from "vaul"
  5: 
  6: import { cn } from "@/lib/utils"
  7: 
  8: const Drawer = ({
  9:   shouldScaleBackground = true,
 10:   ...props
 11: }: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
 12:   <DrawerPrimitive.Root
 13:     shouldScaleBackground={shouldScaleBackground}
 14:     {...props}
 15:   />
 16: )
 17: Drawer.displayName = "Drawer"
 18: 
 19: const DrawerTrigger = DrawerPrimitive.Trigger
 20: 
 21: const DrawerPortal = DrawerPrimitive.Portal
 22: 
 23: const DrawerClose = DrawerPrimitive.Close
 24: 
 25: const DrawerOverlay = React.forwardRef<
 26:   React.ElementRef<typeof DrawerPrimitive.Overlay>,
 27:   React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
 28: >(({ className, ...props }, ref) => (
 29:   <DrawerPrimitive.Overlay
 30:     ref={ref}
 31:     className={cn("fixed inset-0 z-50 bg-black/80", className)}
 32:     {...props}
 33:   />
 34: ))
 35: DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName
 36: 
 37: const DrawerContent = React.forwardRef<
 38:   React.ElementRef<typeof DrawerPrimitive.Content>,
 39:   React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
 40: >(({ className, children, ...props }, ref) => (
 41:   <DrawerPortal>
 42:     <DrawerOverlay />
 43:     <DrawerPrimitive.Content
 44:       ref={ref}
 45:       className={cn(
 46:         "bg-background fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border",
 47:         className
 48:       )}
 49:       {...props}
 50:     >
 51:       <div className="bg-muted mx-auto mt-4 h-2 w-[100px] rounded-full" />
 52:       {children}
 53:     </DrawerPrimitive.Content>
 54:   </DrawerPortal>
 55: ))
 56: DrawerContent.displayName = "DrawerContent"
 57: 
 58: const DrawerHeader = ({
 59:   className,
 60:   ...props
 61: }: React.HTMLAttributes<HTMLDivElement>) => (
 62:   <div
 63:     className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
 64:     {...props}
 65:   />
 66: )
 67: DrawerHeader.displayName = "DrawerHeader"
 68: 
 69: const DrawerFooter = ({
 70:   className,
 71:   ...props
 72: }: React.HTMLAttributes<HTMLDivElement>) => (
 73:   <div
 74:     className={cn("mt-auto flex flex-col gap-2 p-4", className)}
 75:     {...props}
 76:   />
 77: )
 78: DrawerFooter.displayName = "DrawerFooter"
 79: 
 80: const DrawerTitle = React.forwardRef<
 81:   React.ElementRef<typeof DrawerPrimitive.Title>,
 82:   React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
 83: >(({ className, ...props }, ref) => (
 84:   <DrawerPrimitive.Title
 85:     ref={ref}
 86:     className={cn(
 87:       "text-lg font-semibold leading-none tracking-tight",
 88:       className
 89:     )}
 90:     {...props}
 91:   />
 92: ))
 93: DrawerTitle.displayName = DrawerPrimitive.Title.displayName
 94: 
 95: const DrawerDescription = React.forwardRef<
 96:   React.ElementRef<typeof DrawerPrimitive.Description>,
 97:   React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
 98: >(({ className, ...props }, ref) => (
 99:   <DrawerPrimitive.Description
100:     ref={ref}
101:     className={cn("text-muted-foreground text-sm", className)}
102:     {...props}
103:   />
104: ))
105: DrawerDescription.displayName = DrawerPrimitive.Description.displayName
106: 
107: export {
108:   Drawer,
109:   DrawerPortal,
110:   DrawerOverlay,
111:   DrawerTrigger,
112:   DrawerClose,
113:   DrawerContent,
114:   DrawerHeader,
115:   DrawerFooter,
116:   DrawerTitle,
117:   DrawerDescription
118: }
````

## File: components/ui/dropdown-menu.tsx
````typescript
  1: "use client"
  2: 
  3: import * as React from "react"
  4: import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
  5: import { Check, ChevronRight, Circle } from "lucide-react"
  6: 
  7: import { cn } from "@/lib/utils"
  8: 
  9: const DropdownMenu = DropdownMenuPrimitive.Root
 10: 
 11: const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
 12: 
 13: const DropdownMenuGroup = DropdownMenuPrimitive.Group
 14: 
 15: const DropdownMenuPortal = DropdownMenuPrimitive.Portal
 16: 
 17: const DropdownMenuSub = DropdownMenuPrimitive.Sub
 18: 
 19: const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup
 20: 
 21: const DropdownMenuSubTrigger = React.forwardRef<
 22:   React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
 23:   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
 24:     inset?: boolean
 25:   }
 26: >(({ className, inset, children, ...props }, ref) => (
 27:   <DropdownMenuPrimitive.SubTrigger
 28:     ref={ref}
 29:     className={cn(
 30:       "focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
 31:       inset && "pl-8",
 32:       className
 33:     )}
 34:     {...props}
 35:   >
 36:     {children}
 37:     <ChevronRight className="ml-auto" />
 38:   </DropdownMenuPrimitive.SubTrigger>
 39: ))
 40: DropdownMenuSubTrigger.displayName =
 41:   DropdownMenuPrimitive.SubTrigger.displayName
 42: 
 43: const DropdownMenuSubContent = React.forwardRef<
 44:   React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
 45:   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
 46: >(({ className, ...props }, ref) => (
 47:   <DropdownMenuPrimitive.SubContent
 48:     ref={ref}
 49:     className={cn(
 50:       "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
 51:       className
 52:     )}
 53:     {...props}
 54:   />
 55: ))
 56: DropdownMenuSubContent.displayName =
 57:   DropdownMenuPrimitive.SubContent.displayName
 58: 
 59: const DropdownMenuContent = React.forwardRef<
 60:   React.ElementRef<typeof DropdownMenuPrimitive.Content>,
 61:   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
 62: >(({ className, sideOffset = 4, ...props }, ref) => (
 63:   <DropdownMenuPrimitive.Portal>
 64:     <DropdownMenuPrimitive.Content
 65:       ref={ref}
 66:       sideOffset={sideOffset}
 67:       className={cn(
 68:         "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",
 69:         className
 70:       )}
 71:       {...props}
 72:     />
 73:   </DropdownMenuPrimitive.Portal>
 74: ))
 75: DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName
 76: 
 77: const DropdownMenuItem = React.forwardRef<
 78:   React.ElementRef<typeof DropdownMenuPrimitive.Item>,
 79:   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
 80:     inset?: boolean
 81:   }
 82: >(({ className, inset, ...props }, ref) => (
 83:   <DropdownMenuPrimitive.Item
 84:     ref={ref}
 85:     className={cn(
 86:       "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
 87:       inset && "pl-8",
 88:       className
 89:     )}
 90:     {...props}
 91:   />
 92: ))
 93: DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName
 94: 
 95: const DropdownMenuCheckboxItem = React.forwardRef<
 96:   React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
 97:   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
 98: >(({ className, children, checked, ...props }, ref) => (
 99:   <DropdownMenuPrimitive.CheckboxItem
100:     ref={ref}
101:     className={cn(
102:       "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
103:       className
104:     )}
105:     checked={checked}
106:     {...props}
107:   >
108:     <span className="absolute left-2 flex size-3.5 items-center justify-center">
109:       <DropdownMenuPrimitive.ItemIndicator>
110:         <Check className="size-4" />
111:       </DropdownMenuPrimitive.ItemIndicator>
112:     </span>
113:     {children}
114:   </DropdownMenuPrimitive.CheckboxItem>
115: ))
116: DropdownMenuCheckboxItem.displayName =
117:   DropdownMenuPrimitive.CheckboxItem.displayName
118: 
119: const DropdownMenuRadioItem = React.forwardRef<
120:   React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
121:   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
122: >(({ className, children, ...props }, ref) => (
123:   <DropdownMenuPrimitive.RadioItem
124:     ref={ref}
125:     className={cn(
126:       "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
127:       className
128:     )}
129:     {...props}
130:   >
131:     <span className="absolute left-2 flex size-3.5 items-center justify-center">
132:       <DropdownMenuPrimitive.ItemIndicator>
133:         <Circle className="size-2 fill-current" />
134:       </DropdownMenuPrimitive.ItemIndicator>
135:     </span>
136:     {children}
137:   </DropdownMenuPrimitive.RadioItem>
138: ))
139: DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName
140: 
141: const DropdownMenuLabel = React.forwardRef<
142:   React.ElementRef<typeof DropdownMenuPrimitive.Label>,
143:   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
144:     inset?: boolean
145:   }
146: >(({ className, inset, ...props }, ref) => (
147:   <DropdownMenuPrimitive.Label
148:     ref={ref}
149:     className={cn(
150:       "px-2 py-1.5 text-sm font-semibold",
151:       inset && "pl-8",
152:       className
153:     )}
154:     {...props}
155:   />
156: ))
157: DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName
158: 
159: const DropdownMenuSeparator = React.forwardRef<
160:   React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
161:   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
162: >(({ className, ...props }, ref) => (
163:   <DropdownMenuPrimitive.Separator
164:     ref={ref}
165:     className={cn("bg-muted -mx-1 my-1 h-px", className)}
166:     {...props}
167:   />
168: ))
169: DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName
170: 
171: const DropdownMenuShortcut = ({
172:   className,
173:   ...props
174: }: React.HTMLAttributes<HTMLSpanElement>) => {
175:   return (
176:     <span
177:       className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
178:       {...props}
179:     />
180:   )
181: }
182: DropdownMenuShortcut.displayName = "DropdownMenuShortcut"
183: 
184: export {
185:   DropdownMenu,
186:   DropdownMenuTrigger,
187:   DropdownMenuContent,
188:   DropdownMenuItem,
189:   DropdownMenuCheckboxItem,
190:   DropdownMenuRadioItem,
191:   DropdownMenuLabel,
192:   DropdownMenuSeparator,
193:   DropdownMenuShortcut,
194:   DropdownMenuGroup,
195:   DropdownMenuPortal,
196:   DropdownMenuSub,
197:   DropdownMenuSubContent,
198:   DropdownMenuSubTrigger,
199:   DropdownMenuRadioGroup
200: }
````

## File: components/ui/form.tsx
````typescript
  1: "use client"
  2: 
  3: import * as React from "react"
  4: import * as LabelPrimitive from "@radix-ui/react-label"
  5: import { Slot } from "@radix-ui/react-slot"
  6: import {
  7:   Controller,
  8:   ControllerProps,
  9:   FieldPath,
 10:   FieldValues,
 11:   FormProvider,
 12:   useFormContext
 13: } from "react-hook-form"
 14: 
 15: import { cn } from "@/lib/utils"
 16: import { Label } from "@/components/ui/label"
 17: 
 18: const Form = FormProvider
 19: 
 20: type FormFieldContextValue<
 21:   TFieldValues extends FieldValues = FieldValues,
 22:   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
 23: > = {
 24:   name: TName
 25: }
 26: 
 27: const FormFieldContext = React.createContext<FormFieldContextValue>(
 28:   {} as FormFieldContextValue
 29: )
 30: 
 31: const FormField = <
 32:   TFieldValues extends FieldValues = FieldValues,
 33:   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
 34: >({
 35:   ...props
 36: }: ControllerProps<TFieldValues, TName>) => {
 37:   return (
 38:     <FormFieldContext.Provider value={{ name: props.name }}>
 39:       <Controller {...props} />
 40:     </FormFieldContext.Provider>
 41:   )
 42: }
 43: 
 44: const useFormField = () => {
 45:   const fieldContext = React.useContext(FormFieldContext)
 46:   const itemContext = React.useContext(FormItemContext)
 47:   const { getFieldState, formState } = useFormContext()
 48: 
 49:   const fieldState = getFieldState(fieldContext.name, formState)
 50: 
 51:   if (!fieldContext) {
 52:     throw new Error("useFormField should be used within <FormField>")
 53:   }
 54: 
 55:   const { id } = itemContext
 56: 
 57:   return {
 58:     id,
 59:     name: fieldContext.name,
 60:     formItemId: `${id}-form-item`,
 61:     formDescriptionId: `${id}-form-item-description`,
 62:     formMessageId: `${id}-form-item-message`,
 63:     ...fieldState
 64:   }
 65: }
 66: 
 67: type FormItemContextValue = {
 68:   id: string
 69: }
 70: 
 71: const FormItemContext = React.createContext<FormItemContextValue>(
 72:   {} as FormItemContextValue
 73: )
 74: 
 75: const FormItem = React.forwardRef<
 76:   HTMLDivElement,
 77:   React.HTMLAttributes<HTMLDivElement>
 78: >(({ className, ...props }, ref) => {
 79:   const id = React.useId()
 80: 
 81:   return (
 82:     <FormItemContext.Provider value={{ id }}>
 83:       <div ref={ref} className={cn("space-y-2", className)} {...props} />
 84:     </FormItemContext.Provider>
 85:   )
 86: })
 87: FormItem.displayName = "FormItem"
 88: 
 89: const FormLabel = React.forwardRef<
 90:   React.ElementRef<typeof LabelPrimitive.Root>,
 91:   React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
 92: >(({ className, ...props }, ref) => {
 93:   const { error, formItemId } = useFormField()
 94: 
 95:   return (
 96:     <Label
 97:       ref={ref}
 98:       className={cn(error && "text-destructive", className)}
 99:       htmlFor={formItemId}
100:       {...props}
101:     />
102:   )
103: })
104: FormLabel.displayName = "FormLabel"
105: 
106: const FormControl = React.forwardRef<
107:   React.ElementRef<typeof Slot>,
108:   React.ComponentPropsWithoutRef<typeof Slot>
109: >(({ ...props }, ref) => {
110:   const { error, formItemId, formDescriptionId, formMessageId } = useFormField()
111: 
112:   return (
113:     <Slot
114:       ref={ref}
115:       id={formItemId}
116:       aria-describedby={
117:         !error
118:           ? `${formDescriptionId}`
119:           : `${formDescriptionId} ${formMessageId}`
120:       }
121:       aria-invalid={!!error}
122:       {...props}
123:     />
124:   )
125: })
126: FormControl.displayName = "FormControl"
127: 
128: const FormDescription = React.forwardRef<
129:   HTMLParagraphElement,
130:   React.HTMLAttributes<HTMLParagraphElement>
131: >(({ className, ...props }, ref) => {
132:   const { formDescriptionId } = useFormField()
133: 
134:   return (
135:     <p
136:       ref={ref}
137:       id={formDescriptionId}
138:       className={cn("text-muted-foreground text-sm", className)}
139:       {...props}
140:     />
141:   )
142: })
143: FormDescription.displayName = "FormDescription"
144: 
145: const FormMessage = React.forwardRef<
146:   HTMLParagraphElement,
147:   React.HTMLAttributes<HTMLParagraphElement>
148: >(({ className, children, ...props }, ref) => {
149:   const { error, formMessageId } = useFormField()
150:   const body = error ? String(error?.message) : children
151: 
152:   if (!body) {
153:     return null
154:   }
155: 
156:   return (
157:     <p
158:       ref={ref}
159:       id={formMessageId}
160:       className={cn("text-destructive text-sm font-medium", className)}
161:       {...props}
162:     >
163:       {body}
164:     </p>
165:   )
166: })
167: FormMessage.displayName = "FormMessage"
168: 
169: export {
170:   useFormField,
171:   Form,
172:   FormItem,
173:   FormLabel,
174:   FormControl,
175:   FormDescription,
176:   FormMessage,
177:   FormField
178: }
````

## File: components/ui/header-with-motion.tsx
````typescript
  1: "use client"
  2: 
  3: import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
  4: import { Menu } from "lucide-react"
  5: import { motion } from "framer-motion"
  6: import Link from "next/link"
  7: import Image from "next/image"
  8: import { ThemeToggle } from "@/components/ui/theme-toggle"
  9: import { useState } from "react"
 10: 
 11: interface HeaderWithMotionProps {
 12:   navLinks: { href: string; label: string }[]
 13: }
 14: 
 15: export function HeaderWithMotion({ navLinks }: HeaderWithMotionProps) {
 16:   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
 17: 
 18:   return (
 19:     <header className="bg-background sticky top-0 z-50 shadow-sm">
 20:       <div className="container mx-auto flex items-center justify-between p-4">
 21:         {}
 22:         <motion.div
 23:           initial={{ opacity: 0, x: -20 }}
 24:           animate={{ opacity: 1, x: 0 }}
 25:           transition={{ duration: 0.5 }}
 26:           className="flex items-center space-x-2"
 27:         >
 28:           <Link href="/" className="flex items-center space-x-2">
 29:             <div className="relative size-8">
 30:               <Image
 31:                 src="/kannadakali.png"
 32:                 alt="LearnKannada Logo"
 33:                 fill
 34:                 className="object-contain"
 35:               />
 36:             </div>
 37:             <span className="text-xl font-bold">LearnKannada</span>
 38:           </Link>
 39:         </motion.div>
 40: 
 41:         {}
 42:         <nav className="hidden items-center space-x-4 md:flex">
 43:           {navLinks.map(link => (
 44:             <motion.div
 45:               key={link.href}
 46:               whileHover={{ scale: 1.05 }}
 47:               whileTap={{ scale: 0.95 }}
 48:             >
 49:               <Link
 50:                 href={link.href}
 51:                 className="text-muted-foreground hover:text-foreground rounded-full px-3 py-1 transition"
 52:               >
 53:                 {link.label}
 54:               </Link>
 55:             </motion.div>
 56:           ))}
 57:         </nav>
 58: 
 59:         {}
 60:         <div className="flex items-center space-x-4">
 61:           <SignedIn>
 62:             <UserButton />
 63:           </SignedIn>
 64:           <SignedOut>
 65:             <Link href="/login">
 66:               <motion.div
 67:                 whileHover={{ scale: 1.05 }}
 68:                 whileTap={{ scale: 0.95 }}
 69:               >
 70:                 <span className="text-muted-foreground hover:text-foreground">
 71:                   Sign In
 72:                 </span>
 73:               </motion.div>
 74:             </Link>
 75:           </SignedOut>
 76:           <ThemeToggle />
 77:           {}
 78:           <motion.div
 79:             className="md:hidden"
 80:             whileHover={{ scale: 1.05 }}
 81:             whileTap={{ scale: 0.95 }}
 82:           >
 83:             <button
 84:               className="p-2"
 85:               aria-label="Toggle menu"
 86:               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
 87:             >
 88:               <Menu className="size-6" />
 89:             </button>
 90:           </motion.div>
 91:         </div>
 92:       </div>
 93: 
 94:       {}
 95:       {isMobileMenuOpen && (
 96:         <motion.div
 97:           initial={{ opacity: 0, height: 0 }}
 98:           animate={{ opacity: 1, height: "auto" }}
 99:           exit={{ opacity: 0, height: 0 }}
100:           className="bg-background border-t md:hidden"
101:         >
102:           <div className="container mx-auto py-4">
103:             <nav className="flex flex-col space-y-4">
104:               {navLinks.map(link => (
105:                 <Link
106:                   key={link.href}
107:                   href={link.href}
108:                   className="text-muted-foreground hover:text-foreground px-3 py-2"
109:                   onClick={() => setIsMobileMenuOpen(false)}
110:                 >
111:                   {link.label}
112:                 </Link>
113:               ))}
114:             </nav>
115:           </div>
116:         </motion.div>
117:       )}
118:     </header>
119:   )
120: }
````

## File: components/ui/hover-card.tsx
````typescript
 1: "use client"
 2: 
 3: import * as React from "react"
 4: import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
 5: 
 6: import { cn } from "@/lib/utils"
 7: 
 8: const HoverCard = HoverCardPrimitive.Root
 9: 
10: const HoverCardTrigger = HoverCardPrimitive.Trigger
11: 
12: const HoverCardContent = React.forwardRef<
13:   React.ElementRef<typeof HoverCardPrimitive.Content>,
14:   React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
15: >(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
16:   <HoverCardPrimitive.Content
17:     ref={ref}
18:     align={align}
19:     sideOffset={sideOffset}
20:     className={cn(
21:       "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 rounded-md border p-4 shadow-md outline-none",
22:       className
23:     )}
24:     {...props}
25:   />
26: ))
27: HoverCardContent.displayName = HoverCardPrimitive.Content.displayName
28: 
29: export { HoverCard, HoverCardTrigger, HoverCardContent }
````

## File: components/ui/input-otp.tsx
````typescript
 1: "use client"
 2: 
 3: import * as React from "react"
 4: import { OTPInput, OTPInputContext } from "input-otp"
 5: import { Dot } from "lucide-react"
 6: 
 7: import { cn } from "@/lib/utils"
 8: 
 9: const InputOTP = React.forwardRef<
10:   React.ElementRef<typeof OTPInput>,
11:   React.ComponentPropsWithoutRef<typeof OTPInput>
12: >(({ className, containerClassName, ...props }, ref) => (
13:   <OTPInput
14:     ref={ref}
15:     containerClassName={cn(
16:       "flex items-center gap-2 has-[:disabled]:opacity-50",
17:       containerClassName
18:     )}
19:     className={cn("disabled:cursor-not-allowed", className)}
20:     {...props}
21:   />
22: ))
23: InputOTP.displayName = "InputOTP"
24: 
25: const InputOTPGroup = React.forwardRef<
26:   React.ElementRef<"div">,
27:   React.ComponentPropsWithoutRef<"div">
28: >(({ className, ...props }, ref) => (
29:   <div ref={ref} className={cn("flex items-center", className)} {...props} />
30: ))
31: InputOTPGroup.displayName = "InputOTPGroup"
32: 
33: const InputOTPSlot = React.forwardRef<
34:   React.ElementRef<"div">,
35:   React.ComponentPropsWithoutRef<"div"> & { index: number }
36: >(({ index, className, ...props }, ref) => {
37:   const inputOTPContext = React.useContext(OTPInputContext)
38:   const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
39: 
40:   return (
41:     <div
42:       ref={ref}
43:       className={cn(
44:         "border-input relative flex size-10 items-center justify-center border-y border-r text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
45:         isActive && "ring-ring ring-offset-background z-10 ring-2",
46:         className
47:       )}
48:       {...props}
49:     >
50:       {char}
51:       {hasFakeCaret && (
52:         <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
53:           <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
54:         </div>
55:       )}
56:     </div>
57:   )
58: })
59: InputOTPSlot.displayName = "InputOTPSlot"
60: 
61: const InputOTPSeparator = React.forwardRef<
62:   React.ElementRef<"div">,
63:   React.ComponentPropsWithoutRef<"div">
64: >(({ ...props }, ref) => (
65:   <div ref={ref} role="separator" {...props}>
66:     <Dot />
67:   </div>
68: ))
69: InputOTPSeparator.displayName = "InputOTPSeparator"
70: 
71: export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
````

## File: components/ui/input.tsx
````typescript
 1: import * as React from "react"
 2: 
 3: import { cn } from "@/lib/utils"
 4: 
 5: const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
 6:   ({ className, type, ...props }, ref) => {
 7:     return (
 8:       <input
 9:         type={type}
10:         className={cn(
11:           "border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
12:           className
13:         )}
14:         ref={ref}
15:         {...props}
16:       />
17:     )
18:   }
19: )
20: Input.displayName = "Input"
21: 
22: export { Input }
````

## File: components/ui/label.tsx
````typescript
 1: "use client"
 2: 
 3: import * as React from "react"
 4: import * as LabelPrimitive from "@radix-ui/react-label"
 5: import { cva, type VariantProps } from "class-variance-authority"
 6: 
 7: import { cn } from "@/lib/utils"
 8: 
 9: const labelVariants = cva(
10:   "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
11: )
12: 
13: const Label = React.forwardRef<
14:   React.ElementRef<typeof LabelPrimitive.Root>,
15:   React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
16:     VariantProps<typeof labelVariants>
17: >(({ className, ...props }, ref) => (
18:   <LabelPrimitive.Root
19:     ref={ref}
20:     className={cn(labelVariants(), className)}
21:     {...props}
22:   />
23: ))
24: Label.displayName = LabelPrimitive.Root.displayName
25: 
26: export { Label }
````

## File: components/ui/leaderboard-section.tsx
````typescript
  1: "use client"
  2: 
  3: import { useEffect, useState } from "react"
  4: import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
  5: import {
  6:   Select,
  7:   SelectContent,
  8:   SelectItem,
  9:   SelectTrigger,
 10:   SelectValue
 11: } from "@/components/ui/select"
 12: import { Skeleton } from "@/components/ui/skeleton"
 13: import { Separator } from "@/components/ui/separator"
 14: import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
 15: import { Badge } from "@/components/ui/badge"
 16: import { Trophy } from "lucide-react"
 17: import { cn } from "@/lib/utils"
 18: import {
 19:   getLeaderboardAction,
 20:   getLeaderboardCategoriesAction
 21: } from "@/actions/db/leaderboard-actions"
 22: import { motion } from "framer-motion"
 23: 
 24: interface LeaderboardEntry {
 25:   userId: string
 26:   displayName: string
 27:   profileImageUrl: string | null
 28:   totalAttempts: number
 29:   correctAnswers: number
 30:   accuracyPercentage: number
 31:   quizzesCompleted: number
 32:   rank: number
 33:   isCurrentUser: boolean
 34: }
 35: 
 36: export function LeaderboardSection() {
 37:   const [loading, setLoading] = useState(true)
 38:   const [category, setCategory] = useState<string>("all")
 39:   const [categories, setCategories] = useState<string[]>([])
 40:   const [leaders, setLeaders] = useState<LeaderboardEntry[]>([])
 41:   const [currentUserRank, setCurrentUserRank] = useState<
 42:     LeaderboardEntry | undefined
 43:   >()
 44: 
 45: 
 46:   const loadLeaderboard = async (selectedCategory?: string) => {
 47:     setLoading(true)
 48:     try {
 49: 
 50:       const categoryToUse =
 51:         selectedCategory === "all" ? undefined : selectedCategory
 52:       const result = await getLeaderboardAction(categoryToUse)
 53:       if (result.isSuccess && result.data) {
 54:         setLeaders(result.data.leaders)
 55:         setCurrentUserRank(result.data.currentUserRank)
 56:       }
 57:     } catch (error) {
 58:       console.error("Error loading leaderboard:", error)
 59:     } finally {
 60:       setLoading(false)
 61:     }
 62:   }
 63: 
 64: 
 65:   const loadCategories = async () => {
 66:     try {
 67:       const result = await getLeaderboardCategoriesAction()
 68:       if (result.isSuccess && result.data) {
 69:         setCategories(result.data)
 70:       }
 71:     } catch (error) {
 72:       console.error("Error loading categories:", error)
 73:     }
 74:   }
 75: 
 76:   useEffect(() => {
 77:     loadCategories()
 78:     loadLeaderboard("all")
 79:   }, [])
 80: 
 81: 
 82:   useEffect(() => {
 83:     console.log("LEADERBOARD DEBUG: leaders array", leaders)
 84:   }, [leaders])
 85: 
 86: 
 87:   useEffect(() => {
 88:     loadLeaderboard(category)
 89:   }, [category])
 90: 
 91: 
 92:   const getMedal = (rank: number) => {
 93:     if (rank === 1) return "🥇"
 94:     if (rank === 2) return "🥈"
 95:     if (rank === 3) return "🥉"
 96:     return rank
 97:   }
 98: 
 99: 
100:   const getInitials = (name: string) => {
101:     if (!name) return "U"
102: 
103:     return name
104:       .split(" ")
105:       .map(part => part[0])
106:       .join("")
107:       .toUpperCase()
108:       .substring(0, 2)
109:   }
110: 
111:   // Extract first image from profile URL if it contains multiple
112:   const getProfileImage = (url: string | null) => {
113:     if (!url) return undefined
114: 
115:     // If URL contains multiple images (comma-separated), take the first one
116:     if (url.includes(",")) {
117:       return url.split(",")[0].trim() || undefined
118:     }
119: 
120:     return url || undefined
121:   }
122: 
123:   // Get display name with fallback
124:   const getDisplayName = (leader: LeaderboardEntry) => {
125:     if (leader.displayName && leader.displayName.trim() !== "") {
126:       return leader.displayName
127:     }
128: 
129:     return `User ${leader.userId.substring(0, 6)}`
130:   }
131: 
132:   return (
133:     <Card className="w-full max-w-none">
134:       <CardHeader className="pb-2">
135:         <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
136:           <CardTitle className="flex items-center gap-2">
137:             <Trophy className="size-5 text-yellow-500" />
138:             Leaderboard
139:           </CardTitle>
140:           <Select value={category} onValueChange={setCategory}>
141:             <SelectTrigger className="w-full sm:w-[150px]">
142:               <SelectValue placeholder="All Categories" />
143:             </SelectTrigger>
144:             <SelectContent>
145:               <SelectItem value="all">All Categories</SelectItem>
146:               {categories.map(cat => (
147:                 <SelectItem key={cat} value={cat}>
148:                   {cat}
149:                 </SelectItem>
150:               ))}
151:             </SelectContent>
152:           </Select>
153:         </div>
154:       </CardHeader>
155:       <CardContent>
156:         {loading ? (
157: 
158:           <div className="space-y-3">
159:             {[1, 2, 3, 4, 5].map(i => (
160:               <div
161:                 key={i}
162:                 className="flex items-center gap-4 rounded-md border px-4 py-3"
163:               >
164:                 <Skeleton className="size-8 rounded-full" />
165:                 <div className="flex-1">
166:                   <Skeleton className="mb-2 h-4 w-24" />
167:                   <Skeleton className="h-3 w-16" />
168:                 </div>
169:                 <Skeleton className="h-6 w-12" />
170:               </div>
171:             ))}
172:           </div>
173:         ) : (
174:           <div className="space-y-2">
175:             {leaders.length > 0 ? (
176:               <>
177:                 {}
178:                 {leaders.map(leader => (
179:                   <motion.div
180:                     key={leader.userId}
181:                     initial={{ opacity: 0, y: 10 }}
182:                     animate={{ opacity: 1, y: 0 }}
183:                     transition={{ duration: 0.3, delay: leader.rank * 0.1 }}
184:                     className={cn(
185:                       "flex items-center gap-4 rounded-md border px-4 py-3 transition-colors",
186:                       leader.isCurrentUser
187:                         ? "border-primary"
188:                         : "border-border hover:bg-accent/10"
189:                     )}
190:                   >
191:                     <div className="flex w-8 items-center justify-center font-bold">
192:                       {getMedal(leader.rank)}
193:                     </div>
194:                     <Avatar className="size-9">
195:                       <AvatarImage
196:                         src={
197:                           getProfileImage(leader.profileImageUrl) || undefined
198:                         }
199:                         alt={leader.displayName}
200:                       />
201:                       <AvatarFallback>
202:                         {getInitials(leader.displayName)}
203:                       </AvatarFallback>
204:                     </Avatar>
205:                     <div className="min-w-0 flex-1">
206:                       <div className="flex items-center text-sm font-medium">
207:                         <span className="truncate">
208:                           {getDisplayName(leader)}
209:                         </span>
210:                         {leader.isCurrentUser && (
211:                           <Badge variant="outline" className="ml-2 text-xs">
212:                             You
213:                           </Badge>
214:                         )}
215:                       </div>
216:                       <p className="text-muted-foreground text-xs">
217:                         {leader.quizzesCompleted} quiz
218:                         {leader.quizzesCompleted !== 1 ? "zes" : ""}
219:                       </p>
220:                     </div>
221:                     <div className="text-right">
222:                       <div className="text-sm font-semibold">
223:                         {leader.accuracyPercentage.toFixed(1)}%
224:                       </div>
225:                       <div className="text-muted-foreground text-xs">
226:                         {leader.correctAnswers} / {leader.totalAttempts}
227:                       </div>
228:                     </div>
229:                   </motion.div>
230:                 ))}
231: 
232:                 {}
233:                 {currentUserRank && !leaders.some(l => l.isCurrentUser) && (
234:                   <motion.div
235:                     initial={{ opacity: 0 }}
236:                     animate={{ opacity: 1 }}
237:                     transition={{ duration: 0.5, delay: 0.5 }}
238:                     className="border-primary flex items-center gap-4 rounded-md border px-4 py-3"
239:                   >
240:                     <div className="flex w-8 items-center justify-center font-bold">
241:                       {currentUserRank.rank}
242:                     </div>
243:                     <Avatar className="size-9">
244:                       <AvatarImage
245:                         src={
246:                           getProfileImage(currentUserRank.profileImageUrl) ||
247:                           undefined
248:                         }
249:                         alt={currentUserRank.displayName}
250:                       />
251:                       <AvatarFallback>
252:                         {getInitials(currentUserRank.displayName)}
253:                       </AvatarFallback>
254:                     </Avatar>
255:                     <div className="min-w-0 flex-1">
256:                       <div className="flex items-center text-sm font-medium">
257:                         <span className="truncate">
258:                           {getDisplayName(currentUserRank)}
259:                         </span>
260:                         <Badge variant="outline" className="ml-2 text-xs">
261:                           You
262:                         </Badge>
263:                       </div>
264:                       <p className="text-muted-foreground text-xs">
265:                         {currentUserRank.quizzesCompleted} quiz
266:                         {currentUserRank.quizzesCompleted !== 1 ? "zes" : ""}
267:                       </p>
268:                     </div>
269:                     <div className="text-right">
270:                       <div className="text-sm font-semibold">
271:                         {currentUserRank.accuracyPercentage.toFixed(1)}%
272:                       </div>
273:                       <div className="text-muted-foreground text-xs">
274:                         {currentUserRank.correctAnswers} /{" "}
275:                         {currentUserRank.totalAttempts}
276:                       </div>
277:                     </div>
278:                   </motion.div>
279:                 )}
280:               </>
281:             ) : (
282: 
283:               <div className="text-muted-foreground py-8 text-center">
284:                 No data available yet. Complete some quizzes to appear on the
285:                 leaderboard!
286:               </div>
287:             )}
288:           </div>
289:         )}
290:       </CardContent>
291:     </Card>
292:   )
293: }
````

## File: components/ui/letter-select.tsx
````typescript
 1: "use client"
 2: 
 3: import { Button } from "@/components/ui/button"
 4: import { GraduationCap } from "lucide-react"
 5: import Link from "next/link"
 6: 
 7: 
 8: const letters = [
 9:   { id: "01_ಅ", label: "ಅ" },
10:   { id: "02_ಆ", label: "ಆ" },
11:   { id: "03_ಇ", label: "ಇ" },
12:   { id: "04_ಈ", label: "ಈ" },
13:   { id: "05_ಉ", label: "ಉ" },
14:   { id: "06_ಊ", label: "ಊ" },
15:   { id: "07_ಋ", label: "ಋ" },
16:   { id: "08_ಎ", label: "ಎ" },
17:   { id: "09_ಏ", label: "ಏ" },
18:   { id: "10_ಐ", label: "ಐ" },
19:   { id: "11_ಒ", label: "ಒ" },
20:   { id: "12_ಓ", label: "ಓ" },
21:   { id: "13_ಔ", label: "ಔ" },
22:   { id: "14_ಅಂ", label: "ಅಂ" },
23:   { id: "15_ಅಃ", label: "ಅಃ" },
24:   { id: "16_ಕ", label: "ಕ" },
25:   { id: "17_ಖ", label: "ಖ" },
26:   { id: "18_ಗ", label: "ಗ" },
27:   { id: "19_ಘ", label: "ಘ" },
28:   { id: "20_ಙ", label: "ಙ" },
29:   { id: "21_ಚ", label: "ಚ" },
30:   { id: "22_ಛ", label: "ಛ" },
31:   { id: "23_ಜ", label: "ಜ" },
32:   { id: "24_ಝ", label: "ಝ" },
33:   { id: "25_ಞ", label: "ಞ" },
34:   { id: "26_ಟ", label: "ಟ" },
35:   { id: "27_ಠ", label: "ಠ" },
36:   { id: "28_ಡ", label: "ಡ" },
37:   { id: "29_ಢ", label: "ಢ" },
38:   { id: "30_ಣ", label: "ಣ" },
39:   { id: "31_ತ", label: "ತ" },
40:   { id: "32_ಥ", label: "ಥ" },
41:   { id: "33_ದ", label: "ದ" },
42:   { id: "34_ಧ", label: "ಧ" },
43:   { id: "35_ನ", label: "ನ" },
44:   { id: "36_ಪ", label: "ಪ" },
45:   { id: "37_ಫ", label: "ಫ" },
46:   { id: "38_ಬ", label: "ಬ" },
47:   { id: "39_ಭ", label: "ಭ" },
48:   { id: "40_ಮ", label: "ಮ" },
49:   { id: "41_ಯ", label: "ಯ" },
50:   { id: "42_ರ", label: "ರ" },
51:   { id: "43_ಲ", label: "ಲ" },
52:   { id: "44_ವ", label: "ವ" },
53:   { id: "45_ಶ", label: "ಶ" },
54:   { id: "46_ಷ", label: "ಷ" },
55:   { id: "47_ಸ", label: "ಸ" },
56:   { id: "48_ಹ", label: "ಹ" },
57:   { id: "49_ಳ", label: "ಳ" }
58: ]
59: 
60: export function LetterSelect() {
61:   return (
62:     <Link href="/learn">
63:       <Button
64:         variant="ghost"
65:         className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium"
66:       >
67:         <GraduationCap className="mr-2 size-4" />
68:         Trace
69:       </Button>
70:     </Link>
71:   )
72: }
````

## File: components/ui/menubar.tsx
````typescript
  1: "use client"
  2: 
  3: import * as React from "react"
  4: import * as MenubarPrimitive from "@radix-ui/react-menubar"
  5: import { Check, ChevronRight, Circle } from "lucide-react"
  6: 
  7: import { cn } from "@/lib/utils"
  8: 
  9: const MenubarMenu = MenubarPrimitive.Menu
 10: 
 11: const MenubarGroup = MenubarPrimitive.Group
 12: 
 13: const MenubarPortal = MenubarPrimitive.Portal
 14: 
 15: const MenubarSub = MenubarPrimitive.Sub
 16: 
 17: const MenubarRadioGroup = MenubarPrimitive.RadioGroup
 18: 
 19: const Menubar = React.forwardRef<
 20:   React.ElementRef<typeof MenubarPrimitive.Root>,
 21:   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
 22: >(({ className, ...props }, ref) => (
 23:   <MenubarPrimitive.Root
 24:     ref={ref}
 25:     className={cn(
 26:       "bg-background flex h-10 items-center space-x-1 rounded-md border p-1",
 27:       className
 28:     )}
 29:     {...props}
 30:   />
 31: ))
 32: Menubar.displayName = MenubarPrimitive.Root.displayName
 33: 
 34: const MenubarTrigger = React.forwardRef<
 35:   React.ElementRef<typeof MenubarPrimitive.Trigger>,
 36:   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
 37: >(({ className, ...props }, ref) => (
 38:   <MenubarPrimitive.Trigger
 39:     ref={ref}
 40:     className={cn(
 41:       "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none",
 42:       className
 43:     )}
 44:     {...props}
 45:   />
 46: ))
 47: MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName
 48: 
 49: const MenubarSubTrigger = React.forwardRef<
 50:   React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
 51:   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
 52:     inset?: boolean
 53:   }
 54: >(({ className, inset, children, ...props }, ref) => (
 55:   <MenubarPrimitive.SubTrigger
 56:     ref={ref}
 57:     className={cn(
 58:       "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
 59:       inset && "pl-8",
 60:       className
 61:     )}
 62:     {...props}
 63:   >
 64:     {children}
 65:     <ChevronRight className="ml-auto size-4" />
 66:   </MenubarPrimitive.SubTrigger>
 67: ))
 68: MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName
 69: 
 70: const MenubarSubContent = React.forwardRef<
 71:   React.ElementRef<typeof MenubarPrimitive.SubContent>,
 72:   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
 73: >(({ className, ...props }, ref) => (
 74:   <MenubarPrimitive.SubContent
 75:     ref={ref}
 76:     className={cn(
 77:       "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1",
 78:       className
 79:     )}
 80:     {...props}
 81:   />
 82: ))
 83: MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName
 84: 
 85: const MenubarContent = React.forwardRef<
 86:   React.ElementRef<typeof MenubarPrimitive.Content>,
 87:   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
 88: >(
 89:   (
 90:     { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
 91:     ref
 92:   ) => (
 93:     <MenubarPrimitive.Portal>
 94:       <MenubarPrimitive.Content
 95:         ref={ref}
 96:         align={align}
 97:         alignOffset={alignOffset}
 98:         sideOffset={sideOffset}
 99:         className={cn(
100:           "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] overflow-hidden rounded-md border p-1 shadow-md",
101:           className
102:         )}
103:         {...props}
104:       />
105:     </MenubarPrimitive.Portal>
106:   )
107: )
108: MenubarContent.displayName = MenubarPrimitive.Content.displayName
109: 
110: const MenubarItem = React.forwardRef<
111:   React.ElementRef<typeof MenubarPrimitive.Item>,
112:   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
113:     inset?: boolean
114:   }
115: >(({ className, inset, ...props }, ref) => (
116:   <MenubarPrimitive.Item
117:     ref={ref}
118:     className={cn(
119:       "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
120:       inset && "pl-8",
121:       className
122:     )}
123:     {...props}
124:   />
125: ))
126: MenubarItem.displayName = MenubarPrimitive.Item.displayName
127: 
128: const MenubarCheckboxItem = React.forwardRef<
129:   React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
130:   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
131: >(({ className, children, checked, ...props }, ref) => (
132:   <MenubarPrimitive.CheckboxItem
133:     ref={ref}
134:     className={cn(
135:       "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
136:       className
137:     )}
138:     checked={checked}
139:     {...props}
140:   >
141:     <span className="absolute left-2 flex size-3.5 items-center justify-center">
142:       <MenubarPrimitive.ItemIndicator>
143:         <Check className="size-4" />
144:       </MenubarPrimitive.ItemIndicator>
145:     </span>
146:     {children}
147:   </MenubarPrimitive.CheckboxItem>
148: ))
149: MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName
150: 
151: const MenubarRadioItem = React.forwardRef<
152:   React.ElementRef<typeof MenubarPrimitive.RadioItem>,
153:   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
154: >(({ className, children, ...props }, ref) => (
155:   <MenubarPrimitive.RadioItem
156:     ref={ref}
157:     className={cn(
158:       "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
159:       className
160:     )}
161:     {...props}
162:   >
163:     <span className="absolute left-2 flex size-3.5 items-center justify-center">
164:       <MenubarPrimitive.ItemIndicator>
165:         <Circle className="size-2 fill-current" />
166:       </MenubarPrimitive.ItemIndicator>
167:     </span>
168:     {children}
169:   </MenubarPrimitive.RadioItem>
170: ))
171: MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName
172: 
173: const MenubarLabel = React.forwardRef<
174:   React.ElementRef<typeof MenubarPrimitive.Label>,
175:   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
176:     inset?: boolean
177:   }
178: >(({ className, inset, ...props }, ref) => (
179:   <MenubarPrimitive.Label
180:     ref={ref}
181:     className={cn(
182:       "px-2 py-1.5 text-sm font-semibold",
183:       inset && "pl-8",
184:       className
185:     )}
186:     {...props}
187:   />
188: ))
189: MenubarLabel.displayName = MenubarPrimitive.Label.displayName
190: 
191: const MenubarSeparator = React.forwardRef<
192:   React.ElementRef<typeof MenubarPrimitive.Separator>,
193:   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
194: >(({ className, ...props }, ref) => (
195:   <MenubarPrimitive.Separator
196:     ref={ref}
197:     className={cn("bg-muted -mx-1 my-1 h-px", className)}
198:     {...props}
199:   />
200: ))
201: MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName
202: 
203: const MenubarShortcut = ({
204:   className,
205:   ...props
206: }: React.HTMLAttributes<HTMLSpanElement>) => {
207:   return (
208:     <span
209:       className={cn(
210:         "text-muted-foreground ml-auto text-xs tracking-widest",
211:         className
212:       )}
213:       {...props}
214:     />
215:   )
216: }
217: MenubarShortcut.displayname = "MenubarShortcut"
218: 
219: export {
220:   Menubar,
221:   MenubarMenu,
222:   MenubarTrigger,
223:   MenubarContent,
224:   MenubarItem,
225:   MenubarSeparator,
226:   MenubarLabel,
227:   MenubarCheckboxItem,
228:   MenubarRadioGroup,
229:   MenubarRadioItem,
230:   MenubarPortal,
231:   MenubarSubContent,
232:   MenubarSubTrigger,
233:   MenubarGroup,
234:   MenubarSub,
235:   MenubarShortcut
236: }
````

## File: components/ui/navigation-menu.tsx
````typescript
  1: import * as React from "react"
  2: import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
  3: import { cva } from "class-variance-authority"
  4: import { ChevronDown } from "lucide-react"
  5: 
  6: import { cn } from "@/lib/utils"
  7: 
  8: const NavigationMenu = React.forwardRef<
  9:   React.ElementRef<typeof NavigationMenuPrimitive.Root>,
 10:   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
 11: >(({ className, children, ...props }, ref) => (
 12:   <NavigationMenuPrimitive.Root
 13:     ref={ref}
 14:     className={cn(
 15:       "relative z-10 flex max-w-max flex-1 items-center justify-center",
 16:       className
 17:     )}
 18:     {...props}
 19:   >
 20:     {children}
 21:     <NavigationMenuViewport />
 22:   </NavigationMenuPrimitive.Root>
 23: ))
 24: NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName
 25: 
 26: const NavigationMenuList = React.forwardRef<
 27:   React.ElementRef<typeof NavigationMenuPrimitive.List>,
 28:   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
 29: >(({ className, ...props }, ref) => (
 30:   <NavigationMenuPrimitive.List
 31:     ref={ref}
 32:     className={cn(
 33:       "group flex flex-1 list-none items-center justify-center space-x-1",
 34:       className
 35:     )}
 36:     {...props}
 37:   />
 38: ))
 39: NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName
 40: 
 41: const NavigationMenuItem = NavigationMenuPrimitive.Item
 42: 
 43: const navigationMenuTriggerStyle = cva(
 44:   "bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
 45: )
 46: 
 47: const NavigationMenuTrigger = React.forwardRef<
 48:   React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
 49:   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
 50: >(({ className, children, ...props }, ref) => (
 51:   <NavigationMenuPrimitive.Trigger
 52:     ref={ref}
 53:     className={cn(navigationMenuTriggerStyle(), "group", className)}
 54:     {...props}
 55:   >
 56:     {children}{" "}
 57:     <ChevronDown
 58:       className="relative top-[1px] ml-1 size-3 transition duration-200 group-data-[state=open]:rotate-180"
 59:       aria-hidden="true"
 60:     />
 61:   </NavigationMenuPrimitive.Trigger>
 62: ))
 63: NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName
 64: 
 65: const NavigationMenuContent = React.forwardRef<
 66:   React.ElementRef<typeof NavigationMenuPrimitive.Content>,
 67:   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
 68: >(({ className, ...props }, ref) => (
 69:   <NavigationMenuPrimitive.Content
 70:     ref={ref}
 71:     className={cn(
 72:       "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 left-0 top-0 w-full md:absolute md:w-auto ",
 73:       className
 74:     )}
 75:     {...props}
 76:   />
 77: ))
 78: NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName
 79: 
 80: const NavigationMenuLink = NavigationMenuPrimitive.Link
 81: 
 82: const NavigationMenuViewport = React.forwardRef<
 83:   React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
 84:   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
 85: >(({ className, ...props }, ref) => (
 86:   <div className={cn("absolute left-0 top-full flex justify-center")}>
 87:     <NavigationMenuPrimitive.Viewport
 88:       className={cn(
 89:         "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow-lg md:w-[var(--radix-navigation-menu-viewport-width)]",
 90:         className
 91:       )}
 92:       ref={ref}
 93:       {...props}
 94:     />
 95:   </div>
 96: ))
 97: NavigationMenuViewport.displayName =
 98:   NavigationMenuPrimitive.Viewport.displayName
 99: 
100: const NavigationMenuIndicator = React.forwardRef<
101:   React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
102:   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
103: >(({ className, ...props }, ref) => (
104:   <NavigationMenuPrimitive.Indicator
105:     ref={ref}
106:     className={cn(
107:       "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
108:       className
109:     )}
110:     {...props}
111:   >
112:     <div className="bg-border relative top-[60%] size-2 rotate-45 rounded-tl-sm shadow-md" />
113:   </NavigationMenuPrimitive.Indicator>
114: ))
115: NavigationMenuIndicator.displayName =
116:   NavigationMenuPrimitive.Indicator.displayName
117: 
118: export {
119:   navigationMenuTriggerStyle,
120:   NavigationMenu,
121:   NavigationMenuList,
122:   NavigationMenuItem,
123:   NavigationMenuContent,
124:   NavigationMenuTrigger,
125:   NavigationMenuLink,
126:   NavigationMenuIndicator,
127:   NavigationMenuViewport
128: }
````

## File: components/ui/pagination.tsx
````typescript
  1: import * as React from "react"
  2: import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
  3: 
  4: import { cn } from "@/lib/utils"
  5: import { ButtonProps, buttonVariants } from "@/components/ui/button"
  6: 
  7: const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  8:   <nav
  9:     role="navigation"
 10:     aria-label="pagination"
 11:     className={cn("mx-auto flex w-full justify-center", className)}
 12:     {...props}
 13:   />
 14: )
 15: Pagination.displayName = "Pagination"
 16: 
 17: const PaginationContent = React.forwardRef<
 18:   HTMLUListElement,
 19:   React.ComponentProps<"ul">
 20: >(({ className, ...props }, ref) => (
 21:   <ul
 22:     ref={ref}
 23:     className={cn("flex flex-row items-center gap-1", className)}
 24:     {...props}
 25:   />
 26: ))
 27: PaginationContent.displayName = "PaginationContent"
 28: 
 29: const PaginationItem = React.forwardRef<
 30:   HTMLLIElement,
 31:   React.ComponentProps<"li">
 32: >(({ className, ...props }, ref) => (
 33:   <li ref={ref} className={cn("", className)} {...props} />
 34: ))
 35: PaginationItem.displayName = "PaginationItem"
 36: 
 37: type PaginationLinkProps = {
 38:   isActive?: boolean
 39: } & Pick<ButtonProps, "size"> &
 40:   React.ComponentProps<"a">
 41: 
 42: const PaginationLink = ({
 43:   className,
 44:   isActive,
 45:   size = "icon",
 46:   ...props
 47: }: PaginationLinkProps) => (
 48:   <a
 49:     aria-current={isActive ? "page" : undefined}
 50:     className={cn(
 51:       buttonVariants({
 52:         variant: isActive ? "outline" : "ghost",
 53:         size
 54:       }),
 55:       className
 56:     )}
 57:     {...props}
 58:   />
 59: )
 60: PaginationLink.displayName = "PaginationLink"
 61: 
 62: const PaginationPrevious = ({
 63:   className,
 64:   ...props
 65: }: React.ComponentProps<typeof PaginationLink>) => (
 66:   <PaginationLink
 67:     aria-label="Go to previous page"
 68:     size="default"
 69:     className={cn("gap-1 pl-2.5", className)}
 70:     {...props}
 71:   >
 72:     <ChevronLeft className="size-4" />
 73:     <span>Previous</span>
 74:   </PaginationLink>
 75: )
 76: PaginationPrevious.displayName = "PaginationPrevious"
 77: 
 78: const PaginationNext = ({
 79:   className,
 80:   ...props
 81: }: React.ComponentProps<typeof PaginationLink>) => (
 82:   <PaginationLink
 83:     aria-label="Go to next page"
 84:     size="default"
 85:     className={cn("gap-1 pr-2.5", className)}
 86:     {...props}
 87:   >
 88:     <span>Next</span>
 89:     <ChevronRight className="size-4" />
 90:   </PaginationLink>
 91: )
 92: PaginationNext.displayName = "PaginationNext"
 93: 
 94: const PaginationEllipsis = ({
 95:   className,
 96:   ...props
 97: }: React.ComponentProps<"span">) => (
 98:   <span
 99:     aria-hidden
100:     className={cn("flex size-9 items-center justify-center", className)}
101:     {...props}
102:   >
103:     <MoreHorizontal className="size-4" />
104:     <span className="sr-only">More pages</span>
105:   </span>
106: )
107: PaginationEllipsis.displayName = "PaginationEllipsis"
108: 
109: export {
110:   Pagination,
111:   PaginationContent,
112:   PaginationEllipsis,
113:   PaginationItem,
114:   PaginationLink,
115:   PaginationNext,
116:   PaginationPrevious
117: }
````

## File: components/ui/popover.tsx
````typescript
 1: "use client"
 2: 
 3: import * as React from "react"
 4: import * as PopoverPrimitive from "@radix-ui/react-popover"
 5: 
 6: import { cn } from "@/lib/utils"
 7: 
 8: const Popover = PopoverPrimitive.Root
 9: 
10: const PopoverTrigger = PopoverPrimitive.Trigger
11: 
12: const PopoverContent = React.forwardRef<
13:   React.ElementRef<typeof PopoverPrimitive.Content>,
14:   React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
15: >(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
16:   <PopoverPrimitive.Portal>
17:     <PopoverPrimitive.Content
18:       ref={ref}
19:       align={align}
20:       sideOffset={sideOffset}
21:       className={cn(
22:         "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-none",
23:         className
24:       )}
25:       {...props}
26:     />
27:   </PopoverPrimitive.Portal>
28: ))
29: PopoverContent.displayName = PopoverPrimitive.Content.displayName
30: 
31: export { Popover, PopoverTrigger, PopoverContent }
````

## File: components/ui/progress.tsx
````typescript
 1: "use client"
 2: 
 3: import * as React from "react"
 4: import * as ProgressPrimitive from "@radix-ui/react-progress"
 5: 
 6: import { cn } from "@/lib/utils"
 7: 
 8: const Progress = React.forwardRef<
 9:   React.ElementRef<typeof ProgressPrimitive.Root>,
10:   React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
11: >(({ className, value, ...props }, ref) => (
12:   <ProgressPrimitive.Root
13:     ref={ref}
14:     className={cn(
15:       "bg-secondary relative h-4 w-full overflow-hidden rounded-full",
16:       className
17:     )}
18:     {...props}
19:   >
20:     <ProgressPrimitive.Indicator
21:       className="bg-primary size-full flex-1 transition-all"
22:       style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
23:     />
24:   </ProgressPrimitive.Root>
25: ))
26: Progress.displayName = ProgressPrimitive.Root.displayName
27: 
28: export { Progress }
````

## File: components/ui/quiz-component.tsx
````typescript
  1: "use client"
  2: 
  3: import { useState, useEffect, useRef } from "react"
  4: import { motion } from "framer-motion"
  5: import { toast } from "sonner"
  6: import { Button } from "@/components/ui/button"
  7: import { Progress } from "@/components/ui/progress"
  8: import { updateModuleProgressAction } from "@/actions/db/progress-actions"
  9: import { saveQuizResultAction } from "@/actions/db/quiz-results-actions"
 10: import { KannadaEntry } from "@/types"
 11: import { cn } from "@/lib/utils"
 12: import { recordWordAttemptAction } from "@/actions/db/word-stats-actions"
 13: import { Timer, CheckCircle, XCircle, ArrowLeft } from "lucide-react"
 14: import Image from "next/image"
 15: import QuizSetup from "@/app/quiz/_components/quiz-setup"
 16: 
 17: 
 18: const QUESTION_TIME = 10
 19: 
 20: 
 21: function loadSound(url: string) {
 22:   if (typeof Audio !== "undefined") {
 23:     return new Audio(url)
 24:   }
 25:   return null
 26: }
 27: 
 28: const correctSound = loadSound("/sounds/correct.mp3")
 29: const incorrectSound = loadSound("/sounds/incorrect.mp3")
 30: const finishSound = loadSound("/sounds/finish.mp3")
 31: 
 32: type QuizResult = {
 33:   question: KannadaEntry
 34:   isCorrect: boolean
 35:   selectedOption: string
 36:   correctOption: string
 37: }
 38: 
 39: 
 40: interface QuizComponentProps {
 41:   entries: KannadaEntry[]
 42: }
 43: 
 44: export default function QuizComponent({ entries }: QuizComponentProps) {
 45: 
 46:   const [isConfiguring, setIsConfiguring] = useState(true)
 47: 
 48: 
 49:   const [isStarted, setIsStarted] = useState(false)
 50:   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
 51:   const [quizQuestions, setQuizQuestions] = useState<
 52:     {
 53:       question: KannadaEntry
 54:       options: { icon: string | null; isCorrect: boolean }[]
 55:     }[]
 56:   >([])
 57:   const [timer, setTimer] = useState(QUESTION_TIME)
 58:   const [selectedOption, setSelectedOption] = useState<string | null>(null)
 59:   const [results, setResults] = useState<QuizResult[]>([])
 60:   const [isComplete, setIsComplete] = useState(false)
 61:   const [answeredQuestion, setAnsweredQuestion] = useState(false)
 62: 
 63: 
 64:   const [shouldSaveResults, setShouldSaveResults] = useState(false)
 65: 
 66: 
 67:   const completeQuiz = () => {
 68:     setIsComplete(true)
 69:     setIsStarted(false)
 70: 
 71: 
 72:     finishSound?.play()
 73: 
 74: 
 75:     setShouldSaveResults(true)
 76: 
 77: 
 78:     const correctAnswers = results.filter(r => r.isCorrect).length
 79:     const score = Math.round((correctAnswers / results.length) * 100)
 80: 
 81:     toast.success(`Quiz completed! Your score: ${score}%`)
 82:   }
 83: 
 84: 
 85:   useEffect(() => {
 86:     if (shouldSaveResults && results.length > 0) {
 87:       const saveResults = async () => {
 88:         try {
 89: 
 90:           const correctAnswers = results.filter(r => r.isCorrect).length
 91:           const score = Math.round((correctAnswers / results.length) * 100)
 92: 
 93: 
 94:           await updateModuleProgressAction("quiz", score)
 95: 
 96: 
 97:           await saveQuizResultAction({
 98:             quizType: "standard",
 99:             score: correctAnswers,
100:             totalQuestions: results.length,
101:             timeSpent: undefined,
102:             categories: []
103:           })
104: 
105:           setShouldSaveResults(false)
106:         } catch (error) {
107:           console.error("Error saving quiz results:", error)
108:           toast.error("Failed to save your results")
109:         }
110:       }
111: 
112:       saveResults()
113:     }
114:   }, [shouldSaveResults, results])
115: 
116: 
117:   useEffect(() => {
118:     if (!isStarted || isComplete || answeredQuestion || !quizQuestions.length)
119:       return
120: 
121:     const interval = setInterval(() => {
122:       setTimer(prev => {
123:         if (prev <= 1) {
124:           clearInterval(interval)
125:           handleTimeout()
126:           return 0
127:         }
128:         return prev - 1
129:       })
130:     }, 1000)
131: 
132:     return () => clearInterval(interval)
133:   }, [isStarted, isComplete, answeredQuestion, quizQuestions])
134: 
135: 
136:   const handleTimeout = () => {
137:     if (answeredQuestion) return
138: 
139:     setAnsweredQuestion(true)
140: 
141:     const currentQuestion = quizQuestions[currentQuestionIndex]
142:     const correctOption =
143:       currentQuestion.options.find(opt => opt.isCorrect)?.icon || ""
144: 
145:     // Add to results
146:     setResults(prev => [
147:       ...prev,
148:       {
149:         question: currentQuestion.question,
150:         isCorrect: false,
151:         selectedOption: "",
152:         correctOption
153:       }
154:     ])
155: 
156:     toast.error("Time's up!")
157:     incorrectSound?.play()
158: 
159:     moveToNextQuestion()
160:   }
161: 
162:   // Handle user selection
163:   const handleSelectOption = async (
164:     optionIcon: string | null,
165:     isCorrect: boolean
166:   ) => {
167:     if (answeredQuestion) return
168: 
169:     setSelectedOption(optionIcon)
170:     setAnsweredQuestion(true)
171: 
172:     const currentQuestion = quizQuestions[currentQuestionIndex]
173:     const correctOption =
174:       currentQuestion.options.find(opt => opt.isCorrect)?.icon || ""
175: 
176:     // Add to results
177:     setResults(prev => [
178:       ...prev,
179:       {
180:         question: currentQuestion.question,
181:         isCorrect: isCorrect,
182:         selectedOption: optionIcon || "",
183:         correctOption
184:       }
185:     ])
186: 
187:     // Record word attempt but don't await - fire and forget to avoid blocking
188:     if (currentQuestion?.question) {
189:       // Use a fire-and-forget pattern for non-critical stats tracking
190:       ;(async () => {
191:         try {
192:           await recordWordAttemptAction(
193:             currentQuestion.question.kanglish || "",
194:             currentQuestion.question.english || "",
195:             currentQuestion.question.kannada || null,
196:             currentQuestion.question.icon || null,
197:             currentQuestion.question.category || null,
198:             isCorrect
199:           )
200:         } catch (error) {
201:           console.error("Error recording word statistics:", error)
202:         }
203:       })()
204:     }
205: 
206:     // Provide feedback
207:     if (isCorrect) {
208:       toast.success("Correct!")
209:       correctSound?.play()
210:     } else {
211:       toast.error("Incorrect!")
212:       incorrectSound?.play()
213:     }
214: 
215:     moveToNextQuestion()
216:   }
217: 
218:   // Move to next question or complete the quiz
219:   const moveToNextQuestion = () => {
220:     // Short delay to show the answer
221:     setTimeout(() => {
222:       if (currentQuestionIndex < quizQuestions.length - 1) {
223:         setCurrentQuestionIndex(prev => prev + 1)
224:         setTimer(QUESTION_TIME)
225:         setSelectedOption(null)
226:         setAnsweredQuestion(false)
227:       } else {
228:         completeQuiz()
229:       }
230:     }, 1500)
231:   }
232: 
233:   // Handle starting the quiz
234:   const handleStartQuiz = () => {
235:     setIsStarted(true)
236:     setCurrentQuestionIndex(0)
237:     setQuizQuestions([])
238:     setTimer(QUESTION_TIME)
239:     setSelectedOption(null)
240:     setResults([])
241:     setIsComplete(false)
242:     setAnsweredQuestion(false)
243:   }
244: 
245:   // Handle quiz configuration from setup component
246:   const onStartQuiz = (numQuestions: number, categories: string[]) => {
247:     // Filter entries by selected categories - allow case-insensitive matching
248:     let filteredEntries = entries
249: 
250:     if (categories && categories.length > 0) {
251:       filteredEntries = entries.filter(
252:         entry =>
253:           entry.category &&
254:           categories.some(
255:             cat => entry.category?.toLowerCase() === cat.toLowerCase()
256:           )
257:       )
258:     }
259: 
260:     console.log(`Total entries: ${entries.length}`)
261:     console.log(`After category filter: ${filteredEntries.length}`)
262: 
263:     // We need entries with valid icons and Kanglish - ensure no undefined or empty values
264:     const entriesWithIconsAndKanglish = filteredEntries.filter(
265:       e =>
266:         e.icon && // Make sure icon exists
267:         e.kanglish &&
268:         e.kanglish.trim() !== "" // Make sure kanglish exists and is not empty
269:     )
270: 
271:     console.log(
272:       `Entries with valid icons and Kanglish: ${entriesWithIconsAndKanglish.length}`
273:     )
274: 
275:     if (entriesWithIconsAndKanglish.length < 4) {
276:       // We need at least 4 entries for each quiz question (1 correct, 3 incorrect)
277:       // Fallback to English if no Kanglish entries available
278:       console.log(
279:         "Not enough entries with Kanglish found, falling back to English"
280:       )
281:       const entriesWithIconsAndEnglish = filteredEntries.filter(
282:         e => e.icon && e.english && e.english.trim() !== ""
283:       )
284: 
285:       if (entriesWithIconsAndEnglish.length >= 4) {
286:         // Use English entries as fallback
287:         const shuffled = [...entriesWithIconsAndEnglish].sort(
288:           () => Math.random() - 0.5
289:         )
290:         const quizEntries = shuffled.slice(
291:           0,
292:           Math.min(numQuestions, shuffled.length)
293:         )
294:         createQuizWithEntries(quizEntries, shuffled)
295:         return
296:       } else {
297:         toast.error(
298:           "Not enough valid entries found for quiz. Please try different categories."
299:         )
300:         return
301:       }
302:     }
303: 
304:     // Shuffle entries
305:     const shuffled = [...entriesWithIconsAndKanglish].sort(
306:       () => Math.random() - 0.5
307:     )
308: 
309:     // Take the configured number of random entries for the quiz, but don't exceed available entries
310:     const quizEntries = shuffled.slice(
311:       0,
312:       Math.min(numQuestions, shuffled.length)
313:     )
314:     console.log(`Creating quiz with ${quizEntries.length} questions`)
315: 
316:     createQuizWithEntries(quizEntries, shuffled)
317:   }
318: 
319:   // Helper function to create quiz questions from entries
320:   const createQuizWithEntries = (
321:     quizEntries: KannadaEntry[],
322:     allShuffledEntries: KannadaEntry[]
323:   ) => {
324:     // Create quiz questions with icon options
325:     const questionsList = quizEntries.map(entry => {
326:       // Get incorrect options (3 other entries with icons)
327:       // Filter out entries without icons and those matching the current entry's icon
328:       const incorrectEntriesPool = allShuffledEntries.filter(
329:         e => e.icon && e.icon !== entry.icon
330:       )
331: 
332:       // If we don't have enough incorrect options, use duplicates as a fallback
333:       let incorrectEntries = []
334:       if (incorrectEntriesPool.length >= 3) {
335:         // Take 3 random entries from the pool
336:         incorrectEntries = incorrectEntriesPool
337:           .sort(() => Math.random() - 0.5)
338:           .slice(0, 3)
339:       } else {
340:         // Use whatever we have and duplicate if necessary
341:         incorrectEntries = [...incorrectEntriesPool]
342:         while (incorrectEntries.length < 3) {
343:           incorrectEntries.push(incorrectEntriesPool[0] || quizEntries[0])
344:         }
345:       }
346: 
347:       // Map to option objects with explicit non-undefined icons
348:       const incorrectOptions = incorrectEntries.map(e => ({
349:         icon: e.icon as string | null, // We've already filtered out undefined
350:         isCorrect: false
351:       }))
352: 
353:       // Add correct option (we know entry.icon exists because we filtered for it)
354:       const correctOption = {
355:         icon: entry.icon as string | null, // We've already filtered out undefined
356:         isCorrect: true
357:       }
358: 
359:       // Shuffle all options
360:       const options = [correctOption, ...incorrectOptions].sort(
361:         () => Math.random() - 0.5
362:       )
363: 
364:       return {
365:         question: entry,
366:         options
367:       }
368:     })
369: 
370:     console.log(`Created ${questionsList.length} quiz questions`)
371: 
372:     // Type assertion to ensure TypeScript understands we've eliminated undefined
373:     setQuizQuestions(questionsList)
374: 
375:     setIsConfiguring(false)
376:     setIsStarted(true)
377:     setCurrentQuestionIndex(0)
378:     setTimer(QUESTION_TIME)
379:     setSelectedOption(null)
380:     setResults([])
381:     setIsComplete(false)
382:     setAnsweredQuestion(false)
383:   }
384: 
385:   // Return to setup
386:   const backToSetup = () => {
387:     setIsConfiguring(true)
388:     setIsComplete(false)
389:   }
390: 
391:   // If configuring, show quiz setup screen
392:   if (isConfiguring) {
393:     return (
394:       <div className="mx-auto w-full max-w-3xl">
395:         <QuizSetup entries={entries} onStartQuiz={onStartQuiz} />
396:       </div>
397:     )
398:   }
399: 
400: 
401:   if (isComplete) {
402:     const correctAnswers = results.filter(r => r.isCorrect).length
403:     const score = Math.round((correctAnswers / results.length) * 100)
404: 
405:     return (
406:       <motion.div
407:         initial={{ opacity: 0 }}
408:         animate={{ opacity: 1 }}
409:         className="mx-auto w-full max-w-3xl"
410:       >
411:         <div className="bg-card rounded-lg p-6 shadow-md">
412:           <h2 className="mb-4 text-center text-2xl font-bold">Quiz Results</h2>
413: 
414:           <div className="mb-6 text-center">
415:             <p className="text-lg">
416:               You scored <span className="font-bold">{correctAnswers}</span> out
417:               of <span className="font-bold">{results.length}</span> questions
418:             </p>
419:             <p className="mt-2 text-2xl font-bold">{score}%</p>
420:             <Progress
421:               value={score}
422:               className={cn(
423:                 "mt-2 h-4",
424:                 score >= 80
425:                   ? "bg-green-500/20"
426:                   : score >= 60
427:                     ? "bg-yellow-500/20"
428:                     : "bg-red-500/20"
429:               )}
430:             />
431:           </div>
432: 
433:           <div className="space-y-4">
434:             <h3 className="text-lg font-semibold">Question Summary:</h3>
435:             {results.map((result, index) => (
436:               <div
437:                 key={index}
438:                 className={cn(
439:                   "flex items-center rounded border p-3",
440:                   result.isCorrect
441:                     ? "border-green-500 bg-green-50"
442:                     : "border-red-500 bg-red-50"
443:                 )}
444:               >
445:                 <div className="mr-3">
446:                   {result.isCorrect ? (
447:                     <CheckCircle className="size-6 text-green-500" />
448:                   ) : (
449:                     <XCircle className="size-6 text-red-500" />
450:                   )}
451:                 </div>
452: 
453:                 <div className="flex-1">
454:                   <p className="font-medium">{result.question.kanglish}</p>
455:                   <div className="mt-2 flex gap-2">
456:                     <div className="flex items-center">
457:                       <span className="mr-2 text-sm">Correct:</span>
458:                       {result.correctOption && (
459:                         <div className="size-8 overflow-hidden rounded-full border border-green-500">
460:                           <Image
461:                             src={result.correctOption}
462:                             alt="Correct option"
463:                             width={32}
464:                             height={32}
465:                             className="object-cover"
466:                           />
467:                         </div>
468:                       )}
469:                     </div>
470: 
471:                     {!result.isCorrect && result.selectedOption && (
472:                       <div className="flex items-center">
473:                         <span className="mr-2 text-sm">Your choice:</span>
474:                         <div className="size-8 overflow-hidden rounded-full border border-red-500">
475:                           <Image
476:                             src={result.selectedOption}
477:                             alt="Your choice"
478:                             width={32}
479:                             height={32}
480:                             className="object-cover"
481:                           />
482:                         </div>
483:                       </div>
484:                     )}
485:                   </div>
486:                 </div>
487:               </div>
488:             ))}
489:           </div>
490: 
491:           <div className="mt-6 flex justify-center gap-3">
492:             <Button
493:               onClick={backToSetup}
494:               variant="outline"
495:               className="flex items-center"
496:             >
497:               <ArrowLeft className="mr-2 size-4" />
498:               Back to Setup
499:             </Button>
500: 
501:             <Button onClick={handleStartQuiz} className="flex items-center">
502:               Try Again
503:             </Button>
504:           </div>
505:         </div>
506:       </motion.div>
507:     )
508:   }
509: 
510: 
511:   return (
512:     <div className="mx-auto w-full max-w-3xl">
513:       <div className="mb-6 flex items-center justify-between">
514:         <div>
515:           <p className="text-muted-foreground text-sm">
516:             Question {currentQuestionIndex + 1} of {quizQuestions.length}
517:           </p>
518:           <Progress
519:             value={(currentQuestionIndex / quizQuestions.length) * 100}
520:             className="mt-1 h-2 w-32"
521:           />
522:         </div>
523: 
524:         <div className="flex items-center">
525:           <Timer className="text-muted-foreground mr-1 size-4" />
526:           <span
527:             className={cn(
528:               "font-mono text-sm",
529:               timer <= 5 ? "font-bold text-red-500" : "text-muted-foreground"
530:             )}
531:           >
532:             {timer}s
533:           </span>
534:         </div>
535:       </div>
536: 
537:       {quizQuestions.length > 0 &&
538:         currentQuestionIndex < quizQuestions.length && (
539:           <div className="bg-card rounded-lg p-6 shadow-md">
540:             <motion.div
541:               key={currentQuestionIndex}
542:               initial={{ opacity: 0, y: 10 }}
543:               animate={{ opacity: 1, y: 0 }}
544:               className="mb-6"
545:             >
546:               <h2 className="mb-2 text-center text-xl font-bold">
547:                 {quizQuestions[currentQuestionIndex].question.kanglish ||
548:                   quizQuestions[currentQuestionIndex].question.english ||
549:                   "Question"}
550:               </h2>
551:               <p className="text-muted-foreground text-center">
552:                 Select the matching icon
553:               </p>
554:             </motion.div>
555: 
556:             <div className="grid grid-cols-2 gap-4">
557:               {quizQuestions[currentQuestionIndex].options.map(
558:                 (option, index) => (
559:                   <motion.button
560:                     key={index}
561:                     whileHover={{ scale: 1.05 }}
562:                     whileTap={{ scale: 0.95 }}
563:                     disabled={answeredQuestion}
564:                     onClick={() =>
565:                       handleSelectOption(option.icon, option.isCorrect)
566:                     }
567:                     className={cn(
568:                       "hover:border-primary flex flex-col items-center justify-center rounded-lg border-2 p-4 transition-all",
569:                       answeredQuestion && option.isCorrect
570:                         ? "border-green-500 bg-green-50"
571:                         : answeredQuestion && option.icon === selectedOption
572:                           ? "border-red-500 bg-red-50"
573:                           : answeredQuestion
574:                             ? "opacity-50"
575:                             : "border-muted"
576:                     )}
577:                     style={{ minHeight: "120px" }}
578:                   >
579:                     {option.icon ? (
580:                       <Image
581:                         src={option.icon}
582:                         alt="option"
583:                         width={64}
584:                         height={64}
585:                         className="object-contain"
586:                         onError={e => {
587: 
588:                           const target = e.target as HTMLImageElement
589:                           target.src = "/images/placeholder.png"
590:                           target.onerror = null
591:                         }}
592:                       />
593:                     ) : (
594:                       <div className="bg-muted flex size-16 items-center justify-center rounded-md">
595:                         <span className="text-muted-foreground text-xs">
596:                           No image
597:                         </span>
598:                       </div>
599:                     )}
600:                   </motion.button>
601:                 )
602:               )}
603:             </div>
604: 
605:             {answeredQuestion && (
606:               <div className="text-muted-foreground mt-6 text-center">
607:                 <p>Moving to next question...</p>
608:               </div>
609:             )}
610:           </div>
611:         )}
612:     </div>
613:   )
614: }
````

## File: components/ui/radio-group.tsx
````typescript
 1: "use client"
 2: 
 3: import * as React from "react"
 4: import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
 5: import { Circle } from "lucide-react"
 6: 
 7: import { cn } from "@/lib/utils"
 8: 
 9: const RadioGroup = React.forwardRef<
10:   React.ElementRef<typeof RadioGroupPrimitive.Root>,
11:   React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
12: >(({ className, ...props }, ref) => {
13:   return (
14:     <RadioGroupPrimitive.Root
15:       className={cn("grid gap-2", className)}
16:       {...props}
17:       ref={ref}
18:     />
19:   )
20: })
21: RadioGroup.displayName = RadioGroupPrimitive.Root.displayName
22: 
23: const RadioGroupItem = React.forwardRef<
24:   React.ElementRef<typeof RadioGroupPrimitive.Item>,
25:   React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
26: >(({ className, ...props }, ref) => {
27:   return (
28:     <RadioGroupPrimitive.Item
29:       ref={ref}
30:       className={cn(
31:         "border-primary text-primary ring-offset-background focus-visible:ring-ring aspect-square size-4 rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
32:         className
33:       )}
34:       {...props}
35:     >
36:       <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
37:         <Circle className="size-2.5 fill-current text-current" />
38:       </RadioGroupPrimitive.Indicator>
39:     </RadioGroupPrimitive.Item>
40:   )
41: })
42: RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName
43: 
44: export { RadioGroup, RadioGroupItem }
````

## File: components/ui/resizable.tsx
````typescript
 1: "use client"
 2: 
 3: import { GripVertical } from "lucide-react"
 4: import * as ResizablePrimitive from "react-resizable-panels"
 5: 
 6: import { cn } from "@/lib/utils"
 7: 
 8: const ResizablePanelGroup = ({
 9:   className,
10:   ...props
11: }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
12:   <ResizablePrimitive.PanelGroup
13:     className={cn(
14:       "flex size-full data-[panel-group-direction=vertical]:flex-col",
15:       className
16:     )}
17:     {...props}
18:   />
19: )
20: 
21: const ResizablePanel = ResizablePrimitive.Panel
22: 
23: const ResizableHandle = ({
24:   withHandle,
25:   className,
26:   ...props
27: }: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
28:   withHandle?: boolean
29: }) => (
30:   <ResizablePrimitive.PanelResizeHandle
31:     className={cn(
32:       "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
33:       className
34:     )}
35:     {...props}
36:   >
37:     {withHandle && (
38:       <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-sm border">
39:         <GripVertical className="size-2.5" />
40:       </div>
41:     )}
42:   </ResizablePrimitive.PanelResizeHandle>
43: )
44: 
45: export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
````

## File: components/ui/scroll-area.tsx
````typescript
 1: "use client"
 2: 
 3: import * as React from "react"
 4: import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
 5: 
 6: import { cn } from "@/lib/utils"
 7: 
 8: const ScrollArea = React.forwardRef<
 9:   React.ElementRef<typeof ScrollAreaPrimitive.Root>,
10:   React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
11: >(({ className, children, ...props }, ref) => (
12:   <ScrollAreaPrimitive.Root
13:     ref={ref}
14:     className={cn("relative overflow-hidden", className)}
15:     {...props}
16:   >
17:     <ScrollAreaPrimitive.Viewport className="size-full rounded-[inherit]">
18:       {children}
19:     </ScrollAreaPrimitive.Viewport>
20:     <ScrollBar />
21:     <ScrollAreaPrimitive.Corner />
22:   </ScrollAreaPrimitive.Root>
23: ))
24: ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName
25: 
26: const ScrollBar = React.forwardRef<
27:   React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
28:   React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
29: >(({ className, orientation = "vertical", ...props }, ref) => (
30:   <ScrollAreaPrimitive.ScrollAreaScrollbar
31:     ref={ref}
32:     orientation={orientation}
33:     className={cn(
34:       "flex touch-none select-none transition-colors",
35:       orientation === "vertical" &&
36:         "h-full w-2.5 border-l border-l-transparent p-[1px]",
37:       orientation === "horizontal" &&
38:         "h-2.5 flex-col border-t border-t-transparent p-[1px]",
39:       className
40:     )}
41:     {...props}
42:   >
43:     <ScrollAreaPrimitive.ScrollAreaThumb className="bg-border relative flex-1 rounded-full" />
44:   </ScrollAreaPrimitive.ScrollAreaScrollbar>
45: ))
46: ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName
47: 
48: export { ScrollArea, ScrollBar }
````

## File: components/ui/select.tsx
````typescript
  1: "use client"
  2: 
  3: import * as React from "react"
  4: import * as SelectPrimitive from "@radix-ui/react-select"
  5: import { Check, ChevronDown, ChevronUp } from "lucide-react"
  6: 
  7: import { cn } from "@/lib/utils"
  8: 
  9: const Select = SelectPrimitive.Root
 10: 
 11: const SelectGroup = SelectPrimitive.Group
 12: 
 13: const SelectValue = SelectPrimitive.Value
 14: 
 15: const SelectTrigger = React.forwardRef<
 16:   React.ElementRef<typeof SelectPrimitive.Trigger>,
 17:   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
 18: >(({ className, children, ...props }, ref) => (
 19:   <SelectPrimitive.Trigger
 20:     ref={ref}
 21:     className={cn(
 22:       "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
 23:       className
 24:     )}
 25:     {...props}
 26:   >
 27:     {children}
 28:     <SelectPrimitive.Icon asChild>
 29:       <ChevronDown className="size-4 opacity-50" />
 30:     </SelectPrimitive.Icon>
 31:   </SelectPrimitive.Trigger>
 32: ))
 33: SelectTrigger.displayName = SelectPrimitive.Trigger.displayName
 34: 
 35: const SelectScrollUpButton = React.forwardRef<
 36:   React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
 37:   React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
 38: >(({ className, ...props }, ref) => (
 39:   <SelectPrimitive.ScrollUpButton
 40:     ref={ref}
 41:     className={cn(
 42:       "flex cursor-default items-center justify-center py-1",
 43:       className
 44:     )}
 45:     {...props}
 46:   >
 47:     <ChevronUp className="size-4" />
 48:   </SelectPrimitive.ScrollUpButton>
 49: ))
 50: SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName
 51: 
 52: const SelectScrollDownButton = React.forwardRef<
 53:   React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
 54:   React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
 55: >(({ className, ...props }, ref) => (
 56:   <SelectPrimitive.ScrollDownButton
 57:     ref={ref}
 58:     className={cn(
 59:       "flex cursor-default items-center justify-center py-1",
 60:       className
 61:     )}
 62:     {...props}
 63:   >
 64:     <ChevronDown className="size-4" />
 65:   </SelectPrimitive.ScrollDownButton>
 66: ))
 67: SelectScrollDownButton.displayName =
 68:   SelectPrimitive.ScrollDownButton.displayName
 69: 
 70: const SelectContent = React.forwardRef<
 71:   React.ElementRef<typeof SelectPrimitive.Content>,
 72:   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
 73: >(({ className, children, position = "popper", ...props }, ref) => (
 74:   <SelectPrimitive.Portal>
 75:     <SelectPrimitive.Content
 76:       ref={ref}
 77:       className={cn(
 78:         "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
 79:         position === "popper" &&
 80:           "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
 81:         className
 82:       )}
 83:       position={position}
 84:       {...props}
 85:     >
 86:       <SelectScrollUpButton />
 87:       <SelectPrimitive.Viewport
 88:         className={cn(
 89:           "p-1",
 90:           position === "popper" &&
 91:             "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
 92:         )}
 93:       >
 94:         {children}
 95:       </SelectPrimitive.Viewport>
 96:       <SelectScrollDownButton />
 97:     </SelectPrimitive.Content>
 98:   </SelectPrimitive.Portal>
 99: ))
100: SelectContent.displayName = SelectPrimitive.Content.displayName
101: 
102: const SelectLabel = React.forwardRef<
103:   React.ElementRef<typeof SelectPrimitive.Label>,
104:   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
105: >(({ className, ...props }, ref) => (
106:   <SelectPrimitive.Label
107:     ref={ref}
108:     className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
109:     {...props}
110:   />
111: ))
112: SelectLabel.displayName = SelectPrimitive.Label.displayName
113: 
114: const SelectItem = React.forwardRef<
115:   React.ElementRef<typeof SelectPrimitive.Item>,
116:   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
117: >(({ className, children, ...props }, ref) => (
118:   <SelectPrimitive.Item
119:     ref={ref}
120:     className={cn(
121:       "focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
122:       className
123:     )}
124:     {...props}
125:   >
126:     <span className="absolute left-2 flex size-3.5 items-center justify-center">
127:       <SelectPrimitive.ItemIndicator>
128:         <Check className="size-4" />
129:       </SelectPrimitive.ItemIndicator>
130:     </span>
131: 
132:     <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
133:   </SelectPrimitive.Item>
134: ))
135: SelectItem.displayName = SelectPrimitive.Item.displayName
136: 
137: const SelectSeparator = React.forwardRef<
138:   React.ElementRef<typeof SelectPrimitive.Separator>,
139:   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
140: >(({ className, ...props }, ref) => (
141:   <SelectPrimitive.Separator
142:     ref={ref}
143:     className={cn("bg-muted -mx-1 my-1 h-px", className)}
144:     {...props}
145:   />
146: ))
147: SelectSeparator.displayName = SelectPrimitive.Separator.displayName
148: 
149: export {
150:   Select,
151:   SelectGroup,
152:   SelectValue,
153:   SelectTrigger,
154:   SelectContent,
155:   SelectLabel,
156:   SelectItem,
157:   SelectSeparator,
158:   SelectScrollUpButton,
159:   SelectScrollDownButton
160: }
````

## File: components/ui/separator.tsx
````typescript
 1: "use client"
 2: 
 3: import * as React from "react"
 4: import * as SeparatorPrimitive from "@radix-ui/react-separator"
 5: 
 6: import { cn } from "@/lib/utils"
 7: 
 8: const Separator = React.forwardRef<
 9:   React.ElementRef<typeof SeparatorPrimitive.Root>,
10:   React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
11: >(
12:   (
13:     { className, orientation = "horizontal", decorative = true, ...props },
14:     ref
15:   ) => (
16:     <SeparatorPrimitive.Root
17:       ref={ref}
18:       decorative={decorative}
19:       orientation={orientation}
20:       className={cn(
21:         "bg-border shrink-0",
22:         orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
23:         className
24:       )}
25:       {...props}
26:     />
27:   )
28: )
29: Separator.displayName = SeparatorPrimitive.Root.displayName
30: 
31: export { Separator }
````

## File: components/ui/sheet.tsx
````typescript
  1: "use client"
  2: 
  3: import * as React from "react"
  4: import * as SheetPrimitive from "@radix-ui/react-dialog"
  5: import { cva, type VariantProps } from "class-variance-authority"
  6: import { X } from "lucide-react"
  7: 
  8: import { cn } from "@/lib/utils"
  9: 
 10: const Sheet = SheetPrimitive.Root
 11: 
 12: const SheetTrigger = SheetPrimitive.Trigger
 13: 
 14: const SheetClose = SheetPrimitive.Close
 15: 
 16: const SheetPortal = SheetPrimitive.Portal
 17: 
 18: const SheetOverlay = React.forwardRef<
 19:   React.ElementRef<typeof SheetPrimitive.Overlay>,
 20:   React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
 21: >(({ className, ...props }, ref) => (
 22:   <SheetPrimitive.Overlay
 23:     className={cn(
 24:       "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  fixed inset-0 z-50 bg-black/80",
 25:       className
 26:     )}
 27:     {...props}
 28:     ref={ref}
 29:   />
 30: ))
 31: SheetOverlay.displayName = SheetPrimitive.Overlay.displayName
 32: 
 33: const sheetVariants = cva(
 34:   "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
 35:   {
 36:     variants: {
 37:       side: {
 38:         top: "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 border-b",
 39:         bottom:
 40:           "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 border-t",
 41:         left: "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
 42:         right:
 43:           "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0  h-full w-3/4 border-l sm:max-w-sm"
 44:       }
 45:     },
 46:     defaultVariants: {
 47:       side: "right"
 48:     }
 49:   }
 50: )
 51: 
 52: interface SheetContentProps
 53:   extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
 54:     VariantProps<typeof sheetVariants> {}
 55: 
 56: const SheetContent = React.forwardRef<
 57:   React.ElementRef<typeof SheetPrimitive.Content>,
 58:   SheetContentProps
 59: >(({ side = "right", className, children, ...props }, ref) => (
 60:   <SheetPortal>
 61:     <SheetOverlay />
 62:     <SheetPrimitive.Content
 63:       ref={ref}
 64:       className={cn(sheetVariants({ side }), className)}
 65:       {...props}
 66:     >
 67:       {children}
 68:       <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
 69:         <X className="size-4" />
 70:         <span className="sr-only">Close</span>
 71:       </SheetPrimitive.Close>
 72:     </SheetPrimitive.Content>
 73:   </SheetPortal>
 74: ))
 75: SheetContent.displayName = SheetPrimitive.Content.displayName
 76: 
 77: const SheetHeader = ({
 78:   className,
 79:   ...props
 80: }: React.HTMLAttributes<HTMLDivElement>) => (
 81:   <div
 82:     className={cn(
 83:       "flex flex-col space-y-2 text-center sm:text-left",
 84:       className
 85:     )}
 86:     {...props}
 87:   />
 88: )
 89: SheetHeader.displayName = "SheetHeader"
 90: 
 91: const SheetFooter = ({
 92:   className,
 93:   ...props
 94: }: React.HTMLAttributes<HTMLDivElement>) => (
 95:   <div
 96:     className={cn(
 97:       "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
 98:       className
 99:     )}
100:     {...props}
101:   />
102: )
103: SheetFooter.displayName = "SheetFooter"
104: 
105: const SheetTitle = React.forwardRef<
106:   React.ElementRef<typeof SheetPrimitive.Title>,
107:   React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
108: >(({ className, ...props }, ref) => (
109:   <SheetPrimitive.Title
110:     ref={ref}
111:     className={cn("text-foreground text-lg font-semibold", className)}
112:     {...props}
113:   />
114: ))
115: SheetTitle.displayName = SheetPrimitive.Title.displayName
116: 
117: const SheetDescription = React.forwardRef<
118:   React.ElementRef<typeof SheetPrimitive.Description>,
119:   React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
120: >(({ className, ...props }, ref) => (
121:   <SheetPrimitive.Description
122:     ref={ref}
123:     className={cn("text-muted-foreground text-sm", className)}
124:     {...props}
125:   />
126: ))
127: SheetDescription.displayName = SheetPrimitive.Description.displayName
128: 
129: export {
130:   Sheet,
131:   SheetPortal,
132:   SheetOverlay,
133:   SheetTrigger,
134:   SheetClose,
135:   SheetContent,
136:   SheetHeader,
137:   SheetFooter,
138:   SheetTitle,
139:   SheetDescription
140: }
````

## File: components/ui/sidebar.tsx
````typescript
  1: "use client"
  2: 
  3: import { Slot } from "@radix-ui/react-slot"
  4: import { VariantProps, cva } from "class-variance-authority"
  5: import { PanelLeft } from "lucide-react"
  6: import * as React from "react"
  7: 
  8: import { Button } from "@/components/ui/button"
  9: import { Input } from "@/components/ui/input"
 10: import { Separator } from "@/components/ui/separator"
 11: import { Sheet, SheetContent } from "@/components/ui/sheet"
 12: import { Skeleton } from "@/components/ui/skeleton"
 13: import {
 14:   Tooltip,
 15:   TooltipContent,
 16:   TooltipProvider,
 17:   TooltipTrigger
 18: } from "@/components/ui/tooltip"
 19: import { useIsMobile } from "@/lib/hooks/use-mobile"
 20: import { cn } from "@/lib/utils"
 21: 
 22: const SIDEBAR_COOKIE_NAME = "sidebar:state"
 23: const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
 24: const SIDEBAR_WIDTH = "16rem"
 25: const SIDEBAR_WIDTH_MOBILE = "18rem"
 26: const SIDEBAR_WIDTH_ICON = "3rem"
 27: const SIDEBAR_KEYBOARD_SHORTCUT = "b"
 28: 
 29: type SidebarContext = {
 30:   state: "expanded" | "collapsed"
 31:   open: boolean
 32:   setOpen: (open: boolean) => void
 33:   openMobile: boolean
 34:   setOpenMobile: (open: boolean) => void
 35:   isMobile: boolean
 36:   toggleSidebar: () => void
 37: }
 38: 
 39: const SidebarContext = React.createContext<SidebarContext | null>(null)
 40: 
 41: function useSidebar() {
 42:   const context = React.useContext(SidebarContext)
 43:   if (!context) {
 44:     throw new Error("useSidebar must be used within a SidebarProvider.")
 45:   }
 46: 
 47:   return context
 48: }
 49: 
 50: const SidebarProvider = React.forwardRef<
 51:   HTMLDivElement,
 52:   React.ComponentProps<"div"> & {
 53:     defaultOpen?: boolean
 54:     open?: boolean
 55:     onOpenChange?: (open: boolean) => void
 56:   }
 57: >(
 58:   (
 59:     {
 60:       defaultOpen = true,
 61:       open: openProp,
 62:       onOpenChange: setOpenProp,
 63:       className,
 64:       style,
 65:       children,
 66:       ...props
 67:     },
 68:     ref
 69:   ) => {
 70:     const isMobile = useIsMobile()
 71:     const [openMobile, setOpenMobile] = React.useState(false)
 72: 
 73: 
 74: 
 75:     const [_open, _setOpen] = React.useState(defaultOpen)
 76:     const open = openProp ?? _open
 77:     const setOpen = React.useCallback(
 78:       (value: boolean | ((value: boolean) => boolean)) => {
 79:         const openState = typeof value === "function" ? value(open) : value
 80:         if (setOpenProp) {
 81:           setOpenProp(openState)
 82:         } else {
 83:           _setOpen(openState)
 84:         }
 85: 
 86: 
 87:         document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
 88:       },
 89:       [setOpenProp, open]
 90:     )
 91: 
 92: 
 93:     const toggleSidebar = React.useCallback(() => {
 94:       return isMobile ? setOpenMobile(open => !open) : setOpen(open => !open)
 95:     }, [isMobile, setOpen, setOpenMobile])
 96: 
 97: 
 98:     React.useEffect(() => {
 99:       const handleKeyDown = (event: KeyboardEvent) => {
100:         if (
101:           event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
102:           (event.metaKey || event.ctrlKey)
103:         ) {
104:           event.preventDefault()
105:           toggleSidebar()
106:         }
107:       }
108: 
109:       window.addEventListener("keydown", handleKeyDown)
110:       return () => window.removeEventListener("keydown", handleKeyDown)
111:     }, [toggleSidebar])
112: 
113: 
114: 
115:     const state = open ? "expanded" : "collapsed"
116: 
117:     const contextValue = React.useMemo<SidebarContext>(
118:       () => ({
119:         state,
120:         open,
121:         setOpen,
122:         isMobile,
123:         openMobile,
124:         setOpenMobile,
125:         toggleSidebar
126:       }),
127:       [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
128:     )
129: 
130:     return (
131:       <SidebarContext.Provider value={contextValue}>
132:         <TooltipProvider delayDuration={0}>
133:           <div
134:             style={
135:               {
136:                 "--sidebar-width": SIDEBAR_WIDTH,
137:                 "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
138:                 ...style
139:               } as React.CSSProperties
140:             }
141:             className={cn(
142:               "group/sidebar-wrapper has-[[data-variant=inset]]:bg-sidebar flex min-h-svh w-full",
143:               className
144:             )}
145:             ref={ref}
146:             {...props}
147:           >
148:             {children}
149:           </div>
150:         </TooltipProvider>
151:       </SidebarContext.Provider>
152:     )
153:   }
154: )
155: SidebarProvider.displayName = "SidebarProvider"
156: 
157: const Sidebar = React.forwardRef<
158:   HTMLDivElement,
159:   React.ComponentProps<"div"> & {
160:     side?: "left" | "right"
161:     variant?: "sidebar" | "floating" | "inset"
162:     collapsible?: "offcanvas" | "icon" | "none"
163:   }
164: >(
165:   (
166:     {
167:       side = "left",
168:       variant = "sidebar",
169:       collapsible = "offcanvas",
170:       className,
171:       children,
172:       ...props
173:     },
174:     ref
175:   ) => {
176:     const { isMobile, state, openMobile, setOpenMobile } = useSidebar()
177: 
178:     if (collapsible === "none") {
179:       return (
180:         <div
181:           className={cn(
182:             "bg-sidebar text-sidebar-foreground flex h-full w-[--sidebar-width] flex-col",
183:             className
184:           )}
185:           ref={ref}
186:           {...props}
187:         >
188:           {children}
189:         </div>
190:       )
191:     }
192: 
193:     if (isMobile) {
194:       return (
195:         <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
196:           <SheetContent
197:             data-sidebar="sidebar"
198:             data-mobile="true"
199:             className="bg-sidebar text-sidebar-foreground w-[--sidebar-width] p-0 [&>button]:hidden"
200:             style={
201:               {
202:                 "--sidebar-width": SIDEBAR_WIDTH_MOBILE
203:               } as React.CSSProperties
204:             }
205:             side={side}
206:           >
207:             <div className="flex size-full flex-col">{children}</div>
208:           </SheetContent>
209:         </Sheet>
210:       )
211:     }
212: 
213:     return (
214:       <div
215:         ref={ref}
216:         className="text-sidebar-foreground group peer hidden md:block"
217:         data-state={state}
218:         data-collapsible={state === "collapsed" ? collapsible : ""}
219:         data-variant={variant}
220:         data-side={side}
221:       >
222:         {/* This is what handles the sidebar gap on desktop */}
223:         <div
224:           className={cn(
225:             "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
226:             "group-data-[collapsible=offcanvas]:w-0",
227:             "group-data-[side=right]:rotate-180",
228:             variant === "floating" || variant === "inset"
229:               ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
230:               : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
231:           )}
232:         />
233:         <div
234:           className={cn(
235:             "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
236:             side === "left"
237:               ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
238:               : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
239: 
240:             variant === "floating" || variant === "inset"
241:               ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
242:               : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
243:             className
244:           )}
245:           {...props}
246:         >
247:           <div
248:             data-sidebar="sidebar"
249:             className="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex size-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow"
250:           >
251:             {children}
252:           </div>
253:         </div>
254:       </div>
255:     )
256:   }
257: )
258: Sidebar.displayName = "Sidebar"
259: 
260: const SidebarTrigger = React.forwardRef<
261:   React.ElementRef<typeof Button>,
262:   React.ComponentProps<typeof Button>
263: >(({ className, onClick, ...props }, ref) => {
264:   const { toggleSidebar } = useSidebar()
265: 
266:   return (
267:     <Button
268:       ref={ref}
269:       data-sidebar="trigger"
270:       variant="ghost"
271:       size="icon"
272:       className={cn("size-7", className)}
273:       onClick={event => {
274:         onClick?.(event)
275:         toggleSidebar()
276:       }}
277:       {...props}
278:     >
279:       <PanelLeft />
280:       <span className="sr-only">Toggle Sidebar</span>
281:     </Button>
282:   )
283: })
284: SidebarTrigger.displayName = "SidebarTrigger"
285: 
286: const SidebarRail = React.forwardRef<
287:   HTMLButtonElement,
288:   React.ComponentProps<"button">
289: >(({ className, ...props }, ref) => {
290:   const { toggleSidebar } = useSidebar()
291: 
292:   return (
293:     <button
294:       ref={ref}
295:       data-sidebar="rail"
296:       aria-label="Toggle Sidebar"
297:       tabIndex={-1}
298:       onClick={toggleSidebar}
299:       title="Toggle Sidebar"
300:       className={cn(
301:         "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
302:         "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
303:         "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
304:         "group-data-[collapsible=offcanvas]:hover:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
305:         "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
306:         "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
307:         className
308:       )}
309:       {...props}
310:     />
311:   )
312: })
313: SidebarRail.displayName = "SidebarRail"
314: 
315: const SidebarInset = React.forwardRef<
316:   HTMLDivElement,
317:   React.ComponentProps<"main">
318: >(({ className, ...props }, ref) => {
319:   return (
320:     <main
321:       ref={ref}
322:       className={cn(
323:         "bg-background relative flex min-h-svh flex-1 flex-col",
324:         "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
325:         className
326:       )}
327:       {...props}
328:     />
329:   )
330: })
331: SidebarInset.displayName = "SidebarInset"
332: 
333: const SidebarInput = React.forwardRef<
334:   React.ElementRef<typeof Input>,
335:   React.ComponentProps<typeof Input>
336: >(({ className, ...props }, ref) => {
337:   return (
338:     <Input
339:       ref={ref}
340:       data-sidebar="input"
341:       className={cn(
342:         "bg-background focus-visible:ring-sidebar-ring h-8 w-full shadow-none focus-visible:ring-2",
343:         className
344:       )}
345:       {...props}
346:     />
347:   )
348: })
349: SidebarInput.displayName = "SidebarInput"
350: 
351: const SidebarHeader = React.forwardRef<
352:   HTMLDivElement,
353:   React.ComponentProps<"div">
354: >(({ className, ...props }, ref) => {
355:   return (
356:     <div
357:       ref={ref}
358:       data-sidebar="header"
359:       className={cn("flex flex-col gap-2 p-2", className)}
360:       {...props}
361:     />
362:   )
363: })
364: SidebarHeader.displayName = "SidebarHeader"
365: 
366: const SidebarFooter = React.forwardRef<
367:   HTMLDivElement,
368:   React.ComponentProps<"div">
369: >(({ className, ...props }, ref) => {
370:   return (
371:     <div
372:       ref={ref}
373:       data-sidebar="footer"
374:       className={cn("flex flex-col gap-2 p-2", className)}
375:       {...props}
376:     />
377:   )
378: })
379: SidebarFooter.displayName = "SidebarFooter"
380: 
381: const SidebarSeparator = React.forwardRef<
382:   React.ElementRef<typeof Separator>,
383:   React.ComponentProps<typeof Separator>
384: >(({ className, ...props }, ref) => {
385:   return (
386:     <Separator
387:       ref={ref}
388:       data-sidebar="separator"
389:       className={cn("bg-sidebar-border mx-2 w-auto", className)}
390:       {...props}
391:     />
392:   )
393: })
394: SidebarSeparator.displayName = "SidebarSeparator"
395: 
396: const SidebarContent = React.forwardRef<
397:   HTMLDivElement,
398:   React.ComponentProps<"div">
399: >(({ className, ...props }, ref) => {
400:   return (
401:     <div
402:       ref={ref}
403:       data-sidebar="content"
404:       className={cn(
405:         "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
406:         className
407:       )}
408:       {...props}
409:     />
410:   )
411: })
412: SidebarContent.displayName = "SidebarContent"
413: 
414: const SidebarGroup = React.forwardRef<
415:   HTMLDivElement,
416:   React.ComponentProps<"div">
417: >(({ className, ...props }, ref) => {
418:   return (
419:     <div
420:       ref={ref}
421:       data-sidebar="group"
422:       className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
423:       {...props}
424:     />
425:   )
426: })
427: SidebarGroup.displayName = "SidebarGroup"
428: 
429: const SidebarGroupLabel = React.forwardRef<
430:   HTMLDivElement,
431:   React.ComponentProps<"div"> & { asChild?: boolean }
432: >(({ className, asChild = false, ...props }, ref) => {
433:   const Comp = asChild ? Slot : "div"
434: 
435:   return (
436:     <Comp
437:       ref={ref}
438:       data-sidebar="group-label"
439:       className={cn(
440:         "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-none transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
441:         "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
442:         className
443:       )}
444:       {...props}
445:     />
446:   )
447: })
448: SidebarGroupLabel.displayName = "SidebarGroupLabel"
449: 
450: const SidebarGroupAction = React.forwardRef<
451:   HTMLButtonElement,
452:   React.ComponentProps<"button"> & { asChild?: boolean }
453: >(({ className, asChild = false, ...props }, ref) => {
454:   const Comp = asChild ? Slot : "button"
455: 
456:   return (
457:     <Comp
458:       ref={ref}
459:       data-sidebar="group-action"
460:       className={cn(
461:         "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-none transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
462: 
463:         "after:absolute after:-inset-2 after:md:hidden",
464:         "group-data-[collapsible=icon]:hidden",
465:         className
466:       )}
467:       {...props}
468:     />
469:   )
470: })
471: SidebarGroupAction.displayName = "SidebarGroupAction"
472: 
473: const SidebarGroupContent = React.forwardRef<
474:   HTMLDivElement,
475:   React.ComponentProps<"div">
476: >(({ className, ...props }, ref) => (
477:   <div
478:     ref={ref}
479:     data-sidebar="group-content"
480:     className={cn("w-full text-sm", className)}
481:     {...props}
482:   />
483: ))
484: SidebarGroupContent.displayName = "SidebarGroupContent"
485: 
486: const SidebarMenu = React.forwardRef<
487:   HTMLUListElement,
488:   React.ComponentProps<"ul">
489: >(({ className, ...props }, ref) => (
490:   <ul
491:     ref={ref}
492:     data-sidebar="menu"
493:     className={cn("flex w-full min-w-0 flex-col gap-1", className)}
494:     {...props}
495:   />
496: ))
497: SidebarMenu.displayName = "SidebarMenu"
498: 
499: const SidebarMenuItem = React.forwardRef<
500:   HTMLLIElement,
501:   React.ComponentProps<"li">
502: >(({ className, ...props }, ref) => (
503:   <li
504:     ref={ref}
505:     data-sidebar="menu-item"
506:     className={cn("group/menu-item relative", className)}
507:     {...props}
508:   />
509: ))
510: SidebarMenuItem.displayName = "SidebarMenuItem"
511: 
512: const sidebarMenuButtonVariants = cva(
513:   "peer/menu-button ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none transition-[width,height,padding] focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
514:   {
515:     variants: {
516:       variant: {
517:         default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
518:         outline:
519:           "bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
520:       },
521:       size: {
522:         default: "h-8 text-sm",
523:         sm: "h-7 text-xs",
524:         lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
525:       }
526:     },
527:     defaultVariants: {
528:       variant: "default",
529:       size: "default"
530:     }
531:   }
532: )
533: 
534: const SidebarMenuButton = React.forwardRef<
535:   HTMLButtonElement,
536:   React.ComponentProps<"button"> & {
537:     asChild?: boolean
538:     isActive?: boolean
539:     tooltip?: string | React.ComponentProps<typeof TooltipContent>
540:   } & VariantProps<typeof sidebarMenuButtonVariants>
541: >(
542:   (
543:     {
544:       asChild = false,
545:       isActive = false,
546:       variant = "default",
547:       size = "default",
548:       tooltip,
549:       className,
550:       ...props
551:     },
552:     ref
553:   ) => {
554:     const Comp = asChild ? Slot : "button"
555:     const { isMobile, state } = useSidebar()
556: 
557:     const button = (
558:       <Comp
559:         ref={ref}
560:         data-sidebar="menu-button"
561:         data-size={size}
562:         data-active={isActive}
563:         className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
564:         {...props}
565:       />
566:     )
567: 
568:     if (!tooltip) {
569:       return button
570:     }
571: 
572:     if (typeof tooltip === "string") {
573:       tooltip = {
574:         children: tooltip
575:       }
576:     }
577: 
578:     return (
579:       <Tooltip>
580:         <TooltipTrigger asChild>{button}</TooltipTrigger>
581:         <TooltipContent
582:           side="right"
583:           align="center"
584:           hidden={state !== "collapsed" || isMobile}
585:           {...tooltip}
586:         />
587:       </Tooltip>
588:     )
589:   }
590: )
591: SidebarMenuButton.displayName = "SidebarMenuButton"
592: 
593: const SidebarMenuAction = React.forwardRef<
594:   HTMLButtonElement,
595:   React.ComponentProps<"button"> & {
596:     asChild?: boolean
597:     showOnHover?: boolean
598:   }
599: >(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
600:   const Comp = asChild ? Slot : "button"
601: 
602:   return (
603:     <Comp
604:       ref={ref}
605:       data-sidebar="menu-action"
606:       className={cn(
607:         "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-none transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
608: 
609:         "after:absolute after:-inset-2 after:md:hidden",
610:         "peer-data-[size=sm]/menu-button:top-1",
611:         "peer-data-[size=default]/menu-button:top-1.5",
612:         "peer-data-[size=lg]/menu-button:top-2.5",
613:         "group-data-[collapsible=icon]:hidden",
614:         showOnHover &&
615:           "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
616:         className
617:       )}
618:       {...props}
619:     />
620:   )
621: })
622: SidebarMenuAction.displayName = "SidebarMenuAction"
623: 
624: const SidebarMenuBadge = React.forwardRef<
625:   HTMLDivElement,
626:   React.ComponentProps<"div">
627: >(({ className, ...props }, ref) => (
628:   <div
629:     ref={ref}
630:     data-sidebar="menu-badge"
631:     className={cn(
632:       "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums",
633:       "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
634:       "peer-data-[size=sm]/menu-button:top-1",
635:       "peer-data-[size=default]/menu-button:top-1.5",
636:       "peer-data-[size=lg]/menu-button:top-2.5",
637:       "group-data-[collapsible=icon]:hidden",
638:       className
639:     )}
640:     {...props}
641:   />
642: ))
643: SidebarMenuBadge.displayName = "SidebarMenuBadge"
644: 
645: const SidebarMenuSkeleton = React.forwardRef<
646:   HTMLDivElement,
647:   React.ComponentProps<"div"> & {
648:     showIcon?: boolean
649:   }
650: >(({ className, showIcon = false, ...props }, ref) => {
651: 
652:   const width = React.useMemo(() => {
653:     return `${Math.floor(Math.random() * 40) + 50}%`
654:   }, [])
655: 
656:   return (
657:     <div
658:       ref={ref}
659:       data-sidebar="menu-skeleton"
660:       className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
661:       {...props}
662:     >
663:       {showIcon && (
664:         <Skeleton
665:           className="size-4 rounded-md"
666:           data-sidebar="menu-skeleton-icon"
667:         />
668:       )}
669:       <Skeleton
670:         className="h-4 max-w-[--skeleton-width] flex-1"
671:         data-sidebar="menu-skeleton-text"
672:         style={
673:           {
674:             "--skeleton-width": width
675:           } as React.CSSProperties
676:         }
677:       />
678:     </div>
679:   )
680: })
681: SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"
682: 
683: const SidebarMenuSub = React.forwardRef<
684:   HTMLUListElement,
685:   React.ComponentProps<"ul">
686: >(({ className, ...props }, ref) => (
687:   <ul
688:     ref={ref}
689:     data-sidebar="menu-sub"
690:     className={cn(
691:       "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
692:       "group-data-[collapsible=icon]:hidden",
693:       className
694:     )}
695:     {...props}
696:   />
697: ))
698: SidebarMenuSub.displayName = "SidebarMenuSub"
699: 
700: const SidebarMenuSubItem = React.forwardRef<
701:   HTMLLIElement,
702:   React.ComponentProps<"li">
703: >(({ ...props }, ref) => <li ref={ref} {...props} />)
704: SidebarMenuSubItem.displayName = "SidebarMenuSubItem"
705: 
706: const SidebarMenuSubButton = React.forwardRef<
707:   HTMLAnchorElement,
708:   React.ComponentProps<"a"> & {
709:     asChild?: boolean
710:     size?: "sm" | "md"
711:     isActive?: boolean
712:   }
713: >(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
714:   const Comp = asChild ? Slot : "a"
715: 
716:   return (
717:     <Comp
718:       ref={ref}
719:       data-sidebar="menu-sub-button"
720:       data-size={size}
721:       data-active={isActive}
722:       className={cn(
723:         "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
724:         "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
725:         size === "sm" && "text-xs",
726:         size === "md" && "text-sm",
727:         "group-data-[collapsible=icon]:hidden",
728:         className
729:       )}
730:       {...props}
731:     />
732:   )
733: })
734: SidebarMenuSubButton.displayName = "SidebarMenuSubButton"
735: 
736: export {
737:   Sidebar,
738:   SidebarContent,
739:   SidebarFooter,
740:   SidebarGroup,
741:   SidebarGroupAction,
742:   SidebarGroupContent,
743:   SidebarGroupLabel,
744:   SidebarHeader,
745:   SidebarInput,
746:   SidebarInset,
747:   SidebarMenu,
748:   SidebarMenuAction,
749:   SidebarMenuBadge,
750:   SidebarMenuButton,
751:   SidebarMenuItem,
752:   SidebarMenuSkeleton,
753:   SidebarMenuSub,
754:   SidebarMenuSubButton,
755:   SidebarMenuSubItem,
756:   SidebarProvider,
757:   SidebarRail,
758:   SidebarSeparator,
759:   SidebarTrigger,
760:   useSidebar
761: }
````

## File: components/ui/skeleton.tsx
````typescript
 1: import { cn } from "@/lib/utils"
 2: 
 3: function Skeleton({
 4:   className,
 5:   ...props
 6: }: React.HTMLAttributes<HTMLDivElement>) {
 7:   return (
 8:     <div
 9:       className={cn("bg-muted animate-pulse rounded-md", className)}
10:       {...props}
11:     />
12:   )
13: }
14: 
15: export { Skeleton }
````

## File: components/ui/slider.tsx
````typescript
 1: "use client"
 2: 
 3: import * as React from "react"
 4: import * as SliderPrimitive from "@radix-ui/react-slider"
 5: 
 6: import { cn } from "@/lib/utils"
 7: 
 8: const Slider = React.forwardRef<
 9:   React.ElementRef<typeof SliderPrimitive.Root>,
10:   React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
11: >(({ className, ...props }, ref) => (
12:   <SliderPrimitive.Root
13:     ref={ref}
14:     className={cn(
15:       "relative flex w-full touch-none select-none items-center",
16:       className
17:     )}
18:     {...props}
19:   >
20:     <SliderPrimitive.Track className="bg-secondary relative h-2 w-full grow overflow-hidden rounded-full">
21:       <SliderPrimitive.Range className="bg-primary absolute h-full" />
22:     </SliderPrimitive.Track>
23:     <SliderPrimitive.Thumb className="border-primary bg-background ring-offset-background focus-visible:ring-ring block size-5 rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
24:   </SliderPrimitive.Root>
25: ))
26: Slider.displayName = SliderPrimitive.Root.displayName
27: 
28: export { Slider }
````

## File: components/ui/sonner.tsx
````typescript
 1: "use client"
 2: 
 3: import { useTheme } from "next-themes"
 4: import { Toaster as Sonner } from "sonner"
 5: 
 6: type ToasterProps = React.ComponentProps<typeof Sonner>
 7: 
 8: const Toaster = ({ ...props }: ToasterProps) => {
 9:   const { theme = "system" } = useTheme()
10: 
11:   return (
12:     <Sonner
13:       theme={theme as ToasterProps["theme"]}
14:       className="toaster group"
15:       toastOptions={{
16:         classNames: {
17:           toast:
18:             "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
19:           description: "group-[.toast]:text-muted-foreground",
20:           actionButton:
21:             "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
22:           cancelButton:
23:             "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
24:         }
25:       }}
26:       {...props}
27:     />
28:   )
29: }
30: 
31: export { Toaster }
````

## File: components/ui/switch.tsx
````typescript
 1: "use client"
 2: 
 3: import * as React from "react"
 4: import * as SwitchPrimitives from "@radix-ui/react-switch"
 5: 
 6: import { cn } from "@/lib/utils"
 7: 
 8: const Switch = React.forwardRef<
 9:   React.ElementRef<typeof SwitchPrimitives.Root>,
10:   React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
11: >(({ className, ...props }, ref) => (
12:   <SwitchPrimitives.Root
13:     className={cn(
14:       "focus-visible:ring-ring focus-visible:ring-offset-background data-[state=checked]:bg-primary data-[state=unchecked]:bg-input peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
15:       className
16:     )}
17:     {...props}
18:     ref={ref}
19:   >
20:     <SwitchPrimitives.Thumb
21:       className={cn(
22:         "bg-background pointer-events-none block size-5 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
23:       )}
24:     />
25:   </SwitchPrimitives.Root>
26: ))
27: Switch.displayName = SwitchPrimitives.Root.displayName
28: 
29: export { Switch }
````

## File: components/ui/table.tsx
````typescript
  1: import * as React from "react"
  2: 
  3: import { cn } from "@/lib/utils"
  4: 
  5: const Table = React.forwardRef<
  6:   HTMLTableElement,
  7:   React.HTMLAttributes<HTMLTableElement>
  8: >(({ className, ...props }, ref) => (
  9:   <div className="relative w-full overflow-auto">
 10:     <table
 11:       ref={ref}
 12:       className={cn("w-full caption-bottom text-sm", className)}
 13:       {...props}
 14:     />
 15:   </div>
 16: ))
 17: Table.displayName = "Table"
 18: 
 19: const TableHeader = React.forwardRef<
 20:   HTMLTableSectionElement,
 21:   React.HTMLAttributes<HTMLTableSectionElement>
 22: >(({ className, ...props }, ref) => (
 23:   <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
 24: ))
 25: TableHeader.displayName = "TableHeader"
 26: 
 27: const TableBody = React.forwardRef<
 28:   HTMLTableSectionElement,
 29:   React.HTMLAttributes<HTMLTableSectionElement>
 30: >(({ className, ...props }, ref) => (
 31:   <tbody
 32:     ref={ref}
 33:     className={cn("[&_tr:last-child]:border-0", className)}
 34:     {...props}
 35:   />
 36: ))
 37: TableBody.displayName = "TableBody"
 38: 
 39: const TableFooter = React.forwardRef<
 40:   HTMLTableSectionElement,
 41:   React.HTMLAttributes<HTMLTableSectionElement>
 42: >(({ className, ...props }, ref) => (
 43:   <tfoot
 44:     ref={ref}
 45:     className={cn(
 46:       "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
 47:       className
 48:     )}
 49:     {...props}
 50:   />
 51: ))
 52: TableFooter.displayName = "TableFooter"
 53: 
 54: const TableRow = React.forwardRef<
 55:   HTMLTableRowElement,
 56:   React.HTMLAttributes<HTMLTableRowElement>
 57: >(({ className, ...props }, ref) => (
 58:   <tr
 59:     ref={ref}
 60:     className={cn(
 61:       "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
 62:       className
 63:     )}
 64:     {...props}
 65:   />
 66: ))
 67: TableRow.displayName = "TableRow"
 68: 
 69: const TableHead = React.forwardRef<
 70:   HTMLTableCellElement,
 71:   React.ThHTMLAttributes<HTMLTableCellElement>
 72: >(({ className, ...props }, ref) => (
 73:   <th
 74:     ref={ref}
 75:     className={cn(
 76:       "text-muted-foreground h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0",
 77:       className
 78:     )}
 79:     {...props}
 80:   />
 81: ))
 82: TableHead.displayName = "TableHead"
 83: 
 84: const TableCell = React.forwardRef<
 85:   HTMLTableCellElement,
 86:   React.TdHTMLAttributes<HTMLTableCellElement>
 87: >(({ className, ...props }, ref) => (
 88:   <td
 89:     ref={ref}
 90:     className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
 91:     {...props}
 92:   />
 93: ))
 94: TableCell.displayName = "TableCell"
 95: 
 96: const TableCaption = React.forwardRef<
 97:   HTMLTableCaptionElement,
 98:   React.HTMLAttributes<HTMLTableCaptionElement>
 99: >(({ className, ...props }, ref) => (
100:   <caption
101:     ref={ref}
102:     className={cn("text-muted-foreground mt-4 text-sm", className)}
103:     {...props}
104:   />
105: ))
106: TableCaption.displayName = "TableCaption"
107: 
108: export {
109:   Table,
110:   TableHeader,
111:   TableBody,
112:   TableFooter,
113:   TableHead,
114:   TableRow,
115:   TableCell,
116:   TableCaption
117: }
````

## File: components/ui/tabs.tsx
````typescript
 1: "use client"
 2: 
 3: import * as React from "react"
 4: import * as TabsPrimitive from "@radix-ui/react-tabs"
 5: 
 6: import { cn } from "@/lib/utils"
 7: 
 8: const Tabs = TabsPrimitive.Root
 9: 
10: const TabsList = React.forwardRef<
11:   React.ElementRef<typeof TabsPrimitive.List>,
12:   React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
13: >(({ className, ...props }, ref) => (
14:   <TabsPrimitive.List
15:     ref={ref}
16:     className={cn(
17:       "bg-muted text-muted-foreground inline-flex h-10 items-center justify-center rounded-md p-1",
18:       className
19:     )}
20:     {...props}
21:   />
22: ))
23: TabsList.displayName = TabsPrimitive.List.displayName
24: 
25: const TabsTrigger = React.forwardRef<
26:   React.ElementRef<typeof TabsPrimitive.Trigger>,
27:   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
28: >(({ className, ...props }, ref) => (
29:   <TabsPrimitive.Trigger
30:     ref={ref}
31:     className={cn(
32:       "ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm",
33:       className
34:     )}
35:     {...props}
36:   />
37: ))
38: TabsTrigger.displayName = TabsPrimitive.Trigger.displayName
39: 
40: const TabsContent = React.forwardRef<
41:   React.ElementRef<typeof TabsPrimitive.Content>,
42:   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
43: >(({ className, ...props }, ref) => (
44:   <TabsPrimitive.Content
45:     ref={ref}
46:     className={cn(
47:       "ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
48:       className
49:     )}
50:     {...props}
51:   />
52: ))
53: TabsContent.displayName = TabsPrimitive.Content.displayName
54: 
55: export { Tabs, TabsList, TabsTrigger, TabsContent }
````

## File: components/ui/textarea.tsx
````typescript
 1: import * as React from "react"
 2: 
 3: import { cn } from "@/lib/utils"
 4: 
 5: const Textarea = React.forwardRef<
 6:   HTMLTextAreaElement,
 7:   React.ComponentProps<"textarea">
 8: >(({ className, ...props }, ref) => {
 9:   return (
10:     <textarea
11:       className={cn(
12:         "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[80px] w-full rounded-md border px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
13:         className
14:       )}
15:       ref={ref}
16:       {...props}
17:     />
18:   )
19: })
20: Textarea.displayName = "Textarea"
21: 
22: export { Textarea }
````

## File: components/ui/theme-toggle.tsx
````typescript
 1: "use client"
 2: 
 3: 
 4: 
 5: 
 6: 
 7: 
 8: 
 9: 
10: 
11: 
12: 
13: 
14: 
15: 
16: 
17: 
18: 
19: 
20: 
21: 
22: import { useTheme } from "next-themes"
23: import { Moon, Sun } from "lucide-react"
24: import { useEffect, useState } from "react"
25: 
26: export function ThemeToggle() {
27:   const { theme, setTheme } = useTheme()
28:   const [mounted, setMounted] = useState(false)
29: 
30: 
31:   useEffect(() => {
32:     setMounted(true)
33:   }, [])
34: 
35:   if (!mounted) {
36:     return null
37:   }
38: 
39:   const isDark = theme === "dark"
40: 
41:   const toggleTheme = () => {
42:     setTheme(isDark ? "light" : "dark")
43:   }
44: 
45:   return (
46:     <button
47:       onClick={toggleTheme}
48:       className="hover:bg-accent hover:text-accent-foreground focus:ring-ring rounded-full p-2 focus:outline-none focus:ring-2"
49:       aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
50:     >
51:       {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
52:     </button>
53:   )
54: }
````

## File: components/ui/toast.tsx
````typescript
  1: "use client"
  2: 
  3: import * as React from "react"
  4: import * as ToastPrimitives from "@radix-ui/react-toast"
  5: import { cva, type VariantProps } from "class-variance-authority"
  6: import { X } from "lucide-react"
  7: 
  8: import { cn } from "@/lib/utils"
  9: 
 10: const ToastProvider = ToastPrimitives.Provider
 11: 
 12: const ToastViewport = React.forwardRef<
 13:   React.ElementRef<typeof ToastPrimitives.Viewport>,
 14:   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
 15: >(({ className, ...props }, ref) => (
 16:   <ToastPrimitives.Viewport
 17:     ref={ref}
 18:     className={cn(
 19:       "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
 20:       className
 21:     )}
 22:     {...props}
 23:   />
 24: ))
 25: ToastViewport.displayName = ToastPrimitives.Viewport.displayName
 26: 
 27: const toastVariants = cva(
 28:   "data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none",
 29:   {
 30:     variants: {
 31:       variant: {
 32:         default: "bg-background text-foreground border",
 33:         destructive:
 34:           "destructive border-destructive bg-destructive text-destructive-foreground group"
 35:       }
 36:     },
 37:     defaultVariants: {
 38:       variant: "default"
 39:     }
 40:   }
 41: )
 42: 
 43: const Toast = React.forwardRef<
 44:   React.ElementRef<typeof ToastPrimitives.Root>,
 45:   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
 46:     VariantProps<typeof toastVariants>
 47: >(({ className, variant, ...props }, ref) => {
 48:   return (
 49:     <ToastPrimitives.Root
 50:       ref={ref}
 51:       className={cn(toastVariants({ variant }), className)}
 52:       {...props}
 53:     />
 54:   )
 55: })
 56: Toast.displayName = ToastPrimitives.Root.displayName
 57: 
 58: const ToastAction = React.forwardRef<
 59:   React.ElementRef<typeof ToastPrimitives.Action>,
 60:   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
 61: >(({ className, ...props }, ref) => (
 62:   <ToastPrimitives.Action
 63:     ref={ref}
 64:     className={cn(
 65:       "ring-offset-background hover:bg-secondary focus:ring-ring group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
 66:       className
 67:     )}
 68:     {...props}
 69:   />
 70: ))
 71: ToastAction.displayName = ToastPrimitives.Action.displayName
 72: 
 73: const ToastClose = React.forwardRef<
 74:   React.ElementRef<typeof ToastPrimitives.Close>,
 75:   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
 76: >(({ className, ...props }, ref) => (
 77:   <ToastPrimitives.Close
 78:     ref={ref}
 79:     className={cn(
 80:       "text-foreground/50 hover:text-foreground absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
 81:       className
 82:     )}
 83:     toast-close=""
 84:     {...props}
 85:   >
 86:     <X className="size-4" />
 87:   </ToastPrimitives.Close>
 88: ))
 89: ToastClose.displayName = ToastPrimitives.Close.displayName
 90: 
 91: const ToastTitle = React.forwardRef<
 92:   React.ElementRef<typeof ToastPrimitives.Title>,
 93:   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
 94: >(({ className, ...props }, ref) => (
 95:   <ToastPrimitives.Title
 96:     ref={ref}
 97:     className={cn("text-sm font-semibold", className)}
 98:     {...props}
 99:   />
100: ))
101: ToastTitle.displayName = ToastPrimitives.Title.displayName
102: 
103: const ToastDescription = React.forwardRef<
104:   React.ElementRef<typeof ToastPrimitives.Description>,
105:   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
106: >(({ className, ...props }, ref) => (
107:   <ToastPrimitives.Description
108:     ref={ref}
109:     className={cn("text-sm opacity-90", className)}
110:     {...props}
111:   />
112: ))
113: ToastDescription.displayName = ToastPrimitives.Description.displayName
114: 
115: type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>
116: 
117: type ToastActionElement = React.ReactElement<typeof ToastAction>
118: 
119: export {
120:   type ToastProps,
121:   type ToastActionElement,
122:   ToastProvider,
123:   ToastViewport,
124:   Toast,
125:   ToastTitle,
126:   ToastDescription,
127:   ToastClose,
128:   ToastAction
129: }
````

## File: components/ui/toaster.tsx
````typescript
 1: "use client"
 2: 
 3: import {
 4:   Toast,
 5:   ToastClose,
 6:   ToastDescription,
 7:   ToastProvider,
 8:   ToastTitle,
 9:   ToastViewport
10: } from "@/components/ui/toast"
11: import { useToast } from "@/components/ui/use-toast"
12: 
13: export function Toaster() {
14:   const { toasts } = useToast()
15: 
16:   return (
17:     <ToastProvider>
18:       {toasts.map(function ({ id, title, description, action, ...props }) {
19:         return (
20:           <Toast key={id} {...props}>
21:             <div className="grid gap-1">
22:               {title && <ToastTitle>{title}</ToastTitle>}
23:               {description && (
24:                 <ToastDescription>{description}</ToastDescription>
25:               )}
26:             </div>
27:             {action}
28:             <ToastClose />
29:           </Toast>
30:         )
31:       })}
32:       <ToastViewport />
33:     </ToastProvider>
34:   )
35: }
````

## File: components/ui/toggle-group.tsx
````typescript
 1: "use client"
 2: 
 3: import * as React from "react"
 4: import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
 5: import { type VariantProps } from "class-variance-authority"
 6: 
 7: import { cn } from "@/lib/utils"
 8: import { toggleVariants } from "@/components/ui/toggle"
 9: 
10: const ToggleGroupContext = React.createContext<
11:   VariantProps<typeof toggleVariants>
12: >({
13:   size: "default",
14:   variant: "default"
15: })
16: 
17: const ToggleGroup = React.forwardRef<
18:   React.ElementRef<typeof ToggleGroupPrimitive.Root>,
19:   React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
20:     VariantProps<typeof toggleVariants>
21: >(({ className, variant, size, children, ...props }, ref) => (
22:   <ToggleGroupPrimitive.Root
23:     ref={ref}
24:     className={cn("flex items-center justify-center gap-1", className)}
25:     {...props}
26:   >
27:     <ToggleGroupContext.Provider value={{ variant, size }}>
28:       {children}
29:     </ToggleGroupContext.Provider>
30:   </ToggleGroupPrimitive.Root>
31: ))
32: 
33: ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName
34: 
35: const ToggleGroupItem = React.forwardRef<
36:   React.ElementRef<typeof ToggleGroupPrimitive.Item>,
37:   React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
38:     VariantProps<typeof toggleVariants>
39: >(({ className, children, variant, size, ...props }, ref) => {
40:   const context = React.useContext(ToggleGroupContext)
41: 
42:   return (
43:     <ToggleGroupPrimitive.Item
44:       ref={ref}
45:       className={cn(
46:         toggleVariants({
47:           variant: context.variant || variant,
48:           size: context.size || size
49:         }),
50:         className
51:       )}
52:       {...props}
53:     >
54:       {children}
55:     </ToggleGroupPrimitive.Item>
56:   )
57: })
58: 
59: ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName
60: 
61: export { ToggleGroup, ToggleGroupItem }
````

## File: components/ui/toggle.tsx
````typescript
 1: "use client"
 2: 
 3: import * as React from "react"
 4: import * as TogglePrimitive from "@radix-ui/react-toggle"
 5: import { cva, type VariantProps } from "class-variance-authority"
 6: 
 7: import { cn } from "@/lib/utils"
 8: 
 9: const toggleVariants = cva(
10:   "ring-offset-background hover:bg-muted hover:text-muted-foreground focus-visible:ring-ring data-[state=on]:bg-accent data-[state=on]:text-accent-foreground inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
11:   {
12:     variants: {
13:       variant: {
14:         default: "bg-transparent",
15:         outline:
16:           "border-input hover:bg-accent hover:text-accent-foreground border bg-transparent"
17:       },
18:       size: {
19:         default: "h-10 min-w-10 px-3",
20:         sm: "h-9 min-w-9 px-2.5",
21:         lg: "h-11 min-w-11 px-5"
22:       }
23:     },
24:     defaultVariants: {
25:       variant: "default",
26:       size: "default"
27:     }
28:   }
29: )
30: 
31: const Toggle = React.forwardRef<
32:   React.ElementRef<typeof TogglePrimitive.Root>,
33:   React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
34:     VariantProps<typeof toggleVariants>
35: >(({ className, variant, size, ...props }, ref) => (
36:   <TogglePrimitive.Root
37:     ref={ref}
38:     className={cn(toggleVariants({ variant, size, className }))}
39:     {...props}
40:   />
41: ))
42: 
43: Toggle.displayName = TogglePrimitive.Root.displayName
44: 
45: export { Toggle, toggleVariants }
````

## File: components/ui/tooltip.tsx
````typescript
 1: "use client"
 2: 
 3: import * as React from "react"
 4: import * as TooltipPrimitive from "@radix-ui/react-tooltip"
 5: 
 6: import { cn } from "@/lib/utils"
 7: 
 8: const TooltipProvider = TooltipPrimitive.Provider
 9: 
10: const Tooltip = TooltipPrimitive.Root
11: 
12: const TooltipTrigger = TooltipPrimitive.Trigger
13: 
14: const TooltipContent = React.forwardRef<
15:   React.ElementRef<typeof TooltipPrimitive.Content>,
16:   React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
17: >(({ className, sideOffset = 4, ...props }, ref) => (
18:   <TooltipPrimitive.Content
19:     ref={ref}
20:     sideOffset={sideOffset}
21:     className={cn(
22:       "bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md border px-3 py-1.5 text-sm shadow-md",
23:       className
24:     )}
25:     {...props}
26:   />
27: ))
28: TooltipContent.displayName = TooltipPrimitive.Content.displayName
29: 
30: export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
````

## File: components/ui/use-toast.ts
````typescript
  1: "use client"
  2: 
  3: 
  4: import * as React from "react"
  5: 
  6: import type { ToastActionElement, ToastProps } from "@/components/ui/toast"
  7: 
  8: const TOAST_LIMIT = 1
  9: const TOAST_REMOVE_DELAY = 1000000
 10: 
 11: type ToasterToast = ToastProps & {
 12:   id: string
 13:   title?: React.ReactNode
 14:   description?: React.ReactNode
 15:   action?: ToastActionElement
 16: }
 17: 
 18: const actionTypes = {
 19:   ADD_TOAST: "ADD_TOAST",
 20:   UPDATE_TOAST: "UPDATE_TOAST",
 21:   DISMISS_TOAST: "DISMISS_TOAST",
 22:   REMOVE_TOAST: "REMOVE_TOAST"
 23: } as const
 24: 
 25: let count = 0
 26: 
 27: function genId() {
 28:   count = (count + 1) % Number.MAX_SAFE_INTEGER
 29:   return count.toString()
 30: }
 31: 
 32: type ActionType = typeof actionTypes
 33: 
 34: type Action =
 35:   | {
 36:       type: ActionType["ADD_TOAST"]
 37:       toast: ToasterToast
 38:     }
 39:   | {
 40:       type: ActionType["UPDATE_TOAST"]
 41:       toast: Partial<ToasterToast>
 42:     }
 43:   | {
 44:       type: ActionType["DISMISS_TOAST"]
 45:       toastId?: ToasterToast["id"]
 46:     }
 47:   | {
 48:       type: ActionType["REMOVE_TOAST"]
 49:       toastId?: ToasterToast["id"]
 50:     }
 51: 
 52: interface State {
 53:   toasts: ToasterToast[]
 54: }
 55: 
 56: const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()
 57: 
 58: const addToRemoveQueue = (toastId: string) => {
 59:   if (toastTimeouts.has(toastId)) {
 60:     return
 61:   }
 62: 
 63:   const timeout = setTimeout(() => {
 64:     toastTimeouts.delete(toastId)
 65:     dispatch({
 66:       type: "REMOVE_TOAST",
 67:       toastId: toastId
 68:     })
 69:   }, TOAST_REMOVE_DELAY)
 70: 
 71:   toastTimeouts.set(toastId, timeout)
 72: }
 73: 
 74: export const reducer = (state: State, action: Action): State => {
 75:   switch (action.type) {
 76:     case "ADD_TOAST":
 77:       return {
 78:         ...state,
 79:         toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
 80:       }
 81: 
 82:     case "UPDATE_TOAST":
 83:       return {
 84:         ...state,
 85:         toasts: state.toasts.map(t =>
 86:           t.id === action.toast.id ? { ...t, ...action.toast } : t
 87:         )
 88:       }
 89: 
 90:     case "DISMISS_TOAST": {
 91:       const { toastId } = action
 92: 
 93: 
 94: 
 95:       if (toastId) {
 96:         addToRemoveQueue(toastId)
 97:       } else {
 98:         state.toasts.forEach(toast => {
 99:           addToRemoveQueue(toast.id)
100:         })
101:       }
102: 
103:       return {
104:         ...state,
105:         toasts: state.toasts.map(t =>
106:           t.id === toastId || toastId === undefined
107:             ? {
108:                 ...t,
109:                 open: false
110:               }
111:             : t
112:         )
113:       }
114:     }
115:     case "REMOVE_TOAST":
116:       if (action.toastId === undefined) {
117:         return {
118:           ...state,
119:           toasts: []
120:         }
121:       }
122:       return {
123:         ...state,
124:         toasts: state.toasts.filter(t => t.id !== action.toastId)
125:       }
126:   }
127: }
128: 
129: const listeners: Array<(state: State) => void> = []
130: 
131: let memoryState: State = { toasts: [] }
132: 
133: function dispatch(action: Action) {
134:   memoryState = reducer(memoryState, action)
135:   listeners.forEach(listener => {
136:     listener(memoryState)
137:   })
138: }
139: 
140: type Toast = Omit<ToasterToast, "id">
141: 
142: function toast({ ...props }: Toast) {
143:   const id = genId()
144: 
145:   const update = (props: ToasterToast) =>
146:     dispatch({
147:       type: "UPDATE_TOAST",
148:       toast: { ...props, id }
149:     })
150:   const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })
151: 
152:   dispatch({
153:     type: "ADD_TOAST",
154:     toast: {
155:       ...props,
156:       id,
157:       open: true,
158:       onOpenChange: open => {
159:         if (!open) dismiss()
160:       }
161:     }
162:   })
163: 
164:   return {
165:     id: id,
166:     dismiss,
167:     update
168:   }
169: }
170: 
171: function useToast() {
172:   const [state, setState] = React.useState<State>(memoryState)
173: 
174:   React.useEffect(() => {
175:     listeners.push(setState)
176:     return () => {
177:       const index = listeners.indexOf(setState)
178:       if (index > -1) {
179:         listeners.splice(index, 1)
180:       }
181:     }
182:   }, [state])
183: 
184:   return {
185:     ...state,
186:     toast,
187:     dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId })
188:   }
189: }
190: 
191: export { useToast, toast }
````

## File: components/utilities/providers.tsx
````typescript
 1: "use client"
 2: 
 3: 
 4: 
 5: 
 6: 
 7: 
 8: 
 9: 
10: 
11: 
12: 
13: 
14: 
15: 
16: 
17: 
18: 
19: 
20: 
21: import {
22:   ThemeProvider as NextThemesProvider,
23:   type Attribute
24: } from "next-themes"
25: import { ReactNode } from "react"
26: 
27: interface ThemeProviderProps {
28:   children: ReactNode
29:   attribute?: Attribute
30:   defaultTheme?: string
31:   enableSystem?: boolean
32:   disableTransitionOnChange?: boolean
33: }
34: 
35: export function ThemeProvider({
36:   children,
37:   attribute = "class",
38:   defaultTheme = "system",
39:   enableSystem = true,
40:   disableTransitionOnChange = true
41: }: ThemeProviderProps) {
42:   return (
43:     <NextThemesProvider
44:       attribute={attribute}
45:       defaultTheme={defaultTheme}
46:       enableSystem={enableSystem}
47:       disableTransitionOnChange={disableTransitionOnChange}
48:     >
49:       {children}
50:     </NextThemesProvider>
51:   )
52: }
````

## File: components/utilities/tailwind-indicator.tsx
````typescript
 1: "use server"
 2: 
 3: export async function TailwindIndicator() {
 4: 
 5:   if (process.env.NODE_ENV === "production") return null
 6: 
 7:   return (
 8:     <div className="fixed bottom-12 left-3 z-50 flex size-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white">
 9:       <div className="block sm:hidden">xs</div>
10:       <div className="hidden sm:block md:hidden">sm</div>
11:       <div className="hidden md:block lg:hidden">md</div>
12:       <div className="hidden lg:block xl:hidden">lg</div>
13:       <div className="hidden xl:block 2xl:hidden">xl</div>
14:       <div className="hidden 2xl:block">2xl</div>
15:     </div>
16:   )
17: }
````

## File: components/utilities/theme-switcher.tsx
````typescript
 1: "use client"
 2: 
 3: import { cn } from "@/lib/utils"
 4: import { Moon, Sun } from "lucide-react"
 5: import { useTheme } from "next-themes"
 6: import { HTMLAttributes, ReactNode } from "react"
 7: 
 8: interface ThemeSwitcherProps extends HTMLAttributes<HTMLDivElement> {
 9:   children?: ReactNode
10: }
11: 
12: export const ThemeSwitcher = ({ children, ...props }: ThemeSwitcherProps) => {
13:   const { setTheme, theme } = useTheme()
14: 
15:   const handleChange = (theme: "dark" | "light") => {
16:     localStorage.setItem("theme", theme)
17:     setTheme(theme)
18:   }
19: 
20:   return (
21:     <div
22:       className={cn(
23:         "p-1 hover:cursor-pointer hover:opacity-50",
24:         props.className
25:       )}
26:       onClick={() => handleChange(theme === "light" ? "dark" : "light")}
27:     >
28:       {theme === "dark" ? (
29:         <Moon className="size-6" />
30:       ) : (
31:         <Sun className="size-6" />
32:       )}
33:     </div>
34:   )
35: }
````

## File: db/db.ts
````typescript
 1: import {
 2:   badgesTable,
 3:   leaderboardTable,
 4:   profilesTable,
 5:   progressTable,
 6:   quizResultsTable,
 7:   wordStatsTable
 8: } from "@/db/schema"
 9: import { config } from "dotenv"
10: import { drizzle } from "drizzle-orm/postgres-js"
11: import postgres from "postgres"
12: 
13: 
14: config({ path: ".env.local" })
15: 
16: 
17: const schema = {
18:   profiles: profilesTable,
19:   progress: progressTable,
20:   quizResults: quizResultsTable,
21:   wordStats: wordStatsTable,
22:   leaderboard: leaderboardTable,
23:   badges: badgesTable
24: }
25: 
26: 
27: const client = postgres(process.env.DATABASE_URL!)
28: export const db = drizzle(client, { schema })
````

## File: db/migrations/001_complete_setup.sql
````sql
  1: CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  2: 
  3: 
  4: CREATE EXTENSION IF NOT EXISTS pgcrypto;
  5: 
  6: 
  7: 
  8: 
  9: 
 10: 
 11: CREATE OR REPLACE FUNCTION auth.jwt() RETURNS jsonb AS $$
 12: BEGIN
 13:   RETURN (
 14:     SELECT COALESCE(
 15:       nullif(current_setting('request.jwt.claim', true), ''),
 16:       '{}'
 17:     )::jsonb
 18:   );
 19: END;
 20: $$ LANGUAGE plpgsql STABLE;
 21: 
 22: -- Drop the existing auth.uid() function to avoid return type conflicts
 23: DROP FUNCTION IF EXISTS auth.uid();
 24: 
 25: -- Create function to get the current user's ID from Clerk JWT
 26: 
 27: CREATE OR REPLACE FUNCTION auth.uid() RETURNS text AS $$
 28: BEGIN
 29:   RETURN (auth.jwt() ->> 'sub')::text;
 30: END;
 31: $$ LANGUAGE plpgsql STABLE;
 32: 
 33: 
 34: 
 35: 
 36: 
 37: 
 38: CREATE TYPE quiz_type AS ENUM ('rapid_fire', 'standard');
 39: 
 40: 
 41: CREATE TYPE membership AS ENUM ('free', 'pro');
 42: 
 43: 
 44: CREATE TABLE IF NOT EXISTS profiles (
 45:   user_id TEXT PRIMARY KEY NOT NULL,
 46:   membership membership NOT NULL DEFAULT 'free',
 47:   stripe_customer_id TEXT,
 48:   stripe_subscription_id TEXT,
 49:   created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
 50:   updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
 51: );
 52: 
 53: 
 54: CREATE TABLE IF NOT EXISTS quiz_results (
 55:   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 56:   user_id TEXT NOT NULL,
 57:   quiz_type quiz_type NOT NULL,
 58:   score INTEGER NOT NULL,
 59:   total_questions INTEGER NOT NULL,
 60:   time_spent INTEGER,
 61:   categories TEXT[],
 62:   created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
 63:   updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
 64: );
 65: 
 66: 
 67: CREATE TABLE IF NOT EXISTS progress (
 68:   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 69:   user_id TEXT NOT NULL,
 70:   stars INTEGER NOT NULL DEFAULT 0,
 71:   words_learned INTEGER NOT NULL DEFAULT 0,
 72:   quizzes_played INTEGER NOT NULL DEFAULT 0,
 73:   created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
 74:   updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
 75: );
 76: 
 77: 
 78: CREATE TABLE IF NOT EXISTS word_stats (
 79:   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 80:   user_id TEXT NOT NULL,
 81:   word TEXT NOT NULL,
 82:   kanglish TEXT NOT NULL,
 83:   kannada TEXT,
 84:   icon TEXT,
 85:   category TEXT,
 86:   total_attempts INTEGER NOT NULL DEFAULT 0,
 87:   correct_count INTEGER NOT NULL DEFAULT 0,
 88:   created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
 89:   updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
 90: );
 91: 
 92: 
 93: 
 94: 
 95: 
 96: 
 97: ALTER PUBLICATION supabase_realtime ADD TABLE quiz_results;
 98: ALTER PUBLICATION supabase_realtime ADD TABLE progress;
 99: ALTER PUBLICATION supabase_realtime ADD TABLE word_stats;
100: ALTER PUBLICATION supabase_realtime ADD TABLE profiles;
101: 
102: 
103: 
104: 
105: 
106: 
107: ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
108: ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;
109: ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
110: ALTER TABLE word_stats ENABLE ROW LEVEL SECURITY;
111: 
112: 
113: CREATE POLICY "Users can view their own profile"
114: ON profiles FOR SELECT
115: TO authenticated
116: USING (auth.uid()::text = user_id OR auth.uid() IS NULL);
117: 
118: CREATE POLICY "Users can insert their own profile"
119: ON profiles FOR INSERT
120: TO authenticated
121: WITH CHECK (auth.uid()::text = user_id);
122: 
123: CREATE POLICY "Users can update their own profile"
124: ON profiles FOR UPDATE
125: TO authenticated
126: USING (auth.uid()::text = user_id)
127: WITH CHECK (auth.uid()::text = user_id);
128: 
129: CREATE POLICY "Users can delete their own profile"
130: ON profiles FOR DELETE
131: TO authenticated
132: USING (auth.uid()::text = user_id);
133: 
134: 
135: CREATE POLICY "Users can view their own quiz results"
136: ON quiz_results FOR SELECT
137: TO authenticated
138: USING (auth.uid()::text = user_id OR auth.uid() IS NULL);
139: 
140: CREATE POLICY "Users can insert their own quiz results"
141: ON quiz_results FOR INSERT
142: TO authenticated
143: WITH CHECK (auth.uid()::text = user_id);
144: 
145: CREATE POLICY "Users can update their own quiz results"
146: ON quiz_results FOR UPDATE
147: TO authenticated
148: USING (auth.uid()::text = user_id)
149: WITH CHECK (auth.uid()::text = user_id);
150: 
151: CREATE POLICY "Users can delete their own quiz results"
152: ON quiz_results FOR DELETE
153: TO authenticated
154: USING (auth.uid()::text = user_id);
155: 
156: 
157: CREATE POLICY "Users can view their own progress"
158: ON progress FOR SELECT
159: TO authenticated
160: USING (auth.uid()::text = user_id OR auth.uid() IS NULL);
161: 
162: CREATE POLICY "Users can insert their own progress"
163: ON progress FOR INSERT
164: TO authenticated
165: WITH CHECK (auth.uid()::text = user_id);
166: 
167: CREATE POLICY "Users can update their own progress"
168: ON progress FOR UPDATE
169: TO authenticated
170: USING (auth.uid()::text = user_id)
171: WITH CHECK (auth.uid()::text = user_id);
172: 
173: CREATE POLICY "Users can delete their own progress"
174: ON progress FOR DELETE
175: TO authenticated
176: USING (auth.uid()::text = user_id);
177: 
178: 
179: CREATE POLICY "Users can view their own word stats"
180: ON word_stats FOR SELECT
181: TO authenticated
182: USING (auth.uid()::text = user_id OR auth.uid() IS NULL);
183: 
184: CREATE POLICY "Users can insert their own word stats"
185: ON word_stats FOR INSERT
186: TO authenticated
187: WITH CHECK (auth.uid()::text = user_id);
188: 
189: CREATE POLICY "Users can update their own word stats"
190: ON word_stats FOR UPDATE
191: TO authenticated
192: USING (auth.uid()::text = user_id)
193: WITH CHECK (auth.uid()::text = user_id);
194: 
195: CREATE POLICY "Users can delete their own word stats"
196: ON word_stats FOR DELETE
197: TO authenticated
198: USING (auth.uid()::text = user_id);
199: 
200: 
201: 
202: 
203: 
204: 
205: CREATE OR REPLACE FUNCTION public.handle_new_user()
206: RETURNS TRIGGER AS $$
207: BEGIN
208: 
209:   INSERT INTO public.profiles (user_id)
210:   VALUES (new.id);
211: 
212: 
213:   INSERT INTO public.progress (user_id)
214:   VALUES (new.id);
215: 
216:   RETURN new;
217: END;
218: $$ LANGUAGE plpgsql SECURITY DEFINER;
219: 
220: 
221: DO $$
222: BEGIN
223:   IF NOT EXISTS (
224:     SELECT 1
225:     FROM pg_trigger
226:     WHERE tgname = 'on_auth_user_created'
227:   ) THEN
228: 
229:     CREATE TRIGGER on_auth_user_created
230:     AFTER INSERT ON auth.users
231:     FOR EACH ROW
232:     EXECUTE FUNCTION public.handle_new_user();
233:   END IF;
234: END
235: $$;
````

## File: db/migrations/002_leaderboard_setup.sql
````sql
  1: CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  2: 
  3: 
  4: CREATE TABLE IF NOT EXISTS "leaderboard" (
  5:   "user_id" TEXT PRIMARY KEY,
  6:   "total_attempts" INTEGER NOT NULL DEFAULT 0,
  7:   "correct_answers" INTEGER NOT NULL DEFAULT 0,
  8:   "accuracy_percentage" NUMERIC(5,2) NOT NULL DEFAULT 0,
  9:   "quizzes_completed" INTEGER NOT NULL DEFAULT 0,
 10:   "categories" TEXT[] DEFAULT '{}',
 11:   "last_updated" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
 12: );
 13: 
 14: 
 15: CREATE INDEX IF NOT EXISTS "leaderboard_accuracy_index" ON "leaderboard" ("accuracy_percentage");
 16: 
 17: 
 18: ALTER TABLE "leaderboard" ENABLE ROW LEVEL SECURITY;
 19: 
 20: 
 21: CREATE POLICY "Users can view leaderboard entries"
 22:   ON "leaderboard" FOR SELECT
 23:   USING (auth.role() = 'authenticated');
 24: 
 25: CREATE POLICY "Users can update only their own leaderboard entries"
 26:   ON "leaderboard" FOR UPDATE
 27:   USING (auth.uid()::text = user_id);
 28: 
 29: CREATE POLICY "Users can delete only their own leaderboard entries"
 30:   ON "leaderboard" FOR DELETE
 31:   USING (auth.uid()::text = user_id);
 32: 
 33: CREATE POLICY "Users can insert only their own leaderboard entries"
 34:   ON "leaderboard" FOR INSERT
 35:   WITH CHECK (auth.uid()::text = user_id);
 36: 
 37: 
 38: CREATE OR REPLACE FUNCTION update_leaderboard_from_quiz()
 39: RETURNS TRIGGER AS $$
 40: DECLARE
 41:   v_user_categories TEXT[];
 42:   v_quiz_categories TEXT[];
 43:   v_update_categories TEXT[];
 44: BEGIN
 45: 
 46:   SELECT categories INTO v_user_categories
 47:   FROM leaderboard
 48:   WHERE user_id = NEW.user_id;
 49: 
 50: 
 51:   IF v_user_categories IS NULL THEN
 52:     v_user_categories := '{}';
 53:   END IF;
 54: 
 55: 
 56:   v_quiz_categories := COALESCE(NEW.categories, '{}');
 57: 
 58: 
 59:   SELECT ARRAY(
 60:     SELECT DISTINCT unnest(v_user_categories || v_quiz_categories)
 61:   ) INTO v_update_categories;
 62: 
 63: 
 64:   INSERT INTO leaderboard (
 65:     user_id,
 66:     total_attempts,
 67:     correct_answers,
 68:     accuracy_percentage,
 69:     quizzes_completed,
 70:     categories,
 71:     last_updated
 72:   )
 73:   VALUES (
 74:     NEW.user_id,
 75:     NEW.total_questions,
 76:     NEW.score,
 77:     CASE WHEN NEW.total_questions > 0 THEN
 78:       (NEW.score::NUMERIC / NEW.total_questions) * 100
 79:     ELSE 0 END,
 80:     1,
 81:     v_update_categories,
 82:     CURRENT_TIMESTAMP
 83:   )
 84:   ON CONFLICT (user_id) DO UPDATE SET
 85:     total_attempts = leaderboard.total_attempts + NEW.total_questions,
 86:     correct_answers = leaderboard.correct_answers + NEW.score,
 87:     accuracy_percentage = CASE WHEN (leaderboard.total_attempts + NEW.total_questions) > 0 THEN
 88:       ((leaderboard.correct_answers + NEW.score)::NUMERIC / (leaderboard.total_attempts + NEW.total_questions)) * 100
 89:     ELSE 0 END,
 90:     quizzes_completed = leaderboard.quizzes_completed + 1,
 91:     categories = v_update_categories,
 92:     last_updated = CURRENT_TIMESTAMP;
 93: 
 94:   RETURN NEW;
 95: END;
 96: $$ LANGUAGE plpgsql;
 97: 
 98: 
 99: DROP TRIGGER IF EXISTS update_leaderboard_trigger ON quiz_results;
100: 
101: CREATE TRIGGER update_leaderboard_trigger
102: AFTER INSERT OR UPDATE ON quiz_results
103: FOR EACH ROW
104: EXECUTE FUNCTION update_leaderboard_from_quiz();
105: 
106: 
107: BEGIN;
108: 
109:   DROP PUBLICATION IF EXISTS supabase_realtime;
110: 
111: 
112:   CREATE PUBLICATION supabase_realtime FOR TABLE
113:     quiz_results,
114:     progress,
115:     leaderboard;
116: COMMIT;
117: 
118: 
119: INSERT INTO leaderboard (
120:   user_id,
121:   total_attempts,
122:   correct_answers,
123:   accuracy_percentage,
124:   quizzes_completed,
125:   categories
126: )
127: SELECT
128:   user_id,
129:   SUM(total_questions) as total_attempts,
130:   SUM(score) as correct_answers,
131:   CASE WHEN SUM(total_questions) > 0 THEN
132:     (SUM(score)::NUMERIC / SUM(total_questions)) * 100
133:   ELSE 0 END as accuracy_percentage,
134:   COUNT(*) as quizzes_completed,
135:   ARRAY(
136:     SELECT DISTINCT unnest(categories)
137:     FROM quiz_results qr
138:     WHERE qr.user_id = user_id AND categories IS NOT NULL
139:   ) as categories
140: FROM
141:   quiz_results
142: GROUP BY
143:   user_id
144: ON CONFLICT (user_id) DO NOTHING;
````

## File: db/migrations/003_leaderboard_trigger.sql
````sql
  1: CREATE TABLE IF NOT EXISTS leaderboard (
  2:   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  3:   user_id TEXT NOT NULL,
  4:   total_attempts INTEGER NOT NULL DEFAULT 0,
  5:   correct_answers INTEGER NOT NULL DEFAULT 0,
  6:   accuracy_percentage NUMERIC(5,2) NOT NULL DEFAULT 0,
  7:   quizzes_completed INTEGER NOT NULL DEFAULT 0,
  8:   categories TEXT[] NOT NULL DEFAULT '{}',
  9:   last_updated TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
 10:   UNIQUE(user_id)
 11: );
 12: 
 13: 
 14: CREATE INDEX IF NOT EXISTS leaderboard_accuracy_idx ON leaderboard (accuracy_percentage);
 15: 
 16: 
 17: ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;
 18: 
 19: 
 20: CREATE POLICY "Public leaderboard access" ON leaderboard
 21:     FOR SELECT
 22:     USING (true);
 23: 
 24: CREATE POLICY "Users can only update their own leaderboard entry" ON leaderboard
 25:     FOR ALL
 26:     USING (auth.uid()::text = user_id);
 27: 
 28: 
 29: CREATE OR REPLACE FUNCTION update_leaderboard_from_quiz()
 30: RETURNS TRIGGER AS $$
 31: DECLARE
 32:     user_categories TEXT[];
 33:     quiz_category TEXT;
 34: BEGIN
 35: 
 36:     SELECT categories INTO user_categories FROM leaderboard WHERE user_id = NEW.user_id;
 37:     IF NOT FOUND THEN
 38:         user_categories := '{}';
 39:     END IF;
 40: 
 41: 
 42:     IF NEW.categories IS NOT NULL THEN
 43:         FOREACH quiz_category IN ARRAY NEW.categories
 44:         LOOP
 45:             IF NOT (quiz_category = ANY(user_categories)) THEN
 46:                 user_categories := array_append(user_categories, quiz_category);
 47:             END IF;
 48:         END LOOP;
 49:     END IF;
 50: 
 51: 
 52:     INSERT INTO leaderboard (
 53:         user_id,
 54:         total_attempts,
 55:         correct_answers,
 56:         accuracy_percentage,
 57:         quizzes_completed,
 58:         categories,
 59:         last_updated
 60:     )
 61:     SELECT
 62:         NEW.user_id,
 63:         SUM(total_questions),
 64:         SUM(score),
 65:         CASE
 66:             WHEN SUM(total_questions) > 0 THEN
 67:                 (SUM(score) * 100.0 / SUM(total_questions))
 68:             ELSE 0
 69:         END,
 70:         COUNT(*),
 71:         user_categories,
 72:         NOW()
 73:     FROM quiz_results
 74:     WHERE user_id = NEW.user_id
 75:     GROUP BY user_id
 76:     ON CONFLICT (user_id)
 77:     DO UPDATE SET
 78:         total_attempts = EXCLUDED.total_attempts,
 79:         correct_answers = EXCLUDED.correct_answers,
 80:         accuracy_percentage = EXCLUDED.accuracy_percentage,
 81:         quizzes_completed = EXCLUDED.quizzes_completed,
 82:         categories = user_categories,
 83:         last_updated = NOW();
 84: 
 85:     RETURN NEW;
 86: END;
 87: $$ LANGUAGE plpgsql;
 88: 
 89: 
 90: DROP TRIGGER IF EXISTS update_leaderboard_trigger ON quiz_results;
 91: CREATE TRIGGER update_leaderboard_trigger
 92: AFTER INSERT OR UPDATE ON quiz_results
 93: FOR EACH ROW
 94: EXECUTE FUNCTION update_leaderboard_from_quiz();
 95: 
 96: 
 97: DO $$
 98: BEGIN
 99:   IF NOT EXISTS (
100:     SELECT 1
101:     FROM pg_publication_tables
102:     WHERE pubname = 'supabase_realtime'
103:     AND tablename = 'leaderboard'
104:   ) THEN
105:     ALTER PUBLICATION supabase_realtime ADD TABLE leaderboard;
106:   END IF;
107: END $$;
108: 
109: 
110: INSERT INTO leaderboard (
111:     user_id,
112:     total_attempts,
113:     correct_answers,
114:     accuracy_percentage,
115:     quizzes_completed,
116:     categories
117: )
118: SELECT
119:     user_id,
120:     SUM(total_questions),
121:     SUM(score),
122:     CASE
123:         WHEN SUM(total_questions) > 0 THEN
124:             (SUM(score) * 100.0 / SUM(total_questions))
125:         ELSE 0
126:     END,
127:     COUNT(*),
128:     ARRAY(
129:         SELECT DISTINCT unnest(categories)
130:         FROM quiz_results qr
131:         WHERE qr.user_id = quiz_results.user_id
132:         AND categories IS NOT NULL
133:     )
134: FROM quiz_results
135: GROUP BY user_id
136: ON CONFLICT (user_id)
137: DO UPDATE SET
138:     total_attempts = EXCLUDED.total_attempts,
139:     correct_answers = EXCLUDED.correct_answers,
140:     accuracy_percentage = EXCLUDED.accuracy_percentage,
141:     quizzes_completed = EXCLUDED.quizzes_completed,
142:     categories = EXCLUDED.categories,
143:     last_updated = NOW();
````

## File: db/migrations/003_profiles_sync.sql
````sql
 1: CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
 2: 
 3: 
 4: CREATE OR REPLACE FUNCTION sync_clerk_profile(
 5:   p_user_id TEXT,
 6:   p_display_name TEXT,
 7:   p_profile_image_url TEXT,
 8:   p_email TEXT
 9: ) RETURNS VOID AS $$
10: BEGIN
11: 
12:   INSERT INTO profiles (
13:     user_id,
14:     display_name,
15:     profile_image_url,
16:     email,
17:     last_sign_in
18:   ) VALUES (
19:     p_user_id,
20:     p_display_name,
21:     p_profile_image_url,
22:     p_email,
23:     NOW()
24:   )
25:   ON CONFLICT (user_id)
26:   DO UPDATE SET
27:     display_name = p_display_name,
28:     profile_image_url = p_profile_image_url,
29:     email = p_email,
30:     last_sign_in = NOW(),
31:     updated_at = NOW();
32: END;
33: $$ LANGUAGE plpgsql;
34: 
35: 
36: CREATE OR REPLACE FUNCTION trigger_set_timestamp()
37: RETURNS TRIGGER AS $$
38: BEGIN
39:   NEW.updated_at = NOW();
40:   RETURN NEW;
41: END;
42: $$ LANGUAGE plpgsql;
43: 
44: 
45: DO $$
46: BEGIN
47:   IF NOT EXISTS (
48:     SELECT 1 FROM pg_trigger WHERE tgname = 'set_timestamp_profiles'
49:   ) THEN
50:     CREATE TRIGGER set_timestamp_profiles
51:     BEFORE UPDATE ON profiles
52:     FOR EACH ROW
53:     EXECUTE FUNCTION trigger_set_timestamp();
54:   END IF;
55: END
56: $$;
57: 
58: 
59: BEGIN;
60: 
61:   DROP PUBLICATION IF EXISTS supabase_realtime;
62: 
63: 
64:   CREATE PUBLICATION supabase_realtime FOR TABLE
65:     profiles,
66:     quiz_results,
67:     progress,
68:     leaderboard;
69: COMMIT;
70: 
71: 
72: ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
73: 
74: 
75: DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;
76: DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;
77: DROP POLICY IF EXISTS "Profiles are readable by authenticated users" ON profiles;
78: 
79: 
80: CREATE POLICY "Users can view their own profile"
81: ON profiles FOR SELECT
82: USING (auth.uid()::text = user_id);
83: 
84: CREATE POLICY "Users can update their own profile"
85: ON profiles FOR UPDATE
86: USING (auth.uid()::text = user_id);
87: 
88: CREATE POLICY "Profiles are readable by authenticated users"
89: ON profiles FOR SELECT
90: USING (auth.role() = 'authenticated');
91: 
92: 
93: GRANT SELECT, INSERT, UPDATE ON profiles TO authenticated;
94: GRANT SELECT ON profiles TO anon;
````

## File: db/migrations/004_leaderboard_profiles.sql
````sql
  1: ALTER TABLE leaderboard
  2: ADD COLUMN IF NOT EXISTS display_name TEXT,
  3: ADD COLUMN IF NOT EXISTS profile_image_url TEXT;
  4: 
  5: 
  6: CREATE OR REPLACE FUNCTION update_user_profiles()
  7: RETURNS TRIGGER AS $$
  8: BEGIN
  9: 
 10: 
 11: 
 12: 
 13: 
 14:     IF NEW.display_name IS NULL THEN
 15:         NEW.display_name := 'User ' || substring(NEW.user_id, 1, 6);
 16:     END IF;
 17: 
 18:     IF NEW.profile_image_url IS NULL THEN
 19:         NEW.profile_image_url := 'https://api.dicebear.com/7.x/initials/svg?seed=' || NEW.user_id;
 20:     END IF;
 21: 
 22:     RETURN NEW;
 23: END;
 24: $$ LANGUAGE plpgsql;
 25: 
 26: 
 27: DROP TRIGGER IF EXISTS before_leaderboard_upsert ON leaderboard;
 28: CREATE TRIGGER before_leaderboard_upsert
 29: BEFORE INSERT OR UPDATE ON leaderboard
 30: FOR EACH ROW
 31: EXECUTE FUNCTION update_user_profiles();
 32: 
 33: 
 34: UPDATE leaderboard
 35: SET
 36:     display_name = 'User ' || substring(user_id, 1, 6),
 37:     profile_image_url = 'https://api.dicebear.com/7.x/initials/svg?seed=' || user_id
 38: WHERE
 39:     display_name IS NULL OR profile_image_url IS NULL;
 40: 
 41: 
 42: CREATE OR REPLACE FUNCTION admin_update_user_profiles_from_api(user_data JSONB)
 43: RETURNS VOID AS $$
 44: DECLARE
 45:     user_id TEXT;
 46:     display_name TEXT;
 47:     profile_url TEXT;
 48:     first_name TEXT;
 49:     last_name TEXT;
 50:     email TEXT;
 51: BEGIN
 52: 
 53:     user_id := user_data->>'id';
 54: 
 55: 
 56:     first_name := user_data->>'first_name';
 57:     last_name := user_data->>'last_name';
 58: 
 59: 
 60:     IF user_data->'email_addresses' IS NOT NULL AND jsonb_array_length(user_data->'email_addresses') > 0 THEN
 61:         email := user_data->'email_addresses'->0->>'email_address';
 62:     END IF;
 63: 
 64: 
 65:     IF first_name IS NOT NULL AND last_name IS NOT NULL AND last_name != '' THEN
 66:         display_name := first_name || ' ' || last_name;
 67:     ELSIF first_name IS NOT NULL AND first_name != '' THEN
 68:         display_name := first_name;
 69:     ELSIF email IS NOT NULL THEN
 70:         -- Extract username part of email
 71:         display_name := split_part(email, '@', 1);
 72:     ELSE
 73:         display_name := 'User ' || substring(user_id, 1, 6);
 74:     END IF;
 75: 
 76:     -- Get profile image URL (prefer profile_image_url first)
 77:     profile_url := user_data->>'profile_image_url';
 78:     IF profile_url IS NULL THEN
 79:         profile_url := user_data->>'image_url';
 80:     END IF;
 81: 
 82: 
 83:     IF profile_url IS NULL THEN
 84:         profile_url := 'https://api.dicebear.com/7.x/initials/svg?seed=' || user_id;
 85:     END IF;
 86: 
 87: 
 88:     IF user_id IS NOT NULL THEN
 89:         UPDATE leaderboard
 90:         SET
 91:             display_name = display_name,
 92:             profile_image_url = profile_url
 93:         WHERE
 94:             user_id = user_id;
 95: 
 96: 
 97: 
 98:         IF NOT FOUND THEN
 99: 
100:             NULL;
101:         END IF;
102:     END IF;
103: END;
104: $$ LANGUAGE plpgsql;
105: 
106: 
107: 
108: /*
109: SELECT admin_update_user_profiles_from_api('{
110:   "id": "user_2uhmRlknXSVD8ihv2PXN0X9YEEp",
111:   "object": "user",
112:   "username": null,
113:   "first_name": "Anthahkarana",
114:   "last_name": null,
115:   "image_url": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ydWhtUnFqVDBNc3FFMGg2NkpqSGp0VDRDTXYifQ",
116:   "profile_image_url": "https://images.clerk.dev/oauth_google/img_2uhmRqjT0MsqE0h66JjHjtT4CMv",
117:   "email_addresses": [
118:     {
119:       "email_address": "forcloud787@gmail.com"
120:     }
121:   ]
122: }'::jsonb);
123: */
````

## File: db/migrations/005_profiles_table.sql
````sql
  1: CREATE TABLE IF NOT EXISTS profiles (
  2:   user_id TEXT PRIMARY KEY,
  3:   display_name TEXT NOT NULL,
  4:   profile_image_url TEXT,
  5:   email TEXT,
  6:   last_sign_in TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  7:   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  8:   updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  9: );
 10: 
 11: 
 12: ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
 13: 
 14: 
 15: CREATE POLICY "Profiles are viewable by everyone" ON profiles
 16:     FOR SELECT
 17:     USING (true);
 18: 
 19: 
 20: CREATE POLICY "Users can update their own profiles" ON profiles
 21:     FOR UPDATE
 22:     USING (auth.uid()::text = user_id);
 23: 
 24: 
 25: CREATE POLICY "Users can only insert their own profiles" ON profiles
 26:     FOR INSERT
 27:     WITH CHECK (auth.uid()::text = user_id);
 28: 
 29: CREATE POLICY "Users can only delete their own profiles" ON profiles
 30:     FOR DELETE
 31:     USING (auth.uid()::text = user_id);
 32: 
 33: 
 34: ALTER PUBLICATION supabase_realtime ADD TABLE profiles;
 35: 
 36: 
 37: CREATE OR REPLACE FUNCTION update_profiles_updated_at()
 38: RETURNS TRIGGER AS $$
 39: BEGIN
 40:   NEW.updated_at = NOW();
 41:   RETURN NEW;
 42: END;
 43: $$ LANGUAGE plpgsql;
 44: 
 45: CREATE TRIGGER update_profiles_timestamp
 46: BEFORE UPDATE ON profiles
 47: FOR EACH ROW
 48: EXECUTE FUNCTION update_profiles_updated_at();
 49: 
 50: 
 51: CREATE OR REPLACE FUNCTION sync_clerk_profile(
 52:   p_user_id TEXT,
 53:   p_display_name TEXT,
 54:   p_profile_image_url TEXT,
 55:   p_email TEXT DEFAULT NULL
 56: )
 57: RETURNS VOID AS $$
 58: BEGIN
 59: 
 60:   INSERT INTO profiles (
 61:     user_id,
 62:     display_name,
 63:     profile_image_url,
 64:     email,
 65:     last_sign_in
 66:   )
 67:   VALUES (
 68:     p_user_id,
 69:     p_display_name,
 70:     p_profile_image_url,
 71:     p_email,
 72:     NOW()
 73:   )
 74:   ON CONFLICT (user_id)
 75:   DO UPDATE SET
 76:     display_name = p_display_name,
 77:     profile_image_url = p_profile_image_url,
 78:     email = COALESCE(p_email, profiles.email),
 79:     last_sign_in = NOW(),
 80:     updated_at = NOW();
 81: END;
 82: $$ LANGUAGE plpgsql;
 83: 
 84: 
 85: CREATE OR REPLACE FUNCTION sync_clerk_profile_from_json(user_data JSONB)
 86: RETURNS VOID AS $$
 87: DECLARE
 88:     v_user_id TEXT;
 89:     v_display_name TEXT;
 90:     v_profile_image_url TEXT;
 91:     v_email TEXT;
 92:     v_first_name TEXT;
 93:     v_last_name TEXT;
 94: BEGIN
 95: 
 96:     v_user_id := user_data->>'id';
 97:     IF v_user_id IS NULL THEN
 98:         RAISE EXCEPTION 'User ID is required';
 99:     END IF;
100: 
101: 
102:     v_first_name := user_data->>'first_name';
103:     v_last_name := user_data->>'last_name';
104: 
105: 
106:     IF user_data->'email_addresses' IS NOT NULL AND jsonb_array_length(user_data->'email_addresses') > 0 THEN
107:         v_email := user_data->'email_addresses'->0->>'email_address';
108:     END IF;
109: 
110: 
111:     IF v_first_name IS NOT NULL AND v_last_name IS NOT NULL AND v_last_name != '' THEN
112:         v_display_name := v_first_name || ' ' || v_last_name;
113:     ELSIF v_first_name IS NOT NULL AND v_first_name != '' THEN
114:         v_display_name := v_first_name;
115:     ELSIF v_email IS NOT NULL THEN
116:         -- Extract username part of email
117:         v_display_name := split_part(v_email, '@', 1);
118:     ELSE
119:         v_display_name := 'User ' || substring(v_user_id, 1, 6);
120:     END IF;
121: 
122:     -- Get profile image URL (prefer profile_image_url first)
123:     v_profile_image_url := user_data->>'profile_image_url';
124:     IF v_profile_image_url IS NULL THEN
125:         v_profile_image_url := user_data->>'image_url';
126:     END IF;
127: 
128: 
129:     PERFORM sync_clerk_profile(
130:         v_user_id,
131:         v_display_name,
132:         v_profile_image_url,
133:         v_email
134:     );
135: END;
136: $$ LANGUAGE plpgsql;
137: 
138: 
139: CREATE OR REPLACE FUNCTION sync_leaderboard_profiles()
140: RETURNS TRIGGER AS $$
141: BEGIN
142: 
143:     UPDATE leaderboard
144:     SET
145:         display_name = NEW.display_name,
146:         profile_image_url = NEW.profile_image_url
147:     WHERE
148:         user_id = NEW.user_id;
149: 
150:     RETURN NEW;
151: END;
152: $$ LANGUAGE plpgsql;
153: 
154: 
155: CREATE TRIGGER sync_profiles_to_leaderboard
156: AFTER INSERT OR UPDATE ON profiles
157: FOR EACH ROW
158: EXECUTE FUNCTION sync_leaderboard_profiles();
159: 
160: 
161: /*
162: SELECT sync_clerk_profile_from_json('{
163:   "id": "user_2uhmRlknXSVD8ihv2PXN0X9YEEp",
164:   "object": "user",
165:   "username": null,
166:   "first_name": "Anthahkarana",
167:   "last_name": null,
168:   "image_url": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ydWhtUnFqVDBNc3FFMGg2NkpqSGp0VDRDTXYifQ",
169:   "profile_image_url": "https://images.clerk.dev/oauth_google/img_2uhmRqjT0MsqE0h66JjHjtT4CMv",
170:   "email_addresses": [
171:     {
172:       "email_address": "forcloud787@gmail.com"
173:     }
174:   ]
175: }'::jsonb);
176: */
````

## File: db/migrations/006_full_database_setup.sql
````sql
  1: CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  2: 
  3: 
  4: 
  5: 
  6: 
  7: 
  8: DO $$ BEGIN
  9:     CREATE TYPE quiz_type AS ENUM ('rapid_fire', 'standard');
 10: EXCEPTION
 11:     WHEN duplicate_object THEN NULL;
 12: END $$;
 13: 
 14: 
 15: 
 16: 
 17: 
 18: 
 19: CREATE TABLE IF NOT EXISTS profiles (
 20:   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 21:   user_id TEXT UNIQUE NOT NULL,
 22:   display_name TEXT,
 23:   profile_image_url TEXT,
 24:   email TEXT,
 25:   last_sign_in TIMESTAMPTZ DEFAULT NOW() NOT NULL,
 26:   created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
 27:   updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
 28: );
 29: 
 30: 
 31: CREATE TABLE IF NOT EXISTS progress (
 32:   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 33:   user_id TEXT REFERENCES profiles(user_id) ON DELETE CASCADE,
 34:   stars INTEGER DEFAULT 0 NOT NULL,
 35:   words_learned INTEGER DEFAULT 0 NOT NULL,
 36:   quizzes_played INTEGER DEFAULT 0 NOT NULL,
 37:   created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
 38:   updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
 39: );
 40: 
 41: 
 42: CREATE TABLE IF NOT EXISTS quiz_results (
 43:   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 44:   user_id TEXT NOT NULL REFERENCES profiles(user_id) ON DELETE CASCADE,
 45:   quiz_type quiz_type NOT NULL,
 46:   score INTEGER NOT NULL,
 47:   total_questions INTEGER NOT NULL,
 48:   total_answers INTEGER NOT NULL,
 49:   correct_answers INTEGER NOT NULL,
 50:   time_spent INTEGER,
 51:   category TEXT,
 52:   categories TEXT[],
 53:   created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
 54:   updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
 55: );
 56: 
 57: 
 58: CREATE TABLE IF NOT EXISTS word_stats (
 59:   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 60:   user_id TEXT NOT NULL REFERENCES profiles(user_id) ON DELETE CASCADE,
 61:   word TEXT NOT NULL,
 62:   kanglish TEXT NOT NULL,
 63:   kannada TEXT,
 64:   icon TEXT,
 65:   category TEXT,
 66:   total_attempts INTEGER DEFAULT 0 NOT NULL,
 67:   correct_count INTEGER DEFAULT 0 NOT NULL,
 68:   created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
 69:   updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
 70: );
 71: 
 72: 
 73: CREATE TABLE IF NOT EXISTS leaderboard (
 74:   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 75:   user_id TEXT UNIQUE NOT NULL REFERENCES profiles(user_id) ON DELETE CASCADE,
 76:   total_attempts INTEGER DEFAULT 0 NOT NULL,
 77:   correct_answers INTEGER DEFAULT 0 NOT NULL,
 78:   accuracy_percentage DECIMAL(5,2) DEFAULT 0 NOT NULL,
 79:   quizzes_completed INTEGER DEFAULT 0 NOT NULL,
 80:   categories TEXT[] DEFAULT '{}' NOT NULL,
 81:   display_name TEXT,
 82:   profile_image_url TEXT,
 83:   last_updated TIMESTAMPTZ DEFAULT NOW() NOT NULL
 84: );
 85: 
 86: 
 87: 
 88: 
 89: 
 90: 
 91: CREATE INDEX IF NOT EXISTS idx_profiles_user_id ON profiles(user_id);
 92: 
 93: 
 94: CREATE INDEX IF NOT EXISTS idx_progress_user_id ON progress(user_id);
 95: CREATE INDEX IF NOT EXISTS idx_progress_stars ON progress(stars DESC);
 96: 
 97: 
 98: CREATE INDEX IF NOT EXISTS idx_quiz_results_user_id ON quiz_results(user_id);
 99: CREATE INDEX IF NOT EXISTS idx_quiz_results_created_at ON quiz_results(created_at DESC);
100: CREATE INDEX IF NOT EXISTS idx_quiz_results_category ON quiz_results(category);
101: 
102: 
103: CREATE INDEX IF NOT EXISTS idx_word_stats_user_id ON word_stats(user_id);
104: CREATE INDEX IF NOT EXISTS idx_word_stats_word ON word_stats(word);
105: CREATE INDEX IF NOT EXISTS idx_word_stats_category ON word_stats(category);
106: 
107: 
108: CREATE INDEX IF NOT EXISTS idx_leaderboard_accuracy ON leaderboard(accuracy_percentage DESC);
109: 
110: 
111: 
112: 
113: 
114: 
115: CREATE OR REPLACE FUNCTION sync_clerk_profile(
116:   user_id TEXT,
117:   display_name TEXT,
118:   profile_image_url TEXT,
119:   email TEXT
120: ) RETURNS UUID AS $$
121: DECLARE
122:   profile_id UUID;
123: BEGIN
124: 
125:   SELECT id INTO profile_id FROM profiles WHERE user_id = $1::TEXT;
126: 
127:   IF profile_id IS NULL THEN
128: 
129:     INSERT INTO profiles (
130:       id,
131:       user_id,
132:       display_name,
133:       profile_image_url,
134:       email,
135:       last_sign_in,
136:       created_at,
137:       updated_at
138:     ) VALUES (
139:       gen_random_uuid(),
140:       user_id,
141:       display_name,
142:       profile_image_url,
143:       email,
144:       NOW(),
145:       NOW(),
146:       NOW()
147:     )
148:     RETURNING id INTO profile_id;
149: 
150: 
151:     INSERT INTO progress (user_id, stars, words_learned, quizzes_played)
152:     VALUES (user_id, 0, 0, 0);
153:   ELSE
154: 
155:     UPDATE profiles
156:     SET
157:       display_name = COALESCE($2, display_name),
158:       profile_image_url = COALESCE($3, profile_image_url),
159:       email = COALESCE($4, email),
160:       last_sign_in = NOW(),
161:       updated_at = NOW()
162:     WHERE user_id = $1;
163:   END IF;
164: 
165: 
166:   RETURN profile_id;
167: END;
168: $$ LANGUAGE plpgsql SECURITY DEFINER;
169: 
170: 
171: CREATE OR REPLACE FUNCTION update_leaderboard_from_quiz()
172: RETURNS TRIGGER AS $$
173: DECLARE
174:   user_categories TEXT[];
175:   accuracy DECIMAL(5,2);
176:   user_display_name TEXT;
177:   user_profile_image TEXT;
178: BEGIN
179: 
180:   IF NEW.total_answers > 0 THEN
181:     accuracy := (NEW.correct_answers::DECIMAL / NEW.total_answers) * 100;
182:   ELSE
183:     accuracy := 0;
184:   END IF;
185: 
186: 
187:   SELECT display_name, profile_image_url INTO user_display_name, user_profile_image
188:   FROM profiles
189:   WHERE user_id = NEW.user_id::TEXT;
190: 
191: 
192:   IF NEW.category IS NOT NULL AND NEW.category != '' THEN
193:     -- Get existing categories for this user
194:     SELECT categories INTO user_categories
195:     FROM leaderboard
196:     WHERE user_id = NEW.user_id::TEXT;
197: 
198:     -- If no existing record, initialize empty array
199:     IF user_categories IS NULL THEN
200:       user_categories := '{}';
201:     END IF;
202: 
203:     -- Add new category if not already in the array
204:     IF NOT (NEW.category = ANY(user_categories)) THEN
205:       user_categories := array_append(user_categories, NEW.category);
206:     END IF;
207:   END IF;
208: 
209:   -- Insert or update leaderboard entry
210:   INSERT INTO leaderboard (
211:     user_id,
212:     total_attempts,
213:     correct_answers,
214:     accuracy_percentage,
215:     quizzes_completed,
216:     categories,
217:     display_name,
218:     profile_image_url,
219:     last_updated
220:   )
221:   VALUES (
222:     NEW.user_id::TEXT,
223:     NEW.total_answers,
224:     NEW.correct_answers,
225:     accuracy,
226:     1,
227:     COALESCE(user_categories, '{}'),
228:     user_display_name,
229:     user_profile_image,
230:     NOW()
231:   )
232:   ON CONFLICT (user_id)
233:   DO UPDATE SET
234:     total_attempts = leaderboard.total_attempts + NEW.total_answers,
235:     correct_answers = leaderboard.correct_answers + NEW.correct_answers,
236:     accuracy_percentage = (
237:       (leaderboard.correct_answers + NEW.correct_answers)::DECIMAL /
238:       (leaderboard.total_attempts + NEW.total_answers)
239:     ) * 100,
240:     quizzes_completed = leaderboard.quizzes_completed + 1,
241:     categories = CASE
242:       WHEN NEW.category IS NULL OR NEW.category = '' THEN leaderboard.categories
243:       WHEN NEW.category = ANY(leaderboard.categories) THEN leaderboard.categories
244:       ELSE array_append(leaderboard.categories, NEW.category)
245:     END,
246:     display_name = COALESCE(user_display_name, leaderboard.display_name),
247:     profile_image_url = COALESCE(user_profile_image, leaderboard.profile_image_url),
248:     last_updated = NOW();
249: 
250:   RETURN NEW;
251: END;
252: $$ LANGUAGE plpgsql;
253: 
254: -- 3. Function to update word stats
255: CREATE OR REPLACE FUNCTION update_word_stats()
256: RETURNS TRIGGER AS $$
257: BEGIN
258:   -- Update progress table - increment words learned if this is a new word for the user
259:   IF NOT EXISTS (
260:     SELECT 1 FROM word_stats
261:     WHERE user_id = NEW.user_id::TEXT AND word = NEW.word
262:   ) THEN
263:     UPDATE progress
264:     SET words_learned = words_learned + 1
265:     WHERE user_id = NEW.user_id::TEXT;
266:   END IF;
267: 
268:   RETURN NEW;
269: END;
270: $$ LANGUAGE plpgsql;
271: 
272: -- 4. Function to update progress when quizzes are completed
273: CREATE OR REPLACE FUNCTION update_progress_from_quiz()
274: RETURNS TRIGGER AS $$
275: BEGIN
276:   -- Update progress table - increment quizzes played and add stars
277:   UPDATE progress
278:   SET
279:     quizzes_played = quizzes_played + 1,
280:     stars = stars + CASE
281:       WHEN NEW.score::DECIMAL / NEW.total_questions >= 0.8 THEN 3
282:       WHEN NEW.score::DECIMAL / NEW.total_questions >= 0.6 THEN 2
283:       WHEN NEW.score::DECIMAL / NEW.total_questions >= 0.4 THEN 1
284:       ELSE 0
285:     END
286:   WHERE user_id = NEW.user_id::TEXT;
287: 
288:   -- Create progress record if it doesn't exist
289:   IF NOT FOUND THEN
290:     INSERT INTO progress (
291:       user_id,
292:       quizzes_played,
293:       stars
294:     ) VALUES (
295:       NEW.user_id::TEXT,
296:       1,
297:       CASE
298:         WHEN NEW.score::DECIMAL / NEW.total_questions >= 0.8 THEN 3
299:         WHEN NEW.score::DECIMAL / NEW.total_questions >= 0.6 THEN 2
300:         WHEN NEW.score::DECIMAL / NEW.total_questions >= 0.4 THEN 1
301:         ELSE 0
302:       END
303:     );
304:   END IF;
305: 
306:   RETURN NEW;
307: END;
308: $$ LANGUAGE plpgsql;
309: 
310: 
311: 
312: 
313: 
314: 
315: DROP TRIGGER IF EXISTS update_leaderboard_trigger ON quiz_results;
316: CREATE TRIGGER update_leaderboard_trigger
317: AFTER INSERT OR UPDATE ON quiz_results
318: FOR EACH ROW
319: EXECUTE FUNCTION update_leaderboard_from_quiz();
320: 
321: 
322: DROP TRIGGER IF EXISTS update_word_stats_trigger ON word_stats;
323: CREATE TRIGGER update_word_stats_trigger
324: AFTER INSERT ON word_stats
325: FOR EACH ROW
326: EXECUTE FUNCTION update_word_stats();
327: 
328: 
329: DROP TRIGGER IF EXISTS update_progress_trigger ON quiz_results;
330: CREATE TRIGGER update_progress_trigger
331: AFTER INSERT ON quiz_results
332: FOR EACH ROW
333: EXECUTE FUNCTION update_progress_from_quiz();
334: 
335: 
336: 
337: 
338: 
339: 
340: ALTER PUBLICATION supabase_realtime ADD TABLE profiles;
341: ALTER PUBLICATION supabase_realtime ADD TABLE progress;
342: ALTER PUBLICATION supabase_realtime ADD TABLE quiz_results;
343: ALTER PUBLICATION supabase_realtime ADD TABLE word_stats;
344: ALTER PUBLICATION supabase_realtime ADD TABLE leaderboard;
345: 
346: 
347: 
348: 
349: 
350: 
351: ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
352: ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
353: ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;
354: ALTER TABLE word_stats ENABLE ROW LEVEL SECURITY;
355: ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;
356: 
357: 
358: CREATE POLICY "Users can view their own profile"
359: ON profiles FOR SELECT
360: USING (auth.uid()::TEXT = user_id);
361: 
362: CREATE POLICY "Users can update their own profile"
363: ON profiles FOR UPDATE
364: USING (auth.uid()::TEXT = user_id);
365: 
366: CREATE POLICY "System can create profiles"
367: ON profiles FOR INSERT
368: TO authenticated
369: WITH CHECK (true);
370: 
371: 
372: CREATE POLICY "Users can view their own progress"
373: ON progress FOR SELECT
374: USING (auth.uid()::TEXT = user_id);
375: 
376: CREATE POLICY "Users can update their own progress"
377: ON progress FOR UPDATE
378: USING (auth.uid()::TEXT = user_id);
379: 
380: CREATE POLICY "System can insert progress"
381: ON progress FOR INSERT
382: TO authenticated
383: WITH CHECK (true);
384: 
385: 
386: CREATE POLICY "Users can view their own quiz results"
387: ON quiz_results FOR SELECT
388: USING (auth.uid()::TEXT = user_id);
389: 
390: CREATE POLICY "Users can insert their own quiz results"
391: ON quiz_results FOR INSERT
392: TO authenticated
393: WITH CHECK (auth.uid()::TEXT = user_id);
394: 
395: 
396: CREATE POLICY "Users can view their own word stats"
397: ON word_stats FOR SELECT
398: USING (auth.uid()::TEXT = user_id);
399: 
400: CREATE POLICY "Users can update their own word stats"
401: ON word_stats FOR UPDATE
402: USING (auth.uid()::TEXT = user_id);
403: 
404: CREATE POLICY "Users can insert their own word stats"
405: ON word_stats FOR INSERT
406: TO authenticated
407: WITH CHECK (auth.uid()::TEXT = user_id);
408: 
409: 
410: CREATE POLICY "Anyone can view leaderboard"
411: ON leaderboard FOR SELECT
412: TO authenticated
413: USING (true);
414: 
415: CREATE POLICY "System can update leaderboard"
416: ON leaderboard FOR INSERT
417: TO authenticated
418: WITH CHECK (true);
419: 
420: CREATE POLICY "System can update leaderboard entries"
421: ON leaderboard FOR UPDATE
422: TO authenticated
423: USING (true);
424: 
425: 
426: 
427: 
428: 
429: 
430: INSERT INTO leaderboard (
431:   user_id,
432:   total_attempts,
433:   correct_answers,
434:   accuracy_percentage,
435:   quizzes_completed,
436:   categories,
437:   display_name,
438:   profile_image_url
439: )
440: SELECT
441:   qr.user_id::TEXT,
442:   SUM(qr.total_answers) as total_attempts,
443:   SUM(qr.correct_answers) as correct_answers,
444:   CASE
445:     WHEN SUM(qr.total_answers) > 0 THEN (SUM(qr.correct_answers)::DECIMAL / SUM(qr.total_answers)) * 100
446:     ELSE 0
447:   END as accuracy_percentage,
448:   COUNT(*) as quizzes_completed,
449:   ARRAY_AGG(DISTINCT qr.category) FILTER (WHERE qr.category IS NOT NULL AND qr.category != '') as categories,
450:   p.display_name,
451:   p.profile_image_url
452: FROM quiz_results qr
453: JOIN profiles p ON qr.user_id::TEXT = p.user_id::TEXT
454: GROUP BY qr.user_id, p.display_name, p.profile_image_url
455: ON CONFLICT (user_id) DO NOTHING;
````

## File: db/migrations/006_profile_leaderboard_setup.sql
````sql
  1: CREATE TABLE IF NOT EXISTS profiles (
  2:   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  3:   user_id TEXT NOT NULL UNIQUE,
  4:   display_name TEXT,
  5:   profile_image_url TEXT,
  6:   email TEXT,
  7:   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  8:   updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
  9: );
 10: 
 11: 
 12: CREATE TABLE IF NOT EXISTS leaderboard (
 13:   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 14:   user_id TEXT NOT NULL UNIQUE REFERENCES profiles(user_id) ON DELETE CASCADE,
 15:   total_attempts INTEGER NOT NULL DEFAULT 0,
 16:   correct_answers INTEGER NOT NULL DEFAULT 0,
 17:   accuracy_percentage DECIMAL(5,2) NOT NULL DEFAULT 0,
 18:   quizzes_completed INTEGER NOT NULL DEFAULT 0,
 19:   categories TEXT[] NOT NULL DEFAULT '{}',
 20:   last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
 21: );
 22: 
 23: 
 24: CREATE INDEX IF NOT EXISTS idx_leaderboard_accuracy ON leaderboard(accuracy_percentage);
 25: 
 26: 
 27: CREATE OR REPLACE FUNCTION sync_clerk_profile(
 28:   user_id TEXT,
 29:   display_name TEXT,
 30:   profile_image_url TEXT,
 31:   email TEXT
 32: ) RETURNS UUID AS $$
 33: DECLARE
 34:   profile_id UUID;
 35: BEGIN
 36: 
 37:   SELECT id INTO profile_id FROM profiles WHERE user_id = $1;
 38: 
 39:   IF profile_id IS NULL THEN
 40: 
 41:     INSERT INTO profiles (
 42:       id,
 43:       user_id,
 44:       display_name,
 45:       profile_image_url,
 46:       email,
 47:       created_at,
 48:       updated_at
 49:     ) VALUES (
 50:       gen_random_uuid(),
 51:       user_id,
 52:       display_name,
 53:       profile_image_url,
 54:       email,
 55:       NOW(),
 56:       NOW()
 57:     )
 58:     RETURNING id INTO profile_id;
 59:   ELSE
 60: 
 61:     UPDATE profiles
 62:     SET
 63:       display_name = COALESCE($2, display_name),
 64:       profile_image_url = COALESCE($3, profile_image_url),
 65:       email = COALESCE($4, email),
 66:       updated_at = NOW()
 67:     WHERE user_id = $1;
 68:   END IF;
 69: 
 70: 
 71:   RETURN profile_id;
 72: END;
 73: $$ LANGUAGE plpgsql SECURITY DEFINER;
 74: 
 75: 
 76: CREATE OR REPLACE FUNCTION update_leaderboard_from_quiz()
 77: RETURNS TRIGGER AS $$
 78: DECLARE
 79:   user_categories TEXT[];
 80:   accuracy DECIMAL(5,2);
 81: BEGIN
 82: 
 83:   IF NEW.total_answers > 0 THEN
 84:     accuracy := (NEW.correct_answers::DECIMAL / NEW.total_answers) * 100;
 85:   ELSE
 86:     accuracy := 0;
 87:   END IF;
 88: 
 89: 
 90:   IF NEW.category IS NOT NULL AND NEW.category != '' THEN
 91:     -- Get existing categories for this user
 92:     SELECT categories INTO user_categories
 93:     FROM leaderboard
 94:     WHERE user_id = NEW.user_id;
 95: 
 96:     -- If no existing record, initialize empty array
 97:     IF user_categories IS NULL THEN
 98:       user_categories := '{}';
 99:     END IF;
100: 
101:     -- Add new category if not already in the array
102:     IF NOT (NEW.category = ANY(user_categories)) THEN
103:       user_categories := array_append(user_categories, NEW.category);
104:     END IF;
105:   END IF;
106: 
107:   -- Insert or update leaderboard entry
108:   INSERT INTO leaderboard (
109:     user_id,
110:     total_attempts,
111:     correct_answers,
112:     accuracy_percentage,
113:     quizzes_completed,
114:     categories,
115:     last_updated
116:   )
117:   VALUES (
118:     NEW.user_id,
119:     NEW.total_answers,
120:     NEW.correct_answers,
121:     accuracy,
122:     1,
123:     COALESCE(user_categories, '{}'),
124:     NOW()
125:   )
126:   ON CONFLICT (user_id)
127:   DO UPDATE SET
128:     total_attempts = leaderboard.total_attempts + NEW.total_answers,
129:     correct_answers = leaderboard.correct_answers + NEW.correct_answers,
130:     accuracy_percentage = (
131:       (leaderboard.correct_answers + NEW.correct_answers)::DECIMAL /
132:       (leaderboard.total_attempts + NEW.total_answers)
133:     ) * 100,
134:     quizzes_completed = leaderboard.quizzes_completed + 1,
135:     categories = CASE
136:       WHEN NEW.category IS NULL OR NEW.category = '' THEN leaderboard.categories
137:       WHEN NEW.category = ANY(leaderboard.categories) THEN leaderboard.categories
138:       ELSE array_append(leaderboard.categories, NEW.category)
139:     END,
140:     last_updated = NOW();
141: 
142:   RETURN NEW;
143: END;
144: $$ LANGUAGE plpgsql;
145: 
146: -- Step 6: Create trigger on quiz_results table
147: DROP TRIGGER IF EXISTS update_leaderboard_trigger ON quiz_results;
148: CREATE TRIGGER update_leaderboard_trigger
149: AFTER INSERT OR UPDATE ON quiz_results
150: FOR EACH ROW
151: EXECUTE FUNCTION update_leaderboard_from_quiz();
152: 
153: -- Step 7: Enable real-time for profiles and leaderboard
154: ALTER PUBLICATION supabase_realtime ADD TABLE profiles, leaderboard;
155: 
156: -- Step 8: Enable Row Level Security
157: ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
158: ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;
159: 
160: -- Step 9: Create RLS policies for profiles
161: CREATE POLICY "Users can view their own profile"
162: ON profiles FOR SELECT
163: USING (auth.uid() = user_id);
164: 
165: CREATE POLICY "Users can update their own profile"
166: ON profiles FOR UPDATE
167: USING (auth.uid() = user_id);
168: 
169: CREATE POLICY "System can create profiles"
170: ON profiles FOR INSERT
171: TO authenticated
172: WITH CHECK (true);
173: 
174: -- Step 10: Create RLS policies for leaderboard
175: CREATE POLICY "Anyone can view leaderboard"
176: ON leaderboard FOR SELECT
177: TO authenticated
178: USING (true);
179: 
180: CREATE POLICY "System can update leaderboard"
181: ON leaderboard FOR INSERT
182: TO authenticated
183: WITH CHECK (true);
184: 
185: CREATE POLICY "System can update leaderboard entries"
186: ON leaderboard FOR UPDATE
187: TO authenticated
188: USING (true);
189: 
190: -- Step 11: Initialize leaderboard data from existing quiz_results
191: -- Only run this if this is a first-time setup with existing quiz data
192: INSERT INTO leaderboard (
193:   user_id,
194:   total_attempts,
195:   correct_answers,
196:   accuracy_percentage,
197:   quizzes_completed,
198:   categories
199: )
200: SELECT
201:   user_id,
202:   SUM(total_answers) as total_attempts,
203:   SUM(correct_answers) as correct_answers,
204:   CASE
205:     WHEN SUM(total_answers) > 0 THEN (SUM(correct_answers)::DECIMAL / SUM(total_answers)) * 100
206:     ELSE 0
207:   END as accuracy_percentage,
208:   COUNT(*) as quizzes_completed,
209:   ARRAY_AGG(DISTINCT category) FILTER (WHERE category IS NOT NULL AND category != '') as categories
210: FROM quiz_results
211: GROUP BY user_id
212: ON CONFLICT (user_id) DO NOTHING;
````

## File: db/migrations/007_fix_realtime_and_functions.sql
````sql
  1: DO $$
  2: BEGIN
  3:   IF NOT EXISTS (
  4:     SELECT 1 FROM pg_publication WHERE pubname = 'supabase_realtime'
  5:   ) THEN
  6:     CREATE PUBLICATION supabase_realtime;
  7:   END IF;
  8: END
  9: $$;
 10: 
 11: 
 12: 
 13: ALTER PUBLICATION supabase_realtime ADD TABLE profiles;
 14: ALTER PUBLICATION supabase_realtime ADD TABLE progress;
 15: ALTER PUBLICATION supabase_realtime ADD TABLE quiz_results;
 16: ALTER PUBLICATION supabase_realtime ADD TABLE word_stats;
 17: ALTER PUBLICATION supabase_realtime ADD TABLE leaderboard;
 18: 
 19: 
 20: 
 21: 
 22: 
 23: 
 24: CREATE OR REPLACE FUNCTION sync_clerk_profile(
 25:   user_id TEXT,
 26:   display_name TEXT,
 27:   profile_image_url TEXT,
 28:   email TEXT
 29: ) RETURNS UUID AS $$
 30: DECLARE
 31:   profile_id UUID;
 32: BEGIN
 33: 
 34:   SELECT id INTO profile_id FROM profiles WHERE user_id = user_id::TEXT;
 35: 
 36:   IF profile_id IS NULL THEN
 37: 
 38:     INSERT INTO profiles (
 39:       id,
 40:       user_id,
 41:       display_name,
 42:       profile_image_url,
 43:       email,
 44:       last_sign_in,
 45:       created_at,
 46:       updated_at
 47:     ) VALUES (
 48:       gen_random_uuid(),
 49:       user_id,
 50:       COALESCE(display_name, 'Unknown User'),
 51:       profile_image_url,
 52:       email,
 53:       NOW(),
 54:       NOW(),
 55:       NOW()
 56:     )
 57:     RETURNING id INTO profile_id;
 58: 
 59: 
 60:     INSERT INTO progress (user_id, stars, words_learned, quizzes_played)
 61:     VALUES (user_id, 0, 0, 0);
 62:   ELSE
 63: 
 64:     UPDATE profiles
 65:     SET
 66:       display_name = COALESCE(display_name, profiles.display_name),
 67:       profile_image_url = COALESCE(profile_image_url, profiles.profile_image_url),
 68:       email = COALESCE(email, profiles.email),
 69:       last_sign_in = NOW(),
 70:       updated_at = NOW()
 71:     WHERE profiles.user_id = user_id::TEXT;
 72:   END IF;
 73: 
 74: 
 75:   RETURN profile_id;
 76: END;
 77: $$ LANGUAGE plpgsql SECURITY DEFINER;
 78: 
 79: 
 80: DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;
 81: CREATE POLICY "Users can view their own profile"
 82: ON profiles FOR SELECT
 83: USING (auth.uid()::TEXT = user_id);
 84: 
 85: DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;
 86: CREATE POLICY "Users can update their own profile"
 87: ON profiles FOR UPDATE
 88: USING (auth.uid()::TEXT = user_id);
 89: 
 90: 
 91: DROP POLICY IF EXISTS "System can update leaderboard entries" ON leaderboard;
 92: CREATE POLICY "System can update leaderboard entries"
 93: ON leaderboard FOR UPDATE
 94: TO authenticated
 95: USING (true);
 96: 
 97: 
 98: 
 99: 
100: 
101: 
102: DO $$
103: BEGIN
104:   IF NOT EXISTS (
105:     SELECT 1 FROM information_schema.columns
106:     WHERE table_name = 'quiz_results' AND column_name = 'total_answers'
107:   ) THEN
108:     ALTER TABLE quiz_results ADD COLUMN total_answers INTEGER NOT NULL DEFAULT 0;
109:   END IF;
110: 
111:   IF NOT EXISTS (
112:     SELECT 1 FROM information_schema.columns
113:     WHERE table_name = 'quiz_results' AND column_name = 'correct_answers'
114:   ) THEN
115:     ALTER TABLE quiz_results ADD COLUMN correct_answers INTEGER NOT NULL DEFAULT 0;
116:   END IF;
117: END
118: $$;
119: 
120: 
121: 
122: 
123: 
124: 
125: DROP POLICY IF EXISTS "Users can view all profiles" ON profiles;
126: CREATE POLICY "Users can view all profiles"
127: ON profiles FOR SELECT
128: TO authenticated
129: USING (true);
130: 
131: 
132: DROP POLICY IF EXISTS "Anyone can view profiles on leaderboard" ON profiles;
133: CREATE POLICY "Anyone can view profiles on leaderboard"
134: ON profiles FOR SELECT
135: TO authenticated
136: USING (true);
137: 
138: 
139: 
140: 
141: 
142: 
143: CREATE OR REPLACE FUNCTION sync_clerk_profile(
144:   p_user_id TEXT,
145:   p_display_name TEXT,
146:   p_profile_image_url TEXT,
147:   p_email TEXT
148: ) RETURNS UUID AS $$
149: DECLARE
150:   profile_id UUID;
151: BEGIN
152: 
153:   SELECT id INTO profile_id FROM profiles WHERE user_id = p_user_id;
154: 
155:   IF profile_id IS NULL THEN
156: 
157:     INSERT INTO profiles (
158:       id,
159:       user_id,
160:       display_name,
161:       profile_image_url,
162:       email,
163:       last_sign_in,
164:       created_at,
165:       updated_at
166:     ) VALUES (
167:       gen_random_uuid(),
168:       p_user_id,
169:       COALESCE(p_display_name, 'Unknown User'),
170:       p_profile_image_url,
171:       p_email,
172:       NOW(),
173:       NOW(),
174:       NOW()
175:     )
176:     RETURNING id INTO profile_id;
177: 
178: 
179:     INSERT INTO progress (user_id, stars, words_learned, quizzes_played)
180:     VALUES (p_user_id, 0, 0, 0);
181:   ELSE
182: 
183:     UPDATE profiles
184:     SET
185:       display_name = COALESCE(p_display_name, profiles.display_name),
186:       profile_image_url = COALESCE(p_profile_image_url, profiles.profile_image_url),
187:       email = COALESCE(p_email, profiles.email),
188:       last_sign_in = NOW(),
189:       updated_at = NOW()
190:     WHERE profiles.user_id = p_user_id;
191:   END IF;
192: 
193: 
194:   RETURN profile_id;
195: END;
196: $$ LANGUAGE plpgsql SECURITY DEFINER;
````

## File: db/migrations/008_fix_publication_membership.sql
````sql
  1: DO $$
  2: DECLARE
  3:   table_name text;
  4:   table_names text[] := ARRAY['profiles', 'progress', 'quiz_results', 'word_stats', 'leaderboard'];
  5: BEGIN
  6:   FOREACH table_name IN ARRAY table_names
  7:   LOOP
  8: 
  9:     IF NOT EXISTS (
 10:       SELECT 1
 11:       FROM pg_publication_tables
 12:       WHERE pubname = 'supabase_realtime'
 13:       AND schemaname = 'public'
 14:       AND tablename = table_name
 15:     ) THEN
 16: 
 17:       EXECUTE format('ALTER PUBLICATION supabase_realtime ADD TABLE %I', table_name);
 18:       RAISE NOTICE 'Added table % to publication supabase_realtime', table_name;
 19:     ELSE
 20:       RAISE NOTICE 'Table % is already a member of publication supabase_realtime', table_name;
 21:     END IF;
 22:   END LOOP;
 23: END
 24: $$;
 25: 
 26: 
 27: 
 28: 
 29: 
 30: 
 31: CREATE OR REPLACE FUNCTION recalculate_leaderboard()
 32: RETURNS void AS $$
 33: BEGIN
 34: 
 35:   TRUNCATE TABLE leaderboard;
 36: 
 37: 
 38:   INSERT INTO leaderboard (
 39:     user_id,
 40:     total_attempts,
 41:     correct_answers,
 42:     accuracy_percentage,
 43:     quizzes_completed,
 44:     categories,
 45:     display_name,
 46:     profile_image_url,
 47:     last_updated
 48:   )
 49:   SELECT
 50:     qr.user_id,
 51:     SUM(qr.total_answers) as total_attempts,
 52:     SUM(qr.correct_answers) as correct_answers,
 53:     CASE
 54:       WHEN SUM(qr.total_answers) > 0 THEN (SUM(qr.correct_answers)::DECIMAL / SUM(qr.total_answers)) * 100
 55:       ELSE 0
 56:     END as accuracy_percentage,
 57:     COUNT(*) as quizzes_completed,
 58:     ARRAY_AGG(DISTINCT qr.category) FILTER (WHERE qr.category IS NOT NULL AND qr.category != '') as categories,
 59:     p.display_name,
 60:     p.profile_image_url,
 61:     NOW()
 62:   FROM quiz_results qr
 63:   JOIN profiles p ON qr.user_id = p.user_id
 64:   GROUP BY qr.user_id, p.display_name, p.profile_image_url;
 65: 
 66:   RAISE NOTICE 'Leaderboard recalculated successfully';
 67: END;
 68: $$ LANGUAGE plpgsql;
 69: 
 70: 
 71: CREATE OR REPLACE FUNCTION get_top_users_by_category(
 72:   p_category TEXT,
 73:   p_limit INTEGER DEFAULT 5
 74: )
 75: RETURNS TABLE (
 76:   user_id TEXT,
 77:   display_name TEXT,
 78:   profile_image_url TEXT,
 79:   accuracy_percentage DECIMAL,
 80:   total_attempts INTEGER,
 81:   rank BIGINT
 82: ) AS $$
 83: BEGIN
 84:   RETURN QUERY
 85:   SELECT
 86:     l.user_id,
 87:     l.display_name,
 88:     l.profile_image_url,
 89:     l.accuracy_percentage,
 90:     l.total_attempts,
 91:     RANK() OVER (ORDER BY l.accuracy_percentage DESC) as rank
 92:   FROM leaderboard l
 93:   WHERE
 94:     p_category IS NULL
 95:     OR p_category = ''
 96:     OR p_category = ANY(l.categories)
 97:   ORDER BY l.accuracy_percentage DESC
 98:   LIMIT p_limit;
 99: END;
100: $$ LANGUAGE plpgsql;
101: 
102: 
103: 
104: 
105: 
106: 
107: DROP POLICY IF EXISTS "Users can view all leaderboard entries" ON leaderboard;
108: CREATE POLICY "Users can view all leaderboard entries"
109: ON leaderboard FOR SELECT
110: TO authenticated
111: USING (true);
112: 
113: 
114: 
115: 
116: 
117: 
118: CREATE OR REPLACE FUNCTION admin_sync_profile(
119:   p_user_id TEXT,
120:   p_display_name TEXT,
121:   p_profile_image_url TEXT,
122:   p_email TEXT
123: )
124: RETURNS UUID AS $$
125: BEGIN
126:   RETURN sync_clerk_profile(p_user_id, p_display_name, p_profile_image_url, p_email);
127: END;
128: $$ LANGUAGE plpgsql SECURITY DEFINER;
````

## File: db/migrations/009_fix_quiz_results_null_constraints.sql
````sql
 1: UPDATE quiz_results
 2: SET
 3:   total_answers = total_questions,
 4:   correct_answers = score
 5: WHERE total_answers IS NULL;
 6: 
 7: 
 8: 
 9: 
10: 
11: 
12: CREATE OR REPLACE FUNCTION set_quiz_result_defaults()
13: RETURNS TRIGGER AS $$
14: BEGIN
15: 
16:   IF NEW.total_answers IS NULL THEN
17:     NEW.total_answers := NEW.total_questions;
18:   END IF;
19: 
20: 
21:   IF NEW.correct_answers IS NULL THEN
22:     NEW.correct_answers := NEW.score;
23:   END IF;
24: 
25:   RETURN NEW;
26: END;
27: $$ LANGUAGE plpgsql;
28: 
29: 
30: DROP TRIGGER IF EXISTS set_quiz_defaults_trigger ON quiz_results;
31: CREATE TRIGGER set_quiz_defaults_trigger
32: BEFORE INSERT OR UPDATE ON quiz_results
33: FOR EACH ROW
34: EXECUTE FUNCTION set_quiz_result_defaults();
35: 
36: 
37: 
38: 
39: 
40: 
41: CREATE OR REPLACE FUNCTION save_quiz_result(
42:   p_user_id TEXT,
43:   p_quiz_type TEXT,
44:   p_score INTEGER,
45:   p_total_questions INTEGER,
46:   p_time_spent INTEGER DEFAULT NULL,
47:   p_category TEXT DEFAULT NULL
48: )
49: RETURNS UUID AS $$
50: DECLARE
51:   quiz_id UUID;
52: BEGIN
53:   INSERT INTO quiz_results (
54:     id,
55:     user_id,
56:     quiz_type,
57:     score,
58:     total_questions,
59:     total_answers,
60:     correct_answers,
61:     time_spent,
62:     category
63:   ) VALUES (
64:     gen_random_uuid(),
65:     p_user_id,
66:     p_quiz_type::quiz_type,
67:     p_score,
68:     p_total_questions,
69:     p_total_questions,
70:     p_score,
71:     p_time_spent,
72:     p_category
73:   )
74:   RETURNING id INTO quiz_id;
75: 
76:   RETURN quiz_id;
77: END;
78: $$ LANGUAGE plpgsql SECURITY DEFINER;
````

## File: db/migrations/010_fix_word_stats_foreign_key.sql
````sql
  1: CREATE OR REPLACE FUNCTION ensure_profile_exists(
  2:   p_user_id TEXT
  3: )
  4: RETURNS VOID AS $$
  5: BEGIN
  6: 
  7:   IF NOT EXISTS (SELECT 1 FROM profiles WHERE user_id = p_user_id) THEN
  8: 
  9:     INSERT INTO profiles (
 10:       id,
 11:       user_id,
 12:       display_name,
 13:       created_at,
 14:       updated_at,
 15:       last_sign_in
 16:     ) VALUES (
 17:       gen_random_uuid(),
 18:       p_user_id,
 19:       'User ' || substring(p_user_id, 1, 6),
 20:       NOW(),
 21:       NOW(),
 22:       NOW()
 23:     );
 24: 
 25: 
 26:     INSERT INTO progress (user_id, stars, words_learned, quizzes_played)
 27:     VALUES (p_user_id, 0, 0, 0);
 28: 
 29:     RAISE NOTICE 'Created default profile for user %', p_user_id;
 30:   END IF;
 31: END;
 32: $$ LANGUAGE plpgsql SECURITY DEFINER;
 33: 
 34: 
 35: 
 36: 
 37: 
 38: 
 39: CREATE OR REPLACE FUNCTION save_word_stat(
 40:   p_user_id TEXT,
 41:   p_word TEXT,
 42:   p_kanglish TEXT,
 43:   p_kannada TEXT DEFAULT NULL,
 44:   p_icon TEXT DEFAULT NULL,
 45:   p_category TEXT DEFAULT NULL,
 46:   p_is_correct BOOLEAN DEFAULT TRUE
 47: )
 48: RETURNS UUID AS $$
 49: DECLARE
 50:   stat_id UUID;
 51: BEGIN
 52: 
 53:   PERFORM ensure_profile_exists(p_user_id);
 54: 
 55: 
 56:   SELECT id INTO stat_id
 57:   FROM word_stats
 58:   WHERE user_id = p_user_id AND word = p_word;
 59: 
 60:   IF stat_id IS NULL THEN
 61: 
 62:     INSERT INTO word_stats (
 63:       id,
 64:       user_id,
 65:       word,
 66:       kanglish,
 67:       kannada,
 68:       icon,
 69:       category,
 70:       total_attempts,
 71:       correct_count
 72:     ) VALUES (
 73:       gen_random_uuid(),
 74:       p_user_id,
 75:       p_word,
 76:       p_kanglish,
 77:       p_kannada,
 78:       p_icon,
 79:       p_category,
 80:       1,
 81:       CASE WHEN p_is_correct THEN 1 ELSE 0 END
 82:     )
 83:     RETURNING id INTO stat_id;
 84:   ELSE
 85: 
 86:     UPDATE word_stats
 87:     SET
 88:       total_attempts = total_attempts + 1,
 89:       correct_count = correct_count + CASE WHEN p_is_correct THEN 1 ELSE 0 END,
 90:       kannada = COALESCE(p_kannada, kannada),
 91:       icon = COALESCE(p_icon, icon),
 92:       category = COALESCE(p_category, category),
 93:       updated_at = NOW()
 94:     WHERE id = stat_id;
 95:   END IF;
 96: 
 97:   RETURN stat_id;
 98: END;
 99: $$ LANGUAGE plpgsql SECURITY DEFINER;
100: 
101: 
102: 
103: 
104: 
105: 
106: DELETE FROM word_stats
107: WHERE user_id NOT IN (SELECT user_id FROM profiles);
108: 
109: 
110: 
111: 
112: 
113: 
114: CREATE OR REPLACE FUNCTION sync_clerk_profile(
115:   p_user_id TEXT,
116:   p_display_name TEXT,
117:   p_profile_image_url TEXT,
118:   p_email TEXT
119: ) RETURNS UUID AS $$
120: DECLARE
121:   profile_id UUID;
122: BEGIN
123: 
124:   IF p_user_id IS NULL THEN
125:     RAISE EXCEPTION 'User ID cannot be null';
126:   END IF;
127: 
128: 
129:   SELECT id INTO profile_id FROM profiles WHERE user_id = p_user_id;
130: 
131:   IF profile_id IS NULL THEN
132: 
133:     INSERT INTO profiles (
134:       id,
135:       user_id,
136:       display_name,
137:       profile_image_url,
138:       email,
139:       last_sign_in,
140:       created_at,
141:       updated_at
142:     ) VALUES (
143:       gen_random_uuid(),
144:       p_user_id,
145:       COALESCE(p_display_name, 'User ' || substring(p_user_id, 1, 6)),
146:       p_profile_image_url,
147:       p_email,
148:       NOW(),
149:       NOW(),
150:       NOW()
151:     )
152:     RETURNING id INTO profile_id;
153: 
154: 
155:     IF NOT EXISTS (SELECT 1 FROM progress WHERE user_id = p_user_id) THEN
156:       INSERT INTO progress (user_id, stars, words_learned, quizzes_played)
157:       VALUES (p_user_id, 0, 0, 0);
158:     END IF;
159:   ELSE
160: 
161:     UPDATE profiles
162:     SET
163:       display_name = COALESCE(p_display_name, profiles.display_name),
164:       profile_image_url = COALESCE(p_profile_image_url, profiles.profile_image_url),
165:       email = COALESCE(p_email, profiles.email),
166:       last_sign_in = NOW(),
167:       updated_at = NOW()
168:     WHERE profiles.user_id = p_user_id;
169:   END IF;
170: 
171: 
172:   RETURN profile_id;
173: END;
174: $$ LANGUAGE plpgsql SECURITY DEFINER;
````

## File: db/migrations/011_fix_function_parameter_names.sql
````sql
 1: DROP FUNCTION IF EXISTS sync_clerk_profile(text, text, text, text);
 2: 
 3: 
 4: CREATE OR REPLACE FUNCTION sync_clerk_profile(
 5:   p_user_id TEXT,
 6:   p_display_name TEXT,
 7:   p_profile_image_url TEXT,
 8:   p_email TEXT
 9: ) RETURNS UUID AS $$
10: DECLARE
11:   profile_id UUID;
12: BEGIN
13: 
14:   IF p_user_id IS NULL THEN
15:     RAISE EXCEPTION 'User ID cannot be null';
16:   END IF;
17: 
18: 
19:   SELECT id INTO profile_id FROM profiles WHERE user_id = p_user_id;
20: 
21:   IF profile_id IS NULL THEN
22: 
23:     INSERT INTO profiles (
24:       id,
25:       user_id,
26:       display_name,
27:       profile_image_url,
28:       email,
29:       last_sign_in,
30:       created_at,
31:       updated_at
32:     ) VALUES (
33:       gen_random_uuid(),
34:       p_user_id,
35:       COALESCE(p_display_name, 'User ' || substring(p_user_id, 1, 6)),
36:       p_profile_image_url,
37:       p_email,
38:       NOW(),
39:       NOW(),
40:       NOW()
41:     )
42:     RETURNING id INTO profile_id;
43: 
44: 
45:     IF NOT EXISTS (SELECT 1 FROM progress WHERE user_id = p_user_id) THEN
46:       INSERT INTO progress (user_id, stars, words_learned, quizzes_played)
47:       VALUES (p_user_id, 0, 0, 0);
48:     END IF;
49:   ELSE
50: 
51:     UPDATE profiles
52:     SET
53:       display_name = COALESCE(p_display_name, profiles.display_name),
54:       profile_image_url = COALESCE(p_profile_image_url, profiles.profile_image_url),
55:       email = COALESCE(p_email, profiles.email),
56:       last_sign_in = NOW(),
57:       updated_at = NOW()
58:     WHERE profiles.user_id = p_user_id;
59:   END IF;
60: 
61: 
62:   RETURN profile_id;
63: END;
64: $$ LANGUAGE plpgsql SECURITY DEFINER;
65: 
66: 
67: 
68: 
69: 
70: 
71: DROP FUNCTION IF EXISTS admin_sync_profile(text, text, text, text);
72: 
73: 
74: CREATE OR REPLACE FUNCTION admin_sync_profile(
75:   p_user_id TEXT,
76:   p_display_name TEXT,
77:   p_profile_image_url TEXT,
78:   p_email TEXT
79: )
80: RETURNS UUID AS $$
81: BEGIN
82:   RETURN sync_clerk_profile(p_user_id, p_display_name, p_profile_image_url, p_email);
83: END;
84: $$ LANGUAGE plpgsql SECURITY DEFINER;
````

## File: db/migrations/012_fix_array_parameter_handling.sql
````sql
  1: CREATE OR REPLACE FUNCTION get_user_profile(
  2:   p_user_id TEXT
  3: )
  4: RETURNS TABLE (
  5:   id UUID,
  6:   user_id TEXT,
  7:   display_name TEXT,
  8:   profile_image_url TEXT,
  9:   email TEXT,
 10:   last_sign_in TIMESTAMPTZ,
 11:   created_at TIMESTAMPTZ,
 12:   updated_at TIMESTAMPTZ
 13: ) AS $$
 14: BEGIN
 15:   RETURN QUERY
 16:   SELECT
 17:     p.id,
 18:     p.user_id,
 19:     p.display_name,
 20:     p.profile_image_url,
 21:     p.email,
 22:     p.last_sign_in,
 23:     p.created_at,
 24:     p.updated_at
 25:   FROM profiles p
 26:   WHERE p.user_id = p_user_id;
 27: END;
 28: $$ LANGUAGE plpgsql;
 29: 
 30: 
 31: CREATE OR REPLACE FUNCTION get_user_profiles(
 32:   p_user_ids TEXT[]
 33: )
 34: RETURNS TABLE (
 35:   id UUID,
 36:   user_id TEXT,
 37:   display_name TEXT,
 38:   profile_image_url TEXT,
 39:   email TEXT,
 40:   last_sign_in TIMESTAMPTZ,
 41:   created_at TIMESTAMPTZ,
 42:   updated_at TIMESTAMPTZ
 43: ) AS $$
 44: BEGIN
 45: 
 46:   IF p_user_ids IS NULL OR array_length(p_user_ids, 1) IS NULL THEN
 47:     RETURN;
 48:   END IF;
 49: 
 50:   RETURN QUERY
 51:   SELECT
 52:     p.id,
 53:     p.user_id,
 54:     p.display_name,
 55:     p.profile_image_url,
 56:     p.email,
 57:     p.last_sign_in,
 58:     p.created_at,
 59:     p.updated_at
 60:   FROM profiles p
 61:   WHERE p.user_id = ANY(p_user_ids);
 62: END;
 63: $$ LANGUAGE plpgsql;
 64: 
 65: 
 66: CREATE OR REPLACE FUNCTION user_id_to_array(
 67:   p_user_id TEXT
 68: )
 69: RETURNS TEXT[] AS $$
 70: BEGIN
 71:   RETURN ARRAY[p_user_id];
 72: END;
 73: $$ LANGUAGE plpgsql;
 74: 
 75: 
 76: 
 77: 
 78: 
 79: 
 80: CREATE OR REPLACE FUNCTION get_leaderboard(
 81:   p_category TEXT DEFAULT NULL,
 82:   p_limit INTEGER DEFAULT 5
 83: )
 84: RETURNS TABLE (
 85:   user_id TEXT,
 86:   display_name TEXT,
 87:   profile_image_url TEXT,
 88:   accuracy_percentage DECIMAL,
 89:   total_attempts INTEGER,
 90:   quizzes_completed INTEGER,
 91:   rank BIGINT
 92: ) AS $$
 93: BEGIN
 94:   RETURN QUERY
 95:   SELECT
 96:     l.user_id,
 97:     l.display_name,
 98:     l.profile_image_url,
 99:     l.accuracy_percentage,
100:     l.total_attempts,
101:     l.quizzes_completed,
102:     RANK() OVER (ORDER BY l.accuracy_percentage DESC) as rank
103:   FROM leaderboard l
104:   WHERE
105:     p_category IS NULL
106:     OR p_category = ''
107:     OR p_category = ANY(l.categories)
108:   ORDER BY l.accuracy_percentage DESC
109:   LIMIT p_limit;
110: END;
111: $$ LANGUAGE plpgsql;
112: 
113: -- Function to get user rank on the leaderboard
114: CREATE OR REPLACE FUNCTION get_user_leaderboard_rank(
115:   p_user_id TEXT,
116:   p_category TEXT DEFAULT NULL
117: )
118: RETURNS INTEGER AS $$
119: DECLARE
120:   user_rank INTEGER;
121: BEGIN
122:   -- Check if user exists in leaderboard
123:   IF NOT EXISTS (SELECT 1 FROM leaderboard WHERE user_id = p_user_id) THEN
124:     RETURN NULL;
125:   END IF;
126: 
127:   -- Get user's rank
128:   SELECT rank INTO user_rank
129:   FROM (
130:     SELECT
131:       user_id,
132:       RANK() OVER (ORDER BY accuracy_percentage DESC) as rank
133:     FROM leaderboard
134:     WHERE
135:       p_category IS NULL
136:       OR p_category = ''
137:       OR p_category = ANY(categories)
138:   ) ranks
139:   WHERE user_id = p_user_id;
140: 
141:   RETURN user_rank;
142: END;
143: $$ LANGUAGE plpgsql;
````

## File: db/migrations/013_add_string_to_array_compatibility.sql
````sql
  1: CREATE OR REPLACE FUNCTION get_user_profiles_compat(
  2:   p_user_ids TEXT
  3: )
  4: RETURNS TABLE (
  5:   id UUID,
  6:   user_id TEXT,
  7:   display_name TEXT,
  8:   profile_image_url TEXT,
  9:   email TEXT,
 10:   last_sign_in TIMESTAMPTZ,
 11:   created_at TIMESTAMPTZ,
 12:   updated_at TIMESTAMPTZ
 13: ) AS $$
 14: BEGIN
 15: 
 16:   RETURN QUERY SELECT * FROM get_user_profiles(ARRAY[p_user_ids]);
 17: END;
 18: $$ LANGUAGE plpgsql;
 19: 
 20: 
 21: CREATE OR REPLACE FUNCTION get_profiles_by_ids(
 22:   user_ids TEXT
 23: )
 24: RETURNS SETOF profiles AS $$
 25: BEGIN
 26: 
 27:   RETURN QUERY
 28:   SELECT *
 29:   FROM profiles
 30:   WHERE
 31: 
 32: 
 33: 
 34:     user_id = user_ids
 35:     OR
 36:     (
 37:       user_ids LIKE '{%}' AND
 38:       user_id = ANY(string_to_array(trim(BOTH '{}' FROM user_ids), ','))
 39:     );
 40: END;
 41: $$ LANGUAGE plpgsql;
 42: 
 43: 
 44: 
 45: 
 46: 
 47: 
 48: CREATE OR REPLACE FUNCTION trace_parameter_type(
 49:   param ANYELEMENT
 50: )
 51: RETURNS TEXT AS $$
 52: BEGIN
 53:   RETURN pg_typeof(param)::TEXT;
 54: END;
 55: $$ LANGUAGE plpgsql;
 56: 
 57: 
 58: 
 59: 
 60: 
 61: 
 62: DROP FUNCTION IF EXISTS get_profile_by_user_id(text);
 63: DROP FUNCTION IF EXISTS get_user_profiles(text);
 64: 
 65: 
 66: CREATE OR REPLACE FUNCTION get_profile_by_user_id(
 67:   p_user_id TEXT
 68: )
 69: RETURNS SETOF profiles AS $$
 70: BEGIN
 71:   RETURN QUERY
 72:   SELECT * FROM profiles WHERE user_id = p_user_id;
 73: END;
 74: $$ LANGUAGE plpgsql;
 75: 
 76: 
 77: CREATE OR REPLACE FUNCTION get_profiles_robust(
 78:   param TEXT
 79: )
 80: RETURNS SETOF profiles AS $$
 81: DECLARE
 82:   is_array BOOLEAN;
 83: BEGIN
 84: 
 85:   BEGIN
 86:     is_array := (param LIKE '{%}');
 87:   EXCEPTION WHEN OTHERS THEN
 88:     is_array := FALSE;
 89:   END;
 90: 
 91: 
 92:   IF is_array THEN
 93: 
 94:     BEGIN
 95:       RETURN QUERY
 96:       SELECT * FROM profiles
 97:       WHERE user_id = ANY(string_to_array(trim(BOTH '{}' FROM param), ','));
 98:     EXCEPTION WHEN OTHERS THEN
 99: 
100:       RETURN QUERY SELECT * FROM profiles WHERE user_id = param;
101:     END;
102:   ELSE
103: 
104:     RETURN QUERY SELECT * FROM profiles WHERE user_id = param;
105:   END IF;
106: END;
107: $$ LANGUAGE plpgsql;
````

## File: db/migrations/014_enhanced_leaderboard_function.sql
````sql
  1: CREATE OR REPLACE FUNCTION get_homepage_leaderboard(
  2:   p_category TEXT DEFAULT NULL,
  3:   p_limit INTEGER DEFAULT 5
  4: )
  5: RETURNS TABLE (
  6:   rank BIGINT,
  7:   user_id TEXT,
  8:   display_name TEXT,
  9:   profile_image_url TEXT,
 10:   accuracy_percentage DECIMAL(5,2),
 11:   total_attempts INTEGER,
 12:   correct_answers INTEGER,
 13:   quizzes_completed INTEGER
 14: ) AS $$
 15: BEGIN
 16:   RETURN QUERY
 17:   SELECT
 18:     RANK() OVER (ORDER BY l.accuracy_percentage DESC) as rank,
 19:     l.user_id,
 20:     COALESCE(p.display_name, l.display_name, 'Unknown User') as display_name,
 21:     COALESCE(p.profile_image_url, l.profile_image_url) as profile_image_url,
 22:     l.accuracy_percentage,
 23:     l.total_attempts,
 24:     l.correct_answers,
 25:     l.quizzes_completed
 26:   FROM leaderboard l
 27:   LEFT JOIN profiles p ON l.user_id = p.user_id
 28:   WHERE
 29:     p_category IS NULL
 30:     OR p_category = ''
 31:     OR p_category = ANY(l.categories)
 32:   ORDER BY l.accuracy_percentage DESC
 33:   LIMIT p_limit;
 34: END;
 35: $$ LANGUAGE plpgsql;
 36: 
 37: -- Function to get a specific user's rank and stats on the leaderboard
 38: CREATE OR REPLACE FUNCTION get_user_leaderboard_position(
 39:   p_user_id TEXT,
 40:   p_category TEXT DEFAULT NULL
 41: )
 42: RETURNS TABLE (
 43:   rank BIGINT,
 44:   user_id TEXT,
 45:   display_name TEXT,
 46:   profile_image_url TEXT,
 47:   accuracy_percentage DECIMAL(5,2),
 48:   total_attempts INTEGER,
 49:   correct_answers INTEGER,
 50:   quizzes_completed INTEGER
 51: ) AS $$
 52: BEGIN
 53:   RETURN QUERY
 54:   WITH ranked_users AS (
 55:     SELECT
 56:       RANK() OVER (ORDER BY l.accuracy_percentage DESC) as rank,
 57:       l.user_id,
 58:       COALESCE(p.display_name, l.display_name, 'Unknown User') as display_name,
 59:       COALESCE(p.profile_image_url, l.profile_image_url) as profile_image_url,
 60:       l.accuracy_percentage,
 61:       l.total_attempts,
 62:       l.correct_answers,
 63:       l.quizzes_completed
 64:     FROM leaderboard l
 65:     LEFT JOIN profiles p ON l.user_id = p.user_id
 66:     WHERE
 67:       p_category IS NULL
 68:       OR p_category = ''
 69:       OR p_category = ANY(l.categories)
 70:   )
 71:   SELECT * FROM ranked_users
 72:   WHERE user_id = p_user_id;
 73: END;
 74: $$ LANGUAGE plpgsql;
 75: 
 76: -- Function to get available categories for the leaderboard filters
 77: CREATE OR REPLACE FUNCTION get_leaderboard_categories()
 78: RETURNS TABLE (
 79:   category TEXT
 80: ) AS $$
 81: BEGIN
 82:   RETURN QUERY
 83:   SELECT DISTINCT unnest(categories) as category
 84:   FROM leaderboard
 85:   WHERE categories IS NOT NULL AND array_length(categories, 1) > 0
 86:   ORDER BY category;
 87: END;
 88: $$ LANGUAGE plpgsql;
 89: 
 90: -- Function to recalculate a user's leaderboard entry
 91: CREATE OR REPLACE FUNCTION update_user_leaderboard(
 92:   p_user_id TEXT
 93: )
 94: RETURNS VOID AS $$
 95: DECLARE
 96:   user_display_name TEXT;
 97:   user_profile_image TEXT;
 98: BEGIN
 99: 
100:   SELECT display_name, profile_image_url INTO user_display_name, user_profile_image
101:   FROM profiles
102:   WHERE user_id = p_user_id;
103: 
104: 
105:   DELETE FROM leaderboard WHERE user_id = p_user_id;
106: 
107: 
108:   INSERT INTO leaderboard (
109:     user_id,
110:     total_attempts,
111:     correct_answers,
112:     accuracy_percentage,
113:     quizzes_completed,
114:     categories,
115:     display_name,
116:     profile_image_url,
117:     last_updated
118:   )
119:   SELECT
120:     p_user_id,
121:     SUM(total_answers) as total_attempts,
122:     SUM(correct_answers) as correct_answers,
123:     CASE
124:       WHEN SUM(total_answers) > 0 THEN (SUM(correct_answers)::DECIMAL / SUM(total_answers)) * 100
125:       ELSE 0
126:     END as accuracy_percentage,
127:     COUNT(*) as quizzes_completed,
128:     ARRAY_AGG(DISTINCT category) FILTER (WHERE category IS NOT NULL AND category != '') as categories,
129:     user_display_name,
130:     user_profile_image,
131:     NOW()
132:   FROM quiz_results
133:   WHERE user_id = p_user_id
134:   GROUP BY user_id;
135: END;
136: $$ LANGUAGE plpgsql;
````

## File: db/migrations/015_fix_leaderboard_functions.sql
````sql
 1: DROP FUNCTION IF EXISTS get_homepage_leaderboard(text, integer);
 2: DROP FUNCTION IF EXISTS get_user_leaderboard_position(text, text);
 3: 
 4: 
 5: 
 6: CREATE OR REPLACE FUNCTION get_homepage_leaderboard(
 7:   p_category TEXT DEFAULT NULL,
 8:   p_limit INTEGER DEFAULT 5
 9: )
10: RETURNS TABLE (
11:   rank BIGINT,
12:   user_id TEXT,
13:   display_name TEXT,
14:   profile_image_url TEXT,
15:   accuracy_percentage DECIMAL(5,2),
16:   total_attempts INTEGER,
17:   correct_answers INTEGER,
18:   quizzes_completed INTEGER
19: ) AS $$
20: BEGIN
21:   RETURN QUERY
22:   SELECT
23:     RANK() OVER (ORDER BY l.accuracy_percentage DESC) as rank,
24:     l.user_id,
25:     COALESCE(p.display_name, l.display_name, 'Unknown User') as display_name,
26:     COALESCE(p.profile_image_url, l.profile_image_url) as profile_image_url,
27:     l.accuracy_percentage,
28:     l.total_attempts,
29:     l.correct_answers,
30:     l.quizzes_completed
31:   FROM leaderboard l
32:   LEFT JOIN profiles p ON l.user_id = p.user_id
33:   WHERE
34:     p_category IS NULL
35:     OR p_category = ''
36:     OR p_category = ANY(l.categories)
37:   ORDER BY l.accuracy_percentage DESC
38:   LIMIT p_limit;
39: END;
40: $$ LANGUAGE plpgsql;
41: 
42: -- Function to get a specific user's rank and stats on the leaderboard
43: CREATE OR REPLACE FUNCTION get_user_leaderboard_position(
44:   p_user_id TEXT,
45:   p_category TEXT DEFAULT NULL
46: )
47: RETURNS TABLE (
48:   rank BIGINT,
49:   user_id TEXT,
50:   display_name TEXT,
51:   profile_image_url TEXT,
52:   accuracy_percentage DECIMAL(5,2),
53:   total_attempts INTEGER,
54:   correct_answers INTEGER,
55:   quizzes_completed INTEGER
56: ) AS $$
57: BEGIN
58:   RETURN QUERY
59:   WITH ranked_users AS (
60:     SELECT
61:       RANK() OVER (ORDER BY l.accuracy_percentage DESC) as rank,
62:       l.user_id,
63:       COALESCE(p.display_name, l.display_name, 'Unknown User') as display_name,
64:       COALESCE(p.profile_image_url, l.profile_image_url) as profile_image_url,
65:       l.accuracy_percentage,
66:       l.total_attempts,
67:       l.correct_answers,
68:       l.quizzes_completed
69:     FROM leaderboard l
70:     LEFT JOIN profiles p ON l.user_id = p.user_id
71:     WHERE
72:       p_category IS NULL
73:       OR p_category = ''
74:       OR p_category = ANY(l.categories)
75:   )
76:   SELECT * FROM ranked_users
77:   WHERE user_id = p_user_id;
78: END;
79: $$ LANGUAGE plpgsql;
````

## File: db/migrations/016_fix_ambiguous_column.sql
````sql
 1: DROP FUNCTION IF EXISTS get_user_leaderboard_position(text, text);
 2: 
 3: 
 4: CREATE OR REPLACE FUNCTION get_user_leaderboard_position(
 5:   p_user_id TEXT,
 6:   p_category TEXT DEFAULT NULL
 7: )
 8: RETURNS TABLE (
 9:   rank BIGINT,
10:   user_id TEXT,
11:   display_name TEXT,
12:   profile_image_url TEXT,
13:   accuracy_percentage DECIMAL(5,2),
14:   total_attempts INTEGER,
15:   correct_answers INTEGER,
16:   quizzes_completed INTEGER
17: ) AS $$
18: BEGIN
19:   RETURN QUERY
20:   WITH ranked_users AS (
21:     SELECT
22:       RANK() OVER (ORDER BY l.accuracy_percentage DESC) as rank,
23:       l.user_id,
24:       COALESCE(p.display_name, l.display_name, 'Unknown User') as display_name,
25:       COALESCE(p.profile_image_url, l.profile_image_url) as profile_image_url,
26:       l.accuracy_percentage,
27:       l.total_attempts,
28:       l.correct_answers,
29:       l.quizzes_completed
30:     FROM leaderboard l
31:     LEFT JOIN profiles p ON l.user_id = p.user_id
32:     WHERE
33:       p_category IS NULL
34:       OR p_category = ''
35:       OR p_category = ANY(l.categories)
36:   )
37:   SELECT * FROM ranked_users
38:   WHERE ranked_users.user_id = p_user_id;
39: END;
40: $$ LANGUAGE plpgsql;
````

## File: db/migrations/017_fix_profile_dependency.sql
````sql
 1: CREATE OR REPLACE FUNCTION ensure_profile_exists()
 2: RETURNS TRIGGER AS $$
 3: BEGIN
 4: 
 5:   IF NOT EXISTS (SELECT 1 FROM profiles WHERE user_id = NEW.user_id) THEN
 6: 
 7:     INSERT INTO profiles (user_id, display_name, created_at, updated_at)
 8:     VALUES (
 9:       NEW.user_id,
10:       'User ' || substring(NEW.user_id, 1, 6),
11:       NOW(),
12:       NOW()
13:     )
14:     ON CONFLICT (user_id) DO NOTHING;
15:   END IF;
16:   RETURN NEW;
17: END;
18: $$ LANGUAGE plpgsql;
19: 
20: 
21: DROP TRIGGER IF EXISTS ensure_profile_before_word_stats ON word_stats;
22: CREATE TRIGGER ensure_profile_before_word_stats
23: BEFORE INSERT OR UPDATE ON word_stats
24: FOR EACH ROW
25: EXECUTE FUNCTION ensure_profile_exists();
26: 
27: 
28: DROP TRIGGER IF EXISTS ensure_profile_before_quiz_results ON quiz_results;
29: CREATE TRIGGER ensure_profile_before_quiz_results
30: BEFORE INSERT OR UPDATE ON quiz_results
31: FOR EACH ROW
32: EXECUTE FUNCTION ensure_profile_exists();
33: 
34: 
35: DROP TRIGGER IF EXISTS ensure_profile_before_progress ON progress;
36: CREATE TRIGGER ensure_profile_before_progress
37: BEFORE INSERT OR UPDATE ON progress
38: FOR EACH ROW
39: EXECUTE FUNCTION ensure_profile_exists();
40: 
41: 
42: DROP TRIGGER IF EXISTS ensure_profile_before_leaderboard ON leaderboard;
43: CREATE TRIGGER ensure_profile_before_leaderboard
44: BEFORE INSERT OR UPDATE ON leaderboard
45: FOR EACH ROW
46: EXECUTE FUNCTION ensure_profile_exists();
47: 
48: 
49: INSERT INTO profiles (user_id, display_name, created_at, updated_at)
50: SELECT DISTINCT user_id, 'User ' || substring(user_id, 1, 6), NOW(), NOW()
51: FROM (
52:   SELECT user_id FROM word_stats
53:   UNION
54:   SELECT user_id FROM quiz_results
55:   UNION
56:   SELECT user_id FROM progress
57:   UNION
58:   SELECT user_id FROM leaderboard
59: ) AS all_users
60: WHERE user_id NOT IN (SELECT user_id FROM profiles)
61: ON CONFLICT (user_id) DO NOTHING;
````

## File: db/migrations/018_update_profile_trigger.sql
````sql
 1: DROP FUNCTION IF EXISTS ensure_profile_exists() CASCADE;
 2: 
 3: 
 4: CREATE OR REPLACE FUNCTION ensure_profile_exists()
 5: RETURNS TRIGGER AS $$
 6: BEGIN
 7: 
 8:   IF NOT EXISTS (SELECT 1 FROM profiles WHERE user_id = NEW.user_id) THEN
 9: 
10:     INSERT INTO profiles (
11:       user_id,
12:       display_name,
13:       profile_image_url,
14:       email,
15:       created_at,
16:       updated_at
17:     )
18:     VALUES (
19:       NEW.user_id,
20:       'User ' || substring(NEW.user_id, 1, 6),
21:       NULL,
22:       NULL,
23:       NOW(),
24:       NOW()
25:     )
26:     ON CONFLICT (user_id) DO NOTHING;
27:   END IF;
28:   RETURN NEW;
29: END;
30: $$ LANGUAGE plpgsql;
31: 
32: 
33: CREATE TRIGGER ensure_profile_before_word_stats
34: BEFORE INSERT OR UPDATE ON word_stats
35: FOR EACH ROW
36: EXECUTE FUNCTION ensure_profile_exists();
37: 
38: CREATE TRIGGER ensure_profile_before_quiz_results
39: BEFORE INSERT OR UPDATE ON quiz_results
40: FOR EACH ROW
41: EXECUTE FUNCTION ensure_profile_exists();
42: 
43: CREATE TRIGGER ensure_profile_before_progress
44: BEFORE INSERT OR UPDATE ON progress
45: FOR EACH ROW
46: EXECUTE FUNCTION ensure_profile_exists();
47: 
48: CREATE TRIGGER ensure_profile_before_leaderboard
49: BEFORE INSERT OR UPDATE ON leaderboard
50: FOR EACH ROW
51: EXECUTE FUNCTION ensure_profile_exists();
52: 
53: 
54: UPDATE profiles
55: SET
56:   profile_image_url = CASE
57:     WHEN profile_image_url IS NULL THEN NULL
58:     ELSE profile_image_url
59:   END,
60:   email = CASE
61:     WHEN email IS NULL THEN NULL
62:     ELSE email
63:   END
64: WHERE
65:   display_name LIKE 'User %' AND
66:   (profile_image_url IS NULL OR email IS NULL);
````

## File: db/migrations/019_add_stripe_fields_to_profiles.sql
````sql
 1: DO $$
 2: BEGIN
 3:     IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'membership') THEN
 4:         CREATE TYPE membership AS ENUM ('free', 'pro');
 5:     END IF;
 6: END$$;
 7: 
 8: 
 9: ALTER TABLE profiles
10: ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT,
11: ADD COLUMN IF NOT EXISTS stripe_subscription_id TEXT,
12: ADD COLUMN IF NOT EXISTS membership membership NOT NULL DEFAULT 'free';
13: 
14: 
15: CREATE INDEX IF NOT EXISTS idx_profiles_stripe_customer_id ON profiles (stripe_customer_id)
16: WHERE stripe_customer_id IS NOT NULL;
17: 
18: 
19: DROP FUNCTION IF EXISTS sync_clerk_profile(text, text, text, text);
20: 
21: 
22: CREATE OR REPLACE FUNCTION sync_clerk_profile(
23:   p_user_id TEXT,
24:   p_display_name TEXT,
25:   p_profile_image_url TEXT,
26:   p_email TEXT
27: )
28: RETURNS VOID AS $$
29: BEGIN
30:   INSERT INTO profiles (
31:     user_id,
32:     display_name,
33:     profile_image_url,
34:     email,
35:     last_sign_in,
36:     created_at,
37:     updated_at
38:   )
39:   VALUES (
40:     p_user_id,
41:     p_display_name,
42:     p_profile_image_url,
43:     p_email,
44:     NOW(),
45:     NOW(),
46:     NOW()
47:   )
48:   ON CONFLICT (user_id)
49:   DO UPDATE SET
50:     display_name = p_display_name,
51:     profile_image_url = COALESCE(p_profile_image_url, profiles.profile_image_url),
52:     email = COALESCE(p_email, profiles.email),
53:     last_sign_in = NOW(),
54:     updated_at = NOW();
55: END;
56: $$ LANGUAGE plpgsql;
````

## File: db/migrations/020_fix_sync_profile_function.sql
````sql
 1: DROP FUNCTION IF EXISTS sync_clerk_profile(text, text, text, text);
 2: 
 3: 
 4: CREATE OR REPLACE FUNCTION sync_clerk_profile(
 5:   p_user_id TEXT,
 6:   p_display_name TEXT,
 7:   p_profile_image_url TEXT,
 8:   p_email TEXT
 9: )
10: RETURNS VOID AS $$
11: BEGIN
12:   INSERT INTO profiles (
13:     user_id,
14:     display_name,
15:     profile_image_url,
16:     email,
17:     last_sign_in,
18:     created_at,
19:     updated_at
20:   )
21:   VALUES (
22:     p_user_id,
23:     p_display_name,
24:     p_profile_image_url,
25:     p_email,
26:     NOW(),
27:     NOW(),
28:     NOW()
29:   )
30:   ON CONFLICT (user_id)
31:   DO UPDATE SET
32:     display_name = p_display_name,
33:     profile_image_url = COALESCE(p_profile_image_url, profiles.profile_image_url),
34:     email = COALESCE(p_email, profiles.email),
35:     last_sign_in = NOW(),
36:     updated_at = NOW();
37: END;
38: $$ LANGUAGE plpgsql;
````

## File: db/migrations/021_fix_sync_function_null_handling.sql
````sql
 1: DROP FUNCTION IF EXISTS sync_clerk_profile(text, text, text, text);
 2: 
 3: 
 4: CREATE OR REPLACE FUNCTION sync_clerk_profile(
 5:   p_user_id TEXT,
 6:   p_display_name TEXT,
 7:   p_profile_image_url TEXT,
 8:   p_email TEXT
 9: )
10: RETURNS VOID AS $$
11: BEGIN
12: 
13:   IF p_user_id IS NULL OR p_user_id = '' THEN
14:     RAISE EXCEPTION 'user_id is required';
15:   END IF;
16: 
17:   IF p_display_name IS NULL OR p_display_name = '' THEN
18:     RAISE EXCEPTION 'display_name is required';
19:   END IF;
20: 
21: 
22:   INSERT INTO profiles (
23:     user_id,
24:     display_name,
25:     profile_image_url,
26:     email,
27:     last_sign_in,
28:     created_at,
29:     updated_at
30:   )
31:   VALUES (
32:     p_user_id,
33:     p_display_name,
34:     NULLIF(p_profile_image_url, ''), -- Convert empty string to NULL
35:     NULLIF(p_email, ''), -- Convert empty string to NULL
36:     NOW(),
37:     NOW(),
38:     NOW()
39:   )
40:   ON CONFLICT (user_id)
41:   DO UPDATE SET
42:     display_name = p_display_name,
43:     profile_image_url = CASE
44:                           WHEN NULLIF(p_profile_image_url, '') IS NULL THEN profiles.profile_image_url
45:                           ELSE NULLIF(p_profile_image_url, '')
46:                         END,
47:     email = CASE
48:               WHEN NULLIF(p_email, '') IS NULL THEN profiles.email
49:               ELSE NULLIF(p_email, '')
50:             END,
51:     last_sign_in = NOW(),
52:     updated_at = NOW();
53: 
54:   -- For debugging, can be removed in production
55:   RAISE NOTICE 'Profile synced for user %', p_user_id;
56: END;
57: $$ LANGUAGE plpgsql;
````

## File: db/migrations/022.sql
````sql
 1: CREATE TABLE IF NOT EXISTS badges (
 2:   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 3:   user_id TEXT NOT NULL REFERENCES profiles(user_id) ON DELETE CASCADE,
 4:   badge_id TEXT NOT NULL,
 5:   current_level INTEGER NOT NULL DEFAULT 1,
 6:   progress INTEGER NOT NULL DEFAULT 0,
 7:   earned_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
 8:   updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
 9: 
10: 
11:   CONSTRAINT badges_user_badge_unique UNIQUE(user_id, badge_id)
12: );
13: 
14: 
15: CREATE INDEX badges_user_id_idx ON badges(user_id);
16: 
17: 
18: COMMENT ON TABLE badges IS 'Stores user achievement badges earned through app activities';
````

## File: db/migrations/ENV_SETUP_GUIDE.md
````markdown
  1: # Environment Variable Setup Guide
  2: 
  3: For the Clerk-Supabase integration to work correctly, you need to set up specific environment variables in your `.env.local` file. This guide will help you configure these variables properly.
  4: 
  5: ## Required Environment Variables
  6: 
  7: Add these variables to your `.env.local` file:
  8: 
  9: ```
 10: # Supabase
 11: DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-ID].supabase.co:5432/postgres"
 12: NEXT_PUBLIC_SUPABASE_URL="https://[YOUR-PROJECT-ID].supabase.co"
 13: NEXT_PUBLIC_SUPABASE_ANON_KEY="[YOUR-ANON-KEY]"
 14: 
 15: # Clerk
 16: NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
 17: CLERK_SECRET_KEY="sk_test_..."
 18: 
 19: # Clerk-Supabase Integration
 20: SUPABASE_JWT_SECRET="[YOUR-JWT-SECRET]"
 21: NEXT_PUBLIC_CLERK_SUPABASE_USAGE=true
 22: ```
 23: 
 24: ## Where to Find These Values
 25: 
 26: ### Supabase Values
 27: 
 28: 1. **DATABASE_URL**:
 29:    - Go to your Supabase project dashboard
 30:    - Navigate to Settings > Database
 31:    - Find the "Connection String" section and copy the URI
 32:    - Replace `[YOUR-PASSWORD]` with your database password
 33: 
 34: 2. **NEXT_PUBLIC_SUPABASE_URL**:
 35:    - Go to Settings > API
 36:    - Copy the "URL" value
 37: 
 38: 3. **NEXT_PUBLIC_SUPABASE_ANON_KEY**:
 39:    - Go to Settings > API
 40:    - Copy the "anon public" key from "Project API keys"
 41: 
 42: 4. **SUPABASE_JWT_SECRET**:
 43:    - Go to Settings > API
 44:    - Scroll to "JWT Settings"
 45:    - Copy the "JWT Secret" value
 46:    - This should be the same secret you add to your Clerk JWT template
 47: 
 48: ### Clerk Values
 49: 
 50: 1. **NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY**:
 51:    - Go to your Clerk dashboard
 52:    - Navigate to API Keys
 53:    - Copy the "Publishable Key"
 54: 
 55: 2. **CLERK_SECRET_KEY**:
 56:    - Go to your Clerk dashboard
 57:    - Navigate to API Keys
 58:    - Copy the "Secret Key"
 59: 
 60: ## Clerk Setup for Supabase Integration
 61: 
 62: To ensure Clerk generates the correct JWTs for Supabase:
 63: 
 64: 1. Go to your Clerk dashboard
 65: 2. Navigate to JWT Templates
 66: 3. Create a new template or edit the default one
 67: 4. Add the following claims:
 68: 
 69: ```json
 70: {
 71:   "aud": "authenticated",
 72:   "sub": "{{user.id}}",
 73:   "role": "authenticated",
 74:   "user_id": "{{user.id}}"
 75: }
 76: ```
 77: 
 78: 5. Set the "Signing Algorithm" to "HS256"
 79: 6. Add your Supabase JWT Secret in the "Signing Key" field
 80: 7. Save the template
 81: 
 82: ## Verifying the Integration
 83: 
 84: After setting up your environment variables and applying the database migration:
 85: 
 86: 1. Restart your Next.js development server
 87: 2. Sign in with a Clerk account
 88: 3. Try to perform an action that uses database access
 89: 4. Check your browser console for any errors
 90: 
 91: If you still see "Tenant or user not found" errors:
 92: 
 93: 1. Verify that all environment variables are correct
 94: 2. Ensure the Clerk JWT template is correctly configured
 95: 3. Check that the migration was applied successfully
 96: 4. Make sure you're properly signed in with Clerk before accessing protected resources
 97: 
 98: ## Additional Configuration
 99: 
100: For complete integration, ensure:
101: 
102: 1. The JWT Template in Clerk has the right algorithm and signing key
103: 2. Your Supabase project has the correct JWT settings
104: 3. The database migration has been applied successfully
105: 4. Your user is logged in before trying to access protected resources
````

## File: db/migrations/README.md
````markdown
 1: # Database Migrations
 2: 
 3: This directory contains SQL migrations for the KannadaKali app's Supabase database. These migrations handle table creation, schema updates, and security policies.
 4: 
 5: ## Migration Files
 6: 
 7: - `001_complete_setup.sql`: Creates all database tables, RLS policies, and integrates Clerk authentication with Supabase.
 8: 
 9: ## How to Apply Migrations
10: 
11: To apply the migrations to your Supabase database:
12: 
13: 1. Log in to your Supabase project dashboard
14: 2. Go to the SQL Editor
15: 3. Click on "New Query"
16: 4. Copy the contents of `001_complete_setup.sql`
17: 5. Paste it into the SQL Editor
18: 6. Execute the query
19: 
20: ## What This Migration Sets Up
21: 
22: This single migration file provides a complete setup for your database:
23: 
24: ### 1. Extensions
25: - Enables `uuid-ossp` and `pgcrypto` extensions required for UUID generation and cryptography
26: 
27: ### 2. Clerk Authentication Integration
28: - Creates JWT handling functions
29: - Sets up proper user ID extraction from Clerk tokens
30: - Ensures all user IDs are properly typed as TEXT
31: 
32: ### 3. Database Tables
33: - `profiles`: Stores user profile information
34: - `quiz_results`: Records quiz attempt performance
35: - `progress`: Tracks overall user progress statistics
36: - `word_stats`: Stores performance data for individual vocabulary words
37: 
38: ### 4. Row Level Security
39: - Sets up RLS on all tables
40: - Creates policies for all CRUD operations (SELECT, INSERT, UPDATE, DELETE)
41: - Ensures users can only access their own data
42: - Uses proper type casting to avoid type mismatch errors
43: 
44: ### 5. User Management
45: - Sets up automatic profile creation for new users
46: - Creates initial progress records for new users
47: 
48: ## Troubleshooting
49: 
50: If you encounter any issues when running the migration:
51: 
52: ### "Tenant or user not found" error
53: This typically indicates that the Clerk-Supabase integration isn't working correctly:
54: 
55: 1. Check your Supabase and Clerk environment variables
56: 2. Verify that your JWT secret is correctly set in Supabase
57: 3. Make sure your Clerk publishable key and secret key are correctly set
58: 4. Ensure you've properly configured JWTs in Clerk settings
59: 
60: ### Type mismatch errors
61: The migration file uses explicit type casting with `::text` on all `auth.uid()` comparisons to avoid type mismatch issues.
62: 
63: ### Table or type already exists
64: If you get errors about a table or type already existing, you may need to drop those objects first or use the `IF NOT EXISTS` clause (which is already included in the migration).
65: 
66: ## Custom Configuration
67: 
68: If you need to modify the migration for your specific needs:
69: 
70: - **Adding Tables**: Add new CREATE TABLE statements following the existing patterns
71: - **Modifying RLS**: Follow the pattern of the existing policies
72: - **Custom Functions**: Add them at the end of the file
73: 
74: ## Additional Notes
75: 
76: - This migration assumes Supabase Auth is properly configured with Clerk
77: - The migration enables realtime functionality for all tables
78: - Row Level Security is enabled and properly configured for all tables
79: - Automatic user onboarding is implemented via triggers
````

## File: db/migrations/TROUBLESHOOTING.md
````markdown
  1: # Troubleshooting Guide
  2: 
  3: This guide addresses common issues encountered with the KannadaKali app's database and authentication integration.
  4: 
  5: ## "Tenant or user not found" Error
  6: 
  7: This error typically occurs when there's a mismatch between the authenticated user and the database user ID.
  8: 
  9: ### Possible Causes and Solutions:
 10: 
 11: 1. **Clerk-Supabase JWT Integration Issues**
 12:    - **Symptom**: User is authenticated in Clerk but database operations fail
 13:    - **Solution**: 
 14:      - Verify the JWT template in Clerk is correctly set up with `aud`, `sub`, and `role` claims
 15:      - Ensure the JWT signing key matches your Supabase JWT secret
 16:      - Confirm `NEXT_PUBLIC_CLERK_SUPABASE_USAGE=true` is set in your environment
 17: 
 18: 2. **Database RLS Policies**
 19:    - **Symptom**: Authentication works but specific operations fail
 20:    - **Solution**:
 21:      - Check RLS policies are properly implemented with the correct type casting
 22:      - Verify that policies exist for all CRUD operations you're attempting
 23:      - Test policies directly in the Supabase SQL editor
 24: 
 25: 3. **Missing User Profile**
 26:    - **Symptom**: New users get this error on their first login
 27:    - **Solution**:
 28:      - Verify the user trigger is properly creating profiles on signup
 29:      - Manually check if user records exist in the profiles table
 30:      - You may need to manually create a profile record for existing users
 31: 
 32: ## Function Return Type Errors
 33: 
 34: If you encounter an error like `cannot change return type of existing function`:
 35: 
 36: ### Error Message: 
 37: ```
 38: ERROR: 42P13: cannot change return type of existing function
 39: HINT: Use DROP FUNCTION auth.uid() first.
 40: ```
 41: 
 42: ### Possible Causes and Solutions:
 43: 
 44: 1. **Existing Auth Function with Different Return Type**
 45:    - **Symptom**: Error when trying to create/replace auth.uid() function
 46:    - **Solution**:
 47:      - Our migration is trying to create auth.uid() with TEXT return type, but an existing function has a different return type
 48:      - The updated migration now includes `DROP FUNCTION IF EXISTS auth.uid();` before creating the function
 49:      - If you're still seeing this error, manually run: `DROP FUNCTION auth.uid();` in SQL Editor before running the migration
 50: 
 51: 2. **Other Function Conflicts**
 52:    - **Symptom**: Similar errors with other functions
 53:    - **Solution**:
 54:      - First identify the function's full signature: `SELECT proname, pronargs, proargtypes FROM pg_proc WHERE proname = 'function_name';`
 55:      - Drop the function with the exact signature: `DROP FUNCTION function_name(arg_types);` 
 56:      - Then run the migration again
 57: 
 58: ## Type Mismatch Errors
 59: 
 60: If you see errors like `operator does not exist: uuid = text`, you have a type mismatch in your queries or RLS policies.
 61: 
 62: ### Possible Causes and Solutions:
 63: 
 64: 1. **SQL Type Casting Issues**
 65:    - **Symptom**: Error mentions type comparisons like `uuid = text`
 66:    - **Solution**:
 67:      - Ensure all RLS policies use explicit type casting with `::text`
 68:      - Check any custom SQL queries for proper type handling
 69:      - Verify table columns have consistent data types
 70: 
 71: 2. **Drizzle ORM Type Handling**
 72:    - **Symptom**: Database operations fail from server actions
 73:    - **Solution**:
 74:      - Ensure all `userId` fields in schema are defined as `text("user_id")`
 75:      - Check that Clerk user IDs are properly handled as text in your application code
 76:      - Update any custom queries to handle IDs consistently
 77: 
 78: ## Realtime Updates Not Working
 79: 
 80: If realtime updates aren't working properly:
 81: 
 82: 1. **Supabase Realtime Configuration**
 83:    - **Symptom**: Data changes don't reflect in real-time on the client
 84:    - **Solution**:
 85:      - Verify tables are added to the supabase_realtime publication
 86:      - Check RLS policies allow the required operations
 87:      - Ensure your Supabase client is configured for realtime
 88: 
 89: 2. **Client Subscription Issues**
 90:    - **Symptom**: No realtime events received
 91:    - **Solution**:
 92:      - Ensure you're properly subscribed to the correct channels
 93:      - Check for any console errors related to subscription
 94:      - Verify authentication token is being passed correctly
 95: 
 96: ## Database Connection Issues
 97: 
 98: If you're having trouble connecting to the database:
 99: 
100: 1. **Connection String Format**
101:    - **Symptom**: "Connection refused" or similar errors
102:    - **Solution**:
103:      - Verify your DATABASE_URL format is correct
104:      - Check for any special characters that need escaping
105:      - Test the connection string with a simple database client
106: 
107: 2. **Supabase Access Restrictions**
108:    - **Symptom**: Connection works locally but not in production
109:    - **Solution**:
110:      - Check IP allow lists in Supabase settings
111:      - Verify your deployment environment has the correct environment variables
112:      - Consider using connection pooling for production deployments
113: 
114: ## Data Migration Issues
115: 
116: If you encounter issues applying the migration:
117: 
118: 1. **SQL Syntax Errors**
119:    - **Symptom**: Specific error messages about SQL syntax
120:    - **Solution**:
121:      - Check line numbers mentioned in error messages
122:      - Verify SQL compatibility with PostgreSQL version
123:      - Test problematic statements individually
124: 
125: 2. **Existing Objects**
126:    - **Symptom**: "Already exists" errors
127:    - **Solution**:
128:      - Use `IF NOT EXISTS` clauses (already included in migration)
129:      - For testing, you might need to drop objects first
130:      - Consider using a transaction to ensure atomic operations
131: 
132: ## Advanced Troubleshooting
133: 
134: For more complex issues:
135: 
136: 1. **Logging Database Operations**
137:    - Add console logs in your server actions to track what's happening
138:    - Check Supabase logs in dashboard for errors
139:    - Consider enabling more verbose PostgreSQL logging temporarily
140: 
141: 2. **Testing with Known Good States**
142:    - Create a test user with known good data
143:    - Verify operations work with this test user
144:    - Compare settings between working and non-working environments
145: 
146: 3. **Database Analysis Queries**
147: 
148:    Run these queries in the Supabase SQL Editor to diagnose issues:
149: 
150:    ```sql
151:    -- Check if auth functions exist and return expected types
152:    SELECT proname, prorettype::regtype 
153:    FROM pg_proc 
154:    WHERE pronamespace = 'auth'::regnamespace 
155:    AND proname IN ('jwt', 'uid');
156: 
157:    -- Test auth.uid() function
158:    SELECT auth.uid() AS current_user_id;
159: 
160:    -- List all RLS policies to verify they exist
161:    SELECT schemaname, tablename, policyname, permissive, roles, cmd 
162:    FROM pg_policies 
163:    WHERE schemaname = 'public' 
164:    ORDER BY tablename, policyname;
165: 
166:    -- Check for user records
167:    SELECT * FROM profiles LIMIT 10;
168:    ```
169: 
170: Remember that many issues stem from mismatches between what your code expects and what the database provides. Careful examination of types, permissions, and data flows will resolve most problems.
````

## File: db/schema/badges-schema.ts
````typescript
 1: import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
 2: import { profilesTable } from "./profiles-schema"
 3: 
 4: 
 5: export const badgesTable = pgTable("badges", {
 6:   id: uuid("id").defaultRandom().primaryKey(),
 7:   userId: text("user_id")
 8:     .notNull()
 9:     .references(() => profilesTable.userId, { onDelete: "cascade" }),
10:   badgeId: text("badge_id").notNull(),
11:   currentLevel: integer("current_level").default(1).notNull(),
12:   progress: integer("progress").default(0).notNull(),
13:   earnedAt: timestamp("earned_at", { withTimezone: true })
14:     .defaultNow()
15:     .notNull(),
16:   updatedAt: timestamp("updated_at", { withTimezone: true })
17:     .defaultNow()
18:     .notNull()
19:     .$onUpdate(() => new Date())
20: })
21: 
22: 
23: export type InsertBadge = typeof badgesTable.$inferInsert
24: export type SelectBadge = typeof badgesTable.$inferSelect
````

## File: db/schema/index.ts
````typescript
1: export * from "./profiles-schema"
2: export * from "./progress-schema"
3: export * from "./quiz-results-schema"
4: export * from "./word-stats-schema"
5: export * from "./leaderboard-schema"
6: export * from "./badges-schema"
````

## File: db/schema/leaderboard-schema.ts
````typescript
 1: import {
 2:   index,
 3:   pgTable,
 4:   text,
 5:   real,
 6:   integer,
 7:   timestamp,
 8:   uuid
 9: } from "drizzle-orm/pg-core"
10: 
11: 
12: export const leaderboardTable = pgTable(
13:   "leaderboard",
14:   {
15:     id: uuid("id").defaultRandom().primaryKey(),
16:     userId: text("user_id").notNull().unique(),
17:     totalAttempts: integer("total_attempts").notNull().default(0),
18:     correctAnswers: integer("correct_answers").notNull().default(0),
19:     accuracyPercentage: real("accuracy_percentage").notNull().default(0),
20:     quizzesCompleted: integer("quizzes_completed").notNull().default(0),
21:     categories: text("categories").array().notNull().default([]),
22:     displayName: text("display_name"),
23:     profileImageUrl: text("profile_image_url"),
24:     lastUpdated: timestamp("last_updated").notNull().defaultNow()
25: 
26:   },
27:   table => {
28:     return {
29:       accuracyIdx: index("leaderboard_accuracy_idx").on(
30:         table.accuracyPercentage
31:       )
32:     }
33:   }
34: )
35: 
36: export type InsertLeaderboard = typeof leaderboardTable.$inferInsert
37: export type SelectLeaderboard = typeof leaderboardTable.$inferSelect
````

## File: db/schema/profiles-schema.ts
````typescript
 1: import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core"
 2: 
 3: 
 4: export const membershipEnum = pgEnum("membership", ["free", "pro"])
 5: 
 6: export const profilesTable = pgTable("profiles", {
 7:   userId: text("user_id").primaryKey().notNull(),
 8:   displayName: text("display_name").notNull(),
 9:   profileImageUrl: text("profile_image_url"),
10:   email: text("email"),
11: 
12:   stripeCustomerId: text("stripe_customer_id"),
13:   stripeSubscriptionId: text("stripe_subscription_id"),
14:   membership: membershipEnum("membership").default("free").notNull(),
15:   lastSignIn: timestamp("last_sign_in", { withTimezone: true })
16:     .defaultNow()
17:     .notNull(),
18:   createdAt: timestamp("created_at", { withTimezone: true })
19:     .defaultNow()
20:     .notNull(),
21:   updatedAt: timestamp("updated_at", { withTimezone: true })
22:     .defaultNow()
23:     .notNull()
24: })
25: 
26: export type InsertProfile = typeof profilesTable.$inferInsert
27: export type SelectProfile = typeof profilesTable.$inferSelect
````

## File: db/schema/progress-schema.ts
````typescript
 1: import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
 2: 
 3: 
 4: export const progressTable = pgTable("progress", {
 5:   id: uuid("id").defaultRandom().primaryKey(),
 6:   userId: text("user_id"),
 7:   stars: integer("stars").default(0).notNull(),
 8:   wordsLearned: integer("words_learned").default(0).notNull(),
 9:   quizzesPlayed: integer("quizzes_played").default(0).notNull(),
10:   createdAt: timestamp("created_at").defaultNow().notNull(),
11:   updatedAt: timestamp("updated_at")
12:     .defaultNow()
13:     .notNull()
14:     .$onUpdate(() => new Date())
15: })
16: 
17: 
18: export type InsertProgress = typeof progressTable.$inferInsert
19: export type SelectProgress = typeof progressTable.$inferSelect
````

## File: db/schema/quiz-results-schema.ts
````typescript
 1: import {
 2:   integer,
 3:   pgEnum,
 4:   pgTable,
 5:   text,
 6:   timestamp,
 7:   uuid
 8: } from "drizzle-orm/pg-core"
 9: 
10: 
11: export const quizTypeEnum = pgEnum("quiz_type", ["rapid_fire", "standard"])
12: 
13: 
14: export const quizResultsTable = pgTable("quiz_results", {
15:   id: uuid("id").defaultRandom().primaryKey(),
16:   userId: text("user_id").notNull(),
17:   quizType: quizTypeEnum("quiz_type").notNull(),
18:   score: integer("score").notNull(),
19:   totalQuestions: integer("total_questions").notNull(),
20:   timeSpent: integer("time_spent"),
21:   categories: text("categories").array(),
22:   createdAt: timestamp("created_at").defaultNow().notNull(),
23:   updatedAt: timestamp("updated_at")
24:     .defaultNow()
25:     .notNull()
26:     .$onUpdate(() => new Date())
27: })
28: 
29: 
30: export type InsertQuizResult = typeof quizResultsTable.$inferInsert
31: export type SelectQuizResult = typeof quizResultsTable.$inferSelect
````

## File: db/schema/word-stats-schema.ts
````typescript
 1: import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
 2: 
 3: 
 4: export const wordStatsTable = pgTable("word_stats", {
 5:   id: uuid("id").defaultRandom().primaryKey(),
 6:   userId: text("user_id").notNull(),
 7:   word: text("word").notNull(),
 8:   kanglish: text("kanglish").notNull(),
 9:   kannada: text("kannada"),
10:   icon: text("icon"),
11:   category: text("category"),
12: 
13: 
14:   totalAttempts: integer("total_attempts").default(0).notNull(),
15:   correctCount: integer("correct_count").default(0).notNull(),
16: 
17: 
18:   createdAt: timestamp("created_at").defaultNow().notNull(),
19:   updatedAt: timestamp("updated_at")
20:     .defaultNow()
21:     .notNull()
22:     .$onUpdate(() => new Date())
23: })
24: 
25: 
26: export type InsertWordStat = typeof wordStatsTable.$inferInsert
27: export type SelectWordStat = typeof wordStatsTable.$inferSelect
````

## File: db/SUPABASE_SETUP.md
````markdown
  1: # Supabase Setup Guide for KannadaKali App
  2: 
  3: This guide provides step-by-step instructions for setting up a Supabase database for the KannadaKali application with Clerk authentication integration.
  4: 
  5: ## Prerequisites
  6: 
  7: - A Supabase account
  8: - A Clerk account
  9: - Access to the KannadaKali repository
 10: 
 11: ## 1. Create a Supabase Project
 12: 
 13: 1. Log in to your [Supabase Dashboard](https://app.supabase.io)
 14: 2. Click "New Project"
 15: 3. Enter a name for your project (e.g., "KannadaKali")
 16: 4. Choose a database password (save this securely)
 17: 5. Select a region close to your users
 18: 6. Click "Create new project"
 19: 
 20: ## 2. Get Supabase Connection Details
 21: 
 22: Once your project is created, navigate to:
 23: 
 24: 1. Project Settings > API
 25: 2. Copy the following values:
 26:    - **Project URL**: Your Supabase project URL
 27:    - **anon/public key**: Your public API key
 28:    - **JWT Secret**: Found under Project Settings > API > JWT Settings
 29: 
 30: ## 3. Set Up Clerk Authentication
 31: 
 32: 1. Log in to your [Clerk Dashboard](https://dashboard.clerk.dev)
 33: 2. Create a new application or use an existing one
 34: 3. Go to API Keys
 35: 4. Copy both the **Publishable Key** and **Secret Key**
 36: 
 37: ## 4. Configure Clerk-Supabase Integration
 38: 
 39: 1. In your Clerk Dashboard, go to JWT Templates
 40: 2. Create a new template for Supabase
 41: 3. Configure it with the following settings:
 42:    - **Template Name**: `supabase`
 43:    - **Signing Algorithm**: `HS256`
 44:    - **Signing Key**: Paste your Supabase JWT Secret here
 45:    - **Claims**:
 46:      ```json
 47:      {
 48:        "sub": "{{user.id}}",
 49:        "role": "authenticated",
 50:        "aud": "authenticated"
 51:      }
 52:      ```
 53: 4. Save the template
 54: 
 55: ## 5. Apply Database Migrations
 56: 
 57: 1. Go to your Supabase project's SQL Editor
 58: 2. Create a new query
 59: 3. Copy the contents of `db/migrations/001_quiz_tables.sql`
 60: 4. Run the query
 61: 5. Create another new query
 62: 6. Copy the contents of `db/migrations/002_clerk_supabase_integration.sql`
 63: 7. Run the query
 64: 
 65: ## 6. Configure Environment Variables
 66: 
 67: Add these variables to your `.env.local` file:
 68: 
 69: ```
 70: # Supabase
 71: DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres
 72: NEXT_PUBLIC_SUPABASE_URL=https://[YOUR-PROJECT-REF].supabase.co
 73: NEXT_PUBLIC_SUPABASE_ANON_KEY=[YOUR-ANON-KEY]
 74: 
 75: # Clerk
 76: NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=[YOUR-CLERK-PUBLISHABLE-KEY]
 77: CLERK_SECRET_KEY=[YOUR-CLERK-SECRET-KEY]
 78: 
 79: # Clerk-Supabase Integration
 80: SUPABASE_JWT_SECRET=[YOUR-SUPABASE-JWT-SECRET]
 81: NEXT_PUBLIC_CLERK_SUPABASE_USAGE=true
 82: ```
 83: 
 84: Replace all placeholders (text in brackets) with your actual values.
 85: 
 86: ## 7. Configure Supabase Authentication
 87: 
 88: 1. In your Supabase dashboard, go to Authentication > Settings
 89: 2. Under "JWT Templates" make sure the expiry time is set to match Clerk's JWT expiry (default is 1 hour)
 90: 
 91: ## 8. Verify Setup
 92: 
 93: To verify that your setup is correct:
 94: 
 95: 1. Restart your Next.js development server
 96: 2. Sign in with Clerk
 97: 3. Try performing a quiz and check if the results are saved
 98: 4. Check your Supabase Tables Editor to verify data is being stored correctly
 99: 
100: ## Troubleshooting
101: 
102: ### "Tenant or user not found" Error
103: 
104: If you encounter this error:
105: 
106: 1. Verify that your environment variables are correctly set
107: 2. Check that your JWT template in Clerk matches the Supabase requirements
108: 3. Ensure that the database migrations were applied successfully
109: 4. Try signing out and signing back in to refresh the token
110: 
111: ### Database Connection Issues
112: 
113: If you have trouble connecting to the database:
114: 
115: 1. Double-check your DATABASE_URL
116: 2. Ensure your IP is allowed in Supabase's IP access settings
117: 3. Verify your database password is correct
118: 
119: ### RLS Policy Errors
120: 
121: If you get permission errors despite being authenticated:
122: 
123: 1. Check the RLS policies in Supabase
124: 2. Verify that auth.uid() matches the user_id in your tables
125: 3. You can temporarily disable RLS for testing with:
126:    ```sql
127:    ALTER TABLE public.quiz_results DISABLE ROW LEVEL SECURITY;
128:    ```
129:    (Remember to enable it again for production)
130: 
131: ## Advanced Configuration
132: 
133: ### Custom Claims
134: 
135: If you need additional claims in your JWT for custom RLS policies:
136: 
137: 1. Update your Clerk JWT template to include these claims
138: 2. Update your RLS policies to use the new claims
139: 
140: ### Database Indexes
141: 
142: For better performance, consider adding indexes to frequently queried columns:
143: 
144: ```sql
145: CREATE INDEX idx_quiz_results_user_id ON public.quiz_results(user_id);
146: CREATE INDEX idx_progress_user_id ON public.progress(user_id);
147: CREATE INDEX idx_word_stats_user_id ON public.word_stats(user_id);
148: ```
149: 
150: ### Realtime Subscriptions
151: 
152: If you're using Supabase Realtime features, ensure that the relevant tables are enabled for realtime:
153: 
154: 1. Go to Database > Replication
155: 2. Enable realtime for your tables
156: 3. Make sure your migration (002_clerk_supabase_integration.sql) has set up the publication correctly
````

## File: docs/clerk-webhook-setup.md
````markdown
 1: # Setting Up Clerk Webhooks for Profile Synchronization
 2: 
 3: This guide will walk you through setting up Clerk webhooks to automatically sync user profiles to Supabase when users sign up or update their profiles.
 4: 
 5: ## Why Use Webhooks?
 6: 
 7: While our application automatically syncs user profiles when they visit the site through the `ProfileSync` component, webhooks provide several advantages:
 8: 
 9: 1. **Immediate Syncing**: User profiles are synced as soon as they sign up, before they even visit the app
10: 2. **Background Updates**: Profile updates made in Clerk's user management dashboard sync automatically
11: 3. **Reliability**: Ensures profile data is always up-to-date, even if the client-side sync fails
12: 
13: ## Setup Steps
14: 
15: ### 1. Create a Webhook in Clerk Dashboard
16: 
17: 1. Log in to your [Clerk Dashboard](https://dashboard.clerk.dev/)
18: 2. Navigate to the **Webhooks** section in the sidebar
19: 3. Click **Add Endpoint**
20: 4. Enter your webhook URL: `https://your-domain.com/api/clerk-webhook`
21:    - For local development, use a service like ngrok to expose your local server
22: 
23: ### 2. Select Events to Listen For
24: 
25: Configure the webhook to listen for these specific events:
26: 
27: - `user.created`: Triggered when a new user signs up
28: - `user.updated`: Triggered when a user's profile is updated
29: 
30: ### 3. Get the Webhook Secret
31: 
32: After creating the webhook:
33: 
34: 1. Copy the **Signing Secret** provided by Clerk
35: 2. Add it to your `.env.local` file:
36:    ```
37:    CLERK_WEBHOOK_SECRET=whsec_your_signing_secret
38:    ```
39: 
40: ### 4. Deploy Your Application
41: 
42: Make sure your application is deployed with the updated environment variables.
43: 
44: ## Testing the Webhook
45: 
46: To test if your webhook is working correctly:
47: 
48: 1. Create a new test user in Clerk
49: 2. Check your application logs for webhook activity:
50:    ```
51:    Webhook received: user.created for user: user_123
52:    Syncing profile for user_123 (Test User)
53:    Successfully synced profile for user user_123
54:    ```
55: 
56: 3. Check your Supabase database to verify the profile was created:
57:    ```sql
58:    SELECT * FROM profiles WHERE user_id = 'user_123';
59:    ```
60: 
61: ## Troubleshooting
62: 
63: ### Webhook Not Firing
64: 
65: - Check the Clerk Dashboard > Webhooks section to see if there are any failed webhook attempts
66: - Verify that your webhook URL is accessible from the internet
67: - Ensure your server is running and able to receive POST requests
68: 
69: ### Profile Not Being Synced
70: 
71: - Check the application logs for any errors in the webhook handler
72: - Verify that the `CLERK_WEBHOOK_SECRET` environment variable is set correctly
73: - Make sure the database migration for profiles has been applied
74: 
75: ### Testing Locally
76: 
77: For local development, you can use a service like ngrok to expose your local server:
78: 
79: 1. Install ngrok: `npm install -g ngrok`
80: 2. Run your application: `npm run dev`
81: 3. In a separate terminal, expose your application: `ngrok http 3000`
82: 4. Copy the ngrok URL (e.g., `https://12345abcde.ngrok.io`)
83: 5. Update your webhook URL in the Clerk Dashboard to use this temporary URL
84: 6. Add `/api/clerk-webhook` to the end of the URL
85: 
86: ## Security Considerations
87: 
88: - **Never** share your webhook signing secret
89: - Use HTTPS for your webhook URL in production
90: - The webhook verification ensures that only Clerk can trigger your webhook endpoint
91: 
92: By following this guide, you'll ensure that user profiles are automatically synced to your Supabase database as soon as they sign up, providing a seamless experience for your users.
````

## File: docs/profile-sync-architecture.md
````markdown
  1: # Profile Sync Architecture
  2: 
  3: This document explains how user profiles are synchronized between Clerk (authentication) and Supabase (database) in our application.
  4: 
  5: ## Overview
  6: 
  7: Our application uses two mechanisms to ensure user profiles are always synced:
  8: 
  9: 1. **Client-side Sync**: Triggered when users are actively using the application
 10: 2. **Webhook Sync**: Triggered when user events happen in Clerk (like sign-up or profile update)
 11: 
 12: This dual approach ensures that user profiles are always up-to-date, even if one of the mechanisms fails.
 13: 
 14: ## Data Flow
 15: 
 16: ```
 17: ┌─────────────┐           ┌─────────────┐          ┌─────────────┐
 18: │             │           │             │          │             │
 19: │    Clerk    │───────────▶  Webhooks   │──────────▶  Database   │
 20: │  Auth & User│           │  API Route  │          │  (Supabase) │
 21: │  Profiles   │◀──────────│             │◀─────────│             │
 22: └─────────────┘           └─────────────┘          └─────────────┘
 23:        ▲                                                  ▲
 24:        │                                                  │
 25:        │                                                  │
 26:        │                                                  │
 27:        │                                                  │
 28:        ▼                                                  ▼
 29: ┌─────────────┐                                    ┌─────────────┐
 30: │             │                                    │             │
 31: │  ProfileSync│                                    │  Database   │
 32: │  Component  │────────────────────────────────────▶  Functions  │
 33: │             │                                    │             │
 34: └─────────────┘                                    └─────────────┘
 35: ```
 36: 
 37: ## Components
 38: 
 39: ### 1. ProfileSync Component
 40: 
 41: Located at `components/profile-sync.tsx`, this client-side component:
 42: 
 43: - Loads automatically when a user is signed in
 44: - Calls the `syncUserProfileAction` server action
 45: - Runs once per session to update user data
 46: - Provides a fallback for users who may not trigger the webhook
 47: 
 48: ### 2. Clerk Webhook Handler
 49: 
 50: Located at `app/api/clerk-webhook/route.ts`, this server-side API route:
 51: 
 52: - Receives events from Clerk when users are created or updated
 53: - Verifies the webhook signature using the Clerk webhook secret
 54: - Processes user profile data from the event
 55: - Calls the `syncUserProfileWithDataAction` server action
 56: 
 57: ### 3. Profile Actions
 58: 
 59: Located at `actions/db/profiles-actions.ts`, these server actions:
 60: 
 61: - `syncUserProfileAction`: Gets the current user from the session and syncs their profile
 62: - `syncUserProfileWithDataAction`: Takes explicit user data and syncs it to the database
 63: - Both actions use the database function `sync_clerk_profile` to handle the actual sync
 64: 
 65: ### 4. Database Function
 66: 
 67: Located in the migration file, the `sync_clerk_profile` function:
 68: 
 69: - Takes user details (ID, name, image, email)
 70: - Creates a profile if it doesn't exist
 71: - Updates the profile if it already exists
 72: - Returns the profile ID
 73: 
 74: ## Sync Triggers
 75: 
 76: | Trigger | Component | When It Happens |
 77: |---------|-----------|----------------|
 78: | Sign Up | Webhook | When a user creates an account |
 79: | Sign In | ProfileSync Component | When a user signs in and uses the app |
 80: | Profile Update in Clerk | Webhook | When a user updates their profile in Clerk |
 81: | Admin Updates User | Webhook | When an admin updates a user in Clerk dashboard |
 82: 
 83: ## Error Handling
 84: 
 85: 1. **Webhook Failures**:
 86:    - All errors are logged to the console
 87:    - The webhook returns appropriate HTTP status codes
 88:    - If the webhook fails, the client-side sync acts as a fallback
 89: 
 90: 2. **Client-Side Sync Failures**:
 91:    - Errors are caught and logged
 92:    - The sync is attempted once per session
 93:    - If it fails, the webhook sync ensures data is eventually consistent
 94: 
 95: ## Security
 96: 
 97: 1. **Webhook Verification**:
 98:    - Each webhook request is verified using the Clerk webhook secret
 99:    - Invalid signatures are rejected with a 400 error
100: 
101: 2. **Server Actions**:
102:    - `syncUserProfileAction` verifies the user is authenticated
103:    - Both actions use prepared statements to prevent SQL injection
104: 
105: ## Testing
106: 
107: To test the sync mechanisms:
108: 
109: 1. **Client-Side Sync**:
110:    - Sign in to the application
111:    - Check the console for "Syncing user profile from client"
112:    - Verify the profile exists in the database
113: 
114: 2. **Webhook Sync**:
115:    - Create a new user in Clerk or update an existing user
116:    - Check the application logs for webhook events
117:    - Verify the profile exists or is updated in the database
118: 
119: ## Troubleshooting
120: 
121: Common issues and solutions:
122: 
123: 1. **Profile not syncing**:
124:    - Check that `CLERK_WEBHOOK_SECRET` is set correctly
125:    - Verify webhook endpoint is configured in Clerk dashboard
126:    - Check for errors in the application logs
127: 
128: 2. **Missing user data**:
129:    - Ensure the user has the necessary fields in Clerk (name, email, image)
130:    - Check that the database function is working correctly
131:    - Verify the profiles table structure matches the expected schema
````

## File: drizzle.config.ts
````typescript
 1: import { config } from "dotenv"
 2: import { defineConfig } from "drizzle-kit"
 3: 
 4: config({ path: ".env.local" })
 5: 
 6: export default defineConfig({
 7:   schema: "./db/schema/index.ts",
 8:   out: "./db/migrations",
 9:   dialect: "postgresql",
10:   dbCredentials: { url: process.env.DATABASE_URL! }
11: })
````

## File: lib/csv-parser.ts
````typescript
 1: import Papa from "papaparse"
 2: import { KannadaEntry } from "@/types"
 3: 
 4: 
 5: 
 6: 
 7: 
 8: 
 9: 
10: export function parseCsv(csvData: string): KannadaEntry[] {
11:   const parsed = Papa.parse<KannadaEntry>(csvData, {
12:     header: true,
13:     skipEmptyLines: true,
14:     transform: (value, field) => {
15: 
16:       if (value === "" || value === undefined) {
17:         return null
18:       }
19:       return value
20:     }
21:   })
22: 
23:   if (parsed.errors.length > 0) {
24:     throw new Error(`CSV parsing failed: ${parsed.errors[0].message}`)
25:   }
26: 
27:   return parsed.data.map(entry => ({
28:     kannada: entry.kannada,
29:     english: entry.english,
30:     category: entry.category,
31:     icon: entry.icon,
32:     waudio: entry.waudio,
33:     kanglish: entry.kanglish,
34:     ksentence: entry.ksentence,
35:     esentence: entry.esentence,
36:     kesentence: entry.kesentence,
37:     image: entry.image,
38:     saudio: entry.saudio
39:   }))
40: }
````

## File: lib/hooks/use-copy-to-clipboard.tsx
````typescript
 1: "use client"
 2: 
 3: import { useState } from "react"
 4: 
 5: export interface useCopyToClipboardProps {
 6:   timeout?: number
 7: }
 8: 
 9: export function useCopyToClipboard({
10:   timeout = 2000
11: }: useCopyToClipboardProps) {
12:   const [isCopied, setIsCopied] = useState<Boolean>(false)
13: 
14:   const copyToClipboard = (value: string) => {
15:     if (typeof window === "undefined" || !navigator.clipboard?.writeText) {
16:       return
17:     }
18: 
19:     if (!value) {
20:       return
21:     }
22: 
23:     navigator.clipboard.writeText(value).then(() => {
24:       setIsCopied(true)
25: 
26:       setTimeout(() => {
27:         setIsCopied(false)
28:       }, timeout)
29:     })
30:   }
31: 
32:   return { isCopied, copyToClipboard }
33: }
````

## File: lib/hooks/use-mobile.tsx
````typescript
 1: import * as React from "react"
 2: 
 3: const MOBILE_BREAKPOINT = 768
 4: 
 5: export function useIsMobile() {
 6:   const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)
 7: 
 8:   React.useEffect(() => {
 9:     const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
10:     const onChange = () => {
11:       setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
12:     }
13:     mql.addEventListener("change", onChange)
14:     setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
15:     return () => mql.removeEventListener("change", onChange)
16:   }, [])
17: 
18:   return !!isMobile
19: }
````

## File: lib/hooks/use-toast.ts
````typescript
  1: "use client"
  2: 
  3: 
  4: import * as React from "react"
  5: 
  6: import type { ToastActionElement, ToastProps } from "@/components/ui/toast"
  7: 
  8: const TOAST_LIMIT = 1
  9: const TOAST_REMOVE_DELAY = 1000000
 10: 
 11: type ToasterToast = ToastProps & {
 12:   id: string
 13:   title?: React.ReactNode
 14:   description?: React.ReactNode
 15:   action?: ToastActionElement
 16: }
 17: 
 18: const actionTypes = {
 19:   ADD_TOAST: "ADD_TOAST",
 20:   UPDATE_TOAST: "UPDATE_TOAST",
 21:   DISMISS_TOAST: "DISMISS_TOAST",
 22:   REMOVE_TOAST: "REMOVE_TOAST"
 23: } as const
 24: 
 25: let count = 0
 26: 
 27: function genId() {
 28:   count = (count + 1) % Number.MAX_SAFE_INTEGER
 29:   return count.toString()
 30: }
 31: 
 32: type ActionType = typeof actionTypes
 33: 
 34: type Action =
 35:   | { type: ActionType["ADD_TOAST"]; toast: ToasterToast }
 36:   | { type: ActionType["UPDATE_TOAST"]; toast: Partial<ToasterToast> }
 37:   | { type: ActionType["DISMISS_TOAST"]; toastId?: ToasterToast["id"] }
 38:   | { type: ActionType["REMOVE_TOAST"]; toastId?: ToasterToast["id"] }
 39: 
 40: interface State {
 41:   toasts: ToasterToast[]
 42: }
 43: 
 44: const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()
 45: 
 46: const addToRemoveQueue = (toastId: string) => {
 47:   if (toastTimeouts.has(toastId)) {
 48:     return
 49:   }
 50: 
 51:   const timeout = setTimeout(() => {
 52:     toastTimeouts.delete(toastId)
 53:     dispatch({ type: "REMOVE_TOAST", toastId: toastId })
 54:   }, TOAST_REMOVE_DELAY)
 55: 
 56:   toastTimeouts.set(toastId, timeout)
 57: }
 58: 
 59: export const reducer = (state: State, action: Action): State => {
 60:   switch (action.type) {
 61:     case "ADD_TOAST":
 62:       return {
 63:         ...state,
 64:         toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
 65:       }
 66: 
 67:     case "UPDATE_TOAST":
 68:       return {
 69:         ...state,
 70:         toasts: state.toasts.map(t =>
 71:           t.id === action.toast.id ? { ...t, ...action.toast } : t
 72:         )
 73:       }
 74: 
 75:     case "DISMISS_TOAST": {
 76:       const { toastId } = action
 77: 
 78: 
 79: 
 80:       if (toastId) {
 81:         addToRemoveQueue(toastId)
 82:       } else {
 83:         state.toasts.forEach(toast => {
 84:           addToRemoveQueue(toast.id)
 85:         })
 86:       }
 87: 
 88:       return {
 89:         ...state,
 90:         toasts: state.toasts.map(t =>
 91:           t.id === toastId || toastId === undefined ? { ...t, open: false } : t
 92:         )
 93:       }
 94:     }
 95:     case "REMOVE_TOAST":
 96:       if (action.toastId === undefined) {
 97:         return { ...state, toasts: [] }
 98:       }
 99:       return {
100:         ...state,
101:         toasts: state.toasts.filter(t => t.id !== action.toastId)
102:       }
103:   }
104: }
105: 
106: const listeners: Array<(state: State) => void> = []
107: 
108: let memoryState: State = { toasts: [] }
109: 
110: function dispatch(action: Action) {
111:   memoryState = reducer(memoryState, action)
112:   listeners.forEach(listener => {
113:     listener(memoryState)
114:   })
115: }
116: 
117: type Toast = Omit<ToasterToast, "id">
118: 
119: function toast({ ...props }: Toast) {
120:   const id = genId()
121: 
122:   const update = (props: ToasterToast) =>
123:     dispatch({ type: "UPDATE_TOAST", toast: { ...props, id } })
124:   const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })
125: 
126:   dispatch({
127:     type: "ADD_TOAST",
128:     toast: {
129:       ...props,
130:       id,
131:       open: true,
132:       onOpenChange: open => {
133:         if (!open) dismiss()
134:       }
135:     }
136:   })
137: 
138:   return { id: id, dismiss, update }
139: }
140: 
141: function useToast() {
142:   const [state, setState] = React.useState<State>(memoryState)
143: 
144:   React.useEffect(() => {
145:     listeners.push(setState)
146:     return () => {
147:       const index = listeners.indexOf(setState)
148:       if (index > -1) {
149:         listeners.splice(index, 1)
150:       }
151:     }
152:   }, [state])
153: 
154:   return {
155:     ...state,
156:     toast,
157:     dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId })
158:   }
159: }
160: 
161: export { toast, useToast }
````

## File: lib/letters.ts
````typescript
1: export interface LetterMeta {
2:   id: string
3:   file: string
4: }
5: export const LETTERS: LetterMeta[] = [
6:   { id: "01_ಅ", file: "/letters/01_ಅ.svg" },
7:   { id: "02_ಆ", file: "/letters/02_ಆ.svg" }
8: 
9: ]
````

## File: lib/stripe.ts
````typescript
 1: import Stripe from "stripe"
 2: 
 3: 
 4: export const stripe = process.env.STRIPE_SECRET_KEY
 5:   ? new Stripe(process.env.STRIPE_SECRET_KEY, {
 6:       apiVersion: "2025-02-24.acacia",
 7:       appInfo: { name: "Receipt AI", version: "0.1.0" }
 8:     })
 9:   : null
10: 
11: 
12: export function getStripe() {
13:   if (!stripe) {
14:     throw new Error("STRIPE_SECRET_KEY is not set in environment variables")
15:   }
16:   return stripe
17: }
````

## File: lib/supabase.ts
````typescript
 1: import { createClient } from "@supabase/supabase-js"
 2: 
 3: 
 4: const supabaseUrl = process.env.SUPABASE_URL
 5: const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
 6: 
 7: if (!supabaseUrl || !supabaseServiceRoleKey) {
 8:   throw new Error(
 9:     "Missing Supabase environment variables: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set"
10:   )
11: }
12: 
13: 
14: export const supabaseClient = createClient(supabaseUrl, supabaseServiceRoleKey)
````

## File: lib/utils.ts
````typescript
1: import { type ClassValue, clsx } from "clsx"
2: import { twMerge } from "tailwind-merge"
3: 
4: export function cn(...inputs: ClassValue[]) {
5:   return twMerge(clsx(inputs))
6: }
````

## File: lib/utils/badge-utils.ts
````typescript
  1: import { cache } from "react"
  2: 
  3: 
  4: 
  5: 
  6: export interface BadgeDefinition {
  7: 
  8:   badgeId: string
  9:   kannadaName: string
 10:   englishName: string
 11:   imageUrl: string
 12:   displayText: string
 13: 
 14: 
 15:   tableLogic: string
 16:   hasLevels: boolean
 17: 
 18: 
 19:   levelRequirements: {
 20:     level1: string
 21:     level2: string
 22:     level3: string
 23:     level4: string
 24:     level5: string
 25:   }
 26: }
 27: 
 28: 
 29: 
 30: 
 31: export function getBadgeId(englishName: string): string {
 32:   return englishName.toLowerCase().replace(/\s+/g, "-")
 33: }
 34: 
 35: 
 36: 
 37: 
 38: export function getBadgeDefinition(
 39:   badgeId: string,
 40:   badges: BadgeDefinition[]
 41: ): BadgeDefinition | undefined {
 42:   return badges.find(badge => badge.badgeId === badgeId)
 43: }
 44: 
 45: 
 46: 
 47: 
 48: export function getLevelRequirement(
 49:   badge: BadgeDefinition,
 50:   level: number
 51: ): string {
 52:   if (!badge.hasLevels) return ""
 53: 
 54:   switch (level) {
 55:     case 1:
 56:       return badge.levelRequirements.level1
 57:     case 2:
 58:       return badge.levelRequirements.level2
 59:     case 3:
 60:       return badge.levelRequirements.level3
 61:     case 4:
 62:       return badge.levelRequirements.level4
 63:     case 5:
 64:       return badge.levelRequirements.level5
 65:     default:
 66:       return ""
 67:   }
 68: }
 69: 
 70: /**
 71:  * Returns user-friendly text describing the current progress toward a badge
 72:  */
 73: export function formatBadgeProgress(
 74:   badge: BadgeDefinition,
 75:   currentLevel: number,
 76:   progress: number
 77: ): string {
 78:   if (!badge.hasLevels) {
 79:     return "Badge earned!"
 80:   }
 81: 
 82:   const nextLevel = currentLevel + 1
 83:   if (nextLevel > 5) {
 84:     return "Maximum level achieved!"
 85:   }
 86: 
 87:   const requirement = getLevelRequirement(badge, nextLevel)
 88:   const match = requirement.match(/(\d+)/)
 89: 
 90:   if (match) {
 91:     const target = parseInt(match[1])
 92:     const remaining = target - progress
 93: 
 94:     // Extract the type of achievement from the badge logic
 95:     let achievementType = ""
 96: 
 97:     switch (badge.badgeId) {
 98:       case "akshara-arasu":
 99:         achievementType = "words"
100:         break
101:       case "arjuna-drushti":
102:         achievementType = "quizzes"
103:         break
104:       case "kireetaadhipathi":
105:         achievementType = "perfect quizzes"
106:         break
107:       case "shabda-shoora":
108:         achievementType = "high accuracy words"
109:         break
110:       case "trivikrama":
111:         achievementType = "correct answers"
112:         break
113:       default:
114:         achievementType = "items"
115:     }
116: 
117:     return `${remaining} more ${achievementType} to level ${nextLevel}`
118:   }
119: 
120:   return `Complete ${requirement} to reach level ${nextLevel}`
121: }
````

## File: LICENSE
````
 1: MIT License
 2: 
 3: Copyright (c) 2025 mirrorphotosintern
 4: 
 5: Permission is hereby granted, free of charge, to any person obtaining a copy
 6: of this software and associated documentation files (the "Software"), to deal
 7: in the Software without restriction, including without limitation the rights
 8: to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9: copies of the Software, and to permit persons to whom the Software is
10: furnished to do so, subject to the following conditions:
11: 
12: The above copyright notice and this permission notice shall be included in all
13: copies or substantial portions of the Software.
14: 
15: THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16: IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17: FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18: AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19: LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20: OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21: SOFTWARE.
````

## File: middleware.ts
````typescript
 1: import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
 2: import { NextResponse } from "next/server"
 3: 
 4: 
 5: const isProtectedRoute = createRouteMatcher([
 6:   "/cards(.*)",
 7:   "/quiz(.*)",
 8:   "/parental(.*)",
 9:   "/api/(.*)"
10: ])
11: 
12: 
13: 
14: 
15: 
16: 
17: 
18: 
19: 
20: export default clerkMiddleware(async (auth, req) => {
21:   const { userId, redirectToSignIn } = await auth()
22: 
23: 
24:   if (!userId && isProtectedRoute(req)) {
25: 
26:     return redirectToSignIn({ returnBackUrl: req.url })
27:   }
28: 
29: 
30:   if (userId && isProtectedRoute(req)) {
31:     return NextResponse.next()
32:   }
33: 
34: 
35:   return NextResponse.next()
36: })
37: 
38: 
39: export const config = {
40:   matcher: [
41:     "/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)",
42:     "/"
43:   ]
44: }
````

## File: next.config.mjs
````
 1: /*
 2: Configures Next.js for the app.
 3: */
 4: 
 5: /** @type {import('next').NextConfig} */
 6: const nextConfig = { 
 7:   images: { 
 8:     remotePatterns: [
 9:       { hostname: "localhost" },
10:       { hostname: "upcdn.io" },
11:       { hostname: "i.postimg.cc" },
12:       { hostname: "replicate.delivery" },
13:       { hostname: "*.supabase.co" }
14:     ] 
15:   } 
16: }
17: 
18: export default nextConfig
````

## File: package.json
````json
  1: {
  2:   "name": "kannada-kali",
  3:   "version": "0.1.0",
  4:   "private": true,
  5:   "scripts": {
  6:     "dev": "next dev",
  7:     "build": "next build",
  8:     "start": "next start",
  9:     "lint": "next lint",
 10:     "clean": "npm run lint:fix && npm run format:write",
 11:     "type-check": "tsc --noEmit",
 12:     "lint:fix": "next lint --fix",
 13:     "format:write": "prettier --write \"{app,lib,db,components,context,types}/**/*.{ts,tsx}\" --cache",
 14:     "format:check": "prettier --check \"{app,lib,db,components,context,types}**/*.{ts,tsx}\" --cache",
 15:     "analyze": "ANALYZE=true npm run build",
 16:     "db:generate": "npx drizzle-kit generate",
 17:     "db:migrate": "npx drizzle-kit migrate",
 18:     "prepare": "husky install"
 19:   },
 20:   "dependencies": {
 21:     "@clerk/nextjs": "^6.11.2",
 22:     "@hookform/resolvers": "^4.1.2",
 23:     "@pipecat-ai/client-js": "^0.3.5",
 24:     "@pipecat-ai/client-react": "^0.3.5",
 25:     "@pipecat-ai/daily-transport": "^0.3.10",
 26:     "@radix-ui/react-accordion": "^1.2.3",
 27:     "@radix-ui/react-alert-dialog": "^1.1.6",
 28:     "@radix-ui/react-aspect-ratio": "^1.1.2",
 29:     "@radix-ui/react-avatar": "^1.1.3",
 30:     "@radix-ui/react-checkbox": "^1.1.4",
 31:     "@radix-ui/react-collapsible": "^1.1.3",
 32:     "@radix-ui/react-context-menu": "^2.2.6",
 33:     "@radix-ui/react-dialog": "^1.1.6",
 34:     "@radix-ui/react-dropdown-menu": "^2.1.6",
 35:     "@radix-ui/react-hover-card": "^1.1.6",
 36:     "@radix-ui/react-label": "^2.1.2",
 37:     "@radix-ui/react-menubar": "^1.1.6",
 38:     "@radix-ui/react-navigation-menu": "^1.2.5",
 39:     "@radix-ui/react-popover": "^1.1.6",
 40:     "@radix-ui/react-progress": "^1.1.2",
 41:     "@radix-ui/react-radio-group": "^1.2.3",
 42:     "@radix-ui/react-scroll-area": "^1.2.3",
 43:     "@radix-ui/react-select": "^2.1.6",
 44:     "@radix-ui/react-separator": "^1.1.2",
 45:     "@radix-ui/react-slider": "^1.2.3",
 46:     "@radix-ui/react-slot": "^1.1.2",
 47:     "@radix-ui/react-switch": "^1.1.3",
 48:     "@radix-ui/react-tabs": "^1.1.3",
 49:     "@radix-ui/react-toast": "^1.2.6",
 50:     "@radix-ui/react-toggle": "^1.1.2",
 51:     "@radix-ui/react-toggle-group": "^1.1.2",
 52:     "@radix-ui/react-tooltip": "^1.1.8",
 53:     "@supabase/auth-helpers-nextjs": "^0.10.0",
 54:     "@supabase/supabase-js": "^2.45.4",
 55:     "@tabler/icons-react": "^3.33.0",
 56:     "@types/canvas-confetti": "^1.9.0",
 57:     "canvas-confetti": "^1.9.3",
 58:     "class-variance-authority": "^0.7.1",
 59:     "clsx": "^2.1.1",
 60:     "cmdk": "^1.0.4",
 61:     "date-fns": "^3.6.0",
 62:     "drizzle-orm": "^0.39.3",
 63:     "embla-carousel-react": "^8.5.2",
 64:     "framer-motion": "^12.4.7",
 65:     "input-otp": "^1.4.2",
 66:     "js-confetti": "^0.12.0",
 67:     "lucide-react": "^0.475.0",
 68:     "next": "^15.1.7",
 69:     "next-themes": "^0.4.4",
 70:     "papaparse": "^5.5.2",
 71:     "postgres": "^3.4.5",
 72:     "react": "^19.0",
 73:     "react-day-picker": "^8.10.0",
 74:     "react-dom": "^19.0",
 75:     "react-hook-form": "^7.54.2",
 76:     "react-resizable-panels": "^2.1.7",
 77:     "recharts": "^2.15.1",
 78:     "sonner": "^1.7.4",
 79:     "stripe": "^17.7.0",
 80:     "svix": "^1.62.0",
 81:     "tailwind-merge": "^3.0.1",
 82:     "tailwindcss": "^3.4.17",
 83:     "tailwindcss-animate": "^1.0.7",
 84:     "vaul": "^1.1.2",
 85:     "vercel": "^41.3.0",
 86:     "zod": "^3.24.2"
 87:   },
 88:   "devDependencies": {
 89:     "@tailwindcss/typography": "^0.5.16",
 90:     "@types/node": "^22",
 91:     "@types/papaparse": "^5.3.14",
 92:     "@types/react": "^19.0",
 93:     "@types/react-dom": "^19.0",
 94:     "dotenv": "^16.4.7",
 95:     "drizzle-kit": "^0.30.4",
 96:     "eslint": "^9",
 97:     "eslint-config-next": "15.1.7",
 98:     "eslint-config-prettier": "^10.0.1",
 99:     "eslint-plugin-tailwindcss": "^3.18.0",
100:     "husky": "^9.1.7",
101:     "prettier": "^3.5.0",
102:     "svgo": "^3.3.2",
103:     "typescript": "^5"
104:   },
105:   "type": "module"
106: }
````

## File: postcss.config.mjs
````
1: /*
2: Configures PostCSS for the app.
3: */
4: 
5: /** @type {import('postcss-load-config').Config} */
6: const config = { plugins: { tailwindcss: {} } }
7: 
8: export default config
````

## File: prettier.config.cjs
````
 1: /*
 2: Configures Prettier for the app.
 3: */
 4: 
 5: /** @type {import('prettier').Config} */
 6: module.exports = {
 7:   endOfLine: "lf",
 8:   semi: false,
 9:   useTabs: false,
10:   singleQuote: false,
11:   arrowParens: "avoid",
12:   tabWidth: 2,
13:   trailingComma: "none",
14:   importOrder: [
15:     "^.+\\.scss$",
16:     "^.+\\.css$",
17:     "^(react/(.*)$)|^(react$)",
18:     "^(next/(.*)$)|^(next$)",
19:     "<THIRD_PARTY_MODULES>",
20:     "",
21:     "^types$",
22:     "^@/types/(.*)$",
23:     "^@/config/(.*)$",
24:     "^@/lib/(.*)$",
25:     "^@/hooks/(.*)$",
26:     "^@/components/ui/(.*)$",
27:     "^@/components/(.*)$",
28:     "^@/registry/(.*)$",
29:     "^@/styles/(.*)$",
30:     "^@/app/(.*)$",
31:     "",
32:     "^[./]"
33:   ],
34:   importOrderSeparation: false,
35:   importOrderSortSpecifiers: true,
36:   importOrderBuiltinModulesToTop: true,
37:   importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
38:   importOrderMergeDuplicateImports: true,
39:   importOrderCombineTypeAndValueImports: true
40: }
````

## File: public/data/badges-logic.csv
````
1: badge-kannada,badge-english,badge-image,badge-display,badge-table-logic,levels,level-1-logic,level-2-logic,level-3-logic,level-4-logic,level-5-logic
2: ಅಕ್ಷರ ಅರಸು,Akshara Arasu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/badges/akshara-arasu.png,You really are a one word master!,Correctly answer a single word repeatedly showing consistency!,yes,seven,ten,fifteen,twenty,thirty
3: ಅರ್ಜುನ ದೃಷ್ಟಿ,Arjuna Drushti,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/badges/arjuna-drushti.png,Fast And Furious!,Finish a quiz with an average time of less than 3 seconds per word!,yes,five quizzes,ten quizzes,twenty quizzes,fifty quizzes,hundred quizzes
4: ಕಿರೀಟಾಧಿಪತಿ,Kireetaadhipathi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/badges/kireetaadhipathi.png,Clever and Crowned!,Finish a quiz with all correct answers!,yes,five quizzes,ten quizzes,twenty quizzes,fifty quizzes,hundred quizzes
5: ಶಬ್ದ ಶೂರ,Shabda Shoora,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/badges/shabda-shoora.png,Wordly and Worldly Intelligent!,Achieve an accuracy of over 90% for five words!,yes,ten words,twenty five words,fifty words,seventy five words,hundred words
6: ತ್ರಿವಿಕ್ರಮ,Trivikrama,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/badges/trivikrama.png,Consistently Fierce!,Correctly answer quite a few words!,yes,50 words,100 words,150 words,200 words,300 words
7: ಯಶಸ್ವಿ ಯೋಧ,Yashasvi Yodha,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/badges/yashasvi-yodha.png,You really are a topper!,Attempt and answer all the words in our vocabulary correctly!,no,no,no,no,no,no
````

## File: public/data/kannada-kali-updated-redacted.csv
````
  1: kannada,english,category,kanglish,icon,waudio,,,,,,
  2: ಕರಡಿ,bear,Animals,karadi,https://upcdn.io/kW15bgo/raw/learnkannada/images/bear.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/bear.wav,,,,,,
  3: ಪಕ್ಷಿ,bird,Animals,pakshi,https://upcdn.io/kW15bgo/raw/learnkannada/images/bird.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/bird.wav,,,,,,
  4: ಚಿಟ್ಟೆ,butterfly,Animals,chitte,https://upcdn.io/kW15bgo/raw/learnkannada/images/butterfly.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/butterfly.wav,,,,,,
  5: ಬೆಕ್ಕು,cat,Animals,bekku,https://upcdn.io/kW15bgo/raw/learnkannada/images/cat.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/cat.wav,,,,,,
  6: ಕೋಳಿ,hen,Animals,koli,https://upcdn.io/kW15bgo/raw/learnkannada/images/hen.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/hen.wav,,,,,,
  7: ಹಸು,cow,Animals,hasu,https://upcdn.io/kW15bgo/raw/learnkannada/images/cow.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/cow.wav,,,,,,
  8: ಮೊಸಳೆ,crocodile,Animals,mosale,https://upcdn.io/kW15bgo/raw/learnkannada/images/crocodile.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/crocodile.wav,,,,,,
  9: ಜಿಂಕೆ,deer,Animals,jinke,https://upcdn.io/kW15bgo/raw/learnkannada/images/deer.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/deer.wav,,,,,,
 10: ನಾಯಿ,dog,Animals,naayi,https://upcdn.io/kW15bgo/raw/learnkannada/images/dog.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/dog.wav,,,,,,
 11: ಬಾತುಕೋಳಿ,duck,Animals,baatukoli,https://upcdn.io/kW15bgo/raw/learnkannada/images/duck.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/duck.wav,,,,,,
 12: ಆನೆ,elephant,Animals,aane,https://upcdn.io/kW15bgo/raw/learnkannada/images/elephant.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/elephant.wav,,,,,,
 13: ನರಿ,fox,Animals,nari,https://upcdn.io/kW15bgo/raw/learnkannada/images/fox.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/fox.wav,,,,,,
 14: ಕಪ್ಪೆ,frog,Animals,kappe,https://upcdn.io/kW15bgo/raw/learnkannada/images/frog.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/frog.wav,,,,,,
 15: ಮೇಕೆ,goat,Animals,meke,https://upcdn.io/kW15bgo/raw/learnkannada/images/goat.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/goat.wav,,,,,,
 16: ನೀರಾನೆ,hippopotamus,Animals,neerane,https://upcdn.io/kW15bgo/raw/learnkannada/images/hippopotamus.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/hippopotamus.wav,,,,,,
 17: ಕುದುರೆ,horse,Animals,kudure,https://upcdn.io/kW15bgo/raw/learnkannada/images/horse.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/horse.wav,,,,,,
 18: ಕತ್ತೆ,donkey,Animals,katthe,https://upcdn.io/kW15bgo/raw/learnkannada/images/donkey.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/donkey.wav,,,,,,
 19: ಚಿರತೆ,leopard,Animals,chirate,https://upcdn.io/kW15bgo/raw/learnkannada/images/leopard.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/leopard.wav,,,,,,
 20: ಸಿಂಹ,lion,Animals,simha,https://upcdn.io/kW15bgo/raw/learnkannada/images/lion.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/lion.wav,,,,,,
 21: ಕೋತಿ,monkey,Animals,kothi,https://upcdn.io/kW15bgo/raw/learnkannada/images/monkey.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/monkey.wav,,,,,,
 22: ಹಂದಿ,pig,Animals,handi,https://upcdn.io/kW15bgo/raw/learnkannada/images/pig.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/pig.wav,,,,,,
 23: ನಾಯಿಮರಿ,puppy,Animals,naayimari,https://upcdn.io/kW15bgo/raw/learnkannada/images/puppy.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/puppy.wav,,,,,,
 24: ಮೊಲ,rabbit,Animals,mola,https://upcdn.io/kW15bgo/raw/learnkannada/images/rabbit.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/rabbit.wav,,,,,,
 25: ಘೇಂಡಾಮೃಗ,rhino,Animals,gendamruga,https://upcdn.io/kW15bgo/raw/learnkannada/images/rhino.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/rhino.wav,,,,,,
 26: ಹುಂಜ,rooster,Animals,hunja,https://upcdn.io/kW15bgo/raw/learnkannada/images/rooster.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/rooster.wav,,,,,,
 27: ತಿಮಿಂಗಿಲ,shark,Animals,timingila,https://upcdn.io/kW15bgo/raw/learnkannada/images/shark.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/shark.wav,,,,,,
 28: ಕುರಿ,sheep,Animals,kuri,https://upcdn.io/kW15bgo/raw/learnkannada/images/sheep.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/sheep.wav,,,,,,
 29: ಹುಲಿ,tiger,Animals,huli,https://upcdn.io/kW15bgo/raw/learnkannada/images/tiger.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/tiger.wav,,,,,,
 30: ಆಮೆ,tortoise,Animals,aame,https://upcdn.io/kW15bgo/raw/learnkannada/images/tortoise.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/tortoise.wav,,,,,,
 31: ಕಾಗೆ,crow,Animals,kaage,https://upcdn.io/kW15bgo/raw/learnkannada/images/crow.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/crow.wav,,,,,,
 32: ನವಿಲು,peacock,Animals,navilu,https://upcdn.io/kW15bgo/raw/learnkannada/images/peacock.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/peacock.wav,,,,,,
 33: ವಿಮಾನ,aeroplane,Items,vimaana,https://upcdn.io/kW15bgo/raw/learnkannada/images/aeroplane.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/aeroplane.wav,,,,,,
 34: ಹಡಗು,ship,Items,hadagu,https://upcdn.io/kW15bgo/raw/learnkannada/images/ship.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/ship.wav,,,,,,
 35: ದೋಣಿ,boat,Items,doni,https://upcdn.io/kW15bgo/raw/learnkannada/images/boat.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/boat.wav,,,,,,
 36: ಚೆಂಡು,ball,Items,chendu,https://upcdn.io/kW15bgo/raw/learnkannada/images/ball.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/ball.wav,,,,,,
 37: ಕನ್ನಡಕ,spectacles,Items,kannadaka,https://upcdn.io/kW15bgo/raw/learnkannada/images/spectacles.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/spectacles.wav,,,,,,
 38: ಮೇಣದಬತ್ತಿ,candle,Items,menadabatti,https://upcdn.io/kW15bgo/raw/learnkannada/images/candle.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/candle.wav,,,,,,
 39: ಬಟ್ಟೆ,clothes,Items,batte,https://upcdn.io/kW15bgo/raw/learnkannada/images/clothes.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/clothes.wav,,,,,,
 40: ಹೂವು,flower,Items,huuvu,https://upcdn.io/kW15bgo/raw/learnkannada/images/flower.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/flower.wav,,,,,,
 41: ಚಮಚ,spoon,Items,chamacha,https://upcdn.io/kW15bgo/raw/learnkannada/images/spoon.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/spoon.wav,,,,,,
 42: ಬೀಗ,lock,Items,beega,https://upcdn.io/kW15bgo/raw/learnkannada/images/lock.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/lock.wav,,,,,,
 43: ಕತ್ತರಿ,scissor,Items,kattari,https://upcdn.io/kW15bgo/raw/learnkannada/images/scissor.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/scissor.wav,,,,,,
 44: ಕಪ್ಪೆಚಿಪ್ಪು,seashell,Items,kappechippu,https://upcdn.io/kW15bgo/raw/learnkannada/images/seashell.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/seashell.wav,,,,,,
 45: ಮರ,tree,Items,mara,https://upcdn.io/kW15bgo/raw/learnkannada/images/tree.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/tree.wav,,,,,,
 46: ಮನೆ,house,Items,mane,https://upcdn.io/kW15bgo/raw/learnkannada/images/house.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/house.wav,,,,,,
 47: ಕಿಟಕಿ,window,Items,kitaki,https://upcdn.io/kW15bgo/raw/learnkannada/images/window.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/window.wav,,,,,,
 48: ಬಾಗಿಲು,door,Items,baagilu,https://upcdn.io/kW15bgo/raw/learnkannada/images/door.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/door.wav,,,,,,
 49: ಪುಸ್ತಕ,book,Items,pustaka,https://upcdn.io/kW15bgo/raw/learnkannada/images/book.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/book.wav,,,,,,
 50: ಕುರ್ಚಿ,chair,Items,kurchi,https://upcdn.io/kW15bgo/raw/learnkannada/images/chair.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/chair.wav,,,,,,
 51: ಮೇಜು,table,Items,meju,https://upcdn.io/kW15bgo/raw/learnkannada/images/table.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/table.wav,,,,,,
 52: ಗಡಿಯಾರ,clock,Items,gadiyaara,https://upcdn.io/kW15bgo/raw/learnkannada/images/clock.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/clock.wav,,,,,,
 53: ಲೋಟ,cup,Items,lota,https://upcdn.io/kW15bgo/raw/learnkannada/images/cup.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/cup.wav,,,,,,
 54: ತಟ್ಟೆ,plate,Items,tatte,https://upcdn.io/kW15bgo/raw/learnkannada/images/plate.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/plate.wav,,,,,,
 55: ಚೊಂಬು,jug,Items,chombu,https://upcdn.io/kW15bgo/raw/learnkannada/images/jug.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/jug.wav,,,,,,
 56: ಕೆಂಪು,red,Colors,kempu,https://upcdn.io/kW15bgo/raw/learnkannada/images/red.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/red.wav,,,,,,
 57: ಹಸಿರು,green,Colors,hasiru,https://upcdn.io/kW15bgo/raw/learnkannada/images/green.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/green.wav,,,,,,
 58: ಹಳದಿ,yellow,Colors,haladi,https://upcdn.io/kW15bgo/raw/learnkannada/images/yellow.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/yellow.wav,,,,,,
 59: ನೀಲಿ,blue,Colors,neeli,https://upcdn.io/kW15bgo/raw/learnkannada/images/blue.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/blue.wav,,,,,,
 60: ಕಂದು,brown,Colors,kandu,https://upcdn.io/kW15bgo/raw/learnkannada/images/brown.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/brown.wav,,,,,,
 61: ಕಪ್ಪು,black,Colors,kappu,https://upcdn.io/kW15bgo/raw/learnkannada/images/black.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/black.wav,,,,,,
 62: ಬಿಳಿ,white,Colors,bili,https://upcdn.io/kW15bgo/raw/learnkannada/images/white.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/white.wav,,,,,,
 63: ಬೂದು,grey,Colors,boodu,https://upcdn.io/kW15bgo/raw/learnkannada/images/grey.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/grey.wav,,,,,,
 64: ನಸುಗೆಂಪು,pink,Colors,nasugempu,https://upcdn.io/kW15bgo/raw/learnkannada/images/pink.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/pink.wav,,,,,,
 65: ನೆರಳೆ,purple,Colors,nerale,https://upcdn.io/kW15bgo/raw/learnkannada/images/purple.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/purple.wav,,,,,,
 66: ಬಾಳೆಹಣ್ಣು,banana,Food,baalehannu,https://upcdn.io/kW15bgo/raw/learnkannada/images/banana.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/banana.wav,,,,,,
 67: ಸೇಬು,apple,Food,sebu,https://upcdn.io/kW15bgo/raw/learnkannada/images/apple.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/apple.wav,,,,,,
 68: ಕಿತ್ತಳೆ ಹಣ್ಣು,orange,Food,kittalehannu,https://upcdn.io/kW15bgo/raw/learnkannada/images/orange.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/orange.wav,,,,,,
 69: ಜೋಳ,corn,Food,jola,https://upcdn.io/kW15bgo/raw/learnkannada/images/corn.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/corn.wav,,,,,,
 70: ಮೊಟ್ಟೆ,egg,Food,motte,https://upcdn.io/kW15bgo/raw/learnkannada/images/egg.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/egg.wav,,,,,,
 71: ಬದನೇಕಾಯಿ,eggplant,Food,badanekayi,https://upcdn.io/kW15bgo/raw/learnkannada/images/eggplant.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/eggplant.wav,,,,,,
 72: ದ್ರಾಕ್ಷಿ,grapes,Food,draakshi,https://upcdn.io/kW15bgo/raw/learnkannada/images/grapes.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/grapes.wav,,,,,,
 73: ಹಾಲು,milk,Food,haalu,https://upcdn.io/kW15bgo/raw/learnkannada/images/milk.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/milk.wav,,,,,,
 74: ಮೊಸರು,yogurt,Food,mosaru,https://upcdn.io/kW15bgo/raw/learnkannada/images/yogurt.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/yogurt.wav,,,,,,
 75: ಬೆಣ್ಣೆ,butter,Food,benne,https://upcdn.io/kW15bgo/raw/learnkannada/images/butter.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/butter.wav,,,,,,
 76: ಅಣಬೆ,mushroom,Food,anabe,https://upcdn.io/kW15bgo/raw/learnkannada/images/mushroom.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/mushroom.wav,,,,,,
 77: ಅನ್ನ,rice,Food,anna,https://upcdn.io/kW15bgo/raw/learnkannada/images/rice.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/rice.wav,,,,,,
 78: ಸಪೋಟ,chickoo,Food,sapota,https://upcdn.io/kW15bgo/raw/learnkannada/images/chickoo.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/chickoo.wav,,,,,,
 79: ಸೀಬೆಹಣ್ಣು,guava,Food,seebehannu,https://upcdn.io/kW15bgo/raw/learnkannada/images/guava.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/guava.wav,,,,,,
 80: ಕಲ್ಲಂಗಡಿ,watermelon,Food,kallangadi,https://upcdn.io/kW15bgo/raw/learnkannada/images/watermelon.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/watermelon.wav,,,,,,
 81: ಅನಾನಸ್,pinapple,Food,anannas,https://upcdn.io/kW15bgo/raw/learnkannada/images/pinapple.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/pinapple.wav,,,,,,
 82: ಗೋಡಂಬಿ,cashew,Food,godambi,https://upcdn.io/kW15bgo/raw/learnkannada/images/cashew.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/cashew.wav,,,,,,
 83: ಬಾದಾಮಿ,almond,Food,baadami,https://upcdn.io/kW15bgo/raw/learnkannada/images/almond.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/almond.wav,,,,,,
 84: ಹಿಟ್ಟು,flour,Food,hittu,https://upcdn.io/kW15bgo/raw/learnkannada/images/flour.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/flour.wav,,,,,,
 85: ಪಾಲಕ್,spinach,Food,paalak,https://upcdn.io/kW15bgo/raw/learnkannada/images/spinach.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/spinach.wav,,,,,,
 86: ಸೌತೆಕಾಯಿ,cucumber,Food,sauthekaayi,https://upcdn.io/kW15bgo/raw/learnkannada/images/cucumber.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/cucumber.wav,,,,,,
 87: ಗಜ್ಜರಿ,carrot,Food,gajjari,https://upcdn.io/kW15bgo/raw/learnkannada/images/carrot.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/carrot.wav,,,,,,
 88: ಮಾವಿನ ಹಣ್ಣು,mango,Food,maavina hannu,https://upcdn.io/kW15bgo/raw/learnkannada/images/mango.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/mango.wav,,,,,,
 89: ತೆಂಗಿನಕಾಯಿ,coconut,Food,tenginakaayi,https://upcdn.io/kW15bgo/raw/learnkannada/images/coconut.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/coconut.wav,,,,,,
 90: ಎಣ್ಣೆ,oil,Food,enne,https://upcdn.io/kW15bgo/raw/learnkannada/images/oil.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/oil.wav,,,,,,
 91: ಕಡ್ಲೆಕಾಯಿ,groundnut,Food,kadlekai,https://upcdn.io/kW15bgo/raw/learnkannada/images/groundnut.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/groundnut.wav,,,,,,
 92: ನೀರು,water,Food,neeru,https://upcdn.io/kW15bgo/raw/learnkannada/images/water.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/water.wav,,,,,,
 93: ಸಿಹಿ,sweet,Food,sihi,https://upcdn.io/kW15bgo/raw/learnkannada/images/sweet.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/sweet.wav,,,,,,
 94: ಖಾರ,spicy,Food,khaara,https://upcdn.io/kW15bgo/raw/learnkannada/images/spicy.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/spicy.wav,,,,,,
 95: ಹುಳಿ,sour,Food,huli,https://upcdn.io/kW15bgo/raw/learnkannada/images/sour.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/sour.wav,,,,,,
 96: ವೃತ್ತ,circle,Shapes,vrutta,https://upcdn.io/kW15bgo/raw/learnkannada/images/circle.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/circle.wav,,,,,,
 97: ಚೌಕ,square,Shapes,chowka,https://upcdn.io/kW15bgo/raw/learnkannada/images/square.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/square.wav,,,,,,
 98: ನಕ್ಷತ್ರ,star,Shapes,nakshatra,https://upcdn.io/kW15bgo/raw/learnkannada/images/star.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/star.wav,,,,,,
 99: ಚಂದ್ರಾಕಾರ,moon,Shapes,chandraakara,https://upcdn.io/kW15bgo/raw/learnkannada/images/moon.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/moon.wav,,,,,,
100: ತ್ರಿಭುಜ,triangle,Shapes,tribhuja,https://upcdn.io/kW15bgo/raw/learnkannada/images/triangle.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/triangle.wav,,,,,,
101: ಸೋಮವಾರ,monday,Days,somavara,https://upcdn.io/kW15bgo/raw/learnkannada/images/monday.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/monday.wav,,,,,,
102: ಮಂಗಳವಾರ,tuesday,Days,mangalavara,https://upcdn.io/kW15bgo/raw/learnkannada/images/tuesday.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/tuesday.wav,,,,,,
103: ಬುಧವಾರ,wednesday,Days,budhavara,https://upcdn.io/kW15bgo/raw/learnkannada/images/wednesday.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/wednesday.wav,,,,,,
104: ಗುರುವಾರ,thursday,Days,guruvara,https://upcdn.io/kW15bgo/raw/learnkannada/images/thursday.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/thursday.wav,,,,,,
105: ಶುಕ್ರವಾರ,friday,Days,shukravara,https://upcdn.io/kW15bgo/raw/learnkannada/images/friday.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/friday.wav,,,,,,
106: ಶನಿವಾರ,saturday,Days,shanivara,https://upcdn.io/kW15bgo/raw/learnkannada/images/saturday.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/saturday.wav,,,,,,
107: ರವಿವಾರ,sunday,Days,ravivara,https://upcdn.io/kW15bgo/raw/learnkannada/images/sunday.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/sunday.wav,,,,,,
108: ಒಂದು,one,Numbers,ondu,https://upcdn.io/kW15bgo/raw/learnkannada/images/one.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/one.wav,,,,,,
109: ಎರಡು,two,Numbers,eradu,https://upcdn.io/kW15bgo/raw/learnkannada/images/two.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/two.wav,,,,,,
110: ಮೂರು,three,Numbers,mooru,https://upcdn.io/kW15bgo/raw/learnkannada/images/three.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/three.wav,,,,,,
111: ನಾಲ್ಕು,four,Numbers,nalku,https://upcdn.io/kW15bgo/raw/learnkannada/images/four.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/four.wav,,,,,,
112: ಐದು,five,Numbers,aidu,https://upcdn.io/kW15bgo/raw/learnkannada/images/five.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/five.wav,,,,,,
113: ಆರು,six,Numbers,aaru,https://upcdn.io/kW15bgo/raw/learnkannada/images/six.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/six.wav,,,,,,
114: ಎಳು,seven,Numbers,elu,https://upcdn.io/kW15bgo/raw/learnkannada/images/seven.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/seven.wav,,,,,,
115: ಎಂಟು,eight,Numbers,entu,https://upcdn.io/kW15bgo/raw/learnkannada/images/eight.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/eight.wav,,,,,,
116: ಒಂಬತ್ತು,nine,Numbers,ombhattu,https://upcdn.io/kW15bgo/raw/learnkannada/images/nine.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/nine.wav,,,,,,
117: ಹತ್ತು,ten,Numbers,hattu,https://upcdn.io/kW15bgo/raw/learnkannada/images/ten.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/ten.wav,,,,,,
118: ಐವತ್ತು,fifty,Numbers,aivattu,https://upcdn.io/kW15bgo/raw/learnkannada/images/fifty.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/fifty.wav,,,,,,
119: ನೂರು,hundred,Numbers,nooru,https://upcdn.io/kW15bgo/raw/learnkannada/images/hundred.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/hundred.wav,,,,,,
120: ಐನೂರು,fivehundred,Numbers,ainooru,https://upcdn.io/kW15bgo/raw/learnkannada/images/fivehundred.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/fivehundred.wav,,,,,,
121: ಸಾವಿರ,thousand,Numbers,saavira,https://upcdn.io/kW15bgo/raw/learnkannada/images/thousand.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/thousand.wav,,,,,,
122: ಲಕ್ಷ,lakh,Numbers,laksha,https://upcdn.io/kW15bgo/raw/learnkannada/images/lakh.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/lakh.wav,,,,,,
123: ಕೋಟಿ,crore,Numbers,kothi,https://upcdn.io/kW15bgo/raw/learnkannada/images/crore.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/crore.wav,,,,,,
124: ಈಜು,swim,Verbs,eeju,https://upcdn.io/kW15bgo/raw/learnkannada/images/swim.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/swim.wav,,,,,,
125: ನಗು,smile,Verbs,nagu,https://upcdn.io/kW15bgo/raw/learnkannada/images/smile.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/smile.wav,,,,,,
126: ಹಾಡು,sing,Verbs,haadu,https://upcdn.io/kW15bgo/raw/learnkannada/images/sing.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/sing.wav,,,,,,
127: ಕೊಡು,give,Verbs,kodu,https://upcdn.io/kW15bgo/raw/learnkannada/images/give.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/give.wav,,,,,,
128: ತಿನ್ನು,eat,Verbs,tinnu,https://upcdn.io/kW15bgo/raw/learnkannada/images/eat.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/eat.wav,,,,,,
129: ಕುಳಿತುಕೊ,sit,Verbs,kulithuko,https://upcdn.io/kW15bgo/raw/learnkannada/images/sit.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/sit.wav,,,,,,
130: ಓದು,read,Verbs,odu,https://upcdn.io/kW15bgo/raw/learnkannada/images/read.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/read.wav,,,,,,
131: ಬರೆ,write,Verbs,bare,https://upcdn.io/kW15bgo/raw/learnkannada/images/write.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/write.wav,,,,,,
132: ನಡೆ,walk,Verbs,nade,https://upcdn.io/kW15bgo/raw/learnkannada/images/walk.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/walk.wav,,,,,,
133: ನೋಡು,look,Verbs,nodu,https://upcdn.io/kW15bgo/raw/learnkannada/images/look.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/look.wav,,,,,,
134: ಕೇಳು,listen,Verbs,keLu,https://upcdn.io/kW15bgo/raw/learnkannada/images/listen.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/listen.wav,,,,,,
135: ಮಾತನಾಡು,speak,Verbs,maatanaadu,https://upcdn.io/kW15bgo/raw/learnkannada/images/speak.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/speak.wav,,,,,,
136: ಆಡು,play,Verbs,aadu,https://upcdn.io/kW15bgo/raw/learnkannada/images/play.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/play.wav,,,,,,
137: ಹಾರು,fly,Verbs,haaru,https://upcdn.io/kW15bgo/raw/learnkannada/images/fly.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/fly.wav,,,,,,
138: ತಬ್ಬಿಕೊ,hug,Verbs,tabbiko,https://upcdn.io/kW15bgo/raw/learnkannada/images/hug.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/hug.wav,,,,,,
139: ಓಡು,run,Verbs,odu,https://upcdn.io/kW15bgo/raw/learnkannada/images/run.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/run.wav,,,,,,
140: ಕುಡಿ,drink,Verbs,kudi,https://upcdn.io/kW15bgo/raw/learnkannada/images/drink.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/drink.wav,,,,,,
141: ಅಳು,cry,Verbs,aLu,https://upcdn.io/kW15bgo/raw/learnkannada/images/cry.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/cry.wav,,,,,,
142: ಮುಚ್ಚು,close,Verbs,muchchu,https://upcdn.io/kW15bgo/raw/learnkannada/images/close.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/close.wav,,,,,,
143: ತಳ್ಳು,push,Verbs,taLlu,https://upcdn.io/kW15bgo/raw/learnkannada/images/push.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/push.wav,,,,,,
144: ಎಳೆ,pull,Verbs,eLe,https://upcdn.io/kW15bgo/raw/learnkannada/images/pull.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/pull.wav,,,,,,
145: ಹುಡುಗ,boy,People,huduga,https://upcdn.io/kW15bgo/raw/learnkannada/images/boy.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/boy.wav,,,,,,
146: ಹುಡುಗಿ,girl,People,hudugi,https://upcdn.io/kW15bgo/raw/learnkannada/images/girl.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/girl.wav,,,,,,
147: ಪುರಷ,man,People,purusha,https://upcdn.io/kW15bgo/raw/learnkannada/images/man.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/man.wav,,,,,,
148: ಮಹಿಳೆ,woman,People,mahile,https://upcdn.io/kW15bgo/raw/learnkannada/images/woman.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/woman.wav,,,,,,
149: ಅಜ್ಜ,grandfather,People,ajja,https://upcdn.io/kW15bgo/raw/learnkannada/images/grandfather.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/grandfather.wav,,,,,,
150: ಅಜ್ಜಿ,grandmother,People,ajji,https://upcdn.io/kW15bgo/raw/learnkannada/images/grandmother.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/grandmother.wav,,,,,,
151: ಶೀಘ್ರವಾಗಿ,quickly,Adverbs,sheeghravagi,https://upcdn.io/kW15bgo/raw/learnkannada/images/quickly.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/quickly.wav,,,,,,
152: ನಿಧಾನವಾಗಿ,slowly,Adverbs,nidhānāvagi,https://upcdn.io/kW15bgo/raw/learnkannada/images/slowly.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
153: ಸುಲಭವಾಗಿ,easily,Adverbs,sulabhāvagi,https://upcdn.io/kW15bgo/raw/learnkannada/images/easily.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/easily.wav,,,,,,
154: ಕಠಿಣವಾಗಿ,hard,Adverbs,kaṭhiṇāvagi,https://upcdn.io/kW15bgo/raw/learnkannada/images/hard.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/hard.wav,,,,,,
155: ಚೆನ್ನಾಗಿ,well,Adverbs,chennāgi,https://upcdn.io/kW15bgo/raw/learnkannada/images/well.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/well.wav,,,,,,
156: ತಪ್ಪದೆ,certainly,Adverbs,tappade,https://upcdn.io/kW15bgo/raw/learnkannada/images/certainly.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/certainly.wav,,,,,,
157: ಖಂಡಿತ,absolutely,Adverbs,khaṇḍitāvagi,https://upcdn.io/kW15bgo/raw/learnkannada/images/absolutely.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/absolutely.wav,,,,,,
158: ಸುತ್ತಲೂ,around,Adverbs,suttalū,https://upcdn.io/kW15bgo/raw/learnkannada/images/around.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/around.wav,,,,,,
159: ಅಲ್ಲಿ,there,Adverbs,alli,https://upcdn.io/kW15bgo/raw/learnkannada/images/there.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/there.wav,,,,,,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav
160: ಇಲ್ಲಿ,here,Adverbs,illi,https://upcdn.io/kW15bgo/raw/learnkannada/images/here.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/here.wav,,,,,,
161: ಯಾವಾಗಲೂ,always,Adverbs,yāvāgalū,https://upcdn.io/kW15bgo/raw/learnkannada/images/always.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/always.wav,,,,,,
162: ಹದಿಮೂರು,thirteen,Numbers,hadhimooru,https://replicate.delivery/yhqm/5PkuifjZxQQaAadzXIuv9JnawIbJqpMXaSnFTsPIYnb3XgRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
163: ಹನ್ನೊಂದು,eleven,Numbers,hannondu,https://replicate.delivery/yhqm/ebi0oaBESepmnUeRC5lngXf9kwqBl2cPzIQejVnsavraeLwIF/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
164: ಹನ್ನೆರಡು,twelve,Numbers,hanneradu,https://replicate.delivery/yhqm/FR32qFx2IW7HAB5RISkXROm0Zg3WK5DeAQDIXim5i088XgRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
165: ಇಪ್ಪತ್ತು,twenty,Numbers,ippatthu,https://replicate.delivery/yhqm/dNuaeIhxnIVlfkgUhgy2A3k1UU1R6zi92e2WGtN4wbm6fCMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
166: ಮೂವತ್ತು,thirty,Numbers,moovatthu,https://replicate.delivery/yhqm/tQ27M8ebR7xtX63IskAxsHPbPJGipiXlckUdXeBmfZdGgBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
167: ನಲವತ್ತು,forty,Numbers,nalavatthu,https://replicate.delivery/yhqm/iyhtTFYuugrnIBbxe2fGHzYfTCGYlmDAKjvCmAi3UjcPgBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
168: ಅರವತ್ತು,sixty,Numbers,aravatthu,https://replicate.delivery/yhqm/hZvQyM3b84pefk4kVVCrwBKfUlGxJnR4kMMeilkYxHvyADMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
169: ಎಪ್ಪತ್ತು,seventy,Numbers,eppatthu,https://replicate.delivery/yhqm/TteUppc8oGwsbCMTTnN097JjjAqzNpe3ieiX8yuoD8djgBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
170: ಎಂಬತ್ತು,eighty,Numbers,embatthu,https://replicate.delivery/yhqm/5QcUBEZ5PgLbJFJihDjVJEQtef7TKyQk2qcvaihdXHTXwAjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
171: ತೊಂಬತ್ತು,ninety,Numbers,thombatthu,https://replicate.delivery/yhqm/OXnu3K66c1YfUClL8inKtFMao6feJjrchAaoItdupq23gBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
172: ಹತ್ತು ಸಾವಿರ,ten thousand,Numbers,hatthu saavira,https://replicate.delivery/yhqm/pNgeiVMTvE3zai65T6Rk8rYmiPl0Yg2hXPZubH7JSPzQYgRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
173: ಹದಿನಾಲ್ಕು,fourteen,Numbers,hadhinaalku,https://replicate.delivery/yhqm/8cWegwNyytyDMC4yOefOrXhk2mza7RNZ58AdukZxw0WLhBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
174: ಹದಿನೈದು,fifteen,Numbers,hadhinaidhu,https://replicate.delivery/yhqm/gqrkj3y9vfxCICCAtAXLPlD3rFSetPLjgBvZ3Jv2GxEpwAjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
175: ಹದಿನಾರು,sixteen,Numbers,hadhinaaru,https://replicate.delivery/yhqm/5emORjheYymDfoCKhjS3vL31qI61dxmsGciUNiH9oOEdhBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
176: ಹದಿನೇಳು,seventeen,Numbers,hadhinelu,https://replicate.delivery/yhqm/N5ZDoLRqCoLwI5Y440f3OvMpZcuZMzbtw8ZaP56ReRCywAjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
177: ಹದಿನೆಂಟು,eighteen,Numbers,hadhinentu,https://replicate.delivery/yhqm/L9SSw1Qg1cLCKFfKeihSYYO9egf3meUeuH6vHktnSeTLcYgRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
178: ಹತ್ತೊಂಬತ್ತು,nineteen,Numbers,hatthombatthu,https://replicate.delivery/yhqm/l9yj7Ejj7TLUM9RiSEUgq2z58mnIjIKH0sSxeLBa1TPewAjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
179: ಎಮ್ಮೆ,buffalo,Animals,emme,https://replicate.delivery/yhqm/xgJhhjvMSM7rGptNcenuaQQH8n0geqff7sL2nTZRHuHGEDMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
180: ಒಂಟೆ,camel,Animals,onte,https://replicate.delivery/yhqm/Pm8BbMB8teyfkUqtaqX8Md5JHGwewmzPN07Zfexx4FK1IGYkC/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
181: ಹಲ್ಲಿ,lizard,Animals,halli,https://replicate.delivery/yhqm/eZ8BUmesArueUoeyg4GWOjqRTP499CW9AJbHnZcGHuCzEDMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
182: ಗಿಣಿ,parrot,Animals,gini,https://replicate.delivery/yhqm/4YwqvS7JYDa7OhsKLBpKjeCdxxVFJ0BezLJUjQzaZ11RxAjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
183: ಗುಬ್ಬಚ್ಚಿ,sparrow,Animals,gubbacchi,https://replicate.delivery/yhqm/rXoGdX0B6toPMFJhVa8hl1LnWsD68mZToJfzLrM3086qYgRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
184: ಅಳಿಲು,squirrel,Animals,alilu,https://replicate.delivery/yhqm/WqLdUXefu1gnAk3LHl9JelrxAggJkDAExbBhLcOKreb2FDMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
185: ಜೇನುನೋಣ,bee,Animals,jenunona,https://upcdn.io/kW15bgo/raw/learnkannada/images/bee.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
186: ಇರುವೆ,ant,Animals,iruve,https://replicate.delivery/yhqm/3MQW7eWhbw3rTa6N2HnhzbpBfFbfpM77CicQysvl8CEWjBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
187: ಹಾವು,snake,Animals,naavu,https://upcdn.io/kW15bgo/raw/learnkannada/images/snake.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
188: ಇಲಿ,mouse,Animals,ili,https://replicate.delivery/yhqm/4h4BITcYEtaYJFdZlefhSaUs0CNhf4eep0Fz8ObCywCzOGYkC/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
189: ಗೂಬೆ,owl,Animals,goobe,https://replicate.delivery/yhqm/OnpX5TdMPFZTORQ0UeeAD3KjELMhS7bks7XjLXYI5nC7xAjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
190: ಪಾರಿವಾಳ,pigeon,Animals,paarivaala,https://replicate.delivery/yhqm/Te0wIverbXsCPkf5hJrbdfPGKQFa1JtZygKUbNAZKhDSIDMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
191: ಏಡಿ,crab,Animals,edi ,https://replicate.delivery/yhqm/OS9scNRuCNb4AhxJZMi5Jtd4iHNheG2fgfzu5ZIuvyKRkBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
192: ತೋಳ,wolf,Animals,thola,https://replicate.delivery/yhqm/WeEFeL1FAbvUkUb0F6Fz4onRC6Xg4T3IJWuZBvIojxVMyAjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
193: ಬಾವುಲಿ,bat,Animals,baavuli,https://replicate.delivery/yhqm/QNehWXlvcsSuDCNiC3zlrfGORxsfokPKft6l2ID0DUAJJDMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
194: ಹುಲಿಮರಿ,tiger cub,Animals,hulimari,https://replicate.delivery/yhqm/R0ORI3uZ8f0Qe0KRTzeaDrS1gQgEJKprFeUnebA9WMAATGYkC/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
195: ಕರು,calf,Animals,karu,https://replicate.delivery/yhqm/Zqaol0vDGLpuNpHJLpToQjjyO2JK5svYjKjd0Pn6lCTnMwIF/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
196: ಬೆಕ್ಕಿನ ಮರಿ,kitten,Animals,bekkinamari,https://replicate.delivery/yhqm/RSUzKeBEwDxTLSsXrfXyBYNIga9HwfkvEO7pKCOxwNmRlBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
197: ಕೋಳಿಮರಿ,chick,Animals,kolimari,https://replicate.delivery/yhqm/Kg1vUkeL4mUfb0E3KfRA68fU8GcM8QrFy497icJxI165KDMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
198: ಬೆರಳು,finger,Body Parts,beralu,https://replicate.delivery/yhqm/TV7OfiD2l3x5YyEJ1auaT6EWz3bGXMSNmvdeMsvojEr5yAjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
199: ಈರುಳ್ಳಿ,onion,Food,eerulli,https://replicate.delivery/yhqm/cdbZ9VecovWQJ61HAnJm9EXQG0e7tbPfWZphvzSwgg68lBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
200: ಆಲೂಗಡ್ಡೆ,potato,Food,aaloogadde,https://replicate.delivery/yhqm/URaGv9Zwre37VKSiNrCMnUQR5mGoBRPGAjmcqwAKEiShZgRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
201: ಬೆಂಡೆಕಾಯಿ,ladyfinger,Food,bendekaayi,https://replicate.delivery/yhqm/XuCp6ZtS4vqKPRnK7sroSYJ6c12QCwfmvm7tqzlJiheHzAjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
202: ಹಾಗಲಕಾಯಿ,bittergourd,Food,haagalakaayi,https://replicate.delivery/yhqm/4zAZ7Brg5p48JJk3wsNBej4itsZdIzLDOPOPGCFv4sfLzAjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
203: ಹೀರೆಕಾಯಿ,ridgegourd,Food,heerekaayi,https://replicate.delivery/yhqm/2w1rtIQuNOZdL5OELcBRT8DfxnUQpeWOLOkpaOKJVlfhmBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
204: ಪಡವಲಕಾಯಿ,snakegourd,Food,padavalakaayi,https://replicate.delivery/yhqm/HsCZvffUaPkgg0BcJkfwuw7KVDklg04lrsX2bnueBHxbNDMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
205: ನುಗ್ಗೆಕಾಯಿ,drumstick,Food,nuggekaayi,https://replicate.delivery/yhqm/LCwCypA9fR1XUKY6JwJUXZqIEqRdsVoVFA7geXPBUWSbzAjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
206: ಹೃದಯ,heart,Body Parts,hrudaya,https://replicate.delivery/yhqm/eit8eD6CD8uwY0QdXmPDJhvnVtbsA4VPhee2xscNBYMfbGYkC/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
207: ಕುಂಬಳಕಾಯಿ,pumpkin,Food,kumbalakaayi,https://replicate.delivery/yhqm/LHZR0NfwBZxwAiEJmvGZAFmyBf8mwhgcUXzfiXVGAyWJnBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
208: ಹಲಸಿನಹಣ್ಣು,jackfruit,Food,halasinahannu,https://replicate.delivery/yhqm/7sfdmfudr1qWDU8pSxfEiKbN3y3559cBTjQ3Yk1fSflNdGYkC/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
209: ನೇರಳೆ ಹಣ್ಣು,jamun,Food,neralehannu,https://upcdn.io/kW15bgo/raw/learnkannada/images/jamun.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
210: ಚಿಕ್ಕೂ,sapota,Food,chikkoo,https://replicate.delivery/yhqm/Owzr21IqF0aiA5ikV0CoGBskXndnXeVHql1lTOf3kh6zzAjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
211: ಸೀತಾಫಲ,custard apple,Food,seethaphala,https://replicate.delivery/yhqm/kEonARZUSzIfQi5C9VP23NMsHbrMf5K7Rfg5fAuv1NqjPDMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
212: ಪಪಾಯ,papaya,Food,papaaya,https://replicate.delivery/yhqm/9lv7fQeaCZkEqEeHWilhUjw9lHRw20hUkQv0UguSZQb7nBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
213: ಮಂಡಿ,knee,Body Parts,mandi,https://replicate.delivery/yhqm/d32GLSVjzJb4J98IU93nWwQreTKdof8iHWLmKmaGj8OB0AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
214: ಅರಿಶಿನ,turmeric,Food,arishina,https://replicate.delivery/yhqm/KPLHVxWa3eQiRKQTFfoPeT1fU0u1thkQb0fb2eevMo2mDagRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
215: ಶುಂಠಿ,ginger,Food,shunti,https://replicate.delivery/yhqm/PFiHT1Wp8zqEOtc9DcgM4RvxZj1n9s5GYeoKT5mZ6AbGagRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
216: ಬೆಳ್ಳುಳ್ಳಿ,garlic,Food,bellulli,https://replicate.delivery/yhqm/4o6tPCeFnB01BKGZfLBklWDHhjY03Nf0zL2ZCE4L1EYioBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
217: ಬೆಲ್ಲ,jaggery,Food,bella,https://replicate.delivery/yhqm/E5xwmekIutWcQiAISfeU8lcjpefVxBnXBm7iUHG81SHxiGYkC/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
218: ಶಾಲೆ,school,School,shaale,https://replicate.delivery/yhqm/P0MSCvhwW0oJPNmlkJtrMBMgcc3nYFvfZpOeyua7vfQ1oBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
219: ತರಗತಿ,classroom,School,tharagathi,https://replicate.delivery/yhqm/7dcu59HY4d7CCxFp1f8kJSSQgsG4gPhrWYvJnlvDOglPagRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
220: ಕಪ್ಪು ಹಲಗೆ,blackboard,School,kappu halage,https://replicate.delivery/yhqm/BYABqgi9bAZnOhwvSOSrLkIFiow0BHxiFcIFXKXKsKCJNwIF/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
221: ಬಳಪ,chalk,School,balapa,https://replicate.delivery/yhqm/DTDfLh3Cs5zVDCvBJ3scf0af93aaJrJDf6Z52QnKNr6jSDMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
222: ಶಿಕ್ಷಕಿ,teacher,School,shikshaki,https://replicate.delivery/yhqm/SjPqYu9lBqZlHZXAZRSgS3rfOMtB3eFdPzSUk7KDGgzu0AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
223: ವಿದ್ಯಾರ್ಥಿನಿ,student,School,vidhyaarthini,https://replicate.delivery/yhqm/NI2QnGGgTybTExZzXSAZw9H4w4In1b1wAomzPlaQ865MNwIF/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
224: ಮನೆಗೆಲಸ,homework,School,manegelasa,https://replicate.delivery/yhqm/djGi0HCifgXfPkIBKpH6myRmcfZ1B00rJREWwEqJ77IwpBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
225: ಪರೀಕ್ಷೆ,exam,School,pareekshe,https://replicate.delivery/yhqm/8IaVTktfUmSNPiyWnQrgSJgyw1Pb5P3yYTlb1wLH8m7e0AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
226: ಗಂಟೆ,bell,School,gante,https://replicate.delivery/yhqm/aeSOxaip70yySyTvO1PL5jLxvJgzq0Q88rvepeeGAL0sUDMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
227: ಬೆಂಚು,bench,School,benchu,https://replicate.delivery/yhqm/8VVFgn8nI1JYK14cFQfPMJd7DFRl4PFGQiDYILfqOLhW1AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
228: ತಲೆ,head,Body Parts,thale,https://replicate.delivery/yhqm/aDxkimwRc4rBLNcGCpWZCpEpbTc4VgPxe0TPxaTqfjf7qBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
229: ಕೈ,hand,Body Parts,kai,https://replicate.delivery/yhqm/NlF8hrt4AxolM9HVC63OSefmLjFscV9hTC3jeriJrCtDrBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
230: ಕಾಲು,leg,Body Parts,kaalu,https://replicate.delivery/yhqm/K42VV00FITqqN5EZQJj7Z74eLYy6hfTbseexXiwmOXbZWDMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
231: ಮೂಗು,nose,Body Parts,moogu,https://replicate.delivery/yhqm/IEWCUNBAh6KjE5IBePBfqf3PSMoDdteUMFqBnYdWl79sWDMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
232: ಕಿವಿ,ear,Body Parts,kivi,https://replicate.delivery/yhqm/6hvgMOERKoLeXCAQqe5AuLiD7bFyPv41cAv9yUfJBBtgrBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
233: ಕಣ್ಣು,eye,Body Parts,kannu,https://replicate.delivery/yhqm/L02eHUeeVOQn7IQKbxy60xK1QfmaS5dgvDRhedaLAl81uGYkC/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
234: ಬಾಯಿ,mouth,Body Parts,baayi,https://replicate.delivery/yhqm/xTaewpsYjkywWCbFkkwJOkByQz2XQKbZo4jPyQitbhe61AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
235: ಕತ್ತು,neck,Body Parts,katthu,https://replicate.delivery/yhqm/AONUdHQZsSaLNRAT1sigCngoVPyzVKa3eaHjsAwUQM7AbgRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
236: ಹೊಟ್ಟೆ,stomach,Body Parts,hotte,https://replicate.delivery/yhqm/ef9BGA1uSQhR1EfiWy82sw42aqnRGi4dOTqQXuUIJG0LsBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
237: ಬೆನ್ನು,back,Body Parts,bennu,https://replicate.delivery/yhqm/JrMBHssFFvIAKdGvIKfy7YtgP0yoetEpQeFTraVIserrYDMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
238: ಪರ್ವತ,mountain,Nature,parvatha,https://replicate.delivery/yhqm/qOA7Uqx6OY6IKtOfYgJjAN4MqMMgg9GW1ZzqkhExvJMIbgRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
239: ನದಿ,river,Nature,nadhi,https://replicate.delivery/yhqm/EWPhfM0oK2RXaaHfwQpQ7nIE1n7PG2n4QQIZ6TqKKdlV2AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
240: ಸರೋವರ,lake,Nature,sarovara,https://replicate.delivery/yhqm/KI8PrhM7U4bPOZycDjwScgqHQfgx4OqDBY43nBIfXwlZ2AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
241: ಕಲ್ಲು,stone,Nature,kallu,https://replicate.delivery/yhqm/Z3mUeJmkZk37E63DrUU6buHBql8fkkODRqnQIoV94ZResBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
242: ಎಲೆ,leaf,Nature,else,https://replicate.delivery/yhqm/Zm7EccHy5M4MMJ0pLVSvlqEf7HKqEQ5gThvVfmefazjNaDMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
243: ಬೇರು,root,Nature,beru,https://replicate.delivery/yhqm/rKfJcrviRFzLayarcmhydltekRFfKmVl8ubmtRBjzqRRtBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
244: ಆಕಾಶ,sky,Nature,aakaasha,https://replicate.delivery/yhqm/CTqDiWerGzXjYisdGurofFk1deajCGI1x6eIKO5Yb1iwaDMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
245: ಮೋಡ,cloud,Nature,moda,https://replicate.delivery/yhqm/P4U3ILIN4A52G1LYzgR5DLHJUzY9ftWqxAP6Dg28ECnYbgRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
246: ನಕ್ಷತ್ರ,star,Nature,nakshathra,https://replicate.delivery/yhqm/q14MXW6LlM5BAdB7kRdYIQItfINQDyIORWzzthXFtFlabgRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
247: ಸೂರ್ಯ,sun,Nature,soorya,https://replicate.delivery/yhqm/18GfPp9tlq2BFytHfL15URvxYNbUYet4DwAGLs7XT0p0tBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
248: ಮಳೆ,rain,Weather,male,https://replicate.delivery/yhqm/EGdbElqnCHLgHh78FKPk0rKaO0r9IyBLaYnKBVz0udpvNwIF/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
249: ಗಾಳಿ,wind,Weather,gaali,https://replicate.delivery/yhqm/trftDKyCMnyOSCM59NMH0f6ti9OZ8xcBwwZZXGlPu5cF3AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
250: ಮಿಂಚು,lightning,Weather,minchu,https://replicate.delivery/yhqm/9mF2MU8XJCaoG5T8UAKuiH6AzsbeytZ4OHuXcRho8F2obgRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
251: ಸಿಡಿಲು,thunder,Weather,sidilu,https://replicate.delivery/yhqm/DNkyim0H73ZRMhCIGIw8kNeXnfe63SLW9e0i5Z01myxZdDMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
252: ಕಾಮನಬಿಲ್ಲು,rainbow,Weather,kaamanabillu,https://replicate.delivery/yhqm/4LgT0Q0K3fXjVKggI4wXBpPpeNrMlWqAPPFkrjfwctU3uBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
253: ಹಿಮ,snow,Weather,hima,https://replicate.delivery/yhqm/fl4mr81PEpzdSa46kIvTzXf1dgUNInWkcM7Et5QdWZhg3AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
254: ಚಳಿ,cold,Weather,chali,https://replicate.delivery/yhqm/xzYEyUXWZeWhNS6bRdZUlxnI8DWpSWJzhEnaI45meK4l3AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
255: ಬಿಸಿಲು,hot,Weather,bisilu,https://replicate.delivery/yhqm/HcXG6sKRqSpfWq9RWU6U4NjqAfqzlRg3PJAUcY1N5Hbq3AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
256: ಮಂಜು,fog,Weather,manju,https://replicate.delivery/yhqm/EdvApijbcvaKMNiNa2p9rezAE1HlZ30Nmco31MF2dbD3bgRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
257: ಬಿರುಗಾಳಿ,storm,Weather,birugaali,https://replicate.delivery/yhqm/xrfV6fyd9cshr0hH2JeedfYB3SR1P5VdKdhEfl4QMF8G9NwIF/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
258: ಸಂತೋಷ,happy,Emotions,santhosha,https://replicate.delivery/yhqm/yk29PjAImdLOJRAFfiAsuCFTzYX6r1d69LM41BZcVqLe3AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
259: ಬೇಸರ,sad,Emotions,besara,https://replicate.delivery/yhqm/W1OfmHeBHDsa3UQSAuCDdgkwtA8BI97Mge3viaXOCrCDwBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
260: ಕೋಪ,angry,Emotions,kopa,https://replicate.delivery/yhqm/zwcHO78fgQRpbKWuwxOAlL39aR7Mf02WORnxqUYm511G4AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
261: ಭಯ,scared,Emotions,bhaya,https://replicate.delivery/yhqm/Crqb5R2GAjbXNxPpweEN454kGOcwjOGfBxp90rMCoakL4AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
262: ಆಶ್ಚರ್ಯ,surprised,Emotions,aashcharya,https://replicate.delivery/yhqm/JOOSZf1riNSQRi1F66kZDJMresINxIwZ4nXWGm1Q8cSP4AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
263: ನಾಚಿಕೆ,shy,Emotions,naachike,https://replicate.delivery/yhqm/NrxGK36ld8JnJtHiwcs8ZKeXLiDwmq4kypyHaHNwIyNKcgRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
264: ಉತ್ಸಾಹ,excited,Emotions,uthsaaha,https://replicate.delivery/yhqm/a8pEtWp3SqLLJ1s7MzV7uJUNHGgDNzeHhNPIAHvdyTkMcgRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
265: ಮಂಪರು,sleepy,Emotions,mamparu,https://replicate.delivery/yhqm/lJqGoShNw0YdI9uXHGrCapfW2xZ9B0ys16SILkFl2GFPcgRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
266: ಹೆಮ್ಮೆ,proud,Emotions,hemme,https://replicate.delivery/yhqm/AQnrzeddKgWvCiGj7MBrpYpHc4f4Le6i869CU45Mwt8NxBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
267: ಅಪ್ಪ,father,People,appa,https://upcdn.io/kW15bgo/raw/learnkannada/images/father.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
268: ಅಮ್ಮ,mother,People,amma,https://replicate.delivery/yhqm/DjGE8JY9Ns5gP5BMa6PMcpQofSYmXyzF2Hgi5peTu2hK5AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
269: ಸಹೋದರ,brother,People,sahodhara,https://replicate.delivery/yhqm/tzqw7bsevQRReEeUXEAUyDg5roGSkWXS07hxbxofVvd9kDMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
270: ಸಹೋದರಿ,sister,People,sahodhari,https://replicate.delivery/yhqm/j8e5Zdv6lVQ4X6aaEefSsdbIfBVSZ55fMUTLSn7sVglhKHYkC/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
271: ಅತ್ತೆ,aunt,People,atthe,https://replicate.delivery/yhqm/GmH96Vf2lHx2DKmmnp0IlYKaulfa6venRNQtQel3otrplDMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
272: ಮಾವ,uncle,People,maava,https://replicate.delivery/yhqm/ifU3RnxOOfvHz0VeWIHvkR5s5fecWbtpZRZzoPHyyfIFYOwIF/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
273: ಶಿಶು,baby,People,shishu,https://replicate.delivery/yhqm/DffsOiyZUEv490BEaqN5kosMflGtrs9adTPk7dpoyneVmDMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
274: ಮಗು,child,People,magu,https://replicate.delivery/yhqm/1vweEo5segqdZEzwnaa6YIbtbjpdqpDj9X8psJj92Oyq5AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
275: ಗೆಳತಿ,friend,People,gelathi,https://replicate.delivery/yhqm/N0Kc3rp5nWqjJhE84myPAa8MdBETBIr9RLIoVuPuiQ4bOwIF/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
276: ಜಿಗಿ,jump,Verbs,jigi,https://replicate.delivery/yhqm/ZAIO4rOGlW6KC1I6iIVcfeRUwmXWa7OTvLemJODdr5KozBGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
277: ಹತ್ತು,climb,Verbs,hatthu,https://replicate.delivery/yhqm/tso7o6B2rfSbASzv2QUuSvDJ9Xpr9AlOHPoqYn0pYAj8cgRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
278: ತೊಳೆ,wash,Verbs,thole,https://replicate.delivery/yhqm/O78UDpeuvjQ0KyNuqcFHTH3L0HiggipIwLKk2dgEscgf5AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
279: ಗುಡಿಸು,sweep,Verbs,gudisu,https://replicate.delivery/yhqm/ymFInOtKBs7oCldB7EftqfW0FzxpFjcNEESYB0GLhvsD6AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
280: ಅಡುಗೆ ಮಾಡು,cook,Verbs,aduge maadu,https://replicate.delivery/yhqm/Q0ZPYYgLAGKrN9d6zEO2zEatJmeC6zkPfl9AmjsdDFaI6AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
281: ಮಲಗು,sleep,Verbs,malagu,https://replicate.delivery/yhqm/e1t3qfju0irvokbVcNnsuYtnYeclflHrxc8dBemvL5rgRHYkC/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
282: ಎದ್ದೇಳು,wake,Verbs,eddhelu,https://replicate.delivery/yhqm/xu7AuyhoYqJ2NdsewICFilDRHBNMUi0MGH5FAOs9YfQR6AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
283: ಕರೆ ಮಾಡು,call,Verbs,kare maadu,https://replicate.delivery/yhqm/sUJF0EkBwabDPlaE6t7i96cBr1EKdRIe0uubNkd5f3XX6AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
284: ಕುಣಿದಾಡು,dance,Verbs,kunidaadu,https://replicate.delivery/yhqm/cbCFyImwCJovCZ3bzk5fjUS7KLUS1ye09Q2zM8AZEzKd6AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
285: ತೆರೆ,open,Verbs,there,https://replicate.delivery/yhqm/6XeUNnHBCUwbQaOHehugGBJeJ9Djz62Ve5DCR1pP1sRKqDMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
286: ನಗು,laugh,Verbs,nagu,https://replicate.delivery/yhqm/4rAKwRO5aOJEHdgSccWK0wCtVhMQCrgCNK6kL9exCosTdgRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
287: ಕತ್ತರಿಸು,cut,Verbs,kattharisu,https://replicate.delivery/yhqm/OZocNWYXI26rLRnWMb3pYjPy0kG8jeQzE8iZ6c3fkKSs6AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
288: ಎಸೆಯುವುದು,throw,Verbs,eseyuvudhu,https://replicate.delivery/yhqm/sHtzOlFXVH5cNZaIwG8a4x7FtmGgpVaCUIwjZIEN48VsOwIF/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
289: ಹಿಡಿ,catch,Verbs,hidi,https://replicate.delivery/yhqm/nMu72oQ2yoI6Exo4yQMaG7YpTMWqXqfl1KeTXbdKwRJ26AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
290: ಸುರಿ,pour,Verbs,suri,https://replicate.delivery/yhqm/dJQ4KWAkypoOJ1BMgfsGIHgUurjfeq5JfKflZCmkXK9QXHYkC/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
291: ಹಬ್ಬ,festival,Culture,habba,https://replicate.delivery/yhqm/nwpgjMe9cWQAMiN1i13yNK8hgf7FqNMv1UxxqAcz2BYA7AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
292: ಗುಡಿ,temple,Culture,gudi,https://replicate.delivery/yhqm/GqFAT9uqRda4C5Wy1cf12fuwc4xn4g2hiWBAgFnxQBMF7AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
293: ದೀಪ,lamp,Culture,dheepa,https://replicate.delivery/yhqm/A1VSxIgqGe1CVq7fx0GwwhPy4itlddvsmBhrn7XCrJ7K7AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
294: ರಂಗೋಲಿ,rangoli,Culture,rangoli,https://replicate.delivery/yhqm/piRDuLu4zCZaMdSso5tu6peefvxahOVW1DVFmWikK92esDMSB/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
295: ಹೂಮಾಲೆ,garland,Culture,hoomaale,https://replicate.delivery/yhqm/FfdsjfefVefYnCZRwqFv6Py25RzZteUMdTjsbTBptnIKqdgRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
296: ಅಗರಬತ್ತಿ,incense,Culture,agarabatthi,https://replicate.delivery/yhqm/Dtuo4HFm9FJSEtY7g1H94EOEmgtfd5Wc9jjOQeBnPV4Z7AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
297: ದೇವರು,god,Culture,dhevaru,https://replicate.delivery/yhqm/YYfEGeiwnfN1sp0c3WUr8XNqlminnozA4RSifeSrbz6zbHYkC/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
298: ದೇವತೆ,goddess,Culture,dhevathe,https://replicate.delivery/yhqm/BZlYN1FtyrJBHRIoZX8TtW1u0vieRX8iy7csZocP9QwxdgRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
299: ಪ್ರಾರ್ಥನೆ,prayer,Culture,praarthane,https://replicate.delivery/yhqm/oXfYhvT9BUVENahWM22Dmlj4ajFt37i2NMGh6SxDRmB0dgRKA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
300: ಕಾಣಿಕೆ,offering,Culture,kaanike,https://replicate.delivery/yhqm/yqduXfhO14zhHygDVMDW4zqP2NB08ZefvfAkNYN7fKeV7OwIF/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
301: ಗದ್ದೆ,field,Nature,gaddhe,https://replicate.delivery/yhqm/P9Egy1FBH7abO5WBYXik8UuikqDLJEavkGXt9BC3vfey7AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
302: ತೋಟ,farm,Nature,thota,https://replicate.delivery/yhqm/IfDf6olAGup870XT9Jc5oWjKh3W7HfRtFj0el1MHnRe9eOwIF/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
303: ಕಾಡು,forest,Nature,kaadu,https://replicate.delivery/yhqm/2g2du2JVr0bANNfhAqAftxnnXo07LyjWgGFuGve2ynD23BGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
304: ಮರುಭೂಮಿ,desert,Nature,marubhoomi,https://replicate.delivery/yhqm/NetbAs26lSVAQqwXTnq5bTYyfTLHDJE6jrNa3Wrpl95A8AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
305: ಕಡಲತೀರ,beach,Nature,kadalatheera,https://replicate.delivery/yhqm/FYESdraAa14UMBwg4UsKlRb862LaJ8SYcpc7JHTiP4jBPwIF/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
306: ಮರಳು,sand,Nature,maralu,https://replicate.delivery/yhqm/SgYjKGC5Zn7lLxhXbt8CFN17B03zAamRD76kS9wTTCvCPwIF/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
307: ಮಣ್ಣು,mud,Nature,mannu,https://replicate.delivery/yhqm/jV2VsNrbov5UAxTkZueq6pYv5HCPQZUbxkOS3PU5L5pHeAjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
308: ಹುಲ್ಲು,grass,Nature,hullu,https://replicate.delivery/yhqm/3Nsi0DQettXDdik8yeUZPAhD0G5Ay5t0f1bhHpxBskWp4BGpA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
309: ಜಲಪಾತ,waterfall,Nature,jalapaatha,https://replicate.delivery/yhqm/Fe69QWMSpfpWWEZSyQACnBWhbBi3HdJAbrdDVnWoduiZ8AjUA/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
310: ಸೂರ್ಯೋದಯ,sunrise,Nature,sooryodhaya,https://replicate.delivery/yhqm/nvuhyLY7Bn6GPVqWaKGm3npxnQTcXn9NN8mks7ZVYUdHPwIF/out-0.png,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav,,,,,,
````

## File: public/data/kannada-kali-updated.csv
````
  1: kannada,english,category,kanglish,icon,waudio,,,,,,
  2: ಕರಡಿ,bear,Animals,karadi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/bear.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/bear.wav,,,,,,
  3: ಪಕ್ಷಿ,bird,Animals,pakshi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/bird.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/bird.wav,,,,,,
  4: ಚಿಟ್ಟೆ,butterfly,Animals,chitte,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/butterfly.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/butterfly.wav,,,,,,
  5: ಬೆಕ್ಕು,cat,Animals,bekku,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/cat.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/cat.wav,,,,,,
  6: ಕೋಳಿ,hen,Animals,koli,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/hen.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/hen.wav,,,,,,
  7: ಹಸು,cow,Animals,hasu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/cow.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/cow.wav,,,,,,
  8: ಮೊಸಳೆ,crocodile,Animals,mosale,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/crocodile.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/crocodile.wav,,,,,,
  9: ಜಿಂಕೆ,deer,Animals,jinke,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/deer.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/deer.wav,,,,,,
 10: ನಾಯಿ,dog,Animals,naayi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/dog.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/dog.wav,,,,,,
 11: ಬಾತುಕೋಳಿ,duck,Animals,baatukoli,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/duck.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/duck.wav,,,,,,
 12: ಆನೆ,elephant,Animals,aane,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/elephant.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/elephant.wav,,,,,,
 13: ನರಿ,fox,Animals,nari,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/fox.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/fox.wav,,,,,,
 14: ಕಪ್ಪೆ,frog,Animals,kappe,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/frog.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/frog.wav,,,,,,
 15: ಮೇಕೆ,goat,Animals,meke,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/goat.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/goat.wav,,,,,,
 16: ನೀರಾನೆ,hippopotamus,Animals,neerane,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/hippopotamus.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/hippopotamus.wav,,,,,,
 17: ಕುದುರೆ,horse,Animals,kudure,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/horse.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/horse.wav,,,,,,
 18: ಕತ್ತೆ,donkey,Animals,katthe,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/donkey.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/donkey.wav,,,,,,
 19: ಚಿರತೆ,leopard,Animals,chirate,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/leopard.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/leopard.wav,,,,,,
 20: ಸಿಂಹ,lion,Animals,simha,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/lion.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/lion.wav,,,,,,
 21: ಕೋತಿ,monkey,Animals,kothi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/monkey.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/monkey.wav,,,,,,
 22: ಹಂದಿ,pig,Animals,handi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/pig.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/pig.wav,,,,,,
 23: ನಾಯಿಮರಿ,puppy,Animals,naayimari,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/puppy.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/puppy.wav,,,,,,
 24: ಮೊಲ,rabbit,Animals,mola,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/rabbit.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/rabbit.wav,,,,,,
 25: ಘೇಂಡಾಮೃಗ,rhino,Animals,gendamruga,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/rhino.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/rhino.wav,,,,,,
 26: ಹುಂಜ,rooster,Animals,hunja,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/rooster.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/rooster.wav,,,,,,
 27: ತಿಮಿಂಗಿಲ,shark,Animals,timingila,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/shark.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/shark.wav,,,,,,
 28: ಕುರಿ,sheep,Animals,kuri,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/sheep.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/sheep.wav,,,,,,
 29: ಹುಲಿ,tiger,Animals,huli,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/tiger.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/tiger.wav,,,,,,
 30: ಆಮೆ,tortoise,Animals,aame,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/tortoise.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/tortoise.wav,,,,,,
 31: ಕಾಗೆ,crow,Animals,kaage,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/crow.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/crow.wav,,,,,,
 32: ನವಿಲು,peacock,Animals,navilu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/peacock.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/peacock.wav,,,,,,
 33: ವಿಮಾನ,aeroplane,Items,vimaana,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/aeroplane.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/aeroplane.wav,,,,,,
 34: ಹಡಗು,ship,Items,hadagu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/ship.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/ship.wav,,,,,,
 35: ದೋಣಿ,boat,Items,doni,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/boat.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/boat.wav,,,,,,
 36: ಚೆಂಡು,ball,Items,chendu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/ball.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/ball.wav,,,,,,
 37: ಕನ್ನಡಕ,spectacles,Items,kannadaka,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/spectacles.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/spectacles.wav,,,,,,
 38: ಮೇಣದಬತ್ತಿ,candle,Items,menadabatti,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/candle.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/candle.wav,,,,,,
 39: ಬಟ್ಟೆ,clothes,Items,batte,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/clothes.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/clothes.wav,,,,,,
 40: ಹೂವು,flower,Items,huuvu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/flower.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/flower.wav,,,,,,
 41: ಚಮಚ,spoon,Items,chamacha,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/spoon.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/spoon.wav,,,,,,
 42: ಬೀಗ,lock,Items,beega,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/lock.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/lock.wav,,,,,,
 43: ಕತ್ತರಿ,scissor,Items,kattari,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/scissor.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/scissor.wav,,,,,,
 44: ಕಪ್ಪೆಚಿಪ್ಪು,seashell,Items,kappechippu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/seashell.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/seashell.wav,,,,,,
 45: ಮರ,tree,Items,mara,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/tree.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/tree.wav,,,,,,
 46: ಮನೆ,house,Items,mane,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/house.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/house.wav,,,,,,
 47: ಕಿಟಕಿ,window,Items,kitaki,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/window.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/window.wav,,,,,,
 48: ಬಾಗಿಲು,door,Items,baagilu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/door.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/door.wav,,,,,,
 49: ಪುಸ್ತಕ,book,Items,pustaka,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/book.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/book.wav,,,,,,
 50: ಕುರ್ಚಿ,chair,Items,kurchi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/chair.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/chair.wav,,,,,,
 51: ಮೇಜು,table,Items,meju,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/table.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/table.wav,,,,,,
 52: ಗಡಿಯಾರ,clock,Items,gadiyaara,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/clock.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/clock.wav,,,,,,
 53: ಲೋಟ,cup,Items,lota,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/cup.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/cup.wav,,,,,,
 54: ತಟ್ಟೆ,plate,Items,tatte,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/plate.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/plate.wav,,,,,,
 55: ಚೊಂಬು,jug,Items,chombu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/jug.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/jug.wav,,,,,,
 56: ಕೆಂಪು,red,Colors,kempu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/red.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/red.wav,,,,,,
 57: ಹಸಿರು,green,Colors,hasiru,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/green.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/green.wav,,,,,,
 58: ಹಳದಿ,yellow,Colors,haladi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/yellow.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/yellow.wav,,,,,,
 59: ನೀಲಿ,blue,Colors,neeli,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/blue.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/blue.wav,,,,,,
 60: ಕಂದು,brown,Colors,kandu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/brown.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/brown.wav,,,,,,
 61: ಕಪ್ಪು,black,Colors,kappu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/black.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/black.wav,,,,,,
 62: ಬಿಳಿ,white,Colors,bili,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/white.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/white.wav,,,,,,
 63: ಬೂದು,grey,Colors,boodu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/grey.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/grey.wav,,,,,,
 64: ನಸುಗೆಂಪು,pink,Colors,nasugempu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/pink.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/pink.wav,,,,,,
 65: ನೆರಳೆ,purple,Colors,nerale,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/purple.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/purple.wav,,,,,,
 66: ಬಾಳೆಹಣ್ಣು,banana,Food,baalehannu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/banana.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/banana.wav,,,,,,
 67: ಸೇಬು,apple,Food,sebu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/apple.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/apple.wav,,,,,,
 68: ಕಿತ್ತಳೆ ಹಣ್ಣು,orange,Food,kittalehannu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/orange.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/orange.wav,,,,,,
 69: ಜೋಳ,corn,Food,jola,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/corn.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/corn.wav,,,,,,
 70: ಮೊಟ್ಟೆ,egg,Food,motte,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/egg.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/egg.wav,,,,,,
 71: ಬದನೇಕಾಯಿ,eggplant,Food,badanekayi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/eggplant.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/eggplant.wav,,,,,,
 72: ದ್ರಾಕ್ಷಿ,grapes,Food,draakshi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/grapes.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/grapes.wav,,,,,,
 73: ಹಾಲು,milk,Food,haalu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/milk.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/milk.wav,,,,,,
 74: ಮೊಸರು,yogurt,Food,mosaru,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/yogurt.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/yogurt.wav,,,,,,
 75: ಬೆಣ್ಣೆ,butter,Food,benne,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/butter.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/butter.wav,,,,,,
 76: ಅಣಬೆ,mushroom,Food,anabe,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/mushroom.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/mushroom.wav,,,,,,
 77: ಅನ್ನ,rice,Food,anna,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/rice.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/rice.wav,,,,,,
 78: ಸಪೋಟ,chickoo,Food,sapota,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/chickoo.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/chickoo.wav,,,,,,
 79: ಸೀಬೆಹಣ್ಣು,guava,Food,seebehannu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/guava.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/guava.wav,,,,,,
 80: ಕಲ್ಲಂಗಡಿ,watermelon,Food,kallangadi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/watermelon.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/watermelon.wav,,,,,,
 81: ಅನಾನಸ್,pinapple,Food,anannas,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/pinapple.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/pinapple.wav,,,,,,
 82: ಗೋಡಂಬಿ,cashew,Food,godambi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/cashew.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/cashew.wav,,,,,,
 83: ಬಾದಾಮಿ,almond,Food,baadami,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/almond.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/almond.wav,,,,,,
 84: ಹಿಟ್ಟು,flour,Food,hittu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/flour.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/flour.wav,,,,,,
 85: ಪಾಲಕ್,spinach,Food,paalak,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/spinach.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/spinach.wav,,,,,,
 86: ಸೌತೆಕಾಯಿ,cucumber,Food,sauthekaayi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/cucumber.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/cucumber.wav,,,,,,
 87: ಗಜ್ಜರಿ,carrot,Food,gajjari,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/carrot.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/carrot.wav,,,,,,
 88: ಮಾವಿನ ಹಣ್ಣು,mango,Food,maavina hannu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/mango.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/mango.wav,,,,,,
 89: ತೆಂಗಿನಕಾಯಿ,coconut,Food,tenginakaayi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/coconut.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/coconut.wav,,,,,,
 90: ಎಣ್ಣೆ,oil,Food,enne,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/oil.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/oil.wav,,,,,,
 91: ಕಡ್ಲೆಕಾಯಿ,groundnut,Food,kadlekai,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/groundnut.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/groundnut.wav,,,,,,
 92: ನೀರು,water,Food,neeru,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/water.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/water.wav,,,,,,
 93: ಸಿಹಿ,sweet,Food,sihi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/sweet.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/sweet.wav,,,,,,
 94: ಖಾರ,spicy,Food,khaara,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/spicy.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/spicy.wav,,,,,,
 95: ಹುಳಿ,sour,Food,huli,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/sour.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/sour.wav,,,,,,
 96: ವೃತ್ತ,circle,Shapes,vrutta,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/circle.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/circle.wav,,,,,,
 97: ಚೌಕ,square,Shapes,chowka,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/square.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/square.wav,,,,,,
 98: ನಕ್ಷತ್ರ,star,Shapes,nakshatra,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/star.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/star.wav,,,,,,
 99: ಚಂದ್ರಾಕಾರ,moon,Shapes,chandraakara,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/moon.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/moon.wav,,,,,,
100: ತ್ರಿಭುಜ,triangle,Shapes,tribhuja,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/triangle.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/triangle.wav,,,,,,
101: ಸೋಮವಾರ,monday,Days,somavara,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/monday.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/monday.wav,,,,,,
102: ಮಂಗಳವಾರ,tuesday,Days,mangalavara,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/tuesday.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/tuesday.wav,,,,,,
103: ಬುಧವಾರ,wednesday,Days,budhavara,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/wednesday.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/wednesday.wav,,,,,,
104: ಗುರುವಾರ,thursday,Days,guruvara,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/thursday.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/thursday.wav,,,,,,
105: ಶುಕ್ರವಾರ,friday,Days,shukravara,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/friday.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/friday.wav,,,,,,
106: ಶನಿವಾರ,saturday,Days,shanivara,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/saturday.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/saturday.wav,,,,,,
107: ರವಿವಾರ,sunday,Days,ravivara,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/sunday.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/sunday.wav,,,,,,
108: ಒಂದು,one,Numbers,ondu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/one.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/one.wav,,,,,,
109: ಎರಡು,two,Numbers,eradu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/two.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/two.wav,,,,,,
110: ಮೂರು,three,Numbers,mooru,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/three.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/three.wav,,,,,,
111: ನಾಲ್ಕು,four,Numbers,nalku,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/four.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/four.wav,,,,,,
112: ಐದು,five,Numbers,aidu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/five.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/five.wav,,,,,,
113: ಆರು,six,Numbers,aaru,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/six.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/six.wav,,,,,,
114: ಎಳು,seven,Numbers,elu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/seven.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/seven.wav,,,,,,
115: ಎಂಟು,eight,Numbers,entu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/eight.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/eight.wav,,,,,,
116: ಒಂಬತ್ತು,nine,Numbers,ombhattu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/nine.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/nine.wav,,,,,,
117: ಹತ್ತು,ten,Numbers,hattu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/ten.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/ten.wav,,,,,,
118: ಐವತ್ತು,fifty,Numbers,aivattu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/fifty.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/fifty.wav,,,,,,
119: ನೂರು,hundred,Numbers,nooru,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/hundred.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/hundred.wav,,,,,,
120: ಐನೂರು,fivehundred,Numbers,ainooru,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/fivehundred.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/fivehundred.wav,,,,,,
121: ಸಾವಿರ,thousand,Numbers,saavira,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/thousand.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/thousand.wav,,,,,,
122: ಲಕ್ಷ,lakh,Numbers,laksha,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/lakh.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/lakh.wav,,,,,,
123: ಕೋಟಿ,crore,Numbers,kothi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/crore.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/crore.wav,,,,,,
124: ಈಜು,swim,Verbs,eeju,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/swim.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/swim.wav,,,,,,
125: ನಗು,smile,Verbs,nagu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/smile.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/smile.wav,,,,,,
126: ಹಾಡು,sing,Verbs,haadu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/sing.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/sing.wav,,,,,,
127: ಕೊಡು,give,Verbs,kodu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/give.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/give.wav,,,,,,
128: ತಿನ್ನು,eat,Verbs,tinnu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/eat.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/eat.wav,,,,,,
129: ಕುಳಿತುಕೊ,sit,Verbs,kulithuko,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/sit.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/sit.wav,,,,,,
130: ಓದು,read,Verbs,odu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/read.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/read.wav,,,,,,
131: ಬರೆ,write,Verbs,bare,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/write.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/write.wav,,,,,,
132: ನಡೆ,walk,Verbs,nade,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/walk.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/walk.wav,,,,,,
133: ನೋಡು,look,Verbs,nodu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/look.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/look.wav,,,,,,
134: ಕೇಳು,listen,Verbs,keLu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/listen.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/listen.wav,,,,,,
135: ಮಾತನಾಡು,speak,Verbs,maatanaadu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/speak.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/speak.wav,,,,,,
136: ಆಡು,play,Verbs,aadu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/play.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/play.wav,,,,,,
137: ಹಾರು,fly,Verbs,haaru,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/fly.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/fly.wav,,,,,,
138: ತಬ್ಬಿಕೊ,hug,Verbs,tabbiko,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/hug.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/hug.wav,,,,,,
139: ಓಡು,run,Verbs,odu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/run.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/run.wav,,,,,,
140: ಕುಡಿ,drink,Verbs,kudi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/drink.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/drink.wav,,,,,,
141: ಅಳು,cry,Verbs,aLu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/cry.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/cry.wav,,,,,,
142: ಮುಚ್ಚು,close,Verbs,muchchu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/close.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/close.wav,,,,,,
143: ತಳ್ಳು,push,Verbs,taLlu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/push.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/push.wav,,,,,,
144: ಎಳೆ,pull,Verbs,eLe,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/pull.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/pull.wav,,,,,,
145: ಹುಡುಗ,boy,People,huduga,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/boy.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/boy.wav,,,,,,
146: ಹುಡುಗಿ,girl,People,hudugi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/girl.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/girl.wav,,,,,,
147: ಪುರಷ,man,People,purusha,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/man.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/man.wav,,,,,,
148: ಮಹಿಳೆ,woman,People,mahile,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/woman.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/woman.wav,,,,,,
149: ಅಜ್ಜ,grandfather,People,ajja,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/grandfather.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/grandfather.wav,,,,,,
150: ಅಜ್ಜಿ,grandmother,People,ajji,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/grandmother.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/grandmother.wav,,,,,,
151: ಶೀಘ್ರವಾಗಿ,quickly,Adverbs,sheeghravagi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/quickly.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/quickly.wav,,,,,,
152: ನಿಧಾನವಾಗಿ,slowly,Adverbs,nidhānāvagi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/slowly.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/slowly.wav,,,,,,
153: ಸುಲಭವಾಗಿ,easily,Adverbs,sulabhāvagi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/easily.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/easily.wav,,,,,,
154: ಕಠಿಣವಾಗಿ,hard,Adverbs,kaṭhiṇāvagi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/hard.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/hard.wav,,,,,,
155: ಚೆನ್ನಾಗಿ,well,Adverbs,chennāgi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/well.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/well.wav,,,,,,
156: ತಪ್ಪದೆ,certainly,Adverbs,tappade,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/certainly.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/certainly.wav,,,,,,
157: ಖಂಡಿತ,absolutely,Adverbs,khaṇḍitāvagi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/absolutely.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/absolutely.wav,,,,,,
158: ಸುತ್ತಲೂ,around,Adverbs,suttalū,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/around.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/around.wav,,,,,,
159: ಅಲ್ಲಿ,there,Adverbs,alli,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/there.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/there.wav,,,,,,https://upcdn.io/kW15bgo/raw/learnkannada/audio/slowly.wav
160: ಇಲ್ಲಿ,here,Adverbs,illi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/here.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/here.wav,,,,,,
161: ಯಾವಾಗಲೂ,always,Adverbs,yāvāgalū,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/always.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/always.wav,,,,,,
162: ಹದಿಮೂರು,thirteen,Numbers,hadhimooru,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/thirteen.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/thirteen.mp3,,,,,,
163: ಹನ್ನೊಂದು,eleven,Numbers,hannondu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/eleven.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/eleven.mp3,,,,,,
164: ಹನ್ನೆರಡು,twelve,Numbers,hanneradu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/twelve.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/twelve.mp3,,,,,,
165: ಇಪ್ಪತ್ತು,twenty,Numbers,ippatthu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/twenty.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/twenty.mp3,,,,,,
166: ಮೂವತ್ತು,thirty,Numbers,moovatthu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/thirty.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/thirty.mp3,,,,,,
167: ನಲವತ್ತು,forty,Numbers,nalavatthu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/forty.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/forty.mp3,,,,,,
168: ಅರವತ್ತು,sixty,Numbers,aravatthu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/sixty.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/sixty.mp3,,,,,,
169: ಎಪ್ಪತ್ತು,seventy,Numbers,eppatthu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/seventy.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/seventy.mp3,,,,,,
170: ಎಂಬತ್ತು,eighty,Numbers,embatthu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/eighty.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/eighty.mp3,,,,,,
171: ತೊಂಬತ್ತು,ninety,Numbers,thombatthu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/ninety.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/ninety.mp3,,,,,,
172: ಹತ್ತು ಸಾವಿರ,ten thousand,Numbers,hatthu saavira,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/ten_thousand.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/ten_thousand.mp3,,,,,,
173: ಹದಿನಾಲ್ಕು,fourteen,Numbers,hadhinaalku,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/fourteen.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/fourteen.mp3,,,,,,
174: ಹದಿನೈದು,fifteen,Numbers,hadhinaidhu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/fifteen.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/fifteen.mp3,,,,,,
175: ಹದಿನಾರು,sixteen,Numbers,hadhinaaru,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/sixteen.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/sixteen.mp3,,,,,,
176: ಹದಿನೇಳು,seventeen,Numbers,hadhinelu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/seventeen.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/seventeen.mp3,,,,,,
177: ಹದಿನೆಂಟು,eighteen,Numbers,hadhinentu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/eighteen.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/eighteen.mp3,,,,,,
178: ಹತ್ತೊಂಬತ್ತು,nineteen,Numbers,hatthombatthu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/nineteen.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/nineteen.mp3,,,,,,
179: ಎಮ್ಮೆ,buffalo,Animals,emme,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/buffalo.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/buffalo.mp3,,,,,,
180: ಒಂಟೆ,camel,Animals,onte,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/camel.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/camel.mp3,,,,,,
181: ಹಲ್ಲಿ,lizard,Animals,halli,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/lizard.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/lizard.mp3,,,,,,
182: ಗಿಣಿ,parrot,Animals,gini,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/parrot.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/parrot.mp3,,,,,,
183: ಗುಬ್ಬಚ್ಚಿ,sparrow,Animals,gubbacchi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/sparrow.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/sparrow.mp3,,,,,,
184: ಅಳಿಲು,squirrel,Animals,alilu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/squirrel.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/squirrel.mp3,,,,,,
185: ಜೇನುನೋಣ,bee,Animals,jenunona,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/bee.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/bee.mp3,,,,,,
186: ಇರುವೆ,ant,Animals,iruve,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/ant.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/ant.mp3,,,,,,
187: ಹಾವು,snake,Animals,naavu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/snake.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/snake.mp3,,,,,,
188: ಇಲಿ,mouse,Animals,ili,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/mouse.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/mouse.mp3,,,,,,
189: ಗೂಬೆ,owl,Animals,goobe,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/owl.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/owl.mp3,,,,,,
190: ಪಾರಿವಾಳ,pigeon,Animals,paarivaala,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/pigeon.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/pigeon.mp3,,,,,,
191: ಏಡಿ,crab,Animals,edi ,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/crab.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/crab.mp3,,,,,,
192: ತೋಳ,wolf,Animals,thola,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/wolf.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/wolf.mp3,,,,,,
193: ಬಾವುಲಿ,bat,Animals,baavuli,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/bat.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/bat.mp3,,,,,,
194: ಹುಲಿಮರಿ,tiger cub,Animals,hulimari,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/tiger_cub.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/tiger_cub.mp3,,,,,,
195: ಕರು,calf,Animals,karu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/calf.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/calf.mp3,,,,,,
196: ಬೆಕ್ಕಿನ ಮರಿ,kitten,Animals,bekkinamari,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/kitten.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/kitten.mp3,,,,,,
197: ಕೋಳಿಮರಿ,chick,Animals,kolimari,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/chick.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/chick.mp3,,,,,,
198: ಬೆರಳು,finger,Body Parts,beralu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/finger.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/finger.mp3,,,,,,
199: ಈರುಳ್ಳಿ,onion,Food,eerulli,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/onion.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/onion.mp3,,,,,,
200: ಆಲೂಗಡ್ಡೆ,potato,Food,aaloogadde,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/potato.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/potato.mp3,,,,,,
201: ಬೆಂಡೆಕಾಯಿ,ladyfinger,Food,bendekaayi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/ladyfinger.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/ladyfinger.mp3,,,,,,
202: ಹಾಗಲಕಾಯಿ,bittergourd,Food,haagalakaayi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/bittergourd.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/bittergourd.mp3,,,,,,
203: ಹೀರೆಕಾಯಿ,ridgegourd,Food,heerekaayi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/ridgegourd.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/ridgegourd.mp3,,,,,,
204: ಪಡವಲಕಾಯಿ,snakegourd,Food,padavalakaayi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/snakegourd.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/snakegourd.mp3,,,,,,
205: ನುಗ್ಗೆಕಾಯಿ,drumstick,Food,nuggekaayi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/drumstick.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/drumstick.mp3,,,,,,
206: ಹೃದಯ,heart,Body Parts,hrudaya,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/heart.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/heart.mp3,,,,,,
207: ಕುಂಬಳಕಾಯಿ,pumpkin,Food,kumbalakaayi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/pumpkin.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/pumpkin.mp3,,,,,,
208: ಹಲಸಿನಹಣ್ಣು,jackfruit,Food,halasinahannu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/jackfruit.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/jackfruit.mp3,,,,,,
209: ನೇರಳೆ ಹಣ್ಣು,jamun,Food,neralehannu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/jamun.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/jamun.mp3,,,,,,
210: ಚಿಕ್ಕೂ,naseberry,Food,chikkoo,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/naseberry.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/naseberry.mp3,,,,,,
211: ಸೀತಾಫಲ,custard apple,Food,seethaphala,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/custard apple.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/custard_apple.mp3,,,,,,
212: ಪಪಾಯ,papaya,Food,papaaya,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/papaya.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/papaya.mp3,,,,,,
213: ಮಂಡಿ,knee,Body Parts,mandi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/knee.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/knee.mp3,,,,,,
214: ಅರಿಶಿನ,turmeric,Food,arishina,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/turmeric.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/turmeric.mp3,,,,,,
215: ಶುಂಠಿ,ginger,Food,shunti,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/ginger.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/ginger.mp3,,,,,,
216: ಬೆಳ್ಳುಳ್ಳಿ,garlic,Food,bellulli,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/garlic.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/garlic.mp3,,,,,,
217: ಬೆಲ್ಲ,jaggery,Food,bella,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/jaggery.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/jaggery.mp3,,,,,,
218: ಶಾಲೆ,school,School,shaale,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/school.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/school.mp3,,,,,,
219: ತರಗತಿ,classroom,School,tharagathi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/classroom.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/classroom.mp3,,,,,,
220: ಕಪ್ಪು ಹಲಗೆ,blackboard,School,kappu halage,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/blackboard.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/blackboard.mp3,,,,,,
221: ಬಳಪ,chalk,School,balapa,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/chalk.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/chalk.mp3,,,,,,
222: ಶಿಕ್ಷಕಿ,teacher,School,shikshaki,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/teacher.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/teacher.mp3,,,,,,
223: ವಿದ್ಯಾರ್ಥಿನಿ,student,School,vidhyaarthini,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/student.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/student.mp3,,,,,,
224: ಮನೆಗೆಲಸ,homework,School,manegelasa,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/homework.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/homework.mp3,,,,,,
225: ಪರೀಕ್ಷೆ,exam,School,pareekshe,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/exam.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/exam.mp3,,,,,,
226: ಗಂಟೆ,bell,School,gante,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/bell.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/bell.mp3,,,,,,
227: ಬೆಂಚು,bench,School,benchu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/bench.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/bench.mp3,,,,,,
228: ತಲೆ,head,Body Parts,thale,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/head.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/head.mp3,,,,,,
229: ಕೈ,hand,Body Parts,kai,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/hand.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/hand.mp3,,,,,,
230: ಕಾಲು,leg,Body Parts,kaalu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/leg.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/leg.mp3,,,,,,
231: ಮೂಗು,nose,Body Parts,moogu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/nose.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/nose.mp3,,,,,,
232: ಕಿವಿ,ear,Body Parts,kivi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/ear.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/ear.mp3,,,,,,
233: ಕಣ್ಣು,eye,Body Parts,kannu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/eye.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/eye.mp3,,,,,,
234: ಬಾಯಿ,mouth,Body Parts,baayi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/mouth.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/mouth.mp3,,,,,,
235: ಕತ್ತು,neck,Body Parts,katthu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/neck.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/neck.mp3,,,,,,
236: ಹೊಟ್ಟೆ,stomach,Body Parts,hotte,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/stomach.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/stomach.mp3,,,,,,
237: ಬೆನ್ನು,back,Body Parts,bennu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/back.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/back.mp3,,,,,,
238: ಪರ್ವತ,mountain,Nature,parvatha,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/mountain.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/mountain.mp3,,,,,,
239: ನದಿ,river,Nature,nadhi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/river.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/river.mp3,,,,,,
240: ಸರೋವರ,lake,Nature,sarovara,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/lake.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/lake.mp3,,,,,,
241: ಕಲ್ಲು,stone,Nature,kallu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/stone.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/stone.mp3,,,,,,
242: ಎಲೆ,leaf,Nature,else,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/leaf.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/leaf.mp3,,,,,,
243: ಬೇರು,root,Nature,beru,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/root.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/root.mp3,,,,,,
244: ಆಕಾಶ,sky,Nature,aakaasha,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/sky.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/sky.mp3,,,,,,
245: ಮೋಡ,cloud,Nature,moda,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/cloud.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/cloud.mp3,,,,,,
246: ನಕ್ಷತ್ರ,star,Nature,nakshathra,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/star.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/star.mp3,,,,,,
247: ಸೂರ್ಯ,sun,Nature,soorya,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/sun.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/sun.mp3,,,,,,
248: ಮಳೆ,rain,Weather,male,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/rain.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/rain.mp3,,,,,,
249: ಗಾಳಿ,wind,Weather,gaali,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/wind.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/wind.mp3,,,,,,
250: ಮಿಂಚು,lightning,Weather,minchu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/lightning.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/lightning.mp3,,,,,,
251: ಸಿಡಿಲು,thunder,Weather,sidilu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/thunder.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/thunder.mp3,,,,,,
252: ಕಾಮನಬಿಲ್ಲು,rainbow,Weather,kaamanabillu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/rainbow.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/rainbow.mp3,,,,,,
253: ಹಿಮ,snow,Weather,hima,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/snow.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/snow.mp3,,,,,,
254: ಚಳಿ,cold,Weather,chali,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/cold.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/cold.mp3,,,,,,
255: ಬಿಸಿಲು,hot,Weather,bisilu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/hot.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/hot.mp3,,,,,,
256: ಮಂಜು,fog,Weather,manju,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/fog.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/fog.mp3,,,,,,
257: ಬಿರುಗಾಳಿ,storm,Weather,birugaali,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/storm.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/storm.mp3,,,,,,
258: ಸಂತೋಷ,happy,Emotions,santhosha,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/happy.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/happy.mp3,,,,,,
259: ಬೇಸರ,sad,Emotions,besara,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/sad.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/sad.mp3,,,,,,
260: ಕೋಪ,angry,Emotions,kopa,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/angry.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/angry.mp3,,,,,,
261: ಭಯ,scared,Emotions,bhaya,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/scared.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/scared.mp3,,,,,,
262: ಆಶ್ಚರ್ಯ,surprised,Emotions,aashcharya,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/surprised.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/surprised.mp3,,,,,,
263: ನಾಚಿಕೆ,shy,Emotions,naachike,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/shy.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/shy.mp3,,,,,,
264: ಉತ್ಸಾಹ,excited,Emotions,uthsaaha,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/excited.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/excited.mp3,,,,,,
265: ಮಂಪರು,sleepy,Emotions,mamparu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/sleepy.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/sleepy.mp3,,,,,,
266: ಹೆಮ್ಮೆ,proud,Emotions,hemme,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/proud.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/proud.mp3,,,,,,
267: ಅಪ್ಪ,father,People,appa,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/father.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/father.mp3,,,,,,
268: ಅಮ್ಮ,mother,People,amma,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/mother.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/mother.mp3,,,,,,
269: ಸಹೋದರ,brother,People,sahodhara,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/brother.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/brother.mp3,,,,,,
270: ಸಹೋದರಿ,sister,People,sahodhari,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/sister.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/sister.mp3,,,,,,
271: ಅತ್ತೆ,aunt,People,atthe,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/aunt.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/aunt.mp3,,,,,,
272: ಮಾವ,uncle,People,maava,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/uncle.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/uncle.mp3,,,,,,
273: ಶಿಶು,baby,People,shishu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/baby.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/baby.mp3,,,,,,
274: ಮಗು,child,People,magu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/child.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/child.mp3,,,,,,
275: ಗೆಳತಿ,friend,People,gelathi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/friend.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/friend.mp3,,,,,,
276: ಜಿಗಿ,jump,Verbs,jigi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/jump.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/jump.mp3,,,,,,
277: ಹತ್ತು,climb,Verbs,hatthu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/climb.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/climb.mp3,,,,,,
278: ತೊಳೆ,wash,Verbs,thole,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/wash.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/wash.mp3,,,,,,
279: ಗುಡಿಸು,sweep,Verbs,gudisu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/sweep.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/sweep.mp3,,,,,,
280: ಅಡುಗೆ ಮಾಡು,cook,Verbs,aduge maadu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/cook.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/cook.mp3,,,,,,
281: ಮಲಗು,sleep,Verbs,malagu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/sleep.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/sleep.mp3,,,,,,
282: ಎದ್ದೇಳು,wake,Verbs,eddhelu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/wake.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/wake.mp3,,,,,,
283: ಕರೆ ಮಾಡು,call,Verbs,kare maadu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/call.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/call.mp3,,,,,,
284: ಕುಣಿದಾಡು,dance,Verbs,kunidaadu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/dance.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/dance.mp3,,,,,,
285: ತೆರೆ,open,Verbs,there,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/open.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/open.mp3,,,,,,
286: ನಗು,laugh,Verbs,nagu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/laugh.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/laugh.mp3,,,,,,
287: ಕತ್ತರಿಸು,cut,Verbs,kattharisu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/cut.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/cut.mp3,,,,,,
288: ಎಸೆಯುವುದು,throw,Verbs,eseyuvudhu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/throw.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/throw.mp3,,,,,,
289: ಹಿಡಿ,catch,Verbs,hidi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/catch.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/catch.mp3,,,,,,
290: ಸುರಿ,pour,Verbs,suri,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/pour.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/pour.mp3,,,,,,
291: ಹಬ್ಬ,festival,Culture,habba,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/festival.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/festival.mp3,,,,,,
292: ಗುಡಿ,temple,Culture,gudi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/temple.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/temple.mp3,,,,,,
293: ದೀಪ,lamp,Culture,dheepa,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/lamp.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/lamp.mp3,,,,,,
294: ರಂಗೋಲಿ,rangoli,Culture,rangoli,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/rangoli.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/rangoli.mp3,,,,,,
295: ಹೂಮಾಲೆ,garland,Culture,hoomaale,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/garland.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/garland.mp3,,,,,,
296: ಅಗರಬತ್ತಿ,incense,Culture,agarabatthi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/incense.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/incense.mp3,,,,,,
297: ದೇವರು,god,Culture,dhevaru,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/god.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/god.mp3,,,,,,
298: ದೇವತೆ,goddess,Culture,dhevathe,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/goddess.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/goddess.mp3,,,,,,
299: ಪ್ರಾರ್ಥನೆ,prayer,Culture,praarthane,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/prayer.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/prayer.mp3,,,,,,
300: ಕಾಣಿಕೆ,offering,Culture,kaanike,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/offering.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/offering.mp3,,,,,,
301: ಗದ್ದೆ,field,Nature,gaddhe,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/field.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/field.mp3,,,,,,
302: ತೋಟ,farm,Nature,thota,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/farm.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/farm.mp3,,,,,,
303: ಕಾಡು,forest,Nature,kaadu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/forest.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/forest.mp3,,,,,,
304: ಮರುಭೂಮಿ,desert,Nature,marubhoomi,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/desert.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/desert.mp3,,,,,,
305: ಕಡಲತೀರ,beach,Nature,kadalatheera,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/beach.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/beach.mp3,,,,,,
306: ಮರಳು,sand,Nature,maralu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/sand.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/sand.mp3,,,,,,
307: ಮಣ್ಣು,mud,Nature,mannu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/mud.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/mud.mp3,,,,,,
308: ಹುಲ್ಲು,grass,Nature,hullu,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/grass.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/grass.mp3,,,,,,
309: ಜಲಪಾತ,waterfall,Nature,jalapaatha,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/waterfall.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/waterfall.mp3,,,,,,
310: ಸೂರ್ಯೋದಯ,sunrise,Nature,sooryodhaya,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/images/sunrise.png,https://ufmwnqllgqrfkdfahptv.supabase.co/storage/v1/object/public/kannada-assets/audios/sunrise.mp3,,,,,,
````

## File: public/letters_paths/01_ಅ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M150.082 160.303q-13.105 18.476-13.105 43.183 0 49.414 37.382 76.7 37.598 27.285 83.575 27.285 58.007 0 87.441-32.657 29.648-32.656 29.648-71.328 0-29.863-13.535-48.984l-9.023 59.082h-115.8v-31.367h82.714q-29.434-9.883-29.434-37.383 0-14.61 8.809-23.203 8.809-8.809 23.203-8.809 24.492 0 41.035 23.633 16.543 23.418 16.543 68.32 0 60.586-33.515 98.184-33.301 37.383-88.946 37.383-36.308 0-65.312-18.262t-44.043-47.266q-15.04-29.004-15.04-68.535 0-40.176 13.536-66.816t36.738-26.64q14.824 0 23.418 11.6 8.594 11.387 8.594 31.583 0 23.418-9.883 37.597-9.668 14.18-24.922 14.18-13.75 0-20.41-11.172-6.66-11.387-9.668-36.308m206.68-.43q0-12.031-7.735-21.27-7.52-9.238-18.047-9.238-10.312 0-15.898 6.875-5.371 6.875-5.371 15.469 0 13.105 7.52 21.7 7.519 8.593 17.617 8.808 9.668 0 15.683-6.66 6.23-6.66 6.23-15.684m-146.309.43q0-22.13-27.07-22.13-10.957 0-19.551 6.231-8.379 6.23-8.379 18.477 0 22.129 27.5 22.129 13.965 0 20.625-7.95 6.875-7.949 6.875-16.757"/></svg>
````

## File: public/letters_paths/02_ಆ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M356.547 210.79q16.328 20.411 16.328 44.474 0 40.82-33.086 62.949t-75.625 22.129q-61.445 0-96.68-36.953-35.02-37.168-35.02-99.473 0-38.027 13.966-64.453 13.965-26.64 38.672-26.64 14.609 0 23.203 11.386 8.808 11.172 8.808 30.723 0 23.847-9.883 38.457-9.882 14.394-25.351 14.394-27.07 0-30.078-48.984-15.04 11.172-15.04 40.82.216 33.086 16.329 57.793 16.328 24.492 44.472 37.383 28.145 12.676 67.891 12.676 46.836 0 73.262-15.254 26.64-15.47 26.426-43.184 0-19.121-12.032-35.45H241.391v-31.366h86.582q-13.106-15.684-13.106-33.516 0-35.879 33.516-35.879 13.32 0 25.996 11.172t12.676 35.879q0 30.723-30.508 50.918m25.996-49.413q.215-13.535-9.453-21.055-9.668-7.734-23.418-7.52-12.246 0-20.41 8.165t-8.164 16.543q.215 11.816 9.238 20.195 9.238 8.164 25.137 8.379 11.816-.215 19.336-6.66 7.734-6.66 7.734-18.047m-169.727-1.934q0-11.172-7.949-17.187t-19.12-6.016q-15.04 0-22.345 8.379-7.304 8.164-7.304 17.187 0 23.204 27.07 23.204 13.535 0 21.484-7.09 8.164-7.305 8.164-18.477"/></svg>
````

## File: public/letters_paths/03_ಇ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M379.105 307.47q0 32.872-27.07 32.872-9.238 0-17.832-7.52-8.379-7.52-8.379-22.988 0-11.172 9.668-29.863 7.305-13.965 8.809-23.204-20.41 16.329-37.813 16.329-16.113 0-28.574-7.52-12.46-7.734-12.46-22.988 0-9.668 8.378-18.262 8.594-8.809 27.285-8.809 27.07 0 45.547 22.774 19.98-14.395 19.98-39.317 0-24.492-15.683-38.671-15.684-14.395-39.531-14.395-22.559 0-38.242 11.816-15.47 11.817-23.848 35.45-7.52-23.418-21.914-35.02-14.395-11.816-35.664-11.816-28.145 0-41.25 13.75-12.89 13.535-12.89 27.93 0 27.714 34.374 36.738 8.164 2.148 8.164 7.304 0 5.801-5.37 5.801-11.173 0-26.427-13.965-15.039-13.964-15.039-43.183 0-29.434 15.04-48.555 15.253-19.336 42.538-19.336 22.344 0 36.953 15.899 14.61 15.683 21.485 47.05 7.95-31.367 23.633-47.05 15.898-15.899 39.316-15.899 30.078 0 44.688 21.914 14.824 21.7 14.824 51.778 0 33.3-19.766 61.445 6.875 11.387 6.875 27.07 0 14.395-8.379 29.004-4.297 7.734-4.297 11.602 0 10.742 12.676 10.742 15.899 0 15.899-18.906zm-37.812-66.386q-12.031-21.27-36.738-21.27-9.024 0-16.328 4.942-7.305 4.726-7.305 12.46 0 13.106 23.633 13.106 20.195 0 36.738-9.238"/></svg>
````

## File: public/letters_paths/04_ಈ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M376.527 328.74q15.04-5.586 22.559-15.898 7.734-10.313 7.734-25.137 0-21.7-16.328-43.613h-81.426q0 38.242-28.144 67.246-27.93 29.004-70.04 29.004-28.573 0-50.487-12.676-21.915-12.89-35.235-34.375-13.105-21.484-13.105-49.2H74.457v-30.507h41.465q8.379-23.203 24.277-39.531 16.113-16.329 39.746-25.782h-68.32v-29.648h136.64q23.204 0 34.805-9.668 11.602-9.883 11.602-29.434 0-19.98-19.336-32.87h7.734q22.774 16.542 22.774 44.902 0 21.484-14.395 39.101-14.18 17.617-45.332 17.617h-6.23q25.781 9.024 42.11 25.352 16.327 16.328 23.202 39.96h68.75q-17.832-32.655-17.832-47.91 0-17.187 9.668-25.566 9.883-8.379 22.774-8.379 18.046 0 30.078 15.899 12.031 15.683 12.031 36.523 0 21.485-7.734 35.88-7.52 14.394-22.774 21.698 22.559 22.559 28.145 34.375 5.8 11.817 5.8 24.707 0 16.758-10.742 28.145t-23.203 11.387q-15.039 0-23.633-11.602m-86.152-115.156q-4.297-29.004-26.855-47.05-22.344-18.263-52.637-18.263-29.863 0-51.992 17.403-21.914 17.402-28.36 47.91zm88.516 0q22.773 0 35.234-8.594 12.676-8.808 12.676-23.418 0-10.742-7.52-19.98-7.304-9.453-22.988-9.453-13.535 0-21.7 8.164-8.163 7.949-8.378 16.543 0 15.683 12.676 36.738m-88.516 30.508H130.531q6.66 29.433 29.004 46.406t47.48 16.973q31.583 0 55-18.047 23.419-18.047 28.36-45.332m-161.562-16.973"/></svg>
````

## File: public/letters_paths/05_ಉ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M89.926 157.51q-7.52 3.222-13.535 18.261-6.016 14.825-6.23 31.153 0 34.804 26.855 67.675 27.07 32.872 66.172 32.872 24.492 0 38.027-15.04 13.75-15.039 13.75-41.035 0-15.039-4.297-34.375-4.512-19.336-4.512-36.738.215-30.937 15.469-49.2 15.254-18.26 38.242-18.26 32.656 0 49.2 25.35 16.757 25.137 16.757 59.942 0 8.379-.86 17.617-.644 9.239-.644 14.825 0 38.457 11.817 57.792 12.031 19.122 36.093 19.122 29.864 0 49.63-24.493 19.98-24.707 19.98-48.984 0-25.566-15.684-49.2-15.468-23.632-46.62-45.331-13.106-9.024-13.106-16.758 0-9.883 9.668-9.883 22.343 0 46.191 40.606 24.063 40.605 23.848 81.425.215 47.91-21.27 76.7-21.484 28.789-54.57 28.789-26.211 0-39.317-20.41-13.105-20.41-13.105-61.231 0-8.379 1.074-18.906.86-10.313.86-18.906 0-33.301-16.114-52.852-15.898-19.766-39.96-19.766-24.278 0-37.169 16.973-12.675 16.758-12.675 37.168 0 11.816 7.09 35.02 6.874 23.203 6.874 36.093 0 31.797-15.683 49.414-15.469 17.403-44.688 17.403-40.82 0-71.328-45.762-30.293-45.977-30.293-92.168 0-37.168 13.106-63.379t33.73-26.21q22.989 0 33.946 18.69 11.171 18.477 11.171 47.696 0 16.543-7.52 28.574t-22.558 12.031q-16.328 0-27.5-15.683t-11.172-36.524q0-3.437.86-10.097m64.023 10.097q0-11.816-8.594-20.625-8.378-8.808-22.988-8.808-9.883 0-19.55 7.734-9.454 7.734-9.454 22.773 0 8.594 7.52 18.477t22.129 9.883q11.172 0 21.054-7.09 9.883-7.305 9.883-22.344"/></svg>
````

## File: public/letters_paths/06_ಊ_OLD.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M16.02 157.51q-7.52 3.222-13.536 18.26-6.015 14.825-6.23 31.153 0 35.664 25.781 68.105 25.996 32.442 64.668 32.442 22.129 0 38.457-12.247t16.328-38.457q0-10.742-3.437-35.02-3.867-27.5-3.867-38.671 0-27.07 16.113-48.555 16.328-21.699 47.695-21.699 22.988 0 44.903 19.98 21.914 19.981 21.914 60.372 0 11.172-.86 23.847-1.504 8.594-1.504 23.633.215 29.434 16.758 48.125 16.758 18.692 44.688 18.692 23.203 0 38.027-15.899 14.824-16.113 14.824-39.316 0-11.172-3.867-35.235-3.867-24.277-3.867-39.316 0-29.219 17.832-47.05 17.832-17.833 45.117-17.833 26.64 0 46.621 16.113 19.98 16.114 30.723 43.399 10.742 27.07 10.742 64.883 0 51.562-15.254 77.343-15.039 25.782-45.332 25.782-21.27 0-36.094-16.114-14.61-16.328-14.824-40.39 0-20.196 13.106-31.582 13.105-11.602 26.21-11.602 11.602 0 18.907 7.735 7.304 7.52 7.304 18.476 0 21.27-21.484 21.27-18.691 0-18.691-18.907 0-4.296 2.148-9.882 2.148-5.801 2.148-7.52 0-1.504-1.933-1.504-7.734 0-13.75 8.164t-6.23 19.551q0 18.262 12.89 28.36 12.89 9.882 28.36 9.882 29.218 0 43.398-21.055 14.18-21.27 14.18-51.132 0-46.621-25.997-71.114-25.78-24.707-52.851-24.707-32.442 0-45.977 15.254t-13.535 35.45q0 8.808 3.867 34.374 3.868 25.782 3.868 36.954 0 25.996-16.114 48.125-15.898 21.914-45.976 21.914-32.012 0-49.63-24.063-17.616-24.062-17.616-52.851 0-11.172 1.933-27.07 1.504-12.032 1.504-24.278 0-23.848-15.683-43.828t-45.762-19.98q-27.715 0-41.465 15.038-13.75 14.825-13.75 44.473 0 10.742 3.437 32.012 3.438 21.27 3.438 37.597 0 31.582-13.965 47.266-13.75 15.684-41.25 15.684-41.035 0-71.328-44.688-30.293-44.902-30.293-93.242 0-37.168 13.105-63.379t33.731-26.21q22.988 0 33.945 18.69Q83.91 149.99 83.91 179.21q0 16.543-7.52 28.574t-22.558 12.031q-16.328 0-27.5-15.683T15.16 167.607q0-3.437.86-10.097m64.023 10.097q0-11.816-8.594-20.625-8.379-8.808-22.988-8.808-9.883 0-19.55 7.734-9.454 7.734-9.454 22.773 0 8.594 7.52 18.477t22.128 9.883q11.172 0 21.055-7.09 9.883-7.305 9.883-22.344"/></svg>
````

## File: public/letters_paths/06_ಊ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="330" font-family="sans-serif" fill="#000000">ಊ</text>
6: </svg>
````

## File: public/letters_paths/07_ಋ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M324.535 273.74q-2.578 33.3-17.617 50.059-14.824 16.543-41.895 16.543-30.293 0-50.058-22.344t-29.219-67.031q-6.445 44.687-24.922 67.03-18.476 22.345-49.199 22.345-27.715 0-42.969-18.477-15.039-18.476-15.039-39.531 0-14.824 8.38-24.707 8.593-10.098 24.491-10.098 10.313 0 19.551 7.735 9.453 7.734 9.453 22.128 0 15.254-9.023 22.774-9.024 7.305-19.98 7.305-10.098 0-19.981-6.23 11.172 34.804 41.25 34.804 16.328 0 32.87-17.832 16.544-18.047 16.544-64.453 0-51.348-18.477-93.887-18.261-42.54-48.77-42.54-12.03-.214-21.484 9.024-9.238 9.239-11.601 22.774 7.734-5.157 16.543-5.157 12.676 0 20.625 8.38 7.949 8.163 7.949 20.624 0 12.032-8.164 20.625-8.164 8.38-21.484 8.38-12.032-.216-21.055-10.098-8.809-10.098-8.809-23.203 0-25.782 14.61-40.82 14.61-15.04 38.027-15.04 32.441 0 57.363 32.227t33.301 77.773q8.594 45.977 24.277 66.817t42.97 20.84q19.335 0 37.812-17.188 18.691-17.402 18.691-51.133 0-30.937-25.351-62.305-25.137-31.582-63.594-31.582h-18.906v-29.648h65.312q23.203 0 34.805-9.668 11.601-9.883 11.601-29.434 0-19.98-19.336-32.87h7.735q22.773 16.542 22.773 44.902 0 24.921-16.113 40.82-15.899 15.684-43.399 15.898h-18.476q38.242 14.61 57.793 41.895 19.55 27.285 20.625 67.246 11.387 25.137 28.36 37.598 17.187 12.46 39.96 12.46 23.203 0 45.547-19.765t22.344-53.711q0-30.293-19.98-49.2-19.766-19.12-59.512-26.855-26.211-5.156-26.211-15.898 0-12.246 16.113-12.246 29.863 0 62.305 30.078 32.441 29.863 32.441 86.152 0 37.598-18.262 65.957-18.261 28.36-51.777 28.36-44.688 0-71.758-66.602M91.86 169.111q0-8.379-5.8-14.18-5.801-5.8-13.75-5.8-9.454 0-14.61 6.445-5.156 6.23-5.156 13.535 0 6.66 4.727 13.106 4.94 6.23 15.039 6.23 6.875 0 13.105-5.156 6.445-5.156 6.445-14.18m13.536 112.149q0-8.594-6.23-14.395-6.231-5.8-13.75-5.8-10.099 0-15.9 6.874-5.8 6.875-5.8 14.395 0 9.453 6.66 15.039t15.04 5.8q8.378 0 14.179-6.445 5.8-6.66 5.8-15.468"/></svg>
````

## File: public/letters_paths/08_ಎ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M253.852 268.799q-5.372 35.879-21.055 53.71-15.469 17.833-41.465 17.833-30.723 0-46.621-21.27-15.684-21.27-15.684-48.77 0-29.003 13.535-41.894t29.434-12.89q12.89 0 24.492 9.238 11.817 9.023 11.817 24.707 0 12.46-9.024 20.625-8.808 7.949-21.484 7.949v-3.438q10.098-.859 15.254-5.8 5.156-5.157 5.156-14.61 0-10.527-8.594-17.832-8.593-7.304-20.41-7.304-15.898 0-25.566 9.238-9.668 9.023-9.883 22.773 0 20.625 15.469 33.516t38.886 12.89q26.426 0 42.97-13.964 16.757-14.18 23.632-42.54 7.95 28.36 21.484 42.54 13.75 13.965 32.871 13.965 28.36 0 42.97-18.907 14.609-18.906 14.609-42.539 0-33.515-14.395-58.437-14.395-25.137-38.457-38.028t-57.578-12.89q-35.45 0-47.05-2.363-11.388-2.364-11.388-9.668 0-11.817 20.84-11.817 61.66 0 111.29 42.11 49.843 41.894 49.843 109.57 0 30.508-14.824 53.281-14.824 22.559-45.762 22.559-28.144 0-44.473-17.832-16.328-17.832-20.84-53.711"/></svg>
````

## File: public/letters_paths/09_ಏ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M253.852 268.799q-5.372 35.879-21.055 53.71-15.469 17.833-41.465 17.833-30.723 0-46.621-21.27-15.684-21.27-15.684-48.77 0-29.003 13.535-41.894t29.434-12.89q12.89 0 24.492 9.238 11.817 9.023 11.817 24.707 0 12.46-9.024 20.625-8.808 7.949-21.484 7.949v-3.438q10.098-.859 15.254-5.8 5.156-5.157 5.156-14.61 0-10.527-8.594-17.832-8.593-7.304-20.41-7.304-15.898 0-25.566 9.238-9.668 9.023-9.883 22.773 0 20.625 15.469 33.516t38.886 12.89q26.426 0 42.97-13.964 16.757-14.18 23.632-42.54 7.95 28.36 21.914 42.54 13.965 13.965 33.945 13.965 28.79 0 43.184-17.618t14.394-53.066q0-55.86-37.597-90.234-37.383-34.375-84.434-42.754 3.867 12.246 3.867 21.699 0 16.543-9.882 29.219-9.883 12.46-31.797 12.46-22.989-.214-36.524-17.831-13.32-17.832-13.32-45.547 0-7.305.43-11.172h3.867q0 25.996 12.031 38.887 12.246 12.89 36.523 12.89 16.329 0 24.493-6.875 8.379-7.09 8.379-21.27 0-10.097-4.297-17.402 51.562 3.223 95.605 44.903 44.258 41.68 44.258 111.504 0 42.539-15.254 63.808-15.039 21.27-45.332 21.27-28.144 0-44.473-17.832-16.328-17.832-20.84-53.711"/></svg>
````

## File: public/letters_paths/10_ಐ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M257.182 268.799q-5.371 35.879-21.055 53.71-15.469 17.833-41.465 17.833-30.723 0-46.621-21.27-15.684-21.27-15.684-48.77 0-26.425 12.461-40.605t30.508-14.18q12.89 0 24.492 9.239 11.817 9.023 11.817 24.707 0 12.46-9.024 20.625-8.808 7.949-21.484 7.949v-3.438q10.098-.859 15.254-5.8 5.156-5.157 5.156-14.61 0-10.527-8.594-17.832-8.593-7.304-20.41-7.304-17.832 0-26.64 10.097-8.809 9.883-8.809 21.914 0 22.774 16.543 34.59t37.812 11.817q26.426 0 42.97-13.965 16.757-14.18 23.632-42.54 7.09 28.36 21.7 42.54 14.609 13.965 36.523 13.965 30.078 0 45.117-17.618 15.254-17.617 15.254-53.066 0-33.73-20.41-66.172t-58.868-32.441q-24.707 0-37.168 15.254-12.246 15.254-12.246 45.546-12.46-30.292-30.293-45.546t-40.82-15.254q-20.195 0-30.293 7.52-9.883 7.304-9.883 21.913 0 5.801 3.867 15.469l-4.296 1.074q-5.801-13.965-5.801-26.64 0-22.344 11.172-33.516t33.73-11.172q21.485 0 38.457 16.328 16.973 16.114 29.434 48.555 0-29.219 14.394-47.05 14.395-17.833 38.672-17.833 35.88 0 60.586 35.879 24.707 35.879 24.707 89.16 0 51.348-14.824 76.914t-44.258 25.567q-28.144 0-44.473-17.832-16.328-17.832-20.84-53.711"/></svg>
````

## File: public/letters_paths/11_ಒ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M262.23 264.932q-7.52 37.812-23.847 56.718-16.113 18.692-41.035 18.692-28.79 0-44.258-18.692-15.254-18.906-15.254-41.25 0-16.543 9.238-32.011 9.453-15.684 28.145-30.508 14.18-11.172 21.27-22.989 7.304-11.816 7.304-24.277 0-14.824-9.883-23.633-9.668-9.023-20.625-8.808-16.543 0-25.781 8.379-9.024 8.378-9.024 21.054 0 9.883 4.942 16.114 5.156 6.015 15.254 8.593l-1.504 2.793q-15.899-2.578-23.848-12.246-7.949-9.883-7.949-26.855 0-20.41 12.46-31.797 12.677-11.387 29.65-11.387 19.765 0 33.945 11.172 14.394 11.172 14.394 36.738 0 17.617-9.238 31.153-9.023 13.32-29.863 30.507-11.387 9.239-17.188 19.122-5.586 9.882-5.586 20.41 0 17.402 10.742 31.582 10.743 13.965 35.664 13.965 23.204 0 39.961-19.98 16.973-20.196 21.914-45.763 9.239 32.871 25.567 49.414 16.328 16.329 39.746 16.329 22.344 0 36.953-12.032 14.61-12.246 14.395-32.011 0-14.18-11.172-22.989-11.172-8.808-25.137-9.453v-4.297q21.914 1.29 32.871 13.965 11.172 12.676 11.172 36.738 0 32.657-18.047 47.91-18.047 15.04-39.96 15.04-26.427 0-42.97-18.692-16.543-18.906-23.418-56.718"/></svg>
````

## File: public/letters_paths/12_ಓ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M262.23 264.932q-7.52 37.812-23.847 56.718-16.113 18.692-41.035 18.692-28.79 0-44.258-18.692-15.254-18.906-15.254-41.25 0-16.543 9.238-32.011 9.453-15.684 28.145-30.508 14.18-11.172 21.27-22.989 7.304-11.816 7.304-24.277 0-14.824-9.883-23.633-9.668-9.023-20.625-8.808-16.543 0-25.781 8.379-9.024 8.378-9.024 21.054 0 9.883 4.942 16.114 5.156 6.015 15.254 8.593l-1.504 2.793q-15.899-2.578-23.848-12.246-7.949-9.883-7.949-26.855 0-19.551 12.46-31.367 12.677-11.817 33.087-11.817-21.484-10.527-32.227-21.27-10.527-10.956-10.527-22.128 0-13.965 13.32-23.203 13.535-9.454 32.657-9.668v2.793q-13.106 7.52-19.551 16.543-6.446 9.023-6.446 19.335 0 11.387 7.305 21.055 7.52 9.668 22.559 17.617 18.906 2.793 28.36 14.61 9.452 11.601 9.452 32.226 0 17.617-9.238 31.153-9.024 13.32-29.863 30.507-11.387 9.239-17.188 19.122-5.586 9.882-5.586 20.41 0 17.402 10.742 31.582 10.743 13.965 35.664 13.965 23.204 0 39.961-19.98 16.973-20.196 21.914-45.763 9.239 32.871 25.567 49.414 16.328 16.329 39.746 16.329 22.344 0 36.953-12.032 14.61-12.246 14.395-32.011 0-14.18-11.172-22.989-11.172-8.808-25.137-9.453v-4.297q21.914 1.29 32.871 13.965 11.172 12.676 11.172 36.738 0 32.657-18.047 47.91-18.047 15.04-39.96 15.04-26.427 0-42.97-18.692-16.543-18.906-23.418-56.718"/></svg>
````

## File: public/letters_paths/13_ಔ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M204.438 64.053q9.667 18.476 9.667 27.5 0 10.742-6.445 16.113-6.23 5.156-18.691 5.156h-58.223V92.197h59.512q7.304 0 10.957-2.793 3.652-3.008 3.652-8.808 0-6.016-6.23-16.543h-72.188v-27.07H297.25q45.117 0 67.031 25.78 22.13 25.567 22.13 59.297 0 39.746-17.403 59.942-17.188 19.98-41.68 19.98-25.996 0-39.746-16.972-13.535-17.188-13.535-37.813.215-19.55 11.172-33.086 10.957-13.75 28.144-13.75 11.817 0 19.121 7.735 7.52 7.52 7.52 17.402 0 10.957-5.156 16.328-4.942 5.371-14.825 5.371-7.734 0-13.32-5.156-5.586-5.371-5.586-12.246 0-9.024 7.09-14.395 7.09-5.37 7.09-6.875 0-3.867-3.867-3.867-13.32 0-22.774 12.031-9.238 12.032-9.238 26.211 0 12.031 10.957 24.278 10.957 12.03 34.59 12.03 25.351 0 41.25-15.468 15.898-15.469 15.898-40.176 0-26.855-17.402-43.183-17.188-16.543-40.82-16.328zm58.007 200.879q-7.52 37.812-23.847 56.718-16.114 18.692-41.035 18.692-29.004 0-44.258-18.262-15.254-18.477-15.254-40.176 0-16.328 9.238-32.012 9.238-15.683 27.93-30.507 13.105-10.313 19.55-21.27 6.66-11.172 6.66-22.773 0-16.114-9.023-23.633-9.023-7.735-18.476-7.735-17.832 0-26.426 9.024t-8.594 20.41q0 10.098 4.942 16.543 5.156 6.23 15.468 8.594l-1.504 3.008q-15.898-2.793-23.847-12.676t-7.95-27.07q0-21.055 13.32-32.012 13.536-11.172 30.079-11.172 22.773 0 33.945 14.61 11.172 14.394 11.172 32.44 0 16.544-8.164 28.575-7.95 12.031-29.648 29.434-11.387 9.238-17.188 19.335-5.586 9.883-5.586 20.41.215 19.766 12.031 32.012 12.032 12.032 34.375 12.032 22.13 0 39.317-19.122 17.402-19.335 22.773-46.62 9.239 32.87 25.567 49.413 16.328 16.329 39.746 16.329 19.765 0 35.449-11.172 15.898-11.172 15.898-32.871 0-13.106-10.742-22.344-10.527-9.238-25.566-10.098v-4.297q21.914 1.29 32.871 13.965 11.172 12.676 11.172 36.738 0 28.575-16.328 45.762t-41.895 17.188q-26.426 0-42.969-18.692-16.543-18.906-23.203-56.718"/></svg>
````

## File: public/letters_paths/14_ಅಂ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M53.188 160.303q-13.106 18.476-13.106 43.183 0 49.414 37.383 76.7 37.598 27.285 83.574 27.285 58.008 0 87.441-32.657 29.649-32.656 29.649-71.328 0-29.863-13.535-48.984l-9.024 59.082h-115.8v-31.367h82.714q-29.433-9.883-29.433-37.383 0-14.61 8.808-23.203 8.809-8.809 23.204-8.809 24.492 0 41.035 23.633 16.543 23.418 16.543 68.32 0 60.586-33.516 98.184-33.3 37.383-88.945 37.383-36.309 0-65.313-18.262t-44.043-47.266-15.039-68.535q0-40.176 13.535-66.816t36.739-26.64q14.824 0 23.418 11.6 8.593 11.387 8.593 31.583 0 23.418-9.883 37.597-9.667 14.18-24.921 14.18-13.75 0-20.41-11.172-6.66-11.387-9.669-36.308m206.68-.43q0-12.031-7.735-21.27-7.52-9.238-18.047-9.238-10.313 0-15.899 6.875-5.37 6.875-5.37 15.469 0 13.105 7.519 21.7 7.52 8.593 17.617 8.808 9.668 0 15.684-6.66 6.23-6.66 6.23-15.684m-146.31.43q0-22.13-27.07-22.13-10.957 0-19.55 6.231-8.38 6.23-8.38 18.477 0 22.129 27.5 22.129 13.965 0 20.626-7.95 6.875-7.949 6.875-16.757m362.872 74.55q0 51.133-21.485 78.418-21.484 27.07-54.57 27.07-26.855 0-51.992-23.202-24.922-23.204-24.922-81.211 0-46.622 21.7-74.336 21.913-27.93 54.784-27.93 19.98 0 37.383 11.172 17.617 10.957 28.36 33.515 10.742 22.56 10.742 56.504m-4.512 3.008q0-32.656-19.766-51.562-19.55-19.121-48.984-19.121-35.664 0-55.43 18.691-19.765 18.477-19.98 50.918 0 32.012 20.41 51.348 20.625 19.336 51.133 19.336 26.64 0 49.629-16.543 22.988-16.758 22.988-53.067"/></svg>
````

## File: public/letters_paths/15_ಅಃ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M94.867 160.303q-13.105 18.476-13.105 43.183 0 49.414 37.383 76.7 37.597 27.285 83.574 27.285 58.008 0 87.441-32.657 29.649-32.656 29.649-71.328 0-29.863-13.536-48.984l-9.023 59.082h-115.8v-31.367h82.714q-29.434-9.883-29.434-37.383 0-14.61 8.81-23.203 8.808-8.809 23.202-8.809 24.492 0 41.035 23.633 16.543 23.418 16.543 68.32 0 60.586-33.515 98.184-33.301 37.383-88.946 37.383-36.308 0-65.312-18.262t-44.043-47.266-15.04-68.535q0-40.176 13.536-66.816t36.738-26.64q14.825 0 23.418 11.6 8.594 11.387 8.594 31.583 0 23.418-9.883 37.597-9.668 14.18-24.922 14.18-13.75 0-20.41-11.172-6.66-11.387-9.668-36.308m206.68-.43q0-12.031-7.735-21.27-7.519-9.238-18.046-9.238-10.313 0-15.899 6.875-5.37 6.875-5.37 15.469 0 13.105 7.519 21.7 7.52 8.593 17.617 8.808 9.668 0 15.683-6.66 6.23-6.66 6.23-15.684m-146.309.43q0-22.13-27.07-22.13-10.957 0-19.55 6.231-8.38 6.23-8.38 18.477 0 22.129 27.5 22.129 13.965 0 20.625-7.95 6.875-7.949 6.875-16.757m279.512 17.402q0 18.691-9.453 32.012-9.453 13.105-25.352 13.105-16.972 0-25.996-13.32-8.808-13.32-8.808-31.153 0-18.046 8.808-30.937 8.809-13.106 26.856-13.106 16.972 0 25.351 12.891 8.594 12.676 8.594 30.508m-3.867 1.504q0-12.461-8.594-21.485t-21.914-9.023q-13.75 0-22.559 8.379-8.808 8.379-8.808 22.129 0 12.031 9.023 19.98 9.024 7.735 21.914 7.735 14.395 0 22.559-9.239 8.379-9.238 8.379-18.476m3.867 119.668q0 17.402-9.883 29.433-9.668 12.032-25.351 12.032-16.114 0-25.352-13.32-9.023-13.536-9.023-31.153 0-22.988 10.527-33.73 10.742-10.743 23.848-10.743 13.32 0 24.277 10.528 10.957 10.312 10.957 36.953m-3.867-1.934q0-13.965-8.809-21.699-8.808-7.95-22.129-7.95-13.965 0-22.558 8.38-8.38 8.379-8.38 19.765 0 12.676 8.595 20.84 8.808 8.164 21.914 8.164 10.742 0 21.054-7.304 10.313-7.305 10.313-20.196"/></svg>
````

## File: public/letters_paths/16_ಕ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M256.967 148.271q9.238 6.875 9.238 15.899 0 9.238-8.809 15.039h78.418v30.508h-59.511q22.558 8.593 33.73 24.492 11.387 15.683 11.387 38.887 0 28.359-18.047 47.91-17.832 19.336-46.836 19.336-32.871 0-49.844-19.98-16.972-20.196-16.972-42.325 0-26.426 11.386-43.398 11.602-17.188 34.59-24.922h-59.941v-30.508h61.875q7.305 0 13.105-4.727 5.801-4.941 5.801-11.172 0-8.808-7.305-15.039h-73.476v-29.648H279.31q23.203 0 34.804-9.668 11.602-9.883 11.602-29.434 0-19.98-19.336-32.87h7.734q22.774 16.542 22.774 44.902 0 25.136-16.114 41.035-15.898 15.683-43.398 15.683zm45.976 112.793q0-21.914-13.964-36.738-13.965-15.039-35.45-15.039-21.699 0-34.375 16.113-12.46 15.899-12.46 34.16 0 16.543 12.245 32.227 12.247 15.684 36.524 15.684 20.195 0 33.73-13.75 13.75-13.75 13.75-32.657"/></svg>
````

## File: public/letters_paths/17_ಖ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M238.705 286.63q-16.543 26.856-36.953 40.391-20.41 13.32-44.473 13.32-25.351 0-41.894-15.683t-16.543-27.285q0-12.246 18.476-30.723 18.692-18.691 56.934-18.691 26.64 0 57.578 18.906 21.914-25.566 21.914-55.644 0-37.813-18.906-55.43t-42.54-17.617q-15.683 0-27.07 8.164-11.171 8.164-11.171 21.27 0 11.171 7.52 18.476 7.519 7.09 13.75 7.09 1.933 0 1.933-2.364 0-.214-2.793-4.511-2.578-4.297-2.578-8.594 0-7.734 4.082-11.602 4.297-3.867 12.89-3.867 7.95 0 11.817 4.727 4.082 4.511 4.082 13.75 0 9.238-6.23 13.75-6.016 4.511-18.048 4.511-15.253 0-24.707-12.89-9.453-13.106-9.453-27.285 0-20.196 12.246-33.086 12.461-12.89 31.153-12.89 29.433 0 48.554 31.581 19.336 31.367 19.336 72.188 0 27.07-12.675 59.941 18.261 15.469 35.234 23.203 16.973 7.735 32.441 7.735 35.235 0 57.149-31.582 21.914-31.797 21.914-70.47 0-44.042-33.086-82.714-32.871-38.887-63.379-38.887-7.52 0-12.46 4.082-5.587 4.727-9.24 4.727-5.585 0-8.378-2.793t-2.793-8.38q0-7.089 7.52-12.46t19.55-5.371q41.035 0 75.41 51.777 34.59 51.563 34.59 112.149 0 58.652-24.277 85.722t-54.57 27.07q-19.336 0-33.516-8.808-14.18-9.023-48.34-44.902M226.03 275.46q-12.675-11.602-27.5-17.403t-31.582-5.8q-20.625 0-39.316 12.246-18.477 12.246-18.692 24.062 0 9.239 12.891 16.758 13.106 7.52 30.293 7.52 21.27 0 39.746-9.239 18.477-9.453 34.16-28.144"/></svg>
````

## File: public/letters_paths/18_ಗ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M353.002 340.342h-29.434v-79.278q0-45.976-19.12-79.277-18.907-33.516-47.266-33.516-30.938-.215-49.844 38.243-18.692 38.242-18.906 90.02v63.808h-29.434v-44.473q0-46.621 18.477-87.012 18.476-40.39 58.437-60.586h-76.914v-29.648h136.426q23.203 0 34.805-9.668 11.601-9.883 11.601-29.434 0-19.98-19.336-32.87h7.735q22.773 16.542 22.773 44.902 0 24.921-15.898 40.82-15.899 15.898-43.614 15.898h-16.543q34.805 15.47 55.43 53.282 20.84 37.812 20.625 80.78z"/></svg>
````

## File: public/letters_paths/19_ಘ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M106.361 148.271v-29.648H295.64q23.203 0 34.804-9.668 11.602-9.883 11.602-29.434 0-19.98-19.336-32.87h7.734q22.774 16.542 22.774 44.902 0 25.136-16.113 41.035-15.899 15.683-43.399 15.683zm238.047 67.246q7.735 34.805 7.735 58.008 0 31.153-16.543 48.985-16.329 17.832-42.325 17.832-27.93 0-44.043-17.832t-20.41-53.711q-5.37 35.879-21.054 53.71-15.47 17.833-41.465 17.833-27.5 0-44.903-19.336-17.402-19.551-17.402-50.703 0-26.211 12.461-40.391 12.46-14.395 30.508-14.395 14.394 0 25.351 9.883t10.957 24.063q0 12.676-9.238 20.625-9.023 7.949-21.27 7.949v-3.438q10.098-.859 15.254-5.8 5.157-5.157 5.157-14.61 0-11.816-9.239-18.476-9.238-6.66-19.765-6.66-17.832 0-26.64 10.097-8.81 9.883-8.81 21.914 0 22.774 16.544 34.59 16.543 11.817 37.812 11.817 26.426 0 42.969-13.965 16.758-14.18 23.633-42.54 9.238 32.227 22.558 44.473 13.32 12.032 35.235 12.032 24.492 0 41.68-15.47 17.187-15.683 17.187-36.308 0-18.691-15.899-42.969-13.964-21.484-13.964-30.078 0-11.172 10.097-11.172 5.801 0 9.668 13.106 6.445 21.27 13.535 29.863 7.305 8.38 21.914 8.38 17.188 0 25.782-11.388 8.593-11.386 8.593-25.996 0-17.187-17.617-37.168-15.469-17.832-15.469-26.21 0-6.66 3.868-6.66 7.949 0 21.054 27.5 13.32 27.284 13.32 56.718 0 18.691-6.445 32.441-6.445 13.536-18.691 13.536-8.164 0-14.18-3.868-6.015-4.082-27.5-26.21m-94.746-30.507q0 7.304-5.371 13.964-5.371 6.446-15.039 6.446-9.453 0-14.824-6.446-5.371-6.66-5.371-13.964 0-5.801 2.793-10.313t7.304-7.09q4.512-2.793 10.098-2.793 5.8 0 10.312 2.793 4.727 2.578 7.305 7.09 2.793 4.512 2.793 10.313m-1.074 207.109q0 8.809-5.586 14.395-5.371 5.8-14.18 5.8-10.312 0-15.468-5.586-4.942-5.586-4.942-16.543 0-21.27 20.41-74.98 19.766 53.281 19.766 76.914"/></svg>
````

## File: public/letters_paths/20_ಙ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M260.62 264.932q-7.52 37.812-23.849 56.718-16.113 18.692-41.035 18.692-28.789 0-44.257-18.692-15.254-18.906-15.254-41.25 0-16.543 9.238-32.011 9.453-15.684 28.144-30.508 14.18-11.172 21.27-22.989 7.305-11.816 7.305-24.277 0-14.824-9.883-23.633-9.668-9.023-20.625-8.808-16.543 0-25.781 8.379-9.024 8.378-9.024 21.054 0 9.883 4.942 16.114 5.156 6.015 15.253 8.593l-1.503 2.793q-15.899-2.578-23.848-12.246-7.95-9.883-7.95-26.855 0-20.41 12.462-31.797 12.675-11.387 29.648-11.387 19.766 0 33.945 11.172 14.395 11.172 14.395 36.738 0 8.594-1.934 15.04 23.203-31.368 47.48-47.051 24.278-15.899 49.845-15.899 33.3 0 51.992 15.684 18.691 15.468 18.691 44.902 0 18.477-16.973 31.367l-3.867-2.793q7.735-8.593 7.735-17.402 0-21.7-19.766-33.945-19.766-12.461-47.05-12.461-21.915 0-40.821 7.949-18.691 7.95-34.16 23.848-19.98 25.78-50.274 52.421-11.386 9.239-17.187 19.122-5.586 9.882-5.586 20.41 0 17.402 10.742 31.582 10.742 13.965 35.664 13.965 23.203 0 39.961-19.98 16.973-20.196 21.914-45.763 9.238 32.871 25.567 49.414 16.328 16.329 39.746 16.329 22.343 0 36.953-12.032 14.61-12.246 14.394-32.011 0-14.18-11.172-22.989-11.171-8.808-25.136-9.453v-4.297q21.914 1.29 32.87 13.965 11.173 12.676 11.173 36.738 0 32.657-18.047 47.91-18.047 15.04-39.961 15.04-26.426 0-42.969-18.692-16.543-18.906-23.418-56.718m27.714-73.047q0 8.379-6.016 14.394-6.015 5.8-14.394 5.8-7.95 0-13.965-6.015-5.8-6.015-5.8-14.18 0-9.667 6.445-15.038t13.32-5.372q7.305 0 13.75 5.372 6.66 5.37 6.66 15.039"/></svg>
````

## File: public/letters_paths/21_ಚ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M384.477 210.146h-47.48q23.417 10.743 35.233 27.93 11.817 17.188 11.817 40.82 0 25.352-16.758 43.399-16.543 18.047-41.894 18.047-26.426 0-42.97-18.692-16.542-18.906-23.417-56.719-7.52 37.813-23.848 56.72-16.113 18.69-41.035 18.69-28.79 0-44.258-18.69-15.254-18.907-15.254-41.25 0-16.544 9.239-32.012 9.453-15.684 28.144-30.508 14.18-11.172 21.27-22.989 7.304-11.816 7.304-24.277 0-14.824-9.883-23.633-9.667-9.023-20.625-8.808-16.542 0-25.78 8.379-9.024 8.378-9.024 21.054 0 9.883 4.941 16.114 5.156 6.015 15.254 8.593l-1.504 2.793q-15.898-2.578-23.847-12.246-7.95-9.883-7.95-26.855 0-20.41 12.461-31.797 12.676-11.387 29.649-11.387 19.765 0 33.945 11.172 14.395 11.172 14.395 36.738 0 17.617-9.239 31.153-9.023 13.32-29.863 30.507-11.387 9.239-17.188 19.122-5.585 9.882-5.585 20.41 0 17.402 10.742 31.582 10.742 13.965 35.664 13.965 23.203 0 39.96-19.98 16.973-20.196 21.915-45.763 9.238 32.871 25.566 49.414 16.328 16.329 39.746 16.329 18.907 0 34.16-10.528 15.254-10.527 15.254-31.152 0-24.707-21.27-40.176-21.054-15.469-44.042-15.469H275.55v-29.863h56.504q10.742 0 16.113-4.082 5.371-4.297 5.371-12.89 0-9.669-10.312-16.544-4.297 1.504-15.899 1.504H275.55v-29.648h50.703q23.203 0 34.805-9.668 11.816-9.883 11.816-29.434 0-9.882-4.941-18.047-4.727-8.378-14.395-14.824h7.734q11.387 8.38 16.973 19.551 5.8 11.172 5.8 25.352 0 17.187-10.097 32.441-10.097 15.04-24.922 20.84 15.04 11.172 15.04 20.41 0 8.594-11.172 15.04h31.582z"/></svg>
````

## File: public/letters_paths/22_ಛ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M255.57 265.361q-7.52 33.516-23.847 54.356-16.114 20.625-35.235 20.625-29.863 0-47.695-35.02-17.617-35.02-17.617-87.441 0-49.2 14.824-77.13 15.04-27.929 40.39-27.929 18.692 0 28.145 13.75t9.453 41.035q0 22.13-9.238 34.805t-24.492 12.676-24.492-13.106q-9.024-13.32-9.024-30.508 0-11.171 1.934-18.906-11.602 9.883-17.403 25.567-5.8 15.683-5.8 37.382 0 36.094 17.187 64.024t45.762 27.93q21.055 0 35.234-15.04 14.395-15.253 21.914-45.546 7.305 30.293 22.559 45.547 15.254 15.039 38.457 15.039 20.41 0 35.664-17.832 15.469-17.833 15.469-45.977 0-23.203-6.446-40.82-6.445-17.832-19.335-30.078-25.567-24.493-49.63-24.493H256v-29.648h65.313q23.203 0 34.804-9.668 11.602-9.883 11.602-29.434 0-19.98-19.336-32.87h7.734q22.774 16.542 22.774 44.902 0 21.484-14.18 39.101t-45.332 17.617h-4.727q33.086 16.758 49.63 43.184 16.542 26.426 16.542 62.305 0 31.582-18.047 59.082t-45.761 27.5q-21.27 0-37.813-21.055-16.328-21.27-23.633-53.926m-35.879-100.117q0-11.602-7.52-19.336-7.304-7.734-19.98-7.734-15.683 0-23.418 6.875t-7.734 20.625q.215 10.957 8.164 18.691 8.164 7.734 19.98 7.95 30.508 0 30.508-27.071m55.645 226.875q0 7.734-4.941 13.965-4.942 6.23-14.825 6.23-10.312 0-15.468-5.586-4.942-5.586-4.942-16.543 0-21.27 20.41-74.98 19.766 53.281 19.766 76.914"/></svg>
````

## File: public/letters_paths/23_ಜ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M262.23 264.932q-7.52 37.812-23.847 56.718-16.113 18.692-41.035 18.692-28.79 0-44.258-18.692-15.254-18.906-15.254-41.25 0-16.543 9.238-32.011 9.453-15.684 28.145-30.508 14.18-11.172 21.27-22.989 7.304-11.816 7.304-24.277 0-14.824-9.883-23.633-9.668-9.023-20.625-8.808-16.543 0-25.781 8.379-9.024 8.378-9.024 21.054 0 9.883 4.942 16.114 5.156 6.015 15.254 8.593l-1.504 2.793q-15.899-2.578-23.848-12.246-7.949-9.883-7.949-26.855 0-20.41 12.46-31.797 12.677-11.387 29.65-11.387 16.542 0 27.5 6.445 11.171 6.446 16.542 19.336 16.114 15.684 35.235 23.633 19.336 7.735 41.68 7.735 25.136 0 47.05-13.106 22.13-13.105 22.13-33.3 0-5.587-1.505-9.239h4.512q4.726 11.172 4.726 21.27 0 24.921-20.41 42.968-20.195 18.047-47.265 18.047-23.203 0-42.325-11.816-18.906-11.817-41.035-38.028 1.504 6.66 1.504 13.965 0 17.617-9.238 31.153-9.023 13.32-29.863 30.507-11.387 9.239-17.188 19.122-5.586 9.882-5.586 20.41 0 17.402 10.742 31.582 10.743 13.965 35.664 13.965 23.204 0 39.961-19.98 16.973-20.196 21.914-45.763 9.239 32.871 25.567 49.414 16.328 16.329 39.746 16.329 22.344 0 36.953-12.032 14.61-12.246 14.395-32.011 0-14.18-11.172-22.989-11.172-8.808-25.137-9.453v-4.297q21.914 1.29 32.871 13.965 11.172 12.676 11.172 36.738 0 32.657-18.047 47.91-18.047 15.04-39.96 15.04-26.427 0-42.97-18.692-16.543-18.906-23.418-56.718"/></svg>
````

## File: public/letters_paths/24_ಝ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M356.117 271.592q-4.941 32.011-23.418 50.488-18.262 18.262-43.398 18.262-44.258 0-71.543-69.825-9.238 31.797-35.664 50.918-26.426 18.907-61.875 18.907-34.375 0-66.387-25.782-31.797-25.78-31.797-72.402 0-31.797 16.758-55.215 16.758-23.633 50.488-38.672H22.035v-29.648h142.227q23.203 0 34.804-9.668 11.602-9.883 11.602-29.434 0-9.882-4.941-18.047Q201 53.096 191.332 46.65h7.734q11.387 8.38 16.973 19.551 5.8 11.172 5.8 25.352 0 25.136-15.898 41.035-15.683 15.683-43.613 15.683h-7.734q33.515 14.18 50.273 37.168 16.973 22.989 16.973 54.785 0 9.668-1.504 18.907 11.387 24.277 28.144 36.308 16.758 12.032 38.887 12.032 22.344 0 43.613-19.122 21.27-19.12 21.27-55 0-29.003-18.477-47.05-18.476-18.262-55.43-25.567-16.327-3.008-24.491-7.52-7.95-4.511-7.95-10.312 0-5.156 4.512-7.734 4.512-2.793 13.75-2.793 22.129 0 44.043 14.394 22.129 14.18 35.664 40.606 13.535 26.21 13.535 62.95v7.519q11.387 24.922 27.715 37.382 16.543 12.247 38.242 12.247 29.864 0 47.696-23.418 17.832-23.633 17.832-50.059 0-30.293-19.98-49.2-19.766-19.12-59.298-26.855-13.105-2.578-19.765-6.445-6.446-4.082-6.446-9.453 0-6.016 3.868-9.024 4.082-3.222 12.246-3.222 28.789 0 61.66 29.219 33.086 29.218 33.086 87.011 0 38.028-17.617 66.172-17.403 28.145-50.274 28.145-43.398 0-70.254-68.75m-152.539-47.266q0-36.094-25.566-56.074-25.567-19.98-55.86-19.98-39.96 0-61.015 25.136-20.84 24.922-20.84 53.711.215 32.871 23.633 56.719 23.633 23.633 56.718 23.633 30.508 0 56.72-20.84 26.21-20.84 26.21-62.305m174.883 167.793q0 7.734-4.941 13.965-4.942 6.23-14.825 6.23-10.312 0-15.468-5.586-4.942-5.586-4.942-16.543 0-21.27 20.41-74.98 19.766 53.281 19.766 76.914"/></svg>
````

## File: public/letters_paths/25_ಞ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M296.82 250.967q5.801 9.238 5.801 21.27 0 12.46-7.305 27.07-5.156 10.527-5.156 18.261 0 5.586 3.223 8.38 3.437 2.792 10.312 2.792 7.95 0 12.89-4.297 5.157-4.297 7.306-13.105h3.437q-1.504 14.61-8.379 21.914-6.66 7.09-18.691 7.09-13.32 0-21.7-7.305-8.163-7.52-8.378-20.195 0-12.461 11.601-33.516 6.875-12.031 6.875-20.195-19.98 14.394-46.406 14.394-15.254 0-25.781-8.164-10.528-8.164-10.528-20.41 0-9.453 8.594-18.691 8.809-9.239 29.004-9.239 15.898 0 27.715 5.801 12.031 5.8 19.766 17.402 23.203-11.386 23.203-39.746 0-18.906-13.965-35.449-13.965-16.758-42.11-16.758-25.351 0-42.109 11.172-16.758 10.957-25.137 32.871-7.09-21.914-22.988-32.87-15.898-11.173-40.39-11.173-20.84 0-37.813 10.743t-16.973 29.863q0 14.394 8.164 23.847 8.164 9.239 24.707 13.536 12.246 3.007 12.246 7.09 0 5.8-6.445 5.8-11.601 0-27.285-15.254-15.684-15.468-15.684-45.117 0-23.848 15.04-44.902t42.968-21.055q25.567 0 41.25 15.899 15.899 15.898 22.13 47.695 9.023-31.797 25.566-47.695 16.757-15.899 40.82-15.899 25.781 0 42.969 18.477 17.187 18.476 20.41 45.976 7.09-32.226 23.633-48.34 16.757-16.113 43.183-16.113 25.137 0 41.035 20.195 16.114 20.196 16.114 49.2 0 23.418-14.825 39.96-14.824 16.544-30.722 16.544-4.942 0-4.942-4.297 0-4.512 2.364-6.016 2.363-1.719 12.675-4.082 12.461-3.008 21.7-12.676 9.453-9.883 9.238-21.27 0-20.624-16.543-31.366-16.328-10.743-39.531-10.743-26.211 0-41.465 12.032-15.254 11.816-23.418 45.976-7.52 32.442-21.27 44.688m-10.527-7.95q-5.8-10.742-15.254-16.113-9.453-5.586-22.559-5.586-10.312 0-18.69 4.942-8.38 4.941-8.38 11.601 0 15.469 24.707 15.469 18.047 0 40.176-10.313"/></svg>
````

## File: public/letters_paths/26_ಟ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M259.008 264.502q-4.512 38.027-19.98 56.933-15.47 18.907-41.895 18.907-25.996 0-44.473-24.493-18.476-24.707-18.476-75.625 0-24.492 10.312-46.406 10.313-21.914 31.152-28.144-20.625-5.371-30.937-15.254-10.098-9.883-10.098-24.492 0-17.403 13.535-25.996 13.536-8.81 40.606-8.81v4.298q-13.106 2.578-21.27 13.535t-8.164 23.848q0 24.492 29.004 32.441 14.61 4.082 21.914 15.04 7.52 10.741 7.52 28.573 0 14.61-7.735 26.856-7.52 12.246-23.632 12.246-11.602 0-19.336-9.238-7.735-9.454-7.735-26.641 0-10.098 2.793-20.195-9.453 4.941-16.543 19.336t-7.09 24.707q0 27.285 15.04 49.414t43.613 22.129q22.558 0 38.027-14.395t23.848-43.184q11.387 32.872 24.707 45.332 13.535 12.247 34.375 12.247 28.789 0 45.332-18.047t16.543-38.028q.215-19.765-13.106-31.582-13.32-12.03-34.375-12.03h-27.93V184.58h31.368q10.957 0 17.617-8.809t6.66-22.773q0-15.469-9.453-28.36-9.453-13.105-32.656-13.105-1.504 0-4.512.43t-4.726.43q-9.239 0-9.239-9.669 0-11.601 17.403-11.601 21.699 0 36.308 17.402 14.61 17.188 14.61 37.813 0 12.246-5.801 23.418-5.586 10.957-16.973 21.054 19.55 10.313 29.219 28.145 9.883 17.832 9.883 42.969 0 34.59-18.262 56.504-18.047 21.914-45.117 21.914-26.856 0-40.606-15.254t-21.27-60.586m-45.117-59.727q0-10.097-6.875-16.543-6.875-6.66-17.618-6.66-25.351 0-25.351 23.203 0 24.707 25.781 24.707 8.594 0 16.328-6.23 7.735-6.23 7.735-18.477"/></svg>
````

## File: public/letters_paths/27_ಠ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M224.418 148.271h-67.246v-29.648h142.226q23.204 0 34.805-9.668 11.602-9.883 11.602-29.434 0-19.98-19.336-32.87h7.734q22.774 16.542 22.774 44.902 0 25.136-15.899 41.035-15.683 15.683-43.613 15.683h-7.735q33.516 14.18 50.274 37.168 16.973 22.989 16.973 54.785 0 29.434-13.106 51.778-12.89 22.129-35.664 35.234-22.773 13.106-52.852 13.106-34.375 0-66.386-25.782-31.797-25.78-31.797-72.402 0-31.797 16.758-55.215 16.758-23.633 50.488-38.672m114.297 76.055q0-36.094-25.567-56.074-25.566-19.98-55.859-19.98-39.96 0-61.016 25.136-20.84 24.922-20.84 53.711.215 32.871 23.633 56.719 23.633 23.633 56.72 23.633 30.507 0 56.718-20.84 26.21-20.84 26.21-62.305m-61.66 2.363q0 10.957-6.446 16.328-6.445 5.372-13.75 5.372-9.882 0-15.039-6.23-4.941-6.446-4.941-13.966 0-8.594 5.8-14.394 5.801-6.016 14.18-6.016 9.883 0 15.04 6.23 5.156 6.231 5.156 12.676"/></svg>
````

## File: public/letters_paths/28_ಡ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M306.166 148.271q27.285 9.883 40.82 24.493 13.75 14.394 13.75 33.515 0 5.371-.43 7.735 23.204 25.351 23.204 57.578 0 28.574-18.047 48.77-18.047 19.98-44.473 19.98-26.21 0-43.398-17.832-16.973-18.047-24.707-54.141-7.305 36.094-21.914 54.14-14.61 17.833-36.739 17.833-24.707 0-43.398-23.418-18.477-23.418-18.477-61.66 0-30.938 18.477-61.016 18.691-30.078 65.742-45.977h-84.219v-29.648h194.004q23.203 0 34.805-9.668 11.602-9.883 11.602-29.434 0-9.882-4.942-18.047-4.726-8.378-14.394-14.824h7.734q11.387 8.38 16.973 19.551 5.8 11.172 5.8 25.352 0 21.484-14.18 39.101t-45.331 17.617zm53.066 71.543q-7.52 15.04-18.906 22.559-11.387 7.52-26.426 7.52-12.675 0-23.847-7.305-11.172-7.52-11.172-20.84 0-13.535 9.453-20.195 9.453-6.875 28.36-6.875 13.964 0 34.374 10.742l.43-4.512q.215-23.203-24.707-38.027-24.707-14.825-62.305-14.61-53.71 0-86.367 25.782-16.328 12.89-24.492 30.722-8.164 17.617-8.164 40.176t12.46 42.54q12.677 19.98 38.673 19.98 20.195 0 35.449-17.188 15.469-17.187 21.27-41.25 7.949 29.219 23.417 43.828 15.47 14.61 38.457 14.61 27.5 0 42.754-15.684 15.47-15.684 15.47-36.523 0-18.262-14.18-35.45m-10.097-7.734q-10.528-13.106-33.946-13.106-12.03 0-20.195 5.372-8.164 5.156-8.379 13.105 0 4.941 6.23 10.742 6.446 5.801 19.551 5.801 11.387-.215 21.915-6.445 10.527-6.446 14.824-15.47"/></svg>
````

## File: public/letters_paths/29_ಢ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M306.166 148.271q27.285 9.883 40.82 24.493 13.75 14.394 13.75 33.515 0 5.371-.43 7.735 23.204 25.351 23.204 57.578 0 28.574-18.047 48.77-18.047 19.98-44.473 19.98-26.21 0-43.398-17.832-16.973-18.047-24.707-54.141-7.305 36.094-21.914 54.14-14.61 17.833-36.739 17.833-24.707 0-43.398-23.418-18.477-23.418-18.477-61.66 0-30.938 18.477-61.016 18.691-30.078 65.742-45.977h-84.219v-29.648h194.004q23.203 0 34.805-9.668 11.602-9.883 11.602-29.434 0-9.882-4.942-18.047-4.726-8.378-14.394-14.824h7.734q11.387 8.38 16.973 19.551 5.8 11.172 5.8 25.352 0 21.484-14.18 39.101t-45.331 17.617zm53.066 71.543q-7.52 15.04-18.906 22.559-11.387 7.52-26.426 7.52-12.675 0-23.847-7.305-11.172-7.52-11.172-20.84 0-13.535 9.453-20.195 9.453-6.875 28.36-6.875 13.964 0 34.374 10.742l.43-4.512q.215-23.203-24.707-38.027-24.707-14.825-62.305-14.61-53.71 0-86.367 25.782-16.328 12.89-24.492 30.722-8.164 17.617-8.164 40.176t12.46 42.54q12.677 19.98 38.673 19.98 20.195 0 35.449-17.188 15.469-17.187 21.27-41.25 7.949 29.219 23.417 43.828 15.47 14.61 38.457 14.61 27.715 0 42.97-15.47 15.253-15.468 15.253-36.737 0-18.262-14.18-35.45m-10.097-7.734q-10.528-13.106-33.946-13.106-12.03 0-20.195 5.372-8.164 5.156-8.379 13.105 0 4.941 6.23 10.742 6.446 5.801 19.551 5.801 11.387-.215 21.915-6.445 10.527-6.446 14.824-15.47m-76.055 180.04q0 7.734-4.941 13.965-4.942 6.23-14.825 6.23-10.312 0-15.468-5.586-4.942-5.586-4.942-16.543 0-21.27 20.41-74.98 19.766 53.281 19.766 76.914"/></svg>
````

## File: public/letters_paths/30_ಣ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M314.545 291.572v-3.437q9.883-1.504 14.824-6.23 4.942-4.942 4.942-13.106 0-10.743-8.594-17.618-8.38-7.09-19.98-7.09-18.048 0-26.212 10.098-8.164 9.883-8.164 23.203 0 15.04 11.387 28.575 11.602 13.535 36.094 13.535 37.597 0 55-24.922 17.617-25.137 17.617-60.586 0-30.937-21.055-58.223-20.84-27.5-59.297-27.5-25.351 0-41.464 14.825-16.114 14.609-22.989 43.828-6.875-29.22-23.203-43.828-16.328-14.825-42.11-14.825-20.624 0-33.515 11.602-12.89 11.387-12.89 29.434 0 19.12 12.675 30.937 12.891 11.816 38.672 16.113-25.566 6.016-38.242 18.262t-12.676 30.508q0 16.758 13.106 26.855 13.32 10.098 28.144 10.098 9.024 0 16.328-3.652 7.305-3.868 13.106-11.387l3.008 1.933q-7.735 15.684-19.121 23.633-11.387 7.735-26.426 7.735-19.121 0-31.367-14.18-12.032-14.18-12.247-35.234 0-19.551 12.461-33.086 12.461-13.75 37.383-21.485-25.136-6.015-37.812-21.054-12.461-15.04-12.461-38.887 0-28.36 16.543-45.977 16.758-17.617 41.465-17.617 26.855 0 44.043 19.766 17.187 19.55 24.707 58.652 8.808-39.101 26.425-58.652 17.618-19.766 43.829-19.766 36.953 0 58.007 32.442 21.27 32.226 21.27 81.425 0 53.496-18.477 83.575-18.476 30.078-50.703 30.078-25.351 0-42.539-18.692-16.973-18.691-16.973-44.258 0-20.625 11.602-34.16 11.602-13.75 28.574-13.75 15.04 0 25.996 9.883 11.172 9.668 11.172 24.492 0 11.387-9.023 19.98-8.809 8.38-20.84 7.735"/></svg>
````

## File: public/letters_paths/31_ತ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M292.63 148.271q19.122 10.743 24.923 21.055 6.015 10.098 6.015 28.79 16.114 12.46 24.278 27.5 8.164 14.823 8.164 32.44 0 39.747-30.293 61.016-30.293 21.27-69.824 21.27-34.805 0-66.817-21.485-32.012-21.699-32.012-59.297 0-14.394 6.875-25.136h3.223q-2.363 6.015-2.363 16.972 0 25.352 25.781 40.82 25.996 15.255 60.8 15.255 50.06 0 72.188-20.84 22.344-21.055 22.344-42.969 0-12.031-6.016-21.914-5.8-10.098-17.402-18.262-4.297 20.84-24.492 34.16-20.195 13.106-42.754 13.32-16.973 0-30.293-7.949-13.105-8.164-13.105-23.632 0-16.114 16.757-27.715 16.973-11.602 43.184-11.387 17.402 0 41.035 10.098l.645-4.297q0-16.543-13.106-27.07-13.105-10.743-30.937-10.743H156.635v-29.648H298.86q23.203 0 34.805-9.668 11.602-9.883 11.602-29.434 0-9.882-4.942-18.047-4.726-8.378-14.394-14.824h7.734q11.387 8.38 16.973 19.551 5.8 11.172 5.8 25.352 0 24.921-16.113 40.82-15.898 15.898-43.398 15.898zm19.337 47.48q-19.98-11.171-39.746-11.171-23.848 0-34.375 8.809-10.528 8.593-10.528 18.69 0 16.114 29.434 16.114 16.973 0 33.3-8.379 16.544-8.593 21.915-24.062"/></svg>
````

## File: public/letters_paths/32_ಥ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M294.78 148.271q41.679 14.825 64.667 44.903 22.989 30.078 22.989 68.32 0 29.004-15.684 53.926t-48.34 24.922q-22.988 0-38.457-17.403t-23.418-52.207q-8.379 34.805-24.922 52.207-16.328 17.403-40.82 17.403-28.145 0-43.613-24.063-15.47-24.277-15.47-56.719 0-38.457 23.634-68.105 23.633-29.648 64.023-43.184h-87.226v-29.648h194.003q23.204 0 34.805-9.668 11.817-9.883 11.817-29.434 0-9.882-4.942-18.047-4.726-8.378-14.394-14.824h7.734q11.172 8.38 16.758 19.551 5.8 11.172 5.8 25.352 0 21.699-14.18 39.316-13.964 17.402-45.331 17.402zm-38.243 111.72q8.164 23.847 22.344 35.663 14.18 11.817 34.375 11.817 24.492 0 39.101-17.188 14.61-17.402 14.61-45.762 0-42.324-33.086-69.18-32.871-27.07-78.848-27.07-30.508 0-54.355 12.676-23.633 12.461-38.672 34.59-14.824 21.914-14.824 48.984 0 27.5 14.394 45.332 14.395 17.618 37.813 17.618 20.625 0 34.804-11.817 14.395-11.816 22.344-35.664m20.41-48.34q0 7.304-5.586 13.964-5.37 6.445-14.824 6.445-9.238 0-14.61-6.445-5.156-6.66-5.156-13.965 0-7.09 5.157-13.75 5.37-6.66 14.61-6.66 9.452 0 14.823 6.66 5.586 6.66 5.586 13.75m-1.074 180.468q0 7.734-4.941 13.965-4.942 6.23-14.825 6.23-10.312 0-15.468-5.586-4.942-5.586-4.942-16.543 0-21.27 20.41-74.98 19.766 53.281 19.766 76.914"/></svg>
````

## File: public/letters_paths/33_ದ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M294.78 148.271q41.679 14.825 64.667 44.903 22.989 30.078 22.989 68.32 0 29.004-15.684 53.926t-48.34 24.922q-22.988 0-38.457-17.403t-23.418-52.207q-8.379 34.805-24.922 52.207-16.328 17.403-40.82 17.403-28.145 0-43.613-24.063-15.47-24.277-15.47-56.719 0-38.457 23.634-68.105 23.633-29.648 64.023-43.184h-87.226v-29.648h194.003q23.204 0 34.805-9.668 11.817-9.883 11.817-29.434 0-9.882-4.942-18.047-4.726-8.378-14.394-14.824h7.734q11.172 8.38 16.758 19.551 5.8 11.172 5.8 25.352 0 21.699-14.18 39.316-13.964 17.402-45.331 17.402zm-38.243 111.72q8.164 23.847 22.344 35.663 14.18 11.817 34.375 11.817 24.492 0 39.101-17.188 14.61-17.402 14.61-45.762 0-42.324-33.086-69.18-32.871-27.07-78.848-27.07-30.508 0-54.355 12.676-23.633 12.461-38.672 34.59-14.824 21.914-14.824 48.984 0 27.5 14.394 45.332 14.395 17.618 37.813 17.618 20.625 0 34.804-11.817 14.395-11.816 22.344-35.664"/></svg>
````

## File: public/letters_paths/34_ಧ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M294.78 148.271q41.679 14.825 64.667 44.903 22.989 30.078 22.989 68.32 0 29.004-15.684 53.926t-48.34 24.922q-22.988 0-38.457-17.403t-23.418-52.207q-8.379 34.805-24.922 52.207-16.328 17.403-40.82 17.403-28.145 0-43.613-24.063-15.47-24.277-15.47-56.719 0-38.457 23.634-68.105 23.633-29.648 64.023-43.184h-87.226v-29.648h194.003q23.204 0 34.805-9.668 11.817-9.883 11.817-29.434 0-9.882-4.942-18.047-4.726-8.378-14.394-14.824h7.734q11.172 8.38 16.758 19.551 5.8 11.172 5.8 25.352 0 21.699-14.18 39.316-13.964 17.402-45.331 17.402zm-38.243 111.72q8.164 23.847 22.344 35.663 14.18 11.817 34.375 11.817 24.492 0 39.101-17.188 14.61-17.402 14.61-45.762 0-42.324-33.086-69.18-32.871-27.07-78.848-27.07-30.508 0-54.355 12.676-23.633 12.461-38.672 34.59-14.824 21.914-14.824 48.984 0 27.5 14.394 45.332 14.395 17.618 37.813 17.618 20.625 0 34.804-11.817 14.395-11.816 22.344-35.664m18.906 132.128q0 7.734-5.156 13.965-4.941 6.23-14.824 6.23-10.098 0-15.254-5.586-4.941-5.586-4.941-16.543 0-21.27 20.195-74.98 19.98 53.281 19.98 76.914"/></svg>
````

## File: public/letters_paths/35_ನ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M267.924 148.271q40.605 10.743 65.312 43.614t24.707 73.476q0 31.797-14.824 53.496-14.61 21.485-38.887 21.485-17.832 0-26.855-8.594-9.023-8.809-18.691-36.309-9.668-28.144-19.336-39.746-9.668-11.816-26.211-11.601-23.418 0-38.457 13.75t-15.254 31.152q0 9.668 7.734 19.121 7.734 9.238 23.203 18.262 10.528 6.23 15.899 11.387 5.37 4.94 5.37 9.238 0 5.156-2.577 7.734-2.364 2.578-7.09 2.578-17.188 0-32.871-24.277-15.47-24.492-15.47-56.504 0-33.516 14.825-48.125 15.04-14.824 31.582-14.824 19.121 0 30.078 11.172t25.137 47.91q8.164 20.41 17.832 27.715 9.668 7.09 25.352 7.09 22.129 0 34.16-16.329 12.246-16.543 12.246-37.812 0-42.969-33.086-73.906-32.871-31.153-76.914-31.153h-81.64v-29.648h148.027q23.203 0 34.804-9.668 11.602-9.883 11.602-29.434 0-9.882-4.942-18.047-4.726-8.378-14.394-14.824h7.734q11.387 8.38 16.973 19.551 5.8 11.172 5.8 25.352 0 21.484-14.179 39.101t-45.332 17.617z"/></svg>
````

## File: public/letters_paths/36_ಪ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M129.457 148.271v-29.648h194.434q23.203 0 34.804-9.668 11.817-9.883 11.817-29.434 0-9.882-4.942-18.047-4.726-8.378-14.394-14.824h7.734q11.172 8.38 16.758 19.551 5.8 11.172 5.8 25.352.216 25.136-15.898 40.82-16.113 15.684-43.613 15.898zm147.168 36.739q0 7.304-5.586 13.964-5.371 6.446-14.824 6.446-5.8 0-10.313-2.793-4.511-3.008-7.304-7.52-2.578-4.511-2.793-10.097 0-9.453 6.445-14.825 6.66-5.37 13.965-5.37 8.379 0 14.394 6.015 6.016 5.8 6.016 14.18m-20.84 83.789q-5.37 35.879-21.055 53.71-15.468 17.833-41.464 17.833-27.5 0-44.903-19.336-17.402-19.551-17.402-50.703 0-29.649 13.75-42.11 13.75-12.676 29.219-12.676 12.89 0 24.492 9.239 11.816 9.023 11.816 24.707 0 13.535-9.453 21.054-9.453 7.52-21.055 7.52v-3.438q10.098-.859 15.254-5.8 5.157-5.157 5.157-14.61 0-10.527-8.594-17.832-8.594-7.304-20.625-7.304-17.617 0-26.426 10.097-8.809 9.883-8.809 21.914.215 20.625 15.47 33.516 15.253 12.89 38.671 12.89 26.426 0 43.184-13.964 16.758-14.18 23.633-42.54 7.09 28.36 21.699 42.54 14.61 13.965 36.523 13.965 23.848 0 41.895-13.965t18.047-43.184q0-16.973-16.973-42.539-13.106-19.766-13.106-26.64 0-5.587 2.579-8.38 2.578-2.792 7.734-2.792 7.305 0 16.113 27.93 9.024 27.929 9.024 53.925 0 44.258-14.825 66.387t-44.257 22.129q-28.36 0-44.688-17.832t-20.625-53.711"/></svg>
````

## File: public/letters_paths/37_ಫ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M129.457 148.271v-29.648h202.168q15.684 0 27.5-9.883t11.816-26.855q0-10.957-4.941-19.766-4.727-9.023-14.395-15.898h7.735q10.742 8.378 16.113 19.336 5.586 10.742 5.586 24.062.215 23.633-16.758 41.25-16.758 17.402-44.258 17.402zm146.738 36.739q0 8.379-6.015 14.394-5.801 6.016-14.395 6.016-9.453 0-14.824-6.446-5.371-6.66-5.371-13.964 0-5.801 2.793-10.313t7.304-7.09q4.512-2.793 10.098-2.793 5.8 0 10.313 2.793 4.726 2.578 7.304 7.09 2.793 4.512 2.793 10.313m-20.84 83.789q-5.37 35.879-21.054 53.71-15.469 17.833-41.465 17.833-27.285 0-44.902-19.336-17.403-19.551-17.403-50.703 0-26.211 12.461-40.391 12.461-14.395 30.508-14.395 14.395 0 25.352 9.883t10.957 24.063q0 12.46-9.024 20.41-8.808 7.95-21.484 8.164v-3.438q10.097-.859 15.254-5.8 5.156-5.157 5.156-14.61 0-10.527-8.594-17.832-8.594-7.304-20.41-7.304-17.832 0-26.64 10.097-8.81 9.883-8.81 21.914 0 20.625 15.47 33.516 15.468 12.89 38.886 12.89 26.426 0 42.969-13.964 16.758-14.18 23.633-42.54 7.09 28.36 21.7 42.54 14.608 13.965 36.522 13.965 23.848 0 41.895-13.965t18.047-43.184q0-17.187-16.328-42.11-13.75-20.41-13.75-27.07 0-11.171 10.312-11.171 6.446 0 15.684 26.425 9.453 26.426 9.453 55.43 0 44.258-14.824 66.387t-44.258 22.129q-28.145 0-44.473-17.832t-20.84-53.711m19.766 123.32q0 7.734-4.941 13.965-4.942 6.23-14.825 6.23-20.41 0-20.41-22.129 0-21.27 20.41-74.98 19.766 53.281 19.766 76.914"/></svg>
````

## File: public/letters_paths/38_ಬ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M259.223 264.932q-7.52 37.812-23.848 56.718-16.113 18.692-41.035 18.692-28.79 0-44.258-18.692-15.254-18.906-15.254-41.25 0-16.543 9.238-32.011 9.454-15.684 28.145-30.508 14.18-11.172 21.27-22.989 7.304-11.816 7.304-24.277 0-14.824-9.883-23.633-9.668-9.023-20.625-8.808-16.543 0-25.78 8.379-9.024 8.378-9.024 21.054 0 9.883 4.941 16.114 5.156 6.015 15.254 8.593l-1.504 2.793q-15.898-2.578-23.848-12.246-7.949-9.883-7.949-26.855 0-20.41 12.461-31.797 12.676-11.387 29.649-11.387 19.765 0 33.945 11.172 14.394 11.172 14.394 36.738 0 17.617-9.238 31.153-9.023 13.32-29.863 30.507-11.387 9.239-17.188 19.122-5.586 9.882-5.586 20.41 0 17.402 10.743 31.582 10.742 13.965 35.664 13.965 23.203 0 39.96-19.98 16.973-20.196 21.915-45.763 9.238 32.871 25.566 49.414 16.328 16.329 39.746 16.329 27.5 0 41.25-20.41 13.965-20.41 13.965-61.446 0-25.137-10.312-44.902-10.313-19.766-30.723-34.375-14.18-9.883-14.18-20.41 0-5.801 2.578-8.594 2.578-3.008 7.735-3.008 9.238 0 29.218 30.938 20.196 30.722 20.196 91.953 0 49.199-15.254 76.27-15.254 26.855-43.399 26.855-26.425 0-42.968-18.692-16.543-18.906-23.418-56.718"/></svg>
````

## File: public/letters_paths/39_ಭ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M318.842 148.271q33.945 18.692 50.273 44.473 16.543 25.566 16.543 65.313 0 33.515-17.402 58.007-17.402 24.278-44.043 24.278-26.426 0-42.969-18.692-16.543-18.906-23.418-56.719-7.52 37.813-23.847 56.72-16.114 18.69-41.036 18.69-28.789 0-44.257-18.69-15.254-18.907-15.254-41.25 0-16.544 9.238-32.012 9.453-15.684 28.144-30.508 14.18-11.172 21.27-22.989 7.305-11.816 7.305-24.277 0-14.824-9.883-23.633-9.668-9.023-20.625-8.808-16.543 0-25.781 8.379-9.024 8.378-9.024 21.054 0 9.883 4.942 16.114 5.156 6.015 15.253 8.593l-1.503 2.793q-15.899-2.578-23.848-12.246-7.95-9.883-7.95-26.855 0-20.41 12.462-31.797 12.675-11.387 29.648-11.387 19.766 0 33.945 11.172 14.395 11.172 14.395 36.738 0 17.617-9.238 31.153-9.024 13.32-29.864 30.507-11.386 9.239-17.187 19.122-5.586 9.882-5.586 20.41 0 17.402 10.742 31.582 10.742 13.965 35.664 13.965 23.203 0 39.961-19.98 16.973-20.196 21.914-45.763 9.238 32.871 25.567 49.414 16.328 16.329 39.746 16.329 24.277 0 36.738-18.692 12.676-18.691 12.676-46.62 0-43.185-27.5-68.536-27.5-25.352-53.282-25.352h-27.07v-29.648h65.313q23.203 0 34.804-9.668 11.602-9.883 11.602-29.434 0-9.882-4.941-18.047-4.727-8.378-14.395-14.824h7.734q11.387 8.38 16.973 19.551 5.8 11.172 5.8 25.352 0 24.921-16.112 40.82-15.899 15.898-43.399 15.898zm-41.68 243.848q0 7.734-4.941 13.965-4.942 6.23-14.825 6.23-10.312 0-15.468-5.586-4.942-5.586-4.942-16.543 0-21.27 20.41-74.98 19.766 53.281 19.766 76.914"/></svg>
````

## File: public/letters_paths/40_ಮ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M313.256 273.955q-3.438 33.3-18.477 49.844-14.824 16.543-41.035 16.543-28.144 0-44.473-17.832-16.328-17.832-20.84-53.711-5.37 35.879-21.054 53.71-15.469 17.833-41.465 17.833-27.285 0-44.902-19.336-17.403-19.551-17.403-50.703 0-26.211 12.461-40.391 12.461-14.395 30.508-14.395 14.395 0 25.352 9.883t10.957 24.063q0 12.46-9.024 20.41-8.808 7.95-21.484 8.164v-3.438q10.098-.859 15.254-5.8 5.156-5.157 5.156-14.61 0-10.527-8.594-17.832-8.593-7.304-20.41-7.304-17.832 0-26.64 10.097-8.809 9.883-8.809 21.914 0 20.625 15.469 33.516t38.886 12.89q26.426 0 42.97-13.964 16.757-14.18 23.632-42.54 7.95 28.36 21.914 42.54 13.965 13.965 33.945 13.965 23.204 0 37.383-15.254 14.395-15.254 14.395-37.383 0-47.266-38.672-76.914t-93.457-29.649H63.607v-29.648h193.575q23.203 0 34.804-9.668 11.602-9.883 11.602-29.434 0-9.882-4.942-18.047-4.726-8.378-14.394-14.824h7.734q11.387 8.38 16.973 19.551 5.8 11.172 5.8 25.352 0 21.699-14.179 39.316-14.18 17.402-45.332 17.402H204.33q53.066 14.61 80.352 42.11 27.285 27.285 29.004 67.676 11.386 24.707 27.714 37.167 16.543 12.247 38.243 12.247 29.863 0 47.695-23.418 17.832-23.633 17.832-50.059 0-30.293-19.98-49.2-19.766-19.12-59.297-26.855-13.106-2.578-19.766-6.445-6.445-4.082-6.445-9.453 0-6.016 3.867-9.024 4.082-3.222 12.031-3.222 29.004 0 61.875 29.219 33.086 29.218 33.086 87.011 0 41.895-19.121 68.106-18.906 26.21-48.984 26.21-42.54 0-69.18-66.386"/></svg>
````

## File: public/letters_paths/41_ಯ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M340.648 272.021q-3.652 32.227-22.128 50.274-18.262 18.047-41.895 18.047-31.582 0-50.918-23.203-19.336-23.204-31.367-69.18-3.223 41.25-23.418 66.816-19.98 25.567-50.059 25.567-40.605 0-63.593-37.383-22.99-37.599-22.99-90.235 0-42.324 19.121-71.113 19.336-28.789 53.926-28.789 33.73 0 57.149 31.152 23.632 31.153 28.574 73.907 4.941 41.894 24.492 65.742 19.766 23.848 50.918 23.848 25.996 0 42.969-18.262 16.972-18.262 16.972-47.48 0-41.25-26.64-67.247-26.426-26.21-64.239-26.21h-24.277v-29.65h73.691q19.336 0 32.227-10.956 13.106-11.172 13.106-27.07 0-11.387-4.942-19.766-4.726-8.594-14.394-14.18h7.734q10.957 8.38 16.328 18.692 5.586 10.312 5.586 22.343 0 29.434-18.047 45.118-17.832 15.468-38.242 15.468H268.46q36.523 16.543 54.785 43.828 18.262 27.07 18.262 64.668v.215q11.387 25.352 27.93 38.028 16.542 12.46 38.457 12.46 29.863 0 47.695-23.417 17.832-23.633 17.832-50.059 0-30.293-19.98-49.2-19.766-19.12-59.297-26.855-13.106-2.578-19.766-6.445-6.445-4.082-6.445-9.453 0-6.016 3.867-9.024 4.082-3.222 12.031-3.222 29.863 0 62.305 30.078 32.656 29.863 32.656 86.152 0 42.11-19.121 68.32-18.906 25.997-48.77 25.997-43.398 0-70.254-68.32m-151.464-42.539q0-33.515-22.559-57.363-22.559-24.062-55-23.848-36.309 0-54.785 22.989-18.262 22.988-18.262 51.992.215 34.804 23.203 59.512 23.203 24.707 52.852 24.707 30.508 0 52.422-22.13 22.129-22.128 22.129-55.859"/></svg>
````

## File: public/letters_paths/42_ರ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M224.525 148.271H157.28v-29.648h142.227q23.203 0 34.805-9.668 11.601-9.883 11.601-29.434 0-19.98-19.336-32.87h7.735q22.773 16.542 22.773 44.902 0 25.136-15.898 41.035-15.684 15.683-43.614 15.683h-7.734q33.516 14.18 50.273 37.168 16.973 22.989 16.973 54.785 0 29.434-13.105 51.778-12.891 22.129-35.665 35.234-22.773 13.106-52.851 13.106-34.375 0-66.387-25.782-31.797-25.78-31.797-72.402 0-31.797 16.758-55.215 16.758-23.633 50.488-38.672m114.297 76.055q0-36.094-25.566-56.074-25.567-19.98-55.86-19.98-39.96 0-61.015 25.136-20.84 24.922-20.84 53.711.215 32.871 23.633 56.719 23.633 23.633 56.719 23.633 30.507 0 56.718-20.84t26.211-62.305"/></svg>
````

## File: public/letters_paths/43_ಲ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M191.332 139.463q-25.352 9.023-40.605 30.722-15.254 21.7-15.47 44.473 0 44.473 35.45 68.75 35.45 24.063 82.715 24.063 46.836 0 85.078-25.137t38.242-67.246q0-18.262-10.312-34.16-10.098-15.899-30.293-29.22-16.114-10.741-21.055-16.112-4.941-5.372-5.156-12.032 0-5.37 2.793-7.949 2.793-2.793 8.379-2.793 17.617 0 38.672 30.078 21.27 29.864 21.27 70.684 0 53.71-35.665 90.234-35.45 36.524-88.73 36.524-36.524 0-64.668-16.328-28.145-16.543-44.688-44.043-16.328-27.5-16.328-63.38 0-39.745 19.766-71.757 19.98-32.012 51.777-32.012 20.625 0 32.226 15.469 11.817 15.469 11.817 36.953 0 18.262-10.098 34.375-10.097 15.898-26.64 15.898-13.32 0-21.914-11.386-8.38-11.602-8.594-26.856 0-20.41 12.031-37.812m50.918 24.707q0-10.742-8.809-18.262-8.593-7.734-19.765-7.734-13.535 0-21.055 9.238-7.52 9.023-7.52 18.691 0 11.602 7.735 19.121 7.95 7.52 19.766 7.52 13.105 0 21.27-7.52 8.378-7.734 8.378-21.054"/></svg>
````

## File: public/letters_paths/44_ವ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M271.684 148.271q54.57 15.04 81.855 43.399 27.5 28.144 27.5 69.824 0 32.441-14.61 55.645-14.394 23.203-45.331 23.203-28.145 0-44.473-17.832t-20.84-53.711q-5.37 35.879-21.055 53.71-15.468 17.833-41.464 17.833-27.286 0-44.903-19.336-17.402-19.551-17.402-50.703 0-26.211 12.46-40.391 12.462-14.395 30.509-14.395 14.394 0 25.351 9.883t10.957 24.063q0 12.46-9.023 20.41-8.809 7.95-21.485 8.164v-3.438q10.098-.859 15.254-5.8 5.157-5.157 5.157-14.61 0-10.527-8.594-17.832-8.594-7.304-20.41-7.304-17.832 0-26.64 10.097-8.81 9.883-8.81 21.914 0 20.625 15.47 33.516 15.468 12.89 38.886 12.89 26.426 0 42.969-13.964 16.758-14.18 23.633-42.54 7.949 28.36 21.914 42.54 13.964 13.965 33.945 13.965 23.203 0 37.383-15.254 14.394-15.254 14.394-37.383 0-47.266-38.672-76.914t-93.457-29.649H130.961v-29.648h193.574q23.203 0 34.805-9.668 11.601-9.883 11.601-29.434 0-9.882-4.941-18.047-4.727-8.378-14.395-14.824h7.735q11.387 8.38 16.972 19.551 5.801 11.172 5.801 25.352 0 21.699-14.18 39.316-14.18 17.402-45.331 17.402z"/></svg>
````

## File: public/letters_paths/45_ಶ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M289.516 148.271q32.011 12.891 49.414 38.243 17.402 25.136 17.187 56.074.215 44.472-30.722 71.113-30.723 26.64-83.36 26.64-45.547 0-65.957-20.195-20.195-20.41-20.195-43.613 0-20.84 12.246-33.3 12.46-12.677 32.656-12.677h41.25q18.906 0 28.79-12.03 9.882-12.032 9.882-26.212 0-19.336-12.031-31.582-11.817-12.46-31.582-12.46-16.973 0-27.07 8.593-10.098 8.379-10.098 18.906 0 7.735 4.726 7.735 1.72 0 4.942-4.727 5.586-11.172 18.261-11.172 6.66 0 13.106 5.157 6.445 5.156 6.445 13.32 0 9.453-7.09 14.61-7.09 5.155-15.683 5.155-12.676 0-20.84-8.593t-8.379-19.98q0-19.337 19.55-29.005h-57.577v-29.648h142.226q23.203 0 34.805-9.668 11.602-9.883 11.602-29.434 0-9.882-4.942-18.047-4.726-8.378-14.394-14.824h7.734q11.387 8.38 16.973 19.551 5.8 11.172 5.8 25.352 0 24.921-16.113 40.82-15.898 15.898-43.398 15.898zm-30.079 0q26.641 17.832 26.641 43.614 0 20.625-13.32 33.515-13.106 12.89-33.73 12.89h-29.864q-14.61 0-25.996 8.165-11.387 8.164-11.387 25.781 0 35.235 61.016 35.235 44.258 0 76.055-20.625 31.796-20.625 31.796-61.66 0-32.442-23.418-54.57-23.418-22.345-57.793-22.345"/></svg>
````

## File: public/letters_paths/46_ಷ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M131.605 148.271v-29.648h192.07q23.204 0 34.805-9.668 11.602-9.883 11.602-29.434 0-9.882-4.941-18.047-4.727-8.378-14.395-14.824h7.734q11.387 8.38 16.973 19.551 5.8 11.172 5.8 25.352 0 21.699-14.179 39.316-14.18 17.402-45.332 17.402zm144.16 36.739q0 8.379-6.015 14.394-5.8 6.016-14.395 6.016-9.453 0-14.824-6.446-5.37-6.66-5.37-13.964 0-5.801 2.792-10.313 2.793-4.512 7.305-7.09 4.512-2.793 10.097-2.793 5.801 0 10.313 2.793 4.727 2.578 7.305 7.09 2.793 4.512 2.793 10.313m63.81 152.324q-8.595 3.008-19.337 3.008-25.566 0-41.894-17.832-16.114-17.832-22.989-53.711-5.156 35.879-21.054 53.71-15.684 17.833-41.895 17.833-27.285 0-44.902-19.336-17.402-19.551-17.402-50.703 0-26.211 12.46-40.391 12.461-14.395 30.508-14.395 14.395 0 25.352 9.883t10.957 24.063q0 12.46-9.024 20.41-8.808 7.95-21.484 8.164v-3.438q10.098-.859 15.254-5.8 5.156-5.157 5.156-14.61 0-10.527-8.593-17.832-8.594-7.304-20.41-7.304-17.833 0-26.641 10.097-8.809 9.883-8.809 21.914 0 20.625 15.469 33.516t38.887 12.89q26.425 0 42.968-13.964 16.758-14.18 23.633-42.54 10.313 31.368 25.781 43.829 15.684 12.46 40.176 12.031l-53.71-89.805h2.363l76.054 82.715q13.75-7.305 20.625-19.55 6.875-12.462 6.875-29.864 0-8.379-3.437-17.402-3.223-9.238-9.668-19.336-16.973-25.996-16.973-32.442 0-5.585 2.578-8.378t7.735-2.793q6.445 0 15.683 26.425 9.453 26.426 9.453 55.43 0 42.754-15.468 66.816 15.898 17.832 15.898 22.13 0 5.8-6.66 5.8h-23.203q-5.157 0-10.313-9.238"/></svg>
````

## File: public/letters_paths/47_ಸ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M154.486 148.271v-29.648h142.227q23.203 0 34.805-9.668 11.601-9.883 11.601-29.434 0-9.882-4.941-18.047-4.727-8.378-14.395-14.824h7.735q11.386 8.38 16.972 19.551 5.801 11.172 5.801 25.352.215 24.921-15.898 40.82-16.114 15.898-43.614 15.898zm94.746 36.739q0 8.379-6.015 14.394-5.801 5.8-14.18 6.016-8.379 0-14.394-6.016-6.016-6.015-6.016-14.394 0-5.801 2.793-10.313t7.305-7.305 10.312-2.578q5.8 0 10.313 2.793 4.511 2.578 7.09 7.09 2.792 4.512 2.792 10.313m-87.011 155.332h-3.008q-4.297-10.098-4.297-27.5.215-32.442 19.766-53.711 19.55-21.27 48.984-21.27 26.855 0 43.184 13.965 16.543 13.965 22.558 41.68 2.578 10.742 5.586 15.039 3.223 4.297 11.387 4.297 14.394 0 23.203-18.477 8.809-18.476 8.809-41.465 0-35.879-11.602-67.89l2.363-.86q24.707 25.567 24.707 79.278 0 37.382-10.527 57.148t-26.855 19.766q-10.743 0-17.618-6.66-6.66-6.66-9.453-19.981-3.222-16.328-8.164-24.062-4.726-7.735-17.617-13.32-12.89-5.587-35.234-5.587-30.079 0-48.985 14.61-18.691 14.609-18.691 39.101 0 7.09 1.504 15.899"/></svg>
````

## File: public/letters_paths/48_ಹ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M204.545 148.271q25.566 7.735 41.465 30.508 16.113 22.774 16.113 52.207 11.387-17.187 26.426-25.781 15.254-8.594 34.16-8.594 30.937 0 50.918 22.13 20.195 21.913 20.195 50.917 0 24.707-17.832 47.695-17.832 22.989-51.992 22.989-50.703 0-67.246-54.141-6.23 25.137-24.277 39.746-17.832 14.395-42.54 14.395-24.492 0-46.62-18.477Q121.4 303.39 121.4 268.37q0-30.293 20.84-50.918 21.055-20.84 49.2-20.84 20.84 0 37.382 11.172 16.758 11.172 29.004 33.3 0-47.694-25.996-70.253-25.781-22.559-55.43-22.559h-56.504v-29.648h217.852q23.203 0 34.805-9.668 11.601-9.883 11.601-29.434 0-9.882-4.941-18.047-4.727-8.378-14.395-14.824h7.735q11.386 8.38 16.972 19.551 5.801 11.172 5.801 25.352 0 21.484-14.394 39.101-14.18 17.617-45.118 17.617zm176.172 108.496q0-19.55-14.61-37.597-14.609-18.262-42.109-18.262-25.781 0-43.613 17.188-17.617 17.187-17.832 39.101.215 20.41 16.543 35.45 16.543 14.824 42.539 14.824 25.351 0 42.11-15.254 16.972-15.47 16.972-35.45m-128.262-3.007q0-15.684-16.328-34.16-16.113-18.692-42.754-18.692-24.277 0-41.68 15.469-17.187 15.469-17.402 37.383 0 27.285 17.832 40.605 18.047 13.106 40.82 13.106 22.774 0 41.036-13.965 18.476-13.965 18.476-39.746"/></svg>
````

## File: public/letters_paths/49_ಳ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M316.908 145.908q20.41 9.668 30.723 23.633t10.312 32.012q0 25.996-21.914 41.894-21.914 15.684-51.133 15.684 15.47 14.61 15.47 39.746 0 15.683-10.098 28.574-9.883 12.89-29.649 12.89-16.758 0-27.715-11.816-10.957-12.031-10.957-28.789 0-21.699 21.27-39.746-3.008 0-9.024 1.074-6.015.86-10.742.86-22.129 0-36.308-8.38-14.18-8.378-23.633-26.855-9.239-18.476-9.239-40.605 0-28.574 13.106-50.918 13.32-22.344 36.738-22.344 15.469 0 24.922 12.031 9.453 11.817 9.453 30.079 0 16.972-8.808 27.714-8.594 10.528-22.13 10.528-14.179 0-21.484-10.742-7.09-10.958-7.09-24.493 0-8.379 2.793-16.543-11.601 4.727-17.402 14.61-5.8 9.668-5.8 24.277 0 21.484 16.113 35.02 16.113 13.535 48.34 19.12 19.98 3.438 34.374 8.81 14.395 5.156 23.204 12.03 29.004-2.148 47.265-18.69 18.477-16.759 18.477-41.466 0-17.402-11.602-32.011-11.386-14.825-35.234-14.825h-31.152v-29.648h33.085q23.204 0 34.805-9.668 11.602-9.883 11.602-29.434 0-9.882-4.942-18.047-4.726-8.378-14.394-14.824h7.734q11.387 8.38 16.973 19.551 5.8 11.172 5.8 25.352 0 22.773-10.527 36.308t-31.582 18.047m-82.93 10.527q0-8.164-6.66-15.683t-19.336-7.52q-9.882 0-17.402 6.23-7.305 6.231-7.305 16.973 0 6.66 6.66 13.75t18.907 7.09q12.89 0 18.906-6.66 6.23-6.66 6.23-14.18m58.653 131.27q0-11.816-8.594-19.98-8.379-8.165-21.914-8.165-12.46 0-21.27 9.239-8.593 9.238-8.808 20.84 0 12.03 7.95 19.765 7.948 7.735 19.765 7.735 12.246 0 22.558-7.735 10.313-7.95 10.313-21.7"/></svg>
````

## File: public/letters_paths/50_ಕ್ಷ.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z"/><path d="M238.275 148.271q9.239 6.875 9.239 15.899 0 9.238-8.809 15.039h78.418v30.508h-59.512q22.559 8.593 33.73 24.492 11.388 15.683 11.388 38.887 0 28.359-18.047 47.91-17.832 19.336-46.836 19.336-32.871 0-49.844-19.98-16.973-20.196-16.973-42.325 0-26.426 11.387-43.398 11.602-17.188 34.59-24.922h-59.942v-30.508h61.875q7.305 0 13.106-4.727 5.8-4.941 5.8-11.172 0-8.808-7.304-15.039h-73.477v-29.648H260.62q23.203 0 34.805-9.668 11.601-9.883 11.601-29.434 0-19.98-19.336-32.87h7.735q22.773 16.542 22.773 44.902 0 25.136-16.113 41.035-15.898 15.683-43.398 15.683zm45.977 112.793q0-21.914-13.965-36.738-13.965-15.039-35.45-15.039-21.698 0-34.374 16.113-12.461 15.899-12.461 34.16 0 16.543 12.246 32.227t36.523 15.684q20.196 0 33.731-13.75 13.75-13.75 13.75-32.657m59.512 168.867q0-19.12-22.989-63.164 4.512 18.907 4.512 32.442 0 51.348-39.101 51.348-32.442 0-47.48-54.786-11.388 54.786-47.481 54.786-20.625 0-33.301-18.047-11.387-16.114-11.387-37.168 0-16.973 9.668-30.508 10.313-14.61 26.211-14.61 20.195 0 28.145 24.922l-3.438 1.29q-10.742-14.395-25.137-14.395-13.32 0-21.914 7.95-8.593 7.948-8.593 21.054 0 15.039 12.89 24.922 11.817 9.023 27.285 9.023 32.657 0 47.48-45.547 13.966 45.547 45.118 45.547 32.656 0 32.656-40.82 0-17.832-6.23-38.672-3.867-12.89-9.024-32.871h6.66q7.52 39.316 31.797 80.137 23.418 39.316 23.418 62.52 0 18.905-13.535 18.905-12.89 0-12.89-14.394 0-5.586 3.222-14.395 3.438-8.808 3.438-15.468"/></svg>
````

## File: public/letters/01_ಅ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಅ</text>
6: </svg>
````

## File: public/letters/02_ಆ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಆ</text>
6: </svg>
````

## File: public/letters/03_ಇ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಇ</text>
6: </svg>
````

## File: public/letters/04_ಈ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಈ</text>
6: </svg>
````

## File: public/letters/05_ಉ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಉ</text>
6: </svg>
````

## File: public/letters/06_ಊ_OLD.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಊ</text>
6: </svg>
````

## File: public/letters/06_ಊ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="330" font-family="sans-serif" fill="#000000">ಊ</text>
6: </svg>
````

## File: public/letters/07_ಋ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಋ</text>
6: </svg>
````

## File: public/letters/08_ಎ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಎ</text>
6: </svg>
````

## File: public/letters/09_ಏ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಏ</text>
6: </svg>
````

## File: public/letters/10_ಐ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಐ</text>
6: </svg>
````

## File: public/letters/11_ಒ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಒ</text>
6: </svg>
````

## File: public/letters/12_ಓ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಓ</text>
6: </svg>
````

## File: public/letters/13_ಔ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಔ</text>
6: </svg>
````

## File: public/letters/14_ಅಂ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಅಂ</text>
6: </svg>
````

## File: public/letters/15_ಅಃ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಅಃ</text>
6: </svg>
````

## File: public/letters/16_ಕ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಕ</text>
6: </svg>
````

## File: public/letters/17_ಖ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಖ</text>
6: </svg>
````

## File: public/letters/18_ಗ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಗ</text>
6: </svg>
````

## File: public/letters/19_ಘ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಘ</text>
6: </svg>
````

## File: public/letters/20_ಙ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಙ</text>
6: </svg>
````

## File: public/letters/21_ಚ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಚ</text>
6: </svg>
````

## File: public/letters/22_ಛ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಛ</text>
6: </svg>
````

## File: public/letters/23_ಜ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಜ</text>
6: </svg>
````

## File: public/letters/24_ಝ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಝ</text>
6: </svg>
````

## File: public/letters/25_ಞ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಞ</text>
6: </svg>
````

## File: public/letters/26_ಟ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಟ</text>
6: </svg>
````

## File: public/letters/27_ಠ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಠ</text>
6: </svg>
````

## File: public/letters/28_ಡ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಡ</text>
6: </svg>
````

## File: public/letters/29_ಢ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಢ</text>
6: </svg>
````

## File: public/letters/30_ಣ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಣ</text>
6: </svg>
````

## File: public/letters/31_ತ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ತ</text>
6: </svg>
````

## File: public/letters/32_ಥ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಥ</text>
6: </svg>
````

## File: public/letters/33_ದ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ದ</text>
6: </svg>
````

## File: public/letters/34_ಧ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಧ</text>
6: </svg>
````

## File: public/letters/35_ನ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ನ</text>
6: </svg>
````

## File: public/letters/36_ಪ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಪ</text>
6: </svg>
````

## File: public/letters/37_ಫ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಫ</text>
6: </svg>
````

## File: public/letters/38_ಬ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಬ</text>
6: </svg>
````

## File: public/letters/39_ಭ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಭ</text>
6: </svg>
````

## File: public/letters/40_ಮ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಮ</text>
6: </svg>
````

## File: public/letters/41_ಯ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಯ</text>
6: </svg>
````

## File: public/letters/42_ರ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ರ</text>
6: </svg>
````

## File: public/letters/43_ಲ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಲ</text>
6: </svg>
````

## File: public/letters/44_ವ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ವ</text>
6: </svg>
````

## File: public/letters/45_ಶ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಶ</text>
6: </svg>
````

## File: public/letters/46_ಷ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಷ</text>
6: </svg>
````

## File: public/letters/47_ಸ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಸ</text>
6: </svg>
````

## File: public/letters/48_ಹ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಹ</text>
6: </svg>
````

## File: public/letters/49_ಳ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಳ</text>
6: </svg>
````

## File: public/letters/50_ಕ್ಷ.svg
````
1: <?xml version="1.0" encoding="UTF-8"?>
2: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
3:   <rect width="512" height="512" fill="#FFFFFF"/>
4:   <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
5:         font-size="440" font-family="sans-serif" fill="#000000">ಕ್ಷ</text>
6: </svg>
````

## File: public/sounds/correct.mp3
````
1: Placeholder for correct sound effect
````

## File: public/sounds/finish.mp3
````
1: Placeholder for finish sound effect
````

## File: public/sounds/incorrect.mp3
````
1: Placeholder for incorrect sound effect
````

## File: public/sounds/tick.mp3
````
1: Placeholder for tick sound effect
````

## File: README.md
````markdown
  1: # KannadaKali Database Setup Guide
  2: 
  3: This repository contains the database setup for the KannadaKali app, which uses Supabase with Clerk authentication.
  4: 
  5: ## Database Setup Instructions
  6: 
  7: Follow these steps to set up your database correctly:
  8: 
  9: 1. **Run the Migration**:
 10:    - Go to Supabase SQL Editor
 11:    - Create a new query
 12:    - Copy the contents of `db/migrations/001_quiz_tables.sql`
 13:    - Run the query to set up all tables, functions, and policies
 14:    - Apply the Clerk integration with `db/migrations/002_clerk_supabase_integration.sql`
 15:    - Apply the profiles setup with `db/migrations/003_profiles_sync.sql`
 16: 
 17: 2. **Verify Database Setup**:
 18:    After running the migration, run these verification queries to ensure everything is set up correctly:
 19: 
 20:    ```sql
 21:    -- Verify tables exist
 22:    SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'quiz_results') AS quiz_results_exists,
 23:        EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'progress') AS progress_exists,
 24:        EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'word_stats') AS word_stats_exists,
 25:        EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'profiles') AS profiles_exists,
 26:        EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'leaderboard') AS leaderboard_exists;
 27: 
 28:    -- Verify RLS policies
 29:    SELECT tablename, policyname FROM pg_policies 
 30:    WHERE schemaname = 'public' 
 31:    ORDER BY tablename, policyname;
 32: 
 33:    -- Verify auth functions
 34:    SELECT proname, prorettype::regtype 
 35:    FROM pg_proc 
 36:    WHERE pronamespace = 'auth'::regnamespace 
 37:    AND proname IN ('jwt', 'uid');
 38:    ```
 39: 
 40: 3. **Configure Environment Variables**:
 41:    - Update your `.env.local` file with the correct values
 42:    - See `db/migrations/ENV_SETUP_GUIDE.md` for detailed instructions
 43: 
 44: 4. **Set Up Clerk Webhook**:
 45:    - Go to the Clerk Dashboard > Webhooks
 46:    - Create a new webhook endpoint with your application URL:
 47:      `https://your-domain.com/api/clerk-webhook`
 48:    - Select the following events:
 49:      - `user.created`
 50:      - `user.updated`
 51:    - Copy the signing secret and add it to your environment variables:
 52:      `CLERK_WEBHOOK_SECRET=whsec_your_signing_secret`
 53:    - This webhook ensures user profiles are immediately synced to Supabase when created or updated in Clerk
 54: 
 55: ## User Profile Synchronization
 56: 
 57: This application automatically synchronizes user profiles between Clerk (authentication provider) and your Supabase database through two mechanisms:
 58: 
 59: 1. **Client-side sync**: When users sign in to the application, the `ProfileSync` component automatically syncs their profile data.
 60: 2. **Webhook sync**: When users sign up or update their profile in Clerk, a webhook event triggers profile synchronization.
 61: 
 62: ### Setting Up Profile Sync
 63: 
 64: To ensure proper profile synchronization:
 65: 
 66: 1. Make sure you have the `profiles` table migration applied in your Supabase database
 67: 2. Set up the Clerk webhook as described in the [Set Up Clerk Webhook](#set-up-clerk-webhook) section
 68: 3. Ensure the `ProfileSync` component is included in your layout for client-side sync
 69: 
 70: For a detailed explanation of how profile synchronization works, see [Profile Sync Architecture](./docs/profile-sync-architecture.md).
 71: 
 72: ## Documentation
 73: 
 74: The following documentation is available to help with setup and troubleshooting:
 75: 
 76: - `db/migrations/README.md` - Overview of migration files
 77: - `db/migrations/ENV_SETUP_GUIDE.md` - How to set up environment variables
 78: - `db/migrations/TROUBLESHOOTING.md` - Solutions for common issues
 79: 
 80: ## Database Schema
 81: 
 82: The database includes the following tables:
 83: 
 84: 1. **profiles** - User profile information
 85:    - `user_id` (TEXT, PK) - Clerk user ID
 86:    - `display_name` (TEXT) - User's display name
 87:    - `profile_image_url` (TEXT) - URL to user's profile image
 88:    - `email` (TEXT) - User's email address
 89:    - `last_sign_in` (TIMESTAMP) - Last sign-in timestamp
 90: 
 91: 2. **quiz_results** - Results from quizzes
 92:    - `id` (UUID, PK) - Unique identifier
 93:    - `user_id` (TEXT) - Clerk user ID
 94:    - `quiz_type` (ENUM: 'rapid_fire', 'standard') - Type of quiz
 95:    - `score` (INTEGER) - Number of correct answers
 96:    - `total_questions` (INTEGER) - Total quiz questions
 97:    - `time_spent` (INTEGER) - Optional time spent on quiz
 98:    - `categories` (TEXT[]) - Optional array of categories
 99: 
100: 3. **progress** - Overall user progress
101:    - `id` (UUID, PK) - Unique identifier
102:    - `user_id` (TEXT) - Clerk user ID
103:    - `stars` (INTEGER) - Stars earned
104:    - `words_learned` (INTEGER) - Words learned count
105:    - `quizzes_played` (INTEGER) - Quizzes completed count
106: 
107: 4. **word_stats** - Per-word performance statistics
108:    - `id` (UUID, PK) - Unique identifier
109:    - `user_id` (TEXT) - Clerk user ID
110:    - `word` (TEXT) - English word
111:    - `kanglish` (TEXT) - Kanglish transliteration
112:    - `kannada` (TEXT) - Optional Kannada script
113:    - `icon` (TEXT) - Optional icon URL
114:    - `category` (TEXT) - Optional word category
115:    - `total_attempts` (INTEGER) - Times attempted
116:    - `correct_count` (INTEGER) - Times answered correctly
117: 
118: 5. **leaderboard** - Aggregated user quiz statistics for leaderboard
119:    - `user_id` (TEXT, PK) - Clerk user ID
120:    - `total_attempts` (INTEGER) - Total quiz answers attempted
121:    - `correct_answers` (INTEGER) - Total correct quiz answers
122:    - `accuracy_percentage` (NUMERIC) - Percentage of correct answers
123:    - `quizzes_completed` (INTEGER) - Number of quizzes completed
124:    - `categories` (TEXT[]) - Array of categories attempted
125:    - `last_updated` (TIMESTAMP) - When stats were last updated
126: 
127: ## Row Level Security
128: 
129: All tables have RLS policies that:
130: - Allow users to view only their own data
131: - Allow users to create data only with their own user_id
132: - Allow users to update/delete only their own data
133: - Profiles table has additional policy to allow authenticated users to view all profiles
134: 
135: ## Leaderboard System
136: 
137: The application includes a dynamic leaderboard system that automatically tracks user performance across quizzes.
138: 
139: ### Key Features
140: 
141: - Real-time accuracy percentage tracking
142: - Category-based filtering
143: - Automatic updates when users complete quizzes
144: - Display of user rank position
145: - User profile integration with display names and avatars
146: 
147: ### How it Works
148: 
149: 1. **Automatic Updates**: The leaderboard is updated automatically via database triggers whenever a user submits quiz results.
150: 2. **Profile Syncing**: User profiles are synced from Clerk to the database when users sign in.
151: 3. **Top Performers**: The top 5 users by accuracy percentage are displayed on the leaderboard.
152: 4. **User Position**: If a user isn't in the top 5, their position is shown at the bottom of the leaderboard.
153: 5. **Category Filtering**: Users can filter the leaderboard by word category.
154: 
155: ### Technical Implementation
156: 
157: #### Database Triggers
158: 
159: The system uses PostgreSQL triggers to maintain the leaderboard:
160: 
161: 1. When a quiz result is submitted, the `update_leaderboard_from_quiz()` function is called
162: 2. This function:
163:    - Calculates the user's new statistics
164:    - Updates their entry in the leaderboard table
165:    - Records the categories they've attempted
166: 
167: #### Profile Synchronization
168: 
169: User profiles are automatically synchronized with Clerk through multiple mechanisms:
170: 
171: 1. **Client-Side Sync**: A `ProfileSync` component runs when users sign in to the app
172: 2. **Webhook Sync**: Clerk webhooks notify Supabase when users are created or updated
173: 3. **Manual Sync**: The `/api/sync-profiles` endpoint allows forced synchronization
174: 
175: All of these methods use the `sync_clerk_profile()` SQL function to ensure consistent profile data.
176: 
177: #### Performance Optimization
178: 
179: The leaderboard is optimized for performance:
180: 
181: 1. Aggregated statistics are stored in a dedicated table
182: 2. An index on `accuracy_percentage` enables efficient sorting
183: 3. Categories are stored as an array for efficient filtering
184: 4. Real-time updates are enabled through Supabase's realtime feature
185: 
186: ## Troubleshooting Common Issues
187: 
188: ### "Tenant or user not found" Error
189: This indicates an issue with Clerk-Supabase integration. See the detailed troubleshooting steps in `db/migrations/TROUBLESHOOTING.md`.
190: 
191: ### Database Type Mismatch Errors
192: If you see errors about UUID vs TEXT comparison, ensure you're using the latest migration which properly handles type casting with `auth.uid()::text`.
193: 
194: ### Profile Sync Issues
195: If user profiles aren't appearing in the leaderboard:
196: 1. Check browser console for sync errors
197: 2. Verify that the Clerk webhook is properly configured
198: 3. Try manually syncing via the API endpoint `/api/sync-profiles`
199: 4. Check Supabase logs for any SQL errors in the sync functions
200: 
201: ## Additional Resources
202: 
203: For more detailed information:
204: - See the Clerk documentation on JWT Templates
205: - See the Supabase documentation on Row Level Security
206: - Check the Drizzle ORM documentation for query syntax
````

## File: scripts/pathify-all.js
````javascript
  1: import { optimize } from "svgo";
  2: import fs from "node:fs/promises";
  3: import path from "node:path";
  4: import { execSync } from "child_process";
  5: 
  6: const inDir = path.join(process.cwd(), "public", "letters");
  7: const outDir = path.join(process.cwd(), "public", "letters_paths");
  8: 
  9: 
 10: async function convertTextToPath(svgContent, filePath) {
 11: 
 12:   const tempFile = path.join(process.cwd(), "temp.svg");
 13:   await fs.writeFile(tempFile, svgContent);
 14: 
 15:   try {
 16: 
 17:     execSync(`inkscape --export-filename=${filePath} --export-text-to-path ${tempFile}`);
 18:     return true;
 19:   } catch (error) {
 20:     console.error(`Error converting ${path.basename(filePath)}:`, error.message);
 21:     return false;
 22:   } finally {
 23: 
 24:     try {
 25:       await fs.unlink(tempFile);
 26:     } catch (e) {
 27: 
 28:     }
 29:   }
 30: }
 31: 
 32: 
 33: function cleanupSvg(svgContent) {
 34: 
 35:   svgContent = svgContent.replace(/<path fill="#FFF" d="M0 0h512v512H0z"\/>/, '');
 36: 
 37:   // Remove unnecessary attributes from the letter path
 38:   svgContent = svgContent.replace(/ aria-label="[^"]*"/, '');
 39:   svgContent = svgContent.replace(/ style="[^"]*"/, '');
 40: 
 41:   // Remove any empty lines
 42:   svgContent = svgContent.replace(/^\s*[\r\n]/gm, '');
 43: 
 44:   return svgContent;
 45: }
 46: 
 47: async function main() {
 48:   try {
 49:     // Check if Inkscape is installed
 50:     try {
 51:       execSync("inkscape --version");
 52:     } catch (error) {
 53:       console.error("Error: Inkscape is not installed. Please install it first:");
 54:       console.error("  - macOS: brew install inkscape");
 55:       console.error("  - Linux: sudo apt-get install inkscape");
 56:       console.error("  - Windows: Download from https://inkscape.org/release");
 57:       process.exit(1);
 58:     }
 59: 
 60:     await fs.mkdir(outDir, { recursive: true });
 61:     const files = await fs.readdir(inDir);
 62: 
 63:     for (const file of files) {
 64:       if (!file.endsWith('.svg')) continue;
 65: 
 66:       const src = await fs.readFile(path.join(inDir, file), "utf8");
 67:       const outFile = path.join(outDir, file);
 68: 
 69: 
 70:       const success = await convertTextToPath(src, outFile);
 71:       if (!success) continue;
 72: 
 73: 
 74:       let optimized = await fs.readFile(outFile, "utf8");
 75:       optimized = cleanupSvg(optimized);
 76: 
 77: 
 78:       const { data } = optimize(optimized, {
 79:         multipass: true,
 80:         plugins: [
 81:           {
 82:             name: "preset-default",
 83:             params: {
 84:               overrides: {
 85:                 convertShapeToPath: true,
 86:                 removeViewBox: false
 87:               }
 88:             }
 89:           },
 90:           {
 91:             name: "removeAttrs",
 92:             params: {
 93:               attrs: ["fill", "aria-label", "style"]
 94:             }
 95:           }
 96:         ]
 97:       });
 98: 
 99:       await fs.writeFile(outFile, data);
100:       console.log("✓", file);
101:     }
102: 
103:     console.log("\nConversion complete! Files saved to:", outDir);
104:   } catch (error) {
105:     console.error("Error:", error.message);
106:     process.exit(1);
107:   }
108: }
109: 
110: main();
````

## File: tailwind.config.ts
````typescript
 1: import type { Config } from "tailwindcss"
 2: 
 3: const config = {
 4:   darkMode: ["class"],
 5:   content: [
 6:     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
 7:     "./components/**/*.{js,ts,jsx,tsx,mdx}",
 8:     "./app/**/*.{js,ts,jsx,tsx,mdx}",
 9:     "./lib/**/*.{ts,tsx}",
10:     './src/**/*.{ts,tsx}',
11:   ],
12:   prefix: "",
13:   theme: {
14:     container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
15:     extend: {
16:       fontFamily: {
17:         poppins: ["var(--font-poppins)"],
18:         "noto-sans-kannada": ["var(--font-noto-sans-kannada)"],
19:         montserrat: ['Montserrat', 'sans-serif'],
20:       },
21:       colors: {
22:         border: "hsl(var(--border))",
23:         input: "hsl(var(--input))",
24:         ring: "hsl(var(--ring))",
25:         background: "hsl(var(--background))",
26:         foreground: "hsl(var(--foreground))",
27:         primary: {
28:           DEFAULT: "hsl(var(--primary))",
29:           foreground: "hsl(var(--primary-foreground))"
30:         },
31:         secondary: {
32:           DEFAULT: "hsl(var(--secondary))",
33:           foreground: "hsl(var(--secondary-foreground))"
34:         },
35:         destructive: {
36:           DEFAULT: "hsl(var(--destructive))",
37:           foreground: "hsl(var(--destructive-foreground))"
38:         },
39:         muted: {
40:           DEFAULT: "hsl(var(--muted))",
41:           foreground: "hsl(var(--muted-foreground))"
42:         },
43:         accent: {
44:           DEFAULT: "#FF6F61",
45:           foreground: "hsl(var(--accent-foreground))"
46:         },
47:         popover: {
48:           DEFAULT: "hsl(var(--popover))",
49:           foreground: "hsl(var(--popover-foreground))"
50:         },
51:         card: {
52:           DEFAULT: "hsl(var(--card))",
53:           foreground: "hsl(var(--card-foreground))"
54:         },
55:         sidebar: {
56:           DEFAULT: "hsl(var(--sidebar-background))",
57:           foreground: "hsl(var(--sidebar-foreground))",
58:           primary: "hsl(var(--sidebar-primary))",
59:           "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
60:           accent: "hsl(var(--sidebar-accent))",
61:           "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
62:           border: "hsl(var(--sidebar-border))",
63:           ring: "hsl(var(--sidebar-ring))"
64:         }
65:       },
66:       borderRadius: {
67:         lg: "var(--radius)",
68:         md: "calc(var(--radius) - 2px)",
69:         sm: "calc(var(--radius) - 4px)"
70:       },
71:       keyframes: {
72:         "accordion-down": {
73:           from: { height: "0" },
74:           to: { height: "var(--radix-accordion-content-height)" }
75:         },
76:         "accordion-up": {
77:           from: { height: "var(--radix-accordion-content-height)" },
78:           to: { height: "0" }
79:         },
80:         gradient: { to: { backgroundPosition: "var(--bg-size) 0" } }
81:       },
82:       animation: {
83:         "accordion-down": "accordion-down 0.2s ease-out",
84:         "accordion-up": "accordion-up 0.2s ease-out",
85:         gradient: "gradient 8s linear infinite"
86:       }
87:     }
88:   },
89:   plugins: [
90:     require("tailwindcss-animate"),
91:     require("@tailwindcss/typography")
92:   ]
93: } satisfies Config
94: 
95: export default config
````

## File: tsconfig.json
````json
 1: /*
 2: Configures the TypeScript compiler options for KannadaKali.
 3: Ensures type safety, module resolution, and Next.js compatibility.
 4: 
 5: Key features:
 6: - Path alias `@/*`: Simplifies imports from root directory.
 7: - Strict mode: Enforces type checking for robustness.
 8: 
 9: Dependencies:
10: - Next.js: Requires specific plugins and JSX settings.
11: 
12: Notes:
13: - `noEmit` is true as Next.js handles compilation.
14: - Includes all TypeScript files for comprehensive checking.
15: */
16: 
17: {
18:   "compilerOptions": {
19:     "lib": ["dom", "dom.iterable", "esnext"],
20:     "allowJs": true,
21:     "skipLibCheck": true,
22:     "strict": true,
23:     "noEmit": true,
24:     "esModuleInterop": true,
25:     "module": "esnext",
26:     "moduleResolution": "bundler",
27:     "resolveJsonModule": true,
28:     "isolatedModules": true,
29:     "jsx": "preserve",
30:     "incremental": true,
31:     "plugins": [{ "name": "next" }],
32:     "paths": { "@/*": ["./*"] },
33:     "target": "ES2017"
34:   },
35:   "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
36:   "exclude": ["node_modules"]
37: }
````

## File: types/index.ts
````typescript
1: export * from "./server-action-types"
2: export * from "./kannada-types"
3: export * from "./progress-types"
````

## File: types/kannada-types.ts
````typescript
 1: export interface KannadaEntry {
 2:   kannada?: string
 3:   english?: string
 4:   category?: string
 5:   icon?: string | null
 6:   waudio?: string | null
 7:   kanglish?: string
 8:   ksentence?: string | null
 9:   esentence?: string | null
10:   kesentence?: string | null
11:   image?: string | null
12:   saudio?: string | null
13: }
````

## File: types/progress-types.ts
````typescript
1: import { InsertProgress, SelectProgress } from "@/db/schema/progress-schema"
2: 
3: 
4: export type Progress = SelectProgress
````

## File: types/server-action-types.ts
````typescript
1: export type ActionState<T> =
2:   | { isSuccess: true; message: string; data: T }
3:   | { isSuccess: false; message: string; data?: never }
````
