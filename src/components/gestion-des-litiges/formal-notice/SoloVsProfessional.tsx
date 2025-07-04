import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

export function SoloVsProfessional() {
  return (
    <section className="py-16 bg-white">
      <PageContainer>
        <h2 className="lg:text-4xl text-3xl font-bold text-center text-tertiary lg:mb-12 mb-8">
        Choose a reliable and easy-to-customize document
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
                With Captain Contrat
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-8 text-left font-semibold text-gray-700 border-b border-gray-300">✨ The advantages</td>
                <td className="px-4 py-8 text-center text-gray-600 border-b border-gray-300">Free</td>
                <td className="px-4 py-8 text-center text-gray-600 bg-primary border-b border-gray-300">
                <ul className="list-disc list-inside text-left pl-4 space-y-2">
                    <li>Legal security</li>
                    <li>Peace of mind</li>
                    <li>Save time</li>
                    <li>Support from a lawyer</li>
                    <li>Best value for money</li>
                  </ul></td>
              </tr>
              <tr>
                <td className="px-4 py-8 text-left font-semibold text-gray-700 border-b border-gray-300 align-top">The risks</td>
                <td className="px-4 py-8 text-gray-600 border-b border-gray-300">
                  <ul className="list-disc list-inside text-left pl-4 space-y-2">
                  <li>Time spent finding the necessary information</li>
                  <li>Time spent writing the document</li>
                  <li>Risks of disputes with your contractor</li>
                  </ul>
                </td>
                <td className="px-4 py-8 text-gray-600 bg-primary border-b border-gray-300">
                  <ul className="list-disc list-inside text-left pl-4 space-y-2">
                  <li>None! Satisfaction guaranteed</li>
                  </ul>
                </td>
              </tr>
       
            </tbody>
          </table>
        </div>

        {/* Mobile view - Cards */}
        <div className="lg:hidden">
          {/* Time limit section */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-primary py-4 px-6 font-semibold text-base text-gray-700">
              In autonomy
            </div>
            
            <div className=" p-4">
              <div className="mb-6">
                <p className="font-semibold mb-2">For entrepreneurs who want to manage their legal affairs themselves</p>
              </div>
              
              <div>
                <p className="font-semibold mb-2">For entrepreneurs who want to save time and have legal security</p>
              </div>
            </div>
          </div>
          
          {/* Procedures section */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-primary py-4 px-6 font-semibold text-base text-gray-700">
              ✨ The advantages
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <p className="font-semibold mb-2">Free</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Legal security</li>
                  <li>Peace of mind</li>
                  <li>Save time</li>
                  <li>Support from a lawyer</li>
                  <li>Best value for money</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold mb-2">Legal security</p>
                <p className="text-gray-600">Peace of mind</p>
              </div>
            </div>
          </div>
          
          {/* Price section */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-primary py-4 px-6 font-semibold text-base text-gray-700">
              ⚠️ The risks
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <p className="font-semibold mb-2">Time spent finding the necessary information</p>
                <p className="text-gray-600">Time spent writing the document</p>
              </div>
              
              <div>
                <p className="font-semibold mb-2">Risks of disputes with your contractor</p>
                <p className="text-gray-600">None! Satisfaction guaranteed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link 
            href="/funnel/service_choices/1?source=%2Fcreer-entreprise%2Faide-au-choix-forme-juridique" 
            className="bg-[#F25C54] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all w-full sm:w-auto text-center"
          >
            Get my document
          </Link>
        </div>
      </PageContainer>
    </section>
  );
} 