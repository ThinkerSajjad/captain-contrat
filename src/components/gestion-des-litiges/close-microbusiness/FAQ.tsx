'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const faqs = [
  {
    question: "📌 How to close your micro-business?",
    answer: (
      <div className="space-y-4">
       <p>The administrative procedures for closing down your micro-enterprise follow a specific procedure.</p>

<p>So, there are two solutions to close your micro-business:</p>

<p>By mail  : You will need to download, complete, and then send to your CFE the document relating to the cessation of activity for self-employed workers. This is the P2-P4 form for liberal activities and the P4 form for artisans/tradespeople.</p>

<p>online (recommended)  : depending on the activity you carry out, you must use the dematerialized platform used by your Formalities Center. </p>
      </div>
    )
  },
  {
    question: "What are the formalities to be completed after closing a micro-business?",
    answer: (
      <div className="space-y-4">
        <p>Firstly, you must declare your last turnover and pay your social security contributions according to the usual rules.</p>

<p>Once these payments have been made, you are no longer liable for social security contributions.</p>

<p>Then you will need to file an income tax return (IR) and pay it.</p>

<p>Within 60 days of closing your self-employed business, you must therefore send an additional declaration no. 2042-C-PRO to the tax department on which you depend.</p>

<p>You must indicate the amount of turnover generated between January 1st and the date your business is permanently closed. Remember to also include all amounts invoiced during this period, even if they have not yet been collected when you close your micro-business.</p>

<p>This amount will then be taken into account to calculate the average tax rate to be applied to other household resources. You will then be taxed according to the progressive income tax scale, under the usual conditions of withholding tax.</p>
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