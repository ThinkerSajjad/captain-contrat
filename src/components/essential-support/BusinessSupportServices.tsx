"use client";

import PageContainer from "../layout/PageContainer";
import { useRef } from "react";
import capitalDeposit from "../../../public/images/common/business-support-icons/capital-deposit.png";
import trademarkFiling from "../../../public/images/common/business-support-icons/trademark-filling.svg";
import charteredAccountant from "../../../public/images/common/business-support-icons/ca.svg";
import Image from "next/image";

export function BusinessSupportServices() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-8 md:py-20 bg-white">
      <PageContainer>
        <div className="mx-auto relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mx-auto font-bold text-center text-slate-800 lg:mb-16 mb-8">
            Manage all your administrative and legal obligations in one place
          </h2>

          {/* Desktop/Tablet grid layout */}
          <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-4 gap-4 mx-auto">
            {/* Approval and filing of annual accounts card */}
            <div className="bg-primary rounded-xl p-5 flex flex-col items-center">
              <div className="mb-6">
                <Image src={capitalDeposit} alt="Capital deposit" />
              </div>
              <h3 className="lg:text-3xl text-2xl font-semibold text-slate-800 mb-4">
                Approval and filing of annual accounts
              </h3>
              <div className="text-slate-700">
                <p className="mb-2">
                  Each year, we take care of drafting the minutes of the General
                  Meeting and file the accounts with the registry. <br /> <br />{" "}
                  Is your accounting also managed by Captain Contrat? We collect
                  the information directly from our accounting team to complete
                  the administrative procedures.
                </p>
              </div>
            </div>

            {/* Maintaining your mandatory records
 card */}
            <div className="bg-primary rounded-xl p-6 flex flex-col items-center">
              <div className="mb-6">
                <Image src={trademarkFiling} alt="Trademark filing" />
              </div>
              <h3 className="lg:text-3xl text-2xl font-semibold text-slate-800 mb-4">
                Maintaining your mandatory records
              </h3>
              <div className="text-slate-700">
                <p className="mb-2">
                  As a company, you must maintain legal registers such as the
                  register of decisions, the register of securities movements,
                  and the register of beneficial owners.
                  <br /> <br />
                  You can access our partner, Registre Général, to help you
                  maintain your mandatory records with peace of mind.
                </p>
              </div>
            </div>

            {/* Drafting your various contracts card */}
            <div className="bg-primary rounded-xl p-6 flex flex-col items-center">
              <div className="mb-6">
                <Image src={charteredAccountant} alt="Chartered accountant" />
              </div>
              <h3 className="lg:text-3xl text-2xl font-semibold text-slate-800 mb-4">
                Drafting your various contracts
              </h3>
              <div className="text-slate-700">
                <p className="mb-2">
                  To ensure you're compliant, we provide a library of
                  customizable
                  <br /> <br />
                  document templates . You can also consult our partner lawyers
                  specializing in commercial and contract law throughout the
                  year for advice on managing your documents.
                </p>
              </div>
            </div>

            {/* Legal assessments with your dedicated lawyer card */}
            <div className="bg-primary rounded-xl p-6 flex flex-col items-center">
              <div className="mb-6">
                <Image src={charteredAccountant} alt="Chartered accountant" />
              </div>
              <h3 className="lg:text-3xl text-2xl font-semibold text-slate-800 mb-4">
                Legal assessments with your dedicated lawyer
              </h3>
              <div className="text-slate-700">
                <p className="mb-2">
                  An initial meeting with your dedicated legal advisor will be
                  organized to learn more about your business. They will inform
                  you of the administrative procedures needed to smoothly grow
                  your business.
                  <br /> <br />
                  You will have the opportunity to meet regularly and ask
                  questions throughout the year (by message, phone, or video).
                </p>
              </div>
            </div>
          </div>

          {/* Mobile horizontal scroll */}
          <div className="md:hidden relative">
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory scrollbar-hide"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {/* Approval and filing of annual accounts card */}
              <div className="w-[80vw] flex-shrink-0 snap-start bg-primary rounded-xl p-6 flex flex-col items-center">
                <div className="mb-6">
                  <Image src={capitalDeposit} alt="Capital deposit" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Approval and filing of annual accounts
                </h3>
                <div className="text-slate-700">
                  <p className="mb-2">
                    Each year, we take care of drafting the minutes of the
                    General Meeting and file the accounts with the registry.{" "}
                    <br /> <br /> Is your accounting also managed by Captain
                    Contrat? We collect the information directly from our
                    accounting team to complete the administrative procedures.
                  </p>
                </div>
              </div>

              {/* Maintaining your mandatory records card */}
              <div className="w-[80vw] flex-shrink-0 snap-start bg-primary rounded-xl p-6 flex flex-col items-center">
                <div className="mb-6">
                  <Image src={trademarkFiling} alt="Trademark filing" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Maintaining your mandatory records
                </h3>
                <div className="text-slate-700">
                  <p className="mb-2">
                    As a company, you must maintain legal registers such as the
                    register of decisions, the register of securities movements,
                    and the register of beneficial owners.
                    <br /> <br />
                    You can access our partner, Registre Général, to help you
                    maintain your mandatory records with peace of mind.
                  </p>
                </div>
              </div>

              {/* Drafting your various contracts card */}
              <div className="w-[80vw] flex-shrink-0 snap-start bg-primary rounded-xl p-6 flex flex-col items-center">
                <div className="mb-6">
                  <Image src={charteredAccountant} alt="Chartered accountant" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Drafting your various contracts
                </h3>
                <div className="text-slate-700">
                  <p className="mb-2">
                    To ensure you're compliant, we provide a library of
                    customizable
                    <br /> <br />
                    document templates . You can also consult our partner
                    lawyers specializing in commercial and contract law
                    throughout the year for advice on managing your documents.
                  </p>
                </div>
              </div>

              {/* Legal assessments with your dedicated lawyer card */}
              <div className="w-[80vw] flex-shrink-0 snap-start bg-primary rounded-xl p-6 flex flex-col items-center">
                <div className="mb-6">
                  <Image src={charteredAccountant} alt="Chartered accountant" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Legal assessments with your dedicated lawyer
                </h3>
                <div className="text-slate-700">
                  <p className="mb-2">
                    An initial meeting with your dedicated legal advisor will be
                    organized to learn more about your business. They will
                    inform you of the administrative procedures needed to
                    smoothly grow your business.
                    <br /> <br />
                    You will have the opportunity to meet regularly and ask
                    questions throughout the year (by message, phone, or video).
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow buttons */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 flex gap-4 z-20">
              <button
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollBy({
                      left: -window.innerWidth * 0.9,
                      behavior: "smooth",
                    });
                  }
                }}
                className="bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100"
                aria-label="Scroll left"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollBy({
                      left: window.innerWidth * 0.9,
                      behavior: "smooth",
                    });
                  }
                }}
                className="bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100"
                aria-label="Scroll right"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </PageContainer>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
