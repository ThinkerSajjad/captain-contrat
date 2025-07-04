
import PageContainer from "../layout/PageContainer";

export function StandardVsSerenity() {
  return (
    <section className="py-16 bg-white">
      <PageContainer>
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-tertiary lg:mb-12 mb-8">
          Our support offers to close your business
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Standard Plan */}
          <div className="bg-white rounded-xl shadow-md">
            <div className="lg:p-6 p-4 bg-blue-100 rounded-t-xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">💼</span>
                  <h3 className="text-2xl font-semibold">Standard</h3>
                </div>
                <p className="mb-6">
                  I have <span className="font-bold">full</span> support
                </p>
            </div>

            <div className="lg:p-6 p-4">
                <div className="lg:text-4xl text-3xl font-bold mb-2">
                  149
                  <span className="text-sm font-normal ml-1">€ excluding VAT</span>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <p>Minutes of dissolution and liquidation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <p>Publication of the 2 legal notices <span className="text-gray-600">by our lawyers</span></p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <p>Verification, processing of the file <span className="text-gray-600">by our lawyers</span> and filing of the file with the registry</p>
                  </div>
                </div>
            </div>
          </div>

          {/* Serenity Plan */}
          <div className="bg-white rounded-xl shadow-md">
            <div className="lg:p-6 p-4 bg-blue-100 rounded-t-xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🌟</span>
                  <h3 className="text-2xl font-semibold">Serenity</h3>
                </div>
                <p className="mb-6">
                  I receive <span className="font-bold">priority</span> treatment
                </p>
            </div>

            <div className="lg:p-6 p-4">
                <div className="lg:text-4xl text-3xl font-bold mb-2">
                  249
                  <span className="text-sm font-normal ml-1">€ excluding VAT</span>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <p>Publication of the 2 legal notices <span className="text-gray-600">by our lawyers</span></p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <p>Verification, processing of the file <span className="text-gray-600">by our lawyers</span> and filing of the file with the registry</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <p>Express processing in less than 24 hours</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 text-xl">✓</span>
                    <p>Anti-rejection insurance</p>
                  </div>
                </div>
            </div>

            
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 