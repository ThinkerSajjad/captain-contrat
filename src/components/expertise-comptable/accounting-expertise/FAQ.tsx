"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare } from "lucide-react";

const extractedFaqs = [
  {
    question: "What are the accounting obligations of SCIs for corporate tax?",
    answer: (
      <div className="space-y-4">
        <p>
          SCIs subject to corporate tax have the same accounting obligations as
          other companies. They must:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Keeping accrual accounting:</strong> The SCI must keep
            accrual accounting according to the rules of the General Accounting
            Plan, consisting of recording income and expenditure in a journal.
          </li>
          <li>
            <strong>Declare their results:</strong> The SCI must file an annual
            results declaration (form 2065) with the tax authorities.
          </li>
          <li>
            <strong>Paying corporate tax:</strong> The SCI must pay corporate
            tax based on its profits, with the payment of quarterly installments
            and a balance at the end of the financial year.
          </li>
          <li>
            <strong>Declare and pay Value Added Tax (VAT):</strong> If the SCI
            carries out operations subject to VAT (rentals subject to VAT or on
            option), it must file periodic VAT returns and pay the corresponding
            tax.
          </li>
          <li>
            <strong>
              Declare and pay the contribution on the added value of companies
              (CVAE):
            </strong>{" "}
            Depending on its turnover, the SCI may be liable for the CVAE.
          </li>
        </ul>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
  },
  {
    question: "What are the accounting obligations of SCIs subject to IR?",
    answer: (
      <div className="space-y-4">
        <p>
          The accounting requirements of an SCI subject to IR are less stringent
          than those of an SCI subject to IS. They include:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Simplified cash accounting:</strong> The SCI must keep cash
            accounting, recording receipts and disbursements in a register
            (journal). This allows for the justification of property income and
            expenses.
          </li>
          <li>
            <strong>Declare their results (Property income):</strong> The SCI
            must establish and transmit, via the EDI procedure, form 2072-C or
            2072-S depending on the nature of the partners and the applicable
            tax regime.
          </li>
          <li>
            <strong>Retention of supporting documents:</strong> All receipts and
            expenses (invoices, rent receipts, management fees, loan interest,
            etc.) must be archived to ensure traceability of the tax result.
          </li>
        </ul>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-green-500" />,
  },
  {
    question: "Is it mandatory to have an accountant?",
    answer: (
      <div className="space-y-4">
        <p>
          You are not required to hire an accountant. However, if you do not
          hire one, you will have to handle all of the accounting and tax
          requirements for your SCI on your own.
        </p>
        <p>
          Taking a chartered accountant can therefore save you time. Chartered
          accountants can also give you valuable advice to help you make the
          right financial decisions and optimize your taxation. Furthermore,
          having a chartered accountant reduces the risks of undergoing a tax
          audit.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-purple-500" />,
  },
  {
    question: "What is bookkeeping?",
    answer: (
      <div className="space-y-4">
        <p>
          Throughout the year, you must keep up to date a journal and a general
          ledger. These documents allow you to precisely track all the financial
          operations of your company. Each operation must be justified, dated
          and categorized according to charges or receipts, to facilitate the
          establishment of declaration 2072 and ensure traceability in case of
          control.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-red-500" />,
  },
  {
    question: "What tax and social security declarations must be made?",
    answer: (
      <div className="space-y-4">
        <p>
          Depending on your tax regime, you must regularly declare and pay VAT,
          corporate tax or income tax. Social declarations must also be made,
          depending on your status (salaried manager or not) and the number of
          employees in your company.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-orange-500" />,
  },
  {
    question: "Is approval of accounts mandatory?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes, commercial companies must organize an annual General Assembly
          (GA) to approve the accounts. The minutes of this GA are essential to
          file the accounts with the registry.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-indigo-500" />,
  },
  {
    question: "What is accountability in SCI?",
    answer: (
      <div className="space-y-4">
        <p>
          In an SCI (Société Civile Immobilière), the approval of accounts takes
          the form of "accountability". Concretely, this means that the manager
          must, once a year, account for their management to the partners, by
          presenting them with a clear summary of the activity and results of
          the company.
        </p>
        <p>
          This accountability generally gives rise to an annual general
          assembly, during which minutes are drawn up. This minutes is essential
          in case of profit distribution (share of the result or dividend
          according to the tax regime), but it is recommended every year, even
          in the absence of distribution.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-teal-500" />,
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
          {extractedFaqs.map((faq, index) => (
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
