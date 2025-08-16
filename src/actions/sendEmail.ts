import { ContactInformation, db } from "astro:db";
import { defineAction } from "astro:actions";
import { z } from 'astro:schema';
import { Resend } from "resend";
import { createAssessment } from "@lib/reCaptcha";
import { REQUEST_CONTACT_ACTION } from "@constants/index";
import { getEnAnswerEmail, getEsAnswerEmail } from "./emails/answerEmails";

const errorMessages = {
  en: {
    recaptchaInvalid: "Invalid reCAPTCHA",
  },
  es: {
    recaptchaInvalid: "reCAPTCHA no válido",
  }
}

const getEmailMessage = (name: string, message: string, lang: 'en' | 'es'): string => {
  const emailMessages = {
    es: getEsAnswerEmail(name, message),
    en: getEnAnswerEmail(name, message)
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
      return { success: false, message: errorMessages[lang].recaptchaInvalid };
    }

    try {
      const resendClient = new Resend(import.meta.env.RESEND_API_KEY);

      const emailMessage = getEmailMessage(name, message, lang);

      const dbPromise = db.insert(ContactInformation).values({
        name,
        email,
        message,
        lang
      })

      const emailPromise = resendClient.emails.send({
        from: lang === 'en' ? 'Luis Enrique Farfán Prado<info@luisefarfan.com>' : 'Luis Enrique Farfan Prado<info@luisefarfan.com>',
        to: email,
        subject: lang === 'es' ? `Gracias por contactarme, ${name}! | Luis Farfán` : `Thank you for reaching out, ${name}! | Luis Farfan`,
        html: emailMessage
      })

      const notificationPromise = fetch(import.meta.env.N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Basic ${btoa(`${import.meta.env.N8N_WEBHOOK_USER}:${import.meta.env.N8N_WEBHOOK_PASSWORD}`)}`
        },
        body: JSON.stringify({
          email: email,
          name: name,
          message: message,
          lang: lang
        })
      })

      const [dbResponse, emailResponse, notificationResponse] = await Promise.all([dbPromise, emailPromise, notificationPromise])

      if (notificationResponse.status !== 200 || !notificationResponse.ok) {
        console.error('Error sending notification to n8n:', notificationResponse.statusText)
      }

      console.log('Contact request stored in database with ID:', dbResponse.toJSON().lastInsertRowid)

      const { data, error } = emailResponse

      if (error) {
        console.error("Resend error sending email:", error);
      }

      console.log("Email sent successfully:", data);

      return {
        success: true,
        message: lang === 'en' ? 'Thank you for contacting me!' : '¡Gracias por contactarme!'
      }
    }
    catch (error) {
      console.error("Unexpected error storing contact request:", error);
      throw new Error("Something went wrong");
    }
  }
})
