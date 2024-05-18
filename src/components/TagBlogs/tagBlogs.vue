<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import Container from '../Layouts/Container.vue';
import SingleBlog from '../Layouts/SingleBlog.vue';
import axios from 'axios';

import { useRoute } from 'vue-router';
import Title from '../Layouts/Title.vue';

const route = useRoute();
let showperPage = 8
let currentPage = 1
let Allblogs = ref([])
let blogs = ref([])

onMounted(async () => {
    let response = await axios.get('http://127.0.0.1:8000/api/tag/blogs/' + route.params.slug)
    Allblogs.value = response.data.data
    blogs.value = response.data.data.slice(0, showperPage);
})

let onClickHandler = (page) => {
    blogs.value = Allblogs.value.slice((page - 1) * showperPage, showperPage * page);
}


</script>

<template>

    <div class="categoryBlog my-20 mx-5 xl:mx-0">
        <Container>
            <Title title="Tag" subtitle="with blogs" />
            <SingleBlog v-for="blog in blogs" :key="blog.id" :blog="blog" />
            <vue-awesome-paginate v-if="blogs.length > 0" :total-items="Allblogs.length" :items-per-page="showperPage"
                v-model="currentPage" :on-click="onClickHandler" :show-breakpoint-buttons="false" :max-pages-shown="3">
                <template #prev-button>
                    <span> <i class="fa-solid fa-arrow-left"></i> Previous </span>
                </template>
                <template #next-button>
                    <span> Next <i class="fa-solid fa-arrow-right"></i> </span>
                </template>
            </vue-awesome-paginate>
        </Container>
    </div>

</template>