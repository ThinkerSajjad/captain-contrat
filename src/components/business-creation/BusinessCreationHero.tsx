import Image from "next/image";
import Link from "next/link";
import { Building, ChevronRight, List, ShoppingCart, Star, UserRound, Zap } from "lucide-react";

import avisVerifiesLogo from "../../../public/images/hero/avis-verifies-logo.png";
import googleLogo from "../../../public/images/hero/google-logo.svg";
import PageContainer from "@/components/layout/PageContainer";
import { TbTie } from "react-icons/tb";

export function BusinessCreationHero() {
  return (
    <section className="relative lg:py-20 py-10">
      <div className="absolute inset-0 bg-primary w-full h-full" />
      
      <PageContainer>
        <div className="relative text-center lg:space-y-6 space-y-4 mx-auto">
          <h1 className="lg:text-6xl text-5xl font-bold lg:leading-tight leading-1 font-crimson max-w-4xl mx-auto">
            <span className="text-tertiary relative lg:text-6xl text-4xl">
              Create your <span className="text-secondary">business</span> online with
              complete peace of mind
            </span>
          </h1>
          <p className="lg:text-xl text-lg text-gray-800 max-w-5xl mx-auto lg:mt-6 mt-3 font-lato">
            Bylaws, procedures for obtaining the KBIS, accounting: our experts support you every step of the way.
          </p>
        </div>
        
        <div className="relative mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {/* SAS/SASU Card */}
          <Link href="/funnel/service_choices/1?source=%2Fcreer-entreprise%2Fcreation-sas-en-ligne" className="block">
            <div className="bg-white py-4 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-5">
                  <div className="lg:w-14 lg:h-14 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Zap className="lg:w-6 lg:h-6 w-4 h-4 text-gray-700" />
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="lg:text-xl text-lg font-semibold">SAS/SASU</p>
                  <p className="text-sm md:block hidden text-gray-600">Soft & Flexible</p>
                </div>
                <div className="flex-shrink-0">
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </div>
              </div>
            </div>
          </Link>
          
          {/* SARL/EURL Card */}
          <Link href="/funnel/service_choices/1?source=%2Fcreer-entreprise%2Fcreation-eurl-en-ligne" className="block">
            <div className="bg-white py-4 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-5">
                  <div className="lg:w-14 lg:h-14 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <ShoppingCart className="lg:w-6 lg:h-6 w-4 h-4 text-gray-700" />
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="lg:text-xl text-lg font-semibold">SARL/EURL</p>
                  <p className="text-sm md:block hidden text-gray-600">Family & Supervised</p>
                </div>
                <div className="flex-shrink-0">
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </div>
              </div>
            </div>
          </Link>
          
          {/* Micro-enterprise Card */}
          <Link href="/funnel/service_choices/1?source=%2Fcreer-entreprise%2Fcreer-micro-entreprise" className="block">
            <div className="bg-white py-4 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-5">
                  <div className="lg:w-14 lg:h-14 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <UserRound className="lg:w-6 lg:h-6 w-4 h-4 text-gray-700" />
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="lg:text-xl text-lg font-semibold">Micro-enterprise</p>
                  <p className="text-sm md:block hidden text-gray-600">Simple & fast</p>
                </div>
                <div className="flex-shrink-0">
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                </div>
              </div>
            </div>
          </Link>
          
          {/* SCI Card */}
          <Link href="/funnel/service_choices/1?source=%2Fcreer-entreprise%2Fcreation-sci-en-ligne" className="block">
            <div className="bg-white py-4 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-5">
                  <div className="lg:w-14 lg:h-14 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Building className="lg:w-6 lg:h-6 w-4 h-4 text-gray-700" />
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="lg:text-xl text-lg font-semibold">SCI</p>
                  <p className="text-sm md:block hidden text-gray-600">Investment & transmission</p>
                </div>
                <div className="flex-shrink-0">
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </div>
              </div>
            </div>
          </Link>
          
          {/* Sole proprietorship Card */}
          <Link href="/funnel/service_choices/1?source=%2Fcreer-entreprise%2Frediger-pacte-associes" className="block">
            <div className="bg-white py-4 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-5">
                  <div className="lg:w-14 lg:h-14 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <TbTie className="lg:w-6 lg:h-6 w-4 h-4 text-gray-700" />
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="lg:text-xl text-lg font-semibold">Shareholder agreement</p>
                  <p className="text-sm md:block hidden text-gray-600">Flexible & simple</p>
                </div>
                <div className="flex-shrink-0">
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </div>
              </div>
            </div>
          </Link>
          
          {/* Others Card */}
          <Link href="/creer-entreprise" className="block">
            <div className="bg-white py-4 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-5">
                  <div className="lg:w-14 lg:h-14 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <List className="lg:w-6 lg:h-6 w-4 h-4 text-gray-700" />
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="lg:text-xl text-lg font-semibold">Others</p>
                  <p className="text-sm md:block hidden text-gray-600">Association, SELAS...</p>
                </div>
                <div className="flex-shrink-0">
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </div>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="relative lg:mt-12 mt-8 bg-transparent lg:p-6 p-4 rounded-lg shadow-sm border border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:text-left text-center">
              <p className="lg:text-xl text-lg font-semibold inline-block mr-2">Still thinking?</p>
              <span className="text-gray-600 lg:text-lg text-base font-medium">Take advantage of our free tools: simulators, PDF guides, articles, etc.</span>
            </div>
            <div className="mt-4 md:mt-0 mb-2">
              <Link href="/creer-entreprise/projet-creation-dentreprise" className="bg-secondary text-white px-6 py-3 rounded-full lg:text-lg text-base font-semibold hover:bg-[#e06c6c] transition-colors">
                Deepen my project
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