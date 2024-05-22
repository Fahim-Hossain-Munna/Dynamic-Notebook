<script setup>
import { ref, reactive, watch } from 'vue'
import Container from '../Layouts/Container.vue'
import Title from '../Layouts/Title.vue'
import logo from '/public/uploads/logos/logo-top.png'
import { useAuthorStore } from '@/store/author'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

let authStore = useAuthorStore();

let form = reactive({
    email: '',
    password: '',
})

watch(form, () => {
    if (form.email) {
        authStore.errors.email = ""
    }
    if (form.password) {
        authStore.errors.password = ""
    }
})


let login = async () => {
    await authStore.login("http://127.0.0.1:8000/api/customer/login", form.email, form.password)
    if (authStore.isAuthenticate) {
        toast(authStore.successMsg.login, {
            autoClose: 2000,
        });
    }
}

</script>

<template>
    <div class="pt-20 mx-5 xl:mx-0">
        <Container>
            <Title title="Login" subtitle='Page' />
            <form @submit.prevent class="flex justify-center">
                <div class="flex flex-col xl:items-center gap-5 mt-10 xl:p-10 w-full xl:w-1/2 rounded-md xl:shadow-lg">
                    <div class="my-5">
                        <img :src="logo" alt="">
                    </div>
                    <div class="">
                        <label class="block font-noto font-semibold text-base text-[#00AAA1] mb-3" for="email">Email
                            Address</label>
                        <input type="email" v-model="form.email" id="email" placeholder="Email Address"
                            class="border border-[#94D7D3] rounded-[5px] px-4 py-4 w-full lg:w-[500px] placeholder:font-noto placeholder:font-semibold placeholder:text-sm">
                        <p v-if="authStore.errors.email" class="mt-2 font-noto font-medium text-red-600 text-sm">
                            {{
                                authStore.errors.email }}</p>
                    </div>
                    <div class="">
                        <label class="block font-noto font-semibold text-base text-[#00AAA1] mb-3"
                            for="password">Password</label>
                        <input type="password" v-model="form.password" id="password" placeholder="Password"
                            class="border border-[#94D7D3] rounded-[5px] px-4 py-4 w-full lg:w-[500px] placeholder:font-noto placeholder:font-semibold placeholder:text-sm">
                        <p v-if="authStore.errors.password" class="mt-2 font-noto font-medium text-red-600 text-sm">
                            {{
                                authStore.errors.password }}</p>
                    </div>
                    <div class="my-7">
                        <button @click="login()"
                            class="font-noto font-semibold text-base rounded-[5px] text-white bg-[#00AAA1] w-full lg:w-[500px] py-5">Click
                            To Register</button>
                    </div>
                    <div class="flex !justify-end gap-1">
                        <span class="font-noto font-medium text-sm text-[#00AAA1]">Don't have an account ?</span>
                        <router-link to="/register" class="font-noto font-bold text-sm text-[#00AAA1] underline">sign
                            up</router-link>
                    </div>
                </div>
            </form>
        </Container>
    </div>
</template>
