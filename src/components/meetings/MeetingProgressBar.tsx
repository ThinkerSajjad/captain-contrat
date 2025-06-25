"use client"

import { Check } from "lucide-react"

interface MeetingProgressBarProps {
  step?: 1 | 2
}

export function MeetingProgressBar({ step = 1 }: MeetingProgressBarProps) {
  const steps = [
    {
      title: "CHOOSE TIME",
      isCompleted: step > 1,
      isActive: step === 1,
    },
    {
      title: "YOUR INFORMATION",
      isCompleted: step === 2,
      isActive: step === 2,
    },
  ]

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-4">
      <div className="relative">
        {/* Progress Line Background */}
        <div className="absolute top-4 h-0.5 bg-gray-200 rounded-full" style={{ left: "60px", right: "60px" }} />

        {/* Active Progress Line */}
        <div
          className={`absolute top-4 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-700 ease-out`}
          style={{
            left: "60px",
            width: step === 2 ? "calc(100% - 120px)" : "calc(50% - 60px)",
          }}
        />

        {/* Steps Container */}
        <div className="relative flex justify-between">
          {steps.map((stepObj, index) => (
            <div key={stepObj.title} className="flex flex-col items-center">
              {/* Step Circle */}
              <div className="relative">
                <div
                  className={`lg:w-8 lg:h-8 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500 ease-out transform mb-1
                    ${
                      stepObj.isCompleted || stepObj.isActive
                        ? "bg-gradient-to-br from-orange-500 to-orange-600 border-orange-500 scale-110 shadow-lg shadow-orange-500/30"
                        : "bg-white border-gray-300 hover:border-orange-300"
                    }`}
                >
                  {stepObj.isCompleted ? (
                    <Check className="w-4 h-4 text-white stroke-[3]" />
                  ) : (
                    <span className={`text-sm font-semibold ${stepObj.isActive ? "text-orange-600" : "text-gray-400"}`}>{index + 1}</span>
                  )}
                </div>
              </div>

              {/* Step Label */}
              <div className="mt-3 text-center">
                <p
                  className={`text-xs font-medium tracking-wider transition-colors duration-300 ${
                    stepObj.isCompleted || stepObj.isActive ? "text-orange-600" : "text-gray-500"
                  }`}
                >
                  {stepObj.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
