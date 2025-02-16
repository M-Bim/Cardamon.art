<script setup lang="ts">
definePageMeta({
  layout: "default",
});
import {ref} from "vue";
</script>

<template>
  <div
    class="h-screen bg-slate-50 shadow-md text-slate-500 shadow-slate-300 col-span-2 row-span-12 col-start-1 row-start-1 flex flex-col overflow-auto border-2 border-slate-200 p-4"
  >
    <NuxtLink to="/" class="hover:bg-slate-200 p-2 rounded">Home</NuxtLink>
    <NuxtLink to="/art" class="hover:bg-slate-200 p-2 rounded">Art</NuxtLink>
    <NuxtLink to="/animations" class="hover:bg-slate-200 p-2 rounded"
      >Animations</NuxtLink
    >
    <NuxtLink to="/characters" class="hover:bg-slate-200 p-2 rounded"
      >Characters</NuxtLink
    >
    <NuxtLink to="/comics" class="hover:bg-slate-200 p-2 rounded"
      >Comics</NuxtLink
    >
    <NuxtLink to="/store" class="hover:bg-slate-200 p-2 rounded"
      >Store</NuxtLink
    >
    <NuxtLink to="/contact" class="hover:bg-slate-200 p-2 rounded"
      >Contact</NuxtLink
    >
    <NuxtLink to="/about" class="hover:bg-slate-200 p-2 rounded"
      >About</NuxtLink
    >
  </div>
</template>
