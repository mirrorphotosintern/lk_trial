/**
 * @description
 * This component renders interactive quiz games for learning Kannada, supporting three types:
 * matching (word-to-icon), multiple-choice (audio-to-word), and sequence (sentence ordering).
 * It adjusts difficulty based on user progress and provides visual/audio feedback.
 *
 * Key features:
 * - Dynamic Difficulty: Scales options (2-4) based on stars earned.
 * - Quiz Types: Matching, multiple-choice, and sequence with unique interactions.
 * - Feedback: Visual animations and sounds for correct/incorrect answers.
 * - Progress Saving: Updates DB via server action on quiz completion.
 *
 * @dependencies
 * - Framer Motion: For drag-and-drop and feedback animations.
 * - Lucide-react: For icons like Play and Check.
 * - Sonner: For toast notifications (feedback).
 * - Server Actions: For saving progress.
 *
 * @notes
 * - Timer is optional (30s default) and forgiving (no penalty).
 * - Audio playback requires browser support; falls back to text if unavailable.
 * - Progress is saved only on successful completion.
 */

"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { saveProgressAction } from "@/actions/db/progress-actions"
import { saveQuizResultAction } from "@/actions/db/quiz-results-actions"
import { KannadaEntry } from "@/types/kannada-types"
import { cn } from "@/lib/utils"
import { recordWordAttemptAction } from "@/actions/db/word-stats-actions"
import { Timer, CheckCircle, XCircle } from "lucide-react"

// Constants
const QUESTION_TIME = 30; // Time per question in seconds
const QUESTIONS_PER_QUIZ = 10 // questions per quiz

// Props for the component
interface QuizComponentProps {
  entries: KannadaEntry[] // Array of Kannada entries from CSV
}

// Sound effects with fallback handling
const loadSound = (path: string) => {
  const audio = new Audio(path);
  
  // Add error handling to prevent issues if sound file doesn't exist
  audio.addEventListener('error', () => {
    console.warn(`Failed to load sound: ${path}`);
  });
  
  return {
    play: () => {
      // Only try to play if the browser supports audio
      if (typeof window !== 'undefined' && window.Audio) {
        audio.currentTime = 0; // Reset to start
        return audio.play().catch(err => {
          console.warn(`Failed to play sound: ${err.message}`);
        });
      }
      return Promise.resolve();
    }
  };
};

const correctSound = loadSound("/sounds/correct.mp3");
const incorrectSound = loadSound("/sounds/incorrect.mp3");
const finishSound = loadSound("/sounds/finish.mp3");

type QuizResult = {
  question: KannadaEntry
  isCorrect: boolean
  selectedOption: string
}

export default function QuizComponent({ entries }: QuizComponentProps) {
  // State for quiz management
  const [isStarted, setIsStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [quizQuestions, setQuizQuestions] = useState<{
    question: KannadaEntry,
    options: { text: string, isCorrect: boolean }[]
  }[]>([])
  const [timer, setTimer] = useState(QUESTION_TIME)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [results, setResults] = useState<QuizResult[]>([])
  const [isComplete, setIsComplete] = useState(false)
  const [answeredQuestion, setAnsweredQuestion] = useState(false)
  
  // Add additional state to track when to save results
  const [shouldSaveResults, setShouldSaveResults] = useState(false)

  // Initialize the quiz
  useEffect(() => {
    if (isStarted && quizQuestions.length === 0) {
      // Shuffle entries
      const shuffled = [...entries].sort(() => Math.random() - 0.5);
      const quizEntries = shuffled.slice(0, QUESTIONS_PER_QUIZ); // Take 10 random entries for the quiz
      
      // Create quiz questions
      const questions = quizEntries.map(entry => {
        // Get incorrect options (3 other entries)
        const otherOptions = shuffled
          .filter(e => e.english !== entry.english)
          .slice(0, 3)
          .map(e => ({ text: e.english || "Unknown", isCorrect: false }));
        
        // Add correct option
        const correctOption = { text: entry.english || "Unknown", isCorrect: true };
        
        // Shuffle all options
        const options = [correctOption, ...otherOptions].sort(() => Math.random() - 0.5);
        
        return {
          question: entry,
          options
        };
      });
      
      setQuizQuestions(questions);
    }
  }, [isStarted, entries, quizQuestions.length]);
  
  // Timer countdown
  useEffect(() => {
    if (!isStarted || isComplete || answeredQuestion || !quizQuestions.length) return;
    
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [isStarted, isComplete, answeredQuestion, quizQuestions]);
  
  // Handle quiz timeout
  const handleTimeout = () => {
    if (answeredQuestion) return;
    
    setAnsweredQuestion(true);
    
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const correctOption = currentQuestion.options.find(opt => opt.isCorrect)?.text || "";
    
    // Add to results
    setResults(prev => [
      ...prev,
      {
        question: currentQuestion.question,
        isCorrect: false,
        selectedOption: correctOption
      }
    ]);
    
    toast.error("Time's up!")
    incorrectSound?.play()
    
    moveToNextQuestion();
  }

  // Handle user selection
  const handleSelectOption = async (option: string, isCorrect: boolean) => {
    if (answeredQuestion) return
    
    setSelectedOption(option)
    setAnsweredQuestion(true)
    
    const currentQuestion = quizQuestions[currentQuestionIndex]
    
    // Add to results
    setResults(prev => [
      ...prev,
      {
        question: currentQuestion.question,
        isCorrect: isCorrect,
        selectedOption: option
      }
    ])
    
    // Record word attempt but don't await - fire and forget to avoid blocking
    if (currentQuestion?.question) {
      // Use a fire-and-forget pattern for non-critical stats tracking
      (async () => {
        try {
          await recordWordAttemptAction(
            currentQuestion.question.english || "",
            currentQuestion.question.kanglish || "",
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
    
    // Wait before moving to next question
    setTimeout(() => {
      moveToNextQuestion()
    }, 1000)
  }

  // Use an effect to handle saving results outside of render
  useEffect(() => {
    if (shouldSaveResults && isComplete) {
      const correctAnswers = results.filter(r => r.isCorrect).length;
      
      // Save quiz result
      const saveResults = async () => {
        try {
          // Save detailed quiz result
          await saveQuizResultAction({
            quizType: "standard",
            score: correctAnswers,
            totalQuestions: quizQuestions.length
          });
          
          // Save progress
          await saveProgressAction({
            stars: Math.ceil(correctAnswers / 2), // 1 star per 2 correct answers
            wordsLearned: correctAnswers,
            quizzesPlayed: 1
          });
        } catch (error) {
          console.error("Failed to save quiz data:", error);
        }
      };
      
      saveResults();
      
      // Reset the flag to prevent multiple saves
      setShouldSaveResults(false);
    }
  }, [shouldSaveResults, isComplete, results, quizQuestions.length]);

  // Move to next question or end quiz
  const moveToNextQuestion = () => {
    if (currentQuestionIndex + 1 >= quizQuestions.length) {
      // End of quiz - use the separate function to handle completion
      completeQuiz()
      return
    }
    
    // Move to next question
    setCurrentQuestionIndex(prev => prev + 1)
    setTimer(QUESTION_TIME)
    setAnsweredQuestion(false)
    setSelectedOption(null)
  }

  // Start the quiz
  const handleStartQuiz = () => {
    setIsStarted(true)
    setIsComplete(false)
    setCurrentQuestionIndex(0)
    setResults([])
    setQuizQuestions([])
    setTimer(QUESTION_TIME)
    setAnsweredQuestion(false)
    setSelectedOption(null)
  }

  // Add the completeQuiz function back
  // Update the completeQuiz function to just set state flags
  const completeQuiz = () => {
    if (finishSound) finishSound.play();
    setIsComplete(true);
    setIsStarted(false);
    // Set flag to trigger the effect that saves results
    setShouldSaveResults(true);
  };

  // Render start screen
  if (!isStarted && !isComplete) {
    return (
      <div className="flex flex-col items-center justify-center space-y-6 p-6 text-center">
        <h1 className="text-2xl font-bold">Kannada Vocabulary Quiz</h1>
        <p className="text-muted-foreground">
          Test your Kannada vocabulary knowledge!
        </p>
        <button 
          onClick={handleStartQuiz}
          className="rounded-lg bg-primary px-6 py-3 text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Start Quiz
        </button>
      </div>
    )
  }

  // Render quiz results
  if (isComplete) {
    const correctAnswers = results.filter(r => r.isCorrect).length
    const score = Math.round((correctAnswers / results.length) * 100)
    
    return (
      <div className="space-y-6 p-4">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold">Quiz Results</h2>
          <p className="text-xl">
            You got {correctAnswers} out of {results.length} correct ({score}%)
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {results.map((result, index) => (
            <div 
              key={index}
              className={cn(
                "rounded-lg p-4 shadow transition-colors",
                result.isCorrect ? "bg-green-50" : "bg-red-50"
              )}
            >
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  {result.question.icon && (
                    <img 
                      src={result.question.icon} 
                      alt="Icon" 
                      className="h-12 w-12 object-contain"
                    />
                  )}
                </div>
                <div>
                  <p className={cn(
                    "font-medium",
                    result.isCorrect ? "text-green-700" : "text-red-700"
                  )}>
                    {result.question.kanglish}
                  </p>
                  <p className="text-sm">
                    {result.isCorrect ? (
                      <span className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4" />
                        Correct: {result.selectedOption}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <XCircle className="h-4 w-4" />
                        Wrong: {result.selectedOption}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <button
            onClick={handleStartQuiz}
            className="rounded-lg bg-primary px-6 py-3 text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Play Again
          </button>
        </div>
      </div>
    )
  }

  // Get current question
  const currentQuestion = quizQuestions[currentQuestionIndex]
  
  // If no questions yet, show loading
  if (!currentQuestion) {
    return (
      <div className="flex h-[300px] items-center justify-center">
        <p>Preparing quiz questions...</p>
      </div>
    )
  }

  // Render active quiz
  return (
    <div className="space-y-6 p-4">
      {/* Progress tracker */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Question {currentQuestionIndex + 1} of {quizQuestions.length}
        </p>
        <div className="flex items-center gap-1">
          <Timer className="h-4 w-4" />
          <span className={cn(
            "text-sm", 
            timer <= 5 ? "text-red-500 font-bold" : ""
          )}>
            {timer}s
          </span>
        </div>
      </div>
      
      {/* Question display */}
      <div className="text-center">
        <div className="mb-4">
          {currentQuestion.question.icon && (
            <img 
              src={currentQuestion.question.icon}
              alt={currentQuestion.question.english || "Question"}
              className="mx-auto h-24 w-24 object-contain"
            />
          )}
        </div>
        
        <h2 className="mb-2 text-2xl font-bold">
          {currentQuestion.question.kanglish}
        </h2>
        
        {currentQuestion.question.kannada && (
          <p className="text-lg" lang="kn">
            {currentQuestion.question.kannada}
          </p>
        )}
      </div>
      
      {/* Answer options */}
      <div className="grid grid-cols-1 gap-3">
        {currentQuestion.options.map((option, idx) => (
          <motion.button
            key={idx}
            onClick={() => handleSelectOption(option.text, option.isCorrect)}
            disabled={answeredQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={cn(
              "p-4 rounded-lg border-2 text-left transition-all",
              answeredQuestion && option.isCorrect 
                ? "border-green-500 bg-green-50" 
                : answeredQuestion && selectedOption === option.text && !option.isCorrect
                  ? "border-red-500 bg-red-50"
                  : answeredQuestion
                    ? "border-transparent opacity-50"
                    : "border-border hover:border-primary hover:bg-accent/50"
            )}
          >
            {option.text}
            {answeredQuestion && option.isCorrect && (
              <CheckCircle className="ml-2 inline h-5 w-5 text-green-500" />
            )}
            {answeredQuestion && selectedOption === option.text && !option.isCorrect && (
              <XCircle className="ml-2 inline h-5 w-5 text-red-500" />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  )
}