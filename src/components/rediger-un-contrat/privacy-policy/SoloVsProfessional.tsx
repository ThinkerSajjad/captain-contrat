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
                <th className="w-1/3 px-4 py-6 text-start lg:text-lg text-base font-semibold text-gray-700 border-b border-gray-300">
                  In autonomy
                  <p className="text-gray-600 text-sm font-normal">
                    For entrepreneurs who want to manage their legal affairs
                    themselves
                  </p>
                </th>
                <th className="w-1/3 px-4 py-6 text-start lg:text-lg text-base font-semibold text-gray-700 bg-primary rounded-t-lg border-b border-gray-300">
                  With Captain Contrat
                  <p className="text-gray-600 text-sm font-normal">
                    For entrepreneurs who want to manage their legal affairs
                    themselves
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-8 text-left font-semibold text-gray-700 border-b border-gray-300 align-top">
                  ✨ The advantages
                </td>
                <td className="px-4 py-8 text-gray-600 border-b border-gray-300">
                  Free
                </td>
                <td className="px-4 py-8 text-gray-600 bg-primary border-b border-gray-300">
                  <ul className="list-disc list-inside text-left pl-4 space-y-2">
                    <li>Legal security</li>
                    <li>Peace of mind</li>
                    <li>Time saved</li>
                    <li>Support from a lawyer</li>
                    <li>Best value for money</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-8 text-left font-semibold text-gray-700 border-b border-gray-300 align-top">
                  ⚠️ The risks
                </td>
                <td className="px-4 py-8 text-gray-600 border-b border-gray-300">
                  <ul className="list-disc list-inside text-left pl-4 space-y-2">
                    <li>Time spent finding the necessary information</li>
                    <li>Time spent writing the document</li>
                    <li>Risks of disputes with your contractor</li>
                  </ul>
                </td>
                <td className="px-4 py-8 text-gray-600 bg-primary border-b border-gray-300">
                  <ul className="list-disc list-inside text-left pl-4 space-y-2 font-bold">
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
              <h3 className="font-semibold text-base text-gray-700">
                ✨ The advantages
              </h3>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-4">
                  In autonomy
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Low financial cost</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-4">
                  With Captain Contract
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    A specialized lawyer draws up general terms and conditions
                    adapted to your needs
                  </li>
                  <li>
                    Your T&Cs comply with current legislation and do not contain
                    any unfair clauses.
                  </li>
                  <li>You save time</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The risks */}
          <div className="rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-primary py-4 px-6">
              <h3 className="font-semibold text-base text-gray-700">
                ⚠️ The risks
              </h3>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-4">
                  In autonomy
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    Drafting T&Cs is a complex and time-consuming process . You
                    risk wasting a lot of time.{" "}
                  </li>
                  <li>
                    You may forget a mandatory mention or insert an abusive
                    clause.
                  </li>
                  <li>
                    You may be liable to an administrative fine if you make a
                    mistake.{" "}
                  </li>
                  <li>
                    Poorly written T&Cs can create disputes with your customers.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-4">
                  With Captain Contract
                </h4>
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
