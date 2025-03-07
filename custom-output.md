

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

## Additional Info

# Directory Structure
```
.cursor/rules/auth.mdc
.cursor/rules/backend.mdc
.cursor/rules/env.mdc
.cursor/rules/frontend.mdc
.cursor/rules/general.mdc
.cursor/rules/payments.mdc
.cursor/rules/storage.mdc
.cursor/rules/types.mdc
.cursorrules
.env.example
.eslintrc.json
.gitignore
.husky/pre-commit
.repo_ignore
actions/csv-actions.ts
actions/db/profiles-actions.ts
actions/db/progress-actions.ts
actions/db/quiz-results-actions.ts
actions/storage-actions.ts
actions/stripe-actions.ts
app/(auth)/layout.tsx
app/(auth)/login/[[...login]]/page.tsx
app/(auth)/signup/[[...signup]]/page.tsx
app/(marketing)/_components/client-redirect.tsx
app/(marketing)/_components/marketing-layout-client.tsx
app/(marketing)/about/page.tsx
app/(marketing)/contact/_components/contact-form.tsx
app/(marketing)/contact/page.tsx
app/(marketing)/features/page.tsx
app/(marketing)/layout.tsx
app/(marketing)/page_client-reference-manifest.js
app/(marketing)/page.tsx
app/(marketing)/pricing/page.tsx
app/api/stripe/webhooks/route.ts
app/cards/_components/card-client-wrapper.tsx
app/cards/_components/card-grid.tsx
app/cards/_components/cards-fetcher.tsx
app/cards/page.tsx
app/globals.css
app/landing/hero.tsx
app/landing/page.tsx
app/layout.tsx
app/page.tsx
app/parental/_components/progress-display.tsx
app/parental/_components/quiz-results-display.tsx
app/parental/page.tsx
app/quiz/_components/quiz-fetcher.tsx
app/quiz/_components/rapid-fire-quiz-fetcher.tsx
app/quiz/page.tsx
components.json
components/landing/footer.tsx
components/landing/header.tsx
components/landing/hero.tsx
components/magicui/animated-gradient-text.tsx
components/magicui/hero-video-dialog.tsx
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
components/ui/expanded-card.tsx
components/ui/form.tsx
components/ui/header-with-motion.tsx
components/ui/hover-card.tsx
components/ui/input-otp.tsx
components/ui/input.tsx
components/ui/label.tsx
components/ui/menubar.tsx
components/ui/navigation-menu.tsx
components/ui/pagination.tsx
components/ui/popover.tsx
components/ui/progress.tsx
components/ui/quiz-component.tsx
components/ui/radio-group.tsx
components/ui/rapid-fire-quiz.tsx
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
db/schema/index.ts
db/schema/profiles-schema.ts
db/schema/progress-schema.ts
db/schema/quiz-results-schema.ts
drizzle.config.ts
lib/csv-parser.ts
lib/hooks/use-copy-to-clipboard.tsx
lib/hooks/use-mobile.tsx
lib/hooks/use-toast.ts
lib/stripe.ts
lib/supabase.ts
lib/utils.ts
license
middleware.ts
next.config.mjs
package.json
postcss.config.mjs
prettier.config.cjs
public/data/kannada-kali.csv
public/sounds/correct.mp3
public/sounds/finish.mp3
public/sounds/incorrect.mp3
public/sounds/tick.mp3
README.md
repomix.config.json
tailwind.config.ts
tsconfig.json
types/index.ts
types/kannada-types.ts
types/progress-types.ts
types/server-action-types.ts
```

# Files

## File: .cursor/rules/auth.mdc
````
 1: ---
 2: description: Follow these rules when working on auth.
 3: globs: 
 4: ---
 5: # Auth Rules
 6: 
 7: Follow these rules when working on auth.
 8: 
 9: It uses Clerk for authentication.
10: 
11: ## General Rules
12: 
13: - Import the auth helper with `import { auth } from "@clerk/nextjs/server"` in server components
14: - await the auth helper in server action
````

## File: .cursor/rules/backend.mdc
````
  1: ---
  2: description: Follow these rules when working on the backend.
  3: globs: 
  4: ---
  5: # Backend Rules
  6: 
  7: Follow these rules when working on the backend.
  8: 
  9: It uses Postgres, Supabase, Drizzle ORM, and Server Actions.
 10: 
 11: ## General Rules
 12: 
 13: - Never generate migrations. You do not have to do anything in the `db/migrations` folder inluding migrations and metadata. Ignore it.
 14: 
 15: ## Organization
 16: 
 17: ## Schemas
 18: 
 19: - When importing schemas, use `@/db/schema`
 20: - Name files like `example-schema.ts`
 21: - All schemas should go in `db/schema`
 22: - Make sure to export the schema in `db/schema/index.ts`
 23: - Make sure to add the schema to the `schema` object in `db/db.ts`
 24: - If using a userId, always use `userId: text("user_id").notNull()`
 25: - Always include createdAt and updatedAt columns in all tables
 26: - Make sure to cascade delete when necessary
 27: - Use enums for columns that have a limited set of possible values such as:
 28: 
 29: ```ts
 30: import { pgEnum } from "drizzle-orm/pg-core"
 31: 
 32: export const membershipEnum = pgEnum("membership", ["free", "pro"])
 33: 
 34: membership: membershipEnum("membership").notNull().default("free")
 35: ```
 36: 
 37: Example of a schema:
 38: 
 39: `db/schema/todos-schema.ts`
 40: 
 41: ```ts
 42: import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
 43: 
 44: export const todosTable = pgTable("todos", {
 45:   id: uuid("id").defaultRandom().primaryKey(),
 46:   userId: text("user_id").notNull(),
 47:   content: text("content").notNull(),
 48:   completed: boolean("completed").default(false).notNull(),
 49:   createdAt: timestamp("created_at").defaultNow().notNull(),
 50:   updatedAt: timestamp("updated_at")
 51:     .defaultNow()
 52:     .notNull()
 53:     .$onUpdate(() => new Date())
 54: })
 55: 
 56: export type InsertTodo = typeof todosTable.$inferInsert
 57: export type SelectTodo = typeof todosTable.$inferSelect
 58: ```
 59: 
 60: And exporting it:
 61: 
 62: `db/schema/index.ts`
 63: 
 64: ```ts
 65: export * from "./todos-schema"
 66: ```
 67: 
 68: And adding it to the schema in `db/db.ts`:
 69: 
 70: `db/db.ts`
 71: 
 72: ```ts
 73: import { todosTable } from "@/db/schema"
 74: 
 75: const schema = {
 76:   todos: todosTable
 77: }
 78: ```
 79: 
 80: And a more complex schema:
 81: 
 82: ```ts
 83: import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
 84: 
 85: export const chatsTable = pgTable("chats", {
 86:   id: uuid("id").defaultRandom().primaryKey(),
 87:   userId: text("user_id").notNull(),
 88:   name: text("name").notNull(),
 89:   createdAt: timestamp("created_at").defaultNow().notNull(),
 90:   updatedAt: timestamp("updated_at")
 91:     .defaultNow()
 92:     .notNull()
 93:     .$onUpdate(() => new Date())
 94: })
 95: 
 96: export type InsertChat = typeof chatsTable.$inferInsert
 97: export type SelectChat = typeof chatsTable.$inferSelect
 98: ```
 99: 
100: ```ts
101: import { pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
102: import { chatsTable } from "./chats-schema"
103: 
104: export const roleEnum = pgEnum("role", ["assistant", "user"])
105: 
106: export const messagesTable = pgTable("messages", {
107:   id: uuid("id").defaultRandom().primaryKey(),
108:   chatId: uuid("chat_id")
109:     .references(() => chatsTable.id, { onDelete: "cascade" })
110:     .notNull(),
111:   content: text("content").notNull(),
112:   role: roleEnum("role").notNull(),
113:   createdAt: timestamp("created_at").defaultNow().notNull(),
114:   updatedAt: timestamp("updated_at")
115:     .defaultNow()
116:     .notNull()
117:     .$onUpdate(() => new Date())
118: })
119: 
120: export type InsertMessage = typeof messagesTable.$inferInsert
121: export type SelectMessage = typeof messagesTable.$inferSelect
122: ```
123: 
124: And exporting it:
125: 
126: `db/schema/index.ts`
127: 
128: ```ts
129: export * from "./chats-schema"
130: export * from "./messages-schema"
131: ```
132: 
133: And adding it to the schema in `db/db.ts`:
134: 
135: `db/db.ts`
136: 
137: ```ts
138: import { chatsTable, messagesTable } from "@/db/schema"
139: 
140: const schema = {
141:   chats: chatsTable,
142:   messages: messagesTable
143: }
144: ```
145: 
146: ## Server Actions
147: 
148: - When importing actions, use `@/actions` or `@/actions/db` if db related
149: - DB related actions should go in the `actions/db` folder
150: - Other actions should go in the `actions` folder
151: - Name files like `example-actions.ts`
152: - All actions should go in the `actions` folder
153: - Only write the needed actions
154: - Return an ActionState with the needed data type from actions
155: - Include Action at the end of function names `Ex: exampleFunction -> exampleFunctionAction`
156: - Actions should return a Promise<ActionState<T>>
157: - Sort in CRUD order: Create, Read, Update, Delete
158: - Make sure to return undefined as the data type if the action is not supposed to return any data
159: - **Date Handling:** For columns defined as `PgDateString` (or any date string type), always convert JavaScript `Date` objects to ISO strings using `.toISOString()` before performing operations (e.g., comparisons or insertions). This ensures value type consistency and prevents type errors.
160: 
161: ```ts
162: export type ActionState<T> =
163:   | { isSuccess: true; message: string; data: T }
164:   | { isSuccess: false; message: string; data?: never }
165: ```
166: 
167: Example of an action:
168: 
169: `actions/db/todos-actions.ts`
170: 
171: ```ts
172: "use server"
173: 
174: import { db } from "@/db/db"
175: import { InsertTodo, SelectTodo, todosTable } from "@/db/schema/todos-schema"
176: import { ActionState } from "@/types"
177: import { eq } from "drizzle-orm"
178: 
179: export async function createTodoAction(
180:   todo: InsertTodo
181: ): Promise<ActionState<SelectTodo>> {
182:   try {
183:     const [newTodo] = await db.insert(todosTable).values(todo).returning()
184:     return {
185:       isSuccess: true,
186:       message: "Todo created successfully",
187:       data: newTodo
188:     }
189:   } catch (error) {
190:     console.error("Error creating todo:", error)
191:     return { isSuccess: false, message: "Failed to create todo" }
192:   }
193: }
194: 
195: export async function getTodosAction(
196:   userId: string
197: ): Promise<ActionState<SelectTodo[]>> {
198:   try {
199:     const todos = await db.query.todos.findMany({
200:       where: eq(todosTable.userId, userId)
201:     })
202:     return {
203:       isSuccess: true,
204:       message: "Todos retrieved successfully",
205:       data: todos
206:     }
207:   } catch (error) {
208:     console.error("Error getting todos:", error)
209:     return { isSuccess: false, message: "Failed to get todos" }
210:   }
211: }
212: 
213: export async function updateTodoAction(
214:   id: string,
215:   data: Partial<InsertTodo>
216: ): Promise<ActionState<SelectTodo>> {
217:   try {
218:     const [updatedTodo] = await db
219:       .update(todosTable)
220:       .set(data)
221:       .where(eq(todosTable.id, id))
222:       .returning()
223: 
224:     return {
225:       isSuccess: true,
226:       message: "Todo updated successfully",
227:       data: updatedTodo
228:     }
229:   } catch (error) {
230:     console.error("Error updating todo:", error)
231:     return { isSuccess: false, message: "Failed to update todo" }
232:   }
233: }
234: 
235: export async function deleteTodoAction(id: string): Promise<ActionState<void>> {
236:   try {
237:     await db.delete(todosTable).where(eq(todosTable.id, id))
238:     return {
239:       isSuccess: true,
240:       message: "Todo deleted successfully",
241:       data: undefined
242:     }
243:   } catch (error) {
244:     console.error("Error deleting todo:", error)
245:     return { isSuccess: false, message: "Failed to delete todo" }
246:   }
247: }
248: ```
````

## File: .cursor/rules/env.mdc
````
 1: ---
 2: description: Follow these rules when working with environment variables.
 3: globs: 
 4: ---
 5: # Env Rules
 6: 
 7: - If you update environment variables, update the `.env.example` file
 8: - All environment variables should go in `.env.local`
 9: - Do not expose environment variables to the frontend
10: - Use `NEXT_PUBLIC_` prefix for environment variables that need to be accessed from the frontend
11: - You may import environment variables in server actions and components by using `process.env.VARIABLE_NAME`
````

## File: .cursor/rules/frontend.mdc
````
  1: ---
  2: description: Follow these rules when working on the frontend.
  3: globs: 
  4: ---
  5: # Frontend Rules
  6: 
  7: Follow these rules when working on the frontend.
  8: 
  9: It uses Next.js, Tailwind, Shadcn, and Framer Motion.
 10: 
 11: ## General Rules
 12: 
 13: - Use `lucide-react` for icons
 14: - useSidebar must be used within a SidebarProvider
 15: 
 16: ## Components
 17: 
 18: - Use divs instead of other html tags unless otherwise specified
 19: - Separate the main parts of a component's html with an extra blank line for visual spacing
 20: - Always tag a component with either `use server` or `use client` at the top, including layouts and pages
 21: 
 22: ### Organization
 23: 
 24: - All components be named using kebab case like `example-component.tsx` unless otherwise specified
 25: - Put components in `/_components` in the route if one-off components
 26: - Put components in `/components` from the root if shared components
 27: 
 28: ### Data Fetching
 29: 
 30: - Fetch data in server components and pass the data down as props to client components.
 31: - Use server actions from `/actions` to mutate data.
 32: 
 33: ### Server Components
 34: 
 35: - Use `"use server"` at the top of the file.
 36: - Implement Suspense for asynchronous data fetching to show loading states while data is being fetched.
 37: - If no asynchronous logic is required for a given server component, you do not need to wrap the component in `<Suspense>`. You can simply return the final UI directly since there is no async boundary needed.
 38: - If asynchronous fetching is required, you can use a `<Suspense>` boundary and a fallback to indicate a loading state while data is loading.
 39: - Server components cannot be imported into client components. If you want to use a server component in a client component, you must pass the as props using the "children" prop
 40: - params in server pages should be awaited such as `const { courseId } = await params` where the type is `params: Promise<{ courseId: string }>`
 41: 
 42: Example of a server layout:
 43: 
 44: ```tsx
 45: "use server"
 46: 
 47: export default async function ExampleServerLayout({
 48:   children
 49: }: {
 50:   children: React.ReactNode
 51: }) {
 52:   return children
 53: }
 54: ```
 55: 
 56: Example of a server page (with async logic):
 57: 
 58: ```tsx
 59: "use server"
 60: 
 61: import { Suspense } from "react"
 62: import { SomeAction } from "@/actions/some-actions"
 63: import SomeComponent from "./_components/some-component"
 64: import SomeSkeleton from "./_components/some-skeleton"
 65: 
 66: export default async function ExampleServerPage() {
 67:   return (
 68:     <Suspense fallback={<SomeSkeleton className="some-class" />}>
 69:       <SomeComponentFetcher />
 70:     </Suspense>
 71:   )
 72: }
 73: 
 74: async function SomeComponentFetcher() {
 75:   const { data } = await SomeAction()
 76:   return <SomeComponent className="some-class" initialData={data || []} />
 77: }
 78: ```
 79: 
 80: Example of a server page (no async logic required):
 81: 
 82: ```tsx
 83: "use server"
 84: 
 85: import SomeClientComponent from "./_components/some-client-component"
 86: 
 87: // In this case, no asynchronous work is being done, so no Suspense or fallback is required.
 88: export default async function ExampleServerPage() {
 89:   return <SomeClientComponent initialData={[]} />
 90: }
 91: ```
 92: 
 93: Example of a server component:
 94: 
 95: ```tsx
 96: "use server"
 97: 
 98: interface ExampleServerComponentProps {
 99:   // Your props here
100: }
101: 
102: export async function ExampleServerComponent({
103:   props
104: }: ExampleServerComponentProps) {
105:   // Your code here
106: }
107: ```
108: 
109: ### Client Components
110: 
111: - Use `"use client"` at the top of the file
112: - Client components can safely rely on props passed down from server components, or handle UI interactions without needing <Suspense> if there’s no async logic.
113: - Never use server actions in client components. If you need to create a new server action, create it in `/actions`
114: 
115: Example of a client page:
116: 
117: ```tsx
118: "use client"
119: 
120: export default function ExampleClientPage() {
121:   // Your code here
122: }
123: ```
124: 
125: Example of a client component:
126: 
127: ```tsx
128: "use client"
129: 
130: interface ExampleClientComponentProps {
131:   initialData: any[]
132: }
133: 
134: export default function ExampleClientComponent({
135:   initialData
136: }: ExampleClientComponentProps) {
137:   // Client-side logic here
138:   return <div>{initialData.length} items</div>
139: }
140: ```
````

## File: .cursor/rules/general.mdc
````
 1: ---
 2: description: Follow these rules for all requests.
 3: globs: 
 4: ---
 5: # Project Instructions
 6: 
 7: Use specification and guidelines as you build the app.
 8: 
 9: Write the complete code for every step. Do not get lazy.
10: 
11: Your goal is to completely finish whatever I ask for.
12: 
13: You will see  tags in the code. These are context tags that you should use to help you understand the codebase.
14: 
15: ## Overview
16: 
17: This is a web app template.
18: 
19: ## Tech Stack
20: 
21: - Frontend: Next.js, Tailwind, Shadcn, Framer Motion
22: - Backend: Postgres, Supabase, Drizzle ORM, Server Actions
23: - Auth: Clerk
24: - Payments: Stripe
25: - Deployment: Vercel
26: 
27: ## Project Structure
28: 
29: - `actions` - Server actions
30:   - `db` - Database related actions
31:   - Other actions
32: - `app` - Next.js app router
33:   - `api` - API routes
34:   - `route` - An example route
35:     - `_components` - One-off components for the route
36:     - `layout.tsx` - Layout for the route
37:     - `page.tsx` - Page for the route
38: - `components` - Shared components
39:   - `ui` - UI components
40:   - `utilities` - Utility components
41: - `db` - Database
42:   - `schema` - Database schemas
43: - `lib` - Library code
44:   - `hooks` - Custom hooks
45: - `prompts` - Prompt files
46: - `public` - Static assets
47: - `types` - Type definitions
48: 
49: ## Rules
50: 
51: Follow these rules when building the app.
52: 
53: ### General Rules
54: 
55: - All files should have a comment at the very top of the file that consisely explain what it does
56: - Use `@` to import anything from the app unless otherwise specified
57: - Use kebab case for all files and folders unless otherwise specified
58: - Don't update shadcn components unless otherwise specified
````

## File: .cursor/rules/payments.mdc
````
1: ---
2: description: Follow these rules when working on payments.
3: globs: 
4: ---
5: # Payments Rules
6: 
7: Follow these rules when working on payments.
8: 
9: It uses Stripe for payments.
````

## File: .cursor/rules/storage.mdc
````
  1: ---
  2: description: Follow these rules when working on file storage.
  3: globs: 
  4: ---
  5: # Storage Rules
  6: 
  7: Follow these rules when working with Supabase Storage.
  8: 
  9: It uses Supabase Storage for file uploads, downloads, and management.
 10: 
 11: ## General Rules
 12: 
 13: - Always use environment variables for bucket names to maintain consistency across environments
 14: - Never hardcode bucket names in the application code
 15: - Always handle file size limits and allowed file types at the application level
 16: - Use the `upsert` method instead of `upload` when you want to replace existing files
 17: - Always implement proper error handling for storage operations
 18: - Use content-type headers when uploading files to ensure proper file handling
 19: 
 20: ## Organization
 21: 
 22: ### Buckets
 23: 
 24: - Name buckets in kebab-case: `user-uploads`, `profile-images`
 25: - Create separate buckets for different types of files (e.g., `profile-images`, `documents`, `attachments`)
 26: - Document bucket purposes in a central location
 27: - Set appropriate bucket policies (public/private) based on access requirements
 28: - Implement RLS (Row Level Security) policies for buckets that need user-specific access
 29: - Make sure to let me know instructions for setting up RLS policies on Supabase since you can't do this yourself, including the SQL scripts I need to run in the editor
 30: 
 31: ### File Structure
 32: 
 33: - Organize files in folders based on their purpose and ownership
 34: - Use predictable, collision-resistant naming patterns
 35: - Structure: `{bucket}/{userId}/{purpose}/{filename}`
 36: - Example: `profile-images/123e4567-e89b/avatar/profile.jpg`
 37: - Include timestamps in filenames when version history is important
 38: - Example: `documents/123e4567-e89b/contracts/2024-02-13-contract.pdf`
 39: 
 40: ## Actions
 41: 
 42: - When importing storage actions, use `@/actions/storage`
 43: - Name files like `example-storage-actions.ts`
 44: - Include Storage at the end of function names `Ex: uploadFile -> uploadFileStorage`
 45: - Follow the same ActionState pattern as DB actions
 46: 
 47: Example of a storage action:
 48: 
 49: ```ts
 50: "use server"
 51: 
 52: import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
 53: import { ActionState } from "@/types"
 54: 
 55: export async function uploadFileStorage(
 56:   bucket: string,
 57:   path: string,
 58:   file: File
 59: ): Promise<ActionState<{ path: string }>> {
 60:   try {
 61:     const supabase = createClientComponentClient()
 62:     
 63:     const { data, error } = await supabase
 64:       .storage
 65:       .from(bucket)
 66:       .upload(path, file, {
 67:         upsert: false,
 68:         contentType: file.type
 69:       })
 70: 
 71:     if (error) throw error
 72: 
 73:     return {
 74:       isSuccess: true,
 75:       message: "File uploaded successfully",
 76:       data: { path: data.path }
 77:     }
 78:   } catch (error) {
 79:     console.error("Error uploading file:", error)
 80:     return { isSuccess: false, message: "Failed to upload file" }
 81:   }
 82: }
 83: ```
 84: 
 85: ## File Handling
 86: 
 87: ### Upload Rules
 88: 
 89: - Always validate file size before upload
 90: - Implement file type validation using both extension and MIME type
 91: - Generate unique filenames to prevent collisions
 92: - Set appropriate content-type headers
 93: - Handle existing files appropriately (error or upsert)
 94: 
 95: Example validation:
 96: 
 97: ```ts
 98: const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
 99: const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"]
100: 
101: function validateFile(file: File): boolean {
102:   if (file.size > MAX_FILE_SIZE) {
103:     throw new Error("File size exceeds limit")
104:   }
105:   
106:   if (!ALLOWED_TYPES.includes(file.type)) {
107:     throw new Error("File type not allowed")
108:   }
109:   
110:   return true
111: }
112: ```
113: 
114: ### Download Rules
115: 
116: - Always handle missing files gracefully
117: - Implement proper error handling for failed downloads
118: - Use signed URLs for private files
119: 
120: ### Delete Rules
121: 
122: - Implement soft deletes when appropriate
123: - Clean up related database records when deleting files
124: - Handle bulk deletions carefully
125: - Verify ownership before deletion
126: - Always delete all versions/transforms of a file
127: 
128: ## Security
129: 
130: ### Bucket Policies
131: 
132: - Make buckets private by default
133: - Only make buckets public when absolutely necessary
134: - Use RLS policies to restrict access to authorized users
135: - Example RLS policy:
136: 
137: ```sql
138: CREATE POLICY "Users can only access their own files"
139: ON storage.objects
140: FOR ALL
141: USING (auth.uid()::text = (storage.foldername(name))[1]);
142: ```
143: 
144: ### Access Control
145: 
146: - Generate short-lived signed URLs for private files
147: - Implement proper CORS policies
148: - Use separate buckets for public and private files
149: - Never expose internal file paths
150: - Validate user permissions before any operation
151: 
152: ## Error Handling
153: 
154: - Implement specific error types for common storage issues
155: - Always provide meaningful error messages
156: - Implement retry logic for transient failures
157: - Log storage errors separately for monitoring
158: 
159: ## Optimization
160: 
161: - Implement progressive upload for large files
162: - Clean up temporary files and failed uploads
163: - Use batch operations when handling multiple files
````

## File: .cursor/rules/types.mdc
````
 1: ---
 2: description: Follow these rules when working with types.
 3: globs: 
 4: ---
 5: # Type Rules
 6: 
 7: - When importing types, use `@/types`
 8: - Name files like `example-types.ts`
 9: - All types should go in `types`
10: - Make sure to export the types in `types/index.ts`
11: - Prefer interfaces over type aliases
12: - If referring to db types, use `@/db/schema` such as `SelectTodo` from `todos-schema.ts`
13: 
14: An example of a type:
15: 
16: `types/actions-types.ts`
17: 
18: ```ts
19: export type ActionState<T> =
20:   | { isSuccess: true; message: string; data: T }
21:   | { isSuccess: false; message: string; data?: never }
22: ```
23: 
24: And exporting it:
25: 
26: `types/index.ts`
27: 
28: ```ts
29: export * from "./actions-types"
30: ```
````

## File: .cursorrules
````
  1: # Project Instructions
  2: 
  3: Use specification and guidelines as you build the app.
  4: 
  5: Write the complete code for every step. Do not get lazy.
  6: 
  7: Your goal is to completely finish whatever I ask for.
  8: 
  9: You will see tags in the code. These are context tags that you should use to help you understand the codebase.
 10: 
 11: ## Overview
 12: 
 13: This is a web app template.
 14: 
 15: ## Tech Stack
 16: 
 17: - Frontend: Next.js, Tailwind, Shadcn, Framer Motion
 18: - Backend: Postgres, Supabase, Drizzle ORM, Server Actions
 19: - Auth: Clerk
 20: - Payments: Stripe
 21: - Deployment: Vercel
 22: 
 23: ## Project Structure
 24: 
 25: - `actions` - Server actions
 26:   - `db` - Database related actions
 27:   - Other actions
 28: - `app` - Next.js app router
 29:   - `api` - API routes
 30:   - `route` - An example route
 31:     - `_components` - One-off components for the route
 32:     - `layout.tsx` - Layout for the route
 33:     - `page.tsx` - Page for the route
 34: - `components` - Shared components
 35:   - `ui` - UI components
 36:   - `utilities` - Utility components
 37: - `db` - Database
 38:   - `schema` - Database schemas
 39: - `lib` - Library code
 40:   - `hooks` - Custom hooks
 41: - `prompts` - Prompt files
 42: - `public` - Static assets
 43: - `types` - Type definitions
 44: 
 45: ## Rules
 46: 
 47: Follow these rules when building the app.
 48: 
 49: ### General Rules
 50: 
 51: - Use `@` to import anything from the app unless otherwise specified
 52: - Use kebab case for all files and folders unless otherwise specified
 53: - Don't update shadcn components unless otherwise specified
 54: 
 55: #### Env Rules
 56: 
 57: - If you update environment variables, update the `.env.example` file
 58: - All environment variables should go in `.env.local`
 59: - Do not expose environment variables to the frontend
 60: - Use `NEXT_PUBLIC_` prefix for environment variables that need to be accessed from the frontend
 61: - You may import environment variables in server actions and components by using `process.env.VARIABLE_NAME`
 62: 
 63: #### Type Rules
 64: 
 65: Follow these rules when working with types.
 66: 
 67: - When importing types, use `@/types`
 68: - Name files like `example-types.ts`
 69: - All types should go in `types`
 70: - Make sure to export the types in `types/index.ts`
 71: - Prefer interfaces over type aliases
 72: - If referring to db types, use `@/db/schema` such as `SelectTodo` from `todos-schema.ts`
 73: 
 74: An example of a type:
 75: 
 76: `types/actions-types.ts`
 77: 
 78: ```ts
 79: export type ActionState<T> =
 80:   | { isSuccess: true; message: string; data: T }
 81:   | { isSuccess: false; message: string; data?: never }
 82: ```
 83: 
 84: And exporting it:
 85: 
 86: `types/index.ts`
 87: 
 88: ```ts
 89: export * from "./actions-types"
 90: ```
 91: 
 92: ### Frontend Rules
 93: 
 94: Follow these rules when working on the frontend.
 95: 
 96: It uses Next.js, Tailwind, Shadcn, and Framer Motion.
 97: 
 98: #### General Rules
 99: 
100: - Use `lucide-react` for icons
101: - useSidebar must be used within a SidebarProvider
102: 
103: #### Components
104: 
105: - Use divs instead of other html tags unless otherwise specified
106: - Separate the main parts of a component's html with an extra blank line for visual spacing
107: - Always tag a component with either `use server` or `use client` at the top, including layouts and pages
108: 
109: ##### Organization
110: 
111: - All components be named using kebab case like `example-component.tsx` unless otherwise specified
112: - Put components in `/_components` in the route if one-off components
113: - Put components in `/components` from the root if shared components
114: 
115: ##### Data Fetching
116: 
117: - Fetch data in server components and pass the data down as props to client components.
118: - Use server actions from `/actions` to mutate data.
119: 
120: ##### Server Components
121: 
122: - Use `"use server"` at the top of the file.
123: - Implement Suspense for asynchronous data fetching to show loading states while data is being fetched.
124: - If no asynchronous logic is required for a given server component, you do not need to wrap the component in `<Suspense>`. You can simply return the final UI directly since there is no async boundary needed.
125: - If asynchronous fetching is required, you can use a `<Suspense>` boundary and a fallback to indicate a loading state while data is loading.
126: - Server components cannot be imported into client components. If you want to use a server component in a client component, you must pass the as props using the "children" prop
127: - params in server pages should be awaited such as `const { courseId } = await params` where the type is `params: Promise<{ courseId: string }>`
128: 
129: Example of a server layout:
130: 
131: ```tsx
132: "use server"
133: 
134: export default async function ExampleServerLayout({
135:   children
136: }: {
137:   children: React.ReactNode
138: }) {
139:   return children
140: }
141: ```
142: 
143: Example of a server page (with async logic):
144: 
145: ```tsx
146: "use server"
147: 
148: import { Suspense } from "react"
149: import { SomeAction } from "@/actions/some-actions"
150: import SomeComponent from "./_components/some-component"
151: import SomeSkeleton from "./_components/some-skeleton"
152: 
153: export default async function ExampleServerPage() {
154:   return (
155:     <Suspense fallback={<SomeSkeleton className="some-class" />}>
156:       <SomeComponentFetcher />
157:     </Suspense>
158:   )
159: }
160: 
161: async function SomeComponentFetcher() {
162:   const { data } = await SomeAction()
163:   return <SomeComponent className="some-class" initialData={data || []} />
164: }
165: ```
166: 
167: Example of a server page (no async logic required):
168: 
169: ```tsx
170: "use server"
171: 
172: import SomeClientComponent from "./_components/some-client-component"
173: 
174: // In this case, no asynchronous work is being done, so no Suspense or fallback is required.
175: export default async function ExampleServerPage() {
176:   return <SomeClientComponent initialData={[]} />
177: }
178: ```
179: 
180: Example of a server component:
181: 
182: ```tsx
183: "use server"
184: 
185: interface ExampleServerComponentProps {
186:   // Your props here
187: }
188: 
189: export async function ExampleServerComponent({
190:   props
191: }: ExampleServerComponentProps) {
192:   // Your code here
193: }
194: ```
195: 
196: ##### Client Components
197: 
198: - Use `"use client"` at the top of the file
199: - Client components can safely rely on props passed down from server components, or handle UI interactions without needing <Suspense> if there’s no async logic.
200: - Never use server actions in client components. If you need to create a new server action, create it in `/actions`
201: 
202: Example of a client page:
203: 
204: ```tsx
205: "use client"
206: 
207: export default function ExampleClientPage() {
208:   // Your code here
209: }
210: ```
211: 
212: Example of a client component:
213: 
214: ```tsx
215: "use client"
216: 
217: interface ExampleClientComponentProps {
218:   initialData: any[]
219: }
220: 
221: export default function ExampleClientComponent({
222:   initialData
223: }: ExampleClientComponentProps) {
224:   // Client-side logic here
225:   return <div>{initialData.length} items</div>
226: }
227: ```
228: 
229: ### Backend Rules
230: 
231: Follow these rules when working on the backend.
232: 
233: It uses Postgres, Supabase, Drizzle ORM, and Server Actions.
234: 
235: #### General Rules
236: 
237: - Never generate migrations. You do not have to do anything in the `db/migrations` folder inluding migrations and metadata. Ignore it.
238: 
239: #### Organization
240: 
241: #### Schemas
242: 
243: - When importing schemas, use `@/db/schema`
244: - Name files like `example-schema.ts`
245: - All schemas should go in `db/schema`
246: - Make sure to export the schema in `db/schema/index.ts`
247: - Make sure to add the schema to the `schema` object in `db/db.ts`
248: - If using a userId, always use `userId: text("user_id").notNull()`
249: - Always include createdAt and updatedAt columns in all tables
250: - Make sure to cascade delete when necessary
251: - Use enums for columns that have a limited set of possible values such as:
252: 
253: ```ts
254: import { pgEnum } from "drizzle-orm/pg-core"
255: 
256: export const membershipEnum = pgEnum("membership", ["free", "pro"])
257: 
258: membership: membershipEnum("membership").notNull().default("free")
259: ```
260: 
261: Example of a schema:
262: 
263: `db/schema/todos-schema.ts`
264: 
265: ```ts
266: import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
267: 
268: export const todosTable = pgTable("todos", {
269:   id: uuid("id").defaultRandom().primaryKey(),
270:   userId: text("user_id").notNull(),
271:   content: text("content").notNull(),
272:   completed: boolean("completed").default(false).notNull(),
273:   createdAt: timestamp("created_at").defaultNow().notNull(),
274:   updatedAt: timestamp("updated_at")
275:     .defaultNow()
276:     .notNull()
277:     .$onUpdate(() => new Date())
278: })
279: 
280: export type InsertTodo = typeof todosTable.$inferInsert
281: export type SelectTodo = typeof todosTable.$inferSelect
282: ```
283: 
284: And exporting it:
285: 
286: `db/schema/index.ts`
287: 
288: ```ts
289: export * from "./todos-schema"
290: ```
291: 
292: And adding it to the schema in `db/db.ts`:
293: 
294: `db/db.ts`
295: 
296: ```ts
297: import { todosTable } from "@/db/schema"
298: 
299: const schema = { todos: todosTable }
300: ```
301: 
302: And a more complex schema:
303: 
304: ```ts
305: import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
306: 
307: export const chatsTable = pgTable("chats", {
308:   id: uuid("id").defaultRandom().primaryKey(),
309:   userId: text("user_id").notNull(),
310:   name: text("name").notNull(),
311:   createdAt: timestamp("created_at").defaultNow().notNull(),
312:   updatedAt: timestamp("updated_at")
313:     .defaultNow()
314:     .notNull()
315:     .$onUpdate(() => new Date())
316: })
317: 
318: export type InsertChat = typeof chatsTable.$inferInsert
319: export type SelectChat = typeof chatsTable.$inferSelect
320: ```
321: 
322: ```ts
323: import { pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
324: import { chatsTable } from "./chats-schema"
325: 
326: export const roleEnum = pgEnum("role", ["assistant", "user"])
327: 
328: export const messagesTable = pgTable("messages", {
329:   id: uuid("id").defaultRandom().primaryKey(),
330:   chatId: uuid("chat_id")
331:     .references(() => chatsTable.id, { onDelete: "cascade" })
332:     .notNull(),
333:   content: text("content").notNull(),
334:   role: roleEnum("role").notNull(),
335:   createdAt: timestamp("created_at").defaultNow().notNull(),
336:   updatedAt: timestamp("updated_at")
337:     .defaultNow()
338:     .notNull()
339:     .$onUpdate(() => new Date())
340: })
341: 
342: export type InsertMessage = typeof messagesTable.$inferInsert
343: export type SelectMessage = typeof messagesTable.$inferSelect
344: ```
345: 
346: And exporting it:
347: 
348: `db/schema/index.ts`
349: 
350: ```ts
351: export * from "./chats-schema"
352: export * from "./messages-schema"
353: ```
354: 
355: And adding it to the schema in `db/db.ts`:
356: 
357: `db/db.ts`
358: 
359: ```ts
360: import { chatsTable, messagesTable } from "@/db/schema"
361: 
362: const schema = { chats: chatsTable, messages: messagesTable }
363: ```
364: 
365: #### Server Actions
366: 
367: - When importing actions, use `@/actions` or `@/actions/db` if db related
368: - DB related actions should go in the `actions/db` folder
369: - Other actions should go in the `actions` folder
370: - Name files like `example-actions.ts`
371: - All actions should go in the `actions` folder
372: - Only write the needed actions
373: - Return an ActionState with the needed data type from actions
374: - Include Action at the end of function names `Ex: exampleFunction -> exampleFunctionAction`
375: - Actions should return a Promise<ActionState<T>>
376: - Sort in CRUD order: Create, Read, Update, Delete
377: - Make sure to return undefined as the data type if the action is not supposed to return any data
378: - **Date Handling:** For columns defined as `PgDateString` (or any date string type), always convert JavaScript `Date` objects to ISO strings using `.toISOString()` before performing operations (e.g., comparisons or insertions). This ensures value type consistency and prevents type errors.
379: 
380: ```ts
381: export type ActionState<T> =
382:   | { isSuccess: true; message: string; data: T }
383:   | { isSuccess: false; message: string; data?: never }
384: ```
385: 
386: Example of an action:
387: 
388: `actions/db/todos-actions.ts`
389: 
390: ```ts
391: "use server"
392: 
393: import { db } from "@/db/db"
394: import { InsertTodo, SelectTodo, todosTable } from "@/db/schema/todos-schema"
395: import { ActionState } from "@/types"
396: import { eq } from "drizzle-orm"
397: 
398: export async function createTodoAction(
399:   todo: InsertTodo
400: ): Promise<ActionState<SelectTodo>> {
401:   try {
402:     const [newTodo] = await db.insert(todosTable).values(todo).returning()
403:     return {
404:       isSuccess: true,
405:       message: "Todo created successfully",
406:       data: newTodo
407:     }
408:   } catch (error) {
409:     console.error("Error creating todo:", error)
410:     return { isSuccess: false, message: "Failed to create todo" }
411:   }
412: }
413: 
414: export async function getTodosAction(
415:   userId: string
416: ): Promise<ActionState<SelectTodo[]>> {
417:   try {
418:     const todos = await db.query.todos.findMany({
419:       where: eq(todosTable.userId, userId)
420:     })
421:     return {
422:       isSuccess: true,
423:       message: "Todos retrieved successfully",
424:       data: todos
425:     }
426:   } catch (error) {
427:     console.error("Error getting todos:", error)
428:     return { isSuccess: false, message: "Failed to get todos" }
429:   }
430: }
431: 
432: export async function updateTodoAction(
433:   id: string,
434:   data: Partial<InsertTodo>
435: ): Promise<ActionState<SelectTodo>> {
436:   try {
437:     const [updatedTodo] = await db
438:       .update(todosTable)
439:       .set(data)
440:       .where(eq(todosTable.id, id))
441:       .returning()
442: 
443:     return {
444:       isSuccess: true,
445:       message: "Todo updated successfully",
446:       data: updatedTodo
447:     }
448:   } catch (error) {
449:     console.error("Error updating todo:", error)
450:     return { isSuccess: false, message: "Failed to update todo" }
451:   }
452: }
453: 
454: export async function deleteTodoAction(id: string): Promise<ActionState<void>> {
455:   try {
456:     await db.delete(todosTable).where(eq(todosTable.id, id))
457:     return {
458:       isSuccess: true,
459:       message: "Todo deleted successfully",
460:       data: undefined
461:     }
462:   } catch (error) {
463:     console.error("Error deleting todo:", error)
464:     return { isSuccess: false, message: "Failed to delete todo" }
465:   }
466: }
467: ```
468: 
469: ### Auth Rules
470: 
471: Follow these rules when working on auth.
472: 
473: It uses Clerk for authentication.
474: 
475: #### General Rules
476: 
477: - Import the auth helper with `import { auth } from "@clerk/nextjs/server"` in server components
478: - await the auth helper in server actions
479: 
480: ### Payments Rules
481: 
482: Follow these rules when working on payments.
483: 
484: It uses Stripe for payments.
485: 
486: # Storage Rules
487: 
488: Follow these rules when working with Supabase Storage.
489: 
490: It uses Supabase Storage for file uploads, downloads, and management.
491: 
492: ## General Rules
493: 
494: - Always use environment variables for bucket names to maintain consistency across environments
495: - Never hardcode bucket names in the application code
496: - Always handle file size limits and allowed file types at the application level
497: - Use the `upsert` method instead of `upload` when you want to replace existing files
498: - Always implement proper error handling for storage operations
499: - Use content-type headers when uploading files to ensure proper file handling
500: 
501: ## Organization
502: 
503: ### Buckets
504: 
505: - Name buckets in kebab-case: `user-uploads`, `profile-images`
506: - Create separate buckets for different types of files (e.g., `profile-images`, `documents`, `attachments`)
507: - Document bucket purposes in a central location
508: - Set appropriate bucket policies (public/private) based on access requirements
509: - Implement RLS (Row Level Security) policies for buckets that need user-specific access
510: - Make sure to let me know instructions for setting up RLS policies on Supabase since you can't do this yourself, including the SQL scripts I need to run in the editor
511: 
512: ### File Structure
513: 
514: - Organize files in folders based on their purpose and ownership
515: - Use predictable, collision-resistant naming patterns
516: - Structure: `{bucket}/{userId}/{purpose}/{filename}`
517: - Example: `profile-images/123e4567-e89b/avatar/profile.jpg`
518: - Include timestamps in filenames when version history is important
519: - Example: `documents/123e4567-e89b/contracts/2024-02-13-contract.pdf`
520: 
521: ## Actions
522: 
523: - When importing storage actions, use `@/actions/storage`
524: - Name files like `example-storage-actions.ts`
525: - Include Storage at the end of function names `Ex: uploadFile -> uploadFileStorage`
526: - Follow the same ActionState pattern as DB actions
527: 
528: Example of a storage action:
529: 
530: ```ts
531: "use server"
532: 
533: import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
534: import { ActionState } from "@/types"
535: 
536: export async function uploadFileStorage(
537:   bucket: string,
538:   path: string,
539:   file: File
540: ): Promise<ActionState<{ path: string }>> {
541:   try {
542:     const supabase = createClientComponentClient()
543: 
544:     const { data, error } = await supabase.storage
545:       .from(bucket)
546:       .upload(path, file, {
547:         upsert: false,
548:         contentType: file.type
549:       })
550: 
551:     if (error) throw error
552: 
553:     return {
554:       isSuccess: true,
555:       message: "File uploaded successfully",
556:       data: { path: data.path }
557:     }
558:   } catch (error) {
559:     console.error("Error uploading file:", error)
560:     return { isSuccess: false, message: "Failed to upload file" }
561:   }
562: }
563: ```
564: 
565: ## File Handling
566: 
567: ### Upload Rules
568: 
569: - Always validate file size before upload
570: - Implement file type validation using both extension and MIME type
571: - Generate unique filenames to prevent collisions
572: - Set appropriate content-type headers
573: - Handle existing files appropriately (error or upsert)
574: 
575: Example validation:
576: 
577: ```ts
578: const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
579: const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"]
580: 
581: function validateFile(file: File): boolean {
582:   if (file.size > MAX_FILE_SIZE) {
583:     throw new Error("File size exceeds limit")
584:   }
585: 
586:   if (!ALLOWED_TYPES.includes(file.type)) {
587:     throw new Error("File type not allowed")
588:   }
589: 
590:   return true
591: }
592: ```
593: 
594: ### Download Rules
595: 
596: - Always handle missing files gracefully
597: - Implement proper error handling for failed downloads
598: - Use signed URLs for private files
599: 
600: ### Delete Rules
601: 
602: - Implement soft deletes when appropriate
603: - Clean up related database records when deleting files
604: - Handle bulk deletions carefully
605: - Verify ownership before deletion
606: - Always delete all versions/transforms of a file
607: 
608: ## Security
609: 
610: ### Bucket Policies
611: 
612: - Make buckets private by default
613: - Only make buckets public when absolutely necessary
614: - Use RLS policies to restrict access to authorized users
615: - Example RLS policy:
616: 
617: ```sql
618: CREATE POLICY "Users can only access their own files"
619: ON storage.objects
620: FOR ALL
621: USING (auth.uid()::text = (storage.foldername(name))[1]);
622: ```
623: 
624: ### Access Control
625: 
626: - Generate short-lived signed URLs for private files
627: - Implement proper CORS policies
628: - Use separate buckets for public and private files
629: - Never expose internal file paths
630: - Validate user permissions before any operation
631: 
632: ## Error Handling
633: 
634: - Implement specific error types for common storage issues
635: - Always provide meaningful error messages
636: - Implement retry logic for transient failures
637: - Log storage errors separately for monitoring
638: 
639: ## Optimization
640: 
641: - Implement progressive upload for large files
642: - Clean up temporary files and failed uploads
643: - Use batch operations when handling multiple files
````

## File: .env.example
````
 1: # DB
 2: DATABASE_URL=
 3: 
 4: # Supabase
 5: SUPABASE_URL=
 6: SUPABASE_SERVICE_ROLE_KEY=
 7: SUPABASE_BUCKET_RECEIPTS=
 8: 
 9: # Auth
10: NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
11: CLERK_SECRET_KEY=
12: NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
13: NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
14: 
15: # Payments
16: STRIPE_SECRET_KEY=
17: STRIPE_WEBHOOK_SECRET=
18: NEXT_PUBLIC_STRIPE_PAYMENT_LINK_YEARLY=
19: NEXT_PUBLIC_STRIPE_PAYMENT_LINK_MONTHLY=
20: 
21: # AI
22: OPENAI_API_KEY=
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
````

## File: .husky/pre-commit
````
1: #!/usr/bin/env sh
2: 
3: . "$(dirname -- "$0")/_/husky.sh"
4: 
5: npm run lint:fix && npm run format:write && git add .
````

## File: .repo_ignore
````
 1: # Package manager caches
 2: **/node_modules/
 3: **/.npm/
 4: **/__pycache__/
 5: **/.pytest_cache/
 6: **/.mypy_cache/
 7: 
 8: # Build caches
 9: **/.gradle/
10: **/.nuget/
11: **/.cargo/
12: **/.stack-work/
13: **/.ccache/
14: 
15: # IDE and Editor caches
16: **/.idea/
17: **/.vscode/
18: **/*.swp
19: **/*~
20: 
21: # Temp files
22: **/*.tmp
23: **/*.temp
24: **/*.bak
25: 
26: **/*.meta
27: **/package-lock.json
28: 
29: # AI Specific
30: .repo_ignore
31: .cursorrules
32: /.cursor
33: 
34: # Project Specific
35: **/.github
36: **/.husky
37: **/migrations
38: **/public
39: **/.next
40: README.md
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
24:     const csvPath = process.cwd() + "/public/data/kannada-kali.csv"
25:     const csvData = await readFile(csvPath, "utf-8")
26: 
27: 
28:     const parsedData = parseCsv(csvData)
29: 
30:     return {
31:       isSuccess: true,
32:       message: "CSV data loaded successfully",
33:       data: parsedData
34:     }
35:   } catch (error) {
36:     console.error("Error loading CSV:", error)
37:     return {
38:       isSuccess: false,
39:       message: `Failed to load CSV: ${error instanceof Error ? error.message : "Unknown error"}`
40:     }
41:   }
42: }
````

## File: actions/db/profiles-actions.ts
````typescript
  1: "use server"
  2: 
  3: import { db } from "@/db/db"
  4: import {
  5:   InsertProfile,
  6:   profilesTable,
  7:   SelectProfile
  8: } from "@/db/schema/profiles-schema"
  9: import { ActionState } from "@/types"
 10: import { eq } from "drizzle-orm"
 11: 
 12: export async function createProfileAction(
 13:   data: InsertProfile
 14: ): Promise<ActionState<SelectProfile>> {
 15:   try {
 16:     const [newProfile] = await db.insert(profilesTable).values(data).returning()
 17:     return {
 18:       isSuccess: true,
 19:       message: "Profile created successfully",
 20:       data: newProfile
 21:     }
 22:   } catch (error) {
 23:     console.error("Error creating profile:", error)
 24:     return { isSuccess: false, message: "Failed to create profile" }
 25:   }
 26: }
 27: 
 28: export async function getProfileByUserIdAction(
 29:   userId: string
 30: ): Promise<ActionState<SelectProfile>> {
 31:   try {
 32:     const profile = await db.query.profiles.findFirst({
 33:       where: eq(profilesTable.userId, userId)
 34:     })
 35:     if (!profile) {
 36:       return { isSuccess: false, message: "Profile not found" }
 37:     }
 38: 
 39:     return {
 40:       isSuccess: true,
 41:       message: "Profile retrieved successfully",
 42:       data: profile
 43:     }
 44:   } catch (error) {
 45:     console.error("Error getting profile by user id", error)
 46:     return { isSuccess: false, message: "Failed to get profile" }
 47:   }
 48: }
 49: 
 50: export async function updateProfileAction(
 51:   userId: string,
 52:   data: Partial<InsertProfile>
 53: ): Promise<ActionState<SelectProfile>> {
 54:   try {
 55:     const [updatedProfile] = await db
 56:       .update(profilesTable)
 57:       .set(data)
 58:       .where(eq(profilesTable.userId, userId))
 59:       .returning()
 60: 
 61:     if (!updatedProfile) {
 62:       return { isSuccess: false, message: "Profile not found to update" }
 63:     }
 64: 
 65:     return {
 66:       isSuccess: true,
 67:       message: "Profile updated successfully",
 68:       data: updatedProfile
 69:     }
 70:   } catch (error) {
 71:     console.error("Error updating profile:", error)
 72:     return { isSuccess: false, message: "Failed to update profile" }
 73:   }
 74: }
 75: 
 76: export async function updateProfileByStripeCustomerIdAction(
 77:   stripeCustomerId: string,
 78:   data: Partial<InsertProfile>
 79: ): Promise<ActionState<SelectProfile>> {
 80:   try {
 81:     const [updatedProfile] = await db
 82:       .update(profilesTable)
 83:       .set(data)
 84:       .where(eq(profilesTable.stripeCustomerId, stripeCustomerId))
 85:       .returning()
 86: 
 87:     if (!updatedProfile) {
 88:       return {
 89:         isSuccess: false,
 90:         message: "Profile not found by Stripe customer ID"
 91:       }
 92:     }
 93: 
 94:     return {
 95:       isSuccess: true,
 96:       message: "Profile updated by Stripe customer ID successfully",
 97:       data: updatedProfile
 98:     }
 99:   } catch (error) {
100:     console.error("Error updating profile by stripe customer ID:", error)
101:     return {
102:       isSuccess: false,
103:       message: "Failed to update profile by Stripe customer ID"
104:     }
105:   }
106: }
107: 
108: export async function deleteProfileAction(
109:   userId: string
110: ): Promise<ActionState<void>> {
111:   try {
112:     await db.delete(profilesTable).where(eq(profilesTable.userId, userId))
113:     return {
114:       isSuccess: true,
115:       message: "Profile deleted successfully",
116:       data: undefined
117:     }
118:   } catch (error) {
119:     console.error("Error deleting profile:", error)
120:     return { isSuccess: false, message: "Failed to delete profile" }
121:   }
122: }
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
  9: 
 10: 
 11: 
 12: 
 13: 
 14: 
 15: 
 16: export async function saveQuizResultAction(result: {
 17:   quizType: "rapid_fire" | "standard"
 18:   score: number
 19:   totalQuestions: number
 20:   timeSpent?: number
 21:   categories?: string[]
 22: }): Promise<ActionState<SelectQuizResult>> {
 23:   const { userId } = await auth()
 24: 
 25: 
 26:   if (!userId) {
 27:     return { isSuccess: false, message: "Unauthorized: No user ID found" }
 28:   }
 29: 
 30:   try {
 31: 
 32:     const newQuizResult: InsertQuizResult = {
 33:       userId,
 34:       quizType: result.quizType,
 35:       score: result.score,
 36:       totalQuestions: result.totalQuestions,
 37:       timeSpent: result.timeSpent,
 38:       categories: result.categories,
 39:       createdAt: new Date(),
 40:       updatedAt: new Date()
 41:     }
 42: 
 43:     const [savedResult] = await db.insert(quizResultsTable).values(newQuizResult).returning()
 44: 
 45:     return {
 46:       isSuccess: true,
 47:       message: "Quiz result saved successfully",
 48:       data: savedResult
 49:     }
 50:   } catch (error) {
 51:     console.error("Error saving quiz result:", error)
 52:     return { isSuccess: false, message: "Failed to save quiz result" }
 53:   }
 54: }
 55: 
 56: 
 57: 
 58: 
 59: 
 60: 
 61: 
 62: 
 63: export async function getQuizResultsAction(
 64:   limit = 10,
 65:   quizType?: "rapid_fire" | "standard"
 66: ): Promise<ActionState<SelectQuizResult[]>> {
 67:   try {
 68:     const { userId } = await auth()
 69: 
 70: 
 71:     if (!userId) {
 72:       return { isSuccess: false, message: "Unauthorized: No user ID found" }
 73:     }
 74: 
 75:     let results: SelectQuizResult[]
 76: 
 77: 
 78:     if (quizType) {
 79: 
 80:       results = await db
 81:         .select()
 82:         .from(quizResultsTable)
 83:         .where(
 84:           and(
 85:             eq(quizResultsTable.userId, userId),
 86:             eq(quizResultsTable.quizType, quizType)
 87:           )
 88:         )
 89:         .orderBy(desc(quizResultsTable.createdAt))
 90:         .limit(limit)
 91:     } else {
 92: 
 93:       results = await db
 94:         .select()
 95:         .from(quizResultsTable)
 96:         .where(eq(quizResultsTable.userId, userId))
 97:         .orderBy(desc(quizResultsTable.createdAt))
 98:         .limit(limit)
 99:     }
100: 
101:     return {
102:       isSuccess: true,
103:       message: "Quiz results retrieved successfully",
104:       data: results
105:     }
106:   } catch (error) {
107:     console.error("Error retrieving quiz results:", error)
108:     return { isSuccess: false, message: "Failed to retrieve quiz results" }
109:   }
110: }
111: 
112: 
113: 
114: 
115: 
116: 
117: 
118: 
119: 
120: 
121: 
122: export async function getQuizStatsAction(): Promise<ActionState<{
123:   totalQuizzes: number,
124:   averageScore: number,
125:   bestScore: number,
126:   recentResults: SelectQuizResult[]
127: }>> {
128:   try {
129:     const { userId } = await auth()
130: 
131: 
132:     if (!userId) {
133:       return { isSuccess: false, message: "Unauthorized: No user ID found" }
134:     }
135: 
136:     const results = await db
137:       .select()
138:       .from(quizResultsTable)
139:       .where(eq(quizResultsTable.userId, userId))
140:       .orderBy(desc(quizResultsTable.createdAt))
141: 
142:     if (results.length === 0) {
143:       return {
144:         isSuccess: true,
145:         message: "No quiz results found",
146:         data: {
147:           totalQuizzes: 0,
148:           averageScore: 0,
149:           bestScore: 0,
150:           recentResults: []
151:         }
152:       }
153:     }
154: 
155: 
156:     const totalQuizzes = results.length
157:     const totalScorePercentage = results.reduce((sum, result) =>
158:       sum + (result.score / result.totalQuestions * 100), 0)
159:     const averageScore = Math.round(totalScorePercentage / totalQuizzes)
160: 
161:     const bestScorePercentage = Math.max(
162:       ...results.map(result => result.score / result.totalQuestions * 100)
163:     )
164:     const bestScore = Math.round(bestScorePercentage)
165: 
166: 
167:     const recentResults = results.slice(0, 5)
168: 
169:     return {
170:       isSuccess: true,
171:       message: "Quiz statistics retrieved successfully",
172:       data: {
173:         totalQuizzes,
174:         averageScore,
175:         bestScore,
176:         recentResults
177:       }
178:     }
179:   } catch (error) {
180:     console.error("Error retrieving quiz statistics:", error)
181:     return { isSuccess: false, message: "Failed to retrieve quiz statistics" }
182:   }
183: }
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
  6: import { stripe } from "@/lib/stripe"
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
 32:   return stripe.subscriptions.retrieve(subscriptionId, {
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
 80:     const product = await stripe.products.retrieve(productId)
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
 7:     <div className="flex min-h-screen items-center justify-center bg-background">
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
 7:     <div className="flex min-h-screen items-center justify-center bg-background">
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

## File: app/(marketing)/_components/client-redirect.tsx
````typescript
 1: "use client"
 2: 
 3: import { useEffect } from "react"
 4: import { useRouter } from "next/navigation"
 5: 
 6: 
 7: 
 8: 
 9: export default function ClientRedirect() {
10:   const router = useRouter()
11: 
12:   useEffect(() => {
13:     router.push("/")
14:   }, [router])
15: 
16:   return null
17: }
````

## File: app/(marketing)/_components/marketing-layout-client.tsx
````typescript
 1: "use client"
 2: 
 3: import { Footer } from "@/components/landing/footer"
 4: import Header from "@/components/landing/header"
 5: 
 6: interface MarketingLayoutClientProps {
 7:   children: React.ReactNode
 8: }
 9: 
10: export function MarketingLayoutClient({ children }: MarketingLayoutClientProps) {
11:   return (
12:     <div className="flex min-h-screen flex-col">
13:       <Header />
14:       <div className="flex-1">{children}</div>
15:       <Footer />
16:     </div>
17:   )
18: }
````

## File: app/(marketing)/about/page.tsx
````typescript
 1: "use client"
 2: 
 3: import { Card, CardContent } from "@/components/ui/card"
 4: 
 5: export default function AboutPage() {
 6:   return (
 7:     <div className="container mx-auto py-12">
 8:       <h1 className="mb-8 text-center text-4xl font-bold">About Us</h1>
 9: 
10:       <div className="space-y-8">
11:         <Card>
12:           <CardContent className="pt-6">
13:             <h2 className="mb-4 text-2xl font-semibold">Our Story</h2>
14:             <p className="text-muted-foreground">
15:               We are passionate about building tools that help people work
16:               smarter and achieve more. Our platform combines cutting-edge
17:               technology with intuitive design to create a seamless experience
18:               for our users.
19:             </p>
20:           </CardContent>
21:         </Card>
22: 
23:         <Card>
24:           <CardContent className="pt-6">
25:             <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
26:             <p className="text-muted-foreground">
27:               Our mission is to empower individuals and organizations with
28:               innovative solutions that drive productivity and success. We
29:               believe in creating technology that adapts to how people work, not
30:               the other way around.
31:             </p>
32:           </CardContent>
33:         </Card>
34: 
35:         <Card>
36:           <CardContent className="pt-6">
37:             <h2 className="mb-4 text-2xl font-semibold">Core Values</h2>
38:             <ul className="text-muted-foreground list-inside list-disc space-y-2">
39:               <li>Innovation in everything we do</li>
40:               <li>Customer success is our success</li>
41:               <li>Transparency and trust</li>
42:               <li>Continuous improvement</li>
43:             </ul>
44:           </CardContent>
45:         </Card>
46:       </div>
47:     </div>
48:   )
49: }
````

## File: app/(marketing)/contact/_components/contact-form.tsx
````typescript
 1: "use client"
 2: 
 3: import { Button } from "@/components/ui/button"
 4: import {
 5:   Form,
 6:   FormControl,
 7:   FormField,
 8:   FormItem,
 9:   FormLabel,
10:   FormMessage
11: } from "@/components/ui/form"
12: import { Input } from "@/components/ui/input"
13: import { Textarea } from "@/components/ui/textarea"
14: import { zodResolver } from "@hookform/resolvers/zod"
15: import { useForm } from "react-hook-form"
16: import * as z from "zod"
17: 
18: const formSchema = z.object({
19:   name: z.string().min(2, "Name must be at least 2 characters"),
20:   email: z.string().email("Please enter a valid email address"),
21:   message: z.string().min(10, "Message must be at least 10 characters")
22: })
23: 
24: export default function ContactForm() {
25:   const form = useForm<z.infer<typeof formSchema>>({
26:     resolver: zodResolver(formSchema),
27:     defaultValues: { name: "", email: "", message: "" }
28:   })
29: 
30:   async function onSubmit(values: z.infer<typeof formSchema>) {
31:     // In a real app, you would handle the form submission here
32:     // For example, sending the data to your API route
33:     console.log(values)
34:   }
35: 
36:   return (
37:     <Form {...form}>
38:       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
39:         <FormField
40:           control={form.control}
41:           name="name"
42:           render={({ field }) => (
43:             <FormItem>
44:               <FormLabel>Name</FormLabel>
45:               <FormControl>
46:                 <Input placeholder="Your name" {...field} />
47:               </FormControl>
48:               <FormMessage />
49:             </FormItem>
50:           )}
51:         />
52: 
53:         <FormField
54:           control={form.control}
55:           name="email"
56:           render={({ field }) => (
57:             <FormItem>
58:               <FormLabel>Email</FormLabel>
59:               <FormControl>
60:                 <Input placeholder="you@example.com" type="email" {...field} />
61:               </FormControl>
62:               <FormMessage />
63:             </FormItem>
64:           )}
65:         />
66: 
67:         <FormField
68:           control={form.control}
69:           name="message"
70:           render={({ field }) => (
71:             <FormItem>
72:               <FormLabel>Message</FormLabel>
73:               <FormControl>
74:                 <Textarea
75:                   placeholder="How can we help?"
76:                   className="min-h-[120px]"
77:                   {...field}
78:                 />
79:               </FormControl>
80:               <FormMessage />
81:             </FormItem>
82:           )}
83:         />
84: 
85:         <Button type="submit" className="w-full">
86:           Send Message
87:         </Button>
88:       </form>
89:     </Form>
90:   )
91: }
````

## File: app/(marketing)/contact/page.tsx
````typescript
 1: "use client"
 2: 
 3: import {
 4:   Card,
 5:   CardContent,
 6:   CardDescription,
 7:   CardHeader,
 8:   CardTitle
 9: } from "@/components/ui/card"
10: import ContactForm from "./_components/contact-form"
11: 
12: export default function ContactPage() {
13:   return (
14:     <div className="container mx-auto max-w-xl py-12">
15:       <Card>
16:         <CardHeader>
17:           <CardTitle className="text-2xl">Contact Us</CardTitle>
18:           <CardDescription>
19:             Have questions or feedback? We'd love to hear from you.
20:           </CardDescription>
21:         </CardHeader>
22:         <CardContent>
23:           <ContactForm />
24:         </CardContent>
25:       </Card>
26:     </div>
27:   )
28: }
````

## File: app/(marketing)/features/page.tsx
````typescript
 1: "use client"
 2: 
 3: import { Card, CardContent } from "@/components/ui/card"
 4: import { BarChart, Clock, Settings, Shield, Users, Zap } from "lucide-react"
 5: 
 6: interface FeatureProps {
 7:   title: string
 8:   description: string
 9:   icon: React.ReactNode
10: }
11: 
12: function Feature({ title, description, icon }: FeatureProps) {
13:   return (
14:     <Card className="border-none shadow-none">
15:       <CardContent className="p-0">
16:         <div className="bg-primary/5 mb-4 inline-block rounded-lg p-2">
17:           {icon}
18:         </div>
19:         <h3 className="mb-2 text-xl font-medium">{title}</h3>
20:         <p className="text-muted-foreground">{description}</p>
21:       </CardContent>
22:     </Card>
23:   )
24: }
25: 
26: export default function FeaturesPage() {
27:   const features = [
28:     {
29:       title: "Analytics Dashboard",
30:       description:
31:         "Get real-time insights into your application's performance and user behavior.",
32:       icon: <BarChart className="size-6 text-primary" />
33:     },
34:     {
35:       title: "User Management",
36:       description:
37:         "Easily manage user accounts, permissions, and authentication.",
38:       icon: <Users className="size-6 text-primary" />
39:     },
40:     {
41:       title: "Advanced Security",
42:       description:
43:         "Enterprise-grade security measures to protect your data and privacy.",
44:       icon: <Shield className="size-6 text-primary" />
45:     },
46:     {
47:       title: "Automation Tools",
48:       description:
49:         "Automate repetitive tasks and workflows to improve productivity.",
50:       icon: <Zap className="size-6 text-primary" />
51:     },
52:     {
53:       title: "Custom Configurations",
54:       description:
55:         "Tailor the platform to your specific needs with easy configuration options.",
56:       icon: <Settings className="size-6 text-primary" />
57:     },
58:     {
59:       title: "Real-time Updates",
60:       description:
61:         "Stay up-to-date with instant notifications and real-time data synchronization.",
62:       icon: <Clock className="size-6 text-primary" />
63:     }
64:   ]
65: 
66:   return (
67:     <div className="container mx-auto py-12">
68:       <h1 className="mb-4 text-center text-4xl font-bold">Platform Features</h1>
69:       <p className="mb-12 text-center text-lg text-muted-foreground">
70:         Discover the powerful capabilities that help you achieve more
71:       </p>
72: 
73:       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
74:         {features.map((feature, index) => (
75:           <Feature
76:             key={index}
77:             title={feature.title}
78:             description={feature.description}
79:             icon={feature.icon}
80:           />
81:         ))}
82:       </div>
83:     </div>
84:   )
85: }
````

## File: app/(marketing)/layout.tsx
````typescript
 1: "use server"
 2: 
 3: 
 4: import { MarketingLayoutClient } from "@/app/(marketing)/_components/marketing-layout-client"
 5: 
 6: export default async function MarketingLayout({
 7:   children
 8: }: {
 9:   children: React.ReactNode
10: }) {
11:   return <MarketingLayoutClient>{children}</MarketingLayoutClient>
12: }
````

## File: app/(marketing)/page_client-reference-manifest.js
````javascript
 1: self.__RSC_MANIFEST = {
 2:   "ssrModuleMapping": {},
 3:   "edgeSSRModuleMapping": {},
 4:   "csrModuleMapping": {},
 5:   "reactServerComponents": {
 6:     "client-reference": {
 7:       "id": "",
 8:       "chunks": [],
 9:       "name": ""
10:     }
11:   },
12:   "clientModules": {
13:     "C:\\": {
14:       "id": "",
15:       "chunks": [],
16:       "name": ""
17:     }
18:   }
19: }
````

## File: app/(marketing)/page.tsx
````typescript
1: 
````

## File: app/(marketing)/pricing/page.tsx
````typescript
  1: "use client"
  2: 
  3: import { Button } from "@/components/ui/button"
  4: import {
  5:   Card,
  6:   CardContent,
  7:   CardDescription,
  8:   CardFooter,
  9:   CardHeader,
 10:   CardTitle
 11: } from "@/components/ui/card"
 12: import { Badge } from "@/components/ui/badge"
 13: import { Check } from "lucide-react"
 14: import { useAuth } from "@clerk/nextjs"
 15: 
 16: export default function PricingPage() {
 17:   const { userId } = useAuth();
 18:   const safeUserId = userId || null;
 19: 
 20:   const pricingPlans = [
 21:     {
 22:       title: "Free",
 23:       price: "$0",
 24:       description: "Basic features for personal use",
 25:       buttonText: "Get Started",
 26:       buttonLink: safeUserId ? "/dashboard" : "/sign-up",
 27:       features: [
 28:         "5 flashcards per day",
 29:         "Basic progress tracking",
 30:         "Limited quiz access",
 31:         "Community support"
 32:       ],
 33:       popular: false
 34:     },
 35:     {
 36:       title: "Pro",
 37:       price: "$9.99",
 38:       description: "Advanced features for serious learners",
 39:       buttonText: "Upgrade to Pro",
 40:       buttonLink: safeUserId ? "/checkout?plan=pro" : "/sign-up?plan=pro",
 41:       features: [
 42:         "Unlimited flashcards",
 43:         "Advanced progress analytics",
 44:         "All quiz types",
 45:         "Priority support",
 46:         "Offline mode",
 47:         "Custom study plans"
 48:       ],
 49:       popular: true
 50:     },
 51:     {
 52:       title: "Family",
 53:       price: "$19.99",
 54:       description: "Everything in Pro for up to 5 users",
 55:       buttonText: "Get Family Plan",
 56:       buttonLink: safeUserId ? "/checkout?plan=family" : "/sign-up?plan=family",
 57:       features: [
 58:         "Everything in Pro",
 59:         "Up to 5 user accounts",
 60:         "Shared progress tracking",
 61:         "Family challenges",
 62:         "Parent dashboard",
 63:         "Premium support"
 64:       ],
 65:       popular: false
 66:     }
 67:   ]
 68: 
 69:   return (
 70:     <div className="container mx-auto py-12">
 71:       <h1 className="mb-4 text-center text-4xl font-bold">Pricing Plans</h1>
 72:       <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
 73:         Choose the perfect plan for your Kannada learning journey
 74:       </p>
 75: 
 76:       <div className="grid gap-8 md:grid-cols-3">
 77:         {pricingPlans.map((plan, index) => (
 78:           <PricingCard
 79:             key={index}
 80:             title={plan.title}
 81:             price={plan.price}
 82:             description={plan.description}
 83:             buttonText={plan.buttonText}
 84:             buttonLink={plan.buttonLink}
 85:             features={plan.features}
 86:             userId={safeUserId}
 87:             popular={plan.popular}
 88:           />
 89:         ))}
 90:       </div>
 91:     </div>
 92:   )
 93: }
 94: 
 95: interface PricingCardProps {
 96:   title: string
 97:   price: string
 98:   description: string
 99:   buttonText: string
100:   buttonLink: string
101:   features: string[]
102:   userId: string | null
103:   popular: boolean
104: }
105: 
106: function PricingCard({
107:   title,
108:   price,
109:   description,
110:   buttonText,
111:   buttonLink,
112:   features,
113:   userId,
114:   popular
115: }: PricingCardProps) {
116:   return (
117:     <Card
118:       className={`relative flex h-full flex-col ${
119:         popular
120:           ? "border-primary shadow-lg"
121:           : "border-border"
122:       }`}
123:     >
124:       {popular && (
125:         <Badge
126:           className="bg-primary text-primary-foreground absolute right-4 top-4"
127:           variant="outline"
128:         >
129:           Popular
130:         </Badge>
131:       )}
132:       <CardHeader>
133:         <CardTitle>{title}</CardTitle>
134:         <div className="mt-4 flex items-baseline text-5xl font-extrabold">
135:           {price}
136:           <span className="text-muted-foreground ml-2 text-xl font-normal">
137:             /month
138:           </span>
139:         </div>
140:         <CardDescription className="pt-4">{description}</CardDescription>
141:       </CardHeader>
142:       <CardContent className="flex-grow">
143:         <ul className="space-y-3">
144:           {features.map((feature, index) => (
145:             <li key={index} className="flex items-center">
146:               <Check className="text-primary mr-2 h-5 w-5" />
147:               <span>{feature}</span>
148:             </li>
149:           ))}
150:         </ul>
151:       </CardContent>
152:       <CardFooter>
153:         <Button
154:           className={`w-full ${
155:             popular ? "bg-primary hover:bg-primary/90" : ""
156:           }`}
157:           asChild
158:         >
159:           <a href={buttonLink}>{buttonText}</a>
160:         </Button>
161:       </CardFooter>
162:     </Card>
163:   )
164: }
````

## File: app/api/stripe/webhooks/route.ts
````typescript
 1: import {
 2:   manageSubscriptionStatusChange,
 3:   updateStripeCustomer
 4: } from "@/actions/stripe-actions"
 5: import { stripe } from "@/lib/stripe"
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
26:     event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
27:   } catch (err: any) {
28:     console.error(`Webhook Error: ${err.message}`)
29:     return new Response(`Webhook Error: ${err.message}`, { status: 400 })
30:   }
31: 
32:   if (relevantEvents.has(event.type)) {
33:     try {
34:       switch (event.type) {
35:         case "customer.subscription.updated":
36:         case "customer.subscription.deleted":
37:           await handleSubscriptionChange(event)
38:           break
39: 
40:         case "checkout.session.completed":
41:           await handleCheckoutSession(event)
42:           break
43: 
44:         default:
45:           throw new Error("Unhandled relevant event!")
46:       }
47:     } catch (error) {
48:       console.error("Webhook handler failed:", error)
49:       return new Response(
50:         "Webhook handler failed. View your nextjs function logs.",
51:         { status: 400 }
52:       )
53:     }
54:   }
55: 
56:   return new Response(JSON.stringify({ received: true }))
57: }
58: 
59: async function handleSubscriptionChange(event: Stripe.Event) {
60:   const subscription = event.data.object as Stripe.Subscription
61:   const productId = subscription.items.data[0].price.product as string
62:   await manageSubscriptionStatusChange(
63:     subscription.id,
64:     subscription.customer as string,
65:     productId
66:   )
67: }
68: 
69: async function handleCheckoutSession(event: Stripe.Event) {
70:   const checkoutSession = event.data.object as Stripe.Checkout.Session
71:   if (checkoutSession.mode === "subscription") {
72:     const subscriptionId = checkoutSession.subscription as string
73:     await updateStripeCustomer(
74:       checkoutSession.client_reference_id as string,
75:       subscriptionId,
76:       checkoutSession.customer as string
77:     )
78: 
79:     const subscription = await stripe.subscriptions.retrieve(subscriptionId, {
80:       expand: ["default_payment_method"]
81:     })
82: 
83:     const productId = subscription.items.data[0].price.product as string
84:     await manageSubscriptionStatusChange(
85:       subscription.id,
86:       subscription.customer as string,
87:       productId
88:     )
89:   }
90: }
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
16: 
17: import { CardDisplay } from "@/components/ui/card-display"
18: import { KannadaEntry } from "@/types"
19: 
20: interface CardClientWrapperProps {
21:   entry: KannadaEntry
22: }
23: 
24: export function CardClientWrapper({ entry }: CardClientWrapperProps) {
25:   const handleCardClick = () => {
26: 
27:     console.log(`Card clicked: ${entry.english}`);
28:   }
29: 
30:   return (
31:     <CardDisplay
32:       entry={entry}
33:       onClick={handleCardClick}
34:     />
35:   )
36: }
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
 21: 
 22: 
 23: import { useEffect, useState } from "react"
 24: import { loadCsvAction } from "@/actions/csv-actions"
 25: import { CardDisplay } from "@/components/ui/card-display"
 26: import { ExpandedCard } from "@/components/ui/expanded-card"
 27: import { CategoryFilter } from "@/components/ui/category-filter"
 28: import { KannadaEntry } from "@/types"
 29: import { AnimatePresence } from "framer-motion"
 30: 
 31: export function CardGrid() {
 32:   const [entries, setEntries] = useState<KannadaEntry[]>([])
 33:   const [categories, setCategories] = useState<string[]>([])
 34:   const [activeCategory, setActiveCategory] = useState<string | null>(null)
 35:   const [selectedEntry, setSelectedEntry] = useState<KannadaEntry | null>(null)
 36:   const [error, setError] = useState<string | null>(null)
 37:   const [isLoading, setIsLoading] = useState(true)
 38: 
 39: 
 40:   useEffect(() => {
 41:     const fetchData = async () => {
 42:       try {
 43:         const result = await loadCsvAction()
 44:         setIsLoading(false)
 45: 
 46:         if (!result.isSuccess || !result.data) {
 47:           setError(result.message)
 48:           return
 49:         }
 50: 
 51:         setEntries(result.data)
 52: 
 53: 
 54:         const uniqueCategories = Array.from(
 55:           new Set(result.data.map(entry => entry.category).filter(Boolean))
 56:         ) as string[]
 57: 
 58:         setCategories(uniqueCategories)
 59:       } catch (err) {
 60:         setIsLoading(false)
 61:         setError("Failed to load cards data")
 62:         console.error(err)
 63:       }
 64:     }
 65: 
 66:     fetchData()
 67:   }, [])
 68: 
 69: 
 70:   const filteredEntries = activeCategory
 71:     ? entries.filter(entry => entry.category === activeCategory)
 72:     : entries
 73: 
 74: 
 75:   const handleCardClick = (entry: KannadaEntry) => {
 76:     setSelectedEntry(entry)
 77:   }
 78: 
 79: 
 80:   const handleCloseExpanded = () => {
 81:     setSelectedEntry(null)
 82:   }
 83: 
 84: 
 85:   const handleCategorySelect = (category: string | null) => {
 86:     setActiveCategory(category)
 87:   }
 88: 
 89: 
 90:   if (isLoading) {
 91:     return <div className="text-center">Loading cards...</div>
 92:   }
 93: 
 94: 
 95:   if (error) {
 96:     return <div className="text-center text-destructive">{error}</div>
 97:   }
 98: 
 99: 
100:   if (entries.length === 0) {
101:     return <div className="text-center text-muted-foreground">No cards available to display.</div>
102:   }
103: 
104:   return (
105:     <div>
106:       {}
107:       <CategoryFilter
108:         categories={categories}
109:         activeCategory={activeCategory}
110:         onCategorySelect={handleCategorySelect}
111:       />
112: 
113:       {}
114:       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
115:         {filteredEntries.map((entry, index) => (
116:           <CardDisplay
117:             key={index}
118:             entry={entry}
119:             onClick={() => handleCardClick(entry)}
120:           />
121:         ))}
122:       </div>
123: 
124:       {}
125:       <AnimatePresence>
126:         {selectedEntry && (
127:           <ExpandedCard
128:             entry={selectedEntry}
129:             onClose={handleCloseExpanded}
130:           />
131:         )}
132:       </AnimatePresence>
133:     </div>
134:   )
135: }
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
35:       <div className="text-center text-destructive">
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
46:       <div className="text-center text-muted-foreground">
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
32:     throw new Error("Unauthorized access: Please sign in to view the Cards page.")
33:   }
34: 
35:   return (
36:     <div className="container mx-auto px-4 py-8">
37:       <h1 className="mb-6 text-3xl font-semibold text-foreground">
38:         Kannada Cards
39:       </h1>
40: 
41:       {}
42:       <Suspense fallback={<div className="text-center text-muted-foreground">Loading cards...</div>}>
43:         <CardGrid />
44:       </Suspense>
45:     </div>
46:   )
47: }
````

## File: app/globals.css
````css
 1: @tailwind base;
 2: @tailwind components;
 3: @tailwind utilities;
 4: 
 5: 
 6: @layer base {
 7:   :root {
 8:     --background: 0 0% 100%;
 9:     --foreground: 0 0% 20%;
10:     --card: 0 0% 100%;
11:     --card-foreground: 0 0% 20%;
12:     --popover: 0 0% 100%;
13:     --popover-foreground: 0 0% 20%;
14:     --primary: 6 76% 64%;
15:     --primary-foreground: 0 0% 100%;
16:     --secondary: 0 0% 96%;
17:     --secondary-foreground: 0 0% 20%;
18:     --muted: 0 0% 96%;
19:     --muted-foreground: 0 0% 45%;
20:     --accent: 6 76% 64%;
21:     --accent-foreground: 0 0% 100%;
22:     --destructive: 0 84% 60%;
23:     --destructive-foreground: 0 0% 100%;
24:     --border: 0 0% 90%;
25:     --input: 0 0% 90%;
26:     --ring: 0 0% 20%;
27:     --radius: 0.5rem;
28:   }
29: 
30:   .dark {
31:     --background: 0 0% 10%;
32:     --foreground: 0 0% 88%;
33:     --card: 0 0% 10%;
34:     --card-foreground: 0 0% 88%;
35:     --popover: 0 0% 10%;
36:     --popover-foreground: 0 0% 88%;
37:     --primary: 6 76% 64%;
38:     --primary-foreground: 0 0% 100%;
39:     --secondary: 0 0% 20%;
40:     --secondary-foreground: 0 0% 88%;
41:     --muted: 0 0% 20%;
42:     --muted-foreground: 0 0% 60%;
43:     --accent: 6 76% 64%;
44:     --accent-foreground: 0 0% 100%;
45:     --destructive: 0 84% 60%;
46:     --destructive-foreground: 0 0% 100%;
47:     --border: 0 0% 20%;
48:     --input: 0 0% 20%;
49:     --ring: 0 0% 88%;
50:   }
51: 
52:   html {
53:     @apply scroll-smooth;
54:   }
55: 
56:   body {
57:     @apply font-poppins antialiased;
58:   }
59: 
60: 
61:   [lang="kn"] {
62:     font-family: "Noto Sans Kannada", sans-serif;
63:   }
64: }
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
38:         ease: "easeInOut",
39:       },
40:     },
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
54:           alt="KannadaKali Logo"
55:           width={240}
56:           height={240}
57:           className="h-60 w-60"
58:           onError={(e) => {
59:             console.error("Logo failed to load")
60:             e.currentTarget.style.display = "none"
61:           }}
62:         />
63:       </motion.div>
64: 
65:       {}
66:       <h1 className="mb-4 text-4xl font-semibold text-foreground md:text-5xl">
67:         Learn Kannada with Fun!
68:       </h1>
69:       <p className="mb-8 max-w-md text-lg text-muted-foreground">
70:         Play games, learn words, and enjoy Kannada with KannadaKali!
71:       </p>
72: 
73:       {}
74:       <SignInButton mode="modal">
75:         <button className="flex items-center rounded-md bg-accent px-6 py-3 text-lg font-medium text-accent-foreground transition-colors hover:bg-accent/90">
76:           Start Learning
77:           <ArrowRight className="ml-2 h-5 w-5" />
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
 25: 
 26: 
 27: 
 28: import { ClerkProvider, UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"
 29: import { ThemeProvider } from "@/components/utilities/providers"
 30: import { ThemeToggle } from "@/components/ui/theme-toggle"
 31: import { Home, Book, Gamepad2, Users } from "lucide-react"
 32: import Link from "next/link"
 33: import { Suspense } from "react"
 34: 
 35: export default async function RootLayout({
 36:   children,
 37: }: {
 38:   children: React.ReactNode
 39: }) {
 40:   return (
 41:     <ClerkProvider>
 42:       <html lang="en" suppressHydrationWarning>
 43:         <head>
 44:           <meta charSet="UTF-8" />
 45:           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 46:           <title>KannadaKali - Learn Kannada with Fun!</title>
 47:           {}
 48:           <link
 49:             href="https://fonts.googleapis.com/css2?family=Noto+Sans+Kannada:wght@400;600&family=Poppins:wght@400;600&display=swap"
 50:             rel="stylesheet"
 51:           />
 52:         </head>
 53:         <body className="min-h-screen bg-background font-poppins text-foreground antialiased">
 54:           <ThemeProvider
 55:             attribute="class"
 56:             defaultTheme="system"
 57:             enableSystem
 58:             disableTransitionOnChange
 59:           >
 60:             {}
 61:             <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
 62:               <div className="container flex h-16 items-center justify-between px-4">
 63:                 {}
 64:                 <Link href="/" className="flex items-center space-x-2">
 65:                   <img
 66:                     src="/logo.png"
 67:                     alt="KannadaKali Logo"
 68:                     width={40}
 69:                     height={40}
 70:                     className="h-10 w-10"
 71:                   />
 72:                   <span className="text-xl font-semibold">KannadaKali</span>
 73:                 </Link>
 74: 
 75:                 {}
 76:                 <nav className="hidden space-x-4 md:flex">
 77:                   <Link
 78:                     href="/"
 79:                     className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
 80:                   >
 81:                     <Home className="mr-2 h-4 w-4" />
 82:                     Home
 83:                   </Link>
 84:                   <Link
 85:                     href="/cards"
 86:                     className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
 87:                   >
 88:                     <Book className="mr-2 h-4 w-4" />
 89:                     Cards
 90:                   </Link>
 91:                   <Link
 92:                     href="/quiz"
 93:                     className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
 94:                   >
 95:                     <Gamepad2 className="mr-2 h-4 w-4" />
 96:                     Quiz
 97:                   </Link>
 98:                   <Link
 99:                     href="/parental"
100:                     className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
101:                   >
102:                     <Users className="mr-2 h-4 w-4" />
103:                     Parental
104:                   </Link>
105:                 </nav>
106: 
107:                 {}
108:                 <div className="flex items-center space-x-4">
109:                   <ThemeToggle />
110:                   <div className="flex items-center">
111:                     <SignedIn>
112:                       <UserButton afterSignOutUrl="/" />
113:                     </SignedIn>
114:                     <SignedOut>
115:                       <SignInButton mode="modal">
116:                         <button className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
117:                           Sign In
118:                         </button>
119:                       </SignInButton>
120:                     </SignedOut>
121:                   </div>
122:                 </div>
123:               </div>
124: 
125:               {}
126:               <nav className="flex flex-col space-y-2 border-t border-border bg-background p-4 md:hidden">
127:                 <Link
128:                   href="/"
129:                   className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
130:                 >
131:                   <Home className="mr-2 h-4 w-4" />
132:                   Home
133:                 </Link>
134:                 <Link
135:                   href="/cards"
136:                   className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
137:                 >
138:                   <Book className="mr-2 h-4 w-4" />
139:                   Cards
140:                 </Link>
141:                 <Link
142:                   href="/quiz"
143:                   className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
144:                 >
145:                   <Gamepad2 className="mr-2 h-4 w-4" />
146:                   Quiz
147:                 </Link>
148:                 <Link
149:                   href="/parental"
150:                   className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
151:                 >
152:                   <Users className="mr-2 h-4 w-4" />
153:                   Parental
154:                 </Link>
155:               </nav>
156:             </header>
157: 
158:             {}
159:             <main className="container flex-1 py-6">
160:               <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
161:             </main>
162: 
163:             {}
164:             <footer className="border-t border-border bg-background py-4">
165:               <div className="container text-center text-sm text-muted-foreground">
166:                 &copy; 2025 KannadaKali. All rights reserved.
167:               </div>
168:             </footer>
169:           </ThemeProvider>
170:         </body>
171:       </html>
172:     </ClerkProvider>
173:   )
174: }
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
21: import { HeroSection } from "@/components/landing/hero"
22: 
23: export default async function HomePage() {
24:   return (
25:     <div className="flex min-h-screen flex-col items-center justify-center">
26:       <HeroSection />
27:     </div>
28:   )
29: }
````

## File: app/parental/_components/progress-display.tsx
````typescript
 1: "use client"
 2: 
 3: import { Star } from "lucide-react"
 4: 
 5: import { cn } from "@/lib/utils"
 6: import { SelectProgress } from "@/db/schema/progress-schema"
 7: 
 8: interface ProgressDisplayProps {
 9:   initialProgress: SelectProgress | null
10: }
11: 
12: export default function ProgressDisplay({ initialProgress }: ProgressDisplayProps) {
13: 
14:   if (!initialProgress) {
15:     return (
16:       <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
17:         <p className="text-lg">No progress yet!</p>
18:         <p className="text-sm">Start playing quizzes to track your learning.</p>
19:       </div>
20:     )
21:   }
22: 
23:   const { stars, wordsLearned, quizzesPlayed } = initialProgress
24: 
25:   return (
26:     <div className="flex flex-col items-center gap-6 p-6">
27:       {}
28:       <h2 className="text-2xl font-bold text-primary">Your Learning Progress</h2>
29: 
30:       {}
31:       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
32:         {}
33:         <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm">
34:           <div className="flex items-center gap-2">
35:             <Star className="w-6 h-6 text-accent" fill="currentColor" />
36:             <span className="text-xl font-semibold">{stars}</span>
37:           </div>
38:           <p className="text-sm text-muted-foreground mt-2">Stars Earned</p>
39:         </div>
40: 
41:         {}
42:         <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm">
43:           <span className="text-xl font-semibold">{wordsLearned}</span>
44:           <p className="text-sm text-muted-foreground mt-2">Words Learned</p>
45:         </div>
46: 
47:         {}
48:         <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm">
49:           <span className="text-xl font-semibold">{quizzesPlayed}</span>
50:           <p className="text-sm text-muted-foreground mt-2">Quizzes Played</p>
51:         </div>
52:       </div>
53: 
54:       {}
55:       <p className="text-lg text-center text-accent">
56:         Great job! Keep learning to earn more stars!
57:       </p>
58:     </div>
59:   )
60: }
````

## File: app/parental/_components/quiz-results-display.tsx
````typescript
  1: "use client"
  2: 
  3: import { ArrowUp, Award, Clock, Star } from "lucide-react"
  4: import { format } from "date-fns"
  5: 
  6: import { SelectQuizResult } from "@/db/schema/quiz-results-schema"
  7: import { Badge } from "@/components/ui/badge"
  8: import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
  9: import { Progress } from "@/components/ui/progress"
 10: import { cn } from "@/lib/utils"
 11: 
 12: interface QuizResultsDisplayProps {
 13:   stats: {
 14:     totalQuizzes: number
 15:     averageScore: number
 16:     bestScore: number
 17:     recentResults: SelectQuizResult[]
 18:   } | null
 19: }
 20: 
 21: export default function QuizResultsDisplay({ stats }: QuizResultsDisplayProps) {
 22: 
 23:   if (!stats) {
 24:     return (
 25:       <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
 26:         <p className="text-lg">No quiz results yet!</p>
 27:         <p className="text-sm">Your child hasn't taken any quizzes yet.</p>
 28:       </div>
 29:     )
 30:   }
 31: 
 32:   const { totalQuizzes, averageScore, bestScore, recentResults } = stats
 33: 
 34:   return (
 35:     <div className="space-y-6">
 36:       <h2 className="text-2xl font-bold text-primary">Quiz Performance</h2>
 37: 
 38:       {}
 39:       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
 40:         <Card>
 41:           <CardHeader className="pb-2">
 42:             <CardTitle className="text-lg font-medium">Total Quizzes</CardTitle>
 43:             <CardDescription>Quizzes completed</CardDescription>
 44:           </CardHeader>
 45:           <CardContent>
 46:             <div className="text-3xl font-bold">{totalQuizzes}</div>
 47:           </CardContent>
 48:         </Card>
 49: 
 50:         <Card>
 51:           <CardHeader className="pb-2">
 52:             <CardTitle className="text-lg font-medium">Average Score</CardTitle>
 53:             <CardDescription>Across all quizzes</CardDescription>
 54:           </CardHeader>
 55:           <CardContent>
 56:             <div className="flex items-end gap-2">
 57:               <div className="text-3xl font-bold">{averageScore}%</div>
 58:               <Progress value={averageScore} className="h-2 w-full mt-2" />
 59:             </div>
 60:           </CardContent>
 61:         </Card>
 62: 
 63:         <Card>
 64:           <CardHeader className="pb-2">
 65:             <CardTitle className="text-lg font-medium">Best Score</CardTitle>
 66:             <CardDescription>Highest achievement</CardDescription>
 67:           </CardHeader>
 68:           <CardContent>
 69:             <div className="flex items-center gap-2">
 70:               <div className="text-3xl font-bold">{bestScore}%</div>
 71:               <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
 72:             </div>
 73:           </CardContent>
 74:         </Card>
 75:       </div>
 76: 
 77:       {}
 78:       <div>
 79:         <h3 className="text-xl font-semibold mb-3">Recent Quiz Results</h3>
 80:         {recentResults.length === 0 ? (
 81:           <p className="text-muted-foreground">No recent quiz results available.</p>
 82:         ) : (
 83:           <div className="space-y-4">
 84:             {recentResults.map((result) => (
 85:               <QuizResultCard key={result.id} result={result} />
 86:             ))}
 87:           </div>
 88:         )}
 89:       </div>
 90:     </div>
 91:   )
 92: }
 93: 
 94: 
 95: function QuizResultCard({ result }: { result: SelectQuizResult }) {
 96: 
 97:   const scorePercentage = Math.round((result.score / result.totalQuestions) * 100)
 98: 
 99: 
100:   const formattedDate = format(
101:     new Date(result.createdAt),
102:     "MMM d, yyyy 'at' h:mm a"
103:   )
104: 
105: 
106:   const isRapidFire = result.quizType === "rapid_fire"
107: 
108:   return (
109:     <Card>
110:       <CardContent className="pt-6">
111:         <div className="flex flex-col md:flex-row md:justify-between gap-4">
112:           <div className="flex-1">
113:             <div className="flex items-center gap-2 mb-2">
114:               <Badge variant={isRapidFire ? "destructive" : "default"}>
115:                 {isRapidFire ? "Rapid Fire" : "Standard"}
116:               </Badge>
117:               <span className="text-sm text-muted-foreground">{formattedDate}</span>
118:             </div>
119: 
120:             <div className="flex items-center gap-2 mb-4">
121:               <Award className={cn(
122:                 "h-5 w-5",
123:                 scorePercentage >= 80 ? "text-green-500" :
124:                 scorePercentage >= 60 ? "text-yellow-500" : "text-red-500"
125:               )} />
126:               <span className="font-semibold">
127:                 {result.score} / {result.totalQuestions} correct
128:               </span>
129:             </div>
130: 
131:             {result.timeSpent && (
132:               <div className="flex items-center gap-2 text-sm text-muted-foreground">
133:                 <Clock className="h-4 w-4" />
134:                 <span>Completed in {Math.round(result.timeSpent / 60)} minutes</span>
135:               </div>
136:             )}
137: 
138:             {result.categories && result.categories.length > 0 && (
139:               <div className="mt-2 flex flex-wrap gap-1">
140:                 {result.categories.map((category) => (
141:                   <Badge key={category} variant="outline" className="text-xs">
142:                     {category}
143:                   </Badge>
144:                 ))}
145:               </div>
146:             )}
147:           </div>
148: 
149:           <div className="flex flex-col items-center justify-center">
150:             <div className="text-3xl font-bold">
151:               {scorePercentage}%
152:             </div>
153:             <Progress
154:               value={scorePercentage}
155:               className={cn(
156:                 "h-2 w-24 mt-2",
157:                 scorePercentage >= 80 ? "bg-green-100" :
158:                 scorePercentage >= 60 ? "bg-yellow-100" : "bg-red-100"
159:               )}
160:             />
161:           </div>
162:         </div>
163:       </CardContent>
164:     </Card>
165:   )
166: }
````

## File: app/parental/page.tsx
````typescript
 1: "use server"
 2: 
 3: import { auth } from "@clerk/nextjs/server"
 4: import { redirect } from "next/navigation"
 5: import { Suspense } from "react"
 6: import ProgressDisplay from "@/app/parental/_components/progress-display"
 7: import QuizResultsDisplay from "@/app/parental/_components/quiz-results-display"
 8: import { getProgressAction } from "@/actions/db/progress-actions"
 9: import { getQuizStatsAction } from "@/actions/db/quiz-results-actions"
10: import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
11: 
12: 
13: function ProgressSkeleton() {
14:   return (
15:     <div className="flex h-[300px] items-center justify-center">
16:       <div className="text-center text-muted-foreground">
17:         Loading progress...
18:       </div>
19:     </div>
20:   )
21: }
22: 
23: 
24: export default async function ParentalPage() {
25: 
26:   const { userId } = await auth()
27:   if (!userId) {
28:     return redirect("/sign-in?returnBackUrl=/parental")
29:   }
30: 
31:   return (
32:     <div className="min-h-screen bg-background">
33:       {}
34:       <header className="p-4">
35:         <h1 className="text-2xl font-bold text-foreground">
36:           Parental Dashboard
37:         </h1>
38:         <p className="text-muted-foreground">
39:           See how your child is learning Kannada!
40:         </p>
41:       </header>
42: 
43:       {}
44:       <main className="container mx-auto p-4">
45:         <Tabs defaultValue="progress" className="w-full">
46:           <TabsList className="mb-4">
47:             <TabsTrigger value="progress">General Progress</TabsTrigger>
48:             <TabsTrigger value="quiz-results">Quiz Results</TabsTrigger>
49:           </TabsList>
50: 
51:           <TabsContent value="progress" className="mt-6">
52:             <Suspense fallback={<ProgressSkeleton />}>
53:               <ProgressFetcher />
54:             </Suspense>
55:           </TabsContent>
56: 
57:           <TabsContent value="quiz-results" className="mt-6">
58:             <Suspense fallback={<ProgressSkeleton />}>
59:               <QuizStatsFetcher />
60:             </Suspense>
61:           </TabsContent>
62:         </Tabs>
63:       </main>
64:     </div>
65:   )
66: }
67: 
68: 
69: async function ProgressFetcher() {
70:   const progressResult = await getProgressAction()
71:   return <ProgressDisplay initialProgress={progressResult.isSuccess ? progressResult.data : null} />
72: }
73: 
74: 
75: async function QuizStatsFetcher() {
76:   const quizStatsResult = await getQuizStatsAction()
77:   return <QuizResultsDisplay stats={quizStatsResult.isSuccess ? quizStatsResult.data : null} />
78: }
````

## File: app/quiz/_components/quiz-fetcher.tsx
````typescript
 1: "use server"
 2: 
 3: import { auth } from "@clerk/nextjs/server"
 4: import { redirect } from "next/navigation"
 5: 
 6: import { loadCsvAction } from "@/actions/csv-actions"
 7: import { getProgressAction } from "@/actions/db/progress-actions"
 8: import QuizComponent from "@/components/ui/quiz-component"
 9: 
10: interface QuizFetcherProps {
11:   type: "match" | "multi" | "seq"
12: }
13: 
14: export default async function QuizFetcher({ type }: QuizFetcherProps) {
15: 
16:   const { userId } = await auth()
17:   if (!userId) {
18:     redirect("/sign-in?redirect_url=/quiz")
19:     return null;
20:   }
21: 
22: 
23:   const csvResult = await loadCsvAction()
24:   if (!csvResult.isSuccess || !csvResult.data) {
25:     return <div className="text-center text-red-500">Failed to load quiz data.</div>
26:   }
27: 
28: 
29:   const progressResult = await getProgressAction()
30:   const stars = progressResult.isSuccess && progressResult.data ? progressResult.data.stars : 0
31: 
32: 
33:   return (
34:     <div>
35:       <QuizComponent
36:         entries={csvResult.data}
37:         type={type}
38:         stars={stars}
39:       />
40:     </div>
41:   )
42: }
````

## File: app/quiz/_components/rapid-fire-quiz-fetcher.tsx
````typescript
 1: "use server"
 2: 
 3: import { auth } from "@clerk/nextjs/server"
 4: import { redirect } from "next/navigation"
 5: 
 6: import { loadCsvAction } from "@/actions/csv-actions"
 7: import { getProgressAction } from "@/actions/db/progress-actions"
 8: import RapidFireQuiz from "@/components/ui/rapid-fire-quiz"
 9: 
10: export default async function RapidFireQuizFetcher() {
11: 
12:   const { userId } = await auth()
13:   if (!userId) {
14:     redirect("/sign-in?redirect_url=/quiz")
15:     return null;
16:   }
17: 
18: 
19:   const csvResult = await loadCsvAction()
20:   if (!csvResult.isSuccess || !csvResult.data) {
21:     return <div className="text-center text-red-500">Failed to load quiz data.</div>
22:   }
23: 
24: 
25:   const progressResult = await getProgressAction()
26:   const stars = progressResult.isSuccess && progressResult.data ? progressResult.data.stars : 0
27: 
28: 
29:   return (
30:     <div>
31:       <RapidFireQuiz
32:         entries={csvResult.data}
33:         stars={stars}
34:       />
35:     </div>
36:   )
37: }
````

## File: app/quiz/page.tsx
````typescript
 1: "use server"
 2: 
 3: import { auth } from "@clerk/nextjs/server"
 4: import { redirect } from "next/navigation"
 5: import { Suspense } from "react"
 6: import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
 7: import QuizFetcher from "./_components/quiz-fetcher"
 8: import RapidFireQuizFetcher from "./_components/rapid-fire-quiz-fetcher"
 9: import { loadCsvAction } from "@/actions/csv-actions"
10: 
11: 
12: function QuizSkeleton() {
13:   return (
14:     <div className="flex h-screen items-center justify-center">
15:       <div className="text-center text-muted-foreground">
16:         Loading quizzes...
17:       </div>
18:     </div>
19:   )
20: }
21: 
22: 
23: export default async function QuizPage() {
24: 
25:   const { userId } = await auth()
26:   if (!userId) {
27:     redirect("/sign-in?redirect_url=/quiz")
28:     return null;
29:   }
30: 
31:   return (
32:     <div className="min-h-screen bg-background">
33:       {}
34:       <header className="p-4">
35:         <h1 className="text-2xl font-bold text-foreground">Quiz Time!</h1>
36:         <p className="text-muted-foreground">Test your Kannada skills</p>
37:       </header>
38: 
39:       {}
40:       <main className="container mx-auto p-4">
41:         <Tabs defaultValue="standard" className="mx-auto w-full max-w-xl">
42:           <TabsList className="mb-6 grid w-full grid-cols-2">
43:             <TabsTrigger value="standard">Standard Quiz</TabsTrigger>
44:             <TabsTrigger value="rapid-fire">Rapid Fire</TabsTrigger>
45:           </TabsList>
46: 
47:           <TabsContent value="standard">
48:             <Suspense fallback={<QuizSkeleton />}>
49:               <QuizFetcher type="match" />
50:             </Suspense>
51:           </TabsContent>
52: 
53:           <TabsContent value="rapid-fire">
54:             <Suspense fallback={<QuizSkeleton />}>
55:               <RapidFireQuizFetcher />
56:             </Suspense>
57:           </TabsContent>
58:         </Tabs>
59:       </main>
60:     </div>
61:   )
62: }
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
 18:   { href: "/about", label: "About" },
 19:   { href: "/features", label: "Features" },
 20:   { href: "/pricing", label: "Pricing" },
 21:   { href: "/contact", label: "Contact" }
 22: ]
 23: 
 24: const signedInLinks = [{ href: "/dashboard", label: "Dashboard" }]
 25: 
 26: export default function Header() {
 27:   const [isMenuOpen, setIsMenuOpen] = useState(false)
 28:   const [isScrolled, setIsScrolled] = useState(false)
 29: 
 30:   const toggleMenu = () => {
 31:     setIsMenuOpen(!isMenuOpen)
 32:   }
 33: 
 34:   useEffect(() => {
 35:     const handleScroll = () => {
 36:       setIsScrolled(window.scrollY > 0)
 37:     }
 38: 
 39:     window.addEventListener("scroll", handleScroll)
 40:     return () => window.removeEventListener("scroll", handleScroll)
 41:   }, [])
 42: 
 43:   return (
 44:     <motion.header
 45:       initial={{ y: -20, opacity: 0 }}
 46:       animate={{ y: 0, opacity: 1 }}
 47:       className={`sticky top-0 z-50 transition-colors ${
 48:         isScrolled
 49:           ? "bg-background/80 shadow-sm backdrop-blur-sm"
 50:           : "bg-background"
 51:       }`}
 52:     >
 53:       <div className="container mx-auto flex max-w-7xl items-center justify-between p-4">
 54:         <motion.div
 55:           className="flex items-center space-x-2 hover:cursor-pointer hover:opacity-80"
 56:           whileHover={{ scale: 1.05 }}
 57:           whileTap={{ scale: 0.95 }}
 58:         >
 59:           <Link href="/" className="flex items-center space-x-2">
 60:             <div className="relative h-8 w-8">
 61:               <Image
 62:                 src="/kannadakali.png"
 63:                 alt="KannadaKali Logo"
 64:                 fill
 65:                 className="object-contain"
 66:               />
 67:             </div>
 68:             <span className="text-xl font-bold">KannadaKali</span>
 69:           </Link>
 70:         </motion.div>
 71: 
 72:         <nav className="absolute left-1/2 hidden -translate-x-1/2 space-x-2 md:flex">
 73:           {navLinks.map(link => (
 74:             <motion.div
 75:               key={link.href}
 76:               whileHover={{ scale: 1.05 }}
 77:               whileTap={{ scale: 0.95 }}
 78:             >
 79:               <Link
 80:                 href={link.href}
 81:                 className="text-muted-foreground hover:text-foreground rounded-full px-3 py-1 transition"
 82:               >
 83:                 {link.label}
 84:               </Link>
 85:             </motion.div>
 86:           ))}
 87: 
 88:           <SignedIn>
 89:             {signedInLinks.map(link => (
 90:               <motion.div
 91:                 key={link.href}
 92:                 whileHover={{ scale: 1.05 }}
 93:                 whileTap={{ scale: 0.95 }}
 94:               >
 95:                 <Link
 96:                   href={link.href}
 97:                   className="text-muted-foreground hover:text-foreground rounded-full px-3 py-1 transition"
 98:                 >
 99:                   {link.label}
100:                 </Link>
101:               </motion.div>
102:             ))}
103:           </SignedIn>
104:         </nav>
105: 
106:         <div className="flex items-center space-x-4">
107:           <SignedOut>
108:             <SignInButton>
109:               <motion.div
110:                 whileHover={{ scale: 1.05 }}
111:                 whileTap={{ scale: 0.95 }}
112:               >
113:                 <Button variant="ghost">Sign In</Button>
114:               </motion.div>
115:             </SignInButton>
116: 
117:             <SignUpButton>
118:               <motion.div
119:                 whileHover={{ scale: 1.05 }}
120:                 whileTap={{ scale: 0.95 }}
121:               >
122:                 <Button>Get Started</Button>
123:               </motion.div>
124:             </SignUpButton>
125:           </SignedOut>
126: 
127:           <SignedIn>
128:             <UserButton />
129:           </SignedIn>
130: 
131:           <motion.div
132:             className="md:hidden"
133:             whileHover={{ scale: 1.05 }}
134:             whileTap={{ scale: 0.95 }}
135:           >
136:             <Button
137:               variant="ghost"
138:               size="icon"
139:               onClick={toggleMenu}
140:               aria-label="Toggle menu"
141:             >
142:               {isMenuOpen ? (
143:                 <X className="size-6" />
144:               ) : (
145:                 <Menu className="size-6" />
146:               )}
147:             </Button>
148:           </motion.div>
149:         </div>
150:       </div>
151: 
152:       {isMenuOpen && (
153:         <motion.nav
154:           initial={{ opacity: 0, y: -10 }}
155:           animate={{ opacity: 1, y: 0 }}
156:           exit={{ opacity: 0, y: -10 }}
157:           className="bg-primary-foreground text-primary p-4 md:hidden"
158:         >
159:           <ul className="space-y-2">
160:             <li>
161:               <Link
162:                 href="/"
163:                 className="block hover:underline"
164:                 onClick={toggleMenu}
165:               >
166:                 Home
167:               </Link>
168:             </li>
169:             {navLinks.map(link => (
170:               <li key={link.href}>
171:                 <Link
172:                   href={link.href}
173:                   className="block hover:underline"
174:                   onClick={toggleMenu}
175:                 >
176:                   {link.label}
177:                 </Link>
178:               </li>
179:             ))}
180:             <SignedIn>
181:               {signedInLinks.map(link => (
182:                 <li key={link.href}>
183:                   <Link
184:                     href={link.href}
185:                     className="block hover:underline"
186:                     onClick={toggleMenu}
187:                   >
188:                     {link.label}
189:                   </Link>
190:                 </li>
191:               ))}
192:             </SignedIn>
193:           </ul>
194:         </motion.nav>
195:       )}
196:     </motion.header>
197:   )
198: }
````

## File: components/landing/hero.tsx
````typescript
 1: "use client"
 2: 
 3: import { SignInButton } from "@clerk/nextjs"
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
23:             "animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:200%_100%] bg-clip-text text-transparent text-sm font-medium"
24:           )}
25:         >
26:           Learn Kannada with Fun!
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
43:           KannadaKali
44:         </motion.div>
45: 
46:         <motion.div
47:           initial={{ opacity: 0 }}
48:           animate={{ opacity: 1 }}
49:           transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
50:           className="max-w-xl text-balance text-xl"
51:         >
52:           A fun way for kids to learn Kannada through games and quizzes!
53:         </motion.div>
54: 
55:         {}
56:         <motion.div
57:           initial={{ opacity: 0, y: 10 }}
58:           animate={{ opacity: 1, y: 0 }}
59:           transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
60:           className="flex gap-4"
61:         >
62:           <SignInButton>
63:             <Button className="bg-accent text-lg hover:bg-accent/90">
64:               Sign In
65:             </Button>
66:           </SignInButton>
67:           <Link href="/cards">
68:             <Button className="bg-accent text-lg hover:bg-accent/90">
69:               Start <ChevronRight className="ml-2 size-5" />
70:             </Button>
71:           </Link>
72:         </motion.div>
73:       </motion.div>
74: 
75:       {}
76:       <motion.div
77:         initial={{ opacity: 0, y: 30 }}
78:         animate={{ opacity: 1, y: 0 }}
79:         transition={{ duration: 1, delay: 1, ease: "easeOut" }}
80:         className="mt-20 w-full max-w-screen-lg flex items-center justify-center"
81:       >
82:         <div className="relative h-[240px] w-[240px]">
83:           <Image
84:             src="/kannadakali.png"
85:             alt="KannadaKali Logo"
86:             fill
87:             className="object-contain"
88:             priority
89:           />
90:         </div>
91:       </motion.div>
92:     </div>
93:   )
94: }
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
 27:   onClick: () => void
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
 39:     waudio = null,
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
 62:   return (
 63:     <div
 64:       className="w-full rounded-xl bg-card p-6 shadow-md transition-all duration-300 hover:bg-background hover:shadow-lg cursor-pointer"
 65:       onClick={onClick}
 66:     >
 67:       {}
 68:       <div className="flex justify-center mb-6 mt-2">
 69:         {icon ? (
 70:           <Image
 71:             src={icon}
 72:             alt={`${english} icon`}
 73:             width={80}
 74:             height={80}
 75:             className="h-20 w-20 object-contain"
 76:           />
 77:         ) : (
 78:           <div className="flex h-20 w-20 items-center justify-center rounded-md bg-muted">
 79:             <span className="text-muted-foreground">No Icon</span>
 80:           </div>
 81:         )}
 82:       </div>
 83: 
 84:       {}
 85:       <div className="text-center mb-4">
 86:         <h2 className="text-2xl font-semibold text-foreground" lang="kn">
 87:           {kannada}
 88:         </h2>
 89:       </div>
 90: 
 91:       {}
 92:       <div className="flex justify-between items-end">
 93:         <div>
 94:           <p className="text-base text-foreground">{english}</p>
 95:           <p className="text-sm italic text-muted-foreground">{kanglish}</p>
 96:         </div>
 97: 
 98:         {}
 99:         {waudio && (
100:           <button
101:             className={`rounded-full p-2 ${isPlaying ? 'bg-primary/20' : 'bg-accent/50 hover:bg-accent'}`}
102:             onClick={playAudio}
103:             aria-label="Play word pronunciation"
104:           >
105:             <Volume2 className="h-5 w-5 text-foreground" />
106:           </button>
107:         )}
108:       </div>
109:     </div>
110:   )
111: }
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
29:     <div className="flex flex-wrap gap-2 mb-6">
30:       <button
31:         className={`rounded-full px-4 py-2 text-sm font-medium transition-colors
32:           ${activeCategory === null
33:             ? 'bg-primary text-primary-foreground'
34:             : 'bg-accent/50 hover:bg-accent text-accent-foreground'}`}
35:         onClick={() => onCategorySelect(null)}
36:       >
37:         All
38:       </button>
39: 
40:       {categories.map((category) => (
41:         <button
42:           key={category}
43:           className={`rounded-full px-4 py-2 text-sm font-medium transition-colors
44:             ${activeCategory === category
45:               ? 'bg-primary text-primary-foreground'
46:               : 'bg-accent/50 hover:bg-accent text-accent-foreground'}`}
47:           onClick={() => onCategorySelect(category)}
48:         >
49:           {category}
50:         </button>
51:       ))}
52:     </div>
53:   )
54: }
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

## File: components/ui/expanded-card.tsx
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
 21: import { KannadaEntry } from "@/types"
 22: import Image from "next/image"
 23: import { X, Volume2 } from "lucide-react"
 24: import { useState } from "react"
 25: import { motion } from "framer-motion"
 26: 
 27: interface ExpandedCardProps {
 28:   entry: KannadaEntry
 29:   onClose: () => void
 30: }
 31: 
 32: export function ExpandedCard({ entry, onClose }: ExpandedCardProps) {
 33:   const [isPlayingWord, setIsPlayingWord] = useState(false)
 34:   const [isPlayingSentence, setIsPlayingSentence] = useState(false)
 35: 
 36: 
 37:   const {
 38:     kannada = "N/A",
 39:     english = "N/A",
 40:     kanglish = "N/A",
 41:     icon = null,
 42:     waudio = null,
 43:     ksentence = null,
 44:     esentence = null,
 45:     kesentence = null,
 46:     image = null,
 47:     saudio = null,
 48:   } = entry
 49: 
 50: 
 51:   const playWordAudio = (e: React.MouseEvent) => {
 52:     e.stopPropagation()
 53: 
 54:     if (!waudio) return
 55: 
 56:     const audio = new Audio(waudio)
 57: 
 58:     setIsPlayingWord(true)
 59: 
 60:     audio.onended = () => {
 61:       setIsPlayingWord(false)
 62:     }
 63: 
 64:     audio.play().catch(error => {
 65:       console.error("Error playing word audio:", error)
 66:       setIsPlayingWord(false)
 67:     })
 68:   }
 69: 
 70: 
 71:   const playSentenceAudio = (e: React.MouseEvent) => {
 72:     e.stopPropagation()
 73: 
 74:     if (!saudio) return
 75: 
 76:     const audio = new Audio(saudio)
 77: 
 78:     setIsPlayingSentence(true)
 79: 
 80:     audio.onended = () => {
 81:       setIsPlayingSentence(false)
 82:     }
 83: 
 84:     audio.play().catch(error => {
 85:       console.error("Error playing sentence audio:", error)
 86:       setIsPlayingSentence(false)
 87:     })
 88:   }
 89: 
 90:   return (
 91:     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
 92:       <motion.div
 93:         className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-card p-8 shadow-xl"
 94:         onClick={(e) => e.stopPropagation()}
 95:         initial={{ opacity: 0, scale: 0.9 }}
 96:         animate={{ opacity: 1, scale: 1 }}
 97:         exit={{ opacity: 0, scale: 0.9 }}
 98:         transition={{ type: "spring", damping: 25, stiffness: 300 }}
 99:       >
100:         {}
101:         <button
102:           className="absolute right-4 top-4 rounded-full p-2 hover:bg-accent"
103:           onClick={onClose}
104:           aria-label="Close"
105:         >
106:           <X className="h-6 w-6" />
107:         </button>
108: 
109:         {}
110:         <div className="flex justify-between items-start mb-8">
111:           {}
112:           <div>
113:             <h2 className="text-3xl font-semibold text-foreground mb-2" lang="kn">
114:               {kannada}
115:             </h2>
116:             <p className="text-xl text-foreground">{english}</p>
117:             <p className="text-lg italic text-muted-foreground">{kanglish}</p>
118:           </div>
119: 
120:           {}
121:           <div className="flex items-center">
122:             {icon && (
123:               <Image
124:                 src={icon}
125:                 alt={`${english} icon`}
126:                 width={60}
127:                 height={60}
128:                 className="h-15 w-15 object-contain mr-4"
129:               />
130:             )}
131: 
132:             {waudio && (
133:               <button
134:                 className={`rounded-full p-3 ${isPlayingWord ? 'bg-primary/20' : 'bg-accent/50 hover:bg-accent'}`}
135:                 onClick={playWordAudio}
136:                 aria-label="Play word pronunciation"
137:               >
138:                 <Volume2 className="h-6 w-6" />
139:               </button>
140:             )}
141:           </div>
142:         </div>
143: 
144:         {}
145:         {image && (
146:           <div className="flex justify-center mb-8">
147:             <Image
148:               src={image}
149:               alt={`${english} illustration`}
150:               width={400}
151:               height={300}
152:               className="rounded-lg object-contain max-h-[300px]"
153:             />
154:           </div>
155:         )}
156: 
157:         {}
158:         {ksentence && (
159:           <div className="flex flex-col items-center">
160:             <div className="text-center mb-2">
161:               <p className="text-xl font-medium text-foreground mb-2" lang="kn">{ksentence}</p>
162:               <p className="text-lg text-foreground mb-1">{kesentence}</p>
163:               <p className="text-base text-muted-foreground">{esentence}</p>
164:             </div>
165: 
166:             {}
167:             {saudio && (
168:               <button
169:                 className={`rounded-full p-3 mt-2 ${isPlayingSentence ? 'bg-primary/20' : 'bg-accent/50 hover:bg-accent'}`}
170:                 onClick={playSentenceAudio}
171:                 aria-label="Play sentence pronunciation"
172:               >
173:                 <Volume2 className="h-6 w-6" />
174:               </button>
175:             )}
176:           </div>
177:         )}
178:       </motion.div>
179:     </div>
180:   )
181: }
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
 19:     <header className="sticky top-0 z-50 bg-background shadow-sm">
 20:       <div className="container mx-auto flex items-center justify-between p-4">
 21:         {}
 22:         <motion.div
 23:           initial={{ opacity: 0, x: -20 }}
 24:           animate={{ opacity: 1, x: 0 }}
 25:           transition={{ duration: 0.5 }}
 26:           className="flex items-center space-x-2"
 27:         >
 28:           <Link href="/" className="flex items-center space-x-2">
 29:             <div className="relative h-8 w-8">
 30:               <Image
 31:                 src="/kannadakali.png"
 32:                 alt="KannadaKali Logo"
 33:                 fill
 34:                 className="object-contain"
 35:               />
 36:             </div>
 37:             <span className="text-xl font-bold">KannadaKali</span>
 38:           </Link>
 39:         </motion.div>
 40: 
 41:         {}
 42:         <nav className="hidden md:flex items-center space-x-4">
 43:           {navLinks.map((link) => (
 44:             <motion.div
 45:               key={link.href}
 46:               whileHover={{ scale: 1.05 }}
 47:               whileTap={{ scale: 0.95 }}
 48:             >
 49:               <Link
 50:                 href={link.href}
 51:                 className="text-muted-foreground hover:text-foreground px-3 py-1 rounded-full transition"
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
 88:               <Menu className="h-6 w-6" />
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
100:           className="md:hidden bg-background border-t"
101:         >
102:           <div className="container mx-auto py-4">
103:             <nav className="flex flex-col space-y-4">
104:               {navLinks.map((link) => (
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
  3: import { useState, useEffect, useCallback } from "react"
  4: import { motion, AnimatePresence } from "framer-motion"
  5: import { Check, Play } from "lucide-react"
  6: import { toast } from "sonner"
  7: 
  8: import { cn } from "@/lib/utils"
  9: import { saveProgressAction } from "@/actions/db/progress-actions"
 10: import { KannadaEntry } from "@/types/kannada-types"
 11: 
 12: 
 13: type QuizType = "match" | "multi" | "seq"
 14: 
 15: 
 16: interface QuizComponentProps {
 17:   entries: KannadaEntry[]
 18:   type: QuizType
 19:   stars: number
 20: }
 21: 
 22: 
 23: const shuffleArray = <T,>(array: T[]): T[] => {
 24:   const shuffled = [...array]
 25:   for (let i = shuffled.length - 1; i > 0; i--) {
 26:     const j = Math.floor(Math.random() * (i + 1));
 27:     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
 28:   }
 29:   return shuffled
 30: }
 31: 
 32: 
 33: const correctSound = new Audio("https://audio.jukehost.co.uk/correct.mp3")
 34: const incorrectSound = new Audio("https://audio.jukehost.co.uk/incorrect.mp3")
 35: 
 36: export default function QuizComponent({ entries, type, stars }: QuizComponentProps) {
 37:   const [currentQuestion, setCurrentQuestion] = useState(0)
 38:   const [options, setOptions] = useState<KannadaEntry[]>([])
 39:   const [selected, setSelected] = useState<string[]>([])
 40:   const [matchedPairs, setMatchedPairs] = useState<Map<string, string>>(new Map())
 41:   const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
 42:   const [timer, setTimer] = useState(30)
 43:   const [isComplete, setIsComplete] = useState(false)
 44: 
 45: 
 46:   const getOptionCount = () => {
 47:     if (stars < 5) return 2
 48:     if (stars < 10) return 3
 49:     return 4
 50:   }
 51: 
 52: 
 53:   const setupQuestion = useCallback(() => {
 54:     if (entries.length === 0) return
 55: 
 56:     const questionEntry = entries[currentQuestion % entries.length]
 57:     const distractors = shuffleArray(entries.filter(e => e.kannada !== questionEntry.kannada))
 58:     const optionCount = Math.min(getOptionCount(), distractors.length + 1)
 59:     const questionOptions = [questionEntry, ...distractors.slice(0, optionCount - 1)]
 60:     setOptions(shuffleArray(questionOptions))
 61:     setSelected([])
 62:     setMatchedPairs(new Map())
 63:     setIsCorrect(null)
 64:     setTimer(30)
 65:   }, [entries, currentQuestion, stars])
 66: 
 67:   useEffect(() => {
 68:     setupQuestion()
 69:   }, [setupQuestion])
 70: 
 71: 
 72:   useEffect(() => {
 73:     if (timer <= 0 || isCorrect !== null) return
 74:     const interval = setInterval(() => setTimer(t => t - 1), 1000)
 75:     return () => clearInterval(interval)
 76:   }, [timer, isCorrect])
 77: 
 78: 
 79:   const handleSubmit = async () => {
 80:     const questionEntry = entries[currentQuestion % entries.length]
 81:     let correct = false
 82: 
 83:     if (type === "match") {
 84:       correct = matchedPairs.get(questionEntry.kannada!) === questionEntry.icon
 85:     } else if (type === "multi") {
 86:       correct = selected[0] === questionEntry.kannada
 87:     } else if (type === "seq") {
 88:       const correctOrder = questionEntry.kesentence!.split(" ")
 89:       correct = selected.join(" ") === correctOrder.join(" ")
 90:     }
 91: 
 92:     setIsCorrect(correct)
 93:     if (correct) {
 94:       correctSound.play().catch(() => console.warn("Audio playback failed"))
 95:       toast.success("Great job!")
 96: 
 97:       const progressResult = await saveProgressAction({
 98:         stars: 1,
 99:         wordsLearned: 1,
100:         quizzesPlayed: 1
101:       })
102:       if (!progressResult.isSuccess) {
103:         console.error("Failed to save progress:", progressResult.message)
104:       }
105:     } else {
106:       incorrectSound.play().catch(() => console.warn("Audio playback failed"))
107:       toast.error("Try again!")
108:     }
109: 
110:     setTimeout(() => {
111:       if (correct) {
112:         if (currentQuestion + 1 < entries.length) {
113:           setCurrentQuestion(currentQuestion + 1)
114:         } else {
115:           setIsComplete(true)
116:         }
117:       }
118:       setIsCorrect(null)
119:     }, 1500)
120:   }
121: 
122: 
123:   const handleDrop = (word: string, icon: string) => {
124:     setMatchedPairs(prev => new Map(prev).set(word, icon))
125:   }
126: 
127: 
128:   const handleSelect = (kannada: string) => {
129:     setSelected([kannada])
130:   }
131: 
132: 
133:   const handleSequenceDrop = (index: number, item: string) => {
134:     const newSelected = [...selected]
135:     newSelected[index] = item
136:     setSelected(newSelected.filter(Boolean))
137:   }
138: 
139:   if (entries.length === 0) {
140:     return <div className="text-center text-muted-foreground">No quizzes available.</div>
141:   }
142: 
143:   if (isComplete) {
144:     return (
145:       <div className="text-center">
146:         <h2 className="text-2xl font-bold">Quiz Complete!</h2>
147:         <p className="mt-2">You've mastered this set!</p>
148:       </div>
149:     )
150:   }
151: 
152:   const questionEntry = entries[currentQuestion % entries.length]
153: 
154:   return (
155:     <div className="flex flex-col items-center gap-6 p-4">
156:       {}
157:       <div className="text-lg font-semibold">Time: {timer}s</div>
158: 
159:       {}
160:       {type === "match" && (
161:         <div className="grid grid-cols-2 gap-4">
162:           <div>
163:             <h3 className="text-xl font-bold">{questionEntry.kannada}</h3>
164:             {options.map(opt => (
165:               <motion.div
166:                 key={opt.kannada}
167:                 className={cn(
168:                   "p-2 m-2 border rounded cursor-pointer",
169:                   matchedPairs.has(opt.kannada!) && "opacity-50"
170:                 )}
171:                 drag={!matchedPairs.has(opt.kannada!)}
172:                 onDragEnd={(_, info) => {
173:                   const dropTarget = document.elementFromPoint(info.point.x, info.point.y) as HTMLElement;
174:                   if (dropTarget?.dataset.icon) {
175:                     handleDrop(opt.kannada!, dropTarget.dataset.icon)
176:                   }
177:                 }}
178:               >
179:                 {opt.kannada}
180:               </motion.div>
181:             ))}
182:           </div>
183:           <div>
184:             {options.map(opt => (
185:               <div
186:                 key={opt.icon}
187:                 data-icon={opt.icon}
188:                 className="p-2 m-2 border rounded min-h-[50px] flex items-center justify-center"
189:               >
190:                 {matchedPairs.get(opt.kannada!) === opt.icon ? (
191:                   <img src={opt.icon!} alt="Matched" className="w-12 h-12" />
192:                 ) : (
193:                   <img src={opt.icon!} alt="Icon" className="w-12 h-12 opacity-50" />
194:                 )}
195:               </div>
196:             ))}
197:           </div>
198:         </div>
199:       )}
200: 
201:       {type === "multi" && (
202:         <div className="flex flex-col items-center gap-4">
203:           <button
204:             onClick={() => new Audio(questionEntry.waudio!).play()}
205:             className="flex items-center gap-2 p-2 bg-accent text-white rounded"
206:           >
207:             <Play size={20} /> Hear the Word
208:           </button>
209:           <div className="grid grid-cols-2 gap-4">
210:             {options.map(opt => (
211:               <motion.button
212:                 key={opt.kannada}
213:                 className={cn(
214:                   "p-4 border rounded",
215:                   selected.includes(opt.kannada!) && "bg-accent text-white"
216:                 )}
217:                 onClick={() => handleSelect(opt.kannada!)}
218:                 whileTap={{ scale: 0.95 }}
219:               >
220:                 {opt.kannada}
221:               </motion.button>
222:             ))}
223:           </div>
224:         </div>
225:       )}
226: 
227:       {type === "seq" && (
228:         <div className="flex flex-col items-center gap-4">
229:           <p className="text-lg">{questionEntry.kesentence}</p>
230:           <div className="flex gap-2">
231:             {questionEntry.kesentence!.split(" ").map((word, idx) => (
232:               <div
233:                 key={idx}
234:                 className="p-2 border rounded min-w-[100px] min-h-[40px] flex items-center justify-center"
235:                 onDrop={e => {
236:                   const draggedWord = e.dataTransfer.getData("text")
237:                   handleSequenceDrop(idx, draggedWord)
238:                 }}
239:                 onDragOver={e => e.preventDefault()}
240:               >
241:                 {selected[idx] || ""}
242:               </div>
243:             ))}
244:           </div>
245:           <div className="flex gap-2 flex-wrap">
246:             {options
247:               .flatMap(opt => opt.kesentence!.split(" "))
248:               .filter((word, idx, self) => self.indexOf(word) === idx)
249:               .map(word => (
250:                 <motion.div
251:                   key={word}
252:                   className={cn(
253:                     "p-2 border rounded cursor-pointer",
254:                     selected.includes(word) && "opacity-50"
255:                   )}
256:                   drag={!selected.includes(word)}
257:                   whileHover={{ scale: 1.05 }}
258:                   whileDrag={{ scale: 1.1 }}
259:                   onDragEnd={(_, info) => {
260:                     if (!selected.includes(word)) {
261:                       const dropTarget = document.elementFromPoint(info.point.x, info.point.y) as HTMLElement;
262:                       const index = dropTarget?.dataset?.index ? parseInt(dropTarget.dataset.index) : -1;
263:                       if (index >= 0) {
264:                         handleSequenceDrop(index, word);
265:                       }
266:                     }
267:                   }}
268:                 >
269:                   {word}
270:                 </motion.div>
271:               ))}
272:           </div>
273:         </div>
274:       )}
275: 
276:       {}
277:       <AnimatePresence>
278:         {isCorrect !== null && (
279:           <motion.div
280:             initial={{ opacity: 0, scale: 0.5 }}
281:             animate={{ opacity: 1, scale: 1 }}
282:             exit={{ opacity: 0 }}
283:             className={cn(
284:               "absolute inset-0 flex items-center justify-center",
285:               isCorrect ? "bg-green-500/50" : "bg-red-500/50"
286:             )}
287:           >
288:             <Check size={48} className="text-white" />
289:           </motion.div>
290:         )}
291:       </AnimatePresence>
292: 
293:       {}
294:       <motion.button
295:         onClick={handleSubmit}
296:         className="mt-4 px-6 py-2 bg-primary text-white rounded-lg"
297:         whileHover={{ scale: 1.05 }}
298:         whileTap={{ scale: 0.95 }}
299:         disabled={isCorrect !== null || (type === "multi" && selected.length === 0)}
300:       >
301:         Check Answer
302:       </motion.button>
303:     </div>
304:   )
305: }
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

## File: components/ui/rapid-fire-quiz.tsx
````typescript
  1: "use client"
  2: 
  3: import { useState, useEffect, useCallback } from "react"
  4: import { motion } from "framer-motion"
  5: import { Check, Play, ChevronRight, X } from "lucide-react"
  6: import { toast } from "sonner"
  7: import { Button } from "@/components/ui/button"
  8: import { Progress } from "@/components/ui/progress"
  9: import { saveProgressAction } from "@/actions/db/progress-actions"
 10: import { saveQuizResultAction } from "@/actions/db/quiz-results-actions"
 11: import { KannadaEntry } from "@/types/kannada-types"
 12: import { cn } from "@/lib/utils"
 13: 
 14: 
 15: const QUESTION_TYPES = ["match", "multi", "seq"] as const
 16: const QUESTION_TIME = 10
 17: const QUESTIONS_PER_ROUND = 10
 18: 
 19: 
 20: type QuizType = typeof QUESTION_TYPES[number]
 21: type QuizResult = {
 22:   questionType: QuizType
 23:   question: KannadaEntry
 24:   isCorrect: boolean
 25:   userAnswer?: string | string[] | Map<string, string>
 26: }
 27: 
 28: 
 29: interface RapidFireQuizProps {
 30:   entries: KannadaEntry[]
 31:   stars: number
 32: }
 33: 
 34: 
 35: const playAudio = (url: string | null) => {
 36:   if (!url) return;
 37: 
 38:   const audio = new Audio(url);
 39:   if (typeof window !== 'undefined' && window.Audio) {
 40:     audio.play().catch(err => {
 41:       console.warn(`Failed to play audio: ${err.message}`);
 42:     });
 43:   }
 44: };
 45: 
 46: 
 47: const loadSound = (path: string) => {
 48:   const audio = new Audio(path);
 49: 
 50: 
 51:   audio.addEventListener('error', () => {
 52:     console.warn(`Failed to load sound: ${path}`);
 53:   });
 54: 
 55:   return {
 56:     play: () => {
 57: 
 58:       if (typeof window !== 'undefined' && window.Audio) {
 59:         audio.currentTime = 0;
 60:         return audio.play().catch(err => {
 61:           console.warn(`Failed to play sound: ${err.message}`);
 62:         });
 63:       }
 64:       return Promise.resolve();
 65:     }
 66:   };
 67: };
 68: 
 69: const correctSound = loadSound("/sounds/correct.mp3");
 70: const incorrectSound = loadSound("/sounds/incorrect.mp3");
 71: const tickSound = loadSound("/sounds/tick.mp3");
 72: const finishSound = loadSound("/sounds/finish.mp3");
 73: 
 74: 
 75: export default function RapidFireQuiz({ entries, stars }: RapidFireQuizProps) {
 76: 
 77:   const [isStarted, setIsStarted] = useState(false)
 78:   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
 79:   const [quizQuestions, setQuizQuestions] = useState<{
 80:     entry: KannadaEntry
 81:     type: QuizType
 82:     options: KannadaEntry[]
 83:   }[]>([])
 84:   const [timer, setTimer] = useState(QUESTION_TIME)
 85:   const [selected, setSelected] = useState<string[]>([])
 86:   const [matchedPairs, setMatchedPairs] = useState<Map<string, string>>(new Map())
 87:   const [results, setResults] = useState<QuizResult[]>([])
 88:   const [isComplete, setIsComplete] = useState(false)
 89:   const [answeredQuestion, setAnsweredQuestion] = useState(false)
 90:   const [shuffledWords, setShuffledWords] = useState<string[]>([])
 91:   const [selectedWord, setSelectedWord] = useState<string | null>(null)
 92: 
 93: 
 94:   const getOptionCount = useCallback(() => {
 95:     if (stars < 5) return 2
 96:     if (stars < 10) return 3
 97:     return 4
 98:   }, [stars])
 99: 
100: 
101:   const shuffleArray = useCallback(<T,>(array: T[]): T[] => {
102:     const shuffled = [...array]
103:     for (let i = shuffled.length - 1; i > 0; i--) {
104:       const j = Math.floor(Math.random() * (i + 1));
105:       [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
106:     }
107:     return shuffled
108:   }, [])
109: 
110: 
111:   const generateQuizQuestions = useCallback(() => {
112:     if (entries.length === 0) return []
113: 
114:     const shuffledEntries = shuffleArray(entries)
115:     const questions = []
116: 
117:     for (let i = 0; i < Math.min(QUESTIONS_PER_ROUND, shuffledEntries.length); i++) {
118:       const entry = shuffledEntries[i]
119: 
120:       const randomType = QUESTION_TYPES[Math.floor(Math.random() * QUESTION_TYPES.length)]
121: 
122: 
123:       const type = randomType === "seq" && !entry.kesentence ? "multi" : randomType
124: 
125: 
126:       const distractors = shuffleArray(shuffledEntries.filter(e => e.kannada !== entry.kannada))
127:       const optionCount = Math.min(getOptionCount(), distractors.length + 1)
128:       const options = shuffleArray([entry, ...distractors.slice(0, optionCount - 1)])
129: 
130:       questions.push({ entry, type, options })
131:     }
132: 
133:     return questions
134:   }, [entries, getOptionCount, shuffleArray])
135: 
136: 
137:   const startQuiz = useCallback(() => {
138:     const questions = generateQuizQuestions()
139:     setQuizQuestions(questions)
140:     setCurrentQuestionIndex(0)
141:     setTimer(QUESTION_TIME)
142:     setResults([])
143:     setIsStarted(true)
144:     setIsComplete(false)
145:     setAnsweredQuestion(false)
146: 
147: 
148:     if (questions.length > 0 && questions[0].type === "seq" && questions[0].entry.kesentence) {
149:       setShuffledWords(shuffleArray(questions[0].entry.kesentence.split(" ")))
150:     }
151:   }, [generateQuizQuestions, shuffleArray])
152: 
153: 
154:   const resetForNextQuestion = useCallback(() => {
155:     setSelected([])
156:     setMatchedPairs(new Map())
157:     setTimer(QUESTION_TIME)
158:     setAnsweredQuestion(false)
159:     setSelectedWord(null)
160: 
161: 
162:     const nextQuestion = quizQuestions[currentQuestionIndex + 1]
163:     if (nextQuestion && nextQuestion.type === "seq" && nextQuestion.entry.kesentence) {
164:       setShuffledWords(shuffleArray(nextQuestion.entry.kesentence.split(" ")))
165:     }
166:   }, [quizQuestions, currentQuestionIndex, shuffleArray])
167: 
168: 
169:   const moveToNextQuestion = useCallback(() => {
170:     if (currentQuestionIndex + 1 >= quizQuestions.length) {
171: 
172:       finishSound.play()
173:       setIsComplete(true)
174:       setIsStarted(false)
175:       console.log("Quiz complete, showing results")
176: 
177: 
178:       const correctAnswers = results.filter(r => r.isCorrect).length
179: 
180: 
181:       const timeSpent = QUESTION_TIME * QUESTIONS_PER_ROUND - timer
182: 
183: 
184:       const categories = Array.from(
185:         new Set(
186:           quizQuestions
187:             .map(q => q.entry.category)
188:             .filter(Boolean) as string[]
189:         )
190:       )
191: 
192: 
193:       saveQuizResultAction({
194:         quizType: "rapid_fire",
195:         score: correctAnswers,
196:         totalQuestions: quizQuestions.length,
197:         timeSpent,
198:         categories
199:       }).catch(error => {
200:         console.error("Failed to save quiz result:", error)
201:       })
202: 
203: 
204:       saveProgressAction({
205:         stars: Math.ceil(correctAnswers / 2),
206:         wordsLearned: correctAnswers,
207:         quizzesPlayed: 1
208:       }).catch(console.error)
209: 
210:       return
211:     }
212: 
213: 
214:     setCurrentQuestionIndex(prev => prev + 1)
215:     resetForNextQuestion()
216:   }, [currentQuestionIndex, quizQuestions, results, timer, resetForNextQuestion, setIsComplete, finishSound])
217: 
218: 
219:   const handleTimeout = useCallback(() => {
220:     const currentQuestion = quizQuestions[currentQuestionIndex]
221: 
222:     if (!currentQuestion) return
223: 
224: 
225:     setResults(prev => [
226:       ...prev,
227:       {
228:         questionType: currentQuestion.type,
229:         question: currentQuestion.entry,
230:         isCorrect: false,
231:         userAnswer: currentQuestion.type === "match"
232:           ? matchedPairs
233:           : selected
234:       }
235:     ])
236: 
237:     toast.error("Time's up!")
238:     incorrectSound.play()
239: 
240:     moveToNextQuestion()
241:   }, [currentQuestionIndex, incorrectSound, matchedPairs, moveToNextQuestion, quizQuestions, selected, setResults]);
242: 
243: 
244:   const handleSubmit = useCallback(() => {
245:     const currentQuestion = quizQuestions[currentQuestionIndex]
246: 
247:     if (!currentQuestion) return
248: 
249:     setAnsweredQuestion(true)
250:     let isCorrect = false
251: 
252: 
253:     if (currentQuestion.type === "match") {
254: 
255:       const userMatched = matchedPairs.get(currentQuestion.entry.kannada!)
256:       const correctIcon = currentQuestion.entry.icon
257:       isCorrect = userMatched === correctIcon
258: 
259:       console.log("Match validation:", {
260:         kannada: currentQuestion.entry.kannada,
261:         userMatched,
262:         correctIcon,
263:         isCorrect,
264:         allMatches: Array.from(matchedPairs.entries())
265:       })
266:     } else if (currentQuestion.type === "multi") {
267:       isCorrect = selected[0] === currentQuestion.entry.kannada
268: 
269:       console.log("Multi validation:", {
270:         selected: selected[0],
271:         correct: currentQuestion.entry.kannada,
272:         isCorrect
273:       })
274:     } else if (currentQuestion.type === "seq") {
275:       const correctOrder = currentQuestion.entry.kesentence!.split(" ")
276:       const userSequence = selected.join(" ")
277:       const correctSequence = correctOrder.join(" ")
278:       isCorrect = userSequence === correctSequence
279: 
280:       console.log("Sequence validation:", {
281:         userSequence,
282:         correctSequence,
283:         isCorrect
284:       })
285:     }
286: 
287: 
288:     setResults(prev => [
289:       ...prev,
290:       {
291:         questionType: currentQuestion.type,
292:         question: currentQuestion.entry,
293:         isCorrect,
294:         userAnswer: currentQuestion.type === "match"
295:           ? matchedPairs
296:           : selected
297:       }
298:     ])
299: 
300: 
301:     if (isCorrect) {
302:       correctSound.play()
303:       toast.success("Correct!")
304:     } else {
305:       incorrectSound.play()
306:       toast.error("Wrong answer!")
307:     }
308: 
309:     setTimeout(() => moveToNextQuestion(), 1000)
310:   }, [currentQuestionIndex, matchedPairs, moveToNextQuestion, quizQuestions, selected, setAnsweredQuestion, setResults, correctSound, incorrectSound])
311: 
312: 
313:   useEffect(() => {
314:     if (!isStarted || isComplete || answeredQuestion) return
315: 
316:     const tick = () => {
317:       setTimer(prevTimer => {
318:         if (prevTimer <= 1) {
319:           handleTimeout()
320:           return 0
321:         }
322: 
323:         if (prevTimer <= 3) {
324:           tickSound.play()
325:         }
326:         return prevTimer - 1
327:       })
328:     }
329: 
330:     const interval = setInterval(tick, 1000)
331:     return () => clearInterval(interval)
332:   }, [isStarted, isComplete, answeredQuestion, handleTimeout, tickSound])
333: 
334: 
335:   const handleMatchDrop = (word: string, icon: string) => {
336:     setMatchedPairs(prev => new Map(prev).set(word, icon))
337:   }
338: 
339:   const handleSelect = (kannada: string) => {
340:     setSelected([kannada])
341:   }
342: 
343:   const handleSequenceDrop = (index: number, item: string) => {
344:     const newSelected = [...selected]
345:     newSelected[index] = item
346:     setSelected(newSelected.filter(Boolean))
347:   }
348: 
349: 
350:   if (!isStarted && !isComplete) {
351:     return (
352:       <div className="flex flex-col items-center justify-center gap-6 text-center">
353:         <h2 className="text-2xl font-bold">Rapid Fire Quiz!</h2>
354:         <p className="text-muted-foreground">
355:           Answer as many questions as you can. Each question lasts only 10 seconds!
356:         </p>
357:         <Button
358:           size="lg"
359:           className="mt-4 flex items-center gap-2"
360:           onClick={startQuiz}
361:         >
362:           <Play size={20} /> Start Quiz
363:         </Button>
364:       </div>
365:     )
366:   }
367: 
368: 
369:   if (isComplete) {
370:     const correctCount = results.filter(r => r.isCorrect).length
371:     const totalQuestions = results.length
372:     const percentage = Math.round((correctCount / totalQuestions) * 100)
373: 
374:     return (
375:       <div className="flex flex-col items-center justify-center gap-6 p-4">
376:         <h2 className="text-2xl font-bold">Quiz Results</h2>
377: 
378:         <div className="w-full max-w-md">
379:           <Progress value={percentage} className="h-4" />
380:           <p className="mt-2 text-center">
381:             {correctCount} out of {totalQuestions} correct ({percentage}%)
382:           </p>
383:         </div>
384: 
385:         <div className="w-full max-w-md space-y-4">
386:           <h3 className="text-xl font-semibold">Questions:</h3>
387:           {results.map((result, idx) => (
388:             <div
389:               key={idx}
390:               className={cn(
391:                 "rounded-lg border p-3",
392:                 result.isCorrect ? "border-green-500 bg-green-50 dark:bg-green-950/20" : "border-red-500 bg-red-50 dark:bg-red-950/20"
393:               )}
394:             >
395:               <div className="flex items-center justify-between">
396:                 <span className="text-sm font-medium">Question {idx + 1}</span>
397:                 {result.isCorrect ? (
398:                   <Check className="h-5 w-5 text-green-500" />
399:                 ) : (
400:                   <span className="text-red-500">✕</span>
401:                 )}
402:               </div>
403:               <p className="mt-2 font-medium">
404:                 {result.question.kannada}
405:                 <span className="text-muted-foreground"> - {result.question.english}</span>
406:               </p>
407:             </div>
408:           ))}
409:         </div>
410: 
411:         <Button
412:           size="lg"
413:           className="mt-4 flex items-center gap-2"
414:           onClick={startQuiz}
415:         >
416:           <Play size={20} /> Try Again
417:         </Button>
418:       </div>
419:     )
420:   }
421: 
422: 
423:   const currentQuestion = quizQuestions[currentQuestionIndex]
424:   if (!currentQuestion) return null
425: 
426:   return (
427:     <div className="flex flex-col items-center gap-4 p-4">
428:       {}
429:       <div className="flex w-full max-w-md items-center justify-between">
430:         <div className="text-sm">
431:           Question {currentQuestionIndex + 1}/{quizQuestions.length}
432:         </div>
433:         <div
434:           className={cn(
435:             "rounded px-3 py-1 font-mono text-white",
436:             timer <= 3 ? "bg-red-500" : "bg-primary"
437:           )}
438:         >
439:           {timer}s
440:         </div>
441:       </div>
442: 
443:       {}
444:       <Progress
445:         value={(timer / QUESTION_TIME) * 100}
446:         className="h-2 w-full max-w-md"
447:       />
448: 
449:       {}
450:       <div className="mt-4 w-full max-w-md rounded-lg border bg-card p-4 shadow-sm">
451:         {}
452:         {currentQuestion.type === "match" && (
453:           <div className="grid grid-cols-2 gap-4">
454:             <div>
455:               <h3 className="mb-2 text-center font-medium">Match the word:</h3>
456:               {currentQuestion.options.map(opt => (
457:                 <motion.button
458:                   key={opt.kannada}
459:                   className={cn(
460:                     "m-2 w-full cursor-pointer rounded border p-2 text-center",
461:                     matchedPairs.has(opt.kannada!)
462:                       ? "bg-primary/20 text-primary font-medium"
463:                       : selectedWord === opt.kannada!
464:                         ? "border-primary bg-primary/10"
465:                         : ""
466:                   )}
467:                   onClick={() => {
468:                     if (!matchedPairs.has(opt.kannada!)) {
469:                       console.log("Word selected:", opt.kannada!);
470:                       setSelectedWord(opt.kannada!);
471:                     }
472:                   }}
473:                   whileTap={{ scale: 0.95 }}
474:                 >
475:                   {opt.kannada}
476:                   {matchedPairs.has(opt.kannada!) && (
477:                     <span className="ml-2 text-green-600">✓</span>
478:                   )}
479:                 </motion.button>
480:               ))}
481:             </div>
482:             <div>
483:               <h3 className="mb-2 text-center font-medium">With the icon:</h3>
484:               {currentQuestion.options.map(opt => {
485: 
486:                 const isMatched = Array.from(matchedPairs.entries()).some(([_, icon]) => icon === opt.icon);
487: 
488:                 return (
489:                   <motion.button
490:                     key={opt.icon}
491:                     data-icon={opt.icon}
492:                     className={cn(
493:                       "m-2 flex h-16 w-full cursor-pointer items-center justify-center rounded border p-2",
494:                       isMatched ? "bg-primary/20 border-primary" : ""
495:                     )}
496:                     onClick={() => {
497:                       if (selectedWord && !isMatched) {
498:                         console.log("Matching:", selectedWord, "with icon:", opt.icon);
499:                         handleMatchDrop(selectedWord, opt.icon!);
500:                         setSelectedWord(null);
501:                       }
502:                     }}
503:                     whileTap={{ scale: 0.95 }}
504:                   >
505:                     <img
506:                       src={opt.icon!}
507:                       alt="Icon"
508:                       className={cn(
509:                         "h-10 w-10",
510:                         isMatched ? "" : "opacity-70"
511:                       )}
512:                     />
513:                   </motion.button>
514:                 );
515:               })}
516:             </div>
517:           </div>
518:         )}
519: 
520:         {}
521:         {currentQuestion.type === "multi" && (
522:           <div className="flex flex-col items-center gap-4">
523:             <h3 className="text-center font-medium">Select the correct Kannada word:</h3>
524: 
525:             {currentQuestion.entry.waudio && (
526:               <button
527:                 onClick={() => playAudio(currentQuestion.entry.waudio || null)}
528:                 className="flex items-center gap-2 rounded bg-primary p-2 text-white"
529:               >
530:                 <Play size={18} /> Hear the Word
531:               </button>
532:             )}
533: 
534:             <div className="mt-2 grid w-full grid-cols-2 gap-3">
535:               {currentQuestion.options.map(opt => (
536:                 <motion.button
537:                   key={opt.kannada}
538:                   className={cn(
539:                     "rounded border p-3 text-center",
540:                     selected.includes(opt.kannada!) && "bg-primary text-white"
541:                   )}
542:                   onClick={() => handleSelect(opt.kannada!)}
543:                   whileTap={{ scale: 0.95 }}
544:                 >
545:                   {opt.kannada}
546:                 </motion.button>
547:               ))}
548:             </div>
549:           </div>
550:         )}
551: 
552:         {}
553:         {currentQuestion.type === "seq" && (
554:           <div className="flex flex-col items-center gap-4">
555:             <h3 className="text-center font-medium">Rearrange the words to form a correct sentence:</h3>
556: 
557:             {}
558:             <div className="flex flex-wrap items-center justify-center gap-2 rounded-md border border-dashed border-gray-300 p-4 min-h-[80px] w-full">
559:               {selected.length > 0 ? (
560:                 selected.map((word, index) => (
561:                   <motion.button
562:                     key={`selected-${index}`}
563:                     className="flex h-10 items-center justify-center rounded bg-primary/10 px-3 font-medium text-primary"
564:                     onClick={() => {
565:                       console.log("Removing word from sequence:", word, "at index:", index);
566:                       const newSelected = [...selected];
567:                       newSelected.splice(index, 1);
568:                       setSelected(newSelected);
569:                     }}
570:                     whileTap={{ scale: 0.95 }}
571:                   >
572:                     {word}
573:                     <X className="ml-1" size={14} />
574:                   </motion.button>
575:                 ))
576:               ) : (
577:                 <p className="text-gray-400">Tap words below to form a sentence</p>
578:               )}
579:             </div>
580: 
581:             {}
582:             <div className="flex flex-wrap items-center justify-center gap-2">
583:               {shuffledWords.map((word, index) => {
584:                 const isSelected = selected.includes(word);
585:                 return (
586:                   <motion.button
587:                     key={`word-${index}`}
588:                     className={cn(
589:                       "rounded border px-3 py-2",
590:                       isSelected ? "opacity-50 border-gray-300" : "border-gray-400"
591:                     )}
592:                     onClick={() => {
593:                       if (!isSelected) {
594:                         console.log("Adding word to sequence:", word);
595:                         setSelected(prev => [...prev, word]);
596:                       }
597:                     }}
598:                     disabled={isSelected}
599:                     whileTap={!isSelected ? { scale: 0.95 } : {}}
600:                   >
601:                     {word}
602:                   </motion.button>
603:                 );
604:               })}
605:             </div>
606:           </div>
607:         )}
608:       </div>
609: 
610:       {}
611:       <Button
612:         onClick={handleSubmit}
613:         disabled={
614:           (currentQuestion.type === "match" && matchedPairs.size === 0) ||
615:           (currentQuestion.type === "multi" && selected.length === 0) ||
616:           (currentQuestion.type === "seq" && selected.length === 0) ||
617:           answeredQuestion
618:         }
619:         className="mt-4 w-full flex items-center justify-center gap-2"
620:         onMouseEnter={() => {
621: 
622:           console.log("Submit button state:", {
623:             questionType: currentQuestion.type,
624:             matchedPairsSize: matchedPairs.size,
625:             matchedPairsContent: Array.from(matchedPairs.entries()),
626:             selectedLength: selected.length,
627:             selectedContent: selected,
628:             answeredQuestion,
629:             isDisabled:
630:               (currentQuestion.type === "match" && matchedPairs.size === 0) ||
631:               (currentQuestion.type === "multi" && selected.length === 0) ||
632:               (currentQuestion.type === "seq" && selected.length === 0) ||
633:               answeredQuestion
634:           });
635:         }}
636:       >
637:         <Check size={18} /> Submit Answer
638:       </Button>
639: 
640:       {}
641:       <Button
642:         variant="outline"
643:         onClick={handleTimeout}
644:         disabled={answeredQuestion}
645:         className="flex items-center gap-2"
646:       >
647:         <ChevronRight size={18} /> Skip
648:       </Button>
649:     </div>
650:   )
651: }
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
48:       className="rounded-full p-2 hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring"
49:       aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
50:     >
51:       {isDark ? (
52:         <Sun className="h-5 w-5" />
53:       ) : (
54:         <Moon className="h-5 w-5" />
55:       )}
56:     </button>
57:   )
58: }
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
21: import { ThemeProvider as NextThemesProvider, type Attribute } from "next-themes"
22: import { ReactNode } from "react"
23: 
24: interface ThemeProviderProps {
25:   children: ReactNode
26:   attribute?: Attribute
27:   defaultTheme?: string
28:   enableSystem?: boolean
29:   disableTransitionOnChange?: boolean
30: }
31: 
32: export function ThemeProvider({
33:   children,
34:   attribute = "class",
35:   defaultTheme = "system",
36:   enableSystem = true,
37:   disableTransitionOnChange = true,
38: }: ThemeProviderProps) {
39:   return (
40:     <NextThemesProvider
41:       attribute={attribute}
42:       defaultTheme={defaultTheme}
43:       enableSystem={enableSystem}
44:       disableTransitionOnChange={disableTransitionOnChange}
45:     >
46:       {children}
47:     </NextThemesProvider>
48:   )
49: }
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
 1: import { profilesTable, progressTable, quizResultsTable } from "@/db/schema"
 2: import { config } from "dotenv"
 3: import { drizzle } from "drizzle-orm/postgres-js"
 4: import postgres from "postgres"
 5: 
 6: 
 7: config({ path: ".env.local" })
 8: 
 9: 
10: const schema = {
11:   profiles: profilesTable,
12:   progress: progressTable,
13:   quizResults: quizResultsTable
14: }
15: 
16: 
17: const client = postgres(process.env.DATABASE_URL!)
18: export const db = drizzle(client, { schema })
````

## File: db/schema/index.ts
````typescript
1: export * from "./profiles-schema"
2: export * from "./progress-schema"
3: export * from "./quiz-results-schema"
````

## File: db/schema/profiles-schema.ts
````typescript
 1: import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core"
 2: 
 3: export const membershipEnum = pgEnum("membership", ["free", "pro"])
 4: 
 5: export const profilesTable = pgTable("profiles", {
 6:   userId: text("user_id").primaryKey().notNull(),
 7:   membership: membershipEnum("membership").notNull().default("free"),
 8:   stripeCustomerId: text("stripe_customer_id"),
 9:   stripeSubscriptionId: text("stripe_subscription_id"),
10:   createdAt: timestamp("created_at").defaultNow().notNull(),
11:   updatedAt: timestamp("updated_at")
12:     .defaultNow()
13:     .notNull()
14:     .$onUpdate(() => new Date())
15: })
16: 
17: export type InsertProfile = typeof profilesTable.$inferInsert
18: export type SelectProfile = typeof profilesTable.$inferSelect
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
 1: import { integer, pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
 2: 
 3: 
 4: export const quizTypeEnum = pgEnum("quiz_type", ["rapid_fire", "standard"])
 5: 
 6: 
 7: export const quizResultsTable = pgTable("quiz_results", {
 8:   id: uuid("id").defaultRandom().primaryKey(),
 9:   userId: text("user_id").notNull(),
10:   quizType: quizTypeEnum("quiz_type").notNull(),
11:   score: integer("score").notNull(),
12:   totalQuestions: integer("total_questions").notNull(),
13:   timeSpent: integer("time_spent"),
14:   categories: text("categories").array(),
15:   createdAt: timestamp("created_at").defaultNow().notNull(),
16:   updatedAt: timestamp("updated_at")
17:     .defaultNow()
18:     .notNull()
19:     .$onUpdate(() => new Date())
20: })
21: 
22: 
23: export type InsertQuizResult = typeof quizResultsTable.$inferInsert
24: export type SelectQuizResult = typeof quizResultsTable.$inferSelect
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
27:   return parsed.data.map((entry) => ({
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

## File: lib/stripe.ts
````typescript
1: import Stripe from "stripe"
2: 
3: export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
4:   apiVersion: "2025-02-24.acacia",
5:   appInfo: { name: "Receipt AI", version: "0.1.0" }
6: })
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
 8:   throw new Error("Missing Supabase environment variables: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set")
 9: }
10: 
11: 
12: export const supabaseClient = createClient(supabaseUrl, supabaseServiceRoleKey)
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

## File: license
````
 1: MIT License
 2: 
 3: Copyright (c) 2025 Mckay Wrigley
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
11:       { hostname: "i.postimg.cc" }
12:     ] 
13:   } 
14: }
15: 
16: export default nextConfig
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
23:     "@radix-ui/react-accordion": "^1.2.3",
24:     "@radix-ui/react-alert-dialog": "^1.1.6",
25:     "@radix-ui/react-aspect-ratio": "^1.1.2",
26:     "@radix-ui/react-avatar": "^1.1.3",
27:     "@radix-ui/react-checkbox": "^1.1.4",
28:     "@radix-ui/react-collapsible": "^1.1.3",
29:     "@radix-ui/react-context-menu": "^2.2.6",
30:     "@radix-ui/react-dialog": "^1.1.6",
31:     "@radix-ui/react-dropdown-menu": "^2.1.6",
32:     "@radix-ui/react-hover-card": "^1.1.6",
33:     "@radix-ui/react-label": "^2.1.2",
34:     "@radix-ui/react-menubar": "^1.1.6",
35:     "@radix-ui/react-navigation-menu": "^1.2.5",
36:     "@radix-ui/react-popover": "^1.1.6",
37:     "@radix-ui/react-progress": "^1.1.2",
38:     "@radix-ui/react-radio-group": "^1.2.3",
39:     "@radix-ui/react-scroll-area": "^1.2.3",
40:     "@radix-ui/react-select": "^2.1.6",
41:     "@radix-ui/react-separator": "^1.1.2",
42:     "@radix-ui/react-slider": "^1.2.3",
43:     "@radix-ui/react-slot": "^1.1.2",
44:     "@radix-ui/react-switch": "^1.1.3",
45:     "@radix-ui/react-tabs": "^1.1.3",
46:     "@radix-ui/react-toast": "^1.2.6",
47:     "@radix-ui/react-toggle": "^1.1.2",
48:     "@radix-ui/react-toggle-group": "^1.1.2",
49:     "@radix-ui/react-tooltip": "^1.1.8",
50:     "@supabase/auth-helpers-nextjs": "^0.10.0",
51:     "@supabase/supabase-js": "^2.45.4",
52:     "class-variance-authority": "^0.7.1",
53:     "clsx": "^2.1.1",
54:     "cmdk": "^1.0.4",
55:     "date-fns": "^3.6.0",
56:     "drizzle-orm": "^0.39.3",
57:     "embla-carousel-react": "^8.5.2",
58:     "framer-motion": "^12.4.7",
59:     "input-otp": "^1.4.2",
60:     "lucide-react": "^0.475.0",
61:     "next": "^15.1.7",
62:     "next-themes": "^0.4.4",
63:     "papaparse": "^5.5.2",
64:     "postgres": "^3.4.5",
65:     "react": "^19.0",
66:     "react-day-picker": "^8.10.0",
67:     "react-dom": "^19.0",
68:     "react-hook-form": "^7.54.2",
69:     "react-resizable-panels": "^2.1.7",
70:     "recharts": "^2.15.1",
71:     "sonner": "^1.7.4",
72:     "stripe": "^17.7.0",
73:     "tailwind-merge": "^3.0.1",
74:     "tailwindcss": "^3.4.17",
75:     "tailwindcss-animate": "^1.0.7",
76:     "vaul": "^1.1.2",
77:     "zod": "^3.24.2"
78:   },
79:   "devDependencies": {
80:     "@tailwindcss/typography": "^0.5.16",
81:     "@types/node": "^22",
82:     "@types/papaparse": "^5.3.14",
83:     "@types/react": "^19.0",
84:     "@types/react-dom": "^19.0",
85:     "dotenv": "^16.4.7",
86:     "drizzle-kit": "^0.30.4",
87:     "eslint": "^9",
88:     "eslint-config-next": "15.1.7",
89:     "eslint-config-prettier": "^10.0.1",
90:     "eslint-plugin-tailwindcss": "^3.18.0",
91:     "husky": "^9.1.7",
92:     "prettier": "^3.5.0",
93:     "typescript": "^5"
94:   }
95: }
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

## File: public/data/kannada-kali.csv
````
 1: kannada,image,english,ksentence,category,saudio,kanglish,word_id,waudio,esentence,kesentence,icon
 2: ವಿಮಾನ,https://i.postimg.cc/T3yg8M3v/aeroplane.jpg,aeroplane,ಆಕಾಶದಲ್ಲಿ ವಿಮಾನ ಹಾರುತ್ತಿದೆ.,Items,https://audio.jukehost.co.uk/ipr91fDJI2Z1LAnoYowLtNZQHkvU3WG2,vimaana,32,https://audio.jukehost.co.uk/j71cI2hXHCMj4xgerY20Ci00LFb21C6G,aakaashadalli vimaana haarutthide.,An aeroplane is flying in the sky.,https://upcdn.io/kW15bgo/raw/learnkannada/images/aeroplane.png
 3: ಚೆಂಡು,https://i.postimg.cc/K8dLxq1k/ball.jpg,ball,ನನಗೆ ನನ್ನ ಕೆಂಪು ಚೆಂಡು ಬಹಳ ಇಷ್ಟ!,Items,https://audio.jukehost.co.uk/swOHtlSmkVpXorvn7EOEqwoZF7z5dCQl,chendu,35,https://audio.jukehost.co.uk/THatibxEmEyABjGP6h0TIwkbh7Zl2ai4,nanage nanna kempu chendu bahala ishta!,I very much like my red ball!,https://upcdn.io/kW15bgo/raw/learnkannada/images/ball.png
 4: ಕರಡಿ,https://i.postimg.cc/ZRNT8HHN/bear.jpg,bear,"ಅಲ್ಲಿ ನೋಡು, ಮರದ ಪಕ್ಕದಲ್ಲಿ‌ ಕರಡಿ ನಿಂತಿದೆ.",Animals,https://audio.jukehost.co.uk/nnuSFfOFukF8I1ifVJVzzQY0kYv9VljP,karadi,1,https://audio.jukehost.co.uk/Nj4fs1gImV4CriUxJ23u9sljA62LrRo9,"Alli nodu, maradha pakkadalli karadi ninthide.","see over there, there's a bear standing beside the tree.",https://upcdn.io/kW15bgo/raw/learnkannada/images/bear.png
 5: ಪಕ್ಷಿ,https://i.postimg.cc/L8YgvQt0/bird.jpg,bird,"ಅಲ್ಲಿ ನೋಡು, ಮರದ ಮೇಲೆ ಪಕ್ಷಿ ಕುಳಿತಿದೆ.",Animals,https://audio.jukehost.co.uk/diBYLnNfFchLsIsIQtb6R91wVZCnPaCE,pakshi,2,https://audio.jukehost.co.uk/Ov5WK54Irf2fG57H5QibvW0j7CQKcf92,"Alli nodu, maradha mele pakshi kulithide.","see over there, there's a bird sitting on the tree.",https://upcdn.io/kW15bgo/raw/learnkannada/images/bird.png
 6: ದೋಣಿ,https://i.postimg.cc/GpGD2FDM/boat.jpg,boat,ನೀರ ಬಿಟ್ಟು ನೆಲದ ಮೇಲೆ ದೋಣಿ ಸಾಗದು.,Items,https://audio.jukehost.co.uk/vwNUy3VniIeqmpHleOmp2xGBUdhGObE0,doni,34,https://audio.jukehost.co.uk/iliVwFrnWDuBuC2UiTP1caQtX8r3xrm2,neera bittu nelada mele doni saagadu.,A boat cannot travel on land instead of water.,https://upcdn.io/kW15bgo/raw/learnkannada/images/boat.png
 7: ಪುಸ್ತಕ,https://i.postimg.cc/XYyGHfsV/book.jpg,book,ಅಜ್ಜಿ ಪುಸ್ತಕ ಓದುತ್ತಿದ್ದಾರೆ.,Items,https://audio.jukehost.co.uk/1BMXDLuEOyiRbClhnkwEsYoPwK4aMiK1,pustaka,48,https://audio.jukehost.co.uk/0ZZFKNcRDlH2DlpvyQLVoxDrAFcpEdiD,ajji pusthaka odhutthiddaare.,Grandma is reading the newspaper.,https://upcdn.io/kW15bgo/raw/learnkannada/images/book.png
 8: ಚಿಟ್ಟೆ,https://i.postimg.cc/PfSLHnKR/butterfly.jpg,butterfly,ಗುಲಾಬಿ ಹೂವಿನ ಮೇಲೆ ಚಿಟ್ಟೆ ಕುಳಿತಿದೆ.,Animals,https://audio.jukehost.co.uk/8pDC0LcDdeTrfyo6bp0d5KOEqas6puRh,chitte,3,https://audio.jukehost.co.uk/FZztiDJBjx9RF8lLgKNHByrmBlkkFxX4,gulaabi hoovina mele chitte kulithide.,a butterfly is sitting on rose (rose flower).,https://upcdn.io/kW15bgo/raw/learnkannada/images/butterfly.png
 9: ಮೇಣದಬತ್ತಿ,https://i.postimg.cc/yYG3yQXQ/candle.jpg,candle,ಕತ್ತಲಿನಲ್ಲಿ ಮೇಣದಬತ್ತಿ ಬೆಳಕು ನೀಡುತ್ತದೆ.,Items,https://audio.jukehost.co.uk/iuzXPZ692ATmH2l4OVCsCVgOpX6JiAUA,menadabatti,37,https://audio.jukehost.co.uk/Cdvru5EdKpNRwCXCFy9aaNmnGCNG8gCW,katthalinalli menadabatti belaku needutthade.,Candle gives light in the dark.,https://upcdn.io/kW15bgo/raw/learnkannada/images/candle.png
10: ಬೆಕ್ಕು,https://i.postimg.cc/fyqkfYJN/cat.jpg,cat,ಬೆಕ್ಕು ಬಾಗಿಲಿನ ಮುಂದೆ ನಿಂತಿದೆ.,Animals,https://audio.jukehost.co.uk/xx9XZcCVaHiUz7v2Ec7x1htX1qKDmSFV,bekku,4,https://audio.jukehost.co.uk/MEMGA1FrJ7Ye26BA1olPeqCCRIhr8EBx,bekku baagilina mundhe ninthide.,a cat is standing in front of the door.,https://upcdn.io/kW15bgo/raw/learnkannada/images/cat.png
11: ಕುರ್ಚಿ,https://i.postimg.cc/65qGRJR4/chair.jpg,chair,ಈ ಕುರ್ಚಿಯನ್ನು ಮರದಿಂದ ಮಾಡಿದ್ದಾರೆ.,Items,https://audio.jukehost.co.uk/iVDnJul08TFHH51HMPvXnDmYYNOMND0p,kurchi,49,https://audio.jukehost.co.uk/8C5gJnpeNmZx7t18remXWXdkL875gkly,ee kurchi-yannu maradhindha maadiddhaare.,This chair is made with wood.,https://upcdn.io/kW15bgo/raw/learnkannada/images/chair.png
12: ಗಡಿಯಾರ,https://i.postimg.cc/G3qyHhB1/clock.jpg,clock,ಗಡಿಯಾರ ಸಮಯವನ್ನು ತೋರಿಸುತ್ತದೆ.,Items,https://audio.jukehost.co.uk/m0ggbLBcZ3B88nS04yfrIV3fZcxAoGOP,gadiyaara,51,https://audio.jukehost.co.uk/WjuQiSzVzaPpiL9jU7Sia0zxRYLGZyE4,gadiyaara samaya-vannu thorisutthadhe.,A clock shows us time.,https://upcdn.io/kW15bgo/raw/learnkannada/images/clock.png
13: ಬಟ್ಟೆ,https://i.postimg.cc/FzWdqDtK/cloth.jpg,clothes,ವರ್ಷ ಬಟ್ಟೆ ಅಂಗಡಿ ಮುಂದೆ ನಿಂತಿದ್ದಾಳೆ.,Items,https://audio.jukehost.co.uk/AMQmxfNLhjORd10XUlaBbrR6xNTkrxyc,batte,38,https://audio.jukehost.co.uk/1wlmykF7vZMytuOqfoEnLBsP0tLhg5J5,varsha batte angadi munde ninthiddaale.,Varsha is standing in front of the clothes shop.,https://upcdn.io/kW15bgo/raw/learnkannada/images/clothes.png
14: ಹಸು,https://i.postimg.cc/023b6GTG/cow.jpg,cow,ರಸ್ತೆಯ ಮೇಲೆ ಹಸುಗಳು ಹೋಗುತ್ತಿವೆ.,Animals,https://audio.jukehost.co.uk/ehB4iGQWbDoxgNw705nZtLa4oAQ6rS0G,hasu,6,https://audio.jukehost.co.uk/NS1f9JjAcYzmoVRh6DbRnouB7kIwQJT3,rastheya mele hasu-galu hoguttive.,cows are going on the road.,https://upcdn.io/kW15bgo/raw/learnkannada/images/cow.png
15: ಮೊಸಳೆ,https://i.postimg.cc/d3tZ4gxX/crocodile.jpg,crocodile,ನದಿಯ ದಡದಲ್ಲಿ ಮೊಸಳೆ ಕುಳಿತಿದೆ.,Animals,https://audio.jukehost.co.uk/Y816vB5kxhN2pntHZaJZXZqgr3g9KtYh,mosale,7,https://audio.jukehost.co.uk/JiuI12WzXPyutcusY3ZjDtE1FtMmS4D3,nadhiya dhadadhalli mosale kulithide.,A crocodile is sitting on the river bank.,https://upcdn.io/kW15bgo/raw/learnkannada/images/crocodile.png
16: ಕಾಗೆ,https://i.postimg.cc/MTYj0zdV/crow.jpg,crow,ಕಾಗೆ ಶನಿ ದೇವರ ವಾಹನ.,Animals,https://audio.jukehost.co.uk/l0uLBIG8lP3NoejkToFVnTovUw99RA3V,kaage,30,https://audio.jukehost.co.uk/1JXFZHSOu26LAOKmZ6gSXVgGpJCC63sQ,kaage shani devara vaahana.,Crow is the vehicle of Shani god.,https://upcdn.io/kW15bgo/raw/learnkannada/images/crow.png
17: ಲೋಟ,https://i.postimg.cc/dtNrStv9/cup.jpg,cup,ನಾನು ಲೋಟದಲ್ಲಿ ನೀರು ಕುಡಿಯುತ್ತೇನೆ.,Items,https://audio.jukehost.co.uk/Px1bm21cXGtMHZHk2v6dektpPmYS0pgl,lota,52,https://audio.jukehost.co.uk/kWHG5h4rU7xig4UPRVywOqQV8oZrH8W7,naanu lota-dhalli neeru kudiyutthene.,I am drinking water with a cup.,https://upcdn.io/kW15bgo/raw/learnkannada/images/cup.png
18: ಜಿಂಕೆ,https://i.postimg.cc/wBCzjJzj/deer.jpg,deer,ಕಾಡಿನಲ್ಲಿ ಜಿಂಕೆ ಓಡುತ್ತಿದೆ.,Animals,https://audio.jukehost.co.uk/ZHJBFwP45wq2E8RY4qkRi1kky6PijVCq,jinke,8,https://audio.jukehost.co.uk/JHeDVhZBQfIWIDDpydBWZ2FAmeZ5V2oF,kaadinalli jinke odutthide.,A deer is running in the forest.,https://upcdn.io/kW15bgo/raw/learnkannada/images/deer.png
19: ನಾಯಿ,https://i.postimg.cc/y8ZW0gKM/dog.jpg,dog,ಚಿಕ್ಕ ಮಗುವಿನ ಜೊತೆ ನಾಯಿ ಆಡುತ್ತಿದೆ.,Animals,https://audio.jukehost.co.uk/tbV8nndyScnHnjmHoPXTalk45iuuucub,naayi,9,https://audio.jukehost.co.uk/VuPXU2lmsj8J6Ojs3ErkU2QsTJyaTJjg,chikka magu-vina jothe naayi aadutthide.,A dog is playing with the small baby.,https://upcdn.io/kW15bgo/raw/learnkannada/images/dog.png
20: ಕತ್ತೆ,https://i.postimg.cc/Ssys0g94/donkey.jpg,donkey,"ಅಲ್ಲಿ ನೋಡು, ಕತ್ತೆಯ ಮೇಲೆ ಪಕ್ಷಿ ಕುಳಿತಿದೆ.",Animals,https://audio.jukehost.co.uk/53Q0nn4IVJjdFoic2pLcVjSzGik0W3CK,katthe,17,https://audio.jukehost.co.uk/jVrzwdci1aSyCB8uocLoVIGCbbAAdymD,"alli nodu, kattheya mele pakshi kulithide.","See over there, A bird is sitting on the donkey.",https://upcdn.io/kW15bgo/raw/learnkannada/images/donkey.png
21: ಬಾಗಿಲು,https://i.postimg.cc/1t0YpVkB/door.jpg,door,ಇದು ನಮ್ಮ ಮನೆಯ ಬಾಗಿಲು.,Items,https://audio.jukehost.co.uk/Zd7bWrEEa0MhWfd1fOinKITVtKTwx1km,baagilu,47,https://audio.jukehost.co.uk/UGSxKabrtF3Vg8YTS8qc3vuYjyVHlplS,idhu namma maneya baagilu.,This is the door to our house.,https://upcdn.io/kW15bgo/raw/learnkannada/images/door.png
22: ಬಾತುಕೋಳಿ,https://i.postimg.cc/43vdFDmw/duck.jpg,duck,ಕೊಳದಲ್ಲಿ ಬಾತುಕೋಳಿ ಈಜುತ್ತಿದೆ.,Animals,https://audio.jukehost.co.uk/20aLyKtdNrOJfr5qblMCcakKyKU6g81T,baatukoli,10,https://audio.jukehost.co.uk/4iTRt024LGRk34MImM0gNWevDUqE5hfD,koladalli baathukoli eejutthide.,A duck is swimming in the pond.,https://upcdn.io/kW15bgo/raw/learnkannada/images/duck.png
23: ಆನೆ,https://i.postimg.cc/50ntf85C/elephant.jpg,elephant,"ಇಲ್ಲಿ ನೋಡು, ಅಂಬಾರಿ ಹೊತ್ತು ಆನೆ ನಡೆಯುತ್ತಿದೆ.",Animals,https://audio.jukehost.co.uk/w282jxXF5E7Da1Ef7RcPmCNSTud02eLz,aane,11,https://audio.jukehost.co.uk/Rc9z9eCNGyNwuwiPqTwtYaSTBI6genLx,"illi nodu, ambaari hotthu aane nadeyutthide.","See over here, an elephant is walking carrying the chariot.",https://upcdn.io/kW15bgo/raw/learnkannada/images/elephant.png
24: ಹೂವು,https://i.postimg.cc/FH2P8xmG/flower.jpg,flower,ಪುಟ್ಟಿ ಕೈಯಲ್ಲಿ ಹೂವು ಹಿಡಿದುಕೊಂಡಿದ್ದಾಳೆ.,Items,https://audio.jukehost.co.uk/q7DXdml643PdzVb0xWwMag0xbtsmGOoL,hoovu,39,https://audio.jukehost.co.uk/dFSJwOSc4QsRLPkC9tDEdebpLpUjr9i7,putti kaiyalli hoovu hididhukondiddhaale.,Putti is holding a flower in her hand.,https://upcdn.io/kW15bgo/raw/learnkannada/images/flower.png
25: ಕಪ್ಪೆ,https://i.postimg.cc/FzzHz1Gn/frog.jpg,frog,ಕಪ್ಪೆ ಮದುವೆಗೆ ನಿಮಗೆ ಸ್ವಾಗತ.,Animals,https://audio.jukehost.co.uk/uyahXZtgvyhQXfYR8d9BIwocqby6TGw0,kappe,13,https://audio.jukehost.co.uk/5eGBRKC11iiWDV6A0f6fmYGO0zG1XN7h,kappe maduvege nimage svaagatha.,You're invited to the frog wedding.,https://upcdn.io/kW15bgo/raw/learnkannada/images/frog.png
26: ಮೇಕೆ,https://i.postimg.cc/05XN3dyg/goat.jpg,goat,ಬಯಲಿನಲ್ಲಿ‌ ಕೆಲವು ಮೇಕೆಗಳು ಮೇಯುತ್ತಿವೆ.,Animals,https://audio.jukehost.co.uk/D11OSeDrUDQso9xMFuw0skSSxRZk3CAm,meke,14,https://audio.jukehost.co.uk/LmpfLs3WkghhS4nXtgwIMJ2WM69X3E64,bayalinalli kelavu meke-galu meyutthive.,Some goats are grazing in the field.,https://upcdn.io/kW15bgo/raw/learnkannada/images/goat.png
27: ಕೋಳಿ,https://i.postimg.cc/MHLKQxFZ/hen.jpg,hen,"ಇಲ್ಲಿ‌ ನೋಡು, ಮನೆಯ ಮೇಲೆ ಕೋಳಿ ಹಾರುತ್ತಿದೆ.",Animals,https://audio.jukehost.co.uk/EeYUzXClTo5FpLigm4Wt2TKijeESUtDQ,koli,5,https://audio.jukehost.co.uk/vBLvQ2Br5O92xqgfm08Io8TJKxxmtPwq,"illi nodu, maneya mele koli haarutthide.","see over here, a hen is flying over the house.",https://upcdn.io/kW15bgo/raw/learnkannada/images/hen.png
28: ನೀರಾನೆ,https://i.postimg.cc/vmy8903n/hippopotamus.jpg,hippopotamus,ಸಮುದ್ರದಲ್ಲಿ ನೀರಾನೆಗಳು ವಾಲಿಬಾಲ್ ಆಡುತ್ತಿವೆ.,Animals,https://audio.jukehost.co.uk/2QZwhiPiJFfmvr0QsQcmhWmOKwWhhtep,neerane,15,https://audio.jukehost.co.uk/aHkM8iCifwm1JNWEOIIjsCkKXrQmRcpt,samudradalli neeraane-galu volleyball aadutthive.,Hippopotamuses are playing volleyball in the sea.,https://upcdn.io/kW15bgo/raw/learnkannada/images/hippopotamus.png
29: ಕುದುರೆ,https://i.postimg.cc/g28knCqd/horse.jpg,horse,ಹುಲ್ಲುಗಾವಲಿನಲ್ಲಿ ಕುದುರೆ ಓಡುತ್ತಿದೆ.,Animals,https://audio.jukehost.co.uk/KOACyZfv94WnV1H8Nm83NySc04y96ceC,kudure,16,https://audio.jukehost.co.uk/JASUOlYoXQQwGUjH13CJtX2aH0pl9Ds4,hullugaavalinalli kudhure odutthide.,A horse is running in the grassland.,https://upcdn.io/kW15bgo/raw/learnkannada/images/horse.png
30: ಮನೆ,https://i.postimg.cc/yxwFNsjR/house.jpg,house,ನಮ್ಮ ಮನೆ ಎಂದರೆ ನನಗೆ ಬಹಳ ಇಷ್ಟ.,Items,https://audio.jukehost.co.uk/FWMCxjyM0kzKiY5vjTxZSctwE7dCm1Va,mane,45,https://audio.jukehost.co.uk/Hz9poydx7KiyuJBv41g9TYmj6TcQsu2s,namma mane endhare nanage bahala ishta.,I very much like our house.,https://upcdn.io/kW15bgo/raw/learnkannada/images/house.png
31: ನರಿ,https://i.postimg.cc/NGH0ws14/jackal.jpg,jackal,ನರಿಗಳಿಗೇಕೆ ಕೋಡಿಲ್ಲ?,Animals,https://audio.jukehost.co.uk/4ciyddBDYacPUImf3DoQzxq816JyXBJw,nari,12,https://audio.jukehost.co.uk/rlHknSPpafjf9gx9jIGAcLyRJmHJVDUJ,nari-galigeke kodilla?,Why don't jackals have horns?,https://upcdn.io/kW15bgo/raw/learnkannada/images/fox.png
32: ಚೊಂಬು,https://i.postimg.cc/wjtfwrK7/jug.jpg,jug,ಅವರು ಮೇಜಿನ ಮೇಲೆ ಚೊಂಬು ಇಟ್ಟಿದ್ದಾರೆ.,Items,https://audio.jukehost.co.uk/jjBd4LPBTjfyYFodHewkwmF7Uqmk9ekn,chombu,54,https://audio.jukehost.co.uk/9rJgIau9IlZZwCEQoweDTH7XHSDFUrra,avaru mejina mele chombu ittiddhaare.,They have kept a jug on the table.,https://upcdn.io/kW15bgo/raw/learnkannada/images/jug.png
33: ಚಿರತೆ,https://i.postimg.cc/R0TSTwDD/leopard.jpg,leopard,ಚಿರತೆ ಬಹಳ ವೇಗವಾಗಿ ಓಡುತ್ತದೆ.,Animals,https://audio.jukehost.co.uk/agitsJ5ob2ost7tKkkCGtVTfD86PrUBq,chirate,18,https://audio.jukehost.co.uk/LqU8WM6SnZwvD9PapvPyWeXx9NHD6Z6q,chirathe bahala vegavaagi odutthade.,Leopard runs very fast.,https://upcdn.io/kW15bgo/raw/learnkannada/images/leopard.png
34: ಸಿಂಹ,https://i.postimg.cc/9MFWgr3F/lion.jpg,lion,ಕಾಡಿನ ರಾಜ ಸಿಂಹ.,Animals,https://audio.jukehost.co.uk/Ybyihun4TwcmVouaPonWsAmh0wouXryn,simha,19,https://audio.jukehost.co.uk/Qf0lrSqr49s5GciPt8dIdFyyuXJ8O3Zt,kaadina raaja simha.,Lion is the king of the forest.,https://upcdn.io/kW15bgo/raw/learnkannada/images/lion.png
35: ಬೀಗ,https://i.postimg.cc/BQ77c0Vr/lock.jpg,lock,ಅವರು ಮನೆಗೆ ಬೀಗ ಹಾಕಿದ್ದಾರೆ.,Items,https://audio.jukehost.co.uk/tydnkpyzuY5oKM7NrPM8EEeng4cw4xSO,beega,41,https://audio.jukehost.co.uk/5qBr0k8WiS0M3sEkKkLEGA3m1ZFgm8xZ,avaru manege beega haakiddaare.,They have locked the house.,https://upcdn.io/kW15bgo/raw/learnkannada/images/lock.png
36: ಕೋತಿ,https://i.postimg.cc/pLfR2DRL/monkey.jpg,monkey,ಕೋತಿ ಮರದಿಂದ ಮರಕ್ಕೆ ಹಾರುತ್ತಿದೆ.,Animals,https://audio.jukehost.co.uk/TzP16cVrbjqJ5d2exo5dWGOsbndav78U,kothi,20,https://audio.jukehost.co.uk/vSXJdVnsHzzZT3FRVWwbK9VrrSPEeHRp,kothi maradinda marakke haarutthide.,A monkey is jumping from tree to tree.,https://upcdn.io/kW15bgo/raw/learnkannada/images/monkey.png
37: ನವಿಲು,https://i.postimg.cc/tC4mxT2d/peacock.jpg,peacock,ನವಿಲು ಕಾಡಿನಲ್ಲಿ ರೆಕ್ಕೆ ಬಿಚ್ಚಿ ಕುಣಿಯುತ್ತಿದೆ.,Animals,https://audio.jukehost.co.uk/ZwEsCOYOIJAPblyej0lCIVWqOfFwk95Y,navilu,31,https://audio.jukehost.co.uk/zRMqY1J1IyJtdFKFMDGXK2I2GNocEV4Z,navilu kaadinalli rekke bicchi kuniyutthide.,Peacock is dancing in the forest by opening it's feathers.,https://upcdn.io/kW15bgo/raw/learnkannada/images/peacock.png
38: ಹಂದಿ,https://i.postimg.cc/c1zsTxF0/pig.jpg,pig,ಹಂದಿ ಬೀದಿಯಲ್ಲಿ ನಡೆಯುತ್ತಿದೆ.,Animals,https://audio.jukehost.co.uk/Fwz3znVQ0OCv4qyw4CHacBZmCXmS16Zs,handi,21,https://audio.jukehost.co.uk/kY7Ropk3UJN1VMjceCslYDk7FMKnLvnI,handi beedhiyalli nadeyutthide.,A pig is walking in the street.,https://upcdn.io/kW15bgo/raw/learnkannada/images/pig.png
39: ತಟ್ಟೆ,https://i.postimg.cc/HW2hn54s/plate.jpg,plate,ಪುಟ್ಟಿ ತಟ್ಟೆ ಹಿಡಿದುಕೊಂಡು ಕಾಯುತ್ತಿದ್ದಾಳೆ.,Items,https://audio.jukehost.co.uk/QhgXDGWTcwTuHgm4l1YMrZzDhbputosb,thatte,53,https://audio.jukehost.co.uk/02VRdCuYxqtWMCXFLgwIAaOwd5mv8Zws,putti thatte hididhukondu kaayutthiddaale.,Putti is holding a plate and waiting.,https://upcdn.io/kW15bgo/raw/learnkannada/images/plate.png
40: ನಾಯಿಮರಿ,https://i.postimg.cc/zXRqcsQW/puppy.jpg,puppy,ನಾಯಿಮರಿ ನೋಡಲು ತುಂಬಾ ಚೆನ್ನಾಗಿರುತ್ತದೆ.,Animals,https://audio.jukehost.co.uk/o82rjdqDBNXYgPK3wMDVnM10Nq73OMvb,naayimari,22,https://audio.jukehost.co.uk/1JXu5Qma5rPjMIkRtwwqXiMNXDfNJvHs,naayimari nodalu thumbaa chennaagirutthade.,Puppies are very beautiful to look at.,https://upcdn.io/kW15bgo/raw/learnkannada/images/puppy.png
41: ಮೊಲ,https://i.postimg.cc/T3MTMk8s/rabbit.jpg,rabbit,"ಅಲ್ಲಿ ನೋಡು, ಮೊಲ ಕ್ಯಾರೆಟ್ ತಿನ್ನುತ್ತಿದೆ.",Animals,https://audio.jukehost.co.uk/eVJ0Akkgaix1pJAWhcNmth6d526F1Hdy,mola,23,https://audio.jukehost.co.uk/h6wXyn58oE6V2SwLFPOKr6j0Hh2yBiYB,"alli nodu, mola carrot tinnutthide.","See over there, a rabbit is eating a carrot.",https://upcdn.io/kW15bgo/raw/learnkannada/images/rabbit.png
42: ಘೇಂಡಾಮೃಗ,https://i.postimg.cc/Jn2WTxcP/rhino.jpg,rhino,ಘೇಂಡಾಮೃಗ ಕೊಳದ ಪಕ್ಕ ನಿಂತಿದೆ.,Animals,https://audio.jukehost.co.uk/UjFu1Q9IAqFuCWsXzJHeBa3m8mUOfwJL,gendamruga,24,https://audio.jukehost.co.uk/Jw91DEqaXq8x3uZT8IP2QAHOOihKktTm,gendamruga kolada pakka ninthide.,A rhino is walking beside the lake.,https://upcdn.io/kW15bgo/raw/learnkannada/images/rhino.png
43: ಹುಂಜ,https://i.postimg.cc/LhdFSsWP/rooster.jpg,rooster,ಹುಂಜಗಳು ಸಿನೆಮಾ ನೋಡಲು ಬಂದಿವೆ.,Animals,https://audio.jukehost.co.uk/37L3Bf0dA4yAkOoc4BRQXPhjmLPxIL6V,hunja,25,https://audio.jukehost.co.uk/At9FmhqesHoHz2ErLRi13IjZ1I71tyuO,hunja-galu cinema nodalu bandive.,Roosters have come here to watch cinema.,https://upcdn.io/kW15bgo/raw/learnkannada/images/rooster.png
44: ಕತ್ತರಿ,https://i.postimg.cc/76rWGnWb/scissor.jpg,scissor,ಕತ್ತರಿ ಅಡುಗೆಮನೆಯಲ್ಲಿ ಇದೆ.,Items,https://audio.jukehost.co.uk/At5HkHmEsnC7Q41vZh4bEFEddkZyedB2,kattari,42,https://audio.jukehost.co.uk/Bh3ofMzwBUwu9cK9R88kCXeGGjaxlzH5,katthari adugemaneyalli ide.,The scissor is in the kitchen.,https://upcdn.io/kW15bgo/raw/learnkannada/images/scissor.png
45: ಕಪ್ಪೆಚಿಪ್ಪು,https://i.postimg.cc/MHdPL2Kj/seashell.jpg,seashell,ಕಪ್ಪೆಚಿಪ್ಪು ಸಮುದ್ರದ ದಡದಲ್ಲಿ ಸಿಗುತ್ತದೆ.,Items,https://audio.jukehost.co.uk/bj23VePSGNCfTO5r3WsBr2cvzy7Mxwkp,kappechippu,43,https://audio.jukehost.co.uk/zQyB5ngYUHaU8ZaAorSYBJQXkn5QmrWI,kappechippu samudhradha dhadadhalli sigutthadhe.,Seashells are found on the beach.,https://upcdn.io/kW15bgo/raw/learnkannada/images/seashell.png
46: ತಿಮಿಂಗಿಲ,https://i.postimg.cc/qq6HWK10/shark.jpg,shark,ತಿಮಿಂಗಿಲಗಳು ಸಮುದ್ರದ ಅಡಿಯಲ್ಲಿ ಖುಷಿಯಾಗಿವೆ.,Animals,https://audio.jukehost.co.uk/BHRzJsiW1S3FtelcGXwLvAnEltv5rHGX,timingila,26,https://audio.jukehost.co.uk/3I8Ppl9qQHaNr0K2LsQReGJHg0RnjesQ,timingilagalu samdurada adiyalli khushiyaagive.,Sharks are happy under the sea.,https://upcdn.io/kW15bgo/raw/learnkannada/images/shark.png
47: ಕುರಿ,https://i.postimg.cc/RCW3vb8C/sheep.jpg,sheep,ಕುರಿಗಳು ನಮಗೆ ಉಣ್ಣೆಯನ್ನು ನೀಡುತ್ತವೆ.,Animals,https://audio.jukehost.co.uk/9cCZ6SI0PT1dAUyze4Vi11qzl8gVtlOV,kuri,27,https://audio.jukehost.co.uk/NAuEix5I2xJjSjLGBtPfg5wFi70qmtH7,kuri-galu namage unneyannu needutthave.,Sheep gives us wool.,https://upcdn.io/kW15bgo/raw/learnkannada/images/sheep.png
48: ಹಡಗು,https://i.postimg.cc/SRy1VNqh/ship.jpg,ship,ಬಂದರಿನಲ್ಲಿ ಹಡಗು ನಿಂತಿದೆ.,Items,https://audio.jukehost.co.uk/xWDjZPz5pKOt0FZqjH4TFCisBBnm0NHy,hadagu,33,https://audio.jukehost.co.uk/yUhMuTlXMkXolS0OOSKxRGGT4VSUKfGQ,bandharinalli hadagu ninthide.,A ship is parked in the port.,https://upcdn.io/kW15bgo/raw/learnkannada/images/ship.png
49: ಕನ್ನಡಕ,https://i.postimg.cc/pV7QCJvd/spectacles.jpg,spectacles,ಅಜ್ಜ ಕನ್ನಡಕ ಹಾಕಿಕೊಂಡು ದಿನಪತ್ರಿಕೆ ಓದುತ್ತಿದ್ದಾರೆ.,Items,https://audio.jukehost.co.uk/lsqnOte5yla980f7m6FGEgmuMMekstDJ,kannadaka,36,https://audio.jukehost.co.uk/EN7yMMSJA7C3QqTHD3tHR7yJp43dugkO,ajja kannadaka haakikondu dhinapathrike odhutthiddaare.,Grandpa is reading the book wearing spectacles.,https://upcdn.io/kW15bgo/raw/learnkannada/images/spectacles.png
50: ಚಮಚ,https://i.postimg.cc/8P6R0fkm/spoon.jpg,spoon,ಪುಟ್ಟ ಚಮಚದಿಂದ ಊಟ ಮಾಡುತ್ತಿದ್ದಾನೆ.,Items,https://audio.jukehost.co.uk/9L8IWTrFcXWf5nvQTzeSDmngv8yJqEdN,chamacha,40,https://audio.jukehost.co.uk/V1I20vnmWacXVGgBRVPypq9EL3FsV3dn,putta chamachadinda oota maadutthiddaane.,Putta is eating with a spoon.,https://upcdn.io/kW15bgo/raw/learnkannada/images/spoon.png
51: ಮೇಜು,https://i.postimg.cc/ZnpYPHTg/table.jpg,table,ಈ ಮೇಜು ನೂರು ವರ್ಷ ಹಳೆಯದು.,Items,https://audio.jukehost.co.uk/3ob4O244qyN4dHf8CwiUmSzzkVA3qPnB,meju,50,https://audio.jukehost.co.uk/yD7qk7vgIYNCFpvaDXmp79ozBDmOwyT6,ee meju nooru varsha haleyadhu.,This table is a hundred years old.,https://upcdn.io/kW15bgo/raw/learnkannada/images/table.png
52: ಹುಲಿ,https://i.postimg.cc/c4Yrnt0V/tiger.jpg,tiger,ಹುಲಿ ಕಾಡಿನಲ್ಲಿ ತಿರುಗುತ್ತಿದೆ.,Animals,https://audio.jukehost.co.uk/EVfcaeYD9khUZBLHIjEEYSvpNqt69k6q,huli,28,https://audio.jukehost.co.uk/4RuuVODHpRyAD6K4tfDhFwYtJ1kI8x2f,huli kaadinalli thirugutthide.,A tiger is roaming in the forest.,https://upcdn.io/kW15bgo/raw/learnkannada/images/tiger.png
53: ಆಮೆ,https://i.postimg.cc/VkPqQsdQ/tortoise.jpg,tortoise,ಆಮೆ ಮೊಲವನ್ನು ಹಿಂದಿಕ್ಕಿ ಗೆಲ್ಲುತ್ತಿದೆ.,Animals,https://audio.jukehost.co.uk/U6TeJ7AZ4Y7EQw2WEkmFLiUv7MPaZZskk,aame,29,https://audio.jukehost.co.uk/4T1HhzQLCmoy1XeEsvK01q2SQD6aBHYv,aame molavannu hindikki gellutthide.,The tortoise is winning by beating the rabbit.,https://upcdn.io/kW15bgo/raw/learnkannada/images/tortoise.png
54: ಮರ,https://i.postimg.cc/d0qG3W25/tree.jpg,tree,ಆ ಮರ ಬಹಳ ಉದ್ದ ಇದೆ.,Items,https://audio.jukehost.co.uk/KVijTHl5ziujcpvCjiEf3V7WSlSeOwr2,mara,44,https://audio.jukehost.co.uk/fySoO6pKcJxuREWbWNRwoVdgesDQcXzy,aa mara bahala uddha ide.,That tree is very tall.,https://upcdn.io/kW15bgo/raw/learnkannada/images/tree.png
55: ಕಿಟಕಿ,https://i.postimg.cc/bw0QzXtG/window.jpg,window,ನಮ್ಮ ಮನೆಯ ಕಿಟಕಿ ವೃತ್ತದ ಆಕಾರದಲ್ಲಿದೆ.,Items,https://audio.jukehost.co.uk/AYO971BR9bijtpMvEKyrYgCqbYOp5wYR,kitaki,46,https://audio.jukehost.co.uk/Wa5R2tHYnqX5fWDtDJwYZDWnBKG2rJJg,namma maneya kitaki vrutthada aakaaradhallidhe.,The window of our house is in a circular shape.,https://upcdn.io/kW15bgo/raw/learnkannada/images/window.png
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
  1: # Building Apps with the o1 Pro Template System
  2: 
  3: This is the repo for a free workshop on how to use [OpenAI's o1-pro](https://chatgpt.com/) to build full-stack web apps with a [starter template](https://github.com/mckaywrigley/mckays-app-template).
  4: 
  5: It is part 1 of a 2 part series. This is the beginner workshop. The advanced workshop will be released on February 24th.
  6: 
  7: ## Workshop Video
  8: 
  9: You can find the video for this workshop on [X](https://x.com/mckaywrigley/status/1891544731496206365) and [YouTube](https://www.youtube.com/watch?v=Y4n_p9w8pGY).
 10: 
 11: This workshop is also available in course form on [Takeoff](https://www.jointakeoff.com/) - we will continue to add to it and keep it updated with the latest model releases over time.
 12: 
 13: Use code `O1PRO` for 25% off at checkout.
 14: 
 15: I get asked all the time for an example of content on Takeoff, so hopefully this workshop gives you a feel for our content and my teaching style.
 16: 
 17: ## About Me
 18: 
 19: My name is [Mckay](https://www.mckaywrigley.com/).
 20: 
 21: I'm currently building [Takeoff](https://www.jointakeoff.com/) - the best place on the internet to learn how to build with AI.
 22: 
 23: Follow me on [X](https://x.com/mckaywrigley) and subscribe to my [YouTube](https://www.youtube.com/channel/UCXZFVVCFahewxr3est7aT7Q) for more free AI coding tutorials & guides.
 24: 
 25: ## Tech Stack
 26: 
 27: - AI Model: [o1-pro](https://chatgpt.com/)
 28: - IDE: [Cursor](https://www.cursor.com/)
 29: - AI Tools: [RepoPrompt](https://repoprompt.com/), [V0](https://v0.dev/), [Perplexity](https://www.perplexity.com/)
 30: - Frontend: [Next.js](https://nextjs.org/docs), [Tailwind](https://tailwindcss.com/docs/guides/nextjs), [Shadcn](https://ui.shadcn.com/docs/installation), [Framer Motion](https://www.framer.com/motion/introduction/)
 31: - Backend: [PostgreSQL](https://www.postgresql.org/about/), [Supabase](https://supabase.com/), [Drizzle](https://orm.drizzle.team/docs/get-started-postgresql), [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
 32: - Auth: [Clerk](https://clerk.com/)
 33: - Payments: [Stripe](https://stripe.com/)
 34: 
 35: **Note**: While I _highly_ recommend using o1-pro for this workflow, you can also use o3-mini, Claude 3.5 Sonnet, Gemini 2.0 Pro, and DeepSeek r1 for cheaper alternatives. However, you _will_ run into issues with those other models in this particular workflow, so I recommend using o1-pro for this workflow if possible.
 36: 
 37: ## Prerequisites
 38: 
 39: You will need accounts for the following services.
 40: 
 41: They all have free plans that you can use to get started, with the exception of ChatGPT Pro (if you are using o1-pro).
 42: 
 43: - Create a [Cursor](https://www.cursor.com/) account
 44: - Create a [GitHub](https://github.com/) account
 45: - Create a [Supabase](https://supabase.com/) account
 46: - Create a [Clerk](https://clerk.com/) account
 47: - Create a [Stripe](https://stripe.com/) account
 48: - Create a [Vercel](https://vercel.com/) account
 49: 
 50: You will likely not need paid plans unless you are building a business.
 51: 
 52: ## Guide
 53: 
 54: ### Clone the repo
 55: 
 56: 1. Clone this repo:
 57: 
 58: ```bash
 59: git clone https://github.com/mckaywrigley/o1-pro-template-system o1-pro-project
 60: ```
 61: 
 62: 2. Save the original remote as "upstream" before removing it:
 63: 
 64: ```bash
 65: git remote rename origin upstream
 66: ```
 67: 
 68: 3. Create a new repository on GitHub
 69: 
 70: 4. Add the new repository as "origin":
 71: 
 72: ```bash
 73: git remote add origin https://github.com/your-username/your-repo-name.git
 74: ```
 75: 
 76: 5. Push the new repository:
 77: 
 78: ```
 79: git branch -M main
 80: git push -u origin main
 81: ```
 82: 
 83: ### Run the app
 84: 
 85: 1. Install dependencies:
 86: 
 87: ```bash
 88: npm install
 89: ```
 90: 
 91: 2. Run the app:
 92: 
 93: ```bash
 94: npm run dev
 95: ```
 96: 
 97: 3.  View the app on http://localhost:3000
 98: 
 99: ### Follow the workshop
100: 
101: View the full workshop on [X](https://x.com/mckaywrigley/status/1891544731496206365) and [YouTube](https://www.youtube.com/watch?v=Y4n_p9w8pGY).
102: 
103: Or sign up for [Takeoff](https://www.jointakeoff.com/) to get access to the full workshop in course form.
````

## File: repomix.config.json
````json
1: {
2:     "output": {
3:       "style": "markdown",
4:       "filePath": "custom-output.md",
5:       "removeComments": true,
6:       "showLineNumbers": true,
7:       "topFilesLength": 10
8:     }
9:   }
````

## File: tailwind.config.ts
````typescript
 1: import type { Config } from "tailwindcss"
 2: 
 3: const config = {
 4:   darkMode: ["class"],
 5:   content: [
 6:     "./app/**/*.{ts,tsx}",
 7:     "./components/**/*.{ts,tsx}",
 8:     "./lib/**/*.{ts,tsx}"
 9:   ],
10:   prefix: "",
11:   theme: {
12:     container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
13:     extend: {
14:       fontFamily: {
15:         poppins: ["Poppins", "sans-serif"]
16:       },
17:       colors: {
18:         border: "hsl(var(--border))",
19:         input: "hsl(var(--input))",
20:         ring: "hsl(var(--ring))",
21:         background: "hsl(var(--background))",
22:         foreground: "hsl(var(--foreground))",
23:         primary: {
24:           DEFAULT: "hsl(var(--primary))",
25:           foreground: "hsl(var(--primary-foreground))"
26:         },
27:         secondary: {
28:           DEFAULT: "hsl(var(--secondary))",
29:           foreground: "hsl(var(--secondary-foreground))"
30:         },
31:         destructive: {
32:           DEFAULT: "hsl(var(--destructive))",
33:           foreground: "hsl(var(--destructive-foreground))"
34:         },
35:         muted: {
36:           DEFAULT: "hsl(var(--muted))",
37:           foreground: "hsl(var(--muted-foreground))"
38:         },
39:         accent: {
40:           DEFAULT: "#FF6F61",
41:           foreground: "hsl(var(--accent-foreground))"
42:         },
43:         popover: {
44:           DEFAULT: "hsl(var(--popover))",
45:           foreground: "hsl(var(--popover-foreground))"
46:         },
47:         card: {
48:           DEFAULT: "hsl(var(--card))",
49:           foreground: "hsl(var(--card-foreground))"
50:         },
51:         sidebar: {
52:           DEFAULT: "hsl(var(--sidebar-background))",
53:           foreground: "hsl(var(--sidebar-foreground))",
54:           primary: "hsl(var(--sidebar-primary))",
55:           "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
56:           accent: "hsl(var(--sidebar-accent))",
57:           "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
58:           border: "hsl(var(--sidebar-border))",
59:           ring: "hsl(var(--sidebar-ring))"
60:         }
61:       },
62:       borderRadius: {
63:         lg: "var(--radius)",
64:         md: "calc(var(--radius) - 2px)",
65:         sm: "calc(var(--radius) - 4px)"
66:       },
67:       keyframes: {
68:         "accordion-down": {
69:           from: { height: "0" },
70:           to: { height: "var(--radix-accordion-content-height)" }
71:         },
72:         "accordion-up": {
73:           from: { height: "var(--radix-accordion-content-height)" },
74:           to: { height: "0" }
75:         },
76:         gradient: { to: { backgroundPosition: "var(--bg-size) 0" } }
77:       },
78:       animation: {
79:         "accordion-down": "accordion-down 0.2s ease-out",
80:         "accordion-up": "accordion-up 0.2s ease-out",
81:         gradient: "gradient 8s linear infinite"
82:       }
83:     }
84:   },
85:   plugins: [
86:     require("tailwindcss-animate"),
87:     require("@tailwindcss/typography")
88:   ]
89: } satisfies Config
90: 
91: export default config
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
 2:     kannada?: string
 3:     english?: string
 4:     category?: string
 5:     icon?: string | null
 6:     waudio?: string | null
 7:     kanglish?: string
 8:     ksentence?: string | null
 9:     esentence?: string | null
10:     kesentence?: string | null
11:     image?: string | null
12:     saudio?: string | null
13:   }
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
