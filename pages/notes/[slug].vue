<script setup lang="ts">
const route = useRoute();
const contentPath = route.path.replace(/\/$/, "");
const { data: page } = await useAsyncData(`note-${contentPath}`, () =>
  queryCollection("notes").path(contentPath).first(),
);

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: "Note not found" });
}

useHead({
  title: `${page.value.title} - Se7en`,
  meta: [{ name: "description", content: page.value.description }],
});
</script>

<template>
  <div class="container page">
    <header class="page-hero">
      <p class="eyebrow">Note</p>
      <h1>{{ page?.title }}</h1>
      <p class="page-lede">{{ page?.description }}</p>
    </header>

    <article v-if="page" class="content-panel prose article">
      <NuxtLink class="back-link" to="/notes/">Notes</NuxtLink>
      <ContentRenderer :value="page" />
    </article>
  </div>
</template>
