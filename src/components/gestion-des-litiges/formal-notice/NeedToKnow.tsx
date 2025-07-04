import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";
import NeedToKnowImage from "../../../../public/images/business/eurl/Créateur entreprise.png";

export function NeedToKnow() {
  return (
    <section className="py-10 md:py-16 lg:px-10 px-0">
      <PageContainer>
        <h2 className="text-center text-3xl lg:text-5xl font-bold text-slate-800 lg:mb-12 mb-8">
        Everything you need to know about formal notices for recovery
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
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">What is a formal notice of recovery?</h3>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
              Formal notice is one of the steps in the  debt recovery process.

The purpose of the formal notice is to ask a debtor to fulfill his contractual obligations and to inform him of the risks he takes if he does not do so.  </p>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
              The formal notice is a legal document that allows you to recover a debt. It is one of the steps in the debt recovery process.  <br /> <br />

              The purpose of the formal notice is to ask a debtor to fulfill his contractual obligations and to inform him of the risks he takes if he does not do so.  <br /> <br />

              The formal notice is a legal document that allows you to recover a debt. It is one of the steps in the debt recovery process.  <br /> <br />

              The purpose of the formal notice is to ask a debtor to fulfill his contractual obligations and to inform him of the risks he takes if he does not do so.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">What information should be included in the formal notice? </h3>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
              - the words “formal notice”
              </p>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
              - the nature of the debtor's obligation
              </p>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
                - the description of the dispute ;
              </p>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
              - the time limit within which he has to fulfil his obligation;
              </p>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
              - the risks taken if the debtor does not fulfill his obligations.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 