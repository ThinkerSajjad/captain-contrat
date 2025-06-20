'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "📌 How to combine unemployment and micro-enterprise?",
    answer: (
      <div className="space-y-2">
        <p>A micro-entrepreneur who starts their own business can continue to receive unemployment benefits. If the micro-business does not generate any income, the entrepreneur continues to receive their unemployment benefits in full. If the business generates income, the entrepreneur's unemployment salary can no longer receive the unemployment benefit to help you return to work.</p>
      </div>
    ),
  },
  {
    question: "What is the difference between a micro-enterprise and a self-employed person?",
    answer: (
      <div className="space-y-2">
        <p>There is no longer any legal difference since 2016, the auto-entrepreneur status has been integrated into the micro-enterprise regime. The two terms are often used interchangeably, although "micro-enterprise" is the official term.</p>
      </div>
    ),
  },
  {
    question: "What are the conditions for opening a micro-business?",
    answer: (
      <div className="space-y-4">
        <p>To open a micro-business, you must meet the following conditions:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>No conditions relating to the business manager :</strong>
            <p>You must be of legal age or an emancipated minor. You must be a French citizen, a citizen of the European Economic Area (EEA) or have basic employment authorization allowing the exercise of a self-employed activity. You can register either in the Trade and Companies Register (RCS) for a commercial activity or with the Trades and Crafts Register (RM).</p>
          </li>
          <li>
            <strong>Eligible activities :</strong>
            <p>Most craft and commercial activities and certain liberal professions can be run this way. Agricultural activities, regulated liberal professions and those related to real estate such as real estate agents are excluded.</p>
          </li>
          <li>
            <strong>regulated activities :</strong>
            <p>If your activity is subject to regulation (such as taxi cab or liberal professions), you must provide proof of the necessary diplomas, certifications or authorizations. Furthermore, you must have a professional address, which can be your home (subject to certain conditions) or a dedicated premise.</p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Who can open a micro-business?",
    answer: (
      <div className="space-y-4">
        <p>You must be an adult or an emancipated minor. Unaccompanied minors can also create a micro-enterprise, but only for non-commercial activities, and under certain conditions.</p>
        
        <p>Regarding residency, it is necessary to reside in France. For foreigners outside the European Union, legal residence permit authorizing the exercise of a self-employed activity is required.</p>
        
        <p>The creation of a micro-enterprise is accessible to various professional statuses: retirees, employees, students, job seekers or civil servants, provided that they respect any status-specific restrictions.</p>
        
        <p>Regarding activities, the business can carry out commercial activities and certain liberal professions (architects, agricultural activities covered by the MSA and certain professionals, such as lawyers or doctors, are not eligible). Finally, services can be legally provided from a residence or business.</p>
      </div>
    ),
  },
  {
    question: "Can you have two micro-businesses?",
    answer: (
      <div className="space-y-4">
        <p>No, it is not possible to own two micro-enterprises. However, you can carry out several activities under a single micro-entrepreneur status, dividing them as main and secondary activities. This allows you to group all of your activities under the same tax and social security regime, because the micro-entrepreneur status is attached to the person and not to the activity. However, the activities must be complementary. Please note: the total turnover grouping together all your activities, must not exceed the regulatory ceilings of 188,700€ for commercial activities and 77,700€ for the provision of services or liberal.</p>
        
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>What is the register for several enterprises?</strong>
            <p>Your activities would simply appear for each enterprise.</p>
          </li>
          <li>
            <strong>Can you hire under the status?</strong>
            <p>No, you can't hire employees from being enterprises. However, this status is not necessarily suitable for growing micro-enterprises do not allow for deduction of expenses from taxable income. It may therefore be preferable to opt for creating a company if the business grows.</p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What documents are required to create a micro-business?",
    answer: (
      <div className="space-y-4">
        <p>To create a micro-enterprise on the one-stop shop website, you must provide a certain number of documents:</p>
        
        <ul className="list-disc pl-5 space-y-1">
          <li>copy of identity documents;</li>
          <li>proof of address;</li>
          <li>declaration of non-conviction;</li>
          <li>if applicable, diplomas;</li>
          <li>if the activity is regulated (construction trades, butcher, hairdresser etc.): a copy of the diploma or the document justifying professional experience.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can you create a micro-business while being an employee?",
    answer: (
      <div className="space-y-2">
        <p>In principle, an employee has the right to create a micro-enterprise and pursue another activity. However, certain clauses in the employment contract, such as the non-compete clause and the exclusivity clause, may limit this possibility.</p>
      </div>
    ),
  },
  {
    question: "What assistance is available for setting up a micro-business?",
    answer: (
      <div className="space-y-4">
        <p>There are several possible forms of assistance for a micro-entrepreneur:</p>
        
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>ACRE:</strong>
            <p>This will allows you to benefit from a partial exemption from social security contributions for the first year. To benefit from this aid, you must meet certain conditions: the application for ACRE must be made at the time of business creation.</p>
          </li>
          <li>
            <strong>ARCE:</strong>
            <p>This aid allows 60% of the remaining ARE rights to be converted into capital.</p>
          </li>
          <li>
            <strong>Activity bonus:</strong>
            <p>If the micro-enterprise's income is low, this aid offered by the CAF can be an activity bonus.</p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can we create several micro-businesses?",
    answer: (
      <div className="space-y-2">
        <p>No, a person cannot create multiple micro-enterprises. However, it is possible to carry out multiple activities within a single micro-enterprise. In this case, the turnover ceiling is the same for the main activity.</p>
      </div>
    ),
  },
  {
    question: "Can you create a micro-business with 2 people?",
    answer: (
      <div className="space-y-2">
        <p>No, a micro-enterprise is an individual business, so by definition it is therefore not possible to create a micro-enterprise with two people. If you wish to form a partnership, you can opt for a real company (EURL or a commercial company (SAS or SARL)).</p>
      </div>
    ),
  },
  {
    question: "Can you combine retirement and a micro-business?",
    answer: (
      <div className="space-y-2">
        <p>Yes, it is entirely possible to combine your pension with income generated by a micro-business. Depending on your personal situation, the accumulation may or may not be capped.</p>
      </div>
    ),
  },
  {
    question: "Micro-enterprise or SARL: how to choose?",
    answer: (
      <div className="space-y-4">
        <p>Here are several questions to ask yourself when choosing between a micro-enterprise and a SARL:</p>
        
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Business development:</strong>
            <p>what is your projected turnover? Micro-enterprises are subject to turnover ceilings, and if you anticipate reaching levels of 176,000 euros (for retail), a company may be more suitable.</p>
          </li>
          <li>
            <strong>Organizational considerations:</strong>
            <p>Do you need to handle complex administrative procedures? Micro-enterprises have simplified accounting and tax obligations, while companies must keep accounts, publish articles of association, publish a legal notice, etc. to correctly starting a micro-enterprise is simpler.</p>
          </li>
          <li>
            <strong>Taxation:</strong>
            <p>SARLs are subject to corporate tax, with the option to opt for income tax. Micro-enterprises are taxed on turnover with a flat rate deduction.</p>
          </li>
          <li>
            <strong>Compensation and social status:</strong>
            <p>How do you want to be paid? In a SARL (limited liability company), the manager receives compensation, which is subject to social security contributions. In a micro-enterprise, the business owner simply withdraws funds from the company's account.</p>
          </li>
          <li>
            <strong>Business development:</strong>
            <p>Do you have long-term development plans? A SARL allows if your stock company grows to make it easier to bring on partners and raise funds than a micro-enterprise.</p>
          </li>
          <li>
            <strong>Asset protection:</strong>
            <p>A SARL offers better protection of the company's assets, while the micro-enterprise has reduced accounting obligations.</p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How to stop a micro-business?",
    answer: (
      <div className="space-y-2">
        <p>To close your micro-business, you must do it on the one-stop shop website. The declaration of cessation of activity must be made within 30 days. This formality is free.</p>
      </div>
    ),
  },
];

export function FAQ() {
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