<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    default: 10,
  },
});

const currentPage = ref(1);
const contentRef = ref(null);
const showPagination = ref(false);

const pageCount = computed(() =>
  Math.ceil(props.items.length / props.itemsPerPage),
);
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * props.itemsPerPage;
  const end = start + props.itemsPerPage;
  return props.items.slice(start, end);
});

const checkOverflow = () => {
  if (contentRef.value) {
    const element = contentRef.value;
    showPagination.value = element.scrollHeight > element.clientHeight;
  }
};

onMounted(() => {
  const observer = new ResizeObserver(checkOverflow);
  if (contentRef.value) {
    observer.observe(contentRef.value);
  }

  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>

<template>
  <div class="flex flex-col min-h-0 h-full">
    <!-- Content Area -->
    <div ref="contentRef" class="flex-grow overflow-auto">
      <slot :items="paginatedItems" />
    </div>

    <!-- Pagination Controls with Tailwind -->
    <div
      v-if="showPagination && pageCount > 1"
      class="flex justify-center items-center py-4 mt-auto"
    >
      <UPagination
        v-model="currentPage"
        :page-count="pageCount"
        :total="items.length"
        class="inline-flex items-center rounded-lg bg-white shadow-lg p-2 space-x-1"
      />
    </div>
  </div>
</template>
