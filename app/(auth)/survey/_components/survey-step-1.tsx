"use client"

import { SurveyStep1Data } from "@/types"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Clock, User, Users } from "lucide-react"

interface SurveyStep1Props {
  data: Partial<SurveyStep1Data>
  onChange: (data: Partial<SurveyStep1Data>) => void
}

export default function SurveyStep1({ data, onChange }: SurveyStep1Props) {
  const handleGoalChange = (value: string) => {
    onChange({
      ...data,
      goal: value as SurveyStep1Data["goal"],
      goalOther: value === "other" ? data.goalOther : ""
    })
  }

  const handleGoalOtherChange = (value: string) => {
    onChange({ ...data, goalOther: value })
  }

  const handleTimeHorizonChange = (value: string) => {
    onChange({ ...data, timeHorizon: value as SurveyStep1Data["timeHorizon"] })
  }

  const handleRoleChange = (value: string) => {
    onChange({ ...data, role: value as SurveyStep1Data["role"] })
  }

  const handleAgeBandChange = (value: string) => {
    onChange({ ...data, ageBand: value as SurveyStep1Data["ageBand"] })
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4 flex items-center gap-2">
            <Target className="text-primary size-5" />
            <Label className="text-lg font-semibold">
              What's your primary goal for learning Kannada?
            </Label>
          </div>

          <RadioGroup
            value={data.goal || ""}
            onValueChange={handleGoalChange}
            className="grid grid-cols-1 gap-3 md:grid-cols-2"
          >
            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem
                value="daily_conversation"
                id="daily_conversation"
              />
              <Label
                htmlFor="daily_conversation"
                className="flex-1 cursor-pointer"
              >
                Daily conversation
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem
                value="heritage_language"
                id="heritage_language"
              />
              <Label
                htmlFor="heritage_language"
                className="flex-1 cursor-pointer"
              >
                Heritage language
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem
                value="school_curriculum"
                id="school_curriculum"
              />
              <Label
                htmlFor="school_curriculum"
                className="flex-1 cursor-pointer"
              >
                School curriculum
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="workplace_need" id="workplace_need" />
              <Label htmlFor="workplace_need" className="flex-1 cursor-pointer">
                Workplace need
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="travel" id="travel" />
              <Label htmlFor="travel" className="flex-1 cursor-pointer">
                Travel
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other" className="flex-1 cursor-pointer">
                Other
              </Label>
            </div>
          </RadioGroup>

          {data.goal === "other" && (
            <div className="mt-3">
              <Input
                placeholder="Please specify your goal..."
                value={data.goalOther || ""}
                onChange={e => handleGoalOtherChange(e.target.value)}
              />
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="mb-4 flex items-center gap-2">
            <Clock className="text-primary size-5" />
            <Label className="text-lg font-semibold">
              When do you hope to feel comfortable reading simple Kannada
              sentences?
            </Label>
          </div>

          <RadioGroup
            value={data.timeHorizon || ""}
            onValueChange={handleTimeHorizonChange}
            className="grid grid-cols-1 gap-3 md:grid-cols-2"
          >
            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem
                value="less_than_1_month"
                id="less_than_1_month"
              />
              <Label
                htmlFor="less_than_1_month"
                className="flex-1 cursor-pointer"
              >
                Less than 1 month
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="1_to_3_months" id="1_to_3_months" />
              <Label htmlFor="1_to_3_months" className="flex-1 cursor-pointer">
                1-3 months
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="3_to_6_months" id="3_to_6_months" />
              <Label htmlFor="3_to_6_months" className="flex-1 cursor-pointer">
                3-6 months
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="6_months_plus" id="6_months_plus" />
              <Label htmlFor="6_months_plus" className="flex-1 cursor-pointer">
                6 months+
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="mb-4 flex items-center gap-2">
            <User className="text-primary size-5" />
            <Label className="text-lg font-semibold">
              Who will primarily use the app?
            </Label>
          </div>

          <RadioGroup
            value={data.role || ""}
            onValueChange={handleRoleChange}
            className="grid grid-cols-1 gap-3 md:grid-cols-2"
          >
            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="myself_adult" id="myself_adult" />
              <Label htmlFor="myself_adult" className="flex-1 cursor-pointer">
                Myself (adult)
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="child_under_13" id="child_under_13" />
              <Label htmlFor="child_under_13" className="flex-1 cursor-pointer">
                My child (under 13)
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="child_13_17" id="child_13_17" />
              <Label htmlFor="child_13_17" className="flex-1 cursor-pointer">
                My child (13-17)
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="classroom_group" id="classroom_group" />
              <Label
                htmlFor="classroom_group"
                className="flex-1 cursor-pointer"
              >
                A classroom / group
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="mb-4 flex items-center gap-2">
            <Users className="text-primary size-5" />
            <Label className="text-lg font-semibold">Learner's age group</Label>
          </div>

          <RadioGroup
            value={data.ageBand || ""}
            onValueChange={handleAgeBandChange}
            className="grid grid-cols-1 gap-3 md:grid-cols-3"
          >
            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="4_to_6" id="4_to_6" />
              <Label htmlFor="4_to_6" className="flex-1 cursor-pointer">
                4-6 years
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="7_to_9" id="7_to_9" />
              <Label htmlFor="7_to_9" className="flex-1 cursor-pointer">
                7-9 years
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="10_to_12" id="10_to_12" />
              <Label htmlFor="10_to_12" className="flex-1 cursor-pointer">
                10-12 years
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="13_to_17" id="13_to_17" />
              <Label htmlFor="13_to_17" className="flex-1 cursor-pointer">
                13-17 years
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="18_to_34" id="18_to_34" />
              <Label htmlFor="18_to_34" className="flex-1 cursor-pointer">
                18-34 years
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="35_to_54" id="35_to_54" />
              <Label htmlFor="35_to_54" className="flex-1 cursor-pointer">
                35-54 years
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="55_plus" id="55_plus" />
              <Label htmlFor="55_plus" className="flex-1 cursor-pointer">
                55+ years
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  )
}
