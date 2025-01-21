<script setup>
import Main from "@/components/Main.vue";
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";

defineSlots({
  default: () => {},
});
</script>

<template>
  <div class="grid grid-cols-12 grid-rows-12 gap-4 h-screen p-4">
    <Navbar />
    <Header />
    <Main>
      <slot />
    </Main>
  </div>
</template>
