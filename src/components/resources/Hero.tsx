import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";

function BooksIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="8" height="24" rx="1" fill="#4CAF50"/>
      <rect x="16" y="8" width="8" height="24" rx="1" fill="#2196F3"/>
      <rect x="28" y="8" width="8" height="24" rx="1" fill="#F44336"/>
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative lg:py-16 py-8 bg-primary">
      <PageContainer>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Icon and Title */}
          <div className="flex items-center gap-4 lg:mb-8 mb-4">
            <BooksIcon />
            <h1 className="text-4xl lg:text-6xl font-bold text-tertiary">
              All our resources
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-tertiary max-w-2xl">
            To start and manage your business with complete peace of mind!
          </p>
        </div>
      </PageContainer>
    </section>
  );
} 