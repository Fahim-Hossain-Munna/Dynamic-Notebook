<script setup>
defineProps([
    "class",
    'src',
    'alt'
])
</script>

<template>
    <img :src="src" :alt="alt" :class="class">
</template>
