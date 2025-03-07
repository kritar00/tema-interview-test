<template>
  <div class="map-container content-max-width">
    <div class="witch-container">
      <img src="@/assets/witch.png" alt="Witch" class="witch-image" />
      <div class="magic-effect"></div>
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
  @apply px-4 relative;
}

.witch-image {
  @apply z-10 relative max-w-[533px] w-full;
}

.world-map {
  @apply -mt-8 relative;
}
</style>
