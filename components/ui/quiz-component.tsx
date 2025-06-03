/**
 * @description
 * This component renders interactive quiz games for learning Kannada.
 * It shows Kanglish words (transliterated Kannada) as questions and presents icon options to select from.
 *
 * Key features:
 * - Configurable: Adapts to user-selected question count and categories
 * - Kanglish to Icons: Questions show Kanglish words, options show icons
 * - Feedback: Visual animations and sounds for correct/incorrect answers
 * - Progress Saving: Updates DB via server action on quiz completion
 *
 * @dependencies
 * - Framer Motion: For animations and feedback
 * - Lucide-react: For icons like Play and Check
 * - Sonner: For toast notifications (feedback)
 * - Server Actions: For saving progress
 */

"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { updateModuleProgressAction } from "@/actions/db/progress-actions"
import { saveQuizResultAction } from "@/actions/db/quiz-results-actions"
import { KannadaEntry } from "@/types"
import { cn } from "@/lib/utils"
import { recordWordAttemptAction } from "@/actions/db/word-stats-actions"
import { Timer, CheckCircle, XCircle, ArrowLeft } from "lucide-react"
import Image from "next/image"
import QuizSetup from "@/app/play/quiz/_components/quiz-setup"

// Constants
const QUESTION_TIME = 10 // Time per question in seconds

// Function to load sound
function loadSound(url: string) {
  if (typeof Audio !== "undefined") {
    return new Audio(url)
  }
  return null
}

const correctSound = loadSound("/sounds/correct.mp3")
const incorrectSound = loadSound("/sounds/incorrect.mp3")
const finishSound = loadSound("/sounds/finish.mp3")

type QuizResult = {
  question: KannadaEntry
  isCorrect: boolean
  selectedOption: string
  correctOption: string
}

// Props for the component
interface QuizComponentProps {
  entries: KannadaEntry[] // Array of Kannada entries from CSV
}

export default function QuizComponent({ entries }: QuizComponentProps) {
  // State for quiz configuration
  const [isConfiguring, setIsConfiguring] = useState(true)

  // State for quiz management
  const [isStarted, setIsStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [quizQuestions, setQuizQuestions] = useState<
    {
      question: KannadaEntry
      options: { icon: string | null; isCorrect: boolean }[]
    }[]
  >([])
  const [timer, setTimer] = useState(QUESTION_TIME)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [results, setResults] = useState<QuizResult[]>([])
  const [isComplete, setIsComplete] = useState(false)
  const [answeredQuestion, setAnsweredQuestion] = useState(false)

  // Add additional state to track when to save results
  const [shouldSaveResults, setShouldSaveResults] = useState(false)

  // Complete the quiz and save results
  const completeQuiz = () => {
    setIsComplete(true)
    setIsStarted(false)

    // Play finish sound
    finishSound?.play()

    // Mark results as ready to save
    setShouldSaveResults(true)

    // Display toast
    const correctAnswers = results.filter(r => r.isCorrect).length
    const score = Math.round((correctAnswers / results.length) * 100)

    toast.success(`Quiz completed! Your score: ${score}%`)
  }

  // Save quiz results to the database when complete
  useEffect(() => {
    if (shouldSaveResults && results.length > 0) {
      const saveResults = async () => {
        try {
          // Get score
          const correctAnswers = results.filter(r => r.isCorrect).length
          const score = Math.round((correctAnswers / results.length) * 100)

          // Save overall progress
          await updateModuleProgressAction("quiz", score)

          // Save detailed results for this quiz attempt
          await saveQuizResultAction({
            quizType: "standard",
            score: correctAnswers,
            totalQuestions: results.length,
            timeSpent: undefined,
            categories: []
          })

          setShouldSaveResults(false)
        } catch (error) {
          console.error("Error saving quiz results:", error)
          toast.error("Failed to save your results")
        }
      }

      saveResults()
    }
  }, [shouldSaveResults, results])

  // Timer countdown
  useEffect(() => {
    if (!isStarted || isComplete || answeredQuestion || !quizQuestions.length)
      return

    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          handleTimeout()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isStarted, isComplete, answeredQuestion, quizQuestions])

  // Handle quiz timeout
  const handleTimeout = () => {
    if (answeredQuestion) return

    setAnsweredQuestion(true)

    const currentQuestion = quizQuestions[currentQuestionIndex]
    const correctOption =
      currentQuestion.options.find(opt => opt.isCorrect)?.icon || ""

    // Add to results
    setResults(prev => [
      ...prev,
      {
        question: currentQuestion.question,
        isCorrect: false,
        selectedOption: "",
        correctOption
      }
    ])

    toast.error("Time's up!")
    incorrectSound?.play()

    moveToNextQuestion()
  }

  // Handle user selection
  const handleSelectOption = async (
    optionIcon: string | null,
    isCorrect: boolean
  ) => {
    if (answeredQuestion) return

    setSelectedOption(optionIcon)
    setAnsweredQuestion(true)

    const currentQuestion = quizQuestions[currentQuestionIndex]
    const correctOption =
      currentQuestion.options.find(opt => opt.isCorrect)?.icon || ""

    // Add to results
    setResults(prev => [
      ...prev,
      {
        question: currentQuestion.question,
        isCorrect: isCorrect,
        selectedOption: optionIcon || "",
        correctOption
      }
    ])

    // Record word attempt but don't await - fire and forget to avoid blocking
    if (currentQuestion?.question) {
      // Use a fire-and-forget pattern for non-critical stats tracking
      ;(async () => {
        try {
          await recordWordAttemptAction(
            currentQuestion.question.kanglish || "",
            currentQuestion.question.english || "",
            currentQuestion.question.kannada || null,
            currentQuestion.question.icon || null,
            currentQuestion.question.category || null,
            isCorrect
          )
        } catch (error) {
          console.error("Error recording word statistics:", error)
        }
      })()
    }

    // Provide feedback
    if (isCorrect) {
      toast.success("Correct!")
      correctSound?.play()
    } else {
      toast.error("Incorrect!")
      incorrectSound?.play()
    }

    moveToNextQuestion()
  }

  // Move to next question or complete the quiz
  const moveToNextQuestion = () => {
    // Short delay to show the answer
    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1)
        setTimer(QUESTION_TIME)
        setSelectedOption(null)
        setAnsweredQuestion(false)
      } else {
        completeQuiz()
      }
    }, 1500)
  }

  // Handle starting the quiz
  const handleStartQuiz = () => {
    setIsStarted(true)
    setCurrentQuestionIndex(0)
    setQuizQuestions([])
    setTimer(QUESTION_TIME)
    setSelectedOption(null)
    setResults([])
    setIsComplete(false)
    setAnsweredQuestion(false)
  }

  // Handle quiz configuration from setup component
  const onStartQuiz = (numQuestions: number, categories: string[]) => {
    // Filter entries by selected categories - allow case-insensitive matching
    let filteredEntries = entries

    if (categories && categories.length > 0) {
      filteredEntries = entries.filter(
        entry =>
          entry.category &&
          categories.some(
            cat => entry.category?.toLowerCase() === cat.toLowerCase()
          )
      )
    }

    console.log(`Total entries: ${entries.length}`)
    console.log(`After category filter: ${filteredEntries.length}`)

    // We need entries with valid icons and Kanglish - ensure no undefined or empty values
    const entriesWithIconsAndKanglish = filteredEntries.filter(
      e =>
        e.icon && // Make sure icon exists
        e.kanglish &&
        e.kanglish.trim() !== "" // Make sure kanglish exists and is not empty
    )

    console.log(
      `Entries with valid icons and Kanglish: ${entriesWithIconsAndKanglish.length}`
    )

    if (entriesWithIconsAndKanglish.length < 4) {
      // We need at least 4 entries for each quiz question (1 correct, 3 incorrect)
      // Fallback to English if no Kanglish entries available
      console.log(
        "Not enough entries with Kanglish found, falling back to English"
      )
      const entriesWithIconsAndEnglish = filteredEntries.filter(
        e => e.icon && e.english && e.english.trim() !== ""
      )

      if (entriesWithIconsAndEnglish.length >= 4) {
        // Use English entries as fallback
        const shuffled = [...entriesWithIconsAndEnglish].sort(
          () => Math.random() - 0.5
        )
        const quizEntries = shuffled.slice(
          0,
          Math.min(numQuestions, shuffled.length)
        )
        createQuizWithEntries(quizEntries, shuffled)
        return
      } else {
        toast.error(
          "Not enough valid entries found for quiz. Please try different categories."
        )
        return
      }
    }

    // Shuffle entries
    const shuffled = [...entriesWithIconsAndKanglish].sort(
      () => Math.random() - 0.5
    )

    // Take the configured number of random entries for the quiz, but don't exceed available entries
    const quizEntries = shuffled.slice(
      0,
      Math.min(numQuestions, shuffled.length)
    )
    console.log(`Creating quiz with ${quizEntries.length} questions`)

    createQuizWithEntries(quizEntries, shuffled)
  }

  // Helper function to create quiz questions from entries
  const createQuizWithEntries = (
    quizEntries: KannadaEntry[],
    allShuffledEntries: KannadaEntry[]
  ) => {
    // Create quiz questions with icon options
    const questionsList = quizEntries.map(entry => {
      // Get incorrect options (3 other entries with icons)
      // Filter out entries without icons and those matching the current entry's icon
      const incorrectEntriesPool = allShuffledEntries.filter(
        e => e.icon && e.icon !== entry.icon
      )

      // If we don't have enough incorrect options, use duplicates as a fallback
      let incorrectEntries = []
      if (incorrectEntriesPool.length >= 3) {
        // Take 3 random entries from the pool
        incorrectEntries = incorrectEntriesPool
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
      } else {
        // Use whatever we have and duplicate if necessary
        incorrectEntries = [...incorrectEntriesPool]
        while (incorrectEntries.length < 3) {
          incorrectEntries.push(incorrectEntriesPool[0] || quizEntries[0])
        }
      }

      // Map to option objects with explicit non-undefined icons
      const incorrectOptions = incorrectEntries.map(e => ({
        icon: e.icon as string | null, // We've already filtered out undefined
        isCorrect: false
      }))

      // Add correct option (we know entry.icon exists because we filtered for it)
      const correctOption = {
        icon: entry.icon as string | null, // We've already filtered out undefined
        isCorrect: true
      }

      // Shuffle all options
      const options = [correctOption, ...incorrectOptions].sort(
        () => Math.random() - 0.5
      )

      return {
        question: entry,
        options
      }
    })

    console.log(`Created ${questionsList.length} quiz questions`)

    // Type assertion to ensure TypeScript understands we've eliminated undefined
    setQuizQuestions(questionsList)

    setIsConfiguring(false)
    setIsStarted(true)
    setCurrentQuestionIndex(0)
    setTimer(QUESTION_TIME)
    setSelectedOption(null)
    setResults([])
    setIsComplete(false)
    setAnsweredQuestion(false)
  }

  // Return to setup
  const backToSetup = () => {
    setIsConfiguring(true)
    setIsComplete(false)
  }

  // If configuring, show quiz setup screen
  if (isConfiguring) {
    return (
      <div className="mx-auto w-full max-w-3xl">
        <QuizSetup entries={entries} onStartQuiz={onStartQuiz} />
      </div>
    )
  }

  // Show results
  if (isComplete) {
    const correctAnswers = results.filter(r => r.isCorrect).length
    const score = Math.round((correctAnswers / results.length) * 100)

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mx-auto w-full max-w-3xl"
      >
        <div className="bg-card rounded-lg p-6 shadow-md">
          <h2 className="mb-4 text-center text-2xl font-bold">Quiz Results</h2>

          <div className="mb-6 text-center">
            <p className="text-lg">
              You scored <span className="font-bold">{correctAnswers}</span> out
              of <span className="font-bold">{results.length}</span> questions
            </p>
            <p className="mt-2 text-2xl font-bold">{score}%</p>
            <Progress
              value={score}
              className={cn(
                "mt-2 h-4",
                score >= 80
                  ? "bg-green-500/20"
                  : score >= 60
                    ? "bg-yellow-500/20"
                    : "bg-red-500/20"
              )}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Question Summary:</h3>
            {results.map((result, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center rounded border p-3",
                  result.isCorrect
                    ? "border-green-500 bg-green-50"
                    : "border-red-500 bg-red-50"
                )}
              >
                <div className="mr-3">
                  {result.isCorrect ? (
                    <CheckCircle className="size-6 text-green-500" />
                  ) : (
                    <XCircle className="size-6 text-red-500" />
                  )}
                </div>

                <div className="flex-1">
                  <p className="font-medium">{result.question.kanglish}</p>
                  <div className="mt-2 flex gap-2">
                    <div className="flex items-center">
                      <span className="mr-2 text-sm">Correct:</span>
                      {result.correctOption && (
                        <div className="size-8 overflow-hidden rounded-full border border-green-500">
                          <Image
                            src={result.correctOption}
                            alt="Correct option"
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>

                    {!result.isCorrect && result.selectedOption && (
                      <div className="flex items-center">
                        <span className="mr-2 text-sm">Your choice:</span>
                        <div className="size-8 overflow-hidden rounded-full border border-red-500">
                          <Image
                            src={result.selectedOption}
                            alt="Your choice"
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <Button
              onClick={backToSetup}
              variant="outline"
              className="flex items-center"
            >
              <ArrowLeft className="mr-2 size-4" />
              Back to Setup
            </Button>

            <Button onClick={handleStartQuiz} className="flex items-center">
              Try Again
            </Button>
          </div>
        </div>
      </motion.div>
    )
  }

  // If quiz is in progress
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-muted-foreground text-sm">
            Question {currentQuestionIndex + 1} of {quizQuestions.length}
          </p>
          <Progress
            value={(currentQuestionIndex / quizQuestions.length) * 100}
            className="mt-1 h-2 w-32"
          />
        </div>

        <div className="flex items-center">
          <Timer className="text-muted-foreground mr-1 size-4" />
          <span
            className={cn(
              "font-mono text-sm",
              timer <= 5 ? "font-bold text-red-500" : "text-muted-foreground"
            )}
          >
            {timer}s
          </span>
        </div>
      </div>

      {quizQuestions.length > 0 &&
        currentQuestionIndex < quizQuestions.length && (
          <div className="bg-card rounded-lg p-6 shadow-md">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <h2 className="mb-2 text-center text-xl font-bold">
                {quizQuestions[currentQuestionIndex].question.kanglish ||
                  quizQuestions[currentQuestionIndex].question.english ||
                  "Question"}
              </h2>
              <p className="text-muted-foreground text-center">
                Select the matching icon
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {quizQuestions[currentQuestionIndex].options.map(
                (option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={answeredQuestion}
                    onClick={() =>
                      handleSelectOption(option.icon, option.isCorrect)
                    }
                    className={cn(
                      "hover:border-primary flex flex-col items-center justify-center rounded-lg border-2 p-4 transition-all",
                      answeredQuestion && option.isCorrect
                        ? "border-green-500 bg-green-50"
                        : answeredQuestion && option.icon === selectedOption
                          ? "border-red-500 bg-red-50"
                          : answeredQuestion
                            ? "opacity-50"
                            : "border-muted"
                    )}
                    style={{ minHeight: "120px" }}
                  >
                    {option.icon ? (
                      <Image
                        src={option.icon}
                        alt="option"
                        width={64}
                        height={64}
                        className="object-contain"
                        onError={e => {
                          // Fallback if image doesn't load
                          const target = e.target as HTMLImageElement
                          target.src = "/images/placeholder.png" // Make sure you have this placeholder
                          target.onerror = null // Prevent infinite error loop
                        }}
                      />
                    ) : (
                      <div className="bg-muted flex size-16 items-center justify-center rounded-md">
                        <span className="text-muted-foreground text-xs">
                          No image
                        </span>
                      </div>
                    )}
                  </motion.button>
                )
              )}
            </div>

            {answeredQuestion && (
              <div className="text-muted-foreground mt-6 text-center">
                <p>Moving to next question...</p>
              </div>
            )}
          </div>
        )}
    </div>
  )
}
