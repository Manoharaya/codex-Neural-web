# Codex Neural - Design System Specifications

This document outlines the core layout system, breakpoints, typography tokens, component states, and motion specifications for the **Codex Neural** website redevelopment.

---

## 1. Breakpoints & Layout System

We design for responsive adaptability using Tailwind's layout engine, targeting critical viewport dimensions.

### Responsive Breakpoints
- **Mobile Compact:** `375px` (iPhone SE/Mini formats)
- **Mobile Standard:** `390px` / `430px` (iPhone Pro/Max formats)
- **Tablet / Portal:** `768px` (`md:` tailwind prefix)
- **Desktop / Large Screen:** `1024px` (`lg:`) / `1280px` (`xl:`)

### Spacing & Margins
- **Global Container Margin:** 
  - Mobile: `px-6` (24px side padding)
  - Desktop: `md:px-12` (48px side padding)
  - Max Width Container: `max-w-7xl mx-auto` (1280px constraint)
- **Section Spacing:**
  - Mobile: `py-16` (64px top/bottom padding)
  - Desktop: `md:py-24` (96px top/bottom padding)

---

## 2. Color Palette & Accessibility

Our theme uses a Slate surface layer combined with Electric Teal action cues.

- **Background:** `#F8FAFC` (Slate 50) - Base background grid.
- **Surface:** `#FFFFFF` (White) - Card modules, modals, navigation drawers.
- **Primary Action:** `#0F766E` (Teal 700) - Headers, buttons, primary brand color.
- **Accent:** `#14B8A6` (Teal 500) - Highlights, glowing nodes, active border tags.
- **Tint/Highlight:** `#CCFBF1` (Teal 100) - Badges, hover background overlays.
- **Foreground Text:** `#0F172A` (Slate 900) - Headings, body copy, solid labels.
- **Muted Text:** `#64748B` (Slate 500) - Captions, subtitles, secondary metadata details.

### Contrast & Legibility
All text elements mapped to `#0F172A` (or `#0F766E`) against white backgrounds exceed the WCAG AAA contrast ratio standards (> 7:1) for excellent readability.

---

## 3. Typography Hierarchy

Consistent font families map directly to standard classes:

- **Heading (Syne):** Used for large section headings and hero headers.
  - H1: `font-heading font-black text-4xl md:text-6xl tracking-tight`
  - H2: `font-heading font-extrabold text-2xl md:text-3xl tracking-tight`
  - H3: `font-heading font-bold text-lg md:text-xl`
- **Sans Copy (Inter):** Used for all readable paragraphs and standard text labels.
  - Body Large: `font-sans text-base leading-relaxed`
  - Body Small: `font-sans text-sm leading-relaxed`
  - Caption: `font-sans text-xs text-muted leading-relaxed`
- **Display/Mono (IBM Plex / JetBrains):** Used for system diagnostics, badges, timelines, and metadata indicators.
  - Monospace: `font-mono text-xs font-semibold tracking-wider`

---

## 4. Interaction Guidelines & Component States

To ensure a premium feel, all interactive nodes feature micro-animations.

### Touch Targets
- To support thumbs on mobile screens, all button links, input elements, and navigation selectors must be a minimum of **44x44px** in clickable boundary width/height.

### Component States
- **Default:** Clean, flat layouts with subtle borders (`border-gray-200`).
- **Hover:** Translate-up effect (`hover:-translate-y-0.5 hover:shadow-premium transition-all duration-300`), or text color shift (`hover:text-primary transition-colors`).
- **Active / Pressed:** Inset shadow, scale shift (`active:scale-95 transition-all`).
- **Disabled:** Zero pointer-events, lowered opacity (`opacity-50 cursor-not-allowed`).

---

## 5. Motion & Easing Specifications

All interface transitions leverage hardware-accelerated animations:

- **Standard Entry Transitions:** `duration-300 transition-all`
- **Premium Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (Ultra-smooth ease-out)
- **Staggered Reveals:** 150ms delay steps per sibling grid item.
- **Reduced Motion:** Respect client system preference by listening to `@media (prefers-reduced-motion: reduce)` to bypass or disable intensive CPU/GPU render loops.
