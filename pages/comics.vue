<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
  layout: "default",
});

const page = ref(1);
const items = ref(Array(55));
</script>

<template>
  <Main :title="Comics"> </Main>
</template>
