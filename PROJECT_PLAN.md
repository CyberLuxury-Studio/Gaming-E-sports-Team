# Project Plan: CYBER_PULSE (E-sports/Gaming Landing Page)

## 1. Project Structure (Next.js App Router)
A modular and scalable architecture that buyers can easily understand and customize.

```text
cyber-pulse/
├── app/
│   ├── layout.tsx         # Global layout (HTML, body, fonts, smooth scrolling wrapper)
│   ├── page.tsx           # Main single-page landing assembly
│   ├── globals.css        # Tailwind base, global styles, custom glitch/glow CSS vars
│   └── loading.tsx        # Global loading state (neon spinner/glitch effect)
├── components/
│   ├── ui/                # Reusable base components (buttons, cards, badges)
│   │   ├── Button.tsx
│   │   ├── GlitchText.tsx
│   │   └── NeonCard.tsx
│   ├── layout/            # Layout specific components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/          # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── Roster.tsx     # Replaces traditional "Features"
│   │   ├── Merch.tsx      # Replaces traditional "Pricing"
│   └── CTA.tsx        # Join the team / Discord CTA
│   └── 3d/                # 3D/Spline components
│       ├── SplineHero.tsx # The embedded Spline scene wrapper
│       └── SplineLoader.tsx
├── lib/
│   ├── utils.ts           # Utility functions (Tailwind merge, classnames)
│   └── motion.ts          # Centralized Framer Motion variants
├── public/
│   ├── fonts/             # Local font files (e.g., Cyberpunk style fonts)
│   ├── images/            # Static assets (optimized webp/avif)
│   └── assets/            # Placeholder graphics for UI8 buyers
├── styles/
│   └── animations.css     # Keyframes for advanced CSS-only glitch effects
├── types/
│   └── index.d.ts         # Global TypeScript interfaces
├── tailwind.config.ts     # Tailwind theme and custom plugins
├── tsconfig.json
└── package.json
```

---

## 2. Design System

**Color Palette:**
- **Background Base:** `#050505` (Vanta Black) - Essential for neon pop.
- **Surface Level 1:** `#0F0F13` (Dark Charcoal with a hint of blue) - For cards and distinct sections.
- **Primary Accent:** `#00FFFF` (Neon Cyan) - Used for primary actions, glowing borders, and key text.
- **Secondary Accent:** `#FF00FF` (Hot Magenta) - Used for hover states, secondary highlights, and glitch artifact offsets.
- **Text Primary:** `#F8F8FF` (Ghost White)
- **Text Muted:** `#8A8A93` (Cyber Gray)

**Typography:**
- **Headings:** `Orbitron` or `Rajdhani` (Google Fonts, geometric, futuristic) - Loaded via `next/font`.
- **Body:** `Inter` or `Space Grotesk` - Ensures high readability for paragraphs and smaller UI elements.

**Spacing Scale:**
- Standard 4pt/8pt grid via Tailwind (e.g., `gap-4`, `p-8`, `mb-16`), with exaggerated padding (`py-24`, `py-32`) between sections to let the high-contrast elements breathe.

---

## 3. Section-by-Section Breakdown

### A. Navigation (`Navbar.tsx`)
- **Layout:** Sticky top, frosted glass (`backdrop-blur-md`), border-bottom with a subtle Cyan glow (`border-b border-cyan-500/20`).
- **Content:** Logo (left), Anchor links (Center: Roster, Merch, Community), CTA Button (Right: "Join Discord").
- **Animations:** Framer Motion staggered fade-in down on mount.

### B. Hero Section (`Hero.tsx`)
- **Layout:** 100vh, CSS grid/flex layout split visually or overlaid.
- **Content:** Massive glitching H1 ("DOMINATE THE GRID"), subheadline, dual CTA buttons ("View Roster" & "Watch Live").
- **Spline Usage:** Takes up the right 50% on desktop (or full background overlay with opacity).
- **Tailwind Strategy:** `min-h-screen flex items-center relative overflow-hidden bg-black`. Text styling: `text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-500`.

### C. Roster/Features (`Roster.tsx`)
- **Layout:** CSS Grid (`grid-cols-1 md:grid-cols-3 gap-8`).
- **Content:** Player cards showing stats, favorite weapons, and bio.
- **Animations:** Scroll-triggered Framer Motion. Cards slide up staggered. Image on hover scales up slightly with a Hot Magenta drop shadow glow.
- **Tailwind Strategy:** `group relative overflow-hidden rounded-xl border border-white/10 bg-surface-1 hover:border-cyan-500/50 transition-colors`.

### D. Merch/Pricing (`Merch.tsx`)
- **Layout:** Horizontal scroll or standard 3-column pricing tier style.
- **Content:** E-sports jerseys, digital access passes, or VIP memberships.
- **Tailwind Strategy:** High-contrast buttons (`bg-cyan-500 text-black hover:bg-magenta-500 hover:text-white transition-all`). Outer glow using `shadow-[0_0_15px_rgba(0,255,255,0.5)]`.

### E. Call to Action (`CTA.tsx`)
- **Layout:** Centered block with heavy visual weight.
- **Content:** "Ready to enter the arena?" -> "Join the Discord" button.
- **Animations:** Pulsing glow effect on the main button (CSS keyframes + Framer Motion).

### F. Footer (`Footer.tsx`)
- **Layout:** Multi-column (Brand, Links, Socials, Legal).
- **Content:** Subtle logo, copyright, UI8 placeholder links.
- **Tailwind Strategy:** `bg-black border-t border-magenta-500/20 text-muted py-12`.

---

## 4. Animation Plan

- **Mount Animations:** The Hero section uses a staggered `fade-in-up` variant. The Nav bar slides down from `y: -100%`.
- **Scroll Animations (Framer Motion):**
  - Wrap sections in a `<motion.div>` with `initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}`.
  - **Variant `staggerContainer`:** `transition: { staggerChildren: 0.1 }`
  - **Variant `itemFadeUp`:** `hidden: { opacity: 0, y: 30 }`, `visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }`.
- **Micro-interactions:**
  - Glitch hover effect on buttons: fast keyframe swapping of text shadow to Cyan (left) and Magenta (right).
  - Magnetic buttons (using Framer Motion `useMotionValue` and `useTransform`) for primary CTAs.

---

## 5. Spline Integration Plan

**Scene Concept:** A floating, slowly rotating 3D futuristic gaming helmet or an abstract neon cyber-core with interactive glowing particles that follow the cursor.
- **Setup:** Export the Spline scene as a React component URL.
- **Integration:** Use `@splinetool/react-spline`.
- **Performance Strategy:**
  - Wrap the Spline viewer in a Next.js dynamic import with `ssr: false` to prevent server-side rendering blocking.
  - Implement a fallback `SplineLoader.tsx` (a CSS glowing wireframe or spinner) that displays while the 3D canvas downloads and initializes.
  - Ensure the Spline canvas pointer events do not block scrolling on mobile (`pointer-events: none` on mobile breakpoints, active on desktop).

---

## 6. Component Architecture

- `Layout/Navbar`: Manages scroll state (to add background blur when scrolled past 50px).
- `UI/GlitchText`: Props: `text: string`, `intensity?: 'low' | 'high'`. Renders standard text but applies CSS pseudo-elements (`::before`, `::after`) with clipped, offset text colored Cyan/Magenta for a glitch look.
- `UI/NeonCard`: Props: `children: ReactNode`, `glowColor?: 'cyan' | 'magenta'`. A container that handles the complex hover-glow logic and border gradients.
- `UI/Button`: Props: `variant: 'primary' | 'secondary' | 'outline'`, `children`, `onClick`. Manages Framer Motion `whileHover={{ scale: 1.05 }}` and `whileTap={{ scale: 0.95 }}`.
- `3D/SplineHero`: No props. Pure client component (`"use client"`). Wraps the Spline canvas and manages the suspense/loading boundary.

---

## 7. Performance Strategy

- **Next.js `next/font`:** Preload Google Fonts (Orbitron/Inter) at build time to prevent Cumulative Layout Shift (CLS) and FOIT.
- **Image Optimization:** Use Next.js `<Image />` for all static assets (Roster cards, Merch). Ensure `sizes` props are correctly set to serve scaled WebP/AVIF images.
- **Code Splitting:** Rely on App Router's inherent Server Components layout. Only components needing state/interactivity (Navbar, Animations, Spline, Carousels) will be marked `"use client"`, keeping the initial JavaScript payload extremely lean.
- **Spline Lazy Loading:** As mentioned, dynamic importing with `ssr: false` ensures the heavy 3D engine does not affect initial page load metrics (Lighthouse score protection).

---

## 8. UI8 Packaging Checklist

To ensure a highly professional product for UI8 buyers, the final ZIP file must include:

1. **Source Code Folder:** The clean, well-commented Next.js codebase.
2. **`.env.example`:** Empty environment variables file if any are needed (e.g., for an API route handling a contact form).
3. **`README.md` (Crucial):**
   - Quick Start guide (`npm install && npm run dev`).
   - How to replace the Spline URL with their own.
   - How to edit the Tailwind color variables.
   - Folder structure explanation.
4. **Figma / Design File (Bonus):** If applicable, linking to the raw design file adds massive value on UI8.
5. **Assets Folder within UI8 Zip:**
   - A `mockups/` folder containing high-res preview images of the template for the UI8 listing.
   - Note: Ensure all placeholder images used in the template are copyright-free (Unsplash/Pexels) and note this in the README.