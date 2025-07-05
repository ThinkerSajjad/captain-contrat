"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Key points to remember about the commercial lease contract

// A commercial lease is a rental agreement  for premises used for the operation of an industrial, commercial, or craft business. It governs the rights and obligations of the lessor and the lessee (also called the tenant).

// Drafting a commercial lease contract involves asking yourself many questions:

// The duration of the lease: how long are you committing to?
// Price fixing and its revision
// The distribution of charges and costs between the lessor and the lessee
// Obligations of the parties
// Cases of termination or renewal of the lease

// The commercial lease is subject to the specific rules of commercial leases. It is important not to neglect the drafting of this contract.

// 1. Fulfill the conditions of validity of the commercial lease:

// Premises allocated to the exercise of an industrial or craft activity, used for the exploration of a business...

// 2. Negotiate and draft the essential clauses: Duration of the lease, rules of specialization, amount of rent and indexation...

// 3. Anticipate what comes next: Renewal of the lease, supervision of the transfer of the commercial lease and/or business, the impacts of this transfer...

const faqs = [
  {
    question: "What is a commercial lease?",
    answer: (
      <div className="space-y-4">
        <p>
          A commercial lease is a contract by which a person known as the lessor
          (generally the owner of the premises) agrees to make funds available
          to a tenant so that they can carry out a commercial, industrial or
          craft activity there, in return for rent.
        </p>

        <p>
          The conclusion of a lease agreement allows the commercial tenant to
          operate his business , while benefiting from the status of commercial
          leases . This highly protective status allows him to assert a right to
          renewal of the lease upon its expiry. And, in the event of the lessor
          refusing to renew the lease, compensation known as "eviction
          compensation". :
        </p>
      </div>
    ),
  },
  {
    question: "What are the conditions for concluding a commercial lease?",
    answer: (
      <div className="space-y-4">
        <p>To do this, you must:</p>

        <ul className="space-y-2 list-disc list-inside ">
          <li>
            Be a trader. Registration with the Trade and Companies Register
            (RCS), or the Trades Directory for artisans, is essential. Please
            note that associations, even those with a commercial purpose,
            liberal professions, and civil servants are not eligible for
            commercial lease status because they are not considered traders.{" "}
            <p className="mt-2">
              They can obviously enter into a commercial lease, but will be
              subject to basic civil law, which gives them less protection.
            </p>
          </li>
          <li>
            Renting a permanent space. A caravan, tent, or any other removable
            structure does not meet the requirement for permanent stability
            because it does not have foundations.
          </li>
          <li>
            Operating a business : the premises must be intended for commercial
            activity, but above all, they must actually be operated. Failure by
            the tenant to operate the premises may be grounds for termination of
            the commercial lease requested by the lessor. However, if the tenant
            grants the lease as a management lease, even if they do not
            personally operate the business, it is considered that there is
            operation by the lessee.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How long does a commercial lease last? ",
    answer: (
      <div className="space-y-4">
        <p>
          The status of commercial leases requires that the commercial lease
          lasts at least 9 years . The lessor must therefore respect this period
          and cannot request termination during the lease, except in exceptional
          cases (serious misconduct by the tenant or if he wishes to build,
          rebuild, raise, or carry out certain types of work on the building).
        </p>

        <p>
          As for the tenant, he has in principle the right to terminate at the
          end of each three-year period, that is to say every 3 years (this is
          why the commercial lease is more commonly called the 3-6-9 lease).
          This notice must be given at least 6 months in advance, by bailiff or
          by registered letter with acknowledgment of receipt. In the event of
          termination at the tenant's initiative, no compensation is due to him.
        </p>

        <p>
          Please note: it is possible to terminate the lease contract at any
          time during its term if the parties agree, or if this is imposed on
          them by a court decision.{" "}
        </p>
      </div>
    ),
  },
  {
    question: "My lease is expiring, what should I do? ",
    answer: (
      <div className="space-y-5">
        <p>
          Once your lease has expired , you must submit a renewal request to
          your landlord by registered letter with acknowledgment of receipt. The
          landlord then has 3 months to respond to you. Several cases are
          possible:
        </p>

        <ul className="space-y-2 list-disc list-inside">
          <li>
            Either he accepts purely and simply: the lease is renewed for a
            minimum period of 9 years;
          </li>
          <li>
            Either he accepts but wishes to modify the price of the lease : he
            must then specify the price. If the tenant refuses, and the
            negotiations are unsuccessful, the two parties are brought before
            the departmental conciliation commission to find an amicable
            agreement, and if necessary, before the high court if no compromise
            has been found;{" "}
          </li>
          <li>
            Either he refuses: he must specify the reasons. The tenant can
            contest this refusal or accept it but demand eviction compensation;
          </li>
          <li>
            Either he does not respond : his lack of response constitutes
            acceptance of the renewal, under the same terms as the previous lea
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What is doorstep? ",
    answer: (
      <div className="space-y-4">
        <p>
          The key money (or "right of entry") has its origins in an ancient
          custom which is based on the following premise: given that the lessor
          is deprived of his property and cannot dispose of it as he wishes, he
          receives compensation in exchange.
        </p>

        <p>
          Today, this practice is becoming less and less common. Landlords
          prefer to set a higher initial rent upon the tenant's arrival. The key
          money then becomes an additional rent and is taxable as property
          income.
        </p>

        <p>
          Please note: this should not be confused with the security deposit,
          which is an amount paid by the tenant to the landlord to guarantee
          proper performance of the lease. When the tenant vacates the premises,
          the amount is refunded.
        </p>
      </div>
    ),
  },

  {
    question: "How is the rent amount determined?",
    answer: (
      <div className="space-y-4 ">
        <p>
          When concluding the commercial lease contract , the parties freely set
          the amount of the rent (often equal to the rental value of the
          property), the frequency and the method of payment.
        </p>

        <p>
          To protect against any devaluation of the property for the lessor, and
          any sudden increase in rent for the tenant, the parties can insert an
          indexation clause (or sliding scale clause) into the lease agreement.
          Thus, the amount of the rent is automatically revised according to the
          chosen index, upwards or downwards.
        </p>

        <p>
          The 2014 Pinel Law deemed the Construction Cost Index (CCI) too
          volatile. From now on, for commercial leases, the parties have the
          choice between the CCI (Commercial Rent Index – for commercial and
          craft activities) and the CCI (for tertiary activities).
        </p>
      </div>
    ),
  },
  {
    question:
      "Can I ask the landlord to pay for the painting work carried out in my premises?",
    answer: (
      <div className="space-y-10 ">
        <p>
          The charges payable under the commercial lease are divided between the
          lessor and the lessee. In principle (and unless otherwise stipulated
          in the articles of association):
        </p>

        <ul className="space-y-2 list-disc list-inside">
          <li>
            The lessor must pay property tax, office taxes in Ile-de-France, as
            well as major works such as renovations, vaults, roofs, expenses
            relating to work related to dilapidation or major repairs to bring
            them up to standard;
          </li>
          <li>
            The tenant is responsible for the ongoing maintenance and repair
            costs (known as rental costs): water, gas, electricity, painting,
            wallpaper, etc., as well as taxes and fees related to the use of the
            premises or building, such as property tax, for example.
          </li>
        </ul>

        <p>
          As painting work is considered maintenance expenses, it will be the
          responsibility of the tenant.
        </p>
      </div>
    ),
  },

  {
    question: "What is the obligation of information of the professional? ",
    answer: (
      <div className="space-y-4">
        <p>
          The lessor of a business in a shopping center is bound by the same
          obligations as in a traditional lease, namely the provision of the
          business and all accessories enabling its normal operation
          (administrative authorizations, electricity, etc.).
        </p>

        <p>
          On the other hand, the lessor is not bound by an obligation of
          results. As such, if a tenant is dissatisfied with the results of the
          shopping center and accuses the lessor of having made false promises
          about the commerciality of the leased premises (that the turnover is
          not as expected, for example), he will not be able to request the
          cancellation of the contract for error or defect of consent.
        </p>
        <p>
          The tenant will have to prove that the lessor has not implemented all
          necessary means to maintain a favorable business environment.
        </p>
      </div>
    ),
  },

  {
    question:
      "I decide to enter into a commercial lease, what do I actually need to do?",
    answer: (
      <div className="space-y-4">
        <ol className="space-y-2 list-decimal list-inside">
          <li>
            {" "}
            You answer a questionnaire on our website, in connection with your
            legal need
          </li>
          <li>A lawyer will provide you with a quote that meets your needs</li>
          <li>
            After acceptance of this quote, the lawyer draws up your document
          </li>
        </ol>
      </div>
    ),
  },

  {
    question: "Key points to remember about the commercial lease contract",
    answer: (
      <div className="space-y-4">
        <p>
          A commercial lease is a rental agreement for premises used for the
          operation of an industrial, commercial, or craft business. It governs
          the rights and obligations of the lessor and the lessee (also called
          the tenant).
        </p>

        <p>
          Drafting a commercial lease contract involves asking yourself many
          questions:
        </p>

        <ul className="space-y-2 list-disc list-inside">
          <li>The duration of the lease: how long are you committing to?</li>
          <li>Price fixing and its revision</li>
          <li>
            The distribution of charges and costs between the lessor and the
            lessee
          </li>
          <li>Obligations of the parties</li>
          <li>Cases of termination or renewal of the lease</li>
        </ul>

        <p>
          The commercial lease is subject to the specific rules of commercial
          leases. It is important not to neglect the drafting of this contract.
        </p>

        <p>1. Fulfill the conditions of validity of the commercial lease:</p>

        <p>
          Premises allocated to the exercise of an industrial or craft activity,
          used for the exploration of a business...
        </p>

        <p>
          2. Negotiate and draft the essential clauses: Duration of the lease,
          rules of specialization, amount of rent and indexation...
        </p>

        <p>
          3. Anticipate what comes next: Renewal of the lease, supervision of
          the transfer of the commercial lease and/or business, the impacts of
          this transfer...
        </p>
      </div>
    ),
  },

  {
    question: "How do your partner lawyers offer preferential rates?",
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
