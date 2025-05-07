// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-07',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/eslint'],
  css: ['~/assets/css/app.css'],
  build: {
    transpile: ['@vee-validate/rules'],
  },
  postcss: {
    plugins: {
      'postcss-custom-media': {},
    },
  },
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        semi: true,
      },
    },
  },
});