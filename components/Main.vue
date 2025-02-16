<template>

    <!-- Title -->
    <h1 class="text-2xl font-bold m-4">
      {{ title }}
    </h1>

    <!-- Separate container -->
    <div class="border-2 rounded-lg bg-slate-50 shadow-md
    shadow-slate-300 text-slate-500
    col-start-3 col-span-12 row-start-3 row-span-12 h-[calc(100%-1rem)]">
      <div class="rounded-lg border-slate-200 m-4 h-[calc(100%-4rem)]">
        <slot />
      </div>
    </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
