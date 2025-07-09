"use client";

import Link from "next/link";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderMenu } from "./HeaderMenu";
import { useEffect, useRef, useState } from "react";
import { Menu as MenuIcon, X as CloseIcon, Search, Phone, UserCog } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { CountrySwitcher } from "./CountrySwitcher";
import HeaderContainer from "../HeaderContainer copy";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    }
    
    const handleResize = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
      }
    };

    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerBg = isSticky || isMenuActive || mobileMenuOpen ? 'bg-white border-gray-200' : 'bg-primary';

  return (
    <header ref={headerRef} className={`w-full sticky top-0 z-40 transition-colors duration-200 ${headerBg}`}>
      <HeaderContainer>
        <div className="w-full flex items-center justify-between gap-8 py-3.5">
          {/* Left: Logo */}
          <div className="flex items-center">
            <HeaderLogo />
          </div>
          {/* Right: Desktop menu and actions */}
          <div className="hidden xl:flex items-center space-x-3 w-full justify-between">
            <HeaderMenu onMenuActiveChange={setIsMenuActive} />
            <div className="flex items-center space-x-2">
              {/* Country Switcher */}
              <CountrySwitcher />
              {/* Language Switcher */}
              <LanguageSwitcher />
              {/* Search Icon */}
              <button className="text-gray-700 hover:shadow-md p-2 rounded-lg cursor-pointer transition-colors">
               <Search className="w-5 h-5" />
              </button>
              {/* Phone */}
              <Link href="tel:0183816725" className="flex items-center bg-tertiary text-white text-sm font-semibold gap-2 rounded-full px-4 py-2 transition-colors hover:bg-[#394e64]">
                <Phone className="w-4 h-4" />
                <span className="font-medium text-sm">01 83 81 67 25</span>
              </Link>
              {/* User Profile */}
              <Link href="/client" className="text-gray-700 hover:shadow-md p-2 rounded-lg cursor-pointer border border-tertiary transition-colors">
                <UserCog className="w-5 h-5"/>
              </Link>
            </div>
          </div>
          {/* Mobile: language switcher, user, burger/cross */}
          <div className="flex xl:hidden items-center space-x-2">
            <LanguageSwitcher />
            <Link href="/client" className="text-gray-700 hover:shadow-md border border-tertiary rounded-lg p-1.5 transition-colors focus:outline-none cursor-pointer">
              <UserCog className="w-4 h-4"/>
            </Link>
            <button
              className="text-gray-700 hover:shadow-md border-2 border-tertiary rounded-lg p-1 transition-colors focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? (
                <CloseIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </HeaderContainer>
      {/* MobileMenu slides from top, under header, full viewport width */}
      <div
        className={`fixed left-0 right-0 w-full z-50 transition-transform duration-300 xl:hidden ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-[-100%]'} `}
        style={{ top: 'var(--header-height, 60px)', willChange: 'transform' }}
      >
        <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </div>
    </header>
  );
} 