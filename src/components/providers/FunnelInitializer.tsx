'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useFunnel } from './FunnelProvider';
import { getBusinessTypeByPath } from '@/data/funnelQuestions';

export default function FunnelInitializer() {
  const searchParams = useSearchParams();
  const { businessType, setBusinessType, resetFunnel } = useFunnel();

  useEffect(() => {
    const source = searchParams.get('source');
    if (source) {
      const newBusinessType = getBusinessTypeByPath(decodeURIComponent(source))?.id;
      
      // If starting from a different business type page, reset the funnel
      if (newBusinessType && newBusinessType !== businessType) {
        console.log('Starting funnel from new business type:', newBusinessType);
        resetFunnel();
        // The setBusinessType from context already resets the question path
        setBusinessType(newBusinessType);
      }
    }
  // The setBusinessType function is memoized in the provider, so it's safe to include.
  }, [searchParams, businessType, setBusinessType, resetFunnel]);

  return null;
} 