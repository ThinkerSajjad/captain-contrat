'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const faqs = [
  {
    question: "📌 What is a payment order?",
    answer: (
      <div className="space-y-4">
       <p>A payment order is a legal document issued by a judge that obliges the debtor to pay a sum of money to the creditor. It is a means of enforcing a judgment or an agreement.</p>

 

<p>It is a means of enforcing a judgment or an agreement.</p>

 

<p>It is a means of enforcing a judgment or an agreement.</p>
      </div>
    )
  },
  {
    question: "What is the point of a payment order?",
    answer: (
      <div className="space-y-4">
        <p>The payment order is the last step before possible legal action. It is an amicable recovery procedure that generally occurs after several reminders.</p>

 

<p>It allows you to recover a debt or demand the fulfillment of a contractual obligation. It is a legal document that can be used to recover a debt or demand the fulfillment of a contractual obligation.</p>

 

<p>It is a means of enforcing a judgment or an agreement.</p>

 

<p>It is a means of enforcing a judgment or an agreement.</p>
      </div>
    )
  },
  {
    question: "What are the advantages of a payment order?",
    answer: (
      <div className="space-y-4">
        <p>It is a means of enforcing a judgment or an agreement.</p>

 

<p>It is a means of enforcing a judgment or an agreement.</p>

 

<p>It is a means of enforcing a judgment or an agreement.</p>

 

<p>It is a means of enforcing a judgment or an agreement.</p>

 

<p>It is a means of enforcing a judgment or an agreement.</p>

<p>It is a means of enforcing a judgment or an agreement.</p>
      </div>
    )
  },
  {
    question: "Is the payment order a legal procedure?",
    answer: (
      <div className="space-y-4">
        <p>The payment order is not a legal procedure, and cannot itself serve as a sanction. However, it may be the preliminary step to the opening of legal proceedings, if it remains without effect for the creditor.</p>

<p>It is a means of enforcing a judgment or an agreement.</p>

 

 

<p>It is a means of enforcing a judgment or an agreement.</p>

<p>It is a means of enforcing a judgment or an agreement.</p>

 

 

<p>It is a means of enforcing a judgment or an agreement.</p>

<p>It is a means of enforcing a judgment or an agreement.</p>

      </div>
    )
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