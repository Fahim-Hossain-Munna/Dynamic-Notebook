<template>
                   <div class="md:flex flex flex-wrap justify-between mb-20">
                    <!-- single blog section first -->
                    <div class="lg:w-[250px] xl:w-[500px] md:w-[200px] w-full mt-12"
                        v-for="blog in blogs" :key="blog.id">
                        <span class="font-noto text-xs py-2 px-3 bg-[#DFF1F0] rounded-[7px]">
                            {{ blog.onecategory.title }}
                        </span>
                        <h3
                            class="lg:w-[250px] xl:[334px] md:w-[180px] font-noto font-semibold text-xl text-[#222222] mt-2">
                            <router-link :to="'/single/blog/' + blog.id">{{ blog.title }} ...</router-link>
                        </h3>
                        <Pictures :src="blogStore.BlogImagePath + blog.image"
                            class="my-6 w-full h-[230px] rounded-[7px] object-cover" />
                        <div class="flex md:flex-wrap lg:flex-row xl:flex-row gap-3 mb-5">
                            <div class="flex justify-between items-center gap-2">
                                <Pictures :src="blogStore.userImagePath + blog.oneuser.picture" alt="AuthorImg1"
                                    class="w-4 h-4 rounded-full" />
                                <p class="font-noto text-xs text-[#777777]">{{ blog.oneuser.firstname }}</p>
                            </div>
                            <div class="flex justify-between items-center gap-2 border-l-2 px-3">
                                <i class="fa-solid fa-calendar-days"></i>
                                <p class="font-noto text-xs text-[#777777]"> {{ moment(blog.created_at).format('LLL') }}
                                </p>
                            </div>
                            <div class="flex justify-between items-center gap-2 border-l-2 px-3">
                                <i class="fa-regular fa-clock"></i>
                                <p class="font-noto text-xs text-[#777777]">{{ moment(blog.created_at).startOf('day').fromNow() }}</p>
                            </div>

                        </div>
                        <p class="font-noto text-base text-[#555555] text-justify"  v-html="blog.description.slice(0, 100)">
                            
                        </p>
                    </div>
                </div>
</template>
<script setup>
import Pictures from './Pictures.vue';
import { useBlogStore } from '@/store/blog';
import moment from 'moment';

let blogStore = useBlogStore()
defineProps([
    'blogs'
])


</script>
