<script setup>
import BlogImg from '/public/uploads/blogs/blog2.jpg'
import AuthorImg1 from '/public/uploads/author/author1.jpg'
import Pictures from '../Layouts/Pictures.vue';
import { useBlogStore } from '@/store/blog';
import { useRoute } from 'vue-router';
import moment from 'moment';

let blogStore = useBlogStore()
let route = useRoute()

defineProps([
    'blog'
])

</script>

<template>
    <div class="singleBlog w-full md:w-[700px] xl:w-[760px] lg:w-[580px] md:flex justify-between my-12">
        <Pictures :src="blogStore.BlogImagePath + blog.image" alt="BlogImg"
            class="w-full h-full md:w-[266px] md:h-[180px] lg:h-[250px] xl:h-[180px] rounded-[5px] object-cover" />
        <div class="w-full mt-5 md:mt-0 md:w-[400px] lg:w-[290px] xl:w-[460px]">
            <span class="font-noto text-xs py-2 px-3 bg-[#DFF1F0] rounded-[7px]">
                {{ blog.onecategory.title }}
            </span>
            <router-link :to="'/single/blog/' + blog.id"
                class="w-full xl:w-[401px] font-noto font-semibold text-xl text-[#222222] mt-2 block">
                {{ blog.title }}
            </router-link>
            <div class="flex gap-3 my-5">
                <div class="flex justify-between items-center gap-2">
                    <Pictures :src="blogStore.userImagePath + blog.oneuser.picture" alt="AuthorImg1"
                        class="w-4 h-4 rounded-full" />
                    <p class="font-noto text-xs text-[#777777]">{{ blog.oneuser.firstname }}</p>
                </div>
                <div class="flex justify-between items-center gap-2 border-l-2 px-3">
                    <i class="fa-solid fa-calendar-days"></i>
                    <p class="font-noto text-xs text-[#777777]">{{ moment(blog.created_at).format('LLL') }}</p>
                </div>
                <div class="flex justify-between items-center gap-2 border-l-2 px-3">
                    <i class="fa-regular fa-clock"></i>
                    <p class="font-noto text-xs text-[#777777]">{{ moment(blog.created_at).startOf('day').fromNow() }}
                    </p>
                </div>

            </div>
            <p class="w-full xl:w-[400px] font-noto text-base text-[#555555] text-justify"
                v-html="blog.description.slice(0, 100)">
            </p>
        </div>
    </div>
</template>
