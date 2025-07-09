import Image from "next/image";

export default function CommittedLawyers() {
  return (
    <div className="bg-[#fef9f4] my-12 lg:my-16 py-16 ">
      <div className="mx-auto container lg:px-10">
        {/* Header */}
        <h2 className="text-3xl  lg:text-5xl font-bold text-center mx-6 md:mx-0 text-tertiary font-crimson lg:mb-12 mb-8 relative">
          Your projects deserve committed lawyers
        </h2>

        {/* Testimonial Card */}
        <div className="rounded-2xl  overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Image Section */}
            <div className="lg:w-1/3 flex-shrink-0">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/committed-lawyers/userr.svg"
                  alt="Me Tiphaine Dubreux"
                  className="w-[90%]  rounded-2xl"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center">
              {/* Quote Icon */}
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-[#EF6C77]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <div className="mb-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Since 2020, I have been providing my legal expertise to
                  entrepreneurs to help them create and develop their
                  businesses: launching activities, ensuring site compliance,
                  growth operations, changing contracts, etc. Having worked in a
                  startup for 3 years myself, I am aware of the issues
                  encountered by entrepreneurs on a daily basis: lack of time,
                  urgent needs, etc. Responsive and attentive, I advise them as
                  best I can to enable them to comply with the Law while taking
                  into account the urgency of their needs, the specificities of
                  their activity and their budgetary constraints.{" "}
                  <strong>Me Tiphaine Dubreux</strong>{" "}
                  <span className="opacity-50">
                    Lawyer at the Paris Bar - Contract Law
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
