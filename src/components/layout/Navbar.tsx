"use client";

import React from "react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-[var(--color-outline-variant)]/20 bg-[#0a0a0c]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[var(--color-primary-container)] text-2xl">
            terminal
          </span>
          <span className="font-[family-name:var(--font-space-grotesk)] tracking-[0.1em] text-[var(--color-on-surface)] font-bold">
            NEURAL_CONDUIT
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-[family-name:var(--font-space-grotesk)] tracking-widest text-sm text-[var(--color-on-surface-variant)]">
          <a
            href="#features"
            className="hover:text-[var(--color-primary-container)] transition-colors"
          >
            INTEL
          </a>
          <a
            href="#access"
            className="hover:text-[var(--color-primary-container)] transition-colors"
          >
            ACCESS_TIERS
          </a>
        </div>
        <div>
          <a
            href="#waitlist"
            className="px-4 py-2 border border-[var(--color-outline-variant)] text-[var(--color-primary-container)] font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-wider hover:border-[var(--color-primary-container)] hover:bg-[var(--color-primary-container)]/10 transition-all"
          >
            INITIATE
          </a>
        </div>
      </div>
    </nav>
  );
}
