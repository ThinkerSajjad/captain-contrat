'use client';

import { Check, X } from 'lucide-react';
import Link from 'next/link';
import { FaWpforms } from 'react-icons/fa';
import { FaPersonSnowboarding } from 'react-icons/fa6';
import { LuHandshake } from 'react-icons/lu';

interface ComparisonFeature {
  id: string;
  text: string;
  includedIn: ('serenity' | 'standard' | 'solo')[];
  value?: {
    serenity?: string;
    standard?: string;
    solo?: string;
  };
}

const features: ComparisonFeature[] = [
  {
    id: 'legal_file',
    text: 'Legal file',
    includedIn: [],
    value: {
      serenity: '',
      standard: '',
      solo: '',
    }
  },
  {
    id: 'statutes',
    text: 'Statutes ready to sign online',
    includedIn: ['serenity', 'standard', 'solo']
  },
  {
    id: 'administrative_file',
    text: 'Complete administrative file',
    includedIn: ['serenity', 'standard', 'solo']
  },
  {
    id: 'tax_system',
    text: 'Help in choosing the tax and social security system',
    includedIn: ['serenity', 'standard']
  },
  {
    id: 'administrative_formalities',
    text: 'Administrative formalities',
    includedIn: [],
    value: {
      serenity: '',
      standard: '',
      solo: '',
    }
  },
  {
    id: 'verification',
    text: 'Verification and processing of the file by a lawyer',
    includedIn: ['serenity', 'standard'],
    value: {
      serenity: '24 hours',
      standard: '48 hours'
    }
  },
  {
    id: 'rbe_registration',
    text: 'Registration with the RBE',
    includedIn: ['serenity', 'standard']
  },
  {
    id: 'registry_filing',
    text: 'Filing of the file with the registry',
    includedIn: ['serenity', 'standard']
  },
  {
    id: 'kbis_siret',
    text: 'Obtaining the KBIS and SIRET',
    includedIn: ['serenity', 'standard']
  },
  {
    id: 'anti_rejection',
    text: 'Anti-rejection insurance for the registry',
    includedIn: ['serenity', 'standard']
  },
  {
    id: 'premium_assistance',
    text: 'Premium Assistance',
    includedIn: [],
    value: {
      serenity: '',
      standard: '',
      solo: '',
    }
  },
  {
    id: 'processing_time',
    text: 'Processing in less than 24 hours guaranteed at each stage',
    includedIn: ['serenity']
  },
  {
    id: 'lawyer_assistance',
    text: 'Unlimited telephone assistance with a lawyer',
    includedIn: ['serenity']
  },
  {
    id: 'public_aid',
    text: 'Information on public aid',
    includedIn: ['serenity']
  },
  {
    id: 'legal_questions',
    text: '1 year of answers to your legal questions',
    includedIn: ['serenity']
  },
  {
    id: 'mandatory_fees',
    text: 'Mandatory fees',
    includedIn: [],
    value: {
      serenity: '',
      standard: '',
      solo: '',
    }
  },
  {
    id: 'legal_notice',
    text: 'Publication of the legal notice',
    includedIn: ['serenity', 'standard', 'solo'],
    value: {
      serenity: '199€',
      standard: '199€',
      solo: '199€'
    }
  },
  {
    id: 'company_registration',
    text: 'Company registration',
    includedIn: ['serenity', 'standard'],
    value: {
      serenity: '63€',
      standard: '63€'
    }
  }
];

export default function PricingComparison() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-12">
      {/* Title */}
      <h2 className="text-2xl lg:text-4xl font-bold text-tertiary text-center mb-8">
        Compare the different packs
      </h2>

      {/* Plans Header */}
      <div className="grid grid-cols-6 lg:gap-6 gap-2 mb-8 justify-end w-full">
        {/* Empty space for feature column */}
        <div className="col-span-3"></div>

        {/* Serenity Plan */}
        <div className="col-span-1 text-center">
          <div className="flex items-center justify-center mb-2">
            <FaPersonSnowboarding className="w-8 h-8 mr-3 text-tertiary" />
            <span className="font-semibold text-lg md:block hidden">Serenity</span>
          </div>
          <div className="mb-4 md:block hidden">
            <span className="text-2xl font-bold">€269</span>
            <span className="text-sm text-gray-600 ml-1">excluding VAT</span>
          </div>
          <Link href="/funnel/accounting_presentation" className="w-full md:block hidden bg-red-400 hover:bg-red-500 text-white rounded-full py-2 px-4 transition-colors">
            Choose
          </Link>
        </div>

        {/* Standard Plan */}
        <div className="col-span-1 text-center">
          <div className="flex items-center justify-center mb-2">
            <LuHandshake className="w-8 h-8 mr-3 text-tertiary" />
            <span className="font-semibold text-lg md:block hidden">Standard</span>
          </div>
          <div className="mb-4 md:block hidden">
            <span className="text-2xl font-bold">99€</span>
            <span className="text-sm text-gray-600 ml-1">excluding VAT</span>
          </div>
          <Link href="/funnel/accounting_presentation" className="w-full md:block hidden bg-red-400 hover:bg-red-500 text-white rounded-full py-2 px-4 transition-colors">
            Choose
          </Link>
        </div>

        {/* Solo Plan */}
        <div className="col-span-1 text-center">
          <div className="flex items-center justify-center mb-2">
            <FaWpforms className="w-8 h-8 mr-3 text-tertiary" />
            <span className="font-semibold text-lg md:block hidden">Solo</span>
          </div>
          <div className="mb-4 md:block hidden">
            <span className="text-2xl font-bold">0€</span>
            <span className="text-sm text-gray-600 ml-1">excluding VAT</span>
          </div>
          <Link href="/funnel/accounting_presentation" className="w-full md:block hidden bg-red-400 hover:bg-red-500 text-white rounded-full py-2 px-4 transition-colors">
            Choose
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden">
        {/* Features list */}
        <div className="divide-y divide-gray-200">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className={`grid grid-cols-6 lg:py-4 py-3 ${
                feature.value?.serenity === '' ? 'bg-blue-50' : ''
              }`}
            >
              {/* Feature name */}
              <div className="col-span-3 pl-6 pr-4 flex items-center">
                <span className={`text-gray-900 ${
                  feature.value?.serenity === '' 
                    ? 'text-tertiary font-bold text-lg' 
                    : 'font-medium'
                }`}>
                  {feature.text}
                </span>
              </div>

              {/* Serenity column */}
              <div className="col-span-1 text-center flex items-center justify-center">
                {feature.value ? (
                  <span className="text-gray-900">{feature.value.serenity}</span>
                ) : (
                  feature.includedIn.includes('serenity') ? (
                    <Check className="h-5 w-5 text-tertiary" />
                  ) : (
                    <X className="h-5 w-5 text-gray-300" />
                  )
                )}
              </div>

              {/* Standard column */}
              <div className="col-span-1 text-center flex items-center justify-center">
                {feature.value ? (
                  <span className="text-gray-900">{feature.value.standard}</span>
                ) : (
                  feature.includedIn.includes('standard') ? (
                    <Check className="h-5 w-5 text-tertiary" />
                  ) : (
                    <X className="h-5 w-5 text-gray-300" />
                  )
                )}
              </div>

              {/* Solo column */}
              <div className="col-span-1 text-center flex items-center justify-center">
                {feature.value ? (
                  <span className="text-gray-900">{feature.value.solo}</span>
                ) : (
                  feature.includedIn.includes('solo') ? (
                    <Check className="h-5 w-5 text-tertiary" />
                  ) : (
                    <X className="h-5 w-5 text-gray-300" />
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 