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
              <span className="text-[#1E293B]">Approve and file your </span>
              <span className="text-[#F87171]">accounts with ease</span>
            </h1>

            <p className="text-gray-700 text-lg mb-6">
              Everything you need to know about the annual accounts approval process for your company
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-[#F87171]">✓</span>
                <span>Understand the legal requirements and deadlines</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#F87171]">✓</span>
                <span>Learn the step-by-step approval process</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#F87171]">✓</span>
                <span>Avoid common mistakes and penalties</span>
              </li>
            </ul>

            <p className="mb-2">Still have questions?</p>
            <Link href="/modifier-son-entreprise/approbation-comptes-en-ligne" className="text-[#F87171] underline mb-8 inline-block">
              Learn more about our account approval services
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
                <strong>4.7</strong> (
                <Link href="#reviews" className="underline">
                  1124 reviews
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
                  What type of company do you have?*
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F87171] bg-white"
                  required
                >
                  <option value="">Select</option>
                  <option value="sas">SAS/SASU</option>
                  <option value="sarl">SARL/EURL</option>
                  <option value="sci">SCI</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary-dark cursor-pointer text-white py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
              >
                Get the accounts guide for free →
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