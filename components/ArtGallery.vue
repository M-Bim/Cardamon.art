<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="artwork in artworks"
      :key="artwork.id"
      class="relative cursor-pointer overflow-hidden rounded-lg"
      @click="openLightbox(artwork)"
    >
      <img
        :src="artwork.image_url"
        :alt="artwork.title"
        class="w-full h-64 object-cover transition-transform hover:scale-105"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { createDirectus, rest } from "@directus/sdk";

const config = useRuntimeConfig();
const directus = createDirectus(config.public.directusUrl).with(rest());
const artworks = ref([]);

const fetchArtworks = async () => {
  try {
    const response = await directus.items("artworks").readByQuery({
      sort: ["date_created"],
      limit: -1,
    });
    artworks.value = response.data;
  } catch (error) {
    console.error("Error fetching artworks:", error);
  }
};

const openLightbox = (artwork) => {
  // Implement PhotoSwipe lightbox here
};

onMounted(() => {
  fetchArtworks();
});
</script>
