import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Captain Contrat",
  description: "Manage your profile information",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      {children}
    </div>
  );
} 