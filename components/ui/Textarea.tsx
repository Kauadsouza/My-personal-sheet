import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string;
  label?: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, label, className, id, ...props }, ref) => {
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
        <textarea
          ref={ref}
          id={id}
          className={cn(
            "w-full rounded-[var(--radius-sm)] px-4 py-3 text-base min-h-[140px] resize-y",
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

Textarea.displayName = "Textarea";
export { Textarea };
