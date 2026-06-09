import React from "react";
import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Scoping | Codex Neural",
  description: "Initiate project scoping or schedule a direct consultation call with our systems engineers in Kathmandu, Nepal.",
  alternates: {
    canonical: "https://codexneural.com/contact",
  },
  openGraph: {
    title: "Contact & Scoping | Codex Neural",
    description: "Initiate project scoping or schedule a direct consultation call with our systems engineers in Kathmandu, Nepal.",
    url: "https://codexneural.com/contact",
    type: "website",
  },
};

export default function Contact() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://codexneural.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact",
                "item": "https://codexneural.com/contact"
              }
            ]
          })
        }}
      />

      <main className="min-h-screen bg-background text-foreground flex flex-col justify-between relative overflow-hidden font-sans z-10">
        {/* Background patterns */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tint/20 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.01)_1px,transparent_1px)] bg-[size:50px_50px] -z-10" />

        <ContactClient />
      </main>
    </>
  );
}
