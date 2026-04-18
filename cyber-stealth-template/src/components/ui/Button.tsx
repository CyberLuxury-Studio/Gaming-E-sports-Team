"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CyberButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "outline";
  children: React.ReactNode;
}

export function CyberButton({ className, variant = "primary", children, ...props }: CyberButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "font-[family-name:var(--font-space-grotesk)] uppercase tracking-widest px-8 py-4 transition-all flex items-center justify-center gap-2 whitespace-nowrap",
        variant === "primary" &&
          "bg-primary-container text-on-primary border border-primary-container hover:bg-transparent hover:text-primary-container hover:animate-flicker",
        variant === "outline" &&
          "border border-outline-variant text-primary-container hover:border-primary-container hover:bg-primary-container/10",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
