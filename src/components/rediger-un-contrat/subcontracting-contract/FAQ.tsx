"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// What is a framework agreement?

// A framework agreement is a type of contract concluded between one or more companies and a public person , with the aim of establishing a general framework for their future public contracts.

// Just like other types of commercial contracts, the framework agreement sets out the rules for future relations between the parties, such as the conditions relating to purchase orders to be issued or subsequent contracts to be entered into over a given period.

// There are two types of framework agreements:

// Framework agreements with subsequent contract conclusion: the public buyer undertakes to enter into agreements with certain companies at a later date, when a new need arises.

// Framework agreements with the issue of purchase orders: these are contracts concluded with one or more economic operators and executed as and when the need arises by the issue of purchase orders.

const faqs = [
  {
    question: "What is a commercial contract?",
    answer: (
      <div className="space-y-4">
        <p>
          A commercial contract, also called a “commercial act,” is, as its name
          suggests, a document that governs commercial relations . In other
          words, it is a document that governs the relationship between a seller
          and a buyer in the context of a commercial activity.
        </p>

        <p>
          This is a legally binding document that identifies the parties, their
          obligations, and their commitments. The clauses contained within the
          contract depend on the sector of activity as well as the needs of the
          parties.
        </p>

        <p>
          A subcontracting contract , a service provision contract , or a
          business provider contract are commercial contracts . The term is used
          when it comes to governing a commercial relationship, B2B or B2C.
        </p>
      </div>
    ),
  },
  {
    question: "What characterizes the commercial contract? ",
    answer: (
      <div className="space-y-4">
        <p>
          The particularity of the commercial contract lies in the fact that the
          act concerned by the contract necessarily falls under commercial law.
        </p>

        <ul className="list-disc space-y-2 list-inside">
          <li>Overall, it is characterized by two elements:</li>
          <li> Its object is a commercial act</li>
          <li> It is established by a trader for the needs of his activity</li>
        </ul>

        <p>
          Whatever type of contract you wish to draw up, have it drawn up by one
          of our specialist lawyers.
        </p>
      </div>
    ),
  },
  {
    question: "What are the different types of commercial contracts? ",
    answer: (
      <div className="space-y-4">
        <p>
          Commercial contracts include a multitude of different contracts. We
          can first distinguish between “named” contracts, defined by law, for
          example:
        </p>

        <ul className="list-disc space-y-2 list-inside">
          <li>the sales contract</li>
          <li>the franchise agreement</li>
          <li>the commercial lease contract</li>
          <li>
            the international commercial contract (cross-border commercial
            contract)
          </li>
          <li>
            the mixed commercial contract (between a trader and a non-trader)
          </li>
        </ul>

        <p>
          Certain so-called "unnamed" contracts, i.e. contracts not defined by
          law and subject to any legal regime, may be part of commercial
          contracts depending on their nature, such as, for example, the
          commercial partnership contract, the service provision contract and
          the business provider contract.
        </p>

        <p>
          The list of commercial contracts is actually more exhaustive and
          varies depending on the type of use of the contracts, to learn more,
          see our article dedicated to this subject.
        </p>
      </div>
    ),
  },
  {
    question:
      "What are the conditions for the validity of a commercial contract? ",
    answer: (
      <div className="space-y-4">
        <p>
          The establishment of a commercial contract is primarily a
          pre-contractual phase. Indeed, for the contract to be valid, it is
          essential to properly manage your commercial relations by carrying out
          preliminary checks.
        </p>

        <p>
          It will be necessary to check that these three conditions are met:
        </p>

        <ul className="list-disc space-y-2 list-inside">
          <li>
            The signatory's capacity to bind the company : this is essential;
            the signatory of the commercial contract must be able to represent
            the company. This could be the manager, for example, as they hold a
            representation mandate. A simple employee, on the other hand, will
            not be able to commit in the name and on behalf of the company.
          </li>
          <li>
            The object of the contract must be lawful and certain : it is
            necessary to clearly specify what the parties expect from the
            contract and to ensure that it is indeed a lawful object.
          </li>
          <li>
            The consent of each party must be informed and free: as with any
            contract, it is essential that the consent of the parties has not
            been vitiated(obtained by error or by violence).
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How to write a commercial contract? ",
    answer: (
      <div className="space-y-4">
        <p>
          To properly draft your commercial contract, certain information must
          appear, including:
        </p>

        <ul className="list-disc space-y-2 list-inside">
          <li>
            The identity of the parties or their signatories if they are
            represented
          </li>
          <li>The object of the contract</li>
          <li>The mutual commitments of the parties</li>
          <li>Guarantees and responsibilities : to manage the parties' risk</li>
          <li>
            The duration of the contract : and include the possibility of
            tacitly renewing the contract
          </li>
        </ul>

        <p>
          Other provisions may also be included in the contract and are
          recommended, such as a clause stating the competent jurisdiction in
          the event of a dispute, a clause setting out the conditions for
          modifying the contract, or a termination clause providing for the
          terms of termination of the contract.
        </p>

        <small>To find out more, please read our dedicated article.</small>
      </div>
    ),
  },

  {
    question: "What is a framework agreement? ",
    answer: (
      <div className="space-y-4 ">
        <p>
          A framework agreement is a type of contract concluded between one or
          more companies and a public person , with the aim of establishing a
          general framework for their future public contracts.
        </p>

        <p>
          Just like other types of commercial contracts, the framework agreement
          sets out the rules for future relations between the parties, such as
          the conditions relating to purchase orders to be issued or subsequent
          contracts to be entered into over a given period.
        </p>

        <p>There are two types of framework agreements:</p>

        <ul className="list-disc space-y-2 list-inside">
          <li>
            Framework agreements with subsequent contract conclusion: the public
            buyer undertakes to enter into agreements with certain companies at
            a later date, when a new need arises.
          </li>
          <li>
            Framework agreements with the issue of purchase orders: these are
            contracts concluded with one or more economic operators and executed
            as and when the need arises by the issue of purchase orders.
          </li>
        </ul>
      </div>
    ),
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
