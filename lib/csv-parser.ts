/**
 * @description
 * This file provides a utility function to parse CSV data into KannadaEntry objects for the KannadaKali app.
 * It uses Papa Parse to handle CSV parsing efficiently.
 *
 * Key features:
 * - CSV Parsing: Transforms raw CSV strings into structured KannadaEntry arrays.
 * - Type Safety: Maps CSV columns to the KannadaEntry interface.
 *
 * @dependencies
 * - papaparse: Library for parsing CSV data.
 * - @/types: Imports the KannadaEntry interface for type safety.
 *
 * @notes
 * - Assumes CSV headers match the KannadaEntry field names exactly (case-sensitive).
 * - Handles missing or malformed data by allowing optional fields in KannadaEntry.
 * - Throws an error if parsing fails, which is caught by the calling server action.
 */

import Papa from "papaparse"
import { KannadaEntry } from "@/types"

/**
 * Parses a CSV string into an array of KannadaEntry objects.
 * @param csvData - The raw CSV string to parse.
 * @returns An array of KannadaEntry objects.
 * @throws Error if parsing fails or the CSV is invalid.
 */
export function parseCsv(csvData: string): KannadaEntry[] {
  const parsed = Papa.parse<KannadaEntry>(csvData, {
    header: true, // Use the first row as headers
    skipEmptyLines: true, // Skip empty lines in the CSV
    transform: (value, field) => {
      // Transform empty strings or undefined values to null for nullable fields
      if (value === "" || value === undefined) {
        return null
      }
      return value
    }
  })

  if (parsed.errors.length > 0) {
    throw new Error(`CSV parsing failed: ${parsed.errors[0].message}`)
  }

  return parsed.data.map(entry => ({
    kannada: entry.kannada,
    english: entry.english,
    category: entry.category,
    icon: entry.icon,
    waudio: entry.waudio,
    kanglish: entry.kanglish,
    ksentence: entry.ksentence,
    esentence: entry.esentence,
    kesentence: entry.kesentence,
    image: entry.image,
    saudio: entry.saudio
  }))
}
