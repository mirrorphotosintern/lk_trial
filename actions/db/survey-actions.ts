"use server"

import { db } from "@/db/db"
import { InsertSurveyResponse, SelectSurveyResponse, surveyResponsesTable } from "@/db/schema/survey-schema"
import { ActionState } from "@/types"
import { eq } from "drizzle-orm"

export async function createSurveyResponseAction(
  surveyResponse: InsertSurveyResponse
): Promise<ActionState<SelectSurveyResponse>> {
  try {
    console.log("Creating survey response with data:", surveyResponse)
    
    const [newSurveyResponse] = await db
      .insert(surveyResponsesTable)
      .values(surveyResponse)
      .returning()
    
    console.log("Survey response created successfully:", newSurveyResponse.id)
    
    return {
      isSuccess: true,
      message: "Survey response created successfully",
      data: newSurveyResponse
    }
  } catch (error) {
    console.error("Error creating survey response:", error)
    
    // Check if it's a table not found error
    if (error instanceof Error && error.message.includes('relation "survey_responses" does not exist')) {
      return { 
        isSuccess: false, 
        message: "Database table not found. Please run database migrations first." 
      }
    }
    
    // Check for other common database errors
    if (error instanceof Error) {
      if (error.message.includes('duplicate key')) {
        return { 
          isSuccess: false, 
          message: "Survey response already exists for this user" 
        }
      }
      if (error.message.includes('invalid input syntax')) {
        return { 
          isSuccess: false, 
          message: "Invalid data format. Please check your input." 
        }
      }
      if (error.message.includes('not-null constraint')) {
        return { 
          isSuccess: false, 
          message: "Missing required fields. Please fill out all required information." 
        }
      }
    }
    
    return { 
      isSuccess: false, 
      message: `Failed to create survey response: ${error instanceof Error ? error.message : 'Unknown error'}` 
    }
  }
}

export async function getSurveyResponseAction(
  userId: string
): Promise<ActionState<SelectSurveyResponse | null>> {
  try {
    const surveyResponse = await db.query.surveyResponses.findFirst({
      where: eq(surveyResponsesTable.userId, userId)
    })
    
    return {
      isSuccess: true,
      message: "Survey response retrieved successfully",
      data: surveyResponse || null
    }
  } catch (error) {
    console.error("Error getting survey response:", error)
    
    // Check if it's a table not found error
    if (error instanceof Error && error.message.includes('relation "survey_responses" does not exist')) {
      return { 
        isSuccess: false, 
        message: "Database table not found. Please run database migrations first." 
      }
    }
    
    return { isSuccess: false, message: "Failed to get survey response" }
  }
}

export async function updateSurveyResponseAction(
  userId: string,
  data: Partial<InsertSurveyResponse>
): Promise<ActionState<SelectSurveyResponse>> {
  try {
    const [updatedSurveyResponse] = await db
      .update(surveyResponsesTable)
      .set({
        ...data,
        updatedAt: new Date()
      })
      .where(eq(surveyResponsesTable.userId, userId))
      .returning()

    return {
      isSuccess: true,
      message: "Survey response updated successfully",
      data: updatedSurveyResponse
    }
  } catch (error) {
    console.error("Error updating survey response:", error)
    
    // Check if it's a table not found error
    if (error instanceof Error && error.message.includes('relation "survey_responses" does not exist')) {
      return { 
        isSuccess: false, 
        message: "Database table not found. Please run database migrations first." 
      }
    }
    
    return { isSuccess: false, message: "Failed to update survey response" }
  }
}

export async function updateSurveyStepAction(
  userId: string,
  step: 1 | 2 | 3,
  data: Partial<InsertSurveyResponse>
): Promise<ActionState<SelectSurveyResponse>> {
  try {
    const stepCompletionField = `step${step}Completed` as keyof InsertSurveyResponse
    
    const [updatedSurveyResponse] = await db
      .update(surveyResponsesTable)
      .set({
        ...data,
        [stepCompletionField]: true,
        updatedAt: new Date()
      })
      .where(eq(surveyResponsesTable.userId, userId))
      .returning()

    return {
      isSuccess: true,
      message: `Survey step ${step} updated successfully`,
      data: updatedSurveyResponse
    }
  } catch (error) {
    console.error(`Error updating survey step ${step}:`, error)
    
    // Check if it's a table not found error
    if (error instanceof Error && error.message.includes('relation "survey_responses" does not exist')) {
      return { 
        isSuccess: false, 
        message: "Database table not found. Please run database migrations first." 
      }
    }
    
    return { isSuccess: false, message: `Failed to update survey step ${step}` }
  }
}

export async function completeSurveyAction(
  userId: string
): Promise<ActionState<SelectSurveyResponse>> {
  try {
    const [completedSurveyResponse] = await db
      .update(surveyResponsesTable)
      .set({
        isCompleted: true,
        updatedAt: new Date()
      })
      .where(eq(surveyResponsesTable.userId, userId))
      .returning()

    return {
      isSuccess: true,
      message: "Survey completed successfully",
      data: completedSurveyResponse
    }
  } catch (error) {
    console.error("Error completing survey:", error)
    
    // Check if it's a table not found error
    if (error instanceof Error && error.message.includes('relation "survey_responses" does not exist')) {
      return { 
        isSuccess: false, 
        message: "Database table not found. Please run database migrations first." 
      }
    }
    
    return { isSuccess: false, message: "Failed to complete survey" }
  }
}

export async function deleteSurveyResponseAction(
  userId: string
): Promise<ActionState<void>> {
  try {
    await db
      .delete(surveyResponsesTable)
      .where(eq(surveyResponsesTable.userId, userId))
    
    return {
      isSuccess: true,
      message: "Survey response deleted successfully",
      data: undefined
    }
  } catch (error) {
    console.error("Error deleting survey response:", error)
    
    // Check if it's a table not found error
    if (error instanceof Error && error.message.includes('relation "survey_responses" does not exist')) {
      return { 
        isSuccess: false, 
        message: "Database table not found. Please run database migrations first." 
      }
    }
    
    return { isSuccess: false, message: "Failed to delete survey response" }
  }
} 