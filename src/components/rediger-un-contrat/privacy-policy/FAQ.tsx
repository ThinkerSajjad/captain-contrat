"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

// The key points of your privacy policy.

// 1. Write your privacy policy
// In compliance with the GDPR: identity of the parties, data retention period, user rights, etc.

// 2. Think about other documents for a compliant site
// Legal notices, general terms and conditions, privacy policy, etc.

// 3. Avoid heavy sanctions
// Administrative sanctions (fines), criminal sanctions, etc.

const faqs = [
  {
    question: "What is a personal data protection charter? ",
    answer: (
      <div className="space-y-4">
        <p>
          A personal data protection charter is a document that provides users
          of a website with all the information relating to the protection of
          personal data that they may communicate to it.
        </p>

        <p>
          {" "}
          This charter must include, in particular, the identity of the person
          responsible for processing personal data and the purpose of this
          processing. It must also inform the user of their right to access the
          data communicated, their right to rectify it, or their right to
          object.
        </p>
      </div>
    ),
  },
  {
    question: "What is the point of such a charter? ",
    answer: (
      <div className="space-y-4">
        <p>
          Such a charter offers consumers enhanced protection of the personal
          data they may share with a company. Indeed, the charter's purpose is
          to ensure greater transparency in the processing of this data, as well
          as inherent rights, such as the right of access or opposition.
        </p>

        <p>
          As for the interest for businesses, it is embodied by their desire to
          regain consumer trust. Indeed, building a database has become almost
          essential for any e-commerce business, particularly to build customer
          loyalty and increase sales.
        </p>
        <p>
          That said, market research shows that consumers are highly distrustful
          of the collection and processing of their personal data by websites.
          Companies therefore have a strong interest in implementing privacy
          policies that ensure greater transparency.
        </p>
        <p>
          In this way, they will be able to regain the trust of their potential
          customers who will be more inclined to communicate certain personal
          information, necessary for companies to optimize their economic
          activities.
        </p>
      </div>
    ),
  },
  {
    question: "Is the CNIL charter mandatory? ",
    answer: (
      <div className="space-y-4">
        <p>
          From the moment a website collects and/or processes personal data
          (address, identity, etc.), it is required to provide its users with a
          document informing them of the purpose and methods of processing this
          data as well as their rights of access, rectification or opposition.
        </p>

        <p>
          And even if it is possible to integrate this text into the{" "}
          <Link
            className="text-blue-600 underline"
            href={"/rediger-un-contrat/rediger-cgu"}
          >
            general conditions of use
          </Link>{" "}
          , it is in principle good practice to write a separate charter.
        </p>
        <p>
          Nb: also remember to{" "}
          <Link
            href={"/contrats-commerciaux-cgv/cgv-cgu-cga/cgv-rgpd"}
            className="text-blue-600 underline"
          >
            {" "}
            bring your T&Cs into compliance with the GDPR{" "}
          </Link>{" "}
          .
        </p>
      </div>
    ),
  },
  {
    question:
      "What are the 5 key principles to respect in the “data protection” law? ",
    answer: (
      <div className="space-y-4">
        <p>
          The law of January 6, 1978 relating to information technology, files
          and freedoms, known as the "information technology and freedoms law"
          defines 5 key principles which must be respected during the
          collection, processing and storage of personal data .
        </p>

        <p>These principles are as follows:</p>

        <div>
          {" "}
          <ul className="space-y-4">
            <li>
              1. the principle of purpose: define before any collection or use
              of data what they will be used for;
            </li>
            <li>
              2. the principle of relevance: the data controller may only
              collect data that is strictly necessary to achieve the intended
              objective;
            </li>
            <li>
              3. the retention principle: once the objective has been achieved,
              the data must no longer be retained – the retention period must be
              defined in advance by the data controller;
            </li>
            <li>
              4. the principle of rights: collection can only be done on
              condition that consumers are informed; in addition, consumers have
              certain rights at their disposal, such as access to their data,
              rectification or even opposition to the use of this same data;
            </li>
            <li>
              5. the security principle: the data controller must guarantee
              their security and confidentiality (only authorized persons must
              be able to access them).{" "}
            </li>
          </ul>{" "}
        </div>
      </div>
    ),
  },
  {
    question:
      "What personal information can I collect from an Internet user and what information is prohibited? ",
    answer: (
      <div className="space-y-4">
        <p>
          Relevance is the key word when it comes to data collection. In other
          words, the data requested from the user must be relevant, appropriate,
          and consistent with achieving the intended purpose— for example, it
          wouldn't be relevant for a sports equipment store to ask its customers
          about their educational level.
        </p>

        <p>
          It should also be noted that there is "sensitive" information that is,
          in fact, prohibited from being collected(this includes religious or
          political opinions).This data can only be collected in exceptional
          cases or with the authorization of the CNIL.
        </p>
      </div>
    ),
  },

  {
    question:
      "I have made a declaration to the CNIL, do I still have to implement the charter? ",
    answer: (
      <div className="space-y-4 ">
        <p className="">
          As soon as a website collects and/or processes personal information,
          it is required to file a declaration with the CNIL (National
          Commission for Information Technology and Civil Liberties). This is an
          independent commission whose role is to ensure compliance with the law
          on data and civil liberties.
        </p>

        <p className="">
          However, this statement does not exempt the company that collects
          and/or processes personal data from its obligation to implement a
          personal data protection charter . Only trade unions, associations,
          websites of individuals whose activity is personal, political parties
          and churches are exempt.
        </p>
      </div>
    ),
  },
  {
    question:
      "What are the penalties for non-compliance with the personal data protection charter? ",
    answer: (
      <div className="space-y-4 ">
        <p className="">
          There may be numerous penalties for non-compliance with the personal
          data protection charter .
        </p>

        <p className="">
          If the CNIL finds an infringement, the company may be subject to a
          warning, a formal notice, an injunction to cease processing the
          information, or even financial penalties.
        </p>
        <p className="">
          The amount of these fines can reach 150,000 euros for a first offence
          and then, in a second instance, 300,000 euros excluding tax or 5% of
          the turnover of the company's last financial year (this 5% must not
          exceed the limit of 300,000 euros).
        </p>
        <p className="">
          Note that the financial penalty is proportional to the seriousness of
          the breaches committed and the benefits gained by the offender.
        </p>
      </div>
    ),
  },

  {
    question: "What are the rights of users? ",
    answer: (
      <div className="space-y-4">
        <p>
          User rights are defined by the "Information Technology and Civil
          Liberties" law, particularly in principle number 4, namely the
          principle of rights . They can be separated into three main
          categories. These are firstly:
        </p>

        <div className="space-y-6">
          <li className="list-disc ms-5">
            the right to information and consent : the user must be informed in
            advance of the collection, the identity of the data controller, the
            purpose of this processing, their rights as a consumer and, finally,
            they must give their consent;
          </li>
          <li className="list-disc ms-5">
            the right to access and rectify data : the user must be able to
            access the data he has communicated and, in certain cases, demand
            that it be rectified, updatli or deleted;
          </li>
          <li className="list-disc ms-5">
            right to object: any person has the right, for legitimate reasons,
            to object to the processing of their personal data.
          </li>
        </div>
      </div>
    ),
  },
  {
    question: "How to obtain a personal data protection charter? ",
    answer: (
      <div className="space-y-4">
        <li className="list-decimal ms-5">
          You answer a questionnaire on our site, relating to your needs
        </li>
        <li className="list-decimal ms-5">
          A lawyer offers you a quote for your personal data protection charter
        </li>
        <li className="list-decimal ms-5">
          After acceptance of this quote, the lawyer draws up your document.
        </li>
      </div>
    ),
  },
  {
    question: "What are the key points of my privacy policy? ",
    answer: (
      <div className="space-y-4">
        <li className="list-decimal  space-y-2 font-bold">
          Write your privacy policy
          <p className="font-normal">
            In compliance with the GDPR: identity of the parties, data retention
            period, user rights, etc.
          </p>
        </li>
        <li className="list-decimal space-y-2 font-bold">
          Think about other documents for a compliant site
          <p className="font-normal">
            Legal notices, general terms and conditions, privacy policy, etc.
          </p>
        </li>
        <li className="list-decimal space-y-2 font-bold">
          After acceptance of this quote, the lawyer draws up your document.
          <p className="font-normal">
            Administrative sanctions (fines), criminal sanctions, etc.
          </p>
        </li>
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
