import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt-BR", "en", "es"],
  defaultLocale: "pt-BR",
  localePrefix: "as-needed",
  localeDetection: false, // always use path/default, ignore Accept-Language header
});