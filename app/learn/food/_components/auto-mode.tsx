// Auto mode component for traditional banana leaf meal serving sequence
// Handles the automatic serving of food items in traditional South Indian order

"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Pause, Play } from "lucide-react"
import Image from "next/image"
import styles from "../food.module.css"

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
  const [isPaused, setIsPaused] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutsRef = useRef<NodeJS.Timeout[]>([])
  const traditionalOrderRef = useRef<string[]>([])
  const servingMessagesRef = useRef<string[]>([])

  // AUTO MODE SPECIFIC positioning - independent from manual mode
  const getItemPosition = (foodId: string) => {
    const positions: Record<string, { top: string; left: string }> = {
      // Main dishes positions
      "rice-sambar": { top: "51%", left: "32%" },
      "rice-rasam": { top: "57%", left: "44%" },
      "curd-rice": { top: "55%", left: "56%" },
      puliyogre: { top: "5%", left: "50%" },
      "dosa-aloo": { top: "45%", left: "17%" },

      // Curries in center
      palya: { top: "36%", left: "36%" },
      "corn-palya": { top: "34%", left: "25%" },
      kosumbari: { top: "32%", left: "58%" },
      "hurulikayi-palya": { top: "40%", left: "47%" },

      // Water position - clearly visible on leaf
      water: { top: "0%", left: "15%" }, // TOP LEFT CORNER FOR TESTING

      // Sweets
      obbattu: { top: "18%", left: "65%" },
      mysorepak: { top: "10%", left: "30%" },
      payasam: { top: "44%", left: "67%" },
      jilebi: { top: "21%", left: "45%" }, // clearly visible position
      karijikayi: { top: "10%", left: "40%" },

      // AUTO MODE SPECIFIC: Salt inside leaf
      salt: { top: "30%", left: "18%" }, // Inside leaf for auto mode
      pickle: { top: "22%", left: "25%" },
      papad: { top: "23%", left: "37%" },

      banana: { top: " -10%", left: "70%" } // VISIBLE POSITION ON LEAF
    }

    return positions[foodId] || { top: "50%", left: "50%" }
  }

  // Auto serving logic for combination dishes
  const handleAutoMode = () => {
    // Clear any existing timeouts
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout))
    timeoutsRef.current = []

    setIsServing(true)
    setIsPaused(false)
    setSelectedFoods([])
    setCurrentIndex(0)
    setServingMessage("🙏 ಬಾಳೆ ಎಲೆಯಲ್ಲಿ ಸಂಪೂರ್ಣ ಊಟ ಮಾಡಿ")

    // Exact serving order: water, salt, pickle, papad, then all 3 sweets one by one, then curries one by one, then rice sambar, rice rasam, then curd rice, at last banana and ice cream
    const traditionalOrder = [
      // First essentials in exact order
      "water", // 1st - Water
      "salt", // 2nd - Salt
      "pickle", // 3rd - Pickle
      "papad", // 4th - Papad

      // All 5 sweets one by one
      "payasam", // 5th - Sweet pudding
      "mysorepak", // 6th - Mysore pak
      "obbattu", // 7th - Sweet flatbread
      "jilebi", // 8th - Jalebi
      "karijikayi", // 9th - Coconut sweet

      // All curries one by one
      "palya", // 10th - Vegetable curry
      "corn-palya", // 11th - Corn curry
      "kosumbari", // 12th - Lentil salad
      "hurulikayi-palya", // 13th - Green beans curry
      "dosa-aloo", // 14th - Potato dosa
      "puliyogre", // 15th - Tamarind rice

      // Rice dishes in specific order
      "rice-sambar", // 16th - Rice sambar
      "rice-rasam", // 17th - Rice rasam
      "curd-rice", // 18th - Curd rice

      // At last
      "banana" // 19th - Banana
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
      "ಜಿಲೇಬಿ ಕೂಡ ಇಡುತ್ತೇನೆ",
      "ಕರಿಜೀಕಾಯಿ ಸಿಹಿ ಬೇಕು",

      // Curries messages
      "ಪಲ್ಯ ಕೂಡ ಇಡುತ್ತೇನೆ",
      "ಜೋಳದ ಪಲ್ಯ ಸಹ ಬೇಕು",
      "ಕೋಸಂಬರಿ ಕೂಡ ಇಡುತ್ತೇನೆ",
      "ಹುರುಳಿಕಾಯಿ ಪಲ್ಯ ಬೇಕು",
      "ಆಲೂ ದೋಸೆ ಸಹ ಬೇಕು",
      "ಪುಳಿಯೋಗರೆ ಕೂಡ ಬೇಕು",

      // Rice dishes messages
      "ಸಾಂಬಾರ್ ಅನ್ನ ಬಡಿಸಿದೆ",
      "ರಸಮ್ ಅನ್ನ ಕೂಡ ಬೇಕು",
      "ಮೊಸರನ್ನ ಕೊನೆಗೆ ಬಡಿಸುತ್ತೇನೆ",

      // Extras messages
      "ಬಾಳೆಹಣ್ಣು ಕೊನೆಗೆ"
    ]

    // Store in refs for pause/resume functionality
    traditionalOrderRef.current = traditionalOrder
    servingMessagesRef.current = servingMessages

    startServingSequence(0)
  }

  // Function to start/continue serving sequence from a specific index
  const startServingSequence = (startIndex: number) => {
    const traditionalOrder = traditionalOrderRef.current
    const servingMessages = servingMessagesRef.current

    // Serve remaining items with timing
    for (let i = startIndex; i < traditionalOrder.length; i++) {
      const foodId = traditionalOrder[i]
      const timeout = setTimeout(
        () => {
          setCurrentIndex(i)
          if (servingMessages[i]) {
            setServingMessage(servingMessages[i])
          }
          const foodTimeout = setTimeout(() => {
            setSelectedFoods(prev => {
              const newFoods = [...prev, foodId]
              if (foodId === "water" || foodId === "banana") {
                console.log(
                  `DEBUG: Adding ${foodId} to selectedFoods`,
                  newFoods
                )
              }
              return newFoods
            })
          }, 800)
          timeoutsRef.current.push(foodTimeout)
        },
        (i - startIndex) * 2000
      )
      timeoutsRef.current.push(timeout)
    }

    // Show completion message after all items are served
    const completionTimeout = setTimeout(
      () => {
        setServingMessage("🍽️ ಊಟ ಸಿದ್ಧ! ಬಾಳೆ ಎಲೆಯಲ್ಲಿ ಪ್ರಾಮಾಣಿಕ ಊಟ!")
        setIsServing(false)
        setIsPaused(false)
        setCurrentIndex(0)
      },
      (traditionalOrder.length - startIndex) * 2000 + 1000
    )
    timeoutsRef.current.push(completionTimeout)
  }

  const handlePauseResume = () => {
    if (isPaused) {
      // Resume: Continue from where we left off
      setIsPaused(false)
      setServingMessage("▶️ ಮುಂದುವರಿಸುತ್ತಿದ್ದೇನೆ...")
      // Continue from the next item after currentIndex
      const nextIndex = currentIndex + 1
      if (nextIndex < traditionalOrderRef.current.length) {
        startServingSequence(nextIndex)
      } else {
        // If we were at the last item, just finish
        setServingMessage("🍽️ ಊಟ ಸಿದ್ಧ! ಬಾಳೆ ಎಲೆಯಲ್ಲಿ ಪ್ರಾಮಾಣಿಕ ಊಟ!")
        setIsServing(false)
        setIsPaused(false)
        setCurrentIndex(0)
      }
    } else {
      // Pause: Clear all timeouts
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout))
      timeoutsRef.current = []
      setIsPaused(true)
      setServingMessage("⏸️ ವಿರಾಮ ಮಾಡಿದೆ")
    }
  }

  const resetAutoMode = () => {
    // Clear all timeouts
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout))
    timeoutsRef.current = []
    setSelectedFoods([])
    setServingMessage("")
    setIsServing(false)
    setIsPaused(false)
    setCurrentIndex(0)
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
          Words learned: {selectedFoods.length}/19
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
        <Button
          onClick={handlePauseResume}
          disabled={!isServing}
          variant="outline"
          size="sm"
          className="flex items-center gap-1"
        >
          {isPaused ? <Play size={16} /> : <Pause size={16} />}
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

                // Debug logging for water and banana
                if (foodId === "water" || foodId === "banana") {
                  console.log(`DEBUG: ${foodId}`, {
                    foodItem,
                    position,
                    selectedFoods: selectedFoods.includes(foodId)
                  })
                }

                if (!foodItem) {
                  console.log(`ERROR: Food item not found for ID: ${foodId}`)
                  return null
                }

                return (
                  <div
                    key={foodId}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 ${foodItem.size} transition-all duration-500 hover:scale-110 ${styles.foodSlideIn}`}
                    style={{
                      top: position.top,
                      left: position.left,
                      zIndex: 10,
                      animationDelay: `${selectedFoods.indexOf(foodId) * 0.1}s`
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
