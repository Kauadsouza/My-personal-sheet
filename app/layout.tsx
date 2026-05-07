import type { ReactNode } from "react";

// Root pass-through — actual <html>/<body> live in app/[locale]/layout.tsx.
export default function RootLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}