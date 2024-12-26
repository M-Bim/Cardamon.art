// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/scripts", "@nuxt/image", "@nuxtjs/supabase"],
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
    // Options
  },
});
