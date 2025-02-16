<script setup lang="ts">
definePageMeta({
  layout: "default",
});
const { $directus, $readItem } = useNuxtApp();

const { data: global } = await useAsyncData("global", () => {
  return $directus.request($readItem("global"));
});
</script>
<template>
  <Main title="Home">
    <div>
      <h1>{{ global?.title }}</h1>
      <p>{{ global?.description }}</p>
    </div>
  </Main>
</template>
