<script setup>
defineProps([
    "class",
    'title',
    'href',
])
</script>

<template>
    <li :class="class">
        <router-link :to="href">
            {{ title }}
        </router-link>
    </li>
</template>
