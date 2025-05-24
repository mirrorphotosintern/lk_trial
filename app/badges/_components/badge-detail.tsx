"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import {
  BadgeDefinition,
  formatBadgeProgress,
  getLevelRequirement
} from "@/lib/utils/badge-utils"
import { SelectBadge } from "@/db/schema"
import Image from "next/image"

interface BadgeDetailProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  definition: BadgeDefinition
  userBadge?: SelectBadge
}

/**
 * Modal dialog that displays detailed information about a badge
 */
export default function BadgeDetail({
  open,
  onOpenChange,
  definition,
  userBadge
}: BadgeDetailProps) {
  const isEarned = !!userBadge
  const currentLevel = userBadge?.currentLevel || 0
  const progress = userBadge?.progress || 0
  const maxLevel = definition.hasLevels ? 5 : 1

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex flex-col items-center text-center sm:max-w-md">
        <DialogHeader className="w-full">
          <DialogTitle className="flex flex-col items-center gap-2 text-center">
            <div className="relative size-24">
              <Image
                src={definition.imageUrl}
                alt={definition.englishName}
                fill
                className={`object-contain transition-opacity duration-300 ${!isEarned ? "opacity-20" : "opacity-100"}`}
              />
            </div>
            <span>{definition.kannadaName}</span>
          </DialogTitle>
          <DialogDescription className="text-center">
            {definition.englishName} - {definition.displayText}
          </DialogDescription>
        </DialogHeader>

        <div className="flex w-full flex-col items-center space-y-4">
          <div className="text-center font-medium">
            {isEarned
              ? `Earned on ${new Date(userBadge.earnedAt).toLocaleDateString()}`
              : "Not yet earned"}
          </div>

          {/* Progress section */}
          {isEarned && (
            <div className="space-y-2 text-center">
              <h4 className="text-sm font-medium">Progress</h4>
              <div className="text-sm">
                <div className="mb-1 font-medium text-emerald-700">
                  Level {currentLevel} out of {maxLevel}
                </div>

                {definition.hasLevels && currentLevel < maxLevel && (
                  <div className="text-blue-600">
                    {formatBadgeProgress(definition, currentLevel, progress)}
                  </div>
                )}

                {(currentLevel >= maxLevel || !definition.hasLevels) && (
                  <div className="text-emerald-700">
                    Maximum level achieved!
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="w-full space-y-2 text-center">
            <h4 className="text-sm font-medium">How to earn</h4>
            <p className="text-sm text-gray-600">{definition.tableLogic}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
