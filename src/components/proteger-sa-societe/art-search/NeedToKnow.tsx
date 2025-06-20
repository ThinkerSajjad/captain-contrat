import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";
import NeedToKnowImage from "../../../../public/images/business/eurl/Créateur entreprise.png";

export function NeedToKnow() {
  return (
    <section className="py-10 md:py-16 lg:px-10 px-0">
      <PageContainer>
        <h2 className="text-center text-3xl lg:text-5xl font-bold text-slate-800 lg:mb-12 mb-8">
        The importance of protecting your brand
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
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">What is a trademark filing?</h3>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
              According to industrial property law, a trademark is a sign that allows you to distinguish your products and/or services from those of your competitors.  <br /> <br />

              The trademark registration process is necessary to <strong>protect your company's strategic assets by granting you</strong> a 10-year operating monopoly on French territory. This monopoly is renewable indefinitely.  <br /> <br />

              This procedure gives you the possibility of bringing an action for infringement or unfair competition if a third party uses or imitates your trademark.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">Who can file a trademark? </h3>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
              <strong>Any natural or legal person can file a trademark with the National Institute of Industrial Property (INPI) .</strong> <br /> <br />

              Whether you are an individual, craftsman, trader, self-employed professional or a sole proprietorship, you can choose to register a trademark.  <br /> <br />

              You can also file it in the name of a civil company, a foundation, an association, a community, etc.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 