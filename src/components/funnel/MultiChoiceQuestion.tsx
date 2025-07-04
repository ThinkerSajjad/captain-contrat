'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FunnelQuestion } from '@/types/funnel';
import { useFunnel } from '../providers/FunnelProvider';

interface MultiChoiceQuestionProps {
  question: FunnelQuestion;
}

export default function MultiChoiceQuestion({ question }: MultiChoiceQuestionProps) {
  const { responses, updateResponse } = useFunnel();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // Initialize from existing responses
  useEffect(() => {
    const existingResponse = responses[question.id];
    if (existingResponse && Array.isArray(existingResponse)) {
      setSelectedOptions(existingResponse as string[]);
    }
  }, [question.id, responses]);

  const toggleOption = (value: string) => {
    const newSelectedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter(v => v !== value)
      : [...selectedOptions, value];

    setSelectedOptions(newSelectedOptions);
    updateResponse(question.id, newSelectedOptions);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {question.options?.map((option) => (
          <div
            key={option.id}
            className={`relative border rounded-lg p-4 cursor-pointer transition-all ${
              selectedOptions.includes(option.value)
                ? 'border-tertiary bg-tertiary/5'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => toggleOption(option.value)}
          >
            <div className="flex flex-col items-center justify-center gap-3 p-2">
              {/* Checkbox */}
              <div className={`w-5 h-5 mt-2 border rounded absolute top-0 right-0 mr-2 ${
                selectedOptions.includes(option.value)
                  ? 'bg-tertiary border-tertiary'
                  : 'border-gray-400'
              }`}>
                {selectedOptions.includes(option.value) && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                )}
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 text-2xl">
                {option.icon?.type === 'image' && (
                  <Image
                    src={option.icon.name}
                    alt={option.label}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                )}
                {option.icon?.type === 'emoji' && (
                  <span>{String(option.icon.name)}</span>
                )}
              </div>

              {/* Label */}
              <div className="flex-grow">
                <p className="font-semibold text-gray-900 text-center">{option.label}</p>
                {option.subLabel && (
                  <p className="text-sm text-gray-500 text-center">{option.subLabel}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Help text */}
      {question.helpText && (
        <p className="text-sm text-gray-500 mb-6">{question.helpText}</p>
      )}
    </div>
  );
} 