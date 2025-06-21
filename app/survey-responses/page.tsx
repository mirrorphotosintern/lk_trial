"use server"

import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getQuestionResponsesByUserAction } from "@/actions/db/question-responses-actions"

export default async function SurveyResponsesPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect("/sign-in")
  }

  const result = await getQuestionResponsesByUserAction(userId)

  return (
    <div className="container mx-auto py-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Your Survey Responses</h1>
          <p className="text-muted-foreground mt-2">
            Individual question responses stored in the database
          </p>
        </div>

        {result.isSuccess ? (
          <div className="space-y-4">
            <div className="text-muted-foreground text-sm">
              Found {result.data?.length || 0} question responses
            </div>

            {result.data && result.data.length > 0 ? (
              result.data.map(response => (
                <Card key={response.id} className="w-full">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Step {response.stepNumber} - {response.questionId}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <strong>Question:</strong> {response.questionText}
                    </div>
                    <div>
                      <strong>Answer:</strong>{" "}
                      {response.answerText || response.answerValue}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      <strong>Order:</strong> {response.responseOrder} |
                      <strong> Required:</strong>{" "}
                      {response.isRequired ? "Yes" : "No"} |
                      <strong> Saved:</strong>{" "}
                      {new Date(response.createdAt).toLocaleString()}
                    </div>
                    {response.answerData != null && (
                      <details className="text-muted-foreground text-xs">
                        <summary className="cursor-pointer">Raw Data</summary>
                        <pre className="bg-muted mt-2 overflow-auto rounded p-2">
                          {JSON.stringify(response.answerData, null, 2)}
                        </pre>
                      </details>
                    )}
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="py-8 text-center">
                  <p className="text-muted-foreground">
                    No question responses found.
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Complete the survey to see your responses here.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
          <Card>
            <CardContent className="py-8 text-center">
              <p className="text-destructive">
                Error loading responses: {result.message}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
