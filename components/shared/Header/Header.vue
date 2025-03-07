<template>
  <header
    :class="[
      'w-screen flex justify-between fixed top-0 z-[999] px-4 py-7',
      { 'bg-black shadow-md': isScrolled },
    ]"
  >
    <img src="/assets/white-logo.svg" alt="Page Logo" />
    <div>
      <nav class="hidden md:block">
        <ul class="flex gap-x-2 text-white">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Games</a></li>
          <li><a href="#">Partners</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </div>
    <Sheet>
      <SheetTrigger>
        <MenuIcon :size="36" color="white" />
      </SheetTrigger>
      <SheetContent class="max-w-screen w-full"> </SheetContent>
    </Sheet>
  </header>
</template>

<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shared/sheet";
import { MenuIcon } from "lucide-vue-next";
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
