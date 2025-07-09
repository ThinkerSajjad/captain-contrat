"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare } from "lucide-react";

const contractLawFaqs = [
  {
    question: "Introduction",
    answer: (
      <div className="space-y-4">
        <p>
          Contract law is one of the major areas of general private law that
          governs one of the most widely used legal tools in everyday life: the
          contract. It is an agreement between two people who agree to respect
          certain obligations towards each other. In a sales contract, for
          example, one party undertakes to deliver the goods sold, and the other
          undertakes to pay the proposed amount.
        </p>
        <p>
          <strong>Contract law</strong> is the foundation of many other legal
          fields (commercial law, distribution law, real estate law, etc.) as it
          is so cross-disciplinary. While the subject is of interest to both
          individuals (purchasing goods, leasing a vehicle, etc.) and
          professionals (providing services, partnerships, etc.), it is of
          particular interest to the business community. Indeed, the creation
          and development of a business are unthinkable without the security of
          exchanges and commercial relations.
        </p>
        <p>
          This protection is provided by the drafting of commercial contracts,
          governed by both contract law and commercial law, a subject that
          governs commercial activity in its entirety. However, it is{" "}
          <strong>a contract law attorney</strong> who can offer you the best
          protection in this area.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
  },
  {
    question: "What is a contract lawyer?",
    answer: (
      <div className="space-y-4">
        <p>
          <strong>The contract law lawyer</strong> has of course followed
          in-depth courses in private law (civil law and law of obligations)
          since they constitute the basis of the legal training of all lawyers.
          This is the only way for him to acquire solid and exhaustive
          knowledge, essential for any specialization. The contract law lawyer
          then deepened the subject by specializing{" "}
          <strong>in both contract law and commercial law</strong>, two subjects
          which interact constantly.
        </p>
        <p>
          This dual specialization is essential to enable{" "}
          <strong>the contract law attorney</strong> to have the most detailed
          analysis in matters of commercial contracts.
        </p>
        <p>
          Like every legal professional, contract lawyers put their knowledge
          into practice to develop and refine it. This is an essential step for
          a lawyer to present themselves as an expert in the field.
        </p>
        <p>
          To do this, he has supported entrepreneurs, whether they are artisans,
          traders or consultants to help them concretely build their project. He
          has secured their activity by drafting commercial contracts of all
          types (service provision, partnership, subcontracting, etc.). He has
          considered them through the prism of a multitude of sectors of
          activity (construction, liberal professions, commerce, etc.). He has
          also negotiated them in front of numerous profiles (partners, clients,
          competitors, large groups).
        </p>
        <p>
          It is thanks to both his training and his experience that{" "}
          <strong>the contract law lawyer</strong> is able to advise you in the
          most relevant way.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-green-500" />,
  },
  {
    question:
      "The different areas of intervention of the lawyer in contract law",
    answer: (
      <div className="space-y-4">
        <p>
          The role of the contract law lawyer is to{" "}
          <strong>negotiate the content of business contracts</strong> (service
          provision contract, partnership contract, distribution contract, web
          design contract, etc.) in order to assert your interests against those
          of your co-contractor through the insertion of beneficial clauses,
          perfectly adapted to your situation. He also has the mission of
          drafting it for you in order to ensure its legal validity, which is
          essential in the event of conflict with your commercial partners.
        </p>
        <p>
          The commercial contract is the most effective instrument for securing
          your business. Often considered a cost, it is actually a saving for
          the future: precisely framing your relationships in writing means
          avoiding disputes and litigation before the courts.
        </p>

        <div className="space-y-3">
          <div>
            <h4 className="font-semibold underline">
              Service provision contract
            </h4>
            <p>
              It connects a service provider, who provides specific work, and
              their client who requests this service. Its importance is
              considerable for both parties but particularly for the service
              provider since it allows defining the price, duration and deadline
              of the service. Above all, it precisely describes the criteria
              that allow the service to be considered as delivered.
            </p>
          </div>

          <div>
            <h4 className="font-semibold underline">Partnership contract</h4>
            <p>
              It contractualizes the commitment of two partners in developing a
              project, by pooling their resources. While one guarantees
              themselves a source of income, the other knows exactly what they
              will spend since the contract gives them a long-term vision. Above
              all, it takes into account the specificity of the activity and the
              profile of the partners.
            </p>
          </div>

          <div>
            <h4 className="font-semibold underline">
              Business referral contract
            </h4>
            <p>
              When a company uses an intermediary to connect them with one or
              more people in order to conclude a contract, they must have a
              business referral contract drafted. The interest of the latter
              mainly lies in determining the remuneration of the business
              referrer as well as the scope of their mission, that is to say
              what the company expects from them.
            </p>
          </div>

          <div>
            <h4 className="font-semibold underline">Subcontracting contract</h4>
            <p>
              It frames the agreement between a client and a subcontractor who
              must carry out production and/or service acts on behalf of the
              client. Very little regulated by law, it presents considerable
              risks for each of the parties. Drafting such a contract by a
              lawyer is the only way to secure this relationship.
            </p>
          </div>

          <div>
            <h4 className="font-semibold underline">
              Commercial agent contract
            </h4>
            <p>
              Unlike the business referrer who simply presents clients to a
              company with a view to concluding contracts in which they do not
              participate, the commercial agent is mandated to represent the
              company in concluding these contracts. They negotiate and sign the
              contract on behalf of the company. The risk is all the greater. It
              is therefore absolutely necessary to frame the company's
              requirements and the commercial agent's missions in order to avoid
              finding yourself committed to an unwanted contract.
            </p>
          </div>
        </div>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-purple-500" />,
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
    icon: <MessageSquare className="h-5 w-5 text-red-500" />,
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
            throughout your case. They contact you to better identify your need,
            specifying your budget and your legal issues. Thanks to this
            information, they can identify the most competent lawyer to meet
            your need. They play a real intermediary role between you and the
            lawyer.
          </li>
          <li>
            <strong>Get a quoted estimate within 24 hours</strong>: the selected
            lawyer contacts you and asks for additional information to provide
            you with a quoted estimate within 24 hours.
          </li>
        </ol>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-blue-600" />,
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
    icon: <MessageSquare className="h-5 w-5 text-orange-500" />,
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
    icon: <MessageSquare className="h-5 w-5 text-indigo-500" />,
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
    icon: <MessageSquare className="h-5 w-5 text-gray-500" />,
  },
  {
    question: "How do our partner lawyers offer preferential rates?",
    answer: (
      <div className="space-y-4">
        <p>
          Preferential rates are justified by lower management costs for lawyers
          who use the Captain Contract platform.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-teal-500" />,
  },
];

export function FAQ() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="lg:text-5xl text-4xl font-bold text-center text-[#1a365d] mb-12">
          Find answers to the most frequently asked questions about contract law
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {contractLawFaqs.map((faq, index) => (
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
