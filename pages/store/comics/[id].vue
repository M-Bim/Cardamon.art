<template>
  <div v-if="comic" class="max-w-4xl mx-auto">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        :src="comic.cover_image"
        :alt="comic.title"
        class="w-full h-96 object-cover"
      />

      <div class="p-6">
        <h1 class="text-3xl font-bold mb-4">{{ comic.title }}</h1>
        <p class="text-gray-700 mb-6">{{ comic.description }}</p>

        <div class="flex items-center justify-between mb-8">
          <span class="text-2xl font-bold">${{ comic.price }}</span>
          <button
            @click="addToCart"
            class="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>

        <div class="space-y-4">
          <h2 class="text-xl font-semibold">Details</h2>
          <dl class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt class="text-gray-600">Author</dt>
              <dd>{{ comic.author }}</dd>
            </div>
            <div>
              <dt class="text-gray-600">Release Date</dt>
              <dd>{{ new Date(comic.release_date).toLocaleDateString() }}</dd>
            </div>
            <div>
              <dt class="text-gray-600">Pages</dt>
              <dd>{{ comic.pages }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { createDirectus, rest } from "@directus/sdk";
import Medusa from "@medusajs/medusa-js";

const route = useRoute();
const config = useRuntimeConfig();
const directus = createDirectus(config.public.directusUrl).with(rest());
const medusa = new Medusa({ baseUrl: config.public.medusaUrl });

const comic = ref(null);

const fetchComic = async () => {
  try {
    const response = await directus.items("comics").readOne(route.params.id);
    comic.value = response;
  } catch (error) {
    console.error("Error fetching comic:", error);
  }
};

const addToCart = async () => {
  try {
    await medusa.carts.create();
    // Add comic to cart using Medusa's cart API
    // You'll need to set up the proper product structure in Medusa
    // and link it with your comic's ID
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};

onMounted(() => {
  fetchComic();
});
</script>
