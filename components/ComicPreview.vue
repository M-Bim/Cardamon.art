<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img
      :src="comic.cover_image"
      :alt="comic.title"
      class="w-full h-64 object-cover cursor-pointer transition-transform hover:scale-105"
      @click="navigateToStore"
    />
    <div class="p-4">
      <h3 class="text-xl font-semibold mb-2">{{ comic.title }}</h3>
      <p class="text-gray-600 mb-4">{{ comic.description }}</p>
      <div class="flex justify-between items-center">
        <span class="text-lg font-bold">${{ comic.price }}</span>
        <button
          @click="navigateToStore"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View in Store
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  comic: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const navigateToStore = () => {
  router.push(`/store/comics/${props.comic.id}`);
};
</script>
