import Image from "next/image";
import React from "react";
import PageContainer from "../layout/PageContainer";

export function BusinessPlatform() {
  return (
    <section className="relative lg:py-20 py-10">
      {/* Full-width background color */}
      <div className="absolute inset-0 bg-[#fdf7f2] w-full h-full pointer-events-none" style={{zIndex: 0}} />
      <PageContainer>
        <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-tertiary font-crimson mb-12 text-center">
                  The platform for undertaking business with peace of mind
                </h2>
            <div className="relative z-10 mx-auto flex flex-col md:flex-row items-center gap-12">
              {/* Left: Text features */}
              <div className="flex-1 flex flex-col items-start justify-center max-w-xl mx-auto md:mx-0">
                <div className="space-y-10 w-full">
                  <div className="border-l-4 border-[#f27c7c] pl-6">
                    <div className="text-lg md:text-xl font-bold text-tertiary mb-1">A 100% online solution</div>
                    <div className="text-gray-700 text-base">Combining human and digital, a responsive and efficient combination.</div>
                  </div>
                  <div className="border-l-4 border-[#f27c7c] pl-6">
                    <div className="text-lg md:text-xl font-bold text-tertiary mb-1">A team of experts at your disposal</div>
                    <div className="text-gray-700 text-base">Bring your projects to life by delegating all your administrative procedures to a team of professionals.</div>
                  </div>
                  <div className="border-l-4 border-[#f27c7c] pl-6">
                    <div className="text-lg md:text-xl font-bold text-tertiary mb-1">Offers tailored and designed for VSEs/SMEs</div>
                    <div className="text-gray-700 text-base">Offer personalized support to the needs of each entrepreneur.</div>
                  </div>
                </div>
              </div>
              {/* Right: Image */}
              <div className="flex-1 flex justify-end items-center w-full">
                <Image
                  src="/images/home/fixepng0.webp"
                  alt="Business platform illustration"
                  width={600}
                  height={600}
                  className="max-w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
        </div>
      </PageContainer>
    </section>
  );
} 