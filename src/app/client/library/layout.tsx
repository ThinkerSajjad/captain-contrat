import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library | Captain Contrat",
  description: "Access your documents and resources with Captain Contrat",
};

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 