<template>
  <template>
    <div class="grid-container">
      <div v-for="(col, colIndex) in columns" :key="colIndex"
        :class="['column', { 'even-column': colIndex % 2 === 1 }]">
        <Card v-for="game in col" :key="game.title" :title="game.title" :description="game.description"
          :image="game.image" />
      </div>
    </div>
  </template>
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

const numCardsPerColumn = ref(3);
const numColumns = computed(() => Math.ceil(games.length / numCardsPerColumn.value));
const columns = ref<any[]>([]);
for (let i = 0; i < numColumns.value; i++) {
  const start = i * numCardsPerColumn.value;
  const end = start + numCardsPerColumn.value;
  columns.value.push(games.slice(start, end));
}

const isMobile = ref(window?.innerWidth < 520);

watch(() => isMobile.value, () => {
  console.log('I ran');
  numCardsPerColumn.value = isMobile.value ? 6 : 3;
  columns.value = [];
  for (let i = 0; i < numColumns.value; i++) {
    const start = i * numCardsPerColumn.value;
    const end = start + numCardsPerColumn.value;
    columns.value.push(games.slice(start, end));
  }
})

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
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  justify-content: center;
  @apply px-4;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.even-column {
  margin-top: 36px;
}
</style>
