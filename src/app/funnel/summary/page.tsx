'use client';

export const dynamic = "force-dynamic";
import { useState } from 'react';
import { useFunnel } from '@/components/providers/FunnelProvider';
import { getBusinessTypeById, getFunnelQuestions } from '@/data/funnelQuestions';
import PageContainer from '@/components/layout/PageContainer';
import Link from 'next/link';
import { Check, ChevronLeft } from 'lucide-react';

export default function SummaryPage() {
  const { responses, businessType, resetFunnel } = useFunnel();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const businessTypeObj = getBusinessTypeById(businessType);
  const questions = getFunnelQuestions(businessType) || [];
  
  // Check if user has an appointment
  const hasAppointment = !!responses['appointment_slot'];
  const appointmentSlot = responses['appointment_slot'] as string;
  const appointmentContact = responses['appointment_contact'] as Record<string, string>;
  
  // Simulate form submission
  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // In a real application, you would send the data to your backend here
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Redirect to a thank you page or back to the business page
    window.location.href = businessTypeObj?.path || '/';
  };
  
  if (!businessTypeObj) {
    return (
      <PageContainer>
        <div className="max-w-3xl mx-auto py-12">
          <h1 className="text-2xl font-semibold mb-6">
            No business type selected
          </h1>
          <p className="mb-6">
            Please start the process again by selecting a business type.
          </p>
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to home
          </Link>
        </div>
      </PageContainer>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <PageContainer>
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <Link
              href={`/funnel/service_choices/${questions.length}`}
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to previous step
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-semibold mb-8">Summary of your information</h1>
            
            <div className="space-y-8">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h2 className="text-xl font-medium text-blue-800">
                  {businessTypeObj.name} Creation
                </h2>
              </div>
              
              {/* Display appointment information if available */}
              {hasAppointment && (
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="font-medium text-gray-700 mb-3">
                    Your Appointment
                  </h3>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-medium">Selected appointment</p>
                    <p className="text-lg">{appointmentSlot}</p>
                    
                    {appointmentContact && (
                      <div className="mt-4">
                        <p className="font-medium">Contact information</p>
                        <p>{appointmentContact.firstName} {appointmentContact.lastName}</p>
                        <p>{appointmentContact.email}</p>
                        <p>{appointmentContact.phone}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              <div className="space-y-6">
                {questions.map((question) => {
                  const response = responses[question.id];
                  
                  // Skip appointment-related questions in the general list
                  if (question.id === 'appointment_slot' || question.id === 'appointment_contact') {
                    return null;
                  }
                  
                  if (!response && question.isOptional) {
                    return null;
                  }
                  
                  // Special handling for contact form
                  if (question.type === 'contact_form') {
                    const formValues = response as Record<string, string>;
                    
                    return (
                      <div key={question.id} className="border-b border-gray-200 pb-4">
                        <h3 className="font-medium text-gray-700 mb-3">
                          {question.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {question.fields?.map(field => (
                            <div key={field.id} className="text-sm">
                              <span className="text-gray-500">{field.label}: </span>
                              <span className="text-gray-900 font-medium">
                                {formValues[field.id] || 'Not provided'}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  
                  // For choice questions, display the label instead of the value
                  if (question.type === 'choice' && question.options) {
                    const selectedOption = question.options.find(
                      (option) => option.value === response
                    );
                    const displayValue = selectedOption?.label || String(response);
                    
                    return (
                      <div key={question.id} className="border-b border-gray-200 pb-4">
                        <h3 className="font-medium text-gray-700 mb-1">
                          {question.title}
                        </h3>
                        <p className="text-gray-900">{displayValue}</p>
                      </div>
                    );
                  }
                  
                  // For all other question types
                  return (
                    <div key={question.id} className="border-b border-gray-200 pb-4">
                      <h3 className="font-medium text-gray-700 mb-1">
                        {question.title}
                      </h3>
                      <p className="text-gray-900">{String(response || 'Not provided')}</p>
                    </div>
                  );
                })}
              </div>
              
              <div className="pt-6">
                <p className="text-sm text-gray-500 mb-6">
                  Please review your information above. Once you submit, our team will 
                  begin processing your {businessTypeObj.name} creation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`px-6 py-3 rounded-md text-white font-medium flex items-center justify-center ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Submit Information
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={resetFunnel}
                    disabled={isSubmitting}
                    className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
} 