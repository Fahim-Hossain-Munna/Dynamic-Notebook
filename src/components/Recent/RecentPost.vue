<script setup>
import Title from '../Layouts/Title.vue';
import SingleBlog from '../Layouts/SingleBlog.vue'
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useBlogStore } from '@/store/blog';

let blogStore = useBlogStore()

let Allblogs = ref([])
let currentPage = 1
let showperPage = 6
let blogs = ref([])
onMounted(async () => {
    let response = await axios.get('http://127.0.0.1:8000/api/blogs')
    Allblogs.value = response.data.data
    blogs.value = Allblogs.value.slice(0, showperPage)
})

let onClickHandler = (page) => {
    blogs.value = Allblogs.value.slice((page - 1) * showperPage, showperPage * page)
}

</script>
<template>
    <section>
        <Title title="Recently" subtitle="Posted" />
        <SingleBlog v-for="blog in blogs" :key="blog" :blog="blog" />
        <div class="flex justify-center mb-20 lg:mb-0">
            <!-- pagination -->
            <vue-awesome-paginate :total-items="Allblogs.length" :items-per-page="showperPage" v-model="currentPage"
                :on-click="onClickHandler" :show-breakpoint-buttons="false" :max-pages-shown="3">
                <template #prev-button>
                    <span> <i class="fa-solid fa-arrow-left"></i> Previous </span>
                </template>
                <template #next-button>
                    <span> Next <i class="fa-solid fa-arrow-right"></i> </span>
                </template>
            </vue-awesome-paginate>
            <!-- pagination -->
        </div>
    </section>
</template>


<style>
.pagination-container {
    display: flex;
    column-gap: 10px;
}

.back-button,
.next-button {
    width: 120px !important;
}

.paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 5px;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid rgb(217, 217, 217);
    color: black;
}

.paginate-buttons:hover {
    background-color: #d8d8d8;
}

.active-page {
    background-color: #00AAA1;
    border: 1px solid #00AAA1;
    color: white;
}

.active-page:hover {
    background-color: #00AAA1;
}

@media (min-width: 320px) and (max-width:540px) {
    .pagination-container {
        column-gap: 3px !important;
    }

    .paginate-buttons {
        height: 30px;
        width: 30px;
        border-radius: 2px;
        cursor: pointer;
        background-color: transparent;
        border: 1px solid rgb(217, 217, 217);
        color: black;
    }

    .back-button,
    .next-button {
        width: 100px !important;
    }

    .paginate-buttons:hover {
        background-color: #d8d8d8;
    }

    .active-page {
        background-color: #00AAA1;
        border: 1px solid #00AAA1;
        color: white;
    }

    .active-page:hover {
        background-color: #00AAA1;
    }

}
</style>
