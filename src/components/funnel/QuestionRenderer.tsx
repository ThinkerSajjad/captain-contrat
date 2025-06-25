'use client';

import { FunnelQuestion } from '@/types/funnel';
import ChoiceQuestion from './ChoiceQuestion';
import TextQuestion from './TextQuestion';
import InfoQuestion from './InfoQuestion';
import ContactFormQuestion from './ContactFormQuestion';
import AppointmentSlotSelector from './AppointmentSlotSelector';
import ClientDashboard from './ClientDashboard';

interface QuestionRendererProps {
  question: FunnelQuestion;
}

export default function QuestionRenderer({ question }: QuestionRendererProps) {
  // For the appointment slot question, use our custom component
  if (question.id === 'appointment_slot') {
    return <AppointmentSlotSelector />;
  }
  
  // For the appointment dashboard, use our dashboard component
  if (question.id === 'appointment_dashboard') {
    return <ClientDashboard />;
  }
  
  // For all other questions, use the standard components
  switch (question.type) {
    case 'choice':
      return <ChoiceQuestion question={question} />;
    case 'text':
      return <TextQuestion question={question} />;
    case 'info':
      return <InfoQuestion question={question} />;
    case 'contact_form':
      return (
        <div className="space-y-6">
          
          <ContactFormQuestion 
            id={question.id} 
            fields={question.fields || []} 
          />
          
          {question.helpText && (
            <p className="text-sm text-gray-500 mt-4">{question.helpText}</p>
          )}
        </div>
      );
    default:
      return <div>Unknown question type: {question.type}</div>;
  }
} 