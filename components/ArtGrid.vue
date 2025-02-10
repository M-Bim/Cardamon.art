<template>
  <Title>Art</Title>
  <div
    class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2 px-0 py-0"
  >
    <div
      v-for="(item, index) in items"
      :key="item.id"
      class="w-32 h-24 rounded-xl overflow-hidden cursor-pointer"
      @click="openLightbox(index)"
    >
      <NuxtImg
        v-if="item.image"
        :src="getImageUrl(item.image)"
        :alt="item.title"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      <div v-else class="w-full h-full bg-gray-300"></div>
    </div>

    <div v-if="!items?.length" class="col-span-full text-center">
      {{ emptyMessage }}
    </div>
  </div>

  <vue-easy-lightbox
    :visible="isShowLightbox"
    :imgs="formattedImages"
    :index="currentIndex"
    @hide="closeLightbox"
  />
</template>

<script setup>
import { ref, computed } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";

const config = useRuntimeConfig();

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  emptyMessage: {
    type: String,
    default: "No items available",
  },
});

const isShowLightbox = ref(false);
const currentIndex = ref(0);

// Helper function to get full image URL from Directus
const getImageUrl = (imageId) => {
  if (!imageId) return null;
  return `${config.public.directusUrl}/assets/${imageId}`;
};

// Format images for lightbox
const formattedImages = computed(() => {
  return props.items.map((item) => ({
    src: getImageUrl(item.image),
    title: item.title,
  }));
});

const openLightbox = (index) => {
  currentIndex.value = index;
  isShowLightbox.value = true;
};

const closeLightbox = () => {
  isShowLightbox.value = false;
};
</script>
```
