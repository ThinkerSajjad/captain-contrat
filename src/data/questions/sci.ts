import { FunnelQuestion } from "@/types/funnel";
import residence from "../../../public/icons/residense.png";
import second_home from "../../../public/icons/second-home.png";
import rental_investment from "../../../public/icons/rental-investment.png";
import house from "../../../public/icons/House.svg";
import kandbaz from "../../../public/icons/kandbaz.png";
import qonto from "../../../public/icons/quonto.png";
import other_bank from "../../../public/icons/otherBank.svg";
import hurry from "../../../public/icons/hurry.png";
import nohurry from "../../../public/icons/nohurry.png";

import user from "../../../public/icons/user.png";
import users from "../../../public/icons/users.png";
import loading from "../../../public/icons/loading.png";
import question from "../../../public/icons/question.png";
import handshake from "../../../public/icons/handshake.png";

// SCI specific questions
export const sciQuestions: FunnelQuestion[] = [
    {
      id: "property_type",
      type: "choice",
      title: "What type of property are you setting up an SCI for?",
      navigation: {
        autoProgress: true,
        showSkip: true,
      },
      options: [
        {
          id: "main_residence",
          label: "Your main residence",
          value: "main_residence",
          icon: {
            type: "image",
            name: residence,
            color: "#4B5563"
          }
        },
        {
          id: "second_home",
          label: "A second home",
          value: "second_home",
          icon: {
            type: "image",
            name: second_home,
            color: "#4B5563"
          }
        },
        {
          id: "rental_investment",
          label: "A rental investment",
          value: "rental_investment",
          icon: {
            type: "image",
            name: rental_investment,
            color: "#4B5563"
          }
        },
      ],
    },
    {
      id: "partner_count",
      type: "choice",
      title: "Noted! How many partners do you have?",
      navigation: {
        autoProgress: true,
        showSkip: true,
      },
      options: [
        {
          id: "one_partner",
          label: "I have a partner",
          value: "one_partner",
          icon: {
            type: "image",
            name: user,
            color: "#4B5563"
          }
        },
        {
          id: "multiple_partners",
          label: "I have several partners",
          value: "multiple_partners",
          icon: {
            type: "image",
            name: users,
            color: "#4B5563"
          }
        },
      ],
      helpText: "💡 The law requires a minimum of two people to set up an SCI.",
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
        },
      ],
      helpText: "💡 Regardless of your deadline, the price remains fixed. We customize our services to your needs, with an average creation time of one week.",
    },
    {
      id: "sci_purpose",
      type: "choice",
      title: "Why do you want to create an SCI?",
      navigation: {
        autoProgress: true,
        showSkip: true,
      },
      options: [
        {
          id: "family_assets",
          label: "Create or manage family assets",
          value: "family_assets",
          icon: {
            type: "image",
            name: residence,
            color: "#4B5563"
          }
        },
        {
          id: "property_management",
          label: "Start a property management business",
          value: "property_management",
          icon: {
            type: "image",
            name: handshake,
            color: "#4B5563"
          }
        },
        {
          id: "other_reasons",
          label: "I have other reasons for creating an SCI",
          value: "other_reasons",
          icon: {
            type: "image",
            name: question,
            color: "#4B5563"
          }
        },
      ],
    },
    {
      id: "company_name",
      type: "text",
      title: "Perfect, what name have you chosen for your SCI?",
      placeholder: "Example: Captain Contract",
      helpText: "💡 If you have not yet chosen or are unsure, you can complete or modify this information later.",
      isOptional: true,
      navigation: {
        showSkip: true,
        showContinue: true,
      }
    },
    {
      id: "capital_amount",
      type: "text",
      title: "Understood! How much share capital do you plan to give to your company?",
      placeholder: "Example: 1000",
      helpText: "💡 You will specify how much each partner contributes later.",
      navigation: {
        autoProgress: false,
        showSkip: true,
        showContinue: true,
      },
    },
    {
      id: "capital_deposit",
      type: "choice",
      title: "Great! Have you chosen a bank to open your business account?",
      navigation: {
        autoProgress: true,
        showSkip: true,
      },
      options: [
        {
          id: "qonto",
          label: "Captain Contract Recommendation",
          subLabel: "The simplest, the fastest\n30-day free trial. No commitment.",
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
          subLabel: "I manage to do my own procedures",
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
      title: "Where do you plan to locate your company headquarters?",
      navigation: {
        autoProgress: true,
        showSkip: true,
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
        { id: "email", label: "Email", placeholder: "Your email address", required: true },
        { id: "phone", label: "Phone", placeholder: "Your phone number", required: true },
      ],
      helpText: "💡 This information is essential to create your space and facilitate contact with our experts.",
    },
]; 