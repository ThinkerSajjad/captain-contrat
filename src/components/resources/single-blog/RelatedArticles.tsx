"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogArticle } from "@/data/blogs";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface RelatedArticlesProps {
  currentArticle: BlogArticle;
  articles: BlogArticle[];
}

export default function RelatedArticles({ currentArticle, articles }: RelatedArticlesProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Filter out the current article
  const filteredArticles = articles.filter(article => article.id !== currentArticle.id);
  
  // Create a duplicate array for infinite scrolling effect
  const displayArticles = [...filteredArticles, ...filteredArticles];
  
  // Function to scroll one card width
  const scrollByCard = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = container.querySelector('div')?.offsetWidth || 300;
    const scrollAmount = cardWidth + 24; // card width + gap
    
    if (direction === 'left') {
      // If at the beginning, jump to the duplicate section without animation
      if (container.scrollLeft < cardWidth) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = container.scrollWidth / 2;
        
        // Then scroll left with animation
        setTimeout(() => {
          container.style.scrollBehavior = 'smooth';
          container.scrollLeft -= scrollAmount;
        }, 10);
      } else {
        container.style.scrollBehavior = 'smooth';
        container.scrollLeft -= scrollAmount;
      }
    } else {
      // If near the end, jump back to the beginning
      if (container.scrollLeft > (container.scrollWidth / 2) - cardWidth * 2) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = 0;
        
        // Then scroll right with animation
        setTimeout(() => {
          container.style.scrollBehavior = 'smooth';
          container.scrollLeft += scrollAmount;
        }, 10);
      } else {
        container.style.scrollBehavior = 'smooth';
        container.scrollLeft += scrollAmount;
      }
    }
  };
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-tertiary mb-10">
          You may also be interested in these articles
        </h2>
        
        <div className="relative">
          {/* Carousel container with hidden scrollbar */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayArticles.map((article, index) => (
              <div 
                key={`${article.id}-${index}`} 
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm h-full">
                  <Link href={`/resources/${article.slug}`} className="block h-full">
                    <div className="relative h-48">
                      <Image 
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-bold text-tertiary mb-2 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                        {article.description}
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>{article.updatedDate}</span>
                        <span className="mx-2">•</span>
                        <span>{article.readingTime} min</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8">
            <button 
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mr-2 hover:bg-gray-100 text-gray-600"
              onClick={() => scrollByCard('left')}
              aria-label="Previous articles"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 text-gray-600"
              onClick={() => scrollByCard('right')}
              aria-label="Next articles"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 