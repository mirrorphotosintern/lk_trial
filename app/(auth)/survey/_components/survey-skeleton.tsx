"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

/**
 * @description
 * Loading skeleton component for the survey page.
 * Displays placeholder content while survey data is loading.
 */

export default function SurveySkeleton() {
  return (
    <Card className="w-full">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-6 w-20" />
        </div>
        <div className="flex space-x-2">
          <Skeleton className="h-2 w-1/3 rounded-full" />
          <Skeleton className="h-2 w-1/3 rounded-full" />
          <Skeleton className="h-2 w-1/3 rounded-full" />
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-4">
          <Skeleton className="h-6 w-3/4" />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-12 w-full" />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Skeleton className="h-6 w-2/3" />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-12 w-full" />
            ))}
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <Skeleton className="h-10 w-20" />
          <Skeleton className="h-10 w-24" />
        </div>
      </CardContent>
    </Card>
  )
}
