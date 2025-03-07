"use server"

import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { AdminIcons } from "./_components/admin-icons"

export default async function AdminPage() {
  // Check if user is authenticated and has admin permissions
  const { userId } = await auth()
  
  if (!userId) {
    return redirect("/sign-in")
  }
  
  // In a real app, you would check if the user has admin permissions
  // This could be done by checking the user's role in your database
  // For simplicity, we're just allowing all authenticated users to access the admin page
  
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AdminIcons />
        
        {/* Add more admin components here */}
      </div>
    </div>
  )
} 