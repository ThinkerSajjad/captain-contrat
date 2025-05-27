import Link from "next/link";
import Image from "next/image";
import PageContainer from "../PageContainer";
import { mainMenus } from "@/data/menus";

import logoWhite from "../../../../public/images/common/logo_white.svg"

const legalLinks = [
  { label: "Configure cookies", href: "#" },
  { label: "Terms and Conditions", href: "#" },
  { label: "CGSU subscription / CGV SaaS", href: "#" },
  { label: "Legal notices", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-tertiary text-white pt-8 pb-4 mt-16">
      <PageContainer>
        <div className="flex flex-col items-center mb-4">
          <div className="flex items-center justify-start w-full mb-6">
            <Image src={logoWhite} alt="Captain Contrat" className="mr-2" />
          </div>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-6">
          {mainMenus.slice(0, 5).map((menu) => (
            <div key={menu.key}>
              <h3 className="font-semibold text-lg mb-3 text-white">{menu.label}</h3>
              {menu.dropdown && menu.dropdown.sections && (
                <ul className="space-y-2">
                  {menu.dropdown.sections.map((section, sidx) => (
                    <div key={`${menu.key}-section-${sidx}`}>
                      {section.title && <li className="font-medium text-white/90 mb-1 mt-2">{section.title}</li>}
                      {section.links.map((link, lidx) => (
                        <li key={`${menu.key}-${sidx}-link-${lidx}`}>
                          <Link href={link.href} className="text-white/80 hover:underline text-sm transition-colors">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </div>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-6">
          {mainMenus.slice(5).map((menu) => (
            <div key={menu.key}>
              <h3 className="font-semibold text-lg mb-3 text-white">{menu.label}</h3>
              {menu.dropdown && menu.dropdown.sections && (
                <ul className="space-y-2">
                  {menu.dropdown.sections.map((section, sidx) => (
                    <div key={`${menu.key}-section-${sidx}`}>
                      {section.title && <li className="font-medium text-white/90 mb-1 mt-2">{section.title}</li>}
                      {section.links.map((link, lidx) => (
                        <li key={`${menu.key}-${sidx}-link-${lidx}`}>
                          <Link href={link.href} className="text-white/80 hover:underline text-sm transition-colors">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </div>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="border-t border-white/20 my-8" />
        <div className="text-center text-white/80 text-sm mb-2">
          Our legal and administrative services platform supports you in your daily business.<br />
          We provide our network of lawyers and partners to effectively meet all your needs, from the simplest to the most complex.<br />
          Your legal and administrative procedures will never again be an obstacle to your business&apos;s growth.
        </div>
        <div className="text-center text-white font-semibold mt-4 mb-2">
          12 rue Saint-Fiacre, 75002 Paris
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-white/80 text-sm mb-2">
          {legalLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-center text-white/60 text-xs mt-2">
          Copyright 2025 Wasabros
        </div>
      </PageContainer>
    </footer>
  );
} 