import { FunnelQuestion } from "@/types/funnel";

export const salesTermsConditionsQuestions: FunnelQuestion[] = [
    {
        id: "business_offering",
        type: "choice",
        title: "Let's get started! Tell us about your business: what do you offer for sale?",
        description: "Your answers allow us to provide you with a quote from the lawyer best suited to your situation.",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "physical_products",
                label: "Physical products",
                value: "physical_products",
                icon: {
                    type: "emoji",
                    name: "📦",
                    color: "#4B5563"
                }
            },
            {
                id: "services",
                label: "Services",
                value: "services",
                icon: {
                    type: "emoji",
                    name: "💼",
                    color: "#4B5563"
                }
            },
            {
                id: "both",
                label: "Both",
                value: "both",
                icon: {
                    type: "emoji",
                    name: "🛍️",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "online_business",
        type: "choice",
        title: "Is your business conducted online?",
        description: "If you are an e-commerce business, our digital law attorneys will ensure you are GDPR compliant.",
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
                    name: "💻",
                    color: "#4B5563"
                }
            },
            {
                id: "no",
                label: "No",
                value: "no",
                icon: {
                    type: "emoji",
                    name: "🏪",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "customer_type",
        type: "choice",
        title: "Who are your customers?",
        description: "Each client type has its own unique characteristics. Our lawyers will advise you based on your specific situation.",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "individuals",
                label: "Individuals",
                value: "individuals",
                icon: {
                    type: "emoji",
                    name: "👤",
                    color: "#4B5563"
                }
            },
            {
                id: "professionals",
                label: "Professionals",
                value: "professionals",
                icon: {
                    type: "emoji",
                    name: "👔",
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
            }
        ]
    },
    {
        id: "international_business",
        type: "choice",
        title: "Does your business have an international dimension?",
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
                    name: "🌍",
                    color: "#4B5563"
                }
            },
            {
                id: "no",
                label: "No",
                value: "no",
                icon: {
                    type: "emoji",
                    name: "🏠",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "service_need",
        type: "choice",
        title: "Now let's define your expectations: what is your need?",
        description: "Whatever your needs, you can benefit from a free initial consultation with a lawyer within 24 hours. Following your consultation, you will receive a fixed-price quote.",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "review",
                label: "Review of T&Cs",
                value: "review",
                icon: {
                    type: "emoji",
                    name: "📝",
                    color: "#4B5563"
                }
            },
            {
                id: "drafting",
                label: "Drafting of general terms and conditions",
                value: "drafting",
                icon: {
                    type: "emoji",
                    name: "✍️",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "urgency",
        type: "choice",
        title: "Got it! When do you need your T&Cs by?",
        description: "Your choice has no impact on the price of the service. We promise to provide you with your terms and conditions within 72 hours.",
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
                label: "There is no emergency",
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
        id: "contact_info",
        type: "contact_form",
        title: "Thank you for your answers! Who is taking the necessary steps?",
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