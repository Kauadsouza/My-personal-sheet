import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactForm } from "./ContactForm";
import { FadeIn } from "@/components/motion/FadeIn";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title") };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <div className="page-top">
      <div className="container">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">

          {/* Left */}
          <FadeIn direction="right">
            <div className="md:sticky md:top-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                {t("title")}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-fg mb-8 tracking-[-0.03em] leading-[1.1]">
                {t("subtitle")}
              </h1>

              <div className="flex flex-col gap-5">
                {[
                  { label: "Email", href: "mailto:kauadsouza@gmail.com", text: "kauadsouza@gmail.com" },
                  { label: "GitHub", href: "https://github.com/Kauadsouza", text: "github.com/Kauadsouza", external: true },
                  { label: "LinkedIn", href: "https://linkedin.com/in/kauadsouza", text: "linkedin.com/in/kauadsouza", external: true },
                ].map(({ label, href, text, external }) => (
                  <div key={label}>
                    <p className="text-xs text-fg-muted uppercase tracking-widest mb-1">{label}</p>
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-sm text-fg hover:text-accent transition-colors"
                    >
                      {text}
                    </a>
                  </div>
                ))}
                <div>
                  <p className="text-xs text-fg-muted uppercase tracking-widest mb-1">Location</p>
                  <p className="text-sm text-fg">{t("location")}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — Form */}
          <FadeIn direction="left" delay={0.15}>
            <ContactForm locale={locale} />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}