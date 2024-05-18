<script setup>

defineProps([
    "title",
    "subtitle",
    "class"
])
</script>

<template>
    <p class="font-noto font-semibold text-[22px]" :class="class">
            <span class="bg-[#00AAA1] text-white py-1 px-1">{{ title }}</span>
            {{ subtitle }}
           </p>
</template>
