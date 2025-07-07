import { FunnelQuestion } from "@/types/funnel";

export const permanentContractQuestions: FunnelQuestion[] = [
    {
        id: "user_situation",
        type: "choice",
        title: "What is your situation?",
        description: "Our lawyers will only be able to assist you if you are an entrepreneur or business manager.",
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
                    type: "emoji",
                    name: "👔",
                    color: "#4B5563"
                }
            },
            {
                id: "individual",
                label: "I am an individual or an employee",
                value: "individual",
                icon: {
                    type: "emoji",
                    name: "👤",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "first_employee",
        type: "choice",
        title: "Is this your first employee ?",
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
                    name: "🔄",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "employee_status",
        type: "choice",
        title: "What will be the status of your employee?",
        description: "Knowing your future employee's status allows us to tailor our support to your specific situation. If you're unsure yet, we'll help you make your choice.",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "frame",
                label: "Frame",
                value: "frame",
                icon: {
                    type: "emoji",
                    name: "👨‍💼",
                    color: "#4B5563"
                }
            },
            {
                id: "supervisor",
                label: "Supervisor",
                value: "supervisor",
                icon: {
                    type: "emoji",
                    name: "👨‍💻",
                    color: "#4B5563"
                }
            },
            {
                id: "employee",
                label: "Employee",
                value: "employee",
                icon: {
                    type: "emoji",
                    name: "👨‍🔧",
                    color: "#4B5563"
                }
            },
            {
                id: "unsure",
                label: "I don't know yet",
                value: "unsure",
                icon: {
                    type: "emoji",
                    name: "❓",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "work_time",
        type: "choice",
        title: "Will your employee be full-time or part-time ?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "full_time",
                label: "Full time",
                value: "full_time",
                icon: {
                    type: "emoji",
                    name: "⏰",
                    color: "#4B5563"
                }
            },
            {
                id: "part_time",
                label: "Part-time",
                value: "part_time",
                icon: {
                    type: "emoji",
                    name: "🕐",
                    color: "#4B5563"
                }
            },
            {
                id: "unsure",
                label: "I don't know yet",
                value: "unsure",
                icon: {
                    type: "emoji",
                    name: "❓",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "hiring_timeline",
        type: "choice",
        title: "When do you expect to start hiring ?",
        description: "Are you in a hurry? We adapt our support.",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "immediate",
                label: "As soon as possible",
                subLabel: "In a week",
                value: "immediate",
                icon: {
                    type: "emoji",
                    name: "⚡",
                    color: "#4B5563"
                }
            },
            {
                id: "later",
                label: "In some time",
                subLabel: "In more than a week",
                value: "later",
                icon: {
                    type: "emoji",
                    name: "📅",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "contact_info",
        type: "contact_form",
        title: "Sign up to discover our support packages",
        description: "This information is essential to create your space and facilitate contact with our experts.",
        navigation: {
            showContinue: false,
        },
        fields: [
            { id: "firstName", label: "First name", placeholder: "Philippe", required: true },
            { id: "lastName", label: "Name", placeholder: "Durand", required: true },
            { id: "email", label: "Email", placeholder: "captain.contrat@gmail.com", required: true },
            { id: "phone", label: "Phone number", placeholder: "06 01 02 03 04", required: true }
        ]
    }
]; 