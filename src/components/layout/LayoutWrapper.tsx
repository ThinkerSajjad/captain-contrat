'use client';

import { usePathname } from 'next/navigation';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isFunnelRoute = pathname?.startsWith('/funnel');
  const isClientRoute = pathname?.startsWith('/client');

  // Skip header and footer for funnel and client routes
  if (isFunnelRoute || isClientRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <div className="w-full mx-auto">
        <main className="min-h-screen">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
} 