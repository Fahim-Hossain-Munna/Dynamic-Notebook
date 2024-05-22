<script setup>
import { onMounted, ref } from 'vue';
import Container from '../Layouts/Container.vue';
import Listitem from '../Layouts/Listitem.vue';
import Pictures from '../Layouts/Pictures.vue';
import LogoImg from '/public/uploads/logos/logo-top.png'
import { useAuthorStore } from '@/store/author';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

let bar = ref(false)
let authStore = useAuthorStore();

let sideBar = () => {
    bar.value = !bar.value
}

let logout = async () => {
    authStore.logout()
    toast("Customer Logout Successfull", {
        autoClose: 2000,
    });
}


</script>

<template>
    <nav class="w-full bg-[#E8F3F3]">
        <Container class="flex justify-between items-center py-5 md:mx-5 xl:mx-auto mx-0 relative">
            <div class="menu md:w-full">
                <ul :class="bar == false ? 'hidden' : ''"
                    class="md:flex z-50 w-full lg:gap-x-10 md:gap-x-5 md:static absolute top-16 left-0 justify-start items-center font-noto font-semibold text-base text-[#333333]">
                    <Listitem title="Homepage" href="/"
                        class="md:py-0 py-3 md:bg-transparent bg-[#E8F3F3] px-5 md:px-0 transition-all duration-500 cursor-pointer md:hover:bg-transparent md:hover:text-[#00AAA1] hover:bg-[#00AAA1] hover:text-white" />
                    <Listitem title="About" href="/"
                        class="md:py-0 py-3 md:bg-transparent bg-[#E8F3F3] px-5 md:px-0 transition-all duration-500 cursor-pointer md:hover:bg-transparent md:hover:text-[#00AAA1] hover:bg-[#00AAA1] hover:text-white" />
                    <Listitem title="Categories" href="/"
                        class="md:py-0 py-3 md:bg-transparent bg-[#E8F3F3] px-5 md:px-0 transition-all duration-500 cursor-pointer md:hover:bg-transparent md:hover:text-[#00AAA1] hover:bg-[#00AAA1] hover:text-white" />
                    <Listitem title="Pages" href="/"
                        class="md:py-0 py-3 md:bg-transparent bg-[#E8F3F3] px-5 md:px-0 transition-all duration-500 cursor-pointer md:hover:bg-transparent md:hover:text-[#00AAA1] hover:bg-[#00AAA1] hover:text-white" />
                </ul>
            </div>
            <div class="logo menu md:w-full w-2/4 md:flex mx-5 justify-center">
                <Pictures :src="LogoImg" alt="logo-img" />
            </div>
            <div class="end md:w-full w-1/3">
                <ul
                    class="flex gap-x-3 md:gap-x-7 lg:gap-x-11 lg:justify-end justify-between items-center font-noto font-semibold md:text-base text-sm text-[#333333]">
                    <li> <router-link to="/search/page"><i class="fa-solid fa-magnifying-glass"></i></router-link> </li>
                    <li v-if="authStore.isAuthenticate" @click="logout()" class="cursor-pointer"><i
                            class="fa-solid fa-arrow-right-from-bracket"></i></li>
                    <Listitem v-if="authStore.isAuthenticate"
                        :title="authStore.authCustomer.firstname + ' ' + authStore.authCustomer.lastname" href="" />
                    <Listitem v-else title="Login/Register" href="/register" />
                </ul>
            </div>
            <div class="md:hidden w-1/4 mx-5 flex justify-end cursor-pointer">
                <ul>
                    <li @click="sideBar()"><i :class="bar ? 'fa-solid fa-x' : 'fa-solid fa-bars'" class="text-xl"></i>
                    </li>
                </ul>
            </div>
        </Container>
    </nav>
</template>
