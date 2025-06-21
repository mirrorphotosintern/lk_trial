"use client"

import { BadgeDefinition } from "@/lib/utils/badge-utils"
import { SelectBadge } from "@/db/schema"
import BadgeItem from "./badge-item"
import BadgeSync from "./badge-sync"

interface BadgeGridProps {
  badgeDefinitions: BadgeDefinition[]
  userBadges: SelectBadge[]
}

/**
 * Displays a responsive grid of badges with their status
 */
export default function BadgeGrid({
  badgeDefinitions,
  userBadges
}: BadgeGridProps) {
  // Convert user badges to a map for easy lookup
  const userBadgeMap = new Map(userBadges.map(badge => [badge.badgeId, badge]))

  return (
    <>
      {/* Badge sync component to handle automatic updates */}
      <BadgeSync userBadges={userBadges} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {badgeDefinitions.map(badgeDefinition => {
          // Check if user has earned this badge
          const userBadge = userBadgeMap.get(badgeDefinition.badgeId)

          return (
            <BadgeItem
              key={badgeDefinition.badgeId}
              definition={badgeDefinition}
              userBadge={userBadge}
            />
          )
        })}
      </div>
    </>
  )
}
