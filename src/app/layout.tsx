import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VersionBadge } from "@/components/layout/VersionBadge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UVP Schaltschrankbau | Portfolio",
  description: "Präzisions-Schaltschrankbau und industrielle Automatisierungslösungen.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900 text-slate-100 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <VersionBadge />
      </body>
    </html>
  );
}
