"use client"
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const legalForms = [
  {
    emoji: "🚀",
    title: "SAS",
    description: "Simplified Joint Stock Company, to join forces and benefit from its flexibility",
    link: "/ressources/mandatory-sasu-registers-guide"
  },
  {
    emoji: "📈",
    title: "SASU",
    description: "Single-member SAS, for its flexibility",
    link: "/ressources/mandatory-sasu-registers-guide"
  },
  {
    emoji: "🔄",
    title: "SARL",
    description: "Limited Liability Company, to protect personal assets",
    link: "/ressources/mandatory-sasu-registers-guide"
  },
  {
    emoji: "👤",
    title: "EURL",
    description: "Single-Person Limited Liability Company to create a company alone",
    link: "/ressources/mandatory-sasu-registers-guide"
  },
  {
    emoji: "🏠",
    title: "SCI",
    description: "Civil Real Estate Company, to invest or transfer assets",
    link: "/ressources/mandatory-sasu-registers-guide"
  },
  {
    emoji: "🌱",
    title: "Micro-enterprise",
    description: "To start an activity alone or to test your project",
    link: "/ressources/mandatory-sasu-registers-guide"
  },
  {
    emoji: "👔",
    title: "Sole Proprietorship",
    description: "To start as a self-employed entrepreneur",
    link: "/ressources/mandatory-sasu-registers-guide"
  },
  {
    emoji: "📚",
    title: "Association",
    description: "For non-profit projects",
    link: "/ressources/mandatory-sasu-registers-guide"
  }
];

export function LegalFormsOverview() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState<number | null>(null);

  // Function to find the tallest card and set all cards to that height
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateCardHeights = () => {
        // Reset heights to auto to measure natural height
        const cards = document.querySelectorAll('.legal-form-card');
        cards.forEach(card => {
          (card as HTMLElement).style.height = 'auto';
        });
        
        // Measure the tallest card
        let maxHeight = 0;
        cards.forEach(card => {
          const height = card.getBoundingClientRect().height;
          maxHeight = Math.max(maxHeight, height);
        });
        
        // Set all cards to the tallest height
        if (maxHeight > 0) {
          setCardHeight(maxHeight);
          cards.forEach(card => {
            (card as HTMLElement).style.height = `${maxHeight}px`;
          });
        }
      };
      
      // Initial calculation and on resize
      updateCardHeights();
      window.addEventListener('resize', updateCardHeights);
      
      return () => {
        window.removeEventListener('resize', updateCardHeights);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = 300; // Width of a single card + gap
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="lg:py-16 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-tertiary mb-4">
          Everything you need to know about each legal form
        </h2>
        <p className="text-gray-600 mb-12">
          What are the tax implications of different legal structures? What are the powers and responsibilities of partners? Our legal editors will answer all your questions and provide a detailed overview of the characteristics and operating methods of different legal structures.
        </p>

        <div className="relative">
          {/* Mobile slider */}
          <div className="lg:hidden">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide gap-6 pb-4"
            >
              {legalForms.map((form, index) => (
                <div 
                  key={index}
                  className="legal-form-card flex-none w-[300px] bg-[#e8f0f8] rounded-xl p-6 flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow"
                  style={cardHeight ? { height: `${cardHeight}px` } : {}}
                >
                  <div className="flex flex-col items-center">
                    <div className="mb-4 text-4xl">
                      {form.emoji}
                    </div>
                    <h3 className="text-2xl font-bold text-tertiary mb-3 text-center">
                      {form.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-center">
                      {form.description}
                    </p>
                  </div>
                  <Link 
                    href={form.link}
                    className="text-tertiary font-semibold hover:underline text-center mt-auto"
                  >
                    Discover
                  </Link>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center cursor-pointer justify-center hover:bg-gray-50 transition-colors border border-gray-200"
                aria-label="Previous form"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-tertiary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center cursor-pointer justify-center hover:bg-gray-50 transition-colors border border-gray-200"
                aria-label="Next form"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-tertiary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden lg:grid grid-cols-4 gap-6">
            {legalForms.map((form, index) => (
              <div 
                key={index}
                className="legal-form-card bg-[#e8f0f8] rounded-xl p-6 flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow"
                style={cardHeight ? { height: `${cardHeight}px` } : {}}
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4 text-4xl">
                    {form.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-tertiary mb-3 text-center">
                    {form.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-center">
                    {form.description}
                  </p>
                </div>
                <Link 
                  href={form.link}
                  className="text-tertiary font-semibold hover:underline text-center mt-auto"
                >
                  Discover
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 