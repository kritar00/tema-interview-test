<template>
  <div class="map-container content-max-width relative">
    <div class="witch-container">
      <img src="@/assets/witch.png" alt="Witch" class="witch-image" />
    </div>
    <img src="@/assets/pin-map.png" alt="World Map" class="world-map" />
  </div>
</template>

<script>
export default {
  name: "MapComponent",
};
</script>

<style scoped>
.map-container {
  @apply px-4;
}

.witch-container {
  @apply flex items-center justify-center relative;
}

.witch-image {
  @apply z-10 relative max-w-[533px] w-full;
  animation: flyAndPause 6s ease-in-out infinite;
}

.world-map {
  @apply -mt-8 relative;
}

@keyframes flyAndPause {
  0% {
    transform: translateX(100vw);
    filter: blur(8px);
  }
  33% {
    transform: translateX(0);
    filter: blur(0px);
  }
  66% {
    transform: translateX(0);
    filter: blur(0px);
  }
  67% {
    transform: translateX(0);
    filter: blur(0px);
  }
  100% {
    transform: translateX(-100vw);
    filter: blur(8px);
  }
}
</style>