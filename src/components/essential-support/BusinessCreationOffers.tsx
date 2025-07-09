"use client";

import { useState } from "react";
import { Handshake, X } from "lucide-react";
import PageContainer from "../layout/PageContainer";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaGavel, FaWpforms } from "react-icons/fa";
import { LuHandshake } from "react-icons/lu";
import { FaPersonSnowboarding } from "react-icons/fa6";

type OfferTab = "company" | "self-employed";
// type TooltipCard = "serenity" | "standard" | "solo" | "basic" | null;

export function BusinessCreationOffers() {
  const [activeTab] = useState<OfferTab>("company");
  // const [activeTooltip, setActiveTooltip] = useState<TooltipCard>(null);

  return (
    <section className="relative lg:py-20 py-10">
      <div className="absolute inset-0 bg-lightPrimary w-full h-full" />
      <PageContainer>
        <div className="relative z-10 mx-auto">
          <h2 className="lg:text-5xl text-4xl font-bold text-center text-tertiary mb-6">
            Rates adapted to your needs
          </h2>

          {/* Tabs */}
          {/* <div className="flex justify-center mb-10">
            <div className="inline-flex border-b border-gray-200 rounded-t-lg">
              <button
                className={`px-6 py-3 text-base font-semibold cursor-pointer ${
                  activeTab === "company"
                    ? "text-tertiary border-b-2 border-tertiary"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("company")}
              >
                SAS/SASU, SARL/EURL, SCI
              </button>
              <button
                className={`px-6 py-3 text-base font-semibold cursor-pointer ${
                  activeTab === "self-employed"
                    ? "text-tertiary border-b-2 border-tertiary"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("self-employed")}
              >
                Self-employed
              </button>
            </div>
          </div> */}

          {/* Company Offers */}
          {activeTab === "company" && (
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6">
              {/* Essential Legal
               */}
              <div className="relative bg-white rounded-xl border border-gray-800">
                <div className="bg-blue-100 min-h-44 p-6 overflow-hidden rounded-t-xl">
                  <div className="flex items-center mb-4">
                    <FaGavel className="w-8 h-8 mr-3 text-tertiary" />
                    <h3 className="text-2xl font-bold text-tertiary">
                      Essential Legal
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    All your annual legal obligations
                  </p>
                </div>

                <div className="p-6">
                  <div className="mt-2 mb-4">
                    <span className="text-4xl font-bold">50</span>
                    <span className="text-sm ml-1">€ excluding VAT</span>
                    <span className="text-sm text-gray-500 ml-2">/ month</span>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Approval of accounts and filing</span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>
                        4 legal assessments/year carried out by your lawyer
                      </span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>
                        Access to the General Register for maintaining your
                        mandatory registers (opening on request)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Dedicated lawyer throughout the year</span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Answers to your questions</span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Library of documents and templates</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Serenity Pack
               */}
              <div className="bg-white rounded-xl">
                <div className="bg-primary p-6 min-h-44 overflow-hidden rounded-t-xl">
                  <div className="flex items-center mb-4">
                    <Handshake className="w-8 h-8 mr-3 text-tertiary" />
                    <h3 className="text-2xl font-bold text-tertiary">
                      Legal Performance
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    All your annual legal obligations + live lawyers
                  </p>
                </div>

                <div className="p-6">
                  <div className="mt-2 mb-4">
                    <span className="text-4xl font-bold">150</span>
                    <span className="text-sm ml-1">€ excluding VAT</span>
                    <span className="text-sm text-gray-500 ml-2">/ month</span>
                  </div>

                  <div className="mb-4">
                    <span className="text-sm font-semibold text-tertiary">
                      Essential Legal +{" "}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>
                        1 modification of statutes / year offered (service fees)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>
                        Advice on commercial law and contracts from our partner
                        lawyers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Unlimited access to the lawyers' calendar</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Self-employed Offers */}
          {activeTab === "self-employed" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Serenity Offer */}
              <div className="relative bg-white rounded-xl">
                <div className="absolute -top-4 left-6 bg-tertiary text-white text-sm font-semibold py-1 px-3 rounded-full flex items-center">
                  <span className="mr-1">✨</span> Popular
                </div>
                <div className="bg-blue-100 min-h-44 p-6 overflow-hidden rounded-t-xl">
                  <div className="flex items-center mb-4">
                    <FaPersonSnowboarding className="w-8 h-8 mr-3 text-tertiary" />
                    <h3 className="text-2xl font-bold text-tertiary">
                      Serenity
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-6">I have full support</p>
                </div>

                <div className="p-6">
                  <div className="mt-2 mb-4">
                    <span className="text-4xl font-bold">129</span>
                    <span className="text-sm ml-1">€ excluding VAT</span>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>
                        Complete file ready to be signed and verified by a
                        lawyer
                      </span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Registration and obtaining the SIREN number</span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Unlimited phone support</span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Express processing within 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Support in the ACRE application</span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>1 month of legal support</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Standard Offer */}
              <div className="bg-white rounded-xl">
                <div className="bg-primary p-6 min-h-44 overflow-hidden rounded-t-xl">
                  <div className="flex items-center mb-4">
                    <LuHandshake className="w-8 h-8 mr-3 text-tertiary" />
                    <h3 className="text-2xl font-bold text-tertiary">
                      Standard
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    I receive priority treatment
                  </p>
                </div>
                <div className="p-6">
                  <div className="mt-2 mb-4">
                    <span className="text-4xl font-bold">99</span>
                    <span className="text-sm ml-1">€ excluding VAT</span>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>
                        Complete file ready to be signed and verified by a
                        lawyer
                      </span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Registration and obtaining the SIREN number</span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Unlimited phone support</span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Express processing within 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Support in the ACRE application</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                      <span className="text-gray-400">
                        1 month of legal support
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Basic Offer */}
              <div className="bg-white rounded-xl">
                <div className="bg-pink-100 p-6 min-h-44 overflow-hidden rounded-t-xl">
                  <div className="flex items-center mb-4">
                    <FaWpforms className="w-8 h-8 mr-3 text-tertiary" />
                    <h3 className="text-2xl font-bold text-tertiary">Basic</h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    I delegate the administrative aspect
                  </p>
                </div>
                <div className="p-6">
                  <div className="mt-2 mb-4">
                    <span className="text-4xl font-bold">59</span>
                    <span className="text-sm ml-1">€ excluding VAT</span>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>
                        Complete file ready to be signed and verified by a
                        lawyer
                      </span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Registration and obtaining the SIREN number</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                      <span className="text-gray-400">
                        Unlimited phone support
                      </span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                      <span className="text-gray-400">
                        Express processing within 24 hours
                      </span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                      <span className="text-gray-400">
                        Support in the ACRE application
                      </span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                      <span className="text-gray-400">
                        1 month of legal support
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </PageContainer>
    </section>
  );
}
