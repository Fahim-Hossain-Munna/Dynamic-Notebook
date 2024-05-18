<script setup>
import Title from '../Layouts/Title.vue';
import Pictures from '../Layouts/Pictures.vue';
import BlogImg1 from '/public/uploads/blogs/blog1.jpg'
import AuthorImg1 from '/public/uploads/author/author1.jpg'
</script>

<template>
    <div class="md:w-[832px] lg:w-[600px] xl:w-[832px] mx-5 md:mx-5 lg:mx-5 xl:mx-0">
        <Title title="See related" subtitle="Posts" />
        <!-- blog part start -->
        <div class="md:flex justify-between items-center">
            <!-- single blog section first -->
            <div class="lg:w-[250px] xl:w-[400px] md:w-[200px] w-full mt-12" v-for="item in 2" :key="item">
                <span class="font-noto text-xs py-2 px-3 bg-[#DFF1F0] rounded-[7px]">
                    Travel
                </span>
                <h3 class="lg:w-[250px] xl:[334px] md:w-[180px] font-noto font-semibold text-xl text-[#222222] mt-2">
                    set video playback speed with javascript
                </h3>
                <Pictures :src="BlogImg1" alt="BlogImg1" class="my-6 w-full h-[230px] rounded-[7px] object-cover" />
                <div class="flex md:flex-wrap lg:flex-row xl:flex-row gap-3 mb-5">
                    <div class="flex justify-between items-center gap-2">
                        <Pictures :src="AuthorImg1" alt="AuthorImg1" class="w-4 h-4 rounded-full" />
                        <p class="font-noto text-xs text-[#777777]">Jenny kiaa</p>
                    </div>
                    <div class="flex justify-between items-center gap-2 border-l-2 px-3">
                        <i class="fa-solid fa-calendar-days"></i>
                        <p class="font-noto text-xs text-[#777777]">02 december 2022</p>
                    </div>
                    <div class="flex justify-between items-center gap-2 border-l-2 px-3">
                        <i class="fa-regular fa-clock"></i>
                        <p class="font-noto text-xs text-[#777777]">3 min. to read</p>
                    </div>

                </div>
                <p class="font-noto text-base text-[#555555] text-justify">
                    Did you come here for something in particular or just general Riker-bashing? And blowing
                    into
                </p>
            </div>
        </div>
        <!-- blog part end -->
    </div>
</template>
