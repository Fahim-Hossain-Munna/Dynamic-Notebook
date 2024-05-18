<script setup>
import Container from '../Layouts/Container.vue';
</script>

<template>
    <div class="my-20 mx-5 xl:mx-0">
        <Container>
            <div class="flex flex-col justify-center items-center">
                <h2 class="font-noto font-bold text-[200px] text-[#00AAA1]">404</h2>
                <p class="first-letter:uppercase font-noto font-medium text-[17px] text-[#333333]">the page you are
                    looking for does not exist!</p>

                <router-link to="/" class="font-noto font-semibold text-xl text-[#00AAA1] mt-10"><i
                        class="fa-solid fa-arrow-left"></i> Back to
                    Homepage</router-link>
            </div>
        </Container>
    </div>
</template>
