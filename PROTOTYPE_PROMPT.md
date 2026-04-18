# Stealth Beta Prototype Prompt

Copy and paste the prompt below to generate the prototype frontend.

---

**System Role:** You are an expert Next.js (App Router) and Tailwind CSS developer specializing in high-performance, immersive landing pages. Your task is to build a single-page prototype for a "Stealth Beta / Waitlist" landing page aimed at a UI8 template release.

**Tech Stack Requirements:**
- Next.js (App Router)
- Tailwind CSS
- Framer Motion (for animations)
- TypeScript
- `lucide-react` (for icons)
- `@splinetool/react-spline` (for a 3D Hero scene placeholder)

**Theme & Design System:**
- **Vibe:** Cyberpunk, stealth, high-tech, dark mode exclusively.
- **Color Palette:**
  - Background: `#0a0a0c` (Obsidian)
  - Cards/Surfaces: `#111116` with a `backdrop-blur-md`
  - Primary Accent: `#00f3ff` (Neon Cyan)
  - Secondary Accent: `#ff003c` (Neon Pink)
  - Text Primary: `#ffffff`
  - Text Muted: `#8a8a93`
- **Typography:** Use `next/font/google` with `Space Grotesk` (for headings) and `Inter` (for body text).

**Task Requirements:**
Create a single page in `app/page.tsx` composing the following sections. Please provide the code for `app/layout.tsx`, `app/page.tsx`, and `tailwind.config.ts`. You can build all components inline within the page for prototyping purposes.

**1. Global Styles & Layout (`layout.tsx` & `tailwind.config.ts`):**
- Configure the Next.js layout to use the custom fonts and a black background.
- Extend the Tailwind config with the custom colors listed above.

**2. Hero Section (Waitlist Focus):**
- **Layout:** Full-viewport height (`h-screen`), flex layout.
- **Content (Left/Center):**
  - An H1 heading: "ENTER THE NEXT ERA" (with a slight glitch or text-shadow effect).
  - Subtitle: "Join the stealth beta. Limited access." in muted text.
  - **Waitlist Input:** A dark input field (`bg-surface`) with a glowing cyan bottom border on focus. Placeholder should be `> enter your email_`. Next to it, a primary button "Upload Consciousness" with a cyan border and hover glow effect.
- **Content (Right/Background):** Use a placeholder for the Spline 3D scene (an empty div with a subtle purple/pink radial gradient if `@splinetool/react-spline` isn't fully mocked).

**3. Features Section:**
- **Layout:** CSS Grid with 3 columns (`grid-cols-1 md:grid-cols-3`).
- **Content:** 3 feature cards (e.g., "Quantum Encryption", "Neural Uplink", "Zero Latency").
- **Styling:** Cards should have `bg-[#111116]`, a subtle white border (`border-white/5`), and a hover state that slightly lifts the card and activates a neon pink border glow. Include placeholder icons from `lucide-react`.

**4. Pricing/Tiers Section:**
- **Layout:** 3-column flex or grid.
- **Content:** 3 tiers ("Hacker", "Cyber", "God-Mode").
- **Styling:** The middle tier ("Cyber") should be visually highlighted with a continuous gradient border (`from-[#bd00ff] to-[#00f3ff]`) and a stronger drop shadow. Include a mock list of features and a "Select" button for each tier.

**5. CTA Section:**
- **Layout:** Centered content with a max-width.
- **Content:** "Ready to upload your consciousness?" and repeat the waitlist email form.
- **Styling:** Use a subtle background grid pattern. Add a pulsing radial gradient behind the input form to draw attention.

**6. Footer:**
- **Layout:** Simple flex row.
- **Content:** Copyright, mock social links (icons), legal links.
- **Styling:** Top border `border-white/10`, muted text.

**7. Animations (Framer Motion):**
- Wrap sections in `motion.div` with `initial="hidden" whileInView="visible" viewport={{ once: true }}`.
- Cards should stagger fade up (`translate-y-10` to `translate-y-0`).
- Add hover scale (`whileHover={{ scale: 1.05 }}`) on primary buttons.

Please generate the complete, copy-pasteable code for this prototype.