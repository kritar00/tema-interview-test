<template>
  <header
    :class="[
      'w-screen flex justify-between fixed top-0 z-40 px-4 lg:px-10 py-7',
      { 'bg-black shadow-md': isScrolled },
    ]"
  >
    <img src="/assets/white-logo.svg" alt="Page Logo" class="z-40" />
    <div>
      <nav class="hidden lg:flex gap-x-10 items-center">
        <ul class="flex gap-x-20 text-white">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Games</a></li>
          <li><a href="#">Partners</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <LanguageDropdown button-variants="ghost" is-hide-label button-class="text-white" />
      </nav>
    </div>
    <Sheet>
      <SheetTrigger class="lg:hidden">
        <MenuIcon :size="36" color="white" />
      </SheetTrigger>
      <SheetContent
        class="[&>button>svg:first-child]:w-10 [&>button>svg:first-child]:h-10 max-w-screen w-full"
      >
        <SheetHeader>
          <LanguageDropdown />
        </SheetHeader>
        <ul class="flex flex-col gap-6 items-center font-bold mt-10">
          <li><a href="#">About Us</a></li>
          <span class="border-b h-[1px] block w-full"></span>
          <li><a href="#">Games</a></li>
          <span class="border-b h-[1px] block w-full"></span>
          <li><a href="#">Partners</a></li>
          <span class="border-b h-[1px] block w-full"></span>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </SheetContent>
    </Sheet>
  </header>
</template>

<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/shared/sheet";
import { MenuIcon } from "lucide-vue-next";
import { ref, onMounted, onUnmounted } from "vue";
import LanguageDropdown from "./components/LanguageDropdown.vue";

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
