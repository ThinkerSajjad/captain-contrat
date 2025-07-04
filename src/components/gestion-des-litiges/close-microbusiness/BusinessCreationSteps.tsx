"use client"

import PageContainer from "@/components/layout/PageContainer"



export function BusinessCreationSteps() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <PageContainer>
          <div className="mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mx-auto font-bold text-center text-slate-800 mb-4">
            The 4 steps to closing your micro-business
            </h1>
            <p className="lg:mb-20 mb-10 text-center text-slate-700 font-medium lg:text-xl text-base">🚀 You develop your business, we manage your legal affairs!</p>
            <div className="relative max-w-6xl mx-auto">
              {/* Continuous timeline for medium and large screens */}
              <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-[2.5px] bg-secondary transform -translate-x-1/2 z-0"></div>
              
              <div className="space-y-0 md:space-y-16">
                {/* Step 1 - Left side */}
                <div className="relative flex flex-col md:flex-row items-center">
                  {/* Timeline line only for small screens - first segment */}
                  <div className="md:hidden absolute left-0 top-[calc(50%+3px)] h-[calc(100%+3rem)] w-[2.5px] bg-secondary"></div>
                  
                  <div className="md:w-1/2 md:pr-16 pl-8 md:pl-0 mb-8 md:mb-0">
                    <div className="text-left md:text-left bg-lightPrimary lg:p-6 p-5 rounded-xl">
                      <p className="text-xl md:text-2xl font-semibold mb-3 text-slate-700">
                        <span className="text-slate-800">1. Online Questionnaire</span>
                      </p>
                      <p className="text-slate-700 font-medium leading-relaxed">
                      Answer a few questions in less than 5 minutes to clarify your project and your expectations.
                      </p>
                    </div>
                  </div>
                  {/* Timeline dot - mobile left, desktop center */}
                  <div className="absolute -left-2.5 top-1/2 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-secondary border-3 border-white shadow-sm z-10"></div>
                  <div className="md:w-1/2 md:pl-16"></div>
                </div>
 
                {/* Step 2 - Right side */}
                <div className="relative flex flex-col md:flex-row items-center">
                  {/* Timeline line only for small screens - middle segment */}
                  <div className="md:hidden absolute left-0 top-0 h-full w-[2.5px] bg-secondary"></div>
                  
                  <div className="md:w-1/2 md:pr-16"></div>
                  {/* Timeline dot - mobile left, desktop center */}
                  <div className="absolute -left-2.5 top-1/2 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-secondary border-3 border-white shadow-sm z-10"></div>
                  <div className="md:w-1/2 md:pl-16 pl-8 mb-8 md:mb-0">
                    <div className="text-left md:text-left bg-lightPrimary lg:p-6 p-5 rounded-xl">
                      <p className="text-xl md:text-2xl font-semibold mb-3 text-slate-700">
                        <span className="text-slate-800">2. File verified within 24 hours</span>
                      </p>
                      <p className="text-slate-700 font-medium leading-relaxed">
                      Your lawyer will inform you as soon as your file has been validated.
                      </p>
                    </div>
                  </div>
                </div>
 
                {/* Step 3 - Left side */}
                <div className="relative flex flex-col md:flex-row items-center">
                  {/* Timeline line only for small screens - middle segment */}
                  <div className="md:hidden absolute left-0 top-0 h-full w-[2.5px] bg-secondary"></div>
                  
                  <div className="md:w-1/2 md:pr-16 pl-8 md:pl-0 mb-8 md:mb-0">
                    <div className="text-left md:text-left bg-lightPrimary lg:p-6 p-5 rounded-xl">
                      <p className="text-xl md:text-2xl font-semibold mb-3 text-slate-700">
                        <span className="text-slate-800">3. Validation by the registry</span>
                      </p>
                      <p className="text-slate-700 font-medium leading-relaxed mb-2">
                      The registry validates files within 48 hours on average.
                      </p>
                      
                    </div>
                  </div>
                  {/* Timeline dot - mobile left, desktop center */}
                  <div className="absolute -left-2.5 top-1/2 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-secondary border-3 border-white shadow-sm z-10"></div>
                  <div className="md:w-1/2 md:pl-16"></div>
                </div>
 
                {/* Step 4 - Right side */}
                <div className="relative flex flex-col md:flex-row items-center">
                  {/* Timeline line only for small screens - last segment */}
                  <div className="md:hidden absolute left-0 top-0 h-[calc(50%-3px)] w-[2.5px] bg-secondary"></div>
                  
                  <div className="md:w-1/2 md:pr-16"></div>
                  {/* Timeline dot - mobile left, desktop center */}
                  <div className="absolute -left-2.5 top-1/2 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-secondary border-3 border-white shadow-sm z-10"></div>
                  <div className="md:w-1/2 md:pl-16 pl-8 mb-8 md:mb-0">
                    <div className="text-left md:text-left bg-lightPrimary lg:p-6 p-5 rounded-xl">
                      <p className="text-xl md:text-2xl font-semibold mb-3 text-slate-700">
                        <span className="text-slate-800">4. Receipt of the KBIS</span>
                     
                      </p>
                      <p className="text-slate-700 font-medium leading-relaxed mb-2">
                      Your company is created. Your lawyer sends you your KBIS (Business Registration Certificate).
                      </p>
                     
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
      </PageContainer>
    </section>
  )
}
