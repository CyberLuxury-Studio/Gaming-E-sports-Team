# NEURAL_CONDUIT - Cyber Stealth Landing Page Template

A premium, high-performance Next.js 16 template designed for stealth startups, waitlists, and tech products looking for a distinctive "Tactical Brutalism" cyberpunk aesthetic.

## Features
- **Next.js 16 App Router:** The latest routing paradigms from Next.js.
- **Tailwind CSS v4:** High-performance, low-bundle styling with custom CSS variables.
- **Framer Motion:** Smooth, hardware-accelerated scroll animations and micro-interactions.
- **Spline 3D Integration:** Pre-configured wrapper to drop in your own `.splinecode` URL for an interactive 3D hero scene.
- **100% Dark Mode:** Purpose-built color palette (Obsidian, Neon Cyan, Neon Pink).

## Quick Start

1. Ensure you have Node.js 18+ installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the environment file:
   ```bash
   cp .env.example .env.local
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Editing the 3D Spline Scene
To add your own Spline scene:
1. Export your scene from Spline as a React Component / URL.
2. Open `src/components/sections/HeroSection.tsx`.
3. Uncomment the `<SplineScene scene="..." />` line and paste your URL. The dynamic import configuration (`ssr: false`) handles performance automatically!

## Customizing Colors
Open `src/app/globals.css`. We use native CSS variables coupled with Tailwind v4 `@theme` directives. Modify variables like `--color-primary-container` (Cyan) or `--color-secondary-container` (Pink) to change the entire feel of the template instantly.