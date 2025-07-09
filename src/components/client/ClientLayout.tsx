'use client';
import { ReactNode, useState, useEffect } from "react";
import Header2 from "./Header2";
import Sidebar from "./Sidebar";
import { ChevronRight, Menu, X } from "lucide-react";

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on a mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      // Close sidebar by default on mobile
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMobile && isSidebarOpen) {
        const sidebar = document.getElementById('sidebar');
        const toggleButton = document.getElementById('sidebar-toggle');
        
        if (sidebar && 
            !sidebar.contains(e.target as Node) && 
            toggleButton && 
            !toggleButton.contains(e.target as Node)) {
          setIsSidebarOpen(false);
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile, isSidebarOpen]);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Fixed header */}
      <div className="fixed top-0 left-0 right-0 z-20">
        <Header2 />
      </div>
      
      {/* Sidebar toggle button - visible only on mobile */}
      <button 
        id="sidebar-toggle"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`fixed top-[76px] -left-2 z-30 lg:hidden cursor-pointer bg-white p-2 rounded-md shadow-md border border-gray-200 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'left-[180px]' : '-left-2'
        }`}
        aria-label="Toggle sidebar"
      >
        {isSidebarOpen ? <X size={20} /> : <ChevronRight size={20} />}
      </button>
      
      {/* Overlay for mobile when sidebar is open */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 bg-opacity-50 z-10 transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Fixed sidebar - hidden on mobile by default */}
      <div 
        id="sidebar"
        className={`fixed left-0 top-[64px] bottom-0 z-20 transform transition-transform duration-300 ease-in-out ${
          isMobile ? (isSidebarOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'
        } lg:translate-x-0`}
      >
        <Sidebar />
      </div>
      
      {/* Main content with margin to account for header and sidebar */}
      <div className={`pt-[64px] transition-all duration-300 ${
        isMobile ? 'pl-0' : 'pl-[210px]'
      } lg:pl-[210px] min-h-screen`}>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 