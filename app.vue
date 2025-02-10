<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
const { $directus } = useNuxtApp();
console.log($directus);
</script>
