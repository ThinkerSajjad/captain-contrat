"use client";

import { useState, useEffect, useRef } from "react";
import { MenuItem } from "./MenuItem";
import { mainMenus } from "@/data/menus";
import { MainMenu } from "@/types/menu";

interface HeaderMenuProps {
  onMenuActiveChange: (isActive: boolean) => void;
}

export function HeaderMenu({ onMenuActiveChange }: HeaderMenuProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = (key: string) => {
    setActiveMenu(prev => {
      const newValue = prev === key ? null : key;
      onMenuActiveChange(newValue !== null);
      return newValue;
    });
  };

  // Handle click outside to close the dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        onMenuActiveChange(false);
      }
    }
    
    if (activeMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeMenu, onMenuActiveChange]);

  return (
    <div className="relative" ref={menuRef}>
      <nav className="flex items-center space-x-1">
        {mainMenus.map((menu: MainMenu) => (
          <MenuItem
            key={menu.key}
            item={menu}
            isActive={activeMenu === menu.key}
            onClick={() => handleMenuClick(menu.key)}
          />
        ))}
      </nav>
    </div>
  );
} 