<template>
  <h1 class="text-2xl font-bold mx-4">
    {{ title }}
  </h1>
  <div
    class="bg-slate-50 shadow-md shadow-slate-300 text-slate-500 col-span-10 row-span-10 col-start-3 row-start-3 overflow-auto"
  >
    <div
      class="border-2 rounded-lg border-slate-200 h-[calc(100%-3rem)] m-4 overflow-auto"
    >
      <slot />
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
