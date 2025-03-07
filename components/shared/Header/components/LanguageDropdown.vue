<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        :variant="(buttonVariants as any) || 'outline'"
        :class="`gap-2 w-fit ${buttonClass}`"
      >
        <img :src="currentFlag" class="w-5 h-5" />
        {{ isHideLabel ? "" : currentLanguage }}
        <ChevronDown class="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem
        v-for="lang in languages"
        :key="lang.code"
        @click="setLocale(lang.code as any)"
        class="cursor-pointer"
      >
        <img :src="lang.flag" class="w-5 h-5 mr-2" />
        {{ lang.name }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script lang="ts" setup>
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/shared/dropdown-menu";
import { ChevronDown } from "lucide-vue-next";
import enFlag from "@/assets/us.png";
import viFlag from "@/assets/vn.png";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { locale } = useI18n();
const props = defineProps({
  buttonVariants: {
    type: String,
    default: "outline",
  },
  isHideLabel: {
    type: Boolean,
    default: false,
  },
  buttonClass: {
    type: String,
    default: "",
  },
});

const languages = [
  { code: "en", name: "English", flag: enFlag },
  { code: "vi", name: "Vietnamese", flag: viFlag },
];

const currentLanguage = computed(
  () => languages.find((l) => l.code === locale.value)?.name || "English"
);

const currentFlag = computed(
  () => languages.find((l) => l.code === locale.value)?.flag || enFlag
);

const setLocale = (newLocale: "en" | "vi") => {
  locale.value = newLocale;
  // Optional: Save to localStorage for persistence
  localStorage.setItem("locale", newLocale);
};
</script>

<style scoped>
/* Add any custom styling if needed */
</style>
