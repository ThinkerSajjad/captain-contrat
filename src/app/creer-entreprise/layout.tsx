import type { Metadata } from "next";
import "../../app/globals.css";

export const metadata: Metadata = {
  title: "Captain Contrat - Créer Entreprise",
  description: "Business creation platform",
};

export default function BusinessCreationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="business-creation-layout">
      {children}
    </div>
  );
}
