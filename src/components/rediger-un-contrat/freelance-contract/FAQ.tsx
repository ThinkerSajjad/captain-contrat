"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// I want to sign a freelance contract, what should I do?

// 1. You answer a questionnaire tailored to your request on our site

// 2. We put you in touch with a lawyer who will answer your questions, advise you and provide you with their expertise

// 3. The lawyer draws up your personalized freelance contract adapted to your situation

const faqs = [
  {
    question: "What is a freelance contract?",
    answer: (
      <div className="space-y-4">
        <p>
          Unlike employees who have fixed-term or permanent contracts ,
          freelance workers do not have a long-term contract. The employment
          contract in social law is characterized by a relationship of
          subordination between the employer and the employee. The latter, by
          virtue of this relationship of subordination, is required to respect
          the requests of his superiors. This notion of subordination does not
          exist in the case of a freelance contract . The existence of such a
          relationship in practice would result in a reclassification of the
          freelance contract into a classic employment contract of the
          fixed-term or permanent type. We are also talking about a
          client-freelance relationship in which the latter is free to accept or
          not the missions proposed by the former. The client cannot therefore
          impose schedules or a particular work organization. On the other hand,
          as soon as the mission is accepted by the freelancer, the latter must
          comply with the specifications induced by the mission and the client.
        </p>

        <p>
          A freelance contract is therefore more similar to a service provision
          contract , in which we find the different missions that the freelancer
          invoices to his client, the terms of execution of the mission as well
          as the obligations and guarantees of each of the parties concerned.
        </p>
      </div>
    ),
  },
  {
    question: "What status for freelancers?",
    answer: (
      <div className="space-y-4">
        <p>
          A freelancer, as previously mentioned, is an independent worker.
          However, they must choose a legal status in order to launch their
          business. Freelancers have several options: they can start with a
          salary portage, but they can also create a sole proprietorship, a
          single-member company (SASU or EURL), or even an EIRL.
        </p>
        <p>
          The freelancer's choice of social status will have consequences,
          particularly in terms of taxation, liability, and social security
          coverage. Several factors will guide the freelancer in choosing their
          status: creation formalities, the fate of the company's assets,
          administrative management, tax benefits, and the choice of activity.
        </p>
        <p>
          It is therefore advisable for a future freelancer to first consult an
          expert so that the latter can advise them on a status that will best
          suit their activity, their needs and their expectations.
        </p>
      </div>
    ),
  },
  {
    question:
      "So is there a difference between a freelance contract and a service contract?",
    answer: (
      <div className="space-y-4">
        <p>
          In reality, not really, the service provision contract is the form of
          contract used by freelancers. This type of contract has the advantage
          of clearly specifying the tasks, guarantees, and obligations of the
          company and the freelancer to whom it turns.
        </p>
        <p>
          In service-based professions, the English term freelance is very
          popular, hence the notion of freelance contract . In French, however,
          it is neither more nor less than a service provision contract .
        </p>
      </div>
    ),
  },
  {
    question:
      "Should we consider a risk of reclassification as an employment contract? ",
    answer: (
      <div className="space-y-4">
        <p>
          Let us remember that the status of a freelancer is that of an
          independent worker . In other words, there is no relationship of
          subordination between the freelancer and a third party.
        </p>
        <p>
          However, if the freelance contract imposes overly restrictive working
          hours or guidelines, particularly regarding the service provider's
          tasks, there is a real risk that the freelance contract will be
          reclassified as an employment contract .
        </p>
      </div>
    ),
  },
  {
    question: "What are the key clauses to pay attention to?",
    answer: (
      <div className="space-y-4">
        <p>
          As mentioned previously, the freelance contract benefits from
          contractual freedom. However, certain standards must be included.
          These include the clause specifying the duration of the assignment,
          the service provider's compensation, and the terms of payment. The
          reciprocal independence clause is also particularly important, since
          it is this independence that characterizes the freelance contract.
        </p>
        <p>
          Pay particular attention to non-competition clauses ; payment
          deadlines; intellectual property; obligation of means; penalties and
          professional civil liability.
        </p>

        <p>
          Many details in these clauses must be read carefully to verify that no
          clause contains ambiguous elements specific to contractual freedom,
          and has been inserted to the detriment of one or other of the two
          parties.
        </p>
      </div>
    ),
  },

  {
    question: "How is the remuneration of a freelance worker defined? ",
    answer: (
      <div className="space-y-4 ">
        <p>
          Freelance compensation is not a salary. In this sense, there is no
          minimum payment requirement. It is freely negotiated between the
          client and the freelancer. There are typically two ways to bill
          freelance work.
        </p>

        <ul className="list-disc space-y-2 list-inside">
          <li>
            The first is billing based on time spent. The freelancer estimates
            the time it will take to complete the task assigned to them and
            offers their client hourly or daily billing. The risk is that we can
            sometimes misjudge the time it will take to complete the task
            assigned to us, and thus end up losing out given the time invested.
          </li>
          <li>
            The second is billing based on the fixed price of the task. The
            freelancer sets a price for the task in advance, which is then
            payable to the client. This is a good way to bill repetitive tasks
            for which the completion time is well known (for example, creating a
            logo). This is also an approach that is often preferred by companies
            because it is more transparent. However, here too, if the time
            required to complete the task is poorly estimated, the freelancer
            quickly becomes a loser.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Does the freelance worker have specific obligations",
    answer: (
      <div className="space-y-4 ">
        <p>
          A freelancer is an independent worker who has no obligation to accept
          a job if it doesn't suit them. However, they do have accounting and
          insurance obligations.
        </p>

        <ul className="list-disc space-y-2 list-inside">
          <li>
            When the freelancer has company status, his accounting obligations
            range from keeping several journals (purchase, sales, bank, etc.) to
            filing annual accounts with the commercial court registry.
          </li>
          <li>
            As for insurance requirements, many freelancers are required to have
            liability insurance.
          </li>
          <li>
            Finally, other obligations may be imposed on the freelancer in the
            contracts he signs with his clients (particularly in non-disclosure
            and non-competition clauses).
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "I want to cancel the contract: is this possible?",
    answer: (
      <div className="space-y-4 ">
        <p>
          Like any traditional contract, the freelance contract has a duration .
          It can end when the service for which it was contracted has been
          completed, or it can cover a set of successive missions for a fixed
          period.
        </p>

        <p>
          It is also recommended to include a termination clause to anticipate
          any contractual non-performance by either party. Termination of a
          freelance contract is therefore impossible. Providing such a clause is
          strongly recommended to avoid finding yourself contractually bound in
          a relationship without any real added value.
        </p>
      </div>
    ),
  },
  {
    question: "What are the advantages of a freelance contract?",
    answer: (
      <div className="space-y-4 ">
        <p>
          Freelance contracts have obvious advantages. First and foremost, they
          offer a chance to achieve a degree of professional independence
          without having to afford to start your own business. Indeed, this type
          of contract allows for greater flexibility in terms of hours and
          workload: it depends on you (when and how much you work).
        </p>

        <p>
          Ultimately, we can say that the freelance contract offers more freedom
          and autonomy, and in this sense allows you to perfect certain skills
          such as negotiation or even income control.
        </p>
      </div>
    ),
  },
  {
    question:
      "What is the procedure to follow before signing a freelance contract?",
    answer: (
      <div className="space-y-4 ">
        <p>
          You must first choose the legal form your company will take: You will
          have the choice between EURL (single-member limited liability company)
          or SASU (simplified joint-stock company). It is best to consult a
          lawyer to choose the most appropriate form for your business or tax
          regime.
        </p>

        <p>
          Indeed, opting for a single-person company form seems to be the most
          effective compromise .
        </p>
      </div>
    ),
  },

  {
    question: "I want to sign a freelance contract, what should I do?",
    answer: (
      <div className="space-y-4 ">
        <p>
          1. You answer a questionnaire tailored to your request on our site
        </p>

        <p>
          2. We put you in touch with a lawyer who will answer your questions,
          advise you and provide you with their expertise
        </p>

        <p>
          3. The lawyer draws up your personalized freelance contract adapted to
          your situation
        </p>
      </div>
    ),
  },

  {
    question: "How do your partner lawyers offer preferential rates?",
    answer: (
      <div className="space-y-4 ">
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
