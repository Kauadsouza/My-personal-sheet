import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") ?? "Kauã Diniz Souza";
  const sub = searchParams.get("sub") ?? "Developer & Founder";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "hsl(155, 12%, 5%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Accent circle */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "radial-gradient(circle, hsl(140,45%,55%,0.15) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            fontSize: "13px",
            fontWeight: 700,
            color: "hsl(140,45%,55%)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          kauadsouza.dev
        </div>

        <div
          style={{
            fontSize: title.length > 40 ? "52px" : "68px",
            fontWeight: 700,
            color: "hsl(40,15%,96%)",
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            maxWidth: "900px",
            marginBottom: "24px",
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: "22px",
            color: "hsl(40,8%,65%)",
            letterSpacing: "-0.01em",
          }}
        >
          {sub}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "80px",
            fontSize: "14px",
            color: "hsl(40,8%,45%)",
          }}
        >
          Uberlândia, Brasil · 2026
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}