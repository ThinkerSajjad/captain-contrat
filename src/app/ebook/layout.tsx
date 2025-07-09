import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Legal Guides for Entrepreneurs | Captain Contrat",
  description: "Download our free legal guides to help you navigate the complexities of business creation, management, and legal compliance.",
};

export default function EbookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
} 