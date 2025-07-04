'use client';

import { useFunnel } from '../providers/FunnelProvider';
import { FunnelQuestion, ChoiceOption } from '@/types/funnel';
import Image, { StaticImageData } from 'next/image';
import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getFunnelQuestions } from '@/data/funnelQuestions';
import MultiChoiceQuestion from './MultiChoiceQuestion';

interface ChoiceQuestionProps {
  question: FunnelQuestion;
}

export default function ChoiceQuestion({ question }: ChoiceQuestionProps) {
  const { responses, updateResponse, goToNextStep, businessType } = useFunnel();
  const selectedValue = responses[question.id] as string;
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  // If it's a multi-select question, render the MultiChoiceQuestion component
  if (question.multiSelect) {
    return <MultiChoiceQuestion question={question} />;
  }

  const handleOptionSelect = (value: string) => {
    if (isNavigating) return; // Prevent multiple clicks
    
    console.log(`Selected option for ${question.id}:`, value);
    setIsNavigating(true);
    
    // Update the response for state persistence
    updateResponse(question.id, value);
    
    // For questions with auto-progress, navigate immediately with the new value
    if (question.navigation?.autoProgress) {
      // Use a short delay for visual feedback before navigating
      setTimeout(() => {
        // Pass the new value directly to goToNextStep to avoid stale state
        goToNextStep({
          questionId: question.id,
          value: value,
        });
        setIsNavigating(false);
      }, 300);
    } else {
      setIsNavigating(false);
    }
  };

  const renderIcon = (option: ChoiceOption) => {
    if (!option.icon) return null;

    if (option.icon.type === 'lucide') {
      // Type assertion to ensure the icon exists in Lucide
      const Icon = option.icon.name as LucideIcon;
      if (!Icon) return null;

      return (
        <Icon
          className="w-6 h-6 shrink-0"
          color={option.icon.color || 'currentColor'}
        />
      );
    }

    if (option.icon.type === 'react-icon') {
      const Icon = option.icon.name as IconType;
      if (!Icon) return null;

      return (
        <Icon
          className="w-6 h-6 shrink-0"
          color={option.icon.color || 'currentColor'}
        />
      );
    }

    if (option.icon.type === 'image') {
      const imageSrc = option.icon.name as string | StaticImageData;
      return (
        <div className="min-w-32 h-10 shrink-0 relative object-contain">
          <Image
            src={imageSrc}
            alt={option.label}
            fill
            className="object-contain"
          />
        </div>
      );
    }

    if (option.icon.type === 'emoji') {
      const emoji = option.icon.name as string;
      return (
        <div className="text-3xl shrink-0">
          {emoji}
        </div>
      );
    }

    return null;
  };

  // Determine grid columns based on number of options
  const numOptions = question.options?.length || 0;
  let gridClass = 'grid-cols-1 md:grid-cols-2'; // Default to 2 columns
  
  if (numOptions > 2) {
    gridClass = 'grid-cols-1 md:grid-cols-3'; // Use 3 columns for 3+ options
  }

  return (
    <div className="space-y-4">

      <div className={`grid ${gridClass} gap-4`}>
        {question.options?.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionSelect(option.value)}
            disabled={isNavigating}
            className={` px-6 py-4 border rounded-lg transition-all cursor-pointer hover:shadow-md duration-300 ${
              selectedValue === option.value
                ? 'border-red-500 bg-red-50'
                : 'border-gray-200 hover:border-gray-300'
            } ${isNavigating ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            <div className="flex flex-col justify-center items-center gap-3 h-full">
              {renderIcon(option)}
              <div className="text-center w-full">
                <div className="font-semibold lg:text-lg text-base text-gray-900 line-clamp-2">{option.label}</div>
                {option.subLabel && (
                  <div className="mt-1 lg:text-base font-semibold text-sm text-gray-400 line-clamp-2">{option.subLabel}</div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {question.helpText && (
        <div className="mt-4 lg:text-base text-sm text-gray-600 whitespace-pre-line p-4 bg-blue-50 rounded-lg">
          {question.helpText}
        </div>
      )}
    </div>
  );
} 