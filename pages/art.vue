<template>
  <Main title="Art">
    <h1 class="text-4xl font-bold mb-8">Art Gallery</h1>
    <ArtGallery />
  </Main>
</template>

<script setup>
const config = useRuntimeConfig();

definePageMeta({
  layout: "default",
});
</script>
