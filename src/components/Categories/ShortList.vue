<script setup>
import Title from '../Layouts/Title.vue'
import { useCategoryStore } from '@/store/categories';
import { onMounted } from 'vue';

const categoryStore = useCategoryStore();

onMounted(() => {
    categoryStore.fetchData('http://127.0.0.1:8000/api/category/latest');
});

let arr = [];


</script>

<template>
    <div class="my-14">
        <Title title="Categories" />
        <div class="my-10">
            <router-link v-for="category in categoryStore.categories" :to="'/category/blogs/' + category.slug"
                :key="category"
                class="py-3 border-b flex justify-between items-center font-noto font-semibold text-base text-[#1C1C1C] last:border-b-0">
                <h2>{{ category.title }}</h2>
                <p>{{ category.oneblog_count }}</p>
                <!-- <p>{{ category.oneblog == null ? '00' : Object.keys(category.oneblog).length }}</p> -->
            </router-link>
        </div>
    </div>

</template>
