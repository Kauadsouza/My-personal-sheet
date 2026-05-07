"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const locales = ["pt-BR", "en", "es"] as const;
const labels: Record<string, string> = { "pt-BR": "BR", en: "EN", es: "ES" };

// Non-default locales that appear as URL prefixes
const prefixedLocales = ["en", "es"] as const;

export function LocaleSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(next: string) {
    // Strip any existing locale prefix from the current path
    let basePath = pathname;
    for (const locale of prefixedLocales) {
      if (basePath === `/${locale}`) { basePath = "/"; break; }
      if (basePath.startsWith(`/${locale}/`)) { basePath = basePath.slice(locale.length + 1); break; }
    }

    // Build the new URL
    const newPath = next === "pt-BR"
      ? basePath || "/"
      : `/${next}${basePath === "/" ? "" : basePath}`;

    router.push(newPath);
  }

  return (
    <div className="flex items-center gap-0.5" role="group" aria-label="Language selector">
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => switchLocale(locale)}
          aria-current={currentLocale === locale ? "true" : undefined}
          className={cn(
            "px-2 py-1 text-xs font-semibold rounded transition-colors duration-200 uppercase tracking-wider",
            currentLocale === locale ? "text-accent" : "text-fg-muted hover:text-fg"
          )}
        >
          {labels[locale]}
        </button>
      ))}
    </div>
  );
}