<script setup>
import Title from '../Layouts/Title.vue';
import Pictures from '../Layouts/Pictures.vue';
import Authorimg from '/public/uploads/author/author3.jpg'

import { useAuthorStore } from '@/store/author';
import { onMounted } from 'vue';

let authorStore = useAuthorStore();

onMounted(() => {
  authorStore.fetchData('http://127.0.0.1:8000/api/author')
})

</script>

<template>
  <Title title="Top" subtitle="Authors" />

  <div class="my-11 w-full flex justify-start gap-6" v-for="item in authorStore.authors" :key="item.id">
    <Pictures :src="authorStore.img_link + item.picture" :alt="authorStore.img_link"
      class="w-20 h-20 rounded-full object-cover" />
    <div>
      <h2 class="font-noto font-semibold text-[17px] text-[#222222] mb-2">{{ item.firstname + ' ' + item.lastname }}
      </h2>
      <p class="font-noto font-light text-xs text-[#666666] mb-[14px] text-justify">{{ item.email }}
      </p>
      <div class="text-[8px] flex gap-3">
        <i
          class="fa-brands fa-facebook-f py-2 px-2 rounded border flex justify-center items-center transition-all duration-500 hover:border-[#22C55E] hover:bg-[#22C55E] hover:text-white"></i>
        <i
          class="fa-brands fa-github py-2 px-2 rounded border flex justify-center items-center transition-all duration-500 hover:border-[#22C55E] hover:bg-[#22C55E] hover:text-white"></i>
        <i
          class="fa-brands fa-linkedin-in py-2 px-2 rounded border flex justify-center items-center transition-all duration-500 hover:border-[#22C55E] hover:bg-[#22C55E] hover:text-white"></i>
      </div>
    </div>
  </div>
</template>
