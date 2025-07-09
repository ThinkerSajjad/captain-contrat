import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";
import NeedToKnowImage from "../../../../public/images/business/eurl/Créateur entreprise.png";

export function NeedToKnow() {
  return (
    <section className="py-10 md:py-16 lg:px-10 px-0">
      <PageContainer>
        <h2 className="text-center text-3xl lg:text-5xl font-bold text-slate-800 lg:mb-12 mb-8">
          Everything you need to know about the GDPR privacy policy
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
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                What is a privacy policy?
              </h3>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
                The privacy policy is a mandatory document for all companies
                that collect personal data.
              </p>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
                This document should allow users to know what personal
                information is collected, how it is used, and how the company
                processes the data.
              </p>
              <p className="text-slate-700 font-medium lg:text-base text-sm">
                Failure to comply with this obligation may result in significant
                administrative and criminal sanctions.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                What information should be included in the privacy policy?
              </h3>

              <ul className="text-slate-700 font-medium lg:text-base text-sm mt-2 space-y-1">
                <li className="list-disc ms-4">
                  The company's contact details
                </li>
                <li className="list-disc ms-4">
                  The reason why you are collecting the data
                </li>
                <li className="list-disc ms-4">
                  The legal basis for data processing among the 6 provided for
                  by the GDPR
                </li>
                <li className="list-disc ms-4">
                  The mandatory or optional nature of data collection
                </li>
                <li className="list-disc ms-4">
                  The consequences in the event of non-consent by the data
                  subject to provide their personal data
                </li>
                <li className="list-disc ms-4">The recipients of the data</li>
                <li className="list-disc ms-4">
                  The duration of data retention
                </li>
                <li className="list-disc ms-4">User rights</li>
                <li className="list-disc ms-4">
                  The contact details of the company's data protection officer
                </li>
                <li className="list-disc ms-4">
                  The mention of the right to lodge a complaint with the CNIL
                </li>
              </ul>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
