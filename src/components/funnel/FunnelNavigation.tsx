'use client';

import { useFunnel } from '../providers/FunnelProvider';
import { getFunnelQuestions } from '@/data/funnelQuestions';
import { ChevronRight } from 'lucide-react';

interface FunnelNavigationProps {
  canProceed: boolean;
}

export default function FunnelNavigation({ canProceed }: FunnelNavigationProps) {
  const { currentStep, goToNextStep, businessType } = useFunnel();
  const questions = getFunnelQuestions(businessType) || [];
  const totalSteps = questions.length;
  const isLastStep = currentStep === totalSteps;
  
  // Get the current question
  const currentQuestion = questions[currentStep - 1];
  
  // Hide navigation only on the dashboard page
  if (currentQuestion?.id === 'appointment_dashboard') {
    return null;
  }

  // Check if continue button should be shown (default to true if not specified)
  const showContinue = currentQuestion?.navigation?.showContinue !== false && !currentQuestion?.navigation?.autoProgress;
  
  // Check if skip button should be shown
  const showSkip = currentQuestion?.navigation?.showSkip || currentQuestion?.isOptional;

  return (
    <div className="mt-8 pt-6 border-gray-200">
      <div className="flex justify-end items-center gap-4">
        {/* Skip button */}
        {showSkip && (
          <button
            onClick={goToNextStep}
            className="lg:px-6 px-4 lg:py-3 py-2 text-gray-600 hover:text-gray-700 transition-colors cursor-pointer underline"
          >
            Skip for now
          </button>
        )}
        
        {/* Continue button */}
        {showContinue && (
          <button
            onClick={goToNextStep}
            className={`flex items-center gap-2 lg:px-6 px-4 lg:py-3 py-2 rounded-full font-semibold text-white transition-colors cursor-pointer ${
              canProceed
                ? 'bg-red-400 hover:bg-red-500 hover:shadow-md duration-300'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!canProceed}
          >
            {isLastStep ? 'See the offers' : 'Continue'}
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
} 