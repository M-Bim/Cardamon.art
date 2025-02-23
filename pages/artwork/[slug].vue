<template>
  <div v-if="artwork">
    <h1>{{ artwork.title }}</h1>
    <img
      :src="`${config.public.directusUrl}/assets/${artwork.image}`"
      :alt="artwork.title"
    />
    <!-- Add other artwork details -->
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const route = useRoute()

// Fetch single artwork using the slug/id from the route
const { data: response } = await useFetch('/items/Artworks', {
  baseURL: config.public.directusUrl,
  params: {
    filter: {
      slug: {
        _eq: route.params.slug
      }
    }
  }
})
const artwork = computed(() => response.value?.data?.[0])

// Add error handling
if (!artwork.value) {
  throw createError({ statusCode: 404, message: 'Artwork not found' })
}
</script>
