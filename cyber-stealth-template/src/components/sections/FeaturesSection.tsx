"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/motion";

const features = [
  {
    icon: "enhanced_encryption",
    title: "Quantum Encryption",
    description: "End-to-end data obfuscation utilizing next-gen cryptographic hashes. Your consciousness remains secure during transit.",
  },
  {
    icon: "hub",
    title: "Neural Uplink",
    description: "Direct-to-cortex interfacing. Bypass standard I/O bottlenecks for instantaneous data assimilation.",
  },
  {
    icon: "speed",
    title: "Zero Latency",
    description: "Optimized rendering pipelines ensuring a seamless integration with the host system. Ping approaches absolute zero.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 relative border-b border-[var(--color-outline-variant)]/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-16"
        >
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl text-[var(--color-on-surface)] font-bold uppercase tracking-wide">
            Tactical Assets
          </h2>
          <div className="h-1 w-24 bg-[var(--color-primary-container)] mt-4"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariant}
              className="group relative bg-[#111116] p-8 border-t border-l border-white/5 hover:border-l-[var(--color-secondary-container)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-[var(--color-primary-container)]/0 group-hover:bg-[var(--color-primary-container)]/5 transition-colors duration-300"></div>
              <span className="material-symbols-outlined text-4xl text-[var(--color-outline)] mb-6 group-hover:text-[var(--color-primary-container)] transition-colors">
                {feature.icon}
              </span>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl text-[var(--color-on-surface)] mb-3 uppercase tracking-wider">
                {feature.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[var(--color-on-surface-variant)] text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
