<template>
  <footer class="footer-container">
    <div class="absolute inset-0 bg-cover bg-center opacity-50" :style="{ backgroundImage: 'url(' + footerImg + ')' }">
    </div>
    <div class="relative max-w-6xl mx-auto gap-y-16 flex-col lg:flex-row flex justify-between">
      <div class="flex flex-col items-center">
        <div>
          <img src="/assets/white-logo.svg" alt="" />
        </div>
        <div class="flex gap-4 mt-10">
          <img src="/assets/icons/twitter.svg" alt="" />
          <img src="/assets/icons/facebook.svg" alt="" />
          <img src="/assets/icons/linkedin.svg" alt="" />
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-between gap-8 mb-12">
        <!-- Address Section -->
        <div class="space-y-4">
          <p class="text-2xl font-bold mb-4">Address</p>
          <div class="flex gap-x-2 items-start">
            <div class="w-10 h-10 flex items-center justify-center">
              <img src="/assets/icons/location.svg" alt="" class="">
            </div>
            <div>
            </div>
            <div class="flex flex-col gap-y-3">
              <p class="text-sm opacity-80">
                Valletta Buildings, South Street,<br />
                Valletta - VLT 1103 Malta, US
              </p>
              <p class="text-sm opacity-80">
                20 Phan Dang Luu street,<br />
                Hai Chau District, Danang city, Vietnam
              </p>
            </div>
          </div>
          <div class="flex md:flex-row gap-4 mt-4 items-center">
            <div class="w-10 h-10 flex items-center justify-center">
              <img src="/assets/icons/phone.svg" alt="" class="">
            </div>
            <div>
              <span class="text-sm opacity-80">(+1) 555-0108-000</span> or
              <span class="text-sm opacity-80">(+236) 555-0108</span>
            </div>
          </div>
        </div>

        <!-- Subscribe Section -->
        <div class="md:max-w-[400px] w-full">
          <p class="text-2xl font-bold mb-4">Subscribe</p>
          <p class="text-sm opacity-80 mb-6">
            Subscribe to our newsletter and be the first to know about our
            updates.
          </p>

          <form class="relative">
            <Input type="email" placeholder="Enter your email"
              class="pr-16 placeholder:text-white border border-white h-14" />
            <button type="submit" class="absolute right-3 top-1/2 -translate-y-1/2">
              <ArrowRight class="text-white/60 hover:text-white transition-colors" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import Input from "./input/Input.vue";
import footerImg from "@/assets/footer.jpg";
</script>

<style scoped>
.footer-container {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    linear-gradient(180deg, rgba(0, 10, 255, 0.5) 0%, rgba(0, 0, 0, 0) 136.61%);
  @apply relative text-white py-12 px-4 md:px-8;
}
</style>
