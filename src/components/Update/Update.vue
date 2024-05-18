<script setup>
import Title from '../Layouts/Title.vue'
import DetailsCart from '../Layouts/DetailsCart.vue'
import { onMounted, ref } from 'vue';
import axios from 'axios';

let countBlog = ref();
let countCategory = ref();
let countUser = ref();
let countTodayBlog = ref();

onMounted(async () => {
    let response = await axios.get('http://127.0.0.1:8000/api/latest/update')
    countBlog.value = response.data.count_blog
    countCategory.value = response.data.count_category
    countUser.value = response.data.count_user
    countTodayBlog.value = response.data.today_blog

})

</script>
<template>
    <div class="my-20">
        <Title title="Today’s" subtitle="Update" alt="" />
        <div class="flex justify-between flex-wrap gap-12 mt-10">
            <DetailsCart :number="countBlog" details="Total Posts" />
            <DetailsCart :number="countCategory" details="Total Categories" />
            <DetailsCart :number="countUser" details="Total Subscribers" />
            <DetailsCart :number="countTodayBlog" details="Today's Post" />
        </div>
    </div>
</template>
