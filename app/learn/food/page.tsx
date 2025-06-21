"use server"

import { Suspense } from "react"
import { FoodSimulation } from "./_components/food-simulation"

export default async function FoodPage() {
  return (
    <div className="container mx-auto p-4">
      <Suspense
        fallback={<div className="text-center">Loading food simulation...</div>}
      >
        <FoodSimulation />
      </Suspense>
    </div>
  )
}
