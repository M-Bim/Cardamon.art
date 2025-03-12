<template>
  <h1 class="text-2xl font-bold m-4">
    {{ title }}
  </h1>
  <div
    class="h-full bg-slate-50 border-2 shadow-md shadow-slate-300 text-slate-500 col-span-12 row-span-12 col-start-3 row-start-3"
  >
    <div class="h-[calc(100%-4rem)] w-[calc(100%-6rem)]">
      <div class="px-4 py-3">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
