<script setup>
import Container from '../Layouts/Container.vue'
import RecentPost from '../Recent/RecentPost.vue';
import Author from '../Author/Author.vue'
import Advertise from '../Advertise/Add.vue'
import ShortList from '../Categories/ShortList.vue'
import Update from '../Update/Update.vue'
import Tags from '../Tags/Tags.vue'
</script>
<template>
    <section id="content" class="my-20 mx-5 xl:mx-0">
        <Container class="lg:flex justify-between">
            <div class="left lg:w-[650px] xl:w-[856px] w-full">
                <RecentPost />
            </div>
            <div class="right w-full mx-0 lg:mx-10 xl:mx-0 xl:w-[381px]">
                <Author />
                <Advertise />
                <ShortList />
                <Update />
                <Tags />
            </div>
        </Container>
    </section>
</template>
