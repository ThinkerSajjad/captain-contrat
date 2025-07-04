import type { Metadata } from "next";
import "../../app/globals.css";

export const metadata: Metadata = {
  title: "Captain Contrat - Resources",
  description: "All resources to start and manage your business with complete peace of mind",
};

export default function RessourcesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="resources-layout">
      {children}
    </div>
  );
} 