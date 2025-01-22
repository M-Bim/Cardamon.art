<template>
  <h1 class="text-2xl font-bold my-4">
    {{ title }}
  </h1>
  <div
    class="border-2 border-slate-200 shadow-slate-200 bg-slate-50 shadow-md text-slate-500 col-span-10 row-span-10 col-start-3 row-start-3 overflow-auto"
  >
    <div class="mx-4">
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
