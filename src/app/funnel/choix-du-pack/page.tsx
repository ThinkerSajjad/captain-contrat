'use client';

import { useFunnel } from '@/components/providers/FunnelProvider';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PricingPlans } from '@/components/funnel/plans/PricingPlans';
import PricingComparison from '@/components/funnel/plans/PricingComparison';
import { MakeAnAppointment } from '@/components/common/MakeAnAppointment';
import { FAQ } from '@/components/funnel/plans/FAQ';

export default function PricingPlansPage() {
  const { businessType } = useFunnel();
  const router = useRouter();
  
  // If no business type or responses, redirect to the first step
  useEffect(() => {
    if (!businessType) {
      router.replace('/funnel/service_choices/1');
    }
  }, [businessType, router]);
  
  return (
    <div className="w-full">
      <PricingPlans />
      <PricingComparison />
      <MakeAnAppointment />
      <FAQ />
    </div>
  );
} 