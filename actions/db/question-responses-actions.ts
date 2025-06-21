"use server"

import { db } from "@/db/db"
import { 
  InsertQuestionResponse, 
  SelectQuestionResponse, 
  questionResponsesTable 
} from "@/db/schema/question-responses-schema"
import { ActionState } from "@/types"
import { eq, and } from "drizzle-orm"

/**
 * Create a single question response
 */
export async function createQuestionResponseAction(
  questionResponse: InsertQuestionResponse
): Promise<ActionState<SelectQuestionResponse>> {
  try {
    const [newQuestionResponse] = await db
      .insert(questionResponsesTable)
      .values(questionResponse)
      .returning()
    
    return {
      isSuccess: true,
      message: "Question response saved successfully",
      data: newQuestionResponse
    }
  } catch (error) {
    console.error("Error creating question response:", error)
    return { 
      isSuccess: false, 
      message: "Failed to save question response" 
    }
  }
}

/**
 * Create multiple question responses in a batch
 */
export async function createBatchQuestionResponsesAction(
  questionResponses: InsertQuestionResponse[]
): Promise<ActionState<SelectQuestionResponse[]>> {
  try {
    const newQuestionResponses = await db
      .insert(questionResponsesTable)
      .values(questionResponses)
      .returning()
    
    return {
      isSuccess: true,
      message: `${newQuestionResponses.length} question responses saved successfully`,
      data: newQuestionResponses
    }
  } catch (error) {
    console.error("Error creating batch question responses:", error)
    return { 
      isSuccess: false, 
      message: "Failed to save question responses" 
    }
  }
}

/**
 * Get all question responses for a user
 */
export async function getQuestionResponsesByUserAction(
  userId: string
): Promise<ActionState<SelectQuestionResponse[]>> {
  try {
    const questionResponses = await db.query.questionResponses.findMany({
      where: eq(questionResponsesTable.userId, userId),
      orderBy: [questionResponsesTable.stepNumber, questionResponsesTable.responseOrder]
    })
    
    return {
      isSuccess: true,
      message: "Question responses retrieved successfully",
      data: questionResponses
    }
  } catch (error) {
    console.error("Error getting question responses:", error)
    return { 
      isSuccess: false, 
      message: "Failed to get question responses" 
    }
  }
}

/**
 * Get question responses for a specific step
 */
export async function getQuestionResponsesByStepAction(
  userId: string,
  stepNumber: number
): Promise<ActionState<SelectQuestionResponse[]>> {
  try {
    const questionResponses = await db.query.questionResponses.findMany({
      where: and(
        eq(questionResponsesTable.userId, userId),
        eq(questionResponsesTable.stepNumber, stepNumber)
      ),
      orderBy: [questionResponsesTable.responseOrder]
    })
    
    return {
      isSuccess: true,
      message: `Step ${stepNumber} question responses retrieved successfully`,
      data: questionResponses
    }
  } catch (error) {
    console.error(`Error getting step ${stepNumber} question responses:`, error)
    return { 
      isSuccess: false, 
      message: `Failed to get step ${stepNumber} question responses` 
    }
  }
}

/**
 * Update a question response
 */
export async function updateQuestionResponseAction(
  id: string,
  data: Partial<InsertQuestionResponse>
): Promise<ActionState<SelectQuestionResponse>> {
  try {
    const [updatedQuestionResponse] = await db
      .update(questionResponsesTable)
      .set({
        ...data,
        updatedAt: new Date()
      })
      .where(eq(questionResponsesTable.id, id))
      .returning()

    return {
      isSuccess: true,
      message: "Question response updated successfully",
      data: updatedQuestionResponse
    }
  } catch (error) {
    console.error("Error updating question response:", error)
    return { 
      isSuccess: false, 
      message: "Failed to update question response" 
    }
  }
}

/**
 * Delete question responses for a user (GDPR compliance)
 */
export async function deleteQuestionResponsesByUserAction(
  userId: string
): Promise<ActionState<void>> {
  try {
    await db
      .delete(questionResponsesTable)
      .where(eq(questionResponsesTable.userId, userId))
    
    return {
      isSuccess: true,
      message: "Question responses deleted successfully",
      data: undefined
    }
  } catch (error) {
    console.error("Error deleting question responses:", error)
    return { 
      isSuccess: false, 
      message: "Failed to delete question responses" 
    }
  }
} 