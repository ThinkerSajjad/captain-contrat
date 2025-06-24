'use client';

import { useState, useEffect } from 'react';
import { FunnelQuestion } from '@/types/funnel';
import { useFunnel } from '../providers/FunnelProvider';
import { Info } from 'lucide-react';

interface TextQuestionProps {
  question: FunnelQuestion;
}

export default function TextQuestion({ question }: TextQuestionProps) {
  const { updateResponse, responses } = useFunnel();
  const currentValue = responses[question.id] as string || '';
  const [value, setValue] = useState<string>(currentValue);

  // Update the context when the input changes
  useEffect(() => {
    if (value !== currentValue) {
      updateResponse(question.id, value);
    }
  }, [value, updateResponse, question.id, currentValue]);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={question.placeholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
          required={!question.isOptional}
        />
        {question.helpText && (
          <p className="lg:text-base text-sm p-4 bg-blue-50 rounded-lg text-gray-600">{question.helpText}</p>
        )}
      </div>

      {question.isOptional && (
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <Info className="h-4 w-4 mr-2 text-blue-500" />
          <span>This field is optional</span>
        </div>
      )}
      
      {/* Information note for business name question */}
      {question.id === 'business_name' && (
        <div className="mt-4 bg-blue-50 border border-blue-100 rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Info className="h-5 w-5 text-blue-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-700">
                If you have not yet chosen or are unsure, you can complete or modify this information later.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 