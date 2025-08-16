interface ImportMetaEnv {
  readonly RESEND_API_KEY: string;

  readonly PUBLIC_RECAPTCHA_SITE_KEY: string;
  readonly GCP_PROJECT_ID: string;
  readonly RECAPTCHA_SERVICE_ACCOUNT_PRIVATE_KEY_ID: string;
  readonly RECAPTCHA_SERVICE_ACCOUNT_PRIVATE_KEY: string;
  readonly RECAPTCHA_SERVICE_ACCOUNT_EMAIL: string;
  readonly RECAPTCHA_SERVICE_ACCOUNT_CLIENT_ID: string;
  readonly ASTRO_DB_REMOTE_URL: string;
  readonly ASTRO_DB_APP_TOKEN: string;
  readonly N8N_WEBHOOK_USER: string;
  readonly N8N_WEBHOOK_PASSWORD: string;
  readonly N8N_WEBHOOK_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
