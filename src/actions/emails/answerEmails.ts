export const getEnAnswerEmail = (name: string, message: string) => `<body
  style="margin: 0; padding: 0; background-color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6;">
  <!-- Wrapper Table -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #0f172a;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <!-- Main Container -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0"
          style="max-width: 600px; background-color: #1e293b; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2dd4bf, #14b8a6); padding: 30px 40px; text-align: center;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center">
                    <!-- Logo/Brand -->
                    <h1
                      style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);">
                      Luis Farfan
                    </h1>
                    <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px; font-weight: 500;">
                      Tech Lead &amp; Software Engineer
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td>
                    <!-- Greeting -->
                    <p style="margin: 0 0 24px 0; color: #f8fafc; font-size: 18px; font-weight: 500;">
                      Hi ${name},
                    </p>

                    <!-- Thank you message -->
                    <p style="margin: 0 0 24px 0; color: #cbd5e1; font-size: 16px; line-height: 1.6;">
                      Thank you for reaching out! Here's a copy of your message:
                    </p>

                    <!-- Message Quote -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                      style="margin: 24px 0;">
                      <tr>
                        <td
                          style="background-color: #334155; border-left: 4px solid #2dd4bf; padding: 20px 24px; border-radius: 0 8px 8px 0;">
                          <p style="margin: 0; color: #e2e8f0; font-size: 15px; line-height: 1.6; font-style: italic;">
                            "${message}"
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Response message -->
                    <p style="margin: 24px 0; color: #cbd5e1; font-size: 16px; line-height: 1.6;">
                      I will get back to you as soon as possible.
                    </p>

                    <!-- Signature -->
                    <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #475569;">
                      <p style="margin: 0; color: #f8fafc; font-size: 16px; font-weight: 500;">
                        Best regards,<br>
                        <span style="color: #2dd4bf; font-weight: 600;">Luis Enrique Farfan Prado</span>
                      </p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td
              style="background-color: #0f172a; padding: 30px 40px; text-align: center; border-top: 1px solid #334155;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center">
                    <p style="margin: 0 0 16px 0; color: #94a3b8; font-size: 14px;">
                      <a href="https://www.linkedin.com/in/luisefarfan/" style="color: #2dd4bf; text-decoration: none;">
                        LinkedIn
                      </a><span style="margin: 0 8px; color: #64748b;">|</span>
                      <a href="https://github.com/luisefarfan" style="color: #2dd4bf; text-decoration: none;">
                        GitHub
                      </a>
                    </p>

                    <!-- Contact Info -->
                    <p style="margin: 0 0 16px 0; color: #94a3b8; font-size: 14px;">
                      <a href="https://wa.link/b3lr25" style="color: #2dd4bf; text-decoration: none;">
                        WhatsApp
                      </a><span style="margin: 0 8px; color: #64748b;">|</span>
                      <a href="tel:+50242980332" style="color: #2dd4bf; text-decoration: none;">+502 4298 0332</a>
                      <span style="margin: 0 8px; color: #64748b;">|</span>
                      <a href="mailto:luisefarfan.dev@gmail.com"
                        style="color: #2dd4bf; text-decoration: none;">luisefarfan.dev@gmail.com</a>
                    </p>

                    <!-- Footer Text -->
                    <p style="margin: 0; color: #64748b; font-size: 12px;">
                      This is an automated response. Please do not reply to this email.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>`

export const getEsAnswerEmail = (name: string, message: string) => `<body
  style="margin: 0; padding: 0; background-color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6;">
  <!-- Wrapper Table -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #0f172a;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <!-- Main Container -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0"
          style="max-width: 600px; background-color: #1e293b; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2dd4bf, #14b8a6); padding: 30px 40px; text-align: center;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center">
                    <!-- Logo/Brand -->
                    <h1
                      style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);">
                      Luis Farfán
                    </h1>
                    <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px; font-weight: 500;">
                      Líder Técnico &amp; Ingeniero de Software
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td>
                    <!-- Greeting -->
                    <p style="margin: 0 0 24px 0; color: #f8fafc; font-size: 18px; font-weight: 500;">
                      Hola ${name},
                    </p>

                    <!-- Thank you message -->
                    <p style="margin: 0 0 24px 0; color: #cbd5e1; font-size: 16px; line-height: 1.6;">
                      ¡Gracias por contactarme! Aquí tienes una copia de tu mensaje:
                    </p>

                    <!-- Message Quote -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                      style="margin: 24px 0;">
                      <tr>
                        <td
                          style="background-color: #334155; border-left: 4px solid #2dd4bf; padding: 20px 24px; border-radius: 0 8px 8px 0;">
                          <p style="margin: 0; color: #e2e8f0; font-size: 15px; line-height: 1.6; font-style: italic;">
                            "${message}"
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Response message -->
                    <p style="margin: 24px 0; color: #cbd5e1; font-size: 16px; line-height: 1.6;">
                      Me pondré en contacto contigo lo antes posible.
                    </p>

                    <!-- Signature -->
                    <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #475569;">
                      <p style="margin: 0; color: #f8fafc; font-size: 16px; font-weight: 500;">
                        Saludos cordiales,<br>
                        <span style="color: #2dd4bf; font-weight: 600;">Luis Enrique Farfán Prado</span>
                      </p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td
              style="background-color: #0f172a; padding: 30px 40px; text-align: center; border-top: 1px solid #334155;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center">
                    <p style="margin: 0 0 16px 0; color: #94a3b8; font-size: 14px;">
                      <a href="https://www.linkedin.com/in/luisefarfan/" style="color: #2dd4bf; text-decoration: none;">
                        LinkedIn
                      </a><span style="margin: 0 8px; color: #64748b;">|</span>
                      <a href="https://github.com/luisefarfan" style="color: #2dd4bf; text-decoration: none;">
                        GitHub
                      </a>
                    </p>

                    <!-- Contact Info -->
                    <p style="margin: 0 0 16px 0; color: #94a3b8; font-size: 14px;">
                      <a href="https://wa.link/b3lr25" style="color: #2dd4bf; text-decoration: none;">
                        WhatsApp
                      </a><span style="margin: 0 8px; color: #64748b;">|</span>
                      <a href="tel:+50242980332" style="color: #2dd4bf; text-decoration: none;">+502 4298 0332</a>
                      <span style="margin: 0 8px; color: #64748b;">|</span>
                      <a href="mailto:luisefarfan.dev@gmail.com"
                        style="color: #2dd4bf; text-decoration: none;">luisefarfan.dev@gmail.com</a>
                    </p>

                    <!-- Footer Text -->
                    <p style="margin: 0; color: #64748b; font-size: 12px;">
                      Esta es una respuesta automática. Por favor, no respondas a este correo electrónico.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>`
