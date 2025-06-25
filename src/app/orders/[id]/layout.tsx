'use client';

import { ReactNode } from 'react';

// Define the proper type for params
interface OrderParams {
  id: string;
}

export default function OrderDetailLayout({
  children,
}: {
  children: ReactNode;
  params: Promise<OrderParams>;
}) {
  // Unwrap params if needed (not using them in this component currently)
  // const unwrappedParams = use(params);
  
  return <div>{children}</div>;
} 