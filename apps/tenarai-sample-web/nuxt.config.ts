import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxt/eslint',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],
  plugins: ['@/plugins/validate'],
  devtools: { enabled: true },
  css: ['@/assets/css/app.css'],
  build: {
    transpile: ['@vee-validate/rules'],
  },
  compatibilityDate: '2025-05-07',
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
  piniaPluginPersistedstate: {
    storage: 'localStorage',
    debug: true,
  },
  vite: {
    server: {
      proxy: {
        '/api': {
          target: process.env.PROXY_API_URL,
          secure: false,
        },
      },
    },
  },
});
