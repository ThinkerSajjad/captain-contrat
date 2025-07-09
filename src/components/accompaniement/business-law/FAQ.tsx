"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare } from "lucide-react";



const businessLawFaqs = [
  {
    question: "What type of lawyer for a business?",
    answer: (
      <div className="space-y-4">
        <p>
          To support a business, a <strong>business lawyer</strong> is the most
          appropriate choice due to their comprehensive expertise. Depending on
          the nature of your needs, several specializations may be relevant:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            a <strong>corporate lawyer</strong> for business creation and
            drafting of articles of association
          </li>
          <li>
            a <strong>commercial law attorney</strong> for your business
            relationships and contracts
          </li>
          <li>
            a <strong>tax lawyer</strong> for tax optimization and compliance
          </li>
          <li>
            a <strong>labor lawyer</strong> for drafting contracts and human
            resources management
          </li>
        </ul>
        <p>
          Ideally, you should choose a professional with experience in your
          sector of activity, which will make it easier to understand your
          specific issues.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-red-500" />,
  },
  {
    question: "What are the areas of business law?",
    answer: (
      <div className="space-y-4">
        <p>
          <strong>Business law</strong> is a discipline encompassing all rules
          relating to businesses. It covers several key areas:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Corporate law</strong> governs the legal life of companies,
            from their creation to their dissolution. It governs the choice of
            legal form (SARL, EURL, SAS, SASU, Individual Enterprise,
            micro-enterprise, etc.), the drafting of statutes, governance,
            relationships between partners and restructuring operations such as
            mergers or acquisitions.
          </li>
          <li>
            <strong>Commercial law</strong> concerns commercial acts, the status
            of traders, commercial leases and business assets. It also governs
            commercial relations between professionals and the regulation of
            commercial practices.
          </li>
          <li>
            <strong>Competition and distribution law</strong> ensures the proper
            functioning of the market by combating anti-competitive practices
            (cartels, abuse of dominant position) and restrictive competition
            practices. It also includes the control of business concentrations
            to limit monopoly situations.
          </li>
          <li>
            <strong>Contract and obligations law</strong> covers all contracts
            used in business life: commercial contracts, service provision
            contracts, partnership contracts, etc. It defines the rules for the
            formation and execution of these contracts.
          </li>
          <li>
            <strong>Intellectual and industrial property</strong> protects
            intellectual creations: patents, trademarks, designs and models,
            copyrights. It is essential for the protection of innovations and
            intangible assets of companies.
          </li>
          <li>
            <strong>Collective procedures law</strong> deals with business
            difficulties: safeguard, recovery and judicial liquidation
            procedures. It also organizes relations with creditors.
          </li>
          <li>
            <strong>International business law</strong> relates to international
            commercial relations: international contracts, international
            commercial arbitration, international trade law. It is crucial for
            companies operating internationally.
          </li>
          <li>
            <strong>Labor law</strong> provides a framework for individual and
            collective labor relations: employment contracts, dismissals,
            collective bargaining, staff representation.
          </li>
        </ul>
        <p>
          These different branches work together to provide a solid legal
          foundation for business activity.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
  },
  {
    question: "What is a corporate lawyer?",
    answer: (
      <div className="space-y-4">
        <p>
          A corporate lawyer is a legal expert who accompanies companies
          throughout their existence. Their role is crucial from creation, where
          they advise on choosing the most suitable legal status and draft the
          company's articles of association.
        </p>
        <p>Their main missions include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>strategic advice on choosing the legal form</li>
          <li>assistance with administrative formalities</li>
          <li>management of relationships between partners</li>
          <li>advice in case of litigation</li>
        </ul>
        <p>
          They also ensure compliance with legal obligations and ensure the
          company's legal security while facilitating its development.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-green-500" />,
  },
  {
    question: "When to call on a business lawyer?",
    answer: (
      <div className="space-y-4">
        <p>
          Consulting a business lawyer is essential at several key moments in a
          company's life. Their expertise is particularly valuable in the
          following situations:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>during the creation or restructuring of the company</li>
          <li>for the negotiation and drafting of strategic contracts</li>
          <li>in case of commercial disputes</li>
          <li>for external growth operations</li>
          <li>as part of regulatory compliance</li>
        </ul>
        <p>
          A preventive consultation often makes it possible to avoid future
          difficulties and to secure important operations.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-purple-500" />,
  },
  {
    question: "Why does a company need a lawyer?",
    answer: (
      <div className="space-y-4">
        <p>
          A lawyer represents a strategic asset for any company. Their expertise
          makes it possible to anticipate and prevent potential legal
          difficulties, while seizing development opportunities. They ensure the
          company's compliance with constantly evolving regulations and secure
          commercial relationships.
        </p>
        <p>Their essential areas of intervention include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>strategic legal advice</li>
          <li>securing contractual documents</li>
          <li>litigation management and prevention</li>
          <li>protection of intangible assets</li>
        </ul>
        <p>
          More than just legal advice, they become a true partner in the
          company's growth.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-orange-500" />,
  },
  {
    question: "Which lawyer for a commercial dispute?",
    answer: (
      <div className="space-y-4">
        <p>
          For commercial disputes, it is generally advisable to call on a lawyer
          specializing in commercial law. This type of lawyer has expertise in
          commercial matters, which is essential for navigating the legal
          complexities that may arise in this field.
        </p>
        <p>
          Their expertise extends from commercial law and contracts to judicial
          procedures before commercial courts. They must also master:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            alternative dispute resolution methods such as mediation and
            arbitration
          </li>
          <li>negotiation strategies</li>
          <li>precise evaluation of commercial damages</li>
        </ul>
        <p>
          This legal professional intervenes in a wide variety of commercial
          disputes. They notably handle conflicts between commercial partners,
          abusive terminations of commercial relationships and unpaid debts.
        </p>
        <p>
          Their field of action also covers litigation related to commercial
          contracts, disputes between partners, cases of unfair competition and
          distribution litigation.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-red-600" />,
  },
  {
    question: "What is the difference between commercial law and business law?",
    answer: (
      <div className="space-y-4">
        <p>
          Commercial law and business law are two branches of law that, although
          closely related, have major differences:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Commercial law</strong> is a sub-branch of business law that
            focuses specifically on commercial acts and merchants. It governs
            commercial contracts, commercial leases, commercial companies, and
            other aspects related to commercial transactions. It is mainly
            governed by the Commercial Code.
          </li>
          <li>
            <strong>Business law</strong>, on the other hand, encompasses a
            broader field. It includes not only commercial law, but also other
            areas such as corporate law, competition law, intellectual property
            law, tax law and labor law. Thus, business law covers all legal
            aspects that affect the life of companies, from their creation to
            their closure.
          </li>
        </ul>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-indigo-500" />,
  },
  {
    question: "Who are the Captain Contract lawyers?",
    answer: (
      <div className="space-y-4">
        <p>
          Captain Contract lawyers are privileged partners, practicing within
          their own firm or at Implied Avocats Expertise Conseil (IAEC). They
          therefore respond to the obligations of ethics and independence
          imposed by their profession.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-gray-500" />,
  },
];

export function FAQ() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="lg:text-5xl text-4xl font-bold text-center text-[#1a365d] mb-12">
          We answer your questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {businessLawFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-lightPrimary rounded-lg border-none px-6 cursor-pointer data-[state=open]:bg-lightPrimary transition-all duration-300"
            >
              <AccordionTrigger className="hover:no-underline py-6 cursor-pointer transition-all duration-300">
                <div className="flex items-center gap-3 text-left lg:text-lg text-base">
                  {faq.icon}
                  <span className="text-black font-semibold lg:text-xl text-lg">
                    {faq.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-6 lg:text-base text-sm transition-all duration-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
