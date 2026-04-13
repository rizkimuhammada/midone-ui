<script setup lang="ts">
import { ref, provide } from "vue";
import type { TopMenuContext } from "./types";

const mobileMenuOpen = ref(false);

const openMobileMenu = (event: MouseEvent) => {
  event.preventDefault();
  mobileMenuOpen.value = true;
};

const closeMobileMenu = (event: MouseEvent) => {
  event.preventDefault();
  mobileMenuOpen.value = false;
};

provide<TopMenuContext>("topMenu", {
  mobileMenuOpen,
  openMobileMenu,
  closeMobileMenu,
});
</script>

<template>
  <div v-bind="$attrs">
    <slot />
  </div>
</template>
