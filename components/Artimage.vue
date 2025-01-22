<template>
  <div v-if="items.length > 0">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <!-- Image Cards -->
      <div
        v-for="item in items"
        :key="item.id"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <!-- Image -->
        <div class="h-48 bg-slate-200 overflow-hidden">
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Item Details -->
        <div class="p-4">
          <h3 class="text-lg font-semibold text-slate-800">
            {{ item.title }}
          </h3>
          <p class="text-slate-600 text-sm mt-1">{{ item.description }}</p>
          <slot name="additional-content" :item="item"></slot>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="text-center p-8">
    <p class="text-xl font-semibold text-slate-500">{{ emptyMessage }}</p>
  </div>
</template>

<script setup>
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
</script>
