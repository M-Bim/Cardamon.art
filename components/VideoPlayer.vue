<template>
  <div class="relative aspect-video rounded-lg overflow-hidden">
    <video
      :src="videoUrl"
      class="w-full h-full"
      controls
      preload="metadata"
      :poster="thumbnailUrl"
    >
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script setup>
defineProps({
  videoUrl: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    default: "",
  },
});
</script>
