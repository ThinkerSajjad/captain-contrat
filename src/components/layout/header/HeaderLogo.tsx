"use client";

import Image from "next/image";
import logo from "../../../../public/images/common/logo_inline-black.svg"

export function HeaderLogo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <Image src={logo} alt="Logo" className="h-8 lg:h-9 w-auto" />
    </a>
  );
} 