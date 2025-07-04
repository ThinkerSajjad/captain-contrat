import { FunnelQuestion } from "@/types/funnel";

export const approvalOfAccountQuestions: FunnelQuestion[] = [
  {
    id: "company_name",
    title: "What is the legal name of your company?",
    type: "text",
    description: "Filling in your business name allows us to find information relating to your company.",
    navigation: {
      showContinue: true,
      showSkip: true
    }
  },
  {
    id: "has_auditor",
    title: "Does your company have an auditor?",
    type: "choice",
    options: [
      {
        id: "yes",
        label: "Yes",
        value: "yes",
        icon: {
          type: "emoji",
          name: "✅",
          color: "#000000"
        }
      },
      {
        id: "no",
        label: "No",
        value: "no",
        icon: {
          type: "emoji",
          name: "❌",
          color: "#000000"
        }
      },
      {
        id: "unknown",
        label: "I don't know",
        value: "unknown",
        icon: {
          type: "emoji",
          name: "❓",
          color: "#000000"
        }
      }
    ],
    navigation: {
      showSkip: true,
      autoProgress: true
    }
  },
  {
    id: "accounting_result",
    title: "What is your accounting result this year?",
    type: "choice",
    options: [
      {
        id: "benefits",
        label: "Benefits",
        value: "benefits",
        icon: {
          type: "emoji",
          name: "💰",
          color: "#000000"
        }
      },
      {
        id: "losses",
        label: "Losses",
        value: "losses",
        icon: {
          type: "emoji",
          name: "💸",
          color: "#000000"
        }
      }
    ],
    navigation: {
      showSkip: true,
      autoProgress: true
    }
  },
  {
    id: "confidential_accounts",
    title: "Would you like your accounts to remain confidential?",
    type: "choice",
    description: "By default, your company's accounts are public. Under certain conditions, you can request that your company's accounts be confidential.",
    isOptional: false,
    options: [
      {
        id: "yes",
        label: "Yes",
        value: "yes",
        icon: {
          type: "emoji",
          name: "✅",
          color: "#000000"
        }
      },
      {
        id: "no",
        label: "No",
        value: "no",
        icon: {
          type: "emoji",
          name: "❌",
          color: "#000000"
        }
      }
    ],
    navigation: {
      showSkip: true,
      autoProgress: true
    }
  },
  {
    id: "accounting_info_method",
    title: "How would you like to send us your accounting information?",
    type: "choice",
    description: "With your financial statement, our lawyers can complete the information questionnaire so you don't have to complete it yourself. This option will cost you €50.",
    isOptional: false,
    options: [
      {
        id: "lawyer",
        label: "I send my report to a lawyer",
        value: "lawyer",
        icon: {
          type: "emoji",
          name: "👨‍⚖️",
          color: "#000000"
        }
      },
      {
        id: "self",
        label: "I fill out my questionnaire independently",
        value: "self",
        icon: {
          type: "emoji",
          name: "📝",
          color: "#000000"
        }
      }
    ],
    navigation: {
      showSkip: true,
      autoProgress: true
    }
  },
  {
    id: "contact_info",
    type: "contact_form",
    title: "Thank you for your answers! Who is taking the necessary steps?",
    navigation: {
        showContinue: false,
    },
    fields: [
        { id: "first_name", label: "First name", placeholder: "Your first name" },
        { id: "last_name", label: "Last name", placeholder: "Your last name" },
        { id: "email", label: "Email", placeholder: "Your email address", required: true },
        { id: "phone", label: "Phone", placeholder: "Your phone number", required: true },
    ],
    helpText: "💡 This information is essential to create your space and facilitate contact with our experts.",
}
]; 