'use client';

import PageContainer from "../layout/PageContainer";



export function Testimonials() {
  return (
    <section className="relative lg:py-16 py-10">
             <div className="absolute inset-0 bg-primary w-full h-full" />
      <PageContainer>

        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-4">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg lg:p-6 p-4 shadow-sm relative">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center text-white font-bold mr-4">
                  IH
                </div>
                <span className="font-semibold">Imen H.</span>
              </div>
              <div className="flex mb-4">
                {[1, 2, 3, 4].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className="text-gray-300" />
                </svg>
              </div>
              <p className="text-gray-700 text-base">
                Qualified people who handled my case, I always have someone online to answer my various questions and concerns... Thank you very much for your responsiveness. I recommend them with my eyes closed.
              </p>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-blue-100"></div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm relative">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center text-white font-bold mr-4">
                  RB
                </div>
                <span className="font-semibold">Rachelle B.</span>
              </div>
              <div className="flex mb-4">
                {[1, 2, 3, 4].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className="text-gray-300" />
                </svg>
              </div>
              <p className="text-gray-700 text-base">
                I&apos;m delighted to give Captain Contrat a very favorable review. A tailor-made service that meets all my company&apos;s legal obligations. The specialized staff are all willing to quickly answer your specific questions. The site&apos;s navigation is intuitive, simple, and efficient. I recommend it to all businesses, especially emerging ones. Captain Contrat offers excellent value for money. Congratulations to the team.
              </p>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-secondary opacity-30"></div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm relative">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MH
                </div>
                <span className="font-semibold">Marc H.</span>
              </div>
              <div className="flex mb-4">
                {[1, 2, 3, 4].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className="text-gray-300" />
                </svg>
              </div>
              <p className="text-gray-700 text-base">
                Not only did I appreciate the business approach and the company creation portal, but I also appreciated the responsiveness of the lawyers and the quality of the answers to my questions, both online and over the phone. I highly recommend them!
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 