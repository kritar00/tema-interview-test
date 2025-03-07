<template>
  <div class="grid-container">
    <Card
      v-for="(game, index) in games"
      :key="index"
      :title="game.title"
      :description="game.description"
      :image="game.image"
      :class="{ 'even-column': isEvenColumn(index) }"
    />
  </div>
</template>

<script lang="ts" setup>
import Card from "./Card.vue";
import img1 from "~/assets/games/1.png";
import img2 from "~/assets/games/2.png";
import img3 from "~/assets/games/3.png";
import img4 from "~/assets/games/4.png";
import img5 from "~/assets/games/5.png";
import img6 from "~/assets/games/6.png";
import img7 from "~/assets/games/7.png";
import img8 from "~/assets/games/8.png";
import img9 from "~/assets/games/9.png";
import img10 from "~/assets/games/10.png";
import img11 from "~/assets/games/11.png";
import img12 from "~/assets/games/12.png";

const games = [
  { title: "E-Space", description: "Lorem ipsum dolor sit amet.", image: img1 },
  { title: "Pirates", description: "Lorem ipsum dolor sit amet.", image: img2 },
  {
    title: "Magic Tree",
    description: "Lorem ipsum dolor sit amet.",
    image: img3,
  },
  {
    title: "Kingland",
    description: "Lorem ipsum dolor sit amet.",
    image: img4,
  },
  {
    title: "Witch Party",
    description: "Lorem ipsum dolor sit amet.",
    image: img5,
  },
  {
    title: "Aborigines",
    description: "Lorem ipsum dolor sit amet.",
    image: img6,
  },
  {
    title: "The Last Game",
    description: "Lorem ipsum dolor sit amet.",
    image: img7,
  },
  { title: "Rocky", description: "Lorem ipsum dolor sit amet.", image: img8 },
  {
    title: "Cinderella",
    description: "Lorem ipsum dolor sit amet.",
    image: img9,
  },
  {
    title: "G-Dragon",
    description: "Lorem ipsum dolor sit amet.",
    image: img10,
  },
  {
    title: "Blue Fire",
    description: "Lorem ipsum dolor sit amet.",
    image: img11,
  },
  {
    title: "Egypt Game",
    description: "Lorem ipsum dolor sit amet.",
    image: img12,
  },
];

const isMobile = ref(window?.innerWidth < 520);

// Function to determine if a card should have the even-column class
const isEvenColumn = (index: number) => {
  if (isMobile.value) {
    // Mobile: Cards 7-12 (indices 6-11) are "even-column"
    return index >= 6;
  } else {
    // Desktop: Groups of 3, where the second group in each pair gets even-column
    return Math.floor(index / 3) % 2 === 1;
  }
};

// Update isMobile on window resize
const handleResize = () => {
  isMobile.value = window?.innerWidth < 520;
};

onMounted(() => {
  isMobile.value = window?.innerWidth < 520;
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(6, 1fr);
  gap: 20px;
  justify-content: center;
  @apply px-4;
}

@media (min-width: 520px) {
  .grid-container {
    grid-template-rows: repeat(3, 1fr);
  }
}

.even-column {
  margin-top: 36px;
}
</style>
