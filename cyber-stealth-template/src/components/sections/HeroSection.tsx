"use client";

import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/motion";
import { CyberButton } from "../ui/Button";
import { WaitlistInput } from "../ui/Input";

const Spline = lazy(() => import("@splinetool/react-spline"));

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden border-b border-[var(--color-outline-variant)]/10">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-1/2 h-[80vh] bg-radial-gradient from-[var(--color-secondary-container)]/10 via-[var(--color-primary-container)]/5 to-transparent blur-3xl mix-blend-screen pointer-events-none"></div>
        {/* Spline placeholder */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[40vw] h-[60vh] hidden md:flex items-center justify-center border border-[var(--color-outline-variant)]/10 bg-[var(--color-surface-container-lowest)]/50 backdrop-blur-sm z-0">
           <Suspense fallback={<div className="text-center">
              <span className="material-symbols-outlined text-[var(--color-primary-container)] opacity-50 text-6xl mb-4 animate-pulse">view_in_ar</span>
              <p className="font-[family-name:var(--font-space-grotesk)] text-[var(--color-outline)] text-xs tracking-widest uppercase">[ 3D_ENVIRONMENT_PENDING ]</p>
           </div>}>
             {/* Note: In a real project, put your spline URL here */}
             {/* <Spline scene="https://prod.spline.design/your-scene/scene.splinecode" /> */}
             <div className="text-center">
              <span className="material-symbols-outlined text-[var(--color-primary-container)] opacity-50 text-6xl mb-4 animate-pulse">view_in_ar</span>
              <p className="font-[family-name:var(--font-space-grotesk)] text-[var(--color-outline)] text-xs tracking-widest uppercase">[ 3D_ENVIRONMENT_PENDING ]</p>
           </div>
           </Suspense>
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
