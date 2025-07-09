"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Does the professional have an obligation to inform the consumer about the provision of services before purchase?

// Yes, the professional's obligation to provide information is mentioned in Article L. 111-1 of the Consumer Code.

// It includes the duty to inform , the duty to warn and the duty to advise .

// The service provider thus undertakes to find out what the client really wants, to warn the latter of the possible risks and problems that the service may cause, or to guide the client in their choices.

const faqs = [
  {
    question: "What is a service provision contract?",
    answer: (
      <div className="space-y-4">
        <p>
          The service provision contract is defined in article 1710 of the Civil
          Code.
        </p>

        <p>Through this agreement:</p>
        <div>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              a service provider undertakes to carry out work independently and
              without representing the client;
            </li>

            <li>a customer agrees to pay for the service.</li>
          </ul>
        </div>

        <p>
          The contract sets out the scope and duration of the service, the
          amount of compensation, and all terms and conditions necessary for its
          delivery. Once signed, it has legal force. Each party must fulfill its
          obligations.
        </p>

        <p>
          Would you like assistance in drafting a service provision contract?
        </p>
      </div>
    ),
  },
  {
    question: "What are service provision conditions? ",
    answer: (
      <div className="space-y-4">
        <p>
          The activities that can be the subject of a service provision are very
          varied. They concern different sectors:
        </p>

        <ul className="space-y-2 list-disc list-inside">
          <li>the rental of means of transport;</li>
          <li>advice (legal, accounting, real estate);</li>
          <li>restoration;</li>
          <li>IT and new web professions such as editor or web developer;</li>
          <li>personal assistance and service;</li>
          <li>logistics, etc.</li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "What is the difference between an employment contract and a service contract? ",
    answer: (
      <div className="space-y-4">
        <p>
          The service provision contract is carried out in complete
          independence, that is to say that there is no relationship of
          subordination between the parties . Thus, it should not be assimilated
          to an employment contract.
        </p>

        <p>
          It is also important to be vigilant when drafting the service
          provision contract to avoid reclassification as an undeclared
          employment contract. Indeed, there may be consequences for the social
          security system, and more specifically for the payment of social
          security contributions.
        </p>

        <p>To avoid any risk, Captain Contrat supports you .</p>
      </div>
    ),
  },
  {
    question: "Sales contract or service contract: what’s the difference? ",
    answer: (
      <div className="space-y-5">
        <p>
          The contract for the sale of goods (as opposed to contracts for the
          provision of services) does not concern the performance of a service,
          but the sale of a thing:
        </p>

        <ul className="space-y-2 list-disc list-inside">
          <li>real estate and personal property;</li>
          <li>tangible or intangible property.</li>
        </ul>

        <p>
          The sales contract therefore implies an obligation to give a good.
        </p>

        <p>
          However, a service contract may be mixed if it involves the
          performance and delivery of a thing. Obligations and guarantees differ
          depending on the classification of the contract.
        </p>

        <p>
          To move forward with complete peace of mind, Captain Contrat will help
          you draft your contracts .
        </p>
      </div>
    ),
  },
  {
    question: "How to write a service provision contract? ",
    answer: (
      <div className="space-y-4">
        <p>Clauses must be included in your service provision contract:</p>

        <ul className="space-y-2 list-disc list-inside">
          <li>
            information relating to the parties (name, address and if it is a
            company, its legal form, the amount of share capital, the name of
            the legal representative and its registration number in the trade
            and companies register);
          </li>
          <li>
            the amount of the price or the terms of its establishment (the price
            must be determinable);
          </li>
          <li>the date and terms of performance of the service;</li>
          <li>the duration of the contract; </li>
          <li>
            the law applicable to the contract and the competent court in the
            event of a dispute.
          </li>
        </ul>

        <p>
          More specific clauses may be added: a confidentiality clause , ethical
          rules , obligation of means or results, transfer of ownership , a
          non-competition clause .
        </p>

        <p>
          For a tailor-made contract, benefit from the support of Captain
          Contrat .
        </p>
      </div>
    ),
  },

  {
    question:
      "What are the general obligations of the parties in a service provision contract?",
    answer: (
      <div className="space-y-4 ">
        <p>
          The service provision contract is a synallagmatic contract , that is
          to say that it imposes obligations on both parties.
        </p>

        <p className="font-bold ">Obligations of the service provider</p>
        <p>
          The service provider is required to comply with certain obligations,
          including:
        </p>

        <ul className="space-y-2 list-disc list-inside">
          <li>
            the obligation to do: the service must be performed as defined in
            the contract;
          </li>
          <li>
            the obligation to provide information: this includes the duty to
            provide information, the duty to warn, and the duty to advise. The
            service provider undertakes to find out what the client really
            wants, to warn the client about any potential risks and problems
            that the service may cause, and to guide the client in their
            choices.
          </li>
        </ul>

        <p className="font-bold">Customer's obligations</p>
        <p>
          Conversely, the customer must respect his obligations towards the
          service provider. In particular, he is required to:
        </p>

        <ul className="space-y-2 list-disc list-inside">
          <li>
            pay the price of the service: failing this, the service provider is
            entitled to suspend the performance of the services or to demand the
            return of services already provided;
          </li>
          <li>
            provide the service provider with all the means necessary to carry
            out the service.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "What are the specific features of a service provision contract for a consumer?",
    answer: (
      <div className="space-y-10 ">
        <p>
          When a service contract is intended for non-professionals, it is
          governed by the French Consumer Code. Specific rules designed to
          protect consumers therefore apply. It is essential to draft the
          contract carefully to avoid being subject to administrative fines.
        </p>
      </div>
    ),
  },

  {
    question:
      "Does the professional have an obligation to inform the consumer about the provision of services before purchase? ",
    answer: (
      <div className="space-y-4">
        <p>
          Yes, the professional's obligation to provide information is mentioned
          in Article L. 111-1 of the Consumer Code.
        </p>

        <p>
          It includes the duty to inform , the duty to warn and the duty to
          advise .
        </p>
        <p>
          The service provider thus undertakes to find out what the client
          really wants, to warn the latter of the possible risks and problems
          that the service may cause, or to guide the client in their choices.
        </p>
      </div>
    ),
  },

  {
    question:
      "What are the penalties incurred in the event of a professional failing to meet their pre-contractual obligation to provide information? ",
    answer: (
      <div className="space-y-4">
        <p>
          Article L. 131-1 of the Consumer Code specifies the sanctions if the
          professional breaches his obligation to provide information
          concerning:
        </p>

        <ul className="space-y-2 list-disc list-inside">
          <li>The essential characteristics of the good or service ,</li>
          <li>the price ,</li>
          <li>
            the date or period within which the professional undertakes to
            deliver the goods or perform the service, information relating to
            the identity of the professional ,
          </li>
          <li>the possibility of using a consumer mediator .</li>
        </ul>

        <p>
          Thus, any failure to comply with a pre-contractual obligation to
          provide information on these elements is liable to an administrative
          fine, the amount of which may not exceed 3,000 euros for a natural
          person and 15,000 euros for a legal entity.
        </p>

        <p>
          Article L. 131-1-1 of the Consumer Code adds that any failure to
          comply with a pre-contractual obligation to provide information
          relating to the existence and terms of implementation of legal
          guarantees (legal guarantee against hidden defects or commercial
          guarantees) is punishable by an administrative fine, the amount of
          which may not exceed 15,000 euros for a natural person and 75,000
          euros for a legal entity.
        </p>

        <p>
          To avoid any risk of litigation, Captain Contrat supports you in
          drafting your service provision contracts .
        </p>
      </div>
    ),
  },

  //   How to terminate a service contract?

  // To understand the terms of termination or breach of a service provision contract , it is necessary to distinguish between two hypotheses:

  // Fixed-term service contract : In principle, it cannot be terminated before the end of the term. However, if the client and the service provider agree, it is possible to terminate the contract. Likewise, if the client fails to fulfill one of its obligations, unilateral termination may be considered.
  // the indefinite-term service provision contract :
  // there is an early termination clause: it will be necessary to refer to it to determine the terms of termination of the contract;
  // There is no early termination clause: the service provider must inform the client of its intention to terminate the contract, respecting a reasonable notice period. If the service relationship is terminated abruptly, the service provider may be ordered to pay compensation or damages to the client.

  // Captain Contrat supports you in drafting your service provision contracts.

  {
    question: "How to terminate a service contract? ",
    answer: (
      <div className="space-y-4">
        <p>
          To understand the terms of termination or breach of a service
          provision contract , it is necessary to distinguish between two
          hypotheses:
        </p>

        <ul className="space-y-2 list-disc list-inside">
          <li>
            Fixed-term service contract : In principle, it cannot be terminated
            before the end of the term. However, if the client and the service
            provider agree, it is possible to terminate the contract. Likewise,
            if the client fails to fulfill one of its obligations, unilateral
            termination may be considered.
          </li>
          <li>
            the indefinite-term service provision contract :
            <ul className="space-y-2 list-disc mt-2 list-inside ml-6">
              <li>
                there is an early termination clause: it will be necessary to
                refer to it to determine the terms of termination of the
                contract;
              </li>
              <li>
                There is no early termination clause: the service provider must
                inform the client of its intention to terminate the contract,
                respecting a reasonable notice period. If the service
                relationship is terminated abruptly, the service provider may be
                ordered to pay compensation or damages to the client.
              </li>
            </ul>
          </li>
        </ul>

        <p>
          To avoid any risk of litigation, Captain Contrat supports you in
          drafting your service provision contracts .
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
