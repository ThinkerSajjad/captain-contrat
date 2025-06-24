'use client';

import { FunnelQuestion } from '@/types/funnel';

interface InfoQuestionProps {
  question: FunnelQuestion;
}

export default function InfoQuestion({ question }: InfoQuestionProps) {
  return (
    <div className="space-y-6">
      
      
      {question.helpText && (
        <p className="text-sm text-gray-600">{question.helpText}</p>
      )}
    </div>
  );
} 