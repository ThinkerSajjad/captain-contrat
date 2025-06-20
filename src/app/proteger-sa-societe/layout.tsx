import type { Metadata } from "next";
import "../../app/globals.css";

export const metadata: Metadata = {
  title: "Captain Contrat - Protéger sa société",
  description: "Protect your company",
};

export default function ProtectYourSocietyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="protect-your-society-layout">
      {children}
    </div>
  );
}
