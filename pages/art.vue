<template>
  <Main title="Gallery">
    <Artimage :items="artworks" empty-message="No artwork available yet!">
      <!-- Optional: Add additional content for each card -->
      <template #additional-content="{ item }">
        <div class="mt-2">
          <p class="text-sm text-slate-500">{{ item.date }}</p>
          <!-- Add any other custom content -->
        </div>
      </template>
    </Artimage>
  </Main>
</template>

<script setup>
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
