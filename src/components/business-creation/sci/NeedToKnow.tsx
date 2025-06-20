import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";
import NeedToKnowImage from "../../../../public/images/business/eurl/Créateur entreprise.png";

export function NeedToKnow() {
  return (
    <section className="py-10 md:py-16 lg:px-10 px-0">
      <PageContainer>
        <h2 className="text-center text-3xl lg:text-5xl font-bold text-slate-800 lg:mb-12 mb-8">
        The SCI: a system adapted to real estate companies
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
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">What is an SCI?</h3>
              <p className="text-slate-700 font-medium lg:text-lg text-base">
              <strong>A real estate company (SCI)</strong> is a legal structure formed by at least two partners. It is intended for individuals who wish to own one or more real estate properties and jointly manage them. Each partner holds shares in the company.  
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">What is the point of creating a family SCI?</h3>
              <p className="text-slate-700 font-medium lg:text-lg text-base">
              A SCI can be family-owned (SCI de famille) when parents wish to manage their assets with the help of their children. The goal is to ultimately bequeath this asset to them. In this case, all the partners are from the same family. <br />
              Creating a family SCI has many advantages. It allows:
              </p>
              <ul className="text-slate-700 mt-3 font-medium lg:text-lg text-base list-disc lg:pl-6 pl-4">
              <li><strong>The transfer of real estate :</strong> the family SCI facilitates the succession of assets to heirs.</li>
              <li><strong>Flexibility in terms of taxation :</strong> the possibility of opting for IS, but this choice is irrevocable.</li>
              <li>Simplified management . </li>
              <li>Managing a rental investment .</li>
              </ul>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 