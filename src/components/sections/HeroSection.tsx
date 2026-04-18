"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/motion";
import { CyberButton } from "../ui/Button";
import { WaitlistInput } from "../ui/Input";
import { SplineFallback } from "../3d/SplineFallback";

// Dynamically import Spline with SSR disabled to prevent hydration errors and improve initial load
const SplineScene = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <SplineFallback />,
});

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden border-b border-[var(--color-outline-variant)]/10">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-1/2 h-[80vh] bg-radial-gradient from-[var(--color-secondary-container)]/10 via-[var(--color-primary-container)]/5 to-transparent blur-3xl mix-blend-screen pointer-events-none"></div>
        {/* Spline 3D Scene Wrapper */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[40vw] h-[60vh] hidden md:block z-0 pointer-events-none md:pointer-events-auto">
           {/* Replace this scene URL with your actual Spline export URL */}
           {/* Example: <SplineScene scene="https://prod.spline.design/your-scene/scene.splinecode" /> */}

           {/* For the template placeholder, we just render the fallback */}
           <SplineFallback />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="md:w-3/5"
        >
          <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-surface-container-low)] border-l border-[var(--color-primary-container)] mb-8">
            <div className="w-2 h-2 rounded-full bg-[var(--color-primary-container)] animate-pulse"></div>
            <span className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-[0.2em] text-[var(--color-primary-container)]">
              SYSTEM_STATUS: STEALTH_BETA
            </span>
          </motion.div>

          <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-space-grotesk)] font-bold mb-6 text-[var(--color-on-surface)] leading-tight text-glitch">
            ENTER THE
            <br />
            NEXT ERA
          </motion.h1>

          <motion.p variants={fadeUpVariant} className="text-[var(--color-on-surface-variant)] text-lg md:text-xl font-[family-name:var(--font-inter)] max-w-lg mb-12 border-l-2 border-[var(--color-outline-variant)]/30 pl-4">
            Join the stealth beta. Limited access to the ultimate neural uplink template. Redefining digital brutalism.
          </motion.p>

          <motion.form
            variants={fadeUpVariant}
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-4 max-w-md"
          >
            <WaitlistInput />
            <CyberButton type="submit">
              UPLOAD
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </CyberButton>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
