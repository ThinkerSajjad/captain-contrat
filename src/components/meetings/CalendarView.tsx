"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cclogo from "../../../public/icons/cc-logo.png"
import Image from "next/image";

interface CalendarViewProps {
  onTimeSelected: (date: string, time: string) => void;
}

export function CalendarView({ onTimeSelected }: CalendarViewProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Available time slots (you can make this dynamic based on your needs)
  const timeSlots = [
    "18:30", "18:45", "19:00", "19:15", "19:30", "19:45",
    "20:00", "20:15", "20:30", "20:45", "21:00"
  ];

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  // Make Sunday the last day (0 -> 6)
  const firstDayOfMonth = (new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay() + 6) % 7;

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="flex flex-col md:flex-row w-full bg-white rounded-lg shadow-lg overflow-hidden lg:min-h-[520px] min-h-[400px] max-h-[90vh]" style={{ maxHeight: '90vh' }}>
      {/* Left: Calendar & Heading */}
      <div className="bg-[#223B53] text-white flex-1 flex flex-col items-center justify-between lg:py-10 py-6 lg:px-8 px-2 min-w-[320px]">
        {/* Avatar Placeholder */}
        <div className="flex flex-col items-center lg:mb-8 mb-4">
          <div className="lg:w-20 lg:h-20 w-16 h-16 rounded-full flex items-center bg-white overflow-hidden justify-center mb-4">
            <Image src={cclogo} alt="CC Logo" width={80} height={80} className="object-cover" />
          </div>
          <div className="text-center">
            <h3 className="lg:text-xl text-lg font-semibold mb-2">Find a time to meet with Captain Contrat</h3>
            <div className="lg:text-2xl text-xl font-bold mb-1">{formatDate(currentMonth)}</div>
          </div>
        </div>
        {/* Calendar Controls */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <button
            onClick={handlePrevMonth}
            className="p-2 hover:bg-white/10 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-medium text-lg">{formatDate(currentMonth)}</span>
          <button
            onClick={handleNextMonth}
            className="p-2 hover:bg-white/10 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        {/* Calendar Grid */}
        <div className="w-full">
          {/* Week days */}
          <div className="grid grid-cols-7 justify-between gap-1 mb-2">
            {weekDays.map((day) => (
              <div key={day} className="text-center w-8 h-6 flex items-center justify-center text-xs font-semibold text-white/80">
                {day}
              </div>
            ))}
          </div>
          {/* Days */}
          <div className="grid grid-cols-7 justify-between gap-1">
            {Array(firstDayOfMonth)
              .fill(null)
              .map((_, index) => (
                <div key={`empty-${index}`} className="p-2" />
              ))}
            {days.map((day) => {
              const date = new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth(),
                day
              );
              const isSelected = selectedDate?.toDateString() === date.toDateString();
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(date)}
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-all cursor-pointer
                    ${isSelected ? "bg-white text-[#223B53] font-bold" : "hover:bg-white/20"}
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex-1" />
      </div>
      {/* Right: Time slots */}
      <div className="flex-1 bg-white lg:p-8 p-4 flex flex-col min-w-[320px] border-l border-gray-100">
        {/* Meeting duration */}
        <div className="mb-4">
          <div className="font-semibold text-gray-700 mb-1">Meeting duration</div>
          <div className="w-32 bg-gray-100 rounded px-3 py-1 text-center text-gray-500">15 min</div>
        </div>
        {/* Timezone info */}
        <div className="mb-4">
          <div className="font-semibold text-gray-700 mb-1">What time suits you best?</div>
          <div className="text-xs text-blue-600 font-medium">
            UTC +06:00 Almaty, Bishkek, Dhaka
            <span className="ml-1">▼</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">Showing times for {selectedDate ? selectedDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : formatDate(currentMonth)}</div>
        </div>
        {/* Time slots */}
        <div className="flex-1 overflow-y-auto max-h-[320px]" >
          <div className="flex flex-col lg:gap-3 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => selectedDate && onTimeSelected(
                  selectedDate.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }),
                  time
                )}
                disabled={!selectedDate}
                className={`w-full py-2 rounded-lg border border-gray-300 text-sm lg:text-base font-semibold transition-all
                  ${selectedDate ? "hover:bg-blue-50 cursor-pointer text-gray-500" : "bg-gray-100 text-gray-400 cursor-not-allowed"}
                `}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 