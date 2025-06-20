'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const faqs = [
  {
    question: "📌 Why check a brand's availability?",
    answer: (
      <div className="space-y-2">
        <p className="font-semibold">Reminder: what is a brand?</p>
        <p>It is Article L711-1 of the Intellectual Property Code which defines the trademark as "a sign serving to distinguish the products or an enterprise or services from those of other enterprises".</p>
        
        <p>Concretely, a trademark allows its owner to <strong>distinguish its products and services from those of its competitors</strong>. It is also thanks to the trademark that customers will be able to recognize the company, it represents the image of the company and contributes to guarantees of credibility and reputation in the eyes of customers.</p>
        
        <p>In an increasingly competitive market, the brand is a crucial element.</p>
        
        <p>It offers the opportunity to make your products and/or services known to the general public. In other words, to <strong>differentiate your products and/or services from those of your competitors</strong>.</p>
      </div>
    ),
  },
  {
    question: "Why is it important to protect your brand?",
    answer: (
      <div className="space-y-2">
        <p>Often overlooked, the brand is nonetheless a very important <strong>intangible asset</strong> of your company. It is an identifiable asset for the commercial, industrial and intellectual fields. Like a real extension of your company's heritage, it is an asset that you can enhance. This enhancement can take different forms depending on your activities with: license contracts, brand ranking, or even, create a franchise network, etc.</p>
        
        <p>Registering a trademark with the INPI gives you a <strong>monopoly on its exploitation</strong>. This monopoly also grants you powers to protect its exploitation. You will have the opportunity to take action against acts of counterfeiting, for example, or to oppose applications to the similar or identical trademarks. However, for all this to happen, you will need to properly register your trademark.</p>
      </div>
    ),
  },
  {
    question: "What is a prior art search?",
    answer: (
      <div className="space-y-2">
        <p>Before filing your trademark with the INPI (French National Institute of Industrial Property), for example, it is essential to verify that the trademark is available. This involves a prior art search operation.</p>
        
        <p>In France, the trademark belongs to the first applicant. It is therefore essential to ask yourself whether the trademark or similar trademark you should have registered for identical products and/or services is yours.</p>
        
        <p>The prior art search is intended to reveal any previous company names which may be within the same field of activity.</p>
        
        <p>Indeed, you must first carry out a prior art search and verify that your trademark does not infringe the prior rights of third parties.</p>
        
        <p>Therefore, to be registered and protected, your trademark must be available. Prior art searches are essential for the security of your business. This means that you can take full advantage of the possibilities mentioned (such future or previous title, etc.), and above all, we avoid any legal complications of infringement by previous applicants.</p>
        
        <p className="font-semibold">There are two types of prior art search:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Identical search;</li>
          <li>Extended search.</li>
        </ul>
        
        <p>The search for identical signs focuses on identical signs which have already been filed for products or services either identical or in a field of activity identical or similar to yours.</p>
        
        <p>It is strongly advised that these searches yourself, integrating, and the INPI (French National Institute for Industrial Property) provides databases of existing trademarks. However, these data are far from exhaustive, and the difficulty lies in interpreting the results.</p>
        
        <p>An in-depth prior art search does not allow you to verify that a similar sign does not conflict with the trademark you wish to register.</p>
        
        <p className="font-semibold">The search for similar signs:</p>
        <p>This search is undoubtedly the most complex to carry out. It aims to identify all similar signs, whether phonetic or orthographic, between your sign and signs already registered.</p>
        
        <p>Indeed, even if there is no sign identical to yours (belonging to the identical sectors), any similarity (phonetics, orthographics, industry, which could cause confusion in the eyes of customers) constitutes an infringement.</p>
        
        <p>The INPI offers a free identical pre-search, but it is up to you to filter out the results. The search for similar signs is more difficult to establish because one must evaluate each trademark and establish if it conflicts with your trademark.</p>
        
        <p>It is up to you as the applicant to rigorously carry out these checks and it is up to the owners of prior trademarks to legally verify and trademark monitoring in order to be able to issue oppositions against filing a trademark or similar trademark. This is why it is strongly recommended that you seek filing a trademark or similar trademark.</p>
        
        <p>A sloppy availability search can have serious consequences for the business.</p>
      </div>
    ),
  },
  {
    question: "What are the risks if you do not carry out a prior art search before filing your trademark?",
    answer: (
      <div className="space-y-2">
        <p>As we have said, the owner of a prior trademark has a monopoly on its exploitation and as such has access available to protect it.</p>
        
        <p>If you do not conduct a prior art search, the INPI will still be able to register your trademark if your file is complete. However, from the date of filing/registration application, third parties (including holders of prior trademarks) have a period of 2 months (3 months for European Union trademarks) to oppose the registration of your trademark.</p>
        
        <p>If a third party objects to your trademark online who you are, the INPI is then responsible for deciding <strong>whether your trademark can be registered</strong>. It will identify possibilities of confusion between the signs of your trademark vis-à-vis the previously registered trademark.</p>
        
        <p>To determine if there is a risk of confusion, the INPI will take into account different elements (visual, phonetic, intellectual) and will determine if the consumer can make a connection between the two from a visual, conceptual and/or phonetic point of view.</p>
        
        <p>Like any preliminary opposition proceedings generally costs - for parties are required to prepare a case, it is better to avoid them. In addition, the INPI's decision sometimes supports and sometimes the parties is this type of action. Therefore, to avoid this situation, it is strongly recommended to conduct a prior art search before filing any application.</p>
        
        <p>Ensuring that no third party holds an intellectual property title is a step identical or similar, as the trademark you intend to protect is an essential preventive measure. This preliminary procedure will allow you to detect any conflicts and to adapt your approach if necessary before finding yourself without your knowledge, at the center of an infringement action.</p>
        
        <p>In addition to not only not "suffer" a lawsuit, you can be risk of registering a trademark, drafting your brand building, launching marketing and communication tools to develop your brand image, building up a client database attached to this brand, then having all of this to see your trademark cancelled under the threat of an individual mark from third-party.</p>
        
        <p>INPI parties may at any time challenge the validity of the trademark by means of an action for nullity.</p>
        
        <p>Thus, the absence of a prior art search or a botched prior art search can have serious consequences for your company's image and all the investments you have already made. After several years of activity, an action for nullity can be dramatic for the very survival of your business.</p>
      </div>
    ),
  },
  {
    question: "Why be supported by experts, lawyers specializing in intellectual property?",
    answer: (
      <div className="space-y-2">
        <p>As you will have understood, <strong>prior art research</strong> cannot be improvised. It is a real in-depth work which cannot be reduced to the registration of a trademark being independent <strong>by the applicant himself</strong>.</p>
        
        <p>It is up to you to interpret the results and decide whether to proceed with the filing process. <strong>At what level can you say that a more or less similar sign does not create confusion among the public?</strong></p>
        
        <p>Do not hesitate to seek advice from a lawyer specializing in intellectual property. The latter will be able to determine whether the products and/or services you offer <strong>whether the brand is modified by a third party</strong> but that could still be confused with the activity of the owner... He will also be able to identify if your unqualified brand constitutes anything. You will then be able to set up a <strong>trademark protection solution</strong>.</p>
        
        <p>The lawyer will also be able to advise you on all of these conceptual relationships. The lawyer will be able to give you clear information on the formal decisions relating to products in order to determine whether they fall within your scope.</p>
        
        <p>It is only on the basis of this in-depth work that it is possible to assess the risks of filing or to implement a strategy so that the desired trademark must <strong>meet all your legal risk</strong> for financial security.</p>
        
        <p>It is strongly recommended that you be accompanied by a specialized lawyer during this study. Especially, <strong>since a prior art search would not be complete without a search for similarities</strong>.</p>
      </div>
    ),
  }
];

export function FAQ() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="lg:text-5xl text-4xl font-bold text-center text-[#1a365d] mb-12">
          Frequently asked questions from other entrepreneurs
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