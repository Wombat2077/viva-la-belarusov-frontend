// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue'
  ],
  css: [
    '~/assets/css/main.css'
  ],
  primevue: {
    options: {
      unstyled: true
    },
  },
  postcss:{
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }
})
