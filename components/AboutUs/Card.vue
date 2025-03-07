<template>
  <div class="card-container content-max-width">
    <img :src="props.image" alt="Card Image" class="card-image" />
    <div class="card-content">
      <h2 class="card-title">{{ props.title }}</h2>
      <p class="card-description">{{ props.description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
});
</script>

<style scoped>
.card-container {
  @apply relative max-w-[164px] md:max-w-[410px] transform transition-all;
  margin-top: calc(var(--index) * 2.5rem); /* Dynamic margin based on index */
  height: fit-content;
}

.card-image {
  @apply w-full h-auto object-cover rounded-lg shadow-xl;
  aspect-ratio: 3/4;
}

.card-content {
  @apply absolute bottom-0 left-0 right-0 p-4 md:p-6 rounded-lg;
  background: linear-gradient(
    360deg,
    rgba(0, 9, 225, 0.7) 10%,
    rgba(0, 0, 0, 0) 70%
  );
  transform: translateY(calc(var(--index) * 20%)); /* Dynamic vertical shift */
}

.card-title {
  @apply text-white text-lg md:text-2xl font-bold mb-2;
}

.card-description {
  @apply text-white text-xs md:text-base opacity-90;
}
</style>
