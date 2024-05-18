<script setup>
import Container from '../Layouts/Container.vue'
import Pictures from '../Layouts/Pictures.vue'
import LogoImg from '/public/uploads/logos/logo-top.png'
</script>
<template>
    <div class="mt-20 bg-[#F2F8F7] px-5 xl:px-0">
        <Container>
            <div class="py-20 flex flex-col xl:flex-row justify-between">
                <div>
                    <Pictures :src="LogoImg" alt="LogoImg" />
                    <p class="w-[236px] font-noto text-base text-[#555555] text-justify mt-6">Did you come here for
                        something in particular or just general Riker</p>
                </div>
                <div class="my-10 xl:my-0">
                    <h2 class="font-noto font-semibold text-[17px] text-[#222222]">Blogs</h2>
                    <ul class="mt-6 flex flex-col gap-[10px] font-noto text-base text-[#555555]">
                        <li>Travel</li>
                        <li>Technology</li>
                        <li>Lifestyle</li>
                        <li>Fashion</li>
                        <li>Business</li>
                    </ul>
                </div>
                <div>
                    <h2 class="font-noto font-semibold text-[17px] text-[#222222]">Quick Links</h2>
                    <ul class="mt-6 flex flex-col gap-[10px] font-noto text-base text-[#555555]">
                        <li>FAQ</li>
                        <li>Terms & Conditions</li>
                        <li>Support</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div class="my-10 xl:my-0">
                    <h2 class="font-noto font-semibold text-[17px] text-[#222222]">Subscribe For Newsletter</h2>
                    <div class="mt-6 flex items-center">
                        <input
                            class="w-[220px] xl:w-[250px] h-[45px] px-6 rounded-l-[6px] bg-[#DFF1F0] placeholder:text-[#777777] placeholder:font-noto placeholder:text-[15px]"
                            placeholder="Your Email">
                        <button
                            class="w-[100px] xl:w-[145px] h-[45px] bg-[#00AAA1] rounded-r-[6px] font-noto text-[15px] text-[#FFFFFF]">Subcribe</button>
                    </div>
                    <h3 class="font-noto font-semibold text-[17px] text-[#222222] mt-10">follow on:</h3>
                    <div class="flex gap-3 mt-7">
                        <i
                            class="fa-brands fa-facebook-f py-2 px-2 rounded border flex justify-center items-center transition-all duration-500 hover:border-[#22C55E] hover:bg-[#22C55E] hover:text-white"></i>
                        <i
                            class="fa-brands fa-github py-2 px-2 rounded border flex justify-center items-center transition-all duration-500 hover:border-[#22C55E] hover:bg-[#22C55E] hover:text-white"></i>
                        <i
                            class="fa-brands fa-linkedin-in py-2 px-2 rounded border flex justify-center items-center transition-all duration-500 hover:border-[#22C55E] hover:bg-[#22C55E] hover:text-white"></i>
                        <i
                            class="fa-brands fa-twitter py-2 px-2 rounded border flex justify-center items-center transition-all duration-500 hover:border-[#22C55E] hover:bg-[#22C55E] hover:text-white"></i>
                    </div>
                </div>
            </div>
        </Container>
    </div>
    <div class="flex justify-center items-center border-t-2 py-6 font-noto text-sm text-[#555555]">
        <h2>Designed & Developed By <span class="text-[#00AAA1]">Fahim Hossain Munna</span></h2>
    </div>
</template>
