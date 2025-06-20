import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";
import NeedToKnowImage from "../../../../public/images/business/eurl/Créateur entreprise.png";

export function NeedToKnow() {
  return (
    <section className="py-10 md:py-16 lg:px-10 px-0">
      <PageContainer>
        <h2 className="text-center text-3xl lg:text-5xl font-bold text-slate-800 lg:mb-12 mb-8">
        The SARL: a secure and popular legal status
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center mx-auto">
          <div className="">
            <Image 
              src={NeedToKnowImage}
              alt="Entrepreneur creating an EURL"
              className="rounded-lg w-auto object-contain h-auto min-w-sm"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">What is an LLC?</h3>
              <p className="text-slate-700 font-medium lg:text-lg text-base">
              Designed for small and medium-sized businesses, the SARL (Limited Liability Company) is the second most common legal form in France, after the SAS (Simplified Joint Stock Company). <br />

              Its main advantage is that the partners' liability is limited to the amount of their contributions . They do not have to commit their personal assets in the event of company debts.  
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">What are the conditions for creating an LLC?</h3>
              <p className="text-slate-700 font-medium lg:text-lg text-base">
                The creation of an SARL requires several conditions:
              </p>
              <ul className="text-slate-700 mt-3 font-medium lg:text-lg text-base list-disc lg:pl-6 pl-4">
                <li>There must be a minimum of 2 partners and a maximum of 100. They can be individuals or legal entities (another company can be a partner, for example) . </li>
                <li><strong>Share capital</strong> can be freely set by the articles of association. This means that the partners can decide how much their share capital will constitute. An LLC can therefore be created with a capital of €1!  </li>
                <li><strong>The partners' contributions</strong> are the assets that make up the share capital and in return for which they receive social rights (shares). They can be in cash (a sum of money) or in kind (movable property, real estate). Contributions in kind (skills, technical knowledge, know-how) are possible, but do not form part of the share capital.  </li>
                <li><strong>The purpose of an SARL</strong>  can concern any type of activity, civil or commercial. However, certain regulated activities cannot be carried out in the form of an SARL (e.g., insurance, capitalization, and savings companies).</li>
              </ul>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 