import { FunnelQuestion } from "@/types/funnel";

export const serviceContractQuestions: FunnelQuestion[] = [
    {
        id: "service_role",
        type: "choice",
        title: "What is your role?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "provider",
                label: "I perform the service",
                value: "provider",
                icon: {
                    type: "emoji",
                    name: "🛠️",
                    color: "#4B5563"
                }
            },
            {
                id: "buyer",
                label: "I buy the service",
                value: "buyer",
                icon: {
                    type: "emoji",
                    name: "💳",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "service_type",
        type: "choice",
        title: "What are the missions?",
        description: "This can be for material services of work, manufacturing of a product etc. and coaching or advice for intellectual services!",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "material",
                label: "Material services",
                value: "material",
                icon: {
                    type: "emoji",
                    name: "🔧",
                    color: "#4B5563"
                }
            },
            {
                id: "intellectual",
                label: "Intellectual service",
                value: "intellectual",
                icon: {
                    type: "emoji",
                    name: "💡",
                    color: "#4B5563"
                }
            },
            {
                id: "both",
                label: "Both",
                value: "both",
                icon: {
                    type: "emoji",
                    name: "🔄",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "partnership_duration",
        type: "choice",
        title: "Do you plan to work with this partner multiple times?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "long_term",
                label: "Yes, this is a long-term partnership.",
                value: "long_term",
                icon: {
                    type: "emoji",
                    name: "🤝",
                    color: "#4B5563"
                }
            },
            {
                id: "one_time",
                label: "No, this is a one-off service.",
                value: "one_time",
                icon: {
                    type: "emoji",
                    name: "📅",
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
        id: "remuneration_method",
        type: "choice",
        title: "What is the method of remuneration envisaged?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "fixed_price",
                label: "A fixed price",
                value: "fixed_price",
                icon: {
                    type: "emoji",
                    name: "💰",
                    color: "#4B5563"
                }
            },
            {
                id: "hourly_rate",
                label: "An hourly rate",
                value: "hourly_rate",
                icon: {
                    type: "emoji",
                    name: "⏱️",
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
        id: "contact_info",
        type: "contact_form",
        title: "Thank you for your answers! Who is taking the necessary steps?",
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