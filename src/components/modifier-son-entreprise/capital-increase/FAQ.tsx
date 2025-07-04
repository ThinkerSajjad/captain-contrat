'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const faqs = [
  {
    question: "📌 What is a capital increase?",
    answer: (
      <div className="space-y-4">
        <p>A capital increase is the process by which new contributions are incorporated into the company's share capital, and sometimes new partners. Capital may be increased to increase the company's financial strength or simply to welcome new partners. </p>

<p>This is an operation with strong political implications, because capital, in addition to its financial aspect, provides a measure of voting rights. Hence the complexity of all operations involving share capital, whether it involves increases, reductions, or depreciation.</p>

<p>The capital increase may result either from new contributions, or from the incorporation of reserves, or from the incorporation of current accounts.</p>
      </div>
    )
  },
  {
    question: "What is preferential subscription rights (DPS) and when can they be used in a capital increase? ",
    answer: (
      <div className="space-y-4">
        <p>Preferential subscription rights (PSR) are granted to partners and shareholders in certain companies only. The French Commercial Code establishes the principle of such a right.</p>

 

<p>This DSP consists of a right to subscribe for new shares in priority when a capital increase is decided, to avoid the value of its share being diluted and to maintain its participation rate in the company. In the event of a capital increase in cash, shareholders have a priority right to subscribe to new shares, proportional to the amount of their shares. The preferential right therefore has an egalitarian function.</p>

 

<p>The dogma of preferential subscription rights, however, has exceptions. The law provides for the possibility for the extraordinary general meeting to decide to abolish them.  It does not apply to shares or units issued in return for a contribution in kind and only concerns contributions in cash.</p>

 

<p>Please note: in companies for which the law does not provide for the existence of a DPS, this could result from the articles of association.</p>

 

<p>Finally, like the preferential subscription right, the issue premium fulfills an egalitarian function. It is no longer a question of political equality but rather financial. In fact, the issue premium represents the entry fee for new shareholders; its payment is intended to prevent the expansion of the number of shareholders from diminishing the rights of existing shareholders to the reserves.</p>
      </div>
    )
  },
  {
    question: "Why increase your capital?",
    answer: (
      <div className="space-y-4">
        <p>Share capital constitutes the general guarantee of creditors and banks.</p>

 

<p>In theory, capital is what the creditor can seize as a last resort if the debt is not paid by the company, which underlines its particular importance.</p>

 

<p>However, it is considered that the higher the share capital, the more financially sound the company appears to be . Conversely, creditors and banks may view a company with small capital with less favour.</p>

 

<p>Capital constitutes an element of security for creditors and an essential element of the confidence that third parties can have in the company. </p>
      </div>
    )
  },
  {
    question: "How can the share capital of a company be increased?",
    answer: (
      <div className="space-y-4">
        
        <p>A capital increase can be done by various means.</p>

 

<p>A cash contribution is possible; this is a cash contribution that is accompanied by the granting of a preferential subscription right (DPS) . Indeed, a capital increase can have a dilutive effect on shareholders' rights.</p>

<p>This DPS will have the effect of protecting existing shareholders: it is the right of each existing shareholder to subscribe as a priority to this increase, which guarantees their level of participation in the share capital.</p>

 

<p>The increase can also be the result of contributions in kind , i.e. the contribution of tangible or intangible property. It will then be necessary to evaluate this property with the essential intervention of a contributions auditor.</p>

 

<p>There are other methods such as increasing capital through the incorporation of reserves, retained earnings, or share premiums  : these are legal facilities. Profits that are not distributed but incorporated into capital encourage companies to increase their equity.</p>

 

<p>The increase can also be achieved through private equity or the conversion of bonds into shares (certain bonds are convertible into capital, the holders of the company's debt then become shareholders and no longer creditors). </p>
      </div>
    )
  },
  {
    question: "How can I increase my company's capital?",
    answer: (
      <div className="space-y-4">
        <p>You answer a questionnaire on our website, in line with your legal needs</p>

<p>A lawyer will provide you with a quote that meets your needs </p>

<p>After acceptance of this quote, the lawyer draws up the documents necessary for your capital increase</p>
        
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