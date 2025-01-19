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
const page = ref(1);
const items = ref(Array(55));
</script>

<template>
  <UPagination v-model="page" :page-count="5" :total="items.length" />
</template>
