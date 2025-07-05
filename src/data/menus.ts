import { MainMenu } from "@/types/menu";

export const mainMenus: MainMenu[] = [
  {
    key: "business-creation",
    label: "Business creation",
    dropdown: {
      sections: [
        {
          title: "Create my business",
          links: [
            {
              label: "Creation of a SASU",
              href: "/creer-entreprise/creation-sasu-en-ligne",
            },
            {
              label: "Creation of an SAS",
              href: "/creer-entreprise/creation-sas-en-ligne",
            },
            {
              label: "Creation of an EURL",
              href: "/creer-entreprise/creation-eurl-en-ligne",
            },
            {
              label: "Creation of an LLC",
              href: "/creer-entreprise/creation-sarl-en-ligne",
            },
            {
              label: "Creation of an SCI",
              href: "/creer-entreprise/creation-sci-en-ligne",
            },
            {
              label: "Creation of a micro-enterprise",
              href: "/creer-entreprise/creer-micro-entreprise",
            },
            {
              label: "Drafting a shareholders' agreement",
              href: "/creer-entreprise/rediger-pacte-associes",
            },
            {
              label: "Help in choosing the legal form",
              href: "/creer-entreprise/aide-au-choix-forme-juridique",
            },
            { label: "See all offers", href: "/creer-entreprise" },
          ],
        },
        {
          title: "Protect my brand",
          links: [
            {
              label: "Trademark filing",
              href: "/proteger-sa-societe/depot-de-marque-inpi-en-ligne",
            },
            {
              label: "Prior art search",
              href: "/proteger-sa-societe/recherche-anteriorite",
            },
            { label: "See all offers", href: "/proteger-sa-societe" },
          ],
        },
        {
          title: "Surround myself well",
          links: [
            {
              label: "Preparation for business creation",
              href: "/creer-entreprise/projet-creation-dentreprise",
            },
            { label: "Partner benefits", href: "/partenaires-creation" },
            {
              label: "Online Chartered Accountant",
              href: "/expertise-comptable",
            },
          ],
        },
      ],
      rightPanel: {
        title: "Top articles",
        links: [
          {
            label: "How to choose your legal form?",
            href: "/creer-son-entreprise/choisir-son-statut/choisir-la-forme-juridique",
          },
          {
            label: "Opening your business: how to do it?",
            href: "/creer-son-entreprise/les-demarches/creer-son-entreprise-7-etapes",
          },
          {
            label: "How to create a SASU?",
            href: "/creer-son-entreprise/sasu/statuts-et-pacte-associes-sasu",
          },
          {
            label: "How to create an SAS?",
            href: "/creer-son-entreprise/sas/statuts-et-pacte-associes-sas",
          },
          {
            label: "How to create an EURL?",
            href: "/creer-son-entreprise/eurl/statuts-et-pacte-associes-eurl",
          },
          {
            label: "SAS or SARL: the comparison",
            href: "/creer-son-entreprise/sas-sarl/sas-ou-sarl",
          },
          {
            label: "EURL or SASU: the guide",
            href: "/creer-son-entreprise/eurl-sasu/eurl-ou-sasu",
          },
          {
            label: "Assistance for business creation",
            href: "/creer-son-entreprise/assistance-creation-entreprise",
          },
          {
            label: "Filing a trademark: the steps",
            href: "/proteger-sa-societe/trademark-filing",
          },
          { label: "Access the blog", href: "/resources" },
        ],
      },
    },
  },
  {
    key: "business-management",
    label: "Business management",
    dropdown: {
      sections: [
        {
          title: "Modify my statuses",
          links: [
            {
              label: "Transfer of registered office",
              href: "/modifier-son-entreprise/transfert-siege-social",
            },
            {
              label: "Transformation of society",
              href: "/modifier-son-entreprise/transformation-sarl-en-sas",
            },
            {
              label: "Change of corporate purpose",
              href: "/modifier-son-entreprise/modification-objet-social",
            },
            { label: "See all offers", href: "/modifier-son-entreprise" },
          ],
        },
        {
          title: "Manage my employees",
          links: [
            {
              label: "Dismissal procedure",
              href: "/gestion-du-personnel/licencier-un-salarie",
            },
            {
              label: "Conventional termination",
              href: "/gestion-du-personnel/procedure-rupture-conventionnelle",
            },
            { label: "See all offers", href: "/gestion-du-personnel" },
          ],
        },

        {
          title: "Overcoming Disputes",
          links: [
            { label: "Litigation", href: "/avocat/contentieux" },
            {
              label: "Formal notice",
              href: "/gestion-des-litiges/faire-une-mise-demeure-en-ligne",
            },
            {
              label: "Payment order",
              href: "/gestion-des-litiges/injonction-de-payer-en-ligne",
            },
            { label: "See all offers", href: "/gestion-des-litiges" },
          ],
        },
        {
          title: "Close my business",
          links: [
            {
              label: "Closure of micro-enterprise",
              href: "/gestion-des-litiges/fermer-une-micro-entreprise",
            },
            {
              label: "Dissolution and radiation",
              href: "/gestion-des-litiges/fermer-une-societe",
            },
          ],
        },
        {
          title: "Manage my business",
          links: [
            {
              label: "Approval of accounts",
              href: "/modifier-son-entreprise/approbation-comptes-en-ligne",
            },
            {
              label: "Transfer of shares",
              href: "/modifier-son-entreprise/contrat-cession-parts-sociales",
            },
            {
              label: "Capital increase",
              href: "/modifier-son-entreprise/augmenter-capital",
            },
            {
              label: "Company in difficulty",
              href: "/gestion-des-litiges/entreprise-en-difficulte",
            },
            { label: "Accounting management", href: "/expertise-comptable" },
          ],
        },
      ],
      rightPanel: {
        title: "Top articles",
        links: [
          {
            label: "The Business Modification Guide",
            href: "/resources/la-modification-de-l-entreprise",
          },
          {
            label: "Changes to the statutes",
            href: "/resources/modifications-aux-statuts",
          },
          {
            label: "Company transformation: procedures",
            href: "/resources/transformation-de-l-entreprise-procedures",
          },
          {
            label: "Change of company name: the procedure",
            href: "/resources/modification-du-nom-de-la-societe-procedure",
          },
          {
            label: "Transfer of registered office: what formalities?",
            href: "/resources/transfert-du-siege-social-formalites",
          },
          {
            label: "Capital increase: how to proceed?",
            href: "/resources/augmentation-de-capital-comment-proceder",
          },
          {
            label: "The 10 accounting principles you need to know",
            href: "/resources/les-10-principes-comptables-que-vous-devez-connaitre",
          },
          {
            label: "Closing a business: what are the steps?",
            href: "/resources/fermeture-de-l-entreprise-quelles-sont-les-etapes",
          },
          {
            label: "Company dissolution and liquidation: the guide",
            href: "/resources/dissolution-et-liquidation-de-l-entreprise-guide",
          },
          { label: "Access the blog", href: "/resources" },
        ],
      },
    },
  },
  {
    key: "contracts",
    label: "Contracts",
    dropdown: {
      sections: [
        {
          title: "General Terms and Conditions",
          links: [
            {
              label: "General Conditions of Sale (GCS)",
              href: "/rediger-un-contrat/rediger-conditions-generales-de-vente",
            },
            {
              label: "General Conditions of Use (GCU)",
              href: "/rediger-un-contrat/rediger-cgu",
            },
            {
              label: "General Rental Conditions (GRC)",
              href: "/rediger-un-contrat/rediger-conditions-generales-location",
            },
            {
              label: "Privacy Policy",
              href: "/rediger-un-contrat/rediger-politique-confidentialite",
            },
          ],
        },
        {
          title: "Commercial contract",
          links: [
            {
              label: "Service provision contract",
              href: "/rediger-un-contrat/rediger-contrat-de-prestation-de-services",
            },
            {
              label: "Commercial lease",
              href: "/rediger-un-contrat/redaction-bail-commercial",
            },
            {
              label: "Commercial contract",
              href: "/rediger-un-contrat/rediger-contrat-commercial",
            },
            {
              label: "Subcontracting contract",
              href: "/rediger-un-contrat/rediger-contrat-sous-traitance",
            },
            {
              label: "Shareholders' agreement",
              href: "/rediger-un-contrat/rediger-pacte-associes",
            },
            { label: "See all offers", href: "/rediger-un-contrat" },
          ],
        },
        {
          title: "Employment contract",
          links: [
            {
              label: "Drafting a permanent contract",
              href: "/gestion-du-personnel/rediger-contrat-de-travail-permanent",
            },
            {
              label: "Drafting a fixed-term contract",
              href: "/gestion-du-personnel/rediger-contrat-de-travail-a-duree-determinee",
            },
            {
              label: "Drafting a freelance contract",
              href: "/rediger-un-contrat/rediger-contrat-de-freelance",
            },
          ],
        },
      ],
      rightPanel: {
        title: "Top articles",
        links: [
          {
            label: "The different types of commercial contracts",
            href: "/resources/les-differents-types-de-contrats-commerciaux",
          },
          {
            label: "General Terms and Conditions: The Complete Guide 2025",
            href: "/resources/conditions-generales-de-vente-complet-guide-2025",
          },
          {
            label: "Freelance T&Cs: How to write them well?",
            href: "/resources/contrat-de-freelance-comment-le-rediger-correctement",
          },
          {
            label: "Service provision contract: everything you need to know",
            href: "/resources/contrat-de-prestation-de-services-tout-savoir",
          },
          {
            label: "Services and self-employment",
            href: "/resources/services-et-entrepreneuriat-autonomie",
          },
          {
            label: "Subcontracting contract: how to write it?",
            href: "/resources/contrat-de-sous-traitance-comment-le-rediger",
          },
          {
            label:
              "Commercial partnership contract: everything you need to know",
            href: "/resources/contrat-de-partenariat-commercial-tout-savoir",
          },
          {
            label: "Drafting the partnership agreement: the guide",
            href: "/resources/pacte-de-partenariat-comment-le-rediger",
          },
          { label: "Access the blog", href: "/resources" },
        ],
      },
    },
  },
  {
    key: "accompaniment",
    label: "Accompagnement",
    dropdown: {
      sections: [
        {
          title: "Find a lawyer",
          links: [
            { label: "Business law", href: "/avocat/avocat-droit-commercial" },
            {
              label: "Contract law",
              href: "/avocat/avocat-droit-des-affaires",
            },
            {
              label: "Intellectual Property Law",
              href: "/avocat/avocat-droit-des-brevets",
            },
            { label: "Labor law", href: "/avocat/avocat-droit-du-travail" },
            {
              label: "Commercial law",
              href: "/avocat/avocat-droit-commercial",
            },
            { label: "See all specialties", href: "/avocat" },
          ],
        },
        {
          title: "Keep my accounts",
          links: [
            { label: "Chartered accountant", href: "/expertise-comptable" },
            {
              label: "Accounting expertise for SCI",
              href: "/expertise-comptable/expertise-comptable-pour-sci",
            },
          ],
        },
        {
          title: "Delegate my legal",
          links: [
            {
              label: "Essential Support",
              href: "/abonnement-juridique-essentiel",
            },
          ],
        },
      ],
      rightPanel: {
        title: "Top articles",
        links: [
          {
            label: "Legal assistance: definition and explanations",
            href: "/resources/aide-juridique-definition-et-explications",
          },
          {
            label: "Setting up your business with a lawyer",
            href: "/resources/creation-de-societe-avec-avocat",
          },
          {
            label: "Privacy Policy: Everything you need to know",
            href: "/resources/politique-de-confidentialite-tout-savoir",
          },
          {
            label: "Finding the Right Business Lawyer",
            href: "/resources/trouver-le-bon-avocat-pour-son-entreprise",
          },
          {
            label: "How to choose a lawyer?",
            href: "/resources/choisir-un-avocat",
          },
          {
            label: "Accountant or lawyer: choosing the right support",
            href: "/resources/comptable-ou-avocat-choisir-le-bon-support",
          },
          {
            label: "Drafting your statutes: with or without a lawyer?",
            href: "/resources/rediger-ses-statuts-avec-ou-sans-avocat",
          },
          { label: "Access the blog", href: "/resources" },
        ],
      },
    },
  },
  {
    key: "resources",
    label: "Resources",
    dropdown: {
      sections: [
        {
          title: "Creation files",
          links: [
            {
              label: "Starting a business: the steps",
              href: "creer-son-entreprise/creation-d-une-entreprise-7-etapes",
            },
            {
              label: "SASU",
              href: "creer-son-entreprise/sasu/interet-statut-sasu",
            },
            {
              label: "SAS",
              href: "creer-son-entreprise/sas/interet-statut-sas",
            },
            {
              label: "EURL",
              href: "creer-son-entreprise/eurl/interet-statut-eurl",
            },
            {
              label: "SARL",
              href: "creer-son-entreprise/sarl/interet-statut-sarl",
            },
            {
              label: "SCI",
              href: "creer-son-entreprise/sci/interet-statut-sci",
            },
            {
              label: "Micro-enterprise",
              href: "creer-son-entreprise/micro-entreprise/interet-micro-entreprise",
            },
            {
              label: "Sole proprietorship",
              href: "creer-son-entreprise/entreprise-individuelle/interet-entreprise-individuelle",
            },
            {
              label: "Association",
              href: "creer-son-entreprise/association/interet-association",
            },
          ],
        },
        {
          title: "Company life files",
          links: [
            {
              label: "Protecting your creations: the guide",
              href: "/resources/proteger-vos-creations-le-guide",
            },
            {
              label: "The various commercial contracts",
              href: "/resources/les-differents-types-de-contrats-commerciaux",
            },
            {
              label: "Business management from A to Z",
              href: "/resources/la-gestion-de-l-entreprise-de-a-z",
            },
            {
              label: "The Business Modification Guide",
              href: "/resources/la-modification-de-l-entreprise",
            },
            {
              label: "Recruitment and management of its employees",
              href: "/resources/recrutement-et-gestion-de-son-personnel",
            },
            {
              label: "Dispute management and prevention",
              href: "/resources/gestion-des-litiges-et-prevention",
            },
            {
              label: "How to close your business?",
              href: "/resources/fermeture-de-l-entreprise-quelles-sont-les-etapes",
            },
            { label: "Access the blog", href: "/ressources" },
          ],
        },
        {
          title: "PDF Guides",
          links: [
            {
              label: "Practical guide for business creators",
              href: "/ebook/guide-pratique-pour-les-createurs-d-entreprise",
            },
            {
              label: "Guide to assistance for business creation and takeover",
              href: "/ebook/guide-aide-creation-entreprise-et-acquisition",
            },
            {
              label: "Executive Remuneration Guide",
              href: "/ebook/guide-remuneration-directeurs-administrateurs",
            },
            {
              label: "Legal Guide to Commercial Contracts",
              href: "/ebook/guide-legal-contrats-commerciaux",
            },
            {
              label: "15-minute VAT declaration guide",
              href: "/ebook/guide-declaration-tva-15-minutes",
            },
            { label: "See all free guides", href: "/ebook" },
          ],
        },
        {
          title: "Simulators",
          links: [
            {
              label: "Choice of legal form",
              href: "/simulateur/choix-de-la-forme-juridique",
            },
            {
              label: "Eligibility for ACRE",
              href: "/simulateur/eligibilite-acre",
            },
            {
              label: "Choice of tax and VAT regime",
              href: "/simulateur/choix-de-regime-fiscale-et-tva",
            },
            {
              label: "Optimizing the manager's income",
              href: "/simulateur/optimisation-du-revenu-du-manager",
            },
          ],
        },
      ],
    },
  },
];
