"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// How to conclude a subcontracting contract?

// Clauses must be present in your subcontracting contract:

// The object of the contract;
// The price of the service;
// The indexation clause or renegotiation clause in the event of changes in economic conditions compromising the balance of the contract;
// Payment deadlines and/or late payment penalties;
// The terms of modification of the contract;
// The rate of orders, delivery times, specificities of carrying out the work;
// The penalty for failure to comply with production rates and deadlines (price reduction in particular);
// Delivery (place, risks), transport, packaging;
// Control and reception of services;
// The guarantees granted to the subcontractor;
// The confidentiality of certain information transmitted to the subcontractor;
// Intellectual property when the service is protected by copyright;
// The system of specific models and tools (insurance, retention);
// The clause on undeclared work to ensure that the subcontractor does not use the work of undeclared persons;
// The date of conclusion, effective date of the contract;
// The competent court and applicable law.

// To benefit from support in drafting your subcontracting contracts, contact Captain Contrat.

const faqs = [
  {
    question: "What is a subcontracting agreement?",
    answer: (
      <div className="space-y-4">
        <p>
          Subcontracting is an operation by which a company ( the client )
          entrusts another company ( the subcontractor ) with the task of
          carrying out for it part of the production and/or service acts for
          which it remains responsible.
        </p>

        <p>It is governed by law no. 75-1334 of December 31, 1975.</p>

        <p>
          To learn more, read our article on how a subcontracting contract
          works.
        </p>
      </div>
    ),
  },

  {
    question: "What are the 2 types of subcontracting? ",
    answer: (
      <div className="space-y-4 ">
        <p className="font-semibold">Specialty subcontracting</p>

        <p>
          It concerns the hypothesis where the client calls upon a "specialist"
          with the equipment, materials and skills adapted to its needs, because
          it cannot or does not wish to acquire them, for reasons relating to
          its strategy.
        </p>

        <p>
          For example , if your company's activity is events, for the overall
          organization of an event, you can call on:{" "}
        </p>

        <ul className="list-disc space-y-2 list-inside">
          <li>
            a host services company; to manage reception during the evening
          </li>
          <li>a caterer for the “food” part;</li>
          <li>
            or even subcontract the security service to a security company.
          </li>
        </ul>

        <p className="font-semibold">Capacity outsourcing</p>

        <p>
          In terms of business management, capacity subcontracting is when the
          client, who is equipped to execute a product, uses a subcontractor:
        </p>

        <ul className="list-disc space-y-2 list-inside">
          <li>
            either occasionally, due to a temporary increase in activities or a
            technical incident;
          </li>
          <li>
            either because they wish to maintain their own internal production
            capacity.
          </li>
        </ul>

        <p>
          For example , if a training organization cannot provide all or part of
          a training course, it can use another company and thus establish a
          training subcontracting contract.
        </p>

        <p>To learn more, see our article on how outsourcing works.</p>
      </div>
    ),
  },

  {
    question:
      "Service provision contract and subcontracting contract: what are the differences?",
    answer: (
      <div className="space-y-4">
        <table
          border={1}
          className="w-full text-center border-collapse border border-gray-300"
        >
          <thead>
            <tr className="border border-gray-300 py-2">
              <th></th>
              <th className="border border-gray-300 py-2">
                Subcontracting contract
              </th>
              <th className="border border-gray-300 py-2">
                Service provision contract
              </th>
            </tr>
          </thead>
          <tbody className="border border-gray-300">
            <tr className="border border-gray-300 py-2">
              <td className="font-bold border border-gray-300 py-2">
                Status of the co-contractor
              </td>
              <td className="border border-gray-300 py-2">Subcontractor</td>
              <td className="border border-gray-300 py-2">Strvice provider</td>
            </tr>
            <tr className="border border-gray-300 py-2">
              <td className="font-bold border border-gray-300 py-2">SKILLS</td>
              <td className="border border-gray-300 py-2">
                Present within the client company
              </td>
              <td className="border border-gray-300 py-2">
                Absent from the client company
              </td>
            </tr>
            <tr className="border border-gray-300 py-2">
              <td className="font-bold border border-gray-300 py-2">
                Beneficiary
              </td>
              <td className="border border-gray-300 py-2">
                Client of the contracting company (external to the company)
              </td>
              <td className="border border-gray-300 py-2">
                The contracting company itself (internal to the company)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    question: "Can all types of activities use outsourcing?",
    answer: (
      <div className="space-y-4">
        <p>
          For two types of activities, the law requires the drafting of a
          subcontracting contract:
        </p>

        <ul className="list-disc space-y-2 list-inside">
          <li>
            Building and public works contracts (BTP), art. 14-1 of law
            n°75-1334 of December 31, 1975 relating to subcontracting.
          </li>
          <li>
            The purchase of manufactured products, manufactured at the request
            of the buyer for integration into its own production, the amount of
            which exceeds 500,000 euros (art. L. 441-9 in the Commercial Code).
          </li>
        </ul>

        <p>
          However, a contract provides a clear and secure legal framework for
          your business relationships. Are you considering subcontracting?
          Captain Contrat can assist you in drafting your contracts.
        </p>
      </div>
    ),
  },
  {
    question: "Is it mandatory to have a subcontracting contract?",
    answer: (
      <div className="space-y-4">
        <p>
          Contrary to what practice suggests, the subcontracting contract is a
          business contract that does not require a written document: the
          subcontracting contract is a consensual contract.
        </p>

        <p>
          However, it is recommended to draw up a subcontracting contract for 5
          reasons :
        </p>

        <ul className="list-disc space-y-2 list-inside">
          <li>
            Supervision of the relationship between the main company and the
            order taker,
          </li>
          <li>
            Protection of the main business: confidentiality clause, use of the
            trademark, direct competition,
          </li>
          <li>
            Protection of the subcontractor: payment conditions and deadlines,
            specification of the scope of actions,
          </li>
          <li>
            Assurance of the independence of the main company, as well as that
            of the subcontractor,
          </li>
          <li>Definition of responsibilities towards the project owner.</li>
        </ul>

        <p>
          Benefit from Captain Contrat's support in drafting your subcontracting
          contract.
        </p>
      </div>
    ),
  },
  {
    question: "What is the relationship between the parties?",
    answer: (
      <div className="space-y-4">
        <p>
          The purpose of a subcontract is to carry out certain work ordered by
          the client from the subcontractor. This order gives rise to certain
          obligations:
        </p>

        <p className="font-bold">
          Between the subcontractor and the project owner:
        </p>

        <ul className="list-disc space-y-2 list-inside">
          <li>
            The subcontractor is a third party to the main contract, the one
            concluded between the project owner and the main contractor.
          </li>
          <li>
            The project owner may still be liable to the subcontractor in the
            event of tortious damage caused to the latter. This guarantee is
            established by law and its limitation period is 10 years.
          </li>
        </ul>

        <p className="font-bold">
          Between the subcontractor and the contractor:
        </p>

        <p>
          The law established the same system as the hiring of work. The hiring
          of work is defined as the execution by one person of work or missions
          for the benefit of another without representation.
        </p>

        <p>
          On the one hand, the subcontractor can take action against the project
          owner in the event of non-payment by the contractor. On the other
          hand, the subcontractor may be contractually liable to the main
          contractor.
        </p>

        <p className="font-bold">
          Between the contractor and the project owner:
        </p>

        <p>
          The contractor is the main party to the main contract, the one
          concluded between the project owner and the main contractor.
        </p>
      </div>
    ),
  },

  {
    question: "When to establish a subcontracting contract?",
    answer: (
      <div className="space-y-4">
        <p>
          Subcontracting allows your company to provide a service (work, for
          example) when it is unable to do it itself, for example due to a lack
          of time, resources, or know-how.
        </p>
      </div>
    ),
  },
  {
    question: "Is temporary work subcontracting?",
    answer: (
      <div className="space-y-4">
        <p>
          The law is strict on this point: any operation involving the lending
          of labour, for profit and on an exclusive basis, is prohibited, unless
          it falls within the framework of temporary work.
        </p>

        <p>
          Temporary employment agencies fall within the scope of temporary
          employment. They benefit from a special status because they comply
          with numerous formalities (declaration to the labor inspectorate,
          presentation of financial guarantees, etc.).
        </p>

        <p>
          Temporary work differs from subcontracting in that its sole purpose is
          to compensate for a staff shortage.
        </p>

        <p>
          In the case of subcontracting, the main contractor calls on external
          personnel who have technical knowledge and specific know-how, in order
          to achieve a result that it could not have achieved without using this
          external workforce.
        </p>

        <p>
          For assistance in drafting a subcontracting contract, contact Captain
          Contrat.
        </p>
      </div>
    ),
  },

  {
    question:
      "At what point does a subcontracting contract become an illegal loan of labor?",
    answer: (
      <div className="space-y-4">
        <p>
          Any profit-making operation whose exclusive purpose is the loan of
          labor is prohibited (article L. 8241-1 of the Labor Code).
        </p>

        <p className="font-bold">Illegal loan of labor</p>

        <p>
          Thus, when the subcontracting contract is concluded between the main
          contractor, the principal and the subcontractor:
        </p>

        <ul className="list-disc space-y-2 list-inside">
          <li>
            that it is based exclusively on a loan from salaried personnel,
          </li>
          <li>
            and that its sole purpose through this loan is to make a profit,
          </li>
          <li>It can be described as an illegal loan of labor.</li>
        </ul>
        <p>This practice is prohibited.</p>

        <p className="font-bold">Supply of valid labor</p>

        <p>
          However, it is possible to use a subcontracting contract for the
          supply of labor if the aim is to carry out a defined task, providing
          specific know-how and technique.
        </p>

        <p>
          Furthermore, in the context of a subcontracting contract, the
          subcontractor is not subordinate to the principal . He retains his
          autonomy.
        </p>

        <p className="font-bold">
          Finally, the subcontractor's remuneration is fixed and not calculated
          based on the number of hours worked.
        </p>

        <p>
          To avoid any risk of litigation, benefit from the support of a legal
          professional.
        </p>
      </div>
    ),
  },
  {
    question:
      "Can the subcontractor take action against the project owner if the main contractor does not pay him?",
    answer: (
      <div className="space-y-4">
        <p className="font-bold">Principle</p>
        <p>
          Yes, under the 1975 Act, if subcontractors are not paid by the main
          contractor under the subcontract, they can take direct action against
          the project owner to recover what they are owed. This is a payment
          guarantee for the subcontractor, but a surprising obligation for the
          project owner.
        </p>

        <p className="font-bold">Procedure </p>

        <p>
          This action is possible after a formal notice from the main contractor
          has remained unanswered for more than a month.
        </p>
        <p>
          It only allows for amounts equivalent to what the project owner still
          owes to the main contractor.
        </p>
        <p>
          Special case: the terms of this action are different when the project
          owner is a public person . In the case of a public contract and from
          600 euros including tax, the first-tier subcontractor is entitled to
          direct payment as long as the conditions of acceptance and approval
          are met.
        </p>
      </div>
    ),
  },
  {
    question: "How to conclude a subcontracting contract?",
    answer: (
      <div className="space-y-4">
        <p>Clauses must be present in your subcontracting contract:</p>

        <ul className="list-disc space-y-2 list-inside">
          <li>The object of the contract;</li>
          <li>The price of the service;</li>
          <li>
            The indexation clause or renegotiation clause in the event of
            changes in economic conditions compromising the balance of the
            contract;
          </li>
          <li>Payment deadlines and/or late payment penalties;</li>
          <li>The terms of modification of the contract;</li>
          <li>
            The rate of orders, delivery times, specificities of carrying out
            the work;
          </li>
          <li>
            The penalty for failure to comply with production rates and
            deadlines (price reduction in particular);
          </li>
          <li>Delivery (place, risks), transport, packaging;</li>
          <li>Control and reception of services;</li>
          <li>The guarantees granted to the subcontractor;</li>
          <li>
            The confidentiality of certain information transmitted to the
            subcontractor;
          </li>
          <li>
            Intellectual property when the service is protected by copyright;
          </li>
          <li>
            The system of specific models and tools (insurance, retention);
          </li>
          <li>
            The clause on undeclared work to ensure that the subcontractor does
            not use the work of undeclared persons;
          </li>
          <li>The date of conclusion, effective date of the contract;</li>
          <li>The competent court and applicable law.</li>
        </ul>

        <p className="font-bold">
          To benefit from support in drafting your subcontracting contracts,
          contact Captain Contrat.
        </p>
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
