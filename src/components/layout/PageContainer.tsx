import React from "react";

export default function PageContainer({ children }: { children: React.ReactNode }) {
  return <div className="w-full mx-auto px-4 sm:max-w-full md:max-w-[1000px] lg:max-w-[1400px] xl:max-w-[1450px] 2xl:max-w-[1580px]">{children}</div>;
}

