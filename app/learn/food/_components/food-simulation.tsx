"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {
  RiceSVG,
  SambarSVG,
  RasamSVG,
  CurrySVG,
  PalyaSVG,
  GojjuSVG,
  PickleSVG,
  PapadSVG,
  ChutneyStatic,
  RaitaSVG,
  PayasamSVG,
  LadduSVG,
  MysorePakSVG,
  GheeSVG,
  ButtermilkSVG,
  LemonSVG,
  BananaSVG,
  CurdSVG,
  SaltSVG,
  WaterSVG
} from "./food-svgs"

export function FoodSimulation() {
  const [selectedFoods, setSelectedFoods] = useState<string[]>([])
  const [isAutoMode, setIsAutoMode] = useState(false)
  const [servingMessage, setServingMessage] = useState("")

  // Food items with SVG components
  const allFoodItems = [
    {
      id: "rice",
      name: "ಅನ್ನ (Anna)",
      english: "Rice",
      category: "essential",
      component: RiceSVG,
      size: "w-20 h-16 md:w-24 md:h-20"
    },
    {
      id: "sambar",
      name: "ಸಾಂಬಾರ್ (Sambaar)",
      english: "Sambar",
      category: "essential",
      component: SambarSVG,
      size: "w-12 h-12 md:w-14 md:h-14"
    },
    {
      id: "rasam",
      name: "ರಸಮ್ (Rasam)",
      english: "Rasam",
      category: "essential",
      component: RasamSVG,
      size: "w-12 h-12 md:w-14 md:h-14"
    },

    {
      id: "curry",
      name: "ಕೂತು (Kootu)",
      english: "Mixed Curry",
      category: "curry",
      component: CurrySVG,
      size: "w-10 h-8 md:w-12 md:h-10"
    },
    {
      id: "palya",
      name: "ಪಲ್ಯ (Palya)",
      english: "Vegetable Curry",
      category: "curry",
      component: PalyaSVG,
      size: "w-10 h-8 md:w-12 md:h-10"
    },
    {
      id: "gojju",
      name: "ಗೊಜ್ಜು (Gojju)",
      english: "Tangy Curry",
      category: "curry",
      component: GojjuSVG,
      size: "w-10 h-8 md:w-12 md:h-10"
    },

    {
      id: "pickle",
      name: "ಅವಕ್ಕಾಯಿ (Avakkayi)",
      english: "Mango Pickle",
      category: "sides",
      component: PickleSVG,
      size: "w-6 h-6 md:w-8 md:h-8"
    },
    {
      id: "papad",
      name: "ಪಾಪಡ್ (Paapad)",
      english: "Papadam",
      category: "sides",
      component: PapadSVG,
      size: "w-16 h-16 md:w-20 md:h-20"
    },
    {
      id: "chutney",
      name: "ಚಟ್ನಿ (Chatni)",
      english: "Chutney",
      category: "sides",
      component: ChutneyStatic,
      size: "w-6 h-6 md:w-8 md:h-8"
    },
    {
      id: "raita",
      name: "ರಾಯಿತ (Raayita)",
      english: "Yogurt Salad",
      category: "sides",
      component: RaitaSVG,
      size: "w-10 h-8 md:w-12 md:h-10"
    },

    {
      id: "payasam",
      name: "ಪಾಯಸ (Paayasa)",
      english: "Sweet Pudding",
      category: "sweet",
      component: PayasamSVG,
      size: "w-10 h-10 md:w-12 md:h-12"
    },
    {
      id: "laddu",
      name: "ಲಡ್ಡು (Laddu)",
      english: "Sweet Ball",
      category: "sweet",
      component: LadduSVG,
      size: "w-8 h-8 md:w-10 md:h-10"
    },
    {
      id: "mysorepark",
      name: "ಮೈಸೂರ್ ಪಾಕ್ (Mysore Pak)",
      english: "Mysore Pak",
      category: "sweet",
      component: MysorePakSVG,
      size: "w-8 h-8 md:w-10 md:h-10"
    },

    {
      id: "ghee",
      name: "ತುಪ್ಪ (Tuppa)",
      english: "Clarified Butter",
      category: "extras",
      component: GheeSVG,
      size: "w-5 h-4 md:w-6 md:h-5"
    },
    {
      id: "buttermilk",
      name: "ಮೊಸರಾನ್ನ (Mosaraanna)",
      english: "Buttermilk",
      category: "extras",
      component: ButtermilkSVG,
      size: "w-6 h-12 md:w-8 md:h-16"
    },
    {
      id: "lemon",
      name: "ನಿಂಬೆ (Nimbe)",
      english: "Lemon",
      category: "extras",
      component: LemonSVG,
      size: "w-5 h-3 md:w-6 md:h-4"
    },
    {
      id: "banana",
      name: "ಬಾಳೆಹಣ್ಣು (Baalehann)",
      english: "Banana",
      category: "extras",
      component: BananaSVG,
      size: "w-3 h-8 md:w-4 md:h-10"
    },
    {
      id: "curd",
      name: "ಮೊಸರು (Mosaru)",
      english: "Curd",
      category: "extras",
      component: CurdSVG,
      size: "w-10 h-8 md:w-12 md:h-10"
    },
    {
      id: "salt",
      name: "ಉಪ್ಪು (Uppu)",
      english: "Salt",
      category: "extras",
      component: SaltSVG,
      size: "w-4 h-3 md:w-5 md:h-4"
    },
    {
      id: "water",
      name: "ನೀರು (Neeru)",
      english: "Water",
      category: "extras",
      component: WaterSVG,
      size: "w-6 h-12 md:w-8 md:h-16"
    }
  ]

  // Traditional positioning based on authentic banana leaf arrangement
  const getItemPosition = (foodId: string) => {
    const positions: Record<string, { top: string; left: string }> = {
      // Center area: Main rice portion (largest serving)
      rice: { top: "45%", left: "40%" },

      // Right side: Liquid dishes in small bowls
      sambar: { top: "35%", left: "75%" },
      rasam: { top: "55%", left: "75%" },
      buttermilk: { top: "65%", left: "70%" },

      // Top portion: Small accompaniments
      salt: { top: "15%", left: "30%" },
      pickle: { top: "15%", left: "45%" },
      chutney: { top: "15%", left: "60%" },
      ghee: { top: "15%", left: "75%" },

      // Top-right: Papad (larger crispy item)
      papad: { top: "25%", left: "85%" },

      // Left side of rice: Vegetable curries
      curry: { top: "35%", left: "25%" },
      palya: { top: "50%", left: "25%" },
      gojju: { top: "65%", left: "25%" },
      raita: { top: "55%", left: "55%" },
      curd: { top: "70%", left: "40%" },

      // Bottom area: Fruits and extras
      banana: { top: "80%", left: "30%" },
      lemon: { top: "80%", left: "50%" },

      // Top-left corner: Sweets (special occasion items)
      payasam: { top: "20%", left: "15%" },
      laddu: { top: "35%", left: "10%" },
      mysorepark: { top: "50%", left: "10%" },

      // Water glass - outside the leaf (traditional placement)
      water: { top: "30%", left: "90%" }
    }

    return positions[foodId] || { top: "50%", left: "50%" }
  }

  // Auto serving logic
  const handleAutoMode = () => {
    setIsAutoMode(true)
    setSelectedFoods([])
    setServingMessage("🙏 ಬಾಳೆ ಎಲೆಯಲ್ಲಿ ಸಂಪೂರ್ಣ ಊಟ ಮಾಡಿ")

    // Traditional serving order
    const traditionalOrder = [
      "rice", // Rice first (base)
      "salt", // Salt for rice
      "ghee", // Ghee on rice
      "sambar", // Sambar next to rice
      "rasam", // Rasam after sambar
      "pickle", // Pickle is essential
      "papad", // Papad for crunch
      "curry", // Vegetable curry
      "payasam" // Sweet at the end
    ]

    const servingMessages = [
      "ಮೊದಲು ಅನ್ನ ಬಡಿಸುತ್ತೇನೆ",
      "ಉಪ್ಪು ಹಾಕಿ",
      "ತುಪ್ಪ ಕೂಡ ಇಡುತ್ತೇನೆ",
      "ಸಾಂಬಾರ್ ಅನ್ನದ ಜೊತೆ",
      "ರಸಮ್ ಕೂಡ ಬೇಕು",
      "ಅವಕ್ಕಾಯಿ ಇಲ್ಲದೆ ಊಟ ಆಗಲ್ಲ",
      "ಪಾಪಡ್ ಸಹ ಬೇಕು",
      "ಪಲ್ಯ ಕೂಡ ಇಡುತ್ತೇನೆ",
      "ಸಿಹಿ ಅಂತ್ಯಕ್ಕೆ"
    ]

    traditionalOrder.forEach((foodId, index) => {
      setTimeout(
        () => {
          if (servingMessages[index]) {
            setServingMessage(servingMessages[index])
          }
          setTimeout(() => {
            setSelectedFoods(prev => [...prev, foodId])
          }, 800)
        },
        (index + 1) * 2000
      )
    })

    setTimeout(
      () => {
        setServingMessage("🍽️ ಊಟ ಸಿದ್ಧ! ಬಾಳೆ ಎಲೆಯಲ್ಲಿ ಪ್ರಾಮಾಣಿಕ ಊಟ!")
      },
      traditionalOrder.length * 2000 + 1000
    )
  }

  const handleManualMode = () => {
    setIsAutoMode(false)
    setSelectedFoods([])
    setServingMessage("")
  }

  const addFood = (foodId: string) => {
    if (!selectedFoods.includes(foodId) && selectedFoods.length < 12) {
      setSelectedFoods([...selectedFoods, foodId])
    }
  }

  const removeFood = (foodId: string) => {
    setSelectedFoods(selectedFoods.filter(id => id !== foodId))
  }

  return (
    <div className="mx-auto flex h-screen max-w-7xl flex-col p-2">
      {/* Header */}
      <div className="mb-3 text-center">
        <h1 className="mb-1 text-xl font-bold text-gray-800 md:text-2xl">
          🍃 ಬಾಳೆ ಎಲೆಯಲ್ಲಿ ಊಟ (Traditional Banana Leaf Meal)
        </h1>
        <p className="text-sm text-gray-600">
          📚 Words learned: {selectedFoods.length}/20
        </p>
      </div>

      {/* Control Buttons */}
      <div className="mb-3 flex justify-center gap-2">
        <Button
          onClick={handleManualMode}
          variant={!isAutoMode ? "default" : "outline"}
          size="sm"
        >
          🍽️ ನಾನೇ ಆರಿಸುತ್ತೇನೆ
        </Button>
        <Button
          onClick={handleAutoMode}
          variant={isAutoMode ? "default" : "outline"}
          size="sm"
        >
          🤖 ಪ್ರಾಮಾಣಿಕ ಊಟ ಬಡಿಸಿ
        </Button>
      </div>

      {/* Serving Message */}
      {isAutoMode && servingMessage && (
        <div className="mb-2 rounded bg-orange-100 p-2 text-center text-sm text-orange-800">
          {servingMessage}
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex min-h-0 flex-1 gap-4">
        {/* Left Side - Banana Leaf */}
        <div className="flex-1">
          <Card className="h-full bg-amber-50">
            <CardContent className="h-full p-3">
              <div className="relative size-full">
                {/* Banana Leaf Image */}
                <Image
                  src="/banana-leaf.png"
                  alt="ಬಾಳೆ ಎಲೆ"
                  fill
                  className="object-contain"
                  priority
                />

                {/* SVG Food Items */}
                {selectedFoods.map(foodId => {
                  const foodItem = allFoodItems.find(item => item.id === foodId)
                  const position = getItemPosition(foodId)

                  if (!foodItem) return null

                  const FoodComponent = foodItem.component

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
                      <FoodComponent className="size-full drop-shadow-lg" />
                    </div>
                  )
                })}
              </div>

              {/* Status */}
              <div className="mt-2 text-center">
                {selectedFoods.length === 0 ? (
                  <p className="text-xs text-gray-600">
                    {isAutoMode
                      ? "⏳ ಊಟ ಸಿದ್ಧಪಡಿಸುತ್ತಿದ್ದೇನೆ..."
                      : "ಬಾಳೆ ಎಲೆ ಸಿದ್ಧ! ನಿಮ್ಮ ಆಹಾರ ಆಯ್ಕೆ ಮಾಡಿ"}
                  </p>
                ) : (
                  <p className="text-sm font-semibold text-green-700">
                    {selectedFoods.length} ಪದಾರ್ಥಗಳು ಬಡಿಸಲಾಗಿದೆ! 🍽️
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Food Selection */}
        {!isAutoMode && (
          <div className="w-72 md:w-80">
            <Card className="h-full">
              <CardContent className="h-full overflow-y-auto p-3">
                <h3 className="mb-3 text-center text-sm font-semibold">
                  🍛 ಆಹಾರ ಆಯ್ಕೆ ಮಾಡಿ (Select Food)
                </h3>

                {/* Food Categories */}
                {[
                  {
                    category: "essential",
                    title: "🍚 ಮುಖ್ಯ ಆಹಾರ",
                    english: "Essentials"
                  },
                  {
                    category: "curry",
                    title: "🥘 ಪಲ್ಯ/ಕೂತು",
                    english: "Curries"
                  },
                  {
                    category: "sides",
                    title: "🥗 ಸಿದ್ಧ ಆಹಾರ",
                    english: "Sides"
                  },
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
                              <div className="size-8 shrink-0">
                                <item.component className="size-full" />
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
        )}
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translate(-30px, -30px) rotate(-180deg);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2) translate(-5px, -5px) rotate(-45deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) translate(0, 0) rotate(0deg);
          }
        }
      `}</style>
    </div>
  )
}
