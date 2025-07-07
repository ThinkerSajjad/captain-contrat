import { FunnelQuestion } from "@/types/funnel";

export const commercialLeaseQuestions: FunnelQuestion[] = [
    {
        id: "lease_need",
        type: "choice",
        title: "What are you looking for?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "review",
                label: "I want to have a lease already drawn up reread",
                value: "review",
                icon: {
                    type: "emoji",
                    name: "📝",
                    color: "#4B5563"
                }
            },
            {
                id: "draft",
                label: "I want to have a lease drawn up by an expert",
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
        id: "position",
        type: "choice",
        title: "What is your position?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "owner",
                label: "I own a premises that I want to rent",
                value: "owner",
                icon: {
                    type: "emoji",
                    name: "🏢",
                    color: "#4B5563"
                }
            },
            {
                id: "tenant",
                label: "I want to rent premises to carry out my activity",
                value: "tenant",
                icon: {
                    type: "emoji",
                    name: "🔑",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "business_status",
        type: "choice",
        title: "Under what status do you operate your business?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "sole_proprietorship",
                label: "I have a sole proprietorship (EI, EIRL, micro)",
                value: "sole_proprietorship",
                icon: {
                    type: "emoji",
                    name: "👤",
                    color: "#4B5563"
                }
            },
            {
                id: "company",
                label: "I have a company (SAS, SASU, EURL, etc.)",
                value: "company",
                icon: {
                    type: "emoji",
                    name: "🏢",
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
        id: "urgency",
        type: "choice",
        title: "How soon do you need a lease agreement?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "urgent",
                label: "As soon as possible",
                value: "urgent",
                icon: {
                    type: "emoji",
                    name: "⚡",
                    color: "#4B5563"
                }
            },
            {
                id: "not_urgent",
                label: "I take my time to prepare my project",
                value: "not_urgent",
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