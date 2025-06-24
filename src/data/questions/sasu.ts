import { FunnelQuestion } from "@/types/funnel";
import { sasQuestions } from "./sas";

// SASU specific questions - reuses the business type question from SAS
export const sasuQuestions: FunnelQuestion[] = [
  ...sasQuestions.slice(0, 1), // Keep the business_type question
  ...sasQuestions.slice(1), // Add all other questions
]; 