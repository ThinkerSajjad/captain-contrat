'use client';


import { Suspense } from 'react';
import AccountingPresentation from '@/components/funnel/plans/AccountingPresentation';
import { FAQ2 } from '@/components/funnel/plans/FAQ2';

export default function AccountingPresentationPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-[50vh]">Loading...</div>}>
      <div className="flex flex-col">
        <AccountingPresentation />
        <FAQ2 />
      </div>
    </Suspense>
  );
} 