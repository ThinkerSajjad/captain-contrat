'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageContainer from '../layout/PageContainer';
import { BiCheckCircle } from 'react-icons/bi';
import { BsFillCheckCircleFill } from 'react-icons/bs';

interface ComparisonFeature {
  id: string;
  title: string;
  items: string[];
}

const features: ComparisonFeature[] = [
  {
    id: 'minutes_legal_notice',
    title: '📋 Minutes and legal notice',
    items: [
      'Minutes and complete file ready to sign online',
      'Ability to make multiple changes at once',
      'Publication of your legal notice by our lawyers'
    ]
  },
  {
    id: 'file_registry',
    title: '🏛️ Filing of the file with the registry',
    items: [
      'Verification and processing of the file by our lawyers',
      'Submitting your file to the registry'
    ]
  },
  {
    id: 'premium_support',
    title: '⭐ Premium Support for 1 month',
    items: [
      'Express processing of the file in less than 24 hours',
      'Answers to all your legal questions in less than 24 hours',
      'Library of the 60 most used legal documents'
    ]
  }
];

export default function PricingComparison() {
  return (
    <div className="w-full max-w-7xl mx-auto py-16">
      <PageContainer>
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-[#1E335F] mb-12">
          Compare our support packages
        </h2>
        <div className="lg:grid grid-cols-1 lg:grid-cols-4 gap-6 hidden">
          {/* Empty first column for feature descriptions on desktop */}
          <div className="hidden lg:block"></div>
          {/* Solo Pack */}
          <div className="bg-white rounded-lg px-6 py-1 text-center">
            <Image
              src="/icons/user.png"
              alt="Solo Pack"
              width={48}
              height={48}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#1E335F] mb-2">Solo Pack</h3>
            <div className="mb-4">
              <span className="text-2xl font-bold">€49</span>
              <span className="text-sm text-gray-600 ml-1">excluding VAT</span>
              <div className="text-xs text-gray-500">+ Administrative fees</div>
            </div>
        
          </div>
          {/* Standard Pack */}
          <div className="bg-white rounded-lg px-6 py-1 text-center">
            <Image
              src="/icons/handshake.png"
              alt="Standard Pack"
              width={48}
              height={48}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#1E335F] mb-2">Standard Pack</h3>
            <div className="mb-4">
              <span className="text-2xl font-bold">€149</span>
              <span className="text-sm text-gray-600 ml-1">excluding VAT</span>
              <div className="text-xs text-gray-500">+ Administrative fees</div>
            </div>
        
          </div>
          {/* Serenity Pack */}
          <div className="bg-white rounded-lg px-6 py-1 text-center">
            <Image
              src="/icons/coach.png"
              alt="Serenity Pack"
              width={48}
              height={48}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#1E335F] mb-2">Serenity Pack</h3>
            <div className="mb-4">
              <span className="text-2xl font-bold">€249</span>
              <span className="text-sm text-gray-600 ml-1">excluding VAT</span>
              <div className="text-xs text-gray-500">+ Administrative fees</div>
            </div>
        
          </div>
        </div>
        {/* Features Comparison */}
        <div className=" bg-white rounded-lg overflow-hidden">
          {/* Mobile view */}
          <div className="lg:hidden">
            {/* Solo Pack Features */}
            <div className="bg-[#FFF5EB] px-6 py-1 mb-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="/icons/user.png"
                  alt="Solo Pack"
                  width={32}
                  height={32}
                  className="mr-3"
                />
                <h3 className="text-xl font-semibold text-[#1E335F]">Solo Pack</h3>
              </div>
              <div className="mb-2">
                <span className="text-2xl font-bold">€49</span>
                <span className="text-sm text-gray-600 ml-1">excluding VAT</span>
              </div>
              <div className="text-xs text-gray-500 mb-6">+ Administrative fees</div>
        
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-tertiary mr-2 mt-1"><BsFillCheckCircleFill /></span>
                  <span>Minutes and complete file ready to sign online</span>
                </div>
                <div className="flex items-start">
                  <span className="text-tertiary mr-2 mt-1"><BsFillCheckCircleFill /></span>
                  <span>Publication of your legal notice by our lawyers</span>
                </div>
                <div className="flex items-start">
                  <span className="text-tertiary mr-2 mt-1"><BsFillCheckCircleFill /></span>
                  <span>Ability to make multiple changes at once</span>
                </div>
              </div>
            </div>
            {/* Standard Pack Features */}
            <div className="bg-[#FFF5EB] px-6 py-1 mb-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="/icons/handshake.png"
                  alt="Standard Pack"
                  width={32}
                  height={32}
                  className="mr-3"
                />
                <h3 className="text-xl font-semibold text-[#1E335F]">Standard Pack</h3>
              </div>
              <div className="mb-2">
                <span className="text-2xl font-bold">€149</span>
                <span className="text-sm text-gray-600 ml-1">excluding VAT</span>
              </div>
              <div className="text-xs text-gray-500 mb-6">+ Administrative fees</div>
        
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-tertiary mr-2 mt-1"><BsFillCheckCircleFill /></span>
                  <span>Minutes and complete file ready to sign online</span>
                </div>
                <div className="flex items-start">
                  <span className="text-tertiary mr-2 mt-1"><BsFillCheckCircleFill /></span>
                  <span>Publication of your legal notice by our lawyers</span>
                </div>
                <div className="flex items-start">
                  <span className="text-tertiary mr-2 mt-1"><BsFillCheckCircleFill /></span>
                  <span>Ability to make multiple changes at once</span>
                </div>
                <div className="flex items-start">
                  <span className="text-tertiary mr-2 mt-1"><BsFillCheckCircleFill /></span>
                  <span>Verification and processing of the file by our lawyers</span>
                </div>
                <div className="flex items-start">
                  <span className="text-tertiary mr-2 mt-1"><BsFillCheckCircleFill /></span>
                  <span>Submitting your file to the registry</span>
                </div>
              </div>
            </div>
            {/* Serenity Pack Features */}
            <div className="bg-[#FFF5EB] px-6 py-1 mb-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Image
                  src="/icons/coach.png"
                  alt="Serenity Pack"
                  width={32}
                  height={32}
                  className="mr-3"
                />
                <h3 className="text-xl font-semibold text-[#1E335F]">Serenity Pack</h3>
              </div>
              <div className="mb-2">
                <span className="text-2xl font-bold">€249</span>
                <span className="text-sm text-gray-600 ml-1">excluding VAT</span>
              </div>
              <div className="text-xs text-gray-500 mb-6">+ Administrative fees</div>
        
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-tertiary mr-2 mt-1"><BsFillCheckCircleFill /></span>
                  <span>Minutes and complete file ready to sign online</span>
                </div>
                <div className="flex items-start">
                  <span className="text-tertiary mr-2 mt-1"><BsFillCheckCircleFill /></span>
                  <span>Publication of your legal notice by our lawyers</span>
                </div>
                <div className="flex items-start">
                  <span className="text-tertiary mr-2 mt-1"><BsFillCheckCircleFill /></span>
                  <span>Ability to make multiple changes at once</span>
                </div>
                <div className="flex items-start">
                  <span className="text-tertiary mr-2 mt-1"><BsFillCheckCircleFill /></span>
                  <span>Verification and processing of the file by our lawyers</span>
                </div>
                <div className="flex items-start">
                  <span className="text-tertiary mr-2 mt-1"><BsFillCheckCircleFill /></span>
                  <span>Submitting your file to the registry</span>
                </div>
                <div className="flex items-start">
                  <span className="text-tertiary mr-2 mt-1"><BsFillCheckCircleFill /></span>
                  <span>Express processing of the file in less than 24 hours</span>
                </div>
                <div className="flex items-start">
                  <span className="text-tertiary mr-2 mt-1"><BsFillCheckCircleFill /></span>
                  <span>Answers to all your legal questions in less than 24 hours</span>
                </div>
                <div className="flex items-start">
                  <span className="text-tertiary mr-2 mt-1"><BsFillCheckCircleFill /></span>
                  <span>Library of the 60 most used legal documents</span>
                </div>
              </div>
            </div>
          </div>
          {/* Desktop view */}
          <div className="hidden lg:block">
            {features.map((section) => (
              <div key={section.id} className="border-b border-gray-200 last:border-b-0">
                <div className="grid grid-cols-4 items-start">
                  {/* Feature Title */}
                  <div className="p-6 bg-white">
                    <h4 className="font-semibold text-[#1E335F]">{section.title}</h4>
                    <ul className="mt-2 space-y-2">
                      {section.items.map((item, index) => (
                        <li key={index} className="text-sm text-gray-600">{item}</li>
                      ))}
                    </ul>
                  </div>
                  {/* Solo Pack */}
                  <div className="p-6 flex items-center justify-center">
                    {section.id === 'minutes_legal_notice' ? (
                      <span className="text-tertiary text-2xl"><BsFillCheckCircleFill /></span>
                    ) : section.id === 'file_registry' ? (
                      <span className="text-gray-400 text-2xl"><BsFillCheckCircleFill /></span>
                    ) : (
                      <span className="text-gray-400 text-2xl"><BsFillCheckCircleFill /></span>
                    )}
                  </div>
                  {/* Standard Pack */}
                  <div className="p-6 flex items-center justify-center">
                    {section.id === 'minutes_legal_notice' || section.id === 'file_registry' ? (
                      <span className="text-tertiary text-2xl"><BsFillCheckCircleFill /></span>
                    ) : (
                      <span className="text-gray-400 text-2xl"><BsFillCheckCircleFill /></span>
                    )}
                  </div>
                  {/* Serenity Pack */}
                  <div className="p-6 flex items-center justify-center">
                    <span className="text-tertiary text-2xl"><BsFillCheckCircleFill /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/meetings/rdv-captain-contrat" className="bg-secondary-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all lg:mt-10 mt-6">
            Make an appointment
          </Link>
        </div>
      </PageContainer>
    </div>
  );
} 