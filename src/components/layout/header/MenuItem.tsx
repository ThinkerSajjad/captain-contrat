"use client";

import { MainMenu } from "@/types/menu";
import Link from "next/link";
import { MenuDropdown } from "./MenuDropdown";
import { KeyboardEvent } from "react";

interface MenuItemProps {
  item: MainMenu;
  isActive: boolean;
  onClick: () => void;
}

export function MenuItem({ item, isActive, onClick }: MenuItemProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (item.dropdown) {
      e.preventDefault();
    }
    onClick();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    // Toggle dropdown on Enter or Space
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <>
      <div className="relative">
        <div className="relative">
          {item.dropdown ? (
            <button 
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              className={`text-sm cursor-pointer font-semibold flex items-center px-3 py-1.5 rounded-full ${isActive ? "bg-primary " : "text-gray-800"} transition-colors`}
              aria-expanded={isActive}
              aria-haspopup="true"
            >
              {item.label}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 ml-1 transition-transform ${isActive ? "rotate-180" : ""}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          ) : (
            <Link 
              href={item.href || "#"} 
              className={`text-sm font-semibold ${isActive ? "text-blue-600" : "text-gray-800 hover:text-blue-600"} transition-colors`}
              onClick={handleClick}
            >
              {item.label}
            </Link>
          )}
          
        </div>
      </div>
      
      {isActive && item.dropdown && (
        <div 
          className="fixed left-0 right-0 w-screen z-50" 
          style={{ top: 'var(--header-height, 60px)' }}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <MenuDropdown dropdown={item.dropdown} onLinkClick={onClick} />
        </div>
      )}
    </>
  );
} 