<template>
  <div v-if="artworks && artworks.length > 0">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <!-- Image Cards -->
      <div
        v-for="artwork in artworks"
        :key="artwork.id"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <!-- Image -->
        <div class="h-48 bg-slate-200 overflow-hidden">
          <img
            :src="`${directusUrl}/assets/${artwork.image}`"
            :alt="artwork.title"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Item Details -->
        <div class="p-4">
          <h3 class="text-lg font-semibold text-slate-800">
            {{ artwork.title }}
          </h3>
          <p class="text-slate-600 text-sm mt-1">{{ artwork.description }}</p>
          <slot name="additional-content" :item="artwork"></slot>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="text-center p-8">
    <p class="text-xl font-semibold text-slate-500">{{ emptyMessage }}</p>
  </div>
</template>

<script setup>
// Get Directus config
const config = useRuntimeConfig()
const directusUrl = config.public.directusUrl

// Fetch artworks using direct API
const { data: artworks } = await useFetch('/items/artworks', {
  baseURL: directusUrl,
  params: {
    fields: ['id', 'title', 'description', 'image', 'date'],
  },
})

defineProps({
  emptyMessage: {
    type: String,
    default: "No artworks to display",
  },
})
</script>
