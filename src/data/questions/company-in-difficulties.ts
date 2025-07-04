import { FunnelQuestion } from "@/types/funnel";

export const companyInDifficultiesQuestions: FunnelQuestion[] = [
    {
        id: "partner_type",
        type: "choice",
        title: "Welcome! Who are the partners in the business you want to close?",
        description: "💡 Specifying whether your business is 100% owned by a corporation will allow us to personalize your approach and your documents.",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "company_partner",
                label: "A sole partner who is a company",
                subLabel: "You will not need to liquidate",
                value: "company_partner",
                icon: {
                    type: "emoji",
                    name: "🏢",
                    color: "#4B5563"
                }
            },
            {
                id: "physical_partners",
                label: "One physical partner or several partners",
                subLabel: "You will need to do a liquidation",
                value: "physical_partners",
                icon: {
                    type: "emoji",
                    name: "👥",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "company_situation",
        type: "choice",
        title: "What is your situation?",
        description: "Depending on your situation, the steps you need to take will vary.\nWe need to understand your needs in order to offer you solutions tailored to your needs.",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "inactive",
                label: "My company is no longer active",
                value: "inactive",
                icon: {
                    type: "emoji",
                    name: "🔒",
                    color: "#4B5563"
                }
            },
            {
                id: "financial_difficulties",
                label: "My company is having financial difficulties",
                value: "financial_difficulties",
                icon: {
                    type: "emoji",
                    name: "💸",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "activity_type",
        type: "choice",
        title: "Noted! What type of activity do you do?",
        navigation: {
            showContinue: true,
            showSkip: true,
        },
        options: [
            {
                id: "physical_commerce",
                label: "Physical commerce",
                value: "physical_commerce",
                icon: {
                    type: "emoji",
                    name: "🛍",
                    color: "#4B5563"
                }
            },
            {
                id: "ecommerce",
                label: "E-commerce site",
                value: "ecommerce",
                icon: {
                    type: "emoji",
                    name: "💸",
                    color: "#4B5563"
                }
            },
            {
                id: "real_estate",
                label: "Real estate rental",
                value: "real_estate",
                icon: {
                    type: "emoji",
                    name: "🏡",
                    color: "#4B5563"
                }
            },
            {
                id: "consulting",
                label: "Business consulting",
                value: "consulting",
                icon: {
                    type: "emoji",
                    name: "📊",
                    color: "#4B5563"
                }
            },
            {
                id: "construction",
                label: "Construction",
                value: "construction",
                icon: {
                    type: "emoji",
                    name: "🚧",
                    color: "#4B5563"
                }
            },
            {
                id: "software",
                label: "Software publisher",
                value: "software",
                icon: {
                    type: "emoji",
                    name: "💾",
                    color: "#4B5563"
                }
            },
            {
                id: "taxi",
                label: "Taxi",
                value: "taxi",
                icon: {
                    type: "emoji",
                    name: "🚖",
                    color: "#4B5563"
                }
            },
            {
                id: "restaurant",
                label: "Restoration",
                value: "restaurant",
                icon: {
                    type: "emoji",
                    name: "🍽",
                    color: "#4B5563"
                }
            },
            {
                id: "other",
                label: "Other...",
                value: "other",
                icon: {
                    type: "emoji",
                    name: "💬",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "has_debt",
        type: "choice",
        title: "Does your company have debt?",
        description: "Whatever your situation, Captain Contrat can support you in your efforts.",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "yes",
                label: "Yes",
                value: "yes",
                icon: {
                    type: "emoji",
                    name: "✅",
                    color: "#4B5563"
                }
            },
            {
                id: "no",
                label: "No",
                value: "no",
                icon: {
                    type: "emoji",
                    name: "❌",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "can_repay_debt",
        type: "choice",
        title: "Are you able to repay your debts?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "yes",
                label: "Yes",
                value: "yes",
                icon: {
                    type: "emoji",
                    name: "✅",
                    color: "#4B5563"
                }
            },
            {
                id: "no",
                label: "No",
                value: "no",
                icon: {
                    type: "emoji",
                    name: "❌",
                    color: "#4B5563"
                }
            },
            {
                id: "unknown",
                label: "I don't know",
                value: "unknown",
                icon: {
                    type: "emoji",
                    name: "❓",
                    color: "#4B5563"
                }
            }
        ]
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
            { id: "email", label: "Email *", placeholder: "captain.contrat@gmail.com", required: true },
            { id: "phone", label: "Phone number *", placeholder: "06 01 02 03 04", required: true }
        ]
    }
]; 