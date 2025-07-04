'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const faqs = [
  {
    question: "📌 What is account approval? ",
    answer: (
      <div className="space-y-4">
        <p>Every company must carry out an approval of accounts . In other words, the managers must submit the company's accounts for approval by the partners (in companies where the capital is made up of shares) or the shareholders (in joint-stock companies).     

 

<p></p>What annual accounts are we talking about? They are:</p>

<p>The balance sheet (assets and liabilities of the company which shows the financial situation of a company);</p>

<p>The income statement (the company's income and expenses);</p>

<p>The annexes (documents allowing a better understanding of the two previous ones).</p>

 

<p>An ordinary general meeting  must therefore be held within six months of the end of the financial year. This meeting must then approve or disapprove the accounts.  </p>

 

<p>Generally, the activity of companies ends on December 31 and the approval of the accounts must therefore be carried out no later than June 30 of the following year.</p>

 

<p>That said, let us add that it is possible to submit a justified request to the president of the commercial court, in order to waive the 6-month deadline, even if the meeting has already been convened (as long as it has not been held). If the accounts have been approved , they must be filed with the registry of the commercial court.   </p>
      </div>
    )
  },
  {
    question: "Is approval of accounts mandatory? ",
    answer: (
      <div className="space-y-4">
        <p>Approval of accounts is indeed a mandatory procedure for all companies, whether they are those with shares (SARL, EURL) or those with shares (SASU, SAS).</p>

 

<p>Indeed, other means of protecting their disclosure (whether in the field of intellectual property or in that of professional ethics) remain far from perfect and much less effective than the confidentiality contract .</p>
      </div>
    )
  },
  {
    question: "Is the account approval procedure the same for all companies? ",
    answer: (
      <div className="space-y-4">
        <p>When it comes to the account approval procedure , the major difference is between SAS and SARL. </p>

 

<p>In the case of SAS , it is the statutes that set the conditions for approving the accounts . They specify the terms of consultation (by correspondence, general meeting, etc.) and the majority and quorum conditions for adopting resolutions for approving the accounts. If the statutes do not specify this, the resolutions are adopted by a simple majority.  </p>

 

<p>In the context of SARLs, no quorum is required at the first meeting: the partners present can therefore approve or disapprove the accounts (by absolute majority, i.e. 50% of voters).  </p>

 

<p>If this majority is not reached, the decision must be taken by a relative majority. However, different statutes may also provide for different voting arrangements (for example, the need for a majority of those entitled to vote for all decisions, including the decision to approve the company's accounts).    </p>
      </div>
    )
  },
  {
    question: "When should the partners be called to the meeting and who should do so?",
    answer: (
      <div className="space-y-4">
        
<p>Generally, the partners must be summoned , by registered letter, 15 days before the meeting is held. </p>

<p>However, depending on the statutes, this period may be longer. It is up to the company manager to convene the partners.</p>
      </div>
    )
  },
  {
    question: "What is the deadline for approving your accounts? ",
    answer: (
      <div className="space-y-4">
        <p> At the time of the financial year-end, the company has a maximum of 6 months to approve its annual accounts. The articles of association most often provide for an accounting year with an opening date of January 1st and a closing date of December 31st. Therefore, at the end of each fiscal year, it is strongly recommended to respect this legal deadline of 6 months.</p>

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