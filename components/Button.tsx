"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  disabled = false,
  loading = false,
  type = "button",
  className = ""
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 min-h-[44px] px-5 text-sm active:scale-[0.98] select-none";

  const variants = {
    primary: "bg-primary text-white hover:bg-[#0c5953] shadow-sm disabled:bg-primary/50",
    secondary: "border border-primary text-primary hover:bg-tint/40 disabled:border-primary/50 disabled:text-primary/50",
    ghost: "text-primary hover:text-[#0c5953] min-h-0 px-0 py-0 active:scale-100 disabled:text-primary/50"
  };

  const isBtnDisabled = disabled || loading;
  const classes = `${variant === "ghost" ? "inline-flex items-center gap-1.5 font-bold transition-all text-sm duration-300" : baseStyle} ${variants[variant]} ${isBtnDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""} ${className}`;

  const renderSpinner = () => (
    <svg
      className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={isBtnDisabled}
    >
      {loading && renderSpinner()}
      {children}
    </button>
  );
}
