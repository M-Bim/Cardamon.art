import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/supabase",
    "@nuxt/content",
    "@vueuse/nuxt",
    "nuxt-auth-utils",
    "nuxt-directus",
    "@nuxtjs/seo",
  ],

  // Supabase config
  supabase: {
    redirect: false,
    redirectOptions: {
      login: "/",
      callback: "/",
      exclude: ["*"],
    },
    cookieOptions: {
      maxAge: 60 * 60 * 8,
      sameSite: "lax",
      secure: true,
    },
    clientOptions: {
      auth: {
        persistSession: true,
      },
    },
  },

  // Nitro configuration
  nitro: {
    storage: {
      data: {
        driver: 'fs',
        base: './data'
      }
    }
  },

  // Content configuration
  content: {
    documentDrive: true,
    experimental: {
      clientDB: true,
    },
    dir: "content",
    markdown: {
      anchorLinks: true,
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
    // Remove git driver, use filesystem instead
    sources: {
      content: {
        driver: 'fs',
        base: './content'
      }
    },
  },

  // Image configuration
  image: {
    domains: ["0.0.0.0"],
    directus: {
      baseURL: process.env.DIRECTUS_URL || "http://0.0.0.0:8055",
    },
  },

  // Performance optimizations
  experimental: {
    watcher: "parcel",
    payloadExtraction: false,
    inlineSSRStyles: false
  },

  // Watcher configuration
  watchers: {
    webpack: {
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/.nuxt/**'
      ]
    },

    chokidar: {
        ignoreInitial: true,
        ignorePermissionErrors: true,
        usePolling: true,
        interval: 1000
      }
     }

  },

  watch: ['./components/**/*', './pages/**/*', './layouts/**/*'],

  // Site meta configuration
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "card's website" },
        { property: "og:description", content: "card's website" },
        { name: "twitter:card", content: "summary" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
    },
  },

  // Runtime config
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://cardamonkideki.art",
      siteName: "cardamonkideki",
      siteDescription: "card's website",
      language: "en",
    }
  }
});
