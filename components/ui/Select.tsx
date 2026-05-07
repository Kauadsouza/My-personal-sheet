import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string;
  label?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ error, label, options, placeholder, className, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={id}
            className="text-fg-muted font-medium uppercase"
            style={{ letterSpacing: "0.08em", fontSize: "0.7rem" }}
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={id}
            className={cn(
              "h-11 w-full rounded-[var(--radius-sm)] px-4 text-base appearance-none",
              "bg-bg-elevated border border-border text-fg",
              "transition-colors duration-200",
              "focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent",
              "cursor-pointer",
              error && "border-danger focus:border-danger focus:ring-danger",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-fg-muted">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        {error && (
          <span className="text-xs text-danger" role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
export { Select };
