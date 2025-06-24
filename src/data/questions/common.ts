import { FunnelQuestion } from "@/types/funnel";

// Common questions that apply to all business types
export const commonQuestions: FunnelQuestion[] = [
  {
    id: "company_name",
    type: "text",
    title: "Perfect, what name have you chosen for your business?",
    placeholder: "Example: Captain Contract",
    helpText: "If you have not yet chosen or are unsure, you can complete or modify this information later.",
    isOptional: true,
  },
  {
    id: "business_activity",
    type: "text",
    title: "What will be the main activity of your company?",
    placeholder: "Example: Web development, consulting, retail...",
    helpText: "This helps us prepare the appropriate documents for your business type.",
  },
  {
    id: "capital_amount",
    type: "text",
    title: "What will be the initial capital of your company?",
    placeholder: "Example: 1000",
    helpText: "Enter the amount in euros without the currency symbol.",
  },
  {
    id: "address",
    type: "text",
    title: "What will be the registered address of your company?",
    placeholder: "Example: 123 Business Street, Paris",
    helpText: "This will be the official address of your company.",
  },
]; 