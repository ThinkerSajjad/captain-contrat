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
            { label: "Creation of a SASU", href: "#" },
            { label: "Creation of an SAS", href: "#" },
            { label: "Creation of an EURL", href: "#" },
            { label: "Creation of an LLC", href: "#" },
            { label: "Creation of an SCI", href: "#" },
            { label: "Creation of a micro-enterprise", href: "#" },
            { label: "Drafting a shareholders' agreement", href: "#" },
            { label: "Help in choosing the legal form", href: "#" },
          ],
        },
        {
          title: "Protect my brand",
          links: [
            { label: "Trademark filing", href: "#" },
            { label: "Prior art search", href: "#" },
          ],
        },
        {
          title: "Surround myself well",
          links: [
            { label: "Preparation for business creation", href: "#" },
            { label: "Partner benefits", href: "#" },
            { label: "Online Chartered Accountant", href: "#" },
          ],
        },
      ],
      rightPanel: {
        title: "Top articles",
        links: [
          { label: "How to choose your legal form?", href: "#" },
          { label: "Opening your business: how to do it?", href: "#" },
          { label: "How to create a SASU?", href: "#" },
          { label: "How to create an SAS?", href: "#" },
          { label: "How to create an EURL?", href: "#" },
          { label: "SAS or SARL: the comparison", href: "#" },
          { label: "EURL or SASU: the guide", href: "#" },
          { label: "Assistance for business creation", href: "#" },
          { label: "Filing a trademark: the steps", href: "#" },
          { label: "Access the blog", href: "#" },
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
            { label: "Transfer of registered office", href: "#" },
            { label: "Transformation of society", href: "#" },
            { label: "Change of corporate purpose", href: "#" },
            { label: "See all offers", href: "#" },
          ],
        },
        {
          title: "Manage my employees",
          links: [
            { label: "Dismissal procedure", href: "#" },
            { label: "Conventional termination", href: "#" },
            { label: "See all offers", href: "#" },
          ],
        },
        {
          title: "Close my business",
          links: [
            { label: "Closure of micro-enterprise", href: "#" },
            { label: "Dissolution and radiation", href: "#" },
          ],
        },
        {
          title: "Manage my business",
          links: [
            { label: "Approval of accounts", href: "#" },
            { label: "Transfer of shares", href: "#" },
            { label: "Capital increase", href: "#" },
            { label: "Company in difficulty", href: "#" },
            { label: "Accounting management", href: "#" },
          ],
        },
        {
          title: "Overcoming Disputes",
          links: [
            { label: "Litigation", href: "#" },
            { label: "Formal notice", href: "#" },
            { label: "Payment order", href: "#" },
            { label: "See all offers", href: "#" },
          ],
        },
      ],
      rightPanel: {
        title: "Top articles",
        links: [
          { label: "The Business Modification Guide", href: "#" },
          { label: "Changes to the statutes", href: "#" },
          { label: "Company transformation: procedures", href: "#" },
          { label: "Change of company name: the procedure", href: "#" },
          { label: "Transfer of registered office: what formalities?", href: "#" },
          { label: "Capital increase: how to proceed?", href: "#" },
          { label: "The 10 accounting principles you need to know", href: "#" },
          { label: "Closing a business: what are the steps?", href: "#" },
          { label: "Company dissolution and liquidation: the guide", href: "#" },
          { label: "Access the blog", href: "#" },
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
            { label: "General Conditions of Sale (GCS)", href: "#" },
            { label: "General Conditions of Use (GCU)", href: "#" },
            { label: "General Rental Conditions (GRC)", href: "#" },
            { label: "Privacy Policy", href: "#" },
          ],
        },
        {
          title: "Commercial contract",
          links: [
            { label: "Service provision contract", href: "#" },
            { label: "Commercial lease", href: "#" },
            { label: "Commercial contract", href: "#" },
            { label: "Subcontracting contract", href: "#" },
            { label: "Shareholders' agreement", href: "#" },
            { label: "See all offers", href: "#" },
          ],
        },
        {
          title: "Employment contract",
          links: [
            { label: "Drafting a permanent contract", href: "#" },
            { label: "Drafting a fixed-term contract", href: "#" },
            { label: "Drafting a freelance contract", href: "#" },
          ],
        },
      ],
      rightPanel: {
        title: "Top articles",
        links: [
          { label: "The different types of commercial contracts", href: "#" },
          { label: "General Terms and Conditions: The Complete Guide 2025", href: "#" },
          { label: "Freelance T&Cs: How to write them well?", href: "#" },
          { label: "Service provision contract: everything you need to know", href: "#" },
          { label: "Services and self-employment", href: "#" },
          { label: "Subcontracting contract: how to write it?", href: "#" },
          { label: "Commercial partnership contract: everything you need to know", href: "#" },
          { label: "Drafting the partnership agreement: the guide", href: "#" },
          { label: "Access the blog", href: "#" },
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
            { label: "Business law", href: "#" },
            { label: "Contract law", href: "#" },
            { label: "Intellectual Property Law", href: "#" },
            { label: "Labor law", href: "#" },
            { label: "Commercial law", href: "#" },
            { label: "See all specialties", href: "#" },
          ],
        },
        {
          title: "Keep my accounts",
          links: [
            { label: "Chartered accountant", href: "#" },
            { label: "Accounting expertise for SCI", href: "#" },
          ],
        },
        {
          title: "Delegate my legal",
          links: [
            { label: "Essential Support", href: "#" },
          ],
        },
      ],
      rightPanel: {
        title: "Top articles",
        links: [
          { label: "Legal assistance: definition and explanations", href: "#" },
          { label: "Setting up your business with a lawyer", href: "#" },
          { label: "Privacy Policy: Everything you need to know", href: "#" },
          { label: "Finding the Right Business Lawyer", href: "#" },
          { label: "How to choose a lawyer?", href: "#" },
          { label: "Accountant or lawyer: choosing the right support", href: "#" },
          { label: "Drafting your statutes: with or without a lawyer?", href: "#" },
          { label: "Access the blog", href: "#" },
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
            { label: "Starting a business: the steps", href: "#" },
            { label: "SASU", href: "#" },
            { label: "SAS", href: "#" },
            { label: "EURL", href: "#" },
            { label: "SARL", href: "#" },
            { label: "SCI", href: "#" },
            { label: "Micro-enterprise", href: "#" },
            { label: "Sole proprietorship", href: "#" },
            { label: "Association", href: "#" },
          ],
        },
        {
          title: "Company life files",
          links: [
            { label: "Protecting your creations: the guide", href: "#" },
            { label: "The various commercial contracts", href: "#" },
            { label: "Business management from A to Z", href: "#" },
            { label: "The Business Modification Guide", href: "#" },
            { label: "Recruitment and management of its employees", href: "#" },
            { label: "Dispute management and prevention", href: "#" },
            { label: "How to close your business?", href: "#" },
            { label: "Access the blog", href: "#" },
          ],
        },
        {
          title: "PDF Guides",
          links: [
            { label: "Practical guide for business creators", href: "#" },
            { label: "Guide to assistance for business creation and takeover", href: "#" },
            { label: "Executive Remuneration Guide", href: "#" },
            { label: "Legal Guide to Commercial Contracts", href: "#" },
            { label: "15-minute VAT declaration guide", href: "#" },
            { label: "See all free guides", href: "#" },
          ],
        },
        {
          title: "Simulators",
          links: [
            { label: "Choice of legal form", href: "#" },
            { label: "Eligibility for ACRE", href: "#" },
            { label: "Choice of tax and VAT regime", href: "#" },
            { label: "Optimizing the manager's income", href: "#" },
          ],
        },
      ],
    },
  },
]; 