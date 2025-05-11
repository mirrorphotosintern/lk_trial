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
    <div className="container py-8 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Your Achievements</h1>
      
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-gray-600 mb-8">
          Earn badges by completing challenges and improving your Kannada skills!
        </p>
        
        <BadgeGrid 
          badgeDefinitions={badgeDefinitions} 
          userBadges={userBadges} 
        />
        
        <div className="flex justify-center mt-10">
          <Link 
            href="/parental" 
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md transition-colors"
          >
            <Users className="h-5 w-5" />
            Parental Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
} 