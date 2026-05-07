import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HeroSection } from "@/components/home/HeroSection";
import { MarqueeX } from "@/components/motion/MarqueeX";
import { AboutSection } from "@/components/home/AboutSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { GitHubSection } from "@/components/home/GitHubSection";
import { StackSection } from "@/components/home/StackSection";
import { BlogSection } from "@/components/home/BlogSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "Python", "Java",
  "Next.js", "React", "Tailwind CSS", "Node.js", "Git", "PostgreSQL",
];

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  return {
    title: "Kauã Diniz Souza — Developer & Founder",
    description: t("sub"),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <HeroSection />

      {/* Skills marquee strip */}
      <div className="py-5 border-y border-border overflow-hidden bg-bg-elevated">
        <MarqueeX items={skills} speed={45} />
      </div>

      <AboutSection />
      <ProjectsSection />
      <GitHubSection locale={locale} />
      <StackSection />
      <BlogSection locale={locale} />
      <NewsletterSection />
    </>
  );
}