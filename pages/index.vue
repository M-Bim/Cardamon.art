<script setup lang="ts">
import { useNuxtApp, useAsyncData } from "#imports";
import { ref } from "vue";

// Remove duplicate declaration of searchQuery
const searchQuery = ref("");

definePageMeta({
  layout: "default",
});

const { $directus, $readItem } = useNuxtApp();

// Fetch artworks from Directus
const { data: artworks } = await useAsyncData("artworks", () => {
  return $directus.request($readItem("Artworks"));
});
</script>

<template>
  <main class="container mx-auto px-4 py-8">
    <!-- Search Section -->
    <div class="mb-8">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search articles..."
        class="w-full p-2 border rounded"
      />
    </div>

    <!-- Articles Section -->
    <section>
      <h1 class="text-3xl font-bold mb-6">Articles</h1>

      <ContentList path="/articles" v-slot="{ list }">
        <ContentQuery
          path="/articles"
          :where="{ title: { $contains: searchQuery } }"
          v-slot="{ data }"
        >
          <div class="grid gap-6">
            <article
              v-for="article in data || list"
              :key="article._path"
              class="border p-4 rounded hover:shadow-lg transition"
            >
              <NuxtLink :to="article._path">
                <h2 class="text-xl font-semibold">{{ article.title }}</h2>
                <p class="text-gray-600 mt-2">{{ article.description }}</p>
              </NuxtLink>
            </article>
          </div>
        </ContentQuery>
      </ContentList>
    </section>

    <!-- Artworks Section -->
    <section v-if="artworks" class="mt-12">
      <h2 class="text-2xl font-bold mb-6">Artworks</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="artwork in artworks"
          :key="artwork.id"
          class="border p-4 rounded"
        >
          <!-- Add your artwork display logic here -->
          <h3>{{ artwork.title }}</h3>
          <!-- Add more artwork details as needed -->
        </div>
      </div>
    </section>
  </main>
</template>
