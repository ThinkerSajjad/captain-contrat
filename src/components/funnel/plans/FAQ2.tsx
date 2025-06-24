'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const faqs = [
  {
    question: "📌  Why use an online accounting firm?",
    answer: "Online tools save you valuable time. No more paperwork: scan your invoices and they'll automatically be linked to the corresponding expense. \n These tools also save your accountant time, allowing us to offer more competitive rates than a traditional firm. \n And even though it's an online accounting firm, you can meet your accountant in person. We know that physical contact can be important at certain stages of a business's life. Therefore, we can arrange a meeting with your accountant at our offices so you can talk face-to-face if you prefer. Our accounting firm may be online, but we're still available for our clients!"
  },
  {
    question: "What are the duties of an accountant and am I required to have one?",
    answer: (
      <div className="space-y-2">
        <p>The chartered accountant has two main missions:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Carry out the company's various accounting obligations (balance sheet, income statement, annexes, tax return, tax and VAT declarations, etc.)</li>
          <li>Provide personalized advice to the manager on the financial management of the company (depreciation, manager's remuneration, mileage allowances, etc.)</li>
        </ul>
        <p>Our services include fulfilling your company's accounting obligations and providing unlimited consulting services.</p>
        <p>Please note that you are not required to hire an accountant. However, if you do not hire one, you will have to fulfill all the obligations listed above yourself. Hiring an accountant will save you time. Accountants can also provide valuable advice to help you make the right financial decisions and optimize your taxes.</p>
      </div>
    )
  },
  {
    question: "Who are your accountants and are they certified?",
    answer: "Captain Contrat is part of the Implid Lawyers and Chartered Accountants group. The service will be provided by the firm's accountants and chartered accountants. Implid has been in business for over 50 years, and all of its chartered accountants are registered with the French Order of Chartered Accountants."
  },
  {
    question: "How does accounting and financial management software work?",
    answer: (
        <div className="space-y-2">
            <p>Pennylane is a software program that allows you to save time and gain insight into your company's cash flow. In just a few clicks, you can:</p>
            <ul className="list-disc list-inside space-y-1">
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
    question: "Does my turnover or sector of activity have an influence on the price of my accounting solution?",
    answer: "No. At Captain Contrat, we've chosen to offer single, flat-rate rates regardless of your business type. Our rates are transparent, predictable, and affordable."
  },
  {
    question: "Do you manage the accounting for all business sectors?",
    answer: "We are able to support almost all sectors of activity and we handle all types of accounting (treasury and commitment)."
  },
  
  
];

export function FAQ2() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="lg:text-5xl text-4xl font-bold text-center text-[#1a365d] mb-12">
        We answer your questions
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