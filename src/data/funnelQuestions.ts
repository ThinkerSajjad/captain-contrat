import { BusinessType, FunnelQuestion } from "@/types/funnel";
import { sasQuestions } from "./questions/sas";
import { sasuQuestions } from "./questions/sasu";
import { eurlQuestions } from "./questions/eurl";
import { llcQuestions } from "./questions/llc";
import { sciQuestions } from "./questions/sci";
import { microQuestions } from "./questions/micro";
import { shareholderAgreementQuestions } from "./questions/shareholder-agreement";
import { legalFormQuestions } from "./questions/legalform";

// Business types configuration
const businessTypes: BusinessType[] = [
  {
    id: "sas",
    name: "SAS",
    path: "/creer-entreprise/creation-sas-en-ligne",
    questions: sasQuestions,
  },
  {
    id: "sasu",
    name: "SASU",
    path: "/creer-entreprise/creation-sasu-en-ligne",
    questions: sasuQuestions,
  },
  {
    id: "eurl",
    name: "EURL",
    path: "/creer-entreprise/creation-eurl-en-ligne",
    questions: eurlQuestions,
  },
  {
    id: "sarl",
    name: "SARL",
    path: "/creer-entreprise/creation-sarl-en-ligne",
    questions: llcQuestions,
  },
  {
    id: "sci",
    name: "SCI",
    path: "/creer-entreprise/creation-sci-en-ligne",
    questions: sciQuestions,
  },
  {
    id: "micro",
    name: "Micro-entreprise",
    path: "/creer-entreprise/creer-micro-entreprise",
    questions: microQuestions,
  },
  {
    id: "shareholder_agreement",
    name: "Pacte d'associés",
    path: "/creer-entreprise/rediger-pacte-associes",
    questions: shareholderAgreementQuestions,
  },
  {
    id: "legal_form",
    name: "Forme juridique",
    path: "/creer-entreprise/aide-au-choix-forme-juridique",
    questions: legalFormQuestions,
  }
];

// Helper function to get business type by ID
export function getBusinessTypeById(id: string): BusinessType | undefined {
  return businessTypes.find(type => type.id === id);
}

// Helper function to get business type by path
export function getBusinessTypeByPath(path: string): BusinessType | undefined {
  return businessTypes.find(type => type.path === path);
}

// Helper function to get questions for a business type
export function getFunnelQuestions(businessTypeId: string): FunnelQuestion[] | undefined {
  const businessType = getBusinessTypeById(businessTypeId);
  return businessType?.questions;
}

export default businessTypes; 