import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

export function SoloVsProfessional() {
  return (
    <section className="py-16 bg-white">
      <PageContainer>
        <h2 className="lg:text-4xl text-3xl font-bold text-center text-tertiary lg:mb-12 mb-8">
        Drafting your T&Cs online: Get support
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
                <td className="px-4 py-8 text-left font-semibold text-gray-700 border-b border-gray-300 align-top">✨ The advantages</td>
                <td className="px-4 py-8 text-gray-600 border-b border-gray-300">
                Low financial cost
                </td>
                <td className="px-4 py-8 text-gray-600 bg-primary border-b border-gray-300">
                  <ul className="list-disc list-inside text-left pl-4 space-y-2">
                  <li>A specialized lawyer draws up general terms and conditions adapted to your needs</li>
                  <li>Your T&Cs comply with current legislation and do not contain any unfair clauses.</li>
                  <li>You save time</li>
                  </ul>
                </td>
              </tr>
              
              <tr>
                <td className="px-4 py-8 text-left font-semibold text-gray-700 border-b border-gray-300 align-top">⚠️ The risks</td>
                <td className="px-4 py-8 text-gray-600 border-b border-gray-300">
                <ul className="list-disc list-inside text-left pl-4 space-y-2">
                <li>Drafting T&Cs is a complex and time-consuming process . You risk wasting a lot of time. </li>
                <li>You may forget a mandatory mention or insert an abusive clause.</li>
                <li>You may be liable to an administrative fine if you make a mistake. </li>
                <li>Poorly written T&Cs can create disputes with your customers.</li>
                </ul>
                </td>
                <td className="px-4 py-8 text-gray-600 bg-primary border-b border-gray-300">
                  <ul className="list-disc list-inside text-left pl-4 space-y-2">
                  <li>None, satisfaction guaranteed! </li>
                  </ul>
                </td>
              </tr>
       
            </tbody>
          </table>
        </div>

        {/* Mobile view - Cards */}
        <div className="lg:hidden space-y-8">
          
          {/* The advantages */}
          <div className="rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-primary py-4 px-6">
              <h3 className="font-semibold text-base text-gray-700">✨ The advantages</h3>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-4">In autonomy</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Low financial cost</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-4">With Captain Contract</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>A specialized lawyer draws up general terms and conditions adapted to your needs</li>
                  <li>Your T&Cs comply with current legislation and do not contain any unfair clauses.</li>
                  <li>You save time</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* The risks */}
          <div className="rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-primary py-4 px-6">
              <h3 className="font-semibold text-base text-gray-700">⚠️ The risks</h3>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-4">In autonomy</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Drafting T&Cs is a complex and time-consuming process . You risk wasting a lot of time. </li>
                <li>You may forget a mandatory mention or insert an abusive clause.</li>
                <li>You may be liable to an administrative fine if you make a mistake. </li>
                <li>Poorly written T&Cs can create disputes with your customers.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-4">With Captain Contract</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>None, you are satisfied or your money back!</li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>

        <div className="mt-10 flex justify-center">
          <Link 
            href="/funnel/service_choices/1?source=%2Fgestion-des-litiges%2Ffermer-une-societe" 
            className="bg-[#F25C54] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all w-full sm:w-auto text-center"
          >
            Get my T&C
          </Link>
        </div>
      </PageContainer>
    </section>
  );
} 