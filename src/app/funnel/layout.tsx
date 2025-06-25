'use client';

import { ReactNode, Suspense } from 'react';
import { FunnelProvider } from '@/components/providers/FunnelProvider';
import { Header2 } from '@/components/layout/header/Header2';
import { usePathname } from 'next/navigation';

export default function FunnelLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isPricingPage = pathname === '/funnel/choix-du-pack' || pathname === '/funnel/accounting_presentation' || pathname === '/funnel/analyzing';
  
  return (
    <FunnelProvider>
      <div className="min-h-screen bg-white flex flex-col">
        
        {/* New Header for funnel pages */}
        <Header2 />
        
        <main className="flex-1 flex flex-col items-center p-4 pt-4">
          <Suspense fallback={<div className="flex justify-center items-center w-full h-[70vh]">Loading...</div>}>
            {isPricingPage ? (
              // Full width container for pricing page
              <div className="w-full">
                {children}
              </div>
            ) : (
              // Standard width container for other funnel pages
              <div className="w-full max-w-4xl p-2 md:p-6">
                {children}
              </div>
            )}
          </Suspense>
        </main>
      </div>
    </FunnelProvider>
  );
} 