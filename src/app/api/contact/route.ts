import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      nombre,
      apellido,
      email,
      telefono,
      pais,
      metodo,
      serviciosInteres,
      serviciosCotizar,
      descripcion,
    } = body;

    const serviciosCotizarHTML =
      serviciosCotizar && serviciosCotizar.length > 0
        ? serviciosCotizar.map((s: string) => `<li style="margin:4px 0;">${s}</li>`).join("")
        : "<li>Ninguno seleccionado</li>";

    const serviciosInteresList =
      serviciosInteres && serviciosInteres.length > 0
        ? serviciosInteres.join(", ")
        : "Ninguno";

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Nuevo Mensaje - PROWEB Solutions</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#141414;border-radius:16px;overflow:hidden;border:1px solid #2a2a2a;">

          <!-- Header -->
          <tr>
            <td style="background:#C4281C;padding:28px 36px;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:600;letter-spacing:-0.02em;">
                PROWEB Solutions
              </h1>
              <p style="margin:4px 0 0;color:rgba(255,255,255,0.75);font-size:13px;">
                Nuevo mensaje de contacto
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 36px;">

              <!-- Contact info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td width="50%" style="padding:0 8px 0 0;vertical-align:top;">
                    <p style="margin:0 0 4px;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.1em;">Nombre</p>
                    <p style="margin:0;font-size:15px;color:#ffffff;font-weight:500;">${nombre} ${apellido}</p>
                  </td>
                  <td width="50%" style="padding:0 0 0 8px;vertical-align:top;">
                    <p style="margin:0 0 4px;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.1em;">Correo</p>
                    <p style="margin:0;font-size:15px;color:#C4281C;">${email}</p>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td width="50%" style="padding:0 8px 0 0;vertical-align:top;">
                    <p style="margin:0 0 4px;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.1em;">Teléfono</p>
                    <p style="margin:0;font-size:15px;color:#ffffff;">${telefono || "No indicado"}</p>
                  </td>
                  <td width="50%" style="padding:0 0 0 8px;vertical-align:top;">
                    <p style="margin:0 0 4px;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.1em;">País</p>
                    <p style="margin:0;font-size:15px;color:#ffffff;">${pais || "No indicado"}</p>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td width="50%" style="padding:0 8px 0 0;vertical-align:top;">
                    <p style="margin:0 0 4px;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.1em;">Método de contacto</p>
                    <p style="margin:0;font-size:15px;color:#ffffff;">${metodo || "No indicado"}</p>
                  </td>
                  <td width="50%" style="padding:0 0 0 8px;vertical-align:top;">
                    <p style="margin:0 0 4px;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.1em;">Áreas de interés</p>
                    <p style="margin:0;font-size:15px;color:#ffffff;">${serviciosInteresList}</p>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #2a2a2a;margin:24px 0;" />

              <!-- Services to quote -->
              <p style="margin:0 0 8px;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.1em;">Servicios a cotizar</p>
              <ul style="margin:0 0 24px;padding:0 0 0 20px;color:#ffffff;font-size:14px;line-height:1.7;">
                ${serviciosCotizarHTML}
              </ul>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #2a2a2a;margin:24px 0;" />

              <!-- Description -->
              <p style="margin:0 0 8px;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.1em;">Descripción del proyecto</p>
              <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.75);line-height:1.7;background:#0a0a0a;border-radius:10px;padding:16px;border:1px solid #2a2a2a;">
                ${descripcion}
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 36px;border-top:1px solid #2a2a2a;">
              <p style="margin:0;font-size:12px;color:#555;text-align:center;">
                © 2025 PROWEB Solutions · ventas.prowebsolutionscr@gmail.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;
    console.log("API Key loaded:", !!process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "PROWEB Solutions <onboarding@resend.dev>",
      to: ["ventas.prowebsolutionscr@gmail.com"],
      replyTo: email,
      subject: `Nuevo contacto de ${nombre} ${apellido} — PROWEB Solutions`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
