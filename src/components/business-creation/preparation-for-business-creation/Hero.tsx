"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, Star } from "lucide-react"
import PageContainer from "@/components/layout/PageContainer"

export function Hero() {

  return (
    <section className="relative lg:py-20 py-10 text-center">
      
      <div className="absolute inset-0 bg-[#fbeada] w-full h-full" />
      <PageContainer>

        <div className="relative lg:space-y-6 space-y-4 mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-600 mb-10">
          <Link href="/creer-entreprise" className="text-sm font-semibold hover:underline">
            Company creation
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-sm font-semibold">Preparation for business creation</span>
        </div>
          <h1 className="lg:text-6xl text-5xl font-bold leading-tight font-crimson">Resources to bring your project to life</h1>
          <p className="text-xl text-gray-800 max-w-5xl mx-auto lg:mt-6 mt-3 font-lato">
          Build your project using our business creation support tools
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 xl:px-6 lg:px-0 px-0 lg:mt-16 mt-8 mx-auto items-stretch">
          {/* Card 1 */}
          <Link href="/funnel/service_choices/1?source=%2Fsimulateur%2Ftrouver-ma-forme-juridique" className="block w-full h-full">
            <div className="bg-white md:py-4 py-3 px-3 rounded-lg shadow-sm flex lg:flex-col flex-row h-full cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 flex justify-start items-center lg:mb-4 mb-0 mr-4 lg:mr-0">
                <Image
                  src="/images/hero/create-image.png"
                  alt="Create business"
                  width={64}
                  height={64}
                  className="w-20 h-20"
                />
              </div>
              <div className="flex flex-col flex-grow min-w-0">
                <h3 className="lg:text-2xl text-xl font-semibold text-black mb-3 font-lato text-left">Find my legal form</h3>
                <p className="text-base text-gray-600 lg:mb-4 mb-2 font-lato text-left">Choosing the right structure for your project</p>
                <div className="flex-grow" />
                <div className="flex justify-end items-end w-full">
                  <div className="text-[#f27c7c]">
                    <ArrowRight className="w-7 h-7" />
                    <span className="sr-only">Learn more</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          {/* Card 2 */}
          <Link href="/funnel/service_choices/1?source=%2Fsimulateur%2Fchoisir-regime-fiscal" className="block w-full h-full">
            <div className="bg-white md:py-4 py-3 px-3 rounded-lg shadow-sm flex lg:flex-col flex-row h-full cursor-pointer hover:shadow-md transition-shadow">
              <div className=" flex-shrink-0 flex justify-start items-center lg:mb-4 mb-0 mr-4 lg:mr-0">
                <Image
                  src="/images/hero/entrust-icon.png"
                  alt="Entrust accounting"
                  width={64}
                  height={64}
                  className="w-20 h-20"
                />
              </div>
              <div className="flex flex-col flex-grow min-w-0">
                <h3 className="lg:text-2xl text-xl font-semibold text-black mb-3 font-lato text-left">Find my tax and VAT regime</h3>
                <p className="text-base text-gray-600 lg:mb-4 mb-2 font-lato text-left">Choose the most advantageous plan according to your situation</p>
                <div className="flex-grow" />
                <div className="flex justify-end items-end w-full">
                  <div className="text-[#f27c7c]">
                    <ArrowRight className="w-7 h-7" />
                    <span className="sr-only">Learn more</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          {/* Card 3 */}
          <Link href="/funnel/service_choices/1?source=%2Fsimulateur%2Feligibilite-acre" className="block w-full h-full">
            <div className="bg-white md:py-4 py-3 px-3 rounded-lg shadow-sm flex lg:flex-col flex-row h-full cursor-pointer hover:shadow-md transition-shadow">
              <div className=" flex-shrink-0 flex justify-start items-center lg:mb-4 mb-0 mr-4 lg:mr-0">
                <Image
                  src="/images/hero/modify-status-icon.png"
                  alt="Modify status"
                  width={64}
                  height={64}
                  className="w-20 h-20"
                />
              </div>
              <div className="flex flex-col flex-grow min-w-0">
                <h3 className="lg:text-2xl text-xl font-semibold text-black mb-3 font-lato text-left">Test my eligibility for ACRE</h3>
                <p className="text-base text-gray-600 lg:mb-4 mb-2 font-lato text-left">Maximize your chances of receiving financial aid</p>
                <div className="flex-grow" />
                <div className="flex justify-end items-end w-full">
                  <div className="text-[#f27c7c]">
                    <ArrowRight className="w-7 h-7" />
                    <span className="sr-only">Learn more</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          {/* Card 4 */}
          <Link href="/creer-entreprise/aide-au-choix-forme-juridique" className="block w-full h-full">
            <div className="bg-white md:py-4 py-3 px-3 rounded-lg shadow-sm flex lg:flex-col flex-row h-full cursor-pointer hover:shadow-md transition-shadow">
              <div className=" flex-shrink-0 flex justify-start items-center lg:mb-4 mb-0 mr-4 lg:mr-0">
                <Image
                  src="/images/hero/drafting-contract.png"
                  alt="Drafting contracts"
                  width={64}
                  height={64}
                  className="w-20 h-20"
                />
              </div>
              <div className="flex flex-col flex-grow min-w-0">
                <h3 className="lg:text-2xl text-xl font-semibold text-black mb-3 font-lato text-left">Talk to a lawyer</h3>
                <p className="text-base text-gray-600 lg:mb-4 mb-2 font-lato text-left">Get answers to your questions in 30 minutes on the phone with a lawyer</p>
                <div className="flex-grow" />
                <div className="flex justify-end items-end w-full">
                  <div className="text-[#f27c7c]">
                    <ArrowRight className="w-7 h-7" />
                    <span className="sr-only">Learn more</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          
        </div>
      </PageContainer>
    </section>
  )
} 