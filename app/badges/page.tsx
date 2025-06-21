"use server"

import { auth } from "@clerk/nextjs/server"
import { getUserBadgesAction } from "@/actions/db/badges-actions"
import { getBadgeDefinitionsAction } from "@/actions/badges-actions"
import { evaluateUserBadgesAction } from "@/actions/badge-evaluation-actions"
import BadgeGrid from "./_components/badge-grid"
import { SelectBadge } from "@/db/schema"
import Link from "next/link"
import { Users } from "lucide-react"

/**
 * Badges page that displays all available badges and the user's progress
 */
export default async function BadgesPage() {
  // Get the current user ID
  const { userId } = await auth()

  // Evaluate badges to ensure they're up to date
  // This runs silently and doesn't block rendering
  if (userId) {
    evaluateUserBadgesAction().catch(error => {
      console.error("Error evaluating badges on page load:", error)
    })
  }

  // Fetch user badges if logged in
  let userBadges: SelectBadge[] = []
  if (userId) {
    const result = await getUserBadgesAction(userId)
    if (result.isSuccess) {
      userBadges = result.data
    }
  }

  // Get all badge definitions from CSV via server action
  const badgeDefinitions = await getBadgeDefinitionsAction()

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">Your Achievements</h1>

      <div className="mx-auto max-w-4xl">
        <p className="mb-8 text-center text-gray-600">
          Earn badges by completing challenges and improving your Kannada
          skills!
        </p>

        <BadgeGrid
          badgeDefinitions={badgeDefinitions}
          userBadges={userBadges}
        />

        <div className="mt-10 flex justify-center">
          <Link
            href="/parental"
            className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 rounded-md px-4 py-2 transition-colors"
          >
            <Users className="size-5" />
            Parental Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
