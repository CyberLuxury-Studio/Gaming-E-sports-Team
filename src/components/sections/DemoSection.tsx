"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/motion";

export function DemoSection() {
  const [consoleOutput, setConsoleOutput] = useState<string[]>(["// UPLINK ESTABLISHED"]);

  const runSim = () => {
    setConsoleOutput((prev) => [...prev, `[${new Date().toLocaleTimeString()}] Accessing neural net...`, `[${new Date().toLocaleTimeString()}] Optimizing latency... done.`]);
  };

  return (
    <section className="py-32 relative border-b border-[var(--color-outline-variant)]/10 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-6">
         <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-16"
        >
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl text-[var(--color-on-surface)] font-bold uppercase tracking-wide">
            Interactive Node Sandbox
          </h2>
          <div className="h-1 w-24 bg-[var(--color-secondary-container)] mt-4"></div>
        </motion.div>
        
        <motion.div 
           variants={fadeUpVariant}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="w-full bg-[#111116] border border-[var(--color-outline-variant)]/30 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center px-4 py-2 bg-[#1c1b1d] border-b border-[var(--color-outline-variant)]/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="ml-4 font-mono text-xs text-[var(--color-outline)]">neural_conduit_v1.sh</span>
          </div>
          <div className="p-6 font-mono text-sm text-[var(--color-primary-container)] h-64 overflow-y-auto">
             {consoleOutput.map((line, i) => (
                <div key={i} className="mb-2 opacity-90">{line}</div>
             ))}
             <div className="mt-4 animate-pulse">_</div>
          </div>
          <div className="p-4 border-t border-[var(--color-outline-variant)]/20 flex justify-end">
             <button 
                onClick={runSim}
                className="px-6 py-2 bg-[var(--color-primary-container)]/10 text-[var(--color-primary-container)] border border-[var(--color-primary-container)]/50 hover:bg-[var(--color-primary-container)] hover:text-black transition-all font-[family-name:var(--font-space-grotesk)] uppercase text-sm tracking-widest"
             >
                Run Simulation
             </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
