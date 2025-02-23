<template>
  <Main title="Comics">
    <div>
      <h1 class="text-4xl font-bold mb-8">Comics</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ComicPreview v-for="comic in comics" :key="comic.id" :comic="comic" />
      </div>
    </div>
  </Main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { createDirectus, rest } from "@directus/sdk";

const config = useRuntimeConfig();
const directus = createDirectus(config.public.directusUrl).with(rest());
const comics = ref([]);

const fetchComics = async () => {
  try {
    const response = await directus.items("comics").readByQuery({
      sort: ["-date_created"],
      limit: -1,
    });
    comics.value = response.data;
  } catch (error) {
    console.error("Error fetching comics:", error);
  }
};

onMounted(() => {
  fetchComics();
});

definePageMeta({
  layout: "default",
});
</script>
