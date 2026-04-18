import React from "react";
import { cn } from "@/lib/utils";

interface WaitlistInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
}

export const WaitlistInput = React.forwardRef<HTMLInputElement, WaitlistInputProps>(
  ({ className, wrapperClassName, ...props }, ref) => {
    return (
      <div className={cn("relative flex-1 group w-full", wrapperClassName)}>
        <input
          ref={ref}
          type="email"
          placeholder="> enter your email_"
          required
          className={cn(
            "w-full bg-[var(--color-surface-container-highest)] border-0 border-b border-[var(--color-outline-variant)] text-[var(--color-on-surface)] p-4 font-[family-name:var(--font-inter)] placeholder:text-[var(--color-on-surface-variant)]/50 focus:ring-0 focus:border-transparent focus:outline-none transition-colors rounded-none",
            className
          )}
          {...props}
        />
        <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[var(--color-primary-container)] group-focus-within:w-full transition-all duration-300"></div>
      </div>
    );
  }
);

WaitlistInput.displayName = "WaitlistInput";
