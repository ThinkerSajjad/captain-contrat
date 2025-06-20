'use client';

import Image from 'next/image';
import PageContainer from '../layout/PageContainer';
import { Check } from 'lucide-react';

// Use a different image that's already in the project
import laptopPlatformImage from '../../../public/images/modify-business/Module Vue produit - LP.png';

interface BenefitItemProps {
  text: string;
}

const BenefitItem = ({ text }: BenefitItemProps) => {
  return (
    <div className="flex items-start lg:gap-3 gap-2 lg:mb-6 mb-4">
      <div className="mt-1 flex-shrink-0">
        <Check className="h-5 w-5 text-tertiary" />
      </div>
      <p className="text-gray-700 text-lg">{text}</p>
    </div>
  );
};

export function PlatformBenifits() {
  const benefits = [
    "Complete your file online in a few simple steps",
    "Easily import the requested documents",
    "Simplify your life with electronic signatures",
    "Contact your dedicated lawyer at any time",
    "Get reliable and fast answers to all your questions"
  ];

  return (
    <section className=" bg-lightPrimary">
      <PageContainer>

        <div className="flex flex-col lg:flex-row items-center lg:gap-12 gap-6">
          <div className="w-full lg:w-3/5 relative">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
              <Image
                src={laptopPlatformImage}
                alt="Online entrepreneur platform"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            
            {/* Decorative elements */}
            <div className="hidden md:block absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-blue-100 opacity-50" />
            <div className="hidden md:block absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-32 h-32 rounded-full bg-red-500 opacity-20" />
          </div>

          <div className="w-full lg:w-2/5">
            {benefits.map((benefit, index) => (
              <BenefitItem key={index} text={benefit} />
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 