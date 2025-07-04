'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const faqs = [
  {
    question: "📌 What are the missions of the chartered accountant?",
    answer: (
      <div className="space-y-4">
        <p>The chartered accountant has two main missions:</p>
        <ul className="list-disc list-inside">
          <li>Carry out the various accounting obligations of the company (balance sheet, income statement, annexes, tax return, tax returns, VAT, etc.)</li>
          <li>Provide personalized advice to the manager on the financial management of the company (depreciation, manager's remuneration, mileage allowances, etc.)</li>
        </ul>
        <p>Our services include the fulfillment of your company's accounting obligations and unlimited advice.</p>
      </div>
    )
  },
  {
    question: "Why use an online accounting firm?",
    answer: (
      <div className="space-y-4">
        <p>Online tools allow you to save valuable time. No more paperwork: scan your invoices and they'll automatically be linked to the corresponding expense.</p>
        <p>These tools also save your accountant time and allow you to offer more competitive rates than a traditional accounting firm.</p>
        <p>And even with an online accounting firm, you can meet with your accountant by phone, video, or even in person!</p>
      </div>
    )
  },
  {
    question: "Who are your accountants and are they certified?",
    answer: (
      <div className="space-y-4">
        Captain Contrat is part of the implid group. The service will be provided by the firm's accountants and chartered accountants. implid has been in business for over 50 years, and all of its chartered accountants are registered with the French Order of Chartered Accountants.
      </div>
    )
  },
  {
    question: "How does accounting and financial management software work?",
    answer: (
      <div className="space-y-4">
        <p>Pennylane is a software program that allows you to save time and gain insight into your company's cash flow. In just a few clicks, you can:</p>
        <ul className="list-disc list-inside">
          <li>Generate invoices, quotes, credit notes and send them to your customers</li>
          <li>Import your purchase invoices and link them to the corresponding expense</li>
          <li>Pay your bills</li>
          <li>Talk to your accountant</li>
          <li>Visualize your cash flow and upcoming expenses</li>
        </ul>
      </div>
    )
  },
  {
    question: "What is bookkeeping?",
    answer: (
      <div className="space-y-4">
        Throughout the year, you must maintain a journal and general ledger. These documents allow you to accurately track all of your company's financial transactions. Each transaction must be justified and categorized according to the correct accounting system.
      </div>
    )
  }
];

export function FAQ() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="lg:text-5xl text-4xl font-bold text-center text-[#1a365d] mb-12">
          FAQ
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-lightPrimary rounded-lg border-none px-6 cursor-pointer data-[state=open]:bg-lightPrimary transition-all duration-300"
            >
              <AccordionTrigger className="hover:no-underline py-6 cursor-pointer transition-all duration-300">
                <div className="flex items-center gap-3 text-left lg:text-lg text-base">
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