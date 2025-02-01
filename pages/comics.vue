<script setup lang="ts">
const products = ref<any[]>([]);
const selectedProduct = ref<any>(null);
const cartId = ref<string | null>(null);
const handle = ref<string>("");
const region = ref<any>({ id: "" });

// Fetch all products
const fetchProducts = async () => {
  try {
    const res = await fetch(`http://localhost:9000/store/products`, {
      credentials: "include",
      headers: {
        "x-publishable-api-key":
          import.meta.env.VITE_MEDUSA_PUBLISHABLE_KEY || "temp",
      },
    });
    const data = await res.json();
    products.value = data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Fetch single product by handle
const fetchProductByHandle = async () => {
  try {
    const res = await fetch(
      `http://localhost:9000/store/products?handle=${handle.value}`,
      {
        credentials: "include",
        headers: {
          "x-publishable-api-key":
            import.meta.env.VITE_MEDUSA_PUBLISHABLE_KEY || "temp",
        },
      },
    );
    const { products } = await res.json();
    if (!products.length) return;
    selectedProduct.value = products[0];
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

// Create cart
const createCart = async () => {
  try {
    const res = await fetch(`http://localhost:9000/store/carts`, {
      method: "POST",
      credentials: "include",
      headers: {
        "x-publishable-api-key":
          import.meta.env.VITE_MEDUSA_PUBLISHABLE_KEY || "temp",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        region_id: region.value.id,
      }),
    });
    const { cart } = await res.json();
    localStorage.setItem("cart_id", cart.id);
    cartId.value = cart.id;
  } catch (error) {
    console.error("Error creating cart:", error);
  }
};

// Fetch cart
const fetchCart = async () => {
  try {
    const res = await fetch(
      `http://localhost:9000/store/carts/${cartId.value}`,
      {
        credentials: "include",
        headers: {
          "x-publishable-api-key":
            import.meta.env.VITE_MEDUSA_PUBLISHABLE_KEY || "temp",
        },
      },
    );
    const { cart: fetchedCart } = await res.json();
    cart.value = fetchedCart;
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
};

// Define cart type
interface Cart {
  currency_code: string;
}

const cart = ref<Cart | null>(null);

const formatPrice = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: cart.value?.currency_code,
  }).format(amount);
};

definePageMeta({
  layout: "default",
});

const page = ref(1);
const items = ref(Array(55));
</script>

<template>
  <Main title="Comics"> </Main>
</template>
