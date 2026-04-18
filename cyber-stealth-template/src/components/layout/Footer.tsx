import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-outline-variant)]/20 bg-[#0a0a0c] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-[var(--color-outline-variant)]">
          <span className="material-symbols-outlined text-xl">terminal</span>
          <span className="font-[family-name:var(--font-space-grotesk)] tracking-widest text-sm uppercase">
            Neural_Conduit v1.0
          </span>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-[var(--color-outline)] hover:text-[var(--color-primary-container)] transition-colors">
            <span className="material-symbols-outlined">code</span>
          </a>
          <a href="#" className="text-[var(--color-outline)] hover:text-[var(--color-primary-container)] transition-colors">
            <span className="material-symbols-outlined">share</span>
          </a>
          <a href="#" className="text-[var(--color-outline)] hover:text-[var(--color-primary-container)] transition-colors">
            <span className="material-symbols-outlined">bug_report</span>
          </a>
        </div>

        <div className="flex gap-6 font-[family-name:var(--font-space-grotesk)] text-xs tracking-widest text-[var(--color-outline)] uppercase">
          <a href="#" className="hover:text-[var(--color-on-surface)] transition-colors">Terms</a>
          <a href="#" className="hover:text-[var(--color-on-surface)] transition-colors">Privacy</a>
          <span>© 2024 UI8</span>
        </div>
      </div>
    </footer>
  );
}
