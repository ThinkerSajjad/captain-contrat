'use client';

import { ReactNode, Suspense } from 'react';
import { FunnelProvider } from '@/components/providers/FunnelProvider';
import { Header2 } from '@/components/layout/header/Header2';
import { usePathname } from 'next/navigation';
import FunnelInitializer from '@/components/providers/FunnelInitializer';

export default function FunnelLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isPricingPage = pathname === '/funnel/choix-du-pack' || pathname === '/funnel/accounting_presentation' || pathname === '/funnel/analyzing';
  
  return (
    <FunnelProvider>
      {/* This component handles the search param logic safely */}
      <Suspense fallback={null}>
        <FunnelInitializer />
      </Suspense>

      <div className="min-h-screen bg-white flex flex-col">
        
        {/* New Header for funnel pages */}
        <Header2 />
        
        <main className="flex-1 flex flex-col items-center p-4 pt-4">
          <div className={isPricingPage ? "w-full" : "w-full max-w-4xl p-2 md:p-6"}>
            {children}
          </div>
        </main>
      </div>
    </FunnelProvider>
  );
} 