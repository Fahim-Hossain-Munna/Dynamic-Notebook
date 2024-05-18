<script setup>
import Title from '../Layouts/Title.vue'
import Tag from '../Layouts/Tag.vue'

import { useTagStore } from '@/store/tags';
import { onMounted } from 'vue';

let tagStore = useTagStore();

onMounted(() => {
    tagStore.fetchData('http://127.0.0.1:8000/api/tag/latest');
})

</script>

<template>
    <Title title="Search" subtitle="With Tags" />
    <div class="my-10 flex flex-wrap gap-3">
        <Tag v-for="tag in tagStore.tags" :key="tag.id" :title="tag.title" :href="'/tag/blogs/' + tag.slug" />
    </div>
</template>
