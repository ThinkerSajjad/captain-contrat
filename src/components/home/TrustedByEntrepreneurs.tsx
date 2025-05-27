"use client";

import Image from "next/image";
import PageContainer from "../layout/PageContainer";
import { useRef } from "react";

const testimonials = [
  {
    type: "stat",
    value: "81%",
    description: "of our customers are satisfied after their order with Captain Contrat.",
  },
  {
    type: "testimonial",
    name: "Sandrine R.",
    role: "Pm&co - Lawyer consultation",
    quote: "Captain Contract for me? Precision, speed, reliability!",
    image: "/images/home/trusted-by-enterpreneurs/Sandrine.webp",
    dark: true,
  },
  {
    type: "testimonial",
    name: "Magaly V.",
    role: "Evolutiv - Creation of SASU",
    quote:
      "Really great! Very responsive, I dealt with them twice for the creation and cessation of my business, 5 years between each request and always at the top... The staff is very competent. I recommend 10,000%.",
    avatar: "/images/home/trusted-by-enterpreneurs/Magaly.webp",
    dark: false,
  },
  {
    type: "testimonial",
    name: "Carole P.",
    role: "Evolutiv Purchasing Advice - Legal Subscription",
    quote:
      "Captain Contrat provides tailored support; I felt listened to and understood from the very first exchanges.",
    image: "/images/home/trusted-by-enterpreneurs/Carole.webp",
    dark: true,
  },
  {
    type: "testimonial",
    name: "Frederic D.",
    role: "Innov - Creation of SaS",
    quote:
      "Super efficient, unbeatable prices given the exceptional quality of service. Always available to answer questions, a truly responsive team that listens to the customer. A loyal customer since the beginning, and I recommend Captain Contrat to all contractors.",
    avatar: "/images/home/trusted-by-enterpreneurs/Eric.webp",
    dark: false,
  },
  {
    type: "testimonial",
    name: "Matthew H.",
    role: "2EFM - Drafting contracts",
    quote:
      "Several projects... All brilliantly completed by the Captain Contrat teams",
    image: "/images/home/trusted-by-enterpreneurs/Matthieu.webp",
    dark: true,
  },
];

export function TrustedByEntrepreneurs() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollLeft() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -window.innerWidth * 0.9, behavior: "smooth" });
    }
  }
  function scrollRight() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: window.innerWidth * 0.9, behavior: "smooth" });
    }
  }

  return (
    <section className="w-full py-16 bg-white">
      <PageContainer>
      <div className="w-full mx-auto flex justify-center">
                <h2 className="text-3xl w-fit lg:text-5xl font-bold text-center mx-6 md:mx-0 text-tertiary font-crimson lg:mb-12 mb-8 relative">
                A trusted partner for all entrepreneurs
                  <span className="absolute -top-2 md:-right-10 -right-2 inline-block">
                    <svg width="100" height="55" viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M58 2C58 2 54.5 7.5 46 12" stroke="#F27C7C" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M44 2C44 2 42.5 6.5 38 10" stroke="#F27C7C" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M60 14C60 14 56.5 16.5 52 18" stroke="#F27C7C" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </h2>
            </div>
        {/* Large: 3 cols, 2 rows; Medium: 2 cols, 3 rows; Small: horizontal scroll */}
        <div className="hidden md:grid md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-6 lg:gap-8 items-stretch">
          {/* Row 1 */}
          <div className="bg-[#eaf1f8] rounded-2xl flex flex-col justify-center items-center p-8 h-full min-h-[220px]">
            <div className="text-[72px] leading-none font-bold text-accent mb-2">{testimonials[0].value}</div>
            <div className="text-base text-gray-700 text-center">{testimonials[0].description}</div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-full min-h-[220px] flex items-end bg-tertiary">
            {testimonials[1].image ? (
              <Image src={testimonials[1].image} alt={testimonials[1].name} fill className="object-cover opacity-60" />
            ) : null}
            <div className="relative z-10 p-6 text-white">
              <div className="font-bold text-xl mb-1">{testimonials[1].name}</div>
              <div className="text-sm mb-2">{testimonials[1].role}</div>
              <div className="font-semibold text-base">“{testimonials[1].quote}”</div>
            </div>
          </div>
          {/* Row 2 */}
          <div className="bg-[#eaf1f8] rounded-2xl flex flex-col justify-between p-8 h-full min-h-[220px]">
            <div className="flex items-center mb-2">
              <div className="font-bold text-xl text-tertiary mr-3">{testimonials[2].name}</div>
              {testimonials[2].avatar ? (
                <Image src={testimonials[2].avatar} alt={testimonials[2].name} width={40} height={40} className="rounded-full object-cover" />
              ) : null}
            </div>
            <div className="text-sm mb-1 text-tertiary font-semibold">{testimonials[2].role}</div>
            <div className="text-base text-gray-700">{testimonials[2].quote}</div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-full min-h-[220px] flex items-end bg-tertiary">
            {testimonials[3].image ? (
              <Image src={testimonials[3].image} alt={testimonials[3].name} fill className="object-cover opacity-60" />
            ) : null}
            <div className="relative z-10 p-6 text-white">
              <div className="font-bold text-xl mb-1">{testimonials[3].name}</div>
              <div className="text-sm mb-2">{testimonials[3].role}</div>
              <div className="font-semibold text-base">“{testimonials[3].quote}”</div>
            </div>
          </div>
          {/* Row 3 */}
          <div className="bg-[#eaf1f8] rounded-2xl flex flex-col justify-between p-8 h-full min-h-[220px]">
            <div className="flex items-center mb-2">
              <div className="font-bold text-xl text-tertiary mr-3">{testimonials[4].name}</div>
              {testimonials[4].avatar ? (
                <Image src={testimonials[4].avatar} alt={testimonials[4].name} width={40} height={40} className="rounded-full object-cover" />
              ) : null}
            </div>
            <div className="text-sm mb-1 text-tertiary font-semibold">{testimonials[4].role}</div>
            <div className="text-base text-gray-700">{testimonials[4].quote}</div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-full min-h-[220px] flex items-end bg-tertiary">
            {testimonials[5].image ? (
              <Image src={testimonials[5].image} alt={testimonials[5].name} fill className="object-cover opacity-60" />
            ) : null}
            <div className="relative z-10 p-6 text-white">
              <div className="font-bold text-xl mb-1">{testimonials[5].name}</div>
              <div className="text-sm mb-2">{testimonials[5].role}</div>
              <div className="font-semibold text-base">“{testimonials[5].quote}”</div>
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
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`w-[80vw] h-auto flex-shrink-0 rounded-2xl snap-center ${testimonial.dark ? "bg-tertiary text-white" : "bg-[#eaf1f8] text-tertiary"} relative overflow-hidden flex flex-col justify-between`}
              >
                {testimonial.type !== "stat" && testimonial.image ? (
                  <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover opacity-60" />
                ) : null}
                <div className={testimonial.image ? "relative z-10 p-6" : "p-6"}>
                  {testimonial.type === "stat" ? (
                    <>
                      <div className="text-[72px] leading-none text-center font-bold text-accent mb-2">{testimonial.value}</div>
                      <div className="text-base text-gray-700 text-center">{testimonial.description}</div>
                    </>
                  ) : (
                    <>
                      <div className="font-bold text-xl mb-1 flex items-center gap-2">
                        {testimonial.avatar ? (
                          <Image src={testimonial.avatar} alt={testimonial.name} width={40} height={40} className="rounded-full object-cover" />
                        ) : null}
                        {testimonial.name}
                      </div>
                      <div className="text-sm mb-2">{testimonial.role}</div>
                      <div className="font-semibold text-base">“{testimonial.quote}”</div>
                    </>
                  )}
                </div>
              </div>
            ))}
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
          <style>{`
            .scrollbar-hide::-webkit-scrollbar { display: none; }
            .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>
        </div>
      </PageContainer>
    </section>
  );
} 