/**
 * @description
 * This file contains API routes for icon management in the KannadaKali app.
 * It provides endpoints to download icons from URLs in the CSV file.
 * 
 * @route GET /api/icons
 * Triggers icon download from the CSV file to the public/icons directory.
 * Requires authentication.
 * 
 * @dependencies
 * - @clerk/nextjs/server: Provides authentication utilities.
 * - @/actions/icon-actions: Custom utilities for icon operations.
 */

import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { downloadIconsAction } from "@/actions/icon-actions"

/**
 * GET handler for /api/icons
 * Triggers download of all icons from the CSV file to the public/icons directory.
 * Requires authentication.
 */
export async function GET() {
  const { userId } = await auth()
  
  if (!userId) {
    return NextResponse.json(
      { error: "Unauthorized: Please sign in to download icons" },
      { status: 401 }
    )
  }
  
  try {
    const result = await downloadIconsAction()
    
    if (!result.isSuccess) {
      return NextResponse.json(
        { error: result.message },
        { status: 500 }
      )
    }
    
    return NextResponse.json({
      message: result.message,
      count: result.data
    })
  } catch (error) {
    console.error("Error in icon download API:", error)
    return NextResponse.json(
      { error: "Internal server error downloading icons" },
      { status: 500 }
    )
  }
} 