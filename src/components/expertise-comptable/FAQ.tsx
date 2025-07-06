"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare } from "lucide-react";

const accountingFaqs = [
  {
    question: "What are the missions of the chartered accountant?",
    answer: (
      <div className="space-y-4">
        <p>The chartered accountant has two main missions:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            Carry out the various accounting obligations of the company (balance
            sheet, income statement, annexes, tax return, tax returns, VAT,
            etc.)
          </li>
          <li>
            Provide personalized advice to the manager on the financial
            management of the company (depreciation, manager's remuneration,
            mileage allowances, etc.)
          </li>
        </ol>
        <p>
          Our services include the fulfillment of your company's accounting
          obligations and unlimited advice.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
  },
  {
    question: "Why use an online accounting firm?",
    answer: (
      <div className="space-y-4">
        <p>
          Online tools allow you to save valuable time. No more paperwork: scan
          your invoices and they'll automatically be linked to the corresponding
          expense.
        </p>
        <p>
          These tools also save your accountant time and allow you to offer more
          competitive rates than a traditional accounting firm.
        </p>
        <p>
          And even with an online accounting firm, you can meet with your
          accountant by phone, video, or even in person!
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-green-500" />,
  },
  {
    question: "Who are your accountants and are they certified?",
    answer: (
      <div className="space-y-4">
        <p>
          Captain Contrat is part of the implid group. The service will be
          provided by the firm's accountants and chartered accountants. implid
          has been in business for over 50 years, and all of its chartered
          accountants are registered with the French Order of Chartered
          Accountants.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-purple-500" />,
  },
  {
    question: "How does accounting and financial management software work?",
    answer: (
      <div className="space-y-4">
        <p>
          Pennylane is a software program that saves you time and provides
          insight into your company's cash flow. In just a few clicks, you can:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Generate invoices, quotes, credit notes and send them to your
            customers
          </li>
          <li>
            Import your purchase invoices and link them to the corresponding
            expense
          </li>
          <li>Pay your bills</li>
          <li>Talk to your accountant</li>
          <li>Visualize your cash flow and upcoming expenses</li>
        </ul>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-red-500" />,
  },
  {
    question: "Do you manage the accounting for all business sectors?",
    answer: (
      <div className="space-y-4">
        <p>
          We are able to support almost all sectors of activity and we handle
          all types of accounting (treasury and commitment).
        </p>
        <p>
          <strong>Ineligible activities:</strong> bookmaker/sports betting
          consultancy activities, activities related to cryptocurrencies or
          activities related to the FDJ.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-orange-500" />,
  },
  {
    question: "Do you manage the accounting of an SCI?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes, Captain Contrat offers to manage the accounting of your real
          estate company. This offer, tailored to SCI managers, includes support
          from an accountant and access to intuitive and comprehensive
          accounting software.
        </p>
        <p>
          Our chartered accountants accompany you on a daily basis regardless of
          the nature of your investment (rental or family) and the chosen tax
          method (income tax or corporate tax).
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-indigo-500" />,
  },
  {
    question: "Do I have to have an accountant?",
    answer: (
      <div className="space-y-4">
        <p>
          You are not required to be accompanied by a chartered accountant.
          However, if you do not take a chartered accountant, you will have to
          carry out all the obligations listed above alone.
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
    icon: <MessageSquare className="h-5 w-5 text-teal-500" />,
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
    icon: <MessageSquare className="h-5 w-5 text-blue-600" />,
  },
  {
    question: "What is bookkeeping?",
    answer: (
      <div className="space-y-4">
        <p>
          Throughout the year, you must keep up to date a journal and a general
          ledger. These documents allow you to precisely track all the financial
          operations of your company. Each transaction must be justified and
          categorized according to the correct accounting regime.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-cyan-500" />,
  },
  {
    question: "Should annual accounts be filed?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes, at the end of each fiscal year, companies must file their annual
          accounts (balance sheet, income statement and annexes) with the
          commercial court registry. In case of forgetting or delay, a fine of
          €1,500 can be applied.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-gray-500" />,
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
    icon: <MessageSquare className="h-5 w-5 text-pink-500" />,
  },
  {
    question: "Are you ready for the e-invoicing requirement in 2026?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes, our solution is already compatible with the electronic invoice
          reform that is gradually coming into force from 2026. We support our
          clients to comply with this legal obligation.
        </p>
        <p>
          Thanks to our software, your invoices will be issued, transmitted and
          received in electronic format, in accordance with the new requirements
          of the tax administration. You will thus be ready, without additional
          cost or complexity.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-yellow-500" />,
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
          {accountingFaqs.map((faq, index) => (
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
