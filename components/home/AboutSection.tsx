"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section className="section border-t border-border" aria-labelledby="about-heading">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Photo */}
          <FadeIn direction="right">
            <div className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden bg-bg-elevated max-w-sm mx-auto md:mx-0">
              <Image
                src="/images/kaua.jpg"
                alt="Kauã Diniz Souza"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent" />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn direction="left" delay={0.15}>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              {t("title")}
            </p>
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl font-bold text-fg mb-6 tracking-[-0.03em] leading-[1.05]"
            >
              Developer.
              <br />Founder.
              <br /><span className="text-fg-muted">Builder.</span>
            </h2>

            <p className="text-fg-muted leading-relaxed mb-4">{t("bio1")}</p>
            <p className="text-fg-muted leading-relaxed mb-8">{t("bio2")}</p>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border mb-8">
              {(["discipline", "vision", "impact"] as const).map((key) => (
                <div key={key}>
                  <p className="text-sm font-semibold text-fg mb-1">{t(`values.${key}.title`)}</p>
                  <p className="text-xs text-fg-muted leading-relaxed">{t(`values.${key}.desc`)}</p>
                </div>
              ))}
            </div>

            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors group"
            >
              {t("readMore")}
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}