"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { SelectSurveyResponse } from "@/db/schema"
import {
  SurveyStep1Data,
  SurveyStep2Data,
  SurveyStep3Data,
  SurveyProgress
} from "@/types"
import {
  createSurveyResponseAction,
  updateSurveyStepAction,
  completeSurveyAction
} from "@/actions/db/survey-actions"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import SurveyStep1 from "./survey-step-1"
import SurveyStep2 from "./survey-step-2"
import SurveyStep3 from "./survey-step-3"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"

interface SurveyContainerProps {
  userId: string
  existingData: SelectSurveyResponse | null
}

export default function SurveyContainer({
  userId,
  existingData
}: SurveyContainerProps) {
  const router = useRouter()
  const { toast } = useToast()

  const [progress, setProgress] = useState<SurveyProgress>({
    currentStep: 1,
    step1Completed: existingData?.step1Completed || false,
    step2Completed: existingData?.step2Completed || false,
    step3Completed: existingData?.step3Completed || false,
    isCompleted: existingData?.isCompleted || false
  })

  const [step1Data, setStep1Data] = useState<Partial<SurveyStep1Data>>({
    goal: existingData?.goal || undefined,
    goalOther: existingData?.goalOther || "",
    timeHorizon: existingData?.timeHorizon || undefined,
    role: existingData?.role || undefined,
    ageBand: existingData?.ageBand || undefined
  })

  const [step2Data, setStep2Data] = useState<Partial<SurveyStep2Data>>({
    motherTongue: existingData?.motherTongue || "",
    readingLevel: existingData?.readingLevel || undefined,
    exposure: existingData?.exposure || undefined,
    formatQuickQuizzes: existingData?.formatQuickQuizzes || false,
    formatStoryMode: existingData?.formatStoryMode || false,
    formatTraceLetter: existingData?.formatTraceLetter || false,
    formatSpeakingPractice: existingData?.formatSpeakingPractice || false,
    formatLeaderboard: existingData?.formatLeaderboard || false,
    sessionLength: existingData?.sessionLength || undefined
  })

  const [step3Data, setStep3Data] = useState<Partial<SurveyStep3Data>>({
    calendarOptIn: existingData?.calendarOptIn || undefined,
    calendarEmail: existingData?.calendarEmail || "",
    calendarTimeOfDay: existingData?.calendarTimeOfDay || "",
    notificationMobilePush: existingData?.notificationMobilePush || false,
    notificationEmailDigest: existingData?.notificationEmailDigest || false,
    notificationWhatsapp: existingData?.notificationWhatsapp || false,
    notificationNone: existingData?.notificationNone || false,
    referralSource: existingData?.referralSource || undefined,
    referralOther: existingData?.referralOther || "",
    earlyTester: existingData?.earlyTester || undefined
  })

  const [isLoading, setIsLoading] = useState(false)
  const [forceValidation, setForceValidation] = useState(0)

  // Force revalidation when data changes
  useEffect(() => {
    setForceValidation(prev => prev + 1)
  }, [step1Data, step2Data, step3Data])

  // Enhanced step data change handlers with logging
  const handleStep1Change = (newData: Partial<SurveyStep1Data>) => {
    console.log(
      "Survey Container: Step 1 data changing from:",
      step1Data,
      "to:",
      newData
    )
    setStep1Data(newData)
  }

  const handleStep2Change = (newData: Partial<SurveyStep2Data>) => {
    console.log(
      "Survey Container: Step 2 data changing from:",
      step2Data,
      "to:",
      newData
    )
    setStep2Data(newData)
  }

  const handleStep3Change = (newData: Partial<SurveyStep3Data>) => {
    console.log(
      "Survey Container: Step 3 data changing from:",
      step3Data,
      "to:",
      newData
    )
    setStep3Data(newData)
  }

  useEffect(() => {
    if (progress.isCompleted) {
      toast({
        title: "Survey completed",
        description: "You've already completed the survey!"
      })
      router.push("/learn")
    }
  }, [progress.isCompleted, router, toast])

  const progressPercentage = ((progress.currentStep - 1) / 3) * 100

  const isStep1Valid = () => {
    const hasGoal = !!step1Data.goal
    const hasTimeHorizon = !!step1Data.timeHorizon
    const hasRole = !!step1Data.role
    const hasAgeBand = !!step1Data.ageBand
    const goalOtherValid = step1Data.goal !== "other" || !!step1Data.goalOther

    const isValid =
      hasGoal && hasTimeHorizon && hasRole && hasAgeBand && goalOtherValid

    // Debug logging to help identify missing fields
    if (progress.currentStep === 1) {
      console.log("Step 1 Validation Debug:", {
        goal: step1Data.goal,
        hasGoal,
        timeHorizon: step1Data.timeHorizon,
        hasTimeHorizon,
        role: step1Data.role,
        hasRole,
        ageBand: step1Data.ageBand,
        hasAgeBand,
        goalOther: step1Data.goalOther,
        goalOtherValid: goalOtherValid,
        isValid
      })
    }

    return isValid
  }

  const isStep2Valid = () => {
    const hasMotherTongue = !!step2Data.motherTongue
    const hasReadingLevel = !!step2Data.readingLevel
    const hasExposure = !!step2Data.exposure
    const hasSessionLength = !!step2Data.sessionLength
    const hasAtLeastOneFormat = !!(
      step2Data.formatQuickQuizzes ||
      step2Data.formatStoryMode ||
      step2Data.formatTraceLetter ||
      step2Data.formatSpeakingPractice ||
      step2Data.formatLeaderboard
    )

    const isValid =
      hasMotherTongue &&
      hasReadingLevel &&
      hasExposure &&
      hasSessionLength &&
      hasAtLeastOneFormat

    // Debug logging to help identify missing fields
    if (progress.currentStep === 2) {
      console.log("Step 2 Validation Debug:", {
        motherTongue: step2Data.motherTongue,
        hasMotherTongue,
        readingLevel: step2Data.readingLevel,
        hasReadingLevel,
        exposure: step2Data.exposure,
        hasExposure,
        sessionLength: step2Data.sessionLength,
        hasSessionLength,
        formatPreferences: {
          quickQuizzes: step2Data.formatQuickQuizzes,
          storyMode: step2Data.formatStoryMode,
          traceLetter: step2Data.formatTraceLetter,
          speakingPractice: step2Data.formatSpeakingPractice,
          leaderboard: step2Data.formatLeaderboard
        },
        hasAtLeastOneFormat,
        isValid
      })
    }

    return isValid
  }

  const isStep3Valid = () => {
    return (
      step3Data.calendarOptIn &&
      step3Data.referralSource &&
      step3Data.earlyTester &&
      (step3Data.referralSource !== "other" || step3Data.referralOther) &&
      (step3Data.calendarOptIn !== "yes_send_invite" ||
        step3Data.calendarEmail) &&
      (step3Data.notificationMobilePush ||
        step3Data.notificationEmailDigest ||
        step3Data.notificationWhatsapp ||
        step3Data.notificationNone)
    )
  }

  const handleNext = async () => {
    if (isLoading) return
    setIsLoading(true)

    try {
      if (progress.currentStep === 1 && isStep1Valid()) {
        let result
        if (!existingData) {
          result = await createSurveyResponseAction({
            userId,
            ...(step1Data as SurveyStep1Data)
          })
        } else {
          result = await updateSurveyStepAction(userId, 1, step1Data)
        }

        if (result.isSuccess) {
          setProgress(prev => ({
            ...prev,
            currentStep: 2,
            step1Completed: true
          }))
        } else {
          throw new Error(result.message)
        }
      } else if (progress.currentStep === 2 && isStep2Valid()) {
        const result = await updateSurveyStepAction(userId, 2, step2Data)
        if (result.isSuccess) {
          setProgress(prev => ({
            ...prev,
            currentStep: 3,
            step2Completed: true
          }))
        } else {
          throw new Error(result.message)
        }
      } else if (progress.currentStep === 3 && isStep3Valid()) {
        const stepResult = await updateSurveyStepAction(userId, 3, step3Data)
        if (!stepResult.isSuccess) {
          throw new Error(stepResult.message)
        }

        const completeResult = await completeSurveyAction(userId)
        if (!completeResult.isSuccess) {
          throw new Error(completeResult.message)
        }

        toast({
          title: "Survey completed! 🎉",
          description: "Thank you for helping us personalize your experience!"
        })

        router.push("/learn")
      }
    } catch (error) {
      console.error("Survey error:", error)
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to save survey data. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleBack = () => {
    if (progress.currentStep > 1) {
      setProgress(prev => ({
        ...prev,
        currentStep: (prev.currentStep - 1) as 1 | 2 | 3
      }))
    }
  }

  const getCurrentStepValid = () => {
    switch (progress.currentStep) {
      case 1:
        return isStep1Valid()
      case 2:
        return isStep2Valid()
      case 3:
        return isStep3Valid()
      default:
        return false
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">
            Step {progress.currentStep} of 3
          </CardTitle>
          <div className="text-muted-foreground text-sm">
            {Math.round(progressPercentage)}% Complete
          </div>
        </div>

        <Progress value={progressPercentage} className="w-full" />
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Debug Panel - Remove after fixing */}
        {process.env.NODE_ENV === "development" && (
          <div className="mb-4 rounded border border-yellow-500 bg-yellow-50 p-3 text-sm dark:bg-yellow-950">
            <div className="font-semibold">Debug Info:</div>
            <div>Current Step: {progress.currentStep}</div>
            <div>Step Valid: {getCurrentStepValid() ? "✅ YES" : "❌ NO"}</div>
            {progress.currentStep === 1 && (
              <div>
                <div>Goal: {step1Data.goal || "❌ Not set"}</div>
                <div>Time Horizon: {step1Data.timeHorizon || "❌ Not set"}</div>
                <div>Role: {step1Data.role || "❌ Not set"}</div>
                <div>Age Band: {step1Data.ageBand || "❌ Not set"}</div>
              </div>
            )}
            {progress.currentStep === 2 && (
              <div>
                <div>
                  Mother Tongue: {step2Data.motherTongue || "❌ Not set"}
                </div>
                <div>
                  Reading Level: {step2Data.readingLevel || "❌ Not set"}
                </div>
                <div>Exposure: {step2Data.exposure || "❌ Not set"}</div>
                <div>
                  Session Length: {step2Data.sessionLength || "❌ Not set"}
                </div>
                <div>
                  Format Preferences:{" "}
                  {[
                    step2Data.formatQuickQuizzes && "Quick Quizzes",
                    step2Data.formatStoryMode && "Story Mode",
                    step2Data.formatTraceLetter && "Trace Letter",
                    step2Data.formatSpeakingPractice && "Speaking Practice",
                    step2Data.formatLeaderboard && "Leaderboard"
                  ]
                    .filter(Boolean)
                    .join(", ") || "❌ None selected"}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="min-h-96">
          {progress.currentStep === 1 && (
            <SurveyStep1 data={step1Data} onChange={handleStep1Change} />
          )}

          {progress.currentStep === 2 && (
            <SurveyStep2 data={step2Data} onChange={handleStep2Change} />
          )}

          {progress.currentStep === 3 && (
            <SurveyStep3 data={step3Data} onChange={handleStep3Change} />
          )}
        </div>

        <div className="bg-background mt-8 border-t pt-6">
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={progress.currentStep === 1 || isLoading}
            >
              <ArrowLeft className="mr-2 size-4" />
              Back
            </Button>

            <Button
              onClick={handleNext}
              disabled={!getCurrentStepValid() || isLoading}
            >
              {isLoading ? (
                "Saving..."
              ) : progress.currentStep === 3 ? (
                <>
                  Complete Survey
                  <CheckCircle className="ml-2 size-4" />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="ml-2 size-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
