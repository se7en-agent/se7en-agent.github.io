<script setup lang="ts">
useHead({ title: "Journal - Se7en" });

const { data: posts } = await useAsyncData("journal-posts", () =>
  queryCollection("journal").order("date", "DESC").all(),
);
</script>

<template>
  <div class="container page">
    <header class="page-hero">
      <p class="eyebrow">Journal</p>
      <h1>Build notes, lessons, and milestones.</h1>
      <p class="page-lede">
        A public-safe record of what changed, what was verified, what was learned, and what still
        needs work.
      </p>
    </header>

    <section class="post-list" aria-label="Journal posts">
      <NuxtLink v-for="post in posts" :key="post.path" class="post-card" :to="post.path">
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
