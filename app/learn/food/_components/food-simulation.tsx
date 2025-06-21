"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { AutoMode } from "./auto-mode"
import { ManualMode } from "./manual-mode"

export function FoodSimulation() {
  const [isAutoMode, setIsAutoMode] = useState(false)

  // Food items with real images and combination dishes
  const allFoodItems = [
    // Essential combination dishes with increased size
    {
      id: "rice-sambar",
      name: "ಸಾಂಬಾರ್ ಅನ್ನ (Sambar Anna)",
      english: "Sambar Rice",
      category: "essential",
      imageSrc: "/food-dishes/rice-sambar.png",
      size: "w-48 h-40 md:w-56 md:h-48" // Increased size
    },
    {
      id: "puliyogre",
      name: "ಪುಳಿಯೋಗರೆ (Puliyogare)",
      english: "Tamarind Rice",
      category: "essential",
      imageSrc: "/food-dishes/puliyogree.png",
      size: "w-48 h-40 md:w-56 md:h-48" // Increased size
    },
    {
      id: "dosa-aloo",
      name: "ಆಲೂ ದೋಸೆ (Aloo Dose)",
      english: "Potato Dosa",
      category: "essential",
      imageSrc: "/food-dishes/DOSE.png",
      size: "w-52 h-36 md:w-60 md:h-44" // Increased size
    },
    {
      id: "rice-rasam",
      name: "ರಸಮ್ ಅನ್ನ (Rasam Anna)",
      english: "Rasam Rice",
      category: "essential",
      imageSrc: "/food-dishes/rice-rasam.png",
      size: "w-48 h-40 md:w-56 md:h-48" // Increased size
    },
    {
      id: "curd-rice",
      name: "ಮೊಸರನ್ನ (Mosaraanna)",
      english: "Curd Rice",
      category: "essential",
      imageSrc: "/food-dishes/curd-rice.png",
      size: "w-48 h-40 md:w-56 md:h-48" // Increased size
    },

    // Vegetable curries with increased size
    {
      id: "palya",
      name: "ಪಲ್ಯ (Palya)",
      english: "Vegetable Curry",
      category: "curry",
      imageSrc: "/food-dishes/palya-removebg-preview.png",
      size: "w-32 h-28 md:w-40 md:h-36" // Increased size
    },
    {
      id: "corn-palya",
      name: "ಜೋಳದ ಪಲ್ಯ (Jolada Palya)",
      english: "Corn Curry",
      category: "curry",
      imageSrc: "/food-dishes/corn-palya-removebg-preview.png",
      size: "w-32 h-28 md:w-40 md:h-36" // Increased size
    },
    {
      id: "kosumbari",
      name: "ಕೋಸಂಬರಿ (Kosambari)",
      english: "Lentil Salad",
      category: "curry",
      imageSrc: "/food-dishes/kosumbari-removebg-preview.png",
      size: "w-32 h-28 md:w-40 md:h-36" // Increased size
    },
    {
      id: "hurulikayi-palya",
      name: "ಹುರುಳಿಕಾಯಿ ಪಲ್ಯ (Hurulikayi Palya)",
      english: "Green Beans Curry",
      category: "curry",
      imageSrc: "/food-dishes/beans.png",
      size: "w-32 h-28 md:w-40 md:h-36" // Increased size
    },

    // Sides and accompaniments with increased size
    {
      id: "salt",
      name: "ಉಪ್ಪು (Uppu)",
      english: "Salt",
      category: "sides",
      imageSrc: "/food-dishes/salt-removebg-preview.png",
      size: "w-20 h-20 md:w-24 md:h-24" // Increased size
    },
    {
      id: "pickle",
      name: "ಅವಕ್ಕಾಯಿ (Avakkayi)",
      english: "Mango Pickle",
      category: "sides",
      imageSrc: "/food-dishes/pickle.png",
      size: "w-16 h-16 md:w-20 md:h-20" // Increased size
    },
    {
      id: "papad",
      name: "ಪಾಪಡ್ (Paapad)",
      english: "Papadam",
      category: "sides",
      imageSrc: "/food-dishes/papad.png",
      size: "w-28 h-28 md:w-36 md:h-36" // Increased size
    },

    // Sweets with increased size
    {
      id: "payasam",
      name: "ಪಾಯಸ (Paayasa)",
      english: "Sweet Pudding",
      category: "sweet",
      imageSrc: "/food-dishes/payasam.png",
      size: "w-32 h-32 md:w-40 md:h-40" // Further increased size
    },
    {
      id: "mysorepak",
      name: "ಮೈಸೂರ್ ಪಾಕ್ (Mysore Pak)",
      english: "Mysore Pak",
      category: "sweet",
      imageSrc: "/food-dishes/mysorepak-2.png",
      size: "w-24 h-24 md:w-32 md:h-32" // Increased size
    },
    {
      id: "obbattu",
      name: "ಒಬ್ಬಟ್ಟು (Obbattu)",
      english: "Sweet Flatbread",
      category: "sweet",
      imageSrc: "/food-dishes/obbattu-removebg-preview.png",
      size: "w-32 h-32 md:w-40 md:h-40" // Increased size
    },
    {
      id: "jilebi",
      name: "ಜಿಲೇಬಿ (Jilebi)",
      english: "Jalebi",
      category: "sweet",
      imageSrc: "/food-dishes/JILEBII.png",
      size: "w-36 h-36 md:w-44 md:h-44" // Much larger size
    },
    {
      id: "karijikayi",
      name: "ಕರಿಜೀಕಾಯಿ (Karijikayi)",
      english: "Coconut Sweet",
      category: "sweet",
      imageSrc: "/food-dishes/karjikayii.png",
      size: "w-32 h-28 md:w-40 md:h-36" // Increased size
    },

    // Extras with increased size
    {
      id: "banana",
      name: "ಬಾಳೆಹಣ್ಣು (Baalehann)",
      english: "Banana",
      category: "extras",
      imageSrc: "/food-dishes/banana-removebg-preview.png",
      size: "w-32 h-48 md:w-40 md:h-60" // Increased size
    },
    {
      id: "water",
      name: "ನೀರು (Neeru)",
      english: "Water",
      category: "extras",
      imageSrc: "/food-dishes/water.png",
      size: "w-28 h-40 md:w-32 md:h-48" // Reduced size
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
