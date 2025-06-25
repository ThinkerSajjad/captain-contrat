'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useFunnel } from '../providers/FunnelProvider';
import './AppointmentSlotStyles.css';

interface AppointmentDay {
  date: string;
  dayName: string;
  slots: string[];
  expanded?: boolean;
}

export default function AppointmentSlotSelector() {
  const { updateResponse, goToNextStep } = useFunnel();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [expandedDays, setExpandedDays] = useState<Record<string, boolean>>({
    'Monday, June 23': true,
    'Tuesday, June 24': true,
  });
  const [showAllSlots, setShowAllSlots] = useState<Record<string, boolean>>({});

  // Mock data for available appointment slots
  const availableDays: AppointmentDay[] = [
    {
      date: 'June 23',
      dayName: 'Monday',
      slots: [
        '10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30', 
        '12:30', '12:45', '1:00 p.m.', '1:15 p.m.', '1:30 p.m.', '1:45 p.m.',
        '2:00 p.m.', '2:15 p.m.', '2:30 p.m.', '2:45 p.m.', '3:00 p.m.',
        '15:15', '3:30 p.m.', '15:45', '4:00 p.m.', '16:15', '4:30 p.m.',
        '4:45 p.m.', '5:00 p.m.', '17:15', '5:30 p.m.', '17:45', '6:00 p.m.',
        '18:15', '6:30 p.m.', '6:45 p.m.'
      ]
    },
    {
      date: 'June 24',
      dayName: 'Tuesday',
      slots: [
        '09:45', '10:00', '10:15', '10:30', '10:45', '11:00', '11:15', 
        '11:30', '11:45', '12:30', '12:45', '14:15'
      ]
    },
    {
      date: 'June 25',
      dayName: 'Wednesday',
      slots: ['10:00', '11:15', '1:45 p.m.']
    },
    {
      date: 'June 26',
      dayName: 'Thursday',
      slots: ['9:30', '11:00', '2:30 p.m.']
    },
    {
      date: 'June 27',
      dayName: 'Friday',
      slots: ['10:30', '1:15 p.m.', '3:45 p.m.']
    }
  ];

  const toggleDayExpansion = (dayKey: string) => {
    setExpandedDays(prev => ({
      ...prev,
      [dayKey]: !prev[dayKey]
    }));
  };

  const toggleShowAllSlots = (dayKey: string) => {
    setShowAllSlots(prev => ({
      ...prev,
      [dayKey]: !prev[dayKey]
    }));
  };

  const handleSelectSlot = (day: string, time: string) => {
    const fullSlot = `${day} · ${time}`;
    setSelectedSlot(fullSlot);
    
    // Store in funnel responses
    updateResponse('appointment_slot', fullSlot);
    
    // Also store in localStorage for the order page to access
    localStorage.setItem('appointmentSlot', fullSlot);

    // Add a small delay before auto-progressing
    setTimeout(() => {
      goToNextStep();
    }, 500);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Choose the <span className="text-red-500">slot</span> that suits you</h2>
      
      {availableDays.map((day) => {
        const dayKey = `${day.dayName}, ${day.date}`;
        const isExpanded = expandedDays[dayKey] || false;
        const showAll = showAllSlots[dayKey] || false;
        const displaySlots = showAll ? day.slots : day.slots.slice(0, 14);
        
        return (
          <div key={day.date} className="appointment-day">
            <div 
              className="appointment-day-header"
              onClick={() => toggleDayExpansion(dayKey)}
            >
              <span className="font-semibold lg:text-lg text-base select-none">{dayKey}</span>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </div>
            
            {isExpanded && (
              <div className="appointment-slots">
                {displaySlots.map((time) => {
                  const fullSlot = `${dayKey} · ${time}`;
                  const isSelected = selectedSlot === fullSlot;
                  
                  return (
                    <button
                      key={time}
                      className={`time-slot ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleSelectSlot(dayKey, time)}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            )}
            
            {isExpanded && day.slots.length > 14 && (
              <button 
                className="see-more-button"
                onClick={() => toggleShowAllSlots(dayKey)}
              >
                {showAll ? 'See less' : `See ${day.slots.length - 14} more slots`}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
} 