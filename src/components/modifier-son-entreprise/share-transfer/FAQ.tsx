'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const faqs = [
  {
    question: "📌 What is share transfer? ",
    answer: (
      <div className="space-y-4">
        <p>A share transfer is a transaction in which one or more shareholders sell all or part of their shares to one or more new shareholders. The new shareholders then become part of the company's shareholders.</p>

<p>The share transfer contract is a document that must be signed by the company's shareholders and the new shareholders. It is a legal document that must be filed with the company's registry.</p>

 

<p>The share transfer contract is a document that must be signed by the company's shareholders and the new shareholders. It is a legal document that must be filed with the company's registry.</p>

 

<p>The share transfer contract is a document that must be signed by the company's shareholders and the new shareholders. It is a legal document that must be filed with the company's registry.</p>
      </div>
    )
  },
  {
    question: "Is share transfer mandatory? ",
    answer: (
      <div className="space-y-4">
        <p>Share transfer is indeed a mandatory procedure for all companies, whether they are those with shares (SARL, EURL) or those with shares (SASU, SAS).</p>

 

<p>Indeed, other means of protecting their disclosure (whether in the field of intellectual property or in that of professional ethics) remain far from perfect and much less effective than the confidentiality contract .</p>
      </div>
    )
  },
  {
    question: "Is the share transfer procedure the same for all companies? ",
    answer: (
      <div className="space-y-4">
        <p>When it comes to the share transfer procedure , the major difference is between SAS and SARL. </p>

 

<p>In the case of SAS , it is the statutes that set the conditions for transferring the shares . They specify the terms of consultation (by correspondence, general meeting, etc.) and the majority and quorum conditions for adopting resolutions for transferring the shares. If the statutes do not specify this, the resolutions are adopted by a simple majority.  </p>

 

<p>In the context of SARLs, no quorum is required at the first meeting: the partners present can therefore approve or disapprove the shares (by absolute majority, i.e. 50% of voters).  </p>

 

<p>If this majority is not reached, the decision must be taken by a relative majority. However, different statutes may also provide for different voting arrangements (for example, the need for a majority of those entitled to vote for all decisions, including the decision to transfer the shares).    </p>
      </div>
    )
  },
  {
    question: "When should the shareholders be called to the meeting and who should do so?",
    answer: (
      <div className="space-y-4">
        
<p>Generally, the shareholders must be summoned , by registered letter, 15 days before the meeting is held. </p>

<p>However, depending on the statutes, this period may be longer. It is up to the company manager to convene the shareholders.</p>
      </div>
    )
  },
  {
    question: "What is the deadline for transferring your shares? ",
    answer: (
      <div className="space-y-4">
        <p> At the time of the financial year-end, the company has a maximum of 6 months to transfer its shares. The articles of association most often provide for an accounting year with an opening date of January 1st and a closing date of December 31st. Therefore, at the end of each fiscal year, it is strongly recommended to respect this legal deadline of 6 months.</p>

<p>If the General Meeting is unable to meet within the allotted time, it is possible to obtain an extension by submitting a request to the President of the Commercial Court. It is advisable to make this request for an extension before the expiration of the 6-month period.</p>
        
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