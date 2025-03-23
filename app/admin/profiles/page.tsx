"use server"

import { Suspense } from "react"
import { db } from "@/db/db"
import { profilesTable } from "@/db/schema"
import { auth } from "@clerk/nextjs/server"
import { desc } from "drizzle-orm"

export default async function ProfilesAdminPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Profile Sync Status</h1>
      
      <div className="bg-card p-6 rounded-lg shadow-sm">
        <Suspense fallback={<div>Loading profiles...</div>}>
          <ProfilesList />
        </Suspense>
      </div>
    </div>
  )
}

async function ProfilesList() {
  // Only allow admin access
  const { userId } = await auth()
  if (!userId) {
    return <div className="text-destructive">You must be signed in to view this page</div>
  }
  
  // Fetch profiles
  const profiles = await db.select().from(profilesTable).orderBy(desc(profilesTable.updatedAt)).limit(50)
  
  if (profiles.length === 0) {
    return <div>No profiles have been synced yet.</div>
  }
  
  return (
    <>
      <div className="mb-4 text-sm text-muted-foreground">
        Showing the most recent {profiles.length} synced profiles
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted/50">
              <th className="p-2 text-left">User ID</th>
              <th className="p-2 text-left">Display Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile) => (
              <tr key={profile.userId} className="border-b border-border hover:bg-muted/20">
                <td className="p-2 font-mono text-xs">{profile.userId}</td>
                <td className="p-2">
                  <div className="flex items-center">
                    {profile.profileImageUrl && (
                      <img 
                        src={profile.profileImageUrl} 
                        alt={profile.displayName || 'User'} 
                        className="w-8 h-8 rounded-full mr-2"
                      />
                    )}
                    {profile.displayName || 'Unknown User'}
                  </div>
                </td>
                <td className="p-2">{profile.email || 'No email'}</td>
                <td className="p-2 text-sm text-muted-foreground">
                  {new Date(profile.updatedAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
} 