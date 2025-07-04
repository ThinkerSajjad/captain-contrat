import { FunnelQuestion } from "@/types/funnel";

export const cguQuestions: FunnelQuestion[] = [
    {
        id: "company_situation",
        type: "choice",
        title: "What is your situation?",
        description: "Depending on your situation, the steps you need to take will vary.\nWe need to understand your needs in order to offer you solutions tailored to your needs.",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "inactive",
                label: "My company is no longer active",
                value: "inactive",
                icon: {
                    type: "emoji",
                    name: "🚫",
                    color: "#4B5563"
                }
            },
            {
                id: "financial_difficulties",
                label: "My company is having financial difficulties",
                value: "financial_difficulties",
                icon: {
                    type: "emoji",
                    name: "💸",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "website_audience",
        type: "choice",
        title: "Who is your website intended for?",
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
                label: "Individuals and professionals",
                value: "both",
                icon: {
                    type: "emoji",
                    name: "🌐",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "website_online",
        type: "choice",
        title: "Has your website been put online yet?",
        description: "If your website is already live, it's essential to have a Terms of Use (TOU) to govern your relationships with your customers. Any relationships established prior to the publication of your TOU will not be subject to them.",
        navigation: {
            showContinue: true,
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
                    name: "❌",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "collect_personal_info",
        type: "choice",
        title: "Do you ask your users to provide you with personal information?",
        description: "Personal information is data that can identify an individual. This could include their name, but also their email address, IP address, telephone number, etc.",
        navigation: {
            showContinue: true,
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
                    name: "❌",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "existing_cgu",
        type: "choice",
        title: "Have you already started writing your T&Cs?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "have_cgu",
                label: "I already have a CGU database, which I want to validate",
                value: "have_cgu",
                icon: {
                    type: "emoji",
                    name: "📄",
                    color: "#4B5563"
                }
            },
            {
                id: "no_cgu",
                label: "I have nothing!",
                value: "no_cgu",
                icon: {
                    type: "emoji",
                    name: "🆕",
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