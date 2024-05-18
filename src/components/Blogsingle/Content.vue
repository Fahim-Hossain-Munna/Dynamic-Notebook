<script setup>
import { onMounted, ref } from 'vue';
import Pictures from '../Layouts/Pictures.vue'
import RelatedPost from '../RelatedPost/RelatedPost.vue';
import AuthorImg1 from '/public/uploads/author/author2.jpg'
import BannerImg from '/public/uploads/blogs/banner.jpg'
import { useRoute } from 'vue-router';

const route = useRoute()

import { useBlogStore } from '@/store/blog';
import axios from 'axios';
let blogStore = useBlogStore()

onMounted(async () => {
    await blogStore.fetchSingleBlog('http://127.0.0.1:8000/api/blog/single/' + route.params.id)
})

function removeTag(data) {
    let createDiv = document.createElement('div')
    createDiv.innerHTML = data
    return createDiv.innerText
}


</script>

<template>
    <div class="mainblog">
        <span class="font-noto text-xs py-2 px-3 bg-[#DFF1F0] rounded-[7px]">
            {{ blogStore.SingleBlog.id && blogStore.SingleBlog.onecategory.title }}
        </span>
        <h2 class="xl:w-[740px] my-4 font-noto font-semibold text-[27px] text-[#222222]">{{ blogStore.SingleBlog.title
            }}</h2>
        <div class="flex gap-3 my-4">
            <div class="flex items-center gap-2">
                <Pictures
                    :src="blogStore.SingleBlog.id ? blogStore.userImagePath + blogStore.SingleBlog.oneuser.picture : ''"
                    alt="AuthorImg1" class="w-4 h-4 rounded-full" />
                <p class="font-noto text-xs text-[#777777]">{{ blogStore.SingleBlog.id ?
                    blogStore.SingleBlog.oneuser.firstname : '' }}
                </p>
            </div>
            <div class="flex items-center gap-2 border-l-2 md:border-0 lg:border-l-2 px-3">
                <i class="fa-solid fa-calendar-days"></i>
                <p class="font-noto text-xs text-[#777777]">02 december 2022</p>
            </div>
            <div class="flex items-center gap-2 border-l-2 md:border-0 lg:border-l-2 px-3">
                <i class="fa-regular fa-clock"></i>
                <p class="font-noto text-xs text-[#777777]">3 min. to read</p>
            </div>
        </div>
        <Pictures :src='blogStore.BlogImagePath + blogStore.SingleBlog.image' class="w-full h-[440px] my-10" />
        <p v-html="blogStore.SingleBlog.description"></p>
    </div>
    <div
        class="relative icons flex justify-center items-center gap-5 my-[60px] text-[#999999] after:w-[300px] after:content-[''] after:bg-[#D1E7E5] after:h-[2px] before:w-[300px] before:content-[''] before:bg-[#D1E7E5] before:h-[2px]">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-pinterest"></i>
    </div>
    <div class="relatedpost xl:mb-0 mb-10">
        <RelatedPost />
    </div>
</template>
