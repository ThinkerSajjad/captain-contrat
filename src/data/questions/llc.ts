import { FunnelQuestion } from "@/types/funnel";
import user from "../../../public/icons/user.png";
import users from "../../../public/icons/users.png";
import ccLogo from "../../../public/icons/cc-logo.png";
import without from "../../../public/icons/without.jpg";
import employee from "../../../public/icons/employee.png";
import entrepreneur from "../../../public/icons/enterprenuers.png";
import job_seeker from "../../../public/icons/job-seeker.png";
import student from "../../../public/icons/student.png";
import other from "../../../public/icons/other.png";
import first_time from "../../../public/icons/first-time.png";
import micro_enterprise from "../../../public/icons/micro-business.png";
import company from "../../../public/icons/company.png";
import coach from "../../../public/icons/coach.png";
import hurry from "../../../public/icons/hurry.png";
import nohurry from "../../../public/icons/nohurry.png";
import qonto from "../../../public/icons/quonto.png";
import other_bank from "../../../public/icons/otherBank.svg";
import kandbaz from "../../../public/icons/kandbaz.png";
import house from "../../../public/icons/House.svg";

// LLC (SARL) specific questions
export const llcQuestions: FunnelQuestion[] = [
    {
      id: "business_type",
      type: "choice",
      title: "Welcome! Are you starting your company alone or with others?",
      navigation: {
        showContinue: false,
        autoProgress: true,
      },
      options: [
        {
          id: "alone",
          label: "I'm going it alone",
          subLabel: "I am creating an EURL",
          value: "eurl",
          icon: {
            type: "image",
            name: user,
            color: "#4B5563"
          }
        },
        {
          id: "with_others",
          label: "We're going to start together",
          subLabel: "I am creating an LLC",
          value: "sarl",
          icon: {
            type: "image",
            name: users,
            color: "#4B5563"
          }
        },
      ],
      helpText: "💡 Indicate whether you are creating an EURL or an LLC to allow us to personalize your process and your documents.",
      nextStep: (response) => response === "eurl" ? "eurl" : "company_name",
    },
    {
        id: "company_name",
        type: "text",
        title: "Perfect, what name have you chosen for your business?",
        placeholder: "Example: Captain Contract",
        helpText: "💡 If you have not yet chosen or are unsure, you can complete or modify this information later.",
        isOptional: true,
        navigation: {
          showSkip: true,
          showContinue: true,
        }
      },
      {
        id: "business_activity",
        type: "choice",
        title: "Noted! What activity do you plan to pursue?",
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
            label: "🏠  Real estate rental",
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
            label: "🍽 Restoration",
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
        id: "protect_brand",
        type: "choice",
        title: "Do you want to protect your brand?",
        navigation: {
          autoProgress: true,
          showSkip: true,
        },
        options: [
          {
            id: "yes_protect",
            label: "I am registering my trademark with Captain Contrat",
            subLabel: "My lawyer takes care of all the procedures",
            value: "yes",
            icon: {
              type: "image",
              name: ccLogo,
              color: "#4B5563"
            }
          },
          {
            id: "no_protect",
            label: "I'm not interested",
            subLabel: "I only want to create my business",
            value: "no",
            icon: {
              type: "image",
              name: without,
              color: "#4B5563"
            }
          },
        ],
        helpText: "💡 Registering your trademark allows you to protect your name with the INPI (French Industrial Property Institute) and ensure exclusive use. By choosing this option when you create your business, you can benefit from a €10 discount.",
      },
      {
        id: "professional_situation",
        type: "choice",
        title: "What is your professional situation?",
        navigation: {
          autoProgress: true,
          showSkip: true,
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
              name: entrepreneur,
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
          },
        ],
      },
      {
        id: "previous_business",
        type: "choice",
        title: "Have you ever started a business?",
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
              type: "image",
              name: first_time,
              color: "#4B5563"
            }
          },
          {
            id: "micro_enterprise",
            label: "Yes, a micro-enterprise",
            value: "micro_enterprise",
            icon: {
              type: "image",
              name: micro_enterprise,
              color: "#4B5563"
            }
          },
          {
            id: "company",
            label: "Yes, a company",
            value: "company",
            icon: {
              type: "image",
              name: company,
              color: "#4B5563"
            }
          },
        ],
        nextStep: (response) => {
          if (response === "micro_enterprise") {
            return "close_micro_business";
          } else if (response === "first_time") {
            return "coach_appointment";
          } else {
            return "kbis_timing";
          }
        },
      },
      {
        id: "close_micro_business",
        type: "choice",
        title: "Do you want to close your micro-business?",
        navigation: {
          autoProgress: true,
          showSkip: true,
        },
        options: [
          {
            id: "close_with_captain",
            label: "I turn off my micro business with Captain Contrat",
            subLabel: "Our lawyer manages your two procedures",
            value: "close_with_captain",
            icon: {
              type: "image",
              name: ccLogo,
              color: "#4B5563"
            }
          },
          {
            id: "not_interested",
            label: "I'm not interested",
            subLabel: "I will manage by myself",
            value: "not_interested",
            icon: {
              type: "image",
              name: without,
              color: "#4B5563"
            }
          },
        ],
        nextStep: "coach_appointment",
      },
      {
        id: "coach_appointment",
        type: "choice",
        title: "Would you like to discuss your project with an entrepreneurial coach?",
        navigation: {
          autoProgress: true,
          showSkip: true,
        },
        options: [
          {
            id: "make_appointment",
            label: "I make an appointment",
            subLabel: "Free call at a time that suits me",
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
            subLabel: "I'm moving forward with my project without making an appointment",
            value: "no_appointment",
            icon: {
              type: "image",
              name: without,
              color: "#4B5563"
            }
          },
        ],
        nextStep: (response) => {
          if (response === "make_appointment") {
            return "appointment_slot";
          } else {
            return "kbis_timing";
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
        description: "Thank you for scheduling an appointment with our entrepreneurial coach.",
      },
      {
        id: "kbis_timing",
        type: "choice",
        title: "Very good! When would you like to receive your Kbis?",
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
          },
        ],
        helpText: "Regardless of your deadline, the price remains fixed. We customize our services to your needs, with an average creation time of one week.",
      },
      {
        id: "secure_relationships",
        type: "choice",
        title: "Have you planned to secure your relationships between partners?",
        navigation: {
          autoProgress: true,
          showSkip: true,
        },
        options: [
          {
            id: "get_deal",
            label: "I get my deal with Captain Contrat",
            subLabel: "The most secure",
            value: "get_deal",
            icon: {
              type: "image",
              name: ccLogo,
              color: "#4B5563"
            }
          },
          {
            id: "not_interested",
            label: "I'm not interested",
            subLabel: "I just want to create my business",
            value: "not_interested",
            icon: {
              type: "image",
              name: without,
              color: "#4B5563"
            }
          },
        ],
        helpText: "💡 Why use Captain Contrat to obtain my shareholders' agreement?\n- Define the rights of the founding partners and anticipate many conflict situations\n- Save time by centralizing your creation and protection procedures between partners\n- Secure your relationships for only €29.90 excluding VAT.",
      },
      {
        id: "capital_amount",
        type: "text",
        title: "Understood! How much share capital do you plan to give to your company?",
        placeholder: "Example: 1000",
        helpText: "You will specify how much each partner contributes later.",
        navigation: {
          autoProgress: false,
          showSkip: true,
          showContinue: true,
        },
      },
      {
        id: "capital_deposit",
        type: "choice",
        title: "In which bank will you deposit your capital?",
        navigation: {
          autoProgress: true,
          showSkip: true,
        },
        options: [
          {
            id: "qonto",
            label: "I deposit my capital in less than 12 hours",
            subLabel: "30 days free trial with no commitment",
            value: "qonto",
            icon: {
              type: "image",
              name: qonto,
              color: "#4B5563"
            }
          },
          {
            id: "other_bank",
            label: "I go through another bank",
            subLabel: "I manage to do my own procedure",
            value: "other_bank",
            icon: {
              type: "image",
              name: other_bank,
              color: "#4B5563"
            }
          },
        ],
        helpText: "💡 Depositing your capital is mandatory. With Qonto, obtain your registration certificate in the fastest time available.",
      },
      {
        id: "head_office",
        type: "choice",
        title: "Where will you locate your head office?",
        navigation: {
          autoProgress: true,
          showSkip: true,
        },
        options: [
          {
            id: "need_address",
            label: "I need an address",
            subLabel: "30 days free trial with no commitment",
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
          },
        ],
        helpText: "💡 A domiciliation company protects your personal address. Enjoy a prestigious address and mail forwarding.",
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
          { id: "email", label: "Email", placeholder: "Your email address" },
          { id: "phone", label: "Phone", placeholder: "Your phone number" },
        ],
        helpText: "💡 This information is essential to create your space and facilitate contact with our experts.",
      },
]; 