import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "body-large"
    | "body-small"
    | "caption"
    | "code"
    | "label";
  className?: string;
  id?: string;
}

const tagMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  "body-large": "p",
  "body-small": "p",
  caption: "span",
  code: "code",
  label: "span"
} as const;

const variantClasses = {
  h1: "font-heading font-black text-4xl md:text-6xl tracking-tight text-foreground leading-[1.1]",
  h2: "font-heading font-extrabold text-2xl md:text-3xl tracking-tight text-foreground",
  h3: "font-heading font-bold text-lg md:text-xl text-foreground",
  h4: "font-heading font-bold text-base text-foreground",
  "body-large": "font-sans text-base leading-relaxed text-muted",
  "body-small": "font-sans text-sm leading-relaxed text-muted",
  caption: "font-sans text-xs text-muted leading-relaxed",
  code: "font-mono text-xs bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200 text-foreground",
  label: "font-mono text-xs font-bold uppercase tracking-wider text-muted"
};

export default function Typography({
  children,
  variant = "body-large",
  className = "",
  id
}: TypographyProps) {
  const Component = tagMap[variant];
  const combinedClasses = `${variantClasses[variant]} ${className}`;

  return (
    <Component id={id} className={combinedClasses}>
      {children}
    </Component>
  );
}
