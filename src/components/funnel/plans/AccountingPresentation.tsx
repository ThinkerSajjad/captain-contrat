'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

export default function AccountingPresentation() {
  const router = useRouter();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center text-gray-600 mb-8 cursor-pointer"
      >
        <FaArrowLeft className="w-4 h-4 mr-2" /> Back
      </button>

      {/* Main Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Our comprehensive accounting support ensures a successful start
      </h1>

      {/* Main Content Container */}
      <div className="flex flex-col items-center gap-12">
        {/* Image and Benefits Section */}
        <div className="bg-[#FFF5F0] rounded-2xl p-8 max-w-7xl w-full flex lg:flex-row flex-col items-center gap-8">
          <div className="flex lg:flex-row flex-col items-center gap-8">
            <Image
              src="/images/home/Ines.png"
              alt="Accounting Support Team"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>

          {/* Creator Offer Banner */}
          <div className="mt-8">
            <div className="flex items-center gap-2 text-blue-700 font-medium mb-6">
              <span className="text-xl">🎁</span>
              Creator offer: free until you receive your KBIS
            </div>

            {/* Benefits List */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  ✓ Make the right accounting choices
                </h3>
                <p className="text-gray-600">
                  Get advice on choosing the right tax and VAT regime
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  ✓ Delegate your accounting
                </h3>
                <p className="text-gray-600">
                  Import your supporting documents and let your accountant take care of everything
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  ✓ Optimize your expenses and charges
                </h3>
                <p className="text-gray-600">
                  Deduct certain expenses from your taxable income
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col lg:flex-row gap-4 justify-center w-full max-w-7xl">
          <button
            onClick={() => {/* Handle email offer */}}
            className="px-6 py-3 bg-[#F15B5B] text-white rounded-full hover:bg-[#d64545] transition-colors cursor-pointer font-semibold"
          >
            Receive offers by email
          </button>
          <button
            onClick={() => {/* Handle not interested */}}
            className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors cursor-pointer font-semibold"
          >
            I am not interested
          </button>
        </div>

        {/* Additional Information Section */}
        <div className="w-full max-w-7xl bg-[#F8FAFC] rounded-2xl p-4 lg:p-6 mt-8 ">
          <h2 className="text-2xl lg:text-3xl font-semibold text-center text-tertiary mb-8">
            You will need an accountant from the start of your business if you want to...
          </h2>

          <div className="flex lg:flex-row flex-col gap-8">
            <div className="flex flex-col gap-6">
              <Image
                src="/icons/user.png"
                alt="Benefits Illustration"
                width={300}
                height={300}
                className="self-center"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-600 mb-4">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">1</span>
                  Be sure to make the right choices
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>You don't want to choose the wrong tax regime (IS/IR) or VAT</li>
                  <li>You want to optimize your income (unemployment, ARE, dividends, etc.)</li>
                </ul>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-600 mb-4">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">2</span>
                  Be in compliance with your obligations and not make mistakes
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>You are not aware of all the tax deadlines (VAT, IS, CFE, CVAE declaration, etc.)</li>
                  <li>You don't know how to do your balance sheet and your income statement</li>
                  <li>You want to be protected in the event of a tax audit</li>
                </ul>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-600 mb-4">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">3</span>
                  Dedicate yourself to your business
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>You want tips to save money (depreciation, deductible expenses, etc.)</li>
                  <li>You want to spend as little time as possible on paperwork (quotes, credit notes, expense reports, invoices, etc.)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 