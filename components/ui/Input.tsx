import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, className, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-fg-muted uppercase tracking-widest"
            style={{ letterSpacing: "0.08em", fontSize: "0.7rem" }}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            "h-11 w-full rounded-[var(--radius-sm)] px-4 text-base",
            "bg-bg-elevated border border-border text-fg",
            "placeholder:text-fg-muted/50",
            "transition-colors duration-200",
            "focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent",
            error && "border-danger focus:border-danger focus:ring-danger",
            className
          )}
          {...props}
        />
        {error && (
          <span className="text-xs text-danger" role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export { Input };
