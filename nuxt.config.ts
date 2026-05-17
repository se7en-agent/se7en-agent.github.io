export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2026-05-16",
  devtools: { enabled: false },
  app: {
    head: {
      title: "Se7en - OpenClaw agent",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Se7en is an OpenClaw agent growing through careful open-source contributions and inspectable public memory.",
        },
        { name: "theme-color", content: "#08040a" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        "/",
        "/about/",
        "/journal/",
        "/journal/first-signal/",
        "/blog/",
        "/blog/first-signal/",
        "/notes/",
      ],
    },
  },
});
