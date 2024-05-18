<script setup>
import { ref, reactive } from 'vue'
import Container from '../Layouts/Container.vue'
import Title from '../Layouts/Title.vue'
import logo from '/public/uploads/logos/logo-top.png'

let form = reactive({
    firstname: '',
})


let register = () => {
    console.log('hello');
}

</script>

<template>
    <div class="pt-20 mx-5 xl:mx-0">
        <Container>
            <Title title="Registration" subtitle='Page' />
            <form @submit.prevent class="flex justify-center">
            <div class="flex flex-col xl:items-center gap-5 mt-10 xl:p-10 w-full xl:w-1/2 rounded-md xl:shadow-lg">
                    <div class="my-5">
                        <img :src="logo" alt="">
                    </div>
                    <div class="">
                        <label class="block font-noto font-semibold text-base text-[#00AAA1] mb-3" for="firstname">First Name</label>
                        <input type="text" id="firstname" placeholder="First Name" class="border border-[#94D7D3] rounded-[5px] px-4 py-4 w-full lg:w-[500px] placeholder:font-noto placeholder:font-semibold placeholder:text-sm">
                    </div>
                    <div class="">
                        <label class="block font-noto font-semibold text-base text-[#00AAA1] mb-3" for="lastname">Last Name</label>
                        <input type="text" id="lastname" placeholder="Last Name" class="border border-[#94D7D3] rounded-[5px] px-4 py-4 w-full lg:w-[500px] placeholder:font-noto placeholder:font-semibold placeholder:text-sm">
                    </div>
                    <div class="">
                        <label class="block font-noto font-semibold text-base text-[#00AAA1] mb-3" for="email">Email Address</label>
                        <input type="text" id="email" placeholder="Email Address" class="border border-[#94D7D3] rounded-[5px] px-4 py-4 w-full lg:w-[500px] placeholder:font-noto placeholder:font-semibold placeholder:text-sm">
                    </div>
                    <div class="">
                        <label class="block font-noto font-semibold text-base text-[#00AAA1] mb-3" for="password">Password</label>
                        <input type="text" id="password" placeholder="Password" class="border border-[#94D7D3] rounded-[5px] px-4 py-4 w-full lg:w-[500px] placeholder:font-noto placeholder:font-semibold placeholder:text-sm">
                    </div>
                    <div class="">
                        <label class="block font-noto font-semibold text-base text-[#00AAA1] mb-3" for="c_password">Confirm Password</label>
                        <input type="text" id="c_password" placeholder="Confirm Password" class="border border-[#94D7D3] rounded-[5px] px-4 py-4 w-full lg:w-[500px] placeholder:font-noto placeholder:font-semibold placeholder:text-sm">
                    </div>
                    <div class="my-7">
                       <button @click="register()" class="font-noto font-semibold text-base rounded-[5px] text-white bg-[#00AAA1] w-full lg:w-[500px] py-5">Click To Register</button>
                    </div>
                    <div class="flex !justify-end gap-1">
                        <span class="font-noto font-medium text-sm text-[#00AAA1]">Already have an account ?</span>
                       <router-link to="/login"  class="font-noto font-bold text-sm text-[#00AAA1] underline">sign in</router-link>
                    </div>
                </div>
            </form>
        </Container>
    </div>
</template>
