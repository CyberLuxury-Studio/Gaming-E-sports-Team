"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/motion";
import { CyberButton } from "../ui/Button";

const pricingTiers = [
  {
    name: "Hacker",
    price: "$0",
    features: ["Limited Uplink", "Standard Encryption"],
    missing: ["Priority Routing"],
    isHighlighted: false,
    color: "var(--color-on-surface-variant)",
  },
  {
    name: "Cyber",
    price: "$49",
    features: ["Unrestricted Uplink", "Quantum Encryption", "Priority Routing"],
    missing: [],
    isHighlighted: true,
    color: "var(--color-primary-container)",
  },
  {
    name: "God-Mode",
    price: "$199",
    features: ["Dedicated Node", "Root Access", "24/7 Meatspace Support"],
    missing: [],
    isHighlighted: false,
    color: "var(--color-secondary-container)",
  },
];

export function PricingSection() {
  return (
    <section id="access" className="py-32 relative border-b border-[var(--color-outline-variant)]/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-16 text-center"
        >
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl text-[var(--color-on-surface)] font-bold uppercase tracking-wide">
            Access Protocols
          </h2>
          <div className="h-1 w-24 bg-[var(--color-outline-variant)] mt-4 mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {pricingTiers.map((tier, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariant}
              className={tier.isHighlighted
                ? "relative bg-[var(--color-surface-container-high)] p-8 shadow-[0_0_40px_rgba(0,243,255,0.1)] transform md:-translate-y-4"
                : "bg-[var(--color-surface-container)] p-8 border border-[var(--color-outline-variant)]/20 hover:border-[var(--color-outline-variant)]/50 transition-colors"
              }
            >
              {tier.isHighlighted && (
                <div
                  className="absolute inset-0 border border-transparent"
                  style={{
                    background: "linear-gradient(#131315, #131315) padding-box, linear-gradient(to bottom right, #bd00ff, #00f3ff) border-box",
                  }}
                ></div>
              )}

              <div className="relative z-10">
                {tier.isHighlighted && (
                  <div className="absolute top-0 right-0 bg-[var(--color-primary-container)] text-[var(--color-on-primary)] font-[family-name:var(--font-space-grotesk)] text-[10px] px-2 py-1 tracking-widest uppercase -translate-y-1/2 translate-x-4">
                    Recommended
                  </div>
                )}

                <h3
                  className="font-[family-name:var(--font-space-grotesk)] tracking-widest uppercase mb-2"
                  style={{ color: tier.color }}
                >
                  {tier.name}
                </h3>
                <div className="text-4xl md:text-5xl font-[family-name:var(--font-space-grotesk)] text-[var(--color-on-surface)] mb-6 font-bold">
                  {tier.price}
                  <span className="text-lg text-[var(--color-outline)] font-normal">/mo</span>
                </div>

                <ul className="space-y-4 mb-8 font-[family-name:var(--font-inter)] text-sm text-[var(--color-on-surface-variant)]">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className={`material-symbols-outlined text-sm ${tier.isHighlighted ? 'text-[var(--color-primary-container)]' : 'text-[var(--color-outline)]'}`}>
                        check
                      </span>
                      {feature}
                    </li>
                  ))}
                  {tier.missing.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 opacity-30">
                      <span className="material-symbols-outlined text-sm text-[var(--color-outline)]">
                        close
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {tier.isHighlighted ? (
                  <CyberButton className="w-full">Select Protocol</CyberButton>
                ) : (
                  <button className="w-full py-3 border border-[var(--color-outline-variant)] text-[var(--color-on-surface)] font-[family-name:var(--font-space-grotesk)] uppercase tracking-widest hover:bg-[var(--color-surface-container-highest)] transition-colors">
                    Initialize
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
