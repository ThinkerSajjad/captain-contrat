import { FunnelQuestion } from "@/types/funnel";
import handshake from "../../../public/icons/handshake.png";
import company from "../../../public/icons/company.png";
import check from "../../../public/icons/check.png";

export const vatAndTaxRegimeQuestions: FunnelQuestion[] = [
    {
        id: "activity_type",
        type: "choice",
        title: "What type of activity do you do?",
        navigation: {
            autoProgress: true,
            showSkip: false,
        },
        options: [
            {
                id: "services",
                label: "I provide services",
                value: "services",
                icon: {
                    type: "image",
                    name: handshake,
                    color: "#4B5563"
                }
            },
            {
                id: "commercial",
                label: "I have a commercial or accommodation activity",
                value: "commercial",
                icon: {
                    type: "image",
                    name: company,
                    color: "#4B5563"
                }
            },
        ],
    },
    {
        id: "turnover_range",
        type: "choice",
        title: "How much will your turnover be this year?",
        navigation: {
            autoProgress: true,
            showSkip: false,
        },
        options: [
            {
                id: "less_than_36800",
                label: "Less than €36,800",
                value: "less_than_36800",
            },
            {
                id: "between_36800_254000",
                label: "Between €36,800 and €254,000",
                value: "between_36800_254000",
            },
            {
                id: "between_254000_10m",
                label: "Between €254,000 and €10 million",
                value: "between_254000_10m",
            },
            {
                id: "greater_than_10m",
                label: "Greater than €10 million",
                value: "greater_than_10m",
            },
        ],
    },
    {
        id: "vat_amount",
        type: "choice",
        title: "Is the VAT amount you charge more than €15,000?",
        navigation: {
            autoProgress: true,
            showSkip: false,
        },
        options: [
            {
                id: "yes_vat",
                label: "Yes",
                value: "yes",
                icon: {
                    type: "image",
                    name: check,
                    color: "#4B5563"
                }
            },
            {
                id: "no_vat",
                label: "No",
                value: "no",
                icon: {
                    type: "emoji",
                    name: "❌",
                    color: "#4B5563"
                }
            },
        ],
    },
    {
        id: "stock_exchange",
        type: "choice",
        title: "Is your company listed on the stock exchange?",
        navigation: {
            autoProgress: true,
            showSkip: false,
        },
        options: [
            {
                id: "yes_listed",
                label: "Yes",
                value: "yes",
                icon: {
                    type: "image",
                    name: check,
                    color: "#4B5563"
                }
            },
            {
                id: "no_listed",
                label: "No",
                value: "no",
                icon: {
                    type: "emoji",
                    name: "❌",
                    color: "#4B5563"
                }
            },
        ],
    },
    {
        id: "contact_info",
        type: "contact_form",
        title: "Great 🎉 Who is doing the paperwork?",
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
    },
]; 