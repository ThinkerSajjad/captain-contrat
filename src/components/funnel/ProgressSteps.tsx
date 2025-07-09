'use client';

import { useFunnel } from '../providers/FunnelProvider';
import { getFunnelQuestions, getBusinessTypeById } from '@/data/funnelQuestions';
import { ChevronLeft } from 'lucide-react';

export default function ProgressSteps() {
  const { currentStep, businessType, goToPreviousStep } = useFunnel();
  const questions = getFunnelQuestions(businessType) || [];
  const totalSteps = questions.length;
  const progress = (currentStep / totalSteps) * 100;

  // Get the current question
  const currentQuestion = questions[currentStep - 1];
  
  // Get the business type name
  const businessTypeObj = getBusinessTypeById(businessType);
  const businessTypeName = businessTypeObj?.name || businessType;
  
  // Hide back button on first step or dashboard
  const showBackButton = currentStep !== 1 && currentQuestion?.id !== 'appointment_dashboard';

  return (
    <div className="mb-10 lg:mb-16 relative">
      {/* Back button */}
      {showBackButton && (
        <button
          onClick={goToPreviousStep}
          className=" flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
          <span className="text-base">Back</span>
        </button>
      )}


      {/* Business type label */}
      <div className="mt-2 text-base text-gray-600 text-center font-medium">
        {businessTypeName}
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-4">
        <div
          className="h-full bg-red-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
} 