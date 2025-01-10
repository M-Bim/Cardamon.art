// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
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
  ],
  supabase: {
    // Options
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
        name: "supabase", // optional value to overrider provider name
        provider: "~/providers/supabase.ts", // Path to custom provider
        options: {
          // ... provider options
          baseURL: "https://zvplqgopkztvgbwknbwb.supabase.co",
        },
      },
    },
  },
  hub: {
    // NuxtHub options
    blob: true,
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  content: {
    // ... options
  },
});
