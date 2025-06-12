"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { AutoMode } from "./auto-mode"
import { ManualMode } from "./manual-mode"

export function FoodSimulation() {
  const [isAutoMode, setIsAutoMode] = useState(false)

  // Food items with real images and combination dishes
  const allFoodItems = [
    // Essential combination dishes with reduced size
    {
      id: "rice-sambar",
      name: "ಸಾಂಬಾರ್ ಅನ್ನ (Sambar Anna)",
      english: "Sambar Rice",
      category: "essential",
      imageSrc: "/food-dishes/rice-sambar.png",
      size: "w-36 h-32 md:w-40 md:h-36" // Decreased from w-48 h-40
    },
    {
      id: "rice-rasam",
      name: "ರಸಮ್ ಅನ್ನ (Rasam Anna)",
      english: "Rasam Rice",
      category: "essential",
      imageSrc: "/food-dishes/rice-rasam.png",
      size: "w-36 h-32 md:w-40 md:h-36" // Decreased from w-48 h-40
    },
    {
      id: "curd-rice",
      name: "ಮೊಸರನ್ನ (Mosaraanna)",
      english: "Curd Rice",
      category: "essential",
      imageSrc: "/food-dishes/curd-rice.png",
      size: "w-36 h-32 md:w-40 md:h-36" // Decreased from w-48 h-40
    },

    // Vegetable curries with 1.5x increased size
    {
      id: "palya",
      name: "ಪಲ್ಯ (Palya)",
      english: "Vegetable Curry",
      category: "curry",
      imageSrc: "/food-dishes/palya-removebg-preview.png",
      size: "w-24 h-20 md:w-28 md:h-24" // Increased from w-16 h-14
    },
    {
      id: "corn-palya",
      name: "ಜೋಳದ ಪಲ್ಯ (Jolada Palya)",
      english: "Corn Curry",
      category: "curry",
      imageSrc: "/food-dishes/corn-palya-removebg-preview.png",
      size: "w-24 h-20 md:w-28 md:h-24" // Increased from w-16 h-14
    },
    {
      id: "kosumbari",
      name: "ಕೋಸಂಬರಿ (Kosambari)",
      english: "Lentil Salad",
      category: "curry",
      imageSrc: "/food-dishes/kosumbari-removebg-preview.png",
      size: "w-24 h-20 md:w-28 md:h-24" // Increased from w-16 h-14
    },

    // Sides and accompaniments
    {
      id: "salt",
      name: "ಉಪ್ಪು (Uppu)",
      english: "Salt",
      category: "sides",
      imageSrc: "/food-dishes/salt-removebg-preview.png",
      size: "w-24 h-24 md:w-12 md:h-12"
    },
    {
      id: "pickle",
      name: "ಅವಕ್ಕಾಯಿ (Avakkayi)",
      english: "Mango Pickle",
      category: "sides",
      imageSrc: "/food-dishes/pickle.png",
      size: "w-10 h-10 md:w-12 md:h-12"
    },
    {
      id: "papad",
      name: "ಪಾಪಡ್ (Paapad)",
      english: "Papadam",
      category: "sides",
      imageSrc: "/food-dishes/papad.png",
      size: "w-20 h-20 md:w-24 md:h-24" // Increased by 1.5x from w-14 h-14
    },

    // Sweets
    {
      id: "payasam",
      name: "ಪಾಯಸ (Paayasa)",
      english: "Sweet Pudding",
      category: "sweet",
      imageSrc: "/food-dishes/payasam.png",
      size: "w-16 h-16 md:w-20 md:h-20"
    },
    {
      id: "mysorepak",
      name: "ಮೈಸೂರ್ ಪಾಕ್ (Mysore Pak)",
      english: "Mysore Pak",
      category: "sweet",
      imageSrc: "/food-dishes/mysorepak-2.png",
      size: "w-16 h-16 md:w-20 md:h-20"
    },
    {
      id: "obbattu",
      name: "ಒಬ್ಬಟ್ಟು (Obbattu)",
      english: "Sweet Flatbread",
      category: "sweet",
      imageSrc: "/food-dishes/obbattu-removebg-preview.png",
      size: "w-24 h-24 md:w-28 md:h-28" // Decreased further from w-32 h-32
    },
    {
      id: "ice-cream",
      name: "ಐಸ್ ಕ್ರೀಮ್ (Ice Cream)",
      english: "Ice Cream",
      category: "extras",
      imageSrc: "/food-dishes/ice-cream-removebg-preview.png",
      size: "w-20 h-20 md:w-24 md:h-24" // Doubled from original size
    },

    // Extras
    {
      id: "banana",
      name: "ಬಾಳೆಹಣ್ಣು (Baalehann)",
      english: "Banana",
      category: "extras",
      imageSrc: "/food-dishes/banana-removebg-preview.png",
      size: "w-32 h-80 md:w-40 md:h-96" // Doubled from previous size
    },
    {
      id: "water",
      name: "ನೀರು (Neeru)",
      english: "Water",
      category: "extras",
      imageSrc: "/food-dishes/water.png",
      size: "w-20 h-32 md:w-24 md:h-40" // Increased by 2.5x from w-8 h-14
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Mode Selection Header */}
      <div className="bg-white py-4 text-center shadow-sm">
        <h1 className="mb-3 text-2xl font-bold text-gray-800 md:text-3xl">
          ಬಾಳೆ ಎಲೆಯಲ್ಲಿ ಊಟ (Traditional Banana Leaf Meal)
        </h1>

        {/* Mode Toggle Buttons */}
        <div className="flex justify-center gap-3">
          <Button
            onClick={() => setIsAutoMode(false)}
            variant={!isAutoMode ? "default" : "outline"}
            size="lg"
            className="px-6"
          >
            ಸ್ವಯಂ (Manual)
          </Button>
          <Button
            onClick={() => setIsAutoMode(true)}
            variant={isAutoMode ? "default" : "outline"}
            size="lg"
            className="px-6"
          >
            ಸ್ವಯಂಚಾಲಿತ (Auto)
          </Button>
        </div>
      </div>

      {/* Render the appropriate mode component */}
      {isAutoMode ? (
        <AutoMode allFoodItems={allFoodItems} />
      ) : (
        <ManualMode allFoodItems={allFoodItems} />
      )}
    </div>
  )
}
