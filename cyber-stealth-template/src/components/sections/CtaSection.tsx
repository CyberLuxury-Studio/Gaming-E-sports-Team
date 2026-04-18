"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/motion";
import { CyberButton } from "../ui/Button";
import { WaitlistInput } from "../ui/Input";

export function CtaSection() {
  return (
    <section id="waitlist" className="py-40 relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient from-[var(--color-primary-container)]/10 to-transparent animate-pulse-glow pointer-events-none"></div>

      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
           }}
        >
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-[family-name:var(--font-space-grotesk)] font-bold mb-6 text-[var(--color-on-surface)]">
            READY TO UPLOAD YOUR CONSCIOUSNESS?
          </motion.h2>

          <motion.p variants={fadeUpVariant} className="text-[var(--color-on-surface-variant)] font-[family-name:var(--font-inter)] mb-10">
            Secure your position in the neural queue. Capacity is strictly limited.
          </motion.p>

          <motion.form variants={fadeUpVariant} onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 justify-center">
            <WaitlistInput wrapperClassName="sm:w-2/3" />
            <CyberButton type="submit">
              SUBMIT
            </CyberButton>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
