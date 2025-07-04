'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const faqs = [
  {
    question: "📌 What is the corporate purpose of a company?",
    answer: (
      <div className="space-y-4">
        <p>The Civil Code states that "  every company must have a lawful object and be constituted in the common interest of the partners  ." Therefore, without defining the notion of corporate purpose , a praetorian (jurisprudential) definition has been established: this notion refers to the activity or activities determined in the statutes, which the partners propose to have carried out by the company. </p>

        <p>The corporate purpose is therefore an autonomous concept which varies depending on the company.
        </p>

 

        <p>In some cases, it may happen that the activity actually pursued by the company (real activity) does not correspond to the statutory corporate purpose . In the event of a discrepancy between the statutory corporate purpose and the real corporate purpose, the third party may rely on the real corporate purpose. </p>

 
        <p>
        This concept is of particular importance because it is a condition of validity of the company : in fact, its disappearance entails dissolution of the company, in other words, in the event of realization or extinction of the corporate purpose, this leads to the end of the life of the company.  
        </p>

 
        <p>
        It is therefore necessary for the survival of society. 
        </p>
      </div>
    )
  },
  {
    question: "Why change the company's corporate purpose?",
    answer: (
      <div className="space-y-4">
        <p>A company can extend or modify its corporate purpose , in particular when it wishes to develop an activity which was not provided for in its statutes ( expansion of the corporate purpose due to the economic growth of a company, for example ). </p>

        <p>
        In general, this change of corporate purpose takes place in the event of a change of branch of activity, a change of profession within the same sector of activity or the addition of an additional activity or refocusing around an activity.  
        </p>

        <p>
        In other cases, a change of corporate purpose may be necessary when the company wishes to obtain approval to be able to access certain customers.
        </p>

        <p>
        Sometimes, too, we want to restrict the corporate purpose: in fact, one of the functions of the corporate purpose is to delimit the powers of the managers because the latter can only act within the framework and within the limits imposed by this corporate purpose, but the broader the corporate purpose, the more room for maneuver they will have. Thus, by restricting it, the company can then limit the manager's action.
        </p>
      </div>
    )
  },
  {
    question: "Who makes this decision to change?",
    answer: (
      <div className="space-y-4">
        <p>Such a decision can only be taken by the body of partners who alone have jurisdiction.
        </p>

        <p>
        The Extraordinary General Meeting (EGM)  is therefore competent to decide on this modification, since the statutes will be modified.
        </p>

        <p>
        If it is an  EURL or a SASU,  the sole partner has this authority.
        </p>

        <p>
        If it is an SAS , other bodies may be competent depending on the statutory provisions, such as the president, a Board of Directors or any other body designated in the statutes. 
        </p>
      </div>
    )
  },
  {
    question: "Is the amendment procedure the same for all companies?",
    answer: (
      <div className="space-y-4">
        <p>The procedure to follow in the event of a change of corporate purpose is mainly the same for all companies, the steps to follow are as follows:</p>

        <p>
        Convening and holding a meeting to decide on such a change (other bodies may intervene for SASs and it is the only partner of an EURL or SASU who can take this decision); 
        </p>

        <p>
        Drafting of minutes of the meeting (must indicate the body competent for the decision, the date of the change and the new corporate purpose); 
        </p>

        <p>
        Amendment of the statutes accordingly;
        </p>

        <p>
        Publication of a notice of amendment to the articles of association in a legal notices journal located in the department of the company's registered office, within one month of the decision (this notice must contain the legal form of the company, the company name, acronym, share capital, address of the registered office and registration number with the RCS);
        </p>

        <p>
        Submission of the administrative file either to the Business Formalities Center (CFE) or directly to the registry of the commercial court on which the company depends. This filing must be made within one month following the publication of the amendment to the articles of association in the legal notices journal. 
        </p>
      </div>
    )
  },
  {
    question: "What are the consequences of a change of corporate purpose?",
    answer: (
      <div className="space-y-4">
        <p>The consequences of a change of corporate purpose are as follows:
        </p>

        <p>
        The company's corporate purpose is modified.
        </p>

        <p>
        The new corporate purpose is then added to the company's statutes. 
        </p>

        <p>
        The company's corporate purpose is modified. The new corporate purpose is then added to the company's statutes. 
        </p>

        
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