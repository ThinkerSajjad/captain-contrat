'use client';
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, User, LogOut } from "lucide-react";
import logo from "../../../public/images/common/logo_inline-black.svg"

export default function Header2() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-white text-tertiary py-4 px-10 flex items-center justify-between h-[64px] w-full">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Captain Contrat"
            className="max-w-[120px] lg:max-w-[200px]"
          />
        </Link>
      </div>

      {/* Right side navigation */}
      <div className="flex items-center space-x-2 md:space-x-6">
        

        {/* User profile */}
        <div className="flex items-center relative" ref={dropdownRef}>
          <button 
            className="flex items-center focus:outline-none cursor-pointer" 
            onClick={toggleDropdown}
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
          >
            <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-2">
              TB
            </div>
            <div className="hidden md:flex items-center h-full">
              <div>
                <div className="font-semibold">Thinker B.</div>
              </div>
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </div>
          </button>

          {/* Dropdown menu */}
          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg z-10 py-1">
              <Link 
                href="/client/profile" 
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                <User className="h-4 w-4 mr-2" />
                Profile
              </Link>
              <button 
                className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setDropdownOpen(false);
                  // Add sign out logic here
                }}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
} 