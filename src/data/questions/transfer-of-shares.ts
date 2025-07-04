import { FunnelQuestion } from "@/types/funnel";
import hurry from "../../../public/icons/hurry.png";
import nohurry from "../../../public/icons/nohurry.png";

export const transferOfSharesQuestions: FunnelQuestion[] = [
    {
        id: "legal_form",
        type: "choice",
        title: "What is the legal form of your company?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "sarl",
                label: "SARL",
                value: "sarl",
                icon: {
                    type: "emoji",
                    name: "🏢",
                    color: "#4B5563"
                }
            },
            {
                id: "sas",
                label: "SAS",
                value: "sas",
                icon: {
                    type: "emoji",
                    name: "🏛️",
                    color: "#4B5563"
                }
            },
            {
                id: "sci",
                label: "SCI",
                value: "sci",
                icon: {
                    type: "emoji",
                    name: "🏘️",
                    color: "#4B5563"
                }
            },
            {
                id: "sasu",
                label: "SASU",
                value: "sasu",
                icon: {
                    type: "emoji",
                    name: "👤",
                    color: "#4B5563"
                }
            },
            {
                id: "eurl",
                label: "EURL",
                value: "eurl",
                icon: {
                    type: "emoji",
                    name: "💼",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "change_leader",
        type: "choice",
        title: "Do you want to change your leader?",
        description: "If the transfer results in the resignation or appointment of a manager, additional formalities are required. Our legal experts will handle these.",
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
            }
        ]
    },
    {
        id: "created_with_cc",
        type: "choice",
        title: "Did you create your company with Captain Contrat?",
        description: "If you created your company with Captain Contrat, we can update your articles of association.",
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
            }
        ]
    },
    {
        id: "shares_buyer",
        type: "choice",
        title: "Who will your company shares be sold to?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "current_partner",
                label: "To one of the current partners of the company",
                value: "current_partner",
                icon: {
                    type: "emoji",
                    name: "👥",
                    color: "#4B5563"
                }
            },
            {
                id: "other_person",
                label: "To another person",
                value: "other_person",
                icon: {
                    type: "emoji",
                    name: "🤝",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "completion_timing",
        type: "choice",
        title: "How soon do you want to complete your sale?",
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
        id: "partners_after_sale",
        type: "choice",
        title: "After the sale, how many partners will you have?",
        description: "If your transfer involves moving from several partners to a single partner, additional formalities will be necessary.",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "single_partner",
                label: "There will be only one partner",
                value: "single_partner",
                icon: {
                    type: "emoji",
                    name: "👤",
                    color: "#4B5563"
                }
            },
            {
                id: "multiple_partners",
                label: "There will be several partners",
                value: "multiple_partners",
                icon: {
                    type: "emoji",
                    name: "👥",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "contact_info",
        type: "contact_form",
        title: "Great 🎉 Who is doing the paperwork?",
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