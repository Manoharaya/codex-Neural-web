import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "muted";
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  className = ""
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center px-3 py-1 text-xs font-mono font-semibold rounded-full border select-none w-fit";

  const variantStyles = {
    primary: "bg-tint text-primary border-primary/20",
    accent: "bg-accent/10 text-accent border-accent/20",
    muted: "bg-gray-100 text-muted border-gray-200"
  };

  return (
    <span className={`${baseClasses} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
