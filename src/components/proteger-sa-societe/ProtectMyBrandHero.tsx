import Image from "next/image";
import Link from "next/link";
import { BookText, ChevronRight, Key, Lock, Pencil, Shield, Star } from "lucide-react";

import avisVerifiesLogo from "../../../public/images/hero/avis-verifies-logo.png";
import googleLogo from "../../../public/images/hero/google-logo.svg";
import PageContainer from "@/components/layout/PageContainer";

export function ProtectMyBrandHero() {
  return (
    <section className="relative lg:py-20 py-10">
      <div className="absolute inset-0 bg-primary w-full h-full" />
      
      <PageContainer>
        <div className="relative text-center lg:space-y-6 space-y-4 mx-auto">
          <h1 className="lg:text-6xl text-5xl font-bold lg:leading-tight leading-1 font-crimson max-w-4xl mx-auto">
            <span className="text-tertiary relative lg:text-6xl text-4xl">
            <span className="text-secondary">Protecting your business</span> has never been easier
            </span>
          </h1>
          <p className="lg:text-xl text-lg text-gray-800 max-w-5xl mx-auto lg:mt-6 mt-3 font-lato">
          Bylaws, procedures for obtaining the KBIS, accounting: our experts support you every step of the way.
          </p>
        </div>
        
        <div className="relative w-full mt-12">
          <div className="flex flex-wrap justify-center gap-4 mx-auto">
            {/* First row - 3 cards */}
            {/* SAS/SASU Card */}
            <div className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.33%-16px)]">
              <Link href="/creer-entreprise/creation-sasu-en-ligne" className="block h-full">
                <div className="bg-white py-4 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-5">
                      <div className="lg:w-14 lg:h-14 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <Key className="lg:w-6 lg:h-6 w-4 h-4 text-gray-700" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="lg:text-xl text-lg font-semibold">Trademark filing</p>
                      <p className="text-sm md:block hidden text-gray-600">Obtain and operating monopoly</p>
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
              <Link href="/creer-entreprise/creation-eurl-en-ligne" className="block h-full">
                <div className="bg-white py-4 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-5">
                      <div className="lg:w-14 lg:h-14 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <Pencil className="lg:w-6 lg:h-6 w-4 h-4 text-gray-700" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="lg:text-xl text-lg font-semibold">Filling of designs and models</p>
                      <p className="text-sm md:block hidden text-gray-600">Protect your visual identity</p>
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
              <Link href="/creer-entreprise/creer-micro-entreprise" className="block h-full">
                <div className="bg-white py-4 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-5">
                      <div className="lg:w-14 lg:h-14 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <Shield className="lg:w-6 lg:h-6 w-4 h-4 text-gray-700" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="lg:text-xl text-lg font-semibold">GDPR compliance</p>
                      <p className="text-sm md:block hidden text-gray-600">Secure your customers' data</p>
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
              <Link href="/creer-entreprise/creation-sci-en-ligne" className="block h-full">
                <div className="bg-white py-4 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-5">
                      <div className="lg:w-14 lg:h-14 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <Lock className="lg:w-6 lg:h-6 w-4 h-4 text-gray-700" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="lg:text-xl text-lg font-semibold">Privacy policy</p>
                      <p className="text-sm md:block hidden text-gray-600">Frame your data protection</p>
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
              <Link href="/creer-entreprise" className="block h-full">
                <div className="bg-white py-4 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-5">
                      <div className="lg:w-14 lg:h-14 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <BookText className="lg:w-6 lg:h-6 w-4 h-4 text-gray-700" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="lg:text-xl text-lg font-semibold">Confidentiality agreement</p>
                      <p className="text-sm md:block hidden text-gray-600">Supervise the exchange of information</p>
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