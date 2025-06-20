'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "📌 What are the advantages of an SAS?",
    answer: (
      <div className="space-y-2">
        <ol className="list-decimal pl-5 space-y-1">
          <li><strong>Contractual freedom</strong>: the partners set the rules of internal organization and governance.</li>
          <li><strong>Share capital</strong>: there is no minimum amount.</li>
          <li><strong>The default tax regime</strong> is corporate tax but with an option for income tax.</li>
          <li><strong>The liability of the partners</strong> is limited to the contributions.</li>
        </ol>
      </div>
    ),
  },
  {
    question: "How long does it take to create an SAS online?",
    answer: (
      <div className="space-y-4">
        <p>The average time to create an SAS online varies between 1 and 4 weeks. This time depends on several factors, including the time required to prepare the required documents.</p>
      </div>
    ),
  },
  {
    question: "How much does it cost to create an SAS online?",
    answer: (
      <div className="space-y-4">
        <p>Certain costs are essential for the creation of your SAS:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Publication costs (legal notices journal)</strong>: approximately €195 to €226 (this amount varies depending on the department);</li>
          <li><strong>Registration in the Trade and Companies Register (including filing of documents)</strong>: €37.45;</li>
          <li><strong>Registration in the National Directory (RNE)</strong>: on average €45 (this amount varies in particular depending on the department);</li>
          <li><strong>Declaration of beneficial owners of the company</strong>: €21.41.</li>
        </ul>
        <p>To start creating your online business, contact our business coaches.</p>
      </div>
    ),
  },
  {
    question: "What documents are required to create an SAS?",
    answer: (
      <div className="space-y-4">
        <p>To create a Simplified Joint Stock Company (SAS), here is the list of essential documents that you must attach to your file:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Proof of deposit of funds from your bank;</li>
          <li>A copy of your certified SAS statutes;</li>
          <li>The list of subscribers, future partners;</li>
          <li>The sworn statement of non-conviction;</li>
          <li>A certificate of domiciliation (rental contract and invoice or ownership);</li>
          <li>The single form: the declaration of incorporation of the company;</li>
          <li>A photocopy of a national identity card or passport of the managers of the SAS;</li>
          <li>The declaration of beneficial owners;</li>
          <li>Proof of address less than 3 months old;</li>
          <li>A check for the commercial court registry.</li>
        </ol>
        <p>Do you have a question about creating your SAS online? Captain Contrat can help you with the formalities for incorporation.</p>
      </div>
    ),
  },
  {
    question: "Can you open an airlock alone?",
    answer: (
      <div className="space-y-4">
        <p>The SASU, or Société par Actions Simplifiée Unipersonnelle, is an SAS composed of a single partner, who may or may not exercise the company as President. Like the SAS, it is a company suitable for all types of activities and advantageous for the great statutory freedom offered to the sole partner.</p>
        <p>The sole shareholder may be any natural or legal person who holds all of the company&apos;s shares.</p>
        <p>Looking to create a simplified joint stock company (SAS)? Captain Contrat will help you through every step.</p>
      </div>
    ),
  },
  {
    question: "What are the disadvantages of the SAS?",
    answer: (
      <div className="space-y-4">
        <p>The 3 disadvantages of the Simplified Joint Stock Company (SAS) are as follows:</p>
        <ol className="list-decimal pl-5 space-y-3">
          <li>
            <strong>Complex drafting of articles of association</strong>: The considerable statutory freedom offered to partners can make drafting articles of association complex. It is necessary to clearly define all the company&apos;s operating rules to avoid differences in interpretation that could lead to conflicts. Moreover, unlike other companies, errors cannot invalidate traditional costs if amendments need to be made later.
          </li>
          <li>
            <strong>High social security contributions</strong>: SAS managers, who are considered employees, are subject to higher social security contributions than self-employed workers. This can represent a significant cost for the company, especially if the president or other managers are paid. However, the advantage is that they benefit from the general social security scheme for their contributions, but this also means that they do not benefit from any social security protection.
          </li>
          <li>
            <strong>Inability to access the stock market</strong>: Unlike public limited companies (SA), SASs cannot be listed on the stock market, which limits financing opportunities through the financial markets.
          </li>
        </ol>
      </div>
    ),
  },
  {
    question: "What budget is required to open an SAS?",
    answer: (
      <div className="space-y-4">
        <p>The budget for creating an SAS can vary considerably depending on several factors, but here are the main costs to consider:</p>
        
        <ol className="list-decimal pl-5 space-y-3">
          <li>
            <strong>Mandatory administrative fees:</strong>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Legal notice fees: from €195 to €226.</li>
              <li>Registration fees: €37.45.</li>
              <li>Declaration of beneficial owners: €21.41.</li>
              <li>Total administrative costs: approximately €290.</li>
            </ul>
          </li>
          <li>
            <strong>Cost of drafting the statutes:</strong>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>If you write it yourself: it may be free, but it is recommended to hire a professional. Rates vary:</li>
              <li>Online: between €250 and €600.</li>
              <li>With a lawyer: between €1,200 and €2,500.</li>
            </ul>
          </li>
          <li>
            <strong>Accounting support:</strong>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>If you choose to be accompanied by an accountant or a lawyer, this can cost between €500 and €2,500 depending on the level of support.</li>
            </ul>
          </li>
          <li>
            <strong>Fees of a contribution auditor:</strong>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>If you make contributions in kind, this can cost between €500 and €3,000, unless you are exempt from this obligation.</li>
            </ul>
          </li>
          <li>
            <strong>Company address:</strong>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>This can vary from €10 to €300 per month, depending on the option chosen (domiciliation at your home, business incubator, domiciliation company, etc.).</li>
            </ul>
          </li>
          <li>
            <strong>Professional bank account:</strong>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Monthly fees can range from €10 to €50.</li>
            </ul>
          </li>
          <li>
            <strong>Professional insurance:</strong>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>The cost depends on the activity carried out and the protections chosen.</li>
            </ul>
          </li>
          <li>
            <strong>The initial investment:</strong>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>This includes initial purchases (equipment, website, advertising, etc.), the amount of which can vary considerably.</li>
            </ul>
          </li>
        </ol>
      </div>
    ),
  },
  {
    question: "How to bring a new partner into the airlock?",
    answer: (
      <div className="space-y-4">
        <p>To bring a new partner into an SAS, two main methods can be considered: capital increase and share transfer.</p>
        
        <ol className="list-decimal pl-5 space-y-3">
          <li>
            <strong>Capital increase</strong>: This operation involves creating new shares to integrate the new partner. The incoming partner makes a contribution in cash or in kind in exchange for these new shares. This contribution increases the company&apos;s share capital and requires a collective decision. The company&apos;s articles of association must be amended to reflect the new share capital. A legal notice must be published in a legal announcements journal and the modification must be registered in the register. The capital increase results in a dilution of the shares of existing partners, as the share capital is distributed among a larger number of shares.
          </li>
          <li>
            <strong>Share transfer</strong>: This involves the sale by one or more existing partners of their shares to a new partner. This transaction does not require a change to share capital. A share transfer contract must be drawn up specifying the date of the parties, the number of shares transferred and the price. This transfer must be registered in the company&apos;s share transfer register. It is advisable to update the register of beneficial owners to reflect the change in the company&apos;s ownership structure. The transfer of shares in an SAS is free, unless the articles of association provide for an approval or pre-emption clause that limit this freedom.
          </li>
        </ol>
      </div>
    ),
  },
  {
    question: "What assistance is available for creating an SAS?",
    answer: (
      <div className="space-y-4">
        <p>You would like to know what assistance is available to create an SAS?</p>
        
        <p>There are several public and private grants available to support the creation of a Simplified Joint Stock Company (SAS). Here are some of the main grants available:</p>
        
        <ol className="list-decimal pl-5 space-y-3">
          <li>
            <strong>ACRE (Aid for Business Creation or Takeover)</strong>:
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>This aid consists of a partial exemption from social security contributions for business creators.</li>
              <li>This benefit is available to entrepreneurs who create or take over a business, including an SAS.</li>
            </ul>
          </li>
          <li>
            <strong>Maintenance of unemployment benefits</strong>:
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Unemployment benefit recipients who create or take over a company can, under certain conditions, continue to receive their income during the first months of business.</li>
            </ul>
          </li>
          <li>
            <strong>French Tech Scholarship</strong>:
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>For innovative digital projects, this grant can provide financial support for projects with high growth potential.</li>
            </ul>
          </li>
          <li>
            <strong>Local initiatives</strong>:
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Many local authorities offer grants to encourage business creation in their area. This assistance may vary depending on the location of the SAS.</li>
            </ul>
          </li>
          <li>
            <strong>Honor loans</strong>:
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Some associations or foundations offer zero-interest loans to help entrepreneurs finance their project. These loans are often granted on the basis of the viability of the project.</li>
            </ul>
          </li>
          <li>
            <strong>Investors and business angels</strong>:
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>If you need additional capital, you can consider approaching private investors or business angels who can provide financing in exchange for a stake in your company.</li>
            </ul>
          </li>
          <li>
            <strong>Regional and sectoral systems</strong>:
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Depending on the region or type of activity, there may be specific assistance, such as tax exemptions or subsidies for young creative businesses.</li>
            </ul>
          </li>
        </ol>
      </div>
    ),
  },
  {
    question: "What is the tax regime for an SAS?",
    answer: (
      <div className="space-y-4">
        <p>The Simplified Joint Stock Company (SAS) is subject to what is called corporate tax (IS):</p>
        
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong>Corporate tax (IS)</strong>:
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>The SAS is automatically subject to corporate tax upon its creation. Profits made by the company are therefore subject to IS (IS rate: the standard rate of which is 25% instead of 33.33% a few years ago, and 15% for small profits up to €42,500 for some certain companies).</li>
            </ul>
          </li>
          <li>
            <strong>Option for income tax (IR)</strong>:
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Under certain conditions, an SAS can opt for IR taxation, but this is generally limited to a period of 5 years from its creation. It must also fulfill other legal criteria (in terms of size, age and number of partners).</li>
              <li>If you opt for IR, the results of the SAS are then taxed at the level of the partners, in proportion to their share in the company.</li>
            </ul>
          </li>
          <li>
            <strong>VAT regime</strong>:
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>The SAS is subject to VAT. The applicable regime depends on the turnover achieved.</li>
              <li>VAT exemption: if the turnover does not exceed certain thresholds (€85,800 for the provision of commercial goods and €34,400 for the provision of services in 2023), the SAS can benefit from the VAT franchise or normal actual regime (forward these thresholds, the SAS must normally apply VAT).</li>
            </ul>
          </li>
        </ul>
        
        <p>The SAS must make an annual declaration of results (before 30th April), depending on the tax regime, it must, or not, apply tax itself.</p>
      </div>
    ),
  },
  {
    question: "What is the social security system for an SAS?",
    answer: (
      <div className="space-y-4">
        <p>The social security system of a Simplified Joint Stock Company (SAS) is characterized by the affiliation of its managers and partners to different social security systems. Here are the key points to remember:</p>
        
        <ul className="list-disc pl-5 space-y-4">
          <li>
            <strong>Affiliation to the general social security system</strong>:
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>The president of an SAS, SASU, is affiliated with the general social security system, which provides him with social protection similar to that of a traditional employee.</li>
              <li>This means that he has access to health insurance, maternity, old age, etc.</li>
              <li>If the president is also a partner and receives dividends, these are not subject to social contributions if he is not affiliated with the general scheme. He can, however, benefit from medical coverage as part of his universal health protection (PUMA).</li>
            </ul>
          </li>
          <li>
            <strong>Social charges</strong>:
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Social security contributions for a paid SAS president represent between 75 and 80% of the net salary.</li>
              <li>Dividends are exempt from social security contributions.</li>
            </ul>
          </li>
          <li>
            <strong>Accumulation of employment contract</strong>:
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>It is possible for a SAS president to combine his corporate mandate with an employment contract, provided that he meets certain conditions, such as having a subordinate relationship to his partner and executive. This allows him to benefit from additional social protection.</li>
            </ul>
          </li>
          <li>
            <strong>Comparison with the SARL manager</strong>:
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Unlike the manager of an SARL, who is a self-employed worker (TNS) and depends on the social security scheme for the self-employed (SSI), the president of an SAS benefits from more comprehensive social protection.</li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What are the differences between an SARL and an SAS?",
    answer: (
      <div className="space-y-4">
        <p>The SARL and the SAS present differences concerning their constitution, their tax and social regime:</p>
        
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong>Number of partners</strong>: A minimum of 2 partners is required for both SARL and SAS (a minimum number of partners for SARL is 100 and unlimited for SAS).
          </li>
          <li>
            <strong>The amount of share capital</strong>:
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>For SARL and SAS, there is no minimum amount to be created.</li>
              <li>On the other hand, the capital values of the shares capital is at least 50% when capitalization of the company and 100% when in-kind capital of the SARL.</li>
            </ul>
          </li>
          <li>
            <strong>The governing bodies</strong>:
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>For the SARL: one or more managers (natural persons).</li>
              <li>For the SAS: there are one or more managers (natural persons).</li>
            </ul>
          </li>
          <li>
            <strong>The social status of the manager</strong>:
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>For the SARL: the manager is affiliated to the general Social Security Scheme.</li>
              <li>For the SARL: the majority managers are affiliated with the Social Security Scheme for the Self-Employed and the minority manager are subject to the general scheme.</li>
            </ul>
          </li>
        </ul>
        
        <p>Still unsure about choosing between an SARL and an SAS? Captain Contrat answers all your questions about starting a business.</p>
      </div>
    ),
  },
  {
    question: "What is the minimum capital to create an SAS?",
    answer: (
      <div className="space-y-4">
        <p>The creation of an SAS does not require a minimum amount of share capital. It can be formed with an amount of 1 euro, which corresponds to the nominal value of a share, including contributions in cash, in kind, and in industry (contribution of know-how to the company).</p>
        
        <p>However, a share capital greater than €1 has many advantages: guaranteeing your credibility with third parties, making it easier to obtain bank loans for your company and facilitating the distribution of shares.</p>
      </div>
    ),
  },
  {
    question: "What are the social security contributions for an SAS?",
    answer: (
      <div className="space-y-4">
        <p>A distinction must be made between social security contributions relating to the manager and those relating to employees.</p>
        
        <p><strong>Social security contributions of the manager</strong>:</p>
        
        <p>The social contributions of a president of a Simplified Joint Stock Company (SAS) is attached to the General Social Security Scheme.</p>
        
        <p>The social contributions of the president of the SAS are:</p>
        
        <ul className="list-disc pl-5 space-y-1">
          <li>health insurance;</li>
          <li>insurance related to work accidents;</li>
          <li>family benefits;</li>
          <li>supplementary retirement insurance;</li>
          <li>unemployment insurance;</li>
          <li>CSG-CRDS.</li>
        </ul>
        
        <p>Please note that the president of the SAS does not benefit from unemployment insurance.</p>
        
        <p><strong>Employee social security contributions</strong>:</p>
        
        <p>Employee social security contributions are similar to those of managers. However, a contribution will be payable for unemployment insurance.</p>
      </div>
    ),
  },
  {
    question: "What is the processing time for the registry?",
    answer: (
      <div className="space-y-4">
        <p>The business creation process is quick. Your articles of association will be available as soon as you have completed your questionnaire. Once your application is complete and approved, your lawyer will initiate all the necessary procedures with the registry to register your company as quickly as possible. You will then receive your Kbis (Registration of Companies) on average 7 days later (varies by department).</p>
      </div>
    ),
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