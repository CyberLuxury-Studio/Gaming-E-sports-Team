import React from "react";

export function SplineFallback() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center border border-[var(--color-outline-variant)]/10 bg-[var(--color-surface-container-lowest)]/50 backdrop-blur-sm z-0">
      <div className="text-center">
        <span className="material-symbols-outlined text-[var(--color-primary-container)] opacity-50 text-6xl mb-4 animate-pulse">
          view_in_ar
        </span>
        <p className="font-[family-name:var(--font-space-grotesk)] text-[var(--color-outline)] text-xs tracking-widest uppercase">
          [ 3D_ENVIRONMENT_PENDING ]
        </p>
      </div>
    </div>
  );
}
