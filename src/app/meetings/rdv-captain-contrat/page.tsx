"use client";

import { Suspense, useState } from "react";

import { MeetingProgressBar } from "@/components/meetings/MeetingProgressBar";
import Image from "next/image";
import { AppointmentScheduler } from "@/components/meetings/AppointmentScheduler";

export default function MeetingPage() {
  // Track the current step: 1 = calendar/info, 2 = confirmation
  const [step, setStep] = useState<1 | 2>(1);

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4">
      {/* Logo */}
      <div className="mb-12">
        <Image
          src="/images/common/logo_inline-black.svg"
          alt="Captain Contrat"
          width={200}
          height={50}
        />
      </div>

      {/* Progress Bar */}
      <MeetingProgressBar step={step} />

      {/* Main Content */}
      <Suspense fallback={<div>Loading...</div>}>
        <AppointmentScheduler setStep={setStep} />
      </Suspense>
    </div>
  );
} 