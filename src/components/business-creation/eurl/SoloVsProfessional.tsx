import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

export function SoloVsProfessional() {
  return (
    <section className="py-16 bg-white">
      <PageContainer>
        <h2 className="lg:text-4xl text-3xl font-bold text-center text-tertiary lg:mb-12 mb-8">
          EURL: solo creation or professional support?
        </h2>

        {/* Desktop view - Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-1/3 px-4 py-6 text-left font-semibold text-gray-700 border-b border-gray-300"></th>
                <th className="w-1/3 px-4 py-6 text-center lg:text-lg text-base font-semibold text-gray-700 border-b border-gray-300">
                  Solo creation
                </th>
                <th className="w-1/3 px-4 py-6 text-center lg:text-lg text-base font-semibold text-gray-700 bg-primary rounded-t-lg border-b border-gray-300">
                  Creation with Captain Contrat
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-8 text-left font-semibold text-gray-700 border-b border-gray-300">Time limit</td>
                <td className="px-4 py-8 text-center text-gray-600 border-b border-gray-300">Variable delays</td>
                <td className="px-4 py-8 text-center text-gray-600 bg-primary border-b border-gray-300">Creation in 72 hours</td>
              </tr>
              <tr>
                <td className="px-4 py-8 text-left font-semibold text-gray-700 border-b border-gray-300 align-top">Procedures</td>
                <td className="px-4 py-8 text-gray-600 border-b border-gray-300">
                  <ul className="list-disc list-inside text-left pl-4 space-y-2">
                    <li>Forms to be completed alone</li>
                    <li>Drafting and publication of the legal notice</li>
                    <li>Filing of the file with the registry</li>
                    <li>Managing back and forth with the registry</li>
                  </ul>
                </td>
                <td className="px-4 py-8 text-gray-600 bg-primary border-b border-gray-300">
                  <ul className="list-disc list-inside text-left pl-4 space-y-2">
                    <li>Completion of a questionnaire in 5 minutes</li>
                    <li>Preparation of the file by your lawyer</li>
                    <li>Receiving the KBIS</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-8 text-left font-semibold text-gray-700 border-b border-gray-300">Price</td>
                <td className="px-4 py-8 text-center text-gray-600 border-b border-gray-300">Administrative fees at cost price</td>
                <td className="px-4 py-8 text-center text-gray-600 bg-primary border-b border-gray-300">From €99, negotiated discounts on legal notice fees</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile view - Cards */}
        <div className="lg:hidden">
          {/* Time limit section */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-primary py-4 px-6 font-semibold text-base text-gray-700">
              Time limit
            </div>
            
            <div className=" p-4">
              <div className="mb-6">
                <p className="font-semibold mb-2">Solo creation</p>
                <p className="text-gray-600">Variable delays</p>
              </div>
              
              <div>
                <p className="font-semibold mb-2">Creation with Captain Contrat</p>
                <p className="text-gray-600">Creation in 72 hours</p>
              </div>
            </div>
          </div>
          
          {/* Procedures section */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-primary py-4 px-6 font-semibold text-base text-gray-700">
              Procedures
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <p className="font-semibold mb-2">Solo creation</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Forms to be completed alone</li>
                  <li>Drafting and publication of the legal notice</li>
                  <li>Filing of the file with the registry</li>
                  <li>Managing back and forth with the registry</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold mb-2">Creation with Captain Contrat</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Completion of a questionnaire in 5 minutes</li>
                  <li>Preparation of the file by your lawyer</li>
                  <li>Receiving the KBIS</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Price section */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-primary py-4 px-6 font-semibold text-base text-gray-700">
              Price
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <p className="font-semibold mb-2">Solo creation</p>
                <p className="text-gray-600">Administrative fees at cost price</p>
              </div>
              
              <div>
                <p className="font-semibold mb-2">Creation with Captain Contrat</p>
                <p className="text-gray-600">From €99, negotiated discounts on legal notice fees</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link 
            href="/creer-entreprise/creation-sasu-en-ligne#start" 
            className="bg-[#F25C54] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all w-full sm:w-auto text-center"
          >
            Create a SASU
          </Link>
        </div>
      </PageContainer>
    </section>
  );
} 