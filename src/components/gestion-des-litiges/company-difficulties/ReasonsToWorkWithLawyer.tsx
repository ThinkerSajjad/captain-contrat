import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";

export function ReasonsToWorkWithLawyer() {
  return (
    <section className="lg:py-16 py-10 bg-white">
      <PageContainer>
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-tertiary lg:mb-16 mb-10">
          3 reasons to work with a lawyer to deal with your difficulties
        </h2>

        <div className="grid md:grid-cols-3 lg:gap-8 gap-6">
          {/* Gain peace of mind */}
          <div className="bg-primary lg:p-8 p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-full h-full text-secondary"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold text-tertiary text-center mb-4">
              Gain peace of mind
            </h3>
            <p className="text-gray-600 text-center">
              Don't face your financial difficulties alone. Seek the help of a specialized lawyer with experience in this area.
            </p>
          </div>

          {/* Find solutions */}
          <div className="bg-primary lg:p-8 p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-full h-full text-secondary"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold text-tertiary text-center mb-4">
              Find solutions
            </h3>
            <p className="text-gray-600 text-center">
              Our lawyers are familiar with the various options available to you. They will know how to negotiate with your contractors and what legal proceedings to initiate.
            </p>
          </div>

          {/* Limit the risks */}
          <div className="bg-primary lg:p-8 p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-full h-full text-secondary"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold text-tertiary text-center mb-4">
              Limit the risks
            </h3>
            <p className="text-gray-600 text-center">
              In French law, collective procedures are designed to help entrepreneurs (scheduling of payments, cancellation of debts, etc.)
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 