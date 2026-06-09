"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay for better UX entry
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("cookie-consent-changed"));
    }
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("cookie-consent-changed"));
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-sm bg-surface/95 backdrop-blur-md border border-gray-200 p-6 rounded-xl shadow-premium z-50 animate-fade-in-up font-sans">
      <div className="flex items-start gap-3">
        <span className="text-xl">🍪</span>
        <div>
          <h4 className="text-sm font-bold text-foreground mb-1">Cookie Consent</h4>
          <p className="text-xs text-muted leading-relaxed mb-4">
            We use essential cookies to evaluate system response times, analyze organic traffic, and secure contact API requests. Learn more in our{" "}
            <a href="/privacy" className="text-primary hover:underline font-semibold">
              Privacy Policy
            </a>
            .
          </p>
          <div className="flex gap-2 justify-end">
            <button
              onClick={handleDecline}
              className="px-3.5 py-1.5 border border-gray-200 text-muted hover:text-foreground text-xs font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-3.5 py-1.5 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-[#0d645e] transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
