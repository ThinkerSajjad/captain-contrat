import { FunnelQuestion } from "@/types/funnel";
import user from "../../../public/icons/user.png";
import company from "../../../public/icons/company.png";
import check from "../../../public/icons/check.png";

export const eligibilityForACREQuestions: FunnelQuestion[] = [
    {
        id: "age_range",
        type: "choice",
        title: "How old are you?",
        navigation: {
            autoProgress: true,
            showSkip: false,
        },
        options: [
            {
                id: "under_18",
                label: "17 years or younger",
                value: "under_18",
                icon: {
                    type: "emoji",
                    name: "👶",
                    color: "#4B5563"
                }
            },
            {
                id: "18_to_25",
                label: "Between 18 and 25 years old inclusive",
                value: "18_to_25",
                icon: {
                    type: "emoji",
                    name: "🧑",
                    color: "#4B5563"
                }
            },
            {
                id: "26_to_29",
                label: "Between 26 and 29 years old inclusive",
                value: "26_to_29",
                icon: {
                    type: "emoji",
                    name: "👨",
                    color: "#4B5563"
                }
            },
            {
                id: "30_plus",
                label: "30 years or older",
                value: "30_plus",
                icon: {
                    type: "emoji",
                    name: "👴",
                    color: "#4B5563"
                }
            },
        ],
    },
    {
        id: "legal_form",
        type: "choice",
        title: "What legal form do you want to create?",
        navigation: {
            autoProgress: true,
            showSkip: false,
        },
        options: [
            {
                id: "sas",
                label: "SAS",
                subLabel: "Flexible, multi-personal",
                value: "sas",
                icon: {
                    type: "image",
                    name: company,
                    color: "#4B5563"
                }
            },
            {
                id: "sasu",
                label: "SASU",
                subLabel: "Flexible, one-person",
                value: "sasu",
                icon: {
                    type: "image",
                    name: user,
                    color: "#4B5563"
                }
            },
            {
                id: "sarl",
                label: "SARL",
                subLabel: "Supervised, multi-personal",
                value: "sarl",
                icon: {
                    type: "image",
                    name: company,
                    color: "#4B5563"
                }
            },
            {
                id: "eurl",
                label: "EURL",
                subLabel: "Framed, single-person",
                value: "eurl",
                icon: {
                    type: "image",
                    name: user,
                    color: "#4B5563"
                }
            },
            {
                id: "micro_enterprise",
                label: "Micro-enterprise",
                subLabel: "Lighter tax regime",
                value: "micro_enterprise",
                icon: {
                    type: "image",
                    name: company,
                    color: "#4B5563"
                }
            },
            {
                id: "other",
                label: "Other",
                value: "other",
                icon: {
                    type: "emoji",
                    name: "🤔",
                    color: "#4B5563"
                }
            },
        ],
        helpText: "💡 If you are not yet sure which legal form you will choose, or if it does not appear among the choices offered, select \"Other\" and we will guide you according to your situation.",
    },
    {
        id: "capital_situation",
        type: "choice",
        title: "Are you in one of the following situations?",
        navigation: {
            autoProgress: true,
            showSkip: false,
        },
        options: [
            {
                id: "more_than_50",
                label: "Hold more than 50% of capital",
                value: "more_than_50",
                icon: {
                    type: "emoji",
                    name: "📈",
                    color: "#4B5563"
                }
            },
            {
                id: "more_than_25",
                label: "At least 25% of capital",
                value: "more_than_25",
                icon: {
                    type: "emoji",
                    name: "📊",
                    color: "#4B5563"
                }
            },
            {
                id: "manager",
                label: "You are manager",
                value: "manager",
                icon: {
                    type: "emoji",
                    name: "👔",
                    color: "#4B5563"
                }
            },
            {
                id: "none",
                label: "None of these",
                value: "none",
                icon: {
                    type: "emoji",
                    name: "❌",
                    color: "#4B5563"
                }
            },
        ],
    },
    {
        id: "previous_acre",
        type: "choice",
        title: "Have you already benefited from ACRE in the last 3 years?",
        navigation: {
            autoProgress: true,
            showSkip: false,
        },
        options: [
            {
                id: "yes_acre",
                label: "Yes",
                value: "yes",
                icon: {
                    type: "emoji",
                    name: "✅",
                    color: "#4B5563"
                }
            },
            {
                id: "no_acre",
                label: "No",
                value: "no",
                icon: {
                    type: "emoji",
                    name: "❌",
                    color: "#4B5563"
                }
            },
        ],
    },
    {
        id: "contact_info",
        type: "contact_form",
        title: "Great 🎉 Who is doing the paperwork?",
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
    },
]; 