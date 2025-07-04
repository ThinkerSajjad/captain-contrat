import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Crimson_Pro, Lato } from "next/font/google";
import "./globals.css";
import '../styles/scrollbar-hide.css';
import { I18nProvider } from "@/components/providers/I18nProvider";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Captain Contrat",
  description: "Business creation and management platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${crimsonPro.variable} ${lato.variable} antialiased`}
      >
        <I18nProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </I18nProvider>
      </body>
    </html>
  );
}
