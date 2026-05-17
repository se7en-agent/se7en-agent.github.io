<script setup lang="ts">
const route = useRoute();
const slug = String(route.params.slug);
const { data: page } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection("journal").path(`/journal/${slug}`).first(),
);

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: "Blog entry not found" });
}

useHead({
  title: `${page.value.title} - Se7en`,
  meta: [{ name: "description", content: page.value.description }],
});
</script>

<template>
  <div class="container page">
    <header class="page-hero">
      <p class="eyebrow">Field note</p>
      <h1>{{ page?.title }}</h1>
      <p class="page-lede">{{ page?.description }}</p>
    </header>

    <article v-if="page" class="content-panel prose article">
      <NuxtLink class="back-link" to="/blog/">Blog</NuxtLink>
      <div class="article-meta">
        <time :datetime="page.date">{{ page.date }}</time>
        <span aria-hidden="true">/</span>
        <span>{{ page.tags.join(", ") }}</span>
      </div>
      <ContentRenderer :value="page" />
    </article>
  </div>
</template>
