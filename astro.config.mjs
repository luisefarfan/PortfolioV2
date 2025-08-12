// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import db from '@astrojs/db';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.luisefarfan.com',

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },

  adapter: vercel(),
  integrations: [db(), sitemap()]
});