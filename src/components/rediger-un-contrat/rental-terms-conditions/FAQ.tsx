"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the general rental conditions? ",
    answer: (
      <div className="space-y-4">
        <p>
          Rental terms and conditions are the legal information that a product
          or service provider makes available to its customers, particularly to
          better regulate relationships related to the rental of its products or
          services. They must appear on all commercial websites. However, they
          may also appear in any rental contract signed between individuals or
          professionals.
        </p>
      </div>
    ),
  },
  {
    question: "General rental conditions: what are they for? ",
    answer: (
      <div className="space-y-4">
        <p>
          The general rental conditions reflect the company's business policy
          and, more generally, define the responsibilities of the parties
          involved in the rental in question—that is, the lessor and the lessee.
          In other words, they represent the advantage of limiting the risk of
          subsequent disputes between the parties to the contract by delineating
          the conditions relating to the rental of the property in question.
        </p>

        <p>
          If, for example, it is a vehicle, the general rental conditions will
          define the proper use of the rented vehicle, the driver's insurance
          terms, the conditions that the driver must meet in order to be able to
          rent the vehicle, etc.
        </p>
      </div>
    ),
  },
  {
    question: "What is the content of these conditions? ",
    answer: (
      <div className="space-y-4">
        <p>
          The content of the general rental conditions can be quite extensive
          and, moreover, varies depending on the property covered by the rental
          agreement. Indeed, it could be a rental agreement for an apartment, a
          vehicle, premises, etc.
        </p>

        <p>
          Note that, in general, these conditions define the proper use of the
          rented property and the conditions that the tenant must meet in order
          to rent it. In addition, they have the advantage of pre-regulating any
          potential disputes, for example, the charges applied to the tenant of
          a vehicle in the event of a claim, or, similarly, those applied to the
          tenant of an apartment.
        </p>
      </div>
    ),
  },
  {
    question: "Who will the general rental conditions apply to? ",
    answer: (
      <div className="space-y-4">
        <p>
          The general rental conditions apply, by default, to the parties to the
          contract (for example, the vehicle rental company and the lessee).
          These parties will therefore be obliged to comply with the conditions
          they set for themselves beforehand, when signing the rental contract.
        </p>

        <p>
          However, in some cases it is also possible that the general rental
          conditions apply to third parties, in particular when additional
          contracts relating to the rental have been signed (for example, a
          maintenance contract for cars that a company rents to its customers).
        </p>
      </div>
    ),
  },
  {
    question:
      "Can I use the rental terms and conditions of one of my competitors? ",
    answer: (
      <div className="space-y-4">
        <p>
          Copying a competitor's rental terms and conditions is prohibited by
          law .
        </p>

        <p>
          Indeed, even if it is perfectly normal for there to be common points
          between the general rental conditions of different companies, it is
          however essential that you personalize yours according to the activity
          you carry out.
        </p>

        <p>In other words, your conditions must be tailor-made .</p>
        <p>
          Otherwise, you risk being sued and having to pay damages to your
          competitors, not to mention the negative effects that legal action
          could have on your company's reputation.
        </p>
      </div>
    ),
  },

  {
    question: "How do I get my rental terms and conditions? ",
    answer: (
      <div className="space-y-4 ">
        <li className="list-decimal">
          You answer an online questionnaire on our site
        </li>

        <li className="list-decimal">
          One of our lawyers will provide you with a quote for drafting your
          general rental conditions.
        </li>
        <li className="list-decimal">
          Once the quote is accepted, the lawyer draws up the document you need
        </li>
      </div>
    ),
  },
  {
    question: "The essential points of the CGL",
    answer: (
      <div className="space-y-10 ">
        <div className="space-y-3">
          <li className="list-decimal font-bold">
            Write the General Terms and Conditions and its essential information
          </li>
          <p>
            The object, the rental period, the conditions of use of the rented
            object, restitution clauses
          </p>
        </div>

        <div className="space-y-3">
          <li className="list-decimal font-bold">
            Inform and communicate these CGLs
          </li>
          <p>
            Make the CGLs visible to give them real contractual value and meet
            legal obligations in this area.
          </p>
        </div>

        <div className="space-y-3">
          <li className="list-decimal font-bold">Write a rental contract </li>
          <p>
            The General Terms and Conditions are not enough. They must accompany
            your rental agreement.
          </p>
        </div>
      </div>
    ),
  },

  {
    question: "How do your partner lawyers offer preferential rates? ",
    answer: (
      <div className="space-y-4">
        <p>
          The preferential rates are justified by a lower management cost for
          lawyers who use the Captain Contrat platform.
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
