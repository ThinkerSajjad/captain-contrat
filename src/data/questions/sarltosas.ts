import { FunnelQuestion } from "@/types/funnel";
import user from "../../../public/icons/user.png";
import ccLogo from "../../../public/icons/cc-logo.png";
import hurry from "../../../public/icons/hurry.png";
import nohurry from "../../../public/icons/nohurry.png";
import question from "../../../public/icons/question.png";

export const sarlToSasQuestions: FunnelQuestion[] = [
    {
        id: "change_types",
        type: "choice",
        title: "What type(s) of change(s) do you want to make to your business?",
        navigation: {
            autoProgress: false,
            showSkip: false,
            showContinue: true,
        },
        options: [
            {
                id: "head_office",
                label: "Head office",
                value: "head_office",
                icon: {
                    type: "emoji",
                    name: "🏢",
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
            }
        ],
        helpText: "💡 Do you have several changes to make? Take advantage of it, the fees are the same!"
    },
    {
        id: "manager_president",
        type: "choice",
        title: "Will the manager of the SARL be the President of the SAS?",
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
                    type: "image",
                    name: user,
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
                id: "dont_know",
                label: "I don't know yet",
                value: "dont_know",
                icon: {
                    type: "image",
                    name: question,
                    color: "#4B5563"
                }
            }
        ],
        helpText: "While the SARL is managed by one or more managers, the SAS is managed by a President and one or more general managers."
    },
    {
        id: "transformation_report",
        type: "choice",
        title: "How do you want to achieve the transformation report?",
        navigation: {
            autoProgress: true,
            showSkip: false,
        },
        options: [
            {
                id: "captain_partner",
                label: "I am commissioning Captain Contrat's partner",
                value: "captain_partner",
                icon: {
                    type: "image",
                    name: ccLogo,
                    color: "#4B5563"
                }
            },
            {
                id: "own_auditor",
                label: "I call on my auditor",
                value: "own_auditor",
                icon: {
                    type: "emoji",
                    name: "👨‍💼",
                    color: "#4B5563"
                }
            }
        ],
        helpText: "This report is mandatory in the context of a transformation of an SARL into an SAS. It must be drawn up by a statutory auditor or a transformation auditor."
    },
    {
        id: "transformation_speed",
        type: "choice",
        title: "How quickly would you like to complete the transformation process?",
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
                id: "no_rush",
                label: "I'm in no hurry",
                value: "no_rush",
                icon: {
                    type: "image",
                    name: nohurry,
                    color: "#4B5563"
                }
            }
        ]
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