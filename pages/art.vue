<template>
  <Main title="Art">
    <ArtGrid :items="artworks" empty-message="No artwork available yet!">
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

const artworks = ref([
  {
    id: 1,
    title: "Artwork Title",
    description: "Artwork description",
    image: "/path-to-image.jpg",
    date: "2023",
  },
  // More items...
]);
</script>
