import React from "react";

// button color code: bg-[
// #ef6c77] hover:bg-[
// #e95360]
// the secondary color code:
// #fdf1f2

const EssentialsToKnow = () => {
  return (
    <div
      className="container mx-auto  p-8 md:p-12 bg-white shadow-lg rounded-2xl my-12
      "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Section - Main Content */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              The essentials to know and the clauses to include
            </h1>

            <div className="space-y-5 text-gray-700 text-lg">
              <p className="leading-relaxed">
                The service provision contract is a legal document that
                formalizes a contractual relationship in which a professional
                performs a mission for the account of an orderer.
              </p>

              <p className="leading-relaxed">
                For example, it can be a maintenance contract, a security
                service contract, a cleaning service contract, etc.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <button className="bg-[#ef6c77] hover:bg-[#e95360] text-white font-semibold px-10 py-4 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl text-lg w-full">
              Get my contract
            </button>
          </div>
        </div>

        {/* Right Section - Key Points */}
        <div className="space-y-8">
          {/* Point 1 */}
          <div className="relative flex sm:flex-row flex-col  gap-4 bg-[#fdf1f2] rounded-3xl p-7  shadow-sm">
            <div className="flex items-center justify-center sm:justify-start">
              <div className="w-12 h-12 bg-white text-[#ef6c77] rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                1
              </div>
            </div>
            <div className=" text-center sm:text-left">
              <h3 className="font-bold text-gray-900 text-xl mb-4">
                The identity of the parties
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                If one of the parties is a company, you will not forget to
                indicate the SIRET number and the legal representative.
              </p>
            </div>
          </div>

          {/* Point 2 */}
          <div className="relative flex sm:flex-row flex-col  gap-4 bg-[#fdf1f2] rounded-3xl p-7  shadow-sm">
            <div className="flex items-center justify-center sm:justify-start">
              <div className="w-12 h-12 bg-white text-[#ef6c77] rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                2
              </div>
            </div>
            <div className=" text-center sm:text-left">
              <h3 className="font-bold text-gray-900 text-xl mb-4">
                The price and terms of execution
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                It is important to detail the mission entrusted to you as much
                as possible.
              </p>
            </div>
          </div>

          {/* Point 3 */}
          <div className="relative flex sm:flex-row flex-col  gap-4 bg-[#fdf1f2] rounded-3xl p-7  shadow-sm">
            <div className="flex items-center justify-center sm:justify-start">
              <div className="w-12 h-12 bg-white text-[#ef6c77] rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                3
              </div>
            </div>
            <div className=" text-center sm:text-left">
              <h3 className="font-bold text-gray-900 text-xl mb-4">
                Penalties for late payment and termination terms
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                It is important to detail the mission entrusted to you as much
                as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssentialsToKnow;
