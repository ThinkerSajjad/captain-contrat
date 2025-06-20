'use client';

import PageContainer from '@/components/layout/PageContainer';

export function LegalStatusChoice() {

  return (
    <section className="lg:py-16 py-10 bg-white">
      <PageContainer>
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-tertiary mb-6 lg:mb-12">
          Why and how to choose the right legal status?
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Video player section */}
          <div className="lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden bg-gradient-to-b from-gray-300 to-blue-900 h-[250px] md:h-[350px]">
                <div className="absolute inset-0">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/bOtsDbmhWyM" 
                    title="Legal status video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
            </div>
          </div>
          
          {/* Key elements section */}
          <div className="lg:w-1/2 ">
            <div className="bg-blue-50 p-8 rounded-xl flex flex-col justify-center h-full">
              <h3 className="text-xl font-semibold text-tertiary mb-6">
                The 3 key elements:
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">Activity adapted to the chosen statuses</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">Number of partners</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">Remuneration and tax regime</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 