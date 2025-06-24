'use client';

import AccountingPresentation from '@/components/funnel/plans/AccountingPresentation';
import { FAQ2 } from '@/components/funnel/plans/FAQ2';

export default function AccountingPresentationPage() {
  return (
    <div className="flex flex-col">
      <AccountingPresentation />
      <FAQ2 />
    </div>
  );
} 