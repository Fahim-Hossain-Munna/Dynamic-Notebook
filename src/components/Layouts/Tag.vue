<script setup>
defineProps([
    "title",
    "href"
])
</script>
<template>
    <router-link :to="href"
        class="px-3 py-2 font-noto text-[#666666] text-base border border-[#666666] rounded-[4px] transition-all duration-500 cursor-pointer hover:text-white hover:bg-[#00AAA1] hover:border-[#00AAA1] first-letter:uppercase">#{{
            title }}</router-link>
</template>
