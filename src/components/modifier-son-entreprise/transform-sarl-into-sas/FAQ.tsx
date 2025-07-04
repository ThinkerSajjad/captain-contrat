'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const faqs = [
  {
    question: "📌 What is an LLC?",
    answer: (
      <div className="space-y-4">
        <p>A Limited Liability Company (LLC)  is a commercial company in which the partners are not jointly and severally liable for the company's debts.</p>

 

        <p>This means that in the event of debt, the partners are not liable for debts beyond their contribution. These are generally small structures. </p>

        <p>The SARL can also be a single-member company , that is to say, it can be made up of a single partner. It will then be a Single-Member Limited Liability Company (EURL) .   </p>
      </div>
    )
  },
  {
    question: "What is an SAS?",
    answer: (
      <div className="space-y-4">
        <p>A Simplified Public Limited Company (SAS)  is also a commercial company which can be a single-member company and for which the partners are not jointly and severally liable for debts.</p>

 

        <p>It is a company with great statutory freedom , that is to say that employees can freely set in their statutes all the rules of organization and operation of the company (subject to a few requirements). </p>

 

        <p>Please note: the flexibility and freedom in drafting statutes can also turn into difficulties if all cases are not covered, which often happens when the statutes are drafted without the help of a professional . </p>
      </div>
    )
  },
  {
    question: "What are the advantages of the SAS compared to the SARL?",
    answer: (
      <div className="space-y-4">
        <p>While the SARL is subject to compliance with a ceiling concerning the maximum number of partners (amounting to 100 partners), the advantage of the SAS is that there are no particular requirements on this point.  </p>

        <p>
        Due to its statutory flexibility, the rights of partners (political or financial) can be adjusted: possibility of granting voting rights to a particular partner independently of their participation in the capital, or even a right of veto; which is not possible in an SARL.
        </p>

        <p>The SAS can be a form of company adapted to the exercise of a liberal profession (since the establishment of a derived form, which is the SELAS: Simplified Joint Stock Company).   
        </p>

 
        <p>Unlike SARLs, SASs can issue negotiable securities and offer financial securities to the public.
        </p>

 

        <p>The choice of the SAS  may be motivated for reasons of social security regime: while it is necessary to be a minority manager of an SARL to be affiliated with the general social security regime, the fraction of the capital held is not taken into account in the SAS to be subject to it.
        </p>

        <p>Except for certain specific conditions,  the transfer of shares (in an SAS)  is subject to a registration fee payment rate of 1%. For the transfer of company shares (in an SARL) it is 3%.
        </p>
      </div>
    )
  },
  {
    question: "What are the advantages of the SAS?",
    answer: (
      <div className="space-y-4">
        <p>Today, the SAS can be formed by any natural or legal person, without the status of trader being required.
        </p>

        <p>The business creator has the possibility of creating a SASU , that is to say composed of only one partner . In this case, and under certain conditions, the publicity formalities are considerably simplified.  
        </p>

 

        <p>It is possible to create an SAS with a share capital of only €1. 
        </p>

        <p>The appointment of an auditor in small SASs is no longer mandatory.
        </p>
      </div>
    )
  },
  {
    question: "What doesn't change during transformation?",
    answer: (
      <div className="space-y-4">
        <p>Despite the differences between the SARL and the SAS, two things do not change during the transformation.
        </p>

        <p>
        First, liability remains limited. As in an SARL, the partners of an SAS are only liable for the company's losses in proportion to their contributions. The partners' personal assets cannot therefore be seized in the event of a transformation into an SAS.
        </p>

        <p>
        Then, the absence of minimum share capital present in the SARL is also present for the SAS. Indeed, the latter can be founded without a minimum share capital requirement. However, remember that share capital is the guarantee of corporate creditors. The higher the share capital, the more credible you will be in their eyes. Therefore, remember not to have too low a share capital, even if the creation of an SAS is possible with the symbolic sum of 1 euro.
        </p>
      </div>
    )
  },
  {
    question: "What are the effects of the transformation?",
    answer: (
      <div className="space-y-4">
        <p>The main effect of transforming an SARL into an SAS is the replacement of a regulated operation, more regulated by law, with one now freely determined by the articles of association. This freedom is the corollary of a greater risk, but one that is attracting more and more people in France today.
        </p>

        <p>
        Legal effects: This transformation will not lead to the creation of a new company: in fact, the assets,  rights, and obligations of the SARL  will remain intact.  The transformation operation does not create a new company; the old company does not disappear; it is only the same company that continues to exist.
        </p>

        <p>
        From a purely contractual perspective , the transformation operation  will have no impact on current contracts, including the continuation of lease contracts.  The company's creditors remain fully creditors, and this is the same for the SARL's co-contractors (supplier, customer, lessor in the case of a commercial lease, etc.).
        </p>

        <p>
        Tax effects: in the event of a transformation without a change in the tax regime, the situation will remain unchanged.  However, in the event of the  transformation of an SARL subject to income tax into an SAS subject to corporate tax , there will be a change in regime noted by the immediate taxation of the results of the current financial year on the date of transformation as well as the immediate taxation of capital gains in deferred taxation.
        </p>

        <p>
        Social effects: the president of the SAS will be considered an “assimilated employee” and will therefore be affiliated with the general social security system only if he receives remuneration for his mandate as president.
        </p>

        <p>
        The transformation of an SARL into an SAS has no effect on employees, because they keep the same employer and with the same level of seniority.
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