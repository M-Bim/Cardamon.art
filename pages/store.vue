<script setup lang="ts">
definePageMeta({
    layout: "default",
});
const client = useMedusaClient();
const { products } = await client.store.product.list();
</script>
