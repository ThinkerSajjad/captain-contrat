import { FunnelQuestion } from "@/types/funnel";
import user from "../../../public/icons/user.png";
import users from "../../../public/icons/users.png";
import house from "../../../public/icons/House.svg";
import ccLogo from "../../../public/icons/cc-logo.png";
import check from "../../../public/icons/check.png";
import question from "../../../public/icons/question.png";

export const changeYourCompanyQuestions: FunnelQuestion[] = [
    {
        id: "change_types",
        type: "choice",
        multiSelect: true,
        title: "What type(s) of change(s) do you want to make to your business?",
        navigation: {
            showSkip: true,
            showContinue: true,
        },
        options: [
            {
                id: "head_office",
                label: "Head office",
                value: "head_office",
                icon: {
                    type: "image",
                    name: house,
                    color: "#4B5563"
                }
            },
            {
                id: "manager_appointment",
                label: "Appointment of a manager",
                value: "manager_appointment",
                icon: {
                    type: "emoji",
                    name: "👨‍💼",
                    color: "#4B5563"
                }
            },
            {
                id: "corporate_purpose",
                label: "Corporate purpose",
                value: "corporate_purpose",
                icon: {
                    type: "emoji",
                    name: "📝",
                    color: "#4B5563"
                }
            },
            {
                id: "closing_date",
                label: "Closing date",
                value: "closing_date",
                icon: {
                    type: "emoji",
                    name: "📅",
                    color: "#4B5563"
                }
            },
            {
                id: "company_name",
                label: "Company name",
                value: "company_name",
                icon: {
                    type: "emoji",
                    name: "💼",
                    color: "#4B5563"
                }
            },
            {
                id: "trade_name",
                label: "Trade name",
                value: "trade_name",
                icon: {
                    type: "emoji",
                    name: "🏷️",
                    color: "#4B5563"
                }
            },
            {
                id: "manager_address",
                label: "Personal address of the manager",
                value: "manager_address",
                icon: {
                    type: "emoji",
                    name: "🏠",
                    color: "#4B5563"
                }
            },
            {
                id: "secondary_school",
                label: "Secondary school",
                value: "secondary_school",
                icon: {
                    type: "emoji",
                    name: "🏫",
                    color: "#4B5563"
                }
            }
        ],
        helpText: "💡 Do you have several changes to make? Take advantage of it, the fees are the same!"
    },
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
                id: "multi_personal",
                label: "Multipersonal",
                subLabel: "SARL / SAS / SCI",
                value: "multi_personal",
                icon: {
                    type: "image",
                    name: users,
                    color: "#4B5563"
                }
            },
            {
                id: "single_person",
                label: "Single-person",
                subLabel: "SASU / EURL",
                value: "single_person",
                icon: {
                    type: "image",
                    name: user,
                    color: "#4B5563"
                }
            }
        ],
        helpText: "Please note that we do not make changes for micro-enterprises and sole proprietorships, only for companies."
    },
    {
        id: "same_department",
        type: "choice",
        title: "Is the address of your new head office located in the same department as the current one?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "yes_same_department",
                label: "Yes, I'm staying in the same department.",
                value: "yes",
                icon: {
                    type: "image",
                    name: check,
                    color: "#4B5563"
                }
            },
            {
                id: "no_different_department",
                label: "No, I'm changing departments",
                value: "no",
                icon: {
                    type: "emoji",
                    name: "🔄",
                    color: "#4B5563"
                }
            }
        ],
        helpText: "In the event of a change of department, two legal notices must be published, one in the original department and another in the new department."
    },
    {
        id: "started_with_cc",
        type: "choice",
        title: "Did you start your business with Captain Contrat?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "yes_with_cc",
                label: "Yes",
                value: "yes",
                icon: {
                    type: "image",
                    name: ccLogo,
                    color: "#4B5563"
                }
            },
            {
                id: "no_without_cc",
                label: "No",
                value: "no",
                icon: {
                    type: "emoji",
                    name: "❌",
                    color: "#4B5563"
                }
            }
        ],
        helpText: "If you created your company with Captain Contrat, we will take care of updating your articles of association free of charge."
    },
    {
        id: "beneficial_owners",
        type: "choice",
        title: "Have you already filed your list of beneficial owners?",
        navigation: {
            autoProgress: true,
            showSkip: true,
        },
        options: [
            {
                id: "yes_filed",
                label: "Yes it's done",
                value: "yes",
                icon: {
                    type: "image",
                    name: check,
                    color: "#4B5563"
                }
            },
            {
                id: "no_never",
                label: "No, never",
                value: "no",
                icon: {
                    type: "emoji",
                    name: "❌",
                    color: "#4B5563"
                }
            },
            {
                id: "dont_know",
                label: "I don't know",
                value: "dont_know",
                icon: {
                    type: "image",
                    name: question,
                    color: "#4B5563"
                }
            }
        ],
        helpText: "If you have never filed a list of beneficial owners, we will handle the initial filing. If you have already filed it, we will update it."
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
            { id: "phone", label: "Phone number", placeholder: "Your phone number", required: true }
        ],
        helpText: "This information is essential to create your space and facilitate contact with our experts."
    }
]; 