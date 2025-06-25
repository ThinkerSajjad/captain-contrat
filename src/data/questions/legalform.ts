import { FunnelQuestion } from "@/types/funnel";

export const legalFormQuestions: FunnelQuestion[] = [
  {
    id: "contact_info",
    type: "contact_form",
    title: "This information is essential to create your space and facilitate contact with our experts.",
    navigation: {
      showContinue: false,
    },
    fields: [
      { id: "firstName", label: "First name", placeholder: "Philippe", required: true },
      { id: "lastName", label: "Name", placeholder: "Durand", required: true },
      { id: "email", label: "Email", placeholder: "captain.contrat@gmail.com", required: true },
      { id: "phone", label: "Phone number", placeholder: "06 01 02 03 04", required: true }
    ],
    helpText: "💡 This information is essential to create your space and facilitate contact with our experts."
  }
]; 