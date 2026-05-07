"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBlob } from "./HeroBlob";
import { TextReveal } from "@/components/motion/TextReveal";

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      className="relative min-h-dvh flex flex-col justify-center overflow-hidden"
      aria-label="Hero"
    >
      <HeroBlob />

      <div className="container relative z-10 pt-24 pb-20 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="text-xs font-semibold uppercase tracking-widest text-accent mb-6"
          >
            Uberlândia · Brasil · 2026
          </motion.p>

          {/* Headline */}
          <h1 className="text-display mb-6 md:mb-8">
            <TextReveal text={t("headline")} delay={0.2} stagger={0.035} />
          </h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease }}
            className="text-base md:text-lg text-fg-muted leading-relaxed max-w-xl mb-10 md:mb-12"
          >
            {t("sub")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75, ease }}
            className="flex flex-wrap gap-3 md:gap-4"
          >
            <Link
              href="/projetos"
              className="inline-flex items-center justify-center h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-semibold rounded-[var(--radius-sm)] bg-accent text-bg hover:bg-accent-hover active:scale-[0.98] transition-all duration-300"
            >
              {t("ctaPrimary")}
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-semibold rounded-[var(--radius-sm)] border border-border text-fg hover:border-accent hover:text-accent active:scale-[0.98] transition-all duration-300"
            >
              {t("ctaSecondary")}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <div className="relative w-px h-10 bg-border overflow-hidden">
          <motion.div
            className="absolute top-0 w-px bg-accent"
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
            style={{ height: "40%" }}
          />
        </div>
      </motion.div>
    </section>
  );
}