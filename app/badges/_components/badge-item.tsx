"use client"

import Image from "next/image"
import { useState } from "react"
import { BadgeDefinition, formatBadgeProgress } from "@/lib/utils/badge-utils"
import { SelectBadge } from "@/db/schema"
import { cn } from "@/lib/utils"
import BadgeDetail from "./badge-detail"

interface BadgeItemProps {
  definition: BadgeDefinition
  userBadge?: SelectBadge
}

/**
 * Displays an individual badge with appropriate styling based on earned status
 */
export default function BadgeItem({ definition, userBadge }: BadgeItemProps) {
  const [detailOpen, setDetailOpen] = useState(false)
  const isEarned = !!userBadge
  const currentLevel = userBadge?.currentLevel || 0
  const progress = userBadge?.progress || 0
  const maxLevel = definition.hasLevels ? 5 : 1

  return (
    <>
      <div
        className="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-md transition-all hover:shadow-lg"
        onClick={() => setDetailOpen(true)}
      >
        <div className="relative mb-4 size-24">
          <Image
            src={definition.imageUrl}
            alt={definition.englishName}
            fill
            className={cn(
              "object-contain transition-opacity duration-300",
              isEarned ? "opacity-100" : "opacity-20"
            )}
          />
        </div>

        <h3 className="mb-1 text-center text-lg font-medium">
          {definition.kannadaName}
        </h3>

        {isEarned && (
          <p className="mb-2 text-center text-sm text-gray-600">
            {definition.englishName}
          </p>
        )}

        <div className="mt-auto">
          {isEarned ? (
            <div className="text-center text-xs font-medium text-emerald-700">
              Level {currentLevel} out of {maxLevel}
            </div>
          ) : (
            <div className="text-center text-xs text-gray-500">
              Not yet earned
            </div>
          )}
        </div>
      </div>

      <BadgeDetail
        open={detailOpen}
        onOpenChange={setDetailOpen}
        definition={definition}
        userBadge={userBadge}
      />
    </>
  )
}
