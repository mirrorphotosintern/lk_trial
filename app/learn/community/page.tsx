"use server"

import { Suspense } from "react"
import { getCommunitiesAction } from "@/actions/db/community-actions"
import CommunityMap from "@/components/community/community-map"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default async function CommunityPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">
          Kannada Communities Near You
        </h1>
        <p className="text-muted-foreground">
          Discover Kannada communities around the world. Click on a marker to
          learn more about each community and visit their website.
        </p>
      </div>

      <Suspense
        fallback={
          <div className="h-[600px] w-full">
            <Skeleton className="size-full" />
          </div>
        }
      >
        <CommunityMapFetcher />
      </Suspense>

      <Card className="mt-8 p-6">
        <h2 className="mb-4 text-xl font-semibold">
          About Kannada Communities
        </h2>
        <p className="text-muted-foreground">
          Kannada communities around the world serve as cultural hubs for
          Kannadigas living abroad. These organizations help preserve and
          promote Kannada language, culture, and traditions while providing a
          sense of community and belonging for Kannadigas living away from their
          homeland.
        </p>
        <p className="text-muted-foreground mt-4">
          Each community organizes various cultural events, language classes,
          and social gatherings throughout the year. They play a vital role in
          keeping the Kannada culture alive and thriving in different parts of
          the world.
        </p>
      </Card>
    </div>
  )
}

async function CommunityMapFetcher() {
  const { data: communities } = await getCommunitiesAction()
  if (!communities) return null

  return <CommunityMap communities={communities} />
}
