import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { personality } = req.body;

    // Use default personality if not provided
    const agentPersonality = personality || 'witty';

    console.log("Request body:", req.body);
    console.log("Using personality:", agentPersonality);

    // Debug: Log environment variables (without exposing the full API key)
    console.log("Environment check:", {
      hasApiKey: !!process.env.PIPECAT_CLOUD_API_KEY,
      apiKeyLength: process.env.PIPECAT_CLOUD_API_KEY?.length,
      agentName: process.env.AGENT_NAME,
    });

    const response = await fetch(
      `https://api.pipecat.daily.co/v1/public/${process.env.AGENT_NAME}/start`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PIPECAT_CLOUD_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          createDailyRoom: true,
          body: {
            personality: agentPersonality,
          },
        }),
      }
    );

    console.log("Pipecat API response status:", response.status);
    
    const data = await response.json();
    console.log("Response from Pipecat API:", JSON.stringify(data, null, 2));

    // Check if the response is successful
    if (!response.ok) {
      console.error("Pipecat API error:", data);
      return res.status(response.status).json({ 
        error: "Pipecat API error", 
        details: data 
      });
    }

    // Validate that we got the required fields
    if (!data.dailyRoom || !data.dailyToken) {
      console.error("Missing required fields in Pipecat response:", data);
      return res.status(500).json({ 
        error: "Invalid response from Pipecat API",
        received: data
      });
    }

    // Transform the response to match what RTVI client expects
    return res.status(200).json({
      room_url: data.dailyRoom,
      token: data.dailyToken,
    });
  } catch (error) {
    console.error("Error starting agent:", error);
    return res.status(500).json({ 
      error: "Failed to start agent", 
      details: error instanceof Error ? error.message : String(error)
    });
  }
}