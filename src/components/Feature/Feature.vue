<script setup>
import Container from '../Layouts/Container.vue';
import Title from '../Layouts/Title.vue';
import Pictures from '../Layouts/Pictures.vue';
import BlogImg1 from '/public/uploads/blogs/blog1.jpg'
import AuthorImg1 from '/public/uploads/author/author1.jpg'
import moment from "moment";

import { useBlogStore } from '@/store/blog';
import { onMounted } from 'vue';

let blogStore = useBlogStore()

onMounted(() => {
    blogStore.fetchFeatureBlog("http://127.0.0.1:8000/api/blogs/feature");
    blogStore.fetchPopularBlog("http://127.0.0.1:8000/api/blogs/popular");
})

function removeTag(html) {
    var tempDiv = document.createElement("div");
    tempDiv.innerHTML = html.slice(0, 200);
    return tempDiv.innerText;
}

</script>

<template>
    <section class="bg-[#F2F8F7] md:py-20 py-10">
        <Container class="md:flex justify-between">
            <div class="md:w-[832px] lg:w-[600px] xl:w-[832px] mx-5 md:mx-5 lg:mx-5 xl:mx-0">
                <Title title="Featured" subtitle="This month" />
                <!-- blog part start -->
                <div class="md:flex justify-between">
                    <!-- single blog section first -->
                    <div class="lg:w-[250px] xl:w-[400px] md:w-[200px] w-full mt-12"
                        v-for="blog in blogStore.featureBlog" :key="blog.id">
                        <span class="font-noto text-xs py-2 px-3 bg-[#DFF1F0] rounded-[7px]">
                            {{ blog.onecategory.title }}
                        </span>
                        <h3
                            class="lg:w-[250px] xl:[334px] md:w-[180px] font-noto font-semibold text-xl text-[#222222] mt-2">
                            <router-link :to="'/single/blog/' + blog.id">{{ blog.title.slice(0, 20) }} ...</router-link>
                        </h3>
                        <Pictures :src="blogStore.BlogImagePath + blog.image"
                            :alt="blogStore.BlogImagePath + blog.image"
                            class="my-6 w-full h-[230px] rounded-[7px] object-cover" />
                        <div class="flex md:flex-wrap lg:flex-row xl:flex-row gap-3 mb-5">
                            <div class="flex justify-between items-center gap-2">
                                <Pictures :src="blogStore.userImagePath + blog.oneuser.picture" alt="AuthorImg1"
                                    class="w-4 h-4 rounded-full" />
                                <p class="font-noto text-xs text-[#777777]">{{ blog.oneuser.firstname }}</p>
                            </div>
                            <div class="flex justify-between items-center gap-2 border-l-2 px-3">
                                <i class="fa-solid fa-calendar-days"></i>
                                <p class="font-noto text-xs text-[#777777]">{{
                                    moment(blog.created_at).format("lll")
                                    }}
                                </p>
                            </div>
                            <div class="flex justify-between items-center gap-2 border-l-2 px-3">
                                <i class="fa-regular fa-clock"></i>
                                <p class="font-noto text-xs text-[#777777]">{{
                                    moment(blog.created_at).startOf('day').fromNow() }}</p>
                            </div>

                        </div>
                        <p class="font-noto text-base text-[#555555] text-justify">
                            {{ removeTag(blog.description) }}
                        </p>
                    </div>
                </div>
                <!-- blog part end -->
            </div>

            <!-- popular part start -->
            <div class="md:w-[430px] w-full pt-20 px-5 md:px-5 md:pt-0 lg:pt-0 ">
                <Title title="populer" subtitle="Posted" class="mb-12" />
                <div v-for="item in blogStore.PopularBlog" :key="item"
                    class="w-full pl-5 md:pl-5 lg:pl-10 border-l-[3px] transition-all duration-500 hover:border-l-[3px] hover:border-[#00AAA1]">
                    <span class="font-noto text-xs py-2 px-3 bg-[#DFF1F0] rounded-[7px]">
                        {{ item.onecategory.title }}
                    </span>
                    <router-link :to="'/single/blog/' + item.id"
                        class="block font-noto font-semibold text-base text-[#222222] mt-2">{{ item.title
                        }}</router-link>
                    <div class="flex gap-3 my-4">
                        <div class="flex items-center gap-2">
                            <Pictures :src="blogStore.userImagePath + item.oneuser.picture" alt="AuthorImg1"
                                class="w-4 h-4 rounded-full" />
                            <p class="font-noto text-xs text-[#777777]">{{ item.oneuser.firstname }}</p>
                        </div>
                        <div class="flex items-center gap-2 border-l-2 md:border-0 lg:border-l-2 px-3">
                            <i class="fa-solid fa-calendar-days"></i>
                            <p class="font-noto text-xs text-[#777777]">{{ moment(item.created_at).format('lll') }}</p>
                        </div>
                        <div class="flex items-center gap-2 border-l-2 md:border-0 lg:border-l-2 px-3">
                            <i class="fa-regular fa-clock"></i>
                            <p class="font-noto text-xs text-[#777777]">{{
                                moment(item.created_at).startOf('hour').fromNow() }}</p>
                        </div>

                    </div>
                    <p class="w-full text-justify text-[#555555] font-noto pb-12"
                        v-html="item.description.slice(0, 200)">
                    </p>
                </div>
            </div>
        </Container>
    </section>
</template>
