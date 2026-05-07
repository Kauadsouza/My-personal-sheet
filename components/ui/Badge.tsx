import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent" | "outline";
};

const variants = {
  default: "bg-bg-elevated text-fg-muted border border-border",
  accent: "bg-accent-soft text-accent border border-accent/20",
  outline: "bg-transparent text-fg border border-border",
};

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
