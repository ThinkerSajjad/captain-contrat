'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import logo from '../../../../public/images/common/logo_inline-black.svg';

export function Header2() {
  return (
    <header className="w-full bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src={logo} alt="Captain Contrat" className="h-8 lg:h-10 w-auto" />
            </Link>
          </div>
          
          {/* Contact Info */}
          <div className="flex items-center gap-4">
            <Link 
              href="tel:0182289382" 
              className="flex flex-col items-center gap-1 text-gray-700 hover:text-gray-900"
            >
                <span className="text-xs lg:block hidden font-semibold text-gray-600">Need help?</span>
              <div className="flex items-center gap-2 bg-tertiary rounded-full px-4 py-2 relative">
                <Phone className="w-4 h-4 text-white" />
                <span className="font-semibold text-white text-sm">01 82 28 93 82</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 