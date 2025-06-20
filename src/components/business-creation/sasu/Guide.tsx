"use client"

import PageContainer from "@/components/layout/PageContainer"

export function Guide() {
  return (
    <section className="py-12 md:py-20 bg-white w-full">
      <PageContainer>
        <div className="max-w-5xl mx-auto">

          <div className="space-y-8">
            {/* What is the point of creating a SASU */}
            <div className="bg-white rounded-xl lg:p-10 p-6 border border-gray-200">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                What is the point of <span className="text-secondary">creating a SASU</span>?
              </h3>
              
              <div className="text-slate-700 space-y-4">
                <ul className="space-y-4">
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <p>
                      A SASU is a single-member commercial company that allows a <strong>single person to undertake a business without forming a partnership</strong>. By creating a SASU, the sole shareholder creates a separate legal entity with its own assets.
                    </p>
                  </li>
                  
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <p>
                      The SASU has the <strong>advantage of being flexible</strong>: it is the sole shareholder who has the freedom to organize the governance of the company in the statutes.
                    </p>
                  </li>
                  
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <p>
                      Furthermore, this flexibility is also reflected in the choice of taxation. Indeed, while the SASU is subject to corporate tax by default, <strong>the shareholder can opt for income tax</strong> for a maximum period of 5 years.
                    </p>
                  </li>
                  
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <p>
                      Finally, if the partner&apos;s project develops, the latter can easily welcome new shareholders by <strong>transforming the SASU into an SAS</strong>.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* What budget is required to create a SASU? */}
            <div className="bg-white rounded-xl lg:p-10 p-6 border border-gray-200">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                What <span className="text-secondary">budget</span> is required to create a SASU?
              </h3>
              
              <div className="text-slate-700 space-y-4">
                <p>
                  The total budget for opening a SASU varies, but it generally costs between 2,000 and 3,000 euros. It is broken down as follows:
                </p>
                
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <p>Bank capital deposit: 1,000 to 2,000 euros;</p>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <p>Creation formalities (drafting of statutes, legal notice, etc.): 500 euros;</p>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <p>Support from an accountant: 500 to 1500 euros.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* How to create a SASU online? */}
            <div className="bg-white rounded-xl lg:p-10 p-6 border border-gray-200">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                How to create a <span className="text-secondary">SASU online</span>?
              </h3>
              
              <div className="text-slate-700 space-y-4">
                <p>
                  Creating a SASU online requires going through several key steps:
                </p>
                
                <div className="space-y-6 mt-4">
                  <div>
                    <h4 className="font-semibold mb-2">Step 1: drafting the statutes</h4>
                    <p className="mb-2">The statutes set out the operating rules:</p>
                    <ul className="space-y-1">
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <p>The company name;</p>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <p>The legal form (SASU);</p>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <p>The address of the head office;</p>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <p>The partner&apos;s contributions;</p>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <p>The amount, in euros, of the share capital;</p>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <p>The purpose of the company;</p>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <p>The lifespan of the company (maximum 99 years);</p>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <p>The company&apos;s management arrangements;</p>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <p>Rules for the appointment of the chairman and the chief executive officer;</p>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <p></p>
                      </li>
                    </ul>
                    <p className="mt-2">
                      You have a great deal of freedom in drafting the content of the statutes. However, mandatory information must be included (Art. 1835 of the Civil Code and L. 227-5 et seq. of the Commercial Code).
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Step 2: Deposit of share capital</h4>
                    <p className="mb-2">The share capital of the SASU is made up of your contributions:</p>
                    <ul className="space-y-1">
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <p>in cash (sum of money);</p>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <p>and in kind (movable or immovable property).</p>
                      </li>
                    </ul>
                    <p className="mt-2">
                      The share capital is deposited before the articles of association are signed and the company is registered. It must be made with a bank or notary.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Step 3: publication of the legal notice</h4>
                    <p>
                      To register a SASU, a registration notice must be published in a legal announcements journal. This mandatory step is intended to notify third parties of the company&apos;s upcoming creation.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Step 4: transmitting the file to the Single Window</h4>
                    <p className="mb-2">
                      The One-Stop Shop is a platform that allows you to complete business creation formalities online. You will need to complete a single form and submit your supporting documents to the website procedures.inpi.fr.
                    </p>
                    <p className="mb-2">
                      Please note: to access the form, click on the Business Creation section and select "Company".
                    </p>
                    <p>
                      A summary will specify the competent authority responsible for processing your file and the formality bundle number.
                    </p>
                    <p>
                      Finally, you will need to electronically sign the final document generated by the Single Window.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Step 5: registration of the SASU</h4>
                    <p>
                      If your file is complete, the registry will register your SASU in the National Business Directory (RNE) and the Trade and Companies Register (RCS). You will then receive a document with your Siren number.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
} 