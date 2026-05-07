"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg mt-0">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 py-12 md:py-16">

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-fg-muted mb-5">{t("nav")}</p>
            <ul className="flex flex-col gap-3">
              {(["about", "projects", "blog", "contact"] as const).map((k) => (
                <li key={k}>
                  <Link
                    href={k === "about" ? "/sobre" : k === "projects" ? "/projetos" : k === "contact" ? "/contato" : `/${k}`}
                    className="text-sm text-fg-muted hover:text-fg transition-colors duration-200"
                  >
                    {nav(k)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-fg-muted mb-5">{t("projects")}</p>
            <ul className="flex flex-col gap-3">
              {(["null-forge", "the-kaden", "finance-card"] as const).map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/projetos/${slug}`}
                    className="text-sm text-fg-muted hover:text-fg transition-colors duration-200"
                  >
                    {slug.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-fg-muted mb-5">{t("connect")}</p>
            <ul className="flex flex-col gap-3">
              <li><a href="mailto:kauadsouza@gmail.com" className="text-sm text-fg-muted hover:text-accent transition-colors duration-200">Email</a></li>
              <li><a href="https://github.com/Kauadsouza" target="_blank" rel="noopener noreferrer" className="text-sm text-fg-muted hover:text-fg transition-colors duration-200">GitHub</a></li>
              <li><a href="https://linkedin.com/in/kauadsouza" target="_blank" rel="noopener noreferrer" className="text-sm text-fg-muted hover:text-fg transition-colors duration-200">LinkedIn</a></li>
            </ul>
          </div>

          {/* Settings */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-fg-muted mb-5">{t("settings")}</p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs text-fg-muted mb-2">{t("language")}</p>
                <LocaleSwitcher />
              </div>
              <div>
                <p className="text-xs text-fg-muted mb-2">{t("theme")}</p>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-fg-muted">&copy; {year} {t("copyright")}</p>
          <p className="text-xs text-fg-muted/50">{t("builtWith")}</p>
        </div>
      </div>
    </footer>
  );
}