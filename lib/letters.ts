/* lib/letters.ts */
export interface LetterMeta {
  id: string // e.g. "01_ಅ"
  file: string // public path:  "/letters/01_ಅ.svg"
}
export const LETTERS: LetterMeta[] = [
  { id: "01_ಅ", file: "/letters/01_ಅ.svg" },
  { id: "02_ಆ", file: "/letters/02_ಆ.svg" }
  // … fill the rest
]
