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
            href: "/ressources/mandatory-sasu-registers-guide",
          },
          {
            label: "Opening your business: how to do it?",
            href: "/ressources/eurl-dissolution-procedure",
          },
          {
            label: "How to create a SASU?",
            href: "/ressources/eurl-dissolution-procedure",
          },
          {
            label: "How to create an SAS?",
            href: "/ressources/how-does-sas-work",
          },
          {
            label: "How to create an EURL?",
            href: "/ressources/mandatory-sasu-registers-guide",
          },
          {
            label: "SAS or SARL: the comparison",
            href: "/ressources/share-capital-reduction-taxation",
          },
          {
            label: "EURL or SASU: the guide",
            href: "/ressources/sarl-vs-sas-comparison",
          },
          {
            label: "Assistance for business creation",
            href: "/ressources/trademark-registration-france-guide",
          },
          {
            label: "Filing a trademark: the steps",
            href: "/ressources/mandatory-sasu-registers-guide",
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
            label: "How to choose your legal form?",
            href: "/ressources/mandatory-sasu-registers-guide",
          },
          {
            label: "Opening your business: how to do it?",
            href: "/ressources/eurl-dissolution-procedure",
          },
          {
            label: "How to create a SASU?",
            href: "/ressources/eurl-dissolution-procedure",
          },
          {
            label: "How to create an SAS?",
            href: "/ressources/how-does-sas-work",
          },
          {
            label: "How to create an EURL?",
            href: "/ressources/mandatory-sasu-registers-guide",
          },
          {
            label: "SAS or SARL: the comparison",
            href: "/ressources/share-capital-reduction-taxation",
          },
          {
            label: "EURL or SASU: the guide",
            href: "/ressources/sarl-vs-sas-comparison",
          },
          {
            label: "Assistance for business creation",
            href: "/ressources/trademark-registration-france-guide",
          },
          {
            label: "Filing a trademark: the steps",
            href: "/ressources/mandatory-sasu-registers-guide",
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
              href: "/creer-entreprise/rediger-pacte-associes",
            },
            { label: "See all offers", href: "/rediger-un-contrat" },
          ],
        },
        {
          title: "Employment contract",
          links: [
            {
              label: "Drafting a permanent contract",
              href: "/rediger-un-contrat/rediger-contrat-travail-indetermine",
            },
            {
              label: "Drafting a fixed-term contract",
              href: "/rediger-un-contrat/rediger-contrat-travail-determine",
            },
            {
              label: "Drafting a freelance contract",
              href: "/rediger-un-contrat/rediger-contrat-freelance",
            },
          ],
        },
      ],
      rightPanel: {
        title: "Top articles",
        links: [
          {
            label: "How to choose your legal form?",
            href: "/ressources/mandatory-sasu-registers-guide",
          },
          {
            label: "Opening your business: how to do it?",
            href: "/ressources/eurl-dissolution-procedure",
          },
          {
            label: "How to create a SASU?",
            href: "/ressources/eurl-dissolution-procedure",
          },
          {
            label: "How to create an SAS?",
            href: "/ressources/how-does-sas-work",
          },
          {
            label: "How to create an EURL?",
            href: "/ressources/mandatory-sasu-registers-guide",
          },
          {
            label: "SAS or SARL: the comparison",
            href: "/ressources/share-capital-reduction-taxation",
          },
          {
            label: "EURL or SASU: the guide",
            href: "/ressources/sarl-vs-sas-comparison",
          },
          {
            label: "Assistance for business creation",
            href: "/ressources/trademark-registration-france-guide",
          },
          {
            label: "Filing a trademark: the steps",
            href: "/ressources/mandatory-sasu-registers-guide",
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
            { label: "Business law", href: "/avocat/droit-affaires" },
            {
              label: "Contract law",
              href: "/avocat/droit-contrats",
            },
            {
              label: "Intellectual Property Law",
              href: "/avocat/droit-propriete-intellectuelle",
            },
            { label: "Labor law", href: "/avocat/droit-travail" },
            {
              label: "Commercial law",
              href: "/avocat/droit-commercial",
            },
          ],
        },
        {
          title: "Keep my accounts",
          links: [
            { label: "Chartered accountant", href: "/expertise-comptable" },
            {
              label: "Accounting expertise for SCI",
              href: "/expertise-comptable/ec-sci",
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
            label: "How to choose your legal form?",
            href: "/ressources/mandatory-sasu-registers-guide",
          },
          {
            label: "Opening your business: how to do it?",
            href: "/ressources/eurl-dissolution-procedure",
          },
          {
            label: "How to create a SASU?",
            href: "/ressources/eurl-dissolution-procedure",
          },
          {
            label: "How to create an SAS?",
            href: "/ressources/how-does-sas-work",
          },
          {
            label: "How to create an EURL?",
            href: "/ressources/mandatory-sasu-registers-guide",
          },
          {
            label: "SAS or SARL: the comparison",
            href: "/ressources/share-capital-reduction-taxation",
          },
          {
            label: "EURL or SASU: the guide",
            href: "/ressources/sarl-vs-sas-comparison",
          },
          {
            label: "Assistance for business creation",
            href: "/ressources/trademark-registration-france-guide",
          },
          {
            label: "Filing a trademark: the steps",
            href: "/ressources/mandatory-sasu-registers-guide",
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
              href: "/ressources/mandatory-sasu-registers-guide",
            },
            {
              label: "SASU",
              href: "/ressources/mandatory-sasu-registers-guide",
            },
            {
              label: "SAS",
              href: "/ressources/mandatory-sasu-registers-guide",
            },
            {
              label: "EURL",
              href: "/ressources/mandatory-sasu-registers-guide",
            },
            {
              label: "SARL",
              href: "/ressources/mandatory-sasu-registers-guide",
            },
            {
              label: "SCI",
              href: "/ressources/mandatory-sasu-registers-guide",
            },
            {
              label: "Micro-enterprise",
              href: "/ressources/mandatory-sasu-registers-guide",
            },
            {
              label: "Sole proprietorship",
              href: "/ressources/mandatory-sasu-registers-guide",
            },
            {
              label: "Association",
              href: "/ressources/mandatory-sasu-registers-guide",
            },
          ],
        },
        {
          title: "Company life files",
          links: [
            {
              label: "Protecting your creations: the guide",
              href: "/ressources/guide-protection-creations",
            },
            {
              label: "The various commercial contracts",
              href: "/ressources/guide-protection-creations",
            },
            {
              label: "Business management from A to Z",
              href: "/ressources/guide-protection-creations",
            },
            {
              label: "The Business Modification Guide",
              href: "/ressources/guide-protection-creations",
            },
            {
              label: "Recruitment and management of its employees",
              href: "/ressources/guide-protection-creations",
            },
            {
              label: "Dispute management and prevention",
              href: "/ressources/guide-protection-creations",
            },
            {
              label: "How to close your business?",
              href: "/ressources/guide-protection-creations",
            },
            { label: "Access the blog", href: "/ressources" },
          ],
        },
        {
          title: "PDF Guides",
          links: [
            {
              label: "Practical guide for business creators",
              href: "/ebook/ebook-new-etapes-creation",
            },
            {
              label: "Guide to assistance for business creation and takeover",
              href: "/ebook/ebook-new-financement-societe",
            },
            {
              label: "Executive Remuneration Guide",
              href: "/ebook/ebook-new-remuneration-dirigeant",
            },
            {
              label: "Legal Guide to Commercial Contracts",
              href: "/ebook/ebook-new-etapes-creation",
            },
            {
              label: "15-minute VAT declaration guide",
              href: "/ebook/ebook-new-remuneration-dirigeant",
            },
            { label: "See all free guides", href: "/tous-nos-guides" },
          ],
        },
        {
          title: "Simulators",
          links: [
            {
              label: "Commercial lease",
              href: "/funnel/service_choices/1?source=%2Frediger-un-contrat%2Frediger-contrat-de-location-commerciale",
            },
            {
              label: "Eligibility for ACRE",
              href: "/funnel/service_choices/1?source=%2Fproteger-sa-societe%2Fdepot-de-marque-inpi-en-ligne",
            },
            {
              label: "Choice of legal form",
              href: "/funnel/service_choices/1?source=%2Fcreer-entreprise%2Faide-au-choix-forme-juridique",
            },
            {
              label: "Optimizing the manager's income",
              href: "/funnel/service_choices/1?source=%2Favocat%2Ffind-a-lawyer",
            },
          ],
        },
      ],
    },
  },
];
