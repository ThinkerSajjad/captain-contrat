"use client";

import { useState } from "react";
import { X } from "lucide-react";

import { IoCheckmarkCircle } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa";
import { LuHandshake } from "react-icons/lu";
import { FaPersonSnowboarding } from "react-icons/fa6";
import Link from "next/link";

type TooltipCard = "serenity" | "standard" | "solo" | "basic" | null;

export function PricingPlans() {
  const [activeTooltip, setActiveTooltip] = useState<TooltipCard>(null);

  return (
    <section className="relative lg:py-12 py-6">
        <div className="relative z-10 mx-auto max-w-7xl">
          <h3 className="text-2xl lg:text-4xl font-bold text-center mb-8">We have found the ideal accompaniment for you</h3>
          
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Serenity Offer */}
              <div className="relative bg-white rounded-xl border border-gray-800 shadow-md">
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
                  <Link href="/funnel/accounting_presentation"
                    className={`w-full bg-red-400 hover:bg-red-500 text-white rounded-full py-2 px-4 transition-colors`}
                  >
                    Choose this plan
                  </Link>
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
              <div className="bg-white rounded-xl shadow-md">
                <div className="bg-primary p-6 min-h-44 overflow-hidden rounded-t-xl">
                  <div className="flex items-center mb-4">
                    <LuHandshake className="w-8 h-8 mr-3 text-tertiary" />
                    <h3 className="text-2xl font-bold text-tertiary">Standard</h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    I delegate all my administrative procedures
                  </p>
                  <Link href="/funnel/accounting_presentation"
                    className={`w-full bg-red-400 hover:bg-red-500 text-white rounded-full py-2 px-4 transition-colors`}
                  >
                    Choose this plan
                  </Link>
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
              <div className="bg-white rounded-xl shadow-md">
                <div className="bg-pink-100 p-6 min-h-44 overflow-hidden rounded-t-xl">
                  <div className="flex items-center mb-4">
                    <FaWpforms className="w-8 h-8 mr-3 text-tertiary" />
                    <h3 className="text-2xl font-bold text-tertiary">Solo</h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    I prepare my file from my space and I manage the procedures myself
                  </p>
                  <Link href="/funnel/accounting_presentation"
                    className={`w-full bg-red-400 hover:bg-red-500 text-white rounded-full py-2 px-4 transition-colors`}
                  >
                    Choose this plan
                  </Link>
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
        </div>
    </section>
  );
} 