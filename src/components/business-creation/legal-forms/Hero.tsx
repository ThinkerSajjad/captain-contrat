import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import avisVerifiesLogo from "../../../../public/images/hero/avis-verifies-logo.png";
import Mockup from "../../../../public/images/business/shareholder-agreement/img+mock-up-desktop_pacte.webp";
import PageContainer from "@/components/layout/PageContainer";

export function Hero() {
  return (
    <section className="relative py-12 bg-primary">
      <PageContainer>

        <div className="flex flex-col lg:flex-row justify-between gap-8 items-center">
          <div>
       
            {/* Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 max-w-3xl">
              <span className="text-tertiary">Find the  </span>
              <span className="text-secondary-dark">right legal form</span>
            </h1>

            {/* Bullet Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-2">
                <div className="mt-1 bg-secondary-dark rounded-full p-1 w-4 h-4"></div>
                <p className="text-gray-800">
                  <span className="font-semibold"> 30 minutes </span> to find the legal form and tax and social security system best suited to your situation 
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 bg-secondary-dark rounded-full p-1 w-4 h-4"></div>
                <p className="text-gray-800">
                  <span className="font-semibold"> Get your appointment </span>  with one of our lawyers within 24 hours
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 bg-secondary-dark rounded-full p-1 w-4 h-4"></div>
                <p className="text-gray-800">
                  <span className="font-semibold"> Add affordable formulas</span> for €15 to make the best choice
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="#prices" className="bg-secondary-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
                Make an appointment
              </Link>
              
            </div>

            {/* Reviews */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-3">
                <Image src={avisVerifiesLogo} alt="Avis Vérifiés" width={80} height={30} />
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-4 h-4 text-gray-700 fill-current" />
                  ))}
                  <Star className="w-4 h-4 text-gray-700 fill-current opacity-50" />
                </div>
                <span className="text-gray-700 text-sm">
                  <strong>4.6</strong> (<Link href="#reviews" className="underline">1693 reviews</Link>)
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:w-fit w-full flex justify-center">
            <Image 
              src={Mockup} 
              alt="SAS creation on mobile" 
              className="lg:w-auto w-[90%] md:w-[60%] h-auto max-h-[80%]"
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 