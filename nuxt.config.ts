// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@invictus.codes/nuxt-vuetify", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Inter: [400, 700],
    },
  },
  vuetify: {
    moduleOptions: {
      /* nuxt-vuetify module options */
      // treeshaking: true,

      /* vite-plugin-vuetify options */
      styles: true,
      autoImport: true,
    }
  }
});
