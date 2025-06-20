'use client';

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageContainer from "../layout/PageContainer";
import { useState, useRef } from "react";

const faqArticles = [
  {
    title: "What is a collective procedure?",
    subtitle: "What is a collective procedure?",
    date: "May 25, 2023",
    readTime: "5 min",
    link: "/blog/what-is-collective-procedure"
  },
  {
    title: "What is a company dissolution?",
    subtitle: "What is a company dissolution?",
    date: "May 25, 2023",
    readTime: "5 min",
    link: "/blog/what-is-company-dissolution"
  },
  {
    title: "Can I continue my business with financial difficulties?",
    subtitle: "I am experiencing financial difficulties, can I continue my business?",
    date: "May 25, 2023",
    readTime: "5 min",
    link: "/blog/business-financial-difficulties"
  },
  {
    title: "Can I close my company without accounts approval?",
    subtitle: "I haven't approved my accounts, can I close the company?",
    date: "May 25, 2023",
    readTime: "5 min",
    link: "/blog/close-company-without-accounts"
  },
  {
    title: "What is a company dissolution?",
    subtitle: "What is a company dissolution?",
    date: "May 25, 2023",
    readTime: "5 min",
    link: "/blog/what-is-company-dissolution"
  }
];

export function FinalQuestions() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollLeft = () => {
    if (!scrollContainerRef.current || isScrolling) return;
    
    setIsScrolling(true);
    const container = scrollContainerRef.current;
    const card = container.querySelector('.faq-card');
    
    if (card) {
      // Get the full width of the card including margins/gap
      const cardRect = card.getBoundingClientRect();
      const cardFullWidth = cardRect.width;
      
      // Scroll by exactly one card width
      container.scrollBy({ 
        left: -cardFullWidth, 
        behavior: 'smooth' 
      });
      
      // Reset the scrolling state after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    } else {
      setIsScrolling(false);
    }
  };

  const scrollRight = () => {
    if (!scrollContainerRef.current || isScrolling) return;
    
    setIsScrolling(true);
    const container = scrollContainerRef.current;
    const card = container.querySelector('.faq-card');
    
    if (card) {
      // Get the full width of the card including margins/gap
      const cardRect = card.getBoundingClientRect();
      const cardFullWidth = cardRect.width;
      
      // Scroll by exactly one card width
      container.scrollBy({ 
        left: cardFullWidth, 
        behavior: 'smooth' 
      });
      
      // Reset the scrolling state after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    } else {
      setIsScrolling(false);
    }
  };

  return (
    <section className="lg:py-16 py-10 bg-white">
      <PageContainer>
        

        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-4 scroll-smooth snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx global>{`
              /* Hide scrollbar for Chrome, Safari and Opera */
              .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {faqArticles.map((article, index) => (
              <div 
                key={index}
                className="faq-card flex-shrink-0 w-[90%] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] snap-center"
              >
                <Link href={article.link} className="block h-full">
                  <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                    <h3 className="font-semibold text-lg mb-2 text-tertiary">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{article.subtitle}</p>
                    <div className="text-gray-500 text-sm">
                      {article.date} · {article.readTime}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:mt-8 mt-4">
            <button 
              onClick={scrollLeft}
              className="p-2 rounded-full border border-gray-300 mr-2 hover:bg-gray-100 transition-colors cursor-pointer disabled:opacity-50"
              aria-label="Previous article"
              disabled={isScrolling}
            >
              <ChevronLeft className="h-5 w-5 text-gray-500" />
            </button>
            <button 
              onClick={scrollRight}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer disabled:opacity-50"
              aria-label="Next article"
              disabled={isScrolling}
            >
              <ChevronRight className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 