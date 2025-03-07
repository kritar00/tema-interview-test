<template>
  <div class="overflow-x-hidden w-full">
    <div class="hero-container">
      <div class="hero-background">
        <img src="@/assets/hero-background.jfif" alt="Hero Background" />
      </div>

      <div class="content">
        <h1 class="title">We're Getting Ready</h1>

        <div class="flex flex-col items-center justify-center">
          <AboutUsCountdown />

          <div class="email-signup mt-12">
            <p class="pb-4">
              We will be back to something amazing. Get the latest updates about
              our games. Please sign up to our newsletter.
            </p>
            <div class="relative">
              <Input
                class="bg-white p-7 text-black"
                :placeholder="t('placeholders.email')"
              />
              <button><ArrowRight color="black" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shape-wrapper">
      <div class="shape">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="1440"
          height="150"
          preserveAspectRatio="none"
          viewBox="0 0 1440 150"
        >
          <g mask='url("#SvgjsMask1022")' fill="none">
            <path
              d="M 0,58 C 144,73 432,131.8 720,133 C 1008,134.2 1296,77.8 1440,64L1440 250L0 250z"
              fill="rgba(255, 255, 255, 1)"
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1022">
              <rect width="1440" height="250" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>
      </div>
    </div>
    <div class="wizard">
      <img src="@/assets/wizard.png" alt="Wizard" class="wizard-image" />
    </div>
  </div>
</template>

<script setup>
import { ArrowRight } from "lucide-vue-next";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped>
.hero-container {
  @apply relative w-full h-[606px] bg-[#1e1e1e] overflow-hidden;
}

.hero-background img {
  @apply w-full h-full object-cover opacity-50 absolute;
}

.content {
  @apply absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] text-center text-white z-10 mt-12;
}

.title {
  @apply text-[40px] font-[900] leading-[50px] mb-9;
}

.email-signup {
  @apply mb-5 max-w-[560px];
}

.email-signup button {
  @apply absolute top-1/2 right-0 transform translate-y-[-50%] p-3;
}

.shape-wrapper {
  position: relative !important;
  z-index: 50;
}

.shape {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
}

.shape svg {
  width: 100%;
  height: auto;
}

.wizard {
  @apply h-[210px] w-full relative;
}

.wizard > img {
  @apply absolute bottom-8 right-1/2 translate-x-[70%] w-[315px];
  z-index: 50;
}
</style>
