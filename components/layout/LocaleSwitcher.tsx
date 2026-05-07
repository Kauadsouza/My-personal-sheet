"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const labels: Record<string, string> = {
  "pt-BR": "BR",
  en: "EN",
  es: "ES",
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(next: string) {
    const segments = pathname.split("/");
    const current = routing.locales.find((l) => segments[1] === l);
    if (current) {
      segments[1] = next === routing.defaultLocale ? "" : next;
    } else {
      if (next !== routing.defaultLocale) {
        segments.splice(1, 0, next);
      }
    }
    const newPath = segments.join("/").replace(/^\/\//, "/") || "/";
    router.push(newPath);
  }

  return (
    <div className="flex items-center gap-0.5" role="group" aria-label="Language selector">
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          aria-current={locale === l ? "true" : undefined}
          className={cn(
            "px-2 py-1 text-xs font-semibold rounded transition-colors duration-200",
            "uppercase tracking-wider",
            locale === l
              ? "text-accent"
              : "text-fg-muted hover:text-fg"
          )}
          style={{ letterSpacing: "0.06em" }}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}