import { FunnelQuestion } from "@/types/funnel";
import hurry from "../../../public/icons/hurry.png";
import nohurry from "../../../public/icons/nohurry.png";

export const closeMicroBusinessQuestions: FunnelQuestion[] = [
    {
        id: "closure_timing",
        type: "choice",
        title: "Welcome! How soon would you like to close your micro-business?",
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
            },
        ],
    },
    {
        id: "activity_type",
        type: "choice",
        title: "Noted! What type of activity do you do?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "commercial",
                label: "Commercial",
                value: "commercial",
                icon: {
                    type: "emoji",
                    name: "🏪",
                    color: "#4B5563"
                }
            },
            {
                id: "liberal",
                label: "Liberal",
                value: "liberal",
                icon: {
                    type: "emoji",
                    name: "💼",
                    color: "#4B5563"
                }
            },
            {
                id: "artisanal",
                label: "Artisanal",
                value: "artisanal",
                icon: {
                    type: "emoji",
                    name: "🛠️",
                    color: "#4B5563"
                }
            },
        ],
        helpText: "💡 Unfortunately, we do not yet support the closure of small-scale businesses. If you have any questions about your type of business, please feel free to complete the questionnaire; our advisors will be able to assist you.",
    },
    {
        id: "future_business",
        type: "choice",
        title: "Perfect! Do you want to start a business after deregistering your sole proprietorship?",
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
                    name: "❌",
                    color: "#4B5563"
                }
            },
            {
                id: "undecided",
                label: "I don't know",
                value: "undecided",
                icon: {
                    type: "emoji",
                    name: "🤔",
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