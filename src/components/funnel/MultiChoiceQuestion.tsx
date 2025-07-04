'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FunnelQuestion } from '@/types/funnel';

interface MultiChoiceQuestionProps {
  question: FunnelQuestion;
}

export default function MultiChoiceQuestion({ question }: MultiChoiceQuestionProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (value: string) => {
    setSelectedOptions(prev => {
      if (prev.includes(value)) {
        return prev.filter(v => v !== value);
      } else {
        return [...prev, value];
      }
    });
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
              <div className="flex-shrink-0">
                {option.icon?.type === 'image' ? (
                  <Image
                    src={option.icon.name}
                    alt={option.label}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                ) : (
                  <span className="text-2xl">{option.icon?.name}</span>
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