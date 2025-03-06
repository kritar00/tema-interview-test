// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n", 
    "@nuxtjs/tailwindcss", 
    "shadcn-nuxt",
    "@nuxtjs/google-fonts"
  ],
  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English", file: "en.json" },
      { code: "vi", iso: "vi-VN", name: "Vietnamese", file: "vi.json" },
    ],
    defaultLocale: "en",
    lazy: true,
    langDir: "../locales/",
    detectBrowserLanguage: {
      fallbackLocale: "en",
    },
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/shared",
  },
  googleFonts: {
    families: {
      'Playfair Display': {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      },
      'Montserrat': {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      }
    }
  },
});
