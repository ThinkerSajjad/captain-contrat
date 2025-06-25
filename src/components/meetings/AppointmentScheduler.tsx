"use client";

import { useState, useEffect } from "react";
import { CalendarView } from "./CalendarView";
import { InformationForm } from "./InformationForm";
import { MeetingConfirmation } from "./MeetingConfirmation";

export type AppointmentDetails = {
  date?: string;
  time?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
};

interface AppointmentSchedulerProps {
  setStep?: (step: 1 | 2) => void;
}

export function AppointmentScheduler({ setStep }: AppointmentSchedulerProps) {
  const [step, setInternalStep] = useState<"calendar" | "form" | "confirmation">("calendar");
  const [appointmentDetails, setAppointmentDetails] = useState<AppointmentDetails>({});

  useEffect(() => {
    if (setStep) {
      setStep(step === "confirmation" ? 2 : 1);
    }
  }, [step, setStep]);

  const handleTimeSelected = (date: string, time: string) => {
    setAppointmentDetails({ ...appointmentDetails, date, time });
    setInternalStep("form");
  };

  const handleFormSubmit = (formData: Omit<AppointmentDetails, "date" | "time">) => {
    setAppointmentDetails({ ...appointmentDetails, ...formData });
    setInternalStep("confirmation");
  };

  const handleBack = () => {
    if (step === "form") {
      setInternalStep("calendar");
    }
  };

  return (
    <div className="w-full max-w-3xl bg-white rounded-lg shadow-sm p-6">
      {step === "calendar" && (
        <CalendarView onTimeSelected={handleTimeSelected} />
      )}
      {step === "form" && (
        <InformationForm
          selectedDateTime={{
            date: appointmentDetails.date || "",
            time: appointmentDetails.time || "",
          }}
          onSubmit={handleFormSubmit}
          onBack={handleBack}
        />
      )}
      {step === "confirmation" && (
        <MeetingConfirmation
          appointmentDetails={appointmentDetails}
        />
      )}
    </div>
  );
} 