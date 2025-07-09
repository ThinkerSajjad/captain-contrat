'use client';
import { useState } from 'react';
import LibraryTabs from '@/components/client/library/LibraryTabs';
import SearchBar from '@/components/client/library/SearchBar';
import LibraryContent from '@/components/client/library/LibraryContent';

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState('practical-sheets');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Library</h1>
        <div className="w-full md:w-64">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <LibraryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <LibraryContent activeTab={activeTab} searchQuery={searchQuery} />
    </div>
  );
} 