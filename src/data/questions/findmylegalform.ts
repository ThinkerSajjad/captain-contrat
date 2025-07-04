import { FunnelQuestion } from "@/types/funnel";
import user from "../../../public/icons/user.png";
import users from "../../../public/icons/users.png";
import company from "../../../public/icons/company.png";
import coach from "../../../public/icons/coach.png";

export const findMyLegalFormQuestions: FunnelQuestion[] = [
    {
        id: "company_structure",
        type: "choice",
        title: "You are launching your company:",
        navigation: {
            autoProgress: true,
            showSkip: false,
        },
        options: [
            {
                id: "alone",
                label: "Alone",
                value: "alone",
                icon: {
                    type: "image",
                    name: user,
                    color: "#4B5563"
                }
            },
            {
                id: "multiple",
                label: "To several",
                value: "multiple",
                icon: {
                    type: "image",
                    name: users,
                    color: "#4B5563"
                }
            },
        ],
    },
    {
        id: "profit_objective",
        type: "choice",
        title: "Is your main objective to make a profit? (profit-making activity)",
        navigation: {
            autoProgress: true,
            showSkip: false,
        },
        options: [
            {
                id: "yes_profit",
                label: "Yes",
                value: "yes",
                icon: {
                    type: "image",
                    name: company,
                    color: "#4B5563"
                }
            },
            {
                id: "no_profit",
                label: "No",
                value: "no",
                icon: {
                    type: "image",
                    name: coach,
                    color: "#4B5563"
                }
            },
        ],
        helpText: "💡 88% of entrepreneurs choose this option",
    },
    {
        id: "future_expansion",
        type: "choice",
        title: "Would you like to make it easier for future employees, partners or investors to join your company?",
        navigation: {
            autoProgress: true,
            showSkip: false,
        },
        options: [
            {
                id: "yes_expansion",
                label: "Yes",
                value: "yes",
                icon: {
                    type: "image",
                    name: users,
                    color: "#4B5563"
                }
            },
            {
                id: "no_expansion",
                label: "No",
                value: "no",
                icon: {
                    type: "image",
                    name: user,
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