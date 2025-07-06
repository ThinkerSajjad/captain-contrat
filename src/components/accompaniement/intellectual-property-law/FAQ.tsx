"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare } from "lucide-react";

const intellectualPropertyLawFaqs = [
  {
    question: "Introduction",
    answer: (
      <div className="space-y-4">
        <p>
          <strong>Intellectual property law</strong> aims to protect
          intellectual works, for example through patents, copyrights or
          trademark registrations.
        </p>
        <p>
          Innovation is at the heart of entrepreneurs' projects; it's a
          determining factor that allows companies to differentiate themselves
          from one another. Intellectual creation and innovation are drivers of
          success that allow companies to conquer new markets. Consulting{" "}
          <strong>an intellectual property lawyer</strong> allows you to protect
          your works, inventions, or creations.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
  },
  {
    question: "What is intellectual property?",
    answer: (
      <div className="space-y-4">
        <p>
          The term "intellectual property" encompasses many rights of varying
          nature. Traditionally,{" "}
          <strong>industrial property and intellectual property</strong>
          in the strict sense are considered. We speak of ownership because,
          like traditional property ownership, this right allows us to protect
          ourselves against appropriation by third parties.
        </p>
        <p>
          Industrial property necessarily forms part of intellectual property,
          as rights that all relate to intangible things: a technical process, a
          trademark, a product model. Industrial property essentially groups
          together trademark law, patent law and design and model law.
        </p>
        <p>
          As its name suggests, this type of property has a very pronounced
          economic vocation because they create and defend intangible wealth,
          regardless of the field in which the company operates.
        </p>
        <p>
          Intellectual property in the strict sense is composed of copyrights
          and
          <strong>neighboring rights to copyright</strong>. Neighboring rights
          relate to rights such as the rights of interpretation of a work, for
          example.
        </p>
        <p>
          The stakes of intellectual property are multiple for companies. The
          guarantee of freedom of exploitation is the priority stake. Being able
          to enjoy exclusively a technical innovation, a product, a trademark
          constitutes a way of generating profit but also of putting competition
          aside.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-green-500" />,
  },
  {
    question: "The different categories of intellectual property",
    answer: (
      <div className="space-y-4">
        <p>
          It is appropriate to provide some clarifications on the different
          intellectual property rights.
        </p>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold underline">Trademark Law</h4>
            <p>
              A trademark is first and foremost a property right issued by the
              <strong>National Institute of Industrial Property</strong> to
              protect on a territory a distinctive sign for a duration of 10
              years, indefinitely renewable. Its primary function is the means
              of differentiating oneself from competitors from the consumer's
              point of view.
            </p>
            <p>
              Concretely, in law, the idea of the trademark is found in the idea
              of the sign. It must be able to be represented graphically. A
              trademark is indeed a sign. We then speak of verbal, sound, visual
              or complex signs if the trademark mixes several types of signs.
              This sign is associated with given products and services, which it
              allows to identify. To be valid, the sign must be{" "}
              <strong>distinctive, available and lawful</strong>.
            </p>
            <p>
              The trademark is registered with the INPI and benefits from
              protection for 5 years, indefinitely renewable.
            </p>
          </div>

          <div>
            <h4 className="font-semibold underline">Patent Law</h4>
            <p>
              This type of law aims to offer enhanced protection to technical
              inventions that are likely to have an industrial application.
              Regarding the type of invention, <strong>patent law</strong> is
              quite flexible. The invention in question can be a product or
              process invention. It can be totally new or take existing means
              but by bringing them a new technical purpose.
            </p>
            <p>
              In other words, this innovation is a method or product that
              provides a technical solution to a posed technical problem.
              Similarly, an invention can be constituted by the combination of
              two pre-existing objects, but whose association produces a new
              technical effect. Thus the 2 central notions in patent matters
              are: the technical effect of the invention and its novelty.
            </p>
            <p>
              The patent is an intangible asset that, if filed by the company,
              increases the company's value. It is a means of attracting venture
              capitalists, negotiating with partners, guaranteeing for clients.
            </p>
            <p>
              The patent is an industrial property title that allows the holder
              to prohibit unauthorized third parties from copying what is
              claimed in the patent, on a territory, for a limited duration
              (generally 20 years maximum), upon payment of maintenance fees,
              and publication of the patent application 18 months after filing.
            </p>
          </div>

          <div>
            <h4 className="font-semibold underline">Design and Model Law</h4>
            <p>
              This is a law that aims to protect the appearance given to a
              product.
              <strong>The design or model</strong> must have its own character
              to be registered. The own character is assessed when the overall
              visual impression it arouses in the informed observer differs from
              that produced by any other design or model. That is to say that
              the product is differentiated by its appearance from other
              products.
            </p>
            <p>
              <strong>The design or model</strong> must have a new character to
              be valid. We also find here the requirement of lawfulness of the
              design in relation to the law. Registration is also carried out
              with the INPI.
              <strong>The protection granted lasts 5 years</strong>. It can be
              renewed up to a maximum of 25 years.
            </p>
          </div>

          <div>
            <h4 className="font-semibold underline">Copyright</h4>
            <p>
              This is surely the most well-known intellectual property right,
              particularly because it is the first for which we wanted to ensure
              effective protection. Copyright covers many objects, ranging from
              a canvas to a sound and light show through novels or films.
            </p>
            <p>
              Copyright is distinguished from other intellectual property rights
              by the prerogatives it offers to its holder. Indeed, when other
              rights grant prerogatives of a patrimonial nature, therefore
              directly related to financial considerations, copyright confers,
              in addition, extra-patrimonial prerogatives. We then speak of the
              moral dimension of copyright.
            </p>
            <p>
              <strong>Copyright</strong> works somewhat differently from other
              intellectual property rights since to benefit from copyright
              protection, the work must have an original character. This notion
              of originality is not the subject, in law, of a definition that is
              unanimous. But one could approach it by describing it as:
              originality is the creative choice made by the author.
            </p>
            <p>
              In other words, subject to the condition of originality, a work of
              the mind is automatically protected from its creation. The
              author's moral right (the right to respect for the work, the right
              to respect for their dignity) is perpetual. Patrimonial rights on
              the work extend for the author's entire life and another 70 years
              after their death.
            </p>
            <p>
              Unfortunately, there is no equivalent of the INPI for copyright,
              certain organizations, like SACEM for music, propose to centralize
              protection requests, but this does not have the force of
              registration. It is therefore necessary to take all precautions
              and pre-constitute all the evidence that attests to the creation
              of the work.
            </p>
          </div>
        </div>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-purple-500" />,
  },
  {
    question: "What is an intellectual property lawyer?",
    answer: (
      <div className="space-y-4">
        <p>
          <strong>The intellectual property lawyer</strong> intervenes on two
          fronts that can be grouped under the same idea: preventing third
          parties from appropriating intellectual property rights. There is the
          opposition procedure for this. It intervenes when a third party seeks
          to register one of the objects of industrial property. The lawyer
          forms an opposition action on the grounds that the trademark, design,
          model or patent that this third party wants to register presents a
          risk of confusion with the right we have.
        </p>
        <p>
          And in cases where one could not act at the time of registration,
          there exists for all rights relating to intellectual property a
          counterfeiting action. Counterfeiting is a crime in French law. The
          intellectual property lawyer can then request from the judge
          particularly coercive measures such as the seizure of counterfeit
          goods, for example.
        </p>
        <p>
          In parallel with these actions, our{" "}
          <strong>intellectual property</strong>
          lawyers will be able to accompany and advise you for all your
          contentious or non-contentious procedures. Our lawyers will notably be
          able to bring their expertise{" "}
          <strong>
            when drafting a contract to formalize an intellectual property
            clause
          </strong>
          . This type of clause is particularly useful in the context of an
          agreement in which the parties work together for a common purpose.
        </p>
        <p>
          Anticipating from now on the sharing of knowledge that will result
          from it can prove to be decisive.
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
    question: "*How do our partner lawyers offer preferential rates?",
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
  {
    question: "Copyright Lawyer: Definition and Usefulness",
    answer: (
      <div className="space-y-4">
        <p>
          A copyright lawyer is a legal professional specialized in
          <strong>intellectual property law</strong>. This legal domain governs
          all rights granted on intellectual creations, including{" "}
          <strong>copyright</strong>
          belonging to <strong>literary and artistic property</strong>.
        </p>
        <p>
          <strong>The lawyer specialized in copyright</strong> is therefore a
          professional with precise knowledge of essential rules and abundant
          jurisprudence regarding the protection of works of the mind. Competent
          notably to advise in the context of protecting a work, their support
          is very important for any professional, creator of{" "}
          <strong>works of the mind</strong>.
        </p>
        <p>
          Often neglected, support in this domain is nevertheless a useful
          precaution for any professional in this field because it is not always
          easy to know what one has the right to do to{" "}
          <strong>protect a work</strong>.
        </p>
        <p>
          Furthermore, <strong>copyright</strong> is a law that is constantly
          evolving. The development of the internet and new technologies, for
          example, continuously poses new legal questions for which intellectual
          property law tries to find solutions by creating new tools.
        </p>
        <p>
          Only an informed specialist practicing in this domain can provide good
          legal assistance for effective protection.
        </p>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-pink-500" />,
  },
  {
    question:
      "How can an intellectual property lawyer help the author of a work?",
    answer: (
      <div className="space-y-4">
        <p>
          <strong>The lawyer specialized in copyright</strong> can accompany you
          in protection procedures that can be combined with copyright: prior
          art search, trademark filing, design and model filing but also proceed
          with negotiations and drafting of assignment contracts, perform legal
          monitoring and defend their client in case of litigation (unauthorized
          use, copyright dispute, counterfeiting, etc.).
        </p>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold underline">
              The Interest of Copyright
            </h4>
            <p>
              The <strong>Intellectual Property Code</strong> provides in its
              article L. 111-1 that "the author of a work of the mind enjoys on
              this work, by the mere fact of its creation, an exclusive and
              enforceable incorporeal property right against all." In other
              words, it is enough for a work to be created to be protected by
              copyright. The only condition is <strong>originality</strong>;
              that is to say that the work must bear the imprint of its author's
              personality. There is therefore no procedure to follow in
              principle.
            </p>
            <p>
              That said, many works are created from services or products
              themselves connected to copyright (for example in the field of
              software) so the originality of the creation must be scrupulously
              demonstrated in order to be unassailable.
            </p>
            <p>
              In case of dispute, when a person or entity claims that a work
              belongs to them, the true author of the work may have difficulty
              proving that they are indeed the creator. And it is to avoid this
              that it is recommended to file one's rights with a filing
              organization.
            </p>
            <p>
              By using a lawyer specialized in copyright, you can benefit from
              good advice to avoid later troubles and the lawyer can even carry
              out the procedures for you to constitute proof of your creation
              (Soleau envelope, filing with a ministerial officer...). Their
              support will be even more useful if you have a catalog of works to
              protect.
            </p>
          </div>

          <div>
            <h4 className="font-semibold underline">
              Negotiation and Contract Drafting
            </h4>
            <p>
              To be exploited, the copyrights of a work must be transferred by
              its creator through an <strong>assignment contract</strong>.
              Depending on the type of work, this contract can be a performance
              contract, a publishing contract, an audiovisual production
              contract, etc. The contract is subject to the intellectual
              property code and must include certain mandatory mentions to be
              valid.
            </p>
            <p>
              A copyright lawyer is the most suitable person to negotiate the
              terms of this type of contract. With their knowledge of
              jurisprudence and legal prescriptions, they will not only know how
              to safeguard the interests of the copyright holder in negotiations
              but also draft the assignment contract according to the rules of
              the art.
            </p>
          </div>

          <div>
            <h4 className="font-semibold underline">
              Legal Monitoring and Defense in Litigation
            </h4>
            <p>
              A copyright lawyer can also ensure permanent monitoring throughout
              the life of their client's project. This consists for them, on one
              hand, of monitoring other titles filed by third parties to detect
              those that encroach on their client's rights; and on the other
              hand, monitoring any unauthorized use of their client's rights
              (notably via new communication channels).
            </p>
            <p>
              As soon as they identify a violation of their client's rights, the
              lawyer will initiate a procedure before civil or criminal courts,
              depending on the nature of the violation. We can also note here
              that when a procedure is initiated before the courts, going
              through a lawyer becomes mandatory.
            </p>
            <p>
              To conclude, let us note that a lawyer specialized in copyright
              intervenes alongside their client during all stages of their
              project. They accompany them from the idea of conceiving their
              work to its perpetuation, through the successive phases of its
              development. Throughout this process, they will implement the most
              relevant strategy to provide the project with a legal framework.
            </p>
          </div>
        </div>
      </div>
    ),
    icon: <MessageSquare className="h-5 w-5 text-cyan-500" />,
  },
];

export function FAQ() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="lg:text-5xl text-4xl font-bold text-center text-[#1a365d] mb-12">
          Find answers to the most frequently asked questions about intellectual
          property
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {intellectualPropertyLawFaqs.map((faq, index) => (
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
