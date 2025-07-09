"use client";

import { mainMenus } from "@/data/menus";
import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CountrySwitcher } from "./CountrySwitcher";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Close on click outside
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleDropdown(key: string) {
    setOpenDropdown((prev) => (prev === key ? null : key));
  }

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
     
      {/* Menu panel */}
      <div
        ref={menuRef}
        className={`absolute left-0 right-0 top-0 h-full w-full bg-white shadow-lg z-50 transform transition-all duration-300
          ${open ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}
      >
         
        <nav className="flex flex-col px-2 py-4 bg-white overflow-y-auto h-[calc(100vh-64px-72px)]">
          {mainMenus.map((menu) => (
            <div key={menu.key} className="mb-2">
              {menu.dropdown ? (
                <>
                  <button
                    className="flex items-center justify-between w-full py-3 px-4 text-lg font-medium text-gray-800 hover:text-blue-600 rounded transition-colors focus:outline-none"
                    onClick={() => handleDropdown(menu.key)}
                    aria-expanded={openDropdown === menu.key}
                  >
                    <span>{menu.label}</span>
                    <ChevronDown className={`w-5 h-5 ml-2 transition-transform ${openDropdown === menu.key ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${openDropdown === menu.key ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    {/* Dropdown sections */}
                    {menu.dropdown.sections.map((section, idx) => (
                      <div key={idx} className="pl-4 pr-2 py-2">
                        {section.title && (
                          <div className="text-base font-semibold text-gray-700 mb-2 mt-2">{section.title}</div>
                        )}
                        <ul className="flex flex-col space-y-1">
                          {section.links.map((link, linkIdx) => (
                            <li key={linkIdx}>
                              <Link
                                href={link.href}
                                className="block py-2 px-2 text-gray-700 hover:text-blue-600 rounded transition-colors text-base"
                                onClick={onClose}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {/* Right panel links (if any) */}
                    {menu.dropdown.rightPanel && (
                      <div className="pl-4 pr-2 py-2 border-t mt-2">
                        {menu.dropdown.rightPanel.title && (
                          <div className="text-base font-semibold text-gray-700 mb-2 mt-2">{menu.dropdown.rightPanel.title}</div>
                        )}
                        <ul className="flex flex-col space-y-1">
                          {menu.dropdown.rightPanel.links.map((link, idx) => (
                            <li key={idx}>
                              <Link
                                href={link.href}
                                className="block py-2 px-2 text-gray-700 hover:text-blue-600 rounded transition-colors text-base"
                                onClick={onClose}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <Link
                  href={menu.href || "#"}
                  className="block py-3 px-4 text-lg font-medium text-gray-800 hover:text-blue-600 rounded transition-colors"
                  onClick={onClose}
                >
                  {menu.label}
                </Link>
              )}
            </div>
          ))}
        {/* Country switcher and call button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white -mb-8">
          <CountrySwitcher />
          <Link 
            href="tel:0183816725" 
            className="flex items-center bg-tertiary text-white text-sm font-semibold gap-2 rounded-full px-4 py-2 transition-colors hover:bg-[#394e64]"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium text-sm whitespace-nowrap">01 83 81 67 25</span>
          </Link>
        </div>
        </nav>
 
      </div>
    </div>
  );
} 