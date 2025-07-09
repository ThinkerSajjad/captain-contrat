"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// What is a framework agreement?

// A framework agreement is a type of contract concluded between one or more companies and a public person , with the aim of establishing a general framework for their future public contracts.

// Just like other types of commercial contracts, the framework agreement sets out the rules for future relations between the parties, such as the conditions relating to purchase orders to be issued or subsequent contracts to be entered into over a given period.

// There are two types of framework agreements:

// Framework agreements with subsequent contract conclusion: the public buyer undertakes to enter into agreements with certain companies at a later date, when a new need arises.

// Framework agreements with the issue of purchase orders: these are contracts concluded with one or more economic operators and executed as and when the need arises by the issue of purchase orders.

const faqs = [
  {
    question: "📌 Discover frequently asked questions from other entrepreneurs",
    answer: (
      <div className="space-y-4">
        <p>Whether you've created a commercial or non-commercial website, it's highly recommended that you draft website Terms of Service. These Terms of Service are designed for users and allow them to understand what they can and cannot do on your site.</p>

        <p>In other words, the T&Cs determine and govern the use of your site . They provide information on the obligations and responsibilities of the owner and the user. They therefore constitute a contract concluded between the user and you. They have legal value once the Internet user has accepted them.</p>

        <p>For more information, see our dedicated article.</p>
      </div>
    ),
  },
  {
    question: "What is the purpose of the T&Cs? ",
    answer: (
      <div className="space-y-4">
        <p>The T&Cs bind you to the user once they have accepted them; they indicate that they have read and accepted the terms of navigation on your site, and know what they can and cannot do. For your part, you can set the limits of your liability in the T&Cs, which is their whole purpose! Indeed, thanks to the T&Cs, you can provide:</p>

        <p>not to be held responsible if a third party publishes content duplicated from another site or protected by copyright;</p>

        <p>not to be held responsible if false statements, insults or defamatory remarks are made on your site, forum or chat;</p>

        <p>not to guarantee continuous access to your site: if it encounters a bug or a technical problem, you reserve the right to interrupt its operation to ensure its maintenance;</p>

        <p>to set out your policy for using visitors' personal data, in accordance with the provisions of the GDPR, etc.</p>

        <p>In short, thanks to your T&Cs your website is protected , you will not be held liable in all these cases.</p>
      </div>
    ),
  },
  {
    question: "Who writes the T&Cs?",
    answer: (
      <div className="space-y-4">
        <p>The T&Cs must be drawn up by the website publisher himself, in order to protect his liability and that of the user.</p>

        <p>Many website owners don't bother creating them because it's not a legal requirement, but although they are optional, T&Cs have real legal value and remain very important.</p>

        <p>Have your T&Cs drawn up by a lawyer to ensure your protection!</p>
      </div>
    ),
  },
  {
    question:
      "When to include the T&Cs?",
    answer: (
      <div className="space-y-4">
        <p>The T&Cs must be permanently available for consultation on your website so that the user can learn about the information relating to your relationship.</p>
      </div>
    ),
  },
  {
    question: "What are the differences between T&Cs and CGUs?",
    answer: (
      <div className="space-y-4">
        <p>The General Terms and Conditions of Sale should not be confused with the General Terms and Conditions of Use; these agreements do not apply in the same situations:</p>

        <p>The General Terms and Conditions of Sale establish contractual rules between an individual and a company when a service or product is sold. They are intended to apply to both the use of e-commerce websites and the provision of services.</p>

        <p>The General Conditions of Use correspond to a more general document that we encounter, for example, in the case where an Internet user uses a website without making a purchase.</p>
      </div>
    ),
  },

  {
    question: "How to write general terms of use?",
    answer: (
      <div className="space-y-4 ">
        <p>To properly draft your T&Cs, a certain number of elements must be taken into account:</p>

        <p>Description of the services , purpose and operation of the website: it is more judicious to provide a broad description of the services offered so as not to have to modify the T&Cs each time the site is updated.</p>

        <p>Provisions relating to intellectual property : the general conditions of use remind Internet users that the elements of the site – texts, videos, images, etc. – are protected by copyright and that their use without express prior authorization is prohibited.</p>

        <p>Rules delimiting the responsibility of the site editor : It is important to indicate that the editor makes every effort to ensure the accuracy and updating of the information provided on the site, although this information may be erroneous.</p>

        <p>The publisher's rights and obligations : the general terms of use generally impose obligations of means on the publisher. Maintaining access to the site, ensuring its proper functioning... The T&Cs also provide the publisher with an opportunity to disclaim liability in the event of fraudulent use of the site by a third party, for example.</p>

        <p>User rights and obligations : User rights may include, in particular, their flexibility when creating a personal space. Their obligations may include the obligation to maintain the confidentiality of their login details, the obligation to use the site for its intended purpose, and the obligation not to attempt to harm the proper functioning of the site.</p>

        <p>A reminder about force majeure : force majeure, an unforeseeable and insurmountable external event, exempts the parties from their respective responsibilities. This provision is a matter of public policy.</p>

        <p>Dispute resolution procedures : the publisher may state that in the event of a dispute, the parties will attempt to resolve the dispute amicably. Failing an amicable settlement, the publisher must comply with the rules governing the allocation of material and territorial jurisdiction.</p>
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
