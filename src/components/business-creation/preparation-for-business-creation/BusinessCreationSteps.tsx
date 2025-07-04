"use client"

import PageContainer from "@/components/layout/PageContainer"



export function BusinessCreationSteps() {
  return (
    <section className="py-8 md:py-20 bg-white">
      <PageContainer>
          <div className="mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mx-auto font-bold text-center text-slate-800 mb-4">
            What are the steps to start an online business?
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
                        <span className="text-slate-800">1. Choose your <span className="text-secondary">legal form</span></span>
                      </p>
                      <p className="text-slate-700 font-medium leading-relaxed">
                      Come with your project, we will bring it to life together! <br /> <br />
                      Whether you have already chosen or are still hesitating, our teams and resources are available to help you choose the right legal form.
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
                        <span className="text-slate-800">2. Detail your <span className="text-secondary">project</span></span>
                      </p>
                      <p className="text-slate-700 font-medium leading-relaxed">
                      Answer a few questions in less than 5 minutes to clarify your project and your expectations.
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
                        <span className="text-slate-800">3. Build your <span className="text-secondary">file</span> with the help of a lawyer</span>
                      </p>
                      <p className="text-slate-700 font-medium leading-relaxed mb-2">
                      Your lawyer will help you complete your articles of association by phone or text message. They will then validate your file and submit it to the One-Stop Shop.
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
                        <span className="text-slate-800">4. Deposit your <span className="text-secondary">share capital</span></span>
                     
                      </p>
                      <p className="text-slate-700 font-medium leading-relaxed mb-2">
                      Thanks to our partnership with Qonto , you have almost nothing to do: sending your documents to the bank is automatic. <br /> <br />
                      Get your certificate of deposit of funds in the shortest time on the market.
                      </p>
                     
                    </div>
                  </div>
                </div>

                {/* Step 5 - Left side */}
                <div className="relative flex flex-col md:flex-row items-center">
                  {/* Timeline line only for small screens - middle segment */}
                  <div className="md:hidden absolute left-0 top-0 h-full w-[2.5px] bg-secondary"></div>
                  
                  <div className="md:w-1/2 md:pr-16 pl-8 md:pl-0 mb-8 md:mb-0">
                    <div className="text-left md:text-left bg-lightPrimary lg:p-6 p-5 rounded-xl">
                      <p className="text-xl md:text-2xl font-semibold mb-3 text-slate-700">
                        <span className="text-slate-800">5. Validation of the file by the <span className="text-secondary">registry</span></span>
                      </p>
                      <p className="text-slate-700 font-medium leading-relaxed mb-2">
                      The registry will process your application and register your business. <br /> <br />
                      Track the progress of your application at any time from your client area.
                      </p>
                      
                    </div>
                  </div>
                  {/* Timeline dot - mobile left, desktop center */}
                  <div className="absolute -left-2.5 top-1/2 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-secondary border-3 border-white shadow-sm z-10"></div>
                  <div className="md:w-1/2 md:pl-16"></div>
                </div>

                {/* Step 6 - Right side */}
                <div className="relative flex flex-col md:flex-row items-center">
                  {/* Timeline line only for small screens - last segment */}
                  <div className="md:hidden absolute left-0 top-0 h-[calc(50%-3px)] w-[2.5px] bg-secondary"></div>
                  
                  <div className="md:w-1/2 md:pr-16"></div>
                  {/* Timeline dot - mobile left, desktop center */}
                  <div className="absolute -left-2.5 top-1/2 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-secondary border-3 border-white shadow-sm z-10"></div>
                  <div className="md:w-1/2 md:pl-16 pl-8 mb-8 md:mb-0">
                    <div className="text-left md:text-left bg-lightPrimary lg:p-6 p-5 rounded-xl">
                      <p className="text-xl md:text-2xl font-semibold mb-3 text-slate-700">
                        <span className="text-slate-800">6. You receive your <span className="text-secondary">KBIS</span> ! 🎉</span>
                     
                      </p>
                      <p className="text-slate-700 font-medium leading-relaxed mb-2">
                      Your lawyer will send you your KBIS (Business Registration Certificate) via your client area.
                      All you have to do is download it. <br /> <br />

                      Congratulations, your company is officially created!
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
