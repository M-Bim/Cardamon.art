<script setup lang="ts">
definePageMeta({
    layout: "default",
});
const items = [
    {
        label: "Tumblr",
        content:
            "Hi i'm Cardamon, I am an illustrator and soon-to-be author who specializes in character-driven artwork and storytelling.",
        icon: "i-heroicons-question-mark-circle",
    },
    {
        label: "Instagram",
        content: "Deirdre is a webcomic series currently in development.",
        icon: "i-heroicons-question-mark-circle", //change icon to something more suited
    },
    {
        label: "Twitter",
        content:
            "The Autobiography of Cardamon (TAOC) is a semi-autobiography written by me, Cardamon!",
        icon: "i-heroicons-question-mark-circle", //change icon to something more suited
    },
    {
        label: "Bluesky",
        content:
            "Fandom Policy: The policy creators establish for their fandoms, especially since some fans may mistakenly claim ownership of the work.\n\nAll Fanworks are accepted and appreciated.\nDO NOT DOX/HARASS PEOPLE OVER FANWORKS",
        icon: "i-heroicons-question-mark-circle", //change icon to something more suited
    },
    {
        label: "Youtube",
        content:
            "Fandom Policy: The policy creators establish for their fandoms, especially since some fans may mistakenly claim ownership of the work.\n\nAll Fanworks are accepted and appreciated.\nDO NOT DOX/HARASS PEOPLE OVER FANWORKS",
        icon: "i-heroicons-question-mark-circle", //change icon to something more suited
    },
    {
        label: "Email",
        content: "put link",
        icon: "i-heroicons-question-mark-circle", //change icon to something more suited
    },
];
</script>
<template>
    <h1>Follow Me</h1>
    <UAccordion
        color="lime"
        variant="link"
        size="xl"
        :items="[
            {
                label: '1. What is Nuxt UI?',
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            },
            {
                label: '2. Getting Started',
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            },
            {
                label: '3. Theming',
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            },
            {
                label: '4. Components',
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            },
        ]"
    />
    <template> </template>
</template>
