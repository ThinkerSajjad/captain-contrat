import { Clock, PiggyBank, Shield } from "lucide-react";
import React from "react";
import PageContainer from "../layout/PageContainer";

export function WhyEntrepreneursLove() {
  return (
    <PageContainer>
        <section className="w-full lg:pt-16 lg:pb-24 pt-10 pb-10 bg-white">
          <div className="mx-auto">
            <div className="w-full mx-auto flex justify-center">
                <h2 className="text-3xl w-fit lg:text-5xl font-bold text-center mx-6 md:mx-0 text-tertiary font-crimson lg:mb-12 mb-8 relative">
                  Why entrepreneurs love Captain Contrat
                  <span className="absolute -top-2 md:-right-10 -right-2 inline-block">
                    <svg width="100" height="55" viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M58 2C58 2 54.5 7.5 46 12" stroke="#F27C7C" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M44 2C44 2 42.5 6.5 38 10" stroke="#F27C7C" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M60 14C60 14 56.5 16.5 52 18" stroke="#F27C7C" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
              {/* Card 1 */}
              <div className="flex-1 bg-[#eaf1f8] rounded-xl flex flex-col items-center justify-center px-6 lg:py-10 py-6 min-w-[260px]">
                <div className="flex items-center mb-4">
                  <span className="bg-white rounded-xl px-3 py-1 flex items-center text-tertiary font-bold text-base shadow-sm">
                    <Clock className="w-5 h-5 mr-2 inline-block" /> Save time
                  </span>
                </div>
                <div className="lg:text-6xl text-5xl font-bold text-[#f27c7c] mb-2">80%</div>
                <div className="text-gray-700 text-base mt-2">time saved on paperwork</div>
              </div>
              {/* Card 2 */}
              <div className="flex-1 bg-[#eaf1f8] rounded-xl flex flex-col items-center justify-center px-6 lg:py-10 py-6 min-w-[260px]">
                <div className="flex items-center mb-4">
                  <span className="bg-white rounded-xl px-3 py-1 flex items-center text-tertiary font-bold text-base shadow-sm">
                    <PiggyBank className="w-5 h-5 mr-2 inline-block" /> Economy
                  </span>
                </div>
                <div className="lg:text-6xl text-5xl font-bold text-[#f27c7c] mb-2">500€</div>
                <div className="text-gray-700 text-base mt-2">saved on average on procedures</div>
              </div>
              {/* Card 3 */}
              <div className="flex-1 bg-[#eaf1f8] rounded-xl flex flex-col items-center justify-center px-6 lg:py-10 py-6 min-w-[260px]">
                <div className="flex items-center mb-4">
                  <span className="bg-white rounded-xl px-3 py-1 flex items-center text-tertiary font-bold text-base shadow-sm">
                    <Shield className="w-5 h-5 mr-2 inline-block" /> Trust
                  </span>
                </div>
                <div className="lg:text-6xl text-5xl font-bold text-[#f27c7c] mb-2">+ 50</div>
                <div className="text-gray-700 text-base mt-2">experts to support them</div>
              </div>
            </div>
          </div>
        </section>
    </PageContainer>
  );
} 