import { FunnelQuestion } from "@/types/funnel";

export const closeBusinessQuestions: FunnelQuestion[] = [
  {
    id: "partner_type",
    type: "choice",
    title: "Welcome! Who are the partners in the business you want to close?",
    options: [
      {
        id: "company_partner",
        label: "A sole partner who is a company",
        value: "company_partner",
        subLabel: "You will not need to liquidate",
        icon: {
          type: "emoji",
          name: "💼",
        },
      },
      {
        id: "physical_partners",
        label: "One physical partner or several partners",
        value: "physical_partners",
        subLabel: "You will need to do a liquidation",
        icon: {
          type: "emoji",
          name: "👥",
        },
      },
    ],
    helpText: "💡 Specifying whether your business is 100% owned by a corporation will allow us to personalize your approach and your documents.",
    navigation: {
      showContinue: true,
      showSkip: false,
    },
  },
  {
    id: "company_situation",
    type: "choice",
    title: "What is your situation?",
    options: [
      {
        id: "inactive",
        label: "My company is no longer active",
        value: "inactive",
        icon: {
          type: "emoji",
          name: "🚫",
        },
      },
      {
        id: "financial_difficulties",
        label: "My company is having financial difficulties",
        value: "financial_difficulties",
        icon: {
          type: "emoji",
          name: "💸",
        },
      },
    ],
    helpText: "💡 Depending on your situation, the steps you need to take will vary.\nWe need to understand your needs in order to offer you solutions tailored to your needs.",
    navigation: {
      autoProgress: true,
      showSkip: true,
    },
  },
  {
    id: "activity_type",
    type: "choice",
    title: "Noted! What type of activity do you do?",
    options: [
      {
        id: "physical_commerce",
        label: "Physical commerce",
        value: "physical_commerce",
        icon: {
          type: "emoji",
          name: "🛍",
        },
      },
      {
        id: "ecommerce",
        label: "E-commerce site",
        value: "ecommerce",
        icon: {
          type: "emoji",
          name: "💸",
        },
      },
      {
        id: "real_estate",
        label: "Real estate rental",
        value: "real_estate",
        icon: {
          type: "emoji",
          name: "🏡",
        },
      },
      {
        id: "business_consulting",
        label: "Business consulting",
        value: "business_consulting",
        icon: {
          type: "emoji",
          name: "📊",
        },
      },
      {
        id: "construction",
        label: "Construction",
        value: "construction",
        icon: {
          type: "emoji",
          name: "🚧",
        },
      },
      {
        id: "software",
        label: "Software publisher",
        value: "software",
        icon: {
          type: "emoji",
          name: "💾",
        },
      },
      {
        id: "taxi",
        label: "Taxi",
        value: "taxi",
        icon: {
          type: "emoji",
          name: "🚖",
        },
      },
      {
        id: "restaurant",
        label: "Restoration",
        value: "restaurant",
        icon: {
          type: "emoji",
          name: "🍽",
        },
      },
      {
        id: "other",
        label: "Other...",
        value: "other",
        icon: {
          type: "emoji",
          name: "💬",
        },
      },
    ],
    navigation: {
      showContinue: true,
      showSkip: true,
    },
  },
  {
    id: "has_debt",
    type: "choice",
    title: "Does your company have debt?",
    options: [
      {
        id: "yes",
        label: "Yes",
        value: "yes",
        icon: {
          type: "emoji",
          name: "✅",
        },
      },
      {
        id: "no",
        label: "No",
        value: "no",
        icon: {
          type: "emoji",
          name: "❌",
        },
      },
    ],
    helpText: "💡 Whatever your situation, Captain Contrat can support you in your efforts.",
    navigation: {
      autoProgress: true,
      showSkip: true,
    },
    nextStep: (response) => response === "yes" ? "debt_repayment" : "support_type",
  },
  {
    id: "debt_repayment",
    type: "choice",
    title: "Are you able to repay your debts?",
    options: [
      {
        id: "yes",
        label: "Yes",
        value: "yes",
        icon: {
          type: "emoji",
          name: "✅",
        },
      },
      {
        id: "no",
        label: "No",
        value: "no",
        icon: {
          type: "emoji",
          name: "❌",
        },
      },
      {
        id: "unknown",
        label: "I don't know",
        value: "unknown",
        icon: {
          type: "emoji",
          name: "❓",
        },
      },
    ],
    navigation: {
      autoProgress: true,
      showSkip: true,
    },
    
  },
  {
    id: "support_type",
    type: "choice",
    title: "What support do you expect from Captain Contrat?",
    options: [
      {
        id: "without_lawyer",
        label: "I want to close my company without a lawyer",
        value: "without_lawyer",
        icon: {
          type: "emoji",
          name: "💡",
        },
      },
      {
        id: "with_lawyer",
        label: "I want to close my company with a lawyer",
        value: "with_lawyer",
        icon: {
          type: "emoji",
          name: "💼",
        },
      },
    ],
    navigation: {
      autoProgress: true,
      showSkip: true,
    },
  },
  {
    id: "contact_info",
    type: "contact_form",
    title: "Great 🎉 Who is doing the paperwork?",
    description: "This information is essential to create your space and facilitate contact with our experts.",
    navigation: {
      showContinue: false,
    },
    fields: [
      { id: "first_name", label: "First name", placeholder: "Philippe" },
      { id: "last_name", label: "Last name", placeholder: "Durand" },
      { id: "email", label: "Email", placeholder: "captain.contrat@gmail.com", required: true },
      { id: "phone", label: "Phone number", placeholder: "06 01 02 03 04", required: true },
    ],
    helpText: "💡 This information is essential to create your space and facilitate contact with our experts.",
  },
];

export default closeBusinessQuestions; 