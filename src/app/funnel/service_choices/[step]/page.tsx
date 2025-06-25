'use client';

export const dynamic = "force-dynamic";
import { useEffect, useState } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useFunnel } from '@/components/providers/FunnelProvider';
import QuestionRenderer from '@/components/funnel/QuestionRenderer';
import FunnelNavigation from '@/components/funnel/FunnelNavigation';
import ProgressSteps from '@/components/funnel/ProgressSteps';
import { getBusinessTypeByPath, getFunnelQuestions } from '@/data/funnelQuestions';

export default function FunnelStepPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { businessType, setBusinessType, responses } = useFunnel();
  const [isLoading, setIsLoading] = useState(true);
  const [canProceed, setCanProceed] = useState(false);
  
  const step = Number(params.step) || 1;
  const source = searchParams.get('source');
  
  // Debug: Log the current step and question only on first render or step change
  useEffect(() => {
    const questions = getFunnelQuestions(businessType) || [];
    const currentQuestion = questions[step - 1];
    
    // Only log on initial render or when step changes
    console.log('Current step:', step);
    console.log('Current question:', currentQuestion);
    
    // If this is the dashboard step, log additional info once
    if (currentQuestion && currentQuestion.id === 'appointment_dashboard') {
      console.log('This is the dashboard step!');
      console.log('Appointment slot:', responses['appointment_slot']);
      console.log('Contact info:', responses['appointment_contact']);
    }
  }, [step]); // Only depend on step changes
  
  // Handle special cases for navigation
  useEffect(() => {
    const questions = getFunnelQuestions(businessType) || [];
    const currentQuestion = questions[step - 1];
    
    // Special handling for appointment_slot step
    if (currentQuestion && currentQuestion.id === 'appointment_slot') {
      const coachResponse = responses['coach_appointment'];
      console.log('Checking coach response on appointment_slot page:', coachResponse);
      
      // If user selected no_appointment, skip to kbis_timing
      if (coachResponse === 'no_appointment') {
        console.log('User selected no_appointment, skipping to kbis_timing');
        
        // Find the kbis_timing step
        const kbisTimingIndex = questions.findIndex(q => q.id === 'kbis_timing');
        if (kbisTimingIndex !== -1) {
          const kbisStep = kbisTimingIndex + 1; // +1 because steps are 1-indexed
          console.log('Navigating to kbis_timing step:', kbisStep);
          router.replace(`/funnel/service_choices/${kbisStep}`);
        }
      }
    }
  }, [step, responses, businessType, router]);
  
  // Handle page reload: If no business type in context but we have it in localStorage
  useEffect(() => {
    // If we don't have a business type but we're on a step other than 1, try to restore from localStorage
    if (!businessType && step > 1) {
      try {
        // Try to get business type from localStorage
        if (typeof window !== 'undefined') {
          const storedBusinessType = localStorage.getItem('funnelBusinessType');
          if (storedBusinessType) {
            const parsedType = JSON.parse(storedBusinessType);
            console.log('Restoring business type from localStorage:', parsedType);
            setBusinessType(parsedType);
            setIsLoading(false);
            return;
          }
        }
      } catch (error) {
        console.error('Error restoring from localStorage:', error);
      }
    }
    
    // If direct navigation to a step other than 1 without a business type, redirect to step 1
    if (step !== 1 && !businessType && !source) {
      router.replace('/funnel/service_choices/1');
    }
  }, [step, businessType, source, router, setBusinessType]);
  
  // Set the business type based on the source URL parameter
  useEffect(() => {
    if (source && !businessType) {
      const sourcePath = decodeURIComponent(source);
      const businessTypeObj = getBusinessTypeByPath(sourcePath);
      
      if (businessTypeObj) {
        setBusinessType(businessTypeObj.id);
      }
    }
    
    setIsLoading(false);
  }, [source, businessType, setBusinessType]);
  
  // Get the current question based on the step
  const questions = getFunnelQuestions(businessType) || [];
  const currentQuestion = questions[step - 1];
  
  // Determine if user can proceed to the next step
  useEffect(() => {
    if (!currentQuestion) {
      setCanProceed(false);
      return;
    }
    
    if (currentQuestion.isOptional) {
      setCanProceed(true);
      return;
    }
    
    if (currentQuestion.type === 'info') {
      setCanProceed(true);
      return;
    }
    
    const response = responses[currentQuestion.id];
    
    if (!response) {
      setCanProceed(false);
      return;
    }
    
    // For contact form, check if all required fields are filled
    if (currentQuestion.type === 'contact_form' && currentQuestion.fields) {
      const formValues = response as Record<string, string>;
      const allRequiredFieldsFilled = currentQuestion.fields.every(field => {
        const isRequired = field.required !== false; // Default to required if not specified
        return !isRequired || (formValues[field.id] && formValues[field.id].trim() !== '');
      });
      
      setCanProceed(allRequiredFieldsFilled);
      return;
    }
    
    // For choice questions, just check if there's a response
    if (currentQuestion.type === 'choice') {
      setCanProceed(true);
      return;
    }
    
    // For text questions, check if there's a non-empty response
    if (currentQuestion.type === 'text') {
      const textResponse = response as string;
      setCanProceed(textResponse.trim() !== '');
      return;
    }
    
    setCanProceed(!!response);
  }, [currentQuestion, responses]);
  
  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }
  
  if (!currentQuestion) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Question not found
        </h2>
        <p className="text-gray-600">
          Sorry, we couldn't find the question for this step.
        </p>
        <div className="mt-4">
          <p>Step: {step}</p>
          <p>Business Type: {businessType}</p>
          <p>Questions Length: {questions.length}</p>
          <button 
            onClick={() => router.push('/funnel/service_choices/1')}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }
  
  // For the dashboard view, use a different layout
  if (currentQuestion.id === 'appointment_dashboard') {
    return (
      <div className="w-full">
        <QuestionRenderer question={currentQuestion} />
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <ProgressSteps />
      
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl text-center font-bold text-gray-800 mb-2">
          {currentQuestion.title}
        </h3>
        {currentQuestion.description && (
          <p className="text-gray-600 text-sm lg:text-base text-center">
            {currentQuestion.description}
          </p>
        )}
      </div>
      
      <div className="bg-white rounded-lg">
        <QuestionRenderer question={currentQuestion} />
        <FunnelNavigation canProceed={canProceed} />
      </div>
    </div>
  );
} 