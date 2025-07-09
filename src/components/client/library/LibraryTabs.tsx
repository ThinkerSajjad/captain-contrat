'use client';
import { useState } from 'react';
import { FileText, Heart, FileDown } from 'lucide-react';

interface TabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function LibraryTabs({ activeTab, setActiveTab }: TabProps) {
  const tabs = [
    { id: 'practical-sheets', label: 'Practical sheets', icon: FileText },
    { id: 'favorite-articles', label: 'Favorite articles', icon: Heart },
    { id: 'guides-pdf', label: 'Guides PDF', icon: FileDown },
  ];

  return (
    <div className="flex border-b border-gray-200 mb-6">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-6 py-3 text-sm font-medium cursor-pointer ${
              isActive
                ? 'text-red-500 border-b-2 border-red-500'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Icon className={`h-4 w-4 mr-2 ${isActive ? 'text-red-500' : 'text-gray-500'}`} />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
} 