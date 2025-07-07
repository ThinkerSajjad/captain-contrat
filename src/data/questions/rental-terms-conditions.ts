import { FunnelQuestion } from "@/types/funnel";

export const rentalTermsConditionsQuestions: FunnelQuestion[] = [
    {
        id: "document_need",
        type: "choice",
        title: "What are you looking for?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "proofread",
                label: "I want to have a document already written proofread",
                value: "proofread",
                icon: {
                    type: "emoji",
                    name: "📝",
                    color: "#4B5563"
                }
            },
            {
                id: "write_new",
                label: "I want to have a document written by an expert",
                value: "write_new",
                icon: {
                    type: "emoji",
                    name: "✍️",
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
        id: "rental_type",
        type: "choice",
        title: "What do you want to rent out?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "movable_property",
                label: "Movable property (cars, boats, etc.)",
                value: "movable_property",
                icon: {
                    type: "emoji",
                    name: "🚗",
                    color: "#4B5563"
                }
            },
            {
                id: "real_estate",
                label: "Real estate",
                value: "real_estate",
                icon: {
                    type: "emoji",
                    name: "🏠",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "urgency",
        type: "choice",
        title: "How soon do you need a current account advance agreement?",
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
                    type: "emoji",
                    name: "⚡",
                    color: "#4B5563"
                }
            },
            {
                id: "no_rush",
                label: "I take my time to prepare my project",
                value: "no_rush",
                icon: {
                    type: "emoji",
                    name: "🕒",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "service_type",
        type: "choice",
        title: "What type of service do you think you need?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "standard",
                label: "My business is simple, I need a standard document",
                value: "standard",
                icon: {
                    type: "emoji",
                    name: "📄",
                    color: "#4B5563"
                }
            },
            {
                id: "complex",
                label: "My business is complex, I want a personalized document",
                value: "complex",
                icon: {
                    type: "emoji",
                    name: "📑",
                    color: "#4B5563"
                }
            },
            {
                id: "unsure",
                label: "I don't know how to assess the complexity of this project.",
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
        title: "Sign up to find the lawyer recommended for you",
        description: "This information is essential to create your space and facilitate contact with our experts.",
        helpText: "Your information is essential to finalize your order. We guarantee the confidentiality of the information you provide to us.",
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