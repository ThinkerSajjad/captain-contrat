"use client"
import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";
import { trademarkFilingQuestions } from "@/data/trademarkFilingQuestions";
import { Section } from "@/types/questions";

export function HowToCreate() {
  // For smooth scrolling to sections
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-white" id="trademark-filing">
      <PageContainer>
        <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-8 text-center">
          Understanding everything about trademark filing
        </h2>

        <div className="flex flex-col-reverse lg:flex-row lg:gap-12 gap-8 mt-10">
          {/* Summary box - Left column on desktop, below author on mobile */}
          <div className="order-2 lg:order-1 lg:w-1/3">
            <div className="bg-white p-6 rounded-lg border border-blue-500 sticky top-24">
              <h3 className="font-semibold text-gray-700 mb-4 text-sm lg:text-base uppercase">📌 SUMMARY</h3>
              <ul className="space-y-2 text-sm">
                {trademarkFilingQuestions.sections.map((section, index) => (
                  <li key={section.id}>
                    <button 
                      onClick={() => scrollToSection(section.id)} 
                      className="hover:text-blue-600 text-slate-700 hover:underline text-left w-full cursor-pointer"
                    >
                      {index + 1}. {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main content column - Right column on desktop */}
          <div className="order-1 lg:order-2 lg:w-2/3">
            {/* Author info - At the top of main content */}
            <div className="bg-white p-4 rounded-lg mb-8 border border-l-4 border-l-amber-500 border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={trademarkFilingQuestions.author.image}
                    alt={`${trademarkFilingQuestions.author.name}, ${trademarkFilingQuestions.author.title}`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-xl lg:text-2xl">Written by {trademarkFilingQuestions.author.name}, {trademarkFilingQuestions.author.title}</p>
                  <p className="text-gray-500 lg:text-sm text-xs">Updated in {trademarkFilingQuestions.author.date}</p>
                </div>
              </div>
              <p className="text-sm lg:text-base text-gray-600">
                {trademarkFilingQuestions.author.bio}
              </p>
            </div>

            {/* Content sections */}
            <div className="space-y-12">
              {trademarkFilingQuestions.sections.map((section: Section) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  <h3 className="lg:text-3xl text-2xl font-bold text-slate-800 mb-4">{section.title}</h3>
                  
                  {/* Content paragraphs */}
                  {section.content && section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 mb-4">
                      {paragraph.startsWith("Caution:") ? (
                        <>
                          <strong>Caution:</strong> {paragraph.substring(8)}
                        </>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}

                  {/* List items */}
                  {section.list && Array.isArray(section.list) && section.list.length > 0 && (
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {section.list.map((item, idx) => (
                        <li key={idx}>
                          {typeof item === 'string' ? (
                            item
                          ) : (
                            <>
                              <strong>{item.title}</strong> {item.description}
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Additional content */}
                  {section.additionalContent && (
                    <p className="text-gray-700 mt-4 mb-4 font-semibold">
                      {typeof section.additionalContent === 'string' 
                        ? section.additionalContent 
                        : section.additionalContent.join(' ')}
                    </p>
                  )}

                  {/* Additional list */}
                  {section.additionalList && (
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {section.additionalList.map((item, idx) => (
                        <li key={idx}>
                          <strong>{item.title}</strong> {item.description}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 