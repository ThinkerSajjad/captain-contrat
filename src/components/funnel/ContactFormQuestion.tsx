'use client';

import { useState } from 'react';
import { useFunnel } from '../providers/FunnelProvider';
import { Field } from '@/types/funnel';
import { generateOrderId } from '@/lib/utils';
import { ArrowRightIcon } from 'lucide-react';

interface ContactFormQuestionProps {
  id: string;
  fields: Field[];
}

export default function ContactFormQuestion({ id, fields }: ContactFormQuestionProps) {
  const { responses, updateResponse, goToNextStep, orderId } = useFunnel();
  
  // Initialize form state from existing responses or empty object
  const [formValues, setFormValues] = useState<Record<string, string>>(() => {
    return (responses[id] as Record<string, string>) || {};
  });
  
  // Get the selected appointment slot
  const selectedSlot = responses['appointment_slot'] as string;
  
  // Handle input changes
  const handleInputChange = (fieldId: string, value: string) => {
    setFormValues(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check required fields
    const requiredFields = fields.filter(field => field.required);
    const isValid = requiredFields.every(field => 
      formValues[field.id] && formValues[field.id].trim() !== ''
    );
    
    if (isValid) {
      // Generate an order ID if we don't have one yet
      const newOrderId = orderId || generateOrderId();
      
      // Update response with form values and order ID
      updateResponse(id, formValues);
      updateResponse('appointment_contact', formValues);
      updateResponse('orderId', newOrderId);
      
      // Store contact info in localStorage
      localStorage.setItem('contactInfo', JSON.stringify(formValues));
      localStorage.setItem('orderId', newOrderId);
      
      // Navigate to the next step (which will be the dashboard)
      // The FunnelProvider will handle the redirect to the orders page
      goToNextStep();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {selectedSlot && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-gray-600 font-semibold">Selected appointment</p>
          <p className="text-gray-900 font-semibold text-lg">{selectedSlot}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map((field) => (
          <div key={field.id} className="space-y-2">
            <label 
              htmlFor={field.id} 
              className="block text-sm font-medium text-gray-700"
            >
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field.id.includes('email') ? 'email' : 'text'}
              id={field.id}
              name={field.id}
              placeholder={field.placeholder || ''}
              value={formValues[field.id] || ''}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
              required={field.required}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
        
        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex items-center gap-2 lg:px-6 px-4 lg:py-3 py-2 cursor-pointer font-semibold rounded-full bg-red-400 text-white hover:bg-red-500 transition-colors"
          >
            Continue <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
} 