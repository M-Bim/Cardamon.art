import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/fonts"],
  image: {
      directus: {
        // This URL needs to include the final `assets/` directory
        baseURL: '<http://your-directus-domain.com/assets'>
      }
    },
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 1000,
      },
    },
  },
  experimental: {
    watcher: "parcel",
  },
  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
  },
  imports: {
    presets: [
      {
        from: "@nuxtjs/supabase",
        imports: ["useSupabaseUser", "useSupabaseSession"],
      },
    ],
  },
});
