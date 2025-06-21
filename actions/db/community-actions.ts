"use server"

import { ActionState } from "@/types"
import { Community } from "@/types/community-types"
import { promises as fs } from "fs"
import { parse } from "csv-parse/sync"
import path from "path"

export async function getCommunitiesAction(): Promise<ActionState<Community[]>> {
  try {
    // Read the CSV file
    const filePath = path.join(process.cwd(), "public/data/community.csv")
    const fileContent = await fs.readFile(filePath, "utf-8")

    // Parse CSV
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true
    })

    // Transform records to Community type
    const communities: Community[] = records.map((record: any) => ({
      organization: record.Organization,
      website: record.Website,
      city: record.City,
      country: record.Country
    }))

    return {
      isSuccess: true,
      message: "Communities retrieved successfully",
      data: communities
    }
  } catch (error) {
    console.error("Error getting communities:", error)
    return { isSuccess: false, message: "Failed to get communities" }
  }
} 