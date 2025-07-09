import { FunnelQuestion } from "@/types/funnel";
import entrepreneur from "../../../public/icons/enterprenuers.png";
import employee from "../../../public/icons/employee.png";
import first_time from "../../../public/icons/first-time.png";
import without from "../../../public/icons/without.jpg";

export const businessLawQuestions: FunnelQuestion[] = [
    {
        id: "user_situation",
        type: "choice",
        title: "What is your situation?",
        description: "Our lawyers will only be able to assist you if you are an entrepreneur or business manager.",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "entrepreneur",
                label: "I am an entrepreneur or business leader",
                value: "entrepreneur",
                icon: {
                    type: "image",
                    name: entrepreneur,
                    color: "#4B5563"
                }
            },
            {
                id: "individual",
                label: "I am an individual or an employee",
                value: "individual",
                icon: {
                    type: "image",
                    name: employee,
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
        id: "lawyer_experience",
        type: "choice",
        title: "Have you ever used a lawyer ?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "first_time",
                label: "No, it's a first.",
                value: "first_time",
                icon: {
                    type: "image",
                    name: first_time,
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
                label: "Yes, it happens to me often.",
                value: "often",
                icon: {
                    type: "emoji",
                    name: "🙋‍♂️",
                    color: "#4B5563"
                }
            }
        ]
    },
    {
        id: "location_preference",
        type: "choice",
        title: "Do you need the lawyer to be located in your area ?",
        description: "By default, everything is online, but if necessary, in-person meetings are possible. Your lawyer is available by phone or video for a modern legal experience. 🚀",
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
        id: "advisor_appointment",
        type: "choice",
        title: "Would you like to discuss your project with one of our advisors ?",
        description: "Our advisors can assist you in refining your needs, which will allow us to better direct your request to a competent lawyer.",
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
                    type: "emoji",
                    name: "📅",
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
            }
        ],
        nextStep: (response) => {
            if (response === "make_appointment") {
                return "appointment_slot";
            } else {
                return "contact_info";
            }
        }
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
        title: "Thank you for your answers! Who is taking the necessary steps ?",
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