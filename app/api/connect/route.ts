// API route for connecting to Pipecat AI service for the word game
// Handles authentication and room creation for real-time voice interaction

import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  if (request.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
  }

  try {
    const { personality } = await request.json()

    // Use default personality if not provided
    const agentPersonality = personality || "witty"

    console.log("Request body:", request.body)
    console.log("Using personality:", agentPersonality)

    // Debug: Log environment variables (without exposing the full API key)
    console.log("Environment check:", {
      hasApiKey: !!process.env.PIPECAT_CLOUD_API_KEY,
      apiKeyLength: process.env.PIPECAT_CLOUD_API_KEY?.length,
      agentName: process.env.AGENT_NAME
    })

    const response = await fetch(
      `https://api.pipecat.daily.co/v1/public/${process.env.AGENT_NAME}/start`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PIPECAT_CLOUD_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          createDailyRoom: true,
          body: {
            personality: agentPersonality
          }
        })
      }
    )

    console.log("Pipecat API response status:", response.status)

    const data = await response.json()
    console.log("Response from Pipecat API:", JSON.stringify(data, null, 2))

    // Check if the response is successful
    if (!response.ok) {
      console.error("Pipecat API error:", data)
      return NextResponse.json(
        {
          error: "Pipecat API error",
          details: data
        },
        { status: response.status }
      )
    }

    // Validate that we got the required fields
    if (!data.dailyRoom || !data.dailyToken) {
      console.error("Missing required fields in Pipecat response:", data)
      return NextResponse.json(
        {
          error: "Invalid response from Pipecat API",
          received: data
        },
        { status: 500 }
      )
    }

    // Transform the response to match what RTVI client expects
    return NextResponse.json({
      room_url: data.dailyRoom,
      token: data.dailyToken
    })
  } catch (error) {
    console.error("Error starting agent:", error)
    return NextResponse.json(
      {
        error: "Failed to start agent",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}
