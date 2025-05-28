"use server"

import Navbar from "./navbar"
import { getUserCreditsAction } from "@/actions/db/credits-actions"
import { auth } from "@clerk/nextjs/server"

export default async function NavbarWrapper() {
  const { userId } = await auth()
  let credits = 1
  if (userId) {
    const result = await getUserCreditsAction(userId)
    if (result.isSuccess) credits = result.data
  }
  return <Navbar initialCredits={credits} />
}
