import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kauã Diniz Souza",
    short_name: "Kauã",
    description: "Developer & Founder — Uberlândia, Brasil",
    start_url: "/",
    display: "standalone",
    background_color: "hsl(155, 12%, 5%)",
    theme_color: "hsl(155, 12%, 5%)",
    icons: [
      { src: "/favicon.ico", sizes: "any" },
    ],
  };
}