'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import logo from "../../../public/images/common/logo_inline-black.svg"
import ccIcon from "../../../public/icons/cc-logo.png"
import Image from 'next/image';

const analysisSteps = [
  "Analyzing your business profile...",
  "Evaluating your needs...",
  "Calculating optimal solutions...",
  "Preparing personalized recommendations...",
  "Finalizing your custom plan..."
];

export default function LoadingAnalysis() {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Calculate time for each step
    const stepDuration = 5000 / analysisSteps.length; // 5 seconds total
    const progressIncrement = 100 / (5000 / 16.67); // 60fps for smooth animation

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + progressIncrement;
      });
    }, 16.67); // ~60fps

    // Step text animation
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= analysisSteps.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, stepDuration);

    // Redirect after animation completes
    const redirectTimeout = setTimeout(() => {
      router.push('/funnel/choix-du-pack');
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
      clearTimeout(redirectTimeout);
    };
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Logo section */}
        <div className="flex flex-col items-center gap-8 mb-16">
          {/* CC Icon with pulse animation */}
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-50 rounded-full animate-pulse"></div>
            <Image
              src={ccIcon}
              alt="Captain Contrat Icon"
              width={64}
              height={64}
              className="relative z-10"
            />
          </div>
          
          {/* Logo */}
          <Image
            src={logo}
            alt="Captain Contrat"
            width={240}
            height={48}
            className="relative z-10"
          />
        </div>

        {/* Analysis step text */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {analysisSteps[currentStep]}
          </h2>
          <p className="text-gray-600">
            Please wait while we analyze your information...
          </p>
        </div>

        {/* Progress bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-blue-600 transition-all duration-100 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Progress percentage */}
          <div className="text-center mt-4">
            <span className="text-gray-600 font-medium">
              {Math.min(Math.round(progress), 100)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 