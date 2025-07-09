"use client"
import { useState } from "react";
import { BlogArticle } from "@/data/blogs";

interface BlogSummaryProps {
  article: BlogArticle;
}

export default function BlogSummary({ article }: BlogSummaryProps) {
  const [isOpen, setIsOpen] = useState(true);

  // For smooth scrolling to sections
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white lg:p-6 p-4 rounded-lg border border-blue-500 sticky top-24">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-700 text-sm lg:text-base uppercase">📌 Summary</h3>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-gray-400 hover:text-tertiary"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <ul className="space-y-2 text-sm">
          {article.summaryItems.map((item, index) => (
            <li key={item.id}>
              <button 
                onClick={() => scrollToSection(item.id)} 
                className="hover:text-blue-600 text-slate-700 hover:underline text-left w-full cursor-pointer"
              >
                {index + 1}. {item.text}
              </button>
            </li>
          ))}
          <li className="mt-4">
            <button 
              onClick={() => scrollToSection("download")} 
              className="flex items-center text-sm text-blue-600 hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
              </svg>
              Download the article
            </button>
          </li>
        </ul>
      )}
    </div>
  );
} 