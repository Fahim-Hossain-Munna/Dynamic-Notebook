<script setup>
defineProps([
    "class"
])
</script>

<template>
    <div class="max-w-[1300px] mx-auto" :class="class">
        <slot></slot>
    </div>
</template>
