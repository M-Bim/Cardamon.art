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
  <Main title="Store">
    <div v-if="storeItems.length > 0">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <!-- Store Items -->
        <div
          v-for="item in storeItems"
          :key="item.id"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <!-- Image -->
          <div class="h-48 bg-slate-200 overflow-hidden">
            <img
              :src="item.image"
              :alt="item.name"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Item Details -->
          <div class="p-4">
            <h3 class="text-lg font-semibold text-slate-800">
              {{ item.name }}
            </h3>
            <p class="text-slate-600 text-sm mt-1">{{ item.description }}</p>
            <div class="mt-4 flex justify-between items-center">
              <span class="text-slate-800 font-bold"
                >${{ item.price.toFixed(2) }}</span
              >
              <button
                class="bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-700 transition-colors"
                :disabled="!item.inStock"
              >
                {{ item.inStock ? "Add to Cart" : "Out of Stock" }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center p-8">
      <p class="text-xl font-semibold text-slate-500">Nothing is here!</p>
      <p class="text-slate-400 mt-2">Come back soon!</p>
    </div>
  </Main>
</template>
