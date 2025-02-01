<script setup lang="ts">
const cart = ref({
  currency_code: "USD",
});

fetch(`http://localhost:9000/store/products`, {
  credentials: "include",
  headers: {
    "x-publishable-api-key":
      import.meta.env.VITE_MEDUSA_PUBLISHABLE_KEY || "temp",
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
const formatPrice = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: cart.value.currency_code,
  }).format(amount);
};

const page = ref(1);
const items = ref(Array(55));
</script>

<template>
  <Main title="Store">
    <div>
      <p>Page: {{ page }}</p>
      <p>Items: {{ items.length }}</p>
    </div>
  </Main>
</template>
