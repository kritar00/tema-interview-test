// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'vi', iso: 'vi-VN', name: 'Vietnamese', file: 'vi.json' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: '../locales/',
    detectBrowserLanguage: {
      fallbackLocale: 'en'
    }
  }
})