// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/scripts",
    "@nuxt/image",
    "@nuxtjs/supabase",
    "@nuxthub/core",
    "@nuxtjs/medusa",
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxt/fonts",
    "@vueuse/nuxt",
    "nuxt-auth-utils",
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
    domains: ["https://zvplqgopkztvgbwknbwb.supabase.co"],
    providers: {
      myProvider: {
        name: "supabase",
        provider: "~/providers/supabase.ts",
        options: {
          baseURL: "https://zvplqgopkztvgbwknbwb.supabase.co",
        },
      },
    },
  },
  hub: {
    blob: true,
    navigation: true,
    environment: {
      MEDUSA_BACKEND_URL: process.env.MEDUSA_BACKEND_URL,
    },
    api: {
      baseURL: "/api/_hub",
      cors: true,
      endpoints: {
        medusa: {
          url: process.env.MEDUSA_BACKEND_URL,
          prefix: "/store",
        },
      },
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  content: {
    documentDriven: true,
  },
  experimental: {
    viewTransition: true,
    componentIslands: true,
  },
});
