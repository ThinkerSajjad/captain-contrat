'use client';

import PageContainer from "../layout/PageContainer";

export function CaptainContratBenifit() {
  return (
    <section className=" bg-white">
      <PageContainer>
          <div className="mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-4">
              {/* Simplicity Card */}
              <div className="bg-white rounded-lg lg:p-8 p-6 shadow-sm relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-secondary opacity-20" />
          
                <h3 className="text-2xl font-bold text-gray-900 lg:mb-4 mb-3">Simplicity</h3>
                <p className="text-gray-700 lg:mb-4 mb-3">
                  You carry out all your procedures 100% online in your entrepreneur space:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-gray-700">•</span>
                    <span><span className="font-semibold">express</span> creation of your file</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-gray-700">•</span>
                    <span><span className="font-semibold">no mail</span> to send</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-gray-700">•</span>
                    <span><span className="font-semibold">electronic signature</span> for all your documents</span>
                  </li>
                </ul>
              </div>
              {/* Accompaniment Card */}
              <div className="bg-white rounded-lg lg:p-8 p-6 shadow-sm relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-blue-200 opacity-40" />
          
                <h3 className="text-2xl font-bold text-gray-900 lg:mb-4 mb-3">Accompaniement</h3>
                <p className="text-gray-700 lg:mb-4 mb-3">
                  You are guided every step of the way by our experts:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-gray-700">•</span>
                    <span>available for all your questions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-gray-700">•</span>
                    <span>can be reached <span className="font-semibold">in writing or by telephone</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-gray-700">•</span>
                    <span><span className="font-semibold">for personalized</span> monitoring of your file</span>
                  </li>
                </ul>
              </div>
              {/* Transparency Card */}
              <div className="bg-white rounded-lg lg:p-8 p-6 shadow-sm relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-secondary opacity-20" />
          
                <h3 className="text-2xl font-bold text-gray-900 lg:mb-4 mb-3">Transparency</h3>
                <p className="text-gray-700 lg:mb-4 mb-3">
                  You delegate with complete confidence:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-gray-700">•</span>
                    <span>team of lawyers based in <span className="font-semibold">Paris</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-gray-700">•</span>
                    <span>competitive <span className="font-semibold">flat rates</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-gray-700">•</span>
                    <span><span className="font-semibold">commitment</span> to deadlines</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </PageContainer>
    </section>
  );
} 