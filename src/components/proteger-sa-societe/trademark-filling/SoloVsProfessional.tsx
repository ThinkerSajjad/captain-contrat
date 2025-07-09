import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

export function SoloVsProfessional() {
  return (
    <section className="py-16 bg-white">
      <PageContainer>
        <h2 className="lg:text-5xl text-4xl font-bold text-center text-tertiary lg:mb-12 mb-8">
          Save time in your procedures
        </h2>

        {/* Desktop view - Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-1/3 px-4 py-6 text-left font-semibold text-gray-700 border-b border-gray-300"></th>
                <th className="w-1/3 px-4 py-6 text-center lg:text-lg text-base font-semibold text-gray-700 border-b border-gray-300">
                  In autonomy
                </th>
                <th className="w-1/3 px-4 py-6 text-center lg:text-lg text-base font-semibold text-gray-700 bg-primary rounded-t-lg border-b border-gray-300">
                  With Captain Contract
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-4 text-left font-semibold text-gray-700 border-b border-gray-300"></td>
                <td className="px-4 py-4 text-center text-gray-600 border-b border-gray-300">
                  For entrepreneurs who want to manage administrative procedures themselves
                </td>
                <td className="px-4 py-4 text-center text-gray-600 bg-primary border-b border-gray-300">
                  For entrepreneurs who want to save time and delegate procedures
                </td>
              </tr>
              <tr>
                <td className="px-4 py-6 text-left font-semibold text-gray-700 border-b border-gray-300 align-top">
                  <span className="flex items-center">
                    <span className="mr-2">🔍</span> Preparation of the file
                  </span>
                </td>
                <td className="px-4 py-6 text-gray-600 border-b border-gray-300">
                  <ul className="list-disc list-inside text-left space-y-2">
                    <li>Find the classes in which to file your trademark</li>
                    <li>Write the list of products and services</li>
                    <li>Gather all supporting documents</li>
                    <li>Submit the complete file to the INPI</li>
                  </ul>
                </td>
                <td className="px-4 py-6 text-gray-600 bg-primary border-b border-gray-300">
                  <ul className="list-disc list-inside text-left space-y-2">
                    <li>Complete a short questionnaire, your deposit file is created</li>
                    <li>Ask all your questions to our experts</li>
                    <li>Check your brand availability</li>
                    <li>File submitted to the INPI using our software</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-6 text-left font-semibold text-gray-700 border-b border-gray-300 align-top">
                  <span className="flex items-center">
                    <span className="mr-2">🌟</span> The advantages
                  </span>
                </td>
                <td className="px-4 py-6 text-center text-gray-600 border-b border-gray-300">Only administrative fees are payable</td>
                <td className="px-4 py-6 text-gray-600 bg-primary border-b border-gray-300">
                  <ul className="list-disc list-inside text-left space-y-2">
                    <li>Peace of mind</li>
                    <li>Save time</li>
                    <li>Unlimited support (message and phone)</li>
                    <li>Competitive pricing</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-6 text-left font-semibold text-gray-700 border-b border-gray-300 align-top">
                  <span className="flex items-center">
                    <span className="mr-2">⚠️</span> The risks
                  </span>
                </td>
                <td className="px-4 py-6 text-gray-600 border-b border-gray-300">
                  <ul className="list-disc list-inside text-left space-y-2">
                    <li>Time spent researching classes</li>
                    <li>Time spent writing the list of products and services</li>
                    <li>Time spent completing your file</li>
                    <li>Managing back and forth with the administration</li>
                    <li>Risk of rejection of the file by the INPI</li>
                    <li>Risk of receiving an opposition if the trademark is not available</li>
                  </ul>
                </td>
                <td className="px-4 py-6 text-center text-gray-600 bg-primary border-b border-gray-300">None, you are satisfied or your money back</td>
              </tr>
              <tr>
                <td className="px-4 py-6 text-left font-semibold text-gray-700 border-b border-gray-300 align-top">
                  <span className="flex items-center">
                    <span className="mr-2">💰</span> Price
                  </span>
                </td>
                <td className="px-4 py-6 text-center text-gray-600 border-b border-gray-300">-</td>
                <td className="px-4 py-6 text-center text-gray-600 bg-primary border-b border-gray-300">Support from €59. See offer details</td>
              </tr>
              <tr>
                <td className="px-4 py-6 text-left font-semibold text-gray-700 border-b border-gray-300 align-top">
                  <span className="flex items-center">
                    <span className="mr-2">🚀</span> Starting your business
                  </span>
                </td>
                <td className="px-4 py-6 text-center text-gray-600 border-b border-gray-300">Risk of delays being extended if your file is rejected by the INPI</td>
                <td className="px-4 py-6 text-center text-gray-600 bg-primary border-b border-gray-300">Complete file submitted to the INPI within 48 hours</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile view - Cards */}
        <div className="lg:hidden">
          {/* Description section */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-primary py-4 px-6 font-semibold text-base text-gray-700"></div>
            
            <div className="p-4">
              <div className="mb-6">
                <p className="font-semibold mb-2">In autonomy</p>
                <p className="text-gray-600">For entrepreneurs who want to manage administrative procedures themselves</p>
              </div>
              
              <div>
                <p className="font-semibold mb-2">With Captain Contract</p>
                <p className="text-gray-600">For entrepreneurs who want to save time and delegate procedures</p>
              </div>
            </div>
          </div>
          
          {/* Preparation of the file section */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-primary py-4 px-6 font-semibold text-base text-gray-700">
              <span className="flex items-center">
                <span className="mr-2">🔍</span> Preparation of the file
              </span>
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <p className="font-semibold mb-2">In autonomy</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Find the classes in which to file your trademark</li>
                  <li>Write the list of products and services</li>
                  <li>Gather all supporting documents</li>
                  <li>Submit the complete file to the INPI</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold mb-2">With Captain Contract</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Complete a short questionnaire, your deposit file is created</li>
                  <li>Ask all your questions to our experts</li>
                  <li>Check your brand availability</li>
                  <li>File submitted to the INPI using our software</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* The advantages section */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-primary py-4 px-6 font-semibold text-base text-gray-700">
              <span className="flex items-center">
                <span className="mr-2">🌟</span> The advantages
              </span>
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <p className="font-semibold mb-2">In autonomy</p>
                <p className="text-gray-600">Only administrative fees are payable</p>
              </div>
              
              <div>
                <p className="font-semibold mb-2">With Captain Contract</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Peace of mind</li>
                  <li>Save time</li>
                  <li>Unlimited support (message and phone)</li>
                  <li>Competitive pricing</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* The risks section */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-primary py-4 px-6 font-semibold text-base text-gray-700">
              <span className="flex items-center">
                <span className="mr-2">⚠️</span> The risks
              </span>
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <p className="font-semibold mb-2">In autonomy</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Time spent researching classes</li>
                  <li>Time spent writing the list of products and services</li>
                  <li>Time spent completing your file</li>
                  <li>Managing back and forth with the administration</li>
                  <li>Risk of rejection of the file by the INPI</li>
                  <li>Risk of receiving an opposition if the trademark is not available</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold mb-2">With Captain Contract</p>
                <p className="text-gray-600">None, you are satisfied or your money back</p>
              </div>
            </div>
          </div>
          
          {/* Price section */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-primary py-4 px-6 font-semibold text-base text-gray-700">
              <span className="flex items-center">
                <span className="mr-2">💰</span> Price
              </span>
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <p className="font-semibold mb-2">In autonomy</p>
                <p className="text-gray-600">-</p>
              </div>
              
              <div>
                <p className="font-semibold mb-2">With Captain Contract</p>
                <p className="text-gray-600">Support from €59. See offer details</p>
              </div>
            </div>
          </div>
          
          {/* Starting your business section */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-primary py-4 px-6 font-semibold text-base text-gray-700">
              <span className="flex items-center">
                <span className="mr-2">🚀</span> Starting your business
              </span>
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <p className="font-semibold mb-2">In autonomy</p>
                <p className="text-gray-600">Risk of delays being extended if your file is rejected by the INPI</p>
              </div>
              
              <div>
                <p className="font-semibold mb-2">With Captain Contract</p>
                <p className="text-gray-600">Complete file submitted to the INPI within 48 hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link 
            href="/funnel/service_choices/1?source=%2Fproteger-sa-societe%2Fdepot-de-marque-inpi-en-ligne" 
            className="bg-[#F25C54] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all w-full sm:w-auto text-center"
          >
            Register my trademark
          </Link>
        </div>
      </PageContainer>
    </section>
  );
} 