import { FunnelQuestion } from "@/types/funnel";
import user from "../../../public/icons/user.png";
import employee from "../../../public/icons/employee.png";
import question from "../../../public/icons/question.png";
import hurry from "../../../public/icons/hurry.png";
import nohurry from "../../../public/icons/nohurry.png";
import ccLogo from "../../../public/icons/cc-logo.png";

export const dismissalProcedureQuestions: FunnelQuestion[] = [
    {
        id: "dismissal_reason",
        type: "choice",
        title: "Why do you need to lay off employees?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "employee_fault",
                label: "Employee fault",
                value: "employee_fault",
                icon: {
                    type: "emoji",
                    name: "⚠️",
                    color: "#4B5563"
                }
            },
            {
                id: "economic_difficulties",
                label: "Economic difficulties",
                value: "economic_difficulties",
                icon: {
                    type: "emoji",
                    name: "📉",
                    color: "#4B5563"
                }
            },
            {
                id: "other_reason",
                label: "For another reason",
                value: "other_reason",
                icon: {
                    type: "emoji",
                    name: "📋",
                    color: "#4B5563"
                }
            }
        ],
        helpText: "💡 Whatever the reason for the dismissal, we can support you in your process."
    },
    {
        id: "protected_employee",
        type: "choice",
        title: "Is the employee concerned a protected employee?",
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
                    type: "image",
                    name: employee,
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
                id: "dont_know",
                label: "I don't know",
                value: "dont_know",
                icon: {
                    type: "image",
                    name: question,
                    color: "#4B5563"
                }
            }
        ],
        helpText: "💡 To dismiss a protected employee, the labor inspector's approval is required. We will complete this process for you."
    },
    {
        id: "process_status",
        type: "choice",
        title: "Where are you in the dismissal process?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "not_started",
                label: "I haven't started anything",
                subLabel: "I just inquired",
                value: "not_started",
                icon: {
                    type: "emoji",
                    name: "🔍",
                    color: "#4B5563"
                }
            },
            {
                id: "first_steps",
                label: "I have taken the first steps",
                subLabel: "My employee has been notified",
                value: "first_steps",
                icon: {
                    type: "emoji",
                    name: "📝",
                    color: "#4B5563"
                }
            }
        ],
        helpText: "💡 We adapt our support to your progress."
    },
    {
        id: "start_timing",
        type: "choice",
        title: "When would you like to start the procedure?",
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
                id: "in_week",
                label: "In the week",
                value: "in_week",
                icon: {
                    type: "emoji",
                    name: "📅",
                    color: "#4B5563"
                }
            },
            {
                id: "in_month",
                label: "In the month",
                value: "in_month",
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
                id: "few_questions",
                label: "I just have a few questions",
                value: "few_questions",
                icon: {
                    type: "emoji",
                    name: "❓",
                    color: "#4B5563"
                }
            },
            {
                id: "full_delegation",
                label: "I wish to delegate the entire procedure",
                value: "full_delegation",
                icon: {
                    type: "image",
                    name: ccLogo,
                    color: "#4B5563"
                }
            }
        ],
        helpText: "Our network of lawyers adapts to your situation. Your responses allow us to select the lawyer best suited to your needs and provide you with the best possible support."
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