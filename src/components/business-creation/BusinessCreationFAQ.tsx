'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare } from "lucide-react";

const faqs = [
  {
    question: "How do I contact my lawyer?",
    answer: "To speak to the lawyer in charge of your order, you can send them a message using the messaging system linked to your order or call 01 83 81 67 25 from Monday to Friday, 9:30 a.m. to 6:00 p.m.",
    icon: <MessageSquare className="h-5 w-5 text-red-500" />,
  },
  {
    question: "Can the expenses related to setting up my company be included in my accounting?",
    answer: (
      <div className="space-y-4">
        <p>Yes, expenses related to setting up your company can be included in your accounting. These costs, called "incorporation fees," are generally considered deductible expenses and include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Creation costs (registration, legal publication)</li>
          <li>Legal and accounting consultancy fees</li>
          <li>Registration fees</li>
          <li>Logo/Website Design Costs</li>
          <li>Bank charges for opening an account</li>
        </ul>
        <p>These expenses can be recorded as "establishment costs" and depreciated over several financial years. It is recommended that you keep all supporting documents and record them in your accounts as soon as they are incurred.</p>
        <p>For specific application, consult an accountant who will adapt these principles to your specific situation.</p>
      </div>
    ),
  },
  {
    question: "Can I create my company without carrying out my activity immediately?",
    answer: (
        <div className="space-y-4">
        <p>Yes, you can create your company without immediately starting a business. The law allows you to create a business with a project in mind. However, here are some important points to consider:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>You must nevertheless register your company in the commercial register</li>
          <li>Accounting and tax obligations remain active</li>
          <li>Fixed costs will remain (accounting, insurance)</li>
          <li>A waiting period applies before the first turnover declaration</li>
        </ul>
        <p>Tip: Anticipate your initial costs and plan a start-up budget.</p>
      </div>
    )
  },
];

export function BusinessCreationFAQ() {
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
                  {faq.icon}
                  <span className="text-black font-semibold lg:text-xl text-lg">
                    {faq.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-6 transition-all duration-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
} 