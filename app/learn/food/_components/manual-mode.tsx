// Manual mode component for banana leaf meal where users can select food items
// Allows users to handpick food items from categorized buttons

"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface ManualModeProps {
  allFoodItems: Array<{
    id: string
    name: string
    english: string
    category: string
    imageSrc: string
    size: string
  }>
}

export function ManualMode({ allFoodItems }: ManualModeProps) {
  const [selectedFoods, setSelectedFoods] = useState<string[]>([])

  // MANUAL MODE SPECIFIC positioning - independent from auto mode
  const getItemPosition = (foodId: string) => {
    const positions: Record<string, { top: string; left: string }> = {
      // Main dishes positions
      "rice-sambar": { top: "70%", left: "35%" },
      "rice-rasam": { top: "70%", left: "55%" },
      "curd-rice": { top: "70%", left: "75%" },

      // Curries in center
      palya: { top: "45%", left: "35%" },
      "corn-palya": { top: "45%", left: "50%" },
      kosumbari: { top: "45%", left: "65%" },

      // Ice cream position
      "ice-cream": { top: "15%", left: "12%" },

      // Water position
      water: { top: "15%", left: "88%" },

      // Sweets
      obbattu: { top: "60%", left: "15%" },
      mysorepak: { top: "25%", left: "50%" },
      payasam: { top: "25%", left: "65%" },

      // MANUAL MODE SPECIFIC: Salt in different position
      salt: { top: "29%", left: "15%" }, // Different position for manual mode
      pickle: { top: "25%", left: "25%" },
      papad: { top: "25%", left: "35%" },

      banana: { top: "85%", left: "15%" }
    }

    return positions[foodId] || { top: "50%", left: "50%" }
  }

  const addFood = (foodId: string) => {
    if (!selectedFoods.includes(foodId) && selectedFoods.length < 16) {
      setSelectedFoods([...selectedFoods, foodId])
    }
  }

  const removeFood = (foodId: string) => {
    setSelectedFoods(selectedFoods.filter(id => id !== foodId))
  }

  const resetManualMode = () => {
    setSelectedFoods([])
  }

  // Component to render food item
  const FoodItemComponent = ({ item }: { item: (typeof allFoodItems)[0] }) => {
    if (item.imageSrc) {
      return (
        <Image
          src={item.imageSrc}
          alt={item.name}
          fill
          className="object-contain drop-shadow-lg"
        />
      )
    }
    return null
  }

  return (
    <div className="mx-auto flex h-screen max-w-7xl flex-col p-2">
      {/* Progress Info */}
      <div className="mb-3 text-center">
        <p className="text-sm text-gray-600">
          Words learned: {selectedFoods.length}/16
        </p>
      </div>

      {/* Control Button */}
      <div className="mb-3 flex justify-center gap-2">
        <Button onClick={resetManualMode} variant="outline" size="sm">
          ಎಲ್ಲಾ ತೆಗೆದುಹಾಕಿ
        </Button>
      </div>

      {/* Main Content Area */}
      <div className="flex min-h-0 flex-1 gap-4">
        {/* Left Side - Banana Leaf */}
        <div className="flex-1">
          <Card className="h-full bg-amber-50">
            <CardContent className="h-full p-3">
              <div className="relative size-full">
                {/* Banana Leaf Image */}
                <Image
                  src="/leaf.png"
                  alt="ಬಾಳೆ ಎಲೆ"
                  fill
                  className="dark:contrast-90 object-contain dark:brightness-75"
                  priority
                />

                {/* Food Items Placed on Leaf */}
                {selectedFoods.map(foodId => {
                  const foodItem = allFoodItems.find(item => item.id === foodId)
                  const position = getItemPosition(foodId)

                  if (!foodItem) return null

                  return (
                    <div
                      key={foodId}
                      className={`absolute -translate-x-1/2 -translate-y-1/2${foodItem.size} cursor-pointer transition-transform duration-200 hover:scale-110`}
                      style={{
                        top: position.top,
                        left: position.left,
                        zIndex: 10
                      }}
                      onClick={() => removeFood(foodId)}
                      title={`${foodItem.name} - ${foodItem.english} (Click to remove)`}
                    >
                      <FoodItemComponent item={foodItem} />
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Food Selection */}
        <div className="w-72 md:w-80">
          <Card className="h-full">
            <CardContent className="h-full overflow-y-auto p-3">
              <h3 className="mb-3 text-center text-sm font-semibold">
                ಆಹಾರ ಆಯ್ಕೆ ಮಾಡಿ (Select Food)
              </h3>

              {/* Food Categories */}
              {[
                {
                  category: "essential",
                  title: "🍚 ಮುಖ್ಯ ಊಟ",
                  english: "Main Dishes"
                },
                {
                  category: "curry",
                  title: "🥘 ಪಲ್ಯ/ಕೂತು",
                  english: "Curries"
                },
                { category: "sides", title: "🥗 ಸಿದ್ಧ ಆಹಾರ", english: "Sides" },
                { category: "sweet", title: "🍮 ಸಿಹಿ", english: "Sweets" },
                { category: "extras", title: "🥥 ಇತರೆ", english: "Extras" }
              ].map(({ category, title, english }) => (
                <div key={category} className="mb-4">
                  <h4 className="mb-2 text-xs font-medium text-gray-700">
                    {title} ({english})
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {allFoodItems
                      .filter(item => item.category === category)
                      .map(item => (
                        <button
                          key={item.id}
                          onClick={() => addFood(item.id)}
                          disabled={selectedFoods.includes(item.id)}
                          className={`rounded border p-2 text-left text-xs transition-all duration-200 ${
                            selectedFoods.includes(item.id)
                              ? "cursor-not-allowed border-green-300 bg-green-100 opacity-60"
                              : "border-gray-200 bg-white hover:scale-105 hover:border-orange-300 hover:bg-orange-50"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div className="relative size-8 shrink-0">
                              <FoodItemComponent item={item} />
                            </div>
                            <div className="min-w-0">
                              <div className="truncate font-medium text-gray-800">
                                {item.name}
                              </div>
                              <div className="truncate text-gray-500">
                                {item.english}
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
