<template>
  <div class="countdown">
    <div class="timer">
      <span>{{ days }}</span
      ><span class="text-xs">Days</span>
    </div>
    <span class="separator">:</span>
    <div class="timer">
      <span>{{ hours }}</span
      ><span class="text-xs">Hours</span>
    </div>
    <span class="separator">:</span>
    <div class="timer">
      <span>{{ minutes }}</span
      ><span class="text-xs">Minutes</span>
    </div>
    <span class="separator">:</span>
    <div class="timer">
      <span>{{ seconds }}</span
      ><span class="text-xs">Seconds</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const countdownDate = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 days from now
const days = ref(30);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
let timer = null;

onMounted(() => {
  startCountdown();
});

const startCountdown = () => {
  timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
      clearInterval(timer);
    } else {
      days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
      hours.value = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
    }
  }, 1000);
};
</script>

<style scoped>
.countdown {
  font-family: "Playfair Display", serif;
  box-shadow: 0px 4px 10px 0px #00000040;
  @apply flex justify-center items-center gap-x-1 text-black bg-blue-50 p-5 rounded-lg;
}

.countdown .timer {
  @apply text-4xl md:text-6xl font-[900] flex flex-col w-16;
}

.separator {
  @apply text-[40px];
}
</style>
