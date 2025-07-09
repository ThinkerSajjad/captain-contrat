import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import Image from 'next/image';
import { FaPhone } from 'react-icons/fa';
import CoachImage from '../../../../public/images/protect-business/trademark/Coach captain contrat.png'

export default function EntrepreneurialSupport() {
  return (
    <section className="lg:py-16 py-10 bg-white">
      <PageContainer>
        <h2 className="lg:text-5xl text-4xl font-bold text-center text-tertiary lg:mb-16 mb-10">
          Need advice to make your project a reality?
        </h2>

        <div className="flex lg:flex-row flex-col items-center lg:gap-12 gap-6 mx-auto justify-center w-full">
          {/* Image section */}
          <div className="lg:w-1/2 max-w-md w-full rounded-lg p-4 relative">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <Image 
                src={CoachImage} 
                alt="Entrepreneurial coach" 
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Text section */}
          <div className="lg:w-1/2 w-full">
            <h3 className="text-2xl font-bold text-tertiary lg:mb-6 mb-4">
              An entrepreneurial coach to support your project
            </h3>
            
            <p className="text-gray-700 lg:mb-6 mb-4">
              Tatiana and all of our business coaches help you understand the different opportunities 
              available to you as an entrepreneur.
            </p>
            
            <p className="text-gray-700 font-semibold lg:mb-8 mb-6">
              Monday to Friday from 9:30 a.m. to 6:00 p.m.
            </p>
            
            <a 
              href="tel:0183816725" 
              className="inline-flex items-center bg-[#F25C54] text-white px-5 py-3 rounded-full hover:bg-opacity-90 transition-all"
            >
              <FaPhone className="mr-3" />
              <span className="font-semibold">01 83 81 67 25</span>
              <span className="ml-2 text-xs bg-white text-[#F25C54] px-2 py-1 rounded-full">FR</span>
            </a>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 