'use client';

import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { FunnelContextType, UserResponse, QuestionResponse } from '@/types/funnel';
import { getFunnelQuestions } from '@/data/funnelQuestions';
import { generateOrderId } from '@/lib/utils';

const FunnelContext = createContext<FunnelContextType | undefined>(undefined);

// Helper function to safely parse JSON from localStorage
const getStoredValue = <T extends string | object | number[] | null>(key: string, defaultValue: T): T => {
  if (typeof window === 'undefined') return defaultValue;
  
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error);
    return defaultValue;
  }
};

export function FunnelProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  
  // Initialize state from localStorage if available
  const [responses, setResponses] = useState<UserResponse>(() => 
    getStoredValue<UserResponse>('funnelResponses', {}));
  
  const [currentStep, setCurrentStep] = useState<number>(1);
  
  const [businessType, setBusinessType] = useState<string>(() => 
    getStoredValue<string>('funnelBusinessType', ''));
  
  const [questionPath, setQuestionPath] = useState<number[]>(() => 
    getStoredValue<number[]>('funnelPath', [1]));
  
  const [orderId, setOrderId] = useState<string>(() => 
    getStoredValue<string>('funnelOrderId', ''));
  
  const [lastUpdatedResponse, setLastUpdatedResponse] = useState<{id: string, value: QuestionResponse} | null>(null);

  console.log('lastUpdatedResponse', lastUpdatedResponse);

  // Reset funnel state
  const resetFunnel = useCallback(() => {
    setResponses({});
    setCurrentStep(1);
    setQuestionPath([1]);
    setOrderId('');
    setLastUpdatedResponse(null);
    
    // Clear localStorage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('funnelResponses');
      localStorage.removeItem('funnelPath');
      localStorage.removeItem('funnelOrderId');
    }
  }, []);

  // Persist state to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('funnelResponses', JSON.stringify(responses));
    }
  }, [responses]);

  useEffect(() => {
    if (typeof window !== 'undefined' && businessType) {
      localStorage.setItem('funnelBusinessType', JSON.stringify(businessType));
    }
  }, [businessType]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('funnelPath', JSON.stringify(questionPath));
    }
  }, [questionPath]);

  useEffect(() => {
    if (typeof window !== 'undefined' && orderId) {
      localStorage.setItem('funnelOrderId', JSON.stringify(orderId));
    }
  }, [orderId]);

  // Extract step from URL when pathname changes
  useEffect(() => {
    // Skip if we're already on the orders page
    if (pathname.startsWith('/orders/')) {
      return;
    }
    
    const stepMatch = pathname.match(/\/funnel\/service_choices\/(\d+)/);
    if (stepMatch) {
      const step = parseInt(stepMatch[1], 10);
      setCurrentStep(step);
      
      // Check if this is the dashboard step
      const questions = getFunnelQuestions(businessType);
      if (questions) {
        const currentQuestion = questions[step - 1];
        if (currentQuestion && currentQuestion.id === 'appointment_dashboard') {
          // If we're on the dashboard step, generate an order ID if needed
          if (!orderId && !responses.orderId) {
            const newOrderId = generateOrderId();
            console.log('Generated new order ID:', newOrderId);
            setOrderId(newOrderId);
            
            // Store the order ID in responses
            setResponses(prev => ({
              ...prev,
              orderId: newOrderId
            }));
          } else {
            const existingOrderId = orderId || responses.orderId as string;
            console.log('Using existing order ID:', existingOrderId);
          }
        }
      }
    }
  }, [pathname, businessType, orderId, responses]);

  // Memoize the updateResponse function to avoid recreating it on every render
  const updateResponse = useCallback((questionId: string, value: string | string[] | Record<string, string>) => {
    console.log(`Updating response for ${questionId}:`, value);
    setLastUpdatedResponse({id: questionId, value});
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  }, []);

  const goToNextStep = (override?: { questionId: string, value: QuestionResponse }) => {
    const questions = getFunnelQuestions(businessType);
    if (!questions) return;
    
    const currentQuestion = questions[currentStep - 1];
    if (!currentQuestion) return;
    
    console.log('Current question:', currentQuestion.id);
    console.log('Current responses:', responses);
    
    // Navigate to analysis page first
    if (currentQuestion.id === 'contact_info') {
      // Log all responses for debugging
      console.log('Final responses:', responses);
      
      // Navigate to analysis page first
      router.push('/funnel/analyzing');
      return;
    }
    
    // Special handling for appointment_contact to ensure it goes to the dashboard
    if (currentQuestion.id === 'appointment_contact') {
      // Generate a random order ID if we don't have one yet
      if (!orderId) {
        const newOrderId = generateOrderId();
        console.log('Generated new order ID in goToNextStep:', newOrderId);
        setOrderId(newOrderId);
        
        // Store the order ID in responses
        setResponses(prev => ({
          ...prev,
          orderId: newOrderId
        }));
      }
      
      // Find the appointment_dashboard step
      const dashboardIndex = questions.findIndex(q => q.id === 'appointment_dashboard');
      if (dashboardIndex !== -1) {
        const nextStep = dashboardIndex + 1; // +1 because steps are 1-indexed
        console.log('Navigating to dashboard step:', nextStep);
        setQuestionPath(prev => [...prev, nextStep]);
        router.push(`/funnel/service_choices/${nextStep}`);
        return;
      }
    }
    
    // Check if this question has a custom nextStep function or value
    if (currentQuestion.nextStep) {
      // Use the override value if provided, otherwise use the value from state
      const currentResponse = override?.questionId === currentQuestion.id
        ? override.value
        : responses[currentQuestion.id];
        
      console.log('Current response for', currentQuestion.id, ':', currentResponse);
      
      if (typeof currentQuestion.nextStep === 'function' && currentResponse) {
        // If it's a function, call it with the current response
        const nextStepResult = currentQuestion.nextStep(currentResponse);
        console.log('nextStep function result:', nextStepResult);
        
        // If the result is a string that matches another business type, switch to that type
        if (nextStepResult === 'sasu' || nextStepResult === 'sas' || 
            nextStepResult === 'eurl' || nextStepResult === 'sarl') {
          setBusinessType(nextStepResult);
          setQuestionPath([1]); // Reset path when switching business types
          router.push(`/funnel/service_choices/1`);
          return;
        }
        
        // Otherwise, try to find the question ID in the current business type
        const targetQuestionIndex = questions.findIndex(q => q.id === nextStepResult);
        console.log('Target question index for', nextStepResult, ':', targetQuestionIndex);
        
        if (targetQuestionIndex !== -1) {
          const nextStep = targetQuestionIndex + 1;
          console.log('Navigating to step:', nextStep);
          setQuestionPath(prev => [...prev, nextStep]); // Add to path
          router.push(`/funnel/service_choices/${nextStep}`);
          return;
        }
      } else if (typeof currentQuestion.nextStep === 'string') {
        // If it's a string, try to find that question ID
        const targetQuestionIndex = questions.findIndex(q => q.id === currentQuestion.nextStep);
        if (targetQuestionIndex !== -1) {
          const nextStep = targetQuestionIndex + 1;
          setQuestionPath(prev => [...prev, nextStep]); // Add to path
          router.push(`/funnel/service_choices/${nextStep}`);
          return;
        }
      }
    }
    
    // Default behavior: go to the next sequential step
    const nextStep = currentStep + 1;
    console.log('Default navigation to next step:', nextStep);
    
    // Check if we have more questions
    if (questions && nextStep <= questions.length) {
      setQuestionPath(prev => [...prev, nextStep]); // Add to path
      router.push(`/funnel/service_choices/${nextStep}`);
    } else {
      // Check if this is the last question (contact_info)
      if (currentQuestion.id === 'contact_info') {
        // Log all responses for debugging
        console.log('Final responses:', responses);
        
        // Navigate to pricing plans page instead of summary
        router.push('/funnel/choix-du-pack');
      } else {
        // For other questions, go to the next step
        router.push(`/funnel/service_choices/${nextStep}`);
      }
    }
  };

  const goToPreviousStep = () => {
    // If we have a path history, use it
    if (questionPath.length > 1) {
      // Remove current step from path and get the previous step
      const newPath = [...questionPath];
      newPath.pop(); // Remove current step
      const prevStep = newPath[newPath.length - 1]; // Get the last step in the path
      
      setQuestionPath(newPath);
      router.push(`/funnel/service_choices/${prevStep}`);
    } else {
      // Fallback to simple decrement if no path history
      const prevStep = Math.max(1, currentStep - 1);
      router.push(`/funnel/service_choices/${prevStep}`);
    }
  };

  return (
    <FunnelContext.Provider
      value={{
        responses,
        currentStep,
        businessType,
        orderId,
        updateResponse,
        goToNextStep,
        goToPreviousStep,
        setBusinessType: (type: string) => {
          setBusinessType(type);
          setQuestionPath([1]); // Reset path when changing business type
        },
        resetFunnel,
      }}
    >
      {children}
    </FunnelContext.Provider>
  );
}

export function useFunnel() {
  const context = useContext(FunnelContext);
  if (context === undefined) {
    throw new Error('useFunnel must be used within a FunnelProvider');
  }
  return context;
} 