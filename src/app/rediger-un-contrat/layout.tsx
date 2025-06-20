import type { Metadata } from "next";
import "../../app/globals.css";

export const metadata: Metadata = {
  title: "Captain Contrat - Rediger un contrat",
  description: "Write a contract",
};

export default function CommercialContractLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="commercial-contract-layout">
      {children}
    </div>
  );
}
