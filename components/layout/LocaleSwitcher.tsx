"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const locales = ["pt-BR", "en", "es"] as const;
const labels: Record<string, string> = { "pt-BR": "BR", en: "EN", es: "ES" };

export function LocaleSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(next: (typeof locales)[number]) {
    router.replace(pathname, { locale: next });
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