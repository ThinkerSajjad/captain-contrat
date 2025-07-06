"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare } from "lucide-react";

const commercialLawFaqs = [
  {
    question: "Introduction",
    answer: (
      <div className="space-y-4">
        <p>
          Why hire a <strong>commercial lawyer</strong>? Maintaining business
          relationships and developing a professional and commercial activity
          requires respect for and understanding of applicable law.
        </p>
        <p>
          For example, if you sell products that you purchase, you will need to
          enter into a distribution agreement. Distribution law is a branch of
          commercial law. Your lawyer will advise you on the most appropriate
          and protective clauses in your situation.
        </p>
        <p>
          In France, <strong>commercial law</strong> is constantly evolving. It
          is therefore essential to stay up-to-date with the latest laws and
          regulations in this area. Consulting an expert lawyer is a good way to
          obtain quality and comprehensive information.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
  },
  {
    question: "What is a commercial lawyer?",
    answer: (
      <div className="space-y-4">
        <p>
          A commercial lawyer is the primary contact in a business. They are
          most often involved during the course of your business and are
          interested in all the <strong>commercial relationships</strong> you
          may have established (contracts, commercial leases, credits, etc.).
          Using such a lawyer allows you to:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Create a legal framework for your business relationships</li>
          <li>Protect yourself from unforeseen market events</li>
          <li>
            Be represented in court and defend your interests in the event of
            prosecution
          </li>
          <li>
            Engaging the civil/commercial liability of your partners (supplier,
            bank, etc.)
          </li>
        </ul>
        <p>
          In the event of <strong>disputes with a business partner</strong>{" "}
          (litigation), he will most often be called upon to represent your
          interests before the commercial court or before the district court (if
          the liability involved is of a civil nature) but upstream, the lawyer
          allows you to negotiate with the opposing party and very often to
          reach an agreement.
        </p>
        <p>
          To practice his profession, the commercial lawyer relies on the
          various provisions of the <strong>Commercial Code</strong>, but also
          of the <strong>Civil Code</strong> (law of obligations) and remains up
          to date with legal news and the constant evolution of the legal
          context of commerce.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-green-500" />,
  },
  {
    question: "The different areas of intervention of a commercial law lawyer",
    answer: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold underline">Commercial acts</h4>
          <p>He knows the law applicable to each commercial act carried out:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Commercial acts by nature: purchase and resale of goods,
              transport, banking, insurance operations, brokerage contracts,
              etc.
            </li>
            <li>
              Ancillary commercial acts: purchase of equipment or machinery from
              a manufacturer, purchase of a delivery truck, etc.
            </li>
            <li>
              Commercial acts by form: bills of exchange, acts of commercial
              companies by form...
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold underline">
            Commercial contracts (distribution agreements, sales,
            subcontracting, etc.)
          </h4>
          <p>
            These are contracts governed by the French Commercial Code. A
            commercial lawyer is therefore able to negotiate for you:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Commercial/selective distribution contracts</li>
            <li>Commercial leases</li>
            <li>Supply or procurement contracts</li>
            <li>Franchise contracts</li>
            <li>Service provision contracts</li>
            <li>Subcontracting contracts</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold underline">Obtaining credits</h4>
          <p>
            He obtains for you the type of credit most suited to your
            professional activity:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Current account credit: assistance with financing current assets
            </li>
            <li>
              Fixed-term advance: type of current account credit that avoids the
              risk of upward variations
            </li>
            <li>
              Fixed-rate loan: used to finance investments in fixed assets
              (equipment, industrial and craft installations)
            </li>
            <li>
              Margin account: used to cover operating margins necessary for cash
              management
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold underline">Debt collection</h4>
          <p>
            In case of accumulation of debts from a succession of unpaid bills
            from your contractors, it is possible to use several forms of
            collection:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Reminder letter</li>
            <li>Formal notice to pay</li>
            <li>Payment injunction</li>
            <li>Bailiff visit</li>
            <li>Seizure</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold underline">Commercial leases</h4>
          <p>
            Commercial leases are very sought after in the business world since
            the majority of French companies do not own their own premises. An
            attorney will help you with:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contract object</li>
            <li>Duration</li>
            <li>Initial rent amount</li>
            <li>Security deposit</li>
            <li>Inventory of fixtures</li>
            <li>Green annex</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold underline">Collective procedures</h4>
          <p>
            The lawyer will represent and defend your company from creditor
            prosecutions in procedures such as judicial reorganization,
            safeguard, or judicial liquidation.
          </p>
        </div>

        <div>
          <h4 className="font-semibold underline">Industrial property</h4>
          <p>
            Intellectual and industrial property law covers trademarks, logos,
            and protected designs and models. An attorney can file your
            industrial property with the National Institute of Intellectual
            Property.
          </p>
        </div>

        <div>
          <h4 className="font-semibold underline">
            Business sale simplification
          </h4>
          <p>
            The Macron law of August 6, 2015 simplified the administrative
            formalities for business transfers. A business transfer follows a
            strict procedure that should not be taken lightly.
          </p>
        </div>

        <div>
          <h4 className="font-semibold underline">Law of obligations</h4>
          <p>
            Contract law, or law of obligations, is public policy. All your
            commercial documents must comply with contractual rules in the Civil
            Code.
          </p>
        </div>

        <div>
          <h4 className="font-semibold underline">Payment and guarantees</h4>
          <p>
            Commercial law contains numerous provisions regarding invoicing
            rules. Your lawyer provides useful clauses to insert in a commercial
            contract to avoid the creation of debts.
          </p>
        </div>

        <div>
          <h4 className="font-semibold underline">Litigation</h4>
          <p>
            The commercial law attorney represents and/or defends your interests
            before the commercial court or district court, including during
            preliminary amicable dispute resolution phases.
          </p>
        </div>

        <div>
          <h4 className="font-semibold underline">Copyright</h4>
          <p>
            If your activity involves producing works of the mind, the
            commercial law attorney can file your copyrights with the INPI and
            help avoid infringement issues.
          </p>
        </div>

        <div>
          <h4 className="font-semibold underline">
            Simplified bailiff collection procedure for small debts
          </h4>
          <p>
            For debts under €4,000, a simplified collection procedure through a
            bailiff can be used to obtain an enforceable title without going to
            commercial court.
          </p>
        </div>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-purple-500" />,
  },
  {
    question: "What is a competition law attorney?",
    answer: (
      <div className="space-y-4">
        <p>
          Competition law encompasses all legal rules aimed at ensuring the
          maintenance of fair competition between economic actors or sanctioning
          obstacles they bring, intentionally or not, to the free play of the
          economic market.
        </p>
        <p>
          Although competition law is a branch of business law, it touches on
          other legal disciplines such as European Union law, contract law,
          economic law, etc. The application of competition law is ensured in
          France by an independent administrative authority, the Competition
          Authority, and by the judge.
        </p>
        <p>
          <strong>The competition law attorney</strong> is essential to help you
          comply with regulations or to defend you in the context of a dispute.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-red-500" />,
  },
  {
    question: "What is an unfair competition lawyer?",
    answer: (
      <div className="space-y-4">
        <p>
          <strong>The unfair competition lawyer</strong> is a competition law
          attorney specialized in the field of unfair competition and therefore
          abusive commercial practices.
        </p>
        <p>
          They have followed general business law training, then specialized in
          unfair competition law along the way.
        </p>
        <p>
          Unfair competition law is a branch of competition law and therefore
          depends on business law. It is the set of legal rules aimed at
          sanctioning abusive commercial practices implemented between
          companies.
        </p>
        <p>
          Unlike other competition infractions (abuse of dominant position,
          illegal agreement, etc.), unfair competition is sanctioned by the
          Civil Code on the basis of extracontractual liability. There are 4
          abusive commercial practices: denigration, imitation, disorganization
          and parasitism.
        </p>
        <p>
          The main mission of <strong>the unfair competition lawyer</strong> is
          to avoid the implementation of abusive commercial practices within
          your company. Concretely, they ensure that no competitive process used
          within your company can cause harm to your competitors.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-orange-500" />,
  },
  {
    question: "Some useful resources",
    answer: (
      <div className="space-y-4">
        <p>
          Discover articles written by <strong>our partner lawyers</strong>: How
          to negotiate the sale of your business, by Me Robelin
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-indigo-500" />,
  },
  {
    question: "Do we deal with individuals?",
    answer: (
      <div className="space-y-4">
        <p>
          The lawyers in our partner network exclusively support all{" "}
          <strong>entrepreneurs</strong> (business creators, SME and small
          business managers) in their legal procedures. We do not offer support
          for individuals.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-teal-500" />,
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
    icon: <MessageSquare className="h-5 w-5 text-cyan-500" />,
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
    icon: <MessageSquare className="h-5 w-5 text-pink-500" />,
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
    icon: <MessageSquare className="h-5 w-5 text-yellow-500" />,
  },
];

export function FAQ() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="lg:text-5xl text-4xl font-bold text-center text-[#1a365d] mb-12">
          Find answers to the most frequently asked questions about commercial
          law
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {commercialLawFaqs.map((faq, index) => (
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
