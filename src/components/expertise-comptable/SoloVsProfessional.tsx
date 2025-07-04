
import PageContainer from "@/components/layout/PageContainer";

export function SoloVsProfessional() {
  return (
    <section className="py-16 bg-white">
      <PageContainer>
        <h2 className="lg:text-4xl text-3xl font-bold text-center text-tertiary lg:mb-12 mb-8">
          Managing your accounting: with whom?
        </h2>

        {/* Desktop view - Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-1/4 px-4 py-6 text-left font-semibold text-gray-700 border-b border-gray-300"></th>
                <th className="w-1/4 px-4 py-6 text-center lg:text-lg text-base font-semibold text-gray-700 border-b border-gray-300">
                  With a local Chartered Accountant
                </th>
                <th className="w-1/4 px-4 py-6 text-center lg:text-lg text-base font-semibold text-gray-700 border-b border-gray-300">
                  With accounting software alone
                </th>
                <th className="w-1/4 px-4 py-6 text-center lg:text-lg text-base font-semibold text-gray-700 bg-[#FFF5EB] rounded-t-lg border-b border-gray-300">
                  With Captain Contrat
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-4 text-left font-semibold text-gray-700 border-b border-gray-300">
                  Balance sheet and tax return<br />
                  <span className="font-normal italic">certified by a Chartered Accountant</span>
                </td>
                <td className="px-4 py-4 text-center border-b border-gray-300">
                  <span className="text-green-600 text-xl">✅</span>
                </td>
                <td className="px-4 py-4 text-center border-b border-gray-300">
                  <span className="text-red-600 text-xl">❌</span>
                </td>
                <td className="px-4 py-4 text-center bg-[#FFF5EB] border-b border-gray-300">
                  <span className="text-green-600 text-xl">✅</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-left font-semibold text-gray-700 border-b border-gray-300">
                  Tax returns<br />
                  <span className="font-normal italic">(VAT, corporate taxes)</span>
                </td>
                <td className="px-4 py-4 text-center border-b border-gray-300">
                  <span className="text-green-600 text-xl">✅</span>
                </td>
                <td className="px-4 py-4 text-center border-b border-gray-300">
                  <span className="text-red-600 text-xl">❌</span>
                </td>
                <td className="px-4 py-4 text-center bg-[#FFF5EB] border-b border-gray-300">
                  <span className="text-green-600 text-xl">✅</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-left font-semibold text-gray-700 border-b border-gray-300">
                  Approval of accounts
                </td>
                <td className="px-4 py-4 text-center border-b border-gray-300">
                  <span className="text-green-600 text-xl">✅</span>
                </td>
                <td className="px-4 py-4 text-center border-b border-gray-300">
                  <span className="text-red-600 text-xl">❌</span>
                </td>
                <td className="px-4 py-4 text-center bg-[#FFF5EB] border-b border-gray-300">
                  <span className="text-green-600 text-xl">✅</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-left font-semibold text-gray-700 border-b border-gray-300">
                  Tax optimization
                </td>
                <td className="px-4 py-4 text-center border-b border-gray-300">
                  <span className="text-gray-600">Depends on the Chartered Accountant</span>
                </td>
                <td className="px-4 py-4 text-center border-b border-gray-300">
                  <span className="text-red-600 text-xl">❌</span>
                </td>
                <td className="px-4 py-4 text-center bg-[#FFF5EB] border-b border-gray-300">
                  <span className="text-green-600 text-xl">✅</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-left font-semibold text-gray-700 border-b border-gray-300">
                  Unlimited advice<br />
                  <span className="font-normal italic">throughout the year</span>
                </td>
                <td className="px-4 py-4 text-center border-b border-gray-300">
                  <span className="text-gray-600">Depends on the Chartered Accountant</span>
                </td>
                <td className="px-4 py-4 text-center border-b border-gray-300">
                  <span className="text-red-600 text-xl">❌</span>
                </td>
                <td className="px-4 py-4 text-center bg-[#FFF5EB] border-b border-gray-300">
                  <span className="text-green-600 text-xl">✅</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-left font-semibold text-gray-700 border-b border-gray-300">
                  Accounting software<br />
                  <span className="font-normal italic">(bank synchronization, scanning of supporting documents, categorization of transactions)</span>
                </td>
                <td className="px-4 py-4 text-center border-b border-gray-300">
                  <span className="text-red-600 text-xl">❌</span>
                </td>
                <td className="px-4 py-4 text-center border-b border-gray-300">
                  <span className="text-green-600 text-xl">✅</span>
                </td>
                <td className="px-4 py-4 text-center bg-[#FFF5EB] border-b border-gray-300">
                  <span className="text-green-600 text-xl">✅</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-left font-semibold text-gray-700 border-b border-gray-300">
                  Real-time<br />
                  <span className="font-normal italic">cash flow monitoring</span>
                </td>
                <td className="px-4 py-4 text-center border-b border-gray-300">
                  <span className="text-red-600 text-xl">❌</span>
                </td>
                <td className="px-4 py-4 text-center border-b border-gray-300">
                  <span className="text-green-600 text-xl">✅</span>
                </td>
                <td className="px-4 py-4 text-center bg-[#FFF5EB] border-b border-gray-300">
                  <span className="text-green-600 text-xl">✅</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-left font-semibold text-gray-700 border-b border-gray-300">
                  Mobile application
                </td>
                <td className="px-4 py-4 text-center border-b border-gray-300">
                  <span className="text-red-600 text-xl">❌</span>
                </td>
                <td className="px-4 py-4 text-center border-b border-gray-300">
                  <span className="text-green-600 text-xl">✅</span>
                </td>
                <td className="px-4 py-4 text-center bg-[#FFF5EB] border-b border-gray-300">
                  <span className="text-green-600 text-xl">✅</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-left font-semibold text-gray-700 border-b border-gray-300">
                  Price
                </td>
                <td className="px-4 py-4 text-center border-b border-gray-300">
                  <span className="text-gray-600">Depending on your activity and turnover</span>
                </td>
                <td className="px-4 py-4 text-center border-b border-gray-300">
                  <span className="text-gray-600">Depends on software</span>
                </td>
                <td className="px-4 py-4 text-center bg-[#FFF5EB] border-b border-gray-300">
                  <span className="text-gray-600">From €99 excluding VAT / month</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile view - Cards */}
        <div className="lg:hidden">
          {/* Balance sheet and tax return section */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-[#FFF5EB] py-4 px-6 font-semibold text-base text-gray-700">
              Balance sheet and tax return
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <p className="font-semibold mb-2">With a local Chartered Accountant</p>
                <p className="text-gray-600">✅ Available</p>
              </div>
              
              <div className="mb-6">
                <p className="font-semibold mb-2">With accounting software alone</p>
                <p className="text-gray-600">❌ Not available</p>
              </div>

              <div>
                <p className="font-semibold mb-2">With Captain Contrat</p>
                <p className="text-gray-600">✅ Available</p>
              </div>
            </div>
          </div>

          {/* Tax returns section */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-[#FFF5EB] py-4 px-6 font-semibold text-base text-gray-700">
              Tax returns (VAT, corporate taxes)
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <p className="font-semibold mb-2">With a local Chartered Accountant</p>
                <p className="text-gray-600">✅ Available</p>
              </div>
              
              <div className="mb-6">
                <p className="font-semibold mb-2">With accounting software alone</p>
                <p className="text-gray-600">❌ Not available</p>
              </div>

              <div>
                <p className="font-semibold mb-2">With Captain Contrat</p>
                <p className="text-gray-600">✅ Available</p>
              </div>
            </div>
          </div>

          {/* Approval of accounts section */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-[#FFF5EB] py-4 px-6 font-semibold text-base text-gray-700">
              Approval of accounts
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <p className="font-semibold mb-2">With a local Chartered Accountant</p>
                <p className="text-gray-600">✅ Available</p>
              </div>
              
              <div className="mb-6">
                <p className="font-semibold mb-2">With accounting software alone</p>
                <p className="text-gray-600">❌ Not available</p>
              </div>

              <div>
                <p className="font-semibold mb-2">With Captain Contrat</p>
                <p className="text-gray-600">✅ Available</p>
              </div>
            </div>
          </div>

          {/* Tax optimization section */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-[#FFF5EB] py-4 px-6 font-semibold text-base text-gray-700">
              Tax optimization
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <p className="font-semibold mb-2">With a local Chartered Accountant</p>
                <p className="text-gray-600">Depends on the Chartered Accountant</p>
              </div>
              
              <div className="mb-6">
                <p className="font-semibold mb-2">With accounting software alone</p>
                <p className="text-gray-600">❌ Not available</p>
              </div>

              <div>
                <p className="font-semibold mb-2">With Captain Contrat</p>
                <p className="text-gray-600">✅ Available</p>
              </div>
            </div>
          </div>

          {/* Unlimited advice section */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-[#FFF5EB] py-4 px-6 font-semibold text-base text-gray-700">
              Unlimited advice throughout the year
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <p className="font-semibold mb-2">With a local Chartered Accountant</p>
                <p className="text-gray-600">Depends on the Chartered Accountant</p>
              </div>
              
              <div className="mb-6">
                <p className="font-semibold mb-2">With accounting software alone</p>
                <p className="text-gray-600">❌ Not available</p>
              </div>

              <div>
                <p className="font-semibold mb-2">With Captain Contrat</p>
                <p className="text-gray-600">✅ Available</p>
              </div>
            </div>
          </div>

          {/* Accounting software section */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-[#FFF5EB] py-4 px-6 font-semibold text-base text-gray-700">
              Accounting software
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <p className="font-semibold mb-2">With a local Chartered Accountant</p>
                <p className="text-gray-600">❌ Not available</p>
              </div>
              
              <div className="mb-6">
                <p className="font-semibold mb-2">With accounting software alone</p>
                <p className="text-gray-600">✅ Available</p>
              </div>

              <div>
                <p className="font-semibold mb-2">With Captain Contrat</p>
                <p className="text-gray-600">✅ Available</p>
              </div>
            </div>
          </div>

          {/* Real-time monitoring section */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-[#FFF5EB] py-4 px-6 font-semibold text-base text-gray-700">
              Real-time cash flow monitoring
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <p className="font-semibold mb-2">With a local Chartered Accountant</p>
                <p className="text-gray-600">❌ Not available</p>
              </div>
              
              <div className="mb-6">
                <p className="font-semibold mb-2">With accounting software alone</p>
                <p className="text-gray-600">✅ Available</p>
              </div>

              <div>
                <p className="font-semibold mb-2">With Captain Contrat</p>
                <p className="text-gray-600">✅ Available</p>
              </div>
            </div>
          </div>

          {/* Mobile application section */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-[#FFF5EB] py-4 px-6 font-semibold text-base text-gray-700">
              Mobile application
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <p className="font-semibold mb-2">With a local Chartered Accountant</p>
                <p className="text-gray-600">❌ Not available</p>
              </div>
              
              <div className="mb-6">
                <p className="font-semibold mb-2">With accounting software alone</p>
                <p className="text-gray-600">✅ Available</p>
              </div>

              <div>
                <p className="font-semibold mb-2">With Captain Contrat</p>
                <p className="text-gray-600">✅ Available</p>
              </div>
            </div>
          </div>

          {/* Price section */}
          <div className="mb-8 rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-[#FFF5EB] py-4 px-6 font-semibold text-base text-gray-700">
              Price
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <p className="font-semibold mb-2">With a local Chartered Accountant</p>
                <p className="text-gray-600">Depending on your activity and turnover</p>
              </div>
              
              <div className="mb-6">
                <p className="font-semibold mb-2">With accounting software alone</p>
                <p className="text-gray-600">Depends on software</p>
              </div>

              <div>
                <p className="font-semibold mb-2">With Captain Contrat</p>
                <p className="text-gray-600">From €99 excluding VAT / month</p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 