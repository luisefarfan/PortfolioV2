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
                    <div
                      style="display: inline-block; background-color: rgba(15, 23, 42, 0.2); padding: 12px 20px; border-radius: 8px; margin-bottom: 16px;">
                      <span
                        style="color: #ffffff; font-size: 24px; font-weight: bold; font-family: 'Courier New', monospace;">
                        <svg width="64" viewBox="0 0 64 64">
                          <path d="M18 16L8 16C6.89543 16 6 16.8954 6 18L6 46C6 47.1046 6.89543 48 8 48L18 48"
                            stroke="#ffffff" stroke-width="3" fill="none" stroke-linecap="round"></path>

                          <path d="M46 16L56 16C57.1046 16 58 16.8954 58 18L58 46C58 47.1046 57.1046 48 56 48L46 48"
                            stroke="#ffffff" stroke-width="3" fill="none" stroke-linecap="round"></path>

                          <text x="32" y="38" font-family="JetBrains Mono, monospace" font-size="16" font-weight="700"
                            text-anchor="middle" fill="#ffffff">LF</text>
                        </svg>
                      </span>
                    </div>
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
                    <!-- Social Links -->
                    <div style="margin-bottom: 20px;">
                      <a href="https://www.linkedin.com/in/luisefarfan/"
                        style="display: inline-block; margin: 0 8px; padding: 10px; background-color: #334155; border-radius: 8px; text-decoration: none; transition: background-color 0.2s;">
                        <svg width="20" height="20" fill="#2dd4bf" viewBox="0 0 24 24" style="display: block;">
                          <path
                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
                          </path>
                        </svg>
                      </a>
                      <a href="https://github.com/luisefarfan"
                        style="display: inline-block; margin: 0 8px; padding: 10px; background-color: #334155; border-radius: 8px; text-decoration: none;">
                        <svg width="20" height="20" fill="#2dd4bf" viewBox="0 0 24 24" style="display: block;">
                          <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
                          </path>
                        </svg>
                      </a>
                      <a href="mailto:luisefarfan.dev@gmail.com"
                        style="display: inline-block; margin: 0 8px; padding: 10px; background-color: #334155; border-radius: 8px; text-decoration: none;">
                        <svg width="20" height="20" fill="none" stroke="#2dd4bf" viewBox="0 0 24 24"
                          style="display: block;">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                          </path>
                        </svg>
                      </a>
                      <a href="https://wa.link/ohwjr9"
                        style="display: inline-block; margin: 0 8px; padding: 10px; background-color: #334155; border-radius: 8px; text-decoration: none;">
                        <svg fill="#2dd4bf" id="WhatsApp" viewBox="0 0 30.667 30.667" width="20" height="20"
                          style="display: block;">
                          <g id="WhatsApp_bgCarrier" stroke-width="0"></g>
                          <g id="WhatsApp_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                          <g id="WhatsApp_iconCarrier">
                            <g>
                              <path
                                d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z">
                              </path>
                            </g>
                          </g>
                        </svg>
                      </a>
                    </div>

                    <!-- Contact Info -->
                    <p style="margin: 0 0 16px 0; color: #94a3b8; font-size: 14px;">
                      <a href="mailto:luisefarfan.dev@gmail.com"
                        style="color: #2dd4bf; text-decoration: none;">luisefarfan.dev@gmail.com</a>
                      <span style="margin: 0 8px; color: #64748b;">|</span>
                      <a href="tel:+50242980332" style="color: #2dd4bf; text-decoration: none;">+502 4298 0332</a>
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
                    <div
                      style="display: inline-block; background-color: rgba(15, 23, 42, 0.2); padding: 12px 20px; border-radius: 8px; margin-bottom: 16px;">
                      <span
                        style="color: #ffffff; font-size: 24px; font-weight: bold; font-family: 'Courier New', monospace;">
                        <svg width="64" viewBox="0 0 64 64">
                          <path d="M18 16L8 16C6.89543 16 6 16.8954 6 18L6 46C6 47.1046 6.89543 48 8 48L18 48"
                            stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"></path>

                          <path d="M46 16L56 16C57.1046 16 58 16.8954 58 18L58 46C58 47.1046 57.1046 48 56 48L46 48"
                            stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"></path>

                          <text x="32" y="38" font-family="JetBrains Mono, monospace" font-size="16" font-weight="700"
                            text-anchor="middle" fill="currentColor">LF</text>
                        </svg>
                      </span>
                    </div>
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
                    <!-- Social Links -->
                    <div style="margin-bottom: 20px;">
                      <a href="https://www.linkedin.com/in/luisefarfan/"
                        style="display: inline-block; margin: 0 8px; padding: 10px; background-color: #334155; border-radius: 8px; text-decoration: none; transition: background-color 0.2s;">
                        <svg width="20" height="20" fill="#2dd4bf" viewBox="0 0 24 24" style="display: block;">
                          <path
                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
                          </path>
                        </svg>
                      </a>
                      <a href="https://github.com/luisefarfan"
                        style="display: inline-block; margin: 0 8px; padding: 10px; background-color: #334155; border-radius: 8px; text-decoration: none;">
                        <svg width="20" height="20" fill="#2dd4bf" viewBox="0 0 24 24" style="display: block;">
                          <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
                          </path>
                        </svg>
                      </a>
                      <a href="mailto:luisefarfan.dev@gmail.com"
                        style="display: inline-block; margin: 0 8px; padding: 10px; background-color: #334155; border-radius: 8px; text-decoration: none;">
                        <svg width="20" height="20" fill="none" stroke="#2dd4bf" viewBox="0 0 24 24"
                          style="display: block;">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                          </path>
                        </svg>
                      </a>
                      <a href="https://wa.link/b3lr25"
                        style="display: inline-block; margin: 0 8px; padding: 10px; background-color: #334155; border-radius: 8px; text-decoration: none;">
                        <svg fill="#2dd4bf" id="WhatsApp" viewBox="0 0 30.667 30.667" width="20" height="20"
                          style="display: block;">
                          <g id="WhatsApp_bgCarrier" stroke-width="0"></g>
                          <g id="WhatsApp_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                          <g id="WhatsApp_iconCarrier">
                            <g>
                              <path
                                d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z">
                              </path>
                            </g>
                          </g>
                        </svg>
                      </a>
                    </div>

                    <!-- Contact Info -->
                    <p style="margin: 0 0 16px 0; color: #94a3b8; font-size: 14px;">
                      <a href="mailto:luisefarfan.dev@gmail.com"
                        style="color: #2dd4bf; text-decoration: none;">luisefarfan.dev@gmail.com</a>
                      <span style="margin: 0 8px; color: #64748b;">|</span>
                      <a href="tel:+50242980332" style="color: #2dd4bf; text-decoration: none;">+502 4298 0332</a>
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
