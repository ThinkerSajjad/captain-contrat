"use client"

import PageContainer from "@/components/layout/PageContainer";

export function WhyMakeAgreement() {
  return (
    <section className="lg:py-16 py-10 bg-white">
      <PageContainer>
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-slate-800 mb-6 lg:mb-16">
          Why make a partnership agreement?
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 shadow-md rounded-xl lg:p-8 p-2">
          {/* Left column - Main text */}
          <div className="lg:w-1/2 bg-white lg:p-6 p-4 rounded-xl">
            <h3 className="lg:text-2xl text-xl font-bold text-slate-800 mb-6">
              The role of the shareholders&apos; agreement and the 3 essential clauses
            </h3>

            <div className="space-y-6 text-slate-700">
              <p>
                Departure of a partner, entry of a new partner, sale of intellectual property rights: <strong>the partners&apos; agreement makes it possible to anticipate many situations calmly to avoid any conflict within a company.</strong>
              </p>

              <p>
                The shareholders&apos; agreement helps <strong>protect the company</strong>, particularly in the event of withdrawal or fault on the part of one of the founders.
              </p>

              <p>
                At Captain Contrat, we therefore strongly recommend that you enter into this agreement when setting up a business or when new partners join the company.
              </p>

              <div className="mt-6 lg:mt-10">
                <button className="w-full lg:py-4 py-3 px-6 bg-red-400 hover:bg-red-500 text-white font-semibold text-base lg:text-lg rounded-full transition-colors cursor-pointer">
                  Obtain my partnership agreement
                </button>
              </div>
            </div>
          </div>

          {/* Right column - 3 clauses */}
          <div className="lg:w-1/2 space-y-6">
            {/* Clause 1 */}
            <div className="bg-red-50 lg:p-6 p-4 rounded-xl relative flex items-center lg:gap-4 gap-2">
              <div className=" bg-white rounded-full flex items-center justify-center text-red-400 font-bold shadow-sm">
                <span className="lg:text-2xl text-2xl lg:p-4 p-3 rounded-full">1</span>
              </div>
              <div className="lg:ml-6 ml-4">
                <h4 className="lg:text-xl text-lg font-bold text-slate-800 lg:mb-3 mb-2">
                  The preemption clause
                </h4>
                <p className="text-slate-700">
                  If one of the partners wishes to sell his shares, the pre-emption clause gives priority to the other partners for the purchase of the shares.
                </p>
              </div>
            </div>

            {/* Clause 2 */}
            <div className="bg-red-50 lg:p-6 p-4 rounded-xl relative flex items-center lg:gap-4 gap-2">
              <div className=" bg-white rounded-full flex items-center justify-center text-red-400 font-bold shadow-sm">
                <span className="lg:text-2xl text-2xl lg:p-4 p-3 rounded-full">2</span>
              </div>
              <div className="lg:ml-6 ml-4">
                <h4 className="lg:text-xl text-lg font-bold text-slate-800 lg:mb-3 mb-2">
                  The approval clause
                </h4>
                <p className="text-slate-700">
                  In the presence of an approval clause, if one of the partners wishes to sell his shares, the new shareholder must be approved by the general meeting.
                </p>
              </div>
            </div>

            {/* Clause 3 */}
            <div className="bg-red-50 lg:p-6 p-4 rounded-xl relative flex items-center lg:gap-4 gap-2">
              <div className=" bg-white rounded-full flex items-center justify-center text-red-400 font-bold shadow-sm">
                <span className="lg:text-2xl text-2xl lg:p-4 p-3 rounded-full">3</span>
              </div>
              <div className="lg:ml-6 ml-4">
                <h4 className="lg:text-xl text-lg font-bold text-slate-800 lg:mb-3 mb-2">
                  Voting rights
                </h4>
                <p className="text-slate-700">
                  The shareholders&apos; agreement may grant shareholders voting rights that are not proportional to their contributions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 