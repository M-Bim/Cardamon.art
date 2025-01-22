<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const comics = ref(
  Array(55)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      title: `Comic ${index + 1}`,
      image: `/comic${index + 1}.jpg`,
    })),
);
</script>

<template>
  <Main title="Comics">
    <PaginatedContent
      :items="comics"
      :items-per-page="12"
      class="w-full h-full"
    >
      <template #default="{ items }">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <div
            v-for="comic in items"
            :key="comic.id"
            class="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg"
          >
            <!-- Image Container -->
            <div class="h-48 bg-slate-200 overflow-hidden">
              <img
                :src="comic.image"
                :alt="comic.title"
                class="w-full h-full object-cover"
              />
            </div>
            <!-- Content Container -->
            <div class="p-4">
              <h3 class="text-lg font-semibold text-slate-800">
                {{ comic.title }}
              </h3>
              <!-- Add additional content here -->
            </div>
          </div>
        </div>
      </template>
    </PaginatedContent>
  </Main>
</template>
