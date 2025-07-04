'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const faqs = [
  {
    question: "📌 What is the use of a head office for a company?",
    answer: (
      <div className="space-y-4">
        <p>The registered office corresponds to the legal domicile address of a company . In other words, it is the address where the company is mainly established, or where the management is generally located. </p>

        <p>The head office gives a real identity to the company; in fact, it is from this location that the nationality of the company, the applicable law in the event of a dispute , as well as the competent court are determined.</p>

        <p>It is also the address at which the company receives its mail and invoices, and therefore has a legal function.</p>

        <p>Want to learn more about how a company's head office works? Read our dedicated article in 3 minutes. </p>
      </div>
    )
  },
  {
    question: "I am a manager, can I decide to transfer the head office?",
    answer: (
      <div className="space-y-4">
        <p>Yes, you can transfer the head office of your company. This is a legal procedure that allows you to change the address of the company's registered office. </p>

        <p>To do this, you need to follow a few steps: </p>
      </div>
    )
  },
  {
    question: "What are the documents required to transfer the head office?",
    answer: (
      <div className="space-y-4">
        <p>To transfer the head office of your company, you will need to provide the following documents: </p>
        <ul className="list-disc list-inside space-y-2">
          <li>The articles of association of the company</li>
          <li>The certificate of company registration</li>
          <li>The certificate of company registration</li>
          <li>The certificate of company registration</li>
          <li>The certificate of company registration</li>
        </ul>
      </div>
    )
  },

  {
    question: "What are the reasons for a head office transfer?",
    answer: (
      <div className="space-y-4">
        <p>There are several reasons why a company might want to transfer its head office: </p>
      </div>
    )
  },

  {
    question: "Is it possible to enforce the transfer of the registered office against third parties?",
    answer: (
      <div className="space-y-4">
        <p>Yes, it is possible to enforce the transfer of the registered office against third parties. </p>
      </div>
    )
  },
  {
    question: "Are the obligations the same for all companies?",
    answer: (
      <div className="space-y-4">
        <p>Yes, the obligations are the same for all companies. </p>
      </div>
    )
  },
  {
    question: "What about the sole shareholder of an EURL or SASU who wishes to transfer the registered office?",
    answer: (
      <div className="space-y-4">
        <p>Yes, the sole shareholder of an EURL or SASU can transfer the registered office. </p>
      </div>
    )
  },
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