"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// How to get a fixed-term contract?

// You answer the questionnaire relating to the fixed-term contract on our site

// We will put you in touch with a lawyer specializing in employment law who will advise you and answer your questions by telephone.

// The lawyer draws up your fixed - term contract, personalized and adapted to your employee and your company

const faqs = [
  {
    question: "What is a fixed-term contract (CDD)?",
    answer: (
      <div className="space-y-4">
        <p>
          CDD is the acronym for Fixed-Term Contract . Created in 1979, it is
          the opposite of the CDI, Indefinite-Term Contract , which is "the
          normal and general form of employment relationship" in France. The CDD
          therefore represents an exception and it is for this reason that it is
          seriously regulated by labor law.
        </p>

        <p>
          A fixed-term contract is a contract that allows an employee to be
          hired for a limited period of time or to perform a specific, temporary
          task. The precarious employment that constitutes a fixed-term contract
          cannot therefore be intended to permanently fill a position related to
          the company's normal activity.
        </p>

        <p>
          Tightly regulated by legislation, fixed-term contracts impose strict
          conditions of recourse and formalities on the employer. Employees on
          fixed-term contracts benefit from more flexible legislation and
          conditions of recourse than those on permanent contracts. French labor
          law requires equal treatment between employees on precarious
          contracts.
        </p>

        <p>
          In terms of remuneration, this includes the basic salary or wage, as
          well as all other direct or indirect benefits. Generally speaking,
          employees on fixed-term contracts receive the same remuneration as
          permanent employees, whether under the collective agreement or current
          practices. Compensatory leave compensation and a precariousness bonus
          may also be granted to employees on fixed-term contracts.
        </p>

        <p>
          Since the fixed-term contract is an atypical contract, violation of
          the rules governing the use of this type of employment contract
          results in a return to the norm, and therefore the reclassification of
          the contract as a permanent contract.
        </p>
      </div>
    ),
  },
  {
    question: "What are the reasons for using a fixed-term contract? ",
    answer: (
      <div className="space-y-4">
        <p>
          The reasons for using fixed-term contracts are clearly defined by the
          labor code.
        </p>
        <p>
          An employer may hire an employee on a fixed-term contract in the
          following cases:
        </p>

        <ul className="list-disc space-y-2 list-inside">
          <li>
            If he has to replace an employee: if this employee is absent or his
            employment contract has been suspended for example. Note that the
            employer is not required to assign the recruited person to the exact
            same tasks;
          </li>
          <li>
            {" "}
            If the company experiences a temporary increase in its activity.
            Exceptional order, urgent work, any temporary increase in activity
            can justify the use of a fixed-term contract. However, it is not
            mandatory that this reason be of an exceptional nature or that the
            recruited employee be assigned to carry out these tasks;
          </li>
          <li>
            {" "}
            In the case of seasonal work or if it is defined by decree or
            convention that it is customary not to use a permanent contract. The
            seasonal contract is the oldest contract in the world. It is mainly
            agricultural or tourist. The 2016 Labor Law offers a definition: it
            concerns activities whose tasks are expected to be repeated each
            year according to a roughly fixed frequency, depending either on the
            seasons or on collective lifestyles.{" "}
          </li>
          <li>
            For the replacement of a business manager, a person exercising a
            liberal profession, their spouse effectively participating in the
            activity of the business in a professional and habitual capacity or
            a non-salaried partner of a company or any other legal entity
            exercising a liberal profession;
          </li>
          <li>
            For the replacement of the head of a farm or fish farm (among
            others) or another person participating in the activity of the
            company;
          </li>
          <li>
            For the recruitment of engineers and executives to achieve a defined
            objective, when an extended branch agreement allows it;
          </li>
          <li>
            To recruit certain categories of unemployed people. Seniors are an
            example;
          </li>
          <li>
            If the employer undertakes, for a period and under conditions
            determined by decree, to provide additional professional training to
            the employee.
          </li>
        </ul>

        <p>
          These conditions are imposed by law, a lawyer can advise you and
          ensure whether or not your case meets one of these criteria.
        </p>
      </div>
    ),
  },
  {
    question: "What is the maximum duration of a fixed-term contract? ",
    answer: (
      <div className="space-y-4">
        <p>
          First of all, and even if it may seem obvious, it is important to
          remember that a fixed-term contract ends when it reaches its term.
        </p>
        <p>
          Contrary to popular belief, the maximum duration of a fixed-term
          contract can in certain cases exceed 18 months.
        </p>
        <p>
          In fact, depending on the type of contract (specific term or no
          specific term) and the justification for employing a person on a
          fixed-term contract, this maximum duration may vary.
        </p>
        <p>For fixed-term contracts with a defined expiry date:</p>

        <ul className="list-disc space-y-2 list-inside">
          <li>18 months : maximum duration of most fixed-term contracts;</li>
          <li>
            9 months : when the contract is concluded pending the arrival of an
            employee recruited on a permanent contract;
          </li>
          <li>
            24 months : if the contract is performed abroad, if it is concluded
            as part of the permanent departure of an employee before the
            elimination of his position or in the event of an exceptional
            increase in activity.
          </li>
        </ul>

        <p>
          In some cases, a fixed-term contract without a specific term may be
          set up. In this case, the maximum duration of the fixed-term contract
          may last:
        </p>

        <ul className="list-disc space-y-2 list-inside">
          <li>Until the return of the replaced employee</li>
          <li>
            Until the achievement of the purpose for which it was concluded.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Is there a trial period for fixed-term contracts? ",
    answer: (
      <div className="space-y-4">
        <p>Yes, the fixed-term contract can include a trial period .</p>

        <p>
          Unless there are customs or agreements which provide for shorter
          durations, the calculation of the trial period is as follows: 1 day of
          trial period per week of fixed-term contract.
        </p>
        <p>This duration cannot exceed:</p>

        <ul className="list-disc space-y-2 list-inside">
          <li>2 weeks for fixed-term contracts of 6 months or less</li>
          <li>1 month for fixed-term contracts of more than 6 months</li>
        </ul>

        <p>
          For fixed-term contracts without a specific term, the trial period is
          calculated in relation to the minimum duration of the contract.
        </p>
      </div>
    ),
  },
  {
    question:
      "How many times can I renew the fixed-term contract of one of my employees?",
    answer: (
      <div className="space-y-4">
        <p>
          A fixed-term contract (CDD) can be renewed by amendment under certain
          conditions. A CDD can only be renewed twice and within a maximum
          duration.
        </p>

        <h2 className="text-xl font-bold">Fixed-term fixed-term contract</h2>

        <p>
          If the fixed-term contract has a term (specific expiry date), it can
          only be renewed twice. In this case, renewal is possible either:
        </p>

        <ul className="list-disc space-y-2 list-inside">
          <li>Because a clause in the contract provides for it,</li>
          <li>
            Because an amendment is offered to the employee before the end of
            his contract.
          </li>
        </ul>

        <p>
          The renewal of the fixed-term contract is possible provided that the
          total duration of the fixed-term contract (including its renewal) does
          not exceed the maximum authorized duration :
        </p>

        <ul className="list-disc space-y-2 list-inside">
          <li>18 months in most cases,</li>
          <li>
            or 9 months when the contract is concluded pending the arrival of an
            employee recruited on a permanent contract ,
          </li>
          <li>
            or 24 months if the contract is performed abroad, if it is concluded
            as part of the permanent departure of an employee before the
            elimination of his position or in the event of an exceptional
            increase in activity.
          </li>
        </ul>

        <p>
          When the contract continues after the end of the fixed-term contract,
          it automatically becomes a permanent contract and the employee retains
          the seniority acquired during the fixed-term contract. Failure to
          comply with the renewal conditions results in the reclassification of
          the fixed-term contract as a permanent contract .
        </p>

        <h1 className="text-xl font-bold">
          Fixed-term contract without a specific term
        </h1>
        <p>
          It is possible to sign a fixed-term contract without a specific term
          in the following cases:
        </p>

        <ul className="list-disc space-y-2 list-inside">
          <li>Replacement of an absent employee,</li>
          <li>
            Replacement of an employee whose employment contract is suspended,
          </li>
          <li>
            Waiting for the arrival of an employee recruited on a permanent
            contract ,
          </li>
          <li>Recruitment of seasonal employees,</li>
          <li>
            Replacement of a head of a craft, industrial or commercial business,
            of a person exercising a liberal activity,
          </li>
          <li>Replacement of the head of a farm.</li>
        </ul>

        <p>
          In these cases, the fixed-term contract is concluded for a minimum
          period (which must be specified in the contract). It can last:
        </p>

        <ul className="list-disc space-y-2 list-inside">
          <li>Until the return of the replaced employee</li>
          <li>
            Until the achievement of the purpose for which it was concluded.
          </li>
        </ul>

        <p>
          Failure to comply with the renewal conditions will result in the
          reclassification of the fixed-term contract as a permanent contract .
        </p>
      </div>
    ),
  },

  {
    question:
      "My employee's fixed-term contract has just ended. Can I immediately sign another fixed-term contract with him? ",
    answer: (
      <div className="space-y-4 ">
        <p>
          No, it is not possible to use "successive fixed-term contracts" for
          the same position, at the risk of seeing the fixed-term contract
          reclassified as a permanent contract . A waiting period must be
          respected.
        </p>
        <p>This waiting period is equal to:</p>

        <ul className="list-disc space-y-2 list-inside">
          <li>
            One third of the duration of the expired contract – for contracts of
            more than 14 days*, including renewals
          </li>
          <li>
            Half the duration of the expired contract – for contracts of less
            than 14 days*, including renewals. ( *The days taken into account
            are those on which the company was open)
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "My employee on a fixed-term contract is committing serious misconduct. Is he/she eligible for dismissal? ",
    answer: (
      <div className="space-y-4 ">
        <p>
          Yes, an employer can dismiss an employee on a fixed-term contract for
          serious misconduct . This is known as " early termination of a
          fixed-term contract ," with the term "dismissal" being reserved for
          permanent contracts. The employer who terminates must follow the
          adversarial procedure and then be able to prove the employee's serious
          misconduct, which must be mentioned in the termination letter.
        </p>
        <p>
          The employer must then scrupulously respect the procedures in place.
          These procedures are similar to those for dismissal for serious
          misconduct (CDI) .{" "}
        </p>
        <p> The employer must:</p>

        <ul className="list-disc space-y-2 list-inside">
          <li>Summon the employee on a fixed-term contract;</li>
          <li>
            Notify the employee on a fixed-term contract: The content of this
            notification letter is extremely important. In the event of an
            industrial tribunal case, only the grounds stated in this letter
            will be considered by the judges. A lawyer will be able to advise
            and assist you in drafting this letter.
          </li>
        </ul>

        <p>
          {" "}
          In the event of proven serious misconduct by the employee, the
          employer:
        </p>

        <ul className="list-disc space-y-2 list-inside">
          <li>Not required to pay termination compensation;</li>
          <li>Not required to pay compensatory indemnity for notice;</li>
          <li>
            Is required to pay the precariousness compensation for the first
            part of the fixed-term contract if the fault was discovered during a
            renewal period;
          </li>
          <li>Is required to pay the compensatory holiday pay.</li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "Does a part-time employee on a fixed-term contract have the same rights as others within the company? ",
    answer: (
      <div className="space-y-4 ">
        <p>
          A part-time employee on a fixed-term contract has the same rights as
          other employees within the company.
        </p>

        <p>
          Thus, the duration of his trial period cannot be longer than that of a
          full-time employee (it is calculated in the same way); his
          remuneration must be proportional to that of a full-time employee with
          the same qualifications and in the same position, etc.
        </p>
        <p>
          It should be noted, however, that in certain cases, a part - time
          employee on a fixed - term contract may hold several jobs(on this
          subject, see question 3).
        </p>
      </div>
    ),
  },
  {
    question:
      "My employee tells me he has found a permanent contract even though he is currently on a fixed-term contract. Does he have the right to leave his position? ",
    answer: (
      <div className="space-y-4 ">
        <p>
          Yes, an employee on a fixed-term contract who has found a permanent
          contract can terminate the fixed-term contract before the end of the
          term . The employee must provide their employer with proof ( promise
          of permanent employment or employment contract).
        </p>

        <p>
          Unless there is an employee-company agreement, the employee must
          observe a notice period , the duration of which is calculated as
          follows: 1 day per week worked within the company, taking into
          account:
        </p>

        <ul className="list-disc space-y-2 list-inside">
          <li>
            The total duration of the contract, including renewal if the
            fixed-term contract has a specific term
          </li>
          <li>
            The duration worked if the fixed-term contract does not have a
            specific term.
          </li>
          <li>In both cases, the notice period cannot exceed two weeks.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "How to get a fixed-term contract?",
    answer: (
      <div className="space-y-4 ">
        <ol className="list-decimal space-y-2 list-inside">
          <li>
            Answer the questionnaire relating to the fixed-term contract on our
            site
          </li>
          <li>
            We will put you in touch with a lawyer specializing in employment
            law who will advise you and answer your questions by telephone.
          </li>
          <li>
            The lawyer draws up your fixed - term contract, personalized and
            adapted to your employee and your company
          </li>
        </ol>
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
