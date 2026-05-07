import * as React from "react";

type ContactEmailProps = {
  name: string;
  email: string;
  company?: string;
  type: string;
  budget?: string;
  message: string;
};

export function ContactEmail({ name, email, company, type, budget, message }: ContactEmailProps) {
  const row = (label: string, value: string) => (
    <tr key={label}>
      <td
        style={{
          padding: "10px 16px",
          fontWeight: 600,
          color: "#6b7280",
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          width: "140px",
          verticalAlign: "top",
          borderBottom: "1px solid #f3f4f6",
        }}
      >
        {label}
      </td>
      <td
        style={{
          padding: "10px 16px",
          color: "#111827",
          fontSize: "14px",
          verticalAlign: "top",
          borderBottom: "1px solid #f3f4f6",
        }}
      >
        {value}
      </td>
    </tr>
  );

  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Novo contato do site</title>
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: "#f9fafb", fontFamily: "system-ui, sans-serif" }}>
        <table width="100%" cellPadding={0} cellSpacing={0} style={{ backgroundColor: "#f9fafb", padding: "40px 20px" }}>
          <tbody>
            <tr>
              <td align="center">
                <table width="600" cellPadding={0} cellSpacing={0} style={{ maxWidth: "600px", width: "100%" }}>
                  <tbody>
                    {/* Header */}
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#0d2b1f",
                          padding: "32px 40px",
                          borderRadius: "12px 12px 0 0",
                        }}
                      >
                        <p style={{ margin: 0, color: "#4ade80", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                          kauadsouza.dev
                        </p>
                        <h1 style={{ margin: "8px 0 0", color: "#f9fafb", fontSize: "22px", fontWeight: 700, letterSpacing: "-0.02em" }}>
                          Novo contato: {type}
                        </h1>
                      </td>
                    </tr>
                    {/* Body */}
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#ffffff",
                          padding: "0",
                          borderRadius: "0 0 12px 12px",
                          overflow: "hidden",
                        }}
                      >
                        <table width="100%" cellPadding={0} cellSpacing={0}>
                          <tbody>
                            {row("De", name)}
                            {row("Email", email)}
                            {company ? row("Empresa", company) : null}
                            {row("Tipo", type)}
                            {budget ? row("Orçamento", budget) : null}
                            <tr>
                              <td
                                style={{
                                  padding: "16px 16px 8px",
                                  fontWeight: 600,
                                  color: "#6b7280",
                                  fontSize: "12px",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.05em",
                                }}
                                colSpan={2}
                              >
                                Mensagem
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  padding: "0 16px 24px",
                                  color: "#111827",
                                  fontSize: "15px",
                                  lineHeight: "1.6",
                                }}
                                colSpan={2}
                              >
                                {message}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    {/* Reply CTA */}
                    <tr>
                      <td style={{ paddingTop: "24px", textAlign: "center" }}>
                        <a
                          href={`mailto:${email}?subject=Re: Seu contato — Kauã Diniz`}
                          style={{
                            display: "inline-block",
                            backgroundColor: "#166534",
                            color: "#ffffff",
                            padding: "12px 28px",
                            borderRadius: "8px",
                            fontWeight: 600,
                            fontSize: "14px",
                            textDecoration: "none",
                          }}
                        >
                          Responder para {name}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingTop: "24px", textAlign: "center" }}>
                        <p style={{ margin: 0, color: "#9ca3af", fontSize: "12px" }}>
                          Este email foi enviado pelo formulário de contato do seu site.
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
