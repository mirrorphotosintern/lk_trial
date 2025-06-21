"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Download, CheckCircle2 } from "lucide-react"

export function AdminIcons() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{
    success: boolean
    message: string
    count?: number
  } | null>(null)

  const handleDownloadIcons = async () => {
    try {
      setIsLoading(true)
      setResult(null)

      const response = await fetch("/api/icons", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to download icons")
      }

      setResult({
        success: true,
        message: data.message,
        count: data.count
      })
    } catch (error) {
      console.error("Error downloading icons:", error)
      setResult({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unknown error downloading icons"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Icon Management</CardTitle>
        <CardDescription>
          Download icons from the CSV file to the public/icons directory
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 text-sm">
          The CSV file contains URLs to icons for each word. This tool will
          download all the icons and save them to the public/icons directory,
          making them available for use in the application.
        </p>

        {result && (
          <Alert
            variant={result.success ? "default" : "destructive"}
            className="my-4"
          >
            {result.success ? (
              <CheckCircle2 className="size-4" />
            ) : (
              <AlertCircle className="size-4" />
            )}
            <AlertTitle>{result.success ? "Success" : "Error"}</AlertTitle>
            <AlertDescription>
              {result.message}
              {result.success && result.count !== undefined && (
                <span className="mt-1 block">
                  Downloaded {result.count} icons
                </span>
              )}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleDownloadIcons} disabled={isLoading}>
          <Download className="mr-2 size-4" />
          {isLoading ? "Downloading..." : "Download Icons"}
        </Button>
      </CardFooter>
    </Card>
  )
}
