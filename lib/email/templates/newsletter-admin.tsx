import * as React from "react";

type NewsletterAdminEmailProps = {
  email: string;
  date: string;
  ip?: string;
};

export function NewsletterAdminEmail({ email, date, ip }: NewsletterAdminEmailProps) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <title>Novo inscrito na newsletter</title>
      </head>
      <body style={{ margin: 0, padding: "40px 20px", backgroundColor: "#f9fafb", fontFamily: "system-ui, sans-serif" }}>
        <table width="100%" cellPadding={0} cellSpacing={0}>
          <tbody>
            <tr>
              <td align="center">
                <table width="500" cellPadding={0} cellSpacing={0} style={{ maxWidth: "500px", width: "100%", backgroundColor: "#ffffff", borderRadius: "12px", overflow: "hidden" }}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: "#0d2b1f", padding: "24px 32px" }}>
                        <p style={{ margin: 0, color: "#4ade80", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                          newsletter
                        </p>
                        <h1 style={{ margin: "6px 0 0", color: "#f9fafb", fontSize: "20px", fontWeight: 700 }}>
                          Novo inscrito
                        </h1>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "24px 32px" }}>
                        <p style={{ margin: "0 0 8px", color: "#374151", fontSize: "14px" }}>
                          <strong>Email:</strong> {email}
                        </p>
                        <p style={{ margin: "0 0 8px", color: "#374151", fontSize: "14px" }}>
                          <strong>Data:</strong> {date}
                        </p>
                        {ip && (
                          <p style={{ margin: 0, color: "#9ca3af", fontSize: "12px" }}>
                            IP: {ip}
                          </p>
                        )}
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
