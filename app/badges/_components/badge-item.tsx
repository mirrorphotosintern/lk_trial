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
        className="flex flex-col items-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all cursor-pointer"
        onClick={() => setDetailOpen(true)}
      >
        <div className="relative h-24 w-24 mb-4">
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
        
        <h3 className="text-lg font-medium text-center mb-1">{definition.kannadaName}</h3>
        
        {isEarned && (
          <p className="text-sm text-gray-600 text-center mb-2">
            {definition.englishName}
          </p>
        )}
        
        <div className="mt-auto">
          {isEarned ? (
            <div className="text-xs text-center text-emerald-700 font-medium">
              Level {currentLevel} out of {maxLevel}
            </div>
          ) : (
            <div className="text-xs text-center text-gray-500">
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