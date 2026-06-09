"use client";

import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    // Read initial consent from localStorage
    const storedConsent = localStorage.getItem("cookie-consent");
    setConsent(storedConsent);

    // Set up custom event listener for instant updates when user clicks Accept/Decline
    const handleConsentChange = () => {
      const updatedConsent = localStorage.getItem("cookie-consent");
      setConsent(updatedConsent);
    };

    window.addEventListener("cookie-consent-changed", handleConsentChange);
    return () => {
      window.removeEventListener("cookie-consent-changed", handleConsentChange);
    };
  }, []);

  // Track page view events on route switches (App Router navigation)
  useEffect(() => {
    if (consent === "accepted" && typeof window !== "undefined" && window.gtag) {
      const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";
      const fullUrl = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
      
      window.gtag("config", gaId, {
        page_path: fullUrl,
      });
    }
  }, [pathname, searchParams, consent]);

  if (consent !== "accepted") {
    return null;
  }

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";
  const hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID || "XXXXXXX";

  return (
    <>
      {/* GA4 Script loader via next/third-parties */}
      <GoogleAnalytics gaId={gaId} />

      {/* Hotjar Tracking Script */}
      <Script id="hotjar-analytics" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${hotjarId},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
    </>
  );
}

export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsTracker />
    </Suspense>
  );
}
