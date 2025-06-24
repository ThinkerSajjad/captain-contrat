import { ReactNode } from 'react';

export default function OrdersLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="min-h-screen bg-gray-50">{children}</div>;
} 