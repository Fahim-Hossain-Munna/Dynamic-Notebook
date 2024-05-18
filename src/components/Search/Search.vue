<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import Container from '../Layouts/Container.vue';
import SingleBlog from '../Layouts/SingleBlog.vue';
import axios from 'axios';
import debounce from 'lodash.debounce';

let Allblogs = ref([])
let currentPage = 1
let showperPage = 6
let blogs = ref([])
let setError = ref()

let searchData = reactive({
    searchableData: '',

})

// Debounced function for fetching blogs
const fetchBlogs = debounce(async (searchTerm) => {
    if (searchTerm) {
        try {
            let response = await axios.get('http://127.0.0.1:8000/api/search/blog?search=' + searchTerm)
            if (response.data.status === 200) {
                Allblogs.value = response.data.data
                blogs.value = response.data.data.slice(0, showperPage)
            }
            if (!response.data.data.length) {
                setError.value = `Can't get any value like ${searchTerm}`
            } else {
                setError.value = ''
            }
        } catch (error) {
            setError.value = 'An error occurred while fetching data'
        }
    } else {
        setError.value = ''
    }
}, 500) // 300ms debounce delay

watch(() => searchData.searchableData, (newSearchTerm) => {
    fetchBlogs(newSearchTerm)
})


let onClickHandler = (page) => {
    blogs.value = Allblogs.value.slice((page - 1) * showperPage, showperPage * page)
}
</script>

<template>
    <div class="my-20 mx-5 xl:mx-0">
        <Container>
            <input v-model="searchData.searchableData"
                class="relative py-3 w-full outline-none border-b-4 border-[#00AAA1] cursor-pointer placeholder:font-noto placeholder:font-medium placeholder:text-base placeholder:text-[#777777]"
                placeholder="search result for ...">
        </Container>
    </div>
    <div class="searchableblog mx-5 xl:mx-0">
        <Container v-if="searchData.searchableData">
            <SingleBlog v-for="blog in blogs" :key="blog" :blog="blog" />
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
        <p v-if="setError" class="font-noto font-semibold text-[40px] text-red-500 flex justify-center">{{ setError }}
        </p>
    </div>
</template>
