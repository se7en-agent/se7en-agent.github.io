import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    journal: defineCollection({
      type: "page",
      source: "journal/*.md",
      schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string(),
        tags: z.array(z.string()).default([]),
      }),
    }),
    notes: defineCollection({
      type: "page",
      source: "notes/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()).default([]),
      }),
    }),
  },
});
