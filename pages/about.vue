<script setup lang="ts">
definePageMeta({
  layout: "default",
});
const items = [
  {
    label: "Who is Cardamon?",
    content:
      "Hi i'm Cardamon, I am an illustrator, Full Stack Developer,Singer,Writer,",
    icon: "i-heroicons-question-mark-circle",
  },
  {
    label: "What is Deirdre?",
    content: "Deirdre is a Animated Movie currently in development. It's about a teenage ",
    icon: "i-heroicons-question-mark-circle",
  },
  {
    label: "What is The Autobiography of Cardamon?",
    content:
      "The Autobiography of Cardamon (TAOC) is a semi-autobiography written by me, Cardamon!",
    icon: "i-heroicons-question-mark-circle",
  },
  {
    label: "What is your Fandom Policy?",
    content:
      "Fandom Policy: The policy creators establish for their fandoms, especially since some fans may mistakenly claim ownership of the work.\n\nAll Fanworks are accepted and appreciated.\nDO NOT DOX/HARASS PEOPLE OVER FANWORKS",
    icon: "i-heroicons-question-mark-circle",
  },
];
</script>

<template>
  <Main title="About">
    <div class="m-4">
      <UAccordion color="lime" variant="solid" size="xl" :items="items" />
    </div>
  </Main>
</template>
