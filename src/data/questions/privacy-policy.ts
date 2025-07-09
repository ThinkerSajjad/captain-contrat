import { FunnelQuestion } from "@/types/funnel";

export const privacyPolicyQuestions: FunnelQuestion[] = [
    {
        id: "contact_info",
        type: "contact_form",
        title: "Sign up to find the lawyer recommended for you",
        description: "This information is essential to create your space and facilitate contact with our experts.",
        helpText: "Your information is essential to finalize your order. We guarantee the confidentiality of the information you provide to us.",
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