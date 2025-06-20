"use client";

import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

// Flag components
const UKFlag = () => (
  <svg className="w-4 h-4 mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <rect fill="#012169" width="512" height="512"/>
    <path fill="#FFF" d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"/>
    <path fill="#C8102E" d="M184 324l11 34L42 512H0v-3l184-185zm124-12l54 8 150 147v45L308 312zM512 0L320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z"/>
    <path fill="#FFF" d="M176 0v512h160V0H176zM0 176v160h512V176H0z"/>
    <path fill="#C8102E" d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z"/>
  </svg>
);

const FranceFlag = () => (
  <svg className="w-4 h-4 mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <rect fill="#ED2939" width="512" height="512"/>
    <rect fill="#FFF" width="342" height="512"/>
    <rect fill="#002395" width="170" height="512"/>
  </svg>
);

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", name: "En", flag: UKFlag },
    { code: "fr", name: "Fr", flag: FranceFlag },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
  const CurrentFlag = currentLanguage.flag;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    document.documentElement.lang = langCode;
    setIsOpen(false);
    router.refresh();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-0.5 text-gray-700 hover:shadow-md p-2 rounded-lg cursor-pointer transition-colors"
      >
        <CurrentFlag />
        <span className="text-sm font-medium">{currentLanguage.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-20 bg-white rounded-lg shadow-lg py-0.5 z-50">
          {languages.map((lang) => {
            const Flag = lang.flag;
            return (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center px-4 py-1 text-sm hover:bg-gray-100 cursor-pointer ${
                  currentLanguage.code === lang.code ? "bg-gray-50" : ""
                }`}
              >
                <Flag />
                {lang.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
} 