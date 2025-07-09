'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import '../../../styles/scrollbar-hide.css';

// Flag components
const FranceFlag = () => (
  <svg className="w-7 h-5 rounded-sm" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="20" rx="2" fill="white"/>
    <rect width="9.33333" height="20" fill="#0055A4"/>
    <rect x="18.6667" width="9.33333" height="20" fill="#EF4135"/>
  </svg>
);

const GermanyFlag = () => (
  <svg className="w-7 h-5 rounded-sm" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="20" rx="2" fill="white"/>
    <rect width="28" height="6.66667" fill="#000000"/>
    <rect y="6.66667" width="28" height="6.66667" fill="#FF0000"/>
    <rect y="13.3333" width="28" height="6.66667" fill="#FFCC00"/>
  </svg>
);

const SpainFlag = () => (
  <svg className="w-7 h-5 rounded-sm" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="20" rx="2" fill="#FFC400"/>
    <rect y="5" width="28" height="10" fill="#C60B1E"/>
  </svg>
);

const ItalyFlag = () => (
  <svg className="w-7 h-5 rounded-sm" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="20" rx="2" fill="white"/>
    <rect width="9.33333" height="20" fill="#009246"/>
    <rect x="18.6667" width="9.33333" height="20" fill="#CE2B37"/>
  </svg>
);

const NetherlandsFlag = () => (
  <svg className="w-7 h-5 rounded-sm" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="20" rx="2" fill="white"/>
    <rect width="28" height="6.66667" fill="#AE1C28"/>
    <rect y="13.3333" width="28" height="6.66667" fill="#21468B"/>
  </svg>
);

const BelgiumFlag = () => (
  <svg className="w-7 h-5 rounded-sm" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="20" rx="2" fill="white"/>
    <rect width="9.33333" height="20" fill="#000000"/>
    <rect x="9.33333" width="9.33333" height="20" fill="#FAE042"/>
    <rect x="18.6667" width="9.33333" height="20" fill="#ED2939"/>
  </svg>
);

const SwitzerlandFlag = () => (
  <svg className="w-7 h-5 rounded-sm" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="20" rx="2" fill="#FF0000"/>
    <rect x="11.6667" y="8.33333" width="4.66667" height="11.6667" fill="white" transform="rotate(-90 11.6667 8.33333)"/>
    <rect x="11.6667" y="16.6667" width="4.66667" height="11.6667" fill="white" transform="rotate(-180 11.6667 16.6667)"/>
  </svg>
);

const AustriaFlag = () => (
  <svg className="w-7 h-5 rounded-sm" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="20" rx="2" fill="white"/>
    <rect width="28" height="6.66667" fill="#ED2939"/>
    <rect y="13.3333" width="28" height="6.66667" fill="#ED2939"/>
  </svg>
);

const PortugalFlag = () => (
  <svg className="w-7 h-5 rounded-sm" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="20" rx="2" fill="#FF0000"/>
    <rect width="9.33333" height="20" fill="#006600"/>
    <circle cx="9.33333" cy="10" r="4" fill="#FFCC00"/>
  </svg>
);

const LuxembourgFlag = () => (
  <svg className="w-7 h-5 rounded-sm" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="20" rx="2" fill="white"/>
    <rect width="28" height="6.66667" fill="#EF3340"/>
    <rect y="13.3333" width="28" height="6.66667" fill="#00A3E0"/>
  </svg>
);

const IrelandFlag = () => (
  <svg className="w-7 h-5 rounded-sm" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="20" rx="2" fill="white"/>
    <rect width="9.33333" height="20" fill="#169B62"/>
    <rect x="18.6667" width="9.33333" height="20" fill="#FF883E"/>
  </svg>
);

const GreeceFlag = () => (
  <svg className="w-7 h-5 rounded-sm" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="20" rx="2" fill="white"/>
    <rect y="2.22222" width="28" height="2.22222" fill="#0D5EAF"/>
    <rect y="6.66667" width="28" height="2.22222" fill="#0D5EAF"/>
    <rect y="11.1111" width="28" height="2.22222" fill="#0D5EAF"/>
    <rect y="15.5556" width="28" height="2.22222" fill="#0D5EAF"/>
    <rect width="11.1111" height="11.1111" fill="#0D5EAF"/>
    <rect x="4.44444" width="2.22222" height="11.1111" fill="white"/>
    <rect y="4.44444" width="11.1111" height="2.22222" fill="white"/>
  </svg>
);

// European countries with their flags
const countries = [
  { code: 'fr', name: 'France', flag: FranceFlag },
  { code: 'de', name: 'Germany', flag: GermanyFlag },
  { code: 'es', name: 'Spain', flag: SpainFlag },
  { code: 'it', name: 'Italy', flag: ItalyFlag },
  { code: 'nl', name: 'Netherlands', flag: NetherlandsFlag },
  { code: 'be', name: 'Belgium', flag: BelgiumFlag },
  { code: 'ch', name: 'Switzerland', flag: SwitzerlandFlag },
  { code: 'at', name: 'Austria', flag: AustriaFlag },
  { code: 'pt', name: 'Portugal', flag: PortugalFlag },
  { code: 'lu', name: 'Luxembourg', flag: LuxembourgFlag },
  { code: 'ie', name: 'Ireland', flag: IrelandFlag },
  { code: 'gr', name: 'Greece', flag: GreeceFlag },
];

export function CountrySwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Check if screen is mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectCountry = (country: typeof countries[0]) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  const SelectedFlag = selectedCountry.flag;

  return (
    <div className={`relative flex justify-between ${isMobile ? 'w-full' : ''}`} ref={dropdownRef}>
      <button 
        className="flex items-center space-x-1 text-gray-700 hover:shadow-md p-2 rounded-lg cursor-pointer transition-colors"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <SelectedFlag />
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className={`
            absolute ${isMobile ? 'bottom-full mb-2 w-64' : 'right-0 mt-10 w-48'} 
            bg-white rounded-md shadow-lg z-50 py-1 max-h-80 overflow-y-auto scrollbar-hide
          `}
        >
          {countries.map((country) => {
            const Flag = country.flag;
            return (
              <button
                key={country.code}
                className={`w-full flex items-center px-4 py-2 text-sm hover:bg-gray-100 ${
                  selectedCountry.code === country.code ? 'bg-gray-50' : ''
                }`}
                onClick={() => selectCountry(country)}
              >
                <div className="mr-3">
                  <Flag />
                </div>
                <span>{country.name}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
} 