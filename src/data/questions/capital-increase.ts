import { FunnelQuestion } from "@/types/funnel";
import hurry from "../../../public/icons/hurry.png";
import nohurry from "../../../public/icons/nohurry.png";

export const capitalIncreaseQuestions: FunnelQuestion[] = [
    {
        id: "role",
        type: "choice",
        title: "You are?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "manager",
                label: "I run the company",
                value: "manager",
                icon: {
                    type: "emoji",
                    name: "👨‍💼",
                    color: "#4B5563"
                }
            },
            {
                id: "partner",
                label: "I am a partner in the company",
                value: "partner",
                icon: {
                    type: "emoji",
                    name: "🤝",
                    color: "#4B5563"
                }
            },
            {
                id: "both",
                label: "Both",
                value: "both",
                icon: {
                    type: "emoji",
                    name: "👥",
                    color: "#4B5563"
                }
            },
            {
                id: "other",
                label: "Other",
                value: "other",
                icon: {
                    type: "emoji",
                    name: "❓",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "activity_type",
        type: "choice",
        title: "What activity do you carry out?",
        description: "For the sake of clarity, we only display the most frequent sectors of activity, but we remain able to support you whatever your activity.",
        navigation: {
            showContinue:true,
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
        id: "increase_reason",
        type: "choice",
        title: "Why do you want to increase capital?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "new_partners",
                label: "To bring in new partners",
                value: "new_partners",
                icon: {
                    type: "emoji",
                    name: "👥",
                    color: "#4B5563"
                }
            },
            {
                id: "financial_health",
                label: "To improve the financial health of the company",
                value: "financial_health",
                icon: {
                    type: "emoji",
                    name: "📈",
                    color: "#4B5563"
                }
            },
            {
                id: "other_reasons",
                label: "I have other reasons",
                value: "other_reasons",
                icon: {
                    type: "emoji",
                    name: "🤔",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "increase_method",
        type: "choice",
        title: "How do you want to increase the company's capital?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "money",
                label: "With money",
                value: "money",
                icon: {
                    type: "emoji",
                    name: "💰",
                    color: "#4B5563"
                }
            },
            {
                id: "property",
                label: "With property (building, shares, etc.)",
                value: "property",
                icon: {
                    type: "emoji",
                    name: "🏢",
                    color: "#4B5563"
                }
            },
            {
                id: "both",
                label: "With both",
                value: "both",
                icon: {
                    type: "emoji",
                    name: "🔄",
                    color: "#4B5563"
                }
            },
            {
                id: "other",
                label: "Other",
                value: "other",
                icon: {
                    type: "emoji",
                    name: "❓",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "urgency",
        type: "choice",
        title: "How quickly do you need to increase your capital?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "asap",
                label: "As soon as possible",
                value: "asap",
                icon: {
                    type: "image",
                    name: hurry,
                    color: "#4B5563"
                }
            },
            {
                id: "no_hurry",
                label: "I'm in no hurry",
                value: "no_hurry",
                icon: {
                    type: "image",
                    name: nohurry,
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "support_type",
        type: "choice",
        title: "What type of support do you need?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "questions",
                label: "I want to ask a lawyer some questions.",
                value: "questions",
                icon: {
                    type: "emoji",
                    name: "❓",
                    color: "#4B5563"
                }
            },
            {
                id: "full_support",
                label: "I want to be accompanied in my procedures by a lawyer",
                value: "full_support",
                icon: {
                    type: "emoji",
                    name: "👨‍⚖️",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "contact_info",
        type: "contact_form",
        title: "Sign up to find the lawyer recommended for you",
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