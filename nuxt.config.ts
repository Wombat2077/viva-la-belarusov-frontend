// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-primevue', "nuxt-svgo"],
  css: [
    '~/assets/css/main.css',
    'primevue/resources/themes/aura-light-green/theme.css'
  ],
  svgo:{
    autoImportPath: './assets/svg/',
  },
  primevue: {
    
  },
  postcss:{
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }
})