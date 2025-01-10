<template>
    <div :class="gridClass">
        <div v-for="item in artData" :key="item.id" :class="itemClass">
            <img
                :src="item.image_url"
                :alt="item.title"
                :class="imageClass"
                @click="viewImage(item.image_url)"
            />
            <h2 :class="titleClass">{{ item.title }}</h2>
            <p :class="descriptionClass">{{ item.description }}</p>
        </div>

        <!-- Modal to display full-size image -->
        <div
            v-if="selectedImage"
            class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
        >
            <img
                :src="selectedImage"
                class="max-w-full max-h-full rounded-md"
            />
            <button
                @click="closeModal"
                class="absolute top-5 right-5 bg-gray-100 text-black rounded-full p-2"
            >
                Close
            </button>
        </div>

        <!-- Pagination -->
        <div v-if="pagination" class="mt-4 flex justify-center">
            <button
                v-for="page in totalPages"
                :key="page"
                @click="changePage(page)"
                :class="[
                    'px-4 py-2 mx-1 rounded-md',
                    currentPage === page
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200',
                ]"
            >
                {{ page }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { fetchArtData } from "@/services/supabaseService";

// Props for styling
const props = defineProps({
    gridClass: {
        type: String,
        default: "grid grid-cols-1 md:grid-cols-3 gap-4 p-4",
    },
    itemClass: {
        type: String,
        default:
            "bg-gray-100 shadow-md rounded-lg p-4 transition-transform hover:scale-105",
    },
    imageClass: {
        type: String,
        default: "w-full h-auto rounded-md mb-2",
    },
    titleClass: {
        type: String,
        default: "text-lg font-bold",
    },
    descriptionClass: {
        type: String,
        default: "text-sm text-gray-600",
    },
});

// Data and state
const artData = ref([]);
const selectedImage = ref(null);
const currentPage = ref(1);
const itemsPerPage = ref(9);

// Pagination logic
const totalPages = computed(() =>
    Math.ceil(artData.value.length / itemsPerPage.value),
);
const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return artData.value.slice(start, end);
});

// Modal methods
const viewImage = (imageUrl) => {
    selectedImage.value = imageUrl;
};

const closeModal = () => {
    selectedImage.value = null;
};

// Pagination methods
const changePage = (page) => {
    currentPage.value = page;
};

// Fetch data on mount
onMounted(async () => {
    try {
        artData.value = await fetchArtData();
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
});
</script>
