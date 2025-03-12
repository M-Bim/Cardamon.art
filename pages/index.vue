```vue
<template>
  <div class="space-y-12">
    <!-- Latest Art -->
    <section>
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">Latest Artwork</h2>
        <NuxtLink to="/art" class="text-blue-600 hover:text-blue-800"
          >View All</NuxtLink
        >
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="artwork in latestArtworks"
          :key="artwork.id"
          class="relative cursor-pointer overflow-hidden rounded-lg"
        >
          <img
            :src="artwork.image_url"
            :alt="artwork.title"
            class="w-full h-48 object-cover transition-transform hover:scale-105"
          />
        </div>
      </div>
    </section>

    <!-- Latest Animation -->
    <section>
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">Latest Animation</h2>
        <NuxtLink to="/animations" class="text-blue-600 hover:text-blue-800"
          >View All</NuxtLink
        >
      </div>
      <div
        v-if="latestAnimation"
        class="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <VideoPlayer
          :video-url="latestAnimation.video_url"
          :thumbnail-url="latestAnimation.thumbnail_url"
        />
      </div>
    </section>

    <!-- Latest Comics -->
    <section>
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">Latest Comics</h2>
        <NuxtLink to="/comics" class="text-blue-600 hover:text-blue-800"
          >View All</NuxtLink
        >
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ComicPreview
          v-for="comic in latestComics"
          :key="comic.id"
          :comic="comic"
        />
      </div>
    </section>

    <!-- Featured Characters -->
    <section>
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">Featured Characters</h2>
        <NuxtLink to="/characters" class="text-blue-600 hover:text-blue-800"
          >View All</NuxtLink
        >
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="character in featuredCharacters"
          :key="character.id"
          class="relative cursor-pointer overflow-hidden rounded-lg"
        >
          <img
            :src="character.thumbnail"
            :alt="character.name"
            class="w-full h-48 object-cover transition-transform hover:scale-105"
          />
          <div
            class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2"
          >
            <h3 class="text-white text-center">{{ character.name }}</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { createDirectus, rest } from "@directus/sdk";

const config = useRuntimeConfig();
const directus = createDirectus(config.public.directusUrl).with(rest());

const latestArtworks = ref([]);
const latestAnimation = ref(null);
const latestComics = ref([]);
const featuredCharacters = ref([]);

const fetchLatestContent = async () => {
  try {
    // Fetch latest artworks
    const artworksResponse = await directus.items("artworks").readByQuery({
      sort: ["-date_created"],
      limit: 3,
    });
    latestArtworks.value = artworksResponse.data;

    // Fetch latest animation
    const animationsResponse = await directus.items("animations").readByQuery({
      sort: ["-date_created"],
      limit: 1,
    });
    latestAnimation.value = animationsResponse.data[0];

    // Fetch latest comics
    const comicsResponse = await directus.items("comics").readByQuery({
      sort: ["-date_created"],
      limit: 3,
    });
    latestComics.value = comicsResponse.data;

    // Fetch featured characters
    const charactersResponse = await directus.items("characters").readByQuery({
      sort: ["-date_created"],
      limit: 4,
    });
    featuredCharacters.value = charactersResponse.data;
  } catch (error) {
    console.error("Error fetching latest content:", error);
  }
};

onMounted(() => {
  fetchLatestContent();
});
</script>
```
