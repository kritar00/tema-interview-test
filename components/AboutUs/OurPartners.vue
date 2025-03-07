<template>
  <div
    class="h-[478px] flex flex-col gap-y-[80px] items-center justify-center bg-[#F6F6F6] mt-32 px-5"
  >
    <h2 class="text-[60px] leading-[60px] font-[900]">Our Partners</h2>
    <Carousel
      :opts="{
        loop: true,
      }"
      class="relative w-full content-max-width"
    >
      <CarouselContent>
        <CarouselItem
          v-for="(image, index) in images"
          :key="index"
          :class="`p-1 lg:basis-1/3 xl:basis-1/5`"
        >
          <img
            :src="image"
            alt="Partner Logo"
            class="w-full H-FULL max-h-[72px] md:max-h-[100px] object-contain"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="rounded-md shadow-md left-0 xl:-left-12" />
      <CarouselNext class="rounded-md shadow-md right-0 xl:-right-12" />
    </Carousel>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Carousel from "../shared/carousel/Carousel.vue";
import CarouselContent from "../shared/carousel/CarouselContent.vue";
import CarouselItem from "../shared/carousel/CarouselItem.vue";
import CarouselNext from "../shared/carousel/CarouselNext.vue";
import CarouselPrevious from "../shared/carousel/CarouselPrevious.vue";

import twoK from "@/assets/partners/2k.png";
import bookPro from "@/assets/partners/book-pro.png";
import disney from "@/assets/partners/disney.png";
import ea from "@/assets/partners/ea.png";
import game from "@/assets/partners/game.png";
import powerUp from "@/assets/partners/power-up.png";
import sega from "@/assets/partners/sega.png";

const images = ref([ea, twoK, bookPro, disney, ea, game, powerUp, sega]);
</script>

<style>
/* Add any necessary styles here */
</style>
