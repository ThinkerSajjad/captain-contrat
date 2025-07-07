import { FunnelQuestion } from "@/types/funnel";

export const subcontractingQuestions: FunnelQuestion[] = [
    {
        id: "role",
        type: "choice",
        title: "You are ?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "provider",
                label: "The one who performs the service",
                value: "provider",
                icon: {
                    type: "emoji",
                    name: "🛠️",
                    color: "#4B5563"
                }
            },
            {
                id: "client",
                label: "The one who orders a service",
                value: "client",
                icon: {
                    type: "emoji",
                    name: "📋",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "business_activity",
        type: "choice",
        title: "What activity do you carry out?",
        description: "For the sake of clarity, we only display the most frequent sectors of activity, but we remain able to support you whatever your activity.",
        navigation: {
            autoProgress: true,
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
        id: "mission_type",
        type: "choice",
        title: "What type of missions do you want to contract?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "material",
                label: "Material services (work, manufacturing of a product, etc.)",
                value: "material",
                icon: {
                    type: "emoji",
                    name: "🔧",
                    color: "#4B5563"
                }
            },
            {
                id: "intellectual",
                label: "Intellectual services (consulting, coaching, etc.)",
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
        id: "reason",
        type: "choice",
        title: "Why use a subcontracting contract ?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "increased_activity",
                label: "Responding to an increase in activity",
                value: "increased_activity",
                icon: {
                    type: "emoji",
                    name: "📈",
                    color: "#4B5563"
                }
            },
            {
                id: "expertise",
                label: "Benefit from external expertise",
                value: "expertise",
                icon: {
                    type: "emoji",
                    name: "🎯",
                    color: "#4B5563"
                }
            },
            {
                id: "unsure",
                label: "I don't know",
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
        id: "service_need",
        type: "choice",
        title: "What are you looking for ?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "review",
                label: "I want a lawyer to review my already drafted contract",
                value: "review",
                icon: {
                    type: "emoji",
                    name: "📝",
                    color: "#4B5563"
                }
            },
            {
                id: "draft",
                label: "I want a lawyer to draw up my contract",
                value: "draft",
                icon: {
                    type: "emoji",
                    name: "✍️",
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
            { id: "firstName", label: "First name", placeholder: "Philippe", required: true },
            { id: "lastName", label: "Name", placeholder: "Durand", required: true },
            { id: "email", label: "Email", placeholder: "captain.contrat@gmail.com", required: true },
            { id: "phone", label: "Phone number", placeholder: "06 01 02 03 04", required: true }
        ]
    }
]; 