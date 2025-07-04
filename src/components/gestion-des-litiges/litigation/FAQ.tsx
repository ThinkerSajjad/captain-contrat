'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const faqs = [
  {
    question: "📌  Introduction",
    answer: (
      <div className="space-y-4">
       <p>Litigation is the branch of private law that aims to resolve legal disputes between two individuals. Unlike transactional law, which aims to build consensual relationships, litigation aims to end conflictual relationships: the thought patterns and legal mechanisms are therefore very different.</p>

 

<p>Litigation covers all areas since each of them is likely to create conflicts (disputes between partners of a company; disputes between an employee and his employer; disputes between business partners; etc.). Unlike transactional matters, it also involves the courts, whose procedural rules do not tolerate any negligence.</p>

 

<p>This is why, in addition to providing advice, the litigation lawyer represents you in court by pleading on your behalf. </p>
      </div>
    )
  },
  {
    question: "What is a litigation lawyer?",
    answer: (
      <div className="space-y-4">
        <p>The litigation lawyer has received general and cross-disciplinary training in all legal matters (employment law, commercial law, law of obligations, etc.) in order to be able to advise you on the jurisdictions to refer and to represent you effectively in court. Subsequently, he has undergone specialized training in litigation in order to master the art of pleading as well as the rules of procedure before each state court. Learning the procedure is essential for a litigation lawyer who must, in particular, know which documents to submit to the courts, within what timeframes and in what forms. </p>

 

<p>Like any true lawyer, he then put all this knowledge into practice with the aim of refining it by defending numerous cases before the courts. Very often, it is at the start of his professional life that the litigation lawyer moves towards a second specialization. Indeed, it is almost impossible to perfectly master all the subjects covered by litigation, as the rules are so multiple and diverse from one field to another. This is why you will find the most relevant litigation lawyer for your situation depending on the legal matter concerned: depending on the case, you will for example deal with a lawyer specialized in business litigation, commercial litigation, labor disputes or intellectual property litigation.</p>

 

<p>Because the litigation lawyer manages all conflicts relating to his or her preferred subject, he or she has developed his or her experience alongside all profiles (debtor/creditor, employer/employee, company/partner, service provider/client, etc.) and in all sectors of activity (sales, industry, construction, etc.).</p>

 

<p>He is best placed to support you throughout a procedure that pits you against a third party.</p>
      </div>
    )
  },
  {
    question: "What is a tax litigation lawyer?",
    answer: (
      <div className="space-y-4">
        <p>Tax litigation lawyers have received general training in business law and then specialized in tax law. As such, they are fully versed in the legal rules that allow the tax authorities to collect taxes, duties, contributions, and social security contributions from individuals and businesses.</p>

 

<p>More specifically, the tax litigation lawyer is competent to deal with all subjects related to tax law such as personal taxation, corporate taxation, real estate taxation, wealth taxation, tax procedures, international taxation, criminal tax law, etc. </p>

 

<p>At the same time, the tax litigation lawyer has received training in litigation. As a result, they are well-versed in the procedural rules applicable before each jurisdiction (administrative court, high court, etc.). They are therefore able to advise you on the courts to contact depending on the type of procedure. They are also familiar with the deadlines to be met and the procedural documents to be drafted and submitted. In addition, they have developed a talent for public speaking over the course of their career, allowing them to represent you effectively before the judge. </p>

 

<p>Like any true lawyer, the tax litigation lawyer then put all this knowledge into practice with the aim of refining it by defending numerous cases before the courts. </p>

 

<p>Tax litigation lawyers defend both individuals and businesses in their capacity as taxpayers. The idea is to protect their rights in the face of the tax authorities' increasingly exorbitant prerogatives.</p>

<p>He is best placed to support you throughout the litigation procedure between you and the tax authorities.</p>
      </div>
    )
  },
  {
    question: "The different areas of intervention of the litigation lawyer",
    answer: (
      <div className="space-y-4">
        <p className="font-semibold">He negotiates settlement agreements. </p>

<p>Whether it's an attack or a defense, it's not always appropriate to go to court and undergo a lengthy and costly process. This is why a litigation lawyer advises you on the appropriateness of your options, sometimes directing you toward a settlement agreement. This agreement aims to avoid legal proceedings while putting a definitive end to the conflict. It's a matter of both parties finding a compromise. In this context, the lawyer's role is to best defend your interests.</p>

 

 

<p className="font-semibold">He supports you when you want to initiate legal proceedings.</p>

<p>When it comes to procedure, the rules of procedure are very strict. This is why a litigation lawyer helps you draft all the legal documentation (formal notice, summons, etc.) required to initiate legal proceedings. Their role is to ensure you include the required information, but also to construct effective and usable evidence in court.</p>

 

 

<p className="font-semibold">He defends you when you are sued.</p>

<p>When a person decides to initiate legal proceedings against another person, it's in the latter's best interest to consult a litigation lawyer. They will advise you on your chances of success and the strategy to adopt against your opponent. Once again, numerous documents (response letters, submissions, etc.) must be drafted to respond to this attack, and the rules of procedure are just as important.</p>

 

 

<p className="font-semibold"> He represents you in court throughout the procedure.</p>

<p>Legal proceedings can last several years, placing a considerable psychological burden on the process. Furthermore, they are punctuated by numerous steps, governed by strict deadlines and demanding formal requirements. Working with a litigation lawyer means receiving considerable support in navigating a conflict that is difficult to manage alone. Above all, they are your voice in court: they put forward legal arguments while highlighting your specific situation.</p>

 

 

<p className="font-semibold">It helps you to actually get what you asked for.</p>

<p>At the end of the legal proceedings, the courts issue a decision to compel the losing party to comply, in principle. In practice, this step is rarely sufficient to definitively resolve the dispute. Indeed, following the judgment, it is often imperative to comply with certain procedural rules, in terms of deadlines, competent persons (bailiff, enforcement judge, etc.) and forms (seizure, mail, etc.). Once again, the lawyer is there to help you manage the enforcement of the judgment that is in your favor.</p>


      </div>
    )
  },
  {
    question: "Do we deal with individuals?",
    answer: (
      <div className="space-y-4">
        <p>
        
The lawyers in our partner network exclusively assist entrepreneurs ( business founders, managers of small and medium-sized businesses) with their legal procedures. We do not offer assistance to individuals.
        </p>
      </div>
    )
  },
  {
    question: "How does connecting with a lawyer work?",
    answer: (
      <div className="space-y-4">
        <p className="font-semibold">The connection takes place in 4 stages :</p>

 

<p>1. Complete our 5-minute legal questionnaire : this questionnaire allows you to qualify your needs and thus choose the specialized lawyer. </p>

 

<p>2. Discover the lawyers selected for you : a selection of lawyers who can respond to your problem is presented to you. </p>

 

<p>3. An entrepreneurial coach calls you to discuss your project : An entrepreneurial coach from the platform will support you throughout your project. They will contact you to better identify your needs, specifying your budget and legal issues. Using this information, they can identify the most qualified lawyer to meet your needs. They act as a true intermediary between you and the lawyer. </p>

 

<p>4. Get a quote within 24 hours : the selected lawyer will contact you and ask for additional information to provide you with a quote within 24 hours. </p>
      </div>
    )
  },
];

export function FAQ() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="lg:text-5xl text-4xl font-bold text-center text-[#1a365d] mb-12">
        Find answers to the most frequently asked questions about litigation law
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