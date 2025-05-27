"use client";

import { MenuDropdown as MenuDropdownType, MenuLink, MenuSection } from "@/types/menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import PageContainer from "../PageContainer";

interface MenuDropdownProps {
  dropdown: MenuDropdownType;
}

export function MenuDropdown({ dropdown }: MenuDropdownProps) {
  const { sections, rightPanel } = dropdown;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to allow for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`w-full bg-white shadow-lg z-50 transform transition-all duration-300 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
      <div className="w-full"></div>
      <PageContainer>
        <div className="w-full mx-auto grid grid-cols-5 gap-6 p-6">
          <div className={`${rightPanel ? "col-span-4" : "col-span-5"} grid grid-cols-4 gap-6`}>
            {sections.map((section: MenuSection, index: number) => (
              <div key={index} className="flex flex-col">
                {section.title && (
                  <h3 className="font-medium text-xl mb-4">{section.title}</h3>
                )}
                <ul className="space-y-3">
                  {section.links.map((link: MenuLink, linkIndex: number) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-700 hover:underline text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {rightPanel && (
            <div className="col-span-1 bg-lightPrimary p-4 rounded-lg">
              {rightPanel.title && (
                <h3 className="font-medium text-xl mb-4">{rightPanel.title}</h3>
              )}
              <ul className="space-y-3">
                {rightPanel.links.map((link: MenuLink, index: number) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={`text-sm ${
                        link.label.includes("Access the blog")
                          ? "text-black text-base font-semibold flex items-center"
                          : "text-gray-700 hover:underline transition-colors"
                      }`}
                    >
                      {link.label}
                      {link.label.includes("Access the blog") && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </PageContainer>
    </div>
  );
} 