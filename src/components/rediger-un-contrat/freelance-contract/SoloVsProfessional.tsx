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
                  With a model
                  <p className="text-gray-600 text-sm font-normal">
                    For entrepreneurs who want to write their own contracts
                  </p>
                </th>
                <th className="w-1/3 px-4 py-6 text-start lg:text-lg text-base font-semibold text-gray-700 bg-primary rounded-t-lg border-b border-gray-300">
                  With Captain Contrat
                  <p className="text-gray-600 text-sm font-normal">
                    For entrepreneurs who want to secure their business
                    relationships
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-8 text-left font-semibold text-gray-700 border-b border-gray-300 align-top">
                  ✍️ Drafting the contract
                </td>
                <td className="px-4 py-8 text-gray-600 border-b border-gray-300">
                  <ul className="list-disc list-inside text-left pl-4 space-y-2">
                    <li>Select a model</li>
                    <li>Customize the contract</li>
                    <li>
                      Delete clauses that are not suitable for your business
                    </li>
                    <li>Add your specific clauses</li>
                  </ul>{" "}
                </td>
                <td className="px-4 py-8 text-gray-600 bg-primary border-b border-gray-300">
                  <ul className="list-disc list-inside text-left pl-4 space-y-2">
                    <li>
                      Complete a questionnaire and we will choose the most
                      suitable lawyer for you.
                    </li>
                    <li>Ask all your questions to our partner lawyer</li>
                    <li>Get a fixed-price quote within 24 hours</li>
                    <li>The lawyer draws up your commercial contract</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-8 text-left font-semibold text-gray-700 border-b border-gray-300 align-top">
                  ✨ The advantages
                </td>
                <td className="px-4 py-8 text-gray-600 border-b border-gray-300">
                  You only have to pay the price of the model.
                </td>
                <td className="px-4 py-8 text-gray-600 bg-primary border-b border-gray-300">
                  <ul className="list-disc list-inside text-left pl-4 space-y-2 font-bold">
                    <li>You only have to pay the price of the model.</li>
                    <li>
                      You have the guarantee that your contract complies with
                      the legislation
                    </li>
                    <li>The contract is personalized</li>
                    <li>The risk of litigation is reduced</li>
                    <li>Save time</li>
                    <li>Unlimited support (message and phone)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-8 text-left font-semibold text-gray-700 border-b border-gray-300 align-top">
                  ⚠️ The risks
                </td>
                <td className="px-4 py-8 text-gray-600 border-b border-gray-300">
                  <ul className="list-disc list-inside text-left pl-4 space-y-2 font-bold">
                    <li>Time spent finding the necessary information</li>
                    <li>The model may contain abusive clauses</li>
                    <li>Risks of litigation</li>
                    <li>
                      An inadequate contract can deter potential business
                      partners
                    </li>
                  </ul>
                </td>
                <td className="px-4 py-8 text-gray-600 bg-primary border-b border-gray-300">
                  None, satisfaction guaranteed!
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
                ✍️ Drafting the contract
              </h3>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-4">
                  With a model
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Select a model</li>
                  <li>Customize the contract</li>
                  <li>
                    Delete clauses that are not suitable for your business
                  </li>
                  <li>Add your specific clauses</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-4">
                  With Captain Contract
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    Complete a questionnaire and we will choose the most
                    suitable lawyer for you.
                  </li>
                  <li>Ask all your questions to our partner lawyer</li>
                  <li>Get a fixed-price quote within 24 hours</li>
                  <li>The lawyer draws up your commercial contract</li>
                </ul>
              </div>
            </div>
          </div>

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
                  With a model
                </h4>

                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>You only have to pay the price of the model.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-4">
                  With Captain Contract
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    You have the guarantee that your contract complies with the
                    legislation
                  </li>
                  <li>The contract is personalized</li>
                  <li>The risk of litigation is reduced</li>
                  <li>Save time</li>
                  <li>Unlimited support (message and phone)</li>
                  <li>None, you are satisfied or your money back!</li>
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
                  With a model
                </h4>

                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Time spent finding the necessary information</li>
                  <li>The model may contain abusive clauses</li>
                  <li>Risks of litigation</li>
                  <li>
                    An inadequate contract can deter potential business partners
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-4">
                  With Captain Contract
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>None! Satisfaction guaranteed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/funnel/service_choices/1?source=%2Frediger-un-contrat%2Frediger-contrat-de-travail-indetermine"
            className="bg-[#F25C54] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all w-full sm:w-auto text-center"
          >
            Get my Contract
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
