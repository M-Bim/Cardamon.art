// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      medusaBackendUrl:
        process.env.NUXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000",
    },
  },
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
    "@nuxt/image",
    "@nuxtjs/supabase",
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxt/fonts",
    "@vueuse/nuxt",
    "nuxt-auth-utils",
    "@nuxtjs/strapi",
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
    domains: ["https://nsruyswcwxsrsqwwmnjt.co"],
    providers: {
      myProvider: {
        name: "supabase",
        provider: "~/providers/supabase.ts",
        options: {
          baseURL: "https://nsruyswcwxsrsqwwmnjt.supabase.co",
        },
      },
    },
  },
});
