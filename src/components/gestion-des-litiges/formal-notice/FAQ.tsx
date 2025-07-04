'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "📌 What is a formal notice letter?",
    answer: (
      <div className="space-y-4">
        <p>A formal notice is a formal document requesting the recipient to fulfill their obligation. Most often, in the event of non-payment, it allows for the recovery of an invoice. </p>

        <p>Beyond a failure to pay, the formal notice may also note a failure to deliver a service or product within the dates or conditions stipulated in the contract in order to demand the fulfillment of the co-contractor's commitments. </p>

        <p>The formal notice represents the final step before possible legal action; it is an amicable recovery procedure. It generally occurs after several reminders.</p>

        <p>Would you like to obtain a personalized formal notice letter? Get help from a legal professional .</p>
      </div>
    ),
  },
  {
    question: "What is the point of a formal notice?",
    answer: (
      <div className="space-y-4">
        <p>The formal notice is the last step before possible legal action. It is an amicable recovery procedure that generally occurs after several reminders.</p>

        <p>It allows you to recover a debt or demand the fulfillment of a contractual obligation. It is a legal document that can be used to recover a debt or demand the fulfillment of a contractual obligation.</p>

        <p>Would you like to obtain a personalized formal notice letter? Get help from a legal professional .</p>
      </div>
    ),
  },
  {
    question: "What are the advantages of formal notice?",
    answer: (
      <div className="space-y-4">
        
        <p>The formal notice is not a legal procedure , and cannot itself serve as a sanction. </p>

        <p>However, it may be the preliminary step to the opening of legal proceedings, if it remains without effect for the creditor.</p>

        <p>It can also be used as evidence in the event of legal proceedings. In particular, it can constitute the starting date of certain deadlines.</p>
      </div>
    ),
  },
  {
    question: "Is the formal notice a legal procedure?",
    answer: (
      <div className="space-y-4">
        <p>The formal notice is not a legal procedure, and cannot itself serve as a sanction. However, it may be the preliminary step to the opening of legal proceedings, if it remains without effect for the creditor.</p>

        <p>It can also be used as evidence in the event of legal proceedings. In particular, it can constitute the starting date of certain deadlines.</p>
      </div>
    ),
  },
  {
    question: "My formal notice letter remains ineffective, what should I do?",
    answer: (
      <div className="space-y-4">
        <p>If your formal notice letter remains ineffective, you can take the following steps:</p>

        <p>Contact the debtor again to remind him of his obligation.</p>

        <p>If the debtor still does not comply, you can take legal action.</p>
      </div>
    ),
  },
  {
    question: "How to write a formal notice letter?",
    answer: (
      <div className="space-y-4">
        <p>The formal notice letter must be written in a clear and concise manner. It must include the following information:</p>

        <p>The name and address of the debtor.</p>

        <p>The nature of the debt or obligation.</p>

        <p>The deadline for payment or fulfillment of the obligation.</p>

        <p>The consequences of non-compliance.</p>

        <p>The debtor's signature and date.</p>
      </div>
    ),
  },
  {
    question: "What are the mandatory details to include in the formal notice letter?",
    answer: (
      <div className="space-y-4">
        <p>The formal notice letter must include the following mandatory details:</p>

        <p>The name and address of the debtor.</p>

        <p>The nature of the debt or obligation.</p>

        <p>The deadline for payment or fulfillment of the obligation.</p>

      </div>
    ),
  },
];

export function FAQ() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="lg:text-5xl text-4xl font-bold text-center text-[#1a365d] mb-12">
          Discover frequently asked questions<br />
          from other entrepreneurs
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