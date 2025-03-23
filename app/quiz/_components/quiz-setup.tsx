"use client"

/**
 * @description
 * QuizSetup component allows users to configure their quiz by selecting:
 * - Number of questions
 * - Categories to include in the quiz
 *
 * Key features:
 * - Number Selection: Number input for question count
 * - Category Selection: Multiple checkboxes for category selection
 * - Start Button: Initiates the quiz with selected configuration
 *
 * @dependencies
 * - UI components from Shadcn
 * - Framer motion for animations
 */

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState, useEffect } from "react"
import { KannadaEntry } from "@/types"

// Define available quiz categories (updated to match CSV actual categories)
const PREDEFINED_CATEGORIES = [
  { id: "Animals", label: "Animals" },
  { id: "Colors", label: "Colors" },
  { id: "Numbers", label: "Numbers" },
  { id: "Food", label: "Food" },
  { id: "Items", label: "Items" },
  { id: "Days", label: "Days of the Week" },
  { id: "Shapes", label: "Shapes" },
  { id: "Verbs", label: "Verbs (Actions)" },
  { id: "People", label: "People" },
  { id: "Adverbs", label: "Adverbs" }
]

// Define the form schema
const formSchema = z.object({
  numQuestions: z.string().min(1, {
    message: "Please select the number of questions"
  }),
  categories: z.array(z.string()).min(1, {
    message: "Please select at least one category"
  })
})

type FormValues = z.infer<typeof formSchema>

interface QuizSetupProps {
  entries: KannadaEntry[]
  onStartQuiz: (numQuestions: number, categories: string[]) => void
}

export default function QuizSetup({ entries, onStartQuiz }: QuizSetupProps) {
  // State to store available categories from data
  const [availableCategories, setAvailableCategories] = useState<{id: string, label: string}[]>(PREDEFINED_CATEGORIES);

  // Extract actual categories from entries on component mount
  useEffect(() => {
    if (entries && entries.length > 0) {
      // Get unique categories from data
      const uniqueCategories = new Set<string>();
      
      entries.forEach(entry => {
        if (entry.category && entry.category.trim() !== "") {
          uniqueCategories.add(entry.category);
        }
      });
      
      // Map to category objects
      const categoriesFromData = Array.from(uniqueCategories).map(category => ({
        id: category,
        label: category.charAt(0).toUpperCase() + category.slice(1) // Capitalize first letter
      }));
      
      if (categoriesFromData.length > 0) {
        // Use categories from data if available
        setAvailableCategories(categoriesFromData);
        
        // Update form default values with first three categories or all if less than three
        const defaultCategories = categoriesFromData.slice(0, Math.min(3, categoriesFromData.length)).map(c => c.id);
        form.setValue('categories', defaultCategories);
      }
    }
  }, [entries]);

  // Initialize form with default values
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      numQuestions: "10",
      categories: ["Animals", "Colors", "Numbers"]
    }
  })

  // Handle form submission
  function onSubmit(values: FormValues) {
    onStartQuiz(
      parseInt(values.numQuestions, 10),
      values.categories
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Configure Your Quiz</CardTitle>
        <CardDescription>
          Select how many questions and which categories you want to include
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="numQuestions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Questions</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of questions" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="5">5 Questions</SelectItem>
                      <SelectItem value="10">10 Questions</SelectItem>
                      <SelectItem value="15">15 Questions</SelectItem>
                      <SelectItem value="20">20 Questions</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Choose how many questions you want in your quiz
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="categories"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Categories</FormLabel>
                    <FormDescription>
                      Select which categories to include in the quiz
                    </FormDescription>
                  </div>
                  {availableCategories.map((category) => (
                    <FormField
                      key={category.id}
                      control={form.control}
                      name="categories"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={category.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(category.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, category.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== category.id
                                        )
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {category.label}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">Start Quiz</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
} 