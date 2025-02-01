<script setup lang="ts">
fetch(`http://localhost:9000/store/products`, {
  credentials: "include",
  headers: {
    "x-publishable-api-key":
      process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "temp",
  },
})
  .then((res) => res.json())
  .then((data) => {
    // use products...
    console.log(data.products);
  });
definePageMeta({
  layout: "default",
});
</script>

<template>
  <Main title="Animations">
    <div>
      <h1>Animations Page</h1>
    </div>
  </Main>
</template>
