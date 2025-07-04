import { FunnelQuestion } from "@/types/funnel";
import user from "../../../public/icons/user.png";
import employee from "../../../public/icons/employee.png";
import hurry from "../../../public/icons/hurry.png";
import nohurry from "../../../public/icons/nohurry.png";
import ccLogo from "../../../public/icons/cc-logo.png";

export const mutualTerminationQuestions: FunnelQuestion[] = [
    {
        id: "user_situation",
        type: "choice",
        title: "What is your situation?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "entrepreneur",
                label: "I am an entrepreneur or business leader",
                value: "entrepreneur",
                icon: {
                    type: "image",
                    name: user,
                    color: "#4B5563"
                }
            },
            {
                id: "individual",
                label: "I am an individual or an employee",
                value: "individual",
                icon: {
                    type: "image",
                    name: employee,
                    color: "#4B5563"
                }
            }
        ],
        helpText: "💡 Our lawyers will only be able to assist you if you are an entrepreneur or business manager."
    },
    {
        id: "employee_count",
        type: "choice",
        title: "How many employees do you have?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "less_than_5",
                label: "Less than 5",
                value: "less_than_5",
                icon: {
                    type: "emoji",
                    name: "👥",
                    color: "#4B5563"
                }
            },
            {
                id: "more_than_5",
                label: "More than 5",
                value: "more_than_5",
                icon: {
                    type: "emoji",
                    name: "👥",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "contract_type",
        type: "choice",
        title: "Is the employee affected by the termination on a permanent or fixed-term contract?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "fixed_term",
                label: "Fixed-term contract",
                value: "fixed_term",
                icon: {
                    type: "emoji",
                    name: "📄",
                    color: "#4B5563"
                }
            },
            {
                id: "permanent",
                label: "Permanent contract",
                value: "permanent",
                icon: {
                    type: "emoji",
                    name: "📋",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "procedure_status",
        type: "choice",
        title: "Where are you in the termination procedure?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "not_started",
                label: "I haven't started anything",
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
                value: "first_steps",
                icon: {
                    type: "emoji",
                    name: "📝",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "urgency",
        type: "choice",
        title: "How quickly do you need assistance?",
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
    }
]; 