import type { Metadata } from "next";
import { Inter, Syne, IBM_Plex_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://codexneural.com"),
  title: "Codex Neural | Future-Ready IT Solutions",
  description: "Codex Neural is a leading IT services company specializing in AI/ML, Enterprise Web Development, and Digital Transformation for global clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${syne.variable} ${ibmPlexMono.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg font-mono text-xs z-50 min-h-[44px] flex items-center">
          Skip to content
        </a>
        <NavBar />
        {children}
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
