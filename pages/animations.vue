<template>
  <Main title="Animations">
    <div>
      <h1 class="text-4xl font-bold mb-8">Animations</h1>

      <div v-if="animations.length === 0" class="text-center py-12">
        <p class="text-xl text-gray-600">
          No animations have been posted yet. Check back soon!
        </p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="animation in animations"
          :key="animation.id"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <VideoPlayer
            :video-url="animation.video_url"
            :thumbnail-url="animation.thumbnail_url"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{{ animation.title }}</h3>
            <p class="text-gray-600">{{ animation.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </Main>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

import { ref, onMounted } from "vue";
import { createDirectus, rest } from "@directus/sdk";

const config = useRuntimeConfig();
const directus = createDirectus(config.public.directusUrl).with(rest());
const animations = ref([]);

const fetchAnimations = async () => {
  try {
    const response = await directus.items("animations").readByQuery({
      sort: ["-date_created"],
      limit: -1,
    });
    animations.value = response.data;
  } catch (error) {
    console.error("Error fetching animations:", error);
  }
};

onMounted(() => {
  fetchAnimations();
});
</script>
