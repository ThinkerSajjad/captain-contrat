"use client";

import Image from "next/image";
import Pennylane from "../../../public/images/home/supporters/PL.png";
import Google from "../../../public/images/home/supporters/Google.png";
import Kandbaz from "../../../public/images/home/supporters/Kandbaz.png";
import BPI from "../../../public/images/home/supporters/BPI.png";
import BNP from "../../../public/images/home/supporters/BNP.png";
import Qonto from "../../../public/images/home/supporters/Qonto.png";

const supporters = [
  { name: "Pennylane", img: Pennylane },
  { name: "Google", img: Google },
  { name: "Kandbaz", img: Kandbaz },
  { name: "BPI France", img: BPI },
  { name: "BNP Paribas", img: BNP },
  { name: "Qonto", img: Qonto },
];

export function SupportersCarousel() {
  return (
    <section className="w-full py-12">
      <div className="max-w-full mx-auto px-4 flex flex-col items-center">
      <div className="w-full mx-auto flex justify-center">
                <h2 className="text-3xl w-fit lg:text-5xl font-bold text-center mx-6 md:mx-0 text-tertiary font-crimson lg:mb-12 mb-8 relative">
                  Our long-standing supporters
                  <span className="absolute -top-2 md:-right-10 -right-8 inline-block">
                    <svg width="100" height="55" viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M58 2C58 2 54.5 7.5 46 12" stroke="#F27C7C" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M44 2C44 2 42.5 6.5 38 10" stroke="#F27C7C" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M60 14C60 14 56.5 16.5 52 18" stroke="#F27C7C" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </h2>
            </div>
        <div className="relative w-full overflow-hidden">
          {/* Fade overlays */}
          <div className="pointer-events-none absolute left-0 top-0 h-full md:w-40 w-24 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full md:w-40 w-24 z-10 bg-gradient-to-l from-white to-transparent" />
          {/* Carousel */}
          <div className="w-full">
            <div className="flex items-center gap-10 lg:gap-40 animate-carousel whitespace-nowrap">
              {supporters.concat(supporters).map((supporter, idx) => (
                <div key={idx} className="inline-flex items-center justify-center h-20 min-w-[140px] opacity-80 grayscale hover:grayscale-0 transition-all">
                  <Image
                    src={supporter.img}
                    alt={supporter.name}
                    
                    className="object-contain h-8 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-carousel {
          animation: carousel 15s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-carousel {
            animation: carousel 5s linear infinite;
          }
        }
      `}</style>
    </section>
  );
} 