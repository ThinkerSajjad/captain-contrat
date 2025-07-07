import { BusinessType, FunnelQuestion } from "@/types/funnel";
import { sasQuestions } from "./questions/sas";
import { sasuQuestions } from "./questions/sasu";
import { eurlQuestions } from "./questions/eurl";
import { llcQuestions } from "./questions/llc";
import { sciQuestions } from "./questions/sci";
import { microQuestions } from "./questions/micro";
import { shareholderAgreementQuestions } from "./questions/shareholder-agreement";
import { legalFormQuestions } from "./questions/legalform";
import { trademarkFilingQuestions } from "./questions/trademark-filing";
import { findMyLegalFormQuestions } from "./questions/findmylegalform";
import { vatAndTaxRegimeQuestions } from "./questions/vatandtaxregime";
import { eligibilityForACREQuestions } from "./questions/eligibilityforACRE";
import { changeYourCompanyQuestions } from './questions/change-yourcompany';
import { sarlToSasQuestions } from './questions/sarltosas';
import { dismissalProcedureQuestions } from './questions/dismissal-procedure';
import { mutualTerminationQuestions } from './questions/mutual-termination';
import { litigationQuestions } from './questions/litigation';
import { injunctionQuestions } from './questions/injunction';
import { closeMicroBusinessQuestions } from './questions/close-microbusiness';
import { closeBusinessQuestions } from './questions/close-business';
import { approvalOfAccountQuestions } from './questions/approval-of-account';
import { transferOfSharesQuestions } from './questions/transfer-of-shares';
import { capitalIncreaseQuestions } from './questions/capital-increase';
import { companyInDifficultiesQuestions } from './questions/company-in-difficulties';
import { cguQuestions } from "./questions/cguQuestions";
import { salesTermsConditionsQuestions } from "./questions/sales-termsconditions";
import { rentalTermsConditionsQuestions } from "./questions/rental-terms-conditions";
import { privacyPolicyQuestions } from "./questions/privacy-policy";
import { serviceContractQuestions } from "./questions/service-contract";
import { commercialLeaseQuestions } from "./questions/commercial-lease";
import { commercialContractQuestions } from "./questions/commercial-contract";
import { subcontractingQuestions } from "./questions/subcontracting";
import { permanentContractQuestions } from "./questions/permanent-contract";
import { fixedTermContractQuestions } from "./questions/fixed-term-contract";
import { freelanceContractQuestions } from "./questions/freelance-contract";
import { businessLawQuestions } from "./questions/business-law";

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
  },
  {
    id: "trademark_filing",
    name: "Fichage de marque",
    path: "/proteger-sa-societe/depot-de-marque-inpi-en-ligne",
    questions: trademarkFilingQuestions,
  },
  {
    id: "find_my_legal_form",
    name: "Trouver ma forme juridique",
    path: "/simulateur/trouver-ma-forme-juridique",
    questions: findMyLegalFormQuestions,
  },
  {
    id: "vat_and_tax_regime",
    name: "VAT and tax regime",
    path: "/simulateur/choisir-regime-fiscal",
    questions: vatAndTaxRegimeQuestions,
  },
  {
    id: "eligibility_for_ACRE",
    name: "Eligibility for ACRE",
    path: "/simulateur/eligibilite-acre",
    questions: eligibilityForACREQuestions,
  },
  {
    id: "change_your_company",
    name: "Change your company",
    path: "/modifier-son-entreprise/modification-objet-social",
    questions: changeYourCompanyQuestions,
  },
  {
    id: "sarl_to_sas",
    name: "Transform SARL to SAS",
    path: "/modifier-son-entreprise/transformation-sarl-en-sas",
    questions: sarlToSasQuestions,
  },
  {
    id: "dismissal_procedure",
    name: "Dismissal Procedure",
    path: "/gestion-du-personnel/procedure-de-licenciement",
    questions: dismissalProcedureQuestions,
  },
  {
    id: "mutual_termination",
    name: "Mutual Termination",
    path: "/gestion-du-personnel/procedure-rupture-conventionnelle",
    questions: mutualTerminationQuestions,
  },
  {
    id: "litigation",
    name: "Find a Lawyer",
    path: "/gestion-des-litiges/litigation",
    questions: litigationQuestions,
  },
  {
    id: "injunction",
    name: "Payment Order",
    path: "/gestion-des-litiges/injonction-de-payer-en-ligne",
    questions: injunctionQuestions,
  },
  {
    id: "close_micro_business",
    name: "Close Micro-Business",
    path: "/gestion-des-litiges/fermeture-de-micro-entreprise",
    questions: closeMicroBusinessQuestions,
  },
  {
    id: "close_business",
    name: "Close Business",
    path: "/gestion-des-litiges/fermer-une-societe",
    questions: closeBusinessQuestions,
  },
  {
    id: "approval_of_account",
    name: "Approval of Accounts",
    path: "/modifier-son-entreprise/approbation-comptes-en-ligne",
    questions: approvalOfAccountQuestions,
  },
  {
    id: "transfer_of_shares",
    name: "Transfer of Shares",
    path: "/modifier-son-entreprise/transfert-de-parts",
    questions: transferOfSharesQuestions,
  },
  {
    id: "capital_increase",
    name: "Capital Increase",
    path: "/modifier-son-entreprise/augmentation-de-capital",
    questions: capitalIncreaseQuestions,
  },
  {
    id: "company_in_difficulties",
    name: "Company in Difficulties",
    path: "/gestion-des-litiges/entreprise-en-difficulte",
    questions: companyInDifficultiesQuestions,
  },
  {
    id: "rediger_cgu",
    name: "Rediger Cgu",
    path: "/rediger-un-contrat/rediger-cgu",
    questions: cguQuestions,
  },
  {
    id: "sales_terms_conditions",
    name: "Sales Terms and Conditions",
    path: "/rediger-un-contrat/rediger-conditions-generales-de-vente",
    questions: salesTermsConditionsQuestions,
  },
  {
    id: "rental_terms_conditions",
    name: "Rental Terms and Conditions",
    path: "/rediger-un-contrat/rediger-conditions-generales-de-location",
    questions: rentalTermsConditionsQuestions,
  },
  {
    id: "privacy_policy",
    name: "Privacy Policy",
    path: "/rediger-un-contrat/rediger-politique-confidentialite",
    questions: privacyPolicyQuestions,
  },
  {
    id: "service_contract",
    name: "Service Contract",
    path: "/rediger-un-contrat/rediger-contrat-de-prestation-de-services",
    questions: serviceContractQuestions,
  },
  {
    id: "commercial_lease",
    name: "Commercial Lease",
    path: "/rediger-un-contrat/rediger-contrat-de-location-commerciale",
    questions: commercialLeaseQuestions,
  },
  {
    id: "commercial_contract",
    name: "Commercial Contract",
    path: "/rediger-un-contrat/rediger-contrat-commercial",
    questions: commercialContractQuestions,
  },
  {
    id: "subcontracting",
    name: "Subcontracting Contract",
    path: "/rediger-un-contrat/rediger-contrat-de-sous-traitance",
    questions: subcontractingQuestions,
  },
  {
    id: "permanent_contract",
    name: "Permanent Contract",
    path: "/gestion-du-personnel/rediger-contrat-de-travail-permanent",
    questions: permanentContractQuestions,
  },
  {
    id: "fixed_term_contract",
    name: "Fixed-Term Contract",
    path: "/gestion-du-personnel/rediger-contrat-de-travail-a-duree-determinee",
    questions: fixedTermContractQuestions,
  },
  {
    id: "freelance_contract",
    name: "Freelance Contract",
    path: "/rediger-un-contrat/rediger-contrat-de-freelance",
    questions: freelanceContractQuestions,
  },
  {
    id: "business_law",
    name: "Business Law",
    path: "/avocat/find-a-lawyer",
    questions: businessLawQuestions,
  },
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