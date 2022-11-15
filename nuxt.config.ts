// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "@nuxtjs/supabase",
  ],
  buildModules: ["@pinia/nuxt", "@nuxtjs/supabase"],
  headlessui: {
    prefix: "Headless",
  },
  srcDir: "src/",
});
