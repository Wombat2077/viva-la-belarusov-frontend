// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  colorMode: {
    preference: 'light'
  },
  modules: ['nuxt-primevue', "@nuxt/ui"],
  css: [
    '~/assets/css/main.css',
    'primevue/resources/themes/aura-light-green/theme.css'
  ],
  /* svgo:{
    autoImportPath: '~/assets/svg',
  }, */
  primevue: {
    
  },
  postcss:{
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }
})