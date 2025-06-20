import type { Metadata } from "next";
import "../../app/globals.css";

export const metadata: Metadata = {
  title: "Captain Contrat - Gestion des litiges",
  description: "Business creation platform",
};

export default function ProtectYourSocietyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="litiges-layout">
      {children}
    </div>
  );
}
