"use client"

import PageContainer from "../layout/PageContainer"

export function BusinessCreationGuide() {
  return (
    <section className="py-12 md:py-20 bg-lightPrimary w-full">
      <PageContainer>
        <div className="max-w-5xl mx-auto">
          <div className="text-center lg:mb-14 mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
              Starting your business online : <span className="text-tertiary">the essentials to remember before getting started</span>
            </h2>
          </div>

          <div className="space-y-8">
            {/* Legal Form Card */}
            <div className="bg-white rounded-xl lg:p-10 p-6 border border-gray-200 ">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Choosing the <span className="text-secondary">legal form</span> to create your company
              </h3>
              
              <div className="text-slate-700 space-y-4">
                <p>
                  Choosing the right legal structure is crucial when <strong>starting a business</strong>. Whether you are considering a <strong>multi-person company</strong> such as an SAS, SARL or SCI, or a <strong>single-person structure</strong> such as a SASU, EURL or sole proprietorship, your decision should reflect the current and future needs of your business. To make an informed choice, it is important to understand the main differences between a sole proprietorship and a corporation.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2">Choosing a sole proprietorship</h4>
                  <p>
                    The sole proprietorship, ideal for solo entrepreneurs, is distinguished by simplified creation and management, with a simplified tax regime, particularly for micro-entrepreneurs, which makes it an ideal option for testing a market. However, it has the disadvantage of not separating personal and professional assets, thus exposing the entrepreneur to a higher risk.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Choosing a corporation</h4>
                  <p>
                    <strong>Creating a corporation</strong>, on the other hand, involves more complex procedures, but offers a more solid structure. With stricter tax obligations, requiring detailed accounting, it generally ensures better protection of the personal assets of managers and partners. They are suitable for projects that require increased credibility with business and financial partners.
                  </p>
                </div>
                
                <p>
                  In any case, think long-term and assess the flexibility of the chosen legal structure to anticipate potential changes in your business.
                </p>
              </div>
            </div>

            {/* Essential Steps Card */}
            <div className="bg-white rounded-xl lg:p-10 p-6 border border-gray-200 ">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                The <span className="text-secondary">essential steps</span> to creating an online business
              </h3>
              
              <div className="text-slate-700 space-y-4">
                <p>
                  To set up your company, you will first need to define your business project, conduct market research, find sources of financing and draw up a business plan. Once these steps have been completed, you can begin the legal creation of your company, starting with the choice of your legal form. Depending on your legal form, the steps vary.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2">Steps for creating a sole proprietorship</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Step 1: Make a declaration of commencement of activity online</li>
                    <li>Step 2: Provide the necessary documents (identity document, declaration of no convictions, etc.)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Steps for creating a company</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Step 1: Write the company's articles of association</li>
                    <li>Step 2: Deposit the share capital at the bank or with a notary</li>
                    <li>Step 3: Publish a legal notice in a legal announcements journal (JAL)</li>
                    <li>Step 4: Complete the registration formalities online</li>
                    <li>Step 5: Obtain company registration</li>
                  </ul>
                </div>
                
                <p>
                  Once your company is established, other steps must be taken, such as: protecting your brand or product, taking out professional insurance, etc.
                </p>
              </div>
            </div>

            {/* Financial Aid Card */}
            <div className="bg-white rounded-xl lg:p-10 p-6 border border-gray-200 ">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                <span className="text-secondary">Financial aid</span> for business creation
              </h3>
              
              <div className="text-slate-700 space-y-4">
                <p>
                  When setting up your business, several financial assistance schemes are available to you.
                </p>
                
                <ul className="list-disc pl-5 space-y-3">
                  <li>
                    <strong>Pôle emploi support</strong> which offers future business creators the possibility of choosing between Assistance for recovery or creation (ARCE) or maintaining your benefits.
                  </li>
                  <li>
                    <strong>Interest-free loans from Initiative platforms</strong> - these are local associations in the Initiative France network that help creators by providing them with zero-interest loans.
                  </li>
                  <li>
                    <strong>ADIE microcredit</strong> - These loans are for entrepreneurs who cannot access bank financing. The Association for the Right to Economic Initiative (ADIE) offers microcredit loans of up to €10,000.
                  </li>
                  <li>
                    <strong>The NACRE Program</strong> (New Support for Business Creation or Takeover) provides beneficiaries with three years of assistance to help them set up their business creation or takeover project, structure their finances, and get started.
                  </li>
                </ul>
                
                <p>
                  Be sure to check your eligibility. This assistance can significantly facilitate your business creation process and strengthen its initial financial viability.
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </PageContainer>
    </section>
  )
} 