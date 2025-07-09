import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CircleDollarSign, CircleX, FileUser, Key, Scale, Star } from "lucide-react";

import avisVerifiesLogo from "../../../public/images/hero/avis-verifies-logo.png";
import googleLogo from "../../../public/images/hero/google-logo.svg";
import PageContainer from "@/components/layout/PageContainer";

export function CommercialContractHero() {
  return (
    <section className="relative lg:py-20 py-10">
      <div className="absolute inset-0 bg-primary w-full h-full" />
      
      <PageContainer>
        <div className="relative text-center lg:space-y-6 space-y-4 mx-auto">
          <h1 className="lg:text-6xl text-5xl font-bold lg:leading-tight leading-1 font-crimson max-w-4xl mx-auto">
            <span className="text-tertiary relative lg:text-6xl text-4xl">
            Get your <span className="text-secondary">contract</span> online with complete peace of mind
            
            </span>
          </h1>
          <p className="lg:text-xl text-lg text-gray-800 max-w-5xl mx-auto lg:mt-6 mt-3 font-lato">
          Whether you need a document to generate or a specialized lawyer, our teams will support you every step of the way.
          </p>
        </div>
        
        <div className="relative w-full mt-12">
          <div className="flex flex-wrap justify-center gap-4 mx-auto">
            {/* First row - 3 cards */}
            {/* SAS/SASU Card */}
            <div className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.33%-16px)]">
              <Link href="/funnel/service_choices/1?source=%2Frediger-un-contrat%2Frediger-conditions-generales-de-vente" className="block h-full">
                <div className="bg-white py-4 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-5">
                      <div className="lg:w-14 lg:h-14 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <Key className="lg:w-6 lg:h-6 w-4 h-4 text-gray-700" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="lg:text-xl text-lg font-semibold">General Conditions of Sale</p>
                      <p className="text-sm md:block hidden text-gray-600">E-commerce or physical sales</p>
                    </div>
                    <div className="flex-shrink-0">
                      <ChevronRight className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* SARL/EURL Card */}
            <div className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.33%-16px)]">
              <Link href="/funnel/service_choices/1?source=%2Frediger-un-contrat%2Frediger-contrat-de-prestation-de-services" className="block h-full">
                <div className="bg-white py-4 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-5">
                      <div className="lg:w-14 lg:h-14 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <FileUser className="lg:w-6 lg:h-6 w-4 h-4 text-gray-700" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="lg:text-xl text-lg font-semibold">Service provision contract</p>
                      <p className="text-sm md:block hidden text-gray-600">Services for a fee</p>
                    </div>
                    <div className="flex-shrink-0">
                      <ChevronRight className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Micro-enterprise Card */}
            <div className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.33%-16px)]">
              <Link href="/funnel/service_choices/1?source=%2Frediger-un-contrat%2Frediger-contrat-de-sous-traitance" className="block h-full">
                <div className="bg-white py-4 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-5">
                      <div className="lg:w-14 lg:h-14 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <CircleDollarSign className="lg:w-6 lg:h-6 w-4 h-4 text-gray-700" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="lg:text-xl text-lg font-semibold">Subcontracting contract</p>
                      <p className="text-sm md:block hidden text-gray-600">Delegate a commercial service</p>
                    </div>
                    <div className="flex-shrink-0">
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Second row - 2 cards centered */}
            {/* SCI Card */}
            <div className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.33%-16px)]">
              <Link href="/funnel/service_choices/1?source=%2Fcreer-entreprise%2Frediger-pacte-associes" className="block h-full">
                <div className="bg-white py-4 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-5">
                      <div className="lg:w-14 lg:h-14 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <Scale className="lg:w-6 lg:h-6 w-4 h-4 text-gray-700" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="lg:text-xl text-lg font-semibold">Shareholders&apos; agreement</p>
                      <p className="text-sm md:block hidden text-gray-600">Relationships between partners</p>
                    </div>
                    <div className="flex-shrink-0">
                      <ChevronRight className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Sole proprietorship Card */}
            <div className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.33%-16px)]">
              <Link href="/funnel/service_choices/1?source=%2Frediger-un-contrat%2Frediger-contrat-de-location-commerciale" className="block h-full">
                <div className="bg-white py-4 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-5">
                      <div className="lg:w-14 lg:h-14 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <CircleX className="lg:w-6 lg:h-6 w-4 h-4 text-gray-700" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="lg:text-xl text-lg font-semibold">Commercial lease</p>
                      <p className="text-sm md:block hidden text-gray-600">Rent a commercial space</p>
                    </div>
                    <div className="flex-shrink-0">
                      <ChevronRight className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Sole proprietorship Card */}
            <div className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.33%-16px)]">
              <Link href="/funnel/service_choices/1?source=%2Frediger-un-contrat%2Frediger-contrat-commercial" className="block h-full">
                <div className="bg-white py-4 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-5">
                      <div className="lg:w-14 lg:h-14 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <CircleX className="lg:w-6 lg:h-6 w-4 h-4 text-gray-700" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="lg:text-xl text-lg font-semibold">Commercial contract</p>
                      <p className="text-sm md:block hidden text-gray-600">Business relations</p>
                    </div>
                    <div className="flex-shrink-0">
                      <ChevronRight className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>


        <div className="relative lg:mt-12 mt-8 bg-transparent lg:p-6 p-4 rounded-lg shadow-sm border border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:text-left text-center">
              <p className="lg:text-xl text-lg font-semibold inline-block mr-2">Do you need another contract? <span className="font-normal">We&apos;ll assess it together and recommend the right lawyer.</span></p>
              
            </div>
            <div className="mt-4 md:mt-0 mb-2">
              <Link href="/funnel/service_choices/1?source=%2Favocat%2Ffind-a-lawyer" className="bg-secondary text-white px-6 py-3 rounded-full lg:text-lg text-base font-semibold hover:bg-[#e06c6c] transition-colors">
                Consult a lawyer
              </Link>
            </div>
          </div>
        </div>
        
        
        <div className="relative mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-3">
            <div>
              <Image src={avisVerifiesLogo} alt="Verified" className="w-20" />
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 text-gray-700 fill-current" />
              ))}
            </div>
            <span className="text-gray-700 text-sm font-lato">
              <strong>4.6</strong> (<span className="underline">1693 reviews</span>)
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <div>
              <Image src={googleLogo} alt="Google" className="w-20" />
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-4 h-4 text-gray-700 fill-current" />
              ))}
              <Star className="w-4 h-4 text-gray-700 fill-current opacity-50" />
            </div>
            <span className="text-gray-700 text-sm font-lato">
              <strong>4.3</strong> (<span className="underline">1334 reviews</span>)
            </span>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 