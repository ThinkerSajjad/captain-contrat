'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "📌 What is a shareholders' agreement?",
    answer: (
      <div className="space-y-4">
        <p>The shareholders' agreement (or <strong>shareholders' agreement</strong> in the case of a joint-stock company) is an extrastatutory legal document. It will specify the partners' respective rights and conduct of business, as well as the composition of the share capital. This document complements the articles of association. The signatories determine the duration of the shareholders' agreement.</p>
        
        <p>The shareholders' agreement is a <strong>contract</strong>. It therefore complies with the legal rules governing contractual relationships. Its scope is limited to the signatories. It is not enforceable against third parties.</p>
        
        <p>Failure to comply with a <strong>shareholders' agreement</strong> may result in the payment of damages by the person who has not respected their commitments.</p>
        
        <p>The <strong>termination of the shareholders' agreement</strong> may occur on the date agreed by the signatories or upon the occurrence of an event foreseen by the shareholders.</p>
        
        <p>Captain Contrat supports you in drafting your <a href="#" className="text-blue-600 hover:underline">partnership agreement</a>.</p>
      </div>
    ),
  },
  {
    question: "Why draw up a shareholders' agreement?",
    answer: (
      <div className="space-y-4">
        <p>The shareholders' agreement is an extra-statutory document that supplements the articles of association. It is optional. Drafting a shareholders' agreement has several advantages:</p>
        
        <ul className="list-disc pl-5 space-y-3">
          <li>
            The shareholders' agreement is <strong>confidential</strong>. Conversely, the articles of association are public and known to all. The information mentioned therein is known only to the signatory shareholders.
          </li>
          <li>
            A shareholders' agreement allows <strong>clauses to be introduced</strong> that could not be contained <strong>in the articles of association</strong>, or simply to benefit from the advantages specific to the agreement: limited duration of commitments made, defined number of shareholders involved, confidentiality, possibility of revision without going through the AGM, establishment of specific obligations, etc.
          </li>
          <li>
            The shareholders' agreement is of capital importance in facilitating and clarifying relationship between shareholders, and thereby avoiding and anticipating possible future conflicts.
          </li>
        </ul>
        
        <p>Captain Contrat supports you in drafting a <a href="#" className="text-blue-600 hover:underline">shareholders' agreement</a>.</p>
      </div>
    ),
  },
  {
    question: "Who can make a partnership agreement?",
    answer: (
      <div className="space-y-4">
        <p>The partners of a company can enter into a partnership agreement.</p>
        
        <p>It may be signed by a majority or part of the partners. It will be binding only on the signatories.</p>
        
        <p>Benefit from Captain Contrat's support in drafting your <a href="#" className="text-blue-600 hover:underline">shareholders' agreement</a>.</p>
      </div>
    ),
  },
  {
    question: "When should you draw up a shareholders' agreement?",
    answer: (
      <div className="space-y-4">
        <p>A shareholders' agreement can be entered into at any time. However, it is best to negotiate it when the company is founded, when relationships between partners are at their best. This will help avoid any potential stalemate later on.</p>
        
        <p>It is possible to draw up a shareholders' agreement when a new shareholder joins the capital. If the new shareholder refuses to sign it, they will be considered a third party. The agreement will be unenforceable against them.</p>
      </div>
    ),
  },
  {
    question: "What form of company requires the drafting of a shareholders' agreement?",
    answer: (
      <div className="space-y-4">
        <p>The shareholders' agreement is not limited to any one type of company or size. Deadlocks exist in any type of company, regardless of its nature, and arise in everyday conflicts that do not necessarily represent significant expenditures.</p>
        
        <p>To negotiate and draft a shareholders' agreement adapted to your legal situation, benefit from the support of experts in corporate law.</p>
      </div>
    ),
  },
  {
    question: "What are the clauses of a shareholders' agreement?",
    answer: (
      <div className="space-y-4">
        <p>Certain clauses may be considered in the negotiation of your shareholders' agreement:</p>
        
        <ul className="list-disc pl-5 space-y-2">
          <li>The duration and possible extension of the shareholders' agreement;</li>
          <li>Dispute resolution clauses: buy or sell clause or "roulette" clause, promise to purchase or sell, approval/preemption clauses;</li>
          <li>Non-competition or exclusivity clauses;</li>
          <li>Clauses relating to the management of the company and voting rights: right of veto, right of consultation, confidential information clause;</li>
          <li>Clauses relating to shareholding: profit distribution clause, subscription rights, equity stabilization clause;</li>
          <li>The entry and exit clauses (relating to the transfer of shares/stocks):</li>
          <li>Transfer control clauses: pre-emption, inalienability, approval, limitation of participations, anti-dilution;</li>
          <li>Company departure clauses: unilateral promise to purchase shares, joint exit clause.</li>
        </ul>
        
        <p>The shareholders' agreement is a <strong>complex document</strong>. Poorly drafted or omitting a clause can quickly lead to <strong>deadlock situations</strong>.</p>
        
        <p>To move forward with peace of mind when drafting a <a href="#" className="text-blue-600 hover:underline">partnership agreement</a>, Captain Contrat will support you.</p>
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