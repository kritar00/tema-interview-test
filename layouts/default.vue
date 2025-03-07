<template>
  <div>
    <div class="overflow-x-hidden">
      <slot />
    </div>
    <div class="flex bg-black items-center justify-center py-8 text-white">2017 Copyright. Policy.</div>
    <button
      @click="scrollToEnd"
      class="fixed bottom-4 right-4 p-4 rounded-full shadow-md shadow-[#292D32] bg-white text-black z-50"
    >
      <img src="/assets/icons/arrow-slim-down.svg" alt="" :class="{ 'h-7 w-7': true, 'rotate-180': isScrolledDown }">
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolledDown = ref(false);

const handleScroll = () => {
  isScrolledDown.value = window.scrollY > 0;
};

const scrollToEnd = () => {
  if (isScrolledDown.value) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
