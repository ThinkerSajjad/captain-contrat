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
          <h1 className="lg:text-5xl text-3xl font-bold leading-tight font-crimson text-tertiary">Our partners are at your disposal for all your needs</h1>
          <p className="text-xl text-gray-800 max-w-5xl mx-auto lg:mt-6 mt-3 font-lato">The best players on the market to support you</p>
          
        </div>
        <div className="flex justify-center items-center w-full relative mt-10">
          <Link href="/meetings/rdv-captain-contrat" className="bg-secondary text-white px-4 py-3 rounded-full font-semibold">I want to discuss it!</Link>
          
        </div>
      </PageContainer>
    </section>
  )
} 