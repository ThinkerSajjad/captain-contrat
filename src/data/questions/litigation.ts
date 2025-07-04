import { FunnelQuestion } from "@/types/funnel";
import coach from "../../../public/icons/coach.png";
import without from "../../../public/icons/without.jpg";

export const litigationQuestions: FunnelQuestion[] = [
    {
        id: "business_activity",
        type: "choice",
        title: "What activity do you carry out?",
        navigation: {
            autoProgress: false,
            showSkip: true,
            showContinue: true,
        },
        options: [
            {
                id: "physical_commerce",
                label: "🛍  Physical commerce",
                value: "physical_commerce",
            },
            {
                id: "e_commerce",
                label: "💸  E-commerce site",
                value: "e_commerce",
            },
            {
                id: "real_estate",
                label: "🏡  Real estate rental",
                value: "real_estate",
            },
            {
                id: "business_consulting",
                label: "📊  Business consulting",
                value: "business_consulting",
            },
            {
                id: "construction",
                label: "🚧  Construction",
                value: "construction",
            },
            {
                id: "software",
                label: "💾  Software publisher",
                value: "software",
            },
            {
                id: "taxi",
                label: "🚖  Taxi",
                value: "taxi",
            },
            {
                id: "restaurant",
                label: "🍽  Restoration",
                value: "restaurant",
            },
            {
                id: "other",
                label: "💬  Other...",
                value: "other",
            },
        ],
        helpText: "💡 For clarity, only the most common sectors are displayed, but our support adapts to any activity.",
    },
    {
        id: "lawyer_experience",
        type: "choice",
        title: "Have you ever used a lawyer?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "first_time",
                label: "No, it's a first",
                value: "first_time",
                icon: {
                    type: "emoji",
                    name: "👋",
                    color: "#4B5563"
                }
            },
            {
                id: "sometimes",
                label: "Yes, sometimes",
                value: "sometimes",
                icon: {
                    type: "emoji",
                    name: "🤔",
                    color: "#4B5563"
                }
            },
            {
                id: "often",
                label: "Yes, it happens to me often",
                value: "often",
                icon: {
                    type: "emoji",
                    name: "👍",
                    color: "#4B5563"
                }
            },
        ],
    },
    {
        id: "location_preference",
        type: "choice",
        title: "Do you need the lawyer to be located in your area?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "yes_local",
                label: "Yes",
                value: "yes",
                icon: {
                    type: "emoji",
                    name: "✅",
                    color: "#4B5563"
                }
            },
            {
                id: "no_remote",
                label: "No",
                value: "no",
                icon: {
                    type: "emoji",
                    name: "❌",
                    color: "#4B5563"
                }
            },
        ],
        helpText: "💡 By default, everything is online, but if necessary, in-person meetings are possible. Your lawyer is available by phone or video for a modern legal experience. 🚀",
    },
    {
        id: "advisor_appointment",
        type: "choice",
        title: "Would you like to discuss your project with one of our advisors?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "make_appointment",
                label: "I make an appointment",
                value: "make_appointment",
                icon: {
                    type: "image",
                    name: coach,
                    color: "#4B5563"
                }
            },
            {
                id: "no_appointment",
                label: "Not at the moment",
                value: "no_appointment",
                icon: {
                    type: "image",
                    name: without,
                    color: "#4B5563"
                }
            },
        ],
        helpText: "💡 Our advisors can assist you in refining your needs, which will allow us to better direct your request to a competent lawyer.",
        nextStep: (response) => {
            if (response === "make_appointment") {
                return "appointment_slot";
            } else {
                return "contact_info";
            }
        },
    },
    {
        id: "appointment_slot",
        type: "choice",
        title: "Choose the slot that suits you",
        navigation: {
            autoProgress: true,
        },
        options: [
            { id: "monday_10_00", label: "Monday, June 23 · 10:00", value: "Monday, June 23 · 10:00" },
            { id: "monday_10_15", label: "Monday, June 23 · 10:15", value: "Monday, June 23 · 10:15" },
            { id: "monday_10_30", label: "Monday, June 23 · 10:30", value: "Monday, June 23 · 10:30" },
            { id: "monday_10_45", label: "Monday, June 23 · 10:45", value: "Monday, June 23 · 10:45" },
            { id: "monday_11_00", label: "Monday, June 23 · 11:00", value: "Monday, June 23 · 11:00" },
            { id: "monday_11_15", label: "Monday, June 23 · 11:15", value: "Monday, June 23 · 11:15" },
            { id: "tuesday_10_15", label: "Tuesday, June 24 · 10:15", value: "Tuesday, June 24 · 10:15" },
            { id: "tuesday_14_15", label: "Tuesday, June 24 · 14:15", value: "Tuesday, June 24 · 14:15" },
        ],
        nextStep: "appointment_contact",
    },
    {
        id: "appointment_contact",
        type: "contact_form",
        title: "Enter your contact details",
        navigation: {
            showContinue: false,
        },
        fields: [
            { id: "firstName", label: "Your first name", placeholder: "Your first name" },
            { id: "lastName", label: "Your name", placeholder: "Your last name" },
            { id: "email", label: "Your email", placeholder: "Your email address", required: true },
            { id: "phone", label: "Your phone number", placeholder: "Your phone number", required: true },
        ],
        nextStep: "appointment_dashboard",
    },
    {
        id: "appointment_dashboard",
        type: "info",
        title: "Your appointment is confirmed!",
        description: "Thank you for scheduling an appointment with our advisor.",
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