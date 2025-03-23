/**
 * @description
 * This file contains server actions for handling CSV data in the KannadaKali app.
 * It provides functionality to load and parse the CSV dataset securely.
 *
 * Key features:
 * - Authentication: Ensures only authenticated users can access CSV data using Clerk.
 * - CSV Loading: Reads and parses the CSV file from the public directory.
 *
 * @dependencies
 * - @clerk/nextjs/server: Provides authentication utilities.
 * - fs/promises: Node.js API for asynchronous file reading.
 * - @/lib/csv-parser: Custom utility to parse CSV data.
 * - @/types: Imports ActionState and KannadaEntry for type safety.
 *
 * @notes
 * - The CSV file path is updated to `public/data/kannada-kali-updated.csv`.
 * - Errors are logged and returned in the ActionState format for consistent error handling.
 * - Assumes `papaparse` is installed and configured for parsing.
 */

"use server"

import { auth } from "@clerk/nextjs/server"
import { readFile } from "fs/promises"
import { parseCsv } from "@/lib/csv-parser"
import { ActionState, KannadaEntry } from "@/types"

/**
 * Loads and parses the KannadaKali CSV dataset.
 * @returns A promise resolving to an ActionState containing the parsed KannadaEntry array or an error.
 */
export async function loadCsvAction(): Promise<ActionState<KannadaEntry[]>> {
  // Check authentication
  const { userId } = await auth()
  if (!userId) {
    return {
      isSuccess: false,
      message: "Unauthorized: Please sign in to access the data"
    }
  }

  try {
    // Read the CSV file from the public directory
    const csvPath = process.cwd() + "/public/data/kannada-kali-updated.csv"
    console.log(`Loading CSV from: ${csvPath}`);
    const csvData = await readFile(csvPath, "utf-8")

    // Parse the CSV data into an array of KannadaEntry objects
    const parsedData = parseCsv(csvData)

    // Debug information
    console.log(`CSV loaded successfully with ${parsedData.length} entries`);
    const entriesWithKanglish = parsedData.filter(e => e.kanglish && e.kanglish.trim() !== "").length;
    const entriesWithIcons = parsedData.filter(e => e.icon).length;
    console.log(`Entries with Kanglish: ${entriesWithKanglish}`);
    console.log(`Entries with icons: ${entriesWithIcons}`);
    console.log(`Entries with both: ${parsedData.filter(e => e.icon && e.kanglish && e.kanglish.trim() !== "").length}`);

    // Log sample entries
    if (parsedData.length > 0) {
      console.log("Sample entry:");
      console.log(JSON.stringify(parsedData[0], null, 2));
    }

    return {
      isSuccess: true,
      message: "CSV data loaded successfully",
      data: parsedData
    }
  } catch (error) {
    console.error("Error loading CSV:", error)
    return {
      isSuccess: false,
      message: `Failed to load CSV: ${error instanceof Error ? error.message : "Unknown error"}`
    }
  }
}