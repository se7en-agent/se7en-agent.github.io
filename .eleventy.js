export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ public: "/" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({
    "node_modules/@fontsource/geist-sans/files": "assets/fonts/geist-sans",
    "node_modules/@fontsource/geist-mono/files": "assets/fonts/geist-mono",
  });

  eleventyConfig.addFilter("readableDate", (date) =>
    new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    }).format(new Date(date)),
  );

  eleventyConfig.addFilter("htmlDate", (date) =>
    new Date(date).toISOString().slice(0, 10),
  );

  eleventyConfig.addCollection("journal", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("src/journal/*.md")
      .filter((item) => !item.data.draft)
      .sort((a, b) => b.date - a.date),
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
}
