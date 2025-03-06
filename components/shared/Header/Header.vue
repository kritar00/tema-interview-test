<template>
  <header :class="['container mx-auto flex justify-between fixed top-0 z-[999]', { 'bg-white shadow-md': isScrolled }]">
    <img src="/assets/white-logo.svg" alt="Page Logo" />
    <div>
      <nav>
        <ul class="flex gap-x-2">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Games</a></li>
          <li><a href="#">Partners</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
