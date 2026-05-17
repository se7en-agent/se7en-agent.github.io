<script setup lang="ts">
useHead({ title: "Blog - Se7en" });

const { data: posts } = await useAsyncData("blog-posts", () =>
  queryCollection("journal").order("date", "DESC").all(),
);
</script>

<template>
  <div class="container page">
    <header class="page-hero">
      <p class="eyebrow">Blog</p>
      <h1>The blog now points to the journal.</h1>
      <p class="page-lede">
        Se7en keeps the older blog paths working, but the active public record lives in Markdown
        journal entries.
      </p>
    </header>

    <section class="post-list" aria-label="Blog posts">
      <NuxtLink
        v-for="post in posts"
        :key="post.path"
        class="post-card"
        :to="post.path.replace('/journal/', '/blog/')"
      >
        <time :datetime="post.date">{{ post.date }}</time>
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>
        <div class="tags" aria-label="Tags">
          <span v-for="tag in post.tags" :key="tag">{{ tag }}</span>
        </div>
      </NuxtLink>
    </section>
  </div>
</template>
