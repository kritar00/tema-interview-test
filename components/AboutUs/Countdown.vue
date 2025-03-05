<template>
  <div class="countdown">
    <div class="time">
      <span class="days">{{ days }}</span
      >:<span class="hours">{{ hours }}</span
      >:<span class="minutes">{{ minutes }}</span
      >:<span class="seconds">{{ seconds }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const targetDate = new Date("2025-04-03T00:00:00");

const days = ref(30);
const hours = ref(18);
const minutes = ref(20);
const seconds = ref(11);

const startCountdown = () => {
  const interval = setInterval(() => {
    const now = new Date();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    days.value = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    hours.value = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    minutes.value = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((timeLeft % (1000 * 60)) / 1000);
  }, 1000);

  onBeforeUnmount(() => {
    clearInterval(interval);
  });
};

onMounted(() => {
  startCountdown();
});
</script>

<style scoped>
.countdown {
  font-family: "Arial", sans-serif;
  font-size: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f8ff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.time {
  display: flex;
}

.time span {
  margin: 0 5px;
  font-weight: bold;
}

.time .days,
.time .hours,
.time .minutes,
.time .seconds {
  font-size: 50px;
}
</style>
