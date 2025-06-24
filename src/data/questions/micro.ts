import { FunnelQuestion } from "@/types/funnel";
import employee from "../../../public/icons/employee.png";
import enterprenuers from "../../../public/icons/enterprenuers.png";
import job_seeker from "../../../public/icons/job-seeker.png";
import student from "../../../public/icons/student.png";
import other from "../../../public/icons/other.png";
import hurry from "../../../public/icons/hurry.png";
import nohurry from "../../../public/icons/nohurry.png";
import loading from "../../../public/icons/loading.png";
import quonto from "../../../public/icons/quonto.png";
import otherBank from "../../../public/icons/otherBank.svg";
import house from "../../../public/icons/House.svg";
import yes from "../../../public/icons/check.png";
import without from "../../../public/icons/without.jpg";
import kandbaz from "../../../public/icons/kandbaz.png";

export const microQuestions: FunnelQuestion[] = [
  {
    id: "professional_situation",
    type: "choice",
    title: "What is your professional situation?",
    navigation: {
      autoProgress: true,
      showSkip: true
    },
    options: [
      {
        id: "employee",
        label: "Employee",
        value: "employee",
        icon: {
          type: "image",
          name: employee,
          color: "#4B5563"
        }
      },
      {
        id: "entrepreneur",
        label: "Entrepreneur",
        value: "entrepreneur",
        icon: {
          type: "image",
          name: enterprenuers,
          color: "#4B5563"
        }
      },
      {
        id: "job_seeker",
        label: "Job seeker",
        value: "job_seeker",
        icon: {
          type: "image",
          name: job_seeker,
          color: "#4B5563"
        }
      },
      {
        id: "student",
        label: "Student",
        value: "student",
        icon: {
          type: "image",
          name: student,
          color: "#4B5563"
        }
      },
      {
        id: "other",
        label: "Other",
        value: "other",
        icon: {
          type: "image",
          name: other,
          color: "#4B5563"
        }
      }
    ],
    nextStep: "activity_type"
  },
  {
    id: "activity_type",
    type: "choice",
    title: "Very good! What type of activity will you be doing?",
    navigation: {
      showSkip: true
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
    ],
    nextStep: "start_timing"
  },
  {
    id: "start_timing",
    type: "choice",
    title: "Welcome! When would you like to start your business?",
    navigation: {
      autoProgress: true,
      showSkip: true
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
        id: "in_week",
        label: "In the week",
        value: "in_week",
        icon: {
          type: "image",
          name: loading,
          color: "#4B5563"
        }
      },
      {
        id: "in_month",
        label: "In the month",
        value: "in_month",
        icon: {
          type: "image",
          name: nohurry,
          color: "#4B5563"
        }
      }
    ],
    nextStep: "community_property"
  },
  {
    id: "community_property",
    type: "choice",
    title: "Noted! Are you married under the community property regime?",
    navigation: {
      autoProgress: true,
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
          name: "💬",
          color: "#4B5563"
        }
      }
    ],
    helpText: "💡 If you are married under the community property regime, you will be required to inform your spouse of the creation of your micro-business. We will provide you with the information certificate.",
    nextStep: "sales_agent"
  },
  {
    id: "sales_agent",
    type: "choice",
    title: "Understood! Will you be a sales agent?",
    navigation: {
      autoProgress: true,
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
      }
    ],
    nextStep: "bank_account"
  },
  {
    id: "bank_account",
    type: "choice",
    title: "Which bank will you open your business bank account with?",
    navigation: {
      autoProgress: true,
    },
    options: [
      {
        id: "qonto",
        label: "Captain Contract Recommendation",
        subLabel: "The simplest, the fastest\n€59 credited when you open your bank account",
        value: "qonto",
        icon: {
          type: "image",
          name: quonto,
          color: "#4B5563"
        }
      },
      {
        id: "other_bank",
        label: "I go through another bank",
        subLabel: "I manage to do my own procedures",
        value: "other_bank",
        icon: {
          type: "image",
          name: otherBank,
          color: "#4B5563"
        }
      }
    ],
    helpText: "💡 Opening a bank account is strongly recommended. It's mandatory if you earn more than €10,000 in revenue over two years.",
    nextStep: "business_location"
  },
  {
    id: "business_location",
    type: "choice",
    title: "Where do you plan to locate your micro-business?",
    navigation: {
      autoProgress: true,
    },
    options: [
      {
        id: "need_address",
        label: "Captain Contract Recommendation",
        subLabel: "I need an address\n30-day free trial. No commitment.",
        value: "need_address",
        icon: {
          type: "image",
          name: kandbaz,
          color: "#4B5563"
        }
      },
      {
        id: "have_address",
        label: "I already have an address for my head office",
        subLabel: "Send my address later",
        value: "have_address",
        icon: {
          type: "image",
          name: house,
          color: "#4B5563"
        }
      }
    ],
    helpText: "💡 Using a domiciliation company allows you to avoid disclosing your personal address online and save up to €1,000 in taxes per year, depending on the address you choose. Enjoy a prestigious address and mail forwarding wherever you are.",
    nextStep: "contact_info"
  },
  {
    id: "contact_info",
    type: "contact_form",
    title: "This information is essential to create your space and facilitate contact with our experts.",
    navigation: {
      showContinue: false,
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