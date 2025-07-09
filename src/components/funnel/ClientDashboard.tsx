'use client';

import { useFunnel } from '../providers/FunnelProvider';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ClientDashboard() {
  const { responses, orderId } = useFunnel();
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  
  // Get appointment information
  const appointmentSlot = responses['appointment_slot'] as string || '';
  const contactInfo = responses['appointment_contact'] as Record<string, string> || {};
  
  // Get the order ID from the provider or from responses
  const orderIdToUse = orderId || responses.orderId as string || '';
  
  // Store data in localStorage for the order page to use - in a useEffect to prevent re-renders
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (appointmentSlot) {
        localStorage.setItem('appointmentSlot', appointmentSlot);
      }
      
      if (contactInfo && Object.keys(contactInfo).length > 0) {
        localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
      }
      
      if (orderIdToUse) {
        localStorage.setItem('orderId', orderIdToUse);
      }
      
      // Mark component as ready after localStorage operations
      setIsReady(true);
    }
  }, [appointmentSlot, contactInfo, orderIdToUse]);

  console.log(isReady)

  
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-white rounded-lg">
      <div className="mb-6">
        <button 
          onClick={() => router.push('/')}
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back
        </button>
      </div>
      
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Your appointment with Solène is <span className="text-red-500">confirmed</span> !
        </h1>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg flex items-start gap-4 max-w-md mx-auto mb-12">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <Image 
            src="/images/home/Tiphaine - Avocat_1x.webp" 
            alt="Solène"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-medium text-gray-700">Selected appointment</p>
          <p className="text-xl font-semibold">{appointmentSlot || 'Tuesday, June 24 · 10:15'}</p>
          <button className="text-red-500 text-sm mt-1 hover:underline">
            To modify
          </button>
        </div>
      </div>
      
      <div className="text-center mb-12 max-w-lg mx-auto">
        <p className="text-gray-700">
          In the meantime, access your personalized customer area to prepare for your appointment: 
          discover offers, useful resources, etc.
        </p>
      </div>
      
      <div className="flex justify-center">
        {orderIdToUse ? (
          <Link
            href="/client"
            className="px-6 py-3 bg-red-500 text-white rounded-full cursor-pointer hover:bg-red-600 transition-colors font-semibold"
          >
            Access my personal space
          </Link>
        ) : (
          <Link
            href="/client"
            className="px-6 py-3 bg-red-500 text-white rounded-full cursor-pointer hover:bg-red-600 transition-colors font-semibold"
          >
            Access my personal space
          </Link>
        )}
      </div>
    </div>
  );
} 