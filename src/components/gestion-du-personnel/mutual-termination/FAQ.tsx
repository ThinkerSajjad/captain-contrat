'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const faqs = [
  {
    question: "📌 What is a mutual termination agreement?",
    answer: (
      <div className="space-y-4">
        <p>
        A mutual termination agreement allows an employment contract to be terminated by mutual agreement between the employer and the employee. It can be initiated by one of the two parties, or by both parties jointly. 
        </p>

        <p>
        In both cases, they must agree together on the conditions of this termination, the amount of compensation, and draw up an agreement while respecting the legal framework in force.
        </p>

        <p>
        A mutual termination agreement can also be:
        </p>

        <p>
        Individual: between the employer and an employee;
        </p>

        <p>
        Collective: concern several employees and require a collective agreement.
        </p>

        <p>
        Do you want to initiate a mutual termination procedure ? Captain Contrat will assist you with the process.
        </p>
      </div>
    )
  },
  {
    question: "Is the employee entitled to unemployment benefits in the event of a mutual termination?",
    answer: (
      <div className="space-y-4">
        <p>
        In principle, an employee receives unemployment benefit when they are made redundant, without having resigned of their own free will and without any plans for professional retraining. 
        </p>

        <p>
        In the case of a mutual termination, the employee may also be compensated for unemployment , but under certain conditions: 
        </p>

        <p>
        Have worked legally for at least 6 months in the previous 24 months (this rule may vary depending on the employee's situation);
        </p>

        <p>
        Reside in mainland France or in an overseas department;
        </p>

        <p>
        Register with Pôle Emploi within 12 months of the agreed termination;
        </p>

        <p>
        Actively seek employment;
        </p>

        <p>
        Not having reached retirement age.
        </p>

        <p>
        All these conditions are subject to specific rules and may vary depending on the employee's situation. 
        </p>

        <p>
        Please note that there is a waiting period for unemployment benefits. For more information, see our dedicated article . 
        </p>
      </div>
    )
  },
  {
    question: "What are the conditions for a mutual termination agreement?",
    answer: (
      <div className="space-y-4">
        <p>
        The mutual termination agreement must be signed by both parties.
        </p>

        <p>
        The agreement must be signed by both parties.
        </p>

        <p>
        The agreement must be signed by both parties.
        </p>

        <p>
        The agreement must be signed by both parties.
        </p>
      </div>
    )
  },
  {
    question: "What are the disadvantages of a mutual termination agreement?",
    answer: (
      <div className="space-y-4">
        <p>
        The mutual termination agreement allows for common ground to be established between the employee and the employer. However, it can have disadvantages: 
        </p>

        <p>
        For the employer : a mutual termination agreement does not exclude certain risks, such as the employee's termination of the agreement after leaving the company. To learn more about the risks for the employer, see our dedicated article .
        </p>

        <p>
        For the employee : No notice period is required by the employer until the termination of the employment contract, which may limit the employee's ability to find a new job. It is the parties who freely negotiate the termination of the employment contract. 
        </p>

        <p>
        For both parties : the termination agreement must be validated by the DDETSPP: the Departmental Directorate of Employment, Labor, Solidarity and Population Protection. The primary risk is that the latter will refuse approval due to failure to comply with the procedure.
        </p>

        <p>
        To avoid these difficulties, get support from a legal professional .
        </p>
      </div>
    )
  },
  {
    question: "What should the termination letter contain?",
    answer: (
      <div className="space-y-4">
        <p>
        The mutual termination agreement must be signed following one or more meetings between the employee and the employer. It formalizes in writing the conditions of termination of the employment contract, resulting from the agreement between the two parties. 
        </p>

        <p>
        The agreement must contain: 
        </p>

        <p>
        The date of termination of the employment contract , which may occur at the earliest the day after the day on which the labor inspector gave his authorization.
        </p>

        <p>
        The amount of severance pay awarded to the employee. According to the Labor Code, this amount cannot be less than the severance pay.
        </p>

        <p>
        These conditions are freely set between the parties. At the end of the agreement, a copy must be given to each party for signature.
        </p>

        <p>
        To find out more, see our article on the termination period by mutual agreement .
        </p>
      </div>
    )
  },
  {
    question: "What is the notice period for a mutual termination?",
    answer: (
      <div className="space-y-4">
        <p>
        In the context of a mutual termination agreement, no notice is required from the employer to the employee. The parties may themselves set a termination date for the employment contract by prior agreement.
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