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
              {/* Drafting the contract */}
              <tr>
                <td className="px-4 py-8 text-left font-semibold text-gray-700 border-b border-gray-300 align-top">
                  ✍️ Drafting the contract
                </td>
                <td className="px-4 py-8 text-gray-600 border-b border-gray-300">
                  <ul className="list-disc list-inside text-left pl-4 space-y-2">
                    <li>
                      Learn about your rights and obligations as an employer
                    </li>
                    <li>
                      Draft the employment contract including the essential
                      clauses
                    </li>
                    <li>Above all, do not forget any important clauses</li>
                  </ul>
                </td>
                <td className="px-4 py-8 text-gray-600 bg-primary border-b border-gray-300">
                  <ul className="list-disc list-inside text-left pl-4 space-y-2">
                    <li>
                      Benefit from the recommendation of a lawyer specializing
                      in your sector of activity
                    </li>
                    <li>Get an appointment with him during the day</li>
                    <li>Benefit from unlimited , tailor-made advice</li>
                    <li>
                      Be sure of the security the contract provides to your
                      employee
                    </li>
                  </ul>
                </td>
              </tr>

              {/* ✨ The advantages
               */}
              <tr>
                <td className="px-4 py-8 text-left font-semibold text-gray-700 border-b border-gray-300 align-top">
                  ✨ The advantages
                </td>
                <td className="px-4 py-8 text-gray-600 border-b border-gray-300">
                  Low financial cost
                </td>
                <td className="px-4 py-8 text-gray-600 bg-primary border-b border-gray-300">
                  <ul className="list-disc list-inside text-left pl-4 space-y-2">
                    <li>Legal security</li>
                    <li>Peace of mind</li>
                    <li>Save time</li>
                    <li>Unlimited support (message and telephone)</li>
                    <li>
                      Better value for money than a traditional lawyer or
                      accountant
                    </li>
                  </ul>
                </td>
              </tr>

              {/* ⚠️ The risks */}
              <tr>
                <td className="px-4 py-8 text-left font-semibold text-gray-700 border-b border-gray-300 align-top">
                  ⚠️ The risks
                </td>
                <td className="px-4 py-8 text-gray-600 border-b border-gray-300">
                  <ul className="list-disc list-inside text-left pl-4 space-y-2">
                    <li>
                      Time spent learning about the essential clauses and those
                      to avoid
                    </li>
                    <li>Time spent drafting the employment contract</li>
                    <li>
                      Risk of litigation with your employee is high, which can
                      generate large financial losses.
                    </li>
                  </ul>
                </td>
                <td className="px-4 py-8 text-gray-600 bg-primary border-b border-gray-300">
                  <ul className="list-disc list-inside text-left pl-4 space-y-2">
                    <li>
                      Risk of litigation with your employee is high, which can
                      generate large financial losses.
                    </li>
                  </ul>
                </td>
              </tr>

              {/* Deadlines */}
              <tr>
                <td className="px-4 py-8 text-left font-semibold text-gray-700 border-b border-gray-300 align-top">
                  🚀 Deadlines
                </td>
                <td className="px-4 py-8 text-gray-600 border-b border-gray-300">
                  Varies depending on your legal level
                </td>
                <td className="px-4 py-8 text-gray-600 bg-primary border-b border-gray-300">
                  Your contract available in 72 hours
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile view - Cards */}
        <div className="lg:hidden space-y-8">
          {/* Drafting the contract*/}
          <div className="rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-primary py-4 px-6">
              <h3 className="font-semibold text-base text-gray-700">
                ✍️ Drafting the contract
              </h3>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-4">
                  In autonomy
                </h4>

                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    Learn about your rights and obligations as an employer
                  </li>
                  <li>
                    Draft the employment contract including the essential
                    clauses
                  </li>
                  <li>Above all, do not forget any important clauses</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-4">
                  With Captain Contract
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    Benefit from the recommendation of a lawyer specializing in
                    your sector of activity
                  </li>
                  <li>Get an appointment with him during the day</li>
                  <li>Benefit from unlimited , tailor-made advice</li>
                  <li>
                    Be sure of the security the contract provides to your
                    employee
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/*  The advantages */}
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
                  <li>Legal security</li>
                  <li>Peace of mind</li>
                  <li>Save time</li>
                  <li>Unlimited support (message and telephone)</li>
                  <li>
                    Better value for money than a traditional lawyer or
                    accountant
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/*  ⚠️ The risks */}
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
                    Time spent learning about the essential clauses and those to
                    avoid
                  </li>
                  <li>Time spent drafting the employment contract</li>
                  <li>
                    Risk of litigation with your employee is high, which can
                    generate large financial losses.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-4">
                  With Captain Contract
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>None, you are satisfied or your money back! </li>
                </ul>
              </div>
            </div>
          </div>

          {/*  🚀 Deadlines */}
          <div className="rounded-lg overflow-hidden border border-gray-300">
            <div className="bg-primary py-4 px-6">
              <h3 className="font-semibold text-base text-gray-700">
                🚀 Deadlines
              </h3>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-4">
                  In autonomy
                </h4>

                <p>Varies depending on your legal level</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-4">
                  With Captain Contract
                </h4>

                <p>Your contract available in 72 hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/funnel/service_choices/1?source=%2Fgestion-du-personnel%2Frediger-contrat-de-travail-permanent"
            className="bg-[#F25C54] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all w-full sm:w-auto text-center"
          >
            Get my T&C
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
