import { FunnelQuestion } from "@/types/funnel";
import yes from "../../../public/icons/check.png";
import without from "../../../public/icons/without.jpg";
import loading from "../../../public/icons/loading.png";
import users from "../../../public/icons/users.png";
import handshake from "../../../public/icons/handshake.png";

export const shareholderAgreementQuestions: FunnelQuestion[] = [
  {
    id: "partner_count",
    type: "choice",
    title: "How many partners are there in you?",
    navigation: {
      autoProgress: true,
      showSkip: true
    },
    options: [
      {
        id: "two_partners",
        label: "We are 2 partners",
        value: "two_partners",
        icon: {
          type: "emoji",
          name: "👩‍👦",
          color: "#4B5563"
        }
      },
      {
        id: "three_or_more",
        label: "We are 3 or more partners",
        value: "three_or_more",
        icon: {
          type: "image",
          name: users,
          color: "#4B5563"
        }
      }
    ],
    nextStep: "business_status"
  },
  {
    id: "business_status",
    type: "choice",
    title: "Have you already started your business?",
    navigation: {
      autoProgress: true,
      showSkip: true
    },
    options: [
      {
        id: "created",
        label: "Yes, it is created",
        value: "created",
        icon: {
          type: "image",
          name: yes,
          color: "#4B5563"
        }
      },
      {
        id: "in_progress",
        label: "It's in progress",
        value: "in_progress",
        icon: {
          type: "image",
          name: loading,
          color: "#4B5563"
        }
      },
      {
        id: "not_yet",
        label: "No not yet",
        value: "not_yet",
        icon: {
          type: "image",
          name: without,
          color: "#4B5563"
        }
      }
    ],
    nextStep: (response) => {
      if (response === "in_progress") {
        return "legal_form";
      }
      return "agreement_purpose";
    }
  },
  {
    id: "legal_form",
    type: "choice",
    title: "What will be the legal form of your business?",
    navigation: {
      autoProgress: true,
      showSkip: true
    },
    options: [
      {
        id: "sas",
        label: "SAS",
        value: "sas",
        icon: {
          type: "emoji",
          name: "🏦",
          color: "#4B5563"
        }
      },
      {
        id: "sarl",
        label: "SARL",
        value: "sarl",
        icon: {
          type: "emoji",
          name: "🏡",
          color: "#4B5563"
        }
      },
      {
        id: "dont_know",
        label: "I don't know yet",
        value: "dont_know",
        icon: {
          type: "emoji",
          name: "💭",
          color: "#4B5563"
        }
      }
    ],
    nextStep: "agreement_purpose"
  },
  {
    id: "agreement_purpose",
    type: "choice",
    title: "What are you looking for?",
    navigation: {
      autoProgress: true,
      showSkip: true
    },
    options: [
      {
        id: "obtain_agreement",
        label: "Obtain a partnership agreement",
        value: "obtain_agreement",
        icon: {
          type: "image",
          name: handshake,
          color: "#4B5563"
        }
      },
      {
        id: "reread_agreement",
        label: "Have a shareholders' agreement reread",
        value: "reread_agreement",
        icon: {
          type: "emoji",
          name: "📝",
          color: "#4B5563"
        }
      }
    ],
    nextStep: (response) => {
      if (response === "obtain_agreement") {
        return "clarify_clauses";
      }
      return "contact_info";
    }
  },
  {
    id: "clarify_clauses",
    type: "choice",
    title: "Would you like to clarify the main clauses of your shareholders' agreement now?",
    navigation: {
      autoProgress: true,
      showSkip: true
    },
    options: [
      {
        id: "complete_now",
        label: "I am completing now",
        value: "complete_now",
        icon: {
          type: "emoji",
          name: "📝",
          color: "#4B5563"
        }
      },
      {
        id: "need_assistance",
        label: "I would like to be accompanied",
        value: "need_assistance",
        icon: {
          type: "emoji",
          name: "📅",
          color: "#4B5563"
        }
      }
    ],
    nextStep: (response) => {
      if (response === "complete_now") {
        return "prohibit_sales";
      }
      return "contact_info";
    },
    helpText: "💡 If you know which clauses are relevant to add to your shareholders' agreement, you can complete this information."
  },
  {
    id: "prohibit_sales",
    type: "choice",
    title: "Do you want to temporarily prohibit all sales of shares?",
    navigation: {
      autoProgress: true,
      showSkip: true
    },
    options: [
      {
        id: "yes",
        label: "Yes",
        value: "yes",
        icon: {
          type: "image",
          name: yes,
          color: "#4B5563"
        }
      },
      {
        id: "no",
        label: "No",
        value: "no",
        icon: {
          type: "image",
          name: without,
          color: "#4B5563"
        }
      },
      {
        id: "dont_know",
        label: "I don't know",
        value: "dont_know",
        icon: {
          type: "emoji",
          name: "💭",
          color: "#4B5563"
        }
      }
    ],
    nextStep: "joint_exit"
  },
  {
    id: "joint_exit",
    type: "choice",
    title: "Would you like to include a joint exit clause?",
    navigation: {
      autoProgress: true,
      showSkip: true
    },
    options: [
      {
        id: "yes",
        label: "Yes",
        value: "yes",
        icon: {
          type: "image",
          name: yes,
          color: "#4B5563"
        }
      },
      {
        id: "no",
        label: "No",
        value: "no",
        icon: {
          type: "image",
          name: without,
          color: "#4B5563"
        }
      },
      {
        id: "dont_know",
        label: "I don't know",
        value: "dont_know",
        icon: {
          type: "emoji",
          name: "💭",
          color: "#4B5563"
        }
      }
    ],
    nextStep: "priority_redemption"
  },
  {
    id: "priority_redemption",
    type: "choice",
    title: "Would you like to provide for a priority redemption right?",
    navigation: {
      autoProgress: true,
      showSkip: true
    },
    options: [
      {
        id: "yes",
        label: "Yes",
        value: "yes",
        icon: {
          type: "image",
          name: yes,
          color: "#4B5563"
        }
      },
      {
        id: "no",
        label: "No",
        value: "no",
        icon: {
          type: "image",
          name: without,
          color: "#4B5563"
        }
      },
      {
        id: "dont_know",
        label: "I don't know",
        value: "dont_know",
        icon: {
          type: "emoji",
          name: "💭",
          color: "#4B5563"
        }
      }
    ],
    nextStep: "contact_info"
  },
  {
    id: "contact_info",
    type: "contact_form",
    title: "Great 🎉 Who is doing the paperwork?",
    navigation: {
      showContinue: false
    },
    fields: [
      { id: "firstName", label: "First name", placeholder: "Philippe", required: true },
      { id: "lastName", label: "Name", placeholder: "Durand", required: true },
      { id: "email", label: "Email", placeholder: "captain.contrat@gmail.com", required: true },
      { id: "phone", label: "Phone number", placeholder: "06 01 02 03 04", required: true }
    ],
    helpText: "💡 This information is essential to create your space and facilitate contact with our experts."
  }
]; 