// Auto mode component for traditional banana leaf meal serving sequence
// Handles the automatic serving of food items in traditional South Indian order

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface AutoModeProps {
  allFoodItems: Array<{
    id: string
    name: string
    english: string
    category: string
    imageSrc: string
    size: string
  }>
}

export function AutoMode({ allFoodItems }: AutoModeProps) {
  const [selectedFoods, setSelectedFoods] = useState<string[]>([])
  const [servingMessage, setServingMessage] = useState("")
  const [isServing, setIsServing] = useState(false)

  // AUTO MODE SPECIFIC positioning - independent from manual mode
  const getItemPosition = (foodId: string) => {
    const positions: Record<string, { top: string; left: string }> = {
      // Main dishes positions
      "rice-sambar": { top: "55%", left: "35%" },
      "rice-rasam": { top: "57%", left: "50%" },
      "curd-rice": { top: "55%", left: "65%" },

      // Curries in center
      palya: { top: "40%", left: "35%" },
      "corn-palya": { top: "40%", left: "50%" },
      kosumbari: { top: "40%", left: "65%" },

      // Ice cream position
      "ice-cream": { top: "5%", left: "20%" },

      // Water position
      water: { top: "3%", left: "79%" },

      // Sweets
      obbattu: { top: "50%", left: "25%" },
      mysorepak: { top: "20%", left: "50%" },
      payasam: { top: "20%", left: "65%" },

      // AUTO MODE SPECIFIC: Salt inside leaf
      salt: { top: "30%", left: "25%" }, // Inside leaf for auto mode
      pickle: { top: "25%", left: "30%" },
      papad: { top: "25%", left: "37%" },

      banana: { top: "54%", left: "25%" }
    }

    return positions[foodId] || { top: "50%", left: "50%" }
  }

  // Auto serving logic for combination dishes
  const handleAutoMode = () => {
    setIsServing(true)
    setSelectedFoods([])
    setServingMessage("🙏 ಬಾಳೆ ಎಲೆಯಲ್ಲಿ ಸಂಪೂರ್ಣ ಊಟ ಮಾಡಿ")

    // Exact serving order: water, salt, pickle, papad, then all 3 sweets one by one, then curries one by one, then rice sambar, rice rasam, then curd rice, at last banana and ice cream
    const traditionalOrder = [
      // First essentials in exact order
      "water", // 1st - Water
      "salt", // 2nd - Salt
      "pickle", // 3rd - Pickle
      "papad", // 4th - Papad

      // All 3 sweets one by one
      "payasam", // 5th - Sweet pudding
      "mysorepak", // 6th - Mysore pak
      "obbattu", // 7th - Sweet flatbread

      // All curries one by one
      "palya", // 8th - Vegetable curry
      "corn-palya", // 9th - Corn curry
      "kosumbari", // 10th - Lentil salad

      // Rice dishes in specific order
      "rice-sambar", // 11th - Rice sambar
      "rice-rasam", // 12th - Rice rasam
      "curd-rice", // 13th - Curd rice

      // At last
      "banana", // 14th - Banana
      "ice-cream" // 15th - Ice cream (last)
    ]

    const servingMessages = [
      // Essentials messages
      "ನೀರು ಮೊದಲು ಇಡುತ್ತೇನೆ",
      "ಉಪ್ಪು ಮೊದಲು ಹಾಕುತ್ತೇನೆ",
      "ಅವಕ್ಕಾಯಿ ಇಲ್ಲದೆ ಊಟ ಆಗಲ್ಲ",
      "ಪಾಪಡ್ ಸಹ ಬೇಕು",

      // Sweets messages
      "ಪಾಯಸ ಸಿಹಿ ಮೊದಲು",
      "ಮೈಸೂರು ಪಾಕ್ ಕೂಡ ಬೇಕು",
      "ಒಬ್ಬಟ್ಟು ಸಹ ಬೇಕು",

      // Curries messages
      "ಪಲ್ಯ ಕೂಡ ಇಡುತ್ತೇನೆ",
      "ಜೋಳದ ಪಲ್ಯ ಸಹ ಬೇಕು",
      "ಕೋಸಂಬರಿ ಕೂಡ ಇಡುತ್ತೇನೆ",

      // Rice dishes messages
      "ಸಾಂಬಾರ್ ಅನ್ನ ಬಡಿಸಿದೆ",
      "ರಸಮ್ ಅನ್ನ ಕೂಡ ಬೇಕು",
      "ಮೊಸರನ್ನ ಕೊನೆಗೆ ಬಡಿಸುತ್ತೇನೆ",

      // Extras messages
      "ಬಾಳೆಹಣ್ಣು ಕೂಡ ಬೇಕು",
      "ಐಸ್ ಕ್ರೀಮ್ ಕೊನೆಗೆ"
    ]

    // Serve items with timing
    traditionalOrder.forEach((foodId, index) => {
      setTimeout(() => {
        if (servingMessages[index]) {
          setServingMessage(servingMessages[index])
        }
        setTimeout(() => {
          setSelectedFoods(prev => [...prev, foodId])
        }, 800)
      }, index * 2000)
    })

    // Show completion message after all items are served
    setTimeout(
      () => {
        setServingMessage("🍽️ ಊಟ ಸಿದ್ಧ! ಬಾಳೆ ಎಲೆಯಲ್ಲಿ ಪ್ರಾಮಾಣಿಕ ಊಟ!")
        setIsServing(false)
      },
      traditionalOrder.length * 2000 + 1000
    )
  }

  const resetAutoMode = () => {
    setSelectedFoods([])
    setServingMessage("")
    setIsServing(false)
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
          Words learned: {selectedFoods.length}/15
        </p>
      </div>

      {/* Control Buttons */}
      <div className="mb-3 flex justify-center gap-2">
        <Button
          onClick={handleAutoMode}
          disabled={isServing}
          variant="outline"
          size="sm"
        >
          ಊಟ ಬಡಿಸಿ
        </Button>
        <Button onClick={resetAutoMode} variant="outline" size="sm">
          ಮತ್ತೆ ಶುರು ಮಾಡಿ
        </Button>
      </div>

      {/* Serving Message */}
      {servingMessage && (
        <div className="mb-2 rounded bg-orange-100 p-2 text-center text-sm text-orange-800">
          {servingMessage}
        </div>
      )}

      {/* Banana Leaf Display */}
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
                    className={`absolute -translate-x-1/2 -translate-y-1/2${foodItem.size} transition-all duration-500 hover:scale-110`}
                    style={{
                      top: position.top,
                      left: position.left,
                      zIndex: 10
                    }}
                    title={`${foodItem.name} - ${foodItem.english}`}
                  >
                    <FoodItemComponent item={foodItem} />
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
