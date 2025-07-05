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
              Why make a partnership agreement?
            </h1>

            <div className="space-y-5 text-gray-700 text-lg">
              <p className="leading-relaxed">
                The role of the shareholders' agreement and the 3 essential
                clauses
              </p>

              <p className="leading-relaxed">
                Departure of a partner, entry of a new partner, sale of
                intellectual property rights: the partners' agreement makes it
                possible to anticipate many situations calmly to avoid any
                conflict within a company.{" "}
              </p>
              <p className="leading-relaxed">
                The shareholders' agreement helps protect the company ,
                particularly in the event of withdrawal or fault on the part of
                one of the founders.
              </p>
              <p className="leading-relaxed">
                At Captain Contrat, we therefore strongly recommend that you
                enter into this agreement when setting up a business or when new
                partners join the company.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <button className="bg-[#ef6c77] hover:bg-[#e95360] text-white font-semibold px-10 py-4 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl text-lg w-full">
              Obtain my partnership agreement
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
                The preemption clause
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                If one of the partners wishes to sell his shares, the
                pre-emption clause gives priority to the other partners for the
                purchase of the shares.
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
                The approval clause
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                In the presence of an approval clause, if one of the partners
                wishes to sell his shares, the new shareholder must be approved
                by the general meeting.
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
                Voting rights
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                The shareholders' agreement may grant shareholders voting rights
                that are not proportional to their contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssentialsToKnow;
