<script setup>
import Pictures from '../Layouts/Pictures.vue';
import AdvertiseImg from '/public/uploads/add/addvertise.png'

</script>

<template>
    <div class="w-full">
        <Pictures :src="AdvertiseImg" alt="AdvertiseImg" class="w-full h-[300px] object-fill" />
    </div>
</template>