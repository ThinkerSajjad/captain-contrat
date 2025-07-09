import { Metadata } from "next";
import ClientLayout from "@/components/client/ClientLayout";

export const metadata: Metadata = {
  title: "Client Dashboard | Captain Contrat",
  description: "Manage your entrepreneurial projects and business creation process",
};

// This layout completely overrides the root layout's LayoutWrapper
// to prevent the main header and footer from displaying
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}
