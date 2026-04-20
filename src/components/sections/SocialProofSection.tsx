"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/motion";

const testimonials = [
  { quote: "Latency dropped by 40%. The uplink is surreal.", author: "@cyber_ninja" },
  { quote: "Finally, a platform that understands real-time data needs for competitive arenas.", author: "@pro_gamer_x" },
  { quote: "Aesthetic meets pure unadulterated performance.", author: "@neon_dreams" },
];

export function SocialProofSection() {
  return (
    <section className="py-24 relative bg-[var(--color-surface-container-lowest)] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary-container)] to-transparent opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6">
         <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
             <motion.div 
               key={i} 
               variants={fadeUpVariant}
               className="bg-[#111116] p-6 border border-white/5 relative group"
             >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-container)]/0 to-[var(--color-secondary-container)]/0 group-hover:from-[var(--color-primary-container)]/5 group-hover:to-[var(--color-secondary-container)]/5 transition-all duration-500"></div>
                <p className="text-[var(--color-on-surface-variant)] italic mb-4 font-[family-name:var(--font-inter)] text-sm leading-relaxed">"{t.quote}"</p>
                <p className="text-[var(--color-primary-container)] font-mono text-xs tracking-wider">{t.author}</p>
             </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
