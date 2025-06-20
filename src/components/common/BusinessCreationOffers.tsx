"use client";

import { useState } from "react";
import { X } from "lucide-react";
import PageContainer from "../layout/PageContainer";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa";
import { LuHandshake } from "react-icons/lu";
import { FaPersonSnowboarding } from "react-icons/fa6";

type OfferTab = "company" | "self-employed";
type TooltipCard = "serenity" | "standard" | "solo" | "basic" | null;

export function BusinessCreationOffers() {
  const [activeTab, setActiveTab] = useState<OfferTab>("company");
  const [activeTooltip, setActiveTooltip] = useState<TooltipCard>(null);
  
  return (
    <section className="relative lg:py-20 py-10">
      <div className="absolute inset-0 bg-lightPrimary w-full h-full" />
      <PageContainer>
        <div className="relative z-10 mx-auto">
          <h2 className="lg:text-5xl text-4xl font-bold text-center text-tertiary mb-6">
            Our business creation offers
          </h2>
          
          {/* Tabs */}
          <div className="flex justify-center mb-10">
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
          </div>
          
          {/* Company Offers */}
          {activeTab === "company" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Serenity Offer */}
              <div className="relative bg-white rounded-xl border border-gray-800">
                <div className="absolute -top-4 left-6 bg-tertiary text-white text-sm font-semibold py-1 px-3 rounded-full flex items-center">
                  <span className="mr-1">✨</span> The most complete
                </div>
                <div className="bg-blue-100 min-h-44 p-6 overflow-hidden rounded-t-xl">
                  <div className="flex items-center mb-4">
                    <FaPersonSnowboarding className="w-8 h-8 mr-3 text-tertiary" />
                    <h3 className="text-2xl font-bold text-tertiary">Serenity</h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    I benefit from express business creation and a dedicated lawyer for 1 year
                  </p>
                </div>
                
                <div className="p-6">
                  <div className="mt-2 mb-4">
                    <span className="text-4xl font-bold">269</span>
                    <span className="text-sm ml-1">€ excluding VAT</span>
                  </div>
                  <div className="relative">
                    <div 
                      className="text-sm text-gray-500 mb-6 flex items-center cursor-help"
                      onMouseEnter={() => setActiveTooltip("serenity")}
                      onMouseLeave={() => setActiveTooltip(null)}
                    >
                      + administrative fees 
                      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 text-xs ml-1">
                        i
                      </span>
                      
                      {activeTooltip === "serenity" && (
                        <div className="absolute z-50 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-64 -top-3 transform -translate-y-full left-1/2 -translate-x-1/2">
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-gray-800"></div>
                          <p className="text-sm font-medium mb-2">Mandatory registration fees are fees imposed by the French state:</p>
                          <ul className="text-sm">
                            <li className="flex items-center mb-1">
                              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                              Publication of the legal notice: €199
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                              Company registration: €63
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Preparation of your statutes and your file</span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Support by phone and message</span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Verification and sending of the file in less than 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Anti-rejection guarantee of the registry</span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Appointment to choose the right tax regime</span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Lawyer dedicated to your company for 1 year</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Standard Offer */}
              <div className="bg-white rounded-xl">
                <div className="bg-primary p-6 min-h-44 overflow-hidden rounded-t-xl">
                  <div className="flex items-center mb-4">
                    <LuHandshake className="w-8 h-8 mr-3 text-tertiary" />
                    <h3 className="text-2xl font-bold text-tertiary">Standard</h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    I delegate all my administrative procedures
                  </p>
                </div>
                
                <div className="p-6">
                  <div className="mt-2 mb-4">
                    <span className="text-4xl font-bold">99</span>
                    <span className="text-sm ml-1">€ excluding VAT</span>
                  </div>
                  <div className="relative">
                    <div 
                      className="text-sm text-gray-500 mb-6 flex items-center cursor-help"
                      onMouseEnter={() => setActiveTooltip("standard")}
                      onMouseLeave={() => setActiveTooltip(null)}
                    >
                      + administrative fees 
                      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 text-xs ml-1">
                        i
                      </span>
                      
                      {activeTooltip === "standard" && (
                        <div className="absolute z-50 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-64 -top-3 transform -translate-y-full left-1/2 -translate-x-1/2">
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-gray-800"></div>
                          <p className="text-sm font-medium mb-2">Mandatory registration fees are fees imposed by the French state:</p>
                          <ul className="text-sm">
                            <li className="flex items-center mb-1">
                              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                              Publication of the legal notice: €199
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                              Company registration: €63
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Preparation of your statutes and your file</span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Support by phone and message</span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Verification and sending of the file in less than 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                      <span className="text-gray-400">Anti-rejection guarantee of the registry</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                      <span className="text-gray-400">Appointment to choose the right tax regime</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                      <span className="text-gray-400">Lawyer dedicated to your company for 1 year</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Solo Offer */}
              <div className="bg-white rounded-xl">
                <div className="bg-pink-100 p-6 min-h-44 overflow-hidden rounded-t-xl">
                  <div className="flex items-center mb-4">
                    <FaWpforms className="w-8 h-8 mr-3 text-tertiary" />
                    <h3 className="text-2xl font-bold text-tertiary">Solo</h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    I prepare my file from my space and I manage the procedures myself
                  </p>
                </div>
                <div className="p-6">
                  <div className="mt-2 mb-4">
                    <span className="text-4xl font-bold">0</span>
                    <span className="text-sm ml-1">€ excluding VAT</span>
                  </div>
                  <div className="relative">
                    <div 
                      className="text-sm text-gray-500 mb-6 flex items-center cursor-help"
                      onMouseEnter={() => setActiveTooltip("solo")}
                      onMouseLeave={() => setActiveTooltip(null)}
                    >
                      + administrative fees 
                      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 text-xs ml-1">
                        i
                      </span>
                      
                      {activeTooltip === "solo" && (
                        <div className="absolute z-50 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-64 -top-3 transform -translate-y-full left-1/2 -translate-x-1/2">
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-gray-800"></div>
                          <p className="text-sm font-medium mb-2">Mandatory registration fees are fees imposed by the French state:</p>
                          <ul className="text-sm">
                            <li className="flex items-center mb-1">
                              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                              Publication of the legal notice: €199
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                              Company registration: €63
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Preparation of your statutes and your file</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                      <span className="text-gray-400">Support by phone and message</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                      <span className="text-gray-400">Verification and sending of the file in less than 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                      <span className="text-gray-400">Anti-rejection guarantee of the registry</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                      <span className="text-gray-400">Appointment to choose the right tax regime</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                      <span className="text-gray-400">Lawyer dedicated to your company for 1 year</span>
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
                    <h3 className="text-2xl font-bold text-tertiary">Serenity</h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    I have full support
                  </p>
                </div>
                
                <div className="p-6">
                  <div className="mt-2 mb-4">
                    <span className="text-4xl font-bold">129</span>
                    <span className="text-sm ml-1">€ excluding VAT</span>
                  </div>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Complete file ready to be signed and verified by a lawyer</span>
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
                    <h3 className="text-2xl font-bold text-tertiary">Standard</h3>
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
                      <span>Complete file ready to be signed and verified by a lawyer</span>
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
                      <span className="text-gray-400">1 month of legal support</span>
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
                      <span>Complete file ready to be signed and verified by a lawyer</span>
                    </li>
                    <li className="flex items-start">
                      <IoCheckmarkCircle className="w-5 h-5 text-tertiary mr-2 mt-0.5" />
                      <span>Registration and obtaining the SIREN number</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                      <span className="text-gray-400">Unlimited phone support</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                      <span className="text-gray-400">Express processing within 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                      <span className="text-gray-400">Support in the ACRE application</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                      <span className="text-gray-400">1 month of legal support</span>
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