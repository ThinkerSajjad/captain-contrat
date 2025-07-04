import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";

import avisVerifiesLogo from "../../../public/images/hero/avis-verifies-logo.png";
import Mockup from "../../../public/images/expertise-compatable/Group 12-2.png";
import PageContainer from "../layout/PageContainer";

export function Hero() {
  return (
    <section className="relative py-12 bg-primary">
      <PageContainer>

        <div className="flex flex-col lg:flex-row justify-between gap-8 items-center">
          <div>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-600 mb-10">
          
          <span className="text-sm">Chartered accountant</span>
        </div>
            {/* Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold mb-8">
              <span className="text-tertiary">Delegate </span>
              <span className="text-secondary-dark">your accounting</span>
              <span className="text-tertiary"> to focus on your business</span>
            </h1>

            {/* Bullet Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-2">
                <div className="mt-1 bg-secondary-dark rounded-full p-1 w-4 h-4"></div>
                <p className="text-gray-800">
                  <span className="font-semibold">Accountant and chartered accountant dedicated </span> to monitoring your activity
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 bg-secondary-dark rounded-full p-1 w-4 h-4"></div>
                <p className="text-gray-800">
                  <span className="font-semibold">Intuitive platform :</span> your file completed in just a few minutes
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 bg-secondary-dark rounded-full p-1 w-4 h-4"></div>
                <p className="text-gray-800">
                  <span className="font-semibold">Affordable prices :</span> packages tailored to your needs and with no hidden costs
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/meetings/rdv-captain-contrat" className="bg-secondary-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
                Contact an Advisor
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