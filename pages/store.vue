<script setup lang="ts">
import { ref } from "vue";

definePageMeta({
  layout: "default",
});
const cart = ref([]);
// Sample store items
const storeItems = ref([
  {
    id: 1,
    name: "Art Print #1",
    price: 29.99,
    image: "/path-to-image.jpg", // Replace with actual image path
    description: "Beautiful art print on high-quality paper",
    inStock: true,
  },
  {
    id: 2,
    name: "Custom Portrait",
    price: 149.99,
    image: "/path-to-image.jpg",
    description: "Personalized portrait artwork",
    inStock: true,
  },
  // Add more items as needed
]);
</script>

<template>
  <Main title="Store"> </Main>
</template>
