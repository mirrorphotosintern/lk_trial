"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, CloudLightning } from "lucide-react"
import { seedWordStatsAction } from "@/actions/db/seed-word-stats-action"
import { toast } from "sonner"

/**
 * A button component that seeds word statistics data for testing purposes.
 * Used only in the parental dashboard for demo/development.
 */
export function SeedButton() {
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSeedData = async () => {
    try {
      setIsLoading(true)
      const result = await seedWordStatsAction()
      
      if (result.isSuccess) {
        toast.success(result.message)
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      console.error("Error seeding data:", error)
      toast.error("Failed to seed word statistics data")
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <Button
      onClick={handleSeedData}
      disabled={isLoading}
      variant="outline"
      size="sm"
      className="text-xs"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-3 w-3 animate-spin" />
          Seeding...
        </>
      ) : (
        <>
          <CloudLightning className="mr-2 h-3 w-3" />
          Seed Word Stats
        </>
      )}
    </Button>
  )
} 