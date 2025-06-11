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
import { createBatchQuestionResponsesAction } from "@/actions/db/question-responses-actions"
import { InsertQuestionResponse } from "@/db/schema/question-responses-schema"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { useUser } from "@clerk/nextjs"
import SurveyStep1 from "./survey-step-1"
import SurveyStep2 from "./survey-step-2"
import SurveyStep3 from "./survey-step-3"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"

interface SurveyContainerProps {
  userId: string
  existingData: SelectSurveyResponse | null
  userEmail?: string
}

export default function SurveyContainer({
  userId,
  existingData,
  userEmail: initialUserEmail
}: SurveyContainerProps) {
  const router = useRouter()
  const { toast } = useToast()
  const { user } = useUser()
  const [userEmail, setUserEmail] = useState(initialUserEmail || "")

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
      (step3Data.calendarOptIn !== "yes_send_invite" || step3Data.calendarEmail)
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
          // Save individual question responses to database
          try {
            const questionResponses = createQuestionResponses(
              1,
              step1Data as SurveyStep1Data,
              result.data?.id
            )
            const questionResult =
              await createBatchQuestionResponsesAction(questionResponses)
            if (questionResult.isSuccess) {
              console.log(
                `[Question Responses] Step 1: ${questionResult.data?.length} responses saved`
              )
            } else {
              console.warn(
                `[Question Responses] Step 1 failed:`,
                questionResult.message
              )
            }
          } catch (questionError) {
            console.warn(`[Question Responses] Step 1 error:`, questionError)
            // Don't fail the entire operation if question responses fail
          }

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
          // Save individual question responses to database
          try {
            const questionResponses = createQuestionResponses(
              2,
              step2Data as SurveyStep2Data,
              existingData?.id
            )
            const questionResult =
              await createBatchQuestionResponsesAction(questionResponses)
            if (questionResult.isSuccess) {
              console.log(
                `[Question Responses] Step 2: ${questionResult.data?.length} responses saved`
              )
            } else {
              console.warn(
                `[Question Responses] Step 2 failed:`,
                questionResult.message
              )
            }
          } catch (questionError) {
            console.warn(`[Question Responses] Step 2 error:`, questionError)
            // Don't fail the entire operation if question responses fail
          }

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

        // Save step 3 individual question responses to database
        try {
          const questionResponses = createQuestionResponses(
            3,
            step3Data as SurveyStep3Data,
            existingData?.id
          )
          const questionResult =
            await createBatchQuestionResponsesAction(questionResponses)
          if (questionResult.isSuccess) {
            console.log(
              `[Question Responses] Step 3: ${questionResult.data?.length} responses saved`
            )
          } else {
            console.warn(
              `[Question Responses] Step 3 failed:`,
              questionResult.message
            )
          }
        } catch (questionError) {
          console.warn(`[Question Responses] Step 3 error:`, questionError)
          // Don't fail the entire operation if question responses fail
        }

        // Save all question responses for complete survey
        try {
          const allQuestionResponses = [
            ...createQuestionResponses(
              1,
              step1Data as SurveyStep1Data,
              existingData?.id
            ),
            ...createQuestionResponses(
              2,
              step2Data as SurveyStep2Data,
              existingData?.id
            ),
            ...createQuestionResponses(
              3,
              step3Data as SurveyStep3Data,
              existingData?.id
            )
          ]
          console.log(
            `[Question Responses] Complete survey: ${allQuestionResponses.length} total responses tracked`
          )
        } catch (questionError) {
          console.warn(
            `[Question Responses] Complete survey logging error:`,
            questionError
          )
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

  // Auto-fill user email from Clerk when available
  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress && !userEmail) {
      setUserEmail(user.primaryEmailAddress.emailAddress)
    }
  }, [user, userEmail])

  // Auto-fill calendar email when user email is available and calendar opt-in is selected
  useEffect(() => {
    if (
      userEmail &&
      step3Data.calendarOptIn === "yes_send_invite" &&
      !step3Data.calendarEmail
    ) {
      setStep3Data(prev => ({ ...prev, calendarEmail: userEmail }))
    }
  }, [userEmail, step3Data.calendarOptIn, step3Data.calendarEmail])

  // Helper function to convert step data to question responses
  const createQuestionResponses = (
    stepNumber: number,
    stepData: any,
    surveyResponseId?: string
  ): InsertQuestionResponse[] => {
    const responses: InsertQuestionResponse[] = []
    let responseOrder = 1

    if (stepNumber === 1) {
      const data = stepData as SurveyStep1Data

      if (data.goal) {
        responses.push({
          userId,
          surveyResponseId,
          stepNumber: 1,
          questionId: "primary_goal",
          questionText: "What is your primary goal for learning Kannada?",
          answerValue: data.goal,
          answerText: getGoalText(data.goal),
          answerData: { goal: data.goal, goalOther: data.goalOther },
          responseOrder: responseOrder++,
          isRequired: true
        })
      }

      if (data.timeHorizon) {
        responses.push({
          userId,
          surveyResponseId,
          stepNumber: 1,
          questionId: "time_horizon",
          questionText: "When do you want to achieve this goal?",
          answerValue: data.timeHorizon,
          answerText: getTimeHorizonText(data.timeHorizon),
          answerData: { timeHorizon: data.timeHorizon },
          responseOrder: responseOrder++,
          isRequired: true
        })
      }

      if (data.role) {
        responses.push({
          userId,
          surveyResponseId,
          stepNumber: 1,
          questionId: "learner_role",
          questionText: "Who is this for?",
          answerValue: data.role,
          answerText: getRoleText(data.role),
          answerData: { role: data.role },
          responseOrder: responseOrder++,
          isRequired: true
        })
      }

      if (data.ageBand) {
        responses.push({
          userId,
          surveyResponseId,
          stepNumber: 1,
          questionId: "age_band",
          questionText: "What is the age range?",
          answerValue: data.ageBand,
          answerText: getAgeBandText(data.ageBand),
          answerData: { ageBand: data.ageBand },
          responseOrder: responseOrder++,
          isRequired: true
        })
      }
    } else if (stepNumber === 2) {
      const data = stepData as SurveyStep2Data

      if (data.motherTongue) {
        responses.push({
          userId,
          surveyResponseId,
          stepNumber: 2,
          questionId: "mother_tongue",
          questionText: "What is your mother tongue?",
          answerValue: data.motherTongue,
          answerText: data.motherTongue,
          answerData: { motherTongue: data.motherTongue },
          responseOrder: responseOrder++,
          isRequired: true
        })
      }

      if (data.readingLevel) {
        responses.push({
          userId,
          surveyResponseId,
          stepNumber: 2,
          questionId: "reading_level",
          questionText: "How well can you read Kannada?",
          answerValue: data.readingLevel,
          answerText: getReadingLevelText(data.readingLevel),
          answerData: { readingLevel: data.readingLevel },
          responseOrder: responseOrder++,
          isRequired: true
        })
      }

      if (data.exposure) {
        responses.push({
          userId,
          surveyResponseId,
          stepNumber: 2,
          questionId: "kannada_exposure",
          questionText: "How often do you currently hear or speak Kannada?",
          answerValue: data.exposure,
          answerText: getExposureText(data.exposure),
          answerData: { exposure: data.exposure },
          responseOrder: responseOrder++,
          isRequired: true
        })
      }

      // Learning format preferences
      const formats = []
      if (data.formatQuickQuizzes) formats.push("Quick Quizzes")
      if (data.formatStoryMode) formats.push("Story Mode")
      if (data.formatTraceLetter) formats.push("Trace Letters")
      if (data.formatSpeakingPractice) formats.push("Speaking Practice")
      if (data.formatLeaderboard) formats.push("Leaderboard")

      if (formats.length > 0) {
        responses.push({
          userId,
          surveyResponseId,
          stepNumber: 2,
          questionId: "learning_formats",
          questionText: "Which learning formats interest you most?",
          answerValue: formats.join(", "),
          answerText: formats.join(", "),
          answerData: {
            formatQuickQuizzes: data.formatQuickQuizzes,
            formatStoryMode: data.formatStoryMode,
            formatTraceLetter: data.formatTraceLetter,
            formatSpeakingPractice: data.formatSpeakingPractice,
            formatLeaderboard: data.formatLeaderboard
          },
          responseOrder: responseOrder++,
          isRequired: true
        })
      }

      if (data.sessionLength) {
        responses.push({
          userId,
          surveyResponseId,
          stepNumber: 2,
          questionId: "session_length",
          questionText: "How long would you like each learning session to be?",
          answerValue: data.sessionLength,
          answerText: getSessionLengthText(data.sessionLength),
          answerData: { sessionLength: data.sessionLength },
          responseOrder: responseOrder++,
          isRequired: true
        })
      }
    } else if (stepNumber === 3) {
      const data = stepData as SurveyStep3Data

      if (data.calendarOptIn) {
        responses.push({
          userId,
          surveyResponseId,
          stepNumber: 3,
          questionId: "calendar_invite",
          questionText:
            "Would you like us to send you a calendar invite for your learning sessions?",
          answerValue: data.calendarOptIn,
          answerText: getCalendarOptInText(data.calendarOptIn),
          answerData: {
            calendarOptIn: data.calendarOptIn,
            calendarEmail: data.calendarEmail,
            calendarTimeOfDay: data.calendarTimeOfDay
          },
          responseOrder: responseOrder++,
          isRequired: true
        })
      }

      // Notification preferences
      const notifications = []
      if (data.notificationMobilePush) notifications.push("Mobile Push")
      if (data.notificationEmailDigest) notifications.push("Email Digest")
      if (data.notificationWhatsapp) notifications.push("WhatsApp")
      if (data.notificationNone) notifications.push("None")

      if (notifications.length > 0) {
        responses.push({
          userId,
          surveyResponseId,
          stepNumber: 3,
          questionId: "notification_preferences",
          questionText: "How would you like to receive reminders and updates?",
          answerValue: notifications.join(", "),
          answerText: notifications.join(", "),
          answerData: {
            notificationMobilePush: data.notificationMobilePush,
            notificationEmailDigest: data.notificationEmailDigest,
            notificationWhatsapp: data.notificationWhatsapp,
            notificationNone: data.notificationNone
          },
          responseOrder: responseOrder++,
          isRequired: false
        })
      }

      if (data.referralSource) {
        responses.push({
          userId,
          surveyResponseId,
          stepNumber: 3,
          questionId: "referral_source",
          questionText: "How did you hear about this app?",
          answerValue: data.referralSource,
          answerText: getReferralSourceText(data.referralSource),
          answerData: {
            referralSource: data.referralSource,
            referralOther: data.referralOther
          },
          responseOrder: responseOrder++,
          isRequired: true
        })
      }

      if (data.earlyTester) {
        responses.push({
          userId,
          surveyResponseId,
          stepNumber: 3,
          questionId: "early_tester",
          questionText:
            "Would you like to be an early tester for new features?",
          answerValue: data.earlyTester,
          answerText: getEarlyTesterText(data.earlyTester),
          answerData: { earlyTester: data.earlyTester },
          responseOrder: responseOrder++,
          isRequired: true
        })
      }
    }

    return responses
  }

  // Helper functions to convert enum values to readable text
  const getGoalText = (goal: string) => {
    const goalTexts: Record<string, string> = {
      daily_conversation: "Daily conversation",
      heritage_language: "Connect with heritage",
      school_curriculum: "School curriculum",
      workplace_need: "Workplace communication",
      travel: "Travel preparation",
      other: "Other"
    }
    return goalTexts[goal] || goal
  }

  const getTimeHorizonText = (timeHorizon: string) => {
    const timeTexts: Record<string, string> = {
      less_than_1_month: "Less than 1 month",
      "1_to_3_months": "1-3 months",
      "3_to_6_months": "3-6 months",
      "6_months_plus": "6+ months"
    }
    return timeTexts[timeHorizon] || timeHorizon
  }

  const getRoleText = (role: string) => {
    const roleTexts: Record<string, string> = {
      myself: "Myself",
      my_son: "My son",
      my_daughter: "My daughter",
      classroom_group: "Classroom/group"
    }
    return roleTexts[role] || role
  }

  const getAgeBandText = (ageBand: string) => {
    const ageTexts: Record<string, string> = {
      "4_to_6": "4-6 years",
      "7_to_9": "7-9 years",
      "10_to_12": "10-12 years",
      "13_to_17": "13-17 years",
      "18_to_34": "18-34 years",
      "35_to_54": "35-54 years",
      "55_plus": "55+ years"
    }
    return ageTexts[ageBand] || ageBand
  }

  const getReadingLevelText = (level: string) => {
    const levelTexts: Record<string, string> = {
      none: "Cannot read Kannada",
      few_vowels: "Know a few vowels",
      most_vowels_consonants: "Know most vowels and consonants",
      comfortable_reader: "Comfortable reader"
    }
    return levelTexts[level] || level
  }

  const getExposureText = (exposure: string) => {
    const exposureTexts: Record<string, string> = {
      daily: "Daily",
      weekly: "Weekly",
      rarely: "Rarely",
      never: "Never"
    }
    return exposureTexts[exposure] || exposure
  }

  const getSessionLengthText = (length: string) => {
    const lengthTexts: Record<string, string> = {
      "5_min": "5 minutes",
      "10_min": "10 minutes",
      "15_min": "15 minutes",
      "20_min_plus": "20+ minutes"
    }
    return lengthTexts[length] || length
  }

  const getCalendarOptInText = (optIn: string) => {
    const optInTexts: Record<string, string> = {
      yes_send_invite: "Yes, send invite",
      no_thanks: "No thanks"
    }
    return optInTexts[optIn] || optIn
  }

  const getReferralSourceText = (source: string) => {
    const sourceTexts: Record<string, string> = {
      friend_family: "Friend or family",
      instagram: "Instagram",
      youtube: "YouTube",
      school: "School",
      other: "Other"
    }
    return sourceTexts[source] || source
  }

  const getEarlyTesterText = (tester: string) => {
    const testerTexts: Record<string, string> = {
      yes_please: "Yes please",
      maybe_later: "Maybe later"
    }
    return testerTexts[tester] || tester
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
            <SurveyStep3
              data={step3Data}
              onChange={handleStep3Change}
              userEmail={userEmail}
            />
          )}
        </div>

        <div className="bg-background mt-8 border-t pt-6">
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleBack}
              disabled={progress.currentStep === 1 || isLoading}
              className={`
                border-input bg-background hover:bg-accent hover:text-accent-foreground 
                inline-flex min-w-[120px] cursor-pointer 
                items-center justify-center gap-2 rounded-md
                border px-6
                py-3 text-sm
                font-medium transition-colors
                disabled:pointer-events-none
                disabled:opacity-50
                ${progress.currentStep === 1 || isLoading ? "cursor-not-allowed" : "cursor-pointer"}
              `}
            >
              <ArrowLeft className="pointer-events-none size-4" />
              <span className="pointer-events-none">Back</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!getCurrentStepValid() || isLoading}
              className={`
                bg-primary text-primary-foreground hover:bg-primary/90 inline-flex 
                min-w-[120px] cursor-pointer items-center
                justify-center gap-2 rounded-md
                px-6 py-3
                text-sm
                font-medium transition-colors
                disabled:pointer-events-none
                disabled:opacity-50
                ${!getCurrentStepValid() || isLoading ? "cursor-not-allowed" : "cursor-pointer"}
              `}
            >
              {isLoading ? (
                <span className="pointer-events-none">Saving...</span>
              ) : progress.currentStep === 3 ? (
                <>
                  <span className="pointer-events-none">Complete Survey</span>
                  <CheckCircle className="pointer-events-none size-4" />
                </>
              ) : (
                <>
                  <span className="pointer-events-none">Next</span>
                  <ArrowRight className="pointer-events-none size-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
