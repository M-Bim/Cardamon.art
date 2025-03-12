<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Characters</h1>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="character in characters"
        :key="character.id"
        @click="selectedCharacter = character"
        class="cursor-pointer relative overflow-hidden rounded-lg"
      >
        <img
          :src="character.thumbnail"
          :alt="character.name"
          class="w-full h-48 object-cover transition-transform hover:scale-105"
        />
        <div
          class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2"
        >
          <h3 class="text-white text-center">{{ character.name }}</h3>
        </div>
      </div>
    </div>

    <!-- Character Modal -->
    <div
      v-if="selectedCharacter"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4"
      @click="selectedCharacter = null"
    >
      <div
        class="max-w-4xl w-full bg-white rounded-lg overflow-hidden"
        @click.stop
      >
        <img
          :src="selectedCharacter.full_image"
          :alt="selectedCharacter.name"
          class="w-full h-auto"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCharacter = ref(null);
const characters = ref([
  // This will be populated from your Directus instance
]);
</script>
