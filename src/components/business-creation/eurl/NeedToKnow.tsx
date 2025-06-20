import Image from "next/image";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import NeedToKnowImage from "../../../../public/images/business/eurl/Créateur entreprise.png";

export function NeedToKnow() {
  return (
    <section className="py-10 md:py-16 lg:px-10 px-0">
      <PageContainer>
        <h2 className="text-center text-3xl lg:text-5xl font-bold text-slate-800 lg:mb-12 mb-8">
          Everything you need to know about<br />
          creating an EURL online
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
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">What is an EURL?</h3>
              <p className="text-slate-700 font-medium lg:text-lg text-base">
                An <Link href="/creer-son-entreprise/eurl/interet-statut-eurl" className="text-blue-600 hover:underline">EURL</Link> (Limited Liability Sole Proprietorship) is formed by a single partner. It is also 
                referred to as a <strong>single-member SARL</strong>. Indeed, the legal regime of the EURL is similar to that 
                of the SARL, subject to the adaptations made necessary by the presence of a single partner. 
                This <strong>legal form</strong> can be used for <strong>industrial, commercial, craft, liberal</strong> (SELARL - Limited 
                Liability Company) but also <strong>agricultural</strong> (EARL - Limited Liability Agricultural Company) 
                activities.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">Why create an EURL?</h3>
              <p className="text-slate-700 font-medium lg:text-lg text-base">
                An EURL can be created in two cases. A single partner, whether a legal entity or an individual, 
                decides to establish a sole proprietorship. Another scenario: all the shares of an SARL are 
                held by a single partner.
              </p>
              <p className="text-slate-700 mt-3 font-medium lg:text-lg text-base">
                The sole shareholder is <strong>liable for the company&apos;s debts within the limit of his or her 
                contributions</strong>. Unlike the traditional sole proprietorship, the EURL protects the 
                entrepreneur&apos;s personal assets in the event of bankruptcy or financial difficulties.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 