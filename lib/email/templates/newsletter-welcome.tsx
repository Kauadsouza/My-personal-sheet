import * as React from "react";

type NewsletterWelcomeEmailProps = {
  locale?: string;
};

const content = {
  "pt-BR": {
    subject: "Bem-vindo(a) ao caminho — Kauã",
    greeting: "Olá,",
    p1: "Obrigado por se inscrever. Aqui não vai ter spam, autopromoção barata ou conteúdo genérico de IA.",
    p2: "Vou compartilhar aprendizados reais sobre código, produto, construção de carreira e a jornada de um brasileiro de 18 anos tentando chegar à Ivy League.",
    p3: "Frequência: quando eu tiver algo que valha sua atenção. Não antes.",
    sign: "Até breve,",
    name: "Kauã",
  },
  en: {
    subject: "Welcome to the journey — Kauã",
    greeting: "Hi,",
    p1: "Thank you for subscribing. There will be no spam, cheap self-promotion, or generic AI content here.",
    p2: "I'll share real insights about code, product, career building, and the journey of an 18-year-old Brazilian trying to reach the Ivy League.",
    p3: "Frequency: when I have something worth your attention. Not before.",
    sign: "Talk soon,",
    name: "Kauã",
  },
  es: {
    subject: "Bienvenido(a) al camino — Kauã",
    greeting: "Hola,",
    p1: "Gracias por suscribirte. Aquí no habrá spam, autopromoción barata ni contenido genérico de IA.",
    p2: "Compartiré aprendizajes reales sobre código, producto, construcción de carrera y el camino de un brasileño de 18 años que busca llegar a las Ivy League.",
    p3: "Frecuencia: cuando tenga algo que valga tu atención. No antes.",
    sign: "Hasta pronto,",
    name: "Kauã",
  },
};

export function NewsletterWelcomeEmail({ locale = "pt-BR" }: NewsletterWelcomeEmailProps) {
  const t = content[locale as keyof typeof content] ?? content["pt-BR"];

  return (
    <html lang={locale}>
      <head>
        <meta charSet="UTF-8" />
        <title>{t.subject}</title>
      </head>
      <body style={{ margin: 0, padding: "40px 20px", backgroundColor: "#f9fafb", fontFamily: "Georgia, serif" }}>
        <table width="100%" cellPadding={0} cellSpacing={0}>
          <tbody>
            <tr>
              <td align="center">
                <table width="560" cellPadding={0} cellSpacing={0} style={{ maxWidth: "560px", width: "100%" }}>
                  <tbody>
                    <tr>
                      <td style={{ paddingBottom: "32px" }}>
                        <p style={{ margin: 0, color: "#166534", fontFamily: "system-ui, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                          kauadsouza.dev
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: "#ffffff", padding: "40px 48px", borderRadius: "12px", border: "1px solid #e5e7eb" }}>
                        <p style={{ margin: "0 0 20px", color: "#374151", fontSize: "16px", lineHeight: 1.7 }}>
                          {t.greeting}
                        </p>
                        <p style={{ margin: "0 0 16px", color: "#374151", fontSize: "16px", lineHeight: 1.7 }}>
                          {t.p1}
                        </p>
                        <p style={{ margin: "0 0 16px", color: "#374151", fontSize: "16px", lineHeight: 1.7 }}>
                          {t.p2}
                        </p>
                        <p style={{ margin: "0 0 32px", color: "#374151", fontSize: "16px", lineHeight: 1.7 }}>
                          {t.p3}
                        </p>
                        <p style={{ margin: "0 0 4px", color: "#374151", fontSize: "16px" }}>
                          {t.sign}
                        </p>
                        <p style={{ margin: 0, color: "#111827", fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em" }}>
                          {t.name}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingTop: "24px", textAlign: "center" }}>
                        <p style={{ margin: 0, color: "#9ca3af", fontFamily: "system-ui, sans-serif", fontSize: "11px" }}>
                          Uberlândia, MG — Brasil
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}
