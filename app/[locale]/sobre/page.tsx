import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FadeIn } from "@/components/motion/FadeIn";
import { TextReveal } from "@/components/motion/TextReveal";
import Image from "next/image";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("title") };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aboutPage" });
  const tCommon = await getTranslations({ locale, namespace: "about" });

  const timelineKeys = ["2023", "2024", "2025", "2026", "future"] as const;

  return (
    <article>
      {/* Hero */}
      <section className="page-top border-b border-border">
        <div className="container max-w-4xl">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              {tCommon("title")}
            </p>
          </FadeIn>
          <h1 className="text-display mb-6">
            <TextReveal text={t("headline")} delay={0.1} stagger={0.05} />
          </h1>
          <FadeIn delay={0.4}>
            <p className="text-lg md:text-xl text-fg-muted max-w-2xl tracking-[-0.01em]">
              {t("subHeadline")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Letter */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-[300px_1fr] gap-12 lg:gap-20 items-start">
            {/* Photo + quote */}
            <FadeIn direction="right">
              <div className="md:sticky md:top-24">
                <div className="relative aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden bg-bg-elevated">
                  <Image
                    src="/images/kaua.jpg"
                    alt="Kauã Diniz Souza"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <blockquote className="mt-6 border-l-2 border-accent pl-5">
                  <p className="text-sm italic text-fg-muted leading-relaxed">
                    &ldquo;{t("quote")}&rdquo;
                  </p>
                </blockquote>
              </div>
            </FadeIn>

            {/* Text */}
            <div className="prose">
              <FadeIn delay={0.05}><p>{t("letter.p1")}</p></FadeIn>
              <FadeIn delay={0.1}><p>{t("letter.p2")}</p></FadeIn>
              <FadeIn delay={0.15}><p>{t("letter.p3")}</p></FadeIn>
              <FadeIn delay={0.2}><p>{t("letter.p4")}</p></FadeIn>
              <FadeIn delay={0.25}><p>{t("letter.p5")}</p></FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-bg-elevated border-y border-border">
        <div className="container">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-fg mb-14 tracking-[-0.03em]">
              {t("timeline.title")}
            </h2>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-border" aria-hidden="true" />
            <div className="flex flex-col gap-10 md:gap-14">
              {timelineKeys.map((key, i) => (
                <FadeIn key={key} delay={i * 0.08}>
                  <div className={`relative grid md:grid-cols-2 gap-6 md:gap-8 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2 md:[&>*:last-child]:col-start-1 md:[&>*:last-child]:row-start-1"}`}>
                    <div className="pl-8 md:pl-0 md:text-right">
                      <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                        {t(`timeline.${key}.year`)}
                      </span>
                      <h3 className="text-lg font-bold text-fg mt-1 tracking-[-0.02em]">
                        {t(`timeline.${key}.title`)}
                      </h3>
                    </div>
                    <div className="pl-8 md:pl-10">
                      <div className="absolute left-0 md:left-1/2 top-1.5 w-3 h-3 rounded-full bg-accent md:-translate-x-1/2 border-2 border-bg" />
                      <p className="text-sm text-fg-muted leading-relaxed">
                        {t(`timeline.${key}.desc`)}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {(["discipline", "vision", "impact"] as const).map((key, i) => (
              <FadeIn key={key} delay={i * 0.08}>
                <div className="p-6 md:p-8 rounded-[var(--radius-lg)] border border-border bg-bg-elevated">
                  <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-accent-soft border border-accent/20 flex items-center justify-center mb-4">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-fg mb-2 tracking-[-0.02em]">
                    {tCommon(`values.${key}.title`)}
                  </h3>
                  <p className="text-sm text-fg-muted leading-relaxed">
                    {tCommon(`values.${key}.desc`)}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}