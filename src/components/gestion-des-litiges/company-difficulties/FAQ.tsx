'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const faqs = [
  {
    question: "📌 What solutions are there for a company in difficulty?",
    answer: (
      <div className="space-y-4">
      <p>Depending on the difficulties encountered by the company , several solutions can be considered: conciliation or collective proceedings (safeguarding, recovery and liquidation):</p>

 

<p>Step 1: if there is still sufficient cash to pay creditors, but financial difficulties arise, two procedures can be put in place: conciliation or safeguard .</p>

<p>Step 2: If the company's assets are no longer sufficient to meet its liabilities, the company is said to be in a state of insolvency. Two collective procedures can be initiated:</p>
<p>Judicial recovery to enable the continuation of economic activity, the maintenance of employment and the settlement of liabilities.</p>
<p>In the event of failure or impossibility of safeguarding or judicial recovery, the company may be placed in compulsory liquidation . The management of the company is entrusted to a liquidator. The closure of this procedure puts an end to the activity.</p>
 

<p>Captain Contrat supports companies in difficulty.</p>
      </div>
    )
  },
  {
    question: "Ad hoc mandate and conciliation: the ultimate preventive measures",
    answer: (
      <div className="space-y-4">
        <p>Is your company experiencing financial difficulties ? Don't wait and activate one of these two preventive procedures: conciliation and the ad hoc mandate.</p>

<p>Conciliation (Art. L. 611-1 to L. 611-16 of the French Commercial Code): this amicable procedure allows the company to continue its activity. The manager is not relieved of his duties. The goal of conciliation is to reach an agreement between the company and its creditors for the settlement of debts.</p>
<p>Ad hoc mandate (Art. L. 611-3 of the French Commercial Code): the company can settle its debts in secret (no obligation to inform third parties or employees). The ad hoc agent negotiates the debt settlement schedule with creditors.</p>

<p>Captain Contrat can support you if your business is in difficulty . </p>
      </div>
    )
  },
  {
    question: "What is the state of cessation of payments?",
    answer: (
      <div className="space-y-4">
        <p>When the company has debts that it is no longer able to repay, that is to say that its available assets are no longer sufficient to meet its due liabilities, it is in a state of cessation of payments. </p>

<p>The company has 45 days to file a declaration of cessation of payments, also known as a bankruptcy filing, with the Commercial Court registry. This declaration allows for the initiation of a receivership or liquidation procedure.</p>

<p>Captain Contrat can support you if your business is in difficulty . </p>
      </div>
    )
  },
  {
    question: "What are the signs of a business in trouble?",
    answer: (
      <div className="space-y-4">
        <p>It is essential to be attentive to all the markers that could weaken your operation and to approach them with caution . For example, these markers can result from:</p>
<ul className="list-disc list-inside">
<li>unfavorable circumstances such as social movements or, recently, the Covid-19 epidemic;</li>
<li>the loss of a major customer or key supplier contract;</li>
<li>difficulties experienced by a customer or supplier having a direct impact on the continuity of your business;</li>
<li>of an unforeseen material expense;</li>
<li>or even an accumulation of payment deadlines.</li>
</ul>

<p>The sooner difficulties are identified and analyzed, the faster you will be able to rectify the situation before it reaches a critical point. </p>
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