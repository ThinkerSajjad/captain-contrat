import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";
import NeedToKnowImage from "../../../../public/images/business/eurl/Créateur entreprise.png";

export function NeedToKnow() {
  return (
    <section className="py-10 md:py-16 lg:px-10 px-0">
      <PageContainer>
        <h2 className="text-center text-3xl lg:text-5xl font-bold text-slate-800 lg:mb-12 mb-8">
        Secure your business relationships with T&Cs tailored to your business
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
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">General Terms and Conditions: What are they?</h3>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
              General terms and conditions of sale (GTC) <strong>govern commercial relationships </strong> between a professional and their clients. This document sets out the conditions of sale for a product or service.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">Who is concerned by the drafting of T&Cs?</h3>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
              All professionals who sell products or offer services are required to draft general terms and conditions of sale. Micro-entrepreneurs are not exempt from the obligation to draft general terms and conditions of sale.
              </p>
              
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">What are the risks?</h3>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
              If you do not draw up a T&C or if you forget certain mandatory information, you are liable to an administrative fine which can amount to 15,000 euros for an individual and 75,000 euros for a legal entity. 
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 