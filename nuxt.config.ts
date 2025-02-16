// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  future: { compatibilityVersion: 4 },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/scripts",
    "@nuxt/image",
    "@nuxtjs/supabase",
    "@nuxtjs/medusa",
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxt/fonts",
    "@vueuse/nuxt",
    "nuxt-auth-utils",
    "@nuxtjs/strapi",
    "nuxt-directus",
  ],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    serviceKey: process.env.SUPABASE_SERVICE_KEY,
    redirect: false,
    redirectOptions: {
      login: "",
      callback: "",
      exclude: ["*"],
      cookieRedirect: false,
    },
  },
  image: {
    directus: {
      baseURL: `${process.env.DIRECTUS_URL || 'http://localhost:8055'}/assets/`,
    },
  },
  runtimeConfig: {
    public: {
      directus: {
        url: process.env.DIRECTUS_URL || 'http://localhost:8055',
        autofetch: true,
        devtools: true,
      },
      directusUrl: process.env.DIRECTUS_URL || 'http://localhost:8055',
    },
  },
  experimental: {
    watcher: "parcel",
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'description', content: '[description]' },
        { property: 'og:description', content: '[og:description]' },
        { property: 'og:image', content: '[og:image]' },
        { name: 'twitter:title', content: '[twitter:title]' },
        { name: 'twitter:description', content: '[twitter:description]' },
        { name: 'twitter:image', content: '[twitter:image]' },
        { name: 'twitter:card', content: 'summary' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png'
        }
      ]
    }
  }
});
