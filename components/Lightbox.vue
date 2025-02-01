<script lang="ts">
definePageMeta({
  layout: "default",
});

import { ref, onMounted } from "vue";

interface Artwork {
  // Define the structure of an artwork item  id: number;
  attributes: {
    title: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

// Lightbox state
const isLightboxOpen = ref(false);
const currentImage = ref("");
const artworks = ref<Artwork[]>([]);

// Fetch artworks on component mount
onMounted(async () => {
  try {
    // Temporarily comment out fetch until service is implemented
    // const data = await fetchArtworks();
    // artworks.value = data;
    artworks.value = [];
  } catch (error) {
    console.error("Error loading artworks:", error);
  }
});

// Function to get full image URL from Strapi
const getImageUrl = (artwork: Artwork) => {
  return `${process.env.STRAPI_URL}${artwork.attributes.image.data.attributes.url}`;
};

// Lightbox functions
const openLightbox = (imageUrl: string) => {
  currentImage.value = imageUrl;
  isLightboxOpen.value = true;
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
  currentImage.value = "";
};

const handleBackdropClick = (event: MouseEvent) => {
  if ((event.target as HTMLElement).classList.contains("lightbox-backdrop")) {
    closeLightbox();
  }
};
</script>

<template>
  <div>
    <!-- Image Grid -->
    <div class="grid grid-cols-4 md:grid-cols-6 gap-4">
      <ArtGallery
        gridClass="grid grid-cols-2 gap-6"
        :itemClass="'custom-class'"
      />

      <!-- Artwork Grid -->
      <div
        v-for="artwork in artworks"
        :key="artwork.id"
        @click="openLightbox(getImageUrl(artwork))"
        class="cursor-pointer transition-all duration-300 hover:scale-[1.02]"
      >
        <img
          :src="getImageUrl(artwork)"
          :alt="artwork.attributes.title"
          class="h-auto max-w-full rounded-lg object-fill transition-opacity duration-300 hover:opacity-90"
        />
      </div>
    </div>

    <!-- Lightbox -->
    <div
      v-if="isLightboxOpen"
      class="lightbox-backdrop fixed inset-0 bg-black/75 flex items-center justify-center z-50 animate-fadeIn"
      @click="handleBackdropClick"
    >
      <div class="relative max-w-[90vw] max-h-[90vh] animate-zoomIn">
        <!-- Close button -->
        <button
          @click="closeLightbox"
          class="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors duration-300"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Lightbox Image -->
        <img
          :src="currentImage"
          class="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          alt="Enlarged view"
        />
      </div>
    </div>
  </div>
</template>
