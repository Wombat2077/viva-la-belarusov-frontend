// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue'
  ],
  css: [
    '~/assets/css/main.css',
    'primevue/resources/themes/aura-light-green/theme.css'
  ],
  primevue: {
    
  },
  postcss:{
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }
})
