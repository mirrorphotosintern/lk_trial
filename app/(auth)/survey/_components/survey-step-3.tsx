"use client"

import { SurveyStep3Data, TIME_OF_DAY_OPTIONS } from "@/types"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Bell, MessageSquare, Users } from "lucide-react"

interface SurveyStep3Props {
  data: Partial<SurveyStep3Data>
  onChange: (data: Partial<SurveyStep3Data>) => void
}

export default function SurveyStep3({ data, onChange }: SurveyStep3Props) {
  const handleCalendarOptInChange = (value: string) => {
    onChange({
      ...data,
      calendarOptIn: value as SurveyStep3Data["calendarOptIn"],
      calendarEmail: value === "yes_send_invite" ? data.calendarEmail : "",
      calendarTimeOfDay:
        value === "yes_send_invite" ? data.calendarTimeOfDay : ""
    })
  }

  const handleCalendarEmailChange = (value: string) => {
    onChange({ ...data, calendarEmail: value })
  }

  const handleCalendarTimeChange = (value: string) => {
    onChange({ ...data, calendarTimeOfDay: value })
  }

  const handleNotificationChange = (
    type: keyof Pick<
      SurveyStep3Data,
      | "notificationMobilePush"
      | "notificationEmailDigest"
      | "notificationWhatsapp"
      | "notificationNone"
    >,
    checked: boolean
  ) => {
    const updates: Partial<SurveyStep3Data> = { ...data, [type]: checked }

    // If "None" is selected, uncheck all others
    if (type === "notificationNone" && checked) {
      updates.notificationMobilePush = false
      updates.notificationEmailDigest = false
      updates.notificationWhatsapp = false
    }

    // If any other option is selected, uncheck "None"
    if (type !== "notificationNone" && checked) {
      updates.notificationNone = false
    }

    onChange(updates)
  }

  const handleReferralSourceChange = (value: string) => {
    onChange({
      ...data,
      referralSource: value as SurveyStep3Data["referralSource"],
      referralOther: value === "other" ? data.referralOther : ""
    })
  }

  const handleReferralOtherChange = (value: string) => {
    onChange({ ...data, referralOther: value })
  }

  const handleEarlyTesterChange = (value: string) => {
    onChange({ ...data, earlyTester: value as SurveyStep3Data["earlyTester"] })
  }

  return (
    <div className="space-y-8">
      {/* Calendar Opt-in */}
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4 flex items-center gap-2">
            <Calendar className="text-primary size-5" />
            <Label className="text-lg font-semibold">
              Would you like us to email a calendar invite that blocks 10
              minutes every day as a 'Kannada practice' reminder?
            </Label>
          </div>

          <RadioGroup
            value={data.calendarOptIn || ""}
            onValueChange={handleCalendarOptInChange}
            className="grid grid-cols-1 gap-3 md:grid-cols-2"
          >
            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="yes_send_invite" id="yes_send_invite" />
              <Label
                htmlFor="yes_send_invite"
                className="flex-1 cursor-pointer"
              >
                Yes, send invite
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="no_thanks" id="no_thanks" />
              <Label htmlFor="no_thanks" className="flex-1 cursor-pointer">
                No thanks
              </Label>
            </div>
          </RadioGroup>

          {data.calendarOptIn === "yes_send_invite" && (
            <div className="mt-4 space-y-3">
              <div>
                <Label htmlFor="calendarEmail" className="text-sm font-medium">
                  Email for calendar invite
                </Label>
                <Input
                  id="calendarEmail"
                  type="email"
                  placeholder="your.email@example.com"
                  value={data.calendarEmail || ""}
                  onChange={e => handleCalendarEmailChange(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="calendarTime" className="text-sm font-medium">
                  Preferred time of day
                </Label>
                <Select
                  value={data.calendarTimeOfDay || ""}
                  onValueChange={handleCalendarTimeChange}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select preferred time" />
                  </SelectTrigger>
                  <SelectContent>
                    {TIME_OF_DAY_OPTIONS.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Notification Preferences */}
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4 flex items-center gap-2">
            <Bell className="text-primary size-5" />
            <Label className="text-lg font-semibold">
              Pick your reminder style
            </Label>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <Checkbox
                id="notificationMobilePush"
                checked={data.notificationMobilePush || false}
                onCheckedChange={checked =>
                  handleNotificationChange(
                    "notificationMobilePush",
                    checked as boolean
                  )
                }
              />
              <Label
                htmlFor="notificationMobilePush"
                className="flex-1 cursor-pointer"
              >
                Mobile push notifications
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <Checkbox
                id="notificationEmailDigest"
                checked={data.notificationEmailDigest || false}
                onCheckedChange={checked =>
                  handleNotificationChange(
                    "notificationEmailDigest",
                    checked as boolean
                  )
                }
              />
              <Label
                htmlFor="notificationEmailDigest"
                className="flex-1 cursor-pointer"
              >
                Email digest
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <Checkbox
                id="notificationWhatsapp"
                checked={data.notificationWhatsapp || false}
                onCheckedChange={checked =>
                  handleNotificationChange(
                    "notificationWhatsapp",
                    checked as boolean
                  )
                }
              />
              <Label
                htmlFor="notificationWhatsapp"
                className="flex-1 cursor-pointer"
              >
                WhatsApp ping
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <Checkbox
                id="notificationNone"
                checked={data.notificationNone || false}
                onCheckedChange={checked =>
                  handleNotificationChange(
                    "notificationNone",
                    checked as boolean
                  )
                }
              />
              <Label
                htmlFor="notificationNone"
                className="flex-1 cursor-pointer"
              >
                None
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Referral Source */}
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4 flex items-center gap-2">
            <Users className="text-primary size-5" />
            <Label className="text-lg font-semibold">
              How did you hear about us?
            </Label>
          </div>

          <RadioGroup
            value={data.referralSource || ""}
            onValueChange={handleReferralSourceChange}
            className="grid grid-cols-1 gap-3 md:grid-cols-2"
          >
            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="friend_family" id="friend_family" />
              <Label htmlFor="friend_family" className="flex-1 cursor-pointer">
                Friend/Family
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="instagram" id="instagram" />
              <Label htmlFor="instagram" className="flex-1 cursor-pointer">
                Instagram
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="youtube" id="youtube" />
              <Label htmlFor="youtube" className="flex-1 cursor-pointer">
                YouTube
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="school" id="school" />
              <Label htmlFor="school" className="flex-1 cursor-pointer">
                School
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="other" id="referral_other" />
              <Label htmlFor="referral_other" className="flex-1 cursor-pointer">
                Other
              </Label>
            </div>
          </RadioGroup>

          {data.referralSource === "other" && (
            <div className="mt-3">
              <Input
                placeholder="Please specify how you heard about us..."
                value={data.referralOther || ""}
                onChange={e => handleReferralOtherChange(e.target.value)}
              />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Early Tester Opt-in */}
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4 flex items-center gap-2">
            <MessageSquare className="text-primary size-5" />
            <Label className="text-lg font-semibold">
              Can we email you occasional beta features to test?
            </Label>
          </div>

          <RadioGroup
            value={data.earlyTester || ""}
            onValueChange={handleEarlyTesterChange}
            className="grid grid-cols-1 gap-3 md:grid-cols-2"
          >
            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="yes_please" id="yes_please" />
              <Label htmlFor="yes_please" className="flex-1 cursor-pointer">
                Yes please
              </Label>
            </div>

            <div className="hover:bg-accent/50 flex items-center space-x-2 rounded-lg border p-3">
              <RadioGroupItem value="maybe_later" id="maybe_later" />
              <Label htmlFor="maybe_later" className="flex-1 cursor-pointer">
                Maybe later
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  )
}
