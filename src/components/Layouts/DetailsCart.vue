<script setup>
defineProps([
    'details',
    'number'
])
</script>
<template>
    <div class="flex flex-col gap-2 justify-center items-center w-[135px] xl:w-[166px] h-[110px] bg-[#F2F8F7]">
        <h3 class="font-noto font-semibold text-2xl text-[#00AAA1]">{{ number }}</h3>
        <p class="font-noto text-base text-[#222222]">{{ details }}</p>
    </div>
</template>
