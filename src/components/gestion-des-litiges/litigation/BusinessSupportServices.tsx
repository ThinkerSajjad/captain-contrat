"use client"

import PageContainer from "@/components/layout/PageContainer"
import { useRef } from "react"
import capitalDeposit from "../../../../public/images/common/business-support-icons/capital-deposit.png"
import domiciliation from "../../../../public/images/common/business-support-icons/domiciliation.svg"
import trademarkFiling from "../../../../public/images/common/business-support-icons/trademark-filling.svg"
import Image from "next/image"

export function BusinessSupportServices() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-8 md:py-20 bg-white">
      <PageContainer>
        <div className="mx-auto relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mx-auto font-bold text-center text-slate-800 lg:mb-16 mb-12">
          3 reasons to use Captain Contrat to find your lawyer
          </h2>
          
          {/* Desktop/Tablet grid layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
            {/* Capital deposit card */}
            <div className="bg-primary rounded-xl p-6 flex flex-col items-center">
              <div className="mb-6">
                <Image src={capitalDeposit} alt="Capital deposit" />
              </div>
              <h3 className="lg:text-3xl text-2xl font-semibold text-slate-800 mb-4">Expertise</h3>
              <div className="text-slate-700">
                <p className="mb-2">Our lawyers have all been carefully selected, and we have worked with them for several years. Our teams know them well and will be able to direct you to the most suitable lawyer based on your needs and constraints.</p>
              </div>
            </div>

            {/* Domiciliation card */}
            <div className="bg-primary rounded-xl p-6 flex flex-col items-center">
              <div className="mb-6">
                <Image src={domiciliation} alt="Domiciliation" />
              </div>
              <h3 className="lg:text-3xl text-2xl font-semibold text-slate-800 mb-4">Accompaniment</h3>
              <div className="text-slate-700">
                <p className="mb-2">Before providing a quote, the lawyer takes the time to discuss your needs with you and advise you on the best options. During the consultation, your lawyer is available by email or phone.</p>
              </div>
            </div>

            {/* Trademark filing card */}
            <div className="bg-primary rounded-xl p-6 flex flex-col items-center">
              <div className="mb-6">
                <Image src={trademarkFiling} alt="Trademark filing" />
              </div>
              <h3 className="lg:text-3xl text-2xl font-semibold text-slate-800 mb-4">Simplicity</h3>
              <div className="text-slate-700">
                <p className="mb-2">To streamline your client experience as much as possible, you'll have access to an online platform to centralize your documents. You'll be able to communicate directly with your lawyer and our teams.</p>
              </div>
            </div>
          </div>
          
          {/* Mobile horizontal scroll */}
          <div className="md:hidden relative">
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory scrollbar-hide"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {/* Capital deposit card */}
              <div className="w-[80vw] flex-shrink-0 snap-start bg-primary rounded-xl p-6 flex flex-col items-center">
                <div className="mb-6">
                  <Image src={capitalDeposit} alt="Capital deposit" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Expertise</h3>
                <div className="text-slate-700">
                  <p className="mb-2">Our lawyers have all been carefully selected, and we have worked with them for several years. Our teams know them well and will be able to direct you to the most suitable lawyer based on your needs and constraints.</p>
                </div>
              </div>

              {/* Domiciliation card */}
              <div className="w-[80vw] flex-shrink-0 snap-start bg-primary rounded-xl p-6 flex flex-col items-center">
                <div className="mb-6">
                  <Image src={domiciliation} alt="Domiciliation" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Accompaniment</h3>
                <div className="text-slate-700">
                  <p className="mb-2">Before providing a quote, the lawyer takes the time to discuss your needs with you and advise you on the best options. During the consultation, your lawyer is available by email or phone.</p>
                </div>
              </div>

              {/* Trademark filing card */}
              <div className="w-[80vw] flex-shrink-0 snap-start bg-primary rounded-xl p-6 flex flex-col items-center">
                <div className="mb-6">
                  <Image src={trademarkFiling} alt="Trademark filing" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Simplicity</h3>
                <div className="text-slate-700">
                  <p className="mb-2">To streamline your client experience as much as possible, you'll have access to an online platform to centralize your documents. You'll be able to communicate directly with your lawyer and our teams.</p>
                </div>
              </div>

              
            </div>
            
            {/* Arrow buttons */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 flex gap-4 z-20">
              <button
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollBy({ left: -window.innerWidth * 0.9, behavior: "smooth" });
                  }
                }}
                className="bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100"
                aria-label="Scroll left"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollBy({ left: window.innerWidth * 0.9, behavior: "smooth" });
                  }
                }}
                className="bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100"
                aria-label="Scroll right"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </PageContainer>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  )
} 