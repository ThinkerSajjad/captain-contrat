import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

export function SoloVsProfessional() {
  return (
    <section className="py-16 bg-white">
      <PageContainer>
        <h2 className="lg:text-4xl text-3xl font-bold text-center text-tertiary lg:mb-12 mb-8">
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
                With Captain Contrat
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-8 text-left font-semibold text-gray-700 border-b border-gray-300">✍️ Drafting of statutes</td>
                <td className="px-4 py-8 text-center text-gray-600 border-b border-gray-300"><ul className="list-disc list-inside text-left pl-4 space-y-2">
                <li>Write and publish a legal notice</li>
                <li>Gather supporting documents</li>
                <li>Submit your complete file</li>
                <li>Repeat the procedure for the liquidation of your company</li>
                <li>Proceed with the deregistration of your company at the end</li>
                </ul></td>
                <td className="px-4 py-8 text-center text-gray-600 bg-primary border-b border-gray-300">
                <ul className="list-disc list-inside text-left pl-4 space-y-2">
                <li>Generate all the necessary documents in just a few clicks (attendance sheet, summons, dissolution minutes, etc.)</li>
                <li>Delegate the drafting and publication of legal notices and benefit from discounts</li>
                <li>Let yourself be guided by our specialized lawyers</li>
                <li>Let us submit your complete file</li>
                  </ul></td>
              </tr>
              <tr>
                <td className="px-4 py-8 text-left font-semibold text-gray-700 border-b border-gray-300 align-top">✨ The advantages</td>
                <td className="px-4 py-8 text-gray-600 border-b border-gray-300">
                Pay only the administrative fees
                </td>
                <td className="px-4 py-8 text-gray-600 bg-primary border-b border-gray-300">
                  <ul className="list-disc list-inside text-left pl-4 space-y-2">
                  <li>Peace of mind</li>
                  <li>Save time</li>
                  <li>Unlimited support</li>
                  <li>Discount on the price of legal notices</li>
                  <li>Better value for money than with a lawyer or accountant</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-8 text-left font-semibold text-gray-700 border-b border-gray-300 align-top">⚠️ The disadvantages</td>
                <td className="px-4 py-8 text-gray-600 border-b border-gray-300">
                <ul className="list-disc list-inside text-left pl-4 space-y-2">
                <li>Time spent writing documents</li>
                <li>Time spent gathering the necessary parts</li>
                <li>Time spent on administrative procedures</li>
                <li>Risk of rejection of the file</li>
                <li>Managing back and forth with the administration</li>
                </ul>
                </td>
                <td className="px-4 py-8 text-gray-600 bg-primary border-b border-gray-300">
                  <ul className="list-disc list-inside text-left pl-4 space-y-2">
                  <li>None, you are satisfied or your money back! </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-8 text-left font-semibold text-gray-700 border-b border-gray-300 align-top">🚀 Deadlines</td>
                <td className="px-4 py-8 text-gray-600 border-b border-gray-300">
                <ul className="list-disc list-inside text-left pl-4 space-y-2">
                <li>Risks of delays if your application is rejected by the administration</li>
                </ul>
                </td>
                <td className="px-4 py-8 text-gray-600 bg-primary border-b border-gray-300">
                  <ul className="list-disc list-inside text-left pl-4 space-y-2">
                  <li>Processing of your file in less than 24 hours</li>
                  </ul>
                </td>
              </tr>
       
            </tbody>
          </table>
        </div>

        {/* Mobile view - Cards */}
        <div className="lg:hidden space-y-8">
          {/* Drafting of statutes */}
          <div className="rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-primary py-4 px-6">
              <h3 className="font-semibold text-base text-gray-700">✍️ Drafting of statutes</h3>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-4">In autonomy</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Write and publish a legal notice</li>
                  <li>Gather supporting documents</li>
                  <li>Submit your complete file</li>
                  <li>Repeat the procedure for the liquidation of your company</li>
                  <li>Proceed with the deregistration of your company at the end</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-4">With Captain Contract</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Generate all the necessary documents in just a few clicks (attendance sheet, summons, dissolution minutes, etc.)</li>
                  <li>Delegate the drafting and publication of legal notices and benefit from discounts</li>
                  <li>Let yourself be guided by our specialized lawyers</li>
                  <li>Let us submit your complete file</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* The advantages */}
          <div className="rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-primary py-4 px-6">
              <h3 className="font-semibold text-base text-gray-700">✨ The advantages</h3>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-4">In autonomy</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Pay only the administrative fees</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-4">With Captain Contract</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Peace of mind</li>
                  <li>Save time</li>
                  <li>Unlimited support</li>
                  <li>Discount on the price of legal notices</li>
                  <li>Better value for money than with a lawyer or accountant</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* The disadvantages */}
          <div className="rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-primary py-4 px-6">
              <h3 className="font-semibold text-base text-gray-700">⚠️ The disadvantages</h3>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-4">In autonomy</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Time spent writing documents</li>
                  <li>Time spent gathering the necessary parts</li>
                  <li>Time spent on administrative procedures</li>
                  <li>Risk of rejection of the file</li>
                  <li>Managing back and forth with the administration</li>
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
          
          {/* Deadlines */}
          <div className="rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-primary py-4 px-6">
              <h3 className="font-semibold text-base text-gray-700">🚀 Deadlines</h3>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-4">In autonomy</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Risks of delays if your application is rejected by the administration</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-4">With Captain Contract</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Processing of your file in less than 24 hours</li>
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
            Close my business
          </Link>
        </div>
      </PageContainer>
    </section>
  );
} 