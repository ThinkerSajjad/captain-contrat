"use client";

import Image from "next/image";
import type { AppointmentDetails } from "./AppointmentScheduler";
import checkCircle from "../../../public/icons/check.png"

interface MeetingConfirmationProps {
  appointmentDetails: AppointmentDetails;
}

export function MeetingConfirmation({
  appointmentDetails,
}: MeetingConfirmationProps) {
  return (
    <div className="text-center lg:py-8 py-4">
      {/* Confirmation Icon */}
      <div className="lg:mb-8 mb-4">
        <Image
          src={checkCircle}
          alt="Success"
          width={80}
          height={80}
          className="mx-auto"
        />
      </div>

      <h2 className="lg:text-2xl text-xl font-semibold mb-4">Meeting confirmed</h2>

      <p className="lg:text-base text-sm text-gray-600 mb-2">
        You have an appointment with Captain Contrat.
        <br />
        An invitation has been sent by email.
      </p>

      <div className="lg:mt-8 mt-4 lg:p-6 p-4 bg-slate-100 rounded-lg inline-block">
        <div className="lg:text-lg text-base font-medium">
          {appointmentDetails.date}
          <br />
          <span className="text-gray-700 font-semibold text-xl lg:text-2xl">{appointmentDetails.time}</span>
        </div>
      </div>
    </div>
  );
} 