"use server"

/**
 * @description
 * Redirects from /landing to the home page for a unified entry point.
 * This ensures that both routes lead to the same experience.
 */

import { redirect } from "next/navigation"

export default async function LandingPage() {
  redirect("/")
}
