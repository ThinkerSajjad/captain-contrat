"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare } from "lucide-react";

const socialLawFaqs = [
  {
    question: "Introduction",
    answer: (
      <div className="space-y-4">
        <p>
          What are the areas of expertise of{" "}
          <strong>a lawyer specializing in labor law</strong>? The discipline of
          labor law encompasses{" "}
          <strong>labor law and all social protection</strong> issues. It is a
          highly relevant specialization in cases of disputes between an
          employee and an employer. Several areas of expertise are required to
          qualify as a labor law lawyer.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
  },
  {
    question: "What is social law?",
    answer: (
      <div className="space-y-4">
        <p>
          <strong>Social law</strong> is a particularly broad field which brings
          together two main themes:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>labor law;</li>
          <li>social protection law.</li>
        </ul>

        <div className="space-y-3">
          <div>
            <h4 className="font-semibold">Labor law</h4>
            <p>
              It concerns both the relations between the employee and his
              employer - we speak of <strong>individual work relations</strong>{" "}
              - and the relations between the employee, the employer and the
              trade union organisations - we speak of{" "}
              <strong>collective work relations.</strong>
            </p>
            <p>
              Overall, it aims to <strong>protect the employee</strong> in the
              context of his employment through the direct intervention of the
              law or through the intermediation of unions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Social protection law</h4>
            <p>
              It governs the protection of certain categories of people,
              particularly workers, in the face of an event that has an impact
              on their economic situation (
              <strong>
                work accident, illness, maternity, unemployment, retirement
              </strong>
              ). The social law lawyer is the ideal contact in this matter.
            </p>
          </div>
        </div>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-green-500" />,
  },
  {
    question: "What is an employment lawyer?",
    answer: (
      <div className="space-y-4">
        <p>
          A lawyer specializing in labor law or social law is a professional who
          specialized from the master's degree to acquire{" "}
          <strong>skills in social law</strong>, that is to say the disciplines
          that concern more particularly the{" "}
          <strong>rights of employees</strong>, and the{" "}
          <strong>
            settlement of disputes between an employer and an employee
          </strong>
          .
        </p>
        <p>
          The social law lawyer is most often present as counsel for the human
          resources services of large companies. It is also a skill that is
          found within firms that SMEs, which do not have an internal lawyer
          position, call upon more easily.
        </p>
        <p>
          <strong>The social law lawyer</strong> therefore has very strong
          expertise regarding <strong>social protection</strong>. He is able to
          monitor, draft, and advise a company in the context of implementing
          specific contracts. In the same way, he is a relevant mediator for the
          implementation of an economic social plan, in which case his mission
          is to find compromises for each party in the settlement of conflicts.
        </p>
        <p>
          Furthermore, the labor law lawyer implements careful monitoring of
          developments in the labor code and the rules governing social
          protection. He is therefore also very well informed about the
          guidelines dictated by collective agreements, and knows their changes
          through published laws.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-purple-500" />,
  },
  {
    question: "Definition of labor law",
    answer: (
      <div className="space-y-4">
        <p>
          <strong>Labor law</strong> is a specialization discipline for lawyers
          that allows them to deal with issues related to the life of a company,
          particularly regarding relations between the employer and his
          employee. It is an essential resource for organizing management and
          for human resources management.
        </p>
        <p>Among the subjects covered by labor law, we can mention:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>the drafting and monitoring of employment contracts,</li>
          <li>contract terminations and their terms,</li>
          <li>working time, recovery time, leave,</li>
          <li>workplace relations issues,</li>
          <li>remuneration matters,</li>
          <li>employee secondment,</li>
          <li>settlement of disputes whether individual or collective.</li>
        </ul>
        <p>
          <strong>The labor law lawyer is essential counsel</strong> for
          managing relations within a company. But it is also essential for a
          small company that establishes its first employment contracts, and
          which must face new managerial issues every day. Indeed, human
          resources require real comprehensive skills in terms of labor law, but
          the production of documents as well as the conditions for terminating
          employment contracts are elements that it is essential to have
          verified by a specialist.
        </p>
        <p>
          Furthermore, the contents of contracts such as trial periods granted,
          leave, remuneration, cannot be planned according to models, because
          each situation is different.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-red-500" />,
  },
  {
    question: "The different areas of intervention of the lawyer in social law",
    answer: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold">
            1. He negotiates and drafts your employment contracts
          </h4>
          <p>
            That bind an employee to his employer (fixed-term contract,
            permanent contract, package-day, etc.) in order to assert your
            interests through the insertion of tailor-made clauses. To guarantee
            their legal validity and avoid any subsequent conflict, his mission
            also consists of drafting them.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">
            2. The social law lawyer also guides you in the choices to make
            between different terminations.
          </h4>
          <p>He accompanies you in the procedures of:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>conventional termination;</li>
            <li>
              dismissal (summons, letter, notification). Given the complexity of
              the process, the social law lawyer is also essential when you
              initiate or participate in an economic dismissal (PSE, agreement
              with the Direccte, etc.).
            </li>
            <li>resignation.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">
            3. He helps you manage your relations with trade union
            organizations:
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              to be in compliance with collective labor relations such as the
              establishment of the CSE, the protection of employees.
            </li>
            <li>
              to draft internal regulations and build procedures for information
              and consultation of staff representatives.
            </li>
            <li>
              in the implementation of collective negotiations with trade union
              organizations.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">
            4. The social law lawyer represents you in court in the context of
            your legal conflicts.
          </h4>
          <p>
            Competent before labor courts but also in administrative procedure,
            the social law lawyer is an effective representative in matters of
            social law litigation.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              He guides you on the most relevant choices to make, your strategy;
            </li>
            <li>He drafts the mandatory documentation;</li>
            <li>
              He helps you follow all the procedural rules which are of
              particular complexity.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">
            5. At the end of the procedure, the social law lawyer helps you
            implement the judgment rendered in your favor.
          </h4>
        </div>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-blue-600" />,
  },
  {
    question: "Do we deal with individuals?",
    answer: (
      <div className="space-y-4">
        <p>
          The lawyers in our partner network exclusively support all{" "}
          <strong>entrepreneurs</strong> (business creators, SME and
          medium-sized enterprise managers) in their legal procedures. We do not
          offer support for individuals.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-orange-500" />,
  },
  {
    question: "How does connecting with a lawyer work?",
    answer: (
      <div className="space-y-4">
        <p>
          The connection process takes place in <strong>4 steps</strong>:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>Answer our legal questionnaire in 5 minutes</strong>: this
            questionnaire allows us to qualify your need and thus choose the
            specialized lawyer.
          </li>
          <li>
            <strong>Discover the lawyers selected for you</strong>: a selection
            of lawyers who can respond to your problem is presented to you.
          </li>
          <li>
            <strong>
              An entrepreneurial coach calls you to discuss your project
            </strong>
            : an entrepreneurial coach from the platform accompanies you
            throughout your case. He contacts you to better identify your need,
            specifying your budget and your legal issues. Thanks to this
            information, he can identify the most competent lawyer to meet your
            need. He plays a real intermediary role between you and the lawyer.
          </li>
          <li>
            <strong>Get a quoted estimate within 24 hours</strong>: the selected
            lawyer contacts you and asks for additional information to provide
            you with a quoted estimate within 24 hours.
          </li>
        </ol>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-indigo-500" />,
  },
  {
    question: "What is the role of the entrepreneurial coach?",
    answer: (
      <div className="space-y-4">
        <p>
          After discovering the lawyer selected by the platform, the
          entrepreneurial coaches call you to better specify your need by
          analyzing your deadline, your budget and your legal issues. Thanks to
          this information, they can identify the most competent lawyer to meet
          your need.
        </p>
        <p>
          They have a real <strong>intermediary role</strong> between the client
          and the lawyer throughout the case.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-gray-500" />,
  },
  {
    question: "How is pricing defined?",
    answer: (
      <div className="space-y-4">
        <p>
          Each lawyer freely sets their fees. The criteria used to set fees are
          the complexity of the case, the time spent on the case, the
          specialization and reputation of the lawyer. In France, the average
          hourly rate is between €180-250 excluding tax.
        </p>
        <p>
          Furthermore, as part of their support, the sales team discusses with
          the lawyer, communicates your need and your budget and follows the
          progress of the case step by step. They are the intermediary between
          you and our network of lawyers. This is why the total price also
          includes Captain Contract service fees.
        </p>
        <p>
          We work daily with a hundred lawyers who specialize in business issues
          like yours. Thanks to the cases we send them regularly and our
          relationships, they are able to offer more attractive rates.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-teal-500" />,
  },
  {
    question: "How does the first call with the lawyer go?",
    answer: (
      <div className="space-y-4">
        <p>
          The first call with the lawyer is free. It allows you to present your
          need in more detail, so the lawyer can ask you questions and get more
          precise knowledge of your legal problem.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-cyan-500" />,
  },
  {
    question: "*How do our partner lawyers offer preferential rates?",
    answer: (
      <div className="space-y-4">
        <p>
          Preferential rates are justified by lower management costs for lawyers
          who use the Captain Contract platform.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-pink-500" />,
  },
];

export function FAQ() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="lg:text-5xl text-4xl font-bold text-center text-[#1a365d] mb-12">
          Find answers to the most frequently asked questions about labor law
          and social law
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {socialLawFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-lightPrimary rounded-lg border-none px-6 cursor-pointer data-[state=open]:bg-lightPrimary transition-all duration-300"
            >
              <AccordionTrigger className="hover:no-underline py-6 cursor-pointer transition-all duration-300">
                <div className="flex items-center gap-3 text-left lg:text-lg text-base">
                  {faq.icon}
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
