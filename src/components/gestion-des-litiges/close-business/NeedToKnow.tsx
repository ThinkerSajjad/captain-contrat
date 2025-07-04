import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";
import NeedToKnowImage from "../../../../public/images/business/eurl/Créateur entreprise.png";

export function NeedToKnow() {
  return (
    <section className="py-10 md:py-16 lg:px-10 px-0">
      <PageContainer>
        <h2 className="text-center text-3xl lg:text-5xl font-bold text-slate-800 lg:mb-12 mb-8">
        Close your business with peace of mind
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
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">What are the reasons for closing a company?</h3>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
              The company has reached its term:  the maximum lifespan of a legal entity is 99 years. After this period, if no renewal has been requested, closure is automatic.
              </p>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
              A company's judicial dissolution  is ordered by a judge. It generally follows a breach or serious violation of the law. 
              </p>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
              All of the company's securities are transferred and transferred to a single person.
              </p>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
              The partners decide to close the company for reasons of their own , this is the most frequent case. 
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">What is the difference between dissolution and liquidation?</h3>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
              <span className="font-semibold">Dissolution</span>  results from the desire of one or more partners to stop the activity of a company or from a legal decision requiring the cessation of activity. 
              </p>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
              <span className="font-semibold">Liquidation</span> follows the decision to dissolve the company. This procedure consists of stripping the company of its substance and preparing it for its final dissolution in accordance with the law. 
              </p>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
              <span className="font-semibold">The company has reached its term</span>:  the maximum lifespan of a legal entity is 99 years. After this period, if no renewal has been requested, closure is automatic.
              </p>
              
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 