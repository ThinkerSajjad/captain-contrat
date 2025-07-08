import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import avisVerifiesLogo from "../../../../public/images/hero/avis-verifies-logo.png";
import PageContainer from "@/components/layout/PageContainer";

export function Hero() {
  return (
    <section className="relative py-12 bg-primary">
      <PageContainer>
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-start">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-[#1E293B]">Legal guide to </span>
              <span className="text-[#F87171]">creating your EURL</span>
            </h1>

            <p className="text-gray-700 text-lg mb-6">
              Everything you need to know to create and manage a single-member limited liability company
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-[#F87171]">✓</span>
                <span>Understand EURL advantages for solo entrepreneurs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#F87171]">✓</span>
                <span>Set up your company structure correctly</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#F87171]">✓</span>
                <span>Optimize tax and social security status</span>
              </li>
            </ul>

            <p className="mb-2">Still have questions?</p>
            <Link href="/resources" className="text-[#F87171] underline mb-8 inline-block">
              Discover all our resources for solo entrepreneurs
            </Link>

            {/* Reviews */}
            <div className="flex items-center gap-3 mt-6">
              <Image
                src={avisVerifiesLogo}
                alt="Avis Vérifiés"
                width={80}
                height={30}
              />
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gray-700 fill-current"
                  />
                ))}
                <Star className="w-4 h-4 text-gray-700 fill-current opacity-50" />
              </div>
              <span className="text-gray-700 text-sm">
                <strong>4.6</strong> (
                <Link href="#reviews" className="underline">
                  1693 reviews
                </Link>
                )
              </span>
            </div>
          </div>

          <div className="lg:w-[45%] w-full bg-white p-8 rounded-xl shadow-md self-center">
            <form className="space-y-6">
              <div>
                <input
                  type="email"
                  placeholder="E-mail address*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F87171]"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F87171]"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Where are you with your project?*
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F87171] bg-white"
                  required
                >
                  <option value="">Select</option>
                  <option value="planning">I'm ready to get started</option>
                  <option value="ready">I'm curious and finding out more</option>
                  <option value="in-progress">I'm still thinking about my project</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary-dark cursor-pointer text-white py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
              >
                Get the EURL guide for free →
              </button>
              <p className="text-center text-sm text-gray-600">
                Free guide sent by email
              </p>
            </form>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 