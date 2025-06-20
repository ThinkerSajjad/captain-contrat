import React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import Link from 'next/link';
import { FaWpforms } from 'react-icons/fa';
import { LuHandshake } from 'react-icons/lu';

export default function SupportService() {
  return (
    <section className="py-16 bg-lightPrimary lg:px-16 px-0">
      <PageContainer>
        <h2 className="lg:text-5xl text-4xl font-bold text-center text-tertiary lg:mb-16 mb-12">
          Our support services for filing your trademark
        </h2>

        <div className="flex lg:flex-row flex-col gap-8 mx-auto justify-center w-full">
          {/* Basic Plan */}
          <div className="bg-white rounded-lg w-full">
            <div className="flex flex-col mb-4 bg-blue-50 lg:p-8 p-6 rounded-t-lg gap-3">
              <div className="flex items-center gap-3">
                  <div className="mr-3">
                    <FaWpforms className="lg:w-10 lg:h-10 w-8 h-8 text-tertiary" />
                  </div>
                  <h3 className="text-2xl font-bold text-tertiary">Basic</h3>
              </div>
            <p className="text-gray-700 lg:mb-8 mb-2 font-semibold">I simply file my trademark</p>
            </div>


            <div className="lg:p-8 p-6">
                <div className="lg:mb-8 mb-6">
                  <span className="text-5xl font-bold text-tertiary">89</span>
                  <span className="text-sm text-gray-500 ml-1 font-semibold">€ excluding VAT</span>
                </div>
                <div className="space-y-3 lg:mb-8 mb-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Complete file ready to be signed and verified by a lawyer</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Submitting your file to the INPI</p>
                  </div>
                </div>
            </div>
          </div>

          {/* Serenity Plan */}
          <div className="bg-white rounded-lg w-full">
            <div className="flex flex-col mb-4 bg-blue-50 lg:p-8 p-6 rounded-t-lg gap-3">
              <div className="flex items-center gap-3">
                  <div className="mr-3">
                    <LuHandshake className="lg:w-10 lg:h-10 w-8 h-8 text-tertiary" />
                  </div>
                  <h3 className="text-2xl font-bold text-tertiary">Serenity</h3>
              </div>
              <p className="text-gray-700 lg:mb-8 mb-2 font-semibold">I receive priority treatment</p>
            </div>

            <div className="lg:p-8 p-6">
                <div className="lg:mb-8 mb-6">
                  <span className="text-5xl font-bold text-tertiary">119</span>
                  <span className="text-sm text-gray-500 ml-1 font-semibold">€ excluding VAT</span>
                </div>
                <div className="space-y-3 lg:mb-8 mb-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Complete file ready to sign</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Submitting your file to the INPI</p>
                  </div>
                  <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <p className="text-gray-700">Express processing of the file</p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <p className="text-gray-700">INPI anti-rejection insurance</p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <p className="text-gray-700">1 year of monitoring of your brand</p>
              </div>
                </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link 
            href="/proteger-sa-societe/depot-de-marque-inpi-en-ligne#start" 
            className="bg-[#F25C54] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all w-full sm:w-auto text-center"
          >
            Register my trademark
          </Link>
        </div>
      </PageContainer>
    </section>
  );
} 