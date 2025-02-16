<template>
  <Main title="Art">
    <ArtGrid :items="artworks || []" empty-message="No artwork available yet!">
      <template #additional-content="{ item }">
        <div class="mt-2">
          <p class="text-sm text-slate-500">{{ item.date }}</p>
        </div>
      </template>
    </ArtGrid>
  </Main>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  layout: "default",
});
const { data: artworks } = await useFetch("/api/artworks", {
  // Assuming you've set up your Directus endpoints in nuxt.config
  baseURL: useRuntimeConfig().public.directusUrl,
  params: {
    fields: ["id", "title", "image", "date"], // adjust fields based on your collection
    sort: ["date"], // optional sorting
  },
});
</script>
