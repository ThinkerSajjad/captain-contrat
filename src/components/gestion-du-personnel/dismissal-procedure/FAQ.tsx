'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const faqs = [
  {
    question: "📌 What is a dismissal?",
    answer: (
      <div className="space-y-4">
        <p>
        Dismissal is the measure by which the employer unilaterally terminates the employment contract that binds it to an employee. There must be a real and serious cause.
        </p>

        <p>
        The dismissal procedure includes 3 stages: 
        </p>

        <p>
        The employee's invitation to the preliminary interview;
        </p>

        <p>
        The preliminary interview;
        </p>

        <p>
        Notification of dismissal by registered letter with acknowledgment of receipt.
        </p>

        <p>
        To learn more, read our article on the dismissal procedure .
        </p>
      </div>
    )
  },
  {
    question: "What are the grounds for dismissing an employee?",
    answer: (
      <div className="space-y-4">
        <p>
        The grounds for dismissal are the reasons that justify the termination of the employment contract.
        </p>

        <p>
        There are two types of grounds for dismissal:
        </p>

        <p>
        The real and serious cause;
        </p>

        <p>
        The non-serious cause.
        </p>

        <p>
        To learn more, read our article on the grounds for dismissal.
        </p>
      </div>
    )
  },
  {
    question: "What is a real and serious cause for dismissal?",
    answer: (
      <div className="space-y-4">
        <p>
        A real and serious cause for dismissal is a cause that justifies the termination of the employment contract.
        </p>
      </div>
    )
  },
  {
    question: "What is a non-serious cause for dismissal?",
    answer: (
      <div className="space-y-4">
        <p>
        A non-serious cause for dismissal is a cause that does not justify the termination of the employment contract.
        </p>
      </div>
    )
  },
  {
    question: "What is the procedure for dismissing an employee?",
    answer: (
      <div className="space-y-4">
        <p>
        The procedure for dismissing an employee is as follows:
        </p>
      </div>
    )
  },
  {
    question: "What is the procedure for dismissing an employee?",
    answer: (
      <div className="space-y-4">
        <p>
        The procedure for dismissing an employee is as follows:
        </p>
      </div>
    )
  },
];

export function FAQ() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="lg:text-5xl text-4xl font-bold text-center text-[#1a365d] mb-12">
          FAQ
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