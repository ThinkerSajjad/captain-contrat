import { FunnelQuestion } from "@/types/funnel";
import logoIcon from "../../../public/icons/nike_logo.png";
import nameIcon from "../../../public/icons/nike_name.png";
import sloganIcon from "../../../public/icons/nike_slogan.png";
import noVerbal from "../../../public/icons/no_verbal.png";
import loading from "../../../public/icons/loading.png"

export const trademarkFilingQuestions: FunnelQuestion[] = [
  {
    id: "what_to_protect",
    type: "choice",
    title: "What do you want to protect?",
    navigation: {
      showContinue: false,
      autoProgress: true,
      showSkip: true,
      // skipLabel: "Reply later",
    },
    options: [
      {
        id: "logo",
        label: "A logo",
        value: "logo",
        icon: { type: "image", name: logoIcon, color: "#4B5563" },
      },
      {
        id: "name",
        label: "A name",
        value: "name",
        icon: { type: "image", name: nameIcon, color: "#4B5563" },
      },
      {
        id: "slogan",
        label: "A slogan",
        value: "slogan",
        icon: { type: "image", name: sloganIcon, color: "#4B5563" },
      },
    ],
    helpText:
      "💡 Here we take the example of Nike to illustrate the different types of possible trademark filings.",
    nextStep: (response) => {
      if (response === "logo") return "logo_verbal";
      if (response === "name") return "brand_name";
      if (response === "slogan") return "brand_slogan";
      return "";
    },
  },
  // If logo
  {
    id: "logo_verbal",
    type: "choice",
    title: "Does your logo include a verbal element?",
    navigation: {
      showContinue: false,
      autoProgress: true,
      showSkip: true,
      // skipLabel: "Reply later",
    },
    options: [
      {
        id: "yes_verbal",
        label: "Yes",
        subLabel: "Logo with a verbal element",
        value: "yes",
        icon: { type: "image", name: logoIcon, color: "#4B5563" },
      },
      {
        id: "no_verbal",
        label: "No",
        subLabel: "Logo without verbal element",
        value: "no",
        icon: { type: "image", name: noVerbal, color: "#4B5563" },
      },
    ],
    helpText:
      "💡 Here we take the example of Nike to illustrate our indications.",
    nextStep: "trademark_owner",
  },
  // If name
  {
    id: "brand_name",
    type: "text",
    title: "Filing your trademark\nWhat is the name of your brand?",
    placeholder: "Example: Nike",
    helpText: "💡 You can change your brand name later.",
    navigation: {
      showContinue: true,
      showSkip: true,
      // skipLabel: "Choose later",
    },
    nextStep: "trademark_owner",
  },
  // If slogan
  {
    id: "brand_slogan",
    type: "text",
    title: "Filing your trademark\nWhat is your slogan?",
    placeholder: "Example: Just do it",
    helpText:
      "💡 You can edit the slogan later, especially after you have done research to verify that your brand is available.",
    navigation: {
      showContinue: true,
      showSkip: true,
      // skipLabel: "Choose later",
    },
  },
  // Owner
  {
    id: "trademark_owner",
    type: "choice",
    title: "Who will own the trademark?",
    navigation: {
      showContinue: false,
      autoProgress: true,
      showSkip: true,
      // skipLabel: "Choose later",
    },
    options: [
      {
        id: "company_in_creation",
        label: "A company in the process of being created",
        value: "company_in_creation",
        icon: { type: "image", name: loading, color: "#4B5563" },
      },
      {
        id: "company_created",
        label: "A company already created",
        value: "company_created",
        icon: { type: "emoji", name: "🏢", color: "#4B5563" },
      },
      {
        id: "individuals",
        label: "One or more individuals",
        value: "individuals",
        icon: { type: "emoji", name: "🙋‍♂️", color: "#4B5563" },
      },
      {
        id: "association",
        label: "An association",
        value: "association",
        icon: { type: "emoji", name: "🥰", color: "#4B5563" },
      },
    ],
  },
  // Contact form
  {
    id: "contact_info",
    type: "contact_form",
    title: "Great 🎉 Who is doing the paperwork?",
    description:
      "This information is essential to create your space and facilitate contact with our experts.",
    navigation: {
      showContinue: false,
    },
    // googleButton: {
    //   label: "Continue with Google",
    //   icon: googleLogo,
    // },
    fields: [
      { id: "firstName", label: "First name", placeholder: "Philippe" },
      { id: "lastName", label: "Name", placeholder: "Durand" },
      { id: "email", label: "Email", placeholder: "captain.contrat@gmail.com", required: true },
      { id: "phone", label: "Phone number", placeholder: "06 01 02 03 04", required: true },
    ],
  },
]; 