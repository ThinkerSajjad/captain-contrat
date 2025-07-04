import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

export function FinancialDifficultiesProcedures() {
  return (
    <section className="lg:py-16 py-10 bg-lightPrimary">
      <PageContainer>
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-tertiary lg:mb-16 mb-10">
          The 3 procedures for dealing with financial difficulties
        </h2>

        <div className="grid lg:grid-cols-2 lg:gap-8 gap-6 bg-white lg:p-8 p-6 rounded-lg shadow-sm">
          {/* Left side - Question and CTA */}
          <div className="bg-white lg:p-8 p-3 rounded-lg">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-tertiary">
              Are you experiencing financial difficulties?
            </h3>
            
            <p className="text-gray-700 mb-4">
              Don't wait, our partner lawyers will be able to guide you and offer solutions adapted to your situation.
            </p>
            
            <p className="text-gray-700 mb-8">
              Collective procedures all aim to find solutions to your difficulties (scheduling of payments, elimination of certain debts, etc.).
            </p>

            <Link 
              href="/meetings/rdv-captain-contrat"
              className="inline-block font-semibold bg-secondary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all text-center w-full"
            >
              Get a free quote
            </Link>
          </div>

          {/* Right side - 3 Procedures */}
          <div className="space-y-4">
            {/* Preventive measures */}
            <div className="bg-red-50 lg:p-6 p-4 rounded-lg shadow-sm relative overflow-hidden">
              <div className="absolute left-6 top-6 w-8 h-8 rounded-full bg-white flex items-center justify-center text-secondary font-semibold">
                1
              </div>
              <div className="ml-12">
                <h4 className="font-semibold text-lg mb-2">Preventive measures</h4>
                <p className="text-gray-600">
                  If financial difficulties arise, two procedures can be put in place: conciliation or safeguarding.
                </p>
              </div>
            </div>

            {/* Judicial recovery */}
            <div className="bg-red-50 lg:p-6 p-4 rounded-lg shadow-sm relative overflow-hidden">
              <div className="absolute left-6 top-6 w-8 h-8 rounded-full bg-white flex items-center justify-center text-secondary font-semibold">
                2
              </div>
              <div className="ml-12">
                <h4 className="font-semibold text-lg mb-2">Judicial recovery</h4>
                <p className="text-gray-600">
                  Judicial recovery allows the company to continue its activity by clearing its liabilities.
                </p>
              </div>
            </div>

            {/* Judicial liquidation */}
            <div className="bg-red-50 lg:p-6 p-4 rounded-lg shadow-sm relative overflow-hidden">
              <div className="absolute left-6 top-6 w-8 h-8 rounded-full bg-white flex items-center justify-center text-secondary font-semibold">
                3
              </div>
              <div className="ml-12">
                <h4 className="font-semibold text-lg mb-2">Judicial liquidation</h4>
                <p className="text-gray-600">
                  If safeguarding or judicial recovery is impossible, the company is placed into compulsory liquidation. At the end of this liquidation, the company is closed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 