<script setup lang="ts">
definePageMeta({
    layout: "default",
});

// supabaseService.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://<your-project>.supabase.co";
const supabaseKey = "<your-anon-key>";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchArtData() {
    const { data, error } = await supabase.from("art_table").select("*");
    if (error) throw error;
    return data;
}

import ArtGallery from "~/components/ArtGallery.vue";
</script>
<template>
    <div class="grid grid-cols-4 md:grid-cols-6 gap-4">
        <ArtGallery
            gridClass="grid grid-cols-2 gap-6"
            :itemClass="'custom-class'"
        />
        <div>
            <img
                class="h-auto max-w-full rounded-lg object-fill"
                provider="supabase"
                src="https://zvplqgopkztvgbwknbwb.supabase.co/storage/v1/object/public/artworks/artwork/FishImage.jpeg"
                alt="a fish"
            />
        </div>
        <div>
            <img
                class="h-auto max-w-full rounded-lg object-fill"
                src="https://zvplqgopkztvgbwknbwb.supabase.co/storage/v1/object/public/artworks/artwork/I%20bought%20a%20gun!.PNG?t=2025-01-01T03%3A20%3A34.514Z"
                alt=""
            />
        </div>
        <div>
            <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                alt=""
            />
        </div>
        <div>
            <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                alt=""
            />
        </div>
        <div>
            <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                alt=""
            />
        </div>
        <div>
            <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                alt=""
            />
        </div>
        <div>
            <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
                alt=""
            />
        </div>
        <div>
            <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
                alt=""
            />
        </div>
        <div>
            <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
                alt=""
            />
        </div>
        <div>
            <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
                alt=""
            />
        </div>
        <div>
            <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
                alt=""
            />
        </div>
        <div>
            <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
                alt=""
            />
        </div>
    </div>
</template>
