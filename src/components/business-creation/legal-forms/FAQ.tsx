'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "📌 What legal status should I choose if I am starting out alone or with others?",
    answer: (
      <div className="space-y-4">
        <p>The EURL is a special case of the SARL with a single partner and the SASU is a special case of the SAS with a single partner.</p>
        
        <p>If you are going it alone, it is better to choose a SASU, EURL or sole proprietorship.</p>
        
        <p>If you are associated with other people, it is better to choose the SAS or the SARL.</p>
        
        <p>The legal status of the SA (Société Anonyme) concerns very large activities that are to be listed on the stock exchange.</p>
      </div>
    ),
  },
  {
    question: "Which legal status offers the most organizational freedom?",
    answer: (
      <div className="space-y-4">
        <p>The SAS and SASU offer the most organizational freedom. The articles of association can be freely drafted, with very few mandatory provisions.</p>
        
        <p>In contrast, the SARL and EURL have more rigid operating rules defined by law, with less flexibility for customization.</p>
      </div>
    ),
  },
  {
    question: "Which legal status is the easiest to create and manage on a daily basis?",
    answer: (
      <div className="space-y-4">
        <p>The sole proprietorship (micro-enterprise) is the easiest legal form to create and manage on a daily basis. The formalities are simplified, accounting obligations are reduced, and there is no need to draft articles of association.</p>
        
        <p>Among companies, the SAS/SASU and SARL/EURL have similar creation processes, but the SARL/EURL may have slightly simpler day-to-day management due to fewer formal requirements for certain decisions.</p>
      </div>
    ),
  },
  {
    question: "Which legal status costs the least?",
    answer: (
      <div className="space-y-4">
        <p>The sole proprietorship (micro-enterprise) is the least expensive legal form to create, with minimal registration fees and no minimum capital requirement.</p>
        
        <p>For companies, the SARL/EURL and SAS/SASU have similar creation costs, but there is no longer a minimum capital requirement for either (€1 is sufficient). However, the SAS/SASU may incur higher operating costs due to potential requirements for a statutory auditor in certain situations.</p>
      </div>
    ),
  },
  {
    question: "What is the difference between these differences in contributions in terms of social protection, retirement, etc.?",
    answer: (
      <div className="space-y-4">
        <p>The social protection system varies significantly between legal forms:</p>
        
        <ul className="list-disc pl-5 space-y-2">
          <li>In a sole proprietorship, the entrepreneur is covered by the social security scheme for self-employed workers (SSI).</li>
          <li>In an SARL/EURL, the manager is also covered by the SSI if they are a majority manager.</li>
          <li>In an SAS/SASU, the president is considered an employee for social security purposes and benefits from the general social security scheme, which typically offers better coverage but with higher contributions.</li>
        </ul>
        
        <p>These differences affect health insurance, retirement benefits, unemployment rights, and the calculation of social security contributions.</p>
      </div>
    ),
  },
  {
    question: "What status allows me to become a partner?",
    answer: (
      <div className="space-y-4">
        <p>You can become a partner in various company forms:</p>
        
        <ul className="list-disc pl-5 space-y-2">
          <li>In an SAS (Simplified Joint Stock Company), you become a shareholder by acquiring shares.</li>
          <li>In an SARL (Limited Liability Company), you become a partner by acquiring social parts.</li>
          <li>In an SNC (General Partnership), you become a partner with unlimited liability.</li>
          <li>In an SC (Civil Company), you become a partner according to the terms defined in the articles of association.</li>
        </ul>
        
        <p>The sole proprietorship does not allow for partners as it is by definition an individual business structure.</p>
      </div>
    ),
  },
  {
    question: "How to transform a SASU into an SAS?",
    answer: (
      <div className="space-y-4">
        <p>Transforming a SASU into an SAS involves bringing in at least one new shareholder. The process requires:</p>
        
        <ol className="list-decimal pl-5 space-y-2">
          <li>Modifying the articles of association to accommodate multiple shareholders</li>
          <li>Holding an extraordinary general meeting to approve the transformation</li>
          <li>Filing the updated articles of association with the clerk of the commercial court</li>
          <li>Publishing a notice of transformation in a legal announcement journal</li>
          <li>Updating the company's registration with the Trade and Companies Register (RCS)</li>
        </ol>
        
        <p>This transformation does not create a new legal entity, and the company maintains its registration number.</p>
      </div>
    ),
  },
  {
    question: "How to transform an SARL into an SAS?",
    answer: (
      <div className="space-y-4">
        <p>Transforming an SARL into an SAS requires:</p>
        
        <ol className="list-decimal pl-5 space-y-2">
          <li>Preparing new articles of association compliant with SAS regulations</li>
          <li>Obtaining unanimous approval from all partners (unless specified otherwise in the articles)</li>
          <li>Holding an extraordinary general meeting to approve the transformation</li>
          <li>Appointing a president (and other officers if needed)</li>
          <li>Filing the transformation documents with the clerk of the commercial court</li>
          <li>Publishing a notice of transformation in a legal announcement journal</li>
          <li>Updating the company's registration with the Trade and Companies Register (RCS)</li>
        </ol>
        
        <p>The transformation may have tax implications that should be carefully considered.</p>
      </div>
    ),
  },
  {
    question: "What is limited liability?",
    answer: (
      <div className="space-y-4">
        <p>Limited liability is a legal concept that separates the personal assets of business owners from the company's assets. In business structures with limited liability (SARL, EURL, SAS, SASU, SA), the financial responsibility of shareholders or partners is limited to the amount of their contributions to the company.</p>
        
        <p>This means that if the company faces financial difficulties or bankruptcy, creditors cannot generally pursue the personal assets of the shareholders or partners to recover debts. The shareholders' personal property (home, personal bank accounts, etc.) is protected.</p>
        
        <p>In contrast, sole proprietorships and general partnerships (SNC) do not offer this protection, and the business owner's personal assets can be seized to pay business debts.</p>
      </div>
    ),
  },
  {
    question: "I have two very distinct activities, is there any point in creating two separate companies?",
    answer: (
      <div className="space-y-4">
        <p>Having two separate companies for distinct activities can be advantageous in several situations:</p>
        
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Risk isolation:</strong> Keeping activities separate prevents problems in one business from affecting the other.</li>
          <li><strong>Different tax regimes:</strong> If the activities benefit from different tax treatments, separation may be fiscally advantageous.</li>
          <li><strong>Clarity for clients and partners:</strong> Distinct brands and structures can be clearer for marketing and business relationships.</li>
          <li><strong>Specific regulations:</strong> If one activity is subject to special regulations or professional insurance requirements.</li>
          <li><strong>Future sale prospects:</strong> Separate companies are easier to sell individually.</li>
        </ul>
        
        <p>However, managing two companies means duplicate administrative work, accounting, and potentially higher overall costs. A single company with multiple business activities is also possible and may be simpler administratively.</p>
      </div>
    ),
  }
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