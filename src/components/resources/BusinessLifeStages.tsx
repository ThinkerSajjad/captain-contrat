"use client"
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const stages = [
  {
    emoji: "💡",
    title: "Create your own business",
    description: "What steps do you need to take to get started in entrepreneurship?",
    link: "/ressources/mandatory-sasu-registers-guide"
  },
  {
    emoji: "💼",
    title: "Managing your business",
    description: "Administrative management of a company from A to Z: how does it work?",
    link: "/ressources/mandatory-sasu-registers-guide"
  },
  {
    emoji: "⚙️",
    title: "Modify your business",
    description: "When should you change your business and how?",
    link: "/ressources/mandatory-sasu-registers-guide"
  },
  {
    emoji: "🤝",
    title: "Commercial contracts",
    description: "Why enter into a contract? What type of contract? How to write one?",
    link: "/ressources/mandatory-sasu-registers-guide"
  },
  {
    emoji: "✏️",
    title: "Protect your creations",
    description: "How to effectively protect your brand, copyright and inventions?",
    link: "/ressources/mandatory-sasu-registers-guide"
  },
  {
    emoji: "❌",
    title: "Close your business",
    description: "Why close a business and what is the procedure to follow?",
    link: "/ressources/mandatory-sasu-registers-guide"
  },
  {
    emoji: "⚖️",
    title: "Manage and prevent disputes",
    description: "What are the steps to take to anticipate and deal with disputes?",
    link: "/ressources/mandatory-sasu-registers-guide"
  },
  {
    emoji: "👔",
    title: "Recruit and manage employees",
    description: "What are the best practices to adopt to comply with labor law?",
    link: "/ressources/mandatory-sasu-registers-guide"
  },
  {
    emoji: "📝",
    title: "Write your T&Cs",
    description: "What are general terms and conditions of sale and how to write them?",
    link: "/ressources/mandatory-sasu-registers-guide"
  }
];

export function BusinessLifeStages() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState<number | null>(null);

  // Function to find the tallest card and set all cards to that height
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateCardHeights = () => {
        // Reset heights to auto to measure natural height
        const cards = document.querySelectorAll('.business-stage-card');
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-tertiary mb-4">
          The right content for every stage of your business life
        </h2>
        <p className="text-gray-600 mb-12">
          From its creation to its closure, the life of a business is marked by decisive steps for an entrepreneur. Captain Contrat's legal editors explain how to face all the challenges that will arise.
        </p>

        <div className="relative">
          {/* Mobile slider */}
          <div className="lg:hidden">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide gap-6 pb-4"
            >
              {stages.map((stage, index) => (
                <div 
                  key={index}
                  className="business-stage-card flex-none w-[300px] bg-[#e8f0f8] rounded-xl p-6 flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow"
                  style={cardHeight ? { height: `${cardHeight}px` } : {}}
                >
                  <div className="flex flex-col items-center">
                    <div className="mb-4 text-4xl">
                      {stage.emoji}
                    </div>
                    <h3 className="text-2xl font-bold text-tertiary mb-3 text-center">
                      {stage.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-center">
                      {stage.description}
                    </p>
                  </div>
                  <Link 
                    href={stage.link}
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
                aria-label="Previous stage"
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
                aria-label="Next stage"
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
            {stages.map((stage, index) => (
              <div 
                key={index}
                className="business-stage-card bg-[#e8f0f8] rounded-xl p-6 flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow"
                style={cardHeight ? { height: `${cardHeight}px` } : {}}
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4 text-4xl">
                    {stage.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-tertiary mb-3 text-center">
                    {stage.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-center">
                    {stage.description}
                  </p>
                </div>
                <Link 
                  href={stage.link}
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