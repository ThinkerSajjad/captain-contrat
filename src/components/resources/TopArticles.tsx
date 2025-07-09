"use client"
import Image from "next/image";
import Link from "next/link";
import { BlogArticle } from "@/data/blogs";
import { useRef, useState, useEffect } from "react";
import { getBlogArticles } from "@/lib/api/blogs";

export function TopArticles() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const data = await getBlogArticles();
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = 320; // Width of a single card + gap
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-lato font-bold text-tertiary mb-12">
            Our top articles
          </h2>
          <div className="flex justify-center">
            <div className="animate-pulse flex space-x-4">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="h-64 bg-gray-200 rounded-lg w-[300px]"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-lato font-bold text-tertiary mb-12">
          Our top articles
        </h2>

        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-8 pb-4"
          >
            {articles.map((article) => (
              <article 
                key={article.id} 
                className="flex-none w-[300px] md:w-[320px] flex flex-col bg-white rounded-lg shadow-md"
              >
                {/* Image */}
                <Link href={`/ressources/${article.slug}`} className="block mb-4 relative aspect-[5/3] overflow-hidden rounded-t-xl">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                {/* Content */}
                <div className="flex-1 flex flex-col p-4">
                  <Link href={`/ressources/${article.slug}`}>
                    <h3 className="text-xl font-lato font-bold text-tertiary hover:underline mb-3">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="text-gray-600 text-sm mb-4 flex-1">
                    {article.description}
                  </p>

                  {/* Metadata */}
                  <div className="text-sm text-gray-500">
                    {article.updatedDate} · {article.readingTime} min
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center cursor-pointer justify-center hover:bg-gray-50 transition-colors border border-gray-200"
              aria-label="Previous article"
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
              aria-label="Next article"
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
      </div>
    </section>
  );
} 