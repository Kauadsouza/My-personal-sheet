"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitNewsletter } from "@/actions/newsletter";
import { FadeIn } from "@/components/motion/FadeIn";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  email: z.email(),
  honeypot: z.string().max(0).optional(),
});
type FormData = z.infer<typeof schema>;

export function NewsletterSection() {
  const t = useTranslations("newsletter");
  const locale = useLocale();
  const [state, setState] = useState<"idle" | "loading" | "success" | "error" | "rate-limited">("idle");

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setState("loading");
    const result = await submitNewsletter({ ...data, locale });
    setState(result.success ? "success" : result.error === "rate-limited" ? "rate-limited" : "error");
  }

  return (
    <section className="section border-t border-border" aria-labelledby="newsletter-heading">
      <div className="container">
        <FadeIn>
          <div className="max-w-2xl mx-auto rounded-[var(--radius-xl)] bg-accent-soft border border-accent/20 p-8 md:p-12 text-center">
            <h2
              id="newsletter-heading"
              className="text-2xl md:text-3xl font-bold text-fg mb-3 tracking-[-0.03em] leading-snug"
            >
              {t("title")}
            </h2>
            <p className="text-sm text-fg-muted mb-8">{t("sub")}</p>

            <AnimatePresence mode="wait">
              {state === "success" ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M3.5 9L7.5 13L14.5 5.5" stroke="hsl(140 45% 55%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-fg">{t("success")}</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit(onSubmit)}>
                  {/* Honeypot */}
                  <input {...register("honeypot")} type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <div className="flex-1">
                      <input
                        {...register("email")}
                        type="email"
                        placeholder={t("placeholder")}
                        aria-label="Email"
                        className="w-full h-11 px-4 rounded-[var(--radius-sm)] bg-bg border border-border text-fg text-sm placeholder:text-fg-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                      {errors.email && <p className="text-xs text-danger mt-1 text-left">{errors.email.message}</p>}
                    </div>
                    <button
                      type="submit"
                      disabled={state === "loading"}
                      className="h-11 px-6 text-sm font-semibold rounded-[var(--radius-sm)] bg-accent text-bg hover:bg-accent-hover disabled:opacity-50 transition-colors duration-200 whitespace-nowrap"
                    >
                      {state === "loading" ? t("subscribing") : t("button")}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

            {(state === "error" || state === "rate-limited") && (
              <p className="mt-3 text-xs text-danger">
                {state === "rate-limited" ? t("rateLimited") : t("error")}
              </p>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}