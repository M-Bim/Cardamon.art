<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const socialLinks = [
  {
    name: "Twitter",
    icon: "i-ri-twitter-fill",
    url: "https://x.com/cardamonkideki",
  },
  {
    name: "Tumblr",
    icon: "i-ri-tumblr-fill",
    url: "https://nomadrac.tumblr.com",
  },
  {
    name: "Instagram",
    icon: "i-akar-icons-instagram-fill",
    url: "https://instagram.com/yourusername", // Fixed incorrect URL
  },
  {
    name: "Bluesky",
    icon: "i-simple-icons-bluesky",
    url: "https://bsky.app/profile/yourusername",
  },
];
</script>

<template>
  <Main title="Contact">
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-6">Follow Me</h1>

      <div class="flex flex-col gap-4">
        <NuxtLink
          v-for="link in socialLinks"
          :key="link.name"
          :to="link.url"
          target="_blank"
          class="flex items-center gap-2 p-2 rounded-lg hover:bg-lime-300 transition-colors"
        >
          <UIcon :name="link.icon" class="text-2xl" />
          {{ link.name }}
        </NuxtLink>
      </div>
    </div>
  </Main>
</template>
