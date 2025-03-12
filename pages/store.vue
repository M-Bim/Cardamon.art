<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Store</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <img
          :src="product.thumbnail"
          :alt="product.title"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h3 class="text-lg font-semibold">{{ product.title }}</h3>
          <p class="text-gray-600">{{ product.price }}</p>
          <button
            class="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            @click="addToCart(product)"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Medusa from "@medusajs/medusa-js";

const config = useRuntimeConfig();
const medusa = new Medusa({ baseUrl: config.public.medusaUrl });
const products = ref([]);

const fetchProducts = async () => {
  try {
    const response = await medusa.products.list();
    products.value = response.products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const addToCart = async (product) => {
  // Implement cart functionality
};

onMounted(() => {
  fetchProducts();
});
</script>
