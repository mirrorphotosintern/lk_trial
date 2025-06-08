"use client"

import { SurveyStep2Data, COMMON_LANGUAGES } from "@/types"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Volume2, Gamepad2, Clock } from "lucide-react"

interface SurveyStep2Props {
  data: Partial<SurveyStep2Data>
  onChange: (data: Partial<SurveyStep2Data>) => void
}

export default function SurveyStep2({ data, onChange }: SurveyStep2Props) {
  const handleMotherTongueChange = (value: string) => {
    onChange({ ...data, motherTongue: value })
  }

  const handleReadingLevelChange = (value: string) => {
    onChange({
      ...data,
      readingLevel: value as SurveyStep2Data["readingLevel"]
    })
  }

  const handleExposureChange = (value: string) => {
    onChange({ ...data, exposure: value as SurveyStep2Data["exposure"] })
  }

  const handleFormatChange = (
    format: keyof Pick<
      SurveyStep2Data,
      | "formatQuickQuizzes"
      | "formatStoryMode"
      | "formatTraceLetter"
      | "formatSpeakingPractice"
      | "formatLeaderboard"
    >,
    checked: boolean
  ) => {
    onChange({ ...data, [format]: checked })
  }

  const handleSessionLengthChange = (value: string) => {
    onChange({
      ...data,
      sessionLength: value as SurveyStep2Data["sessionLength"]
    })
  }

  return (
    <div className="space-y-8">
      {/* Mother Tongue */}
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4 flex items-center gap-2">
            <Volume2 className="text-primary size-5" />
            <Label className="text-lg font-semibold">
              What's your strongest language right now?
            </Label>
          </div>

          <Select
            value={data.motherTongue || ""}
            onValueChange={handleMotherTongueChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select your strongest language" />
            </SelectTrigger>
            <SelectContent>
              {COMMON_LANGUAGES.map(language => (
                <SelectItem key={language.value} value={language.value}>
                  {language.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Reading Level */}
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4 flex items-center gap-2">
            <BookOpen className="text-primary size-5" />
            <Label className="text-lg font-semibold">
              Can you already read any Kannada letters?
            </Label>
          </div>

          <RadioGroup
            value={data.readingLevel || ""}
            onValueChange={handleReadingLevelChange}
            className="grid grid-cols-1 gap-3 md:grid-cols-2"
          >
            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="none" id="none" />
              <Label htmlFor="none" className="flex-1 cursor-pointer">
                None
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="few_vowels" id="few_vowels" />
              <Label htmlFor="few_vowels" className="flex-1 cursor-pointer">
                A few vowels
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem
                value="most_vowels_consonants"
                id="most_vowels_consonants"
              />
              <Label
                htmlFor="most_vowels_consonants"
                className="flex-1 cursor-pointer"
              >
                Most vowels & consonants
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem
                value="comfortable_reader"
                id="comfortable_reader"
              />
              <Label
                htmlFor="comfortable_reader"
                className="flex-1 cursor-pointer"
              >
                Comfortable reader
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Exposure */}
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4 flex items-center gap-2">
            <Volume2 className="text-primary size-5" />
            <Label className="text-lg font-semibold">
              How often do you hear Kannada around you?
            </Label>
          </div>

          <RadioGroup
            value={data.exposure || ""}
            onValueChange={handleExposureChange}
            className="grid grid-cols-1 gap-3 md:grid-cols-2"
          >
            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="daily" id="daily" />
              <Label htmlFor="daily" className="flex-1 cursor-pointer">
                Daily
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="weekly" id="weekly" />
              <Label htmlFor="weekly" className="flex-1 cursor-pointer">
                Weekly
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="rarely" id="rarely" />
              <Label htmlFor="rarely" className="flex-1 cursor-pointer">
                Rarely
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="never" id="never" />
              <Label htmlFor="never" className="flex-1 cursor-pointer">
                Never
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Learning Format Preferences */}
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4 flex items-center gap-2">
            <Gamepad2 className="text-primary size-5" />
            <Label className="text-lg font-semibold">
              Which activities sound fun to you? (pick all that apply)
            </Label>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <Checkbox
                id="formatQuickQuizzes"
                checked={data.formatQuickQuizzes || false}
                onCheckedChange={checked =>
                  handleFormatChange("formatQuickQuizzes", checked as boolean)
                }
              />
              <Label
                htmlFor="formatQuickQuizzes"
                className="flex-1 cursor-pointer"
              >
                Quick quizzes
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <Checkbox
                id="formatStoryMode"
                checked={data.formatStoryMode || false}
                onCheckedChange={checked =>
                  handleFormatChange("formatStoryMode", checked as boolean)
                }
              />
              <Label
                htmlFor="formatStoryMode"
                className="flex-1 cursor-pointer"
              >
                Story mode
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <Checkbox
                id="formatTraceLetter"
                checked={data.formatTraceLetter || false}
                onCheckedChange={checked =>
                  handleFormatChange("formatTraceLetter", checked as boolean)
                }
              />
              <Label
                htmlFor="formatTraceLetter"
                className="flex-1 cursor-pointer"
              >
                Trace-the-letter games
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <Checkbox
                id="formatSpeakingPractice"
                checked={data.formatSpeakingPractice || false}
                onCheckedChange={checked =>
                  handleFormatChange(
                    "formatSpeakingPractice",
                    checked as boolean
                  )
                }
              />
              <Label
                htmlFor="formatSpeakingPractice"
                className="flex-1 cursor-pointer"
              >
                Speaking practice
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <Checkbox
                id="formatLeaderboard"
                checked={data.formatLeaderboard || false}
                onCheckedChange={checked =>
                  handleFormatChange("formatLeaderboard", checked as boolean)
                }
              />
              <Label
                htmlFor="formatLeaderboard"
                className="flex-1 cursor-pointer"
              >
                Competitive leaderboard
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Session Length */}
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4 flex items-center gap-2">
            <Clock className="text-primary size-5" />
            <Label className="text-lg font-semibold">
              Ideal daily study time?
            </Label>
          </div>

          <RadioGroup
            value={data.sessionLength || ""}
            onValueChange={handleSessionLengthChange}
            className="grid grid-cols-1 gap-3 md:grid-cols-2"
          >
            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="5_min" id="5_min" />
              <Label htmlFor="5_min" className="flex-1 cursor-pointer">
                5 minutes
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="10_min" id="10_min" />
              <Label htmlFor="10_min" className="flex-1 cursor-pointer">
                10 minutes
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="15_min" id="15_min" />
              <Label htmlFor="15_min" className="flex-1 cursor-pointer">
                15 minutes
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="20_min_plus" id="20_min_plus" />
              <Label htmlFor="20_min_plus" className="flex-1 cursor-pointer">
                20+ minutes
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  )
}
