"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare } from "lucide-react";

const legalFaqs = [
  {
    question: "What is account approval?",
    answer: (
      <div className="space-y-4">
        <p>
          Every company must approve its accounts. The company's directors must
          submit the company's accounts for approval to the partners (for SARLs
          and SCIs) or shareholders (for SASs).
        </p>
        <p>The annual accounts are:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            The balance sheet (assets and liabilities of the company which shows
            the financial situation of a company)
          </li>
          <li>The income statement (the company's income and expenses)</li>
          <li>
            The annexes (documents allowing a better understanding of the two
            previous ones)
          </li>
        </ul>
        <p>
          An ordinary general meeting must therefore be held within six months
          of the end of the financial year. This meeting must then approve or
          disapprove the accounts.
        </p>
        <p>
          Generally, companies' activities end on December 31. Therefore, the
          accounts must be approved no later than June 30 of the following year.
          However, it is possible to submit a justified request to the president
          of the commercial court to waive the six-month deadline, even if the
          meeting has already been convened (as long as it has not been held).
          If the accounts have been approved, they must be filed with the
          registry of the commercial court.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
  },
  {
    question:
      "What legal documents are included in the subscription that I can customize?",
    answer: (
      <div className="space-y-4">
        <p>
          You can find more than 50 documents in your legal document library,
          including:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Commercial contracts:</strong> partnership contract, service
            provision, subcontracting, general terms and conditions, legal
            notices, invoices, etc.
          </li>
          <li>
            <strong>Hiring your employees:</strong> promise of employment,
            fixed-term contracts, permanent contracts, etc.
          </li>
          <li>
            <strong>Management of your employees:</strong> warning letter,
            layoff letter, final settlement, teleworking charter, etc.
          </li>
          <li>
            <strong>Creation and modification of company:</strong> company
            statutes, transfer of registered office, approval of accounts, etc.
          </li>
        </ul>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-green-500" />,
  },
  {
    question:
      "Do I have a dedicated contact to manage the legal aspects of my business?",
    answer: (
      <div className="space-y-4">
        <p>
          <strong>Yes</strong> – a dedicated legal contact is assigned to you as
          soon as you subscribe.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Personalized onboarding:</strong> an initial meeting allows
            your legal advisor to learn about your business, your growth
            challenges and plan your administrative obligations.
          </li>
          <li>
            <strong>Follow-up throughout the year:</strong> the same lawyer
            remains your preferred point of contact to support you and carry out
            legal reviews during the year.
          </li>
        </ul>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-purple-500" />,
  },
  {
    question: "What questions can I ask the lawyer?",
    answer: (
      <div className="space-y-4">
        <p>
          Our legal experts can provide you with legal information on over 20
          legal topics.
        </p>
        <p>
          For example, here are the most frequently asked questions from our
          community of subscribers to their legal expert:
        </p>
        <div className="space-y-3">
          <div>
            <p>
              <strong>Commercial:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <em>My website is being created, what must be included?</em>
              </li>
              <li>
                <em>
                  What type of contract should be established with service
                  providers?
                </em>
              </li>
              <li>
                <em>What are the mandatory details on an invoice?</em>
              </li>
            </ul>
          </div>
          <div>
            <p>
              <strong>Social:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <em>
                  What is the collective agreement for my sector and what
                  obligations must be respected?
                </em>
              </li>
              <li>
                <em>What are my obligations regarding mandatory display?</em>
              </li>
              <li>
                <em>
                  An employee no longer shows up for work, what options does the
                  manager have?
                </em>
              </li>
            </ul>
          </div>
          <div>
            <p>
              <strong>Corporate:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <em>IS or IR, advantages and disadvantages?</em>
              </li>
              <li>
                <em>VAT regimes, what are the differences?</em>
              </li>
              <li>
                <em>
                  What clauses can be included in a shareholders' agreement?
                </em>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-red-500" />,
  },
  {
    question: "What is the lawyer's response time?",
    answer: (
      <div className="space-y-4">
        <p>
          Our team of specialized legal experts is available and responsive and
          is committed to responding to your questions in writing within 24
          hours (working days).
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-orange-500" />,
  },
  {
    question: "What is the difference between a lawyer and a jurist?",
    answer: (
      <div className="space-y-4">
        <p>
          Every project leader often wonders whether they should call on a
          lawyer or a legal expert.
        </p>
        <p>
          A lawyer is an independent legal professional who advises, represents,
          and defends their clients. A legal expert is an employed legal
          professional who practices in a company. A legal expert who is not a
          lawyer cannot provide independent legal advice.
        </p>
        <p>Here are the key points:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Lawyer:</strong>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                Training: Master 1 or Master 2 + CRFPA exam, law school, oath
              </li>
              <li>
                Status: registered with the Bar, regulated liberal profession
              </li>
              <li>
                Missions: strategic advice, drafting of documents and monopoly
                of representation before the courts
              </li>
            </ul>
          </li>
          <li>
            <strong>Legal Expert:</strong>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Education: bachelor's, master's, doctorate in law</li>
              <li>Status: employee of the company</li>
              <li>
                Missions: risk analysis, regulatory monitoring, contract
                drafting for the organization, etc.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          Concretely, if you do not have a legal expert internally, you must
          necessarily call on a lawyer.
        </p>
        <p>
          The lawyer can also intervene in addition to a legal expert when the
          company experiences a specific legal problem or if litigation is
          emerging.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-indigo-500" />,
  },
  {
    question: "Who can help me if I have a problem?",
    answer: (
      <div className="space-y-4">
        <p>
          Our teams are available Monday to Friday from 9 a.m. to 7 p.m. by
          phone, email or chat to help you.
        </p>
        <p>
          Once subscribed, you will be able to obtain legal information from our
          legal experts who will redirect you if necessary for legal advice to
          one of our partner lawyers.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-teal-500" />,
  },
  {
    question: "How long is my commitment?",
    answer: (
      <div className="space-y-4">
        <p>
          By subscribing to one of our legal subscriptions, you are committed
          for a period of 12 months from the start date of the subscription.
          Your subscription will be tacitly renewed at the end of these 12
          months.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-blue-600" />,
  },
];

export function FAQ() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="lg:text-5xl text-4xl font-bold text-center text-[#1a365d] mb-12">
          Discover frequently asked questions from other entrepreneurs
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {legalFaqs.map((faq, index) => (
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
