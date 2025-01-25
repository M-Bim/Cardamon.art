<template>
  <div v-if="items.length > 0">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <div
        v-for="item in items"
        :key="item.id"
        @click="selectedItem = item"
        class="aspect-square cursor-pointer relative group"
      >
        <div class="w-full h-full bg-slate-200 rounded-lg overflow-hidden">
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover"
          />
        </div>
        <div
          class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg"
        />
      </div>
    </div>

    <!-- Modal -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform opacity-0"
    >
      <div
        v-if="selectedItem"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        @click="selectedItem = null"
      >
        <div class="bg-white rounded-lg max-w-2xl w-full p-6" @click.stop>
          <h3 class="text-xl font-semibold text-slate-800">
            {{ selectedItem.title }}
          </h3>
          <p class="text-slate-600 mt-2">{{ selectedItem.description }}</p>
          <slot name="additional-content" :item="selectedItem"></slot>
          <button
            @click="selectedItem = null"
            class="mt-4 px-4 py-2 bg-slate-200 rounded-lg hover:bg-slate-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </Transition>
  </div>

  <div v-else class="text-center p-8">
    <p class="text-xl font-semibold text-slate-500">{{ emptyMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
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
defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },

  emptyMessage: {
    type: String,
    default: "No items to display",
  },
});

const selectedItem = ref(null);
</script>
