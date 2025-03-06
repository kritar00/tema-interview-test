<template>
  <div class="about-us-content">
    <div class="flex-1">
      <div class="main-content">
        <div class="title">
          <p>{{ t("about_us.main_content.title") }}</p>
        </div>
        <div class="description">
          <p>
            {{ t("about_us.main_content.description") }}
          </p>
        </div>
      </div>
      <div class="statistics">
        <div class="stat-item">
          <p>600m+</p>
          <p>{{ t("about_us.main_content.stats.users") }}</p>
        </div>
        <div class="stat-item">
          <p>135+</p>
          <p>{{ t("about_us.main_content.stats.games") }}</p>
        </div>
      </div>
    </div>
    <div class="additional-info">
      <div class="info-item"></div>
      <div class="info-item">{{ t("about_us.additional_info.item2") }}</div>
      <div class="info-item">{{ t("about_us.additional_info.item3") }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped>
.about-us-content {
  @apply flex flex-col sm:flex-row;
}

.main-content .title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.main-content .description {
  font-size: 16px;
  line-height: 1.5;
}

.statistics {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.stat-item {
  text-align: center;
}

.additional-info {
  @apply flex-1 flex-col;
}

.info-item {
  width: 30%;
  text-align: center;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
}
</style>
