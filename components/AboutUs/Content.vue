<template>
  <section class="about-us-content content-max-width">
    <div class="flex-1 px-4">
      <div class="main-content">
        <div class="title">
          <h2 class="text-[40px]">{{ t("about_us.main_content.title") }}</h2>
        </div>
        <div class="description">
          <p class="text-[#757575]">
            {{ t("about_us.main_content.description") }}
          </p>
        </div>
      </div>
      <div class="statistics">
        <div class="stat-item">
          <p class="text-[44px] font-bold text-[#079BEE]">
            600<span class="text-2xl">M</span>+
          </p>
          <p>{{ t("about_us.main_content.stats.users") }}</p>
        </div>
        <div class="stat-item">
          <p class="text-[44px] font-bold text-[#079BEE]">135+</p>
          <p>{{ t("about_us.main_content.stats.games") }}</p>
        </div>
      </div>
    </div>
    <div class="additional-info">
      <div class="info-item">
        <div
          class="bg-[#E3FCFF] rounded-full w-10 h-10 flex items-center justify-center shrink-0"
        >
          <img
            src="/assets/icons/calendar-tick.svg"
            width="20"
            height="20"
            alt="calendar-tick"
            class="w-5 h-5"
          />
        </div>
        <div class="flex flex-col gap-y-4">
          <p class="text-2xl font-bold">{{ t("about_us.overview.work_hours.title") }}</p>
          <p class="text-[#757575] text-sm">{{ t("about_us.overview.work_hours.description") }}</p>
        </div>
      </div>
      <div class="info-item">
        <div
          class="bg-[#E3FCFF] rounded-full w-10 h-10 flex items-center justify-center shrink-0"
        >
          <img
            src="/assets/icons/pen-tool-2.svg"
            width="20"
            height="20"
            alt="design"
            class="w-5 h-5"
          />
        </div>
        <div class="flex flex-col gap-y-4">
          <p class="text-2xl font-bold">{{ t("about_us.overview.design.title") }}</p>
          <p class="text-[#757575] text-sm">{{ t("about_us.overview.design.description") }}</p>
        </div>
      </div>
      <div class="info-item">
        <div
          class="bg-[#E3FCFF] rounded-full w-10 h-10 flex items-center justify-center shrink-0"
        >
          <img
            src="/assets/icons/people.svg"
            width="20"
            height="20"
            alt="people"
            class="w-5 h-5"
          />
        </div>
        <div class="flex flex-col gap-y-4">
          <p class="text-2xl font-bold">{{ t("about_us.overview.team.title") }}</p>
          <p class="text-[#757575] text-sm">{{ t("about_us.overview.team.description") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped>
.about-us-content {
  @apply flex flex-col sm:flex-row mb-10 sm:gap-x-10;
}

.main-content {
  @apply flex flex-col gap-y-4;
}

.main-content .title {
  @apply text-2xl font-bold mb-2;
}

.main-content .description {
  @apply text-base leading-6;
}

.statistics {
  @apply flex gap-x-14 my-10;
}

.stat-item {
  @apply text-center;
}

.stat-item .item {
  @apply space-y-4 flex flex-col;
}

.additional-info {
  @apply flex-1 flex flex-col gap-y-10 px-4 md:px-[75px] md:py-28 py-10 bg-gray-200;
}

.info-item {
  @apply w-full rounded flex gap-x-5 items-start;
}
</style>
