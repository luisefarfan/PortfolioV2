import { defineAction } from "astro:actions";
import { z } from 'astro:schema';
import { Resend } from "resend";
import { createAssessment } from "@lib/reCaptcha";
import { REQUEST_CONTACT_ACTION } from "@constants/index";

const getEmailMessage = (name: string, message: string, lang: 'en' | 'es'): string => {
  const emailMessages = {
    es: `
      <p>Hola ${name},</p>
      <p>Gracias por ponerte en contacto! Aquí tienes una copia de tu mensaje:</p>
      <blockquote>${message}</blockquote>
      <p>Me pondré en contacto contigo lo antes posible.</p>
    <p>Saludos,<br />Luis Enrique Farfán</p>
  `,
    en: `
    <p>Hi ${name},</p>
    <p>Thank you for reaching out! Here's a copy of your message:</p>
    <blockquote>${message}</blockquote>
    <p>I will get back to you as soon as possible.</p>
    <p>Best regards,<br />Luis Enrique Farfán</p>
  `
  }

  return emailMessages[lang];
}

export const sendEmailAction = defineAction({
  input: z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(1, "Message is required"),
    lang: z.literal('es').or(z.literal('en')),
    'g-recaptcha-response': z.string().min(1, "reCAPTCHA token is required")
  }),
  handler: async (input) => {
    const { name, email, message, lang, 'g-recaptcha-response': recaptchaResponse } = input;

    const { valid } = await createAssessment({
      token: recaptchaResponse,
      recaptchaAction: REQUEST_CONTACT_ACTION,
    });

    if (!valid) {
      return { success: false, message: 'Invalid reCAPTCHA' };
    }

    try {
      const resendClient = new Resend(import.meta.env.RESEND_API_KEY);

      const emailMessage = getEmailMessage(name, message, lang);
      const { data, error } = await resendClient.emails.send({
        from: 'Luis Enrique Farfán <dev@luisefarfan.com>',
        to: email,
        subject: 'Thank you for contacting me',
        html: emailMessage
      })

      if (error) {
        console.error("Resend error sending email:", error);
        throw new Error(error.message);
      }

      console.log("Email sent successfully:", data);
      return {
        success: true,
        message: "Email sent successfully"
      }
    }
    catch (error) {
      console.error("Unexpected error sending email:", error);
      throw new Error("Failed to send email");
    }
  }
})
