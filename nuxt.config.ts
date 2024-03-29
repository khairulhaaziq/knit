// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
  ],
  headlessui: {
    prefix: "Headless",
  },
  srcDir: "src/",
});
