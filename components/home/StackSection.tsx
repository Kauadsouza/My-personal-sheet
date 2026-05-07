"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const stack = [
  { name: "TypeScript",   level: 90 },
  { name: "React",        level: 92 },
  { name: "Next.js",      level: 88 },
  { name: "Node.js",      level: 82 },
  { name: "Python",       level: 72 },
  { name: "Java",         level: 75 },
  { name: "Tailwind CSS", level: 95 },
  { name: "HTML & CSS",   level: 96 },
  { name: "Git",          level: 85 },
  { name: "JavaScript",   level: 90 },
  { name: "PostgreSQL",   level: 65 },
  { name: "REST APIs",    level: 80 },
];

function StackCard({ name, level }: { name: string; level: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={cn(
        "p-4 md:p-5 rounded-[var(--radius-md)] border bg-bg cursor-default transition-all duration-300",
        hovered ? "border-accent/60 bg-accent-soft" : "border-border"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className="text-sm font-semibold text-fg mb-3">{name}</p>
      <div className="h-[2px] bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-accent"
          animate={{ width: hovered ? `${level}%` : "0%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export function StackSection() {
  const t = useTranslations("stack");

  return (
    <section className="section border-t border-border bg-bg-elevated" aria-labelledby="stack-heading">
      <div className="container">
        <FadeIn>
          <div className="mb-12 md:mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">{t("title")}</p>
            <h2 id="stack-heading" className="text-4xl md:text-5xl font-bold text-fg tracking-[-0.03em]">
              {t("subtitle")}
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {stack.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.03}>
              <StackCard {...item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}