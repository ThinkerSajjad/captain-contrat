import { FunnelQuestion } from "@/types/funnel";
import hurry from "../../../public/icons/hurry.png";
import nohurry from "../../../public/icons/nohurry.png";

export const injunctionQuestions: FunnelQuestion[] = [
    {
        id: "injunction_reason",
        type: "choice",
        title: "Why do you want an injunction?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "money_request",
                label: "To request a sum of money",
                value: "money_request",
                icon: {
                    type: "emoji",
                    name: "💰",
                    color: "#4B5563"
                }
            },
            {
                id: "contract_execution",
                label: "To request the execution of a contract",
                value: "contract_execution",
                icon: {
                    type: "emoji",
                    name: "📄",
                    color: "#4B5563"
                }
            },
            {
                id: "other_reasons",
                label: "I have other reasons for requesting this injunction",
                value: "other_reasons",
                icon: {
                    type: "emoji",
                    name: "🤔",
                    color: "#4B5563"
                }
            },
        ],
    },
    {
        id: "recipient_type",
        type: "choice",
        title: "To whom do you want to address this injunction?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "company",
                label: "To a company",
                value: "company",
                icon: {
                    type: "emoji",
                    name: "🏢",
                    color: "#4B5563"
                }
            },
            {
                id: "self_employed",
                label: "To a self-employed person",
                value: "self_employed",
                icon: {
                    type: "emoji",
                    name: "👤",
                    color: "#4B5563"
                }
            },
        ],
    },
    {
        id: "previous_action",
        type: "choice",
        title: "Have you already taken legal action to win your case?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "yes_steps_taken",
                label: "Yes, I took steps myself",
                value: "yes_steps_taken",
                icon: {
                    type: "emoji",
                    name: "✅",
                    color: "#4B5563"
                }
            },
            {
                id: "no_steps",
                label: "No, I haven't started anything",
                value: "no_steps",
                icon: {
                    type: "emoji",
                    name: "❌",
                    color: "#4B5563"
                }
            },
        ],
    },
    {
        id: "service_expectation",
        type: "choice",
        title: "What do you expect from Captain Contrat?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "review_existing",
                label: "I want to have an injunction already written reread",
                value: "review_existing",
                icon: {
                    type: "emoji",
                    name: "👀",
                    color: "#4B5563"
                }
            },
            {
                id: "create_new",
                label: "I want to have an injunction drawn up by an expert",
                value: "create_new",
                icon: {
                    type: "emoji",
                    name: "✍️",
                    color: "#4B5563"
                }
            },
        ],
    },
    {
        id: "urgency",
        type: "choice",
        title: "How quickly do you need support?",
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
                label: "I take my time to prepare my project",
                value: "no_hurry",
                icon: {
                    type: "image",
                    name: nohurry,
                    color: "#4B5563"
                }
            },
        ],
        nextStep: "contact_info",
    },
    {
        id: "contact_info",
        type: "contact_form",
        title: "Thank you for your answers! Who is taking the necessary steps?",
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