import { ContactInformation, db } from "astro:db";
import { defineAction } from "astro:actions";
import { z } from 'astro:schema';
import { Resend } from "resend";
import { WebClient } from '@slack/web-api';
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

const getSlackNotificationBlocks = (name: string, email: string, message: string, lang: 'en' | 'es') => {
  return [
    {
      "type": "section",
      "text": {
        "type": "plain_text",
        "emoji": true,
        "text": "Nueva solicitud de contacto desde luisefarfan.com"
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": `*<mailto:${email}|${name}>*\nMensaje: ${message}\nEmail: ${email}\nLenguaje: ${lang}`
      }
    },
    {
      "type": "divider"
    }
  ]
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

      const slackClient = new WebClient(import.meta.env.SLACK_TOKEN);

      const notificationPromise = slackClient.chat.postMessage({
        blocks: getSlackNotificationBlocks(name, email, message, lang),
        channel: '#notificaciones-portafolio',
        text: `Nueva solicitud de contacto desde luisefarfan.com: ${name} - ${email}`
      })

      const [dbResponse, emailResponse, notificationResponse] = await Promise.allSettled([dbPromise, emailPromise, notificationPromise])

      if (notificationResponse.status === 'fulfilled') {
        console.log('Notification sent to slack successfully:', notificationResponse.value)
      } else {
        console.error('Error sending notification to slack:', notificationResponse.reason)
      }

      if (dbResponse.status === 'fulfilled') {
        console.log('Contact request stored in database with ID:', dbResponse.value.lastInsertRowid)
      } else {
        console.error('Error storing contact request in database:', dbResponse.reason)
      }

      if (emailResponse.status === 'fulfilled') {
        const { data, error } = emailResponse.value

        if (error) {
          console.error("Resend error sending email:", error);
        }

        console.log('Email sent successfully:', data)
      } else {
        console.error('Error sending email:', emailResponse.reason)
      }

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
